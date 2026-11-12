/* Walkthrough, chapters c07-c14 (adult era, with the child trips inside them).
   Compiled from research/route-plan.json and research/01-14. Describes the Switch 2 version. Anything not
   yet verified sits in a step's `check` field.
   Decisions and source conflicts: research/compile-notes-adult.md. */
window.OOT = window.OOT || {};
OOT.walkthrough = OOT.walkthrough || [];

/* ------------------------------------------------------------------ c07 */
OOT.walkthrough.push({
  id: "c07-forest-temple", num: 7, title: "Seven Years Later & the Forest Temple", era: "adult",
  summary: "Wake as an adult, win Epona and the Hookshot, learn the Song of Storms and the Minuet of Forest, and clear the Forest Temple for the Forest Medallion. The chapter closes with the Prelude of Light and the Big Poe hunt, which pays a fourth Bottle at 500 points and a Gold Rupee at 1,000.",
  needs: ["Master Sword", "Epona's Song", "Saria's Song", "Sun's Song", "Song of Time", "Magic Beans planted in the Graveyard and by the Forest Stage (chapter 6)", "3 Bottles"],
  gains: ["Light Medallion", "Epona", "Hookshot", "Song of Storms", "Pocket Egg", "Minuet of Forest", "Fairy Bow", "Forest Medallion", "Prelude of Light", "Bottle (Poe Collector)", "Gold Rupee (Poe Collector)", "Bombchus (40-token reward)", "Heart Container", "3 Pieces of Heart", "10 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c07-s01", title: "Hyrule, Seven Years Later", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s01-01", text: "Wake in the **Chamber of Sages**, where Rauru gives you the **Light Medallion**. Leave the **Temple of Time** and cross the ruined **Market**. The Gold Skulltula on the castle road needs the Hookshot, so it waits until you are back here later in this chapter.",
          collect: ["tot-reward-from-rauru"],
          tip: "ReDeads now fill the Market square. Play the Sun's Song to freeze them in place, then walk past." },
        { id: "c07-s01-02", text: "By day at **Lon Lon Ranch** (now called **Ingo Ranch**), pay Ingo 20 Rupees for a ride, then play **Epona's Song** in the corral to call Epona. Talk to Ingo from the saddle to race him; each race is one lap. Win the first for 20 Rupees (a loss costs you Rupees), then win the second to keep Epona. When he locks the gate, jump a low fence on horseback. If night falls, play the **Sun's Song** beside the stable wall to bring day back.",
          collect: [], time: "day",
          tip: "Hold the inside line and spread your carrots over the straights, keeping some for the last stretch. Time passes at the ranch, so it can turn to night during your visit." },
        { id: "c07-s01-03", text: "Malon's obstacle course is not open yet. It opens once Talon is back running the ranch, after you wake him with the **Pocket Cucco** in chapter 8. Then return, talk to Malon and clear her course on Epona in under 40 seconds; she sends a cow to **Link's House** in Kokiri Forest.",
          collect: [], time: "day",
          tip: "Time keeps running at the ranch, so the daytime window can close.",
          check: "One guide says the course only opens after the Shadow Medallion. If Malon does not offer it once Talon is back, try again later in the game." }
      ]
    },
    {
      id: "c07-s02", title: "Kakariko Graveyard", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s02-01", text: "In the **Kakariko Graveyard**, ride the bean plant you planted as a child by the dead tree on the north side up to the high ledge by the raised ruins, and take the **Piece of Heart**.",
          collect: ["graveyard-freestanding-poh"] },
        { id: "c07-s02-02", text: "Pull back the first gravestone of the north row, on the northwest edge of the Graveyard by an old lone tree (stand behind it and pull). This new grave gives off purple smoke. Drop into **Dampé's Grave** and chase his ghost through the tunnels to the chest at the far end for the **Hookshot**.",
          collect: ["graveyard-dampe-race-hookshot-chest"],
          tip: "Dodge the flames he drops and do not trail him too closely. Link can dash here, which makes the chase easier. Follow his lantern and stay close at forks; he sends you back if he loses you for too long. In the big room of odd stones, keep to the back-right corner. In the fog room, head for the back (Redeads wait on the left) and climb the left raised platform." },
        { id: "c07-s02-03", text: "Past the chest, climb the stairs and Hookshot the target above the exit gate, then follow the dark tunnel up into the **Windmill**. First jump across the windmill's turning parts to the high ledge on the right for a **Piece of Heart**. Then talk to the man turning the music box and play your ocarina to learn the **Song of Storms**. Take the piece first: once you learn the song, the platform spins much faster.",
          collect: ["song-from-windmill", "kak-windmill-freestanding-poh"] },
        { id: "c07-s02-04", text: "Go back to Dampé's grave and race him a second time. Reach the end in 60 seconds or less and a **Piece of Heart** appears at the finish.",
          collect: ["graveyard-dampe-race-freestanding-poh"],
          tip: "Link's dash helps on this run." }
      ]
    },
    {
      id: "c07-s03", title: "Kakariko Village", era: "adult", kind: "sweep",
      steps: [
        { id: "c07-s03-01", text: "The man on the roof by the **Windmill** gave you his **Piece of Heart** as a child in chapter 3. If you missed him, leave the windmill by its village door, stand on the fence straight ahead and Hookshot up to the roof on your right. By day, the Bazaar sells the **Hylian Shield** for 80 Rupees if you still need one.",
          collect: ["kak-bazaar-item-1"],
          check: "No source gives an adult way up to this man. IGN puts him lounging on the lower part of the blue roof of Granny's Potion Shop, on the side nearer the wooden tower. If the Hookshot route fails, get the piece as a child. One guide lists no Hylian Shield in the adult Bazaar; if it is not on sale, nothing is missed." },
        { id: "c07-s03-02", text: "At night, talk to Anju, the Cucco Lady, beside her pen for the **Pocket Egg**. Keep it: it hatches at the next dawn and opens the trade for **Biggoron's Sword** in the next chapter.",
          collect: ["kak-anju-as-adult"], time: "night",
          tip: "Time passes inside Kakariko, so night can end while you are in town.",
          check: "One guide says Anju gives the egg at night and the other gives no time. If she does not offer it at night, try by day." },
        { id: "c07-s03-03", text: "Enter the **House of Skulltula** with at least 40 tokens and take the 40-token reward, a pack of 20 **Bombchus**.",
          collect: ["kak-40-gold-skulltula-reward"] },
        { id: "c07-s03-04", text: "Wait for night in town, or play the **Sun's Song** to bring it. Climb the vines on the left side of **Impa's House** to a high ledge, Hookshot up to it and reach the cow stable behind the house, where the Gold Skulltula waits.",
          collect: ["kak-gs-above-impas-house"], time: "night",
          tip: "Time passes in Kakariko, so night can end while you hunt. IGN's route needs only the Hookshot.",
          check: "Another guide puts this token high on the wall above Impa's blue-tiled roof and says it needs the Longshot. If it is not by the cow yard, look up from the roof and come back after the Water Temple." }
      ]
    },
    {
      id: "c07-s04", title: "Back to the Forest", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s04-01", text: "In **Kokiri Forest**, go to the Gossip Stone by the entrance to the **Lost Woods**, behind Mido's House. Play the **Song of Storms** in front of it and drop into the grotto that opens. 3 Business Scrubs stand inside: beat them in the order 2, 3, 1 to earn a Green Rupee.",
          collect: ["kf-storms-grotto-chest"],
          check: "Sources place this grotto only near the Lost Woods entrance and do not mention a Gossip Stone. Grotto entrances are now strange plants or small stone circles, so look by the entrance for a strange plant and play the Song of Storms beside it.",
          tip: "One Scrub's hint is about Stalchildren." },
        { id: "c07-s04-02", text: "Wait for night, or play the **Sun's Song** to bring it. At the back of the **House of Twins**, look up high on the tree behind it and Hookshot the Gold Skulltula, then its token.",
          collect: ["kf-gs-house-of-twins"], time: "night",
          tip: "Time passes in Kokiri Forest, so night can arrive or end while you are here." },
        { id: "c07-s04-03", text: "At night (play the **Sun's Song** to bring it), go right, left, right in the Lost Woods; play **Saria's Song** to get Mido out of the way. In the next clearing, turn left and ride the bean plant from the theater soil up to the high ledge, where a Gold Skulltula waits.",
          collect: ["lw-gs-above-theater"], time: "night" },
        { id: "c07-s04-04", text: "Continue through the Lost Woods (right, left, right, left, straight, left, right from the entrance) to the **Sacred Grove**. Slip past the Moblins in the maze, beat the Great Moblin guarding the long stairway, and at the top Sheik teaches you the **Minuet of Forest** on the warp platform.",
          collect: ["sheik-in-forest"],
          tip: "Wait in the alcoves until a patrolling Moblin turns away, then slash it from behind. At the long stairway, the Great Moblin's mace sends a shockwave down the left, middle or right lane. Move to another lane, roll behind it and slash its back.",
          check: "No source gives this exact string of turns. IGN's route from the Goron City shortcut clearing reads: left, left again at the pool, straight through the 4-way crossing, left, then right. If the music fades, you took a wrong turn; follow it while it keeps playing." },
        { id: "c07-s04-05", text: "Go back down the stairs. At the bottom, turn around to find the ruins with the **Fairy Fountain**. Climb the ladder there onto the top of the ruins. On the east side, by the big tree roots, Hookshot the Gold Skulltula high on the wall. It shows only at night; play the **Sun's Song** if needed.",
          collect: ["sfm-gs"], time: "night" },
        { id: "c07-s04-06", text: "Head back to the front of the **Sacred Grove**, just ahead of the entrance and to the right of the maze entrance, and find the strange plant. Play the **Song of Storms** beside it and drop into the grotto that opens; adult Link can do this now. Defeat the 2 Wolfos inside and open the chest, which holds a Purple Rupee (50 Rupees).",
          collect: ["sfm-wolfos-grotto-chest"],
          tip: "Wolfos guard their front. Wait for one to lunge, then hit its back or tail." },
      ]
    },
    {
      id: "c07-s05", title: "Forest Temple: Entrance and Courtyards", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s05-01", text: "Hookshot to the target on the ledge above the steps to reach the **Forest Temple**. Beat the 2 Wolfos inside, climb the vines on the right, Hookshot the Gold Skulltula near the top, then cross the long branch to the chest with a **Small Key**. Use the key on the locked front door.",
          collect: ["forest-temple-gs-first-room", "forest-temple-first-room-chest"],
          tip: "Wolfos guard their front. Wait for one to lunge, then hit its back or tail. Hit the Big Skulltula in the next hallway in the back.",
          check: "One walkthrough reaches the key ledge through a narrow mossy tunnel instead of along the branch. Either way, the key waits past the top of the vine wall." },
        { id: "c07-s05-02", text: "In the main hall, after the Poe Sisters steal the torch flames, cross to the far side and climb the ledge and stairs. A Gold Skulltula sits on the wall to the right of the door at the top.",
          collect: ["forest-temple-gs-lobby"] },
        { id: "c07-s05-03", text: "Through that door, past a Blue Bubble, the next room locks you in with Stalfos. Defeat them all and open the chest that appears for a **Small Key**.",
          collect: ["forest-temple-first-stalfos-chest"],
          tip: "Block the Blue Bubble with your shield to put out its flames, then cut it down or Hookshot it." },
        { id: "c07-s05-04", text: "Back in the main hall, play the **Song of Time** at the blue block in the left-hand doorway as you face the far side. In the courtyard beyond, get past the Deku Baba, Hookshot the Skullwalltulas on the vine wall and climb to the balcony ledge. The **Dungeon Map** comes later, in the northeast courtyard you reach through the drained well (see the last step of this section).",
          collect: [] },
        { id: "c07-s05-05", text: "From the balcony ledge, the walkway has crumbled. Hookshot the target on the north balcony to cross, then step on the switch there to lower the well water. The northeast courtyard's Gold Skulltula cannot be taken yet: it needs the Scarecrow's Song and the Hookshot, and you reach it later from the falling-ceiling room (see that step). You learn the Song at Lake Hylia in chapter 8, so come back for this token afterward.",
          collect: ["forest-temple-raised-island-courtyard-chest", "forest-temple-gs-raised-island-courtyard"],
          check: "No walkthrough mentions a small chest on a raised ledge in this courtyard. Look for it, and skip it if it is not there." },
        { id: "c07-s05-06", text: "Climb down into the drained well and follow its shallow passage; a small chest on the way holds a **Small Key**. Climb the ladder at the end into the northeast courtyard. Octoroks in the moat spit rocks, so deflect them with your shield. Hookshot the target across the water to reach the large chest with the **Dungeon Map**. Then go through the door back to the main hall and step on the switch there to open the gate on the blue side.",
          collect: ["forest-temple-well-chest", "forest-temple-map-chest"] }
      ]
    },
    {
      id: "c07-s06", title: "Forest Temple: The Fairy Bow", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s06-01", text: "Unlock the main hall's west door (on the map), under the red windows, and get past the Blue Bubble in the hallway. In the block room, push the blocks the way the yellow arrows on the floor show, then climb the ladder that the first push uncovers and push the second block until it stops.",
          collect: [],
          tip: "On the third floor, a floor switch to the west calls a lift, which gives you a shortcut back past the block puzzle.",
          warn: "A Wallmaster waits in this area. When its shadow or a spotlight appears, keep moving, then strike it once it lands. A grab sends you back to the temple entrance." },
        { id: "c07-s06-02", text: "Go back down, take the other ledge up and push the second block into its recess, then unlock the door at the top. Cross the twisted corridor and the tilted room, pass through the painting room and enter the Stalfos room for the **Fairy Bow**. The pit in the middle of that room is a pool of poison ooze, not a drop.",
          collect: ["forest-temple-bow-chest"],
          tip: "Stay out of the poison pit and dodge toward the walls. Beat the first Stalfos, then 2 more appear. A Wallmaster's shadow in the tilted room means move: a grab sends you back to the temple entrance." },
        { id: "c07-s06-03", text: "In the Stalfos room, shoot the eye above the door you came in by to unlock it, and go back to the painting stairwell. Shoot the portrait of **Jo**, the red Poe, with the **Fairy Bow** each time it appears: on both sides of the second-floor landing and at the top of the third-floor stairs. After 3 hits she fights you at the foot of the stairs; win to relight the red torch and take the **Small Key** from the chest. This key opens the locked door on the far side of the Stalfos room, into Beth's wing.",
          collect: ["forest-temple-red-poe-chest"],
          tip: "When she spins to deflect shots, turn away and dodge, then strike once she is dizzy. Keep your shield up while she is invisible and strike when she reappears." },
        { id: "c07-s06-04", text: "Go back through the Stalfos room and unlock the door on its far side with Jo's key. In Beth's wing, shoot her portraits the same way and beat her. The chest after her fight holds the **Compass**.",
          collect: ["forest-temple-blue-poe-chest"] },
        { id: "c07-s06-05", text: "Return to the block room. Drop to the second floor and follow the arrows to a small balcony in the northeast corner, then shoot the eye switch there for an optional chest with a Purple Rupee (50 Rupees). At the top, shoot the eye switch in the twisted frame above the door to straighten the twisted corridor.",
          collect: ["forest-temple-eye-switch-chest"] },
        { id: "c07-s06-06", text: "Walk the straightened corridor into the red chapel, now level. The large chest beside the hole in the middle of the floor holds the **Boss Key**.",
          collect: ["forest-temple-boss-key-chest"] }
      ]
    },
    {
      id: "c07-s07", title: "Forest Temple: The Last 2 Sisters", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s07-01", text: "Drop through the hole by the Boss Key chest and beat the 2 Blue Bubbles to open the door. You come out on a balcony over the garden (the west courtyard on the map). Go through the door, walk the ledge to the left and around the corner, and Hookshot the Gold Skulltula on the wall along the south ledge.",
          collect: ["forest-temple-gs-level-island-courtyard"] },
        { id: "c07-s07-02", text: "From the balcony, take the doorway to the west. The room seals you in with a Floormaster: defeat it, then the 3 small hands it splits into, and open the chest for a **Small Key**.",
          collect: ["forest-temple-floormaster-chest"],
          tip: "Kill the 3 small hands quickly; Din's Fire helps. The room's southern door is a shortcut back up to the third floor." },
        { id: "c07-s07-03", text: "From the top of the block room, shoot the eye switch again to twist the corridor back, then cross Jo's stairwell and the Stalfos room to the locked door at the top of Beth's stairwell. Pass the second twisted corridor and the Green Bubble hall. In the torch room, step on the switch to light the torch, shoot an arrow through the flame at the iced eye above the door, then shoot the eye again to trigger it. The corridor twists; go down it and drop through the hole.",
          collect: [] },
        { id: "c07-s07-04", text: "Drop into the hole the twisted corridor now exposes. In the room with the falling ceiling, move between the rays of light while the ceiling is raised. Open the small chest for **5 Arrows**, and step on the switch on the right to unlock the far door.",
          collect: ["forest-temple-falling-ceiling-room-chest"],
          tip: "A shadow inside a ray of light means a Skulltula is dropping there. The chest sits at a safe spot between 2 rays, just before the far door. Outside the right-hand door, push the block off the ledge for a shortcut. That same door leads to the courtyard's Gold Skulltula: turn and look up, play the Scarecrow's Song at the spot and Hookshot to the scarecrow. You need the Song from chapter 8, so come back for it." },
        { id: "c07-s07-05", text: "In the next room, shoot **Amy**'s painting so it breaks into blocks, then push and pull them into the picture. A fifth, extra block with a dark tassel on the hood is a decoy: it is the only one that does not move on its own. Use the lighter piece for the top-right corner. Solving it summons Amy. She spins several times in a row before she gets dizzy, so wait, then strike. Beat her to relight the green torch.",
          collect: [] },
        { id: "c07-s07-06", text: "Shoot the purple Poe's painting in the hallway past the picture puzzle, from the doorway. She flees to the main hall, where **Meg** splits into 4 copies. Each round, stun the real one with an arrow, then use your sword. In round 1 the real Meg carries the purple flame. In round 2 she is the one with a lit torch. In round 3 all 4 carry purple flames, and the real Meg has wider eyes than the narrow-eyed copies. A Spin Attack in the last round may also pull the copies back into her. When she falls, all 4 flames are back and the central elevator works.",
          collect: [] }
      ]
    },
    {
      id: "c07-s08", title: "Phantom Ganon", era: "adult", kind: "boss",
      steps: [
        { id: "c07-s08-01", text: "Ride the elevator to the basement and push the big handholds on the walls to rotate the room. Keep turning until you have seen all 3 stops: a small window with a floor switch that lights a torch, an alcove with a chest of 5 arrows, and a small room to the south where a Skulltula ambushes you and the Gold Skulltula hides inside on the right. Then turn the room until the lit torch lines up with the iced eye switch. Shoot an arrow through the flame to melt the ice, then another at the eye to open the gate, and open the boss door with the **Boss Key**.",
          collect: ["forest-temple-basement-chest", "forest-temple-gs-basement"],
          check: "Sources differ on the Gold Skulltula room. IGN needs only the Hookshot and Fairy Bow. Zelda Central says a web blocks it and burns it with Din's Fire. If you see a web, cast Din's Fire." },
        { id: "c07-s08-02", text: "Defeat Phantom Ganon (see the boss card), take the **Heart Container**, then step into the blue light. Saria gives you the **Forest Medallion** in the Chamber of Sages.",
          collect: ["phantom-ganon", "forest-temple-phantom-ganon-heart"],
          tip: "Take the Heart Container before the blue warp." }
      ]
    },
    {
      id: "c07-s09", title: "The Prelude of Light and the Big Poes", era: "adult", kind: "sidequest",
      steps: [
        { id: "c07-s09-01", text: "Enter the **Temple of Time** with the Forest Medallion, where Sheik teaches you the **Prelude of Light**, the warp back here. Big Poes come out at night, so wait for dark or play the **Sun's Song**. Before you ride out, follow the road from the Market up toward where **Hyrule Castle** stood. Past the stone archway, turn around and look up, then Hookshot the Gold Skulltula on the back of the arch. Ride Epona into **Hyrule Field** with the **Fairy Bow** and 4 empty Bottles. Each Big Poe spot is marked by a low object glowing purple, such as a fence, stone wall or fallen log: jump Epona over it and a Big Poe appears. Catch the ones near the sign at the start of the Market bridge, in the bushes by the stream in the northwest corner (on the map) and at the lone tree on the field's western edge: shoot each twice and bottle the soul it leaves. Sell them at the Poe shop in the old guard house by the Market entrance, for 30 Rupees and 100 points each.",
          collect: ["sheik-at-temple", "ogc-gs", "big-poe-hf-02", "big-poe-hf-01", "big-poe-hf-04"], time: "night",
          tip: "Each Big Poe is worth 100 points. The Poe Collector gives you a Bottle at 500 points (after 5 Poes) and a Gold Rupee worth 200 Rupees at 1,000 points (10 Poes), so catch 5 for the Bottle and 5 more for the Rupees. If you cannot reach a soul from the saddle, get down and bottle it on foot. The Hall of Fallen Foes is open now: sleep on a bed or mat that glows green, such as the one in Link's House or Impa's House in Kakariko, and you wake in the Hall, where Kaepora Gaebora shows you around.",
          check: "No source gives these 3 spots in words. Ride near each landmark at night and look for a low object glowing purple; if nothing glows, try the nearby fences, walls and fallen logs." },
        { id: "c07-s09-02", text: "Catch 3 more around **Lon Lon Ranch**: at the tree by the ranch's north entrance (on the map), along the stone wall on the ranch's east side, and at the lone rock at the fork between the ranch and Kakariko. Sell them.",
          collect: ["big-poe-hf-05", "big-poe-hf-06", "big-poe-hf-08"], time: "night",
          check: "No source gives these spots in words, and this guide disagrees with itself on the third one: here it is a lone rock at the fork between the ranch and Kakariko, but the collectible list puts it at a boulder in the road fork between Kokiri Forest and the ranch. Look for a purple-glowing object at both forks at night." },
        { id: "c07-s09-03", text: "Catch 3 in the south of the field (on the map): at the road fork in the southwest, at the rock ringed by trees in the south, and in the grass by the lone tree in the southeast. Sell them.",
          collect: ["big-poe-hf-07", "big-poe-hf-10", "big-poe-hf-09"], time: "night",
          check: "No source gives these spots in words, and the collectible list describes 2 of them differently: a lone brown boulder with a tree just south of it (not a rock ringed by trees), and a patch of bushes among trees between Lake Hylia and Kokiri Forest (not grass by a lone tree in the southeast). Check both versions at night." },
        { id: "c07-s09-04", text: "Catch the last Big Poe under the fenced cliff in the northeast of the field (on the map), near the Kakariko entrance. Selling it brings your total to 1,000 points, and the Poe Collector gives you a Gold Rupee worth 200 Rupees. Your fifth **Bottle** already came at 500 points, after the 5th Big Poe.",
          collect: ["big-poe-hf-03", "market-10-big-poes"], time: "night",
          check: "No source gives this spot in words. The collectible list puts it on the rocky overhang above the stream near the steps up to Kakariko; look there at night for a purple-glowing object." }
      ]
    }
  ],
  boss: {
    id: "boss-phantom-ganon", name: "Evil Spirit from Beyond Phantom Ganon",
    weakness: "Fairy Bow while he rides out of a painting; then his own energy ball, returned with the sword",
    strategy: [
      "Phase 1: he and a decoy ride into the paintings around the room. The real rider leaps out toward you while the decoy turns back at the edge of its painting; shoot him with the Fairy Bow as he emerges.",
      "After 2 or 3 arrow hits he leaves his horse. Phase 2: swing your sword at each energy ball he throws to send it back, and keep the rally going until one hits him.",
      "While he lies stunned, run in and slash him. Sometimes he dives at you instead of throwing a ball, so be ready to dodge."
    ]
  }
});

