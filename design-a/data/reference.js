/* FIXTURE — replaced by compiled data.
   Design-review sample only: shape follows BRIEF.md exactly; text written from memory of the
   original game and NOT fact-checked. Remake entries are placeholders. Do not ship. */
window.OOT = window.OOT || {};

OOT.reference = {
  songs: [
    { id: "song-zeldas-lullaby", name: "Zelda's Lullaby", notes: "← ↑ → ← ↑ →",
      effect: "Proves a tie to the royal family; opens marked doors and triggers Triforce-marked switches.",
      learnedFrom: "Impa, Hyrule Castle", chapter: "c02-hyrule-castle" },
    { id: "song-eponas-song", name: "Epona's Song", notes: "↑ ← → ↑ ← →",
      effect: "Calls Epona once she is yours; makes cows give milk.",
      learnedFrom: "Malon, Lon Lon Ranch", chapter: "c02-hyrule-castle" },
    { id: "song-sarias-song", name: "Saria's Song", notes: "↓ → ← ↓ → ←",
      effect: "Talks to Saria from anywhere; cheers up Darunia.",
      learnedFrom: "Saria, Sacred Forest Meadow", chapter: "c03-kakariko-lost-woods" },
    { id: "song-suns-song", name: "Sun's Song", notes: "→ ↓ ↑ → ↓ ↑",
      effect: "Switches between day and night; freezes ReDeads.",
      learnedFrom: "Royal Family's Tomb, Graveyard", chapter: "c03-kakariko-lost-woods" },
    { id: "song-song-of-time", name: "Song of Time", notes: "→ A ↓ → A ↓",
      effect: "Opens the Door of Time; moves blue Song of Time blocks.",
      learnedFrom: "Zelda, Hyrule Field", chapter: "c06-temple-of-time" },
    { id: "song-song-of-storms", name: "Song of Storms", notes: "A ↓ ↑ A ↓ ↑",
      effect: "Brings rain; opens hidden grottos under certain stones.",
      learnedFrom: "Windmill man, Kakariko (as adult)", chapter: "c11-bottom-of-well" },
    { id: "song-minuet-of-forest", name: "Minuet of Forest", notes: "A ↑ ← → ← →",
      effect: "Warps to the Sacred Forest Meadow.",
      learnedFrom: "Sheik, Sacred Forest Meadow", chapter: "c07-forest-temple" },
    { id: "song-bolero-of-fire", name: "Bolero of Fire", notes: "↓ A ↓ A → ↓ → ↓",
      effect: "Warps to Death Mountain Crater.",
      learnedFrom: "Sheik, Death Mountain Crater", chapter: "c08-fire-temple" }
  ],

  bosses: [
    { id: "boss-gohma", name: "Parasitic Armored Arachnid Gohma", location: "Inside the Great Deku Tree",
      weakness: "Her eye, when it glows red",
      strategy: [
        "Shoot her eye with the Fairy Slingshot when it turns red.",
        "Strike her eye while she lies stunned.",
        "Stun her with a Deku Nut when she climbs the ceiling."
      ] },
    { id: "boss-phantom-ganon", name: "Evil Spirit from Beyond Phantom Ganon", location: "Forest Temple",
      weakness: "Fairy Bow, then his own energy balls sent back",
      strategy: [
        "Shoot the real rider as he leaves a painting.",
        "Bat his energy ball back with your sword until it hits him.",
        "Attack while he is stunned on the floor."
      ] }
  ],

  bestiary: [
    { id: "enemy-deku-baba", name: "Deku Baba", locations: ["Kokiri Forest", "Inside the Deku Tree", "Hyrule Field"],
      weakness: "Any sword strike", notes: "Hit it while it stands stiff for a Deku Stick; cut it as it lunges for a Deku Nut." },
    { id: "enemy-deku-scrub", name: "Deku Scrub", locations: ["Inside the Deku Tree", "Lost Woods"],
      weakness: "Its own nut, reflected with a shield", notes: "Talk to it after it is stunned. Some sell upgrades." },
    { id: "enemy-skulltula", name: "Skulltula", locations: ["Inside the Deku Tree", "Kakariko Village"],
      weakness: "Its back", notes: "Wait for it to spin around before you strike." },
    { id: "enemy-gohma-larva", name: "Gohma Larva", locations: ["Inside the Deku Tree"],
      weakness: "Any attack", notes: "Hatches from eggs; destroy the egg before it opens." },
    { id: "enemy-stalchild", name: "Stalchild", locations: ["Hyrule Field"],
      weakness: "Any sword strike", notes: "Rise from the ground at night. They keep coming while you stay in the field." }
  ],

  minigames: [
    { id: "minigame-talons-cuccos", name: "Talon's Cucco Game", location: "Lon Lon Ranch", age: "child",
      cost: "10 Rupees", rewards: ["Bottle of Lon Lon Milk (first win)"] },
    { id: "minigame-lw-ocarina-memory", name: "Skull Kid Memory Game", location: "Lost Woods", age: "child",
      cost: "Free", rewards: ["Piece of Heart"] },
    { id: "minigame-shooting-gallery", name: "Market Shooting Gallery", location: "Market", age: "child",
      cost: "20 Rupees", rewards: ["Bullet Bag upgrade", "Purple Rupee"] }
  ],

  sidequests: [
    { id: "side-lost-dog", name: "Richard the Lost Dog", summary: "Return a woman's lost dog in the Market at night.",
      steps: ["Visit the Market back alley at night as a child.", "Find the white dog and let it follow you.", "Walk it into the house at the end of the alley."],
      rewards: ["Piece of Heart"] },
    { id: "side-skulltula-house", name: "House of Skulltula", summary: "Lift the curse on the family in Kakariko by collecting Gold Skulltula tokens.",
      steps: ["Collect tokens throughout Hyrule.", "Return to the house after every 10 tokens to claim the reward."],
      rewards: ["Adult's Wallet", "Stone of Agony", "Giant's Wallet", "Bombchus", "Piece of Heart", "Infinite Rupees"] }
  ],

  remake: {
    confirmed: [
      { fact: "Full remake for Nintendo Switch 2, releasing November 5, 2026.", source: "Nintendo Direct, June 9 2026 (FIXTURE: add link)" },
      { fact: "Orchestral score.", source: "Nintendo Direct, June 9 2026 (FIXTURE: add link)" }
    ],
    unconfirmed: [
      { claim: "Manual jump button and sprint.", source: "Hands-on preview (FIXTURE: add link)" },
      { claim: "Day and night keep running indoors and in towns.", source: "Hands-on preview (FIXTURE: add link)" },
      { claim: "Ocarina songs can be hummed into the microphone.", source: "Hands-on preview (FIXTURE: add link)" },
      { claim: "A \"Threads of Time\" story log in the pause menu.", source: "Hands-on preview (FIXTURE: add link)" },
      { claim: "Master Quest is included.", source: "Unknown" }
    ],
    guideImpacts: [
      { area: "Night-only Gold Skulltulas", impact: "If time runs in towns and interiors, waiting for night may work in more places. Every night step is flagged for a recheck." },
      { area: "Song note glyphs", impact: "Notes are shown in the original 5-note layout. The Switch 2 button mapping is unconfirmed." },
      { area: "Timed races", impact: "Sprint may change Dampé's race and other time limits." }
    ]
  }
};
