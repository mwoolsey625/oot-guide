window.OOT = window.OOT || {};
OOT.walkthrough = OOT.walkthrough || [];

/* Child-era walkthrough, chapters c01-c06. Describes the Switch 2 version. Anything not yet verified
   sits in a step's `check` field. Compile notes and source decisions: research/compile-notes-child.md */

// ---------------------------------------------------------------- c01
OOT.walkthrough.push({
  id: "c01-deku-tree", num: 1, title: "Kokiri Forest & Inside the Great Deku Tree", era: "child",
  summary: "Arm Link with a sword and shield in Kokiri Forest, then climb through the Great Deku Tree and defeat Gohma for the first Spiritual Stone, Kokiri's Emerald.",
  needs: [],
  gains: ["Kokiri Sword", "Deku Shield", "Fairy Slingshot", "Kokiri's Emerald", "Heart Container", "4 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c01-s01", title: "Kokiri Forest", era: "child", kind: "overworld",
      steps: [
        { id: "c01-s01-01",
          text: "You start in the **Hero's Clothes**, the green tunic, with a wallet that holds 200 Rupees. **Mido** will not let you reach the **Great Deku Tree** until you carry a sword and a shield, so start gathering Rupees. Enter **Mido's House**, just past the water and across from the **Training Grounds**, and open its 4 chests. They hold 16 Rupees in all (3 Blue and 1 Green) and no Recovery Heart.",
          collect: ["equip-kokiri-tunic", "equip-kokiri-boots", "kf-midos-top-left-chest", "kf-midos-top-right-chest", "kf-midos-bottom-left-chest", "kf-midos-bottom-right-chest"],
          tip: "Rupees lie all over the forest: cut grass, break pots, lift and throw rocks, and dive underwater. Check the corner of the **Kokiri Shop**, and the rock and stump on the stepping stones in the stream. A Kokiri outside Mido's House pays you a Blue Rupee for clearing the rocks, and another Kokiri pays one for cutting the grass. Rupees from grass, rocks, pots and enemies come back. Ones in chests or lying in the open appear only once." },
        { id: "c01-s01-02",
          text: "At the **Training Grounds**, crawl through the small hole in the wall by the tunnel entrance. Inside, a giant boulder rolls counter-clockwise around a tall central platform with the chest on top. Let it pass, then follow behind it, and duck into the alcoves along the track when it comes round; the alcoves also hold Blue Rupees. Go to the south side, climb the ladder to a higher ledge, then double back and use the jump button to land on the central platform. The large chest holds the **Kokiri Sword**.",
          collect: ["kf-kokiri-sword-chest"] },
        { id: "c01-s01-03",
          text: "Once you have 40 Rupees, buy the **Deku Shield** in the **Kokiri Shop**, then equip it together with the Kokiri Sword. Open the on-screen item bar with R to pick items, instead of going through the pause menu.",
          collect: ["kf-shop-item-1"],
          tip: "If you lose the shield, you can buy another at the same shop. The shop also sells Deku Nuts and Deku Sticks, but the forest gives you both for free." },
        { id: "c01-s01-04",
          text: "Talk to **Mido** with both items equipped and he steps aside. In the tunnel beyond, cut the 3 **Deku Babas** at the stem for your first **Deku Sticks**. Then speak to the **Great Deku Tree** and walk up the rocky slope into the bright opening.",
          collect: ["item-deku-stick"],
          tip: "A **Deku Baba** drops a **Deku Nut** if you cut its head and a **Deku Stick** if you hit its stem. The ones inside the tree lunge at you, unlike the upright ones out here." }
      ]
    },
    {
      id: "c01-s02", title: "Inside the Deku Tree: Upper Floors", era: "child", kind: "dungeon",
      steps: [
        { id: "c01-s02-01",
          text: "Cut down the **Deku Babas** by the entrance; cut the head for **Deku Nuts**. Then climb the green vine wall to the second floor and follow the ledge round to the large chest with the **Dungeon Map**.",
          collect: ["item-deku-nut", "deku-tree-map-chest"],
          tip: "Equip Deku Sticks and Deku Nuts now; this dungeon uses both. The web over the middle of the floor can't be broken yet." },
        { id: "c01-s02-02",
          text: "Take the door at the end of the walkway. Raise your shield so the Deku Scrub's nut bounces back, then hit the Scrub yourself as well, because the bounce alone does not beat it. Just past the door, the platform crumbles right after you walk through, so cross it quickly to the large chest with the **Fairy Slingshot**. Then climb the vines to a small chest with Deku Nuts.",
          collect: ["deku-tree-slingshot-chest", "deku-tree-slingshot-room-side-chest"],
          tip: "To get back out, shoot the eye switch above the door with the Fairy Slingshot. It drops a ladder.",
          check: "Zelda Central says a second small chest with Deku Seeds sits across the vine-covered log past the Deku Nut chest, with a Green Rupee in the plants nearby. Look for it." },
        { id: "c01-s02-03",
          text: "Back in the main room, shoot the Skulltulas off the vine wall on the map-chest side, climb it to the top floor and go through the door there. Step on the switch to raise 3 platforms for a short time and cross on them to the large chest with the **Compass**. Behind the Compass chest, crawl through the vent to a small chest of Deku Nuts.",
          collect: ["deku-tree-compass-chest", "deku-tree-compass-room-side-chest"],
          tip: "A **Big Skulltula**'s hard front shell blocks your sword. Back away while it spins, then strike its underbelly as soon as it shows. 2 hits or 1 jump attack beat it." },
        { id: "c01-s02-04",
          text: "Drop to the sunken floor of this room and defeat the **Big Skulltula** that guards the high ledge on the left. Climb back up, step on the switch again and take the left side of the middle platform, then jump up to the ledge. Defeat the **Gold Skulltula** on the wall there and take its token.",
          collect: ["deku-tree-gs-compass-room"],
          check: "Neither remake source shows bars on the way out. If bars close behind you, light a Deku Stick at a burning torch and touch it to the unlit one." }
      ]
    },
    {
      id: "c01-s03", title: "Inside the Deku Tree: Basement", era: "child", kind: "dungeon",
      steps: [
        { id: "c01-s03-01",
          text: "From the top floor, run and jump off the edge of the plank so that Link lands on the web over the main room floor. Your weight tears it and drops you into the water of the flooded basement. Turn to the vines that lead back up, shoot the Gold Skulltula on them with the Fairy Slingshot and climb up for its token.",
          collect: ["deku-tree-gs-basement-vines"],
          tip: "Jumping is manual, and you do not need a sword jump attack. A jump from the second floor does not break the web; you need the height of the top floor." },
        { id: "c01-s03-02",
          text: "Shoot the **Gold Skulltula** on the large barred grate on the north side, near the water that splits the room, then jump over to the grate for its token. Press the switch on the raised platform to light the nearby torch, then burn the web next to the torch with a lit Deku Stick and open the small chest behind it for 3 **Deku Sticks**.",
          collect: ["deku-tree-gs-basement-gate", "deku-tree-basement-chest"] },
        { id: "c01-s03-03",
          text: "Light a Deku Stick at the torch and run through the shallow water to burn the web over the far door. Beyond it, bounce the Deku Scrub's nut back and then hit the Scrub yourself, because the bounce alone does not beat it. Remember its hint, then shoot the eye switch above the next door with the Fairy Slingshot.",
          collect: [] },
        { id: "c01-s03-04",
          text: "In the flooded room, dive onto the switch underwater on the left to lower the water for a moment, then ride the floating platform under the spiked log. Defeat the Big Skulltula, push the stone block under the high doorway and climb through.",
          collect: [],
          tip: "Link can dash while swimming, so the swim is quick." },
        { id: "c01-s03-05",
          text: "In the torch room, cut the **Deku Babas** for sticks if you need them. Light a Deku Stick at the burning torch and run past all 3 unlit braziers so they burn at the same time, and the door opens. In the next room a **Big Skulltula** drops from above; strike its underbelly when it shows. Then burn the web in the north-west corner with a lit Deku Stick and clear the **Deku Baba** and Skulltula in the passage behind it. At the end, the fourth **Gold Skulltula** of this tree sits high on the vine wall: shoot it with the **Fairy Slingshot** and climb up for its token. You need no Bombs or Boomerang. Back in the room you came through, burn the web on the east side. It hides the crawl passage you need to carry on.",
          collect: ["deku-tree-gs-basement-back-room"],
          tip: "3 eggs drop from above and hatch into **Gohma Larvae**. They glow red before they lunge, so sidestep or block, then strike back." },
        { id: "c01-s03-06",
          text: "On the ledge beyond, push the stone block off the edge to make a way back up. Light a Deku Stick at the low torch you used before, climb back over the block and roll onto the web in the floor so the flame burns it, then drop through.",
          collect: [] },
        { id: "c01-s03-07",
          text: "Bounce nuts back at the 3 Deku Scrubs in the order middle, right, left (the hint was 2, 3, 1); a wrong order resets them. The first 2 fall to a bounced nut alone. The last has to be hit as well after its nut bounces back. It gives a tip about the boss and the door to **Gohma** opens.",
          collect: [],
          tip: "Cut the bushes in this room for Deku Seeds and Deku Nuts before the fight." }
      ]
    },
    {
      id: "c01-s04", title: "Gohma", era: "child", kind: "boss",
      steps: [
        { id: "c01-s04-01",
          text: "Enter the boss room and look up at the eye on the ceiling to wake **Gohma**. Only her eye can be hurt. On the ground she hides it behind her mandibles. When she rears up to strike, backflip away; her claws stick in the dirt and her eye glows green, so slash it once and back off. When she climbs onto the ceiling, wait for the eye to glow green and shoot it with the **Fairy Slingshot**. She crashes to the floor, dizzy, so slash the eye or use a jump attack. If you are slow, she drops 3 eggs; shoot them before they hatch. About 3 rounds finish her, and Recovery Hearts lie along the arena. Then take the **Heart Container** and step into the blue light. Outside, the **Great Deku Tree** gives you the **Kokiri's Emerald**, the Spiritual Stone of the Forest.",
          collect: ["deku-tree-queen-gohma-heart", "queen-gohma"],
          warn: "You need the Fairy Slingshot and Deku Seeds for this fight, so stock up on seeds first.",
          tip: "Pick up the Heart Container before stepping into the light, which ends the visit." }
      ]
    }
  ],
  boss: {
    id: "boss-gohma", name: "Parasitic Armored Arachnid Gohma",
    weakness: "Her single eye, only when it glows green. Her armor stops your sword everywhere else.",
    strategy: [
      "On the ground she hides her eye behind her mandibles. When she rears up to strike, backflip away. Her claws stick in the dirt and the eye glows green: slash it once, then back off.",
      "When she climbs onto the ceiling, shoot the green eye with the Fairy Slingshot. She crashes down dizzy: slash the eye or use a jump attack.",
      "If you are slow after a ceiling hit, she drops 3 eggs. Shoot them before they hatch. About 3 rounds finish her, and Recovery Hearts lie along the arena."
    ]
  }
});
// end c01