/* ------------------------------------------------------------------ c08 */
OOT.walkthrough.push({
  id: "c08-fire-temple", num: 8, title: "Death Mountain Crater & the Fire Temple", era: "adult",
  summary: "Start the trade for Biggoron's Sword, register the Scarecrow's Song and collect the adult Lake Hylia prizes, then earn the Goron Tunic and the Bolero of Fire, sweep the crater entrance, and clear the Fire Temple for the Megaton Hammer and the Fire Medallion.",
  needs: ["Hookshot", "Fairy Bow", "Epona", "Song of Storms", "Song of Time", "Pocket Egg", "Bombs", "Scarecrow tune taught to Bonooru as a child (chapter 5)", "Magic Bean planted at Lake Hylia (chapter 5)", "Deku Nut upgrade from the Forest Stage already taken (chapter 6)"],
  gains: ["Scarecrow's Song", "Golden Scale", "Quiver (40)", "Goron Tunic", "Giant's Knife", "Bolero of Fire", "Megaton Hammer", "Fire Medallion", "Double Magic", "Prescription (trade item)", "Heart Container", "6 Pieces of Heart", "12 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c08-s01", title: "Kakariko: Rewards and the Trade", era: "adult", kind: "sidequest",
      steps: [
        { id: "c08-s01-01", text: "In the **House of Skulltula**, show at least 50 tokens (you should hold 54) for the 50-token reward, a **Piece of Heart**.",
          collect: ["kak-50-gold-skulltula-reward"] },
        { id: "c08-s01-02", text: "By day, pay 30 Rupees at the adult **Shooting Gallery**, the new building next to the Cucco pen. Hit all 10 targets with your 15 arrows to win a bigger **Quiver**.",
          collect: ["kak-shooting-gallery-reward"], time: "day",
          tip: "If you hit close to 10, the owner gives you a free retry." },
        { id: "c08-s01-03", text: "Once a dawn has passed, the **Pocket Egg** has hatched into the **Pocket Cucco**. Go into the 2-story house with the red roof, straight ahead of the village entrance. **Talon** is asleep in the bed under the stairs; use the Pocket Cucco on him to wake him.",
          collect: ["item-pocket-cucco", "event-wake-talon-kakariko"],
          tip: "If the egg has not hatched yet, wait in Kakariko, where time passes, or play the Sun's Song until morning comes round." }
      ]
    },
    {
      id: "c08-s02", title: "Biggoron's Sword Trade, Part 1", era: "adult", kind: "sidequest",
      steps: [
        { id: "c08-s02-01", text: "Now that Talon is awake, give the **Pocket Cucco** to the **Cucco Lady**. She hands you **Cojiro**, a blue Cucco.",
          collect: ["kak-anju-trade-pocket-cucco"] },
        { id: "c08-s02-02", text: "In the **Lost Woods**, take the very first left from the Kokiri Forest entrance. The Master Craftsman's Son sits asleep against the taller tree stump. Show him Cojiro and he gives you the **Odd Mushroom**, and a 4-minute timer starts.",
          collect: ["lw-trade-cojiro"],
          warn: "Do not play a warp song while the timer runs: it cancels the timer and the trade fails.",
          tip: "2 quick routes: take the Lost Woods shortcut to **Goron City** (right, left, then straight on) and run down **Death Mountain Trail** to Kakariko, or leave for **Hyrule Field**, call **Epona** and ride there. Hold the roll button to dash." },
        { id: "c08-s02-03", text: "In Kakariko, go into the **Potion Shop** on the upper north side, near the Death Mountain gate. Leave by the side door to the left of the counter into the backyard and enter Granny's shop there. Hand her the mushroom for the **Odd Poultice**.",
          collect: ["kak-granny-trade-odd-mushroom"],
          tip: "The Potion Shop is open by day. At night, carry a Cucco from the pen and jump over the metal gate in front of the Windmill into the backyard instead." },
        { id: "c08-s02-04", text: "Return to the same spot in the Lost Woods, where the Kokiri girl Fado now sits. Give her the Odd Poultice for the **Poacher's Saw**.",
          collect: ["lw-trade-odd-potion"],
          warn: "Make sure you already took the Deku Nut upgrade from the Forest Stage with the Mask of Truth (chapter 6) before you take the Saw.",
          check: "Not yet reported whether this version locks that upgrade after the Saw, as older versions did. Get it first to be safe." }
      ]
    },
    {
      id: "c08-s03", title: "Lake Hylia and the Scarecrow's Song", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s03-01", text: "Ride to **Lake Hylia**. Talk to **Bonooru**, one of the 2 scarecrows on the eastern shore, and play the same 8-note tune you taught him as a child. He registers it as the **Scarecrow's Song**: play it beside a gust of whirling straw and **Pierre** appears as a Hookshot target.",
          collect: ["pierre"],
          tip: "The game does not list this song on the pause screen, so write your tune down. Ocarina notes: X plays the top note, Y the left, A the right, R the bottom, and L the note the songs list as A." },
        { id: "c08-s03-02", text: "Ride the bean plant you planted beside the laboratory up onto its roof and climb the ladder to a **Piece of Heart**.",
          collect: ["lh-freestanding-poh"] },
        { id: "c08-s03-03", text: "Ride the bean plant by the laboratory wall across the dry lake to the **Fishing Pond** cabin. Pay 30 Rupees for a rod, catch the biggest fish you can with the normal lure, and show it to the pond owner to win the **Golden Scale**.",
          collect: ["lh-adult-fishing"],
          tip: "Leave the Sinking Lure alone: the owner refuses any fish caught with it and takes the rod back.",
          check: "One guide says any fish over 60 cm earns the prize, and a 73 cm fish won it the Golden Scale. If the owner turns your fish down, pay again and aim bigger." },
        { id: "c08-s03-04", text: "Inside the **Lakeside Laboratory**, dive to the bottom of the tank with the Golden Scale, then surface and talk to the scientist for a **Piece of Heart**.",
          collect: ["lh-lab-dive"],
          tip: "Link can dash while swimming in this version. The Golden Scale is still needed to reach the bottom of the tank." }
      ]
    },
    {
      id: "c08-s04", title: "Hyrule Field and Gerudo Valley", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s04-01", text: "In **Hyrule Field**, go to the large rock outcropping just north and east of the **Gerudo Valley** entrance. A small chest sits under it and looks already taken to an adult. Read the Fairy Note beside it as an adult, then come back as a child (after the Forest Temple) to open it for the **Piece of Heart**.",
          collect: ["hf-tektite-grotto-freestanding-poh"],
          tip: "The Song of Storms grotto west of the Castle Town entrance (north side of the moat) holds a deep pool with a Blue Tektite. With the Iron Boots from the Ice Cavern, the Rupee boxes at the bottom are yours too." },
        { id: "c08-s04-02", text: "Ride **Epona** into **Gerudo Valley** and, with a running start, jump the broken bridge. Give the **Poacher's Saw** to the **Master Craftsman** outside the carpenters' tent for the **Broken Goron's Sword**.",
          collect: ["gv-trade-poachers-saw"],
          check: "One guide says you smash a dark rock pile near him with the **Megaton Hammer**. If rocks block your way to him, come back after the Fire Temple." },
        { id: "c08-s04-03", text: "At night, Hookshot the Gold Skulltula on the rock arch by the valley path. Then look on the stone wall of the ruined building beside the carpenters' tents for a second one.",
          collect: ["gv-gs-behind-tent", "gv-gs-pillar"], time: "night",
          tip: "Time keeps running, so night can end while you are here; play the Sun's Song to bring it back.",
          check: "The only guide that details the ruin token says it needs the **Longshot** (Water Temple); if the Hookshot does not reach, come back then. The same guide puts the arch token by the path on the way into the valley, so look there if it is not past the bridge." },
        { id: "c08-s04-04",
          text: "Go back to the grotto you bombed open in the marshy southeast of **Hyrule Field**. A Gold Skulltula now sits in a shaking crate. Roll into the crate to knock out the token.",
          collect: ["hf-gs-cow-grotto"],
          tip: "As a child you only had to defeat the plain Skullwalltula here. The Gold Skulltula shows up for adult Link." }
      ]
    },
    {
      id: "c08-s05", title: "Death Mountain Trail", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s05-01", text: "Enter **Dodongo's Cavern** and take the first hallway east of the entrance hall, where the Baby Dodongos are. Below the high ledge with a gust of straw, play the **Scarecrow's Song** and Hookshot to **Pierre** to reach the Gold Skulltula.",
          collect: ["dodongos-cavern-gs-scarecrow"] },
        { id: "c08-s05-02", text: "Climb the trail toward **Goron City**. On the cliff near its entrance, play the **Song of Storms**, then drop into the grotto. Fog fills the room and Baby Dodongos roam it; the Rupees inside include a Red Rupee (20 Rupees).",
          collect: ["dmt-storms-grotto-chest"],
          tip: "Boulders now roll down the trail nonstop. After one passes, hug the right side and use the alcoves for cover; higher up, keep to the left wall to reach the Goron City tunnel." }
      ]
    },
    {
      id: "c08-s06", title: "Goron City and the Crater", era: "adult", kind: "overworld",
      steps: [
        { id: "c08-s06-01", text: "In **Goron City**, a young Goron rolls around the ring one level below the main entrance. Stop him with a Bomb blast. He is Darunia's son, named **Link** after you; talk to him and offer to help to receive the **Goron Tunic**. He also opens the rest of the city, including the shop and Darunia's room.",
          collect: ["gc-rolling-goron-as-adult", "gc-shop-item-5"],
          tip: "Bomb Flowers grow right of the entrance by the rope bridge. Drop down to his ring first so he rolls clockwise. Equip the tunic from the Equipment screen before the crater; it protects Link from the heat. The shop sells spare tunics for 600 Rupees, in case a Like Like ever eats yours." },
        { id: "c08-s06-02", text: "Wait for night, or play the **Sun's Song**. Drop from the highest ring of Goron City down 1 level, go behind the central platform and Hookshot the Gold Skulltula on the underside of the jutting rock.",
          collect: ["gc-gs-center-platform"],
          time: "night" },
        { id: "c08-s06-03", text: "On the top floor of **Goron City**, east of the entrance, go through the cracked walls (bomb them if they are still closed) to **Medigoron** and buy the **Giant's Knife** for 200 Rupees.",
          collect: ["gc-medigoron"],
          tip: "The knife hits hard with both hands but breaks after a few swings. Biggoron's Sword (chapter 9) replaces it for good." },
        { id: "c08-s06-04", text: "In Darunia's room, pull the big statue at the back outward and take the hidden passage to **Death Mountain Crater** with the Goron Tunic on. Hookshot across the broken bridge to the east. Sheik plays the opening notes of the **Bolero of Fire** on her harp; play them back to learn it.",
          collect: ["sheik-in-crater"],
          tip: "Without the Goron Tunic, Link catches fire after 4 seconds and loses a quarter heart each second. Any healing restarts the 4-second count." }
      ]
    },
    {
      id: "c08-s07", title: "Fire Temple: The Lower Floors", era: "adult", kind: "dungeon",
      steps: [
        { id: "c08-s07-01", text: "Enter the **Fire Temple** and go up the stairs. Take the upper-left door into the big room where Darunia waits; after he talks, he leaves alone through the far door. Go south along the platforms over the lava to the floor switch, step on it to free the Goron behind the bars, and take the **Small Key** from the chest in his cell.",
          collect: ["fire-temple-near-boss-chest"],
          tip: "Wear the Goron Tunic for the whole temple." },
        { id: "c08-s07-02", text: "Go back to the entrance hall and unlock the door on its east side. In the big lava room, head north across the large stone platforms (some sink, so keep moving) to the Goron behind a cage. Step on the switch to free him and open his chest for a **Small Key**.",
          collect: ["fire-temple-big-lava-room-lower-open-door-chest"] },
        { id: "c08-s07-03", text: "In the northeast corner of the lava room, step onto the platform below the high ledge; a jet of lava pushes it up. Play the **Song of Time** to move the blue block, then climb to the door. Raise your shield against the flying floor tiles, defeat the Like Like from a distance (a Hookshot hit stuns it) and take the Gold Skulltula on the back wall.",
          collect: ["fire-temple-gs-song-of-time-room"],
          warn: "A Like Like can swallow your Goron Tunic or your shield. If it does, reload the autosave, or buy a new tunic in **Goron City** or a new shield in **Kakariko**.",
          check: "One walkthrough says the token hides behind a stone idol on the back wall that you must bomb first. If you cannot see it, set a Bomb against the idol." },
        { id: "c08-s07-04", text: "On the far side of the big lava room, bomb the wall shaped like a door. Free the Goron behind it for another **Small Key**.",
          collect: ["fire-temple-big-lava-room-blocked-door-chest"] },
        { id: "c08-s07-05", text: "Unlock the door on the right of the bridge, then the second locked door past the big fire jet. Climb the mesh wall, push the big stone block over the jet and ride it up to 2F. Clear the Torch Slugs. Hit the blue crystal switch with an arrow or the Hookshot to move the flames, pull the stone block out of the corner alcove to get past the first fire wall, then hit the switch again and climb the fenced wall to 3F.",
          collect: [] },
        { id: "c08-s07-06", text: "In the boulder maze on 3F, keep to the right-hand wall and head north. Bomb the cracked wall there for a Gold Skulltula. Keep following the north walls to the alcove with a Goron behind bars; step on the switch to free him and take the **Small Key** from his chest. Then go to the large alcove on the south side of the room and open the big chest for the **Dungeon Map**.",
          collect: ["fire-temple-boulder-maze-lower-chest", "fire-temple-gs-boulder-maze", "fire-temple-map-chest"],
          tip: "Stay close to the wall to keep away from the rolling boulders." }
      ]
    },
    {
      id: "c08-s08", title: "Fire Temple: The Upper Floors", era: "adult", kind: "dungeon",
      steps: [
        { id: "c08-s08-01", text: "Use a key on the locked door on the west side of the boulder maze. In the passage beyond, shoot the eye target on the sealed west door, then go through it to the big chest with the **Compass**.",
          collect: ["fire-temple-compass-chest"] },
        { id: "c08-s08-02", text: "Take the south door of the passage into a lava room with mesh platforms, where a wall of fire chases you. Sprint ahead of it, climb the ledge on the left and let the fire pass (a locked door waits there for later). Drop down, run behind the fire to the north side and push the big stone block into the boulder maze. It opens a path up to the high platforms. Up there, hop over the boulders, defeat the Fire Slugs and bomb the large crack in the central platform. Climb down the mesh wall below to the Goron you passed on 2F, step on the switch to free him and take his **Small Key**. Then cross the boulders to the prison gate at the south end and step on its switch to free another Goron for another Small Key.",
          collect: ["fire-temple-boulder-maze-shortcut-chest", "fire-temple-boulder-maze-upper-chest"] },
        { id: "c08-s08-03", text: "Go back to the first of the high platforms over the boulder maze. Hop to the north and look south and up for a gust of wind where Navi turns green. Play the **Scarecrow's Song**, Hookshot to Pierre, then step onto the small platform to the north, which rises by itself. Climb the mesh wall; a Gold Skulltula sits on the wall by the door at the top. In the big round room beyond, Hookshot the second one on the inner wall around the lava pit. Step on the switch to raise 2 pillars with Hookshot targets, and hook each one before it sinks to reach 3 small chests (optional) holding 2 Red Rupees and a Purple Rupee, 90 Rupees in all.",
          collect: ["fire-temple-gs-scarecrow-climb", "fire-temple-gs-scarecrow-top", "fire-temple-scarecrow-chest"],
          tip: "The pillars sink again after a short time, so go straight for the chests." },
        { id: "c08-s08-04", text: "Halfway along the fire-wall grate, climb onto the ledge with the locked door, unlock it and enter the flame maze. Bomb the door south of the first rolling boulder before you touch it: it is a fake that falls on you. Follow the north wall to the Goron there, step on the switch in front of his cell and take the **Small Key** from his chest.",
          collect: ["fire-temple-boulder-maze-side-room-chest"],
          tip: "Some doors here are Door Mimics that slam onto you. Use a Bomb on any door that sticks out from the wall before you try it." },
        { id: "c08-s08-05", text: "Go back to the south side of the maze and unlock the door to the central chamber. The floor switch in the middle needs a weight left on it to stop the big flame vents. Ignore the fake door to the north. Go east, then north to a platform with 2 small stone blocks, throw one through the fires toward the switch, then carry it onto the switch. Every fire trap in the room stops. Use your last key on the next door to reach the Flare Dancer. When it comes near, Hookshot its metal core out of the flames, then chase the small body and slash it. Repeat until it falls.",
          collect: [],
          tip: "Run the other way round to cut the core off, or use the Bomb Flowers. After each hit it refuels in the fire pit." },
        { id: "c08-s08-06", text: "Ride the platform up to 4F and climb. Below the flame jets is a coloured switch: throw a **Bomb Flower** onto it to lower the jets, throw a second one as you run for the jets, and climb the mesh wall after the blast. In the round room on 5F, step on the switch in front of the rolling boulder, then run up the narrow path to the big chest before the flames return for the **Megaton Hammer**.",
          collect: ["fire-temple-megaton-hammer-chest"],
          tip: "A Fairy's Thought in this room asks for more light: play the **Sun's Song** beside it." }
      ]
    },
    {
      id: "c08-s09", title: "Fire Temple: Hammer Route and the Boss Key", era: "adult", kind: "dungeon",
      steps: [
        { id: "c08-s09-01", text: "Leave the Hammer room. To the north, slam the large raised button over the grate with the Hammer to break a hole, and drop through. Hammer apart the segmented statue that blocks the door. In the next room, use the button to drop the platforms back down to 3F, into the middle of the large western room. Smash the large grey rocks to get above the Goron's prison. Play the **Song of Time** at the blue block to open a hole down to a switch, then hammer the switch to free the Goron and take his **Small Key**.",
          collect: ["fire-temple-highest-goron-chest"] },
        { id: "c08-s09-02", text: "Beside that Goron's prison, hammer the giant panel. It sits on the pillar where you last saw Darunia, and the blow drops you to 1F in front of the boss door.",
          collect: [] },
        { id: "c08-s09-03", text: "Go back to the temple's entrance room and hammer the statue beside the locked door. Beyond it, flip the Torch Slugs with the Hammer, then clear the flying tiles and the Like Like in the second tile room. Smash the grey rock in the back wall with the Hammer to reach the Gold Skulltula.",
          collect: ["fire-temple-gs-boss-key-loop"],
          warn: "This Like Like can also swallow your tunic or shield. If it does, reload the autosave or buy a replacement." },
        { id: "c08-s09-04", text: "Hammer the large statue blocking the next door to face the Flare Dancer again, now in green flames. Hookshot its core out, then slam the Hammer down to stun it and knock it over. Repeat until it falls, then take the passage south to a small chest with a Red Rupee (20 Rupees).",
          collect: ["fire-temple-flare-dancer-chest"] },
        { id: "c08-s09-05", text: "Through the right-hand door, hammer the rusted switch to free the last Goron and open the big chest for the **Boss Key**.",
          collect: ["fire-temple-boss-key-chest"],
          check: "No source mentions a right-hand door or a rusted switch here. They only say the last Goron waits in the next room beside an ornate chest. If you find no rusted switch, try any switch by his cell." }
      ]
    },
    {
      id: "c08-s10", title: "Volvagia", era: "adult", kind: "boss",
      steps: [
        { id: "c08-s10-01", text: "Cross the pillar platform to the boss door, Goron Tunic on. Defeat Volvagia (see the boss card), take the **Heart Container**, and Darunia gives you the **Fire Medallion** after the blue warp.",
          collect: ["volvagia", "fire-temple-volvagia-heart"],
          tip: "Before the boss door, cross the fallen pillar and Hookshot up to the high ledge on the north side; its pots hold health, magic and a fairy. Take the Heart Container before the blue warp." }
      ]
    },
    {
      id: "c08-s11", title: "Megaton Hammer Sweep", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s11-01", text: "In **Death Mountain Crater**, cross back over the bridge toward Goron City, take the south bridge near the entrance and smash the rocks over the cave on your right with the Hammer. Enter the fountain and play **Zelda's Lullaby**; the Great Fairy asks for 200 Rupees, then doubles your Magic Meter.",
          collect: ["dmc-great-fairy-reward"],
          tip: "Arrive with at least 200 Rupees. Near the shortcut to Goron City, the Hammer also breaks a large rock that hides a grotto: defeat the 2 lizard warriors inside for a chest with a Purple Rupee (50 Rupees).",
          check: "Sources describe the way in differently. One says a grey rock beside the broken bridge, off the crater's south walkway, hides the entrance. Another says to cross a narrow stone bridge, Hookshot a chained block and hammer the cracked boulders in the tunnel. Look for Hammer-breakable rock near a bridge." },
        { id: "c08-s11-05", text: "From the crater, smash the large grey rocks on the south walkway with the **Megaton Hammer** and climb to the summit, keeping the **Goron Tunic** on. From the summit by the **Great Fairy's Fountain**, go straight down and then left to a grotto on the left: a **Gossip Stone** and a chest with a **Business Scrub Seed**. Then give the **Broken Goron's Sword** to **Biggoron**, the giant Goron across from the fountain. He keeps it and gives you the **Prescription**.",
          collect: ["dmt-trade-broken-sword", "dmc-upper-grotto-chest"],
          tip: "The heat hurts the whole way up, so keep the tunic on. The crate token, the wall Piece of Heart and the Business Scrub's Piece of Heart up here were taken as a child in chapter 4." },
        { id: "c08-s11-02", text: "In **Goron City**, go to the big chamber of rocks in the northwest of the top floor. Hammer the grey rocks (the black ones still will not break) to clear a path to a small chest with a Red Rupee (20 Rupees).",
          collect: ["gc-maze-left-chest"] },
        { id: "c08-s11-03", text: "At night, on **Death Mountain Trail**, walk down from the summit near the Great Fairy's Fountain toward Goron City and hammer the large grey rock on the path. A Gold Skulltula hides behind it.",
          collect: ["dmt-gs-falling-rocks-path"], time: "night" },
        { id: "c08-s11-04", text: "At night, in the tunnel up to **Goron City**, find the spot left of the balcony over Dodongo's Cavern where the lone Bomb Flower used to grow. Hammer the large grey rock beside it for another Gold Skulltula.",
          collect: ["dmt-gs-above-dodongos-cavern"], time: "night" }
      ]
    }
  ],
  boss: {
    id: "boss-volvagia", name: "Subterranean Lava Dragon Volvagia",
    weakness: "Its head, hit with the Megaton Hammer while it pokes out of a lava pit",
    strategy: [
      "Volvagia surfaces from the lava pits around the platform. When its head pokes out, leap at it with the Megaton Hammer to smash its helm and stun it, then slash the crack on its forehead until it sinks back.",
      "When it glides overhead, it leaves a trail of fire beams. Dash sideways across its path, and stay off the smouldering spots the trail leaves.",
      "When the ceiling rains rocks, watch the shadows on the floor. Hold ZL to raise your shield and strafe sideways and back; the shield only blocks from the front.",
      "Later, fake rumblings come from several pits: ignore the first few and stay near the later ones. More pits bubble at once, and the last flight leaves 2 fire trails. You can shoot it with the Bow before it flies past."
    ]
  }
});

