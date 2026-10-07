window.OOT = window.OOT || {};
OOT.walkthrough = OOT.walkthrough || [];

/* Child-era walkthrough, chapters c01-c06. Baseline = the original game (N64 / GameCube / 3DS).
   remake notes cover the Switch 2 version and are hidden when the reader picks N64.
   Compile notes and source decisions: research/compile-notes-child.md */

// ---------------------------------------------------------------- c01
OOT.walkthrough.push({
  id: "c01-deku-tree", num: 1, title: "Kokiri Forest & Inside the Great Deku Tree", era: "child",
  summary: "Arm Link with a sword and shield in Kokiri Forest, then climb through the Great Deku Tree and defeat Queen Gohma for the first Spiritual Stone, Kokiri's Emerald.",
  needs: [],
  gains: ["Kokiri Sword", "Deku Shield", "Fairy Slingshot", "Kokiri's Emerald", "Heart Container", "3 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c01-s01", title: "Kokiri Forest", era: "child", kind: "overworld",
      steps: [
        { id: "c01-s01-01",
          text: "You start in the **Kokiri Tunic** and **Kokiri Boots**, and Mido will not let you reach the **Great Deku Tree** until you carry a sword and a shield, so start gathering Rupees. Enter **Mido's House**, across from the fenced training area in the village's southwest corner, and open its 4 chests for 11 Rupees and a Recovery Heart.",
          collect: ["equip-kokiri-tunic", "equip-kokiri-boots", "kf-midos-top-left-chest", "kf-midos-top-right-chest", "kf-midos-bottom-left-chest", "kf-midos-bottom-right-chest"],
          tip: "More Rupees: cut grass, cross the stepping stones in the stream between Mido's House and the Kokiri Shop, and check the side passage inside the shop. Most of them come back after you leave and re-enter a building." },
        { id: "c01-s01-02",
          text: "At the fenced **Forest Training Center**, crawl through the small hole beside the sign and follow the passage. A boulder rolls along it, so step into a side alcove to let it pass, then open the large chest in the far alcove for the **Kokiri Sword**.",
          collect: ["kf-kokiri-sword-chest"],
          tip: "2 Blue Rupees lie along the passage: one just round the first corner, and one down the first turn on the right after the boulder." },
        { id: "c01-s01-03",
          text: "Once you have 40 Rupees, buy the **Deku Shield** in the **Kokiri Shop**, then equip it together with the Kokiri Sword.",
          collect: ["kf-shop-item-1"],
          tip: "The shop also sells Deku Nuts (5 for 15 Rupees) and single Deku Sticks (10 Rupees), but the forest gives you both for free.",
          remake: "Nintendo has confirmed a reworked item system with single-button item swapping, so the equipment and item screens may look different from the original." },
        { id: "c01-s01-04",
          text: "Talk to Mido with both items equipped and he steps aside. Cut down the 3 Withered Deku Babas on the path for your first **Deku Sticks**, then speak to the Great Deku Tree and walk into his mouth.",
          collect: ["item-deku-stick"],
          tip: "Live Deku Babas, which you meet just inside the tree, leave Deku Nuts when cut down normally and Deku Sticks when struck while they stand stiff." }
      ]
    },
    {
      id: "c01-s02", title: "Inside the Deku Tree: Upper Floors", era: "child", kind: "dungeon",
      steps: [
        { id: "c01-s02-01",
          text: "Cut down the Deku Babas by the entrance for **Deku Nuts**. Then climb the wooden walkway that winds up the wall of the main room, using the ladder or the vines, and follow it round to the large chest with the **Dungeon Map**.",
          collect: ["item-deku-nut", "deku-tree-map-chest"],
          tip: "Equip Deku Sticks and Deku Nuts now; this dungeon uses both. The web over the middle of the floor can't be broken yet." },
        { id: "c01-s02-02",
          text: "Take the door at the end of the walkway and raise your shield so the Deku Scrub's nut bounces back and hits it. In the next room, cross the platform to the large chest with the **Fairy Slingshot**, then climb the vines to a small chest with a Recovery Heart.",
          collect: ["deku-tree-slingshot-chest", "deku-tree-slingshot-room-side-chest"],
          tip: "The platform you crossed breaks away. To get back out, shoot the ladder hanging above the door with the Fairy Slingshot so it drops.",
          remake: "One walkthrough site reports that the Switch 2 version lowers this ladder with an eye switch instead; this is unconfirmed. The remake's confirmed jump button may also change how you cross the platform." },
        { id: "c01-s02-03",
          text: "Back in the main room, shoot the Skullwalltulas off the vine wall on the map-chest side, climb it to the top floor and go through the door there. Step on the switch to raise 3 platforms for a short time and cross on them to the large chest with the **Compass**.",
          collect: ["deku-tree-compass-chest"],
          tip: "Big Skulltulas can only be hurt from behind. Get close so they drop, wait for them to turn, then strike." },
        { id: "c01-s02-04",
          text: "Drop to the floor of this room, defeat the Big Skulltula and the Deku Baba, climb back up and use the switch again, this time riding the platforms to the alcove on the left. Open the small chest for a Recovery Heart, then defeat the Gold Skulltula on the wall behind it and take its token.",
          collect: ["deku-tree-compass-room-side-chest", "deku-tree-gs-compass-room"],
          tip: "Bars close the way out. Light a Deku Stick at the burning torch and touch it to the unlit one to lift them, then put the stick away before it burns down." }
      ]
    },
    {
      id: "c01-s03", title: "Inside the Deku Tree: Basement", era: "child", kind: "dungeon",
      steps: [
        { id: "c01-s03-01",
          text: "From the top floor, jump so that Link lands in the exact center of the web over the main room floor; it tears and drops you into the flooded basement. Turn to the vines that lead back up, shoot the Gold Skulltula on them with the Fairy Slingshot and climb up for its token.",
          collect: ["deku-tree-gs-basement-vines"],
          tip: "Landing near the edge of the web only bounces you off. Climb back up and try again.",
          remake: "The remake replaces automatic jumping with a jump button (confirmed). Jumping onto the web may work differently; confirm after launch." },
        { id: "c01-s03-02",
          text: "Shoot the Gold Skulltula on the barred gate, then jump down to its token from the platform beside it. Press the switch on the raised platform to light the nearby torch, then burn the web next to the torch with a lit Deku Stick and open the small chest behind it for a Recovery Heart.",
          collect: ["deku-tree-gs-basement-gate", "deku-tree-basement-chest"] },
        { id: "c01-s03-03",
          text: "Light a Deku Stick at the torch and run through the shallow water to burn the web over the far door. Beyond it, bounce the Deku Scrub's nut back to beat it and remember its hint, then shoot the eye switch above the next door with the Fairy Slingshot.",
          collect: [] },
        { id: "c01-s03-04",
          text: "In the flooded room, dive onto the switch underwater on the left to lower the water for a moment, then ride the floating platform under the spiked log. Defeat the Big Skulltula, push the stone block under the high doorway and climb through.",
          collect: [],
          remake: "Nintendo confirms Link swims faster and can dive freely in the remake, which may make this room easier." },
        { id: "c01-s03-05",
          text: "Light both unlit torches with a Deku Stick to open the door. In the next room, shoot the Big Skulltula ahead twice in the back from the doorway, then burn the far web and crawl through; leave the other web and the cracked wall behind it for chapter 6.",
          collect: [],
          tip: "Walking near the 3 shadows on the floor makes eggs drop and hatch into Gohma Larvae." },
        { id: "c01-s03-06",
          text: "On the ledge beyond, push the stone block off the edge to make a way back up. Light a Deku Stick at the low torch you used before, climb back over the block and roll onto the web in the floor so the flame burns it, then drop through.",
          collect: [] },
        { id: "c01-s03-07",
          text: "Bounce nuts back at the 3 Deku Scrubs in the order middle, right, left (the hint was 2, 3, 1); a wrong order resets them. The last one gives a tip about the boss and the door to Queen Gohma opens.",
          collect: [],
          tip: "Dive in the water here for Recovery Hearts before the fight." }
      ]
    },
    {
      id: "c01-s04", title: "Queen Gohma", era: "child", kind: "boss",
      steps: [
        { id: "c01-s04-01",
          text: "Enter the boss chamber and look up at the ceiling to wake Queen Gohma. Stun her each time her eye turns red and attack while she is down (see the boss card), then take the **Heart Container** and step into the blue light; outside, the Great Deku Tree gives you **Kokiri's Emerald**, the Spiritual Stone of the Forest.",
          collect: ["deku-tree-queen-gohma-heart", "queen-gohma"],
          warn: "The door seals behind you. Stock up on Deku Sticks and Deku Nuts before going in.",
          tip: "Pick up the Heart Container before stepping into the light, which ends the visit." }
      ]
    }
  ],
  boss: {
    id: "boss-gohma", name: "Parasitic Armored Arachnid Gohma",
    weakness: "Her eye while it glows red. A Deku Seed from the Fairy Slingshot stuns her best; a Deku Nut also works.",
    strategy: [
      "When her eye turns red, shoot it with the Fairy Slingshot and she falls over, stunned. A Deku Nut also stuns her, but for a shorter time.",
      "While she is down, strike with the Kokiri Sword or a Deku Stick. A Deku Stick jump attack does the most damage.",
      "When she climbs onto the ceiling, shoot her eye there for the longest stun. If she stays up, she drops 3 eggs: shoot them before they hatch, or defeat each larva with 2 sword hits.",
      "When she lunges at you, raise your shield or step aside."
    ]
  }
});
// end c01