// ---------------------------------------------------------------- c02
OOT.walkthrough.push({
  id: "c02-hyrule-castle", num: 2, title: "Hyrule Field, Lon Lon Ranch & the Princess", era: "child",
  summary: "Cross Hyrule Field to Hyrule Castle, hatch Malon's egg on the way past the guards, sneak to Princess Zelda, and learn Zelda's Lullaby and Epona's Song.",
  needs: ["Kokiri's Emerald", "Fairy Slingshot"],
  gains: ["Fairy Ocarina", "Zelda's Letter", "Zelda's Lullaby", "Epona's Song", "Bottle (Red Potion)", "Bottle (Lon Lon Milk)", "Bigger Deku-Seed Bag", "1 Piece of Heart", "4 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c02-s01", title: "Hyrule Field to the Market", era: "child", kind: "overworld",
      steps: [
        { id: "c02-s01-01",
          text: "Leave Kokiri Forest by the exit on the far side of the village. **Saria** is waiting at the way out and gives you the **Fairy Ocarina**.",
          collect: ["lw-gift-from-saria"],
          tip: "In **Hyrule Field** the owl **Kaepora Gaebora** stops you and points out the road to the castle." },
        { id: "c02-s01-03",
          text: "Follow the road northwest across **Hyrule Field** and cross the drawbridge into **Hyrule Castle Town**. Market buildings open without a loading screen. Enter the guard house just inside the entrance, and roll into the twitching crate at the back to free a Gold Skulltula, then defeat it and take its token.",
          collect: ["market-gs-guard-house"],
          tip: "The guard lets you smash the pots here, worth about 20 Rupees in all. Time does not pass yet: until you meet Zelda it stays day and the drawbridge stays down, so there is no rush.",
          check: "No guide says whether the pots refill. Smash them, leave, and look again on your next visit." },
        { id: "c02-s01-04",
          text: "In the **Market**, play the **Shooting Gallery** for 10 Rupees: hit all 10 targets with your 15 shots to win the **Bigger Deku-Seed Bag** (40 seeds). You need a perfect score. Hit 8 or 9 and the owner gives you a free retry.",
          collect: ["market-shooting-gallery-reward"],
          time: "day" },
        { id: "c02-s01-05",
          text: "Visit the **Potion Shop** in the Market: a bug is loose inside. The shopkeeper lends you a **Bottle** to catch it, and you keep the Bottle with a **Red Potion** inside as your reward. The shop also sells Bugs (30 Rupees) and Fish (50 Rupees) for a spare Bottle. Optional: the **Bazaar** sells the **Hylian Shield** for 80 Rupees. This guide takes a free one from **Kakariko Graveyard** in chapter 3 instead.",
          collect: ["market-bazaar-item-1", "market-potion-shop-bottle"],
          time: "day",
          tip: "This is the first of the 5 Bottles in the game. Tick it in the Bottle list." }
      ]
    },
    {
      id: "c02-s02", title: "Hyrule Castle and the Market at Night", era: "child", kind: "overworld",
      steps: [
        { id: "c02-s02-01",
          text: "Follow the road from the Market up toward **Hyrule Castle**. The gate guard turns you back, so you will need to sneak in another way.",
          collect: [] },
        { id: "c02-s02-02",
          text: "Malon is already at the castle on your first visit, by her cart on your right as you arrive. She gives you the **Weird Egg** straight away and asks you to find her father.",
          collect: ["hc-malon-egg"] },
        { id: "c02-s02-03",
          text: "A lost dog roams the Market at night, but the job opens only after Zelda's Letter has opened the Death Mountain gate in chapter 3. You take it in chapter 5.",
          collect: []},
        { id: "c02-s02-04",
          text: "From Malon's cart, cross the small drain and climb the bright green vines to a high ledge, then more vines to the top of the gatehouse. In the front gardens the guards stand still and throw you out if you walk into their view: hop the iron fence and hide behind the bushes, or veer left through the purple flowers before the road curves. Take the middle path between the hedges, go round the outside and climb the west wall past the big locked gate. In the small enclosed corner to the right, with barrels and sacks, roll into the tall narrow tree and defeat the Gold Skulltula that drops. Climb the vines to the moat and swim across to the tree on the far side, away from the 2 guards. **Talon** is asleep up the path. By now the **Weird Egg** has hatched into a **Wake-Up Cucco**: use it on him and he wakes and runs off.",
          collect: ["hc-gs-tree", "item-chicken", "event-wake-talon-castle"] },
        { id: "c02-s02-05",
          text: "**Talon** leaves 2 milk crates where he slept, below the drain. The jump is too high on its own: pull both crates to that spot, then push them off the ledge into the dip below so the second sits on top of the first. Climb up and crawl through the drain into the castle grounds. Sneak through the courtyard, staying out of each guard's line of sight, to **Princess Zelda**: she gives you **Zelda's Letter**, then **Impa** teaches you **Zelda's Lullaby** {notes:← ↑ → ← ↑ →} and leads you out.",
          collect: ["hc-zeldas-letter", "song-from-impa"],
          time: "day",
          tip: "You can play songs on the ocarina buttons (L, R, Y, X and A) or hum them into the microphone. If a courtyard guard spots you, you are sent back to where the drain comes out, so watch each guard's pattern before you move.",
          check: "Zelda Central describes pushing just one crate under the drain spout. If one crate gets you high enough, skip the second. If you changed any ocarina setting in Options, the buttons may differ from the ones shown." }
      ]
    },
    {
      id: "c02-s03", title: "Lon Lon Ranch", era: "child", kind: "overworld",
      steps: [
        { id: "c02-s03-01",
          text: "Go to **Lon Lon Ranch** in the middle of Hyrule Field while it is day. Time keeps passing inside the ranch, so the daytime-only events here can end while you are in there. Find **Malon** singing in the middle of the horse corral. She introduces the young horse **Epona** and asks you to play along: take out the **Fairy Ocarina** and copy her tune to learn **Epona's Song** {notes:↑ ← → ↑ ← →}.",
          collect: ["song-from-malon"],
          time: "day" },
        { id: "c02-s03-02",
          text: "Enter the house on the right side of the ranch, where **Talon** is back among a flock of Cuccos, and play his Super Cucco game: you have 30 seconds to find the 3 **Super Cuccos** hidden in the flock. Talon calls out each one you pick up. Winning earns a **Bottle** of **Lon Lon Milk**, and you keep the Bottle once the milk is drunk.",
          collect: ["llr-talons-chickens"],
          time: "day",
          tip: "The 3 Super Cuccos stand and walk a little differently from the rest, so watch how they move. Dashing helps you beat the clock.",
          check: "No guide lists a fee or a retry price, so bring some Rupees and see what Talon asks." },
        { id: "c02-s03-03",
          text: "Outside, go round behind the main ranch house, where Talon is, to a small yard with a wooden tower and 2 trees. Roll into the tall narrow tree, not the bigger one, and defeat the Gold Skulltula that falls out.",
          collect: ["llr-gs-tree"] },
        { id: "c02-s03-04",
          text: "Go to the large crumbled stone tower in the far southwest corner of the ranch and step inside. The storeroom holds 9 milk crates in a 3 by 3 block. Pull out the nearest crates to clear 2 spaces in the middle column, then pull the middle crate back against the wall. That opens a small gap: crawl through it for a **Piece of Heart**.",
          collect: ["llr-freestanding-poh"],
          tip: "A cow stands near the Piece of Heart. Play **Epona's Song** next to it to fill an empty Bottle with milk." },
        { id: "c02-s03-05",
          text: "On your way out, the next Gold Skulltula is in **Hyrule Field**. From the Kokiri Forest entrance, head west along the dirt path and cross the small stream to the lone tall, narrow tree on a hilltop overlooking the ranch, where the stream ends. Roll into it and defeat the Gold Skulltula that falls out. Lon Lon Ranch's other 2 tokens come at night and need the Boomerang, so leave them for chapter 6.",
          collect: ["llr-gs-rain-shed"]}
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
  needs: ["Zelda's Letter", "Zelda's Lullaby", "Epona's Song", "Bottle", "Fairy Slingshot", "Deku Sticks"],
  gains: ["Sun's Song", "Saria's Song", "Bottle", "Hylian Shield", "Adult's Wallet", "Deku Stick capacity upgrade", "Biggest Deku-Seed Bag", "Goron's Bracelet", "5 Pieces of Heart", "10 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c03-s01", title: "Kakariko Village by Day", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s01-01",
          text: "Enter **Kakariko Village** from Hyrule Field and climb to the gate at the top of the village. Show **Zelda's Letter** to the guard: he opens the way to **Death Mountain Trail** and asks you to bring him a mask from the **Happy Mask Shop**, which now opens in the Market.",
          collect: ["event-zeldas-letter-to-guard"],
          tip: "This guide runs the mask trades in chapter 6, once every buyer is available, so leave the shop for now." },
        { id: "c03-s01-02",
          text: "The **Cucco Lady**, by her empty pen, has lost 7 Cuccos, and returning them all earns an **Empty Bottle**. 2 of them are past the fence by the **Windmill** on the west side. Carry any Cucco there and glide over the gap in the fence into the fenced back yard of the **Potion Shop**, where one Cucco waits below the closed shop. Drop into the open hole in this yard for a grotto with a chest holding a Blue Rupee (5 Rupees). Back outside, throw the Cucco you brought and the yard Cucco back over the fence toward the well, then climb the ladder to the hilltop behind the windmill for the other one.",
          collect: ["kak-open-grotto-chest"],
          tip: "A Gossip Stone stands in the grotto." },
        { id: "c03-s01-03",
          text: "Round up the other 5. One wanders on the scaffolding of the building site near the **Cucco Lady**. One is by the village entrance gate. One sits inside a wooden crate near the middle of the village, beside the building where a woman cooks. Carry that crate Cucco up to **Impa's House** and glide down to the one on the brick pile nearby. The last is on the main path toward **Death Mountain Trail**, up the stairs past the tall wooden tower. When all 7 are in the pen, the Cucco Lady gives you an **Empty Bottle**.",
          collect: ["kak-anju-as-child"],
          tip: "Never attack a Cucco repeatedly, or a swarm attacks you." },
        { id: "c03-s01-04",
          text: "Take a Cucco from the path toward Death Mountain and carry it to the **Windmill**. Glide over the fence, climb the ladder up the hill behind the windmill, then glide from the hilltop onto the roof of the Potion Shop. Walk to the far side, toward the tower, and drop to the lower roof. Talk to the man sitting there for a **Piece of Heart**.",
          collect: ["kak-man-on-roof"],
          tip: "A child can do this with nothing but a Cucco. Never attack a Cucco repeatedly, or a swarm attacks you." }
      ]
    },
    {
      id: "c03-s02", title: "Kakariko Graveyard", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s02-01",
          text: "Enter **Kakariko Graveyard** and go to the large tomb at the back, where a royal crest lies between a pair of harp-shaped graves. Touching the harp graves calls up the ghost composers **Sharp** and **Flat**. They fight: shoot each with the **Fairy Slingshot** until he stops and talks. Then stand on the royal crest and play **Zelda's Lullaby** {notes:← ↑ → ← ↑ →}; lightning blows open the **Royal Family's Tomb**. Inside, defeat the Keese in the first room to open the door. The next room has poison goop and ReDeads: move slowly along the left side of the first pit, then dash down the middle and keep moving. Read the inscription at the end to learn the **Sun's Song** {notes:→ ↓ ↑ → ↓ ↑}.",
          collect: ["song-from-royal-familys-tomb"],
          tip: "A ReDead's shriek freezes you in place before it grabs you; mash buttons to break free. Once you have the Sun's Song, it stuns them for a long time." },
        { id: "c03-s02-02",
          text: "Wait for night, or play the Sun's Song {notes:→ ↓ ↑ → ↓ ↑} to bring it on. Go to the row of graves just before the steps up to the royal tomb; this is the second row. Pull the fourth grave from the right (stand behind it and pull) and drop in for the **Hylian Shield**. One ReDead guards the chest: the Sun's Song stuns it and makes the fight easier.",
          collect: ["graveyard-shield-grave-chest"],
          time: "night",
          tip: "By day a boy guards the graves and threatens to tell on you if you touch them, so do the pulls at night. Time keeps running here, so night can end while you work. The second grave in the first row (up the first small steps, with flowers in front) is a different one: pull it from behind, bomb the cracked wall inside and a Fairy Fountain waits behind it.",
          check: "IGN describes this grave in 2 ways: fourth from the right in that row, and the second grave on the right side of the path. If the first grave you pull is empty, try the other one." },
        { id: "c03-s02-03",
          text: "In the same row, just before the steps up to the royal tomb, pull the last grave at the far right (southern) end. Stand behind it and pull, drop in and open the large chest with a **Piece of Heart**. No enemies wait here, and you do not need the Sun's Song.",
          collect: ["graveyard-heart-piece-grave-chest"],
          time: "night" },
        { id: "c03-s02-04",
          text: "At night, find **Dampé** in the Graveyard for his gravedigging tour. Mounds appear in the ground: take Dampé to one and pay 10 Rupees for each dig. A dig turns up Rupees, a rock or nothing. When the ground is hard he asks for a few more Rupees, and a hard dig can hold the **Piece of Heart**, though not every one does. Bring about 60 Rupees. Time keeps running, so the night can end while you dig.",
          collect: ["graveyard-dampe-gravedigging-tour"],
          time: "night" },
        { id: "c03-s02-05",
          text: "Lift the stones by the Graveyard entrance and catch the Bug under them in a Bottle. Go up the steps on the left to the soft soil beyond a small tree, release the Bug and defeat the Gold Skulltula that crawls out.",
          collect: ["graveyard-gs-bean-patch"],
          tip: "Drink the milk first so the Bottle is empty. Bugs now come one at a time, and one Bug works for one soil patch. With 2 Bottles you can carry Bugs for 2 soil patches at once." }
      ]
    },
    {
      id: "c03-s03", title: "Kakariko Village at Night", era: "child", kind: "sweep",
      steps: [
        { id: "c03-s03-01",
          text: "Return to the village at night. Time keeps passing in town, so if night ends during this sweep, play the Sun's Song or wait for the next one. Roll into the tall narrow tree near the village entrance, by the **Master Craftsman** (his son stands there at night), and defeat the Gold Skulltula that drops. Next, go to the building under construction on the south side, near the **Cucco Lady**: the Gold Skulltula is on a high ledge of the red brick wall. Climb the scaffolding to reach it, or shoot it with the **Fairy Slingshot**. Last, the one at the **House of Skulltula** sits in a small web on the wall just left of the door.",
          collect: ["kak-gs-tree", "kak-gs-house-under-construction", "kak-gs-skulltula-house"],
          time: "night" },
        { id: "c03-s03-02",
          text: "Go to the boy's house, south of the watchtower and the **Potion Shop** (the boy is usually out in the Graveyard). Circle behind it and defeat the Gold Skulltula in its web on the back wall. Then shoot the one on the watchtower ladder, on the way to the Death Mountain gate, with the **Fairy Slingshot** and climb the ladder to its token.",
          collect: ["kak-gs-near-gate-guard", "kak-gs-watchtower"],
          time: "night",
          check: "Zelda Central puts the ladder token on the **Windmill** instead of the watchtower. If the watchtower ladder is empty, check the windmill ladder." },
        { id: "c03-s03-03",
          text: "Enter the **House of Skulltula** and talk to the **Cursed Rich Man**: 10 tokens earn the **Adult's Wallet**, which holds 500 Rupees. You should have 14 tokens now.",
          collect: ["kak-10-gold-skulltula-reward"],
          tip: "Every 10 tokens frees another family member with a new reward." }
      ]
    },
    {
      id: "c03-s04", title: "Death Mountain Trail and the Goron City Shortcut", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s04-01",
          text: "Go through the gate and up Death Mountain Trail, past the Red Tektites and the Goron by the giant boulder, as far as the **Goron City** entrance. The ledge above the Dodongo's Cavern entrance holds a **Piece of Heart**, but a child cannot reach it. An adult rides a bean plant up to it later, in chapter 12.",
          collect: [],
          tip: "A Goron rolls down the upper path. He does no damage, but keep to the side to avoid being knocked over." },
        { id: "c03-s04-02",
          text: "In Goron City, go down to the bottom floor and play Zelda's Lullaby on the mat in front of Darunia's door; he refuses to help for now. Light a Deku Stick at the torch in his room, light the torches on the bottom floor, then carry the flame to the Bomb Flowers beside the boulders blocking a passage on the floor above, where a Goron talks about music; the blast opens a tunnel into the **Lost Woods**.",
          collect: [],
          tip: "Lighting the bottom-floor torches also starts the big urn spinning. Its Piece of Heart needs Bombs, which come from **Dodongo's Cavern**; this guide takes it in chapter 4." }
      ]
    },
    {
      id: "c03-s05", title: "Lost Woods and Sacred Forest Meadow", era: "child", kind: "overworld",
      steps: [
        { id: "c03-s05-01",
          text: "A wrong exit in the Lost Woods sends you back to the Kokiri Forest entrance, and every direction here starts from there, so take a wrong exit to get back to the start. Go right, drop to the lower stump and stand on it: 2 Skull Kids play tunes for you to repeat on the ocarina over 3 rounds, and the tunes grow longer each round. The first 2 rounds pay 5 and then 20 Rupees, and winning the third earns a **Piece of Heart**. On-screen prompts show where each note goes, which helps you remember them. A mistake restarts the game.",
          collect: ["lw-ocarina-memory-game"] },
        { id: "c03-s05-02",
          text: "In the same clearing, hit the dead center of the target hanging from the tree 3 times in a row with the Fairy Slingshot. A Deku Scrub pops out and rewards you with the **Biggest Deku-Seed Bag**, which holds 50 seeds on this route.",
          collect: ["lw-target-in-woods"] },
        { id: "c03-s05-03",
          text: "From the entrance go left, then left again to the clearing with the bridge. Bounce a Business Scrub's nut back at it and pay 40 Rupees for a Deku Stick capacity upgrade. For the Gold Skulltula, go left to the Skull Kid grove, then south through a tunnel to a high ledge above the bridge, release Bugs on the soft soil there and defeat it.",
          collect: ["lw-deku-scrub-near-bridge", "lw-gs-bean-patch-near-bridge"],
          tip: "Bugs live under rocks all over the Lost Woods." },
        { id: "c03-s05-04",
          text: "Follow right, left, right, left, left from the entrance to a meadow with Business Scrubs. Release Bugs on the soft soil in this clearing and defeat the Gold Skulltula.",
          collect: ["lw-gs-bean-patch-near-theater"] },
        { id: "c03-s05-05",
          text: "Follow the music to **Sacred Forest Meadow**: right, left, right, left, straight, left, right. A Wolfos guards the gate. Your shield only holds it off for a moment, so backflip away from its lunge. After its second swipe it over-swings and shows its scarred back: hit it then with a jump attack. The bars lift when it falls.",
          collect: [],
          check: "No source gives this route from the Kokiri Forest entrance. IGN gives it from the **Goron City** tunnel: left, left again at the pool, straight through the 4-way crossing, left, then right. If the music fades, you took a wrong turn and land back at the start." },
        { id: "c03-s05-06",
          text: "Work through the hedge maze past the Mad Scrubs, keeping your shield up against their bursts of 3 nuts, and at the far end climb the stairs to Saria. She teaches you **Saria's Song** {notes:↓ → ← ↓ → ←}.",
          collect: ["song-from-saria"],
          tip: "At the end of the maze, turn around at the foot of the stairs to find a Fairy Fountain." }
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
          text: "Wait in the village for night, or play the Sun's Song to bring it on. Go behind the **Know-It-All Brothers' House**, by the Training Grounds, and defeat the Gold Skulltula on the trunk of the treehouse.",
          collect: ["kf-gs-know-it-all-house"],
          time: "night" },
        { id: "c03-s06-04",
          text: "Go back into the Lost Woods and take the tunnel to Goron City (from the entrance, right, then left). Play Zelda's Lullaby at Darunia's door to go in, then play Saria's Song for him; he dances and gives you the **Goron's Bracelet**, which lets you pull up Bomb Flowers.",
          collect: ["gc-darunias-joy"],
          tip: "Before you leave the forest, catch Bugs in a Bottle. Chapter 4 opens with a soft-soil Gold Skulltula on Death Mountain Trail that needs one." }
      ]
    }
  ],
  boss: null
});
// end c03

