# OoT Guide — Project Brief (shared by every agent)

Repo root: `C:\Users\Mark Woolsey\Dev\oot-guide`. Static site, hosted later on GitHub Pages.
Plain HTML/CSS/JS, no build step, no framework. It must open straight from disk
(`file://`), so data ships as `.js` files that assign globals — never `fetch()` JSON.

## The game we are guiding

**The Legend of Zelda: Ocarina of Time** remake for **Nintendo Switch 2**, releasing
**November 5, 2026** (announced Nintendo Direct, June 9 2026). It is a full remake, not a port.
Nobody has played it yet, so no source covers it. Our approach:

- **Baseline = the original game** (N64 / GameCube / 3DS share the same world, dungeons,
  and collectible set). Every location, count, and route fact comes from that baseline.
- **Remake layer** = only what Nintendo or hands-on previews have actually confirmed.
  Reported so far (verify, don't trust): manual jump button, sprint, right-stick camera,
  horizontal item menu, day/night that keeps running indoors and in towns, voiced NPCs,
  orchestral score, mic-hummed ocarina songs, a "Threads of Time" story log in the pause menu.
  Master Quest inclusion: unknown.
- Anything the remake might change (night-only events, timing, item handling, controls)
  is flagged on the step with a `remake` note so a post-launch pass can confirm it.
- Never present a remake detail as fact without a source. Never present the baseline as
  confirmed for the remake.
- **One text, two versions.** The site has a version setting (N64 / Switch 2), so people
  can play the original with it too. N64 hides `remake` notes; Switch 2 shows them and,
  once the remake's names are confirmed, swaps item names via `research/name-map.json`.
  So step text must read correctly on both: see "Write for both versions" below.

## Copyright rule (the site is public)

Extract **facts** (what, where, requirements, order, counts). Write all guide prose in our
own words. Never paste or lightly reword sentences from a source walkthrough.

## Canonical IDs

Every check comes from the OoT Randomizer location list, saved locally:
`research/sources/LocationList.py` (vanilla item per location, location type, area tags) and
`research/sources/world/*.json` (age/time/item logic per region). Use these files — they are
exact; WebFetch summaries are not.

**ID rule:** take the randomizer location name, lowercase it, replace every run of
non-alphanumerics with `-`, trim dashes.
`"KF GS Know It All House"` → `kf-gs-know-it-all-house`.
Things with no randomizer location (bosses, enemies, side-quest steps, masks sold in the
shop) use a readable slug with a type prefix: `boss-gohma`, `enemy-deku-baba`, `mask-keaton`.

## Chapters (fixed IDs — titles may be polished, IDs may not change)

| ID | Working title | Era |
|---|---|---|
| c01-deku-tree | Kokiri Forest & Inside the Great Deku Tree | child |
| c02-hyrule-castle | Hyrule Field, Lon Lon Ranch & the Princess | child |
| c03-kakariko-lost-woods | Kakariko, Lost Woods & Death Mountain | child |
| c04-dodongos-cavern | Dodongo's Cavern | child |
| c05-jabu-jabu | Zora's Domain & Jabu-Jabu's Belly | child |
| c06-temple-of-time | The Door of Time (+ child collectible sweep before it) | child |
| c07-forest-temple | Seven Years Later & the Forest Temple | adult |
| c08-fire-temple | Death Mountain Crater & the Fire Temple | adult |
| c09-ice-cavern | Zora's Fountain & the Ice Cavern | adult |
| c10-water-temple | Lake Hylia & the Water Temple | adult |
| c11-bottom-of-well | Kakariko & the Bottom of the Well | child (trip back) |
| c12-shadow-temple | The Shadow Temple | adult |
| c13-spirit-temple | Desert Colossus & the Spirit Temple | both |
| c14-ganons-castle | Ganon's Castle & the Finale | adult |

Collectible sweeps and side quests go **inside** chapters as `sweep`/`sidequest` sections,
placed at the earliest point the player has everything needed. Era is set per section, so
child trips back in time inside adult chapters are fine.

## Data schema

All files are in `data/`. Each file begins with `window.OOT = window.OOT || {};`.

### `data/walkthrough-child.js` (c01–c06) and `data/walkthrough-adult.js` (c07–c14)

```js
OOT.walkthrough = OOT.walkthrough || [];
OOT.walkthrough.push({
  id: "c01-deku-tree", num: 1, title: "…", era: "child",
  summary: "One or two sentences: what this chapter accomplishes.",
  needs: ["What the player must already have"],      // may be []
  gains: ["Kokiri Sword", "Deku Shield", "Kokiri's Emerald"],
  sections: [{
    id: "c01-s01", title: "Kokiri Forest", era: "child",
    kind: "overworld",            // overworld | dungeon | boss | sweep | sidequest
    steps: [{
      id: "c01-s01-01",
      text: "Instruction in our own words. **Bold** marks key items/places.",
      collect: ["kf-gs-know-it-all-house"],  // canonical IDs gained at this step; [] if none
      tip: "",                     // optional: helpful, non-essential
      warn: "",                    // optional: missable / point of no return / trap
      time: "",                    // optional: "night" | "day"
      remake: ""                   // optional: how a confirmed/possible remake change affects this
                                   //   (hidden when the reader picks N64)
    }]
  }],
  boss: { id: "boss-gohma", name: "Parasitic Armored Arachnid Gohma",
          weakness: "…", strategy: ["…", "…"] }   // null when the chapter has no boss
});
```

### `data/collectibles.js`

```js
OOT.collectibles = [{
  id: "gold-skulltulas", name: "Gold Skulltula Tokens", total: 100,
  note: "Reward table / why it matters",
  items: [{
    id: "kf-gs-know-it-all-house", name: "Know-It-All Brothers' House (back wall)",
    area: "Kokiri Forest", age: "child",        // child | adult | either
    time: "night",                              // night | day | any
    requires: ["Boomerang"],                    // items/songs needed; [] if none
    how: "Short location + method, own words",
    chapter: "c03-kakariko-lost-woods", step: "c03-s04-02",   // where the walkthrough gets it
    missable: false, remake: ""
  }]
}];
```

Required categories (more are welcome): gold-skulltulas (100), heart-pieces (36),
heart-containers (8), songs (12 + Scarecrow's Song), spiritual-stones (3), medallions (6),
inventory-items, equipment (swords, shields, tunics, boots), upgrades (wallets, quivers,
bomb bags, seed bags, Deku capacity, strength, scale, magic, Double Defense, Stone of Agony),
bottles (4), great-fairies, big-poes (10), magic-beans (10 soil patches),
masks (Happy Mask Shop), adult-trade (Biggoron Sword sequence), skulltula-rewards.

### `data/reference.js`

```js
OOT.reference = {
  songs:     [{ id, name, notes: "A ↓ → ←", effect, learnedFrom, chapter }],  // "A" + arrows only
  bosses:    [{ id, name, location, weakness, strategy: [] }],
  bestiary:  [{ id, name, locations: [], weakness, notes }],
  minigames: [{ id, name, location, age, cost, rewards: [] }],
  sidequests:[{ id, name, summary, steps: [], rewards: [] }],
  remake:    { confirmed: [{ fact, source }], unconfirmed: [{ claim, source }],
               guideImpacts: [{ area, impact }] }
};
```

## Style guide (applies to every word of guide text)

- Second person, imperative, present tense: "Climb the vines, then roll into the boulder."
- A step is one objective at one place, the way a player would name it: "get the Kokiri
  Sword", "clear Mido's House", "beat the Deku Scrub trio". Fold getting there, menu work
  (equipping, assigning items), buying what the objective needs and short set-up into the
  step they serve, or into its `tip`. Never write a step that is only movement, a menu, or
  a cutscene. A step may gain several checks; list them all in `collect`.
- Sections hold about 4–6 steps. Past 7, merge steps or split the section at a natural
  break (a new room cluster, a floor, a trip). Steps run 1–3 sentences.
  (Owner decision, Oct 6 2026: fewer, rolled-up checkboxes per section, as in the Waypoint
  sample, not the 9-step Kokiri Forest section of the Almanac sample.)
- **Bold** only item names, song names, and named places on first mention in a step.
- Directions relative to how the player enters the room ("on your left as you enter"),
  plus a landmark. Compass directions only where the in-game map shows them.
- Numbers as digits ("3 Deku Babas", "50 Rupees"). Rupee costs always written "X Rupees".
- Item names exactly as the original English game spells them (Fairy Slingshot,
  Megaton Hammer, Bombchus, Lens of Truth, Gold Skulltula, Piece of Heart).
- **Write for both versions.** The same text serves N64 and Switch 2 readers, and the
  remake's controls are unknown until launch. Never name a button or input (A, B,
  C-buttons, Z, L, R, Start, Control Stick, ZL/ZR, Z-targeting): describe the action
  instead ("target the Deku Scrub", "roll into the boulder", "raise your shield",
  "use the **Boomerang**", "play **Zelda's Lullaby**"). Refer to songs by name, not notes.
- Where specific notes are unavoidable (Scarecrow's Song, an ocarina memory game), write
  them as a token in the same notation as `reference.songs[].notes`: `{notes:A ↓ → ↓}`
  ("A" plus arrows, space-separated). The site draws it per version.
- If a technique may work differently in the remake (it reportedly adds a jump button),
  state the goal ("jump across to the ledge") and put the difference in `remake`. Only
  `remake` notes may name remake controls.
- `warn` is reserved for: missable content, points of no return, one-way doors, traps that
  cost items. `tip` is for optional help.
- No hype, no jokes, no "simply". Neutral and exact.

## Research file convention

Research agents write Markdown to `research/NN-topic.md`: facts, in order, each fact tagged
with its source URL (or `LocationList.py` / `world/X.json`). Note every conflict between
sources explicitly under a `## Conflicts` heading rather than silently picking one.
