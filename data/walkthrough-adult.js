/* Walkthrough, chapters c07-c14 (adult era, with the child trips inside them).
   Compiled from research/route-plan.json and research/01-10. Baseline = the original game
   (N64 / GameCube / 3DS). Remake notes flag anything the Switch 2 version may change.
   Decisions and source conflicts: research/compile-notes-adult.md. */
window.OOT = window.OOT || {};
OOT.walkthrough = OOT.walkthrough || [];

/* ------------------------------------------------------------------ c07 */
OOT.walkthrough.push({
  id: "c07-forest-temple", num: 7, title: "Seven Years Later & the Forest Temple", era: "adult",
  summary: "Wake as an adult, win Epona and the Hookshot, learn the Song of Storms and the Minuet of Forest, and clear the Forest Temple for the Forest Medallion. The chapter closes with the Prelude of Light and the Big Poe hunt for the fourth Bottle.",
  needs: ["Master Sword", "Epona's Song", "Saria's Song", "Sun's Song", "Song of Time", "Magic Beans planted in the Graveyard and by the Deku Theater (c06)", "3 Bottles"],
  gains: ["Light Medallion", "Epona", "Hookshot", "Song of Storms", "Pocket Egg", "Minuet of Forest", "Fairy Bow", "Forest Medallion", "Prelude of Light", "Bottle (4th)", "Bombchus (40-token reward)", "Heart Container", "3 Pieces of Heart"],
  sections: [
    {
      id: "c07-s01", title: "Hyrule, Seven Years Later", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s01-01", text: "Wake in the **Chamber of Sages**, where Rauru gives you the **Light Medallion**. Back in the **Temple of Time**, hear Sheik out, then walk into the ruined **Market**.",
          collect: ["tot-reward-from-rauru"],
          tip: "ReDeads now fill the Market square. Play the **Sun's Song** to freeze them in place, then walk past." },
        { id: "c07-s01-02", text: "Climb the road from the Market to where **Hyrule Castle** stood. Follow the path right, past the stone archway, and turn around: a **Gold Skulltula** clings to the back of the arch.",
          collect: ["ogc-gs"],
          tip: "If it hangs out of sword reach, come back with the Hookshot later in this chapter." },
        { id: "c07-s01-03", text: "By day at **Lon Lon Ranch**, pay Ingo 10 Rupees for a ride, then play **Epona's Song** in the corral to call Epona. Bet 50 Rupees on a race against Ingo and win twice to keep her; when he locks the gate, jump the fence on horseback.",
          collect: [], time: "day",
          tip: "Ingo leaves a moment early and swings wide on the bends. Hold the inside line and save your carrots for the last stretch.",
          remake: "Nintendo has confirmed that time now passes in every area, so the ranch can turn to night during your visit. Epona is a daytime-only event in the original; confirm the rule after launch." },
        { id: "c07-s01-04", text: "Ride back into the ranch and talk to Malon while mounted to run her obstacle course. Clear 2 laps of fences in under 50 seconds and she sends a cow to **Link's House** in Kokiri Forest.",
          collect: [], time: "day",
          remake: "Time keeps running at the ranch in the remake (confirmed), so the daytime window can close. The 50-second limit is unconfirmed for the remake." }
      ]
    },
    {
      id: "c07-s02", title: "Kakariko Graveyard", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s02-01", text: "In the **Kakariko Graveyard**, ride the bean plant you planted as a child on the left side up to the high ledge. Roll into the crate there for a **Piece of Heart**.",
          collect: ["graveyard-freestanding-poh"],
          tip: "No plant here? The Longshot from the Water Temple (c10) reaches the ledge instead." },
        { id: "c07-s02-02", text: "Pull back the grave with flowers in front of it, next to the bean plant, and drop into **Dampé's Grave**. Chase his ghost through the tunnels to the chest at the far end for the **Hookshot**.",
          collect: ["graveyard-dampe-race-hookshot-chest"],
          tip: "Keep to the left wall at first. Past the first door, follow the right wall into the big room and leave by its right exit. The flames he drops knock you down, so do not trail him too closely.",
          remake: "The remake adds a dash (confirmed by Nintendo), which may make this chase easier. Check whether the tunnel layout changed." },
        { id: "c07-s02-03", text: "Past the chest, play the **Song of Time** to clear the blue block and climb the stairs into the **Windmill**. Talk to the man turning the music box to learn the **Song of Storms**.",
          collect: ["song-from-windmill"] },
        { id: "c07-s02-04", text: "Go back to Dampé's grave and race him a second time. Reach the end in 60 seconds or less and a **Piece of Heart** appears at the finish.",
          collect: ["graveyard-dampe-race-freestanding-poh"],
          remake: "Nintendo has confirmed a dash in the remake; the 60-second limit may also have been retuned. Confirm after launch." }
      ]
    },
    {
      id: "c07-s03", title: "Kakariko Village", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s03-01", text: "Leave the **Windmill** by its village door and stand on the fence straight ahead. Hookshot up to the roof on your right and talk to the man sitting there for a **Piece of Heart**.",
          collect: ["kak-man-on-roof"] },
        { id: "c07-s03-02", text: "By day, talk to Anju, the Cucco Lady, for the **Pocket Egg**. Keep it: it hatches at the next dawn and opens the trade for **Biggoron's Sword** in the next chapter.",
          collect: ["kak-anju-as-adult", "kak-bazaar-item-1"], time: "day",
          tip: "The adult **Bazaar** sells a **Hylian Shield** for 80 Rupees by day. You only need it if a Like Like ever eats yours.",
          remake: "Time now passes inside Kakariko (confirmed). Anju's trade and the Bazaar are daytime-only in the original, so they can close while you are in town." },
        { id: "c07-s03-03", text: "Enter the **House of Skulltula** with at least 40 tokens (you should hold 46) and take the 40-token reward, a pack of 10 **Bombchus**.",
          collect: ["kak-40-gold-skulltula-reward"] },
        { id: "c07-s03-04", text: "At night, Hookshot from the street onto the roof of the House of Skulltula, then across to the roof of **Impa's House**. The **Gold Skulltula** waits up there.",
          collect: ["kak-gs-above-impas-house"], time: "night",
          remake: "Time now flows in Kakariko (confirmed), so night can end mid-hunt. You can wait for night in town instead of playing the Sun's Song." }
      ]
    },
    {
      id: "c07-s04", title: "Back to the Forest", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s04-01", text: "In **Kokiri Forest**, go to the Gossip Stone by the entrance to the **Lost Woods**, behind Mido's House. Play the **Song of Storms** in front of it, drop into the grotto that opens and take the 20 Rupees from its chest.",
          collect: ["kf-storms-grotto-chest"] },
        { id: "c07-s04-02", text: "In **Link's House**, play **Epona's Song** next to the cow Malon sent you while you hold an empty **Bottle**. It fills the Bottle with milk.",
          collect: ["kf-links-house-cow"] },
        { id: "c07-s04-03", text: "At night, look up at the wall above the **House of Twins** and Hookshot the **Gold Skulltula**, then its token.",
          collect: ["kf-gs-house-of-twins"], time: "night",
          remake: "Kokiri Forest was frozen in time in the original; the remake keeps time running everywhere (confirmed), so night can now arrive or end while you are here." },
        { id: "c07-s04-04", text: "In the Lost Woods go right, left, right; play **Saria's Song** to get Mido out of the way. In the next clearing, turn left and at night ride the bean plant from the theater soil up to the high ledge, where a **Gold Skulltula** waits.",
          collect: ["lw-gs-above-theater"], time: "night",
          remake: "Time now passes in the Lost Woods (confirmed), so the night window can close while you ride the plant." },
        { id: "c07-s04-05", text: "Continue through the Lost Woods (right, left, right, left, straight, left, right from the entrance) to the **Sacred Forest Meadow**. Slip past the Moblins in the maze, and at the top of the steps Sheik teaches you the **Minuet of Forest**.",
          collect: ["sheik-in-forest"],
          tip: "Wait in the alcoves until a patrolling Moblin turns away. For the club-swinging Moblin at the steps, weave toward it and slash at its feet; it drops Rupees." },
        { id: "c07-s04-06", text: "At night, warp back with the Minuet of Forest. Climb the ladder at the end of the maze, go left and Hookshot the **Gold Skulltula** on the wall.",
          collect: ["sfm-gs"], time: "night",
          remake: "Night-only Gold Skulltulas are unconfirmed for the remake, where time now runs everywhere. Check this one after launch." }
      ]
    },
    {
      id: "c07-s05", title: "Forest Temple: Entrance and Courtyards", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s05-01", text: "Hookshot to the tree branch above the meadow steps to reach the **Forest Temple**. Beat the 2 Wolfos inside, climb the vines on the right, Hookshot the **Gold Skulltula** on the vines, then walk the branches to the chest with a **Small Key**.",
          collect: ["forest-temple-gs-first-room", "forest-temple-first-room-chest"],
          tip: "Wolfos guard their front. Wait for one to lunge, then hit its back or tail. The Big Skulltula in the next hallway falls to the Hookshot." },
        { id: "c07-s05-02", text: "In the main hall, after the Poe Sisters steal the torch flames, cross to the far side and climb the ledge and stairs. A **Gold Skulltula** sits on the wall to the right of the door at the top.",
          collect: ["forest-temple-gs-lobby"] },
        { id: "c07-s05-03", text: "Through that door, past a Blue Bubble, the next room locks you in with 2 Stalfos. Defeat both and open the chest that appears for a **Small Key**.",
          collect: ["forest-temple-first-stalfos-chest"],
          tip: "A fairy waits in a pot here. Shield-bash the Blue Bubble or stun it before you strike." },
        { id: "c07-s05-04", text: "Back in the main hall, play the **Song of Time** at the block in the left-hand doorway as you face the far side. In the courtyard beyond, keep right, Hookshot the Skullwalltulas on the vines and climb to the door at the top; beat the Blue Bubble inside for the **Dungeon Map**.",
          collect: ["forest-temple-map-chest"] },
        { id: "c07-s05-05", text: "Go on into the other courtyard, Hookshot the target above the platform and step on the switch to drain the well. Drop into the water, climb out, and Hookshot the side of the small chest on the raised ledge to pull yourself up; open it, then take the **Gold Skulltula** around the corner.",
          collect: ["forest-temple-raised-island-courtyard-chest", "forest-temple-gs-raised-island-courtyard"] },
        { id: "c07-s05-06", text: "Climb down into the drained well and run to its far end for a chest with a **Small Key**. Climb out and return to the main hall.",
          collect: ["forest-temple-well-chest"] }
      ]
    },
    {
      id: "c07-s06", title: "Forest Temple: The Fairy Bow", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s06-01", text: "Unlock the main hall's west door and Hookshot the Skulltula in the hallway. In the block room, pull the blue block out until it lines up with the wall corner, push it back from the side, then push it into its slot; climb the uncovered ladder and push the red block until it stops.",
          collect: [],
          tip: "If the order goes wrong, the blocks can be pulled back out. The goal is a staircase of blocks to the hidden ledge on the right." },
        { id: "c07-s06-02", text: "From the blue block, jump to the hidden ledge on the right and push the red block until it locks, then take the locked door at the top. Cross the twisted corridor and the tilted room, pass through the painting room and enter the Stalfos room for the **Fairy Bow**.",
          collect: ["forest-temple-bow-chest"],
          tip: "Avoid the pit in the middle of the Stalfos room; it drops you back to the earlier 2-Stalfos room. Beat the first Stalfos, then finish the next 2 close together or one revives. A Wallmaster's shadow in the tilted room means move: a grab sends you back to the entrance.",
          remake: "The remake uses a jump button instead of automatic jumping (confirmed). Jump the gaps in the tilted room yourself." },
        { id: "c07-s06-03", text: "Return to the painting room you passed and shoot Joelle's portrait with the **Fairy Bow** each time it appears (she moves frames as you approach). After 3 hits she fights you at the foot of the stairs; win to relight the red torch and take the **Small Key** from the chest.",
          collect: ["forest-temple-red-poe-chest"],
          tip: "Shoot the portraits from the middle level of the stairs. Keep your shield up while she is invisible and strike when she reappears." },
        { id: "c07-s06-04", text: "Go back through the Stalfos room to the other painting room and beat Beth the same way. The chest after her fight holds the **Compass**.",
          collect: ["forest-temple-blue-poe-chest"] },
        { id: "c07-s06-05", text: "Return to the block room. Standing on the blue block's level, shoot the eye switch there for a chest of arrows, then at the top shoot the silver eye switch above the door to straighten the twisted corridor.",
          collect: ["forest-temple-eye-switch-chest"] },
        { id: "c07-s06-06", text: "Walk the straightened corridor into the tilted room, now level, and drop down to the large chest for the **Boss Key**.",
          collect: ["forest-temple-boss-key-chest"] }
      ]
    },
    {
      id: "c07-s07", title: "Forest Temple: The Last 2 Sisters", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s07-01", text: "Drop through the hole by the Boss Key chest and beat the 2 Blue Bubbles to open the door; you come out in the west courtyard. Jump to the narrow platform with Recovery Hearts and take the **Gold Skulltula** on the wall above it.",
          collect: ["forest-temple-gs-level-island-courtyard"],
          remake: "Jumps are manual in the remake (confirmed); make the hop to the platform yourself." },
        { id: "c07-s07-02", text: "Shoot or stun the Big Deku Baba in the way. The last alcove on the right hides a door: defeat the Floormaster inside, then the 3 small hands it splits into, and open the chest for a **Small Key**.",
          collect: ["forest-temple-floormaster-chest"],
          tip: "A Spin Attack clears the 3 small hands together. The door on the right leads back to the block room." },
        { id: "c07-s07-03", text: "From the top of the block room, shoot the silver eye switch again to twist the corridor back, then cross Joelle's room and the Stalfos room to the locked door at the top of Beth's room. Pass the second twisted corridor and the Green Bubble hall, ride the moving platform in the torch room, and melt the frozen eye switch with an arrow shot through the lit torch (or Din's Fire beside it).",
          collect: [] },
        { id: "c07-s07-04", text: "Drop into the hole the twisted corridor now exposes. In the room with the falling ceiling, move between the safe gaps by watching the shadows, open the small chest, and step on the switch to unlock the far door.",
          collect: ["forest-temple-falling-ceiling-room-chest"],
          tip: "The camera is fixed overhead in this room and you cannot target. Stand under the holes in the ceiling when it drops." },
        { id: "c07-s07-05", text: "In the next room, shoot Amy's painting so it breaks into blocks, then push and pull them into the picture before the timer runs out. Solving it summons Amy; beat her to relight the green torch.",
          collect: [],
          tip: "Clear the blue middle block first, then pull the rest toward the fixed block. Leave and re-enter the room to reset a failed attempt." },
        { id: "c07-s07-06", text: "Return to the main hall's balcony, where Meg splits into 4 copies. Shoot the real one, the copy that spins once more than the others, until she falls; all 4 flames are back and the central elevator works.",
          collect: [],
          tip: "Spin Attacks, Din's Fire and Deku Nuts only hit the copies." }
      ]
    },
    {
      id: "c07-s08", title: "Phantom Ganon", era: "adult", kind: "boss",
      steps: [
        { id: "c07-s08-01", text: "Ride the elevator to the basement and push the wall handle to rotate the room. Turn it one stop at a time: press the switch on the white floor, then the one on the red floor, then open the chest of arrows and take the **Gold Skulltula**, then press the switch on the blue floor to open the bars to the boss hallway.",
          collect: ["forest-temple-basement-chest", "forest-temple-gs-basement"] },
        { id: "c07-s08-02", text: "Defeat Phantom Ganon (see the boss notes), take the **Heart Container**, then step into the blue light. Saria gives you the **Forest Medallion** in the Chamber of Sages.",
          collect: ["phantom-ganon", "forest-temple-phantom-ganon-heart"],
          tip: "Take the Heart Container before the blue warp." }
      ]
    },
    {
      id: "c07-s09", title: "The Prelude of Light and the Big Poes", era: "adult", kind: "sidequest",
      steps: [
        { id: "c07-s09-01", text: "Enter the **Temple of Time** with the Forest Medallion. Sheik teaches you the **Prelude of Light**, which warps you back here, and explains that putting the Master Sword back returns you to childhood.",
          collect: ["sheik-at-temple"],
          remake: "The 3DS version added a Boss Challenge mode here (Link's bed). Nintendo has not announced one for the remake." },
        { id: "c07-s09-02", text: "Ride **Epona** in **Hyrule Field** with the **Fairy Bow** and 3 empty Bottles. Catch the Big Poes near the sign at the start of the Market bridge, in the bushes by the stream in the northwest corner, and at the lone tree on the field's western edge: shoot each twice and bottle the soul it leaves. Sell them at the Poe shop in the old guard house by the Market entrance.",
          collect: ["big-poe-hf-02", "big-poe-hf-01", "big-poe-hf-04"],
          tip: "Big Poes appear when you ride through fixed spots and cannot be targeted. The Poe Collector pays 50 Rupees and 100 points for each. If you cannot reach a soul from the saddle, get down and bottle it on foot.",
          remake: "The 10 spawn points come from the original field. The remake's map follows the original layout, but each point needs checking after launch." },
        { id: "c07-s09-03", text: "Catch 3 more around **Lon Lon Ranch**: at the tree by the ranch's north entrance, along the stone wall on the ranch's east side, and at the lone rock at the fork between the ranch and Kakariko. Sell them.",
          collect: ["big-poe-hf-05", "big-poe-hf-06", "big-poe-hf-08"] },
        { id: "c07-s09-04", text: "Catch 3 in the south of the field: at the road fork in the southwest, at the rock ringed by trees in the south, and in the grass by the lone tree in the southeast. Sell them.",
          collect: ["big-poe-hf-07", "big-poe-hf-10", "big-poe-hf-09"] },
        { id: "c07-s09-05", text: "Catch the last Big Poe under the fenced cliff in the northeast of the field, near the Kakariko entrance. Selling it brings your total to 1,000 points, and the Poe Collector gives you a fourth **Bottle**.",
          collect: ["big-poe-hf-03", "market-10-big-poes"] }
      ]
    }
  ],
  boss: {
    id: "boss-phantom-ganon", name: "Evil Spirit from Beyond Phantom Ganon",
    weakness: "Fairy Bow while he rides out of a painting; then his own energy ball, returned with the sword",
    strategy: [
      "Phase 1: he and a decoy ride into the paintings around the room. The real rider comes out toward you while the decoy turns back; shoot him with the **Fairy Bow** as he emerges.",
      "If you miss, he answers with lightning that spreads over the floor. Stay toward a corner of the room, where it does not reach.",
      "After 3 arrow hits he leaves his horse. Phase 2: swing your sword at each energy ball he throws to send it back, and keep the rally going until one hits him.",
      "While he lies stunned, run in and slash him. Later he also charges with his staff; raise your shield or step aside."
    ]
  }
});