// ---------------------------------------------------------------- c04
OOT.walkthrough.push({
  id: "c04-dodongos-cavern", num: 4, title: "Dodongo's Cavern", era: "child",
  summary: "Use the Goron's Bracelet to open Dodongo's Cavern, find the Bomb Bag inside and defeat King Dodongo for the Goron's Ruby, put Bombs to work all over Death Mountain, then climb to the summit for the Magic Meter and Din's Fire.",
  needs: ["Goron's Bracelet", "Hylian Shield", "Fairy Slingshot", "Zelda's Lullaby", "Bottle with Bugs"],
  gains: ["Bomb Bag", "Goron's Ruby", "Heart Container", "Bomb Bag upgrade", "Magic Meter", "Din's Fire", "Echo Gem", "4 Pieces of Heart", "7 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c04-s01", title: "Opening Dodongo's Cavern", era: "child", kind: "overworld",
      steps: [
        { id: "c04-s01-01",
          text: "Leave Goron City by its upper exit and turn to the ledge where the Goron sits by a Bomb Flower. Pull up the Bomb Flower and throw it straight off the ledge onto the giant boulder below; the blast clears the entrance to **Dodongo's Cavern**.",
          collect: [] },
        { id: "c04-s01-02",
          text: "Once the boulder is gone, release Bugs on the soft soil in the tunnel at the cavern entrance and defeat the Gold Skulltula that crawls out.",
          collect: ["dmt-gs-bean-patch"],
          tip: "If you have no Bugs, look under the rocks by the Kakariko Graveyard entrance." }
      ]
    },
    {
      id: "c04-s02", title: "Dodongo's Cavern: Lower Floor", era: "child", kind: "dungeon",
      steps: [
        { id: "c04-s02-01",
          text: "Throw a Bomb Flower at the cracked wall inside the entrance. In the main cavern, ride a lava platform up to the center platform and cross to the left side, throw the lone Bomb Flower there at the cracked wall and open the chest for the **Dungeon Map**. A second cracked wall on this left side hides a small chest with a Blue Rupee (5 Rupees).",
          collect: ["dodongos-cavern-map-chest"],
          tip: "Keep clear of the Beamos on the center platform; a Bomb Flower destroys it. A Business Scrub in this dungeon sells Deku Sticks.",
          warn: "Fire Keese and fire breath burn a Deku Shield held up against them, and the shield is lost. Equip the **Hylian Shield** before going further." },
        { id: "c04-s02-02",
          text: "On the east side of the main cavern, destroy the Beamos with a Bomb Flower. 2 cracked walls stand there: bomb the south one to open the way on (the north one hides a Sheikah Stone you cannot use yet). Near the end of the Baby Dodongo passage beyond, on a short ledge, defeat a Baby Dodongo right beside the large cracked wall on the right so its blast opens it (a Bomb works too). Defeat the Gold Skulltula in the small room behind, where Keese wait. If the token is out of reach, shoot it with the Fairy Slingshot.",
          collect: ["dodongos-cavern-gs-side-room-near-lower-lizalfos"],
          tip: "Baby Dodongos explode a moment after they die, so step back." },
        { id: "c04-s02-03",
          text: "At the end of the passage, push the Armos statue onto the floor switch to open the barred door. Beat the 2 Lizalfos in the next room one at a time, shield up and striking between their attacks. When they fall, the purple flames on the far door die down and a chest with a Red Rupee (20 Rupees) rises. Pick up the Bomb Flower to the left of the north-west door and blast the door open; a Business Scrub waits behind it. In the Dodongo room beyond, strike each Dodongo's tail and light the 3 unlit torches from the lit one with a Deku Stick to open the exit.",
          collect: [],
          tip: "A Dodongo's tail is its only weak spot; bait its fire breath, then circle behind it." },
        { id: "c04-s02-04",
          text: "Back in the main cavern, step on the switch to open the door to the west room. There, a huge staircase rises to the north. Pick up the nearby Bomb Flower and blast the cracked wall on the south side. In the room beyond stand 3 big statues, and the far one wakes as an Armos that your sword cannot hurt. Lure it to the Bomb Flower by the entrance, or throw a Bomb Flower at it, and get clear before the blast. Then climb the far ladder and open the chest for the **Compass**.",
          collect: ["dodongos-cavern-compass-chest"] },
        { id: "c04-s02-05",
          text: "Carry a separate Bomb Flower to the gap in the row of Bomb Flowers along the staircase; the chain of blasts lowers the staircase. Climb it, shoot the Skullwalltulas and the Gold Skulltula on the vines at the top with the Fairy Slingshot, and climb up for the token.",
          collect: ["dodongos-cavern-gs-vines-above-stairs"] }
      ]
    },
    {
      id: "c04-s03", title: "Dodongo's Cavern: Upper Floor", era: "child", kind: "dungeon",
      steps: [
        { id: "c04-s03-01",
          text: "In the Armos room on the south side of the second floor, every statue but one is an Armos. Throw Bomb Flowers at the Armos before they wake. Then pull out the one plain statue, the south one with the only ladder, climb up and press the switch to open the east door. Cross the bridge over the main cavern, jumping the gap, to the room with blade traps. On the east side, pull the square stone block under the broken ladder, climb, and hop across the raised platforms to a small chest with 5 Deku Seeds.",
          collect: ["dodongos-cavern-bomb-flower-platform-chest"],
          tip: "Keep the Hylian Shield up against the Fire Keese, and watch for the gap in the middle of the bridge. Watch the timing of the blades before you cross." },
        { id: "c04-s03-02",
          text: "Throw the regrowing Bomb Flower onto the ledge of the cracked wall above the ladder to blast it open. Shoot the eye switch above the burning platform with the Fairy Slingshot to put out the flames and cross, then defeat the second pair of Lizalfos. They open the west door and raise a chest with a Business Scrub Seed, which calls a Business Scrub to you so you can buy supplies away from a shop. Then shoot both eye switches in the next fire room (the second hides in a cubby on the left).",
          collect: [],
          tip: "A second Business Scrub Seed chest sits behind a cracked wall at the top of the ladder above the lowered staircase. No Bomb Flowers grow there, so come back once you have the Bomb Bag." },
        { id: "c04-s03-03",
          text: "In the upper blade-trap room, jump to the next platform and climb the ledge on the right to the large chest with the **Bomb Bag**.",
          collect: ["dodongos-cavern-bomb-bag-chest"],
          tip: "The cracked wall behind the Bomb Bag chest opens a way back to the main cavern." },
        { id: "c04-s03-04",
          text: "On the main cavern's second floor, press the switch that extends the lift (a shortcut), then bomb the cracked wall at the end of the bridge for a small chest with a Blue Rupee (5 Rupees). Bomb the wall beside the bridge over the giant skull too, defeat the 2 Dodongos in the room behind it and walk round behind the big rock in the middle for a Gold Skulltula; no Boomerang is needed. The app lists that token under chapter 6, so tick it there. Then drop a Bomb through each hole in the bridge onto the eyes of the giant skull below; when both eyes glow red its mouth opens, and you can drop down and walk in.",
          collect: ["dodongos-cavern-end-of-bridge-chest"],
          tip: "A stone tablet on this floor hints at the skull puzzle.",
          check: "Guides differ on the Dodongo room token: one says it sits on the far side of the big rock, another says you bomb the big glowing rock to free it. If walking round the rock shows nothing, blast the rock." },
        { id: "c04-s03-05",
          text: "Inside the skull, go down the slope past the Fire Keese and north into the room of narrow paths and movable blocks. Pull the nearby block under the raised one and climb up, then push the other block down. Push that fallen block to the far wall, under the ledge with the large cracked wall, and throw a Bomb on top of the block to break the wall. Climb up and defeat the Gold Skulltula on the back wall of the small room behind. An Armos and 3 Baby Dodongos share that room, so step back from each blast.",
          collect: ["dodongos-cavern-gs-back-room"] },
        { id: "c04-s03-06",
          text: "To leave the block room, push a block under the one by the south exit and climb over both. Down the path, push one more block down into the hole in the floor of the earlier room to open the boss door. Bombs lie on the floor of the dark cave beyond, so pick one up as you go. Bomb the cracked patch of floor and drop through to King Dodongo.",
          collect: ["dodongos-cavern-boss-room-chest"] }
      ]
    },
    {
      id: "c04-s04", title: "King Dodongo", era: "child", kind: "boss",
      steps: [
        { id: "c04-s04-01",
          text: "Defeat King Dodongo: each time he stops to inhale, throw a Bomb into his open mouth, then strike him while he is down (see the boss card). Baby Dodongos spawn during the fight, so keep your shield up. Take the **Heart Container** and step into the blue light; Darunia names you his Sworn Brother and gives you the **Goron's Ruby**, the Spiritual Stone of Fire.",
          collect: ["dodongos-cavern-king-dodongo-heart", "king-dodongo"],
          tip: "With the Goron's Ruby in hand, the Market's Bombchu Bowling Alley and Bombchu Shop open, and shops start selling Bombs. Bomb Flowers around the arena are spare ammo, and the edge of the arena is the safest place when he rolls." }
      ]
    },
    {
      id: "c04-s05", title: "Bombs on Death Mountain Trail and in Goron City", era: "child", kind: "sweep",
      steps: [
        { id: "c04-s05-01",
          text: "Heading down the trail toward Kakariko, just past the corner near the Red Tektites, bomb the cracked wall. Defeat the Gold Skulltula behind it; it is there by day too.",
          collect: ["dmt-gs-near-kak"] },
        { id: "c04-s05-02",
          text: "Back up the trail, on the far west side past the Goron City tunnel entrance, bomb the cracked wall for a chest with a **Business Scrub Seed**.",
          collect: ["dmt-chest"] },
        { id: "c04-s05-03",
          text: "On Goron City's entrance tier, bomb the boulders at the upper left to reach the boulder maze. The black stone pillars cannot be broken. Bomb the cracked rocks in this order: right, left, then straight ahead. 2 small chests hold a Blue Rupee (5 Rupees) each, and a crate hides a Gold Skulltula; roll into it.",
          collect: ["gc-maze-center-chest", "gc-maze-right-chest", "gc-gs-boulder-maze"] },
        { id: "c04-s05-04",
          text: "One level below the entrance tier, a Goron rolls laps around the ring. A wooden sign in the tunnel part of his ring challenges you to stop him there. Stand at the tunnel entrance and look across the ring. The moment he enters the opposite side, plant a Bomb, because the fuse needs lead time. The Bomb does not hurt him. Talk to him for a bigger **Bomb Bag** that holds 30 Bombs.",
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
          text: "Where the trail forks above the cavern, take the highest path, bombing the boulders that block it, and climb to the summit. Bomb the cracked wall to the left of the owl and play Zelda's Lullaby {notes:← ↑ → ← ↑ →} on the Triforce mark inside. The Great Fairy asks for 25 Rupees before she gives anything, so bring at least that much. She grants the **Magic Meter**, a new green meter under your hearts, and **Din's Fire**.",
          collect: ["dmt-great-fairy-reward"],
          tip: "Rocks rain down from the volcano on the upper trail; hold up the Hylian Shield and move between falls, and shoot the Skullwalltulas before you climb the wall to the summit." },
        { id: "c04-s06-02",
          text: "With the summit open, go down into **Death Mountain Crater** as a child. No tunic is needed. The heat starts to hurt after about 4 seconds, then costs a quarter of a heart every second, so run straight ahead and do not stop. Go left after you step in: 2 wooden crates stand beside a pot, and a Gold Skulltula is in the farther one. Roll into it.",
          collect: ["dmc-gs-crate"],
          tip: "Start with full hearts, and keep a Fairy or a Potion in a Bottle if you can.",
          warn: "The crater burns Link soon after he enters. Run, grab the token and get out." },
        { id: "c04-s06-03",
          text: "Near the entrance, look for the netting set into the ground at the crater wall, to the right between 2 big rocks. Climb down it to the alcove just below for a **Piece of Heart**; taking it resets the heat timer, so climb straight back up. Then run north-west to a low platform beside a broken bridge that a big grey rock blocks. Talk to the Business Scrub there and buy a Piece of Heart for 100 Rupees, which also resets the heat timer.",
          collect: ["dmc-wall-freestanding-poh", "ice-cavern-freestanding-poh"],
          check: "Guides disagree on the net: IGN puts it to the right between 2 big rocks, and Zelda Central puts it just past the crates and pot on the left. Look right first, then past the crates." }
      ]
    },
    {
      id: "c04-s07", title: "Owl to Kakariko", era: "child", kind: "sweep",
      steps: [
        { id: "c04-s07-01",
          text: "Talk to the owl at the summit and hold on as he flies you down to the roof of **Impa's House** in Kakariko. Walk to the back of the roof and look down at the cow pen, whose gates are sealed. Hop down onto the pen's lower roof for a **Piece of Heart**.",
          collect: ["kak-impas-house-freestanding-poh"] },
        { id: "c04-s07-03",
          text: "In the House of Skulltula, claim the 20-token reward, the Echo Gem. It shines and vibrates near Gold Skulltulas, faster as you get closer. It also flashes near one that has not appeared yet, such as one that comes out only at night, hides in soft soil or is stuck in a tree. Equip it from the menu.",
          collect: ["kak-20-gold-skulltula-reward"] }
      ]
    }
  ],
  boss: {
    id: "boss-king-dodongo", name: "Infernal Dinosaur King Dodongo",
    weakness: "A Bomb or Bomb Flower thrown into his mouth while he inhales.",
    strategy: [
      "Wait for him to stop and draw in a long breath, then throw a Bomb (or one of the Bomb Flowers in the room) into his open mouth.",
      "The blast knocks him down. Run in and strike him with the sword, with stabs or a jump attack, until he gets up.",
      "After recovering he curls up and rolls around the arena. Stand near the lava edge or in an inner corner, or block with the Hylian Shield.",
      "His fire breath has a long wind-up, so step out of its path. About 3 bomb-and-strike rounds finish him."
    ]
  }
});
// end c04