// ---------------------------------------------------------------- c02
OOT.walkthrough.push({
  id: "c02-hyrule-castle", num: 2, title: "Hyrule Field, Lon Lon Ranch & the Princess", era: "child",
  summary: "Cross Hyrule Field to Hyrule Castle, hatch Malon's egg to wake her father, sneak past the guards to Princess Zelda, and learn Zelda's Lullaby and Epona's Song.",
  needs: ["Kokiri's Emerald", "Fairy Slingshot"],
  gains: ["Fairy Ocarina", "Zelda's Letter", "Zelda's Lullaby", "Epona's Song", "Bottle (Lon Lon Milk)", "Deku Seed Bullet Bag upgrade", "2 Pieces of Heart", "4 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c02-s01", title: "Hyrule Field to the Market", era: "child", kind: "overworld",
      steps: [
        { id: "c02-s01-01",
          text: "Leave Kokiri Forest by the exit on the far side of the village. Saria is waiting on the bridge and gives you the **Fairy Ocarina**.",
          collect: ["lw-gift-from-saria"],
          tip: "In Hyrule Field the owl Kaepora Gaebora stops you. When he asks whether you want to hear it again, pick the answer that declines; the game swaps the order of the choices, so read them." },
        { id: "c02-s01-02",
          text: "Before heading north to the castle, detour to the **Lake Hylia** gate on the southern edge of the field. Just east of the fenced square in front of the gate, an open hole in the ground leads to a grotto with a chest of 5 Rupees.",
          collect: ["hf-open-grotto-chest"],
          tip: "The drawbridge into Hyrule Castle Town rises at nightfall and stays shut to a child until morning. Daylight lasts about 2 minutes of running; if night catches you, wait on a dirt path, where Stalchildren don't appear, until the rooster crows.",
          remake: "Nintendo confirms that time now keeps running everywhere, so the length of the day and the drawbridge timing may differ; confirm after launch." },
        { id: "c02-s01-03",
          text: "Cross the drawbridge into **Hyrule Castle Town** and enter the guard house just inside the entrance. Roll into the lone crate next to the guard to free a Gold Skulltula, then defeat it and take its token.",
          collect: ["market-gs-guard-house"],
          tip: "The guard lets you smash the pots here, and they refill every visit: a handy Rupee source." },
        { id: "c02-s01-04",
          text: "In the **Market**, play the **Shooting Gallery** for 20 Rupees: hit all 10 targets, which are shaped like Rupees, with your 15 shots to win a bigger **Deku Seed Bullet Bag**. Hitting 8 or 9 earns a free retry, and the targets follow the same pattern every game.",
          collect: ["market-shooting-gallery-reward"],
          time: "day",
          remake: "Nintendo confirms optional motion aiming for the slingshot. The gallery only opens by day, and the Market's clock now keeps running, so it can close while you are in town." },
        { id: "c02-s01-05",
          text: "Optional: the **Bazaar** sells the **Hylian Shield** for 80 Rupees. This guide takes a free one from **Kakariko Graveyard** in chapter 3 instead; if you buy one now, that grave holds a Blue Rupee.",
          collect: ["market-bazaar-item-1"],
          time: "day" }
      ]
    },
    {
      id: "c02-s02", title: "Hyrule Castle and the Market at Night", era: "child", kind: "overworld",
      steps: [
        { id: "c02-s02-01",
          text: "Follow the road from the Market toward **Hyrule Castle**. The owl perches in a tree beside the road; once he flies off, roll into that tree and defeat the Gold Skulltula that drops.",
          collect: ["hc-gs-tree"] },
        { id: "c02-s02-02",
          text: "Malon is not at the castle on your first visit. Walk back into the Market, return to the castle road, and find her by the vines on the castle wall; she gives you the **Weird Egg** and asks you to find her father.",
          collect: ["hc-malon-egg"] },
        { id: "c02-s02-03",
          text: "The egg hatches at the next dawn, so use the night in between. Time passes on the castle road but not in the Market: wait there until nightfall, walk back down into the Market, and touch the white dog below the open window left of the drawbridge so it follows you. Lead it into the **Back Alley** and through the open door of its owner's house for a **Piece of Heart**.",
          collect: ["market-lost-dog"],
          time: "night",
          tip: "Other dogs that start following you get in the way. Walk away from them before you pick up the white one.",
          remake: "Nintendo says time now passes in towns too, so night may arrive while you are in the Market, and night-only events can end while you are there. The Market is also rebuilt as a 3D square, so landmarks such as the open window may sit differently." },
        { id: "c02-s02-04",
          text: "Go back up to the castle road and wait for morning; at dawn the egg hatches into a Cucco. Climb the central vine on the castle wall, drop down past the gate and slip along the hillside left of the path out of the guards' sight, then climb the wall left of the main gate and swim the moat to its far corner, where Talon is asleep. Use the Cucco on him and he wakes and runs home to the ranch.",
          collect: ["item-chicken", "event-wake-talon-castle"],
          tip: "Waking Talon here is what later lets Malon teach you her song and Talon run his Cucco game at Lon Lon Ranch." },
        { id: "c02-s02-05",
          text: "While it is day, push the 2 crates next to Talon's spot into the water so they stack, climb them and crawl through the drain into the castle grounds. Sneak through the courtyard, staying behind the guards and out of their line of sight, to Princess Zelda: she gives you **Zelda's Letter**, then Impa teaches you **Zelda's Lullaby** and leads you out.",
          collect: ["hc-zeldas-letter", "song-from-impa"],
          time: "day",
          tip: "At night 2 guards wait at the drain and throw you out. If a courtyard guard spots you, you restart from the courtyard entrance.",
          remake: "Nintendo confirms songs can be played with the controller or by humming into the Switch 2 microphone; the note-to-button layout is not announced yet." }
      ]
    },
    {
      id: "c02-s03", title: "Lon Lon Ranch", era: "child", kind: "overworld",
      steps: [
        { id: "c02-s03-01",
          text: "Go to **Lon Lon Ranch** in the middle of Hyrule Field while it is day. Talk to Malon in the corral until she mentions her mother's song, then take out the Fairy Ocarina to learn **Epona's Song**.",
          collect: ["song-from-malon"],
          time: "day",
          remake: "Nintendo says time now passes wherever you are, while the original froze it inside the ranch, so the daytime-only events here can end while you are inside." },
        { id: "c02-s03-02",
          text: "Enter the first door on the left, where Talon is back, and play his Super Cucco game for 10 Rupees: find the 3 Super Cuccos among the others within 30 seconds and bring them to him. Winning earns a **Bottle** of **Lon Lon Milk**.",
          collect: ["llr-talons-chickens"],
          time: "day",
          tip: "Before talking to Talon, throw most of the ordinary Cuccos into the gap between the table and the stairs. After a loss, a retry costs 5 Rupees.",
          remake: "The remake's confirmed dash may make the 30-second limit easier; the timer itself is unconfirmed." },
        { id: "c02-s03-03",
          text: "Outside, walk toward the corral and turn left around the corner. Roll into the lone tree and defeat the Gold Skulltula that falls out.",
          collect: ["llr-gs-tree"] },
        { id: "c02-s03-04",
          text: "In the stone building at the back corner of the ranch, outside the corral, push and pull the crates aside and crawl through the gap behind them for a **Piece of Heart**. Then empty your Bottle and play Epona's Song next to each of the 2 cows here for fresh milk.",
          collect: ["llr-freestanding-poh", "llr-tower-left-cow", "llr-tower-right-cow"],
          tip: "A cow only gives milk into an empty Bottle, and a full Bottle holds 2 drinks, so drink it all before each cow." },
        { id: "c02-s03-05",
          text: "Empty the Bottle again and play Epona's Song for each of the 2 cows in the ranch's stable.",
          collect: ["llr-stables-left-cow", "llr-stables-right-cow"] },
        { id: "c02-s03-06",
          text: "Leave the ranch, wait in Hyrule Field until night falls, then come back in. Follow the outside of the corral to the roofed shelter on its far side (lower right on the map) and defeat the Gold Skulltula on its back boards.",
          collect: ["llr-gs-rain-shed"],
          time: "night",
          tip: "Time stands still inside the ranch, so night only comes while you are out in the field. Guays dive at you here after dark.",
          remake: "Nintendo says time now passes wherever you are, so in the remake you can probably just wait inside the ranch for night." }
      ]
    }
  ],
  boss: null
});
// end c02

