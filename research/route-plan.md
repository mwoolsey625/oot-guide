# Route plan — 100% order for the walkthrough compilers

Companion to `research/route-plan.json` (456 entries: all 410 ledger checks exactly once, plus
46 non-ledger collectibles and events). Each JSON entry's `sectionHint` starts with the section
number used below (`s01 …`), so `c05` + `s07` = `c05-s07`. The JSON array is in route order.

Baseline game only (N64/GC/3DS). Nothing here is confirmed for the Switch 2 remake.

Sources used: `08-ledger.md` + `ledger.json` (what exists, logic), `01-zd-child.md`,
`02-zd-adult.md` (ZD route), `03-crosscheck.md` (StrategyWiki = SW, GameFAQs Lando_Kashmir =
GF-LK), `04`–`07` (collectible files), `09`/`10` for warnings only. Owner rules: **A** (decomp numbers
/ OoTR requirements / walkthrough method and order), **B** (vanilla over randomizer settings),
**C** (original N64 English names).

Checked by script (all pass): every ledger ID once; Gold Skulltula count per chapter sums to
100; each House of Skulltula reward sits after enough tokens; 36 Pieces of Heart routed
(`gf-freestanding-poh` listed but not routed); no child-only ledger check in an adult section
or the reverse.

## Checkpoints

