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
        { id: "c07-s01-01", text: "Wake in the **Chamber of Sages**, where Rauru gives you the **Light Medallion**, then cross the ruined **Market** and climb the road to where **Hyrule Castle** stood. Follow the path right, past the stone archway, and turn around: a Gold Skulltula clings to the back of the arch.",
          collect: ["tot-reward-from-rauru", "ogc-gs"],
          tip: "ReDeads now fill the Market square. Play the Sun's Song to freeze them in place, then walk past.",
          check: "Walkthroughs disagree on this token. One puts it on the back of the stone archway and says to use the Hookshot. Another puts it on the back of a collapsed building behind the castle ruins. Look at the archway first, then the ruined buildings. If it is out of reach, come back with the Hookshot from Dampé's Grave." },
        { id: "c07-s01-02", text: "By day at **Lon Lon Ranch**, pay Ingo 20 Rupees for a ride, then play **Epona's Song** in the corral to call Epona. Race Ingo twice and win the second race to keep her; when he locks the gate, jump the fence on horseback.",
          collect: [], time: "day",
          tip: "Ingo leaves a moment early and swings wide on the bends. Hold the inside line and save your carrots for the last stretch. Time passes at the ranch, so it can turn to night during your visit.",
          check: "Reported: the first race pays 20 Rupees, and no walkthrough mentions a 50-Rupee bet, so bring a little extra. If night falls, play the Sun's Song beside the stable wall to bring day, and Malon talks to you again. Signs may call the place Ingo Ranch." },
        { id: "c07-s01-03", text: "Ride back into the ranch and talk to Malon while mounted to run her obstacle course. Clear 2 laps of fences in under 50 seconds and she sends a cow to **Link's House** in Kokiri Forest.",
          collect: [], time: "day",
          tip: "Time keeps running at the ranch, so the daytime window can close.",
          check: "Not yet reported whether the 50-second limit changed." }
      ]
    },
    {
      id: "c07-s02", title: "Kakariko Graveyard", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s02-01", text: "In the **Kakariko Graveyard**, ride the bean plant you planted as a child by the dead tree on the north side up to the high ledge by the raised ruins, and take the **Piece of Heart**.",
          collect: ["graveyard-freestanding-poh"],
          tip: "No plant here? The Longshot from the Water Temple (chapter 10) reaches the ledge instead." },
        { id: "c07-s02-02", text: "Pull back the first grave of the north row (stand behind it and pull), then drop into **Dampé's Grave**. Chase his ghost through the tunnels to the chest at the far end for the **Hookshot**.",
          collect: ["graveyard-dampe-race-hookshot-chest"],
          check: "IGN says only \"the first gravestone of the north row\". If you are not sure which grave that is, try the first one of each back row.",
          tip: "Keep to the left wall at first. Past the first door, follow the right wall into the big room and leave by its right exit. The flames he drops knock you down, so do not trail him too closely. Link can dash here, which makes the chase easier. Follow his lantern and stay close at forks; he sends you back if he loses you for too long." },
        { id: "c07-s02-03", text: "Past the chest, play the **Song of Time** to clear the blue block and climb the stairs into the **Windmill**. Talk to the man turning the music box to learn the **Song of Storms**. Then jump across the windmill's turning parts to the high ledge for a **Piece of Heart**.",
          collect: ["song-from-windmill", "kak-windmill-freestanding-poh"],
          tip: "In the original game a child could pull this piece down with the Boomerang. That no longer works, so it waits until now." },
        { id: "c07-s02-04", text: "Go back to Dampé's grave and race him a second time. Reach the end in 60 seconds or less and a **Piece of Heart** appears at the finish.",
          collect: ["graveyard-dampe-race-freestanding-poh"],
          tip: "Link's dash helps on this run." }
      ]
    },
    {
      id: "c07-s03", title: "Kakariko Village", era: "adult", kind: "sweep",
      steps: [
        { id: "c07-s03-01", text: "The man on the roof by the **Windmill** gave you his **Piece of Heart** as a child in chapter 3. If you missed him, leave the windmill by its village door, stand on the fence straight ahead and Hookshot up to the roof on your right.",
          collect: [] },
        { id: "c07-s03-02", text: "By day, talk to Anju, the Cucco Lady, for the **Pocket Egg**. Keep it: it hatches at the next dawn and opens the trade for **Biggoron's Sword** in the next chapter.",
          collect: ["kak-anju-as-adult", "kak-bazaar-item-1"], time: "day",
          tip: "The adult Bazaar sells a Hylian Shield for 80 Rupees by day. You only need it if a Like Like ever eats yours. Time passes inside Kakariko, so Anju and the Bazaar can close while you are in town." },
        { id: "c07-s03-03", text: "Enter the **House of Skulltula** with at least 40 tokens (you should hold 45) and take the 40-token reward, a pack of 20 **Bombchus**.",
          collect: ["kak-40-gold-skulltula-reward"] },
        { id: "c07-s03-04", text: "Wait for night in town, or play the **Sun's Song** to bring it. Climb the vines on the left side of **Impa's House** to a high ledge, Hookshot up to it and reach the cow stable behind the house, where the Gold Skulltula waits.",
          collect: ["kak-gs-above-impas-house"], time: "night",
          tip: "Time passes in Kakariko, so night can end while you hunt. Only the Hookshot is needed here, not the Longshot.",
          check: "This follows IGN. The older roof route (Hookshot to the House of Skulltula roof, then across to Impa's roof) may still work." }
      ]
    },
    {
      id: "c07-s04", title: "Back to the Forest", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s04-01", text: "In **Kokiri Forest**, go to the Gossip Stone by the entrance to the **Lost Woods**, behind Mido's House. Play the **Song of Storms** in front of it and drop into the grotto that opens. 3 Business Scrubs stand inside: beat them in the order 2, 3, 1 to earn a Green Rupee.",
          collect: ["kf-storms-grotto-chest"],
          check: "IGN does not say how the 3 Scrubs are numbered, and mentions no chest of 20 Rupees (the old reward). If the order puzzle is unclear, listen to what each Scrub says. Take whatever reward you get and tick this step.",
          tip: "One Scrub's hint is about Stalchildren. If you won Malon's obstacle course, her cow now stands in Link's House. Play Epona's Song next to it and it fills an empty Bottle with milk for free, as often as you like." },
        { id: "c07-s04-02", text: "Wait for night, or play the **Sun's Song** to bring it. Look up at the wall above the **House of Twins** and Hookshot the Gold Skulltula, then its token.",
          collect: ["kf-gs-house-of-twins"], time: "night",
          tip: "Time passes in Kokiri Forest, so night can arrive or end while you are here." },
        { id: "c07-s04-03", text: "In the Lost Woods go right, left, right; play **Saria's Song** to get Mido out of the way. In the next clearing, turn left and ride the bean plant from the theater soil up to the high ledge, where a Gold Skulltula waits.",
          collect: ["lw-gs-above-theater"], time: "night",
          check: "4 walkthroughs list this token with no time condition, and 1 says night only. Try by day first; if it is not there, come back at night. Time passes in the Lost Woods." },
        { id: "c07-s04-04", text: "Continue through the Lost Woods (right, left, right, left, straight, left, right from the entrance) to the **Sacred Forest Meadow**. Slip past the Moblins in the maze, and at the top of the steps Sheik teaches you the **Minuet of Forest**.",
          collect: ["sheik-in-forest"],
          tip: "Wait in the alcoves until a patrolling Moblin turns away. For the club-swinging Moblin at the steps, weave toward it and slash at its feet; it drops Rupees." },
        { id: "c07-s04-05", text: "Climb the ladder at the end of the maze, go left and Hookshot the Gold Skulltula on the wall.",
          collect: ["sfm-gs"], time: "night",
          check: "3 walkthroughs list this token with no time condition, and 1 says night only. Try by day first; if it is not there, wait for night or play the Sun's Song. Time keeps running, so night can end while you are here." },
        { id: "c07-s04-06", text: "Head back to the front of the meadow, just ahead of the entrance and to the right of the maze entrance. Play the **Song of Storms** there and drop into the grotto that opens. Defeat the 2 Wolfos inside and open the chest, which holds a Purple Rupee (50 Rupees).",
          collect: ["sfm-wolfos-grotto-chest"],
          tip: "Wolfos guard their front. Wait for one to lunge, then hit its back or tail.",
          check: "IGN does not say which age this grotto needs. If the song does nothing or the Wolfos are too tough as an adult, try it again as a child during the Song of Storms sweep in chapter 11." }
      ]
    },
    {
      id: "c07-s05", title: "Forest Temple: Entrance and Courtyards", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s05-01", text: "Hookshot to the target on the ledge above the meadow steps to reach the **Forest Temple**. Beat the 2 Wolfos inside, climb the vines on the right, Hookshot the Gold Skulltula at the top, then cross the tree's flat branches to the chest with a **Small Key**.",
          collect: ["forest-temple-gs-first-room", "forest-temple-first-room-chest"],
          tip: "Wolfos guard their front. Wait for one to lunge, then hit its back or tail. The Big Skulltula in the next hallway falls to the Hookshot.",
          check: "Reported: a backflip just before a Wolfos strikes makes it miss and shows a glowing weak point on its spine. One walkthrough describes a mossy tunnel to the key chest instead of the branches; the others do not." },
        { id: "c07-s05-02", text: "In the main hall, after the Poe Sisters steal the torch flames, cross to the far side and climb the ledge and stairs. A Gold Skulltula sits on the wall to the right of the door at the top.",
          collect: ["forest-temple-gs-lobby"] },
        { id: "c07-s05-03", text: "Through that door, past a Blue Bubble, the next room locks you in with 2 Stalfos. Defeat both and open the chest that appears for a **Small Key**.",
          collect: ["forest-temple-first-stalfos-chest"],
          tip: "A fairy waits in a pot here. Shield-bash the Blue Bubble or stun it before you strike." },
        { id: "c07-s05-04", text: "Back in the main hall, play the **Song of Time** at the block in the left-hand doorway as you face the far side. In the courtyard beyond, get past the Deku Baba, Hookshot the Skullwalltulas on the vine wall and climb to the balcony ledge. The **Dungeon Map** is not behind a Blue Bubble here: it waits in a large chest on a ledge north of the well, so you take it after you drain the well (see the last step of this section).",
          collect: ["forest-temple-map-chest"],
          check: "One walkthrough says an Octorok may be in the water near the Map chest." },
        { id: "c07-s05-05", text: "From the balcony ledge, go past a Blue Bubble and Hookshot the target on the right wall to reach the floor switch, then step on it to drain the well. This courtyard's Gold Skulltula cannot be taken yet: it needs the Scarecrow's Song and the Hookshot, and you reach it later from the falling-ceiling room (see that step). You learn the Song at Lake Hylia in chapter 8, so come back for this token afterward.",
          collect: ["forest-temple-raised-island-courtyard-chest", "forest-temple-gs-raised-island-courtyard"],
          check: "No walkthrough mentions the small chest on a raised ledge in this courtyard. Look for it, and skip it if it is not there. Most walkthroughs put the Gold Skulltula in the north-east room with the stream; 1 calls it the west garden." },
        { id: "c07-s05-06", text: "Climb down into the drained well and run to its far end for a chest with a **Small Key**. Climb out, go north and Hookshot up to the ledge for the large chest with the Dungeon Map, then return to the main hall.",
          collect: ["forest-temple-well-chest"] }
      ]
    },
    {
      id: "c07-s06", title: "Forest Temple: The Fairy Bow", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s06-01", text: "Unlock the main hall's west door (on the map) and Hookshot the Skulltula in the hallway. In the block room, push and pull each block the way the arrows on the floor show, then climb the uncovered ladder and push the red block until it stops.",
          collect: [],
          tip: "If the order goes wrong, the blocks can be pulled back out. The goal is a staircase of blocks to the hidden ledge on the right. Upstairs, after 2 Blue Bubbles, a floor switch on the left (before the eye-switch door) calls the new lift, which gives you a shortcut back past the block puzzle.",
          warn: "A Wallmaster waits in this area. When its shadow or a spotlight appears, keep moving, then strike it once it lands. A grab sends you back to the main hall." },
        { id: "c07-s06-02", text: "From the blue block, jump to the hidden ledge on the right and push the red block until it locks, then take the locked door at the top. Cross the twisted corridor and the tilted room (make the jumps yourself with the jump button), pass through the painting room and enter the Stalfos room for the **Fairy Bow**.",
          collect: ["forest-temple-bow-chest"],
          tip: "Stay out of the pit in the middle of the Stalfos room. Beat the first Stalfos, then finish the next 2 close together or one revives. A Wallmaster's shadow in the tilted room means move: a grab sends you back to the main hall.",
          check: "2 walkthroughs say the pit in the middle of the Stalfos room is now a pool of poison that hurts Link, not a drop." },
        { id: "c07-s06-03", text: "Return to the painting room you passed. Shoot the eye above the entry door first, then shoot Joelle's portrait with the **Fairy Bow** from a distance each time it appears, because she flees if you get close. After 3 hits she fights you at the foot of the stairs; win to relight the red torch and take the **Small Key** from the chest.",
          collect: ["forest-temple-red-poe-chest"],
          tip: "When she spins to deflect shots, turn away and dodge, then strike once she is dizzy. Keep your shield up while she is invisible and strike when she reappears.",
          check: "One walkthrough says this key opens the next locked door, into Beth's staircase room." },
        { id: "c07-s06-04", text: "Go back through the Stalfos room to the other painting room and beat Beth the same way. The chest after her fight holds the **Compass**.",
          collect: ["forest-temple-blue-poe-chest"] },
        { id: "c07-s06-05", text: "Return to the block room. On the second floor, near where you pushed the second block, shoot the eye switch for an optional chest with a Purple Rupee (50 Rupees). At the top, shoot the silver eye switch above the door to straighten the twisted corridor.",
          collect: ["forest-temple-eye-switch-chest"] },
        { id: "c07-s06-06", text: "Walk the straightened corridor into the tilted room, now level, and drop down to the large chest for the **Boss Key**.",
          collect: ["forest-temple-boss-key-chest"] }
      ]
    },
    {
      id: "c07-s07", title: "Forest Temple: The Last 2 Sisters", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s07-01", text: "Drop through the hole by the Boss Key chest and beat the 2 Blue Bubbles to open the door. You come out on a balcony over the garden (the west courtyard on the map). Go through the door, walk the ledge to the left and around the corner, and Hookshot the Gold Skulltula on the wall along the south ledge.",
          collect: ["forest-temple-gs-level-island-courtyard"] },
        { id: "c07-s07-02", text: "Shoot or stun the Big Deku Baba in the way. From the upper ledge, the Floormaster is behind the first door on the right: defeat it, then the 3 small hands it splits into, and open the chest for a **Small Key**.",
          collect: ["forest-temple-floormaster-chest"],
          tip: "A Spin Attack clears the 3 small hands together. The door on the right leads back to the block room." },
        { id: "c07-s07-03", text: "From the top of the block room, shoot the silver eye switch again to twist the corridor back, then cross Joelle's room and the Stalfos room to the locked door at the top of Beth's room. Pass the second twisted corridor and the Green Bubble hall. In the torch room, step on the switch to light the torch, shoot an arrow through the flame at the iced eye above the door, then shoot the eye again to trigger it. The corridor twists; go down it and drop through the hole.",
          collect: [],
          tip: "This room has no rotating pillars or moving platform." },
        { id: "c07-s07-04", text: "Drop into the hole the twisted corridor now exposes. In the room with the falling ceiling, move between the safe gaps by watching the shadows, open the small chest for Bombs, and step on the switch on the right to unlock the far door.",
          collect: ["forest-temple-falling-ceiling-room-chest"],
          tip: "The camera is fixed overhead in this room and you cannot target. Stand under the holes in the ceiling when it drops. Giant Skulltulas hide under shaded squares, and the switch on the right is a safe spot. Outside the right-hand door, push the block off the ledge for a shortcut. That same door leads to the courtyard's Gold Skulltula: turn and look up, play the Scarecrow's Song at the spot and Hookshot to the scarecrow. You need the Song from chapter 8, so come back for it." },
        { id: "c07-s07-05", text: "In the next room, shoot Amy's painting so it breaks into blocks, then push and pull them into the picture. Solving it summons Amy; beat her to relight the green torch.",
          collect: [],
          tip: "Clear the blue middle block first, then pull the rest toward the fixed block. Leave and re-enter the room to reset a failed attempt.",
          check: "No walkthrough mentions a time limit, and 2 other sources say there is none, so it may be untimed. Do not count on that. 2 blocks look alike, and guides differ on spotting the fake: one says ignore the block that stays still once they all move, another says it is the block closest to the body when they appear, a third says the moving head image shows the real one." },
        { id: "c07-s07-06", text: "Shoot the purple Poe's painting in the hallway past the picture puzzle. She runs to the main hall's balcony, where Meg splits into 4 copies. In the early rounds, shoot the copy carrying the purple flame to stun her, then slash her. In the last round the copies look alike: the real Meg is the only one that does a small spin as they circle you. Shoot her with an arrow, then use your sword. When she falls, all 4 flames are back and the central elevator works.",
          collect: [],
          tip: "Din's Fire and Deku Nuts only hit the copies. Rely on arrows.",
          check: "2 sources say a Spin Attack merges the copies, but that is thinly supported, so rely on arrows." }
      ]
    },
    {
      id: "c07-s08", title: "Phantom Ganon", era: "adult", kind: "boss",
      steps: [
        { id: "c07-s08-01", text: "Ride the elevator to the basement and push the handle on the outer wall to rotate the room. Keep turning until you have seen all 3 rotations: a small chamber with a floor switch that lights a torch, a chest of arrows, and a green room with pots that holds the Gold Skulltula (on the wall of the south room). Then turn the room until the lit torch lines up with an iced eye switch behind it. Shoot an arrow through the flame to melt the ice, then another at the eye to open the way to the boss hallway.",
          collect: ["forest-temple-basement-chest", "forest-temple-gs-basement"],
          tip: "There are no colored floor switches here now.",
          check: "Guides list the 3 rotations in different orders, so keep turning until you have seen them all. No major walkthrough mentions Din's Fire here; arrows are enough." },
        { id: "c07-s08-02", text: "Defeat Phantom Ganon (see the boss card), take the **Heart Container**, then step into the blue light. Saria gives you the **Forest Medallion** in the Chamber of Sages.",
          collect: ["phantom-ganon", "forest-temple-phantom-ganon-heart"],
          tip: "Take the Heart Container before the blue warp." }
      ]
    },
    {
      id: "c07-s09", title: "The Prelude of Light and the Big Poes", era: "adult", kind: "sidequest",
      steps: [
        { id: "c07-s09-01", text: "Enter the **Temple of Time** with the Forest Medallion, where Sheik teaches you the **Prelude of Light**, the warp back here. Ride Epona into **Hyrule Field** with the **Fairy Bow** and 4 empty Bottles and catch the Big Poes near the sign at the start of the Market bridge, in the bushes by the stream in the northwest corner (on the map) and at the lone tree on the field's western edge: shoot each twice and bottle the soul it leaves. Sell them at the Poe shop in the old guard house by the Market entrance.",
          collect: ["sheik-at-temple", "big-poe-hf-02", "big-poe-hf-01", "big-poe-hf-04"],
          tip: "Big Poes appear when you ride through fixed spots and cannot be targeted. Each one is worth 100 points. The Poe Collector gives you a Bottle at 500 points (after 5 Poes) and a Gold Rupee worth 200 Rupees at 1,000 points (10 Poes), so catch 5 for the Bottle and 5 more for the Rupees. Rupees and points are counted separately, so a full wallet still adds points. If you cannot reach a soul from the saddle, get down and bottle it on foot. The field's ground has been reshaped, so the 10 spots may sit in different places than older guides show. The Hall of Fallen Foes is open now: sleep in a bed that glows green, such as the one in Link's House or the Grand Lodge in Kakariko, and you wake in the Hall. Talk to Kaepora Gaebora to leave.",
          check: "Poe payout: 2 walkthroughs say 30 Rupees each, 1 page says 20, so expect 20 to 30. Reported: purple glowing lanterns, logs or other objects mark the Big Poe spots (ride Epona over one), and a Big Poe vanishes after about 30 seconds; jump the same marker again to bring it back." },
        { id: "c07-s09-02", text: "Catch 3 more around **Lon Lon Ranch**: at the tree by the ranch's north entrance (on the map), along the stone wall on the ranch's east side, and at the lone rock at the fork between the ranch and Kakariko. Sell them.",
          collect: ["big-poe-hf-05", "big-poe-hf-06", "big-poe-hf-08"] },
        { id: "c07-s09-03", text: "Catch 3 in the south of the field (on the map): at the road fork in the southwest, at the rock ringed by trees in the south, and in the grass by the lone tree in the southeast. Sell them.",
          collect: ["big-poe-hf-07", "big-poe-hf-10", "big-poe-hf-09"] },
        { id: "c07-s09-04", text: "Catch the last Big Poe under the fenced cliff in the northeast of the field (on the map), near the Kakariko entrance. Selling it brings your total to 1,000 points, and the Poe Collector gives you a Gold Rupee worth 200 Rupees. Your fifth **Bottle** already came at 500 points, after the 5th Big Poe.",
          collect: ["big-poe-hf-03", "market-10-big-poes"] }
      ]
    }
  ],
  boss: {
    id: "boss-phantom-ganon", name: "Evil Spirit from Beyond Phantom Ganon",
    weakness: "Fairy Bow while he rides out of a painting; then his own energy ball, returned with the sword",
    strategy: [
      "Phase 1: he and a decoy ride into the paintings around the room. The real rider comes out toward you while the decoy turns back; shoot him with the Fairy Bow as he emerges.",
      "If you miss, he answers with lightning that spreads over the floor. Stay toward a corner of the room, where it does not reach.",
      "After 3 arrow hits he leaves his horse. Phase 2: swing your sword at each energy ball he throws to send it back, and keep the rally going until one hits him.",
      "While he lies stunned, run in and slash him. Later he also charges with his staff; raise your shield or step aside."
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
        { id: "c08-s01-02", text: "By day, pay 20 Rupees at the adult **Shooting Gallery**, the building past the House of Skulltula. Hit all 10 targets with your 15 arrows to win a bigger **Quiver**.",
          collect: ["kak-shooting-gallery-reward"], time: "day",
          tip: "Hitting 8 or 9 targets earns a free retry. The target patterns change from round to round. Time passes in Kakariko, so the gallery can close while you wait. Motion aiming is optional." },
        { id: "c08-s01-03", text: "Once a dawn has passed, the **Pocket Egg** has hatched into the **Pocket Cucco**. Take it into the house below the stairs, opposite the House of Skulltula, and use it on the man asleep there to wake Talon.",
          collect: ["item-pocket-cucco", "event-wake-talon-kakariko"],
          tip: "If the egg has not hatched yet, wait in Kakariko, where time passes, or play the Sun's Song until morning comes round." }
      ]
    },
    {
      id: "c08-s02", title: "Biggoron's Sword Trade, Part 1", era: "adult", kind: "sidequest",
      steps: [
        { id: "c08-s02-01", text: "By day, give Anju the **Pocket Cucco** now that Talon is awake. She hands you **Cojiro**, a blue Cucco.",
          collect: ["kak-anju-trade-pocket-cucco"], time: "day" },
        { id: "c08-s02-02", text: "In the **Lost Woods**, take the first left from the Kokiri Forest entrance and show Cojiro to the Master Craftsman's Son, the pale man sitting there. He gives you the **Odd Mushroom**, and a 4-minute timer starts.",
          collect: ["lw-trade-cojiro"],
          warn: "Do not play a warp song or use Farore's Wind while the timer runs: the mushroom spoils at once and turns back into Cojiro. Running out of time does the same.",
          tip: "The bean plant in the clearing by the Lost Woods bridge lifts you to the Hyrule Field exit. From there ride Epona to Kakariko. Link's dash helps too.",
          check: "One guide says the man stands straight ahead as you enter the maze. If he is not on the first left, look there." },
        { id: "c08-s02-03", text: "In Kakariko, go through the **Potion Shop** (the last building on the right toward Death Mountain), out its back door, drop down and walk up the ramp to the old woman's shop. Hand over the mushroom for the **Odd Poultice**.",
          collect: ["kak-granny-trade-odd-mushroom"],
          tip: "The Potion Shop is open by day. From now on she sells Blue Potions for 100 Rupees, as many as you like. Each needs an empty Bottle and refills hearts and magic." },
        { id: "c08-s02-04", text: "Return to the same spot in the Lost Woods, where the Kokiri girl Fado now sits. Give her the Odd Poultice for the **Poacher's Saw**.",
          collect: ["lw-trade-odd-potion"],
          warn: "Make sure you already took the Deku Nut upgrade from the Forest Stage with the Mask of Truth (chapter 6) before you take the Saw.",
          check: "Not yet reported whether this version locks that upgrade after the Saw, as older versions did. Get it first to be safe." }
      ]
    },
    {
      id: "c08-s03", title: "Lake Hylia and the Scarecrow's Song", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s03-01", text: "Ride to **Lake Hylia**. Talk to Bonooru, the scarecrow between the laboratory and the **Fishing Pond**, and play the same 8-note tune you taught him as a child. He registers it as the **Scarecrow's Song**: play it where Navi turns green and Pierre appears as a Hookshot target.",
          collect: ["pierre"],
          tip: "The game does not list this song on the pause screen. Write your tune down. If you have forgotten it, go back as a child and teach Bonooru a new one. Ocarina notes: X plays the top note, Y the left, A the right, R the bottom, and L the note the songs list as A. You can also hum a song into the microphone." },
        { id: "c08-s03-02", text: "Ride the bean plant you planted beside the laboratory up onto its roof and climb the ladder to a **Piece of Heart**.",
          collect: ["lh-freestanding-poh"],
          tip: "Without the plant, play the Scarecrow's Song near the laboratory and Hookshot to Pierre instead." },
        { id: "c08-s03-03", text: "Ride the bean plant on toward the Fishing Pond island (or Hookshot over with Pierre) while the lake is dry. Pay 30 Rupees and catch the biggest fish you can, then have the pond owner weigh it, to win the **Golden Scale**.",
          collect: ["lh-adult-fishing"],
          tip: "Bites come more often early in the morning, at dusk and in rain.",
          check: "Walkthroughs disagree on the size needed: at least 13 pounds, 65 cm, over 60 cm, or no number. Aim for the biggest fish in the pond. Reported: you pay again if you leave the pond, and weapons cannot be used while you hold the rod." },
        { id: "c08-s03-04", text: "Inside the **Lakeside Laboratory**, dive to the bottom of the tank with the Golden Scale, then surface and talk to the scientist for a **Piece of Heart**.",
          collect: ["lh-lab-dive"],
          tip: "Link swims faster in this version and can dive when he spots something below. The Golden Scale is still needed to reach the bottom of the tank.",
          check: "Reported: take off the Iron Boots first if you have them on." }
      ]
    },
    {
      id: "c08-s04", title: "Hyrule Field and Gerudo Valley", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s04-01", text: "In **Hyrule Field**, go to the shaded spot in the west of the field, next to the desert road and near the lone tree northwest of Lon Lon Ranch (on the map). A chest stands there that looks already open to an adult. Read the Fairy Note beside it as an adult, then come back as a child to open it for the **Piece of Heart**.",
          collect: ["hf-tektite-grotto-freestanding-poh"],
          tip: "The Echo Gem reacts near the spot, but you do not need it. The Song of Storms grotto west of the Castle Town entrance (north side of the moat) holds a deep pool with a Blue Tektite. With the Iron Boots from the Ice Cavern, the Rupee boxes at the bottom are yours too.",
          check: "2 post-launch lists drop the old pool and add this chest in its place. The chest should hold the Piece of Heart this row counts, but its contents are not confirmed." },
        { id: "c08-s04-02", text: "Ride Epona into **Gerudo Valley** and jump the broken bridge on horseback. Give the **Poacher's Saw** to the head carpenter by the tent for the **Broken Goron's Sword**.",
          collect: ["gv-trade-poachers-saw"] },
        { id: "c08-s04-03", text: "At night, Hookshot the Gold Skulltula on the back wall behind the carpenters' tent. Then look up the sides of the stone archway on your left after the bridge for a second one.",
          collect: ["gv-gs-behind-tent", "gv-gs-pillar"], time: "night",
          tip: "Time keeps running, so night can end while you are here; play the Sun's Song to bring it back.",
          check: "Most lists put both tokens at night with the Hookshot, but 1 lists the Longshot for both and no night condition for the one on the rocks south of the house. If the Hookshot does not reach, or the token is there by day, come back with the Longshot after the Water Temple." },
        { id: "c08-s04-04",
          text: "Go back to the grotto you bombed open in the marshy southeast of **Hyrule Field**. A Gold Skulltula now sits in a shaking crate. Roll into the crate to knock out the token.",
          collect: ["hf-gs-cow-grotto"],
          tip: "As a child you only had to defeat the plain Skullwalltula here. The Gold Skulltula shows up for adult Link." }
      ]
    },
    {
      id: "c08-s05", title: "Death Mountain Trail", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s05-01", text: "Enter **Dodongo's Cavern** and take the right-hand door of the main room into the Baby Dodongo corridor. Where Navi turns green below a high alcove, play the **Scarecrow's Song** and Hookshot to Pierre to reach the Gold Skulltula.",
          collect: ["dodongos-cavern-gs-scarecrow"] },
        { id: "c08-s05-02", text: "Climb the trail toward **Goron City**. On the cliff near its entrance, play the **Song of Storms**, then drop into the grotto. Fog fills the room and Baby Dodongos roam it; the Rupees inside include a Red Rupee (20 Rupees).",
          collect: ["dmt-storms-grotto-chest"],
          tip: "Rocks still fall on the upper trail until the Fire Temple is cleared. Watch for their shadows." },
        { id: "c08-s05-03", text: "Continue to the summit and give the **Broken Goron's Sword** to Biggoron, the giant Goron at the peak. He sends you off with the **Prescription**.",
          collect: ["dmt-trade-broken-sword"] }
      ]
    },
    {
      id: "c08-s06", title: "Goron City and the Crater", era: "adult", kind: "overworld",
      steps: [
        { id: "c08-s06-01", text: "In **Goron City**, stop the Goron rolling around the middle floor with a Bomb. He is Darunia's son, Link; listen to him to receive the **Goron Tunic**, and he reopens the shop and Darunia's room.",
          collect: ["gc-rolling-goron-as-adult", "gc-shop-item-5"],
          tip: "Put it on before you go in. The Goron Tunic protects Link from the heat of the crater. The reopened shop sells spare tunics, in case a Like Like ever eats yours.",
          check: "Shop price is unconfirmed: the old price was 200 Rupees, but 1 guide says tunics cost 500. Check before you count on a spare. No major guide says whether the tunic has a quick-swap slot; if it does not, use the equipment screen." },
        { id: "c08-s06-02", text: "Wait for night, or play the **Sun's Song**. Drop from the highest ring of Goron City down 1 level, go behind the central platform and Hookshot the Gold Skulltula on the underside of the jutting rock.",
          collect: ["gc-gs-center-platform"],
          time: "night" },
        { id: "c08-s06-03", text: "Find Medigoron in the room behind the bombable walls on the middle floor and buy the **Giant's Knife** for 200 Rupees.",
          collect: ["gc-medigoron"],
          tip: "The knife hits hard with both hands but breaks after a few swings. Biggoron's Sword (chapter 9) replaces it for good.",
          check: "1 walkthrough puts Medigoron in an alcove on the top level of Goron City, in the south-east, not behind the middle-floor wall. If he is not behind the wall, look there. The price is still 200 Rupees." },
        { id: "c08-s06-04", text: "In Darunia's room, pull the statue aside and take the passage to **Death Mountain Crater** with the Goron Tunic on. Hookshot across the broken bridge, where Sheik teaches you the **Bolero of Fire**.",
          collect: ["sheik-in-crater"],
          tip: "There is no heat timer. Without the tunic, Link catches fire a couple of seconds after he enters and loses health over time.",
          check: "One guide says Sheik plays the Bolero's opening notes for you to copy." },
        { id: "c08-s06-05", text: "Before the Fire Temple, sweep the crater's top entrance with the **Goron Tunic** on. From the summit near the Great Fairy's Fountain, go straight down and left to the grotto on the left (the fire burns you the whole time, so keep the tunic on) and open its chest, which holds a Business Scrub Seed.",
          collect: ["dmc-upper-grotto-chest"],
          tip: "The tunic protects you from the heat, so you can take your time. The crate token, the wall Piece of Heart and the Business Scrub's Piece of Heart were taken as a child in chapter 4.",
          check: "IGN confirms the grotto chest holds a Business Scrub Seed, not Bombs." }
      ]
    },
    {
      id: "c08-s07", title: "Fire Temple: The Lower Floors", era: "adult", kind: "dungeon",
      steps: [
        { id: "c08-s07-01", text: "Climb down the ladder to the **Fire Temple**. Go up the stairs and through the left door, where Darunia heads in alone; jump along the platforms on the left to the floor switch, free the Goron behind the bars and take the **Small Key** from his cell.",
          collect: ["fire-temple-near-boss-chest"],
          tip: "Wear the Goron Tunic for the whole temple." },
        { id: "c08-s07-02", text: "Unlock the door opposite. In the big lava room, take the ledge door on the left past the Song of Time block, free the Goron there and open his chest for a **Small Key**.",
          collect: ["fire-temple-big-lava-room-lower-open-door-chest"] },
        { id: "c08-s07-03", text: "From the lower platform, turn around and play the **Song of Time** to move the block, then climb to the door. Raise your shield against the flying floor tiles, defeat the Like Like from a distance and take the Gold Skulltula on the back wall.",
          collect: ["fire-temple-gs-song-of-time-room"],
          warn: "A Like Like can swallow your Goron Tunic or your shield. Defeat it before you leave the room to get them back." },
        { id: "c08-s07-04", text: "On the far side of the big lava room, bomb the wall shaped like a door. Free the Goron behind it for another **Small Key**.",
          collect: ["fire-temple-big-lava-room-blocked-door-chest"] },
        { id: "c08-s07-05", text: "Unlock the door on the right of the bridge and climb to the boulder maze: push the block over the fire pit and ride it up, clear the Torch Slugs and use the blocks to climb, then drop a Bomb onto the crystal switch and climb the fenced wall while the fire is off.",
          collect: [] },
        { id: "c08-s07-06", text: "In the lower boulder maze, follow the outer wall to the right. Press the floor switch and free the Goron for a **Small Key**, bomb the hollow wall of the triangular alcove further on for a Gold Skulltula, then take the door 2 turns along for a third Goron and Small Key. Before you leave the maze, open the chest in its south alcove for the **Dungeon Map**.",
          collect: ["fire-temple-boulder-maze-lower-chest", "fire-temple-gs-boulder-maze", "fire-temple-boulder-maze-side-room-chest", "fire-temple-map-chest"],
          tip: "Stay close to the wall to keep away from the rolling boulders." }
      ]
    },
    {
      id: "c08-s08", title: "Fire Temple: The Upper Floors", era: "adult", kind: "dungeon",
      steps: [
        { id: "c08-s08-01", text: "Unlock the door at the end of the maze. In the narrow bridge room, shoot the silver eye switch above you and take the right door to the big chest with the **Compass**.",
          collect: [],
          tip: "A fall from the narrow bridge drops you back into the big lava room." },
        { id: "c08-s08-02", text: "Through the next locked door, run along the hanging grate ahead of the wall of fire and climb up at the end. In the upper maze, bomb the cracked floor and drop down to free a Goron for a **Small Key**, then cross the narrow platforms to a floor switch, stun the Torch Slug with the Hookshot and free the Goron in the high cage for another.",
          collect: ["fire-temple-boulder-maze-shortcut-chest", "fire-temple-boulder-maze-upper-chest"],
          tip: "You may walk briefly on lava while wearing the Goron Tunic. Roll to put out flames on Link." },
        { id: "c08-s08-03", text: "Back at the upper maze entrance, turn right where Navi turns green, play the **Scarecrow's Song** and Hookshot to Pierre, then to the small elevator. Climb the grate past the door for a Gold Skulltula, take the next one on the wall to your left in the room beyond, and hit the switch. It raises Hookshot posts that lead to 3 small chests (optional) holding 2 Red Rupees and a Purple Rupee, about 90 Rupees in all.",
          collect: ["fire-temple-gs-scarecrow-climb", "fire-temple-gs-scarecrow-top", "fire-temple-scarecrow-chest"],
          tip: "The posts fade slowly, so go straight for the chests. Drop into the center pit afterward to land back in the narrow bridge room." },
        { id: "c08-s08-04", text: "Halfway along the fire-wall grate, jump to the ledge with a locked door and enter the flame maze. Follow the outer wall right and around the fire pillar to the big chest.",
          collect: ["fire-temple-compass-chest"],
          tip: "Some doors here are Door Mimics that slam onto you. Use a Bomb on any door that sticks out from the wall before you try it.",
          check: "The Compass is behind the eye switch in the narrow bridge room, and no walkthrough mentions a big chest in this flame maze. Check it, and take whatever it holds." },
        { id: "c08-s08-05", text: "Take the inner path past the fire-spitting heads and use your key, then cross the other half of the maze to the Flare Dancer. Knock its core out of the flames with the Hookshot or a Bomb, chase the core and slash it, and repeat until it falls.",
          collect: [],
          tip: "Run against the core's direction and strike when it turns. A floor switch on the far side of the maze briefly drops a fire wall." },
        { id: "c08-s08-06", text: "Ride the platform up, drop a Bomb onto the crystal switch over the edge, and enter the next room. Hit the switch, then run up the narrow ramp to the big chest before the fire returns for the **Megaton Hammer**.",
          collect: ["fire-temple-megaton-hammer-chest"],
          tip: "Clear the Fire Keese first. A fall sends you floors down, so place Farore's Wind at the door before you try." }
      ]
    },
    {
      id: "c08-s09", title: "Fire Temple: Hammer Route and the Boss Key", era: "adult", kind: "dungeon",
      steps: [
        { id: "c08-s09-01", text: "Hammer the floor panel with the Fire Temple symbol, drop through and smash the totem heads blocking the door. In the next room, hammer the pillar so the floor becomes stairs, carry a box onto the switch to hold the door, and hammer through the floor back to the flame maze; in the Song of Time block room, hammer the rusted switch to free a Goron with a **Small Key**.",
          collect: ["fire-temple-highest-goron-chest"] },
        { id: "c08-s09-02", text: "In the flame maze, stand on the giant pillar and hammer it. It drops into the room by the boss door and becomes a platform up to it.",
          collect: [] },
        { id: "c08-s09-03", text: "Go back to the temple's entrance room and hammer the statue beside the locked door. Beyond it, flip the Torch Slugs with the Hammer, then clear the flying tiles and the Like Like in the second tile room. Smash the grey rock in the back wall with the Hammer to reach the Gold Skulltula.",
          collect: ["fire-temple-gs-boss-key-loop"],
          warn: "This Like Like can also swallow your tunic or shield. Defeat it before leaving." },
        { id: "c08-s09-04", text: "Beat the second Flare Dancer by hammering the floor to knock it out of its flames, then open the chest for Bombs.",
          collect: ["fire-temple-flare-dancer-chest"] },
        { id: "c08-s09-05", text: "Through the right-hand door, hammer the rusted switch to free the last Goron and open the big chest for the **Boss Key**.",
          collect: ["fire-temple-boss-key-chest"] }
      ]
    },
    {
      id: "c08-s10", title: "Volvagia", era: "adult", kind: "boss",
      steps: [
        { id: "c08-s10-01", text: "Cross the pillar platform to the boss door, Goron Tunic on. Defeat Volvagia (see the boss card), take the **Heart Container**, and Darunia gives you the **Fire Medallion** after the blue warp.",
          collect: ["volvagia", "fire-temple-volvagia-heart"],
          warn: "The small platform you enter on sinks into the lava once you step onto the arena. There is no retreat.",
          tip: "A pot on the right ledge of the boss door room holds a fairy. Take the Heart Container before the blue warp." }
      ]
    },
    {
      id: "c08-s11", title: "Megaton Hammer Sweep", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s11-01", text: "In **Death Mountain Crater**, cross back over the bridge toward Goron City, take the south bridge near the entrance and smash the rocks over the cave on your right with the Hammer. Enter the fountain and play **Zelda's Lullaby**; the Great Fairy asks for 200 Rupees, then doubles your Magic Meter.",
          collect: ["dmc-great-fairy-reward"],
          tip: "Arrive with at least 200 Rupees." },
        { id: "c08-s11-02", text: "In **Goron City**, go back into the boulder maze to the left of the top-floor entrance and hammer the silver boulders that blocked the third chest when you were a child; the chest behind them holds 200 Rupees.",
          collect: ["gc-maze-left-chest"] },
        { id: "c08-s11-03", text: "At night, on **Death Mountain Trail**, hammer the large grey rock on the path down from the summit, near the Great Fairy. A Gold Skulltula hides behind it.",
          collect: ["dmt-gs-falling-rocks-path"], time: "night",
          check: "The older guide called this a red boulder. IGN calls it a large grey rock." },
        { id: "c08-s11-04", text: "At night, hammer the grey rock where the lone Bomb Flower used to be, outside **Goron City**, for another Gold Skulltula.",
          collect: ["dmt-gs-above-dodongos-cavern"], time: "night",
          check: "The older guide called this a red boulder on the ledge above Dodongo's Cavern. IGN puts it at the old Bomb Flower spot outside Goron City." }
      ]
    }
  ],
  boss: {
    id: "boss-volvagia", name: "Subterranean Lava Dragon Volvagia",
    weakness: "Its head, hit with the Megaton Hammer while it pokes out of a lava pit",
    strategy: [
      "Volvagia surfaces from one of the 9 lava pits around the platform. When its head rests out of a pit, hit it with the Megaton Hammer to stun it, then keep striking until it sinks back.",
      "When it flies up and the ceiling rains rocks, move away from the shadows growing on the floor.",
      "When it flies around breathing fire, stand next to the pit it came out of; it cannot turn tightly enough to reach you there.",
      "Arrows hurt it in the air but cannot finish it. Later it peeks out of 2 decoy pits before the real one."
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
        { id: "c09-s01-01", text: "At night on **Zora's River**, reach the plateau in the middle of the river by riding the bean plant you planted as a child in the soft soil near the Bean Salesman (or swim the narrow stream back from near Zora's Domain and climb the ladder). Hookshot the Gold Skulltula high on its south wall (on the map).",
          collect: ["zr-gs-near-raised-grottos"], time: "night",
          check: "The post-launch lists only describe the bean route. If the swim and ladder route does not get you up, plant a bean as a child and come back." },
        { id: "c09-s01-02", text: "Still at night, cross the small bridge toward Zora's Domain, stand on the fence and Hookshot the Gold Skulltula high on the wall.",
          collect: ["zr-gs-above-bridge"], time: "night" },
        { id: "c09-s01-03", text: "Play **Zelda's Lullaby** at the waterfall to enter the frozen **Zora's Domain**. Left of the stairs up to King Zora's chamber, climb to the top of the frozen waterfall and look left from the ledge for a Gold Skulltula.",
          collect: ["zd-gs-frozen-waterfall"], time: "night",
          tip: "The Hookshot brings it down. Time passes in Zora's Domain, so night can come and go.",
          check: "IGN does not mark this night-only; confirm in game. The older guide put it high on the wall by the diving game; look there if the waterfall top is empty." },
        { id: "c09-s01-04", text: "Pass the red ice around King Zora and continue to **Zora's Fountain**. Drop from Jabu-Jabu's old altar onto the ice floes and hop across to the floe off to the right that holds a **Piece of Heart**.",
          collect: ["zf-iceberg-freestanding-poh"],
          tip: "To reach the cavern afterward, cross the 3 spinning floes the other way, then the still one, and jump to the ledge at the cave mouth. Jumps are manual in this version, so time each hop yourself." }
      ]
    },
    {
      id: "c09-s02", title: "Ice Cavern", era: "adult", kind: "dungeon",
      steps: [
        { id: "c09-s02-01", text: "In the **Ice Cavern**, defeat the 4 Freezards in the first big room to lift the ice bars. In the spinning-blade room, gather the 5 Silver Rupees and Hookshot the Gold Skulltula high on the wall above one of them.",
          collect: ["ice-cavern-gs-spinning-scythe-room"],
          tip: "Freezards breathe ice; wait for the breath to stop, then close in. Raise your shield to duck under the circling blade. The last Silver Rupee floats above the blade, so jump to it from the ledges." },
        { id: "c09-s02-02", text: "Through the barred door on the upper ledge, clear the Freezard and Ice Keese, then Hookshot up to the platforms. Fill your empty Bottles with **Blue Fire** and pour some on the red ice around the big chest for the **Dungeon Map**.",
          collect: ["ice-cavern-map-chest"],
          tip: "One Bottle of Blue Fire is enough to go on; more saves trips. Blue Fire melts any red ice.",
          check: "One walkthrough says shops do not sell Blue Fire until you have bottled your own and beaten the Ice Cavern, so fill your Bottles here." },
        { id: "c09-s02-03", text: "Back in the blade room, melt the red ice over the left exit. In the cavern beyond, open the frozen chest on the right for the **Compass** and Hookshot the Gold Skulltula on the high pillar. There is no Piece of Heart in this room now: it moved to a Business Scrub in Death Mountain Crater (see the crater sweep in chapter 8).",
          collect: ["ice-cavern-compass-chest", "ice-cavern-gs-heart-piece-room"],
          tip: "Icicles regrow here; keep moving. You can refill Blue Fire inside this cavern." },
        { id: "c09-s02-04", text: "Melt the red ice on the blade room's other exit and follow the hall to the block room. Hookshot the Gold Skulltula on the high wall, then push the ice block across the slippery floor to reach the 5 Silver Rupees, using Blue Fire on the alcove's red ice and the **Song of Time** where Navi turns green.",
          collect: ["ice-cavern-gs-push-block-room"],
          tip: "Pushing the block into a pit resets it to the start." },
        { id: "c09-s02-05", text: "Push the block under the new hallway, climb in, beat 2 Freezards and melt the red ice wall. Defeat the White Wolfos for the **Iron Boots**, and Sheik teaches you the **Serenade of Water**.",
          collect: ["ice-cavern-iron-boots-chest", "sheik-in-ice-cavern"],
          tip: "Leave with at least 1 Bottle of Blue Fire. The Iron Boots let you sink and walk underwater, and they have a quick-swap shortcut, so you can put them on or take them off without the menu." }
      ]
    },
    {
      id: "c09-s03", title: "King Zora and the Fountain Floor", era: "adult", kind: "overworld",
      steps: [
        { id: "c09-s03-01", text: "Return to **Zora's Domain** and pour **Blue Fire** on King Zora's red ice. Stand on the platform below him and talk to him for the **Zora Tunic**.",
          collect: ["zd-king-zora-thawed"],
          check: "Reported: tunics have no quick-swap shortcut, so swap them in the equipment menu. One walkthrough says you take slow drowning damage underwater without the Zora Tunic." },
        { id: "c09-s03-02", text: "Melt the red ice on the **Zora Shop** with Blue Fire to open it again. It sells the Zora Tunic for 300 Rupees, for use if a Like Like ever eats yours.",
          collect: ["zd-shop-item-1"],
          check: "One walkthrough says the Zora Shop is sealed, so you cannot buy a spare Zora Tunic. Try the Blue Fire; if it stays shut, do not let a Like Like swallow your tunic: shoot it from a distance, or kill it quickly to get your items back." },
        { id: "c09-s03-03", text: "Go back to **Zora's Fountain**, put on the Zora Tunic and the **Iron Boots** and sink to the floor of the lake for a **Piece of Heart**.",
          collect: ["zf-bottom-freestanding-poh"],
          tip: "The Zora Tunic removes the air timer underwater." }
      ]
    },
    {
      id: "c09-s04", title: "Biggoron's Sword Trade, Part 2", era: "adult", kind: "sidequest",
      steps: [
        { id: "c09-s04-01", text: "Show the **Prescription** to King Zora. He gives you the **Eyeball Frog**, and a timer of 2 minutes 30 seconds starts.",
          collect: ["zd-trade-prescription"],
          warn: "Warp songs and Farore's Wind spoil a timed trade item at once. A spoiled frog turns back into the Prescription and sends you back to Zora's Domain.",
          check: "One walkthrough adds that Zora's River is shallow enough to walk in, which is slower than swimming, so stay out of the water on this run. That clashes with the swim in the next step, so save time wherever you can." },
        { id: "c09-s04-02", text: "Jump into the water below the Domain and swim down the river along the left side, then ride Epona to **Lake Hylia**. Give the frog to the scientist in the laboratory for the **World's Finest Eye Drops**; a timer of 3 minutes 30 seconds starts.",
          collect: ["lh-trade-eyeball-frog"] },
        { id: "c09-s04-03", text: "Ride Epona to Kakariko and climb **Death Mountain Trail** to Biggoron. Hand over the Eye Drops before the 3 minutes 30 seconds end to get the **Biggoron Receipt**.",
          collect: ["dmt-trade-eyedrops"],
          warn: "Do this before the Water Temple: afterward, entering Kakariko can start a long scene that runs the timer out.",
          tip: "Shoot the Skullwalltulas on the climbing wall with the Fairy Bow on the way up.",
          check: "Only 1 source supports that warning; the 2 main walkthroughs do not mention the scene. Do the trade before the Water Temple to be safe." },
        { id: "c09-s04-04", text: "Wait 3 days on the mountain. Playing the **Sun's Song** 6 times covers it, and you can leave and come back, because time passes everywhere. Then show Biggoron the Biggoron Receipt for **Biggoron's Sword**.",
          collect: ["dmt-biggoron"],
          tip: "Biggoron's Sword never breaks and hits about twice as hard as the Master Sword, but it takes both hands, so you cannot raise a shield while it is equipped. The Biggoron Receipt is called the Biggoron Receipt in the item menu." }
      ]
    }
  ],
  boss: null
});

