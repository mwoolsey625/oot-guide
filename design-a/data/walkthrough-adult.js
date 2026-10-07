/* FIXTURE — replaced by compiled data.
   Design-review sample only: shape follows BRIEF.md exactly, prose written from memory of the
   original game and NOT fact-checked. Do not ship. */
window.OOT = window.OOT || {};
OOT.walkthrough = OOT.walkthrough || [];

OOT.walkthrough.push({
  id: "c07-forest-temple", num: 7, title: "Seven Years Later & the Forest Temple", era: "adult",
  summary: "Wake as an adult, win the Hookshot from Dampé's ghost, learn the Minuet of Forest, and free the Forest Temple.",
  needs: ["Master Sword", "Zelda's Lullaby", "Saria's Song"],
  gains: ["Hookshot", "Minuet of Forest", "Fairy Bow", "Heart Container", "Forest Medallion"],
  sections: [{
    id: "c07-s01", title: "The Temple of Time", era: "adult", kind: "overworld",
    steps: [{
      id: "c07-s01-01",
      text: "Wake in the **Chamber of Sages**, then talk to **Sheik** in the **Temple of Time**.",
      collect: [], tip: "", warn: "", time: "", remake: "Previews mention a \"Threads of Time\" story log in the pause menu. Check it here if you missed dialogue."
    }, {
      id: "c07-s01-02",
      text: "Cross the ruined **Market** to Kakariko. Avoid the ReDeads in the square; do not let them grab you.",
      collect: [], tip: "Play the Sun's Song to freeze a ReDead if you already know it.",
      warn: "", time: "", remake: ""
    }]
  }, {
    id: "c07-s02", title: "Kakariko Graveyard", era: "adult", kind: "overworld",
    steps: [{
      id: "c07-s02-01",
      text: "Enter **Dampé's Grave** at the back of the graveyard and race his ghost to the end of the tunnel for the **Hookshot**.",
      collect: ["graveyard-dampe-race-hookshot-chest"],
      tip: "Take the turns tight and ignore the blue fire unless it blocks the line.",
      warn: "", time: "", remake: "Sprint may change how hard this race is. Timing unconfirmed."
    }, {
      id: "c07-s02-02",
      text: "Race him a second time in under 1 minute for a **Piece of Heart**.",
      collect: ["graveyard-dampe-race-freestanding-poh"], tip: "", warn: "", time: "", remake: ""
    }]
  }, {
    id: "c07-s03", title: "Sacred Forest Meadow", era: "adult", kind: "overworld",
    steps: [{
      id: "c07-s03-01",
      text: "Thread past the Moblins in the meadow maze and climb to the stone stage. **Sheik** teaches you the **Minuet of Forest**.",
      collect: ["sheik-in-forest"], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c07-s03-02",
      text: "Hookshot to the branch above the broken stairs and enter the **Forest Temple**.",
      collect: [], tip: "", warn: "", time: "", remake: ""
    }]
  }, {
    id: "c07-s04", title: "The Forest Temple", era: "adult", kind: "dungeon",
    steps: [{
      id: "c07-s04-01",
      text: "Climb the tree on the left of the entrance and open the chest on the ledge.",
      collect: ["forest-temple-first-room-chest"], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c07-s04-02",
      text: "Hookshot the **Gold Skulltula** on the vines above the inner door.",
      collect: ["forest-temple-gs-first-room"], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c07-s04-03",
      text: "Defeat the 4 Poe Sisters to relight the lobby torches. The Stalfos room in the west wing holds the **Fairy Bow**.",
      collect: ["forest-temple-bow-chest"], tip: "", warn: "Missing a Poe while it flees means re-solving its painting puzzle.", time: "", remake: ""
    }]
  }, {
    id: "c07-s05", title: "Phantom Ganon", era: "adult", kind: "boss",
    steps: [{
      id: "c07-s05-01",
      text: "Defeat **Phantom Ganon** and claim the **Heart Container**. In the **Chamber of Sages**, Saria gives you the **Forest Medallion**.",
      collect: ["forest-temple-phantom-ganon-heart", "phantom-ganon"], tip: "", warn: "", time: "", remake: ""
    }]
  }],
  boss: {
    id: "boss-phantom-ganon", name: "Evil Spirit from Beyond Phantom Ganon",
    weakness: "Fairy Bow during the painting phase; his own energy balls, sent back with a sword",
    strategy: [
      "During the painting phase, shoot the real rider with the Fairy Bow as he rides out of a painting. The fake turns back early.",
      "In phase 2, swing your sword at his energy ball to send it back. Keep the rally going until it hits him.",
      "Strike him while he lies stunned on the floor."
    ]
  }
});