// ---------------------------------------------------------------- c03
OOT.walkthrough.push({
  id: "c03-kakariko-lost-woods", num: 3, title: "Kakariko, Lost Woods & Death Mountain", era: "child",
  summary: "Open the Death Mountain gate in Kakariko Village, learn the Sun's Song and Saria's Song, sweep the village, the Graveyard and the forest for collectibles, and win Darunia's trust for the Goron's Bracelet.",
  needs: ["Zelda's Letter", "Zelda's Lullaby", "Epona's Song", "Bottle", "Fairy Slingshot"],
  gains: ["Sun's Song", "Saria's Song", "Bottle", "Hylian Shield", "Adult's Wallet", "Deku Stick capacity upgrade", "Deku Seed Bullet Bag upgrade", "Goron's Bracelet", "5 Pieces of Heart", "10 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c03-s01", title: "Kakariko Village by Day", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s01-01",
          text: "Enter **Kakariko Village** from Hyrule Field and climb to the gate at the top of the village. Show **Zelda's Letter** to the guard: he opens the way to **Death Mountain Trail** and mentions that his son wants a mask from the **Happy Mask Shop**, which now opens in the Market.",
          collect: ["event-zeldas-letter-to-guard"],
          tip: "This guide runs the mask trades in chapter 6, once every buyer is available, so leave the shop for now. If you arrive at night, it stays night in the village: after the guard, go back down to Hyrule Field and wait near the Kakariko stairs until the rooster crows, then return for Anju." },
        { id: "c03-s01-02",
          text: "Anju, by the Cucco pen, wants her 7 Cuccos back, and 2 of them are in the fenced yard at the back of the village, between the 2 potion shops. Carry a Cucco up the stairs by the Graveyard entrance and glide from the ledge over the tall fence. Inside, drop into the open hole for a grotto chest with 20 Rupees, then throw both yard Cuccos (one is up a tall ladder) back over the fence.",
          collect: ["kak-open-grotto-chest"],
          time: "day",
          remake: "The remake replaces automatic jumping with a jump button (confirmed); Cucco glides may handle differently." },
        { id: "c03-s01-03",
          text: "Gather the other 5: one beside Anju, one at the village entrance, one inside a crate near the stairs left of the entrance (roll into it), one near the gate guard, and one on the high ledge by the **House of Skulltula**. When all 7 are in the pen, Anju gives you an **Empty Bottle**.",
          collect: ["kak-anju-as-child"],
          time: "day",
          tip: "To get the ledge Cucco down without gliding, hit it with a Deku Nut and catch it when it runs off the edge. Never attack a Cucco repeatedly, or a swarm attacks you.",
          remake: "Nintendo says time now passes in towns, and Anju only runs this by day, so evening can arrive mid-hunt." }
      ]
    },
    {
      id: "c03-s02", title: "Kakariko Graveyard", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s02-01",
          text: "Enter **Kakariko Graveyard** right of the windmill and go to the large tomb at the back. Stand on the Triforce mark in front of it and play **Zelda's Lullaby**; lightning blows open the **Royal Family's Tomb**. Inside, defeat the 5 Keese to open the door, slip past the ReDeads, and read the inscription at the end to learn the **Sun's Song**.",
          collect: ["song-from-royal-familys-tomb"],
          tip: "Don't let a ReDead see your face; its scream holds you in place. The Sun's Song freezes them for a moment, and the colored pad in the first room takes you back to the surface.",
          remake: "Songs can be played with the controller or by humming into the microphone (confirmed); the note layout is not announced yet." },
        { id: "c03-s02-02",
          text: "Dampé's gravedigging tour runs only from 18:00 to 21:00, and time stands still in the Graveyard, so arrive in that window and it stays open while you work. Go out to Hyrule Field, play the Sun's Song by day to bring on evening, and walk straight back. Then pull the grave second from the left in the front row, the one with 3 small flowers in front, and drop in for the **Hylian Shield**.",
          collect: ["graveyard-shield-grave-chest"],
          time: "night",
          tip: "Playing the Sun's Song where time is frozen jumps the clock to midnight, too late for Dampé. If it is already night in the field, play the song twice. A child can only pull graves at night, when the boy who guards them has gone home.",
          remake: "Nintendo says time now passes wherever you are, so the Graveyard's evening window can close while you work; confirm Dampé's hours after launch." },
        { id: "c03-s02-03",
          text: "In the back row nearest the Royal Family's Tomb, stand with your back to the tomb and pull the fourth grave from the left (the second from the left as you walk in from the entrance), then drop in. Freeze the ReDead with the Sun's Song and defeat it from behind, then play the Sun's Song again on the platform steps to make a chest with a **Piece of Heart** appear.",
          collect: ["graveyard-heart-piece-grave-chest"],
          time: "night",
          tip: "The right grave has a ReDead inside. If yours doesn't, climb out and try its neighbor." },
        { id: "c03-s02-04",
          text: "Find Dampé outside his hut and pay 10 Rupees per dig on the soft spots along his path. Each dig turns up Rupees or the **Piece of Heart**; within 15 digs on one visit the Piece of Heart is certain.",
          collect: ["graveyard-dampe-gravedigging-tour"],
          time: "night",
          remake: "This is an 18:00-21:00 event; with time now running everywhere (confirmed), the window may close while you dig." },
        { id: "c03-s02-05",
          text: "Lift the lone rock in the bush patch by the Graveyard entrance and catch the Bugs under it in a Bottle. Release them on the soft soil on the left side of the Graveyard, near the row of graves, and defeat the Gold Skulltula that crawls out.",
          collect: ["graveyard-gs-bean-patch"],
          tip: "Drink the milk first so the Bottle is empty. With 2 Bottles you can carry Bugs for 2 soil patches at once." }
      ]
    },
    {
      id: "c03-s03", title: "Kakariko Village at Night", era: "child", kind: "sweep",
      steps: [
        { id: "c03-s03-01",
          text: "Return to the village while it is still night; time stands still here too. Roll into the tree near the entrance from Hyrule Field, then defeat the Gold Skulltula on the unfinished building in the middle of the village and the one on the side wall of the House of Skulltula.",
          collect: ["kak-gs-tree", "kak-gs-house-under-construction", "kak-gs-skulltula-house"],
          time: "night",
          remake: "Nintendo says time now passes in towns, so night can end during this sweep; play the Sun's Song or wait if it does." },
        { id: "c03-s03-02",
          text: "Defeat the Gold Skulltula on the side of the house left of the Death Mountain gate. Then shoot the one on the watchtower ladder with the **Fairy Slingshot** and climb the ladder to its token.",
          collect: ["kak-gs-near-gate-guard", "kak-gs-watchtower"],
          time: "night" },
        { id: "c03-s03-03",
          text: "Enter the House of Skulltula and talk to the child freed from the curse: 10 tokens earn the **Adult's Wallet**, which holds 200 Rupees. You should have 13 tokens now.",
          collect: ["kak-10-gold-skulltula-reward"],
          tip: "Every 10 tokens frees another family member with a new reward." }
      ]
    },
    {
      id: "c03-s04", title: "Death Mountain Trail and the Goron City Shortcut", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s04-01",
          text: "Go through the gate and up Death Mountain Trail, past the Red Tektites and the Goron by the giant boulder. Within sight of the **Goron City** entrance, find the ledge where a Goron sits by a Bomb Flower; stand at the low part of the fence beside the flower and backflip over it to land on the ledge above the cavern entrance, which holds a **Piece of Heart**.",
          collect: ["dmt-freestanding-poh"],
          tip: "Expect to lose a little health from the drop. A Goron rolls down the upper path; keep to the side to avoid being knocked over.",
          remake: "The remake adds a jump button (confirmed), so you may be able to hop the fence or reach the ledge another way; confirm the method after launch." },
        { id: "c03-s04-02",
          text: "In Goron City, go down to the bottom floor and play Zelda's Lullaby on the mat in front of Darunia's door; he refuses to help for now. Light a Deku Stick at the torch in his room, light the torches on the bottom floor, then carry the flame to the Bomb Flowers beside the boulders blocking a passage on the floor above, where a Goron talks about music; the blast opens a tunnel into the **Lost Woods**.",
          collect: [],
          tip: "Lighting the bottom-floor torches also starts the big urn spinning. Its Piece of Heart needs a Bomb Flower (once you have the Goron's Bracelet) or a Bomb thrown in from the floor above; this guide takes it in chapter 4." }
      ]
    },
    {
      id: "c03-s05", title: "Lost Woods and Sacred Forest Meadow", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s05-01",
          text: "A wrong exit in the Lost Woods sends you to the Kokiri Forest entrance, and every direction here starts from there, so take any exit out and come back in. Go right, drop to the lower stump and stand on it: 2 Skull Kids play tunes for you to repeat over 3 rounds of 5, 6 and 8 notes, and winning the third round earns a **Piece of Heart**.",
          collect: ["lw-ocarina-memory-game"],
          remake: "The note-to-button layout on Switch 2 is not announced, and it is unknown whether humming works in this game; confirm after launch." },
        { id: "c03-s05-02",
          text: "In the same clearing, hit the dead center of the target hanging from the tree 3 times in a row with the Fairy Slingshot. A Deku Scrub pops out and rewards you with a bigger **Deku Seed Bullet Bag**.",
          collect: ["lw-target-in-woods"],
          remake: "Nintendo confirms optional motion aiming for the slingshot." },
        { id: "c03-s05-03",
          text: "From the entrance go left, then left again to the clearing with the bridge, and climb down to the low ground. Bounce a Business Scrub's nut back at it and pay 40 Rupees for a Deku Stick capacity upgrade, then release Bugs on the soft soil here and defeat the Gold Skulltula.",
          collect: ["lw-deku-scrub-near-bridge", "lw-gs-bean-patch-near-bridge"],
          tip: "Bugs live under rocks all over the Lost Woods." },
        { id: "c03-s05-04",
          text: "Follow right, left, right, left, left from the entrance to a meadow with Business Scrubs. Release Bugs on the soft soil on its right side and defeat the Gold Skulltula.",
          collect: ["lw-gs-bean-patch-near-theater"] },
        { id: "c03-s05-05",
          text: "Follow the music to **Sacred Forest Meadow**: right, left, right, left, straight, left, right. A Wolfos appears at the gate; raise your shield, strike when it lunges or shows its back, and the bars lift when it falls.",
          collect: [],
          tip: "A Deku Stick hits harder than the Kokiri Sword. The Wolfos does not come back once beaten." },
        { id: "c03-s05-06",
          text: "Work through the hedge maze past the Mad Scrubs, keeping your shield up against their bursts of 3 nuts, and at the far end climb the stairs to Saria. She teaches you **Saria's Song**.",
          collect: ["song-from-saria"],
          tip: "On the way out, climb the ladder at the foot of the ramp and run back along the hedge tops. A hole in the middle of them leads down to a Fairy Fountain." }
      ]
    },
    {
      id: "c03-s06", title: "Back Through the Forest to Darunia", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s06-01",
          text: "In the Lost Woods, go left from the Kokiri Forest entrance, stand on the low stump and play Saria's Song for the Skull Kid on the stump facing you. He gives you a **Piece of Heart**.",
          collect: ["lw-skull-kid"] },
        { id: "c03-s06-02",
          text: "In **Kokiri Forest**, release Bugs on the soft soil right behind the **Kokiri Shop** and defeat the Gold Skulltula.",
          collect: ["kf-gs-bean-patch"] },
        { id: "c03-s06-03",
          text: "Play the Sun's Song to bring night to the village, which otherwise never leaves daytime. Behind the **Know-It-All Brothers' House** in the southwest of the village, defeat the Gold Skulltula on the back wall, then target it and jump-attack to reach its token.",
          collect: ["kf-gs-know-it-all-house"],
          time: "night",
          remake: "Nintendo says time now passes wherever you are, so you can probably just wait in the village for night instead of playing the Sun's Song." },
        { id: "c03-s06-04",
          text: "Go back into the Lost Woods and take the tunnel to Goron City (from the entrance, right, then straight on). Play Zelda's Lullaby on Darunia's door again if it has closed, then play Saria's Song for him; he dances and gives you the **Goron's Bracelet**, which lets you pull up Bomb Flowers.",
          collect: ["gc-darunias-joy"],
          tip: "Before you leave the forest, catch Bugs in a Bottle. Chapter 4 opens with a soft-soil Gold Skulltula on Death Mountain, where no Bugs live." }
      ]
    }
  ],
  boss: null
});
// end c03