/* ------------------------------------------------------------------ c09 */
OOT.walkthrough.push({
  id: "c09-ice-cavern", num: 9, title: "Zora's Fountain & the Ice Cavern", era: "adult",
  summary: "Cross the frozen Zora's Domain to the Ice Cavern for the Iron Boots and the Serenade of Water, thaw King Zora for the Zora Tunic, and finish the trade for Biggoron's Sword before the Water Temple.",
  needs: ["Hookshot", "Megaton Hammer", "Zelda's Lullaby", "Sun's Song", "Prescription", "Epona", "At least 1 empty Bottle (2 or more is better)"],
  gains: ["Iron Boots", "Serenade of Water", "Zora Tunic", "Biggoron's Sword", "2 Pieces of Heart", "6 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c09-s01", title: "Zora's River, Domain and Fountain", era: "adult", kind: "overworld",
      steps: [
        { id: "c09-s01-01", text: "At night on **Zora's River**, ride the floating plant that grew from the bean you planted as a child in the soft soil by the Bean Salesman's old spot. It takes you up to the big island in the middle of the river (a Cucco can also get you there). Go to the ledge on the island's south side, look back west and Hookshot the Gold Skulltula high on the wall (on the map).",
          collect: ["zr-gs-near-raised-grottos"], time: "night" },
        { id: "c09-s01-02", text: "Still at night, go to the falls in front of the entrance to **Zora's Domain**. Stand on the edge of the balcony along the stairs, look west along the high walls and Hookshot the far Gold Skulltula.",
          collect: ["zr-gs-above-bridge"], time: "night",
          check: "One guide says this token needs the **Longshot**. If the Hookshot will not reach it from the balcony edge, come back after the **Water Temple**." },
        { id: "c09-s01-03", text: "Play **Zelda's Lullaby** at the waterfall to enter the frozen **Zora's Domain**. Left of the stairs up to King Zora's chamber, climb to the top of the frozen waterfall and look left from the ledge for a Gold Skulltula.",
          collect: ["zd-gs-frozen-waterfall"], time: "night",
          tip: "The Hookshot brings it down. Time passes in Zora's Domain, so night can come and go.",
          check: "Only one guide marks this token night-only, so come at night. If the top of the frozen waterfall is empty, look on a pillar where the ice cave opens onto the frozen bridge." },
        { id: "c09-s01-04", text: "Pass the red ice around King Zora and continue to **Zora's Fountain**. Start on the icy bridge that winds north toward the cave, and hop east across the small ice platforms. The **Piece of Heart** sits on the last big platform, in the northeast corner of the lake.",
          collect: ["zf-iceberg-freestanding-poh"],
          tip: "Jumps use the jump button in this version, so time each hop yourself. Octoroks shoot at you here; block their rocks with your shield." }
      ]
    },
    {
      id: "c09-s02", title: "Ice Cavern", era: "adult", kind: "dungeon",
      steps: [
        { id: "c09-s02-01", text: "In the **Ice Cavern**, defeat the 3 Freezards in the first big room to open the gate. In the spinning-blade room, gather the 5 Silver Rupees. Standing at the 5th one and facing south, Hookshot the Gold Skulltula high on the wall above the row of ice stalagmites.",
          collect: ["ice-cavern-gs-spinning-scythe-room"],
          tip: "Freezards breathe ice and stay rooted while they do; wait for the breath to stop, then close in. The Hookshot hurts them. Slash the wall of ice stalagmites to the left of the drop to find the first Silver Rupee. Work around the blade counter-clockwise and cut past the middle, away from the blades. The last one floats off a ledge on the north side; jump for it just after the blade passes." },
        { id: "c09-s02-02", text: "In the north room, clear the Freezard and Ice Keese, then Hookshot up to the platforms. Slash the stalagmite that holds **Blue Fire** and fill your empty Bottles. Shops do not sell Blue Fire until you have bottled your own and finished the Ice Cavern, so fill up here. Pour some on the red ice on the high northwest path to reach the big chest with the **Dungeon Map**.",
          collect: ["ice-cavern-map-chest"],
          tip: "Keep at least 2 Bottles of Blue Fire, more if you can. Fonts along the way let you refill. Blue Fire melts any red ice." },
        { id: "c09-s02-03", text: "Back in the blade room, melt the red ice over the left (east) exit and follow the corridor past the spike traps and a Freezard. At its end are 3 alcoves. The far east one holds the big chest with the **Compass**. After opening it, turn around and Hookshot the Gold Skulltula behind the low ice column on the north side of the chest. The north alcove, behind red ice, has pots with Rupees and a Fairy's Thought. There is no Piece of Heart in the Ice Cavern in this version.",
          collect: ["ice-cavern-compass-chest", "ice-cavern-gs-heart-piece-room"],
          tip: "The south alcove at the end of the corridor has a Blue Fire font for refills." },
        { id: "c09-s02-04", text: "Melt the red ice on the blade room's west exit and follow the hall to the big ice-block room. Kill the Ice Keese first. Push the sliding block to reach the 5 Silver Rupees: it slides until it hits something, and one Rupee sits on a ledge behind red ice that you melt with Blue Fire. From the east side of the icy platform, look back up across the gap you walked around on the way in and Hookshot the Gold Skulltula on the wall. Optional: play the **Song of Time** at the symbol on the northwest ledge to raise blocks to a small chest with a Red Rupee.",
          collect: ["ice-cavern-gs-push-block-room"],
          tip: "Pushing the block into a pit resets it to the start." },
        { id: "c09-s02-05", text: "Push the block under the new hallway, climb in, beat the Freezards and melt the red ice wall. Defeat the White Wolfos for the **Iron Boots**, and Sheik teaches you the **Serenade of Water**.",
          collect: ["ice-cavern-iron-boots-chest", "sheik-in-ice-cavern"],
          tip: "Leave with at least 1 Bottle of Blue Fire. The Iron Boots let you sink and walk underwater, and they have a quick-swap shortcut, so you can put them on or take them off without the menu." }
      ]
    },
    {
      id: "c09-s03", title: "King Zora and the Fountain Floor", era: "adult", kind: "overworld",
      steps: [
        { id: "c09-s03-01", text: "Return to **Zora's Domain** and pour **Blue Fire** on King Zora's red ice. Talk to him for the **Zora Tunic**, which lets you breathe underwater. Without it you slowly take damage underwater. Equip it from the equipment menu.",
          collect: ["zd-king-zora-thawed"] },
        { id: "c09-s03-02", text: "The **Zora Shop** is sealed in this version, so you cannot buy a spare Zora Tunic. If a Like Like swallows yours, kill it quickly to get it back.",
          collect: ["zd-shop-item-1"] },
        { id: "c09-s03-03", text: "Go back to **Zora's Fountain**, put on the Zora Tunic and the **Iron Boots** and sink to the floor of the lake for a **Piece of Heart**.",
          collect: ["zf-bottom-freestanding-poh"],
          tip: "The Zora Tunic removes the air timer underwater.",
          check: "One guide puts this piece in a dark cave under the ice instead. If it is not on the open lake floor, swim into the underwater cave near the stone pillar and follow it to the end; Green Rupees surround the piece." }
      ]
    },
    {
      id: "c09-s04", title: "Biggoron's Sword Trade, Part 2", era: "adult", kind: "sidequest",
      steps: [
        { id: "c09-s04-01", text: "Show the **Prescription** to King Zora. He gives you the **Eyeball Frog**, and a timer of 2 minutes 30 seconds starts.",
          collect: ["zd-trade-prescription"],
          warn: "Warp songs spoil a timed trade item at once." },
        { id: "c09-s04-02", text: "Wear the **Zora Tunic**, jump from the ledge above the waterfall into **Zora's River** and swim down to **Hyrule Field**. Call Epona and ride to **Lake Hylia**. (Or take the **Lost Woods** shortcut just outside the Domain out to Hyrule Field.) Give the frog to the scientist in the **Lakeside Laboratory** for the **Specialty Eye Drops**; a timer of 3 minutes 30 seconds starts.",
          collect: ["lh-trade-eyeball-frog"] },
        { id: "c09-s04-03", text: "Ride Epona to Kakariko and climb **Death Mountain Trail** to Biggoron. Hand over the Eye Drops before the 3 minutes 30 seconds end to get the **Biggoron Receipt**.",
          collect: ["dmt-trade-eyedrops"],
          tip: "Watch for falling fire and spiders on the last stretch of the trail. A steady ride leaves about 30 to 45 seconds to spare." },
        { id: "c09-s04-04", text: "Biggoron needs 3 days to forge the sword. Play the **Sun's Song** beside him and talk to him again; he tells you how long is left. Repeat until he asks for the **Biggoron Receipt**, then show it to him for **Biggoron's Sword**.",
          collect: ["dmt-biggoron"],
          tip: "Biggoron's Sword never breaks, but it takes both hands, so you cannot raise a shield while it is equipped." }
      ]
    }
  ],
  boss: null
});