/* ------------------------------------------------------------------ c08 */
OOT.walkthrough.push({
  id: "c08-fire-temple", num: 8, title: "Death Mountain Crater & the Fire Temple", era: "adult",
  summary: "Start the trade for Biggoron's Sword, register the Scarecrow's Song and collect the adult Lake Hylia prizes, then earn the Goron Tunic and the Bolero of Fire and clear the Fire Temple for the Megaton Hammer and the Fire Medallion.",
  needs: ["Hookshot", "Fairy Bow", "Epona", "Song of Storms", "Song of Time", "Pocket Egg", "Bombs", "Scarecrow tune taught to Bonooru as a child (c05)", "Magic Bean planted at Lake Hylia (c05)", "Deku Nut upgrade from the Deku Theater already taken (c06)"],
  gains: ["Pierre (Scarecrow's Song)", "Golden Scale", "Quiver (40)", "Goron Tunic", "Giant's Knife", "Bolero of Fire", "Megaton Hammer", "Fire Medallion", "Double Magic", "Prescription (trade item)", "Heart Container", "4 Pieces of Heart"],
  sections: [
    {
      id: "c08-s01", title: "Kakariko: Rewards and the Trade", era: "adult", kind: "sidequest",
      steps: [
        { id: "c08-s01-01", text: "In the **House of Skulltula**, show at least 50 tokens (you should hold 54) for the 50-token reward, a **Piece of Heart**.",
          collect: ["kak-50-gold-skulltula-reward"] },
        { id: "c08-s01-02", text: "By day, pay 20 Rupees at the adult **Shooting Gallery**, the building past the House of Skulltula. Hit all 10 targets with your 15 arrows to win a bigger **Quiver**.",
          collect: ["kak-shooting-gallery-reward"], time: "day",
          tip: "Hitting 8 or 9 targets earns a free retry. The target patterns change from round to round.",
          remake: "Time now passes in Kakariko (confirmed); the gallery is daytime-only in the original. Motion aiming is optional in the remake." },
        { id: "c08-s01-03", text: "Once a dawn has passed, the **Pocket Egg** has hatched into the **Pocket Cucco**. Take it into the house below the stairs, opposite the House of Skulltula, and use it on the man asleep there to wake Talon.",
          collect: ["item-pocket-cucco", "event-wake-talon-kakariko"],
          tip: "If the egg has not hatched yet, play the **Sun's Song** in a place where time passes until morning comes round.",
          remake: "Time now runs in towns (confirmed), so waiting in Kakariko also brings the dawn." }
      ]
    },
    {
      id: "c08-s02", title: "Biggoron's Sword Trade, Part 1", era: "adult", kind: "sidequest",
      steps: [
        { id: "c08-s02-01", text: "By day, give Anju the **Pocket Cucco** now that Talon is awake. She hands you **Cojiro**, a blue Cucco.",
          collect: ["kak-anju-trade-pocket-cucco"], time: "day",
          remake: "Anju trades by day in the original; time now passes in Kakariko (confirmed)." },
        { id: "c08-s02-02", text: "In the **Lost Woods**, take the first left from the Kokiri Forest entrance and show Cojiro to the pale man sitting there. He gives you the **Odd Mushroom**, and a 3-minute timer starts.",
          collect: ["lw-trade-cojiro"],
          warn: "Do not play a warp song or use Farore's Wind while the timer runs: the mushroom spoils at once and turns back into Cojiro. Running out of time does the same.",
          tip: "The bean plant in the clearing by the Lost Woods bridge lifts you to the Hyrule Field exit. From there ride Epona to Kakariko.",
          remake: "The 3-minute limit is from the original. The remake's dash (confirmed) may change how tight it is, and the timer may have been retuned." },
        { id: "c08-s02-03", text: "In Kakariko, go through the **Potion Shop** (the last building on the right toward Death Mountain), out its back door, drop down and walk up the ramp to the old woman's shop. Hand over the mushroom for the **Odd Potion**, then buy a **Blue Potion** from her for 100 Rupees.",
          collect: ["kak-granny-trade-odd-mushroom", "kak-granny-buy-blue-potion"],
          tip: "The Potion Shop is open by day. The Blue Potion needs an empty Bottle and refills hearts and magic." },
        { id: "c08-s02-04", text: "Return to the same spot in the Lost Woods, where the Kokiri girl Fado now sits. Give her the Odd Potion for the **Poacher's Saw**.",
          collect: ["lw-trade-odd-potion"],
          warn: "N64 and GameCube: if you never took the Deku Nut upgrade from the Deku Theater with the Mask of Truth (c06), go back as a child and get it first. Receiving the Poacher's Saw makes that upgrade impossible in those versions.",
          remake: "Unknown whether the remake keeps this Deku Nut upgrade bug; the 3DS version does not have it." }
      ]
    },
    {
      id: "c08-s03", title: "Lake Hylia and the Scarecrow's Song", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s03-01", text: "Ride to **Lake Hylia**. Talk to Bonooru, the scarecrow between the laboratory and the **Fishing Pond**, and play the same 8-note tune you taught him as a child. He registers it as the **Scarecrow's Song**: play it where Navi turns green and Pierre appears as a Hookshot target.",
          collect: ["pierre"],
          tip: "The game does not list this song on the pause screen. Write your tune down. If you have forgotten it, go back as a child and teach Bonooru a new one.",
          remake: "The Switch 2 button layout for ocarina notes has not been announced; songs can also be hummed into the microphone (confirmed)." },
        { id: "c08-s03-02", text: "Ride the bean plant you planted beside the laboratory up onto its roof and climb the ladder to a **Piece of Heart**.",
          collect: ["lh-freestanding-poh"],
          tip: "Without the plant, play the Scarecrow's Song near the laboratory and Hookshot to Pierre instead." },
        { id: "c08-s03-03", text: "Ride the bean plant on toward the Fishing Pond island (or Hookshot over with Pierre) while the lake is dry. Pay 20 Rupees and catch a fish of 14 pounds or more to win the **Golden Scale**.",
          collect: ["lh-adult-fishing"],
          tip: "A fish shown as 13 pounds can fall just short of the cut-off, so keep fishing until one shows 14. Bites come more often early in the morning, at dusk and in rain.",
          remake: "Fishing weights and their display are version-sensitive. The remake's thresholds are unconfirmed; check after launch." },
        { id: "c08-s03-04", text: "Inside the **Lakeside Laboratory**, dive to the bottom of the tank with the Golden Scale, then surface and talk to the scientist for a **Piece of Heart**.",
          collect: ["lh-lab-dive"],
          remake: "Link now swims faster and can dive when he spots something below (confirmed). Whether the scales still limit diving depth is unknown." }
      ]
    },
    {
      id: "c08-s04", title: "Hyrule Field and Gerudo Valley", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s04-01", text: "In **Hyrule Field**, find the lone tree northwest of Lon Lon Ranch, between the castle and Gerudo Valley. Blow a hole open beside it with a Bomb, drop in and dive to the bottom of the grotto's pool for a **Piece of Heart**.",
          collect: ["hf-tektite-grotto-freestanding-poh"],
          tip: "The Stone of Agony reacts near the tree, but you do not need it to open the grotto.",
          remake: "Whether the Golden Scale still sets the diving depth in the remake is unknown; Rumble support for the Stone of Agony is also unannounced." },
        { id: "c08-s04-02", text: "Ride **Epona** into **Gerudo Valley** and jump the broken bridge on horseback. Give the **Poacher's Saw** to the head carpenter by the tent for the **Broken Goron's Sword**.",
          collect: ["gv-trade-poachers-saw"] },
        { id: "c08-s04-03", text: "At night, Hookshot the **Gold Skulltula** on the back wall behind the carpenters' tent. Then look up the sides of the stone archway on your left after the bridge for a second one.",
          collect: ["gv-gs-behind-tent", "gv-gs-pillar"], time: "night",
          remake: "Night-only Gold Skulltulas are unconfirmed for the remake; check both after launch." }
      ]
    },
    {
      id: "c08-s05", title: "Death Mountain Trail", era: "adult", kind: "overworld",
      steps: [
        { id: "c08-s05-01", text: "Enter **Dodongo's Cavern** and take the right-hand door of the main room into the Baby Dodongo corridor. Where Navi turns green below a high alcove, play the **Scarecrow's Song** and Hookshot to Pierre to reach the **Gold Skulltula**.",
          collect: ["dodongos-cavern-gs-scarecrow"] },
        { id: "c08-s05-02", text: "Climb the trail toward **Goron City**. Just before its entrance, play the **Song of Storms** in the raised ring of stones, drop into the grotto and open the chest for 200 Rupees.",
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
          tip: "The reopened shop sells a Goron Tunic for 200 Rupees, for use if a Like Like ever eats yours.",
          remake: "Unknown whether tunics move to a quick-select slot in the remake. Equip the Goron Tunic before you enter the crater either way." },
        { id: "c08-s06-02", text: "Cross the rope walkways to the central platform on the top floor and take the **Gold Skulltula** on its far side.",
          collect: ["gc-gs-center-platform"] },
        { id: "c08-s06-03", text: "Find Medigoron in the room behind the bombable walls on the middle floor and buy the **Giant's Knife** for 200 Rupees.",
          collect: ["gc-medigoron"],
          tip: "The knife hits hard with both hands but breaks after a few swings. Biggoron's Sword (c09) replaces it for good." },
        { id: "c08-s06-04", text: "In Darunia's room, pull the statue aside and take the passage to **Death Mountain Crater** with the Goron Tunic on. Hookshot across the broken bridge, where Sheik teaches you the **Bolero of Fire**.",
          collect: ["sheik-in-crater"] }
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
        { id: "c08-s07-03", text: "From the lower platform, turn around and play the **Song of Time** to move the block, then climb to the door. Raise your shield against the flying floor tiles, kill the Like Like from a distance and take the **Gold Skulltula** on the back wall.",
          collect: ["fire-temple-gs-song-of-time-room"],
          warn: "A Like Like can swallow your Goron Tunic or your shield. Defeat it before you leave the room to get them back." },
        { id: "c08-s07-04", text: "On the far side of the big lava room, Bomb the wall shaped like a door. Free the Goron behind it for another **Small Key**.",
          collect: ["fire-temple-big-lava-room-blocked-door-chest"] },
        { id: "c08-s07-05", text: "Unlock the door on the right of the bridge and climb to the boulder maze: push the block over the fire pit and ride it up, clear the Torch Slugs and use the blocks to climb, then drop a Bomb onto the crystal switch and climb the fenced wall while the fire is off.",
          collect: [] },
        { id: "c08-s07-06", text: "In the lower boulder maze, follow the outer wall to the right. Press the floor switch and free the Goron for a **Small Key**, Bomb the hollow wall of the triangular alcove further on for a **Gold Skulltula**, then take the door 2 turns along for a third Goron and Small Key.",
          collect: ["fire-temple-boulder-maze-lower-chest", "fire-temple-gs-boulder-maze", "fire-temple-boulder-maze-side-room-chest"],
          tip: "Stay close to the wall to keep away from the rolling boulders." }
      ]
    },
    {
      id: "c08-s08", title: "Fire Temple: The Upper Floors", era: "adult", kind: "dungeon",
      steps: [
        { id: "c08-s08-01", text: "Unlock the door at the end of the maze. In the narrow bridge room, shoot the silver eye switch above you and take the right door to the big chest with the **Dungeon Map**.",
          collect: ["fire-temple-map-chest"],
          tip: "A fall from the narrow bridge drops you back into the big lava room." },
        { id: "c08-s08-02", text: "Through the next locked door, run along the hanging grate ahead of the wall of fire and climb up at the end. In the upper maze, Bomb the cracked floor and drop down to free a Goron for a **Small Key**, then cross the narrow platforms to a floor switch, stun the Torch Slug with the Hookshot and free the Goron in the high cage for another.",
          collect: ["fire-temple-boulder-maze-shortcut-chest", "fire-temple-boulder-maze-upper-chest"],
          tip: "You may walk briefly on lava while wearing the Goron Tunic. Roll to put out flames on Link." },
        { id: "c08-s08-03", text: "Back at the upper maze entrance, turn right where Navi turns green, play the **Scarecrow's Song** and Hookshot to Pierre, then to the small elevator. Climb the grate past the door for a **Gold Skulltula**, take the next one on the wall to your left in the room beyond, and hit the switch to drop the flames around the high chest with 200 Rupees.",
          collect: ["fire-temple-gs-scarecrow-climb", "fire-temple-gs-scarecrow-top", "fire-temple-scarecrow-chest"],
          tip: "Hookshot the target on the steep ledge to reach the chest. Drop into the center pit afterward to land back in the narrow bridge room." },
        { id: "c08-s08-04", text: "Halfway along the fire-wall grate, jump to the ledge with a locked door and enter the flame maze. Follow the outer wall right and around the fire pillar to the big chest with the **Compass**.",
          collect: ["fire-temple-compass-chest"],
          warn: "Some doors here are Door Mimics that slam onto you. Bomb a door that sticks out from the wall before you try it.",
          remake: "Jumping is manual in the remake (confirmed); make the leap from the grate yourself." },
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
        { id: "c08-s09-03", text: "Go back to the temple's entrance room and hammer the statue beside the locked door. Beyond it, flip the Torch Slugs with the Hammer, then clear the flying tiles and the Like Like in the second tile room for the **Gold Skulltula** on the back wall.",
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
        { id: "c08-s10-01", text: "Cross the pillar platform to the boss door, Goron Tunic on. Defeat Volvagia (see the boss notes), take the **Heart Container**, and Darunia gives you the **Fire Medallion** after the blue warp.",
          collect: ["volvagia", "fire-temple-volvagia-heart"],
          warn: "The small platform you enter on sinks into the lava once you step onto the arena. There is no retreat.",
          tip: "A pot on the right ledge of the boss door room holds a fairy. Take the Heart Container before the blue warp." }
      ]
    },
    {
      id: "c08-s11", title: "Megaton Hammer Sweep", era: "adult", kind: "sweep",
      steps: [
        { id: "c08-s11-01", text: "In **Death Mountain Crater**, cross back over the bridge and go far left past another bridge to 3 red boulders. Hammer the 2 on the right, enter the fountain and play **Zelda's Lullaby**; the Great Fairy doubles your Magic Meter.",
          collect: ["dmc-great-fairy-reward"] },
        { id: "c08-s11-02", text: "In **Goron City**, hammer the last boulder in the maze to the left of the entrance, the one Bombs could not break, and open the chest behind it for 200 Rupees.",
          collect: ["gc-maze-left-chest"] },
        { id: "c08-s11-03", text: "At night on **Death Mountain Trail**, hammer the red boulder nearest the summit on the upper path where rocks used to fall. A **Gold Skulltula** hides behind it.",
          collect: ["dmt-gs-falling-rocks-path"], time: "night",
          remake: "Night-only Gold Skulltulas are unconfirmed for the remake; check this one after launch." },
        { id: "c08-s11-04", text: "Still at night, hammer the red boulder on the ledge above **Dodongo's Cavern**, by the path to Goron City, for another **Gold Skulltula**.",
          collect: ["dmt-gs-above-dodongos-cavern"], time: "night" }
      ]
    }
  ],
  boss: {
    id: "boss-volvagia", name: "Subterranean Lava Dragon Volvagia",
    weakness: "Its head, hit with the Megaton Hammer while it pokes out of a lava pit",
    strategy: [
      "Volvagia surfaces from one of the 9 lava pits around the platform. When its head rests out of a pit, hit it with the **Megaton Hammer** to stun it, then keep striking until it sinks back.",
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
  gains: ["Iron Boots", "Serenade of Water", "Zora Tunic", "Biggoron's Sword", "3 Pieces of Heart"],
  sections: [
    {
      id: "c09-s01", title: "Zora's River, Domain and Fountain", era: "adult", kind: "overworld",
      steps: [
        { id: "c09-s01-01", text: "At night on **Zora's River**, reach the plateau in the middle of the river (ride the bean plant, or swim the narrow stream back from near Zora's Domain and climb the ladder). Hookshot the **Gold Skulltula** high on its south wall.",
          collect: ["zr-gs-near-raised-grottos"], time: "night",
          remake: "Night-only Gold Skulltulas are unconfirmed for the remake; check after launch." },
        { id: "c09-s01-02", text: "Still at night, cross the small bridge toward Zora's Domain, stand on the fence and Hookshot the **Gold Skulltula** high on the wall.",
          collect: ["zr-gs-above-bridge"], time: "night" },
        { id: "c09-s01-03", text: "Play **Zelda's Lullaby** at the waterfall to enter the frozen **Zora's Domain**. At night, go through King Zora's chamber, turn left to the top of the frozen waterfall, walk to the edge and look left for a **Gold Skulltula**.",
          collect: ["zd-gs-frozen-waterfall"], time: "night",
          tip: "The Hookshot or the Fairy Bow brings it down.",
          remake: "Zora's Domain was frozen in time in the original. Time now passes everywhere (confirmed), so night can end while you are inside." },
        { id: "c09-s01-04", text: "Pass the red ice around King Zora and continue to **Zora's Fountain**. Drop from Jabu-Jabu's old altar onto the ice floes and hop across to the floe off to the right that holds a **Piece of Heart**.",
          collect: ["zf-iceberg-freestanding-poh"],
          tip: "To reach the cavern afterward, cross the 3 spinning floes the other way, then the still one, and jump to the ledge at the cave mouth.",
          remake: "Jumps are manual in the remake (confirmed); time each hop yourself." }
      ]
    },
    {
      id: "c09-s02", title: "Ice Cavern", era: "adult", kind: "dungeon",
      steps: [
        { id: "c09-s02-01", text: "In the **Ice Cavern**, defeat the 4 Freezards in the first big room to lift the ice bars. In the spinning-blade room, gather the 5 Silver Rupees and Hookshot the **Gold Skulltula** high on the wall above one of them.",
          collect: ["ice-cavern-gs-spinning-scythe-room"],
          tip: "Freezards breathe ice; wait for the breath to stop, then close in. Raise your shield to duck under the circling blade. The last Silver Rupee floats above the blade, so jump to it from the ledges." },
        { id: "c09-s02-02", text: "Through the barred door on the upper ledge, clear the Freezard and Ice Keese, then Hookshot up to the platforms. Fill your empty Bottles with **Blue Fire** and pour some on the red ice around the big chest for the **Dungeon Map**.",
          collect: ["ice-cavern-map-chest"],
          tip: "One Bottle of Blue Fire is enough to go on; more saves trips. Blue Fire melts any red ice." },
        { id: "c09-s02-03", text: "Back in the blade room, melt the red ice over the left exit. In the cavern beyond, open the frozen chest on the right for the **Compass**, melt the red ice on the left for a **Piece of Heart**, and Hookshot the **Gold Skulltula** on the high pillar.",
          collect: ["ice-cavern-compass-chest", "ice-cavern-freestanding-poh", "ice-cavern-gs-heart-piece-room"],
          tip: "Icicles regrow here; keep moving. You can refill Blue Fire inside this cavern." },
        { id: "c09-s02-04", text: "Melt the red ice on the blade room's other exit and follow the hall to the block room. Hookshot the **Gold Skulltula** on the high wall, then push the ice block across the slippery floor to reach the 5 Silver Rupees, using Blue Fire on the alcove's red ice and the **Song of Time** where Navi turns green.",
          collect: ["ice-cavern-gs-push-block-room"],
          tip: "Pushing the block into a pit resets it to the start." },
        { id: "c09-s02-05", text: "Push the block under the new hallway, climb in, beat 2 Freezards and melt the red ice wall. Defeat the White Wolfos for the **Iron Boots**, and Sheik teaches you the **Serenade of Water**.",
          collect: ["ice-cavern-iron-boots-chest", "sheik-in-ice-cavern"],
          tip: "Leave with at least 1 Bottle of Blue Fire. The Iron Boots let you sink and walk underwater.",
          remake: "In the original the boots are worn from the Equipment screen. Reports based on footage suggest the remake puts them on a quick-select button; unconfirmed." }
      ]
    },
    {
      id: "c09-s03", title: "King Zora and the Fountain Floor", era: "adult", kind: "overworld",
      steps: [
        { id: "c09-s03-01", text: "Return to **Zora's Domain** and pour **Blue Fire** on King Zora's red ice. Stand on the platform below him and talk to him for the **Zora Tunic**.",
          collect: ["zd-king-zora-thawed"],
          remake: "Unknown whether tunics move to a quick-select slot in the remake." },
        { id: "c09-s03-02", text: "Melt the red ice on the **Zora Shop** with Blue Fire to open it again. It sells the Zora Tunic for 300 Rupees, for use if a Like Like ever eats yours.",
          collect: ["zd-shop-item-1"] },
        { id: "c09-s03-03", text: "Go back to **Zora's Fountain**, put on the Zora Tunic and the **Iron Boots** and sink to the floor of the lake for a **Piece of Heart**.",
          collect: ["zf-bottom-freestanding-poh"],
          tip: "The Zora Tunic removes the air timer underwater." }
      ]
    },
    {
      id: "c09-s04", title: "Biggoron's Sword Trade, Part 2", era: "adult", kind: "sidequest",
      steps: [
        { id: "c09-s04-01", text: "Show the **Prescription** to King Zora. He gives you the **Eyeball Frog**, and a 3-minute timer starts.",
          collect: ["zd-trade-prescription"],
          warn: "Warp songs and Farore's Wind spoil a timed trade item at once. A spoiled frog turns back into the Prescription and sends you back to Zora's Domain.",
          remake: "The trade timers come from the original. The remake's dash and faster swimming (confirmed) may change how tight they are, and the values may have changed." },
        { id: "c09-s04-02", text: "Jump into the water below the Domain and swim down the river along the left side, then ride Epona to **Lake Hylia**. Give the frog to the scientist in the laboratory for the **World's Finest Eye Drops**; a 4-minute timer starts.",
          collect: ["lh-trade-eyeball-frog"] },
        { id: "c09-s04-03", text: "Ride Epona to Kakariko and climb **Death Mountain Trail** to Biggoron. Hand over the Eye Drops before the timer ends to get the **Claim Check**.",
          collect: ["dmt-trade-eyedrops"],
          tip: "Shoot the Skullwalltulas on the climbing wall with the Fairy Bow on the way up. Do this before the Water Temple: after it, entering Kakariko starts a long scene that can run the timer out." },
        { id: "c09-s04-04", text: "Wait until 3 dawns have passed on the mountain, playing the **Sun's Song** to speed the clock, then show Biggoron the Claim Check for **Biggoron's Sword**.",
          collect: ["dmt-biggoron"],
          tip: "Biggoron's Sword never breaks and hits about twice as hard as the Master Sword, but it takes both hands, so you cannot raise a shield while it is equipped.",
          remake: "Time now passes everywhere (confirmed), so you can also leave and come back after 3 days. The 3-dawn wait is unconfirmed for the remake." }
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
  gains: ["Longshot", "Water Medallion", "Fire Arrows", "Heart Container"],
  sections: [
    {
      id: "c10-s01", title: "Lake Hylia (Drained)", era: "adult", kind: "sweep",
      steps: [
        { id: "c10-s01-01", text: "Warp to **Lake Hylia** with the **Serenade of Water**. In the laboratory, wear the **Iron Boots** to sink to the bottom of the pool, roll into the crate and Hookshot the **Gold Skulltula** that appears.",
          collect: ["lh-gs-lab-crate"],
          remake: "Boot handling may change in the remake (unconfirmed footage reports point to a quick-select button)." }
      ]
    },
    {
      id: "c10-s02", title: "Water Temple: Lowering the Water", era: "adult", kind: "dungeon",
      steps: [
        { id: "c10-s02-01", text: "Follow the ruins of the dry lakebed to the lowest point, sink with the Iron Boots and **Zora Tunic**, and Hookshot the crystal above the gate to open the **Water Temple**. In the main room, sink, clear the spiked mines with the Hookshot and enter the low east passage between 2 torches; follow Ruto up, then defeat the 4 mines in her room for the **Dungeon Map**.",
          collect: ["water-temple-map-chest"],
          tip: "Take off the boots to float up after Ruto. Deku Nuts stun all 4 mines at once.",
          remake: "The 3DS version added coloured guide lines to the water-level spots. Nintendo has not announced them for the remake; this guide follows the original layout." },
        { id: "c10-s02-02", text: "Play **Zelda's Lullaby** at the Triforce symbol in that room to drain the temple to its lowest level. On the bottom floor, shoot an arrow through the lit torch to light the other 2 (or use Din's Fire), then beat the Shell Blades in the room behind for a **Small Key**.",
          collect: ["water-temple-torches-chest"],
          tip: "Shell Blades are only open to attack while their shells are open." },
        { id: "c10-s02-03", text: "In the south passage, Bomb the cracked floor and sink through. Press the floor switch, Hookshot the target on the statue it reveals, and hit the crystal switch to open the gate to a **Gold Skulltula**.",
          collect: ["water-temple-gs-behind-gate"],
          tip: "On N64 the crystal switch sits behind the gate; reach it with a Spin Attack." },
        { id: "c10-s02-04", text: "In the west passage, push the block into the hole and swim on. Ride the water pillar in the next room, then in the spinning-water dragon room land on the dragon's body with the Iron Boots, Hookshot the crystal in its mouth and slip through the timed door for a **Small Key**.",
          collect: ["water-temple-dragon-chest"],
          tip: "Take the boots off to float past the 2 Shell Blades behind the door. Hit the crystal inside to get back out." },
        { id: "c10-s02-05", text: "Unlock the door in the central pillar, Hookshot up and play Zelda's Lullaby to raise the water to the middle level. A hidden hole opens under the rising platform: drop in with the Iron Boots, Hookshot the crystal switch, clear the enemies that drop in and float up to a **Small Key**.",
          collect: ["water-temple-central-pillar-chest"] }
      ]
    },
    {
      id: "c10-s03", title: "Water Temple: Middle and High Water", era: "adult", kind: "dungeon",
      steps: [
        { id: "c10-s03-01", text: "At the middle level, enter the east wing with 2 pots. Hookshot over the spikes and on to the farthest ceiling target, then hit the crystal switch with a Bomb or an arrow so the chest stays open for the **Compass**.",
          collect: ["water-temple-compass-chest"] },
        { id: "c10-s03-02", text: "Back in the low east passage to Ruto's room, float up and Bomb the cracked wall for a small chest with a **Small Key**.",
          collect: ["water-temple-cracked-wall-chest"] },
        { id: "c10-s03-03", text: "Unlock the west door on the middle level, lure out and kill the Tektite, ride the water pillar and hit the crystal with a Bomb or an arrow. Come out on the alcove above the main room and play **Zelda's Lullaby** to raise the water to the top.",
          collect: [] },
        { id: "c10-s03-04", text: "Through the top-level west door, drop to the lowest platform of the waterfall room and Hookshot up the falling platforms to the locked door. In the statue room, Hookshot the central crystal to raise and lower the water as you climb from platform to platform, then kill the Like Like across the spikes and Hookshot the ceiling target.",
          collect: [],
          warn: "The Like Like can swallow your Zora Tunic. Defeat it before you leave the room to get it back." },
        { id: "c10-s03-05", text: "In the misty room with the dead tree, walk toward the door and turn around to meet Dark Link. Beat him and open the big chest for the **Longshot**.",
          collect: ["water-temple-longshot-chest"],
          tip: "He copies your sword moves. Din's Fire, the Megaton Hammer and Biggoron's Sword all get past his guard." }
      ]
    },
    {
      id: "c10-s04", title: "Water Temple: The Longshot Rooms", era: "adult", kind: "dungeon",
      steps: [
        { id: "c10-s04-01", text: "Play the **Song of Time** to clear the block behind the Longshot chest and drop into the river. Swim along the left past the first whirlpool, put on the Iron Boots at the next corner and Longshot the **Gold Skulltula**, then follow the right wall to the platform, shoot the golden eye switch and get through the timed door before it shuts for a **Small Key**.",
          collect: ["water-temple-gs-river", "water-temple-river-chest"],
          tip: "Whirlpools drag you back to the start; swimming is easier here than walking in the boots." },
        { id: "c10-s04-02", text: "Drop into the dragon room and return to the main room. With the water at its highest, go back into the west waterfall room and Longshot the **Gold Skulltula** on the right wall.",
          collect: ["water-temple-gs-falling-platform-room"] },
        { id: "c10-s04-03", text: "Lower the water at the east Triforce, raise it to the middle level at the central pillar, and Longshot the **Gold Skulltula** at the top of the inside of the pillar.",
          collect: ["water-temple-gs-central-pillar"] },
        { id: "c10-s04-04", text: "On the south side of the main room, shoot the golden eye switch and Longshot through the grate while it is raised. Pull the red block until it locks, Longshot back out, repeat and push it instead to open the alcove on the right with a **Small Key**.",
          collect: ["water-temple-central-bow-target-chest"] },
        { id: "c10-s04-05", text: "At the lowest level, take the north corridor, Longshot over the spiked room and unlock the door. Swim the boulder river past the Tektites, Bomb both odd walls in the Stinger room and drop the big block onto the floor switch, cross the second water-pillar room, and from the upper alcove back in the boulder room Longshot the **Gold Skulltula** on the right.",
          collect: ["water-temple-gs-near-boss-key-chest"],
          tip: "Hug the right side of the boulder river. Pots in the rooms near the Boss Key refill fairies when you re-enter." },
        { id: "c10-s04-06", text: "Sink toward the waterfall in the deeper water, deal with the Shell Blade around the bend and float up to the last locked door. The chest beyond holds the **Boss Key**.",
          collect: ["water-temple-boss-key-chest"] }
      ]
    },
    {
      id: "c10-s05", title: "Morpha", era: "adult", kind: "boss",
      steps: [
        { id: "c10-s05-01", text: "Raise the water to the top level, Longshot the target on the north dragon statue and run straight up the spike-trap ramp without stopping. Defeat Morpha (see the boss notes), take the **Heart Container**, and Ruto gives you the **Water Medallion**.",
          collect: ["morpha", "water-temple-morpha-heart"],
          tip: "Take the Heart Container before the blue warp. Pots near the boss approach hold fairies." }
      ]
    },
    {
      id: "c10-s06", title: "Lake Hylia Refilled", era: "adult", kind: "sweep",
      steps: [
        { id: "c10-s06-01", text: "The lake refills after the temple, and it is morning. From the island pedestal, shoot an arrow at the rising sun; the **Fire Arrows** appear on the island, so swim over and take them.",
          collect: ["lh-sun"],
          tip: "If you miss the sunrise, play the Sun's Song until the next morning comes." },
        { id: "c10-s06-02", text: "At night, Longshot onto the branch of the tree on the island above the Water Temple entrance and take the **Gold Skulltula** on top.",
          collect: ["lh-gs-tree"], time: "night",
          remake: "Night-only Gold Skulltulas are unconfirmed for the remake; check after launch." }
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
  summary: "Learn the Nocturne of Shadow in burning Kakariko, then return to childhood to collect everything that waited for the Song of Storms, drain the well and take the Lens of Truth from the Bottom of the Well.",
  needs: ["Forest, Fire and Water Medallions", "Song of Storms", "Prelude of Light", "Bolero of Fire", "Zelda's Lullaby", "Sun's Song", "Kokiri Sword", "Boomerang", "Bombs", "Deku Sticks", "Bottle with Bugs", "Rupees for the last Magic Beans"],
  gains: ["Nocturne of Shadow", "Lens of Truth", "Magic Beans planted in Death Mountain Crater and on Death Mountain Trail", "Magic Bean for the Desert Colossus", "3 Pieces of Heart"],
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
        { id: "c11-s02-01", text: "Warp to the **Temple of Time** with the **Prelude of Light** and put the Master Sword back to become a child. At **Hyrule Castle**, slip past the guards to the small tree in the corner near the castle gate, play the **Song of Storms**, drop into the hole, Bomb the wall on your left and catch the **Gold Skulltula** with the **Boomerang**.",
          collect: ["hc-gs-storms-grotto"] },
        { id: "c11-s02-02", text: "At **Zora's River**, buy the rest of the **Magic Beans** from the salesman by the entrance. Stand on the log jutting into the river and play the **Song of Storms** to the frogs for a **Piece of Heart**, then the **Song of Time** for 50 Rupees.",
          collect: ["zr-frogs-in-the-rain", "zr-frogs-song-of-time"],
          tip: "Each bean costs 10 Rupees more than the last, so the last 3 cost 270 Rupees together. You need them for the crater, Death Mountain Trail and the Desert Colossus." },
        { id: "c11-s02-03", text: "With all 6 songs played to them, the frogs start a game: each time one jumps up after a fly, play the note it sits on. Finish the 14-note run without a mistake for a **Piece of Heart**; the first run is always {notes:A ← → ↓ ← → ↓ A ↓ A ↓ → ← A}.",
          collect: ["zr-frogs-ocarina-game"],
          tip: "A mistake restarts the game. Later runs use random notes.",
          remake: "The Switch 2 button layout for ocarina notes has not been announced, and the 3DS version already changed this prompt. Expect the on-screen notes to differ." },
        { id: "c11-s02-04", text: "Catch **Bugs** in a Bottle, then warp to **Death Mountain Crater** with the **Bolero of Fire**. Release the Bugs on the soft soil beside the warp pad, kill the **Gold Skulltula** that crawls out, and plant a **Magic Bean** in the same soil. On the way down **Death Mountain Trail**, plant another in the soft soil outside **Dodongo's Cavern**.",
          collect: ["dmc-gs-bean-patch", "bean-death-mountain-crater", "bean-death-mountain-trail"],
          tip: "Bugs hide under small rocks. A heat timer runs while a child is in the crater, so work quickly." }
      ]
    },
    {
      id: "c11-s03", title: "Bottom of the Well: The Main Floor", era: "child", kind: "dungeon",
      steps: [
        { id: "c11-s03-01", text: "In **Kakariko**, go into the **Windmill** and play the **Song of Storms** to the man turning the music box. The windmill spins fast and the well in the village drains.",
          collect: [] },
        { id: "c11-s03-02", text: "Crawl into the **Bottom of the Well**, beat the Big Skulltula from behind and walk through the fake wall straight ahead. In the main room, follow the stream of water to the right to avoid the hidden pits, and play **Zelda's Lullaby** on the Triforce symbol at the far side to drain the water; then drop into the dry pit at the entrance for a chest of Bombs and into the grated pit on the west side for a small chest.",
          collect: ["bottom-of-the-well-underwater-front-chest", "bottom-of-the-well-underwater-left-chest"],
          tip: "The Boomerang stuns the big Green Bubble that circles the room." },
        { id: "c11-s03-03", text: "Crawl through past the dry pit, kill the hanging Skulltula and climb the vines to the door. Let one of Dead Hand's hands grab you, break free, and slash Dead Hand's head when it leans in to bite; the big chest holds the **Lens of Truth**. Look through the Lens in the same room to find an invisible chest with 200 Rupees.",
          collect: ["bottom-of-the-well-lens-of-truth-chest", "bottom-of-the-well-invisible-chest"],
          tip: "Dead Hand burrows and resurfaces after each hit. The Kokiri Sword is the reliable weapon here.",
          remake: "The Lens of Truth may move to a quick-select button in the remake (unconfirmed footage reports)." },
        { id: "c11-s03-04", text: "Back in the main room, use the Lens on the walls in the 2 corners near the entrance. Each hides an alcove with a chest holding a **Small Key**.",
          collect: ["bottom-of-the-well-front-left-fake-wall-chest", "bottom-of-the-well-right-bottom-fake-wall-chest"] },
        { id: "c11-s03-05", text: "In the coffin room, freeze the Gibdo with the **Sun's Song** and kill it. Light the coffin torches with a burning Deku Stick to open the coffins; the one in the southwest corner holds a **Small Key**.",
          collect: ["bottom-of-the-well-freestanding-key"],
          tip: "Some coffins release Keese or another Gibdo." },
        { id: "c11-s03-06", text: "Sweep the main room's small chests: walk around to the side wall of the fenced center enclosure (its front hides a pit) for the **Compass**; take the Deku Nuts from the cage guarded by a Skulltula on the right of the center; and Bomb the rubble in the northwest corner and the rubble left of the entrance for Deku Nuts and Bombchus.",
          collect: ["bottom-of-the-well-compass-chest", "bottom-of-the-well-center-skulltula-chest", "bottom-of-the-well-back-left-bombable-chest", "bottom-of-the-well-front-center-bombable-chest"] }
      ]
    },
    {
      id: "c11-s04", title: "Bottom of the Well: Locked Rooms and Basement", era: "child", kind: "dungeon",
      steps: [
        { id: "c11-s04-01", text: "Unlock the 2 rooms in the middle of the main area. In the left room, deal with the Deku Baba and the flying pots and Boomerang the **Gold Skulltula** on the back wall; in the right room, clear the Keese and follow the invisible walkway the Lens shows to the second Gold Skulltula.",
          collect: ["bottom-of-the-well-gs-west-inner-room", "bottom-of-the-well-gs-east-inner-room"] },
        { id: "c11-s04-02", text: "Crawl through the hole in the northeast corner and unlock the door. In the pit room, keep the Lens on to spot the invisible pits, Bomb the Beamos and open the corner chest for a **Deku Shield**.",
          collect: ["bottom-of-the-well-fire-keese-chest"],
          warn: "Fire Keese in this room set a Deku Shield on fire. Carry the Hylian Shield." },
        { id: "c11-s04-03", text: "In the Like Like's cage, kill the Like Like, open the chest for a **Hylian Shield** and Boomerang the **Gold Skulltula** on the wall.",
          collect: ["bottom-of-the-well-like-like-chest", "bottom-of-the-well-gs-like-like-cage"],
          warn: "The Like Like swallows shields. Defeat it before leaving to get yours back." },
        { id: "c11-s04-04", text: "Drop into the basement through the center of the main room. Follow the dead-end path on the far right with 2 torches, Bomb the 2 boulders, freeze the ReDead with the Sun's Song and open the chest for the **Dungeon Map**.",
          collect: ["bottom-of-the-well-map-chest"],
          tip: "To climb back out, collect the 5 Silver Rupees around the poison water: 3 by the planks and 1 up each ladder. A green Navi spot in another dead end gives a fairy with the Sun's Song." }
      ]
    },
    {
      id: "c11-s05", title: "Treasure Chest Game", era: "child", kind: "sidequest",
      steps: [
        { id: "c11-s05-01", text: "Make it night (play the **Sun's Song** in Hyrule Field), then warp to the **Temple of Time** with the **Prelude of Light** and walk down into the **Market**, since the drawbridge is up at night. Pay 10 Rupees at the **Treasure Chest Game**, look at each pair of chests through the **Lens of Truth** and open the one holding the key; the chest in the last room holds a **Piece of Heart**.",
          collect: ["market-treasure-chest-game-reward"], time: "night",
          tip: "Without the Lens each room is a coin toss; the Lens shows what each chest holds.",
          remake: "Time now passes in the Market (confirmed), so night can end while you play, and the Market has been rebuilt as a free-camera 3D town. Directions inside it need a post-launch check." }
      ]
    }
  ],
  boss: null
});

/* ------------------------------------------------------------------ c12 */
OOT.walkthrough.push({
  id: "c12-shadow-temple", num: 12, title: "The Shadow Temple", era: "adult",
  summary: "Ride the crater bean plant for a Piece of Heart, then open the Shadow Temple with Din's Fire and work through it with the Lens of Truth and the Hover Boots to beat Bongo Bongo for the Shadow Medallion.",
  needs: ["Nocturne of Shadow", "Din's Fire", "Lens of Truth", "Longshot", "Iron Boots", "Fairy Bow", "Bombs", "Zelda's Lullaby", "Sun's Song", "Goron Tunic", "Magic Bean planted in Death Mountain Crater (c11)"],
  gains: ["Hover Boots", "Shadow Medallion", "Heart Container", "1 Piece of Heart"],
  sections: [
    {
      id: "c12-s01", title: "Death Mountain Crater Bean Ride", era: "adult", kind: "sweep",
      steps: [
        { id: "c12-s01-01", text: "Warp to **Death Mountain Crater** with the **Bolero of Fire** in the Goron Tunic. Ride the bean plant you planted as a child up to the top of a smoking spire for a **Piece of Heart**.",
          collect: ["dmc-volcano-freestanding-poh"] }
      ]
    },
    {
      id: "c12-s02", title: "Shadow Temple: The Hover Boots", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s02-01", text: "Warp with the **Nocturne of Shadow** and go down to the ring of torches. Stand in the center and cast **Din's Fire** to light them all and open the **Shadow Temple**; inside, Longshot over the first pit and walk through the fake wall the **Lens of Truth** shows.",
          collect: [],
          remake: "The Lens of Truth may sit on a quick-select button in the remake (unconfirmed footage reports)." },
        { id: "c12-s02-02", text: "Turn left and use the Lens to find the passage behind the skull marking, then follow the right wall through the rooms of taunting voices. In the room beyond, freeze the ReDead with the **Sun's Song**, kill it and the 2 Keese, and open the chest for the **Dungeon Map**.",
          collect: ["shadow-temple-map-chest"] },
        { id: "c12-s02-03", text: "Keep following the right wall to a hidden passage between 2 pots, past the floating pots. Beat Dead Hand and open the chest for the **Hover Boots**.",
          collect: ["shadow-temple-hover-boots-chest"],
          tip: "The Lens shows where Dead Hand moves underground.",
          remake: "In the original the boots are worn from the Equipment screen; footage reports suggest a quick-select button in the remake (unconfirmed)." },
        { id: "c12-s02-04", text: "Back near the entrance, turn the bird statue to face the one real skull torch (check them with the Lens) to open the gate, and cross the pit with the Hover Boots. At the Beamos crossroads, go right through the fake wall, freeze the 2 Gibdos with the Sun's Song and take the **Compass**.",
          collect: ["shadow-temple-compass-chest"],
          remake: "Jumping is manual in the remake (confirmed). Whether gaps built for Hover Boots play the same is unknown." },
        { id: "c12-s02-05", text: "Through the other fake wall at the crossroads, gather the 5 Silver Rupees in the scythe room (2 in the middle, 2 in the side alcoves, 1 on a log stack you reach with the Longshot). The cell opens on a chest with a **Small Key**.",
          collect: ["shadow-temple-early-silver-rupee-chest"] }
      ]
    },
    {
      id: "c12-s03", title: "Shadow Temple: The Huge Pit", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s03-01", text: "Bomb the last wall at the crossroads to find a locked door. Go down the ramp, Longshot the Skulltulas that drop from the ceiling, cross the floating platforms under the guillotines, push the Stalfos off the last one, then turn left and follow the invisible platforms the Lens reveals along the outer wall.",
          collect: [],
          tip: "Without the Hover Boots on, the guillotine platforms are easier to time. A Wallmaster lurks in a corner of the ramp." },
        { id: "c12-s03-02", text: "In the invisible scythe room, keep the Lens up, kill the Keese on the wall and the Like Like to open the grating. Take the visible chest (5 Rupees), the invisible chest (arrows) and the **Gold Skulltula**.",
          collect: ["shadow-temple-invisible-blades-visible-chest", "shadow-temple-invisible-blades-invisible-chest", "shadow-temple-gs-invisible-blades-room"],
          warn: "The Like Like can swallow your tunic or shield. Defeat it before leaving." },
        { id: "c12-s03-03", text: "Ride the platform back past the Stalfos spot and gather the 5 Silver Rupees on the Beamos bridge to open the gate. Under the falling spikes, find the hidden block with the Lens and push it under them; take the arrows chest and Hookshot the **Gold Skulltula** behind the fence on the left, then climb the block for the chest of Rupees and press the switch for a chest with a **Small Key**.",
          collect: ["shadow-temple-falling-spikes-lower-chest", "shadow-temple-gs-falling-spikes-room", "shadow-temple-falling-spikes-upper-chest", "shadow-temple-falling-spikes-switch-chest"] },
        { id: "c12-s03-04", text: "Cross the center strip with one guillotine on the 2 invisible platforms (one moves) to a locked door. Freeze the 2 ReDeads with the Sun's Song and open the chest for 5 Rupees, then gather the room's 5 Silver Rupees: 1 in the middle, 2 on the walls below Longshot targets, 2 in mid-air in a corner (Lens, invisible target, Hover Boots).",
          collect: ["shadow-temple-invisible-spikes-chest"] },
        { id: "c12-s03-05", text: "In the giant skull room, clear the Keese, then throw a Bomb Flower into the skull to break it. Take the **Small Key** it held and the **Gold Skulltula** hidden behind where it stood.",
          collect: ["shadow-temple-freestanding-key", "shadow-temple-gs-single-giant-pot"] }
      ]
    },
    {
      id: "c12-s04", title: "Shadow Temple: Wind, Boat and Boss Key", era: "adult", kind: "dungeon",
      steps: [
        { id: "c12-s04-01", text: "In the invisible spikes room, use the Lens to find a ceiling target and Longshot up to the locked door. Pass the fan corridor in the **Iron Boots**, cross the wind room's bridge the same way, and in the side room freeze the ReDeads and open the invisible chest the Lens shows for arrows.",
          collect: ["shadow-temple-wind-hint-chest"],
          tip: "The eye switch over the wind room's door shoots fire; raise your shield. The side room's center spot gives a fairy with the Sun's Song." },
        { id: "c12-s04-02", text: "Find the fake wall in the lane nearest the door, wait for the fan to stop, then put on the Hover Boots and let the wind carry you through. Freeze the Gibdo with the Sun's Song for a small chest, then Bomb the cracked dirt pile and open the invisible chest beneath for a **Small Key**.",
          collect: ["shadow-temple-after-wind-enemy-chest", "shadow-temple-after-wind-hidden-chest"] },
        { id: "c12-s04-03", text: "In the boat room, pull the big stone block out and push it into the slot by the ladder to open a shortcut. From the deck of the boat, Longshot to the ledge with the **Gold Skulltula** above the shortcut.",
          collect: ["shadow-temple-gs-near-ship"],
          warn: "Do not climb the caged vines above the boat. The block resets and cuts you off.",
          tip: "If the ledge is out of reach, play the Scarecrow's Song where Navi turns green and Longshot to Pierre." },
        { id: "c12-s04-04", text: "Play **Zelda's Lullaby** on the Triforce on the deck to set sail, and fight off or block the 2 Stalfos that land. When the boat starts to sink, jump off to the platform on the left.",
          collect: [],
          warn: "The boat sinks into the pit at the end of the ride. Jump to the left platform before it goes down.",
          remake: "Jumping is manual in the remake (confirmed); make the leap off the boat yourself." },
        { id: "c12-s04-05", text: "In the invisible maze, work clockwise from the south. The south room's invisible Floormaster guards a chest with a **Small Key**, and the **Gold Skulltula** in the west room sits behind 3 spinning skull pots.",
          collect: ["shadow-temple-invisible-floormaster-chest", "shadow-temple-gs-triple-giant-pot"],
          tip: "You cannot use a Spin Attack while looking through the Lens. The 2 Floormasters in the maze keep coming back." },
        { id: "c12-s04-06", text: "In the north room, burn the 2 wooden spike walls with **Din's Fire** as they close in, then deal with the 2 ReDeads. Open the small chest on the left for 5 Rupees and the big chest for the **Boss Key**.",
          collect: ["shadow-temple-spike-walls-left-chest", "shadow-temple-boss-key-chest"],
          tip: "Fire Arrows do not burn these walls." }
      ]
    },
    {
      id: "c12-s05", title: "Bongo Bongo", era: "adult", kind: "boss",
      steps: [
        { id: "c12-s05-01", text: "Back where the boat sank, shoot an arrow at the Bomb Flowers by the big pillar across the pit so it falls into a bridge. Unlock the last door and cross the invisible pillars over the pit with the Lens and the Hover Boots to the boss door.",
          collect: [],
          tip: "Take a running start on the Hover Boots. The Song of Time at the broken pillar base gives Recovery Hearts." },
        { id: "c12-s05-02", text: "Drop onto the drum and defeat Bongo Bongo (see the boss notes). Take the **Heart Container**, and Impa gives you the **Shadow Medallion** after the blue warp.",
          collect: ["bongo-bongo", "shadow-temple-bongo-bongo-heart"],
          tip: "Bring fairies. Take the Heart Container before the blue warp." }
      ]
    }
  ],
  boss: {
    id: "boss-bongo-bongo", name: "Phantom Shadow Beast Bongo Bongo",
    weakness: "Its single eye, shot after both hands are stunned",
    strategy: [
      "Bongo Bongo's body is invisible; keep the **Lens of Truth** on to see it.",
      "Its drumming bounces you around the drum and can throw you into the poison. The **Hover Boots** stop the bouncing.",
      "Stun each hand while it is open with the **Fairy Bow**, the Longshot or the sword. A clenched fist cannot be stunned.",
      "With both hands stunned it comes at you; shoot its open eye, then run in and slash it while it is down. Biggoron's Sword ends the fight faster."
    ]
  }
});