// ---------------------------------------------------------------- c04
OOT.walkthrough.push({
  id: "c04-dodongos-cavern", num: 4, title: "Dodongo's Cavern", era: "child",
  summary: "Use the Goron's Bracelet to open Dodongo's Cavern, find the Bomb Bag inside and defeat King Dodongo for the Goron's Ruby, then put Bombs to work all over Death Mountain.",
  needs: ["Goron's Bracelet", "Hylian Shield", "Fairy Slingshot", "Zelda's Lullaby", "Epona's Song", "Bottle with Bugs"],
  gains: ["Bomb Bag", "Goron's Ruby", "Heart Container", "Bomb Bag upgrade", "Magic Meter", "Stone of Agony", "3 Pieces of Heart", "7 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c04-s01", title: "Opening Dodongo's Cavern", era: "child", kind: "overworld",
      steps: [
        { id: "c04-s01-01",
          text: "Leave Goron City by its upper exit and turn to the ledge where the Goron sits by a Bomb Flower. Pull up the Bomb Flower and throw it straight off the ledge onto the giant boulder below; the blast clears the entrance to **Dodongo's Cavern**.",
          collect: [] },
        { id: "c04-s01-02",
          text: "Release Bugs on the soft soil uncovered beside the cavern entrance and defeat the Gold Skulltula that crawls out.",
          collect: ["dmt-gs-bean-patch"],
          tip: "No Bugs live on the mountain. If you have none, the rock by the Kakariko Graveyard entrance always has some." }
      ]
    },
    {
      id: "c04-s02", title: "Dodongo's Cavern: Lower Floor", era: "child", kind: "dungeon",
      steps: [
        { id: "c04-s02-01",
          text: "Throw a Bomb Flower at the cracked wall inside the entrance. In the main cavern, reach the left side (over the center platform, or along the lava edge and up a ladder), throw the lone Bomb Flower there at the cracked wall and open the chest for the **Dungeon Map**.",
          collect: ["dodongos-cavern-map-chest"],
          tip: "Keep clear of the Beamos on the center platform; a Bomb Flower destroys it. The next cracked wall on this side hides a Business Scrub that sells Deku Shields.",
          warn: "Fire Keese and fire breath burn a Deku Shield held up against them, and the shield is lost. Equip the **Hylian Shield** before going further." },
        { id: "c04-s02-02",
          text: "On the far side of the main cavern, destroy the Beamos with a Bomb Flower and blast the wall behind where it stood. Halfway along the Baby Dodongo passage beyond, defeat a Baby Dodongo right beside the cracked wall on the right so its blast opens it, then defeat the Gold Skulltula in the small room behind.",
          collect: ["dodongos-cavern-gs-side-room-near-lower-lizalfos"],
          tip: "Baby Dodongos explode a moment after they die, so step back. The token hangs high; a jump attack or a backflip reaches it." },
        { id: "c04-s02-03",
          text: "At the end of the passage, push the Armos statue onto the floor switch to open the barred door. Beat the 2 Lizalfos in the next room one at a time, shield up and striking between their attacks, then in the Dodongo room strike each Dodongo's tail and light the 3 unlit torches from the lit one with a Deku Stick to open the exit.",
          collect: [],
          tip: "A Dodongo's tail is its only weak spot; bait its fire breath, then circle behind it. A Deku Stick jump attack on the tail finishes it in one hit." },
        { id: "c04-s02-04",
          text: "Back in the main cavern, step on the switch on the upper ledge to open a barred door across the room and drop down to it. In the room with the huge staircase, blast the cracked wall on the left with a Bomb Flower; inside, touch the Armos to wake it, stun it with a Deku Nut and strike it, then open the chest for the **Compass**.",
          collect: ["dodongos-cavern-compass-chest"],
          tip: "A beaten Armos explodes; raise your shield or back away." },
        { id: "c04-s02-05",
          text: "Carry the lone Bomb Flower by the Compass room door to the gap in the row of Bomb Flowers along the staircase; the chain of blasts lowers the staircase. Climb it, shoot the Skullwalltulas and the Gold Skulltula on the vines at the top with the Fairy Slingshot, and climb up for the token.",
          collect: ["dodongos-cavern-gs-vines-above-stairs"] }
      ]
    },
    {
      id: "c04-s03", title: "Dodongo's Cavern: Upper Floor", era: "child", kind: "dungeon",
      steps: [
        { id: "c04-s03-01",
          text: "In the hexagonal Armos room, pull the one lifeless Armos statue on the center platform away from the ladder, climb up and press the switch. Cross the bridge over the main cavern to the room with blade traps, pull the stone block back from the wall, then push it to the platform and climb up to a small chest with 20 Rupees.",
          collect: ["dodongos-cavern-bomb-flower-platform-chest"],
          tip: "Keep the Hylian Shield up against the Fire Keese, and watch for the gap in the middle of the bridge. A Recovery Heart sits in the hole the block leaves behind." },
        { id: "c04-s03-02",
          text: "Throw the regrowing Bomb Flower onto the ledge of the cracked wall above the ladder to blast it open. Shoot the eye switch above the burning platform with the Fairy Slingshot to put out the flames and cross, defeat the second pair of Lizalfos, then shoot both eye switches in the next fire room (the second hides in a cubby on the left).",
          collect: [] },
        { id: "c04-s03-03",
          text: "In the upper blade-trap room, jump to the next platform and climb the ledge on the right to the large chest with the **Bomb Bag**.",
          collect: ["dodongos-cavern-bomb-bag-chest"],
          tip: "A cracked wall one level down hides 2 Business Scrubs that sell Deku Nuts and Deku Seeds; neither is needed." },
        { id: "c04-s03-04",
          text: "On the main cavern's second floor, press the switch that extends the lift (a shortcut), then bomb the cracked wall on the bridge for a small chest with a **Deku Shield**. Drop a Bomb through each hole in the bridge onto the eyes of the giant skull below; when both eyes glow red its mouth opens, and you can drop down and walk in.",
          collect: ["dodongos-cavern-end-of-bridge-chest"],
          tip: "A stone tablet on this floor hints at the skull puzzle. If a Fire Keese burned your Deku Shield, this chest replaces it." },
        { id: "c04-s03-05",
          text: "Inside the skull, cross the square room and the S-shaped room past the Fire Keese. On the far side of the S room, throw a Bomb onto the ledge with the cracked wall (let the fuse burn briefly first), climb up, and defeat the Gold Skulltula that an Armos statue guards in the room behind.",
          collect: ["dodongos-cavern-gs-back-room"],
          tip: "A pot in the next area holds a Fairy, worth bottling before the boss." },
        { id: "c04-s03-06",
          text: "In the last room, push the stone block off the ledge and into the central pit, onto the floor switch, to hold the boss door open. Beyond the door, open the chest for 5 Bombs, then bomb the cracked patch of floor and drop through to King Dodongo.",
          collect: ["dodongos-cavern-boss-room-chest"] }
      ]
    },
    {
      id: "c04-s04", title: "King Dodongo", era: "child", kind: "boss",
      steps: [
        { id: "c04-s04-01",
          text: "Defeat King Dodongo: each time he stops to inhale, throw a Bomb into his open mouth, then strike him while he is down (see the boss card). Take the **Heart Container** and step into the blue light; Darunia names you his Sworn Brother and gives you the **Goron's Ruby**, the Spiritual Stone of Fire.",
          collect: ["dodongos-cavern-king-dodongo-heart", "king-dodongo"],
          tip: "With the Goron's Ruby in hand, the Market's Bombchu Bowling Alley and Bombchu Shop open, and shops start selling Bombs." }
      ]
    },
    {
      id: "c04-s05", title: "Bombs on Death Mountain Trail and in Goron City", era: "child", kind: "sweep",
      steps: [
        { id: "c04-s05-01",
          text: "Heading down the trail toward Kakariko, bomb the cracked wall where you can hear a Gold Skulltula scratching. Defeat it and climb the wall to its token.",
          collect: ["dmt-gs-near-kak"] },
        { id: "c04-s05-02",
          text: "Back up the trail toward Goron City, bomb the other cracked wall for a chest with 50 Rupees.",
          collect: ["dmt-chest"] },
        { id: "c04-s05-03",
          text: "On Goron City's top floor, bomb the 3 rocks to the left of the entrance to reach the boulder maze. Bomb the ordinary boulders (the silver ones won't move yet), keeping right for the first half and then to the middle: 2 small chests hold 50 Rupees each, and the crate at the back hides a Gold Skulltula.",
          collect: ["gc-maze-center-chest", "gc-maze-right-chest", "gc-gs-boulder-maze"],
          tip: "A third chest in the maze sits behind silver boulders; it waits for adult Link." },
        { id: "c04-s05-04",
          text: "Stop the Goron rolling around the top floor by setting a Bomb in his path so it explodes as he reaches it. He gives you a bigger **Bomb Bag**.",
          collect: ["gc-rolling-goron-as-child"],
          tip: "The covered stretch of his route is the easiest place to time it." },
        { id: "c04-s05-05",
          text: "If the big urn on the bottom floor is not spinning, light the bottom-floor torches with a Deku Stick lit in Darunia's room. From the floor above, drop a Bomb into the urn so it explodes while the smiling face points at you, and the urn throws out a **Piece of Heart**.",
          collect: ["gc-pot-freestanding-poh"],
          tip: "The other faces give lesser prizes. Keep trying until the smile lines up." }
      ]
    },
    {
      id: "c04-s06", title: "The Summit and the Crater", era: "child", kind: "overworld",
      steps: [
        { id: "c04-s06-01",
          text: "Where the trail forks above the cavern, take the highest path and bomb the boulders blocking it. Bomb the boulder above them as well, drop into the hole it hid, and play Epona's Song for the cow inside to fill an empty Bottle with milk.",
          collect: ["dmt-cow-grotto-cow"],
          tip: "Rocks rain down from the volcano on the upper trail; hold up the Hylian Shield and move between falls." },
        { id: "c04-s06-02",
          text: "At the summit, bomb the cracked wall near the owl and play Zelda's Lullaby on the Triforce mark inside. The Great Fairy grants you the **Magic Meter**.",
          collect: ["dmt-great-fairy-reward"],
          tip: "Shoot the Skullwalltulas before you climb the wall to the summit. Get this upgrade first: every other Great Fairy vanishes if you have no Magic Meter." },
        { id: "c04-s06-03",
          text: "Enter **Death Mountain Crater** through the opening at the summit; a heat timer starts at once. Roll into the crate by the entrance for a Gold Skulltula, then bomb the boulder inside the ring of rocks near the entrance and drop into the grotto for a chest with 20 Bombs.",
          collect: ["dmc-gs-crate", "dmc-upper-grotto-chest"],
          tip: "Leaving the crater resets the heat timer. If it reaches zero, the heat knocks Link out as if his health ran out, so step back out when it gets low.",
          remake: "The remake's confirmed dash may make the heat timer easier; the timer length is unconfirmed." },
        { id: "c04-s06-04",
          text: "Re-enter for a full timer and walk off the ledge toward the platform below; Link catches hold of the climbable wall. Climb down to the alcove holding the **Piece of Heart**, then head back out of the crater.",
          collect: ["dmc-wall-freestanding-poh"],
          tip: "The fastest way back up is to step into the lava: you lose some health and reappear at the entrance.",
          remake: "With the remake's jump button (confirmed), walking off this ledge may no longer drop you onto the wall the same way; confirm after launch." }
      ]
    },
    {
      id: "c04-s07", title: "Owl to Kakariko", era: "child", kind: "sweep",
      steps: [
        { id: "c04-s07-01",
          text: "Talk to the owl at the summit and hold on as he flies you down to the roof of **Impa's House** in Kakariko. Walk to the edge above the Cucco pen, drop onto the thatched overhang below, turn around and go through the hole in the wall: inside are a **Piece of Heart** and a cow to milk with Epona's Song.",
          collect: ["kak-impas-house-freestanding-poh", "kak-impas-house-cow"],
          tip: "If you fall to the ground too early, playing the Sun's Song reloads the area at your entry point, back on the roof." },
        { id: "c04-s07-02",
          text: "In the middle of the village, between the large tree by the entrance and the well, bomb the ground to open a hidden grotto. Inside, defeat the 2 ReDeads (the Sun's Song freezes them) and open the chest for a **Huge Rupee** worth 200 Rupees.",
          collect: ["kak-redead-grotto-chest"],
          tip: "Spend some Rupees first if you can: the Adult's Wallet holds exactly 200." },
        { id: "c04-s07-03",
          text: "In the House of Skulltula, claim the 20-token reward, the **Stone of Agony**; you should have 24 tokens. It signals when a hidden grotto is nearby, though every grotto opens without it.",
          collect: ["kak-20-gold-skulltula-reward"],
          remake: "How the Stone of Agony signals on Switch 2 (rumble or an on-screen cue, as on 3DS) is not announced." }
      ]
    }
  ],
  boss: {
    id: "boss-king-dodongo", name: "Infernal Dinosaur King Dodongo",
    weakness: "A Bomb or Bomb Flower thrown into his mouth while he inhales.",
    strategy: [
      "Wait for him to stop and draw in a long breath, then throw a Bomb (or one of the Bomb Flowers in the room) into his open mouth.",
      "The blast knocks him down. Run in and strike his head with the sword until he gets up; a Deku Stick jump attack hits hardest.",
      "After recovering he curls up and rolls around the arena. Stand near the lava edge or in an inner corner, or block with the Hylian Shield.",
      "His fire breath has a long wind-up, so step out of its path. About 4 bomb-and-strike rounds finish him."
    ]
  }
});
// end c04