// ---------------------------------------------------------------- c05
OOT.walkthrough.push({
  id: "c05-jabu-jabu", num: 5, title: "Zora's Domain & Jabu-Jabu's Belly", era: "child",
  summary: "Visit the castle's Great Fairy for the upgraded Spin Attack and collect the Bomb-gated extras around the Market and Hyrule Field, follow Zora's River to Zora's Domain, find Ruto's Letter in Lake Hylia, and rescue Princess Ruto from inside Lord Jabu-Jabu for Zora's Sapphire.",
  needs: ["Bombs", "Magic Meter", "Zelda's Lullaby", "Epona's Song", "Saria's Song", "Sun's Song", "Deku Sticks"],
  gains: ["Upgraded Spin Attack", "Farore's Wind", "Silver Scale", "Boomerang", "Zora's Sapphire", "Heart Container", "Bottle (Ruto's Letter)", "Bomb Bag upgrade", "Magic Beans", "6 Pieces of Heart", "10 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c05-s01", title: "Castle, Market and Hyrule Field with Bombs", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s01-01",
          text: "At **Hyrule Castle**, climb the central vine on the wall as you did to reach Talon, drop down on the far side of the guard's gate and go straight ahead to a sign that reads \"Dead End\". Bomb the boulder behind it, crawl into the passage and play Zelda's Lullaby {notes:← ↑ → ← ↑ →} on the Triforce mark. The Great Fairy asks for 50 Rupees and gives you the upgraded **Spin Attack**.",
          collect: ["hc-great-fairy-reward"],
          tip: "Hold the sword button to charge the Spin Attack, then let go for a wave of magic energy. It costs no magic. Din's Fire came from the Death Mountain summit fairy in chapter 4, so there is nothing else to hunt for here.",
          check: "No source confirms the vine route or the \"Dead End\" sign. Zelda Central says the boulder sits on a grassy slope under the rock cliff beside the road, with vines on that cliff. If you do not find the sign, look for that boulder and bomb it." },
        { id: "c05-s01-02",
          text: "In the Market, the **Bombchu Bowling Alley** is now open. Each game costs 10 Rupees and gives you 10 Bombchus to send at 3 targets. The prizes come in a fixed order: **Bombchus**, then the **Biggest Bomb Bag**, then a **Piece of Heart**. Keep playing until you have all 3, so bring at least 30 Rupees.",
          collect: ["market-bombchu-bowling-first-prize", "market-bombchu-bowling-second-prize"] },
        { id: "c05-s01-03",
          text: "Optional: buy **Bombchus** at the **Bombchu Shop** in the **Back Alley**. It opened when you finished Dodongo's Cavern. The drawbridge never closes now, so you can come and go at any hour.",
          collect: ["item-bombchu"] },
        { id: "c05-s01-07",
          text: "Zelda's Letter has opened the Death Mountain gate, so the lost dog job is open now. Go to the **Back Alley** in the evening or at night. Past the Bombchu Shop, round the back corner near the Treasure Chest Shop, you find **Richard** among other white dogs. Talk to a dog so it follows you; if it is the wrong one, try another. Lead him back to the woman in the alley who is calling his name for a **Piece of Heart**.",
          collect: ["market-lost-dog"],
          time: "night",
          tip: "Time keeps passing in the Market, so night can fall or end while you are in town." },
        { id: "c05-s01-04",
          text: "Back in **Hyrule Field**, there are no grotto chests for a child to open: the only chest grotto in the field needs the Song of Storms. The Fairy Fountain grotto in the grassland just north of **Lon Lon Ranch** is worth a Bomb if you want a fairy.",
          collect: [],
          tip: "Cracked ground in the field marks a grotto that opens with a Bomb. The Business Scrub grotto by the drawbridge is the next step." },
        { id: "c05-s01-06",
          text: "Slightly east of the Castle Town drawbridge, beside the moat, bomb the patch of cracked ground to open a grotto. The Business Scrub there wants a password before he sells his **Piece of Heart** for 100 Rupees. As an adult, read the **Fairy Thought** on the tree beside the hole; the password is \"Sell somethin', will ya?\". Then come back as a child, because the shop shows sold out to an adult.",
          collect: ["hf-deku-scrub-grotto"],
          tip: "You cannot learn the password as a child. Leave this one until you have read the note as an adult and are back in childhood (chapter 11); the app still lists it here." }
      ]
    },
    {
      id: "c05-s02", title: "Zora's River", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s02-01",
          text: "Follow the river upstream from the drawbridge to **Zora's River** and bomb the boulders blocking the path. Around the corner, release Bugs on the soft soil next to the **Bean Seller** and defeat the Gold Skulltula that crawls out.",
          collect: ["zr-gs-tree"],
          tip: "You need a Bottle with Bugs. The rock by the Kakariko Graveyard entrance always has some.",
          check: "6 guides show no token in the first tree on the left, only the bug hole. Rolling into that tree costs nothing, so try it once on the way." },
        { id: "c05-s02-02",
          text: "Buy **Magic Beans** from the **Bean Seller**; the first costs 10 Rupees and each one after costs 10 more. Buy 3, since later checks need beans at Lake Hylia, the Graveyard and the Forest Stage, and keep some Rupees for the Fishing Pond.",
          collect: ["zr-magic-bean-salesman"],
          tip: "He sells 10 beans in all, and each soil patch needs only 1. This guide buys the rest on 2 later visits: 4 after the Bunny Hood sale pays you in chapter 6, and the last 3 on the trip back to childhood (chapter 11)." },
        { id: "c05-s02-03",
          text: "Pick up the lone **Cucco** beside the sealed gate near the **Bean Seller**. Carry it upriver, throw it over the last ledge before you climb, then glide with it down to the high platform at the back of the big middle island and climb the vines to the top. From the south side of the island, jump the gap to the cliff ledge and find the grotto hidden in the tall grass. Open its chest, which holds a **Business Scrub Seed**, and carry out the second Cucco inside. Cross to the narrow platform with the **Sheikah Stone** and glide down to the high platform above the singing frogs for a **Piece of Heart**.",
          collect: ["zr-near-open-grotto-freestanding-poh", "zr-open-grotto-chest"],
          tip: "Watch for Octoroks spitting rocks from the water; stop and shield to bounce them back. Link has a jump button now instead of jumping on his own. Optional: bomb the cracked boulder in the ruin at the top of the island for a Fairy Fountain." },
        { id: "c05-s02-04",
          text: "Carry a Cucco up the platforms (toss it up ahead, climb, pick it up again), cross the bridge and climb the twisting platforms to the top beside the waterfall. Turn around and glide down to the lone platform in the corner for a **Piece of Heart**.",
          collect: ["zr-near-domain-freestanding-poh"] },
        { id: "c05-s02-05",
          text: "Go upriver to the alcove on the northern cliff where the frogs sit on tree stumps. Play them Zelda's Lullaby {notes:← ↑ → ← ↑ →}, Epona's Song {notes:↑ ← → ↑ ← →}, Saria's Song {notes:↓ → ← ↓ → ←} and the Sun's Song {notes:→ ↓ ↑ → ↓ ↑}. Each new song makes a frog react.",
          collect: ["zr-frogs-zeldas-lullaby", "zr-frogs-eponas-song", "zr-frogs-sarias-song", "zr-frogs-suns-song"],
          tip: "The other frog rewards need the Song of Time and the Song of Storms; this guide returns for them in chapter 11.",
          check: "IGN says each new song pays Rupees, rising as you go, about 50 in all; Zelda Central saw no reward for Epona's Song. Tick each song once the frogs react. No source says whether the frogs accept hummed songs." },
        { id: "c05-s02-06",
          text: "At night (the Sun's Song you just played may already have brought it), drop into the shallow water at the base of the waterfall below the Domain entrance. The Gold Skulltula hides around the back of the vines by the central platform.",
          collect: ["zr-gs-ladder"],
          time: "night",
          tip: "Time passes on the river, so you can also wait for night." }
      ]
    },
    {
      id: "c05-s03", title: "Zora's Domain", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s03-01",
          text: "Climb the arching platforms beside the falls to the plaque at the top and play Zelda's Lullaby {notes:← ↑ → ← ↑ →} to part the waterfall, then enter **Zora's Domain**. 2 torches already burn at the entrance to King Zora's chamber. Light a Deku Stick there and run down the steps, lighting each unlit torch you pass. At the bottom, behind the big waterfall, light the last 2 braziers; a chest with a **Piece of Heart** appears in the middle.",
          collect: ["zd-chest"],
          tip: "The stick burns out if you dawdle. Put it away between torches, and relight it from a burning torch if it goes out." },
        { id: "c05-s03-02",
          text: "From King Zora's chamber, follow the waterway up to the top of the large waterfall and talk to the Zora there to start the diving game. It is free. Dive and collect all 5 scales he throws into the water within 40 seconds to win the **Silver Scale**.",
          collect: ["zd-diving-minigame"],
          tip: "Link swims faster and can dive freely, so this game is much easier than it used to be." }
      ]
    },
    {
      id: "c05-s04", title: "Lake Hylia", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s04-01",
          text: "With the Silver Scale, dive into the deepest part of the Domain's pool and swim through the tunnel at the bottom to **Lake Hylia**. Just ahead of where the tunnel comes out, dive where bubbles rise to find a **Bottle** holding **Ruto's Letter**.",
          collect: ["lh-underwater-item"],
          tip: "Link can dive freely when he spots something below." },
        { id: "c05-s04-02",
          text: "On the eastern shore of the lake, 2 scarecrows stand together: **Pierre** and **Bonooru**. Talk to Bonooru and play him a tune of exactly 8 notes. He memorizes it, and you must play the same notes to him as an adult, so write them down.",
          collect: [],
          tip: "Alternating 2 notes is easy to remember, for example {notes:A ↓ A ↓ A ↓ A ↓}.",
          check: "No guide says whether the Songbook saves the tune or whether a hummed tune works, so write the notes down." },
        { id: "c05-s04-03",
          text: "Release Bugs from a Bottle on the soft soil beside the **Lakeside Laboratory** and defeat the Gold Skulltula. Then plant a **Magic Bean** in the same soil; you will ride the plant as an adult.",
          collect: ["lh-gs-bean-patch", "bean-lake-hylia"] },
        { id: "c05-s04-04",
          text: "Swim to the **Fishing Pond**, across the water from the scarecrows, and pay 10 Rupees for a rod. Land a big fish for a **Piece of Heart**; look for the big ones out in the middle of the pond.",
          collect: ["lh-child-fishing"],
          tip: "Use the normal lure; Zelda Central says fish caught on the sinking lure do not count.",
          check: "IGN says a fish over 40 cm wins the Piece of Heart. Zelda Central says a 56 cm fish was enough, and its checklist says over 55 cm. Hand over the biggest fish you can land; if the owner turns it down, try for 55 cm or more." },
        { id: "c05-s04-05",
          text: "Swim from the big tree island to the far south-west shore of the lake. Climb the tiny ledge at the southern tip and shuffle through the tunnel to the other side, where the Gold Skulltula waits. A Tektite blocks the way in; beat it first.",
          collect: ["lh-gs-small-island"],
          check: "Neither IGN nor Zelda Central says this token is night-only. If it is not there by day, come back at night." }
      ]
    },
    {
      id: "c05-s05", title: "King Zora and Zora's Fountain", era: "child", kind: "overworld",
      steps: [
        { id: "c05-s05-01",
          text: "Swim back through the tunnel to Zora's Domain and show Ruto's Letter to King Zora; he shifts aside to open the way to **Zora's Fountain**, leaving the Bottle empty. At the bottom of the Domain, in the corner of the shallows by the path to the shop, a Zora is trying to catch an offering. Catch a **Fish** there with the empty Bottle.",
          collect: [],
          tip: "Zelda Central says the Castle Town Potion Shop sells a Fish for 50 Rupees, if you would rather buy one." },
        { id: "c05-s05-02",
          text: "At Zora's Fountain, follow the shallow path south to the patch of land with trees and a large cracked wall. Roll into the narrow tall trees there and defeat the Gold Skulltula that drops.",
          collect: ["zf-gs-tree"],
          check: "IGN gives no time for this token, but Zelda Central says it only comes out at night. Try it now; if nothing drops, come back after dark (the Sun's Song brings night)." },
        { id: "c05-s05-03",
          text: "On the same patch of land, south of Lord Jabu-Jabu, bomb the large cracked wall beside the thin trees to open a Great Fairy's Fountain. Play Zelda's Lullaby {notes:← ↑ → ← ↑ →} inside; she asks for 100 Rupees before she gives you **Farore's Wind**.",
          collect: ["zf-great-fairy-reward"] }
      ]
    },
    {
      id: "c05-s06", title: "Inside Jabu-Jabu's Belly: With Ruto", era: "child", kind: "dungeon",
      steps: [
        { id: "c05-s06-01",
          text: "Release the Fish in front of Lord Jabu-Jabu and he swallows you. Shoot the switch dangling from the ceiling at the narrow end of the first room with the Fairy Slingshot, cross the next room to the far door, and drop through the hole after Princess Ruto; talk to her until she lets you carry her.",
          collect: [],
          tip: "Shabom bubbles hurt when they pop against you, and the Slingshot does nothing to them. Throw Ruto at them or cut them with the sword. Stun Biri with a Deku Nut before you strike them; a Deku Stick is also safe to hit them with." },
        { id: "c05-s06-02",
          text: "In the room with the floor switch, throw Ruto up onto the far ledge and defeat the Stingers that leap from the water. Shoot the Gold Skulltula on the side wall with the Fairy Slingshot and climb up for its token, then press the switch in the pit to raise the water. Before you leave this room, open the chest with the **Dungeon Map** in a side alcove on its east side, opposite the Gold Skulltula's wall. Ruto now waits wherever you set her down, even if you leave the dungeon and come back.",
          collect: ["jabu-jabus-belly-gs-water-switch-room", "jabu-jabus-belly-map-chest"] },
        { id: "c05-s06-03",
          text: "Carry Ruto onward. In the narrow room, shoot the ceiling switch guarded by an Octorok; the blue platform from the first room comes down as a lift. Ride it up with Ruto and head back through the room where she fell, past the Biri and Bari. In the hub with 5 corridors, take the first on the left: set Ruto on the raised switch to hold the sealed door open, and defeat the Stingers in the room beyond to open the large chest with the **Boomerang**.",
          collect: ["jabu-jabus-belly-boomerang-chest"],
          tip: "You can throw Ruto at Biri and Stingers to hurt them." },
        { id: "c05-s06-04",
          text: "Back in the hub, the corridor on the right along the red vein is the only other one open. Set Ruto on its door switch so the door stays open and go in alone. Target the red tentacle and hit the frayed part near its middle again and again with the Boomerang.",
          collect: [] },
        { id: "c05-s06-05",
          text: "Next, take the corridor that follows the blue vein. Defeat the blue tentacle with the Boomerang; Biri float beside it, so hit them with the Boomerang or throw Ruto at them. Beating it opens the last 2 rooms. In the room on the right, pop every Shabom with the Boomerang to reveal the chest with the **Compass**.",
          collect: ["jabu-jabus-belly-compass-chest"] }
      ]
    },
    {
      id: "c05-s07", title: "Inside Jabu-Jabu's Belly: Tentacles and Big Octo", era: "child", kind: "dungeon",
      steps: [
        { id: "c05-s07-01",
          text: "Last, go to the northern room and defeat the green tentacle; Stingers attack while you fight it. When it slams down and stuns itself, hit it with the Boomerang or strike it up close. With all 3 tentacles gone, the barrier over the pit in the 2-tier room disappears.",
          collect: [] },
        { id: "c05-s07-02",
          text: "With Ruto, go to the room with the 2-tier pit and jump down the blue pit onto a high ledge. 2 Gold Skulltulas wait there: 1 on the north wall near the floating Biri, and 1 on the ceiling of the small corridor that heads to the north-west room. Defeat them and pull in their tokens with the Boomerang.",
          collect: ["jabu-jabus-belly-gs-lobby-basement-lower", "jabu-jabus-belly-gs-lobby-basement-upper"] },
        { id: "c05-s07-03",
          text: "Throw Ruto onto the central platform in the next chamber; she finds her Spiritual Stone and is carried off, and **Big Octo** appears. Stun it with the Boomerang, run around to its back and jump-attack the green growth there. After a few hits it burrows and leaves Shabom bubbles behind; pop them, find where it comes up and repeat. It falls after 3 rounds. Then ride the lowered platform up.",
          collect: [] },
        { id: "c05-s07-04",
          text: "Down the corridor, freeze the 2 swinging water platforms with the Boomerang and cross them. In the next room, cross the small platforms down to the stone block, toss it up onto the main upper platform, climb the vines and set the block on the switch to open the door. In the last room, defeat the Biri, then the Gold Skulltula on the back of the tall vine pillar, and climb for its token. From the top of the pillar, curve the Boomerang around the barriers to hit the switch in the ceiling and open the boss door.",
          collect: ["jabu-jabus-belly-gs-near-boss"] }
      ]
    },
    {
      id: "c05-s08", title: "Barinade", era: "child", kind: "boss",
      steps: [
        { id: "c05-s08-01",
          text: "Defeat **Barinade**: cut its 3 tethers to the ceiling with the Boomerang, then deal with the jellies that shield it and finish off its body (see the boss card). Take the **Heart Container** and step into the blue light with Ruto; she gives you the **Zora's Sapphire**, the Spiritual Stone of Water, and you are left at **Zora's Fountain**.",
          collect: ["jabu-jabus-belly-barinade-heart", "barinade"] }
      ]
    },
    {
      id: "c05-s09", title: "Zora's Fountain at Night", era: "child", kind: "sweep",
      steps: [
        { id: "c05-s09-01",
          text: "Play the Sun's Song to bring night, or wait for it, since time passes here now. Stand on the log near the exit, left of Lord Jabu-Jabu, and throw the Boomerang at the Gold Skulltula on the wall above it, then again to pull in its token.",
          collect: ["zf-gs-above-the-log"],
          time: "night",
          check: "IGN says to climb the archway in the water and look for the token on the far wall. If the log near the exit is not that archway, find the arch in the water and look at the wall beyond it." }
      ]
    }
  ],
  boss: {
    id: "boss-barinade", name: "Bio-electric Anemone Barinade",
    weakness: "Its body, once the Boomerang knocks it down. First cut its 3 ceiling tethers with the Boomerang, then clear the jellies.",
    strategy: [
      "Circle the room to dodge its lightning and hit the frayed spot on each of the 3 ceiling tethers with the Boomerang until all are cut.",
      "Electrified jellies then spin around it as a shield. Keep your distance until its core glows and shorts out on its own, then rush in and slash as many jellies as you can. Back off quickly, because it fires lightning after. Expect about 2 cycles.",
      "Its lower body rises with the last jellies and charges when it turns purple. Step aside, wait for the jellies to slow, then hit its body with the Boomerang so it sinks, and finish off the jellies.",
      "At the end it floats free and fires lightning everywhere. Get close, knock it down with the Boomerang, and use jump attacks and the Spin Attack. 2 or 3 stuns finish it. Pots along the outer wall hold Recovery Hearts."
    ]
  }
});
// end c05