/* ------------------------------------------------------------------ c10 */
OOT.walkthrough.push({
  id: "c10-water-temple", num: 10, title: "Lake Hylia & the Water Temple", era: "adult",
  summary: "Sink to the Water Temple under the drained Lake Hylia, raise and lower the water to reach every key, beat Dark Link for the Longshot and Morpha for the Water Medallion, then take the Fire Arrows from the refilled lake.",
  needs: ["Iron Boots", "Zora Tunic", "Hookshot", "Zelda's Lullaby", "Serenade of Water", "Fairy Bow", "Bombs"],
  gains: ["Longshot", "Water Medallion", "Fire Arrows", "Heart Container", "7 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c10-s01", title: "Lake Hylia (Drained)", era: "adult", kind: "sweep",
      steps: [
        { id: "c10-s01-01", text: "Warp to **Lake Hylia** with the **Serenade of Water**. In the laboratory, wear the **Iron Boots** and the **Zora Tunic** to sink to the bottom of the pool and stay there, roll into the crate and Hookshot the Gold Skulltula that appears.",
          collect: ["lh-gs-lab-crate"],
          tip: "The Iron Boots have a quick-swap shortcut, so you can put them on or take them off without the menu." }
      ]
    },
    {
      id: "c10-s02", title: "Water Temple: Lowering the Water", era: "adult", kind: "dungeon",
      steps: [
        { id: "c10-s02-01", text: "Follow the ruins of the dry lakebed to the lowest point, sink with the **Iron Boots** and **Zora Tunic**, and Hookshot the target above the gate to open the **Water Temple**. Take the boots off to swim up into the main hall. Put them back on, sink to 1F past the rolling Spikes and go through the door with 2 glowing blue pillars (east on the map), where you meet **Ruto**. Take the boots off and follow the blue lights up the shaft to the top floor. The large chest there, the one you saw behind bars, holds the **Dungeon Map**.",
          collect: ["water-temple-map-chest"],
          tip: "Door pillars are colour-coded. Blue pillars mark the room that drops the water to 1F, green pillars the tower base that raises it to 2F, and red pillars the way to the 3F mural. The icon on each door shows which water level that room sets. The temple has only 4 Small Keys and 4 locked doors, and the Iron Boots have a quick-swap shortcut for sinking and floating." },
        { id: "c10-s02-02", text: "Go back out to the shaft where Ruto disappeared and play **Zelda's Lullaby** at the Triforce symbol on its wall to drain the temple to 1F, its lowest level. Drop down to the pool on 1F. Shoot an arrow through the lit torch to light the 2 unlit ones opposite (or use Din's Fire) and open the sealed east door. The room locks behind you: beat the 3 Spikes, then open the small chest for a **Small Key**.",
          collect: ["water-temple-torches-chest"],
          tip: "Spikes can only be hurt once their spines pull in. Block their charge, then Hookshot or slash them." },
        { id: "c10-s02-04", text: "West of the central tower (on the map), push the large stone block forward into the pool and follow it down with the **Iron Boots**, past a Shell Blade. Swim on to the whirlpool room. Sink with care onto the narrow serpent platform beside the serpent head, and Hookshot the switch in its mouth to open an underwater gate. Drift through by taking the boots on and off. The chest on the far platform holds a **Small Key**.",
          collect: ["water-temple-dragon-chest"],
          tip: "Keep the boots on at the gate, where 2 Shell Blades wait. Block their charge and Hookshot them when their shells open." },
        { id: "c10-s02-05", text: "Unlock the door with green pillars into the base of the central tower, Hookshot up to the ledge and play **Zelda's Lullaby** to raise the water to 2F. A floating block in the tower rises and leaves a hole to the basement. Sink in with the **Iron Boots**, beat the 3 Spikes, and Hookshot the green switch above to open the gate (a Shell Blade drops out). Swim up through it to an underwater chamber. The small chest holds a Red Rupee, not a Small Key, and a Gold Skulltula sits on the wall: Hookshot it.",
          collect: ["water-temple-central-pillar-chest", "water-temple-gs-behind-gate"] }
      ]
    },
    {
      id: "c10-s03", title: "Water Temple: Middle and High Water", era: "adult", kind: "dungeon",
      steps: [
        { id: "c10-s03-01", text: "With the water at 1F, bomb the cracked wall on the south side of the central tower and take the passage west and down to B1. Swim up past the Shell Blade and climb the steps to a switch; it raises a statue with a Hookshot target so you can cross the gap. Beyond, 2 Tektites wait under a pair of Hookshot targets and a Like Like sits above. Shoot the Like Like with the **Fairy Bow**; when it dies, a large chest appears with the **Compass**.",
          collect: ["water-temple-compass-chest"],
          warn: "The Like Like can swallow your Zora Tunic, so shoot it from a distance." },
        { id: "c10-s03-02", text: "With the water at 2F, first go to the room where you met **Ruto** (east). Sink to the bottom with the **Iron Boots**: the cracked wall halfway up now stands dry on a ledge. Bomb it, beat the Shell Blades with your sword and take the Gold Skulltula off the wall behind you. Then swim to the water line on the east side of the central tower. Bomb the cracked wall in the alcove there and follow the path northeast. Sink with the boots through a hall of Stingers, then take them off at the far end. In the geyser room, Hookshot the switch in the small pool to lower the geyser, step on, and hit the switch again to ride it up. The small chest in the alcove holds a **Small Key**.",
          collect: ["water-temple-gs-falling-platform-room", "water-temple-cracked-wall-chest"] },
        { id: "c10-s03-03", text: "Unlock the west door (on the map) with red pillars on the middle level. Lure out and defeat the Tektite, hit the switch and ride the water pillar up. Come out on the alcove above the main room and play **Zelda's Lullaby** to raise the water to the top.",
          collect: [] },
        { id: "c10-s03-04", text: "Take the second locked door on the west side (on the map), reached along the floating platforms. In the long pit room, the far platforms drift toward the middle and sink. Kill the Keese, slide down onto a moving platform and Hookshot the targets on each far platform; a fixed side platform lets you rest. In the next room, snipe the Tektites in the pit below with the **Fairy Bow**. Hit the blue switch in the middle to raise statues with Hookshot targets. Zip to the closest statue on the west (not the north one, or you fall), hit the switch to lower it and zip to the target on its left into a narrow alcove. Raise the statues again, zip to the northeast one and up to a high ledge, then hit the switch twice to lower that statue, jump on and ride it up. Break the pots and go through.",
          collect: [],
          tip: "A Fairy's Thought sits on a stray platform on the north wall of the sinking-platform room. It points to the **Sun's Song**, which heals you with fairy power." },
        { id: "c10-s03-05", text: "In the misty room with a lone tree, Dark Link appears. Beat him and open the big chest for the **Longshot**.",
          collect: ["water-temple-longshot-chest"],
          tip: "Din's Fire early in the fight can stun him. Late in the fight he spins; back away until the spin ends, then strike." }
      ]
    },
    {
      id: "c10-s04", title: "Water Temple: The Longshot Rooms", era: "adult", kind: "dungeon",
      steps: [
        { id: "c10-s04-01", text: "Behind the platform where the Longshot chest stood, Longshot to the far targets up on a high ledge and drop into the waterfall pit. It leads to a cavern river that runs back to the temple entrance. Wear the **Iron Boots** to hold your ground against the whirlpools and to climb the ledges. Where the river curves south, look back: a Gold Skulltula clings high on a cavern pillar, so Longshot it with the boots on. At the last 2 whirlpools, walk through the middle to the southeast corner. Shoot the eye target on the big gate and Longshot across before it closes, out to the entrance hall.",
          collect: ["water-temple-gs-river", "water-temple-river-chest"],
          tip: "A pot on the ledges just after the last whirlpools holds a fairy.",
          check: "Neither walkthrough shows a chest along this river; IGN covers the whole route and mentions only a pot with a fairy. If you find a chest near the eye-target gate, open it, since this is where the guide lists one." },
        { id: "c10-s04-03", text: "Lower the water at the east Triforce (on the map), raise it to the middle level at the central pillar, and Longshot the Gold Skulltula at the top of the inside of the pillar.",
          collect: ["water-temple-gs-central-pillar"] },
        { id: "c10-s04-04", text: "With the water at 2F, go out on the balcony on the north side of the main room. Shoot the eye target on the far wall to reveal a distant target, and Longshot to the northern room. A small chest sits behind a fence. Sink into the pool on the left with the **Iron Boots** to find a stone block you can only pull; pull it back. Climb out, and right of the fence Longshot the ceiling target in the high waterfall alcove. You land in another underwater passage: push the block north, then open the chest for the last **Small Key**.",
          collect: ["water-temple-central-bow-target-chest"] },
        { id: "c10-s04-05", text: "Leave the water at 2F. In the main room, sink with the **Iron Boots** to the bottom of the north side, into a basement pit heading north. Swim to the ledge and use the last Small Key on the far locked door. In the big pool, shoot the Tektites, wait for a boulder to roll past, then sink, cross the ledge and swim up to the far ledge, clear of the whirlpools. In the next room, throw Bombs into the water to kill the Stingers, then bomb all 3 cracked walls on the left. The middle one hides a big stone block: push it from behind into the pool onto the switch to raise the water. Step on the next switch to raise the geyser platforms and cross past the Tektites. Take the door back to the boulder waterway, and from the boulder alcove Longshot the Gold Skulltula high on the wall opposite the small waterfall, between boulders.",
          collect: ["water-temple-gs-near-boss-key-chest"] },
        { id: "c10-s04-06", text: "Back in the boulder waterway, wait for a boulder to pass, then go east and north to an alcove with a door. Beat the Shell Blade guarding it; the chest in the next room holds the **Boss Key**.",
          collect: ["water-temple-boss-key-chest"] }
      ]
    },
    {
      id: "c10-s05", title: "Morpha", era: "adult", kind: "boss",
      steps: [
        { id: "c10-s05-01", text: "Raise the water to the top level, Longshot the far target on the north side of the tower up to the high ledge, and open the boss door with the **Boss Key**. On the long slope with water rushing down and spike traps bouncing, wear the **Iron Boots** and keep clear of the spikes. Defeat Morpha (see the boss card), take the **Heart Container**, and Ruto gives you the **Water Medallion**.",
          collect: ["morpha", "water-temple-morpha-heart"],
          tip: "Take the Heart Container before the blue warp. Use the wall Longshot points to escape the spinning arm. In a late phase tendrils fill the arena and only 1 hides the core; bait it into slamming, then pull the core out." }
      ]
    },
    {
      id: "c10-s06", title: "Lake Hylia Refilled", era: "adult", kind: "sweep",
      steps: [
        { id: "c10-s06-01", text: "The lake refills after the temple and you land on the island above it. Read the plaque, then wait for sunrise. When a giant ring of light shows in the eastern sky, shoot an arrow straight into it. The **Fire Arrows** fall onto a nearby island, so swim over and take them.",
          collect: ["lh-sun"], time: "day" },
        { id: "c10-s06-02", text: "At night (play the Sun's Song if it is day), go to the big tree on the island above the Water Temple. Longshot to the vines near the top, climb up and take the Gold Skulltula at the top. If it is not there, look in the hollow of the tree.",
          collect: ["lh-gs-tree"], time: "night" }
      ]
    }
  ],
  boss: {
    id: "boss-morpha", name: "Giant Aquatic Amoeba Morpha",
    weakness: "The red nucleus, pulled out of its water tentacle with the Longshot (the Hookshot also reaches)",
    strategy: [
      "Morpha moves its nucleus through the pool and raises water tentacles. Stay out of their reach; a grab squeezes you and throws you into the spiked walls.",
      "When the nucleus rises into a tentacle, Longshot it onto the floor, leaving room in front of you, and slash it while it bounces.",
      "Later it raises 2, then 3 tentacles at once. Standing in a corner between the spike panels keeps you out of their grip.",
      "Pull the nucleus into a corner and step around it so it sits between you and the wall; it cannot slip away while you keep hitting it."
    ]
  }
});

