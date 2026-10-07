/* FIXTURE — replaced by compiled data
   Design-B sample data. Follows the BRIEF.md schema exactly. Note sequences use the
   original layout: "A" plus the four direction notes written as arrows. */
window.OOT = window.OOT || {};

OOT.reference = {
  songs: [
    { id: "song-from-impa", name: "Zelda's Lullaby", notes: "← ↑ → ← ↑ →",
      effect: "Proves a tie to the royal family. Opens Triforce-marked doors and calms certain characters.",
      learnedFrom: "Impa, leaving Hyrule Castle", chapter: "c02-hyrule-castle" },
    { id: "song-from-malon", name: "Epona's Song", notes: "↑ ← → ↑ ← →",
      effect: "Calls Epona as an adult. Makes cows give milk.",
      learnedFrom: "Malon at Lon Lon Ranch", chapter: "c03-kakariko-lost-woods" },
    { id: "song-from-saria", name: "Saria's Song", notes: "↓ → ← ↓ → ←",
      effect: "Talk to Saria from anywhere. Wins over certain characters.",
      learnedFrom: "Saria in the Sacred Forest Meadow", chapter: "c03-kakariko-lost-woods" },
    { id: "song-from-ocarina-of-time", name: "Song of Time", notes: "→ A ↓ → A ↓",
      effect: "Opens the Door of Time. Moves Song of Time blocks.",
      learnedFrom: "Zelda's message at the castle moat", chapter: "c06-temple-of-time" },
    { id: "song-from-windmill", name: "Song of Storms", notes: "A ↓ ↑ A ↓ ↑",
      effect: "Brings rain. Opens some grottos and drains the Kakariko well.",
      learnedFrom: "The man in the Kakariko windmill (adult), then played back as a child", chapter: "c11-bottom-of-well" },
    { id: "sheik-in-forest", name: "Minuet of Forest", notes: "A ↑ ← → ← →",
      effect: "Warps to the Sacred Forest Meadow.",
      learnedFrom: "Sheik in the Sacred Forest Meadow", chapter: "c07-forest-temple" },
    { id: "sheik-at-temple", name: "Prelude of Light", notes: "↑ → ↑ → ← ↑",
      effect: "Warps to the Temple of Time.",
      learnedFrom: "Sheik in the Temple of Time", chapter: "c07-forest-temple" }
  ],

  bosses: [
    { id: "boss-gohma", name: "Parasitic Armored Arachnid Gohma", location: "Inside the Great Deku Tree",
      weakness: "Its eye, while it glows red",
      strategy: [
        "Stay near the center so you can track it on the walls and ceiling.",
        "Stun it with a **Fairy Slingshot** seed to the red eye.",
        "Slash the eye with the **Kokiri Sword** while it lies stunned.",
        "Clear Gohma Larvae quickly if eggs hatch."
      ] },
    { id: "boss-phantom-ganon", name: "Evil Spirit from Beyond Phantom Ganon", location: "Forest Temple",
      weakness: "Fairy Bow during the painting phase, then its own energy ball returned with the sword.",
      strategy: [
        "Shoot the real rider with the **Fairy Bow** as it charges out of a painting.",
        "Phase 2: return its energy ball with a sword swing until it misses the volley.",
        "Strike it while it is down."
      ] }
  ],

  bestiary: [
    { id: "enemy-deku-baba", name: "Deku Baba", locations: ["Kokiri Forest", "Inside the Great Deku Tree", "Hyrule Field"],
      weakness: "Sword. Strike once it stiffens to make it drop a Deku Stick.", notes: "Withered Deku Babas lie flat until you come close." },
    { id: "enemy-skulltula", name: "Skulltula", locations: ["Inside the Great Deku Tree", "Kakariko Village"],
      weakness: "Its soft belly when it turns around.", notes: "Hangs from threads. A Deku Nut or Fairy Slingshot seed spins it to expose the belly." },
    { id: "enemy-gohma-larva", name: "Gohma Larva", locations: ["Inside the Great Deku Tree"],
      weakness: "Any sword strike or a Deku Nut.", notes: "Hatches from eggs dropped by Queen Gohma and from eggs in the basement." },
    { id: "enemy-moblin", name: "Moblin", locations: ["Sacred Forest Meadow"],
      weakness: "Sword; Bombs for the club-wielder.", notes: "Spear Moblins charge in a straight line. The club Moblin sends a shockwave along the ground." },
    { id: "enemy-wolfos", name: "Wolfos", locations: ["Sacred Forest Meadow", "Lost Woods"],
      weakness: "Its tail. Wait for it to attack, then circle behind it.", notes: "Blocks frontal sword strikes." }
  ],

  minigames: [
    { id: "minigame-market-shooting-gallery", name: "Shooting Gallery", location: "Market", age: "child",
      cost: "20 Rupees", rewards: ["Bullet Bag (40) for a perfect run"] },
    { id: "minigame-bombchu-bowling", name: "Bombchu Bowling Alley", location: "Market", age: "child",
      cost: "30 Rupees", rewards: ["Bomb Bag upgrade", "Piece of Heart", "Bombchus (10)"] },
    { id: "minigame-treasure-chest-game", name: "Treasure Chest Shop", location: "Market", age: "either",
      cost: "10 Rupees", rewards: ["Piece of Heart (child only, needs the Lens of Truth or luck)"] }
  ],

  sidequests: [
    { id: "sq-lost-dog", name: "Richard the Lost Dog", summary: "Return a runaway dog to its owner in the Market back alley at night.",
      steps: ["Enter the Market at night as a child.", "Find the white dog in the back alley; it follows you.", "Walk it into the alley house on the right."],
      rewards: ["Piece of Heart"] },
    { id: "sq-big-poes", name: "Big Poe Hunt", summary: "Catch 10 Big Poes in Hyrule Field on Epona and sell them to the Poe Collector.",
      steps: ["Ride Epona in Hyrule Field and watch for Big Poes.", "Shoot each one with the Fairy Bow, then bottle its soul.", "Sell them at the Poe Collector's shop by the Market entrance."],
      rewards: ["Bottle (after 10)"] }
  ],

  remake: {
    confirmed: [
      { fact: "A full remake of Ocarina of Time releases on Nintendo Switch 2 on November 5, 2026.", source: "Nintendo Direct, June 9 2026" }
    ],
    unconfirmed: [
      { claim: "A dedicated jump button and a sprint action.", source: "Hands-on previews (to be cited)" },
      { claim: "Day and night keep running indoors and in towns.", source: "Hands-on previews (to be cited)" },
      { claim: "Ocarina songs can be hummed into the microphone.", source: "Hands-on previews (to be cited)" },
      { claim: "A \"Threads of Time\" story log in the pause menu.", source: "Hands-on previews (to be cited)" },
      { claim: "Master Quest is included.", source: "Unknown" }
    ],
    guideImpacts: [
      { area: "Night-only checks", impact: "If time runs in towns, waiting for night in the Market and Kakariko may work differently. Every night step carries a remake flag." },
      { area: "Timed challenges", impact: "Sprint may change Dampé's race and other timed events. Times are given for the original until confirmed." },
      { area: "Song input", impact: "Note glyphs show the original layout. Button mapping in the remake is unconfirmed." }
    ]
  }
};