| End of | GS tokens (running) | Pieces of Heart (running) | Skulltula rewards claimed |
|---|---:|---:|---|
| c01 | 3 | 0 | — |
| c02 | 7 | 2 | — |
| c03 | 17 | 7 | 10 (Adult's Wallet) in c03-s03 at 13 tokens |
| c04 | 24 | 10 | 20 (Stone of Agony) in c04-s05 at 24 |
| c05 | 34 | 16 | — |
| c06 | 44 | 19 | 30 (Giant's Wallet) in c06-s02 at 35 |
| c07 | 54 | 22 | 40 (Bombchus) in c07-s04 at 46 |
| c08 | 65 | 26 | 50 (Piece of Heart) in c08-s01 at 54 |
| c09 | 71 | 29 | — |
| c10 | 78 | 29 | — |
| c11 | 83 | 32 | — |
| c12 | 88 | 33 | — |
| c13 | 99 | 36 | — |
| c14 | 100 | 36 | 100 (Huge Rupee) in c14-s02 |

GS per chapter: c01 3 · c02 4 · c03 10 · c04 7 · c05 10 · c06 10 · c07 10 · c08 11 · c09 6 ·
c10 7 · c11 5 · c12 5 · c13 11 · c14 1. This differs from 04's proposal (c05 8, c08 9, c13 14,
c14 0) only where this plan moves a GS to an earlier visit (D-08, D-10) or keeps #100 last (D-13).

---

## c01-deku-tree — Kokiri Forest & Inside the Great Deku Tree (child)

**Inventory at start:** Kokiri Tunic, Kokiri Boots. 3 hearts.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Kokiri Forest | overworld | child | Kokiri Sword, Mido's 4 chests, Deku Shield (40 Rupees), first Deku Sticks / Nuts |
| s02 | Inside the Deku Tree | dungeon | child | 6 chests, Fairy Slingshot, 3 of 4 GS |
| s03 | Queen Gohma | boss | child | Kokiri's Emerald, Heart Container |

- Deferred: `deku-tree-gs-basement-back-room` needs Bombs + Boomerang → c06-s03.
- `kf-storms-grotto-chest` needs the Song of Storms → c07-s05 (adult).
- `deku-tree-basement-chest`: ZD gives no position; compiler needs a second source.
- Warn: the Slingshot-room platform falls behind you; the boss door seals.

**Gains:** Kokiri Sword, Deku Shield, Fairy Slingshot (30 seeds), Kokiri's Emerald, +1 heart.

## c02-hyrule-castle — Hyrule Field, Lon Lon Ranch & the Princess (child)

**Inventory at start:** c01 gains.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Leaving the forest | overworld | child | Fairy Ocarina from Saria on the bridge |
| s02 | Hyrule Field to the Market | overworld | child | Open grotto chest, guard-house GS, Shooting Gallery (day), optional Hylian Shield |
| s03 | Hyrule Castle grounds | overworld | child | Weird Egg, owl-tree GS |
| s04 | Market at night | sidequest | child | Lost dog Piece of Heart while the egg waits for dawn |
| s05 | The Princess | overworld | child | Egg hatches → wake Talon → Zelda's Letter → Zelda's Lullaby |
| s06 | Lon Lon Ranch | overworld | child | Epona's Song, Bottle (Talon), Piece of Heart, 4 cows, 2 GS (1 at night) |

- s04 sits between egg and hatch because the egg needs a dawn anyway, so the wait costs nothing.
  Compiler: confirm the cleanest way into the Market at night (the drawbridge closes at sunset;
  `03` notes time stands still inside town in the original).
- Hylian Shield: buying it (80 Rupees) is optional; the route takes the free one in c03-s02 (D-06).
- Remake flag: night gating, drawbridge timing, and the Shooting Gallery's day-only rule all
  depend on the clock, which the remake reportedly keeps running in towns (unconfirmed).

**Gains:** Fairy Ocarina, Zelda's Lullaby, Epona's Song, Bottle #1, Zelda's Letter (trade slot),
Deku Seed bag upgrade (Shooting Gallery), +2 Pieces of Heart.

## c03-kakariko-lost-woods — Kakariko, Lost Woods & Death Mountain (child)

**Inventory at start:** + Fairy Ocarina, Zelda's Lullaby, Epona's Song, 1 Bottle, Zelda's Letter.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Kakariko Village by day | overworld | child | Letter to the gate guard, Bottle #2 (Anju, day), open grotto chest |
| s02 | Kakariko Graveyard | sweep | child | Sun's Song first, then at night: free Hylian Shield, Piece of Heart grave, Dampé's tour, bug GS |
| s03 | Kakariko Village at night | sweep | child | 5 Kakariko GS; claim the 10-token Adult's Wallet |
| s04 | Death Mountain Trail | overworld | child | DMT Piece of Heart (drop or backflip) |
| s05 | Lost Woods | overworld | child | Memory game, target, stick-capacity scrub, 2 bug GS |
| s06 | Sacred Forest Meadow | overworld | child | Saria's Song |
| s07 | Lost Woods and Kokiri Forest return | sweep | child | Skull Kid Piece of Heart, KF bug GS, KF night GS |
| s08 | Goron City | overworld | child | Goron's Bracelet from Darunia |

- Route: Kakariko → graveyard → trail → Goron City (Darunia refuses; take the Lost Woods shortcut)
  → Lost Woods → Meadow → back through the shortcut to Darunia. This is SW's order; GF-LK's
  Saria-first order is equally legal, but SW's uses the shortcut both ways (route judgment).
- Sun's Song comes first in s02 so every night check in s02, s03 and s07 can be timed without
  waiting. Dampé's tour needs 18:00–21:00; the Sun's Song can overshoot (see 03 c03 warning).
- `kak-anju-as-child` needs daytime (logic `at_day`; neither walkthrough says so, C-19).
- Masks are **not** done here although the shop opens in s01 (D-04).
- Remake flags: Cucco round-up and glides, the DMT drop, Dampé window, all night GS.

**Gains:** Sun's Song, Saria's Song, Bottle #2, Hylian Shield, Adult's Wallet (200), Deku Stick
capacity (scrub), Deku Seed bag upgrade (target), Goron's Bracelet, +5 Pieces of Heart.

## c04-dodongos-cavern — Dodongo's Cavern (child)

**Inventory at start:** + Sun's Song, Saria's Song, 2 Bottles, Hylian Shield, Goron's Bracelet,
Adult's Wallet.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Death Mountain Trail | overworld | child | Bomb Flower opens the cavern; DMT bug GS |
| s02 | Dodongo's Cavern | dungeon | child | 6 chests incl. Bomb Bag, 3 GS |
| s03 | King Dodongo | boss | child | Goron's Ruby, Heart Container |
| s04 | Bombs on Death Mountain | sweep | child | Trail chest + GS, Goron City maze chests / GS / rolling Goron / urn PoH, cow grotto, Magic Meter, crater crate GS + wall PoH + upper grotto |
| s05 | Owl to Kakariko | sweep | child | Impa's House PoH + cow, ReDead grotto chest, 20-token Stone of Agony |

- s04 order: trail chest and bombable-wall GS → Goron City → summit (cow grotto, Great Fairy)
  → crater from the summit → owl from the summit to Impa's roof (s05).
- Magic Meter here is a hard prerequisite for every later Great Fairy (decomp; D-14).
- Alcove GS (`dodongos-cavern-gs-alcove-above-stairs`) needs the Boomerang → c06-s04;
  scarecrow GS needs adult + Scarecrow's Song → c08-s05.
- Warn: Fire Keese burn the Deku Shield (wear the Hylian Shield from c03).
- Stone of Agony is optional in vanilla: grottos open without it (rule B).

**Gains:** Bomb Bag (20) → 30 (rolling Goron), Goron's Ruby, Magic Meter (+ Spin Attack per ZD),
Stone of Agony, +1 heart, +3 Pieces of Heart. Bombchu Shop and Bombchu Bowling now open.

## c05-jabu-jabu — Zora's Domain & Jabu-Jabu's Belly (child)

**Inventory at start:** + Bombs, Magic Meter, Goron's Ruby, Stone of Agony.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Castle grounds and Market with Bombs | sweep | child | Din's Fire, Bombchu Bowling (2 prizes), optional Bombchus |
| s02 | Hyrule Field grottos | sweep | child | Near-market and southeast grotto chests, scrub-grotto PoH (10 Rupees) |
| s03 | Zora's River | overworld | child | Magic Beans (+ plant), tree GS, open grotto, 2 Cucco-glide PoH, 4 frog songs, night ladder GS |
| s04 | Zora's Domain | overworld | child | Torch-run PoH, Silver Scale (diving game) |
| s05 | Lake Hylia (child) | sweep | child | Ruto's Letter, Bonooru (Scarecrow child half), child fishing PoH, loach, bug GS, plant bean, night island GS |
| s06 | Zora's Domain and Zora's Fountain | overworld | child | Deliver the letter, fish for Jabu, tree GS, Farore's Wind |
| s07 | Inside Jabu-Jabu's Belly | dungeon | child | Boomerang, map, compass, 4 GS |
| s08 | Barinade | boss | child | Zora's Sapphire, Heart Container |
| s09 | Zora's Fountain at night | sweep | child | Log GS with the new Boomerang (blue warp lands here) |

- s05 holds every child Lake Hylia check because the letter forces this visit; SW's c02 side
  trip would be an extra crossing to a dead end (D-03).
- Beans: buy as many as you can afford now (10, 20, 30 … Rupees, decomp). Plant ZR now, LH in
  s05. The rest go in at c06 (KF, LW ×2, Graveyard, DMT, GV), c11 (DMC), c13 (Colossus). Buy the
  last ones at the river in c11-s02. Required beans for checks: LW theater, Graveyard, LH, DMC,
  Colossus (D-12).
- Frogs: 4 songs now; Song of Time frog waits for the c11 rain/ocarina-game visit (D-09).

**Gains:** Din's Fire, Farore's Wind, Silver Scale, Bottle #3 (Ruto's Letter, then empty),
Bomb Bag 40 (Bowling), Boomerang, Zora's Sapphire, Magic Beans, Scarecrow tune recorded,
+1 heart, +6 Pieces of Heart.

## c06-temple-of-time — The Door of Time (+ child collectible sweep) (child)

**Inventory at start:** + Boomerang, Din's Fire, Farore's Wind, Silver Scale, 3 Bottles,
3 Spiritual Stones.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Ocarina of Time | overworld | child | Ocarina of Time + Song of Time at the drawbridge |
| s02 | Keaton Mask run | sidequest | child | Borrow Keaton → near-Kakariko grotto GS → sell to the guard; windmill PoH (Boomerang); 30-token Giant's Wallet |
| s03 | Forest sweep with the Skull Mask | sweep | child | Theater (stick capacity) → Skull Kid sale; LW nut grotto + shortcuts grotto; beans LW ×2 + KF; SFM Wolfos grotto; Deku Tree back-room GS; LLR night GS ×2 |
| s04 | Kakariko, Graveyard and Death Mountain with the Spooky Mask | sweep | child | Sell Spooky (day); Royal Family's Tomb chest (Din's); night wall GS; beans Graveyard + DMT; DC alcove GS |
| s05 | South Hyrule sweep with the Bunny Hood | sweep | child | Running Man sale; Gerudo Valley (2 PoH, 2 GS, cow, bean); cow grotto GS + cow (Din's); lab-wall GS |
| s06 | Mask of Truth | sidequest | child | Mask of Truth (+ Goron, Zora, Gerudo masks), theater nut capacity |
| s07 | The Door of Time | overworld | child | Master Sword |

- Mask shop flow per section: each section ends at the Market to pay and borrow the next mask.
  The Bunny Hood sale fills the wallet, so the Giant's Wallet is claimed first (s02).
- `hf-gs-cow-grotto` is taken here as a child (Din's Fire burns the webs), SW's slot; GF-LK's
  adult Hammer slot is later than needed.
- **Warn (s06): Mask of Truth nut upgrade must come before the Poacher's Saw** (N64/GC bug,
  C-02; c08-s02 respects this). Remake behaviour unknown.
- **Warn (s07): point of no return.** Pulling the Master Sword locks Link in adult form until the
  Forest Temple is done. Child-only checks left after this point all need adult-era items:
  frogs (rain, ocarina game, Song of Time), castle storms-grotto GS, Treasure Chest Game (Lens),
  Bottom of the Well, DMC bean GS + bean, Colossus bean GS + bean, Spirit child half (→ c11, c13).
- Door of Time: SW opens it with the stones + Song of Time; ZD is silent; OoTR treats the
  condition as a setting. Vanilla follows SW (rules A and B; no route impact since the song is
  taught in s01).

**Gains:** Ocarina of Time, Song of Time, Giant's Wallet (500), Deku Stick 30, Deku Nut 30 → 40,
all 8 masks seen, 7 beans planted, Master Sword.

## c07-forest-temple — Seven Years Later & the Forest Temple (adult)

**Inventory at start:** adult; Master Sword, Hylian Shield (adult carries it), all child songs,
Ocarina of Time, Din's, Farore's, Bombs, Bombchus, 3 Bottles, Giant's Wallet, Goron's Bracelet,
Silver Scale, Stone of Agony.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Temple of Time, seven years later | overworld | adult | Light Medallion |
| s02 | Outside Ganon's Castle | sweep | adult | OGC GS (no item needed) |
| s03 | Lon Lon Ranch: Epona | sidequest | adult | Epona (2 Ingo races, day), Malon's obstacle course (<50 s) |
| s04 | Kakariko and the Graveyard (adult) | overworld | adult | Hookshot (Dampé race) + race PoH, bean-ride PoH, Song of Storms, roof PoH, night GS, Pocket Egg (day), 40-token reward |
| s05 | Kokiri Forest and the Lost Woods (adult) | sweep | adult | Storms grotto chest, Twins GS (night), Link's House cow, theater bean GS (night) |
| s06 | Sacred Forest Meadow (adult) | overworld | adult | Meadow GS (night), Minuet of Forest |
| s07 | Forest Temple | dungeon | adult | 13 chests incl. Fairy Bow, 5 GS |
| s08 | Phantom Ganon | boss | adult | Forest Medallion, Heart Container |
| s09 | Prelude of Light | overworld | adult | Sheik at the Temple of Time |
| s10 | Big Poe hunt | sidequest | adult | 10 Big Poes on Epona with the Fairy Bow → Bottle #4 |

- Song of Storms is learned in s04 (both walkthroughs do it right after the Hookshot; D-02).
- Warn: Forest Temple needs the Hookshot for the entrance ledge; Stalfos pairs revive; Wallmasters.
- Big Poes: present Epona as the method (C-03 in 07: decomp allows a 40% on-foot spawn, logic
  and walkthroughs use Epona). Spawn points `big-poe-hf-01`…`10` need map verification.
- Child trips are possible again after s08; this plan uses them only where a later chapter
  already needs a child visit (c11, c13).

**Gains:** Light + Forest Medallions, Epona, Hookshot, Song of Storms, Minuet, Prelude, Fairy
Bow (30), Pocket Egg (trade slot), Bottle #4, Bombchus (40-token reward), +1 heart,
+3 Pieces of Heart.

## c08-fire-temple — Death Mountain Crater & the Fire Temple (adult)

**Inventory at start:** + Hookshot, Fairy Bow, Epona, Song of Storms, Minuet, Prelude, 4 Bottles,
Pocket Egg.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Kakariko: rewards and the trade begins | sidequest | adult | 50-token PoH, adult Shooting Gallery (quiver), wake Talon, Cojiro |
| s02 | Biggoron's Sword trade, part 1 | sidequest | adult | Odd Mushroom (3:00) → Odd Potion (+ Blue Potion purchase) → Poacher's Saw |
| s03 | Lake Hylia (adult) and the Scarecrow's Song | sweep | adult | Pierre, Golden Scale, lab dive PoH, lab-roof bean PoH, Tektite grotto PoH |
| s04 | Gerudo Valley trade stop | sidequest | adult | Broken Goron's Sword (Epona jump), 2 night GS |
| s05 | Death Mountain Trail (adult) | overworld | adult | Prescription from Biggoron, storms grotto chest, DC scarecrow GS |
| s06 | Goron City (adult) | overworld | adult | Goron Tunic, center GS, Giant's Knife (200), optional tunic purchase |
| s07 | Death Mountain Crater | overworld | adult | Bolero of Fire |
| s08 | Fire Temple | dungeon | adult | 14 chests incl. Megaton Hammer, 5 GS |
| s09 | Volvagia | boss | adult | Fire Medallion, Heart Container |
| s10 | Megaton Hammer sweep | sweep | adult | Double Magic, Goron City left maze chest, 2 night trail GS |

- Pierre (s03) must precede s05 and s08: the DC scarecrow GS and the Fire Temple scarecrow
  chest + 2 GS need it. ZD visits Lake Hylia at the start of its chapter 8 (8.1); GF-LK does it
  before the Forest Temple. This plan follows ZD and also takes the Golden Scale, lab dive and
  lab-roof Piece of Heart on the same visit instead of in c10 (D-07).
- Trade part 1 ends at Biggoron (s05) on the way to the crater, so it costs one Lost Woods
  round trip plus a valley stop. Timer rules: no warp songs while a timed item is held; Farore's
  Wind drops the timer to its last second; a spoiled item reverts (decomp).
- `gc-gs-center-platform` has no night requirement (logic); ZD's night claim loses (rule A).
- Warn: Like Likes eat the Goron Tunic; wear the Goron Tunic in the boss room; Door Mimics.

**Gains:** Scarecrow's Song, Golden Scale, Goron Tunic, Giant's Knife, Bolero, Megaton Hammer,
Fire Medallion, Double Magic, Quiver 40, Prescription (trade slot), +1 heart, +4 Pieces of Heart.

## c09-ice-cavern — Zora's Fountain & the Ice Cavern (adult)

**Inventory at start:** + Megaton Hammer, Bolero, Goron Tunic, Golden Scale, Scarecrow's Song.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Zora's River (adult) | sweep | adult | 2 night GS (Hookshot) |
| s02 | Frozen Zora's Domain and Fountain | overworld | adult | Frozen-waterfall GS (night), iceberg PoH |
| s03 | Ice Cavern | dungeon | adult | Map, compass, PoH, 3 GS, Iron Boots, Serenade of Water |
| s04 | King Zora and the Fountain floor | overworld | adult | Zora Tunic (Blue Fire), optional tunic purchase, Fountain-floor PoH |
| s05 | Biggoron's Sword trade, part 2 | sidequest | adult | Eyeball Frog (3:00) → Eye Drops (4:00) → Claim Check → sword after 3 dawns |

- Trade part 2 sits here, not in c10 as 06/07 suggest: the Eye Drops leg runs through Kakariko,
  and after the Water Temple the burning-Kakariko cutscene fires on entry and would run the
  4:00 timer out (SW). Doing it now avoids that (D-11).
- Bring empty Bottles for Blue Fire (map chest, Iron Boots room routes, King Zora).

**Gains:** Iron Boots, Serenade, Zora Tunic, Biggoron's Sword, +3 Pieces of Heart.

## c10-water-temple — Lake Hylia & the Water Temple (adult)

**Inventory at start:** + Iron Boots, Zora Tunic, Serenade, Biggoron's Sword.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Lake Hylia (drained) | sweep | adult | Lab-crate GS (Iron Boots + Hookshot, any time) |
| s02 | Water Temple | dungeon | adult | 10 chests incl. Longshot, 5 GS |
| s03 | Morpha | boss | adult | Water Medallion, Heart Container |
| s04 | Lake Hylia refilled | sweep | adult | Fire Arrows (sunrise), night tree GS (Longshot) |

- `lh-gs-lab-crate` has no night requirement (logic); SW's night claim loses (C-09).
- Leaving c10 ends the safe window for the adult trade through Kakariko (see c09).

**Gains:** Longshot, Water Medallion, Fire Arrows, +1 heart.

## c11-bottom-of-well — Kakariko & the Bottom of the Well (child trip back)

**Inventory at start:** + Longshot, Fire Arrows, 3 adult medallions.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Kakariko in flames | overworld | adult | Nocturne of Shadow |
| s02 | Child trip: Song of Storms checks | sweep | child | Castle storms-grotto GS, frogs (rain PoH, Song of Time, ocarina game PoH), buy last beans, Bolero to the crater: bug GS + plant bean |
| s03 | Bottom of the Well | dungeon | child | Drain the well (Song of Storms, windmill), 14 chests + key, 3 GS, Lens of Truth |
| s04 | Treasure Chest Game | sidequest | child | Night, Lens of Truth → Piece of Heart |

- This is the first child trip that is already required (the well), so every child check that
  waited for the Song of Storms, the Lens or Bolero is gathered here (ZD 11.2 does the same).
- Bring Bugs for the crater soil.

**Gains:** Nocturne, Lens of Truth, DMC bean planted, Colossus bean in hand, +3 Pieces of Heart.

## c12-shadow-temple — The Shadow Temple (adult)

**Inventory at start:** + Nocturne, Lens of Truth.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Death Mountain Crater bean ride | sweep | adult | Volcano PoH from the c11 bean (Bolero) |
| s02 | Shadow Temple | dungeon | adult | 16 chests + freestanding key, Hover Boots, 5 GS |
| s03 | Bongo Bongo | boss | adult | Shadow Medallion, Heart Container |

- Din's Fire on the graveyard torch ring opens the temple.
- Warn: do not climb the caged vines on the ship; the boat sinks; Like Likes; Lens is required.

**Gains:** Hover Boots, Shadow Medallion, +1 heart, +1 Piece of Heart.

## c13-spirit-temple — Desert Colossus & the Spirit Temple (both)

**Inventory at start:** + Hover Boots, 4 adult medallions.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Gerudo Valley (adult) | overworld | adult | Hammer chest |
| s02 | Gerudo's Fortress: the carpenters | overworld | adult | 4 jail keys, Gerudo's Membership Card |
| s03 | Gerudo's Fortress extras | sweep | adult | Roof GS (night), roof chest (Longshot), Horseback Archery 1000 / 1500 (day), range GS (night) |
| s04 | Haunted Wasteland | overworld | adult | Carpet merchant Bombchus, GS, torch chest |
| s05 | Desert Colossus (adult) | overworld | adult | Requiem of Spirit, Nayru's Love, tree GS (night) |
| s06 | Child Colossus and the Spirit Temple (child half) | dungeon | child | Bug GS + plant bean, 7 child chests incl. Silver Gauntlets, 3 GS |
| s07 | Spirit Temple (adult half) | dungeon | adult | 15 adult chests incl. Mirror Shield, 2 GS |
| s08 | Twinrova | boss | adult | Spirit Medallion, Heart Container |
| s09 | Adult Colossus bean ride | sweep | adult | Arch PoH, hill GS (night) |
| s10 | Gerudo Training Ground | dungeon | adult | 21 chests + key, Ice Arrows |
| s11 | Running Man's marathon | sidequest | adult | Optional, no prize |

- Age hops: s05 Requiem → Prelude (child) → Requiem → s06 → Prelude (adult) → Requiem → s07.
- GTG needs the Silver Gauntlets, so it cannot come before s06; it is placed after the boss
  because the fortress is next to the Colossus (GF-LK after Spirit; ZD defers to c14) (D-13).
- `gf-freestanding-poh` is listed once in s02 for ledger completeness only: out-of-logic,
  child-only, glitch-only; not one of the 36; never route it (rule B).
- Warn: being seen in the fortress means the cell (Hookshot the window); leaving the Wasteland
  flags resets you; Iron Knuckles; ice-trap chests (Spirit first mirror left, GTG heavy block 4th).

**Gains:** Gerudo's Membership Card, Requiem, Nayru's Love, Silver Gauntlets, Mirror Shield,
Spirit Medallion, Ice Arrows, Quiver 50, +1 heart, +3 Pieces of Heart.

## c14-ganons-castle — Ganon's Castle & the Finale (adult)

**Inventory at start:** all 6 medallions; everything above.

| § | Title | Kind | Era | Purpose |
|---|---|---|---|---|
| s01 | Light Arrows | overworld | adult | Zelda's reveal at the Temple of Time |
| s02 | The last Gold Skulltula | sweep | adult | Zora's Fountain hidden cave (#100), 100-token reward |
| s03 | Ganon's Castle trials | dungeon | adult | 15 trial chests; Shadow trial first for the Golden Gauntlets |
| s04 | Great Fairy outside the castle | sweep | adult | Double Defense (lift the pillar) |
| s05 | Ganon's Tower | dungeon | adult | Boss Key chest, Ganondorf, Ganon |

- Warn: save before Ganondorf; no saving after the tower collapses; the final blow on Ganon
  must be the Master Sword. Five trial chests are ice traps.

**Gains:** Light Arrows, Golden Gauntlets, Double Defense. End state: 100 GS, 20 hearts.

---

## Decisions and conflicts settled

| # | Question | Sources | Decision | Why |
|---|---|---|---|---|
| D-01 | Overall dungeon order | SW = BRIEF order; GF-LK does Ice Cavern pre-Forest, BotW/GF pre-Fire (03 C-03) | BRIEF/SW order | Chapter IDs are fixed; GF-LK's early items are moved into the matching chapter sweeps instead. |
| D-02 | Song of Storms chapter | 06: c08; SW + GF-LK: right after the Hookshot; ZD: c11 "if not learned" | c07-s04 | Rule A (walkthroughs win on order); it also unlocks the KF storms grotto on the c07 forest trip and DMT's in c08. |
| D-03 | Child Lake Hylia visit | SW: c02 side trip; 06: Bonooru c05; 07: c03 | c05-s05 | Ruto's Letter forces this visit; folding fishing, Bonooru, bug GS and island GS into it removes a dead-end trip. |
| D-04 | Happy Mask Shop | GF-LK: first 4 masks before DC; 07: Keaton/Skull/Spooky c03 | All 8 masks in c06, interleaved with the sweep | The chain is strictly sequential and half of it needs the 3 stones; c06's sweep already visits Kakariko, the Graveyard, the Lost Woods and the Market, so doing it there saves 3 Market round trips. Cost: the Skull Mask stick upgrade arrives 3 chapters later. |
| D-05 | Child Gerudo Valley | SW: c02 side trip; 05: c02 → c06 | c06-s05, one visit | The small-bridge GS needs the Boomerang anyway; one valley trip instead of two. |
| D-06 | Hylian Shield | GF-LK buys (80); SW waits for the free grave (C-07); ZD price conflict (50/80/60) | Free grave, c03-s02, at night (logic: child pulls graves at night, C-08) | Free, and it lands before c04's Fire Keese. The Bazaar slot is listed as optional. |
| D-07 | Golden Scale, lab dive, lab-roof PoH | 06: c10; GF-LK: pre-Forest; ZD 8.1 | c08-s03 | Pierre forces an adult lake visit before the Fire Temple; the three checks need nothing more. |
| D-08 | GV adult night GS pair | 04: c13 | c08-s04 | The trade already takes Link to the carpenter's tent at night-capable time; same requirements. |
| D-09 | Frog for the Song of Time | earliest c06 | c11-s02 | Shares the c11 frog visit (rain + ocarina game); no separate river trip in c06. |
| D-10 | Zora's Fountain log GS | 04: c05; GF-LK: end of child | c05-s09 | The Barinade blue warp drops Link at the Fountain with the new Boomerang. |
| D-11 | Biggoron trade timing | 07: c09–c10+; 06: c10 | Part 1 c08, part 2 c09 | Blue Fire (c09) gates King Zora; after c10 the Kakariko cutscene interrupts the timed Eye Drops leg (SW). |
| D-12 | Which beans to plant | 05: 10 patches | All 10 planted (c05, c06, c11, c13) | 5 gate checks (LW theater, Graveyard, LH, DMC, Colossus); the other 5 complete the magic-beans category at no extra trip. |
| D-13 | GTG and GS #100 | ZD: both in c14; GF-LK: after Spirit | GTG c13-s10; GS #100 c14-s02 | GTG is next to the Colossus; #100 stays last in both walkthroughs and is followed by the 100 reward. |
| D-14 | Great Fairy order | ZD: only Din's needs the DMT fairy; decomp: all 5 others vanish without magic; OoTR: no rule | DMT fairy first (c04) | Rule A: decomp-derived behaviour wins. |
| D-15 | Impa's House PoH | 05: c03 Cucco glide; ZD + SW: owl drop after the summit | c04-s05 | Rule A: walkthroughs win on method. |
| D-16 | DMT PoH | SW/ZD: child backflip on the first climb; GF-LK: adult bean | c03-s04 (child) | Earliest; logic `can_take_damage` agrees (C-11). Method text needs a play check (05 conflict 7). |
| D-17 | Stone of Agony and grottos | OoTR gates bomb/storm grottos on it | Not required | Rule B: in vanilla it only rumbles. |
| D-18 | Door of Time | SW: stones + Song of Time; ZD silent; OoTR setting | Stones + Song of Time | Rule A/B; no route effect. |
| D-19 | `gf-freestanding-poh` | LL lists 37 PoH; ZD/ZW 36 | Listed, not routed | Rule B; 08 conflict 1. |
| D-20 | GS time-of-day disputes | ZD/SW night claims for `gc-gs-center-platform`, `lh-gs-lab-crate` | Any time | Rule A: OoTR logic decides requirements. |
| D-21 | `hf-gs-cow-grotto` age | SW: child with Din's; GF-LK: adult after Hammer | c06-s05 child | Earliest; logic accepts child + fire source + Boomerang. |
| D-22 | Spirit lobby GS / Shadow ship GS methods | ZD adds Scarecrow's Song | Logic minimum (Hookshot/Hover Boots; Longshot) | Rule A for requirements; ZD's method kept as a fallback tip. |
| D-23 | Odd Mushroom result name | LL "Odd Potion", SW "Odd Medicine", ZW "Odd Poultice" (3DS) | "Odd Potion" in the plan, unconfirmed | Rule C needs the N64 text; flagged for the integrator. |

## Open items for compilers

- Positions not sourced: `deku-tree-basement-chest`, `hf-open-grotto-chest`, `hf-southeast-grotto-chest`,
  `hf-tektite-grotto-freestanding-poh` grotto, 10 Big Poe points, Pierre spots.
- 4 carpenter-to-cell mapping for the jail keys (02 gap).
- Market-at-night entry method for c02-s04 (drawbridge).
- Fishing thresholds: write "10 pounds or more" (child) and "about 13 pounds or more" (adult)
  as safe targets, no hard number for the remake (04/06/07 conflicts).
- Every night/day-gated step, every ocarina step, every jump-dependent step and every timer
  needs a `remake` note (10-remake.md).