/* ------------------------------------------------------------------ c11 */
OOT.walkthrough.push({
  id: "c11-bottom-of-well", num: 11, title: "Kakariko & the Bottom of the Well", era: "child",
  summary: "Learn the Nocturne of Shadow in burning Kakariko, then return to childhood to collect everything that waited for the Song of Storms, drain the well and take the Lenses of Truth from the Bottom of the Well.",
  needs: ["Forest, Fire and Water Medallions", "Song of Storms", "Prelude of Light", "Bolero of Fire", "Zelda's Lullaby", "Sun's Song", "Kokiri Sword", "Boomerang", "Bombs", "Deku Sticks", "Bottle with Bugs", "Rupees for the last Magic Beans"],
  gains: ["Nocturne of Shadow", "Lenses of Truth", "Magic Beans planted in Death Mountain Crater and on Death Mountain Trail", "Magic Bean for the Desert Colossus", "3 Pieces of Heart", "5 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c11-s01", title: "Kakariko in Flames", era: "adult", kind: "overworld",
      steps: [
        { id: "c11-s01-01", text: "Enter **Kakariko Village** as an adult holding the Forest, Fire and Water Medallions. The village is burning; after the shadow from the well knocks you down, Sheik teaches you the **Nocturne of Shadow**, which warps you to the Graveyard.",
          collect: ["sheik-in-kakariko"] }
      ]
    },
    {
      id: "c11-s02", title: "Back to Childhood: Song of Storms Checks", era: "child", kind: "sweep",
      steps: [
        { id: "c11-s02-01", text: "Warp to the **Temple of Time** with the **Prelude of Light** and put the Master Sword back to become a child. At **Hyrule Castle**, slip past the guards to the secret entrance where you found Talon, and stand under the tree nearby. Play the **Song of Storms**, drop into the hole, bomb the cracked wall and catch the Gold Skulltula with the **Boomerang**.",
          collect: ["hc-gs-storms-grotto"] },
        { id: "c11-s02-02", text: "At **Zora's River**, buy the rest of the **Magic Beans** from the salesman by the entrance. Go upriver to the frogs sitting on stumps in the alcove along the north cliff. Play the **Song of Storms** to them for a **Piece of Heart**, then play them the **Song of Time** as well.",
          collect: ["zr-frogs-in-the-rain", "zr-frogs-song-of-time"],
          tip: "Each bean costs 10 Rupees more than the last, so the last 3 cost 270 Rupees together. You need them for the crater, Death Mountain Trail and the Desert Colossus." },
        { id: "c11-s02-03", text: "With all 6 songs played to them, the frogs start a game: each time one jumps up after a fly, play the note it sits on. Play all 14 notes quickly and without a mistake for a **Piece of Heart**: {notes:A ← → ↓ ← → ↓ A ↓ A ↓ → ← A}.",
          collect: ["zr-frogs-ocarina-game"],
          tip: "Play each note as fast as you can." },
        { id: "c11-s02-04", text: "Catch **Bugs** in a Bottle. In Kakariko, climb **Death Mountain Trail** and plant a **Magic Bean** in the soft soil outside **Dodongo's Cavern**. Then warp to **Death Mountain Crater** with the **Bolero of Fire**. Release the Bugs on the soft soil beside the warp pad, defeat the **Gold Skulltula** that crawls out, and plant a Magic Bean in the same soil. Then play the **Nocturne of Shadow** to warp to the Graveyard next to Kakariko.",
          collect: ["dmc-gs-bean-patch", "bean-death-mountain-crater", "bean-death-mountain-trail"],
          tip: "Bugs hide under small rocks. Start with full hearts. If you skip this crater trip, you also skip the Gold Skulltula here and the bean ride for a Piece of Heart in chapter 12.",
          warn: "Without the **Goron Tunic**, Link's tunic catches fire about 4 seconds after he arrives, and he then loses a quarter heart every second until he leaves. A Recovery Heart restarts the 4-second count. Do the errand fast.",
          check: "Sources disagree on the trail soil. If there is no soft soil beside the Dodongo's Cavern entrance, look on the red canyon path before the rope bridge." },
        { id: "c11-s02-05", text: "Walk out of Kakariko and down the stairs into **Hyrule Field**. In the plot of farmland next to the Kakariko entrance, play the **Song of Storms** to open a grotto. Inside it is pitch black: play the **Sun's Song** to freeze the 2 ReDeads, defeat them before they break free, and open the chest for a Purple Rupee (50 Rupees).",
          collect: ["kak-redead-grotto-chest"] }
      ]
    },
    {
      id: "c11-s03", title: "Bottom of the Well: The Main Floor", era: "child", kind: "dungeon",
      steps: [
        { id: "c11-s03-01", text: "In **Kakariko**, go into the **Windmill** and play the **Song of Storms** to the man turning the music box. The well in the village drains.",
          collect: [] },
        { id: "c11-s03-02", text: "Crawl into the **Bottom of the Well**, defeat the Skulltulas in the narrow corridors and walk straight through the blank wall by the plaque: it is fake. The main floor's corridors run in a square around a walled central room, and hidden pits drop you to the basement, so watch your step, most of all in the northeast corner (if you fall, the basement step below shows the way out). On the north side, play **Zelda's Lullaby** on the Triforce mark under the largest fountainhead to stop the water. Once the channels are dry, drop into the dry waterway under the grating by the east corridor for a small chest with a Blue Rupee, and crawl into the small drain on the southwest side of the south corridor's lower channel for another Blue Rupee.",
          collect: ["bottom-of-the-well-underwater-front-chest", "bottom-of-the-well-underwater-left-chest"],
          tip: "The **Green Bubble** circling the corridors is wrapped in flames. The fire drops at the corners: hit it from behind there." },
        { id: "c11-s03-03", text: "After the water drains, a new area opens to the north. Crawl through the tunnel, defeat the Skulltula and walk toward the small chest at the end of the room: a hidden pit drops you into Dead Hand's lair. Let one of Dead Hand's hands grab you, break free, and slash Dead Hand's head when it leans in to bite; the big chest holds the **Lenses of Truth**. It is a pair of goggles with a quick one-button shortcut, so you can switch them on and off without the menu. With the Lenses on, climb the hidden ladder at the south edge of the pit. The corridor beyond comes out on a hidden ledge above the entry corridor; the small chest on the mesh platform there holds a Purple Rupee (50 Rupees).",
          collect: ["bottom-of-the-well-lens-of-truth-chest", "bottom-of-the-well-invisible-chest"],
          tip: "Dead Hand burrows after each hit and more hands appear. Cutting down all the hands lures it out; Bombs hit several at once. The Lenses drain magic while they are on, so turn them off between uses." },
        { id: "c11-s03-04", text: "Back in the main corridors, climb onto the platforms on the east side of the south corridor and look north with the Lenses on. An opening appears to the left of the central room's entrance: leap through it for a small chest with a Red Rupee. The southeast corner has the same kind of hidden opening facing the central room; jump through it for a small chest with a **Small Key**.",
          collect: ["bottom-of-the-well-front-left-fake-wall-chest", "bottom-of-the-well-right-bottom-fake-wall-chest"] },
        { id: "c11-s03-05", text: "Head to the west side of the main floor. Jump across the drained corridor, swim across the pit under the gate and climb the mesh wall to the coffin room. Light a **Deku Stick** at a torch and burn the cobwebs off the coffins (**Din's Fire** also works). Gibdos rise from some coffins; Din's Fire hurts them. The lone coffin on the east side holds a **Small Key**.",
          collect: ["bottom-of-the-well-freestanding-key"],
          tip: "Some coffins release Keese or a Gibdo, and the north-side coffins hide another Gibdo. One coffin holds a **Fairy Thought**: play the **Song of Storms** there to heal.",
          check: "One walkthrough puts this key behind a slab you pull out of a wall recess in the coffin room instead. If the east coffin is empty, check the wall recesses." },
        { id: "c11-s03-06", text: "Sweep the rest of the main floor with the Lenses on. Past the fountainheads, the Lenses show a new opening into the central room; pits surround the torture rack and fill 2 cells on the south side, and a Wallmaster lurks here. A Skulltula guards a small chest with a Blue Rupee. A wide gap blocks the large chest, so go round to the west corridor and jump from the mesh platforms through the hidden opening behind it for the **Compass**. In the northwest corner, the alcove with a Skulltula hides a small chest with a Red Rupee; keep the Lenses on for the pits. Last, go back to the small chest that dropped you to Dead Hand and jump the pit with the Lenses on: it holds a **Business Scrub Seed**.",
          collect: ["bottom-of-the-well-compass-chest", "bottom-of-the-well-center-skulltula-chest", "bottom-of-the-well-back-left-bombable-chest", "bottom-of-the-well-front-center-bombable-chest"] }
      ]
    },
    {
      id: "c11-s04", title: "Bottom of the Well: Locked Rooms and Basement", era: "child", kind: "dungeon",
      steps: [
        { id: "c11-s04-01", text: "Unlock the 2 locked doors of the central room. In the northwest room, deal with the Deku Baba and throw the Boomerang at the Gold Skulltula in the corner, then again to pull in its token; in the northeast room, clear the Keese and follow the invisible walkway the Lenses show around the pit to the second Gold Skulltula.",
          collect: ["bottom-of-the-well-gs-west-inner-room", "bottom-of-the-well-gs-east-inner-room"] },
        { id: "c11-s04-02", text: "In the northeast corner of the main corridors, put the Lenses on around the plaque to avoid the pits by the east door. In the room beyond, keep the Lenses on to spot the hidden pits, deal with the Fire Keese and the Beamos, and open the corner chest for **Bombs**.",
          collect: ["bottom-of-the-well-fire-keese-chest"],
          warn: "Fire Keese in this room set a Deku Shield on fire. Carry the Hylian Shield." },
        { id: "c11-s04-03", text: "In the bright room to the south, stun the Like Like with the **Boomerang**, then defeat it. Throw the Boomerang at the Gold Skulltula on the wall between the 2 torches, then again to pull in its token.",
          collect: ["bottom-of-the-well-like-like-chest", "bottom-of-the-well-gs-like-like-cage"],
          warn: "The Like Like swallows shields. Defeat it before leaving to get yours back.",
          check: "Neither remake walkthrough lists a chest in the Like Like room, so the **Hylian Shield** chest may be gone. Look around the room once the Like Like is down; if there is no chest, nothing is missed." },
        { id: "c11-s04-04", text: "Drop through one of the hidden pits in the central room into the flooded basement and play the **Sun's Song** to freeze the ReDeads. The way back up stays shut until you collect all 5 **Silver Rupees**: 2 across the floating plants over the green ooze (it hurts), 1 in the northwest pool, 1 on the dry path in front of the north boulders, and 1 behind the boulders in the southeast corner, past the green pit. Pots by each pool give Bombs for the boulders. Beyond the last Silver Rupee, cross more ooze and defeat the ReDead in front of the chest for the **Dungeon Map**.",
          collect: ["bottom-of-the-well-map-chest"],
          tip: "With all 5 Silver Rupees, go through the opened gate to the south and climb the ladder back to the main floor." }
      ]
    },
    {
      id: "c11-s05", title: "Treasure Chest Game", era: "child", kind: "sidequest",
      steps: [
        { id: "c11-s05-01", text: "Make it night (play the **Sun's Song** in Hyrule Field), then warp to the **Temple of Time** with the **Prelude of Light** and walk down into the **Market**. Pay 10 Rupees at the **Treasure Chest Game**, look at each pair of chests through the **Lenses of Truth** and open the one holding the key; the chest in the last room holds a **Piece of Heart**.",
          collect: ["market-treasure-chest-game-reward"], time: "night",
          tip: "The game is open only at night. Time keeps passing in the Market, so night can end while you play; play the Sun's Song again to bring it back. Without the Lenses each room is a coin toss; the Lenses show what each chest holds." }
      ]
    }
  ],
  boss: null
});