// ---------------------------------------------------------------- c05
OOT.walkthrough.push({
  id: "c05-jabu-jabu", num: 5, title: "Zora's Domain & Jabu-Jabu's Belly", era: "child",
  summary: "Collect Din's Fire and the Bomb-gated extras around the castle and Hyrule Field, follow Zora's River to Zora's Domain, find Ruto's Letter in Lake Hylia, and rescue Princess Ruto from inside Lord Jabu-Jabu for Zora's Sapphire.",
  needs: ["Bombs", "Magic Meter", "Zelda's Lullaby", "Epona's Song", "Saria's Song", "Sun's Song", "Deku Sticks"],
  gains: ["Din's Fire", "Farore's Wind", "Silver Scale", "Boomerang", "Zora's Sapphire", "Heart Container", "Bottle (Ruto's Letter)", "Bomb Bag upgrade", "Magic Beans", "6 Pieces of Heart", "10 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c05-s01", title: "Castle, Market and Hyrule Field with Bombs", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s01-01",
          text: "At **Hyrule Castle**, climb the central vine on the wall as you did to reach Talon, drop down on the far side of the guard's gate and go straight ahead to a sign that reads \"Dead End\". Bomb the boulder behind it, crawl into the passage and play Zelda's Lullaby on the Triforce mark; the Great Fairy gives you **Din's Fire**.",
          collect: ["hc-great-fairy-reward"],
          remake: "Songs can be played with the controller or by humming into the microphone (confirmed); the note layout is not announced yet." },
        { id: "c05-s01-02",
          text: "In the Market, the **Bombchu Bowling Alley** is now open. Each game costs 30 Rupees and gives you 10 Bombchus to send through 3 targets; the prize changes from game to game, so keep playing until you have won both the **Bomb Bag** upgrade and the **Piece of Heart**.",
          collect: ["market-bombchu-bowling-first-prize", "market-bombchu-bowling-second-prize"],
          tip: "The prizes rotate in a fixed order (Bomb Bag, 50 Rupees, 10 Bombchus, Piece of Heart, 1 Bomb) from a random starting point. Once you win the Bomb Bag or the Piece of Heart, that slot pays 50 Rupees instead." },
        { id: "c05-s01-03",
          text: "Optional: play the Sun's Song to make night and buy **Bombchus** at the **Bombchu Shop** in the **Back Alley** (10 for 100 Rupees). Play the Sun's Song again before you leave, because the drawbridge stays shut to a child at night.",
          collect: ["item-bombchu"],
          time: "night",
          remake: "Nintendo says time now passes in towns, so the shop's night hours may start and end while you are in the Market." },
        { id: "c05-s01-04",
          text: "Back in **Hyrule Field**, bomb the boulder in the north of the field, west of the drawbridge, and drop into the grotto for a chest with 5 Rupees.",
          collect: ["hf-near-market-grotto-chest"] },
        { id: "c05-s01-05",
          text: "In the southeast of the field, bomb the boulder in a grove of trees for a grotto with a chest of 20 Rupees.",
          collect: ["hf-southeast-grotto-chest"] },
        { id: "c05-s01-06",
          text: "Near the Lake Hylia gate, bomb the center of the square of fences to open a grotto. Bounce the Business Scrub's nut back at it and buy the **Piece of Heart** for 10 Rupees.",
          collect: ["hf-deku-scrub-grotto"] }
      ]
    },
    {
      id: "c05-s02", title: "Zora's River", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s02-01",
          text: "Follow the river upstream from the drawbridge to **Zora's River**. Roll into the first tree on the left for a Gold Skulltula, then bomb the boulders blocking the path.",
          collect: ["zr-gs-tree"] },
        { id: "c05-s02-02",
          text: "Around the corner, buy **Magic Beans** from the salesman; the first costs 10 Rupees and each one after costs 10 more. Buy 3, since later checks need beans at Lake Hylia, the Graveyard and the Deku Theater, and keep 40 Rupees for the diving game and the Fishing Pond.",
          collect: ["zr-magic-bean-salesman"],
          tip: "He sells 10 beans in all, and each soil patch needs only 1. This guide buys the rest on 2 later visits: 4 once the Bunny Hood fills the Giant's Wallet (chapter 6), and the last 3 on the trip back to childhood (chapter 11)." },
        { id: "c05-s02-03",
          text: "Pick up the Cucco and carry it upriver, crossing the river and jumping back over at its narrowest point. In the open area, glide with the Cucco to the pillar in the water that holds a **Piece of Heart**; then swim up the narrow stream, climb the ladder onto the raised ground in the middle of the river and drop into the open grotto by the wall for a chest with 20 Rupees.",
          collect: ["zr-near-open-grotto-freestanding-poh", "zr-open-grotto-chest"],
          tip: "Watch for Octoroks spitting rocks from the water. Once you have the Boomerang later in this chapter, it can also fetch this Piece of Heart from the ramped platform nearby.",
          remake: "The remake replaces automatic jumping with a jump button (confirmed); the Cucco glides and river hops may work differently." },
        { id: "c05-s02-04",
          text: "Carry a Cucco up the platforms (toss it up ahead, climb, pick it up again), cross the bridge and climb the twisting platforms to the top beside the waterfall. Turn around and glide down to the lone platform in the corner for a **Piece of Heart**.",
          collect: ["zr-near-domain-freestanding-poh"] },
        { id: "c05-s02-05",
          text: "Stand on the log that juts into the river where the frogs gather and play Zelda's Lullaby, Epona's Song, Saria's Song and the Sun's Song. The first time you play each song, the frogs give you 50 Rupees.",
          collect: ["zr-frogs-zeldas-lullaby", "zr-frogs-eponas-song", "zr-frogs-sarias-song", "zr-frogs-suns-song"],
          tip: "The other frog rewards need the Song of Time and the Song of Storms; this guide returns for them in chapter 11.",
          remake: "Songs can be played with the controller or by humming into the microphone (confirmed); whether the frogs accept hummed songs, and the note layout, are not announced." },
        { id: "c05-s02-06",
          text: "At night (the Sun's Song you just played may already have brought it), drop into the shallow water by the waterfall and defeat the Gold Skulltula on the ladder there.",
          collect: ["zr-gs-ladder"],
          time: "night",
          tip: "Time passes on the river, so you can also wait for night." }
      ]
    },
    {
      id: "c05-s03", title: "Zora's Domain", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s03-01",
          text: "Stand on the grate before the waterfall and play Zelda's Lullaby to part it, then enter **Zora's Domain**. Carry a flame on a Deku Stick to all 5 torches: down the stairs from King Zora, in front of the shop, in the water by the ring of rocks, and the 2 behind the waterfall. When all 5 are lit, a chest with a **Piece of Heart** appears behind the waterfall.",
          collect: ["zd-chest"],
          tip: "Each torch you light relights your stick, so 1 Deku Stick can carry the flame all the way. Jars on the ramp hold spare sticks." },
        { id: "c05-s03-02",
          text: "Go left from King Zora's chamber to the top of the waterfall and pay the Zora there 20 Rupees for the diving game. Dive and collect all 5 Rupees he throws within 50 seconds to win the **Silver Scale**.",
          collect: ["zd-diving-minigame"],
          remake: "Nintendo confirms Link swims faster and can dive freely in the remake. The timer and whether scales still limit diving depth are unconfirmed." }
      ]
    },
    {
      id: "c05-s04", title: "Lake Hylia", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s04-01",
          text: "With the Silver Scale, dive into the deepest part of the Domain's pool and swim through the tunnel at the bottom to **Lake Hylia**. By the stone pillar ruins near the shore, dive where Navi points to find a **Bottle** holding **Ruto's Letter**.",
          collect: ["lh-underwater-item"],
          remake: "Whether you still need the Silver Scale to reach these depths in the remake is unconfirmed." },
        { id: "c05-s04-02",
          text: "In the lake's northeast corner, 2 scarecrows stand behind small fences: Pierre on the upper ledge and Bonooru below. Talk to Bonooru and play any 8 notes; he remembers the tune, and you must play the same notes to him as an adult, so write them down.",
          collect: [],
          tip: "You can't use one note 8 times in a row. Alternating 2 notes is easy to remember, for example {notes:A ↓ A ↓ A ↓ A ↓}. If you forget the tune, Bonooru will play back the last one you gave him while you are still a child.",
          remake: "The note-to-button layout on Switch 2 is not announced, and it is unknown whether a hummed tune can be recorded." },
        { id: "c05-s04-03",
          text: "Cut the lone bush on Pierre's upper ledge for Bugs, release them on the soft soil beside the **Lakeside Laboratory** and defeat the Gold Skulltula. Then plant a **Magic Bean** in the same soil; you will ride the plant as an adult.",
          collect: ["lh-gs-bean-patch", "bean-lake-hylia"] },
        { id: "c05-s04-04",
          text: "Swim to the **Fishing Pond** and pay 20 Rupees for a rod. Land a fish of 10 pounds or more for a **Piece of Heart**; the biggest fish gather near the arched log by the 3 sticks in the water, and the rare Hylian Loach pays 50 Rupees if luck brings it to your line.",
          collect: ["lh-child-fishing", "lh-loach-fishing"],
          tip: "Don't run along the shore near the fish or they scatter. The Loach is optional and can be caught on any later visit.",
          remake: "Fishing weights and their display are the numbers most likely to change between versions; confirm the target after launch." },
        { id: "c05-s04-05",
          text: "At night, swim to the smaller island, the one with 2 pillars, and defeat the Gold Skulltula that appears there.",
          collect: ["lh-gs-small-island"],
          time: "night",
          tip: "Time passes at the lake; wait for night or play the Sun's Song." }
      ]
    },
    {
      id: "c05-s05", title: "King Zora and Zora's Fountain", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s05-01",
          text: "Swim back through the tunnel to Zora's Domain and show Ruto's Letter to King Zora; he shifts aside to open the way to **Zora's Fountain**, leaving the Bottle empty. Catch a **Fish** with it in the shallow water by the ring of rocks.",
          collect: [],
          tip: "The Zora Shop also sells a Fish for 200 Rupees." },
        { id: "c05-s05-02",
          text: "At Zora's Fountain, cross to the small patch of land in the southeast, east of the entrance from Zora's Domain, and roll into the tree there; defeat the Gold Skulltula that drops.",
          collect: ["zf-gs-tree"] },
        { id: "c05-s05-03",
          text: "On the same patch of land, bomb the cracked wall beside the silver boulder to open a Great Fairy's Fountain, then play Zelda's Lullaby inside for **Farore's Wind**.",
          collect: ["zf-great-fairy-reward"],
          tip: "Farore's Wind sets a return point inside a dungeon. Going back in time erases it." }
      ]
    },
    {
      id: "c05-s06", title: "Inside Jabu-Jabu's Belly: With Ruto", era: "child", kind: "dungeon",
      steps: [
        { id: "c05-s06-01",
          text: "Release the Fish in front of Lord Jabu-Jabu and he swallows you. Shoot the switch dangling from the ceiling at the narrow end of the first room with the Fairy Slingshot, cross the next room to the far door, and drop through the hole after Princess Ruto; talk to her until she lets you carry her.",
          collect: [],
          tip: "Deku Nuts clear groups of Shaboms at once. Stun Biri with a Deku Nut before striking them, or avoid them." },
        { id: "c05-s06-02",
          text: "In the room with the floor switch, throw Ruto up onto the far ledge and defeat the Stingers that leap from the water. Shoot the Gold Skulltula on the side wall with the Fairy Slingshot and climb up for its token, then press the switch in the pit to raise the water.",
          collect: ["jabu-jabus-belly-gs-water-switch-room"],
          tip: "If Ruto lands in deep water or is left behind, she runs back to where you first met her." },
        { id: "c05-s06-03",
          text: "Carry Ruto onward: shoot the ceiling switch over the next door, ride the spiked platform back up, and take the far door of the upper stomach past the Biri and Bari. In the forked passage go right, set Ruto on the floor switch, and defeat the 4 Stingers in the room beyond to open the large chest with the **Boomerang**.",
          collect: ["jabu-jabus-belly-boomerang-chest"],
          tip: "You can throw Ruto at Biri and Stingers to hurt them." },
        { id: "c05-s06-04",
          text: "Back in the forked passage, set Ruto on the other door's switch so it stays open and go in alone. Target the red tentacle and hit it again and again with the Boomerang, then open the large chest it was guarding for the **Dungeon Map**.",
          collect: ["jabu-jabus-belly-map-chest"] },
        { id: "c05-s06-05",
          text: "Through the nearby door, pop every Shabom within 40 seconds, using the Boomerang or a Spin Attack, to reveal the chest with the **Compass**.",
          collect: ["jabu-jabus-belly-compass-chest"],
          tip: "If time runs out, the room resets and you take some damage.",
          remake: "The remake's controls are reworked; the 40-second limit is unconfirmed." }
      ]
    },
    {
      id: "c05-s07", title: "Inside Jabu-Jabu's Belly: Tentacles and Big Octo", era: "child", kind: "dungeon",
      steps: [
        { id: "c05-s07-01",
          text: "Defeat the blue tentacle in the room next to the Boomerang room, then the green one off the middle passage, destroying the Biri there first. With all 3 tentacles gone, the passages they blocked are clear.",
          collect: [] },
        { id: "c05-s07-02",
          text: "With Ruto, drop through the hole in the upper stomach that is now open, opposite where you first saw her, onto a new platform. 2 Gold Skulltulas cling to the wall; defeat them and pull in their tokens with the Boomerang.",
          collect: ["jabu-jabus-belly-gs-lobby-basement-lower", "jabu-jabus-belly-gs-lobby-basement-upper"] },
        { id: "c05-s07-03",
          text: "Throw Ruto onto the central platform in the next chamber; she finds her Spiritual Stone and is carried off, and Big Octo appears. Stun it with the Boomerang, run around to its back and strike the soft spot there, repeating until it falls, then ride the platform up.",
          collect: [],
          tip: "A Deku Stick jump attack on its back defeats it in one hit. It leaves 3 Recovery Hearts.",
          remake: "The 3DS version removed the one-hit Deku Stick kill; confirm on Switch 2 after launch." },
        { id: "c05-s07-04",
          text: "Freeze the red jelly blocks with the Boomerang and use them as stepping stones, ride the platform down, and set a box on the door switch so it stays pressed. In the last room, defeat the Biri, then the Gold Skulltula on the vines, climb for its token, and throw the Boomerang at the switch behind the web-like barrier to open the boss door.",
          collect: ["jabu-jabus-belly-gs-near-boss"] }
      ]
    },
    {
      id: "c05-s08", title: "Barinade", era: "child", kind: "boss",
      steps: [
        { id: "c05-s08-01",
          text: "Defeat Barinade: cut its 3 tethers to the ceiling with the Boomerang, then stun its body and clear away the jellies circling it (see the boss card). Take the **Heart Container** and step into the blue light with Ruto; she gives you **Zora's Sapphire**, the Spiritual Stone of Water, and you are left at Zora's Fountain.",
          collect: ["jabu-jabus-belly-barinade-heart", "barinade"] }
      ]
    },
    {
      id: "c05-s09", title: "Zora's Fountain at Night", era: "child", kind: "sweep",
      steps: [
        { id: "c05-s09-01",
          text: "Play the Sun's Song to bring night, which never falls on its own here. Stand on the log near the exit, left of Lord Jabu-Jabu, and throw the Boomerang at the Gold Skulltula on the wall above it, then again to pull in its token.",
          collect: ["zf-gs-above-the-log"],
          time: "night",
          remake: "Nintendo says time now passes wherever you are, so you may be able to wait for night here." }
      ]
    }
  ],
  boss: {
    id: "boss-barinade", name: "Bio-electric Anemone Barinade",
    weakness: "Its body, once the Boomerang stuns it. First cut its 3 ceiling tethers with the Boomerang.",
    strategy: [
      "Circle the room to dodge its electric beams and hit each of the 3 tendrils above it with the Boomerang until all are cut.",
      "Jellies then circle it, linked by electricity. Hit its body with the Boomerang to stun it and break the link, then destroy the jellies with the sword, Deku Nuts or the Boomerang before it recovers.",
      "With the jellies gone it darts around the room firing electricity. Keep your distance, knock it down with the Boomerang and strike it with the sword or a Deku Stick; it burrows to recover, so repeat.",
      "A shield does not block its electricity. Pots around the room hold Recovery Hearts."
    ]
  }
});
// end c05

