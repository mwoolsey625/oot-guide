/* FIXTURE — replaced by compiled data.
   Design-review sample only: shape follows BRIEF.md exactly, prose written from memory of the
   original game and NOT fact-checked. Do not ship. */
window.OOT = window.OOT || {};
OOT.walkthrough = OOT.walkthrough || [];

OOT.walkthrough.push({
  id: "c01-deku-tree", num: 1, title: "Kokiri Forest & Inside the Great Deku Tree", era: "child",
  summary: "Arm yourself in the village, earn passage past Mido, and lift the curse inside the Great Deku Tree.",
  needs: [],
  gains: ["Kokiri Sword", "Deku Shield", "Fairy Slingshot", "Heart Container", "Kokiri's Emerald"],
  sections: [{
    id: "c01-s01", title: "Kokiri Forest", era: "child", kind: "overworld",
    steps: [{
      id: "c01-s01-01",
      text: "Step out of **Link's House** and climb down the ladder. Saria greets you at the bottom.",
      collect: [], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s01-02",
      text: "Collect Rupees until you hold at least 40. Cut the grass near the ramp and check the blue Rupee behind **Mido's House**.",
      collect: [],
      tip: "Lifting the rocks along the stream and cutting the grass around the Training Center usually covers the cost in a couple of minutes.",
      warn: "", time: "", remake: ""
    }, {
      id: "c01-s01-03",
      text: "Enter **Mido's House** and open its 4 chests for Rupees and a Recovery Heart.",
      collect: ["kf-midos-top-left-chest"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s01-04",
      text: "Buy the **Deku Shield** at the **Kokiri Shop** for 40 Rupees.",
      collect: ["equip-deku-shield"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s01-05",
      text: "Crawl through the small hole on the left side of the **Forest Training Center** to reach the boulder maze.",
      collect: [],
      tip: "",
      warn: "", time: "", remake: "The remake reportedly adds a manual jump and sprint; the maze layout may play differently. Confirm after launch."
    }, {
      id: "c01-s01-06",
      text: "Follow the maze clockwise, stepping into the side alcoves whenever the rolling boulder approaches. Open the chest at the far end for the **Kokiri Sword**.",
      collect: ["kf-kokiri-sword-chest"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s01-07",
      text: "Open the **Equipment** subscreen and equip the **Kokiri Sword** and **Deku Shield**.",
      collect: [],
      tip: "", warn: "", time: "",
      remake: "Previews describe a horizontal item menu. Equipment may sit in a different screen than in the original."
    }, {
      id: "c01-s01-08",
      text: "Show your gear to **Mido** at the path to the Great Deku Tree. He steps aside.",
      collect: [], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s01-09",
      text: "Defeat the Deku Babas along the path for **Deku Sticks** and **Deku Nuts**, then speak to the **Great Deku Tree**.",
      collect: [],
      tip: "Hit a Deku Baba while it stands stiff to get a Deku Stick instead of a Deku Nut.",
      warn: "", time: "", remake: ""
    }]
  }, {
    id: "c01-s02", title: "Inside the Great Deku Tree", era: "child", kind: "dungeon",
    steps: [{
      id: "c01-s02-01",
      text: "Climb the vines on the wall to your left as you enter, then follow the ledge around to the **Map** chest.",
      collect: ["deku-tree-map-chest"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s02-02",
      text: "Go through the door on the second floor. Raise your **Deku Shield** to send the Deku Scrub's nut back at it, then talk to it once it is stunned.",
      collect: [], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s02-03",
      text: "In the next room, defeat the Skulltula hanging over the chest and open it for the **Fairy Slingshot**.",
      collect: ["deku-tree-slingshot-chest"],
      tip: "Wait for the Skulltula to turn and show its back before you strike.",
      warn: "", time: "", remake: ""
    }, {
      id: "c01-s02-04",
      text: "Shoot down the ladder in the same room with the **Fairy Slingshot** and climb to the side chest for a Recovery Heart.",
      collect: ["deku-tree-slingshot-room-side-chest"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s02-05",
      text: "Return to the lobby and climb to the top floor. Enter the room on the far side for the **Compass**.",
      collect: ["deku-tree-compass-chest"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s02-06",
      text: "Kill the **Gold Skulltula** on the vine wall of the Compass room with the **Fairy Slingshot**, then pick up its token.",
      collect: ["deku-tree-gs-compass-room"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s02-07",
      text: "Light a **Deku Stick** on the torch and burn the web on the right wall. Open the side chest behind it.",
      collect: ["deku-tree-compass-room-side-chest"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s02-08",
      text: "Return to the top-floor ledge and jump down onto the large web in the middle of the lobby to break through to the basement.",
      collect: [],
      tip: "", warn: "Breaking the web is one-way until you light the basement torch to climb back. Collect everything above first.", time: "", remake: ""
    }]
  }, {
    id: "c01-s03", title: "The Basement", era: "child", kind: "dungeon",
    steps: [{
      id: "c01-s03-01",
      text: "Open the chest behind the grate to the left of where you land, then kill the **Gold Skulltula** on the vines.",
      collect: ["deku-tree-basement-chest", "deku-tree-gs-basement-vines"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s03-02",
      text: "Carry a lit **Deku Stick** to the web on the floor across the room and burn it to open the way down.",
      collect: [], tip: "The torches here relight sticks; carry the flame quickly.", warn: "", time: "", remake: ""
    }, {
      id: "c01-s03-03",
      text: "Push the block into the water channel and climb onto it to reach the upper ledge. Kill the **Gold Skulltula** behind the gate.",
      collect: ["deku-tree-gs-basement-gate"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s03-04",
      text: "Hit the 3 Deku Scrubs in the order **2, 3, 1** to open the door to the boss chamber.",
      collect: [],
      tip: "The scrubs hint at the order themselves if you talk to the first one you stun.",
      warn: "", time: "", remake: ""
    }]
  }, {
    id: "c01-s04", title: "Queen Gohma", era: "child", kind: "boss",
    steps: [{
      id: "c01-s04-01",
      text: "Defeat **Queen Gohma**, then pick up the **Heart Container**.",
      collect: ["deku-tree-queen-gohma-heart"],
      tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c01-s04-02",
      text: "Step into the blue light. The Great Deku Tree gives you **Kokiri's Emerald**.",
      collect: ["queen-gohma"],
      tip: "", warn: "The Great Deku Tree's dungeon cannot be re-entered as a child after this point.", time: "", remake: ""
    }]
  }],
  boss: {
    id: "boss-gohma", name: "Parasitic Armored Arachnid Gohma",
    weakness: "Her single eye, when it turns red",
    strategy: [
      "Shoot her eye with the Fairy Slingshot when it glows red to knock her down.",
      "Strike her eye with the Kokiri Sword or a Deku Stick while she lies stunned.",
      "When she climbs to the ceiling, stun her with a Deku Nut or Slingshot shot so she falls.",
      "Kill the Gohma Larvae quickly; they hatch from eggs she drops."
    ]
  }
});

OOT.walkthrough.push({
  id: "c02-hyrule-castle", num: 2, title: "Hyrule Field, Lon Lon Ranch & the Princess", era: "child",
  summary: "Leave the forest, sneak into Hyrule Castle, and meet the Princess. Learn your first 2 songs.",
  needs: ["Kokiri's Emerald"],
  gains: ["Fairy Ocarina", "Weird Egg", "Zelda's Letter", "Zelda's Lullaby", "Epona's Song"],
  sections: [{
    id: "c02-s01", title: "Leaving the Forest", era: "child", kind: "overworld",
    steps: [{
      id: "c02-s01-01",
      text: "Cross the bridge out of **Kokiri Forest**. Saria gives you the **Fairy Ocarina**.",
      collect: ["lw-gift-from-saria"], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c02-s01-02",
      text: "Follow the path north across **Hyrule Field** to the drawbridge.",
      collect: [], tip: "",
      warn: "", time: "night",
      remake: "Previews say day and night keep running in towns. Whether the drawbridge timing changes is unconfirmed."
    }]
  }, {
    id: "c02-s02", title: "Hyrule Castle", era: "child", kind: "overworld",
    steps: [{
      id: "c02-s02-01",
      text: "Climb the hill past the guards and talk to **Malon** by the vines for the **Weird Egg**.",
      collect: ["hc-malon-egg"], tip: "", warn: "", time: "day", remake: ""
    }, {
      id: "c02-s02-02",
      text: "Roll into the lone tree on the hill to drop a **Gold Skulltula**.",
      collect: ["hc-gs-tree"], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c02-s02-03",
      text: "Wait for the egg to hatch, then wake **Talon** with the Cucco. Push the crates into the moat to climb into the castle grounds.",
      collect: [], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c02-s02-04",
      text: "Sneak through the courtyard to **Zelda**. She gives you **Zelda's Letter**, and Impa teaches you **Zelda's Lullaby** outside.",
      collect: ["hc-zeldas-letter", "song-from-impa"],
      tip: "", warn: "If a guard spots you, you are thrown out and restart the garden.", time: "", remake: "Ocarina songs can reportedly be hummed into the microphone. Button input remains the reference here."
    }]
  }, {
    id: "c02-s03", title: "Lon Lon Ranch", era: "child", kind: "sweep",
    steps: [{
      id: "c02-s03-01",
      text: "Pay **Talon** 10 Rupees and find the 3 special Cuccos in the coop to win a **Bottle** of Lon Lon Milk.",
      collect: ["llr-talons-chickens"], tip: "", warn: "", time: "day", remake: ""
    }, {
      id: "c02-s03-02",
      text: "Take out your **Fairy Ocarina** next to **Malon** in the corral to learn **Epona's Song**.",
      collect: ["song-from-malon"], tip: "", warn: "", time: "day", remake: ""
    }, {
      id: "c02-s03-03",
      text: "Crawl into the small gap at the back of the storehouse and push the boxes to the **Piece of Heart**.",
      collect: ["llr-freestanding-poh"], tip: "", warn: "", time: "", remake: ""
    }, {
      id: "c02-s03-04",
      text: "Return at night. Roll into the tree beside the ranch entrance and check the rain shed for 2 **Gold Skulltulas**.",
      collect: ["llr-gs-tree", "llr-gs-rain-shed"], tip: "", warn: "", time: "night", remake: ""
    }]
  }],
  boss: null
});