/* ------------------------------------------------------------------ c12 */
OOT.walkthrough.push({
  id: "c12-shadow-temple", num: 12, title: "The Shadow Temple", era: "adult",
  summary: "Ride the crater bean plant for a Piece of Heart, then open the Shadow Temple with Din's Fire and work through it with the Lenses of Truth and the Hover Boots to beat Bongo Bongo for the Shadow Medallion.",
  needs: ["Nocturne of Shadow", "Din's Fire", "Lenses of Truth", "Longshot", "Iron Boots", "Fairy Bow", "Bombs", "Zelda's Lullaby", "Sun's Song", "Goron Tunic", "Magic Bean planted in Death Mountain Crater (chapter 11)"],
  gains: ["Hover Boots", "Shadow Medallion", "Heart Container", "1 Piece of Heart", "5 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c12-s01", title: "Death Mountain Crater Bean Ride", era: "adult", kind: "sweep",
      steps: [
        { id: "c12-s01-01", text: "Climb the steps from the Market to the **Temple of Time** and draw the **Master Sword** to become an adult again. Then warp to **Death Mountain Crater** with the **Bolero of Fire**, wearing the Goron Tunic, and ride the bean plant you planted as a child up to a large rocky pillar for a **Piece of Heart**.",
          collect: ["dmc-volcano-freestanding-poh"],
          warn: "Without the **Goron Tunic**, your tunic catches fire about 4 seconds after you enter the crater, and then you lose a quarter heart every second. Healing resets the timer. Put the tunic on before you warp in.",
          check: "One source says Pieces of Heart, Heart Containers and Fairies are now picked up with the action button. If the piece does not collect when you touch it, walk up and press the action button." },
        { id: "c12-s01-02",
          text: "Make your way down to **Death Mountain Trail**. Ride the bean plant you planted next to the Dodongo's Cavern entrance up to a high ledge for a **Piece of Heart**.",
          collect: ["dmt-freestanding-poh"],
          tip: "No plant here? You skipped the bean errand in chapter 11, so you need a child trip to plant it first." }
      ]
    },
    {
      id: "c12-s02", title: "Shadow Temple: The Hover Boots", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s02-01", text: "Warp with the **Nocturne of Shadow** and follow the path to the **Shadow Temple**. In the first room, switch on the **Lenses of Truth** to see a ring of unlit torches. Stand in the middle and cast **Din's Fire** to light them all, and the door opens. Raise your shield against the Flying Pots in the corridor, Longshot over the big gap, and walk through the face wall the Lenses show.",
          collect: [],
          tip: "A Business Scrub later in this temple sells magic refills." },
        { id: "c12-s02-02", text: "In the bird statue room, switch on the Lenses: every skull column vanishes but one. The real one is on the northwest wall, and a hidden doorway is beside it. In the skull-lined room beyond, find the hidden door under the black skull to the north. That room seals you in: freeze the ReDead with the **Sun's Song**, defeat it and the Keese, and open the chest for the **Dungeon Map**.",
          collect: ["shadow-temple-map-chest"],
          tip: "Circling behind a ReDead helps you dodge its stun attack.",
          check: "One source says ReDeads are tougher now: they glow red before the stun scream and rush you up close. If you see that, freeze them first with the Sun's Song." },
        { id: "c12-s02-03", text: "Go to the matching skull room to the west and walk through the hidden opening in its west wall. In the next small room, shield against the Flying Pots and watch for a **Wallmaster**: step back when its shadow on the floor turns red, then slash it. Leave by the hidden exit in the northwest corner. In the long hallway the floor drops away, so climb the mesh wall on the far side. In the next room, beat **Dead Hand** and open the chest for the **Hover Boots**. To bring him up, either burn all his hands at once with **Din's Fire** (it costs magic) or let one hand grab you and break free. Hit his face when he lowers it, since it is his only weak spot. He burrows again and more hands appear, so repeat.",
          collect: ["shadow-temple-hover-boots-chest"],
          tip: "Once selected, the Hover Boots go in the same quick slot the Iron Boots use. They let you float off a ledge for a moment, but they slide like ice, so take them off for normal walking and fighting." },
        { id: "c12-s02-04", text: "Back in the bird statue room, switch on the Lenses so only the real skull column shows. Pull the statue by its handhold until the beak points at that column on the northwest wall, and the east door opens. Cross the pit with the **Hover Boots** to the platform beyond. In the Beamos room, the Lenses show that the north and south walls are fake. Go through the south one. The room seals you in: burn the 2 Gibdos with **Din's Fire** or freeze them with the **Sun's Song**, then open the big chest for the **Compass**.",
          collect: ["shadow-temple-compass-chest"],
          tip: "Jumping is manual, so make the leap over the pit yourself." },
        { id: "c12-s02-05", text: "Go through the north fake wall in the Beamos room. 2 robed statues spin big scythes here. Collect the 5 silver Rupees: one you reach by following a scythe as it passes, one on a thin wooden barrier to the northeast, one in the north alcove, one on another wooden barrier on a high ledge with a Longshot target, and one in the west alcove that you reach by timing a leap down. An area opens on the far side with a **Small Key**.",
          collect: ["shadow-temple-early-silver-rupee-chest"],
          warn: "In the north alcove, take the Rupee but do not walk on past the plaque. An invisible hole there drops you to the lowest floor, which is a dead end for now." }
      ]
    },
    {
      id: "c12-s03", title: "Shadow Temple: The Huge Pit", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s03-01", text: "Blow open the cracked wall in the Beamos room with a Bomb and unlock the door behind it with the Small Key. Follow the long, twisting corridor. Skulltulas drop from the ceiling, so watch for drool on the floor. Near the end, drop down, get past the guillotines and ride the lift down. In the big cavern, time your jumps past the falling guillotines to the first large platform, where a **Stalfos** ambushes you. Let him swing first, then strike. Take the left (east) route: the gap looks too wide for the Hover Boots, but the Lenses show an invisible platform halfway across. Before the east door, a **Business Scrub** hides in an alcove to the north. He sells emergency supplies, including magic and a Green Potion.",
          collect: [] },
        { id: "c12-s03-02", text: "In the room with the invisible spinning scythe, keep the Lenses on. The far door stays sealed until every enemy is dead: shoot the Fire Keese with arrows, dash past the scythe as it passes, and beat the Like Like. Then take the 2 small chests, one of them invisible, which each hold a Red Rupee (20 Rupees), and the **Gold Skulltula** on the far wall.",
          collect: ["shadow-temple-invisible-blades-visible-chest", "shadow-temple-invisible-blades-invisible-chest", "shadow-temple-gs-invisible-blades-room"],
          warn: "The Like Like steals your **Hylian Shield**. If it does, stun it with the Longshot and cut it to get the shield back. Keep well clear of it while you deal with the Keese." },
        { id: "c12-s03-03", text: "Back in the cavern, take the right (west) route over the 3 big platforms that rise and fall. Wait for each one to reach full height before you move on. Below, a Beamos and 2 spinning spike traps guard 5 silver Rupees: one you step off the raised platform to reach (bomb the Beamos), one across a gap from the south scaffolding (Hover Boots), one you drop to as a spike trap passes, one just past the sealed door among the circling spikes, and one on an invisible platform at the north edge above the chasm with the 2 rat statues. They open the west door. In the room with 2 big falling spike traps, the Lenses show a hidden hole to the right of the traps with a stone block. Pull the block all the way out until it drops into a recess. Then push it from behind under the traps, bit by bit, until it sticks out between them. Take the small chest through the gap around the bars on the south side (a Red Rupee, 20 Rupees). Pull the block west to stay covered past the second trap, climb it to the ledge, and cross along the top of the falling trap to the second small chest, which holds a **Small Key**. The **Gold Skulltula** is on a high ledge in the northeast corner. Ride the 2 falling spike traps up like lifts to reach it.",
          collect: ["shadow-temple-falling-spikes-lower-chest", "shadow-temple-gs-falling-spikes-room", "shadow-temple-falling-spikes-upper-chest", "shadow-temple-falling-spikes-switch-chest"],
          check: "IGN lists only 2 chests in this room (a Red Rupee and the Small Key) and no floor switch. If you find no third chest after you have both, skip the extra chest tick for this room." },
        { id: "c12-s03-04", text: "Go back to the silver Rupee area and head north to the 2 rat statues. With the Lenses on, you can see a wooden platform moving between the statues, below the floating platform. Drop onto it and ride it to the locked door. Inside, 2 ReDeads wait in opposite corners: freeze them with the **Sun's Song** and defeat them. Then collect the 5 silver Rupees. One is in the middle. The rest are up high, each under a hidden Longshot target: floating in the southwest, in the northeast, and on a high invisible ledge in the northwest (jump off the side to come back down). They open the west door.",
          collect: ["shadow-temple-invisible-spikes-chest"],
          tip: "Invisible spike traps cover the floor, so keep the Lenses on while you fight.",
          check: "No source lists a chest in this room, only the ReDeads and the silver Rupees. Look for a chest with 5 Rupees after the ReDeads fall; if there is none, skip this room's chest tick." },
        { id: "c12-s03-05", text: "In the giant skull room, clear the Keese, then throw a Bomb into the skull to break it. Take the **Small Key** it held.",
          collect: ["shadow-temple-freestanding-key"],
          tip: "This room has no Gold Skulltula. The temple's third token is in the fan corridor, in the next section, and the fifth is in the invisible maze." }
      ]
    },
    {
      id: "c12-s04", title: "Shadow Temple: Wind, Boat and Boss Key", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s04-01", text: "Back in the invisible spikes room, Longshot to the northwest platform and float along the north ledge in the **Hover Boots** to the locked door. In the fan corridor, wear the **Iron Boots** so the wind cannot push you back. Swap to the Hover Boots to dash across the gap between gusts, then back to the Iron Boots. Once across, look back the way you came and Longshot the **Gold Skulltula** just below the ledge. Cross the lower fan hallway in the Iron Boots too. The door at the far end seals you in with 2 ReDeads: freeze them with the **Sun's Song** and finish them with a charged Spin Attack. The Lenses show an invisible small chest in a corner. It holds a Business Scrub Seed, which calls a Business Scrub who sells supplies, so you can skip it.",
          collect: ["shadow-temple-wind-hint-chest", "shadow-temple-gs-single-giant-pot"] },
        { id: "c12-s04-02", text: "Of the fans, one blows toward nothing: the Lenses show a hidden path there. Put on the Hover Boots, wait for the fan, and run with the wind across the gap. In the next room, 2 Gibdos roam among moving spike traps. Freeze them with the **Sun's Song** and defeat them. A small chest to the west holds only a Green Rupee. Bomb the cracked east wall and open the invisible chest beyond for a **Small Key**.",
          collect: ["shadow-temple-after-wind-enemy-chest", "shadow-temple-after-wind-hidden-chest"] },
        { id: "c12-s04-03", text: "In the boat room, pull the stone block on the left out toward the far wooden platforms to open a shortcut lift up to the upper floor. On the high ledge to the west, above the shortcut lift, a gust of straw marks a Pierre spot. Play the **Scarecrow's Song**, Longshot to Pierre and take the **Gold Skulltula** there. If you need supplies, cast **Farore's Wind** on the walkway to mark the spot, warp out to restock, then cast it again to come back.",
          collect: ["shadow-temple-gs-near-ship"] },
        { id: "c12-s04-04", text: "Play **Zelda's Lullaby** on the Triforce on the deck to set sail, and fight off or block the 2 Stalfos that land, one after the other. When the boat reaches the far shore it crashes and starts to sink into the mist, so jump off onto the shore.",
          collect: [],
          tip: "Jumping is manual, so make the leap off the boat yourself." },
        { id: "c12-s04-05", text: "Off the boat, bomb the cracked base of the standing bird statue so it topples across the gap as a bridge. The south door leads toward the boss, so go west first. Burn the webs on the door with **Din's Fire** or a Fire Arrow. Inside is a maze of invisible walls (keep the Lenses on) with Floormasters that split when you hit them; Din's Fire or a Spin Attack handles the pieces. Of the 3 doors, the north one is locked. Take the south door first: an invisible Floormaster guards a chest with a **Small Key**. Before you use the key, go through the west door and bomb all 3 skull pots: one of them drops the **Gold Skulltula** and some Rupees.",
          collect: ["shadow-temple-invisible-floormaster-chest", "shadow-temple-gs-triple-giant-pot"] },
        { id: "c12-s04-06", text: "Unlock the north door with the Small Key. The spiked walls close in on you, so burn the cobwebs on them with **Din's Fire**. That opens 2 alcoves, each with a ReDead in front of a chest. Deal with the ReDeads, then open the chests: one holds a Large Magic Jar, and the big blue one holds the **Boss Key**.",
          collect: ["shadow-temple-spike-walls-left-chest", "shadow-temple-boss-key-chest"],
          check: "One walkthrough says Fire Arrows burn these walls too. Use Din's Fire to be safe." }
      ]
    },
    {
      id: "c12-s05", title: "Bongo Bongo", era: "adult", kind: "boss",
      steps: [
        { id: "c12-s05-01", text: "Head back to the bird statues and cross the statue bridge. Go through the south door, then cross the pit on the invisible platforms the Lenses show, using the Hover Boots, to the boss door.",
          collect: [],
          tip: "Take a running start on the Hover Boots. Jumping is manual, so make the leaps yourself. Before the south door, climb the fallen statue: a gust of straw on a high ledge over the west wall marks a Pierre spot. Play the Scarecrow's Song and Longshot over; one of the pots there holds a Fairy." },
        { id: "c12-s05-02", text: "Drop onto the drum and defeat Bongo Bongo (see the boss card). Take the **Heart Container**, and Impa gives you the **Shadow Medallion** after the blue warp.",
          collect: ["bongo-bongo", "shadow-temple-bongo-bongo-heart"],
          tip: "Bring fairies. Keep the Hover Boots on while he drums to stop the bounce, and take them off when he is stunned or you need to run. Switch on the Lenses to see his body and eye. Biggoron's Sword suits this fight, since you do not need a shield. Take the Heart Container before the blue warp.",
          check: "One source says a well-timed jump also dodges the drum launch. One source says Heart Containers are now taken with the action button; if it does not collect on touch, press it before the blue warp." }
      ]
    }
  ],
  boss: {
    id: "boss-bongo-bongo", name: "Phantom Shadow Beast Bongo Bongo",
    weakness: "Its single eye, shot after both hands are stunned",
    strategy: [
      "Bongo Bongo's body is invisible; keep the Lenses of Truth on to see it.",
      "Its drumming bounces you around the drum and can throw you into the poison. The Hover Boots stop the bouncing.",
      "Stun each hand with the Fairy Bow, the Longshot or the sword when it stops glowing. A clenched fist cannot be stunned.",
      "With both hands stunned it comes at you; shoot its open eye, then run in and slash it while it is down. Biggoron's Sword ends the fight faster."
    ]
  }
});