/* ------------------------------------------------------------------ c10 */
OOT.walkthrough.push({
  id: "c10-water-temple", num: 10, title: "Lake Hylia & the Water Temple", era: "adult",
  summary: "Sink to the Water Temple under the drained Lake Hylia, raise and lower the water to reach every key, beat Dark Link for the Longshot and Morpha for the Water Medallion, then take the Fire Arrows from the refilled lake.",
  needs: ["Iron Boots", "Zora Tunic", "Hookshot", "Zelda's Lullaby", "Song of Time", "Serenade of Water", "Fairy Bow", "Bombs"],
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
        { id: "c10-s02-01", text: "Follow the ruins of the dry lakebed to the lowest point, sink with the Iron Boots and **Zora Tunic**, and Hookshot the crystal above the gate to open the **Water Temple**. In the main room, sink, clear the Spikes with the Hookshot and enter the low passage between 2 torches (east on the map). Take off the boots to float up the shaft after Ruto, go through the door at the top and defeat the 4 Spikes in the small room beyond for the **Dungeon Map**.",
          collect: ["water-temple-map-chest"],
          tip: "Deku Nuts stun all 4 Spikes at once. Some walls are see-through lattice, so you can look into the next room. Colored paths on the floor lead to the rooms that change the water level, and those rooms carry a symbol. The temple has only 4 Small Keys and 4 locked doors, and the Iron Boots have a quick-swap shortcut for sinking and floating." },
        { id: "c10-s02-02", text: "Go back out to the shaft where Ruto disappeared and play **Zelda's Lullaby** at the Triforce symbol on its wall to drain the temple to its lowest level. On the bottom floor, shoot an arrow through the lit torch to light the other 2 (or use Din's Fire), then beat the Shell Blades in the room behind for a **Small Key**.",
          collect: ["water-temple-torches-chest"],
          tip: "Shell Blades are only open to attack while their shells are open." },
        { id: "c10-s02-03", text: "With the water at 2F, return to the bottom floor of the central pillar room. A floating block has opened a way to B1. Hookshot the green switch there to open a hatch, and climb up to a Gold Skulltula.",
          collect: ["water-temple-gs-behind-gate"],
          check: "This follows IGN. The older south-passage route (bomb the cracked floor) is dropped. If you cannot find the B1 opening, check that the water really is at 2F." },
        { id: "c10-s02-04", text: "In the west passage (on the map), push the block into the hole and swim on. Ride the water pillar in the next room, then in the spinning-water dragon room land on the dragon's body with the Iron Boots, Hookshot the crystal in its mouth and slip through the timed door for a **Small Key**.",
          collect: ["water-temple-dragon-chest"],
          tip: "Take the boots off to float past the 2 Shell Blades behind the door. Hit the crystal inside to get back out." },
        { id: "c10-s02-05", text: "Unlock the door in the central pillar, Hookshot up and play Zelda's Lullaby to raise the water to the middle level. A hidden hole opens under the rising platform: drop in with the Iron Boots, Hookshot the crystal switch, clear the enemies that drop in and float up to the small chest. It no longer holds a Small Key.",
          collect: ["water-temple-central-pillar-chest"],
          check: "One walkthrough says the small chest in the underwater chamber holds a Red Rupee." }
      ]
    },
    {
      id: "c10-s03", title: "Water Temple: Middle and High Water", era: "adult", kind: "dungeon",
      steps: [
        { id: "c10-s03-01", text: "Go south from the main chamber and bomb the cracked rock wall. Sink through the pool with the Iron Boots, float up, hit the switch, beat the Like Like (shoot it from a distance) and Hookshot to the chest on 1F for the **Compass**.",
          collect: ["water-temple-compass-chest"],
          warn: "The Like Like can swallow your Zora Tunic, so shoot it from a distance." },
        { id: "c10-s03-02", text: "Back in the low passage between the 2 torches (east on the map) where you followed Ruto, float up the shaft and bomb the cracked wall for a small chest with a **Small Key**.",
          collect: ["water-temple-cracked-wall-chest"],
          tip: "A Gold Skulltula also sits behind a cracked east wall in the room where you met Ruto. It is listed in the Longshot Rooms section of this chapter, but you can take it now.",
          check: "Switch 2 walkthroughs show a Small Key chest on the east side, reached by bombing a wall and passing an underwater hall. It is reported to be this chest." },
        { id: "c10-s03-03", text: "Unlock the west door (on the map) on the middle level, lure out and defeat the Tektite, ride the water pillar and hit the crystal with a Bomb or an arrow. Come out on the alcove above the main room and play **Zelda's Lullaby** to raise the water to the top.",
          collect: [] },
        { id: "c10-s03-04", text: "Through the top-level west door (on the map), drop to the lowest platform of the waterfall room and Hookshot up the falling platforms to the locked door. In the statue room, Hookshot the central crystal to raise and lower the water as you climb from platform to platform, then defeat the Like Like across the spikes and Hookshot the ceiling target.",
          collect: [],
          warn: "The Like Like can swallow your Zora Tunic. Defeat it before you leave the room to get it back." },
        { id: "c10-s03-05", text: "In the misty room with the dead tree, walk toward the door and turn around to meet Dark Link. Beat him and open the big chest for the **Longshot**.",
          collect: ["water-temple-longshot-chest"],
          tip: "He copies your sword moves. Din's Fire, the Megaton Hammer and Biggoron's Sword all get past his guard. Late in the fight he jumps and spins; wait for the spin to end, then strike." }
      ]
    },
    {
      id: "c10-s04", title: "Water Temple: The Longshot Rooms", era: "adult", kind: "dungeon",
      steps: [
        { id: "c10-s04-01", text: "Play the **Song of Time** to clear the block behind the Longshot chest and drop into the river. Swim along the left past the first whirlpool, put on the Iron Boots at the next corner and Longshot the Gold Skulltula, then follow the right wall to the platform, shoot the golden eye switch and get through the timed door before it shuts to reach the river chest. It no longer holds a Small Key.",
          collect: ["water-temple-gs-river", "water-temple-river-chest"],
          tip: "Whirlpools drag you back to the start; swimming is easier here than walking in the boots." },
        { id: "c10-s04-02", text: "Go back to the room where you met Ruto. Sink to the ground floor with the Iron Boots, float up, and bomb the cracked wall on the east side. Beat the Shell Blades and take the Gold Skulltula off the far wall.",
          collect: ["water-temple-gs-falling-platform-room"],
          check: "5 walkthroughs agree on this token, but guides differ on the water level needed. If you cannot reach the wall, change the water level. If you also see a token in the west waterfall room, take it too." },
        { id: "c10-s04-03", text: "Lower the water at the east Triforce (on the map), raise it to the middle level at the central pillar, and Longshot the Gold Skulltula at the top of the inside of the pillar.",
          collect: ["water-temple-gs-central-pillar"] },
        { id: "c10-s04-04", text: "On the south side of the main room (on the map), shoot the golden eye switch and Longshot through the grate while it is raised. Pull the red block until it locks, Longshot back out, repeat and push it instead to open the alcove on the right with a **Small Key**.",
          collect: ["water-temple-central-bow-target-chest"] },
        { id: "c10-s04-05", text: "Leave the water at the middle level, sink to the main room's floor with the Iron Boots and take the north corridor (on the map). Longshot over the spiked room and unlock the door, swim the boulder river past the Tektites, bomb both odd walls in the Stinger room and drop the big block onto the floor switch, cross the second water-pillar room, and from the upper alcove back in the boulder room Longshot the Gold Skulltula on the right.",
          collect: ["water-temple-gs-near-boss-key-chest"],
          tip: "Hug the right side of the boulder river. Pots in the rooms near the Boss Key refill fairies when you re-enter." },
        { id: "c10-s04-06", text: "Sink toward the waterfall in the deeper water, deal with the Shell Blade around the bend and float up to the last door, which is no longer locked. The chest beyond holds the **Boss Key**.",
          collect: ["water-temple-boss-key-chest"] }
      ]
    },
    {
      id: "c10-s05", title: "Morpha", era: "adult", kind: "boss",
      steps: [
        { id: "c10-s05-01", text: "Raise the water to the top level, Longshot the target on the north dragon statue (on the map) and run straight up the spike-trap ramp without stopping. Defeat Morpha (see the boss card), take the **Heart Container**, and Ruto gives you the **Water Medallion**.",
          collect: ["morpha", "water-temple-morpha-heart"],
          tip: "Take the Heart Container before the blue warp. Pots near the boss approach hold fairies. Use the wall Longshot points to escape the spinning arm. In a late phase tendrils fill the arena and only 1 hides the core; bait it into slamming, then pull the core out." }
      ]
    },
    {
      id: "c10-s06", title: "Lake Hylia Refilled", era: "adult", kind: "sweep",
      steps: [
        { id: "c10-s06-01", text: "The lake refills after the temple, and it is morning. From the island pedestal, shoot an arrow at the rising sun; the **Fire Arrows** appear on the island, so swim over and take them.",
          collect: ["lh-sun"], time: "day",
          tip: "If you miss the sunrise, play the Sun's Song until the next morning comes." },
        { id: "c10-s06-02", text: "At night, Longshot onto the branch of the tree on the island above the Water Temple entrance and take the Gold Skulltula on top.",
          collect: ["lh-gs-tree"], time: "night",
          check: "2 walkthroughs say the token is still night-only; 1 lists it with no night condition. Go at night to be safe (play the Sun's Song if it is day). Reach it with the Longshot from the top of the big tree on the central island." }
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
        { id: "c11-s02-01", text: "Warp to the **Temple of Time** with the **Prelude of Light** and put the Master Sword back to become a child. At **Hyrule Castle**, slip past the guards to the secret entrance where you found Talon, and stand under the tree nearby. Play the **Song of Storms**, drop into the hole, bomb the wall on your left and catch the Gold Skulltula with the **Boomerang**.",
          collect: ["hc-gs-storms-grotto"] },
        { id: "c11-s02-02", text: "At **Zora's River**, buy the rest of the **Magic Beans** from the salesman by the entrance. Stand on the log jutting into the river and play the **Song of Storms** to the frogs for a **Piece of Heart**, then the **Song of Time** for 50 Rupees.",
          collect: ["zr-frogs-in-the-rain", "zr-frogs-song-of-time"],
          tip: "Each bean costs 10 Rupees more than the last, so the last 3 cost 270 Rupees together. You need them for the crater, Death Mountain Trail and the Desert Colossus." },
        { id: "c11-s02-03", text: "With all 6 songs played to them, the frogs start a game: each time one jumps up after a fly, play the note it sits on. Finish the 14-note run without a mistake for a **Piece of Heart**; the first run is always {notes:A ← → ↓ ← → ↓ A ↓ A ↓ → ← A}.",
          collect: ["zr-frogs-ocarina-game"],
          tip: "A mistake restarts the game. Later runs use random notes.",
          check: "No walkthrough confirms that the 14-note run is unchanged. Nintendo Life describes the frogs' second piece as matching button prompts. If the notes on screen differ from this run, follow the screen." },
        { id: "c11-s02-04", text: "Catch **Bugs** in a Bottle. In Kakariko, climb **Death Mountain Trail** and plant a **Magic Bean** in the soft soil outside **Dodongo's Cavern**. Then warp to **Death Mountain Crater** with the **Bolero of Fire**. Release the Bugs on the soft soil beside the warp pad, defeat the **Gold Skulltula** that crawls out, and plant a Magic Bean in the same soil. A child can't leave the warp pad on foot, so play the **Nocturne of Shadow** to warp to the Graveyard next to Kakariko.",
          collect: ["dmc-gs-bean-patch", "bean-death-mountain-crater", "bean-death-mountain-trail"],
          tip: "Bugs hide under small rocks. Start with full hearts. If you skip this crater trip, you also skip the Gold Skulltula here and the bean ride for a Piece of Heart in chapter 12.",
          warn: "The crater has no heat timer. Without the Goron Tunic, Link catches fire a couple of seconds after he enters and keeps losing health until he leaves. Do the errand fast." },
        { id: "c11-s02-05", text: "Walk out of Kakariko and down the stairs into **Hyrule Field**. In the plot of farmland next to the Kakariko entrance, play the **Song of Storms** to open a grotto. Inside it is pitch black: play the **Sun's Song** to freeze the 2 ReDeads, defeat them before they break free, and open the chest for a Purple Rupee (50 Rupees).",
          collect: ["kak-redead-grotto-chest"],
          tip: "In the original game this grotto was in the middle of Kakariko and opened with a Bomb. There is no grotto there in this version, so don't bomb the village square." }
      ]
    },
    {
      id: "c11-s03", title: "Bottom of the Well: The Main Floor", era: "child", kind: "dungeon",
      steps: [
        { id: "c11-s03-01", text: "In **Kakariko**, go into the **Windmill** and play the **Song of Storms** to the man turning the music box. The windmill spins fast and the well in the village drains.",
          collect: [] },
        { id: "c11-s03-02", text: "Crawl into the **Bottom of the Well**, beat the Big Skulltula from behind and walk through the fake wall straight ahead. In the main room, follow the stream of water to the right to avoid the hidden pits, and play **Zelda's Lullaby** on the Triforce symbol at the far side to drain the water; then drop into the dry pit at the entrance for a chest of Bombs and into the grated pit on the west side (on the map) for a small chest.",
          collect: ["bottom-of-the-well-underwater-front-chest", "bottom-of-the-well-underwater-left-chest"],
          tip: "The Boomerang stuns the big Green Bubble that circles the room." },
        { id: "c11-s03-03", text: "Crawl through past the dry pit, defeat the hanging Skulltula and climb the vines to the door. Let one of Dead Hand's hands grab you, break free, and slash Dead Hand's head when it leans in to bite; the big chest holds the **Lenses of Truth**. It is a pair of goggles, the Lenses of Truth, with a quick-swap shortcut, so you can switch them on and off without the menu. Look through the Lenses in the same room to find an invisible chest with 200 Rupees.",
          collect: ["bottom-of-the-well-lens-of-truth-chest", "bottom-of-the-well-invisible-chest"],
          tip: "Dead Hand burrows and resurfaces after each hit. The Kokiri Sword is the reliable weapon here. The Lenses drain magic while they are on, so turn them off between uses." },
        { id: "c11-s03-04", text: "Back in the main room, use the Lenses on the walls in the 2 corners near the entrance. Each hides an alcove with a chest holding a **Small Key**.",
          collect: ["bottom-of-the-well-front-left-fake-wall-chest", "bottom-of-the-well-right-bottom-fake-wall-chest"] },
        { id: "c11-s03-05", text: "From the grated pit on the west side (on the map), climb the wall and go through the door to the coffin room. Freeze the Gibdo with the **Sun's Song** and defeat it. Light the coffin torches with a burning Deku Stick to open the coffins; the one in the southwest corner holds a **Small Key**.",
          collect: ["bottom-of-the-well-freestanding-key"],
          tip: "Some coffins release Keese or another Gibdo." },
        { id: "c11-s03-06", text: "Sweep the main room's small chests: walk around to the side wall of the fenced center enclosure (its front hides a pit) for the **Compass**; take the Deku Nuts from the cage guarded by a Skulltula on the right of the center; and bomb the rubble in the northwest corner (on the map) and the rubble left of the entrance for Deku Nuts and Bombchus.",
          collect: ["bottom-of-the-well-compass-chest", "bottom-of-the-well-center-skulltula-chest", "bottom-of-the-well-back-left-bombable-chest", "bottom-of-the-well-front-center-bombable-chest"] }
      ]
    },
    {
      id: "c11-s04", title: "Bottom of the Well: Locked Rooms and Basement", era: "child", kind: "dungeon",
      steps: [
        { id: "c11-s04-01", text: "Unlock the 2 rooms in the middle of the main area. In the left room, deal with the Deku Baba and the flying pots and throw the Boomerang at the Gold Skulltula on the back wall, then again to pull in its token; in the right room, clear the Keese and follow the invisible walkway the Lenses show to the second Gold Skulltula.",
          collect: ["bottom-of-the-well-gs-west-inner-room", "bottom-of-the-well-gs-east-inner-room"] },
        { id: "c11-s04-02", text: "Crawl through the hole in the northeast corner (on the map) and unlock the door. In the pit room, keep the Lenses on to spot the invisible pits, bomb the Beamos and open the corner chest for a **Deku Shield**.",
          collect: ["bottom-of-the-well-fire-keese-chest"],
          warn: "Fire Keese in this room set a Deku Shield on fire. Carry the Hylian Shield." },
        { id: "c11-s04-03", text: "In the Like Like's cage, defeat the Like Like, open the chest for a **Hylian Shield** and throw the Boomerang at the Gold Skulltula on the wall, then again to pull in its token.",
          collect: ["bottom-of-the-well-like-like-chest", "bottom-of-the-well-gs-like-like-cage"],
          warn: "The Like Like swallows shields. Defeat it before leaving to get yours back." },
        { id: "c11-s04-04", text: "Drop into the basement through the center of the main room. Follow the dead-end path on the far right with 2 torches, bomb the 2 boulders, freeze the ReDead with the Sun's Song and open the chest for the **Dungeon Map**.",
          collect: ["bottom-of-the-well-map-chest"],
          tip: "To climb back out, collect the 5 silver pickups around the poison water: 3 by the planks and 1 up each ladder. A green Navi spot in another dead end gives a fairy with the Sun's Song.",
          check: "Walkthroughs name the silver pickups in puzzle rooms differently: silver gems, diamonds, crystals, or still Silver Rupees. The job is the same: collect all 5 and the way opens." }
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
        { id: "c12-s01-01", text: "Climb the steps from the Market to the **Temple of Time** and draw the **Master Sword** to become an adult again. Then warp to **Death Mountain Crater** with the **Bolero of Fire**, wearing the Goron Tunic, and ride the bean plant you planted as a child up to the top of a smoking spire for a **Piece of Heart**.",
          collect: ["dmc-volcano-freestanding-poh"],
          warn: "The crater has no heat timer. Without the Goron Tunic, you catch fire a couple of seconds after you enter and keep losing health. Put the tunic on before you warp in.",
          check: "One source says Pieces of Heart, Heart Containers and Fairies are now picked up with the action button. If the piece does not collect when you touch it, walk up and press the action button." },
        { id: "c12-s01-02",
          text: "Walk down to **Death Mountain Trail** by way of Goron City. Ride the bean plant you planted outside Dodongo's Cavern up to the ledge above the entrance for a **Piece of Heart**.",
          collect: ["dmt-freestanding-poh"],
          tip: "No plant here? You skipped the bean errand in chapter 11, so you need a child trip to plant it first." }
      ]
    },
    {
      id: "c12-s02", title: "Shadow Temple: The Hover Boots", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s02-01", text: "Warp with the **Nocturne of Shadow** and go down to the ring of torches. Stand in the center and cast **Din's Fire** to light them all and open the **Shadow Temple**; inside, Longshot over the first pit and walk through the fake wall the **Lenses of Truth** show.",
          collect: [],
          tip: "Switch the Lenses on only when you need them, since they drain magic. Business Scrubs later in this temple sell magic refills." },
        { id: "c12-s02-02", text: "Turn left and use the Lenses to find the passage behind the skull marking, then follow the right wall through the rooms of taunting voices. In the room beyond, freeze the ReDead with the **Sun's Song**, defeat it and the 2 Keese, and open the chest for the **Dungeon Map**.",
          collect: ["shadow-temple-map-chest"],
          tip: "Circling behind a ReDead helps you dodge its stun attack.",
          check: "One source says ReDeads are tougher now: they glow red before the stun scream and rush you up close. If you see that, freeze them first with the Sun's Song." },
        { id: "c12-s02-03", text: "Keep following the right wall to a hidden passage between 2 pots, past the floating pots. Beat Dead Hand and open the chest for the **Hover Boots**. Hit his face when it lowers. The hands grow back each time he comes up, so burn them again with Din's Fire, which costs magic.",
          collect: ["shadow-temple-hover-boots-chest"],
          tip: "The Hover Boots share a quick-swap shortcut with the Iron Boots, so one press swaps them.",
          check: "Walkthroughs disagree on how Dead Hand comes up. 2 say stand in the middle and cast Din's Fire to burn every hand at once, then his body rises. One says let one hand grab you, then break free. One source says he rises only after every hand is beaten. Try Din's Fire first; if he stays down, let a hand grab you." },
        { id: "c12-s02-04", text: "Back near the entrance, turn the bird statue to face the one real skull torch (check them with the Lenses) to open the gate, and cross the pit with the Hover Boots. At the Beamos crossroads, bomb the Beamos, go right through the fake wall, freeze the 2 Gibdos with the Sun's Song and take the **Compass**.",
          collect: ["shadow-temple-compass-chest"],
          tip: "Jumping is manual, so make the leap over the pit yourself. The boots swap on the quick-swap shortcut." },
        { id: "c12-s02-05", text: "Through the other fake wall at the crossroads, gather the 5 silver pickups in the scythe room (2 in the middle, 2 in the side alcoves, 1 on a log stack you reach with the Longshot). The cell opens on a chest with a **Small Key**.",
          collect: ["shadow-temple-early-silver-rupee-chest"],
          check: "Walkthroughs name the silver pickups differently: silver gems, crystals, silver diamonds, or still Silver Rupees. The job is the same: collect all 5 and the door opens. One source says each one flies into a slot on the door's lock as you take it." }
      ]
    },
    {
      id: "c12-s03", title: "Shadow Temple: The Huge Pit", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s03-01", text: "Blow open the last wall at the crossroads with a Bomb to find a locked door. Go down the ramp, Longshot the Skulltulas that drop from the ceiling, cross the floating platforms under the guillotines, push the Stalfos off the last one, then turn left and follow the invisible platforms the Lenses reveal along the outer wall. On the first big platform, a Business Scrub hides in a small alcove just north of the doorway, before the east door. He sells emergency items such as magic refills and a Green Potion.",
          collect: [],
          tip: "Without the Hover Boots on, the guillotine platforms are easier to time. A Wallmaster lurks in a corner of the ramp and shows a circle of light on the floor under you before it drops. Step out of the circle, then slash it.",
          check: "Walkthroughs disagree on the colour of the Wallmaster's circle: IGN says it turns red just before the drop, another source says purple. Step out of whatever glow you see." },
        { id: "c12-s03-02", text: "In the invisible scythe room, keep the Lenses up, defeat the Keese on the wall and the Like Like to open the grating. Take the 2 chests, one of them invisible, which each hold a Red Rupee (20 Rupees), and the Gold Skulltula on the far wall.",
          collect: ["shadow-temple-invisible-blades-visible-chest", "shadow-temple-invisible-blades-invisible-chest", "shadow-temple-gs-invisible-blades-room"],
          warn: "The Like Like can swallow your tunic or shield. Defeat it before leaving." },
        { id: "c12-s03-03", text: "Ride the platform back past the Stalfos spot and gather the 5 silver pickups on the Beamos bridge to open the gate. Under the falling spikes, find the hidden block with the Lenses and push it under them. Take the chest in the side cell (a Red Rupee, 20 Rupees), then climb the block to the upper floor for the chest with a **Small Key**. Ride the spike traps up and across their tops to a high ledge in the northeast corner and Longshot the Gold Skulltula there.",
          collect: ["shadow-temple-falling-spikes-lower-chest", "shadow-temple-gs-falling-spikes-room", "shadow-temple-falling-spikes-upper-chest", "shadow-temple-falling-spikes-switch-chest"],
          check: "Walkthroughs mention only 2 chests here: a Red Rupee in the side cell and the Small Key on the upper floor. If you find a third chest or a floor switch, open it too." },
        { id: "c12-s03-04", text: "Cross the center strip with one guillotine on the 2 invisible platforms (one moves) to a locked door. Freeze the 2 ReDeads with the Sun's Song and open the chest for 5 Rupees, then gather the room's 5 silver pickups: 1 in the middle, 2 on the walls below Longshot targets, 2 in mid-air in a corner (Lenses, invisible target, Hover Boots).",
          collect: ["shadow-temple-invisible-spikes-chest"],
          tip: "Invisible spike traps cover the floor, so keep the Lenses on while you fight." },
        { id: "c12-s03-05", text: "In the giant skull room, clear the Keese, then throw a Bomb into the skull to break it. Take the **Small Key** it held.",
          collect: ["shadow-temple-freestanding-key"],
          tip: "This room has no Gold Skulltula. The temple's fifth token is in the fan corridor, in the next section." }
      ]
    },
    {
      id: "c12-s04", title: "Shadow Temple: Wind, Boat and Boss Key", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s04-01", text: "In the invisible spikes room, use the Lenses to find a ceiling target and Longshot up to the locked door. Pass the fan corridor in the **Iron Boots**, Longshotting the Skulltula that drops in and then the beam across the pit at the next corner. After the last fan gap, turn around and Longshot the Gold Skulltula on the wall below the ledge. Cross the wind room's bridge the same way. In the side room, freeze the ReDeads and open the invisible chest the Lenses show. It holds a Business Scrub Seed, which calls a Business Scrub who sells supplies, so you can skip it.",
          collect: ["shadow-temple-wind-hint-chest", "shadow-temple-gs-single-giant-pot"],
          tip: "One press of the quick-swap shortcut swaps the Iron Boots and the Hover Boots, so changing between them in the fan corridor is quick. The eye switch over the wind room's door shoots fire; raise your shield. The side room's center spot gives a fairy with the Sun's Song." },
        { id: "c12-s04-02", text: "Find the fake wall in the lane nearest the door, wait for the fan to stop, then put on the Hover Boots and let the wind carry you through. Freeze the Gibdo with the Sun's Song for a small chest (it holds only a Green Rupee), then bomb the cracked wall and open the invisible chest beyond for a **Small Key**.",
          collect: ["shadow-temple-after-wind-enemy-chest", "shadow-temple-after-wind-hidden-chest"] },
        { id: "c12-s04-03", text: "In the boat room, pull the big stone block out and push it into the slot by the ladder to open a shortcut. Then play the **Scarecrow's Song** at the straw-gust spot above the shortcut, summon Pierre and Longshot to him for the Gold Skulltula by the dock.",
          collect: ["shadow-temple-gs-near-ship"],
          warn: "Do not climb the caged vines above the boat. The block resets and cuts you off.",
          check: "One source says Farore's Wind now returns you to the exact spot you marked, for 2 magic. If you want to restock mid-temple, set it on the walkway before boarding and test it." },
        { id: "c12-s04-04", text: "Play **Zelda's Lullaby** on the Triforce on the deck to set sail, and fight off or block the 2 Stalfos that land. When the boat starts to sink, jump off to the platform on the left.",
          collect: [],
          tip: "Jumping is manual, so make the leap off the boat yourself." },
        { id: "c12-s04-05", text: "In the invisible maze, work clockwise from the south room (on the map). The south room's invisible Floormaster guards a chest with a **Small Key**. In the west room, bomb all 3 skull pots: one of them drops the Gold Skulltula and some Rupees.",
          collect: ["shadow-temple-invisible-floormaster-chest", "shadow-temple-gs-triple-giant-pot"],
          tip: "You cannot use a Spin Attack while looking through the Lenses. The 2 Floormasters in the maze keep coming back." },
        { id: "c12-s04-06", text: "In the north room (on the map), burn the 2 wooden spike walls with **Din's Fire** as they close in, then deal with the 2 ReDeads. Open the small chest on the left for a Large Magic Jar and the big chest for the **Boss Key**.",
          collect: ["shadow-temple-spike-walls-left-chest", "shadow-temple-boss-key-chest"],
          check: "One walkthrough says Fire Arrows burn these walls too. Use Din's Fire to be safe." }
      ]
    },
    {
      id: "c12-s05", title: "Bongo Bongo", era: "adult", kind: "boss",
      steps: [
        { id: "c12-s05-01", text: "Back where the boat sank, bomb the cracked base of the standing bird statue by the pit so it falls across the gap as a bridge. Unlock the last door and cross the invisible pillars over the pit with the Lenses and the Hover Boots to the boss door.",
          collect: [],
          tip: "Take a running start on the Hover Boots. Jumping is manual, so make the leaps yourself. The Song of Time at the broken pillar base gives Recovery Hearts." },
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
  needs: ["Longshot", "Hover Boots", "Lenses of Truth", "Megaton Hammer", "Fairy Bow", "Epona", "Iron Boots", "Zora Tunic", "Din's Fire or Fire Arrows", "Zelda's Lullaby", "Song of Time", "Prelude of Light", "Boomerang", "Bombs and Bombchus", "Deku Sticks", "Bottle with Bugs", "Sun's Song", "Magic Bean (bought in chapter 11)"],
  gains: ["Gerudo Pass", "Requiem of Spirit", "Nayru's Love", "Silver Gauntlets", "Mirror Shield", "Spirit Medallion", "Ice Arrows", "Quiver (50)", "Heart Container", "3 Pieces of Heart", "11 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c13-s01", title: "Gerudo Valley and Gerudo's Fortress", era: "adult", kind: "overworld",
      steps: [
        { id: "c13-s01-01", text: "In **Gerudo Valley**, cross the broken bridge with the Longshot (or jump it on Epona). Past the bridge, turn left to the row of rocks, smash them with the **Megaton Hammer** and open the chest behind for 50 Rupees.",
          collect: ["gv-chest"] },
        { id: "c13-s01-02", text: "At **Gerudo's Fortress**, stun or slip past the nearest guard and take the door on the left. Talk to the carpenter in the cell, beat the Gerudo Thief who jumps in, and use her **Small Key** to open his cell.",
          collect: ["hideout-1-torch-jail-gerudo-key"],
          tip: "Any guard who spots you throws you into a cell (you keep your items); escape by Hookshotting or Longshotting the wooden beam above the cell window. An arrow or the Hookshot stuns a guard. Each cell fighter drops a key. Block the thief's slashes with your shield and back off when she crouches to spin; her jumping spin cannot be blocked. The free camera, the dash and the jump make the sneaking easier.",
          check: "One source reports new climbable fences and vines around the fortress. If a route looks different, look for them." },
        { id: "c13-s01-03", text: "Go out the next door to the hall beyond, shoot the guard and climb the ledge to the door. Beat the thief and free the second carpenter.",
          collect: ["hideout-2-torches-jail-gerudo-key"] },
        { id: "c13-s01-04", text: "Back outside, climb down the vines and take the only door on that level. Beat the thief there and free the third carpenter.",
          collect: ["hideout-4-torches-jail-gerudo-key"] },
        { id: "c13-s01-05", text: "Climb back up the vines and take the left door; shoot the 2 guards below with arrows or cross on the Hover Boots. Come out, drop into the walled-off area with a single door, shoot its guard from behind the crate, and beat the last thief to free the fourth carpenter. With all 4 free, a Gerudo gives you the **Gerudo Pass**, which this version calls the Gerudo Pass, and the guards let you move freely.",
          collect: ["hideout-3-torches-jail-gerudo-key", "hideout-gerudo-membership-card"],
          tip: "The Gerudo Pass opens the way to the Mirage Desert, the Gerudo Proving Grounds and the archery range." }
      ]
    },
    {
      id: "c13-s02", title: "Gerudo's Fortress Extras", era: "adult", kind: "sweep",
      steps: [
        { id: "c13-s02-01", text: "Climb to the top of the fortress: through the guard room, along the ledge, onto the roof on your right and up the vines to the highest roof. Longshot across the gap to the chest for a **Piece of Heart**.",
          collect: ["gf-chest"],
          tip: "The Scarecrow's Song with the Hookshot also crosses the gap." },
        { id: "c13-s02-02", text: "Play the **Sun's Song** to bring night, then go to the fortress entrance high in the north-east with the red fabric and Longshot the Gold Skulltula on the high wall to the right of the doorway.",
          collect: ["gf-gs-top-floor"], time: "night",
          tip: "Time keeps running, so night can end while you are here; play the Sun's Song to bring it back.",
          check: "This follows IGN. The older guide put it on the wall below the end of the highest roof. If the north-east wall is empty, try that roof, and confirm in game." },
        { id: "c13-s02-03", text: "Still at night, ride Epona along the archery range course to the top north-east corner and Longshot the Gold Skulltula on the back of the large high target.",
          collect: ["gf-gs-archery-range"], time: "night"},
        { id: "c13-s02-04", text: "Play the **Sun's Song** again to bring day, then ride Epona to the range, talk to the woman in white while mounted and pay for a run. Score over 750 points for a **Piece of Heart**, then play again and score 1,400 for the biggest **Quiver**.",
          collect: ["gf-hba-1000-points", "gf-hba-1500-points"], time: "day",
          tip: "Pots are worth 100 points each; the large targets give 100 for the center and 60 nearer the edge. The first prize is always the Piece of Heart, even on a 1,400-point run. The range is open by day only, and time keeps running, so day can end mid-session.",
          check: "No walkthrough gives the price per run. Expect about 20 Rupees and bring extra. IGN says over 750 points for the piece; older guides said 1,000, so aim high on your first run." }
      ]
    },
    {
      id: "c13-s03", title: "Across the Mirage Desert", era: "adult", kind: "overworld",
      steps: [
        { id: "c13-s03-01", text: "Climb up to the guard in white northwest of the fortress (on the map) so she opens the gate into the **Mirage Desert**, which this version calls the Mirage Desert. Jump onto the box, Longshot over the river of sand, and follow the flags.",
          collect: [],
          tip: "Straying from the line of flags sends you back to the start of the desert. The flags are easier to see by day. Enemies attack on the way.",
          check: "No walkthrough mentions the carpet merchant at the sign pointing to a dock, who sold 10 Bombchus for 200 Rupees. Look for him; if he is gone, skip him." },
        { id: "c13-s03-02", text: "Play the **Sun's Song** to bring night. Follow the markers to the stone building halfway across, take the ladder down and Longshot the Gold Skulltula between the 2 torches. Light both torches with Din's Fire or Fire Arrows for a chest.",
          collect: ["wasteland-gs", "wasteland-chest"],
          check: "One walkthrough says the chest holds a Business Scrub Seed, an item that calls a wandering Business Scrub who sells things. No other source names the contents. If you find 50 Rupees instead, take them.",
          time: "night" },
        { id: "c13-s03-03", text: "At the stone sign inside the building, look through the **Lenses of Truth** to see the Phantom Guide, a Poe, and follow it through the poles to the **Desert Colossus**. Outside the **Spirit Temple**, Sheik teaches you the **Requiem of Spirit**.",
          collect: ["sheik-at-colossus"],
          tip: "Inside, the temple's way on for an adult is blocked by a huge silver block; the child-sized hole on the left is where the next sections go. The Lenses can sit on a quick-swap shortcut, so you can switch them on without the menu." },
        { id: "c13-s03-04", text: "Follow the north wall (on the map) of the Colossus to 2 palm trees and a cracked wall. Blow it open with a Bomb, enter the fountain, pay the Great Fairy's donation and play **Zelda's Lullaby** for **Nayru's Love**.",
          collect: ["colossus-great-fairy-reward"],
          tip: "The donation rises as you use more fountains: the others cost 25, 50, 100 and 200 Rupees, and the one outside Ganondorf's Castle costs 500. Playing the Song of Storms on the rock in the dry oasis fills it and releases fairies.",
          check: "Only one walkthrough gives a price for this fountain: 300 Rupees. Bring at least 300." },
        { id: "c13-s03-05", text: "At night, Longshot the Gold Skulltula on the rocky cliff wall north of the Spirit Temple entrance, near the flock of birds. The Colossus has a second token on a rock that you reach by riding the bean plant; you take it in the Adult Colossus Bean Ride section.",
          collect: ["colossus-gs-tree"], time: "night",
          check: "5 walkthroughs list these Colossus tokens, and none mentions a palm-tree or hill spot. If you find a token on a palm by the oasis or on the big hill, take it too." }
      ]
    },
    {
      id: "c13-s04", title: "Spirit Temple: The Child's Path", era: "child", kind: "dungeon",
      steps: [
        { id: "c13-s04-01", text: "Warp to the **Temple of Time** with the Prelude of Light, become a child and warp back with the **Requiem of Spirit**. Catch **Bugs** under the small rock between 2 boulders in the middle of the desert, release them on the soft soil by the temple entrance for a Gold Skulltula, and plant a **Magic Bean** there.",
          collect: ["colossus-gs-bean-patch", "bean-desert-colossus"],
          tip: "Bring the Hylian Shield: fire burns the Deku Shield." },
        { id: "c13-s04-02", text: "Talk to Nabooru at the crawl hole and crawl through. In the first room, deal with the Armos (bomb it) to open both doors and take the left one; past the Stalfos and the big Green Bubble, curve the **Boomerang** to the left to hit the crystal switch across the gap, and open the chest by the lowered bridge for a **Deku Shield**.",
          collect: ["spirit-temple-child-bridge-chest"],
          warn: "Fire Keese here burn a Deku Shield. Carry the Hylian Shield." },
        { id: "c13-s04-03", text: "Lure the Anubis next to the far door, then shoot the crystal switch with the **Fairy Slingshot** to light the fire there (or cast Din's Fire). Gather the 5 silver pickups in the next room, throw the Boomerang at the Gold Skulltula behind the fence, then again to pull in its token, and carry a lit Deku Stick across the bridge to light the 2 torches for a chest with a **Small Key**.",
          collect: ["spirit-temple-gs-metal-fence", "spirit-temple-child-early-torches-chest"],
          tip: "Anubis copies your movements and only fire hurts it.",
          check: "Walkthroughs name the silver pickups differently: silver gems, silver diamonds, or still Silver Rupees. The job is the same: collect all 5 and the door or gate opens." },
        { id: "c13-s04-04", text: "Back in the first room, crawl through the hole in the north wall (on the map) and unlock the door. Defeat the 2 Skullwalltulas and climb. Turn around and throw the Boomerang at the Gold Skulltula below, then again to pull in its token; shoot the crystal switch on the south tier for 2 chests, and blow open the cracked wall where light leaks in with a **Bombchu**.",
          collect: ["spirit-temple-gs-sun-on-floor-room", "spirit-temple-child-climb-north-chest", "spirit-temple-child-climb-east-chest"],
          tip: "2 Lizalfos drop in when you step on certain spots. Sunlight on the sun emblem in the floor opens the door." }
      ]
    },
    {
      id: "c13-s05", title: "Spirit Temple: The Silver Gauntlets", era: "child", kind: "dungeon",
      steps: [
        { id: "c13-s05-01", text: "In the great statue room, push the Armos off the ledge onto the switch below to hold the door open, then climb the stairs. In the next room, bomb the 3 Beamos, gather the 5 silver pickups so the golden torch lights, and carry its flame to every other torch with a Deku Stick for a **Small Key**; then pull the blocks until the sun-face block sits in the light.",
          collect: ["spirit-temple-sun-block-room-chest"],
          check: "One source says an exploded Beamos launches its eye at you. Step back after each blast." },
        { id: "c13-s05-02", text: "In the stair corridor beyond, turn around and throw the **Boomerang** at the Gold Skulltula above the door you came through, then again to pull in its token.",
          collect: ["spirit-temple-gs-hall-after-sun-block-room"] },
        { id: "c13-s05-03", text: "Strike the seated Iron Knuckle to wake it and defeat it. Outside on the statue's hand, open the chest for the **Silver Gauntlets** before Twinrova carry Nabooru off.",
          collect: ["spirit-temple-silver-gauntlets-chest"],
          tip: "Let it swing, step back, then strike. Luring it into the pillars and the throne breaks them for hearts. Nayru's Love and Bombchus help.",
          check: "One source says shields can now block Iron Knuckle axe swings; another does not mention it. The plan still works: avoid trading hits and strike after a swing." }
      ]
    },
    {
      id: "c13-s06", title: "Spirit Temple: The Adult's Path", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s06-01", text: "Return to adulthood and warp back. With the **Silver Gauntlets**, push the huge silver block into its hole, then Longshot the ceiling crystal in the Beamos room to unlock both doors. Behind the left door, defeat the Wolfos, play **Zelda's Lullaby** on the Triforce and Longshot to the chest that appears for the **Compass**.",
          collect: ["spirit-temple-compass-chest"] },
        { id: "c13-s06-02", text: "Behind the right door, dodge the rolling boulders and gather the 5 silver pickups (the middle one by dropping on the Hover Boots from above). Play the **Song of Time** to move the block in one alcove for a Gold Skulltula, then defeat the Like Like in the next room for a chest with a **Small Key**.",
          collect: ["spirit-temple-gs-boulder-room", "spirit-temple-early-adult-right-chest"] },
        { id: "c13-s06-03", text: "Unlock the Beamos room's locked door and climb the grooved wall. Beat the invisible Floormaster with the Lenses, then push the mirror to shine light on the sun faces; the first 2 drop chests and the third opens the door.",
          collect: ["spirit-temple-first-mirror-left-chest", "spirit-temple-first-mirror-right-chest"],
          tip: "One of the 2 chests is a freezing trap (an Ice Trap), and lighting a fourth sun face drops a Wallmaster." },
        { id: "c13-s06-04", text: "In the statue room, float on the Hover Boots to the statue's near hand and play **Zelda's Lullaby** on its Triforce; Longshot to the other hand for a chest with a **Small Key**. Then go to the upper west corner of the 3F statue room, play the **Scarecrow's Song** to call Pierre, and Longshot to him for a Gold Skulltula.",
          collect: ["spirit-temple-statue-room-hand-chest", "spirit-temple-gs-lobby"],
          tip: "Hover Boots may reach the Gold Skulltula's platform too, but IGN only names the Scarecrow's Song and the Longshot." },
        { id: "c13-s06-05", text: "On the floor of the statue room, light the 2 torches with Din's Fire or Fire Arrows for the **Dungeon Map**. Longshot across to the other Lullaby chest at the top of the southeast corner (on the map, 5 Rupees) and hammer the rusted switch to open the barred middle door.",
          collect: ["spirit-temple-map-chest", "spirit-temple-statue-room-northeast-chest"],
          tip: "The rusted switch in the shortcut room raises an elevator back to the entrance." }
      ]
    },
    {
      id: "c13-s07", title: "Spirit Temple: Mirror Shield and Boss Key", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s07-01", text: "Unlock the door at the top of the southeast corner (on the map) and climb the Beamos stairs. Burn the 3 Anubis with **Din's Fire** or **Fire Arrows**, then in the 4-Armos room shoot an Armos on the far side so it hops onto the center switch and run through the door; the Lenses show 2 invisible chests in the hallway.",
          collect: ["spirit-temple-hallway-left-invisible-chest", "spirit-temple-hallway-right-invisible-chest"] },
        { id: "c13-s07-02", text: "Defeat the Iron Knuckle on the throne, go through the door behind it and step on the floor switch. On the statue's left hand, the big chest gives you the **Mirror Shield**.",
          collect: ["spirit-temple-mirror-shield-chest"],
          tip: "Switch back to the Hylian Shield to block physical projectiles such as Octorok rocks. The Mirror Shield also reflects Beamos lasers. Biggoron's Sword makes the Iron Knuckle easier." },
        { id: "c13-s07-03", text: "Return to the 4-Armos room and take its other door. Reflect sunlight with the **Mirror Shield** onto the sun face to open the chest with a **Small Key**.",
          collect: ["spirit-temple-near-four-armos-chest"] },
        { id: "c13-s07-04", text: "Unlock the door in the Anubis room, defeat the Beamos and climb the moving wall, then play **Zelda's Lullaby** to open the barred door. In the Boss Key room, bomb the fake door left of the burning chest, shoot the gold eye switch behind it to make an ice platform, Longshot up and step on the switch to put out the flames for the **Boss Key**.",
          collect: ["spirit-temple-boss-key-chest"] },
        { id: "c13-s07-05", text: "Hit the crystal switch in the mirror area to open the door, deal with the Lizalfos, and shine light on the sun face above the arch for a small chest with Bombs.",
          collect: ["spirit-temple-topmost-chest"] },
        { id: "c13-s07-06", text: "Blow open the odd west wall (on the map) with a Bomb and turn the mirrors so the beam reaches the round mirror, then drop down and reflect it onto the sun face to lower the platform into the statue room. Shine the light on the statue's face to shatter it, Longshot the bars to the boss door, and beat the Iron Knuckle that blocks the way.",
          collect: [],
          tip: "The final Iron Knuckle is Nabooru under Twinrova's spell. It hits back at once if struck from behind." }
      ]
    },
    {
      id: "c13-s08", title: "Twinrova", era: "adult", kind: "boss",
      steps: [
        { id: "c13-s08-01", text: "Defeat Twinrova with the **Mirror Shield** (see the boss card). Take the **Heart Container**, and Nabooru gives you the **Spirit Medallion** after the blue warp.",
          collect: ["twinrova", "spirit-temple-twinrova-heart"],
          tip: "Take the Heart Container before the blue warp.",
          check: "One source says Heart Containers are now taken with the action button. If it does not collect on touch, press it before the blue warp." }
      ]
    },
    {
      id: "c13-s09", title: "Adult Colossus Bean Ride", era: "adult", kind: "sweep",
      steps: [
        { id: "c13-s09-01", text: "Play the **Sun's Song** if it is day, then ride the bean plant you planted as a child by the temple on its full loop over the **Desert Colossus**. As it climbs after passing under the stone arch near the temple, jump onto the arch for a **Piece of Heart**. A Gold Skulltula is hidden on a raised plateau in the north-east along the ride; take it too.",
          collect: ["colossus-freestanding-poh", "colossus-gs-hill"],
          tip: "Jumping is manual, so time the leap onto the arch yourself.",
          check: "One walkthrough describes the Piece of Heart on a ledge past a red ridge, reached with a bow; every other source drops you onto a structure after the ride.",
          time: "night" }
      ]
    },
    {
      id: "c13-s10", title: "Gerudo Proving Grounds: First Rooms", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s10-01", text: "Warp to the **Temple of Time** with the **Prelude of Light** and ride Epona through **Hyrule Field** and **Gerudo Valley** back to **Gerudo's Fortress**. With the Gerudo Pass in hand, pay the guard in white near the front of the fortress the entrance fee to enter the **Gerudo Proving Grounds**, which this version calls the Gerudo Proving Grounds. In the lobby, shoot the eye switch above the entrance for 2 chests (5 Rupees and arrows).",
          collect: ["gerudo-training-ground-lobby-left-chest", "gerudo-training-ground-lobby-right-chest"],
          check: "The fee is reported as 30 Rupees (2 sources, one of them low trust); no major walkthrough gives a fee, so bring at least 30. One outlet still writes Proving Grounds for the name." },
        { id: "c13-s10-02", text: "Take the left door. Defeat the 2 Stalfos in the sandy room within the 1-minute limit for a chest with a **Small Key**.",
          collect: ["gerudo-training-ground-stalfos-chest"],
          tip: "Finish them close together." },
        { id: "c13-s10-03", text: "In the next room, gather the 5 silver pickups before the timer runs out while dodging the boulders and the invisible fire walls. Longshot the ceiling target to take the last silver pickup and again to pass the flames.",
          collect: [],
          tip: "A Wallmaster hunts this room; keep moving.",
          check: "Walkthroughs name the silver pickups differently: silver gems, silver diamonds, or still Silver Rupees. The job is the same: collect all 5 and the door opens." },
        { id: "c13-s10-04", text: "In the Wolfos room, defeat the 2 Wolfos and 2 White Wolfos and open the room's chest of arrows. The Lenses show a hidden ledge above a fake door; Longshot up and step on the switch to open the sealed doors.",
          collect: ["gerudo-training-ground-before-heavy-block-chest"] },
        { id: "c13-s10-05", text: "Push the silver block into its hole with the **Silver Gauntlets**, then in the next room defeat the 3 Like Likes to make the chests appear. Take the 2 front chests (5 Rupees and 200 Rupees) and the invisible chest in the last sandy hole, which holds a **Small Key**.",
          collect: ["gerudo-training-ground-heavy-block-first-chest", "gerudo-training-ground-heavy-block-second-chest", "gerudo-training-ground-heavy-block-third-chest", "gerudo-training-ground-heavy-block-fourth-chest"],
          warn: "The Like Likes swallow tunics and shields. Defeat them before leaving.",
          tip: "The chest on the platform is an Ice Trap that freezes you." }
      ]
    },
    {
      id: "c13-s11", title: "Gerudo Proving Grounds: Statue, Hammer, Lava and Water", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s11-01", text: "In the eye statue room, ride the spinning outer platform and shoot each of the statue's eyes. Longshot to the small chest that appears for a **Small Key**.",
          collect: ["gerudo-training-ground-eye-statue-chest"] },
        { id: "c13-s11-02", text: "The barred door by the scarecrow spot now opens; the small chest beyond holds a **Small Key**.",
          collect: ["gerudo-training-ground-near-scarecrow-chest"],
          tip: "To get back up, play the Scarecrow's Song there and Longshot to Pierre, or drop into the lava to reset your position." },
        { id: "c13-s11-03", text: "In the hammer room, defeat the Fire Keese and Torch Slugs for a small chest of arrows. Hammer the statues; the northeast one (on the map) hides a switch that briefly stops the fire around the middle chest with a **Small Key**.",
          collect: ["gerudo-training-ground-hammer-room-clear-chest", "gerudo-training-ground-hammer-room-switch-chest"] },
        { id: "c13-s11-04", text: "In the lava room, Longshot to the target overhead and gather the silver pickups with the Hover Boots. Play the **Song of Time** where Navi turns green to raise 2 blocks, then climb through to the right side of the central maze for a **Small Key** and 2 chests (Bombchus and arrows).",
          collect: ["gerudo-training-ground-freestanding-key", "gerudo-training-ground-maze-right-central-chest", "gerudo-training-ground-maze-right-side-chest"],
          tip: "Do not take the silver pickup on the sinking spot last: the door scene can leave you standing in the lava." },
        { id: "c13-s11-05", text: "Through the east door (on the map), play the Song of Time to clear the blocks, then dive in with the **Iron Boots** and **Zora Tunic**. Longshot the 4 Shell Blades, avoid the blade trap on the floor and gather the 5 silver pickups for a chest with a **Small Key**.",
          collect: ["gerudo-training-ground-underwater-silver-rupee-chest"],
          tip: "2 of the silver pickups on the west wall (on the map) can be taken by Longshotting through them; float up for the one near the ceiling." },
        { id: "c13-s11-06", text: "Go back through the lava room and take the left door. Blow up the Beamos with a Bomb and defeat the 2 Dinolfos, which attack together, for a chest with a **Small Key**.",
          collect: ["gerudo-training-ground-beamos-chest"] }
      ]
    },
    {
      id: "c13-s12", title: "Gerudo Proving Grounds: The Central Maze", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s12-01", text: "Enter the central maze from the lobby. Behind the first door on the left, use the Lenses on the ceiling to the left and climb the grate to a hidden chest with a **Small Key**.",
          collect: ["gerudo-training-ground-hidden-ceiling-chest"],
          tip: "The lobby's green Navi spot gives a fairy with the Song of Storms." },
        { id: "c13-s12-02", text: "Unlock the maze doors one after another. The chests along the way hold 50 Rupees, 20 Rupees and arrows.",
          collect: ["gerudo-training-ground-maze-path-first-chest", "gerudo-training-ground-maze-path-second-chest", "gerudo-training-ground-maze-path-third-chest"] },
        { id: "c13-s12-03", text: "Open the last door to the center of the maze and the big chest with the **Ice Arrows**.",
          collect: ["gerudo-training-ground-maze-path-final-chest"] }
      ]
    },
    {
      id: "c13-s13", title: "Running Man's Marathon (Optional)", era: "adult", kind: "sidequest",
      steps: [
        { id: "c13-s13-01", text: "With all 4 carpenters free, talk to the Running Man in the tent in **Gerudo Valley** and race him across Hyrule Field to the Lost Woods bridge. He always wins and there is no prize, so this is only for completion.",
          collect: [],
          tip: "His opening record is 2:38, and the race ends on its own at 4:00." }
      ]
    }
  ],
  boss: {
    id: "boss-twinrova", name: "Sorceress Sisters Twinrova",
    weakness: "Their own magic, turned with the Mirror Shield",
    strategy: [
      "Phase 1: Koume (fire) and Kotake (ice) circle and fire beams that leave burning or freezing patches. Raise the Mirror Shield to catch one sister's beam and turn it onto the other; ice hurts Koume and fire hurts Kotake.",
      "If fire catches you, roll to put it out. 4 hits end the phase.",
      "Phase 2: the sisters merge into Twinrova. Catch 3 beams of the same element with the Mirror Shield, avoiding the other element, which empties the charge.",
      "Release the charged blast at her; she drops onto a platform, where you run in and slash her."
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
        { id: "c14-s01-01", text: "In **Zora's Fountain**, go to the far corner near the Great Fairy's fountain, lift the dark rocks with the **Silver Gauntlets** and go in. Use the Lenses of Truth to see the invisible Skulltulas in the tunnel, climb to the top, turn around and take the Gold Skulltula.",
          collect: ["zf-gs-hidden-cave"],
          tip: "If a rock still blocks the way, try a Bomb.",
          check: "IGN names no Bombs, no Hookshot and no night for this token. If the top of the tunnel is empty, come back at night and play the Sun's Song." },
        { id: "c14-s01-02", text: "Bring 100 tokens to the **House of Skulltula** in Kakariko. The last cursed son is cured and gives you a **Huge Rupee** (200 Rupees), and he gives you another every time you talk to him.",
          collect: ["kak-100-gold-skulltula-reward"] }
      ]
    },
    {
      id: "c14-s02", title: "Ganondorf's Castle: Shadow, Forest and Fire Trials", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s02-01", text: "With all 6 Medallions, warp to the **Temple of Time** with the **Prelude of Light**, where Sheik reveals herself as Princess Zelda and gives you the **Light Arrows** before Ganondorf takes her away. Cross the bridge of light the Sages build to **Ganondorf's Castle**, which this version calls Ganondorf's Castle, and enter the purple Shadow Trial first. Shoot a **Fire Arrow** at the torch on the right so blocks appear and open the small chest (5 Rupees); relight the torches to bring the blocks back, press the switch on the right side and Longshot up to the big chest for the **Golden Gauntlets**.",
          collect: ["tot-light-arrows-cutscene", "ganons-castle-shadow-trial-front-chest", "ganons-castle-shadow-trial-golden-gauntlets-chest"],
          tip: "The 6 trial doors can be done in any order. Do the Shadow Trial first, because 2 other doors are blocked by pillars until you have the Golden Gauntlets. The Like Like here can push you into the pit. Under the bridge to the central tower, the Lenses of Truth reveal a hidden room of Business Scrubs and fairies." },
        { id: "c14-s02-02", text: "Follow the invisible path the Lenses show to the rusted switch and hammer it, then Longshot the torch (or walk the invisible middle path) to the far door. Shoot the orb in the last room with a **Light Arrow** to break the Shadow barrier.",
          collect: [],
          check: "One walkthrough reaches the Golden Gauntlets chest with a stone switch that summons a large chest, and shows a floating platform near the exit. If you find no rusted switch to hammer, look for those." },
        { id: "c14-s02-03", text: "In the green Forest Trial, defeat the Wolfos for a small chest (5 Rupees), and light the 4 center torches and the one above the door with Din's Fire or Fire Arrows. Cross the fan room on the **Hover Boots**, gather the 5 silver pickups (Song of Time at the one on the left, bomb the Beamos), then shoot the orb with a Light Arrow.",
          collect: ["ganons-castle-forest-trial-chest"],
          tip: "Wait for the right-hand fan to stop before going for the last Silver Rupee.",
          check: "Walkthroughs name the silver pickups differently: silver gems, silver diamonds, or still Silver Rupees. The job is the same: collect all 5 and the door opens. One walkthrough gets one of them by reflecting a Beamos laser with the Mirror Shield, and another source says the shield reflects Beamos lasers too. If a bomb does not clear the way, try the shield." },
        { id: "c14-s02-04", text: "In the red Fire Trial, wear the **Goron Tunic** and the Hover Boots, which stop the zig-zag center platform from sinking (the other small platforms still sink). Gather the 5 silver pickups (one lies under the huge pillar you lift with the **Golden Gauntlets**), Longshot the target by the door and shoot the orb.",
          collect: [],
          tip: "Take off the Hover Boots for the silver pickup on the sinking block beside the pillar, and do not leave that one for last.",
          check: "One walkthrough never mentions the Hover Boots. It says the platforms sink as you stand on them, so move fast and rest on the one stable platform, throw a pillar at a stalactite, and crush a Fire Slug with the Megaton Hammer. If the Hover Boots do not stop the zig-zag platform from sinking, use that plan." }
      ]
    },
    {
      id: "c14-s03", title: "Ganondorf's Castle: Water, Spirit and Light Trials", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s03-01", text: "In the blue Water Trial, defeat the 2 Freezards to open the door, fill a Bottle with **Blue Fire** and melt the red ice. Of the 2 chests, open the right one.",
          collect: ["ganons-castle-water-trial-right-chest", "ganons-castle-water-trial-left-chest"],
          tip: "The left chest is an Ice Trap that freezes you.",
          check: "One walkthrough says the right chest holds Bombchus, not a Recovery Heart, and that the trapped chest in the back left is best skipped. If you get Bombchus, keep them: you need one in the Spirit Trial." },
        { id: "c14-s03-02", text: "In the ice block room, push the far block to the snowball and into the hole, then push the near block to the snowball, to the other block and toward the red-ice ledge. Climb up, melt the red ice, hammer the rusted switch and get through before the timer ends, then shoot the orb with a Light Arrow.",
          collect: [],
          tip: "Empty a fairy Bottle for Blue Fire here if you must, and refill it afterward." },
        { id: "c14-s03-03", text: "In the orange Spirit Trial, bomb the Beamos, Longshot to the silver pickup in mid-air and pull the Armos statues back to reach the silver pickups on the walls. In the next room, defeat the 2 Torch Slugs and hit the crystal switch for a chest with a Business Scrub Seed.",
          collect: ["ganons-castle-spirit-trial-crystal-switch-chest"],
          tip: "The crystal switch sits behind the fence; a Spin Attack reaches it.",
          check: "One walkthrough says the Bombchu chest is now the right chest in the Water Trial. If you have no Bombchus, go back for them: you need one 2 rooms later." },
        { id: "c14-s03-04", text: "Send a **Bombchu** through the gap above the bars to hit the far switch, burn the cobweb over the sunlight with a Fire Arrow, and open the invisible chest the Lenses show (arrows). Reflect the light with the **Mirror Shield** onto the sun face just left of where you came in, then shoot the orb.",
          collect: ["ganons-castle-spirit-trial-invisible-chest"],
          tip: "The other sun faces drop Wallmasters. No Fire Arrows? Shoot a normal arrow through a torch in the previous room." },
        { id: "c14-s03-05", text: "Lift the silver obelisk in front of the Light Trial with the Golden Gauntlets. In the first room, look through the Lenses, defeat the Skulltula and the 3 invisible Keese for a small chest with a **Small Key**, and of the 6 other chests open only the first and third on the left and the second on the right as you enter.",
          collect: ["ganons-castle-light-trial-invisible-enemies-chest", "ganons-castle-light-trial-first-left-chest", "ganons-castle-light-trial-third-left-chest", "ganons-castle-light-trial-second-right-chest", "ganons-castle-light-trial-second-left-chest", "ganons-castle-light-trial-first-right-chest", "ganons-castle-light-trial-third-right-chest"],
          tip: "The other 3 chests (second on the left, first and third on the right) are Ice Traps. The safe ones are the chests the Keese perched on." },
        { id: "c14-s03-06", text: "Play **Zelda's Lullaby** on the Triforce in the next room for a **Small Key**, then gather the 5 silver pickups in the rolling-boulder room (the one above the center needs the Longshot). In the empty room beyond, the Lenses show that the far wall is fake; the last orb is behind it.",
          collect: ["ganons-castle-light-trial-lullaby-chest"],
          tip: "Avoid hitting the boulders; it makes them bounce unpredictably.",
          check: "One walkthrough says the Zelda's Lullaby chest holds a Green Rupee and is optional, not a Small Key. Use the Lenses to find the hidden Small Key chest first and count your keys." }
      ]
    },
    {
      id: "c14-s04", title: "Great Fairy Outside the Castle", era: "adult", kind: "sweep",
      steps: [
        { id: "c14-s04-01", text: "Leave the castle and go to the far left end of the grounds outside it. Lift the huge pillar with the **Golden Gauntlets**, enter the fountain and play **Zelda's Lullaby**. The Great Fairy asks for a donation of 500 Rupees, then grants **Double Defense**, which halves the damage you take. The game shows it as the Gift of Halved Damage.",
          collect: ["ogc-great-fairy-reward"],
          tip: "Before the tower, fill your Bottles with fairies or Blue Potions. Bring 500 Rupees; the Adult's Wallet holds exactly that.",
          check: "One walkthrough points to a hidden fairy behind a wall under the tower arch. Look for it before you climb." }
      ]
    },
    {
      id: "c14-s05", title: "Ganon's Tower", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s05-01", text: "With all 6 barriers gone, climb the central tower. Run past the Fire Keese, defeat the 2 Dinolfos (they attack together) to open the door, then defeat the 2 Stalfos close together. In the next room, 2 Iron Knuckles sit on thrones. Defeat both (each wakes when struck); the chest with the **Boss Key** is in that room.",
          collect: ["ganons-tower-boss-key-chest"],
          tip: "Bombchus work well on the first Iron Knuckle. Once the second one's armor breaks, rush it with Biggoron's Sword.",
          check: "One source says shields can block Iron Knuckle axe swings. Try it before you trade hits." },
        { id: "c14-s05-02", text: "Climb past the room of pots to the top of the tower.",
          collect: [],
          tip: "The pots in the last room hold arrows and magic. Leave some for later.",
          warn: "Save before you climb to Ganondorf. Once the tower starts to fall you cannot save again, and a game over returns you to that save." }
      ]
    },
    {
      id: "c14-s06", title: "Ganondorf and Ganon", era: "adult", kind: "boss",
      steps: [
        { id: "c14-s06-01", text: "Defeat Ganondorf at the top of the tower (see the boss card). You cannot target him: send his energy balls back with the sword, shoot a Light Arrow when one knocks him down, then run in and slash. The arena breaks into rings and later shrinks to the corners, with dark waves. Cross the gaps with the Hover Boots after you knock him down. The corners are the safest spots.",
          collect: [],
          tip: "When he fires several orbs at once, time a Spin Attack to send them back. If you own Biggoron's Sword, equip it from the menu first.",
          check: "One walkthrough says parts of the floor also sink, so do not stand still on one tile." },
        { id: "c14-s06-02", text: "Follow Zelda down the collapsing tower, staying close and watching for falling rocks. She opens a barred gate, holds enemies back with light, and freezes the ReDeads on the bridge so you can cut them down. Cross a broken gap with the **Longshot** and smash blocking rubble with the **Megaton Hammer**, so carry both. Defeat the 2 Stalfos that attack partway down.",
          collect: [],
          check: "One walkthrough says there is no timer; another does not mention one. Follow Zelda closely either way." },
        { id: "c14-s06-03", text: "In the ruins, Ganon knocks the Master Sword out of reach. Fight him with the Megaton Hammer or Biggoron's Sword and hit the glowing crystal on his tail from behind; a Light Arrow stuns him. After enough damage you get the Master Sword back, and he adds lightning and ground slams. Hit the glowing weak points on his forearms after a slam. When both are gone he is enraged and cannot be hurt, so run while Zelda prepares. Zelda then opens a weak point on his forehead; shoot it with Light Arrows after a slam (about 4 hits). He kneels, and you finish him with the Master Sword.",
          collect: [],
          tip: "Only the Master Sword can deal the final blow. Any other weapon keeps the fight going." }
      ]
    }
  ],
  boss: {
    id: "boss-ganondorf", name: "Great King of Evil Ganondorf",
    weakness: "Light Arrows while he is stunned; then, as Ganon, his tail",
    strategy: [
      "Ganondorf: you cannot target him. The arena breaks into rings and later shrinks to the corners, with dark waves. The corners are the safest spots, and the Hover Boots carry you across the gaps after you knock him down.",
      "Swing your sword at each energy ball to send it back and keep the rally going until he is stunned; an empty Bottle also returns it. Shoot him with a Light Arrow, then run in and slash him.",
      "When he raises his hands to charge a burst of balls, shoot a Light Arrow at him or answer with a Spin Attack; your shield does not stop it. If you fall to the lower floor, the pots there hold arrows and magic.",
      "Ganon: without the Master Sword, roll between his legs and hit his tail with the Megaton Hammer or Biggoron's Sword. Deku Nuts, the Longshot, Din's Fire or a Light Arrow stun him first; Nayru's Love helps against his blows.",
      "After enough damage you get the Master Sword back, and he adds lightning and ground slams. Hit the glowing weak points on his forearms after a slam. When both are gone he is enraged and cannot be hurt, so run while Zelda prepares.",
      "Zelda then opens a weak point on his forehead. Shoot it with Light Arrows after a slam (about 4 hits), and finish him with the Master Sword when he kneels."
    ]
  }
});
