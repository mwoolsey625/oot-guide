/* FIXTURE — replaced by compiled data
   Design-B sample data. Follows the BRIEF.md schema exactly so the renderer can be
   exercised; the real compiled data/walkthrough-child.js drops in without code changes. */
window.OOT = window.OOT || {};
OOT.walkthrough = OOT.walkthrough || [];

OOT.walkthrough.push({
  id: "c01-deku-tree", num: 1, title: "Kokiri Forest & Inside the Great Deku Tree", era: "child",
  summary: "Arm yourself in Kokiri Forest with a sword and shield, then climb through the Great Deku Tree and defeat Queen Gohma for the first Spiritual Stone.",
  needs: [],
  gains: ["Kokiri Sword", "Deku Shield", "Fairy Slingshot", "Kokiri's Emerald", "Heart Container"],
  sections: [
    {
      id: "c01-s01", title: "Kokiri Forest", era: "child", kind: "overworld",
      steps: [
        { id: "c01-s01-01", text: "Leave **Link's House** and climb down the ladder. **Saria** is waiting at the bottom; talk to her, then explore the village.", collect: [],
          tip: "Cut grass and lift rocks as you go. You need 40 Rupees for the shield.", remake: "Previews report voiced NPCs; the opening scene may run longer than the original." },
        { id: "c01-s01-02", text: "Enter **Mido's House**, the large house beside the path to the Deku Tree, and open its 4 chests for Rupees.", collect: [] },
        { id: "c01-s01-03", text: "Climb to the raised ledge at the south end of the village and crawl through the small gap in the cliff to reach the **Forest Training Ground**.", collect: [],
          tip: "A large boulder rolls through the maze. Step into a side alcove and let it pass." },
        { id: "c01-s01-04", text: "Follow the maze to the chest at its far end and open it for the **Kokiri Sword**.", collect: ["kf-kokiri-sword-chest"] },
        { id: "c01-s01-05", text: "Buy the **Deku Shield** for 40 Rupees in the **Kokiri Shop**, then equip it together with the Kokiri Sword.", collect: ["equip-deku-shield"],
          remake: "Previews report a horizontal item menu. Equipping may use a different screen layout; confirm after launch." },
        { id: "c01-s01-06", text: "Walk up to **Mido** at the entrance to the Deku Tree path with both items equipped. He steps aside.", collect: [] }
      ]
    },
    {
      id: "c01-s02", title: "Great Deku Tree: Upper Floors", era: "child", kind: "dungeon",
      steps: [
        { id: "c01-s02-01", text: "Defeat the 2 **Deku Babas** in the meadow, then enter the **Great Deku Tree** through its mouth.", collect: [],
          tip: "Destroy a Deku Baba after it stiffens to get a **Deku Stick** instead of a Deku Nut." },
        { id: "c01-s02-02", text: "Climb the vine wall on your left as you enter the lobby and follow the ledge to the chest holding the **Dungeon Map**.", collect: [] },
        { id: "c01-s02-03", text: "Go through the door on the second floor. Raise your shield to send the **Deku Scrub**'s nuts back at it, then talk to it.", collect: [] },
        { id: "c01-s02-04", text: "Open the large chest in the next room for the **Fairy Slingshot**.", collect: ["deku-tree-slingshot-chest"] },
        { id: "c01-s02-05", text: "Back in the lobby, climb to the third floor and enter the room on that level. Shoot the **Gold Skulltula** on the vine wall, then climb up and take its token.", collect: ["deku-tree-gs-compass-room"],
          tip: "Gold Skulltulas make a faint scratching sound when you are close." },
        { id: "c01-s02-06", text: "Open the chest in the same room for the **Compass**.", collect: [] },
        { id: "c01-s02-07", text: "Return to the top-floor ledge of the lobby and jump onto the large web on the ground floor to crash through into the basement.", collect: [] }
      ]
    },
    {
      id: "c01-s03", title: "Great Deku Tree: Basement", era: "child", kind: "dungeon",
      steps: [
        { id: "c01-s03-01", text: "In the first basement room, slash the **Gold Skulltula** on the barred gate to your right.", collect: ["deku-tree-gs-basement-gate"] },
        { id: "c01-s03-02", text: "Shoot the **Gold Skulltula** on the vine wall ahead with the **Fairy Slingshot**, then climb the vines to collect its token.", collect: ["deku-tree-gs-basement-vines"] },
        { id: "c01-s03-03", text: "Light a **Deku Stick** on the torch and carry the flame to burn the web covering the passage at the top of the vines.", collect: [],
          warn: "Fire burns the Deku Shield away if it touches it. A replacement costs 40 Rupees in the Kokiri Shop." },
        { id: "c01-s03-04", text: "A fourth **Gold Skulltula** waits in the back room behind a cracked wall. Reaching it needs the **Boomerang** and a way to break the wall, so leave it for later.", collect: [],
          tip: "The Gold Skulltula tracker lists it under Deku Tree with a link to the chapter where it is collected." },
        { id: "c01-s03-05", text: "Push the block in the next room against the ledge and climb over it to the upper passage.", collect: [] },
        { id: "c01-s03-06", text: "Send nuts back at the 3 **Deku Scrubs** in the final room in the order 2, 3, then 1. The last one opens the way down to the boss.", collect: [],
          tip: "If you hit them out of order, they all return. Leave the room and come back to reset them." }
      ]
    },
    {
      id: "c01-s04", title: "Queen Gohma", era: "child", kind: "boss",
      steps: [
        { id: "c01-s04-01", text: "Drop into the boss chamber and look up. **Queen Gohma** clings to the ceiling.", collect: [] },
        { id: "c01-s04-02", text: "After the fight, take the **Heart Container** and step into the blue light.", collect: ["deku-tree-queen-gohma-heart"] },
        { id: "c01-s04-03", text: "The Great Deku Tree gives you **Kokiri's Emerald**.", collect: ["queen-gohma"],
          remake: "Previews mention a \"Threads of Time\" story log; this scene may add an entry there." }
      ]
    }
  ],
  boss: {
    id: "boss-gohma", name: "Parasitic Armored Arachnid Gohma",
    weakness: "Its single eye, while it glows red",
    strategy: [
      "Stay near the center so you can track it when it climbs to the ceiling.",
      "When the eye turns red, hit it with a **Fairy Slingshot** seed to knock Gohma to the floor.",
      "Run in and slash the eye with the **Kokiri Sword** until it recovers.",
      "Clear any Gohma Larvae that hatch from dropped eggs before they surround you.",
      "Repeat 3 to 4 times."
    ]
  }
});