/* ------------------------------------------------------------------ c13 */
OOT.walkthrough.push({
  id: "c13-spirit-temple", num: 13, title: "Desert Colossus & the Spirit Temple", era: "both",
  summary: "Free the carpenters for the Gerudo's Membership Card, cross the Haunted Wasteland to the Desert Colossus, and clear the Spirit Temple in 2 halves: the Silver Gauntlets as a child, then the Mirror Shield and Twinrova as an adult. The Gerudo Training Ground and its Ice Arrows close the chapter.",
  needs: ["Longshot", "Hover Boots", "Lens of Truth", "Megaton Hammer", "Fairy Bow", "Epona", "Iron Boots", "Zora Tunic", "Din's Fire or Fire Arrows", "Zelda's Lullaby", "Song of Time", "Prelude of Light", "Boomerang", "Bombs and Bombchus", "Deku Sticks", "Bottle with Bugs", "Magic Bean (bought in c11)"],
  gains: ["Gerudo's Membership Card", "Requiem of Spirit", "Nayru's Love", "Silver Gauntlets", "Mirror Shield", "Spirit Medallion", "Ice Arrows", "Quiver (50)", "Heart Container", "3 Pieces of Heart"],
  sections: [
    {
      id: "c13-s01", title: "Gerudo Valley and Gerudo's Fortress", era: "adult", kind: "overworld",
      steps: [
        { id: "c13-s01-01", text: "In **Gerudo Valley**, cross the broken bridge with the Longshot (or jump it on Epona). Past the bridge, turn left to the row of rocks, smash them with the **Megaton Hammer** and open the chest behind for 50 Rupees.",
          collect: ["gv-chest"] },
        { id: "c13-s01-02", text: "At **Gerudo's Fortress**, stun or slip past the nearest guard and take the door on the left. Talk to the carpenter in the cell, beat the Gerudo Thief who jumps in, and use her **Small Key** to open his cell.",
          collect: ["hideout-1-torch-jail-gerudo-key"],
          warn: "Any guard who spots you throws you into a cell (you keep your items). Escape by Hookshotting or Longshotting the wooden beam above the cell window.",
          tip: "An arrow or the Hookshot stuns a guard. Block the thief's slashes with your shield and back off when she crouches to spin; her jumping spin cannot be blocked.",
          remake: "The remake's dash (confirmed) may change how sneaking past the guards plays. Nintendo has shown the fortress with adult Link climbing between tiers." },
        { id: "c13-s01-03", text: "Go out the next door to the hall beyond, shoot the guard and climb the ledge to the door. Beat the thief and free the second carpenter.",
          collect: ["hideout-2-torches-jail-gerudo-key"] },
        { id: "c13-s01-04", text: "Back outside, climb down the vines and take the only door on that level. Beat the thief there and free the third carpenter.",
          collect: ["hideout-4-torches-jail-gerudo-key"] },
        { id: "c13-s01-05", text: "Climb back up the vines and take the left door; shoot the 2 guards below with arrows or cross on the Hover Boots. Come out, drop into the walled-off area with a single door, shoot its guard from behind the crate, and beat the last thief to free the fourth carpenter.",
          collect: ["hideout-3-torches-jail-gerudo-key"] },
        { id: "c13-s01-06", text: "With all 4 carpenters free, a Gerudo appears and gives you the **Gerudo's Membership Card**. The guards now let you move freely.",
          collect: ["hideout-gerudo-membership-card"] }
      ]
    },
    {
      id: "c13-s02", title: "Gerudo's Fortress Extras", era: "adult", kind: "sweep",
      steps: [
        { id: "c13-s02-01", text: "Climb to the top of the fortress: through the guard room, along the ledge, onto the roof on your right and up the vines to the highest roof. Longshot across the gap to the chest for a **Piece of Heart**.",
          collect: ["gf-chest"],
          tip: "The Scarecrow's Song with the Hookshot also crosses the gap." },
        { id: "c13-s02-02", text: "At night, walk to the far end of the same highest roof and look over the edge for the **Gold Skulltula** on the wall below.",
          collect: ["gf-gs-top-floor"], time: "night",
          remake: "Night-only Gold Skulltulas are unconfirmed for the remake; check after launch." },
        { id: "c13-s02-03", text: "Still at night, go to the horseback archery range and Hookshot the **Gold Skulltula** on the lone target at its far end.",
          collect: ["gf-gs-archery-range"], time: "night",
          tip: "The Longshot gives a safer margin if the Hookshot falls short." },
        { id: "c13-s02-04", text: "By day, ride **Epona** to the range and talk to the woman in white while mounted; each run costs 20 Rupees. Score 1,000 points for a **Piece of Heart**, then play again and score 1,500 for the biggest **Quiver**.",
          collect: ["gf-hba-1000-points", "gf-hba-1500-points"], time: "day",
          tip: "Pots are worth 100 points each; the large targets give 100 for the center and 60 nearer the edge. The first prize is always the Piece of Heart, even on a 1,500-point run.",
          remake: "Horseback archery is daytime-only in the original; with time now running everywhere (confirmed), the window can close mid-session." }
      ]
    },
    {
      id: "c13-s03", title: "Across the Haunted Wasteland", era: "adult", kind: "overworld",
      steps: [
        { id: "c13-s03-01", text: "Climb up to the guard in white northwest of the fortress so she opens the gate into the **Haunted Wasteland**. Jump onto the box, Longshot over the river of sand, and follow the flags; at the sign pointing to a dock, cross to the carpet merchant on the Hover Boots and buy his 10 **Bombchus**.",
          collect: ["wasteland-bombchu-salesman"],
          warn: "Straying from the line of flags sends you back to the start of the desert.",
          tip: "The price needs more Rupees than the starting wallet holds. The flags are easier to see by day." },
        { id: "c13-s03-02", text: "At the stone building halfway across, drop inside and Hookshot the **Gold Skulltula** between the 2 torches. Light both torches with Din's Fire or Fire Arrows for a chest with 50 Rupees.",
          collect: ["wasteland-gs", "wasteland-chest"] },
        { id: "c13-s03-03", text: "From the top of the building, look through the **Lens of Truth** to see a Poe guide and follow it through the poles to the **Desert Colossus**. Outside the **Spirit Temple**, Sheik teaches you the **Requiem of Spirit**.",
          collect: ["sheik-at-colossus"],
          tip: "Inside, the temple's way on for an adult is blocked by a huge silver block; the child-sized hole on the left is where the next sections go." },
        { id: "c13-s03-04", text: "Follow the north wall of the Colossus to 2 palm trees and a cracked wall. Bomb it, enter the fountain and play **Zelda's Lullaby** for **Nayru's Love**.",
          collect: ["colossus-great-fairy-reward"],
          tip: "Playing the Song of Storms on the rock in the dry oasis fills it and releases fairies." },
        { id: "c13-s03-05", text: "At night, Hookshot the **Gold Skulltula** near the top of a palm tree by the oasis in the south.",
          collect: ["colossus-gs-tree"], time: "night",
          remake: "Night-only Gold Skulltulas are unconfirmed for the remake; check after launch." }
      ]
    },
    {
      id: "c13-s04", title: "Spirit Temple: The Child's Path", era: "child", kind: "dungeon",
      steps: [
        { id: "c13-s04-01", text: "Warp to the **Temple of Time** with the Prelude of Light, become a child and warp back with the **Requiem of Spirit**. Catch **Bugs** under the small rock between 2 boulders in the middle of the desert, release them on the soft soil by the temple entrance for a **Gold Skulltula**, and plant a **Magic Bean** there.",
          collect: ["colossus-gs-bean-patch", "bean-desert-colossus"] },
        { id: "c13-s04-02", text: "Talk to Nabooru at the crawl hole and crawl through. In the first room, deal with the Armos (Bomb it) to open both doors and take the left one; past the Stalfos and the big Green Bubble, curve the **Boomerang** to the left to hit the crystal switch across the gap, and open the chest by the lowered bridge for a **Deku Shield**.",
          collect: ["spirit-temple-child-bridge-chest"],
          warn: "Fire Keese here burn a Deku Shield. Carry the Hylian Shield." },
        { id: "c13-s04-03", text: "Lure the Anubis next to the far door, then shoot the crystal switch with the **Fairy Slingshot** to light the fire there (or cast Din's Fire). Gather the 5 Silver Rupees in the next room, Boomerang the **Gold Skulltula** behind the fence, and carry a lit Deku Stick across the bridge to light the 2 torches for a chest with a **Small Key**.",
          collect: ["spirit-temple-gs-metal-fence", "spirit-temple-child-early-torches-chest"],
          tip: "Anubis copies your movements and only fire hurts it." },
        { id: "c13-s04-04", text: "Back in the first room, crawl through the hole in the north wall and unlock the door. Kill the 2 Skullwalltulas and climb, turn around to Boomerang the **Gold Skulltula** below, shoot the crystal switch on the south tier for 2 chests, and blow open the cracked wall where light leaks in with a **Bombchu**.",
          collect: ["spirit-temple-gs-sun-on-floor-room", "spirit-temple-child-climb-north-chest", "spirit-temple-child-climb-east-chest"],
          tip: "2 Lizalfos drop in when you step on certain spots. Sunlight on the sun emblem in the floor opens the door." }
      ]
    },
    {
      id: "c13-s05", title: "Spirit Temple: The Silver Gauntlets", era: "child", kind: "dungeon",
      steps: [
        { id: "c13-s05-01", text: "In the great statue room, push the Armos off the ledge onto the switch below to hold the door open, then climb the stairs. In the next room, Bomb the 3 Beamos, gather the 5 Silver Rupees so the golden torch lights, and carry its flame to every other torch with a Deku Stick for a **Small Key**; then pull the blocks until the sun-face block sits in the light.",
          collect: ["spirit-temple-sun-block-room-chest"] },
        { id: "c13-s05-02", text: "In the stair corridor beyond, turn around and Boomerang the **Gold Skulltula** above the door you came through.",
          collect: ["spirit-temple-gs-hall-after-sun-block-room"] },
        { id: "c13-s05-03", text: "Strike the seated Iron Knuckle to wake it and defeat it. Outside on the statue's hand, open the chest for the **Silver Gauntlets** before Twinrova carry Nabooru off.",
          collect: ["spirit-temple-silver-gauntlets-chest"],
          tip: "Let it swing, step back, then strike. Luring it into the pillars and the throne breaks them for hearts. Nayru's Love and Bombchus help." }
      ]
    },
    {
      id: "c13-s06", title: "Spirit Temple: The Adult's Path", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s06-01", text: "Return to adulthood and warp back. With the **Silver Gauntlets**, push the huge silver block into its hole, then Longshot the ceiling crystal in the Beamos room to unlock both doors. Behind the left door, kill the Wolfos, play **Zelda's Lullaby** on the Triforce and Longshot to the chest that appears for the **Compass**.",
          collect: ["spirit-temple-compass-chest"] },
        { id: "c13-s06-02", text: "Behind the right door, dodge the rolling boulders and gather the 5 Silver Rupees (the middle one by dropping on the Hover Boots from above). Play the **Song of Time** to move the block in one alcove for a **Gold Skulltula**, then kill the Like Like in the next room for a chest with a **Small Key**.",
          collect: ["spirit-temple-gs-boulder-room", "spirit-temple-early-adult-right-chest"] },
        { id: "c13-s06-03", text: "Unlock the Beamos room's locked door and climb the grooved wall. Beat the invisible Floormaster with the Lens, then push the mirror to shine light on the sun faces; the first 2 drop chests and the third opens the door.",
          collect: ["spirit-temple-first-mirror-left-chest", "spirit-temple-first-mirror-right-chest"],
          warn: "One of the 2 chests is a freezing trap (an Ice Trap), and lighting a fourth sun face drops a Wallmaster." },
        { id: "c13-s06-04", text: "In the statue room, float on the Hover Boots to the statue's near hand and play **Zelda's Lullaby** on its Triforce; Longshot to the other hand for a chest with a **Small Key**. Then reach the platform Navi points to at the top of the west side for a **Gold Skulltula**.",
          collect: ["spirit-temple-statue-room-hand-chest", "spirit-temple-gs-lobby"],
          tip: "The Hookshot or the Hover Boots reach the Gold Skulltula's platform. If not, play the Scarecrow's Song there and Longshot to Pierre." },
        { id: "c13-s06-05", text: "On the floor of the statue room, light the 2 torches with Din's Fire or Fire Arrows for the **Dungeon Map**. Longshot across to the other Lullaby chest at the top of the southeast corner (5 Rupees) and hammer the rusted switch to open the barred middle door.",
          collect: ["spirit-temple-map-chest", "spirit-temple-statue-room-northeast-chest"],
          tip: "The rusted switch in the shortcut room raises an elevator back to the entrance." }
      ]
    },
    {
      id: "c13-s07", title: "Spirit Temple: Mirror Shield and Boss Key", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s07-01", text: "Unlock the door at the top of the southeast corner and climb the Beamos stairs. Burn the Anubis with fire, then in the 4-Armos room shoot an Armos on the far side so it hops onto the center switch and run through the door; the Lens shows 2 invisible chests in the hallway.",
          collect: ["spirit-temple-hallway-left-invisible-chest", "spirit-temple-hallway-right-invisible-chest"] },
        { id: "c13-s07-02", text: "Defeat the Iron Knuckle on the throne and go through the door behind it. On the statue's left hand, the big chest gives you the **Mirror Shield**.",
          collect: ["spirit-temple-mirror-shield-chest"],
          tip: "Switch back to the Hylian Shield to block physical projectiles such as Octorok rocks." },
        { id: "c13-s07-03", text: "Return to the 4-Armos room and take its other door. Reflect sunlight with the **Mirror Shield** onto the sun face to open the chest with a **Small Key**.",
          collect: ["spirit-temple-near-four-armos-chest"] },
        { id: "c13-s07-04", text: "Unlock the door in the Anubis room, kill the Beamos and climb the moving wall, then play **Zelda's Lullaby** to open the barred door. In the Boss Key room, Bomb the fake door left of the burning chest, shoot the gold eye switch behind it to make an ice platform, Longshot up and step on the switch to put out the flames for the **Boss Key**.",
          collect: ["spirit-temple-boss-key-chest"] },
        { id: "c13-s07-05", text: "Hit the crystal switch in the mirror area to open the door, deal with the Lizalfos, and shine light on the sun face above the arch for a small chest with Bombs.",
          collect: ["spirit-temple-topmost-chest"] },
        { id: "c13-s07-06", text: "Bomb the odd west wall and turn the mirrors so the beam reaches the round mirror, then drop down and reflect it onto the sun face to lower the platform into the statue room. Shine the light on the statue's face to shatter it, Longshot the bars to the boss door, and beat the Iron Knuckle that blocks the way.",
          collect: [],
          tip: "The final Iron Knuckle is Nabooru under Twinrova's spell. It hits back at once if struck from behind." }
      ]
    },
    {
      id: "c13-s08", title: "Twinrova", era: "adult", kind: "boss",
      steps: [
        { id: "c13-s08-01", text: "Defeat Twinrova with the **Mirror Shield** (see the boss notes). Take the **Heart Container**, and Nabooru gives you the **Spirit Medallion** after the blue warp.",
          collect: ["twinrova", "spirit-temple-twinrova-heart"],
          tip: "Take the Heart Container before the blue warp." }
      ]
    },
    {
      id: "c13-s09", title: "Adult Colossus Bean Ride", era: "adult", kind: "sweep",
      steps: [
        { id: "c13-s09-01", text: "Ride the bean plant you planted as a child by the temple on its full loop over the **Desert Colossus**. As it climbs after passing under the stone arch near the temple, jump onto the arch for a **Piece of Heart**.",
          collect: ["colossus-freestanding-poh"],
          remake: "Jumping is manual in the remake (confirmed); time the leap onto the arch yourself." },
        { id: "c13-s09-02", text: "At night, ride the plant again to the big rock hill in the north-center of the desert and take the **Gold Skulltula** on top.",
          collect: ["colossus-gs-hill"], time: "night",
          tip: "The Longshot also reaches the hill." }
      ]
    },
    {
      id: "c13-s10", title: "Gerudo Training Ground: First Rooms", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s10-01", text: "Pay the guard in white near the front of **Gerudo's Fortress** 10 Rupees to enter the **Gerudo Training Ground**. In the lobby, shoot the eye switch above the entrance for 2 chests (5 Rupees and arrows).",
          collect: ["gerudo-training-ground-lobby-left-chest", "gerudo-training-ground-lobby-right-chest"] },
        { id: "c13-s10-02", text: "Take the left door. Defeat the 2 Stalfos in the sandy room within the 1-minute limit for a chest with a **Small Key**.",
          collect: ["gerudo-training-ground-stalfos-chest"],
          tip: "Finish them close together." },
        { id: "c13-s10-03", text: "In the next room, gather the 5 Silver Rupees before the timer runs out while dodging the boulders and the invisible fire walls. Longshot the ceiling target to take the last Silver Rupee and again to pass the flames.",
          collect: [],
          tip: "A Wallmaster hunts this room; keep moving." },
        { id: "c13-s10-04", text: "In the Wolfos room, defeat the 2 Wolfos and 2 White Wolfos and open the room's chest of arrows. The Lens shows a hidden ledge above a fake door; Longshot up and step on the switch to open the sealed doors.",
          collect: ["gerudo-training-ground-before-heavy-block-chest"] },
        { id: "c13-s10-05", text: "Push the silver block into its hole with the **Silver Gauntlets**, then in the next room kill the 3 Like Likes to make the chests appear. Take the 2 front chests (5 Rupees and 200 Rupees) and the invisible chest in the last sandy hole, which holds a **Small Key**.",
          collect: ["gerudo-training-ground-heavy-block-first-chest", "gerudo-training-ground-heavy-block-second-chest", "gerudo-training-ground-heavy-block-third-chest", "gerudo-training-ground-heavy-block-fourth-chest"],
          warn: "The chest on the platform is an Ice Trap that freezes you, and the Like Likes swallow tunics and shields. Defeat them before leaving." }
      ]
    },
    {
      id: "c13-s11", title: "Gerudo Training Ground: Statue, Hammer, Lava and Water", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s11-01", text: "In the eye statue room, ride the spinning outer platform and shoot each of the statue's eyes. Longshot to the small chest that appears for a **Small Key**.",
          collect: ["gerudo-training-ground-eye-statue-chest"] },
        { id: "c13-s11-02", text: "The barred door by the scarecrow spot now opens; the small chest beyond holds a **Small Key**.",
          collect: ["gerudo-training-ground-near-scarecrow-chest"],
          tip: "To get back up, play the Scarecrow's Song there and Longshot to Pierre, or drop into the lava to reset your position." },
        { id: "c13-s11-03", text: "In the hammer room, kill the Fire Keese and Torch Slugs for a small chest of arrows. Hammer the statues; the northeast one hides a switch that briefly stops the fire around the middle chest with a **Small Key**.",
          collect: ["gerudo-training-ground-hammer-room-clear-chest", "gerudo-training-ground-hammer-room-switch-chest"] },
        { id: "c13-s11-04", text: "In the lava room, Longshot to the target overhead and gather the Silver Rupees with the Hover Boots. Play the **Song of Time** where Navi turns green to raise 2 blocks, then climb through to the right side of the central maze for a **Small Key** and 2 chests (Bombchus and arrows).",
          collect: ["gerudo-training-ground-freestanding-key", "gerudo-training-ground-maze-right-central-chest", "gerudo-training-ground-maze-right-side-chest"],
          tip: "Do not take the Silver Rupee on the sinking spot last: the door scene can leave you standing in the lava." },
        { id: "c13-s11-05", text: "Through the east door, play the Song of Time to clear the blocks, then dive in with the **Iron Boots** and **Zora Tunic**. Longshot the 4 Shell Blades, avoid the blade trap on the floor and gather the 5 Silver Rupees for a chest with a **Small Key**.",
          collect: ["gerudo-training-ground-underwater-silver-rupee-chest"],
          tip: "2 of the Silver Rupees on the west wall can be taken by Longshotting through them; float up for the one near the ceiling." },
        { id: "c13-s11-06", text: "Go back through the lava room and take the left door south. Bomb the Beamos and defeat the 2 Dinolfos, which attack together, for a chest with a **Small Key**.",
          collect: ["gerudo-training-ground-beamos-chest"] }
      ]
    },
    {
      id: "c13-s12", title: "Gerudo Training Ground: The Central Maze", era: "adult", kind: "dungeon",
      steps: [
        { id: "c13-s12-01", text: "Enter the central maze from the lobby. Behind the first door on the left, use the Lens on the ceiling to the left and climb the grate to a hidden chest with a **Small Key**.",
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
      "Phase 1: Koume (fire) and Kotake (ice) circle and fire beams that leave burning or freezing patches. Raise the **Mirror Shield** to catch one sister's beam and turn it onto the other; ice hurts Koume and fire hurts Kotake.",
      "If fire catches you, roll to put it out. 4 hits end the phase.",
      "Phase 2: the sisters merge into Twinrova. Catch 3 beams of the same element with the Mirror Shield, avoiding the other element, which empties the charge.",
      "Release the charged blast at her; she drops onto a platform, where you run in and slash her."
    ]
  }
});