// ---------------------------------------------------------------- c06
OOT.walkthrough.push({
  id: "c06-temple-of-time", num: 6, title: "The Door of Time", era: "child",
  summary: "Receive the Ocarina of Time and the Song of Time, finish the child-era sweep with the Boomerang and Bombs while running the Happy Mask Shop trades, then open the Door of Time and draw the Master Sword.",
  needs: ["Kokiri's Emerald", "Goron's Ruby", "Zora's Sapphire", "Boomerang", "Bombs", "Magic Beans", "Epona's Song", "Sun's Song"],
  gains: ["Ocarina of Time", "Song of Time", "Giant's Wallet", "Deku Stick capacity upgrade", "2 Deku Nut capacity upgrades", "Mask of Truth", "3 Pieces of Heart", "10 Gold Skulltula Tokens", "Master Sword"],
  sections: [
    {
      id: "c06-s01", title: "The Ocarina of Time and the Keaton Mask", era: "child", kind: "overworld",
      steps: [
        { id: "c06-s01-01",
          text: "Head for the Market drawbridge with all 3 Spiritual Stones. A scene plays in which Zelda and Impa flee on horseback and Zelda throws something into the moat; dive into the moat where it fell for the **Ocarina of Time**, and a vision of Zelda teaches you the **Song of Time**.",
          collect: ["hf-ocarina-of-time-item", "song-from-ocarina-of-time"] },
        { id: "c06-s01-02",
          text: "In the Market by day, borrow the **Keaton Mask** from the **Happy Mask Shop**, just past the **Potion Shop**, near the path up to the Temple of Time. You pay for each mask only after selling it, and paying unlocks the next one.",
          collect: ["mask-keaton"],
          time: "day",
          tip: "Only one mask can be held at a time. If you come back without enough Rupees to pay, the next mask stays locked until you do. Time passes in towns now, so the daytime-only shop can close while you are in the Market." },
        { id: "c06-s01-03",
          text: "The Gold Skulltulas of Hyrule Field have moved, and no grotto by the lone tree on the Kakariko path holds one. Go to the wooded area south of Lon Lon Ranch, near the large Peahat, and bomb the cracked ground. Inside, defeat the large Skulltula, then throw the Boomerang at the **Gold Skulltula** on the wall and again to pull in its token. This is a different token from the one in the thin tree west of the Kokiri Forest exit, which you took in chapter 2.",
          collect: ["hf-gs-near-kak-grotto"],
          tip: "Your Echo Gem flashes on the screen and on Link's tunic as you get close to a Gold Skulltula." },
        { id: "c06-s01-05",
          text: "Sell the Keaton Mask to the guard at the Death Mountain gate for 15 Rupees. Then, once you have 30 tokens, claim the 30-token reward in the House of Skulltula, the **Giant's Wallet**, which holds 1,000 Rupees.",
          collect: ["kak-30-gold-skulltula-reward"],
          tip: "Wallets are bigger now: you start with 200 Rupees, the Adult's Wallet holds 500 and the Giant's holds 1,000. You do not need this wallet before the Bunny Hood sale, because the Running Man pays a Gold Rupee worth 200 Rupees; just keep room for 200." },
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
          text: "In the **Lost Woods**, follow right, left, right, left, left from the Kokiri Forest entrance to the meadow with the Business Scrubs. At the back, in the tall grass, fall through the hidden hole into the **Forest Stage** and wear the Skull Mask on stage for a Deku Stick capacity upgrade; back outside, plant a **Magic Bean** in the soft soil.",
          collect: ["deku-theater-skull-mask", "bean-lost-woods-theater"],
          tip: "This bean matters: an adult rides it to a Gold Skulltula in chapter 7." },
        { id: "c06-s02-02",
          text: "Go left from the entrance and sell the Skull Mask to the Skull Kid on the stump for 10 Rupees.",
          collect: [] },
        { id: "c06-s02-03",
          text: "From the entrance go right, then left, to the clearing with the tunnel to Goron City. Bomb the boulder next to the tunnel and drop into the grotto. Plants inside hide Bugs, so pick some up with a Bottle.",
          collect: [] },
        { id: "c06-s02-04",
          text: "Follow right, left, right, left, straight, left to the last clearing before the **Sacred Grove** and bomb the boulder there. In the grotto, bounce the first Business Scrub's nut back at it and buy its Deku Nut capacity upgrade for 40 Rupees.",
          collect: ["lw-deku-scrub-grotto-front"],
          tip: "The Sacred Grove's Wolfos grotto needs the Song of Storms, which you learn as an adult. It is in chapter 7 (step c07-s04-06).",
          check: "IGN gives the turns from the Goron City tunnel clearing as left, left, straight, left to reach this clearing, which differs from the list above at one turn. If a turn sends you back to the start, follow the music; the boulder is in the clearing just before the Sacred Grove gate." }
      ]
    },
    {
      id: "c06-s03", title: "Kokiri Forest and Lon Lon Ranch", era: "child", kind: "sweep",
      steps: [
        { id: "c06-s03-01",
          text: "You should already have the Deku Tree's fourth token from chapter 1, so skip this trip if it is ticked there. If you missed it, return to the basement of the **Great Deku Tree** and go to the room where Gohma Larvae dropped from the ceiling. Burn the web you left there with a lit Deku Stick, clear the passage behind it and shoot the Gold Skulltula on the vine wall at the end. You do not need Bombs or the Boomerang. Then tick it in chapter 1.",
          collect: [],
          tip: "The main room's floor webs are already broken, so you can drop straight to the basement." },
        { id: "c06-s03-02",
          text: "At **Lon Lon Ranch**, play the Sun's Song to bring night. Throw the Boomerang at the Gold Skulltula on the window of the main house, near the entrance arch and the racetrack, then go into the ruined tower at the far southwest corner, look up to the vines high inside, and Boomerang the one there; its token drops among the crates in the storeroom. Time keeps running, so night can end while you are here; play the Sun's Song again to bring it back.",
          collect: ["llr-gs-house-window", "llr-gs-back-wall"],
          time: "night",
          tip: "A third token works in daylight, in a thin tree behind the big house. You took it in chapter 2, so it is not a new one." },
        { id: "c06-s03-03",
          text: "Play the Sun's Song again to bring morning, since the Happy Mask Shop only opens by day, then go to the shop. Pay 20 Rupees for the Skull Mask and borrow the **Spooky Mask**.",
          collect: ["mask-spooky"],
          time: "day" }
      ]
    },
    {
      id: "c06-s04", title: "Kakariko, the Graveyard and Death Mountain with the Spooky Mask", era: "child", kind: "sweep",
      steps: [
        { id: "c06-s04-01",
          text: "By day, sell the Spooky Mask for 50 Rupees to the boy with the stick in **Kakariko Graveyard**, then plant a Magic Bean in the soft soil by the dead tree on the Graveyard's north side, under the raised ruins.",
          collect: ["bean-graveyard"],
          time: "day",
          tip: "This bean matters: an adult rides it to a Piece of Heart in chapter 7. The boy only appears in daylight." },
        { id: "c06-s04-03",
          text: "Play the Sun's Song to bring night, then throw the Boomerang at the Gold Skulltula on the high wall behind Dampé's house, and again to pull in its token.",
          collect: ["graveyard-gs-wall"],
          time: "night",
          tip: "Time keeps running, so night can come and go while you are in the Graveyard; play the Sun's Song if it ends." },
        { id: "c06-s04-04",
          text: "Skip this trip if the token is already ticked. This token has moved from the alcove at the top of the big staircase. If you missed it, go back into **Dodongo's Cavern** and find it in the room with 2 Dodongos on the second floor. Bomb the cracked wall in the far northeast corner of the second floor, by the giant skull, defeat the 2 Dodongos and walk round behind the big rock in the middle. You do not need the Boomerang.",
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
          text: "Find the Running Man in **Hyrule Field**. By day he runs through the field (one guide spots him on the paved road just outside the Castle Town gate); at night he rests by the boulder northwest of Kokiri Forest. Stand on high ground to spot him, then wear the Bunny Hood in front of him: he stops and buys it for a Gold Rupee worth 200 Rupees, not a full wallet. Spend some at **Zora's River**: you bought 3 beans earlier, so the next 4 **Magic Beans** cost 40, 50, 60 and 70 Rupees (220 in all). Buy 4, plant 1 in the soft soil beside the salesman, and keep 3 for Gerudo Valley, Kokiri Forest and the Lost Woods.",
          collect: ["bean-zoras-river"],
          tip: "Time passes wherever you are now, so night comes by itself." },
        { id: "c06-s05-02",
          text: "In the marshy southeast of **Hyrule Field**, near the large Peahats, bomb the cracked ground to open a grotto. Read the Fairy Thought inside and defeat the plain Skullwalltula there. The token itself comes later, when adult Link returns (chapter 8).",
          collect: [],
          tip: "The grotto north of the Gerudo Valley entrance (bombed open) holds a cow, a Gossip Stone and jars, with giant webs across the way. Din's Fire burns the webs away."},
        { id: "c06-s05-03",
          text: "At night in Gerudo Valley, go to the small wooden plank bridge at the entrance and hop down under it. Throw the Boomerang at the Gold Skulltula there, then again to pull in its token.",
          collect: ["gv-gs-small-bridge"],
          time: "night",
          check: "IGN puts this token under the small plank bridge over a pool near the valley entrance. Zelda Central puts it on the dark rock wall by the river channel, reached by the wooden stairs and plank path beside the waterfall. If nothing shows under the bridge, look there." },
        { id: "c06-s05-04",
          text: "Pick up a Cucco near the bridge, jump along the sections of the valley wall and glide across the gap to the far side of the valley. Open the large chest there for a **Piece of Heart**. Then drop into the river, which carries you down to **Lake Hylia**.",
          collect: ["gv-crate-freestanding-poh"],
          tip: "Link has a jump button now instead of jumping on his own, and the Cucco glide still works.",
          warn: "The river is one-way: it ends at Lake Hylia, and the way back to the valley is the walk round through Hyrule Field." },
        { id: "c06-s05-05",
          text: "At Lake Hylia, still at night, stand on the bridge by the **Lakeside Laboratory** and throw the Boomerang at the Gold Skulltula on the lab's wall, then again to pull in its token.",
          collect: ["lh-gs-lab-wall"],
          time: "night",
          tip: "If morning has come, play the Sun's Song." },
        { id: "c06-s05-06",
          text: "Back in Gerudo Valley, pick up a Cucco near the bridge, carry it off the right side of the bridge toward the waterfall and glide down to the ledge with a Gerudo woman and a cow. Release a Bug from your Bottle on the soft soil just downriver of her for a Gold Skulltula, then plant a Magic Bean there. One Bug is enough; the Lost Woods grotto by the Goron City tunnel has some under its plants.",
          collect: ["gv-gs-bean-patch", "bean-gerudo-valley"],
          check: "IGN puts the soft soil on the cow ledge, just downriver of the Gerudo woman. Zelda Central puts it on a rock shelf in the cave under the waterfall, beside a teal pool. If you see no soil on the ledge, look there." },
        { id: "c06-s05-07",
          text: "From the cow ledge, follow the path north toward the big waterfall and climb up to the small chamber with the **Piece of Heart**. Then let the river carry you down to Lake Hylia.",
          collect: ["gv-waterfall-freestanding-poh"],
          check: "IGN says the path runs behind the waterfall before you climb; Zelda Central describes stone stairs up the canyon wall to a small wooden room. Both start from the cow ledge, so take whichever way up you see." }
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
          tip: "No check needs these 2 plants, but each one leads an adult to a Purple Rupee (50 Rupees): a platform above the Kokiri Shop, and a chest on a high platform by the bridge." },
        { id: "c06-s06-03",
          text: "Wear the Mask of Truth on the Forest Stage in the Lost Woods for a Deku Nut capacity upgrade.",
          collect: ["deku-theater-mask-of-truth"],
          warn: "Do this before you receive the Poacher's Saw in the adult trading sequence (chapter 8).",
          check: "No guide says whether getting the Poacher's Saw first still makes this upgrade impossible, so do this one first to be safe." },
        { id: "c06-s06-04",
          text: "Climb the steps from the Market to the **Temple of Time**; it is part of the same Castle Town map, with no loading screen. With all 3 Spiritual Stones, play the **Song of Time** {notes:→ A ↓ → A ↓} at the altar: the stones fly into place and the **Door of Time** opens. Then draw the **Master Sword** from its pedestal beyond.",
          collect: ["master-sword-pedestal"],
          tip: "You can hum a song into the microphone instead of using the note buttons.",
          warn: "Drawing the sword moves the story 7 years ahead, so finish your child errands first. This guide's child return trips come after the Forest Temple, when you can put the sword back in the Temple of Time; everything left for later (the frogs' last rewards, the last 3 Magic Beans, the Bottom of the Well, the Treasure Chest Game and the rest) is picked up then." }
      ]
    }
  ],
  boss: null
});
// end c06