/* ------------------------------------------------------------------ c13 */
OOT.walkthrough.push({
  id: "c13-spirit-temple", num: 13, title: "Desert Colossus & the Spirit Temple", era: "both",
  summary: "Free the carpenters for the Gerudo Pass, cross the Mirage Desert to the Desert Colossus, and clear the Spirit Temple in 2 halves: the Silver Gauntlets as a child, then the Mirror Shield and Twinrova as an adult. The Gerudo Proving Grounds and its Ice Arrows close the chapter.",
  needs: ["Longshot", "Hover Boots", "Lenses of Truth", "Megaton Hammer", "Fairy Bow", "Epona", "Iron Boots", "Zora Tunic", "Din's Fire or Fire Arrows", "Zelda's Lullaby", "Song of Time", "Prelude of Light", "Boomerang", "Bombs and Bombchus", "Deku Sticks", "Bottle with Bugs", "Sun's Song", "Magic Bean (bought in chapter 11)", "Goron Tunic", "Scarecrow's Song"],
  gains: ["Gerudo Pass", "Requiem of Spirit", "Nayru's Love", "Silver Gauntlets", "Mirror Shield", "Spirit Medallion", "Ice Arrows", "Quiver (50)", "Heart Container", "3 Pieces of Heart", "11 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c13-s01", title: "Gerudo Valley and Gerudo's Fortress", era: "adult", kind: "overworld",
      steps: [
        { id: "c13-s01-01", text: "In **Gerudo Valley**, jump the broken bridge on **Epona**. Past the bridge, turn left to the row of rocks, smash them with the **Megaton Hammer** and open the chest behind for 50 Rupees.",
          collect: ["gv-chest"],
          check: "No remake source mentions a chest behind the Hammer rocks; one walkthrough says they open a tunnel toward the fortress. If there is no chest, skip this tick. The Song of Storms cave behind the carpenters' tent has 2 chests (one invisible)." },
        { id: "c13-s01-02", text: "At **Gerudo's Fortress**, stun or slip past the nearest guard and take the door on the left. Talk to the carpenter in the cell, beat the Gerudo Thief who jumps in, and use her **Small Key** to open his cell.",
          collect: ["hideout-1-torch-jail-gerudo-key"],
          tip: "Any guard who spots you throws you into a cell; escape by Hookshotting the grate overhead. Each cell fighter drops a key. Block the thief's slashes with your shield and strike after she swings or spins. The free camera, the dash and the jump make the sneaking easier.",
          check: "One walkthrough reaches this carpenter by climbing down a vine-covered ledge and going through a doorway hung with red tassels into the cell hall. If the door on the left does not lead to a cell, look for that doorway." },
        { id: "c13-s01-03", text: "Go out the next door to the hall beyond, shoot the guard and climb the ledge to the door. Beat the thief and free the second carpenter.",
          collect: ["hideout-2-torches-jail-gerudo-key"],
          check: "One walkthrough takes a longer way: through a barred doorway and a dark passage, across a sunlit courtyard and up the stairs, past a guard by the crates, down a hole in the floor, then over a rooftop and down into the cell hall. If the ledge route does not reach a cell, try that one." },
        { id: "c13-s01-04", text: "Back outside, climb down the vines and take the only door on that level. Beat the thief there and free the third carpenter.",
          collect: ["hideout-4-torches-jail-gerudo-key"],
          check: "One walkthrough uses a ladder here instead of vines: from the cell hall, climb the ladder, cross the sunlit rooftop and drop into the next hall. Look for a ladder if there are no vines." },
        { id: "c13-s01-05", text: "Climb back up the vines and take the left door; shoot the 2 guards below with arrows. Come out, drop into the walled-off area with a single door, shoot its guard from behind the crate, and beat the last thief to free the fourth carpenter. With all 4 free, a Gerudo gives you the **Gerudo Pass**, and the guards let you move freely.",
          collect: ["hideout-3-torches-jail-gerudo-key", "hideout-gerudo-membership-card"],
          tip: "The Gerudo Pass opens the way to the Mirage Desert, the Gerudo Proving Grounds and the archery range.",
          check: "One walkthrough reaches the last carpenter another way: past a barred door, up a ladder, across the rooftop by the carts, down the stairs past a guard to the courtyard and red gate, then through a dark, torch-lit hall. Use that route if this one does not match." }
      ]
    },
    {
      id: "c13-s02", title: "Gerudo's Fortress Extras", era: "adult", kind: "sweep",
      steps: [
        { id: "c13-s02-01", text: "Climb to the top of the fortress: from the northern rooftops head south, climb the crumbling slope to the highest south-east roofs, then double back north. At the gap too wide to cross, play the **Scarecrow's Song** to call **Pierre** and Longshot to him. The chest just to the left holds a **Piece of Heart**.",
          collect: ["gf-chest"],
          tip: "You make the Scarecrow's Song as a child, by playing your own tune for the scarecrow at Lake Hylia, and play it back to him as an adult." },
        { id: "c13-s02-02", text: "Play the **Sun's Song** to bring night, then go to the fortress entrance high in the north-east with the red fabric and Longshot the Gold Skulltula on the high wall to the right of the doorway.",
          collect: ["gf-gs-top-floor"], time: "night",
          tip: "Time keeps running, so night can end while you are here; play the Sun's Song to bring it back.",
          check: "Sources differ on this token. One puts it on the high wall right of the red-fabric doorway in the north-east; another puts it on the wall of a rooftop tower, reached by the ladder beside the stairs, across the rooftops and up the next ladder. Try the doorway first, then the tower." },
        { id: "c13-s02-03", text: "Still at night, ride Epona along the archery range course to the top north-east corner and Longshot the Gold Skulltula on the back of the large high target.",
          collect: ["gf-gs-archery-range"], time: "night",
          check: "One walkthrough puts this token on a target pole near the fence, shot on foot with the Longshot after the Sun's Song. If the back of the north-east target is empty, check the poles along the fence." },
        { id: "c13-s02-04", text: "Play the **Sun's Song** again to bring day, then ride Epona to the range, talk to the woman in white while mounted and pay 30 Rupees for a run of 20 arrows. Score over 750 points for a **Piece of Heart**, then play again and score 1,400 for the **Biggest Quiver** (50 arrows).",
          collect: ["gf-hba-1000-points", "gf-hba-1500-points"], time: "day",
          tip: "One source suggests shooting all the pots first, then the big middle target on the way back." }
      ]
    },
    {
      id: "c13-s03", title: "Across the Mirage Desert", era: "adult", kind: "overworld",
      steps: [
        { id: "c13-s03-01", text: "Climb up to the guard in white northwest of the fortress (on the map) so she opens the gate into the **Mirage Desert**, which this version calls the Mirage Desert. Jump onto the box, Longshot over the river of sand, and follow the flags.",
          collect: [],
          tip: "Enemies burst out of the sand on the way; strike them and keep moving. One walkthrough keeps the **Lenses of Truth** on for the whole crossing.",
          check: "No remake source mentions the box or the river of sand; one walkthrough just follows the flags on tall poles. If there is no river, keep to the flags. The carpet merchant who sold Bombchus is in no remake source either; skip him if he is gone." },
        { id: "c13-s03-02", text: "Follow the markers to the stone building halfway across, take the ladder down into the red-lit room and Longshot the Gold Skulltula on the wall above the torch. One torch is already lit: shoot an arrow through it at the unlit torch, or cast Din's Fire, and a chest appears with a **Business Scrub Seed**, an item that calls a wandering Business Scrub who sells things.",
          collect: ["wasteland-gs", "wasteland-chest"] },
        { id: "c13-s03-03", text: "At the stone sign inside the building, look through the **Lenses of Truth** to see the Phantom Guide, a ghost with a lantern, and follow it through the storm to the **Desert Colossus**. Sheik waits at a sandstone gateway past the palm trees and teaches you the **Requiem of Spirit**.",
          collect: ["sheik-at-colossus"],
          tip: "Inside the temple, the way on is a gap only a child fits through, so the next sections come back as a child. The Lenses can sit on a quick-swap shortcut, so you can switch them on without the menu." },
        { id: "c13-s03-04", text: "Follow the north wall (on the map) of the Colossus to 2 palm trees and a cracked wall. Break it open with a Bomb or the **Megaton Hammer**, enter the fountain, pay the Great Fairy's 300-Rupee donation and play **Zelda's Lullaby** on the Triforce for **Nayru's Love**.",
          collect: ["colossus-great-fairy-reward"],
          tip: "Each fountain has its own price: the others cost 25, 50, 100 and 200 Rupees, and the one outside Ganondorf's Castle costs 500." },
        { id: "c13-s03-05", text: "At night, Longshot the Gold Skulltula on the rocky cliff wall north of the Spirit Temple entrance. The Colossus has 3 tokens in all: this one, one from the soft soil by the temple (as a child, next section), and one on a rock pillar you reach by riding the bean plant, which you take in the Adult Colossus Bean Ride section.",
          collect: ["colossus-gs-tree"], time: "night" }
      ]
    },
    {
      id: "c13-s04", title: "Spirit Temple: The Child's Path", era: "child", kind: "dungeon",
      steps: [
        { id: "c13-s04-01", text: "Warp to the **Temple of Time** with the Prelude of Light, become a child and warp back with the **Requiem of Spirit**. Bring a **Bug** in a bottle (the Graveyard grass and the Lake Hylia shore both have them). Release it on the soft soil in the corner by the temple wall for a Gold Skulltula, then plant a **Magic Bean** there.",
          collect: ["colossus-gs-bean-patch", "bean-desert-colossus"],
          tip: "Bring the Hylian Shield: fire burns the Deku Shield." },
        { id: "c13-s04-02", text: "Talk to Nabooru at the crawl hole and crawl through. In the first room, deal with the Armos (bomb it) to open both doors and take the left one; past the Stalfos and the big Green Bubble, curve the **Boomerang** to the left to hit the crystal switch across the gap, and open the chest by the lowered bridge for a **Deku Shield**.",
          collect: ["spirit-temple-child-bridge-chest"],
          warn: "Flames in the torch-lit rooms burn a Deku Shield. Carry the Hylian Shield.",
          check: "One walkthrough describes this stretch differently: a round hall with a guardian statue by a brazier, then a room of green Rupees and armored Stalfos, with no Armos, crystal switch or Deku Shield chest. If there is no bridge chest, skip that tick." },
        { id: "c13-s04-03", text: "Lure the Anubis next to the far door, then shoot the crystal switch with the **Fairy Slingshot** to light the fire there (or cast Din's Fire). Gather the 5 silver pickups in the next room, throw the Boomerang at the Gold Skulltula behind the fence, then again to pull in its token, and carry a lit Deku Stick across the bridge to light the 2 torches for a chest with a **Small Key**.",
          collect: ["spirit-temple-gs-metal-fence", "spirit-temple-child-early-torches-chest"],
          check: "One walkthrough describes this part differently: Din's Fire on a totem torch lifts a purple barrier, the next room has green Rupees (no gate opens), the Gold Skulltula is on a mesh wall beside a grate floor, and the key chest sits between 2 braziers. Follow whichever matches." },
        { id: "c13-s04-04", text: "Back in the first room, crawl through the hole in the north wall (on the map) and unlock the door. Defeat the 2 Skullwalltulas and climb. Turn around and throw the Boomerang at the Gold Skulltula below, then again to pull in its token; shoot the crystal switch on the south tier for 2 chests, and blow open the cracked wall where light leaks in with a **Bombchu**.",
          collect: ["spirit-temple-gs-sun-on-floor-room", "spirit-temple-child-climb-north-chest", "spirit-temple-child-climb-east-chest"],
          tip: "A green Lizalfos attacks here: block, then strike when it pauses.",
          check: "One walkthrough describes this climb differently: a mesh corridor up to 2F, one green Lizalfos, wall targets for the Slingshot, then chests with 5 Bombchus and the **Dungeon Map** (in a hall with a glowing pool between 2 torches). Its Gold Skulltula here is struck with the sword in a dark carved corridor after a rolling-boulder hall." }
      ]
    },
    {
      id: "c13-s05", title: "Spirit Temple: The Silver Gauntlets", era: "child", kind: "dungeon",
      steps: [
        { id: "c13-s05-01", text: "In the great statue room, push the Armos off the ledge onto the switch below to hold the door open, then climb the stairs. In the next room, bomb the 3 Beamos, gather the 5 silver pickups so the golden torch lights, and carry its flame to every other torch with a Deku Stick for a **Small Key**; then pull the blocks until the sun-face block sits in the light.",
          collect: ["spirit-temple-sun-block-room-chest"],
          check: "One walkthrough has a simpler room: drag a block clear of the doorway, push the block with the sun emblem into the light from the ceiling, and a wall opens to a barred room whose chest holds the Small Key. No source mentions the Armos, the Beamos, the silver pickups or the torch relay." },
        { id: "c13-s05-02", text: "In the stair corridor beyond, turn around and throw the **Boomerang** at the Gold Skulltula above the door you came through, then again to pull in its token.",
          collect: ["spirit-temple-gs-hall-after-sun-block-room"],
          check: "One walkthrough puts this token on the ceiling of the stone passage above the red-carpet stairs, just after the key chest. Look up there if it is not above the door." },
        { id: "c13-s05-03", text: "Unlock the large door at the end of the passage with the **Small Key**. Defeat the **Iron Knuckle** beyond, then go out through the far end; the chest on the ledge outside holds the **Silver Gauntlets**. Twinrova then carry Nabooru off.",
          collect: ["spirit-temple-silver-gauntlets-chest"],
          tip: "Let it swing, step back, then strike. One walkthrough throws Bombs as it walks in. It drops hearts when hit.",
          check: "One source says shields can now block Iron Knuckle axe swings; another does not mention it. The plan still works: avoid trading hits and strike after a swing." }
      ]
    },
    {
      id: "c13-s06", title: "Spirit Temple: The Adult's Path", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s06-01", text: "Return to adulthood and warp back. With the **Silver Gauntlets**, push the huge silver block into its hole, then Longshot the ceiling crystal in the Beamos room to unlock both doors. Behind the left door, defeat the Wolfos, play **Zelda's Lullaby** on the Triforce and Longshot to the chest that appears for the **Compass**.",
          collect: ["spirit-temple-compass-chest"],
          check: "One walkthrough describes the adult start differently: up a staircase past a sealed door on the left to a round mosaic room with enemies, then Zelda's Lullaby on a red Triforce carpet, with the Compass chest just past it. No source mentions the silver block, the Beamos crystal or the Wolfos." },
        { id: "c13-s06-02", text: "Behind the right door, dodge the rolling boulders and gather the 5 silver pickups (the middle one by dropping on the Hover Boots from above). Play the **Song of Time** to move the block in one alcove for a Gold Skulltula, then defeat the Like Like in the next room for a chest with a **Small Key**.",
          collect: ["spirit-temple-gs-boulder-room", "spirit-temple-early-adult-right-chest"],
          check: "One walkthrough adds Song of Time blocks in the boulder halls (play it at each blue block to pass), opens the Gold Skulltula's alcove behind a blue door, and has a spiked plant, not a Like Like, guarding the key chest. No source mentions the silver pickups." },
        { id: "c13-s06-03", text: "Unlock the Beamos room's locked door and climb the grooved wall. Beat the invisible Floormaster with the Lenses, then push the mirror to shine light on the sun faces; the first 2 drop chests and the third opens the door.",
          collect: ["spirit-temple-first-mirror-left-chest", "spirit-temple-first-mirror-right-chest"],
          check: "One walkthrough has a round hall here where you turn a lamp until its beam hits a sun emblem, for a chest of 5 Bombs, then an armored enemy. No source mentions the climbing wall, the Floormaster or the 2 mirror chests." },
        { id: "c13-s06-04", text: "In the statue room, float on the Hover Boots to the statue's near hand and play **Zelda's Lullaby** on its Triforce; Longshot to the other hand for a chest with a **Small Key**. Then go to the upper west corner of the 3F statue room, play the **Scarecrow's Song** to call Pierre, and Longshot to him for a Gold Skulltula.",
          collect: ["spirit-temple-statue-room-hand-chest", "spirit-temple-gs-lobby"],
          check: "One walkthrough plays Zelda's Lullaby in front of the giant hand and finds the key chest close by, then plays the Scarecrow's Song by a torch on the stairs above to make a Longshot perch to the token's niche. No source names the Hover Boots here." },
        { id: "c13-s06-05", text: "On the floor of the statue room, light the 2 torches with Din's Fire or Fire Arrows for the **Dungeon Map**. Longshot across to the other Lullaby chest at the top of the southeast corner (on the map, 5 Rupees) and hammer the rusted switch to open the barred middle door.",
          collect: ["spirit-temple-map-chest", "spirit-temple-statue-room-northeast-chest"],
          check: "One walkthrough puts the Dungeon Map on the child side, in a chest in a hall with a glowing pool between 2 torches. If you already have it, skip that tick here. No source mentions the 5-Rupee chest or the rusted switch." }
      ]
    },
    {
      id: "c13-s07", title: "Spirit Temple: Mirror Shield and Boss Key", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s07-01", text: "Unlock the door at the top of the southeast corner (on the map) and climb the Beamos stairs. Burn the 3 Anubis with **Din's Fire** or **Fire Arrows**, then in the 4-Armos room shoot an Armos on the far side so it hops onto the center switch and run through the door; the Lenses show 2 invisible chests in the hallway.",
          collect: ["spirit-temple-hallway-left-invisible-chest", "spirit-temple-hallway-right-invisible-chest"],
          check: "One walkthrough describes a 3F hall of hexagon platforms where you light torches with Fire Arrows, then Megaton Hammer switches, with no Anubis, Armos or invisible chests. Look for the 2 invisible chests with the Lenses, and skip the ticks if there are none." },
        { id: "c13-s07-02", text: "Defeat the Iron Knuckle on the throne, go through the door behind it and step on the floor switch. On the statue's left hand, the big chest gives you the **Mirror Shield**.",
          collect: ["spirit-temple-mirror-shield-chest"],
          check: "One walkthrough has no throne or floor switch here: the door past the Iron Knuckle leads outside, and the chest sits at the top of a short stair." },
        { id: "c13-s07-03", text: "Return to the 4-Armos room and take its other door. Reflect sunlight with the **Mirror Shield** onto the sun face to open the chest with a **Small Key**.",
          collect: ["spirit-temple-near-four-armos-chest"] },
        { id: "c13-s07-04", text: "Unlock the door in the Anubis room, defeat the Beamos and climb the moving wall, then play **Zelda's Lullaby** to open the barred door. In the Boss Key room, bomb the fake door left of the burning chest, shoot the gold eye switch behind it to make an ice platform, Longshot up and step on the switch to put out the flames for the **Boss Key**.",
          collect: ["spirit-temple-boss-key-chest"],
          check: "One walkthrough does this differently: ride a cage platform and hold the Mirror Shield to a sun face until its mouth opens, play Zelda's Lullaby on the Triforce rug, then shoot the eye switch above a door with an arrow. The Boss Key is in an ornate chest past a fire column. Follow whichever matches." },
        { id: "c13-s07-05", text: "Hit the crystal switch in the mirror area to open the door, deal with the Lizalfos, and shine light on the sun face above the arch for a small chest with Bombs.",
          collect: ["spirit-temple-topmost-chest"],
          check: "One walkthrough reaches this 5-Bomb chest before the Boss Key, by bouncing light into its room with the Mirror Shield. If you already have it, skip the tick." },
        { id: "c13-s07-06", text: "Blow open the odd west wall (on the map) with a Bomb and turn the mirrors so the beam reaches the round mirror, then drop down and reflect it onto the sun face to lower the platform into the statue room. Shine the light on the statue's face to shatter it, Longshot the bars to the boss door, and beat the Iron Knuckle that blocks the way.",
          collect: [],
          tip: "The final Iron Knuckle is Nabooru under Twinrova's spell. One walkthrough fights it with the Biggoron's Sword: dodge each swing and strike as it recovers.",
          check: "One walkthrough has a simpler end: open the golden door with the Boss Key, fight the Nabooru knight there, then walk the red carpet to Twinrova. No source mentions the west wall, the mirrors or shattering the statue." }
      ]
    },
    {
      id: "c13-s08", title: "Twinrova", era: "adult", kind: "boss",
      steps: [
        { id: "c13-s08-01", text: "Defeat Twinrova with the **Mirror Shield** (see the boss card). The **Heart Container** appears on the floor where she fell; take it when the Take prompt shows, before you step into the blue warp. After the warp, Nabooru gives you the **Spirit Medallion**.",
          collect: ["twinrova", "spirit-temple-twinrova-heart"],
          tip: "Take the Heart Container before the blue warp." }
      ]
    },
    {
      id: "c13-s09", title: "Adult Colossus Bean Ride", era: "adult", kind: "sweep",
      steps: [
        { id: "c13-s09-01", text: "Warp to the **Desert Colossus** with the **Requiem of Spirit**, and play the **Sun's Song** if it is day. Ready the **Fairy Bow** and step onto the leaf of the bean plant you planted as a child by the temple. Early in the ride it passes a flat rock pillar: Longshot the Gold Skulltula on its top edge. Stay on the leaf as it passes under a large stone arch and over a red rock ridge to a ledge, then step off for a **Piece of Heart**.",
          collect: ["colossus-freestanding-poh", "colossus-gs-hill"],
          time: "night" }
      ]
    },
    {
      id: "c13-s10", title: "Gerudo Proving Grounds: First Rooms", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s10-01", text: "Warp to the **Temple of Time** with the **Prelude of Light** and ride Epona through **Hyrule Field** and **Gerudo Valley** back to **Gerudo's Fortress**. With the Gerudo Pass in hand, go to the wooden gate at the end of the fortress street and pay the attendant 30 Rupees to enter the **Gerudo Proving Grounds**. You can leave and come back, but each new visit costs 30 Rupees again. In the lobby, shoot the switch above the doorway with an arrow to reach the chests (5 Rupees and arrows).",
          collect: ["gerudo-training-ground-lobby-left-chest", "gerudo-training-ground-lobby-right-chest"],
          check: "One walkthrough shows only 1 chest here, a Blue Rupee (5 Rupees) beside the sign at the foot of the stairs. It opens the way on the way out, by shooting the switch above a dark doorway in the hall with red curtains. If there is no second chest with arrows, that is expected." },
        { id: "c13-s10-02", text: "From the lobby, go up the stairs and through the lion-faced doorway into the sandy arena. Defeat the Stalfos and the armoured warriors with them. When they are all down, a purple door opens and a chest on the far platform gives you a **Small Key**.",
          collect: ["gerudo-training-ground-stalfos-chest"] },
        { id: "c13-s10-03", text: "In the next room, gather the 5 silver pickups before the timer runs out while dodging the boulders and the invisible fire walls. Longshot the ceiling target to take the last silver pickup and again to pass the flames.",
          collect: [],
          check: "One walkthrough shows this as halls of rolling boulders with no silver pickups and no timer. You Longshot crystal targets to get past the gated parts, and the last target takes you to an ornate door with no lock. If there are no silver pickups, just follow the Longshot targets." },
        { id: "c13-s10-04", text: "In the Wolfos room, defeat all the Wolfos to drop the purple barrier. The chest in the next room holds 5 Rupees. Past the heavy stone door marked with the Gerudo emblem, shoot the switch above the barred gate with an arrow to lift it.",
          collect: ["gerudo-training-ground-before-heavy-block-chest"],
          check: "An older version of this guide had a hidden ledge above a fake door here, shown by the Lenses of Truth, with a switch that opens sealed doors. No walkthrough mentions it. If a door will not open, look for it with the Lenses." },
        { id: "c13-s10-05", text: "Push the silver block into its hole with the **Silver Gauntlets**, then in the next room defeat the 3 Like Likes to make the chests appear. Take the 2 front chests (5 Rupees and 200 Rupees) and the invisible chest in the last sandy hole, which holds a **Small Key**.",
          collect: ["gerudo-training-ground-heavy-block-first-chest", "gerudo-training-ground-heavy-block-second-chest", "gerudo-training-ground-heavy-block-third-chest", "gerudo-training-ground-heavy-block-fourth-chest"],
          warn: "The Like Likes swallow tunics and shields. Defeat them before leaving.",
          check: "This room is not confirmed for the remake. One walkthrough reaches the chests here past snapping plants (5 Bombs, a Business Scrub Seed, and one on a raised ledge behind a withered plant mound) and never mentions the silver block, Like Likes or a 200-Rupee chest. IGN says you can skip the Silver Gauntlets puzzles and still get the Ice Arrows, so take whatever chests you find." }
      ]
    },
    {
      id: "c13-s11", title: "Gerudo Proving Grounds: Statue, Hammer, Lava and Water", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s11-01", text: "In the eye statue room, ride the spinning outer platform and shoot each of the statue's eyes. Longshot to the small chest that appears for a **Small Key**.",
          collect: ["gerudo-training-ground-eye-statue-chest"],
          check: "One walkthrough agrees on the shooting: shoot the glowing eye of the central stone with the **Fairy Bow** several times until the lava drains and the Small Key is yours. It does not mention a spinning platform or the Longshot, so use whatever reaches the key.",
          warn: "Wear the **Goron Tunic** in the lava rooms. One walkthrough says the heat drains your hearts without it." },
        { id: "c13-s11-02", text: "At the circular ledge, play the **Scarecrow's Song** to call Pierre, then Longshot to him across the lava. Open the door beyond and follow the cage-lined corridor to a small chest with a **Small Key**.",
          collect: ["gerudo-training-ground-near-scarecrow-chest"] },
        { id: "c13-s11-03", text: "In the hammer room, defeat the Fire Keese and Torch Slugs for a small chest of arrows. Hammer the statues; the northeast one (on the map) hides a switch that briefly stops the fire around the middle chest with a **Small Key**.",
          collect: ["gerudo-training-ground-hammer-room-clear-chest", "gerudo-training-ground-hammer-room-switch-chest"],
          check: "One walkthrough solves this room differently: smash the statue blocks with the **Megaton Hammer**, then shoot the eye switches on the walls with the **Fairy Bow**. The Small Key chest rises from the hexagon pedestal in the middle, and the arrows are in a chest on a rug by the wall. It does not mention Fire Keese, Torch Slugs or a ring of fire." },
        { id: "c13-s11-04", text: "In the lava room, Longshot to the target overhead and gather the silver pickups with the Hover Boots. Play the **Song of Time** to raise 2 blocks, then climb through to the right side of the central maze for a **Small Key** and 2 chests (Bombchus and arrows).",
          collect: ["gerudo-training-ground-freestanding-key", "gerudo-training-ground-maze-right-central-chest", "gerudo-training-ground-maze-right-side-chest"],
          check: "One walkthrough has no silver pickups here. Play the Song of Time on the ledge to make blue blocks over the lava, and cross them with the Longshot on the crystal targets. The corridor beyond has a chest with the Small Key and caged chests with 5 Bombchus and arrows." },
        { id: "c13-s11-05", text: "Through the east door (on the map), play the Song of Time to clear the blocks, then dive in with the **Iron Boots** and **Zora Tunic**. Longshot the 4 Shell Blades, avoid the blade trap on the floor and gather the 5 silver pickups for a chest with a **Small Key**.",
          collect: ["gerudo-training-ground-underwater-silver-rupee-chest"],
          check: "One walkthrough needs only the Zora Tunic here: play the **Song of Time** beside the square hole so the block sinks, then dive and swim the underwater passage to the Small Key. It does not mention Iron Boots, Shell Blades or silver pickups. Put the **Goron Tunic** back on before you return to the lava." },
        { id: "c13-s11-06", text: "Take the stone door at the end of the long corridor into an arena ringed by fire. Defeat the green **Lizalfos**, one at a time if you can. When the last one falls, a chest with a **Small Key** appears on the central platform.",
          collect: ["gerudo-training-ground-beamos-chest"] }
      ]
    },
    {
      id: "c13-s12", title: "Gerudo Proving Grounds: The Central Maze", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s12-01", text: "Enter the central maze from the lobby. Behind the first door on the left, use the Lenses on the ceiling to the left and climb the grate to a hidden chest with a **Small Key**.",
          collect: ["gerudo-training-ground-hidden-ceiling-chest"] },
        { id: "c13-s12-02", text: "Unlock the maze doors one after another. The chests along the way hold 50 Rupees, 20 Rupees and arrows.",
          collect: ["gerudo-training-ground-maze-path-first-chest", "gerudo-training-ground-maze-path-second-chest", "gerudo-training-ground-maze-path-third-chest"] },
        { id: "c13-s12-03", text: "Open the last door to the center of the maze and the big chest with the **Ice Arrows**.",
          collect: ["gerudo-training-ground-maze-path-final-chest"] }
      ]
    }
  ],
  boss: {
    id: "boss-twinrova", name: "Sorceress Sisters Twinrova",
    weakness: "Their own magic, turned with the Mirror Shield",
    strategy: [
      "Phase 1: Koume fires fire and Kotake fires ice. Raise the Mirror Shield to catch one sister's blast and turn it onto the other. Keep circling the arena between attacks.",
      "Phase 2: after a few hits the sisters merge into Twinrova. Catch 3 blasts of the same element in a row with the Mirror Shield to charge it.",
      "Release the charged blast at her. When she falls to the floor, run in and slash her. Repeat until she splits apart."
    ]
  }
});

