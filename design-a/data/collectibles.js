/* FIXTURE — replaced by compiled data.
   Design-review sample only: shape follows BRIEF.md exactly; descriptions written from memory
   of the original game and NOT fact-checked. Do not ship. */
window.OOT = window.OOT || {};

OOT.collectibles = [{
  id: "gold-skulltulas", name: "Gold Skulltula Tokens", total: 100,
  note: "Turn tokens in at the House of Skulltula in Kakariko. Rewards at 10, 20, 30, 40, 50 and 100 include a bigger Wallet, the Stone of Agony, a Piece of Heart and a Bombchu refill.",
  items: [{
    id: "kf-gs-know-it-all-house", name: "Know-It-All Brothers' House (back wall)",
    area: "Kokiri Forest", age: "child", time: "night", requires: [],
    how: "On the rear wall of the house nearest the Lost Woods entrance. Visit at night.",
    chapter: "c03-kakariko-lost-woods", step: "c03-s04-02", missable: false, remake: ""
  }, {
    id: "kf-gs-house-of-twins", name: "House of Twins (side wall)",
    area: "Kokiri Forest", age: "adult", time: "night", requires: ["Hookshot"],
    how: "High on the wall of the twins' house. Hookshot it as an adult at night.",
    chapter: "c07-forest-temple", step: "", missable: false,
    remake: "Day and night reportedly keep running in towns; check whether Kokiri Forest now cycles too."
  }, {
    id: "deku-tree-gs-compass-room", name: "Compass Room vines",
    area: "Inside the Deku Tree", age: "either", time: "any", requires: ["Fairy Slingshot"],
    how: "On the vine wall of the top-floor Compass room.",
    chapter: "c01-deku-tree", step: "c01-s02-06", missable: false, remake: ""
  }, {
    id: "deku-tree-gs-basement-vines", name: "Basement vines",
    area: "Inside the Deku Tree", age: "either", time: "any", requires: [],
    how: "On the vines next to where you land in the basement.",
    chapter: "c01-deku-tree", step: "c01-s03-01", missable: false, remake: ""
  }, {
    id: "deku-tree-gs-basement-gate", name: "Basement gate",
    area: "Inside the Deku Tree", age: "either", time: "any", requires: [],
    how: "Behind the gate on the upper basement ledge.",
    chapter: "c01-deku-tree", step: "c01-s03-03", missable: false, remake: ""
  }, {
    id: "deku-tree-gs-basement-back-room", name: "Basement back room",
    area: "Inside the Deku Tree", age: "child", time: "any", requires: ["Boomerang", "Bombs"],
    how: "Bomb the cracked wall past the Gohma larva room, then reach the token with the Boomerang.",
    chapter: "c06-temple-of-time", step: "c06-s02-04", missable: false, remake: ""
  }, {
    id: "hc-gs-tree", name: "Tree on the castle hill",
    area: "Hyrule Castle", age: "child", time: "any", requires: [],
    how: "Roll into the lone tree near the castle gate to knock it loose.",
    chapter: "c02-hyrule-castle", step: "c02-s02-02", missable: false, remake: ""
  }, {
    id: "llr-gs-tree", name: "Tree by the ranch entrance",
    area: "Lon Lon Ranch", age: "child", time: "any", requires: [],
    how: "Roll into the tree just inside the ranch gate.",
    chapter: "c02-hyrule-castle", step: "c02-s03-04", missable: false, remake: ""
  }, {
    id: "llr-gs-rain-shed", name: "Rain shed",
    area: "Lon Lon Ranch", age: "child", time: "night", requires: [],
    how: "On the wall of the open shed beside the stable. Night only.",
    chapter: "c02-hyrule-castle", step: "c02-s03-04", missable: false, remake: ""
  }, {
    id: "llr-gs-house-window", name: "Above the house window",
    area: "Lon Lon Ranch", age: "child", time: "night", requires: ["Boomerang"],
    how: "Above a window of the main house. Reach it with the Boomerang at night.",
    chapter: "c05-jabu-jabu", step: "c05-s05-03", missable: false, remake: ""
  }, {
    id: "forest-temple-gs-first-room", name: "Entrance courtyard vines",
    area: "Forest Temple", age: "adult", time: "any", requires: ["Hookshot"],
    how: "On the vines over the inner door of the first room.",
    chapter: "c07-forest-temple", step: "c07-s04-02", missable: false, remake: ""
  }, {
    id: "market-gs-guard-house", name: "Guard house crate",
    area: "Market", age: "child", time: "any", requires: [],
    how: "Inside a crate in the guard house at the Market entrance.",
    chapter: "c02-hyrule-castle", step: "", missable: false, remake: ""
  }]
}, {
  id: "heart-pieces", name: "Pieces of Heart", total: 36,
  note: "Every 4 pieces add 1 heart to your life meter.",
  items: [{
    id: "llr-freestanding-poh", name: "Lon Lon Ranch storehouse",
    area: "Lon Lon Ranch", age: "child", time: "any", requires: [],
    how: "Crawl into the storehouse gap and push the boxes aside.",
    chapter: "c02-hyrule-castle", step: "c02-s03-03", missable: false, remake: ""
  }, {
    id: "lw-skull-kid", name: "Skull Kid duet",
    area: "Lost Woods", age: "child", time: "any", requires: ["Saria's Song"],
    how: "Play Saria's Song for the Skull Kid on the stump near the woods entrance.",
    chapter: "c03-kakariko-lost-woods", step: "c03-s02-03", missable: false, remake: ""
  }, {
    id: "lw-ocarina-memory-game", name: "Ocarina memory game",
    area: "Lost Woods", age: "child", time: "any", requires: ["Fairy Ocarina"],
    how: "Repeat the Skull Kids' growing melody 3 rounds in a row.",
    chapter: "c03-kakariko-lost-woods", step: "c03-s02-04", missable: false,
    remake: "The remake's mic-hummed ocarina option may change how this game is played."
  }, {
    id: "market-lost-dog", name: "Lost dog (Richard)",
    area: "Market", age: "child", time: "night", requires: [],
    how: "Lead the white dog in the back alley home to the woman in the alley house.",
    chapter: "c02-hyrule-castle", step: "", missable: false, remake: ""
  }, {
    id: "hf-tektite-grotto-freestanding-poh", name: "Tektite grotto pool",
    area: "Hyrule Field", age: "either", time: "any", requires: ["Iron Boots"],
    how: "Sink to the bottom of the pool in the grotto near the Gerudo Valley path.",
    chapter: "c10-water-temple", step: "c10-s01-05", missable: false, remake: ""
  }, {
    id: "graveyard-dampe-race-freestanding-poh", name: "Dampé's race, second run",
    area: "Graveyard", age: "adult", time: "any", requires: [],
    how: "Finish the race against Dampé's ghost in under 1 minute.",
    chapter: "c07-forest-temple", step: "c07-s02-02", missable: false, remake: "Sprint may make the time limit easier."
  }]
}, {
  id: "heart-containers", name: "Heart Containers", total: 8,
  note: "One from each boss except the final ones.",
  items: [{
    id: "deku-tree-queen-gohma-heart", name: "Queen Gohma",
    area: "Inside the Deku Tree", age: "child", time: "any", requires: [],
    how: "Appears after defeating Queen Gohma.",
    chapter: "c01-deku-tree", step: "c01-s04-01", missable: false, remake: ""
  }, {
    id: "forest-temple-phantom-ganon-heart", name: "Phantom Ganon",
    area: "Forest Temple", age: "adult", time: "any", requires: [],
    how: "Appears after defeating Phantom Ganon.",
    chapter: "c07-forest-temple", step: "c07-s05-01", missable: false, remake: ""
  }]
}, {
  id: "songs", name: "Songs", total: 13,
  note: "12 songs plus the Scarecrow's Song you compose yourself.",
  items: [{
    id: "song-from-impa", name: "Zelda's Lullaby",
    area: "Hyrule Castle", age: "child", time: "any", requires: [],
    how: "Taught by Impa after you meet Zelda.",
    chapter: "c02-hyrule-castle", step: "c02-s02-04", missable: false, remake: ""
  }, {
    id: "song-from-malon", name: "Epona's Song",
    area: "Lon Lon Ranch", age: "child", time: "day", requires: ["Fairy Ocarina"],
    how: "Take out the ocarina next to Malon in the corral.",
    chapter: "c02-hyrule-castle", step: "c02-s03-02", missable: false, remake: ""
  }, {
    id: "song-from-saria", name: "Saria's Song",
    area: "Sacred Forest Meadow", age: "child", time: "any", requires: ["Zelda's Letter"],
    how: "Meet Saria at the stone stage in the meadow.",
    chapter: "c03-kakariko-lost-woods", step: "c03-s02-06", missable: false, remake: ""
  }, {
    id: "sheik-in-forest", name: "Minuet of Forest",
    area: "Sacred Forest Meadow", age: "adult", time: "any", requires: [],
    how: "Sheik teaches it at the stone stage as an adult.",
    chapter: "c07-forest-temple", step: "c07-s03-01", missable: false, remake: ""
  }]
}, {
  id: "spiritual-stones", name: "Spiritual Stones", total: 3,
  note: "All 3 open the Door of Time.",
  items: [{
    id: "queen-gohma", name: "Kokiri's Emerald",
    area: "Inside the Deku Tree", age: "child", time: "any", requires: [],
    how: "Given by the Great Deku Tree after Queen Gohma falls.",
    chapter: "c01-deku-tree", step: "c01-s04-02", missable: false, remake: ""
  }]
}, {
  id: "medallions", name: "Medallions", total: 6,
  note: "Each awakened Sage gives one.",
  items: [{
    id: "phantom-ganon", name: "Forest Medallion",
    area: "Forest Temple", age: "adult", time: "any", requires: [],
    how: "Given by Saria in the Chamber of Sages.",
    chapter: "c07-forest-temple", step: "c07-s05-01", missable: false, remake: ""
  }]
}, {
  id: "equipment", name: "Equipment", total: 12,
  note: "Swords, shields, tunics and boots.",
  items: [{
    id: "kf-kokiri-sword-chest", name: "Kokiri Sword",
    area: "Kokiri Forest", age: "child", time: "any", requires: [],
    how: "Chest at the end of the boulder maze behind the Training Center.",
    chapter: "c01-deku-tree", step: "c01-s01-06", missable: false, remake: ""
  }, {
    id: "equip-deku-shield", name: "Deku Shield",
    area: "Kokiri Forest", age: "child", time: "any", requires: [],
    how: "Kokiri Shop, 40 Rupees.",
    chapter: "c01-deku-tree", step: "c01-s01-04", missable: false, remake: ""
  }]
}, {
  id: "inventory-items", name: "Inventory Items", total: 24,
  note: "Everything that sits on the item subscreen.",
  items: [{
    id: "deku-tree-slingshot-chest", name: "Fairy Slingshot",
    area: "Inside the Deku Tree", age: "child", time: "any", requires: ["Deku Shield"],
    how: "Second-floor chest guarded by a Skulltula.",
    chapter: "c01-deku-tree", step: "c01-s02-03", missable: false, remake: ""
  }, {
    id: "lw-gift-from-saria", name: "Fairy Ocarina",
    area: "Lost Woods", age: "child", time: "any", requires: ["Kokiri's Emerald"],
    how: "Saria gives it to you on the bridge out of the forest.",
    chapter: "c02-hyrule-castle", step: "c02-s01-01", missable: false, remake: ""
  }, {
    id: "graveyard-dampe-race-hookshot-chest", name: "Hookshot",
    area: "Graveyard", age: "adult", time: "any", requires: [],
    how: "Win the first race against Dampé's ghost.",
    chapter: "c07-forest-temple", step: "c07-s02-01", missable: false, remake: ""
  }, {
    id: "forest-temple-bow-chest", name: "Fairy Bow",
    area: "Forest Temple", age: "adult", time: "any", requires: [],
    how: "Chest after the Stalfos room in the west wing.",
    chapter: "c07-forest-temple", step: "c07-s04-03", missable: false, remake: ""
  }]
}, {
  id: "bottles", name: "Bottles", total: 4,
  note: "Hold fairies, potions, bugs, fish and Poes.",
  items: [{
    id: "llr-talons-chickens", name: "Talon's Cucco game",
    area: "Lon Lon Ranch", age: "child", time: "day", requires: [],
    how: "Pay Talon 10 Rupees and find his 3 special Cuccos before time runs out.",
    chapter: "c02-hyrule-castle", step: "c02-s03-01", missable: true, remake: ""
  }]
}, {
  id: "adult-trade", name: "Adult Trading Sequence", total: 11,
  note: "Ends with the Biggoron Sword. Several links in the chain run on a timer.",
  items: [{
    id: "hc-malon-egg", name: "Weird Egg (child trade)",
    area: "Hyrule Castle", age: "child", time: "day", requires: [],
    how: "Malon hands it to you on the castle hill.",
    chapter: "c02-hyrule-castle", step: "c02-s02-01", missable: false, remake: ""
  }, {
    id: "hc-zeldas-letter", name: "Zelda's Letter",
    area: "Hyrule Castle", age: "child", time: "any", requires: [],
    how: "Zelda gives it to you in the castle courtyard.",
    chapter: "c02-hyrule-castle", step: "c02-s02-04", missable: false, remake: ""
  }]
}];
