/* FIXTURE — replaced by compiled data
   Design-B sample data. Follows the BRIEF.md schema exactly. Some items point at chapters
   or steps that are not in the fixture walkthrough on purpose, so the renderer's
   "not in this build yet" path is exercised. */
window.OOT = window.OOT || {};

OOT.collectibles = [
  {
    id: "gold-skulltulas", name: "Gold Skulltula Tokens", total: 100,
    note: "Tokens are traded at the House of Skulltula in Kakariko. Rewards at 10, 20, 30, 40, 50 and 100 include the Adult's Wallet, the Stone of Agony, the Giant's Wallet, a Bombchu bag refill and a Piece of Heart.",
    items: [
      { id: "deku-tree-gs-compass-room", name: "Deku Tree: Compass Room vines", area: "Deku Tree", age: "either", time: "any",
        requires: ["Fairy Slingshot"], how: "On the vine wall in the third-floor compass room. Shoot it down, then climb for the token.",
        chapter: "c01-deku-tree", step: "c01-s02-05", missable: false, remake: "" },
      { id: "deku-tree-gs-basement-gate", name: "Deku Tree: Basement gate", area: "Deku Tree", age: "either", time: "any",
        requires: [], how: "On the barred gate in the first basement room. Reachable with a sword.",
        chapter: "c01-deku-tree", step: "c01-s03-01", missable: false, remake: "" },
      { id: "deku-tree-gs-basement-vines", name: "Deku Tree: Basement vine wall", area: "Deku Tree", age: "either", time: "any",
        requires: ["Fairy Slingshot"], how: "High on the basement vine wall. Shoot it, then climb up for the token.",
        chapter: "c01-deku-tree", step: "c01-s03-02", missable: false, remake: "" },
      { id: "deku-tree-gs-basement-back-room", name: "Deku Tree: Basement back room", area: "Deku Tree", age: "either", time: "any",
        requires: ["Boomerang", "Bombs"], how: "Behind the cracked wall past the basement water room. Blow the wall open and use the Boomerang across the gap.",
        chapter: "c06-temple-of-time", step: "c06-s02-03", missable: false, remake: "" },
      { id: "kf-gs-know-it-all-house", name: "Know-It-All Brothers' House (back wall)", area: "Kokiri Forest", age: "child", time: "night",
        requires: [], how: "On the back wall of the house at night. Only spawns once you have left the forest at least once.",
        chapter: "c02-hyrule-castle", step: "c02-s03-03", missable: false, remake: "Day and night reportedly keep running in more places in the remake; spawn timing may differ." },
      { id: "kf-gs-bean-patch", name: "Kokiri Forest: Bean patch", area: "Kokiri Forest", age: "child", time: "any",
        requires: ["Bottle", "Bugs"], how: "Release bugs over the soft soil beside the Know-It-All Brothers' House.",
        chapter: "c03-kakariko-lost-woods", step: "c03-s02-04", missable: false, remake: "" },
      { id: "kf-gs-house-of-twins", name: "House of Twins (roof)", area: "Kokiri Forest", age: "adult", time: "night",
        requires: ["Hookshot"], how: "On the roof edge of the twins' house at night. Hookshot it from the ground.",
        chapter: "c07-forest-temple", step: "c07-s05-02", missable: false, remake: "" },
      { id: "lw-gs-bean-patch-near-bridge", name: "Lost Woods: Bean patch by the bridge", area: "Lost Woods", age: "child", time: "any",
        requires: ["Bottle", "Bugs"], how: "Release bugs on the soil patch in the first clearing past the bridge to Hyrule Field.",
        chapter: "c03-kakariko-lost-woods", step: "c03-s02-05", missable: false, remake: "" },
      { id: "lw-gs-above-theater", name: "Lost Woods: Above the Deku Theater", area: "Lost Woods", age: "adult", time: "night",
        requires: ["Magic Bean planted as child"], how: "Ride the bean platform near the theater at night and kill it on the high ledge.",
        chapter: "c07-forest-temple", step: "c07-s05-03", missable: false, remake: "" },
      { id: "market-gs-guard-house", name: "Market: Guard house crate", area: "Market", age: "child", time: "any",
        requires: [], how: "Inside a crate in the guard house just inside the drawbridge.",
        chapter: "c02-hyrule-castle", step: "c02-s02-00", missable: false, remake: "" },
      { id: "hc-gs-tree", name: "Hyrule Castle: Lone tree", area: "Hyrule Castle", age: "child", time: "any",
        requires: [], how: "Roll into the single tree beside the castle road to knock it down.",
        chapter: "c02-hyrule-castle", step: "c02-s02-02", missable: false, remake: "" },
      { id: "llr-gs-rain-shed", name: "Lon Lon Ranch: Rain shed", area: "Lon Lon Ranch", age: "child", time: "night",
        requires: [], how: "On the wall of the small shed beside the stable, at night.",
        chapter: "c02-hyrule-castle", step: "c02-s03-01", missable: false, remake: "" },
      { id: "llr-gs-tree", name: "Lon Lon Ranch: Tree near the gate", area: "Lon Lon Ranch", age: "child", time: "any",
        requires: [], how: "Roll into the tree just inside the ranch entrance.",
        chapter: "c02-hyrule-castle", step: "c02-s03-02", missable: false, remake: "" },
      { id: "forest-temple-gs-first-room", name: "Forest Temple: First room", area: "Forest Temple", age: "adult", time: "any",
        requires: ["Hookshot"], how: "High on the left wall of the entry room. Hookshot it from the ground.",
        chapter: "c07-forest-temple", step: "c07-s04-01", missable: false, remake: "" }
    ]
  },
  {
    id: "heart-pieces", name: "Pieces of Heart", total: 36,
    note: "Every 4 pieces add 1 heart to your life meter.",
    items: [
      { id: "lw-skull-kid", name: "Skull Kid's duet", area: "Lost Woods", age: "child", time: "any",
        requires: ["Saria's Song"], how: "Play Saria's Song to the Skull Kid on the stump near the Deku Theater.",
        chapter: "c03-kakariko-lost-woods", step: "c03-s03-02", missable: false, remake: "" },
      { id: "lw-ocarina-memory-game", name: "Skull Kid ocarina memory game", area: "Lost Woods", age: "child", time: "any",
        requires: ["Fairy Ocarina"], how: "Repeat the growing melody played by the Skull Kids near the woods' entrance.",
        chapter: "c03-kakariko-lost-woods", step: "c03-s03-03", missable: false,
        remake: "Previews mention mic-hummed ocarina input; whether this game accepts it is unconfirmed." },
      { id: "market-lost-dog", name: "Richard the lost dog", area: "Market", age: "child", time: "night",
        requires: [], how: "Lead the white dog from the back alley to the lady in the alley house, at night.",
        chapter: "c06-temple-of-time", step: "c06-s01-02", missable: true, remake: "" },
      { id: "llr-freestanding-poh", name: "Lon Lon Ranch silo", area: "Lon Lon Ranch", age: "child", time: "any",
        requires: [], how: "Crawl through the gap at the back of the silo after moving the crates.",
        chapter: "c06-temple-of-time", step: "c06-s01-04", missable: false, remake: "" },
      { id: "graveyard-dampe-race-freestanding-poh", name: "Dampé's race (under 1 minute)", area: "Graveyard", age: "adult", time: "any",
        requires: [], how: "Finish Dampé's race in under 1 minute. The piece sits on the exit ledge.",
        chapter: "c07-forest-temple", step: "c07-s02-03", missable: false, remake: "Sprint and the manual jump may change the race timing." },
      { id: "hf-tektite-grotto-freestanding-poh", name: "Hyrule Field: Tektite grotto", area: "Hyrule Field", age: "adult", time: "any",
        requires: ["Iron Boots"], how: "At the bottom of the flooded pool in the grotto near Lake Hylia.",
        chapter: "c10-water-temple", step: "c10-s01-03", missable: false, remake: "" },
      { id: "kak-man-on-roof", name: "Man on the roof", area: "Kakariko Village", age: "child", time: "any",
        requires: [], how: "Climb the watchtower ladder and jump across to the roof where the man sits.",
        chapter: "c03-kakariko-lost-woods", step: "c03-s01-05", missable: false, remake: "The manual jump may give another route up." }
    ]
  },
  {
    id: "heart-containers", name: "Heart Containers", total: 8,
    note: "One from each main dungeon boss.",
    items: [
      { id: "deku-tree-queen-gohma-heart", name: "Queen Gohma", area: "Deku Tree", age: "child", time: "any",
        requires: [], how: "Appears after the boss falls.", chapter: "c01-deku-tree", step: "c01-s04-02", missable: false, remake: "" },
      { id: "forest-temple-phantom-ganon-heart", name: "Phantom Ganon", area: "Forest Temple", age: "adult", time: "any",
        requires: ["Fairy Bow"], how: "Appears after the boss falls.", chapter: "c07-forest-temple", step: "c07-s06-02", missable: false, remake: "" }
    ]
  },
  {
    id: "songs", name: "Songs", total: 13,
    note: "12 story and warp songs plus the Scarecrow's Song.",
    items: [
      { id: "song-from-impa", name: "Zelda's Lullaby", area: "Hyrule Castle", age: "child", time: "any",
        requires: [], how: "Impa teaches it after you meet Zelda.", chapter: "c02-hyrule-castle", step: "c02-s02-06", missable: false, remake: "" },
      { id: "song-from-malon", name: "Epona's Song", area: "Lon Lon Ranch", age: "child", time: "day",
        requires: ["Fairy Ocarina"], how: "Talk to Malon in the corral with the ocarina in hand.", chapter: "c03-kakariko-lost-woods", step: "c03-s04-01", missable: false, remake: "" },
      { id: "song-from-saria", name: "Saria's Song", area: "Sacred Forest Meadow", age: "child", time: "any",
        requires: ["Zelda's Lullaby"], how: "Saria plays it on the stump in the Sacred Forest Meadow.", chapter: "c03-kakariko-lost-woods", step: "c03-s03-01", missable: false, remake: "" },
      { id: "song-from-ocarina-of-time", name: "Song of Time", area: "Hyrule Field", age: "child", time: "any",
        requires: ["Spiritual Stones"], how: "Learned after catching the Ocarina of Time at the castle moat.", chapter: "c06-temple-of-time", step: "c06-s03-01", missable: false, remake: "" },
      { id: "sheik-at-temple", name: "Prelude of Light", area: "Temple of Time", age: "adult", time: "any",
        requires: [], how: "Sheik teaches it when you return to the Temple of Time as an adult.", chapter: "c07-forest-temple", step: "c07-s01-01", missable: false, remake: "" },
      { id: "sheik-in-forest", name: "Minuet of Forest", area: "Sacred Forest Meadow", age: "adult", time: "any",
        requires: [], how: "Sheik teaches it at the top of the meadow stairs.", chapter: "c07-forest-temple", step: "c07-s03-02", missable: false, remake: "" }
    ]
  },
  {
    id: "spiritual-stones", name: "Spiritual Stones", total: 3,
    note: "All 3 open the Door of Time.",
    items: [
      { id: "queen-gohma", name: "Kokiri's Emerald", area: "Deku Tree", age: "child", time: "any",
        requires: [], how: "Given by the Great Deku Tree after Queen Gohma.", chapter: "c01-deku-tree", step: "c01-s04-03", missable: false, remake: "" },
      { id: "king-dodongo", name: "Goron's Ruby", area: "Dodongo's Cavern", age: "child", time: "any",
        requires: [], how: "Given by Darunia after King Dodongo.", chapter: "c04-dodongos-cavern", step: "c04-s05-03", missable: false, remake: "" },
      { id: "barinade", name: "Zora's Sapphire", area: "Jabu-Jabu's Belly", age: "child", time: "any",
        requires: [], how: "Given by Ruto after Barinade.", chapter: "c05-jabu-jabu", step: "c05-s05-03", missable: false, remake: "" }
    ]
  },
  {
    id: "medallions", name: "Medallions", total: 6,
    note: "One from each Sage.",
    items: [
      { id: "tot-reward-from-rauru", name: "Light Medallion", area: "Temple of Time", age: "adult", time: "any",
        requires: [], how: "Rauru gives it in the Chamber of Sages.", chapter: "c07-forest-temple", step: "c07-s01-01", missable: false, remake: "" },
      { id: "phantom-ganon", name: "Forest Medallion", area: "Forest Temple", age: "adult", time: "any",
        requires: [], how: "Saria gives it after Phantom Ganon.", chapter: "c07-forest-temple", step: "c07-s06-03", missable: false, remake: "" }
    ]
  },
  {
    id: "equipment", name: "Equipment", total: 12,
    note: "Swords, shields, tunics and boots.",
    items: [
      { id: "kf-kokiri-sword-chest", name: "Kokiri Sword", area: "Kokiri Forest", age: "child", time: "any",
        requires: [], how: "Chest at the end of the boulder maze in the Forest Training Ground.", chapter: "c01-deku-tree", step: "c01-s01-04", missable: false, remake: "" },
      { id: "equip-deku-shield", name: "Deku Shield", area: "Kokiri Forest", age: "child", time: "any",
        requires: ["40 Rupees"], how: "Buy it in the Kokiri Shop.", chapter: "c01-deku-tree", step: "c01-s01-05", missable: false, remake: "" }
    ]
  },
  {
    id: "inventory-items", name: "Inventory Items", total: 24,
    note: "Every item that occupies a slot on the item screen.",
    items: [
      { id: "deku-tree-slingshot-chest", name: "Fairy Slingshot", area: "Deku Tree", age: "child", time: "any",
        requires: [], how: "Large chest past the Deku Scrub on the second floor.", chapter: "c01-deku-tree", step: "c01-s02-04", missable: false, remake: "" },
      { id: "lw-gift-from-saria", name: "Fairy Ocarina", area: "Lost Woods", age: "child", time: "any",
        requires: [], how: "Saria gives it on the bridge as you leave the forest.", chapter: "c02-hyrule-castle", step: "c02-s01-01", missable: false, remake: "" },
      { id: "graveyard-dampe-race-hookshot-chest", name: "Hookshot", area: "Graveyard", age: "adult", time: "any",
        requires: [], how: "Chest at the end of Dampé's race.", chapter: "c07-forest-temple", step: "c07-s02-02", missable: false, remake: "" },
      { id: "forest-temple-bow-chest", name: "Fairy Bow", area: "Forest Temple", age: "adult", time: "any",
        requires: ["Small Key"], how: "Large chest after the Stalfos room on the upper floor.", chapter: "c07-forest-temple", step: "c07-s05-04", missable: false, remake: "" }
    ]
  }
];
