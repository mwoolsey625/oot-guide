/* FIXTURE — replaced by compiled data
   Design-B sample data. Follows the BRIEF.md schema exactly so the renderer can be
   exercised; the real compiled data/walkthrough-adult.js drops in without code changes. */
window.OOT = window.OOT || {};
OOT.walkthrough = OOT.walkthrough || [];

OOT.walkthrough.push({
  id: "c07-forest-temple", num: 7, title: "Seven Years Later & the Forest Temple", era: "adult",
  summary: "Wake as an adult, win the Hookshot from Dampé, learn the Minuet of Forest, and clear the Forest Temple to free its Sage.",
  needs: ["Master Sword", "Saria's Song"],
  gains: ["Prelude of Light", "Hookshot", "Minuet of Forest", "Fairy Bow", "Forest Medallion"],
  sections: [
    {
      id: "c07-s01", title: "The Temple of Time", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s01-01", text: "Wake in the **Chamber of Sages**, where **Rauru** gives you the **Light Medallion**. Back in the **Temple of Time**, talk to **Sheik** to learn the **Prelude of Light**.", collect: ["tot-reward-from-rauru", "sheik-at-temple"],
          remake: "Previews say ocarina songs can be hummed into the microphone; on-screen prompts may differ from the original." }
      ]
    },
    {
      id: "c07-s02", title: "Dampé's Race", era: "adult", kind: "sidequest",
      steps: [
        { id: "c07-s02-01", text: "Travel to the **Kakariko Graveyard** and enter the open grave behind the hut to start **Dampé's** race.", collect: [] },
        { id: "c07-s02-02", text: "Follow Dampé through the tunnel to the end and open the chest for the **Hookshot**.", collect: ["graveyard-dampe-race-hookshot-chest"],
          tip: "Dampé throws fireballs behind him. Keep a short distance back on straight stretches." },
        { id: "c07-s02-03", text: "Beat the race in under 1 minute for the **Piece of Heart** at the exit.", collect: ["graveyard-dampe-race-freestanding-poh"],
          remake: "The remake's manual jump and sprint may change the race timing; confirm the limit after launch." }
      ]
    },
    {
      id: "c07-s03", title: "Sacred Forest Meadow", era: "adult", kind: "overworld",
      steps: [
        { id: "c07-s03-01", text: "Pass through the **Lost Woods** to the **Sacred Forest Meadow** and avoid the **Moblins** patrolling the corridor.", collect: [],
          warn: "The Moblin with the club sends a shockwave along the ground. Stay out of its line." },
        { id: "c07-s03-02", text: "Talk to **Sheik** at the top of the stairs to learn the **Minuet of Forest**.", collect: ["sheik-in-forest"] },
        { id: "c07-s03-03", text: "Hookshot to the branch above the broken stairs to reach the **Forest Temple** entrance.", collect: [] }
      ]
    },
    {
      id: "c07-s04", title: "Forest Temple: Entry", era: "adult", kind: "dungeon",
      steps: [
        { id: "c07-s04-01", text: "Hookshot up the vines in the first room and kill the **Gold Skulltula** high on the left wall.", collect: ["forest-temple-gs-first-room"], time: "",
          tip: "Target it with the Hookshot from the ground; it retrieves the token for you." },
        { id: "c07-s04-02", text: "Climb the vines on your right as you enter and open the chest on the tree branch.", collect: [] }
      ]
    }
  ],
  boss: {
    id: "boss-phantom-ganon", name: "Evil Spirit from Beyond Phantom Ganon",
    weakness: "Arrows as it rides out of a painting; then its own energy ball, returned with the sword",
    strategy: [
      "Phase 1: watch the paintings. Shoot the real rider with the **Fairy Bow** as it rides out of a painting toward you.",
      "After 3 hits it leaves its horse and fights in the open.",
      "Phase 2: slash its energy ball back at it. Keep the volley going until the ball strikes it.",
      "Hit it with the sword while it is stunned on the ground."
    ]
  }
});