OOT.walkthrough.push({
  id: "c02-hyrule-castle", num: 2, title: "Hyrule Field, Lon Lon Ranch & the Princess", era: "child",
  summary: "Leave the forest for the first time, cross Hyrule Field, and sneak into the castle courtyard to meet Princess Zelda.",
  needs: ["Kokiri's Emerald"],
  gains: ["Fairy Ocarina", "Weird Egg", "Zelda's Letter", "Zelda's Lullaby"],
  sections: [
    {
      id: "c02-s01", title: "Leaving the Forest", era: "child", kind: "overworld",
      steps: [
        { id: "c02-s01-01", text: "Cross the wooden bridge out of Kokiri Forest. **Saria** stops you and gives you the **Fairy Ocarina**.", collect: ["lw-gift-from-saria"] },
        { id: "c02-s01-02", text: "Cross **Hyrule Field** toward the drawbridge of **Castle Town**, on the far side of the field from the forest.", collect: [],
          tip: "The drawbridge rises at nightfall. If night falls before you arrive, wait beside it until morning.",
          remake: "Day and night are reported to keep running in towns in the remake; drawbridge timing may differ." }
      ]
    },
    {
      id: "c02-s02", title: "Castle Town & Hyrule Castle", era: "child", kind: "overworld",
      steps: [
        { id: "c02-s02-00", text: "Inside the drawbridge, enter the **guard house** on your left and break the crates to find a **Gold Skulltula**.", collect: ["market-gs-guard-house"] },
        { id: "c02-s02-01", text: "Pass through the **Market** and take the path on the left to **Hyrule Castle**. Talk to **Malon** beside the vines for the **Weird Egg**.", collect: ["hc-malon-egg"] },
        { id: "c02-s02-02", text: "Roll into the lone tree near the castle path to knock down a **Gold Skulltula**.", collect: ["hc-gs-tree"] },
        { id: "c02-s02-03", text: "Climb the vines on the right, then wait by the moat until the **Weird Egg** hatches into a **Cucco**.", collect: [], time: "night",
          tip: "The egg hatches at the next dawn. Standing still lets time pass outdoors." },
        { id: "c02-s02-04", text: "Wake **Talon** with the Cucco, then push his milk crates into the moat and crawl through the drain.", collect: [] },
        { id: "c02-s02-05", text: "Slip past the guards in the courtyard and talk to **Princess Zelda**. She gives you **Zelda's Letter**.", collect: ["hc-zeldas-letter"],
          warn: "If a guard spots you, you are thrown out at the gate and must climb back in." },
        { id: "c02-s02-06", text: "**Impa** teaches you **Zelda's Lullaby** as she escorts you out.", collect: ["song-from-impa"] }
      ]
    },
    {
      id: "c02-s03", title: "Night Sweep: Ranch & Forest", era: "child", kind: "sweep",
      steps: [
        { id: "c02-s03-01", text: "Return to **Lon Lon Ranch** after dark. Slash the **Gold Skulltula** on the rain shed beside the stable.", collect: ["llr-gs-rain-shed"], time: "night" },
        { id: "c02-s03-02", text: "Roll into the tree near the ranch entrance for another **Gold Skulltula**.", collect: ["llr-gs-tree"] },
        { id: "c02-s03-03", text: "Head back to **Kokiri Forest** while it is still night. Slash the **Gold Skulltula** on the back wall of the **Know-It-All Brothers' House**.", collect: ["kf-gs-know-it-all-house"], time: "night",
          tip: "This one only appears at night, and night never comes to the forest until you have left it once." }
      ]
    }
  ],
  boss: null
});