/* ------------------------------------------------------------------ c14 */
OOT.walkthrough.push({
  id: "c14-ganons-castle", num: 14, title: "Ganon's Castle & the Finale", era: "adult",
  summary: "Receive the Light Arrows, take the last Gold Skulltula and the 100-token reward, break the 6 barriers in Ganon's Castle, earn Double Defense, and climb the tower to defeat Ganondorf and Ganon.",
  needs: ["All 6 Medallions", "Silver Gauntlets", "Longshot", "Hover Boots", "Megaton Hammer", "Lens of Truth", "Mirror Shield", "Goron Tunic", "Fire Arrows", "Din's Fire", "Bombs and Bombchus", "Zelda's Lullaby", "Song of Time", "A Bottle for Blue Fire", "99 Gold Skulltula Tokens"],
  gains: ["Light Arrows", "Golden Gauntlets", "Double Defense", "100 Gold Skulltula Tokens"],
  sections: [
    {
      id: "c14-s01", title: "Before the Castle", era: "adult", kind: "overworld",
      steps: [
        { id: "c14-s01-01", text: "With all 6 Medallions, warp to the **Temple of Time** with the **Prelude of Light**. Sheik reveals herself as Princess Zelda and gives you the **Light Arrows** before Ganondorf takes her away.",
          collect: ["tot-light-arrows-cutscene"] },
        { id: "c14-s01-02", text: "In **Zora's Fountain**, go to the far corner near the Great Fairy's fountain, lift the silver boulder with the **Silver Gauntlets**, Bomb the rock beneath it and drop in. Cross the passage, climb at the end and kill the Skulltula; at night, Hookshot the last **Gold Skulltula** on the left wall.",
          collect: ["zf-gs-hidden-cave"], time: "night",
          tip: "The Lens of Truth shows invisible Skulltulas hanging from the passage ceiling.",
          remake: "Zora's Fountain was frozen in time in the original; the remake keeps time running everywhere (confirmed). Night-only spawns need a post-launch check." },
        { id: "c14-s01-03", text: "Bring 100 tokens to the **House of Skulltula** in Kakariko. The last cursed son is cured and gives you a **Huge Rupee** (200 Rupees), and he gives you another every time you talk to him.",
          collect: ["kak-100-gold-skulltula-reward"] }
      ]
    },
    {
      id: "c14-s02", title: "Ganon's Castle: Shadow, Forest and Fire Trials", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s02-01", text: "Cross the bridge of light the Sages build to **Ganon's Castle** and enter the purple Shadow Trial first. Shoot a **Fire Arrow** at the torch on the right so blocks appear and open the small chest (5 Rupees); relight the torches to bring the blocks back, press the switch on the right side and Longshot up to the big chest for the **Golden Gauntlets**.",
          collect: ["ganons-castle-shadow-trial-front-chest", "ganons-castle-shadow-trial-golden-gauntlets-chest"],
          tip: "The Like Like here can push you into the pit. Under the bridge to the central tower, the Lens of Truth reveals a hidden room of Business Scrubs and fairies." },
        { id: "c14-s02-02", text: "Follow the invisible path the Lens shows to the rusted switch and hammer it, then Longshot the torch (or walk the invisible middle path) to the far door. Shoot the orb in the last room with a **Light Arrow** to break the Shadow barrier.",
          collect: [] },
        { id: "c14-s02-03", text: "In the green Forest Trial, defeat the Wolfos for a small chest (5 Rupees), and light the 4 center torches and the one above the door with Din's Fire or Fire Arrows. Cross the fan room on the **Hover Boots**, gather the 5 Silver Rupees (Song of Time at the one on the left, Bomb the Beamos), then shoot the orb with a Light Arrow.",
          collect: ["ganons-castle-forest-trial-chest"],
          tip: "Wait for the right-hand fan to stop before going for the last Silver Rupee." },
        { id: "c14-s02-04", text: "In the red Fire Trial, wear the **Goron Tunic** and the Hover Boots, which keep the sinking platforms from dropping. Gather the 5 Silver Rupees (one lies under the huge pillar you lift with the **Golden Gauntlets**), Longshot the target by the door and shoot the orb.",
          collect: [],
          tip: "Take off the Hover Boots for the Silver Rupee on the sinking block beside the pillar, and do not leave that one for last." }
      ]
    },
    {
      id: "c14-s03", title: "Ganon's Castle: Water, Spirit and Light Trials", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s03-01", text: "In the blue Water Trial, kill the 2 Freezards to open the door, fill a Bottle with **Blue Fire** and melt the red ice. Of the 2 chests, the right one holds a Recovery Heart.",
          collect: ["ganons-castle-water-trial-right-chest", "ganons-castle-water-trial-left-chest"],
          warn: "The left chest is an Ice Trap that freezes you." },
        { id: "c14-s03-02", text: "In the ice block room, push the far block to the snowball and into the hole, then push the near block to the snowball, to the other block and toward the red-ice ledge. Climb up, melt the red ice, hammer the rusted switch and get through before the timer ends, then shoot the orb with a Light Arrow.",
          collect: [],
          tip: "Empty a fairy Bottle for Blue Fire here if you must, and refill it afterward." },
        { id: "c14-s03-03", text: "In the orange Spirit Trial, Bomb the Beamos, Longshot to the Silver Rupee in mid-air and pull the Armos statues back to reach the Silver Rupees on the walls. In the next room, kill the 2 Torch Slugs and hit the crystal switch for a chest of **Bombchus**.",
          collect: ["ganons-castle-spirit-trial-crystal-switch-chest"],
          tip: "On N64 the crystal switch sits behind the fence; a Spin Attack reaches it." },
        { id: "c14-s03-04", text: "Send a **Bombchu** through the gap above the bars to hit the far switch, burn the cobweb over the sunlight with a Fire Arrow, and open the invisible chest the Lens shows (arrows). Reflect the light with the **Mirror Shield** onto the sun face just left of where you came in, then shoot the orb.",
          collect: ["ganons-castle-spirit-trial-invisible-chest"],
          tip: "The other sun faces drop Wallmasters. No Fire Arrows? Shoot a normal arrow through a torch in the previous room." },
        { id: "c14-s03-05", text: "Lift the silver obelisk in front of the Light Trial with the Golden Gauntlets. In the first room, look through the Lens, kill the Skulltula and the 3 invisible Keese for a small chest with a **Small Key**, and of the 6 other chests open only the first and third on the left and the second on the right as you enter.",
          collect: ["ganons-castle-light-trial-invisible-enemies-chest", "ganons-castle-light-trial-first-left-chest", "ganons-castle-light-trial-third-left-chest", "ganons-castle-light-trial-second-right-chest", "ganons-castle-light-trial-second-left-chest", "ganons-castle-light-trial-first-right-chest", "ganons-castle-light-trial-third-right-chest"],
          warn: "The other 3 chests (second on the left, first and third on the right) are Ice Traps. The safe ones are the chests the Keese perched on." },
        { id: "c14-s03-06", text: "Play **Zelda's Lullaby** on the Triforce in the next room for a **Small Key**, then gather the 5 Silver Rupees in the rolling-boulder room (the one above the center needs the Longshot). In the empty room beyond, the Lens shows that the far wall is fake; the last orb is behind it.",
          collect: ["ganons-castle-light-trial-lullaby-chest"],
          tip: "Avoid hitting the boulders; it makes them bounce unpredictably." }
      ]
    },
    {
      id: "c14-s04", title: "Great Fairy Outside the Castle", era: "adult", kind: "sweep",
      steps: [
        { id: "c14-s04-01", text: "Leave the castle and go to the far left end of the grounds outside it. Lift the huge pillar with the **Golden Gauntlets**, enter the fountain and play **Zelda's Lullaby**; the Great Fairy grants **Double Defense**, which halves the damage you take.",
          collect: ["ogc-great-fairy-reward"],
          tip: "Before the tower, fill your Bottles with fairies or Blue Potions." }
      ]
    },
    {
      id: "c14-s05", title: "Ganon's Tower", era: "adult", kind: "dungeon",
      steps: [
        { id: "c14-s05-01", text: "With all 6 barriers gone, climb the central tower. Get past the Fire Keese and the 2 Dinolfos, then defeat the 2 Stalfos close together for the **Boss Key**.",
          collect: ["ganons-tower-boss-key-chest"] },
        { id: "c14-s05-02", text: "Defeat the 2 Iron Knuckles one at a time (each wakes when struck) and climb past the room of pots to the top of the tower.",
          collect: [],
          warn: "Save before you climb to Ganondorf. Once the tower starts to fall you cannot save again, and a game over returns you to that save.",
          tip: "The pots in the last room hold arrows and magic. Leave some for later." }
      ]
    },
    {
      id: "c14-s06", title: "Ganondorf and Ganon", era: "adult", kind: "boss",
      steps: [
        { id: "c14-s06-01", text: "Defeat Ganondorf at the top of the tower (see the boss notes).",
          collect: [] },
        { id: "c14-s06-02", text: "Follow Zelda down the collapsing tower, staying close and watching for falling rocks. When fire rings her, defeat the 2 Stalfos together; she leaves Recovery Hearts. Get past the ReDead on the bridge and out of the castle.",
          collect: [] },
        { id: "c14-s06-03", text: "In the ruins, Ganon knocks the Master Sword out of the ring of fire. Fight him with the Megaton Hammer or Biggoron's Sword, take the sword back when the fire drops, and finish him with the Master Sword while Zelda holds him.",
          collect: [],
          warn: "Only the Master Sword can deal the final blow. Any other weapon keeps the fight going." }
      ]
    }
  ],
  boss: {
    id: "boss-ganondorf", name: "Great King of Evil Ganondorf",
    weakness: "Light Arrows while he is stunned; then, as Ganon, his tail",
    strategy: [
      "Ganondorf: you cannot target him. Keep away from the middle of the floor, where he punches; his floor slams knock out tiles, but the corner tiles never fall.",
      "Swing your sword at each energy ball to send it back and keep the rally going until he is stunned; an empty Bottle also returns it. Shoot him with a **Light Arrow**, then run in and slash him.",
      "When he raises his hands to charge a burst of balls, shoot a Light Arrow at him or answer with a Spin Attack; your shield does not stop it. If you fall to the lower floor, the pots there hold arrows and magic.",
      "Ganon: without the Master Sword, roll between his legs and hit his tail with the **Megaton Hammer** or Biggoron's Sword. Deku Nuts, the Longshot, Din's Fire or a Light Arrow stun him first; Nayru's Love helps against his blows.",
      "When the ring of fire drops, take back the Master Sword, keep hitting the tail, and finish him with the Master Sword while Zelda holds him with her light."
    ]
  }
});
