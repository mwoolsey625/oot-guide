"""Build research/ledger.json: the vanilla completeness ledger for the OoT guide.

Sources (all local, exact):
  research/sources/LocationList.py   location name, type, vanilla item, filter tags
  research/sources/world/*.json      region graph + per-location logic (vanilla dungeons only)
  research/sources/LogicHelpers.json helper aliases (is_child, can_use, can_play, ...)

Age requirement method: for each age separately, walk the region graph from "Root"
with a maximal inventory (every item and event counts as owned), no tricks/glitches,
and vanilla-like settings. A location is "child" if only child can satisfy region
reachability + its own rule, "adult" if only adult, "either" if both, "unknown" if
neither (or the location has no logic entry). This answers "which age can ever get
this", not "what is the earliest point".

Run:  python tools/build_ledger.py   (from anywhere)
"""
import ast
import importlib.util
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
if not (ROOT / "research" / "sources").is_dir():   # run from outside the repo (e.g. a scratch copy)
    ROOT = Path(r"C:/Users/Mark Woolsey/Dev/oot-guide")
SRC = ROOT / "research" / "sources"
OUT = ROOT / "research" / "ledger.json"
PROBLEMS = []

# --------------------------------------------------------------------------- loading


def load_location_table():
    spec = importlib.util.spec_from_file_location("LocationList", SRC / "LocationList.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.location_table


def strip_json_comments(text):
    """Remove '#' comments that sit outside JSON strings (randomizer JSON allows them)."""
    out, in_str, esc, i = [], False, False, 0
    while i < len(text):
        c = text[i]
        if in_str:
            out.append(c)
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
        elif c == '"':
            in_str = True
            out.append(c)
        elif c == "#":
            while i < len(text) and text[i] != "\n":
                i += 1
            continue
        else:
            out.append(c)
        i += 1
    return "".join(out)


def load_json(path):
    return json.loads(strip_json_comments(path.read_text(encoding="utf-8")), strict=False)


# --------------------------------------------------------------------------- rule engine


class Item:
    """An owned item/event. Truthy; equality by name so `item == Bow` works in helpers."""

    def __init__(self, name):
        self.name = name

    def __bool__(self):
        return True

    def __eq__(self, other):
        return isinstance(other, Item) and other.name == self.name

    def __hash__(self):
        return hash(self.name)

    def __repr__(self):
        return f"Item({self.name})"


# Vanilla-like settings. Anything lowercase not listed here and not a helper is a
# trick/glitch/setting flag and evaluates False (see UNKNOWN_LOWER for a report).
SETTINGS = {
    "starting_age": "child",
    "open_forest": "closed",
    "open_kakariko": "closed",
    "open_door_of_time": "sot",
    "zora_fountain": "closed",
    "gerudo_fortress": "normal",
    "bridge": "vanilla",
    "lacs_condition": "vanilla",
    "shuffle_ganon_bosskey": "vanilla",
    "damage_multiplier": "normal",
    "deadly_bonks": "none",
    "hints": "agony",
    "skip_reward_from_rauru": "not_free",
    "dungeon_shortcuts": [],
    "skipped_trials": type("NoTrialsSkipped", (), {"__getitem__": lambda self, k: False})(),
    "child": "child", "adult": "adult", "both": "both", "either": "either",
}
UNKNOWN_LOWER = Counter()
TIME_NAMES = {"at_night", "at_day", "at_dampe_time"}

CONST_FUNCS = {
    # inventory-count / reward-count style checks: with a maximal inventory they pass
    "has_soul": True, "has_stones": True, "has_medallions": True,
    "has_dungeon_rewards": True, "has_hearts": True, "has_bottle": True,
    "has_all_notes_for_song": True, "can_live_dmg": True,
    "region_has_shortcuts": False,
}


class _DeferMeta(ast.NodeTransformer):
    """here(rule) / at('Region', rule): turn the rule argument into source text so the
    engine can evaluate it for either age (the randomizer treats these sub-rules as
    region events any age may satisfy, e.g. a child plants a bean the adult then rides)."""

    def visit_Call(self, node):
        self.generic_visit(node)
        if isinstance(node.func, ast.Name) and node.func.id in ("here", "at") and node.args:
            node.args[-1] = ast.Constant(ast.unparse(node.args[-1]))
        return node


def defer_meta_rules(src):
    tree = _DeferMeta().visit(ast.parse(src.strip(), mode="eval"))
    return ast.unparse(tree)


class Engine:
    def __init__(self, helpers):
        self.alias = {}   # name -> compiled body
        self.funcs = {}   # name -> (params, compiled body)
        for key, body in helpers.items():
            m = re.match(r"^(\w+)\((.*)\)$", key)
            code = compile("(" + body + ")", f"<helper {key}>", "eval")
            if m:
                params = [p.strip() for p in m.group(2).split(",") if p.strip()]
                self.funcs[m.group(1)] = (params, code)
            else:
                self.alias[key] = code
        self.cache = {}
        self.reach = {"child": set(), "adult": set()}   # filled by the fixpoint walk
        self.region = None                              # region the current rule sits in

    def evaluate(self, rule, age, region=None):
        code = self.cache.get(rule)
        if code is None:
            code = compile(defer_meta_rules("(" + rule + ")"), "<rule>", "eval")
            self.cache[rule] = code
        saved = self.region
        if region is not None:
            self.region = region
        try:
            return bool(eval(code, {"__builtins__": {}}, Namespace(self, age, {})))
        finally:
            self.region = saved

    def at(self, region, rule_src):
        """True if some age that can reach `region` satisfies `rule_src` there."""
        return any(region in self.reach[a] and self.evaluate(rule_src, a, region)
                   for a in ("child", "adult"))


class Namespace(dict):
    def __init__(self, engine, age, local):
        super().__init__()
        self.engine, self.age, self.local = engine, age, local

    def __missing__(self, name):
        eng = self.engine
        if name in self.local:
            return self.local[name]
        if name == "age":
            return self.age
        if name in ("True", "False", "None"):
            return {"True": True, "False": False, "None": None}[name]
        if name in TIME_NAMES:
            return True  # time-of-day is reported separately via nightReq
        if name == "at":
            return lambda region, rule_src: eng.at(region, rule_src)
        if name == "here":
            return lambda rule_src: eng.at(eng.region, rule_src)
        if name in CONST_FUNCS:
            val = CONST_FUNCS[name]
            return lambda *a, _v=val: _v
        if name in eng.funcs:
            params, code = eng.funcs[name]

            def fn(*args, _p=params, _c=code):
                return eval(_c, {"__builtins__": {}}, Namespace(eng, self.age, dict(zip(_p, args))))
            return fn
        if name in eng.alias:
            return eval(eng.alias[name], {"__builtins__": {}}, Namespace(eng, self.age, {}))
        if name in SETTINGS:
            return SETTINGS[name]
        if name[:1].isupper():
            return Item(name)      # item or event: owned
        UNKNOWN_LOWER[name] += 1
        return False                # trick / glitch / unlisted setting: off


# --------------------------------------------------------------------------- world


def load_world():
    regions = {}
    loc_rules = {}      # location -> list of (region, rule, file)
    for path in sorted((SRC / "world").glob("*.json")):
        for reg in load_json(path):
            name = reg["region_name"]
            if name in regions:
                PROBLEMS.append(f"Region '{name}' defined twice (second in {path.name})")
            regions[name] = reg
            reg["_file"] = path.name
            for loc, rule in (reg.get("locations") or {}).items():
                loc_rules.setdefault(loc, []).append((name, " ".join(rule.split()), path.name))
    return regions, loc_rules


def _walk(engine, regions, age):
    seen, stack = {"Root"}, ["Root"]
    while stack:
        reg = regions.get(stack.pop())
        if reg is None:
            continue
        for target, rule in (reg.get("exits") or {}).items():
            if target in seen:
                continue
            try:
                ok = engine.evaluate(rule, age, reg["region_name"])
            except Exception as e:  # noqa: BLE001
                PROBLEMS.append(f"Exit rule error {reg['region_name']} -> {target}: {e}")
                ok = False
            if ok:
                seen.add(target)
                stack.append(target)
    return seen


def compute_reach(engine, regions):
    """Walk both ages repeatedly until stable, because at()/here() in one age's exits
    depend on what the other age (or the same age elsewhere) can reach."""
    for _ in range(20):
        new = {age: _walk(engine, regions, age) for age in ("child", "adult")}
        if new == engine.reach:
            return
        engine.reach = new
    PROBLEMS.append("Region reachability did not converge in 20 passes")


def compute_event_ages(engine, regions):
    """event name -> set of ages that can trigger it (region reachable + rule true)."""
    out = {}
    for name, reg in regions.items():
        for event, rule in (reg.get("events") or {}).items():
            for age in ("child", "adult"):
                if name in engine.reach[age]:
                    try:
                        if engine.evaluate(" ".join(rule.split()), age, name):
                            out.setdefault(event, set()).add(age)
                    except Exception as e:  # noqa: BLE001
                        PROBLEMS.append(f"Event rule error '{event}': {e}")
            out.setdefault(event, set())
    return out


# --------------------------------------------------------------------------- selection

EXCLUDED_TYPES = {
    "Pot", "Crate", "SmallCrate", "FlyingPot", "Beehive", "Wonderitem", "RupeeTower",
    "Freestanding",       # loose rupees / recovery hearts: randomizer-only shuffle
    "SilverRupee", "Hint", "HintStone", "Drop", "Event", "MaskShop",
}
EXCLUDED_NAMES = {
    "Gift from Sages",                      # randomizer-only (Ganon boss key gift)
    "Market Bombchu Bowling Bombchus",      # repeatable consumable prize
    "Market Bombchu Bowling Bomb",          # repeatable consumable prize
    "Market Treasure Chest Game Salesman",  # randomizer key-shuffle construct
}
SHOP_KEEP = re.compile(r"Shield|Tunic")
TRADE_ITEMS = {
    "Weird Egg", "Pocket Egg", "Cojiro", "Odd Mushroom", "Odd Potion", "Poachers Saw",
    "Broken Sword", "Prescription", "Eyeball Frog", "Eyedrops", "Claim Check",
}


def make_id(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def classify(name, ltype, item, tags):
    """Return ledger type, or None to drop. Second value is the drop reason."""
    if name in EXCLUDED_NAMES:
        return None, "excluded-name"
    if ltype in EXCLUDED_TYPES:
        return None, f"type:{ltype}"
    if "Master Quest" in tags and "Vanilla Dungeons" not in tags:
        return None, "mq-only"
    if name.startswith("Market Treasure Chest Game Room"):
        return None, "tcg-room-chest"  # contents are random in the vanilla game
    if ltype == "Boss":
        return "dungeon-reward", ""
    if ltype == "BossHeart":
        return "heart-container", ""
    if ltype == "Song":
        return "song", ""
    if ltype == "GS Token":
        return "gold-skulltula", ""
    if ltype == "Chest":
        return "chest", ""
    if ltype == "Collectable":
        if item and item.startswith("Piece of Heart"):
            return "freestanding-poh", ""
        if item and item.startswith("Small Key"):
            return "freestanding-key", ""
        return None, f"collectable:{item}"
    if ltype == "Cutscene":
        return ("great-fairy" if "Great Fairies" in tags else "npc-reward"), ""
    if ltype == "NPC":
        if "Cows" in tags:
            return "cow", ""
        if item in TRADE_ITEMS or " Trade " in f" {name} " or name.startswith("Kak Granny Trade"):
            return "trade", ""
        if "Minigames" in tags:
            return "minigame", ""
        return "npc-reward", ""
    if ltype in ("Scrub", "GrottoScrub"):
        if "Deku Scrub Upgrades" in tags or (item and "Piece of Heart" in item):
            return "scrub-upgrade", ""
        return None, "scrub-consumable"
    if ltype == "Shop":
        if item and SHOP_KEEP.search(item):
            return "shop-equipment", ""
        return None, "shop-consumable"
    return None, f"unhandled-type:{ltype}"


# --------------------------------------------------------------------------- main


def main():
    table = load_location_table()
    helpers = load_json(SRC / "LogicHelpers.json")
    engine = Engine(helpers)
    regions, loc_rules = load_world()

    compute_reach(engine, regions)
    reach = engine.reach
    event_ages = compute_event_ages(engine, regions)
    event_by_ident = {e.replace(" ", "_"): e for e in event_ages}
    event_by_ident.update({e: e for e in event_ages})

    ledger, dropped = [], Counter()
    seen_ids = {}
    for name, (ltype, _scene, _default, _addr, item, tags) in table.items():
        tags = (tags,) if isinstance(tags, str) else tuple(tags or ())
        kind, why = classify(name, ltype, item, tags)
        if kind is None:
            dropped[why] += 1
            continue
        lid = make_id(name)
        if lid in seen_ids:
            PROBLEMS.append(f"ID collision: '{name}' and '{seen_ids[lid]}' -> {lid}")
        seen_ids[lid] = name

        rules = loc_rules.get(name, [])
        logic = " || ".join(f"[{r}] {rule}" for r, rule, _f in rules)
        ages = set()
        for region, rule, _f in rules:
            # A rule that is only an event (e.g. 'Defeat Twinrova', 'King Zora Thawed')
            # is collected the moment that event fires, so it inherits the event's ages.
            m = re.fullmatch(r"'([^']+)'|([A-Z]\w*)", rule.strip())
            single_event = m and event_by_ident.get(m.group(1) or m.group(2))
            for age in ("child", "adult"):
                if region not in reach[age]:
                    continue
                if single_event:
                    if age in event_ages[single_event]:
                        ages.add(age)
                    continue
                try:
                    if engine.evaluate(rule, age, region):
                        ages.add(age)
                except Exception as e:  # noqa: BLE001
                    PROBLEMS.append(f"Location rule error '{name}': {e}")
        if not rules:
            PROBLEMS.append(f"No world logic entry for '{name}' (ageReq unknown)")
        age_req = ("either" if len(ages) == 2 else ages.pop() if ages else "unknown")
        if rules and age_req == "unknown":
            PROBLEMS.append(f"'{name}' unreachable for both ages under the evaluator")
        night = any(re.search(r"\bat_night\b|\bat_dampe_time\b", rule) for _r, rule, _f in rules)
        day = any(re.search(r"\bat_day\b", rule) for _r, rule, _f in rules)
        out_tags = list(tags)
        if night:
            out_tags.append("night")
        if day:
            out_tags.append("day")
        if item and item.startswith("Piece of Heart"):
            out_tags.append("piece-of-heart")
        if item and "Out of Logic" in item:
            out_tags.append("out-of-logic")  # not part of the vanilla 36; see 08-ledger.md
        ledger.append({
            "id": lid,
            "name": name,
            "type": kind,
            "vanillaItem": item,
            "area": tags[0] if tags else "unknown",
            "tags": out_tags,
            "ageReq": age_req,
            "nightReq": night,
            "logic": logic,
            "region": [r for r, _rule, _f in rules],
            "logicFile": sorted({f for _r, _rule, f in rules}),
            "source": "LocationList.py" + (" + world/" + ", world/".join(sorted({f for _r, _rule, f in rules})) if rules else ""),
        })

    # world locations with no LocationList entry (informational)
    for loc in loc_rules:
        if loc not in table:
            PROBLEMS.append(f"world/*.json location '{loc}' not in LocationList.py")

    OUT.write_text(json.dumps(ledger, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    stats = {
        "total": len(ledger),
        "byType": Counter(e["type"] for e in ledger),
        "byArea": Counter(e["area"] for e in ledger),
        "byAge": Counter(e["ageReq"] for e in ledger),
        "night": sum(e["nightReq"] for e in ledger),
        "gs": sum(e["type"] == "gold-skulltula" for e in ledger),
        "poh": sum((e["vanillaItem"] or "").startswith("Piece of Heart")
                   and "out-of-logic" not in e["tags"] for e in ledger),
        "pohOutOfLogic": [e["name"] for e in ledger if "out-of-logic" in e["tags"]],
        "hc": sum(e["vanillaItem"] == "Heart Container" for e in ledger),
        "dropped": dropped,
        "unknownLower": UNKNOWN_LOWER,
        "problems": PROBLEMS,
        "reachChild": len(reach["child"]),
        "reachAdult": len(reach["adult"]),
        "regions": len(regions),
    }
    stats_path = Path(sys.argv[1]) if len(sys.argv) > 1 else None
    if stats_path:
        stats_path.write_text(json.dumps(stats, indent=2, default=dict), encoding="utf-8")
    print(json.dumps({k: v for k, v in stats.items() if k not in ("byArea",)}, indent=1, default=dict))


if __name__ == "__main__":
    main()