// ---------------------------------------------------------------- c06
OOT.walkthrough.push({
  id: "c06-temple-of-time", num: 6, title: "The Door of Time", era: "child",
  summary: "Receive the Ocarina of Time and the Song of Time, finish the child-era sweep with the Boomerang, Bombs and Din's Fire while running the Happy Mask Shop trades, then open the Door of Time and draw the Master Sword.",
  needs: ["Kokiri's Emerald", "Goron's Ruby", "Zora's Sapphire", "Boomerang", "Bombs", "Din's Fire", "Magic Beans", "Epona's Song", "Sun's Song"],
  gains: ["Ocarina of Time", "Song of Time", "Giant's Wallet", "Deku Stick capacity upgrade", "2 Deku Nut capacity upgrades", "Mask of Truth", "3 Pieces of Heart", "10 Gold Skulltula Tokens", "Master Sword"],
  sections: [
    {
      id: "c06-s01", title: "The Ocarina of Time and the Keaton Mask", era: "child", kind: "overworld",
      steps: [
        { id: "c06-s01-01",
          text: "Head for the Market drawbridge with all 3 Spiritual Stones. A scene plays in which Zelda and Impa flee on horseback and Zelda throws something into the moat; dive into the moat where it fell for the **Ocarina of Time**, and a vision of Zelda teaches you the **Song of Time**.",
          collect: ["hf-ocarina-of-time-item", "song-from-ocarina-of-time"],
          tip: "The current in the moat pushes you around, so it may take a few dives.",
          remake: "Nintendo confirms Link can dive freely and swims faster in the remake, which may make the moat dive easier." },
        { id: "c06-s01-02",
          text: "In the Market by day, borrow the **Keaton Mask** from the **Happy Mask Shop**, between the Temple of Time steps and the castle road. You pay for each mask only after selling it, and paying unlocks the next one.",
          collect: ["mask-keaton"],
          time: "day",
          tip: "Only one mask can be held at a time. If you come back without enough Rupees to pay, the next mask stays locked until you do.",
          remake: "Nintendo says time now passes in towns, so the daytime-only shop can close while you are in the Market." },
        { id: "c06-s01-03",
          text: "On the way to Kakariko, bomb the ground beside the lone tree just north of the small bridge on the path between the Market and Kakariko. In the grotto, defeat the Big Skulltula and throw the Boomerang at the Gold Skulltula high on the wall, then again to pull in its token.",
          collect: ["hf-gs-near-kak-grotto"],
          tip: "The Stone of Agony buzzes when you stand near the spot." },
        { id: "c06-s01-04",
          text: "In Kakariko, enter the **Windmill** and throw the Boomerang at the **Piece of Heart** on the high ledge inside to bring it to you.",
          collect: ["kak-windmill-freestanding-poh"] },
        { id: "c06-s01-05",
          text: "Sell the Keaton Mask to the guard at the Death Mountain gate for 15 Rupees. Then, with 35 tokens, claim the 30-token reward in the House of Skulltula, the **Giant's Wallet**, which holds 500 Rupees.",
          collect: ["kak-30-gold-skulltula-reward"],
          tip: "Get this wallet before the Bunny Hood sale later in this chapter; that buyer pays enough to fill whatever wallet you carry." },
        { id: "c06-s01-06",
          text: "Back at the Happy Mask Shop, pay 10 Rupees for the Keaton Mask and borrow the **Skull Mask**.",
          collect: ["mask-skull"],
          time: "day" }
      ]
    },
    {
      id: "c06-s02", title: "Lost Woods with the Skull Mask", era: "child", kind: "sweep",
      steps: [
        { id: "c06-s02-01",
          text: "In the **Lost Woods**, follow right, left, right, left, left from the Kokiri Forest entrance to the meadow with the Business Scrubs. At the back, left of the tree where butterflies gather, fall through the hidden hole into the **Deku Theater** and wear the Skull Mask on stage for a Deku Stick capacity upgrade; back outside, plant a **Magic Bean** in the soft soil.",
          collect: ["deku-theater-skull-mask", "bean-lost-woods-theater"],
          tip: "This bean matters: an adult rides it to a Gold Skulltula in chapter 7." },
        { id: "c06-s02-02",
          text: "Go left from the entrance and sell the Skull Mask to the Skull Kid on the stump for 10 Rupees.",
          collect: [] },
        { id: "c06-s02-03",
          text: "From the entrance go right, then straight on to the clearing with the tunnel to Goron City. Bomb the boulder in front of the tunnel and drop into the grotto for a chest with 5 Rupees.",
          collect: ["lw-near-shortcuts-grotto-chest"] },
        { id: "c06-s02-04",
          text: "Follow right, left, right, left, straight, left to the last clearing before Sacred Forest Meadow and bomb the boulder there. In the grotto, bounce the first Business Scrub's nut back at it and buy its Deku Nut capacity upgrade for 40 Rupees.",
          collect: ["lw-deku-scrub-grotto-front"] },
        { id: "c06-s02-05",
          text: "In **Sacred Forest Meadow**, bomb the ground in the middle of the clearing in front of the maze to open a hidden grotto. Defeat the Wolfos inside and open the chest for 50 Rupees.",
          collect: ["sfm-wolfos-grotto-chest"],
          tip: "The Stone of Agony buzzes when you stand over the spot.",
          remake: "How the Stone of Agony signals on Switch 2 is not announced." }
      ]
    },
    {
      id: "c06-s03", title: "Kokiri Forest and Lon Lon Ranch", era: "child", kind: "sweep",
      steps: [
        { id: "c06-s03-01",
          text: "Return to the basement of the **Great Deku Tree** and go to the room where Gohma Larvae dropped from the ceiling. Burn the web you left there with a lit Deku Stick, bomb the cracked wall behind it, and throw the Boomerang at the Gold Skulltula inside, then again to pull in its token.",
          collect: ["deku-tree-gs-basement-back-room"],
          tip: "The main room's floor webs are already broken, so you can drop straight to the basement." },
        { id: "c06-s03-02",
          text: "At **Lon Lon Ranch**, play the Sun's Song to bring night. Throw the Boomerang at the Gold Skulltula on the window of the building on your left as you enter, then at the one high on the outer wall at the ranch's far back corner (lower left on the map), pulling in each token.",
          collect: ["llr-gs-house-window", "llr-gs-back-wall"],
          time: "night",
          remake: "Nintendo says time now passes wherever you are, so you may be able to wait at the ranch for night." },
        { id: "c06-s03-03",
          text: "Play the Sun's Song again to bring morning, since the drawbridge stays shut at night, then go to the Happy Mask Shop. Pay 20 Rupees for the Skull Mask and borrow the **Spooky Mask**.",
          collect: ["mask-spooky"],
          time: "day" }
      ]
    },
    {
      id: "c06-s04", title: "Kakariko, the Graveyard and Death Mountain with the Spooky Mask", era: "child", kind: "sweep",
      steps: [
        { id: "c06-s04-01",
          text: "By day, sell the Spooky Mask for 30 Rupees to the boy with the stick in **Kakariko Graveyard**, then plant a Magic Bean in the soft soil on the Graveyard's left side.",
          collect: ["bean-graveyard"],
          time: "day",
          tip: "This bean matters: an adult rides it to a Piece of Heart in chapter 7." },
        { id: "c06-s04-02",
          text: "Enter the **Royal Family's Tomb** again and light the torches by the door in the first room with **Din's Fire**. A chest appears holding 5 Bombs.",
          collect: ["graveyard-royal-familys-tomb-chest"] },
        { id: "c06-s04-03",
          text: "Play the Sun's Song to bring night, then throw the Boomerang at the Gold Skulltula on the wall in the Graveyard's southeast corner and again to pull in its token.",
          collect: ["graveyard-gs-wall"],
          time: "night",
          remake: "Nintendo says time now passes wherever you are, so night may come and go while you are in the Graveyard." },
        { id: "c06-s04-04",
          text: "On **Death Mountain Trail**, go back into **Dodongo's Cavern** and make your way to the top of the big staircase and throw the Boomerang at the Gold Skulltula in the small alcove there, then again to pull in its token.",
          collect: ["dodongos-cavern-gs-alcove-above-stairs"],
          tip: "The lift you extended in the main cavern is the quickest way back up to the second floor." },
        { id: "c06-s04-05",
          text: "Back at the Happy Mask Shop by day, pay 30 Rupees for the Spooky Mask and borrow the **Bunny Hood**.",
          collect: ["mask-bunny-hood"],
          time: "day" }
      ]
    },
    {
      id: "c06-s05", title: "South Hyrule with the Bunny Hood", era: "child", kind: "sweep",
      steps: [
        { id: "c06-s05-01",
          text: "Find the Running Man on the road around Lon Lon Ranch; he only appears once you hold all 3 Spiritual Stones, and he is easiest to talk to at night, when he sits down to rest. He buys the Bunny Hood for enough Rupees to fill your wallet. Spend some at **Zora's River**: buy **Magic Beans** until you hold 4, plant 1 in the soft soil beside the salesman, and keep 3 for Gerudo Valley, Kokiri Forest and the Lost Woods.",
          collect: ["bean-zoras-river"],
          time: "night",
          tip: "Stalchildren don't appear while you wear the Bunny Hood, which makes night travel across the field easy.",
          remake: "Nintendo says time now passes wherever you are; the Running Man's schedule in the remake is unconfirmed." },
        { id: "c06-s05-02",
          text: "In the dry western part of Hyrule Field near the **Gerudo Valley** entrance, bomb the center of the ring of rocks to open a grotto. Burn the webs inside with Din's Fire, play Epona's Song for the cow, and throw the Boomerang at the Gold Skulltula high on the wall behind it.",
          collect: ["hf-gs-cow-grotto", "hf-cow-grotto-cow"] },
        { id: "c06-s05-03",
          text: "At night in Gerudo Valley, walk in as far as the wooden ramp and throw the Boomerang at the Gold Skulltula on the wall to the right, where water pours out, then again to pull in its token.",
          collect: ["gv-gs-small-bridge"],
          time: "night" },
        { id: "c06-s05-04",
          text: "Pick up the Cucco near the bridge, jump off the left side of the bridge and glide to the ledge with a lone crate; roll into the crate for a **Piece of Heart**. Then drop into the river, which carries you down to **Lake Hylia**.",
          collect: ["gv-crate-freestanding-poh"],
          warn: "The river is one-way: it ends at Lake Hylia, and the way back to the valley is the walk round through Hyrule Field.",
          remake: "The remake replaces automatic jumping with a jump button (confirmed); Cucco glides may handle differently." },
        { id: "c06-s05-05",
          text: "At Lake Hylia, still at night, stand on the bridge by the **Lakeside Laboratory** and throw the Boomerang at the Gold Skulltula on the lab's wall, then again to pull in its token.",
          collect: ["lh-gs-lab-wall"],
          time: "night",
          tip: "If morning has come, play the Sun's Song." },
        { id: "c06-s05-06",
          text: "Back in Gerudo Valley, lift the 3 rocks just inside on the right to catch Bugs. Carry the Cucco off the right side of the bridge toward the waterfall and glide down to the ledge with a Gerudo woman and a cow: release the Bugs on the soft soil for a Gold Skulltula, play Epona's Song for the cow, and plant a Magic Bean.",
          collect: ["gv-gs-bean-patch", "gv-cow", "bean-gerudo-valley"],
          warn: "This glide is one-way too: the only way off the ledge is the river down to Lake Hylia, so finish the next step before you leave it." },
        { id: "c06-s05-07",
          text: "Drop into the water behind the waterfall and climb the ladder to the alcove with the **Piece of Heart**. Then let the river carry you down to Lake Hylia.",
          collect: ["gv-waterfall-freestanding-poh"] }
      ]
    },
    {
      id: "c06-s06", title: "The Mask of Truth and the Door of Time", era: "child", kind: "overworld",
      steps: [
        { id: "c06-s06-01",
          text: "By day, pay the Happy Mask Shop 50 Rupees for the Bunny Hood and borrow the **Mask of Truth**. The shop now also lends the **Goron Mask**, **Zora Mask** and **Gerudo Mask**; they earn nothing, but borrow each once if you want them logged.",
          collect: ["mask-truth", "mask-goron", "mask-zora", "mask-gerudo"],
          time: "day",
          tip: "Wearing the Mask of Truth lets you hear what Gossip Stones say." },
        { id: "c06-s06-02",
          text: "In **Kokiri Forest**, plant a Magic Bean in the soft soil behind the **Kokiri Shop**. Then, in the **Lost Woods**, go left from the Kokiri Forest entrance and left again to the clearing with the bridge, and plant another in its soft soil.",
          collect: ["bean-kokiri-forest", "bean-lost-woods-bridge"],
          tip: "No check needs these 2 plants, but the one by the bridge gives an adult a quick way up to the Hyrule Field exit." },
        { id: "c06-s06-03",
          text: "Wear the Mask of Truth on the stage of the Deku Theater in the Lost Woods for a Deku Nut capacity upgrade.",
          collect: ["deku-theater-mask-of-truth"],
          warn: "Do this before you receive the Poacher's Saw in the adult trading sequence (chapter 8). On the N64 and GameCube versions, getting the saw first makes this upgrade impossible to obtain.",
          remake: "Whether the remake keeps this bug is unknown; get the upgrade now to be safe." },
        { id: "c06-s06-04",
          text: "Climb the steps from the Market to the **Temple of Time**. With all 3 Spiritual Stones, play the **Song of Time** at the altar to open the **Door of Time**, then draw the **Master Sword** from its pedestal beyond.",
          collect: ["master-sword-pedestal"],
          warn: "Point of no return: drawing the sword moves the story 7 years ahead, and you cannot become a child again until you finish the Forest Temple. Everything this guide left for later (the frogs' last rewards, the last 3 Magic Beans, the Bottom of the Well, the Treasure Chest Game and the rest) is picked up on later trips back.",
          remake: "Songs can be played with the controller or by humming into the microphone (confirmed); the note layout is not announced yet." }
      ]
    }
  ],
  boss: null
});
// end c06