/* ------------------------------------------------------------------ c14 */
OOT.walkthrough.push({
  id: "c14-ganons-castle", num: 14, title: "Ganondorf's Castle & the Finale", era: "adult",
  summary: "Take the last Gold Skulltula and the 100-token reward, receive the Light Arrows, break the 6 barriers in Ganondorf's Castle, earn Double Defense, and climb the tower to defeat Ganondorf and Ganon.",
  needs: ["All 6 Medallions", "Silver Gauntlets", "Longshot", "Hover Boots", "Megaton Hammer", "Lenses of Truth", "Mirror Shield", "Goron Tunic", "Fire Arrows", "Din's Fire", "Bombs and Bombchus", "Zelda's Lullaby", "Song of Time", "Sun's Song", "Prelude of Light", "A Bottle for Blue Fire", "99 Gold Skulltula Tokens"],
  gains: ["Light Arrows", "Golden Gauntlets", "Double Defense", "1 Gold Skulltula Token (100 in all)"],
  sections: [
    {
      id: "c14-s01", title: "Before the Castle", era: "adult", kind: "overworld",
      steps: [
        { id: "c14-s01-01", text: "In **Zora's Fountain**, cross the frozen lake. Past it, beside a cave mouth, move the black pillar with the **Silver Gauntlets** and go in. Climb the vine wall to a snowfield, defeat the big spider at the cave mouth, and walk on to the second cave. The Gold Skulltula hangs high on a dark wall there; take it with the **Longshot**. The **Lenses of Truth** help you see invisible enemies in the first cave.",
          collect: ["zf-gs-hidden-cave"],
          check: "Zelda Central's token table lists this cave token as any time of day, but its walkthrough plays the Sun's Song first. If the wall is empty, make it night with the **Sun's Song** and look again." },
        { id: "c14-s01-02", text: "Bring 100 tokens to the **House of Skulltula** in Kakariko. The **Cursed Rich Man** and his sons turn back into people, and he gives you a **Gold Rupee** worth 200 Rupees. It is a one-time reward, so spend some Rupees first if your wallet is nearly full.",
          collect: ["kak-100-gold-skulltula-reward"] }
      ]
    },
    {
      id: "c14-s02", title: "Ganondorf's Castle: Shadow, Forest and Fire Trials", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s02-01", text: "With all 6 Medallions, warp to the **Temple of Time** with the **Prelude of Light**. Sheik reveals herself as Princess Zelda and gives you the **Light Arrows** before Ganondorf takes her away. Run up the rainbow bridge of light to **Ganondorf's Castle** and take the door with the Shadow Medallion symbol first. Shoot a **Fire Arrow** at the far torch (or light a normal arrow at the flame by the door) to raise stone steps; the small chest across the gap holds **5 Arrows**. Defeat the **Like Like** on the far platform (the **Longshot** stuns it). Then use the **Lenses of Truth** to see the hidden stepping stones, or float across on the **Hover Boots**, to the platform on the right with a button, and open the big chest for the **Golden Gauntlets**.",
          collect: ["tot-light-arrows-cutscene", "ganons-castle-shadow-trial-front-chest", "ganons-castle-shadow-trial-golden-gauntlets-chest"],
          tip: "The 6 trial doors can be done in any order, but do the Shadow Trial first. The Golden Gauntlets move the pillar in front of the Light Trial door, and you need them for a pillar inside the Fire Trial." },
        { id: "c14-s02-02", text: "Push the gold-marked pillar with the **Golden Gauntlets** so it falls across the gap as a bridge. Use the **Lenses of Truth** again to follow the hidden stones to the purple altar, then shoot the orb with a **Light Arrow** to break the Shadow barrier.",
          collect: [] },
        { id: "c14-s02-03", text: "In the Forest Trial, defeat the **Wolfos** in the ring of statues (block, then strike as they recover). A chest on a blue pad in the next alcove holds **5 Arrows**. In the hexagon pit, the **Lenses of Truth** show hidden footing and the **Hover Boots** float you over the gaps; throw a Bomb at the far platform to clear the growth. Play the **Song of Time** by the wall for a block to climb, Longshot between the far platforms to the teal door, and shoot the orb with a **Light Arrow**.",
          collect: ["ganons-castle-forest-trial-chest"] },
        { id: "c14-s02-04", text: "In the Fire Trial, wear the **Goron Tunic**. Hop across the stone blocks over the lava and use the **Longshot** on targets where the gaps are too wide. Push the gold-marked pillar into the lava with the **Golden Gauntlets** so it forms a bridge. Longshot up to the ledge above the red-marked door, follow the hall to the end and shoot the orb with a **Light Arrow**.",
          collect: [] }
      ]
    },
    {
      id: "c14-s03", title: "Ganondorf's Castle: Water, Spirit and Light Trials", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s03-01", text: "In the Water Trial, catch **Blue Fire** in a Bottle from the pedestal and pour it on the red crystal beside the chest. Smash the ice stumps with the **Megaton Hammer** and open the chest for **5 Bombchus**; keep them, because you need one in the Spirit Trial. The pedestal refills, so catch a second Bottle of Blue Fire for the next room.",
          collect: ["ganons-castle-water-trial-right-chest"] },
        { id: "c14-s03-02", text: "In the next room, push the rune-marked ice block onto the blue floor switch. Melt the red ice with **Blue Fire**, smash the small ice obstacles with the **Megaton Hammer**, then follow the dark corridor and shoot the orb with a **Light Arrow**.",
          collect: [],
          tip: "The Blue Fire pedestal refills, so you never need to empty a fairy Bottle here." },
        { id: "c14-s03-03", text: "In the Spirit Trial, cross the room of stone statues by aiming the **Longshot** at the emblem on the ceiling, then go through the green door. In the next room, defeat the fire creatures and the dark enemy (the **Megaton Hammer** works). A chest then rises on a stone platform with a **Business Scrub Seed**. If you have no Bombchus yet, get the 5 from the Water Trial chest first; you need one in the next room.",
          collect: ["ganons-castle-spirit-trial-crystal-switch-chest"] },
        { id: "c14-s03-04", text: "In the round room, send a **Bombchu** up the grated wall to hit the glowing yellow emblem. Burn the cobweb on the ceiling with a **Fire Arrow** to let the sunlight in, then tilt the **Mirror Shield** to bounce the light onto the sun emblem. The door opens; shoot the orb with a **Light Arrow** from a distance.",
          collect: [],
          check: "The sources do not say which sun emblem is the right one. If the first one you light does nothing, try another." },
        { id: "c14-s03-05", text: "Move the gold-and-black pillar in front of the Light Trial door with the **Golden Gauntlets**. In the dark first room, use the **Lenses of Truth** to see the enemies and beat them (the **Megaton Hammer** works). Shoot the one hanging near the ceiling with the **Fairy Bow** to raise a chest on a glowing pad. The chests in this room hold 3 **Blue Rupees**, a **Red Rupee** and a **Small Key**; you need the key.",
          collect: ["ganons-castle-light-trial-invisible-enemies-chest", "ganons-castle-light-trial-first-left-chest", "ganons-castle-light-trial-third-left-chest", "ganons-castle-light-trial-second-right-chest", "ganons-castle-light-trial-second-left-chest"] },
        { id: "c14-s03-06", text: "In the checkered room, stand on the Triforce tile and play **Zelda's Lullaby**. The chest that rises holds a **Green Rupee** and is optional. Open the locked door with the Small Key from the first room. In the stone sphere room, Longshot past the rolling spheres to the teal door. Clear the enemies in the hall beyond (the pots hold Rupees), then shoot the dark orb over the stairs with a **Light Arrow**.",
          collect: ["ganons-castle-light-trial-lullaby-chest"] }
      ]
    },
    {
      id: "c14-s04", title: "Great Fairy Outside the Castle", era: "adult", kind: "sweep",
      steps: [
        { id: "c14-s04-01", text: "Leave the castle, cross the rainbow bridge and go left to the dead end of the grounds. Move the gold-and-black pillar with the **Golden Gauntlets**, enter the fountain and play **Zelda's Lullaby**. The Great Fairy asks for a donation of 500 Rupees, then grants the **Gift of Halved Damage**, which halves the damage you take. The original game called it Double Defense.",
          collect: ["ogc-great-fairy-reward"],
          tip: "Before the tower, fill your Bottles with fairies or Blue Potions. Bring 500 Rupees; the Adult's Wallet holds exactly that." }
      ]
    },
    {
      id: "c14-s05", title: "Ganon's Tower", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s05-01", text: "With all 6 barriers gone, climb the central tower. Switch to **Fire Arrows** and light the torches in the stairwell. Then clear 3 round arenas: 2 Dinolfos, 2 Stalfos, then 2 Iron Knuckles. Block their swings with your shield and strike back. When the second Iron Knuckle falls, a chest with the **Boss Key** appears in that room.",
          collect: ["ganons-tower-boss-key-chest"] },
        { id: "c14-s05-02", text: "Climb past the room of red pots to the top of the tower and open the big red boss door with the **Boss Key**.",
          collect: [],
          tip: "The red pots in the room before the boss door refill your arrows.",
          warn: "Save before you climb to Ganondorf." }
      ]
    },
    {
      id: "c14-s06", title: "Ganondorf and Ganon", era: "adult", kind: "boss",
      steps: [
        { id: "c14-s06-01", text: "Defeat Ganondorf at the top of the tower (see the boss card). You cannot target him. Bat his energy balls back with the **Master Sword**, shoot a **Light Arrow** when one stuns him, then run in and slash while he is down. Parts of the floor sink as the fight goes on, so keep moving and climb between the raised blocks. He also fires fans of red energy, which the sword can knock back.",
          collect: [] },
        { id: "c14-s06-02", text: "Follow Zelda down the collapsing tower, staying close and watching for falling rocks. She opens a barred gate, holds enemies back with light, and freezes the ReDeads on the bridge so you can cut them down. Cross a broken gap with the **Longshot** and smash blocking rubble with the **Megaton Hammer**, so carry both. Defeat the 2 Stalfos that attack partway down.",
          collect: [] },
        { id: "c14-s06-03", text: "In the ruins, Ganondorf becomes **Ganon** inside a ring of fire, and the Master Sword is stuck in the ground out of reach. Equip a spare sword such as **Biggoron's Sword** (it is two-handed, so no shield) and break the purple crystal on his tail; Light Arrows hit it too. Zelda then gives the Master Sword back. Block his heavy blows with the **Hylian Shield**, duck behind the pillars, and shoot **Light Arrows** at the glowing pink spots on his body, slashing when he staggers. Zelda then opens the eye on his forehead. Shoot it with Light Arrows while you dodge the red lightning, and when he staggers, finish him with a Master Sword strike to the face.",
          collect: [],
          check: "Zelda Central names only Biggoron's Sword as the spare sword. If you do not have it, Light Arrows still hit the tail crystal; the Megaton Hammer may also work." }
      ]
    }
  ],
  boss: {
    id: "boss-ganondorf", name: "Great King of Evil Ganondorf",
    weakness: "Light Arrows while he is stunned; then, as Ganon, the crystal on his tail, the pink spots on his body and the eye on his forehead",
    strategy: [
      "Ganondorf: you cannot target him. Parts of the floor sink as the fight goes on, so keep moving and climb between the raised blocks.",
      "Swing the Master Sword at each energy ball to send it back until one stuns him. Shoot him with a Light Arrow, then run in and slash him while he is down.",
      "He also fires fans of red energy; the Master Sword can knock these back.",
      "Ganon: the Master Sword is stuck in the ground inside the ring of fire, so use a spare sword such as Biggoron's Sword on the purple crystal on his tail. Light Arrows hit it too.",
      "Zelda then returns the Master Sword. Block his heavy blows with the Hylian Shield, duck behind pillars, and shoot Light Arrows at the glowing pink spots on his body.",
      "Zelda opens the eye on his forehead. Shoot it with Light Arrows while dodging the red lightning, and when he staggers, finish him with the Master Sword."
    ]
  }
});
