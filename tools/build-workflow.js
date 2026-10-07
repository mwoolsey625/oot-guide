export const meta = {
  name: 'oot-guide-build',
  description: 'Research OoT from many sources, design 2 themes, plan the 100% route, compile in sections, review on 5 lenses, apply verified fixes',
  phases: [
    { title: 'Research', detail: '10 source/domain researchers' },
    { title: 'Design', detail: '2 competing theme prototypes' },
    { title: 'Route plan', detail: 'assign every check to a chapter' },
    { title: 'Compile', detail: 'child walkthrough, adult walkthrough, collectibles+reference' },
    { title: 'Integrate', detail: 'validator script + cross-link IDs' },
    { title: 'Review', detail: 'accuracy x3, flow, consistency/style' },
    { title: 'Fix', detail: 'one fixer per data file, verify-before-apply' },
  ],
}

const ROOT = 'C:/Users/Mark Woolsey/Dev/oot-guide'
const PRE = `You are working on a Zelda: Ocarina of Time guide project at ${ROOT}. FIRST read ${ROOT}/BRIEF.md completely; it defines the game version stance, copyright rule, canonical IDs, chapter IDs, data schema, and style guide. Follow it exactly.\n\n`
const WEB = `Web access notes: curl is blocked (Cloudflare 403) on most guide sites. WebFetch works on zeldadungeon.net and many others, but WebFetch returns a small model's answer, not raw text, so ask narrow exhaustive questions ("list every chest in this room-by-room order with contents and how to reach it") and make several calls per long page instead of one "summarize" call. raw.githubusercontent.com works with curl. The randomizer files under ${ROOT}/research/sources are exact; prefer them for item contents, location names and age/item logic. Do NOT use any browser tools (mcp__Claude_Browser__*); another agent owns the browser. If a source is blocked, note it and move on.\n\n`
const BROWSER = `Browser: you MAY use the built-in browser tools (mcp__Claude_Browser__*, load via ToolSearch). Other agents may use it concurrently, so create your own tab with tabs_create and pass that tabId on every call. Prefer get_page_text over screenshots. If a site needs approval or the browser is unavailable, do not wait: fall back to WebFetch and note it.\n\n`

const RESEARCH_SCHEMA = { type: 'object', properties: {
  file: { type: 'string' }, factCount: { type: 'number' },
  sourcesUsed: { type: 'array', items: { type: 'string' } },
  sourcesBlocked: { type: 'array', items: { type: 'string' } },
  conflicts: { type: 'array', items: { type: 'string' } },
  gaps: { type: 'array', items: { type: 'string' } },
}, required: ['file', 'factCount', 'sourcesUsed', 'sourcesBlocked', 'conflicts', 'gaps'] }

const RESEARCH = [
  { key: '01-zd-child', web: WEB, prompt: `Research task: extract the CHILD half of the main route from Zelda Dungeon's Ocarina of Time walkthrough (https://www.zeldadungeon.net/ocarina-of-time-walkthrough/), chapters 1-6: inside-the-great-deku-tree, princess-of-destiny, the-mighty-collection, dodongos-cavern, inside-jabu-jabus-belly, timely-appearance. For each chapter, record in route order: every area visited, every action, every chest/item/collectible picked up (with the randomizer location name from research/sources/LocationList.py where one matches), puzzles and their solutions, enemies and minibosses, boss strategy, items required, missables and one-way points, and any Gold Skulltula / Piece of Heart pickups the walkthrough slots in. Also read ZD's side pages that apply to the child era (Fairy Fountains, Soft Soil, Scarecrow's Song, Mask of Truth guide) for the child-era parts. Be exhaustive; the compiler will only know what you write. Write ${ROOT}/research/01-zd-child.md.` },
  { key: '02-zd-adult', web: WEB, prompt: `Research task: extract the ADULT half of the main route from Zelda Dungeon's Ocarina of Time walkthrough (https://www.zeldadungeon.net/ocarina-of-time-walkthrough/), chapters 7-14: forest-temple, fire-temple, ice-cavern, water-temple, bottom-of-the-well, shadow-temple, spirit-temple, ganons-castle (including the child trips back in time inside them). Also ZD's Gerudo Training Grounds & Ice Arrows page, Epona page, Biggoron Sword trading-sequence page, and Big Poes page. For each chapter, record in route order: every area visited, every action, every chest/item/collectible picked up (with the randomizer location name from research/sources/LocationList.py where one matches), puzzles and their solutions, enemies and minibosses, boss strategy, items required, missables and one-way points, and any Gold Skulltula / Piece of Heart pickups slotted in. Be exhaustive; the compiler will only know what you write. Write ${ROOT}/research/02-zd-adult.md.` },
  { key: '03-crosscheck', web: BROWSER, prompt: `Research task: independent cross-check walkthroughs. Using the browser (zeldawiki.wiki, strategywiki.org, gamefaqs.gamespot.com, and IGN's wiki guide are all candidates; zeldawiki and strategywiki 403 via WebFetch so use the browser for them), read at least two full walkthroughs that are NOT Zelda Dungeon. For each of the 14 chapters in BRIEF.md, record: the route order those guides use, where they place each Gold Skulltula / Piece of Heart / upgrade relative to the story, every missable or point-of-no-return warning, notable tips and cheese strategies, and any place where the two guides disagree with each other. Also find any widely recommended 100% completion route order (GameFAQs 100% FAQs are ideal). Write ${ROOT}/research/03-crosscheck.md, organized by chapter ID, and name the source for every fact.` },
  { key: '04-gold-skulltulas', web: WEB, prompt: `Research task: the complete Gold Skulltula list (exactly 100). Start from research/sources/LocationList.py (every "GS Token" location, vanilla only, ignore MQ) and research/sources/world/*.json (age, night, and item requirements per GS). Cross-check against Zelda Dungeon's Gold Skulltula guide (zeldadungeon.net) for how-to-find details. For each: canonical ID per BRIEF.md, readable name, area, age, day/night, required items, how to find and collect it in plain words, earliest practical point in the chapter list, and missable status. Also the House of Skulltula reward table (10/20/30/40/50/100 tokens and rewards). Verify the count is exactly 100 and per-area counts. Write ${ROOT}/research/04-gold-skulltulas.md.` },
  { key: '05-hearts-fairies-beans', web: WEB, prompt: `Research task: all 36 Pieces of Heart, all 8 Heart Containers, all Great Fairy fountains (what each gives and how to open them), Magic Meter and Double Magic and Double Defense, and all 10 Magic Bean soft-soil patches (what each bean leads to as adult). Start from research/sources/LocationList.py (search "Piece of Heart", "Heart Container", "Magic", Great Fairy rewards, "Magic Bean") and world/*.json for requirements; cross-check against Zelda Dungeon's Heart Pieces, Fairy Fountains and Soft Soil pages. For each: canonical ID, name, area, age, time, required items, how-to in plain words, earliest practical chapter, missable status. Verify counts (36 / 8 / 10). Write ${ROOT}/research/05-hearts-fairies-beans.md.` },
  { key: '06-items-equipment-songs', web: WEB, prompt: `Research task: every inventory item, every equipment piece (swords incl. Giant's Knife / Biggoron's Sword, shields, tunics, boots), every capacity upgrade (wallets, quivers, bomb bags, bullet bags, Deku Stick and Nut capacity from scrubs/Forest Stage/Lost Woods theater, Goron Bracelet, Silver/Golden Gauntlets, Silver/Golden Scale, Stone of Agony), all 4 Bottles, the 12 songs plus Scarecrow's Song with exact note sequences (use arrow + A notation like "A ↓ → A ↓ →" with the N64 C-button layout, and list where each is learned), the 3 Spiritual Stones and 6 Medallions. For each: canonical ID (randomizer name via research/sources/LocationList.py where it exists), where/how obtained, age, prerequisites, earliest chapter, missable status, and buy prices where applicable (shops: what each sells and when). Sources: LocationList.py, world/*.json, Zelda Dungeon item pages. Write ${ROOT}/research/06-items-equipment-songs.md.` },
  { key: '07-sidequests-minigames', web: WEB, prompt: `Research task: every side quest and minigame. Child trading sequence (Weird Egg/Chicken/Zelda's Letter) and the full Happy Mask Shop sequence (every mask, who buys it, payouts, the Mask of Truth unlock, and which NPCs react to masks if notable). Adult trading sequence to Biggoron's Sword (each item, who, where, time limits, the Odd Potion/Eyeball Frog timers). Big Poe hunting (all 10 Big Poes, locations, Epona requirement, the reward). Epona and Ingo. All minigames (Shooting galleries, Bombchu Bowling, Treasure Chest Game, Horseback archery, Running Man, Fishing Pond child and adult rewards, Dampé's gravedigging and Dampé race, Frogs songs, Lost Woods ocarina minigame, Marathon Man, Diving minigame, Cucco collecting, Super Cucco minigame) with costs, prizes and requirements. Cows (milk) and Gossip Stones (what they do, Mask of Truth hints). Scarecrow's Song setup. For each: canonical ID if a randomizer location exists (research/sources/LocationList.py), else a slug per BRIEF.md; age, time, requirements, rewards, earliest chapter, missable status. Write ${ROOT}/research/07-sidequests-minigames.md.` },
  { key: '08-ledger', web: WEB, effort: 'medium', prompt: `Research task: build the completeness ledger. Parse ${ROOT}/research/sources/LocationList.py and research/sources/world/*.json (vanilla only; skip MQ, and skip randomizer-only shuffle types that are not fixed vanilla pickups: Pot, Crate, Grass, Wonderitem, Beehive, FlyingPot, SmallCrate, RupeeTower, Freestanding rupees/recovery hearts if they are randomizer-only shuffles). Keep every vanilla check that a 100% player would care about: chests (including small rupee chests), GS tokens, freestanding Pieces of Heart, NPC rewards, songs, scrubs that sell upgrades or hearts, boss Heart Containers, dungeon rewards, cows, Great Fairy rewards, shop upgrade items. Write a Python script in the scratchpad (do not use heredocs; write the script with the Write tool and run it by path) that produces ${ROOT}/research/ledger.json: an array of {id (BRIEF.md ID rule), name, type, vanillaItem, area, tags, ageReq ("child"|"adult"|"either"|"unknown" from world logic), nightReq (bool), logic (raw requirement string)}. Then write ${ROOT}/research/08-ledger.md with totals per type and per area, the count of GS (must be 100), Pieces of Heart (must be 36), Heart Containers (8), and any parse problems. Copy the script to ${ROOT}/tools/build_ledger.py so it is reproducible.` },
  { key: '09-bestiary-bosses', web: WEB, prompt: `Research task: bestiary and bosses. Every enemy in the original Ocarina of Time (from Zelda Dungeon's enemies/bestiary pages and similar): name, where it appears (areas/dungeons), how to defeat it, weaknesses, drops, and notable behavior. Every miniboss and boss (Gohma, King Dodongo, Barinade, Phantom Ganon, Volvagia, Morpha, Bongo Bongo, Twinrova, Ganondorf, Ganon, plus minibosses such as Dark Link, Iron Knuckles, Flare Dancer, Dead Hand, Big Octo, Stalfos pairs, Lizalfos/Dinolfos, Wolfos, Gohma Larva) with phase-by-phase strategy, recommended items, and full titles as displayed in the intro card. Write ${ROOT}/research/09-bestiary-bosses.md.` },
  { key: '10-remake', web: WEB, prompt: `Research task: the Nintendo Switch 2 remake of Ocarina of Time (release Nov 5, 2026, announced Nintendo Direct June 9, 2026). Using WebSearch (use mode "extended") and WebFetch, gather everything known, separating three tiers: (a) CONFIRMED by Nintendo (official site, Directs, Nintendo social posts, press releases, Nintendo-published trailers), (b) reported from hands-on previews by named outlets, (c) rumor/speculation/SEO listicles. Be skeptical: many "every change" articles are speculative; trace claims back to a primary source and downgrade any claim you cannot trace. Cover: controls (jump, sprint, camera), item menu and button assignment (e.g. boots/tunics), day/night behavior, ocarina input, new content, changed dungeons, Master Quest, Sheikah Stones/hint systems, boss rush, collectible changes, difficulty modes, amiibo, edition differences. Also record the 3DS version's differences from N64 (Iron/Hover Boots as items, Sheikah Stones, Boss Challenge, mirrored Master Quest, Water Temple color markers, etc.) as reference, since the remake may follow some of them. Finally list "guideImpacts": every specific place in a classic walkthrough that a confirmed or likely change would affect (e.g., night-only Gold Skulltulas if time no longer stops in towns). Write ${ROOT}/research/10-remake.md with a URL on every claim.` },
]

const DESIGN_COMMON = `Design task: you are one of two designers competing to create the visual design and front-end for this guide. The owner will pick one. Do NOT open or look at ${ROOT}/../ffvi or any other project; this must be an original design.

Audience and devices: the owner plays on a Nintendo Switch 2 and reads the guide on a phone held in one hand while playing (primary, 360-430px wide portrait, often in a dim room), and also on a desktop monitor at a desk (secondary, 1280-2560px). Note: the Switch 2 has no official web browser, so do not build anything Switch-specific, but large-screen readability at couch/desk distance is a plus. Mobile-first, then make desktop use the extra width well (e.g., chapter nav + content + collectible panel), never a stretched phone layout.

What it must do:
- Render the walkthrough (chapters → sections → steps) from the data schema in BRIEF.md: steps with checkboxes, inline collectible chips for each step's collect IDs, distinct treatments for tip / warn / time (night/day) / remake notes, boss cards, chapter summary with needs/gains.
- Collectible trackers per category (counts like 37/100, filters by area / age / time / collected-or-not, jump-to-walkthrough-step link).
- Reference pages: songs (with note sequences rendered as button glyphs), bosses, bestiary, minigames, side quests, remake notes.
- Global search across steps and collectibles.
- Progress saved in localStorage (wrap every access in try/catch; must work with storage blocked), "resume where I left off", export/import progress as a JSON file.
- Checking a collectible in the walkthrough and in the tracker is the same state.
- Light and dark themes (follow system, allow manual toggle); thumb-reachable controls; tap targets >= 44px; no horizontal scroll; fast on a mid phone (render only the open chapter).
- Must work from file:// with no server: load data via script tags of plain .js files, no fetch, no modules, no build step, no external JS libraries. Google Fonts allowed with good system fallbacks.
- Use NO Nintendo artwork, logos, screenshots, sprites, or ripped icons. Original CSS/SVG motifs only.

Data contract: index.html must load, in order, data/walkthrough-child.js, data/walkthrough-adult.js, data/collectibles.js, data/reference.js (globals per BRIEF.md). In your design folder, create those four files as a realistic FIXTURE following the schema exactly: chapter c01 fully fleshed out (several sections, 15+ steps, a boss), a short c02, a short c07 (adult), ~12 Gold Skulltulas, ~6 Pieces of Heart, a few songs, 2 bosses, a few bestiary entries, remake notes. Fixture text may come from your own knowledge; mark the top of each fixture file with a comment "FIXTURE — replaced by compiled data". The renderer must be generic so the real compiled data/ files drop in without code changes.

Put everything in your folder only. Also write DESIGN.md there: concept name, the idea in two sentences, palette and type choices with reasons, layout at phone and desktop widths, and what makes it better to use mid-game than a plain wiki page.

Verify your work: run node to check every .js file parses. Then, if the built-in browser is available (mcp__Claude_Browser__*, load via ToolSearch; create your own tab with tabs_create and always pass its tabId, because another designer is using the browser too), serve your folder with python -m http.server on the port given below via a background Bash command and inspect it at 390x844 and at 1440x900 with resize_window, in both themes, fixing anything broken; reset the viewport to desktop when done. If the browser is unavailable or asks for approval, skip visual checks rather than wait.

Your creative direction:\n`

const DESIGNS = [
  { key: 'design-a', port: 8731, dir: `IMMERSIVE. Make it feel like an artifact that belongs in Hyrule: a world-flavored, atmospheric guide with character, texture, and a strong sense of place, while staying fast and legible mid-game. Avoid cheap clichés (fake parchment JPEGs, papyrus fonts). Think about how era (child/adult), dungeons, and time of day could shape the look.` },
  { key: 'design-b', port: 8732, dir: `MODERN COMPANION APP. Make it feel like a premium native app built for this game: crisp, utility-first, glanceable, with excellent information density and progress feedback, and a distinctive identity of its own rather than a generic dashboard. Think about how a player's eyes move between the TV and the phone.` },
]

const DESIGN_SCHEMA = { type: 'object', properties: {
  folder: { type: 'string' }, concept: { type: 'string' }, summary: { type: 'string' },
  features: { type: 'array', items: { type: 'string' } },
  visuallyVerified: { type: 'boolean' }, knownIssues: { type: 'array', items: { type: 'string' } },
}, required: ['folder', 'concept', 'summary', 'features', 'visuallyVerified', 'knownIssues'] }

// Designs run alongside research; nothing downstream depends on them until the owner picks.
const designsP = parallel(DESIGNS.map(d => () => agent(
  PRE + DESIGN_COMMON + d.dir + `\n\nYour folder: ${ROOT}/${d.key}/  Your server port: ${d.port}.`,
  { label: d.key, phase: 'Design', schema: DESIGN_SCHEMA, effort: 'high' })))

phase('Research')
const research = (await parallel(RESEARCH.map(r => () => agent(
  PRE + r.web + r.prompt + `\n\nFollow the research file convention in BRIEF.md (source on every fact, a Conflicts section). Return the summary object.`,
  { label: r.key, phase: 'Research', schema: RESEARCH_SCHEMA, effort: r.effort || 'high' })))).filter(Boolean)
log(`Research done: ${research.length}/${RESEARCH.length} files, ${research.reduce((n, r) => n + r.factCount, 0)} facts`)
const researchList = research.map(r => `- ${r.file} (${r.factCount} facts; gaps: ${r.gaps.join('; ') || 'none'})`).join('\n')

// Owner asked to pause after research + design. Resume with args {continue: true}.
if (!(args && args.continue)) {
  const designsEarly = (await designsP).filter(Boolean)
  return { paused: 'after research + design', research, designs: designsEarly }
}

// Owner-approved rules (Oct 6). Shared by planner, compilers, reviewers and fixers.
const RULES = `\n\nOwner-approved source rules (apply them, and cite them when a conflict is settled by one):
A. Source priority. The decompilation-derived values (research files citing the decomp, LocationList.py contents) win for numbers and item contents (prices, damage, timers, counts, what a chest holds). OoT Randomizer logic (world/*.json, LogicHelpers.json) wins for what a check REQUIRES. Walkthroughs (Zelda Dungeon, StrategyWiki, GameFAQs) win for method and practical order.
B. Randomizer rules are not vanilla rules. OoTR logic adds settings and safety rules that do not exist in the normal game: e.g. the Stone of Agony is not required to enter hidden grottos in vanilla (it only rumbles), the Door of Time condition is a randomizer setting, and the Gerudo Fortress freestanding Piece of Heart sits out of logic there but is a normal vanilla Piece of Heart (the total stays 36). When OoTR logic demands something the vanilla game does not, follow vanilla and say so in the notes file.
C. Item, song, place and enemy names: use the original N64 English names (e.g. "Fairy Ocarina", "Megaton Hammer", "Goron's Ruby"), spelled the same everywhere. ${ROOT}/research/name-map.json ({"N64 name": ""}, values left empty for the remake names) makes a later bulk swap mechanical: the route planner creates it, the integrator completes it from the data. Other agents do not write to it.`

phase('Route plan')
const plan = await agent(PRE + RULES + `\n\nRoute planning task. Research files:\n${researchList}\n\nRead all research files under ${ROOT}/research/ (start with 08-ledger.md and research/ledger.json, then 01, 02, 03, 04-07). Produce the 100% route plan that the walkthrough compilers will follow:
1. Write ${ROOT}/research/route-plan.json: an array with one entry per ledger check plus every non-ledger collectible (masks, Big Poes, trade items, bean planting, minigame prizes): {id, chapter (BRIEF.md chapter ID), sectionHint (short phrase), era, why (one line: why this is the earliest practical point)}. Every ledger check must appear exactly once.
2. Write ${ROOT}/research/route-plan.md: for each of the 14 chapters, the ordered list of sections (title, kind, era, one-line purpose) and where each collectible sweep or side quest sits, with prerequisites tracked as an inventory that grows chapter by chapter (items, songs, upgrades, age access). Resolve conflicts between research files explicitly and say which source won and why.
Rules: a check goes at the earliest point the player actually has the required items, age, song, and time of day, unless doing it later saves meaningful backtracking (say so). Respect points of no return. Child-only checks that need adult-era items (e.g., via a later trip back) go where that becomes possible. The route must be a real playable order.
3. Write ${ROOT}/research/name-map.json covering every item, song, place and enemy name the plan uses (rule C).
Return the summary object.`, { label: 'route-planner', phase: 'Route plan', schema: { type: 'object', properties: {
  planned: { type: 'number' }, ledgerTotal: { type: 'number' }, unplaced: { type: 'array', items: { type: 'string' } },
  decisions: { type: 'array', items: { type: 'string' } } }, required: ['planned', 'ledgerTotal', 'unplaced', 'decisions'] }, effort: 'high' })
log(`Route plan: ${plan ? plan.planned : '?'} checks placed, ${plan ? plan.unplaced.length : '?'} unplaced`)

// Stage gates so each chunk fits a usage window. args.stopAfter: 'plan' (default) | 'integrate' | 'all'.
const STOP = (args && args.stopAfter) || 'plan'
if (STOP === 'plan') return { paused: 'after route plan', plan }

phase('Compile')
const COMPILE_COMMON = `Compile task. You turn research into final guide data. Inputs: ${ROOT}/research/route-plan.md and route-plan.json (authoritative for order and placement), the research files:\n${researchList}\nand the randomizer sources under research/sources for exact contents. Write original prose (copyright rule), follow the style guide in BRIEF.md to the letter, and follow the schema exactly. Step size is an owner decision, so get it right: one objective at one place per step, travel/menu/buying/set-up folded into the step they serve, about 4-6 steps per section and never more than 7. Route-plan entries are checks, not steps; several entries usually share one step's collect[]. Every step that gains a check lists its canonical ID in collect[]. Use warn only for missables / points of no return / one-way traps. The same text serves N64 and Switch 2 readers (the site has a version setting that hides remake notes for N64), so outside remake notes never name a button or input (A, B, C-buttons, Z, L, R, Start, Control Stick, ZL/ZR, Z-targeting): describe the action (target, roll, raise your shield, use the Boomerang, play Zelda's Lullaby) and refer to songs by name. Where specific notes are unavoidable, write a {notes:A ↓ → ↓} token ("A" plus arrows, as in reference.songs). Add a remake note wherever research/10-remake.md lists a guide impact for that spot. When research sources conflict and the route plan did not settle it, pick the better-supported one and add the step ID plus the conflict to the notes file named below. Write the file in pieces if it is long (create, then append chapter by chapter with Edit), and finish by running node -e "global.window={};require('<file>')" style checks so the file parses (use a small check script written with the Write tool, no heredocs).` + RULES
const COMPILE_SCHEMA = { type: 'object', properties: {
  files: { type: 'array', items: { type: 'string' } }, steps: { type: 'number' },
  collectIds: { type: 'number' }, parses: { type: 'boolean' },
  notes: { type: 'array', items: { type: 'string' } } }, required: ['files', 'steps', 'collectIds', 'parses', 'notes'] }
const COMPILERS = [
  { key: 'compile-child', prompt: `Your section: chapters c01-c06 only. Output: ${ROOT}/data/walkthrough-child.js. Notes file: ${ROOT}/research/compile-notes-child.md.` },
  { key: 'compile-adult', prompt: `Your section: chapters c07-c14 only (including child-era sections inside them, e.g., Bottom of the Well and the child half of the Spirit Temple). Output: ${ROOT}/data/walkthrough-adult.js. Notes file: ${ROOT}/research/compile-notes-adult.md.` },
  { key: 'compile-collectibles', prompt: `Your section: the collectibles and reference data. Outputs: ${ROOT}/data/collectibles.js (all required categories in BRIEF.md, with every item's chapter from route-plan.json; leave step as "" because the integrator fills it) and ${ROOT}/data/reference.js (songs, bosses, bestiary, minigames, sidequests, remake). Notes file: ${ROOT}/research/compile-notes-collectibles.md. Totals must match: 100 Gold Skulltulas, 36 Pieces of Heart, 8 Heart Containers.` },
]
const compiled = (await parallel(COMPILERS.map(c => () => agent(PRE + COMPILE_COMMON + '\n\n' + c.prompt,
  { label: c.key, phase: 'Compile', schema: COMPILE_SCHEMA, effort: 'high' })))).filter(Boolean)
log(`Compiled: ${compiled.map(c => c.files.join(', ') + ' (' + c.steps + ' steps)').join(' | ')}`)

phase('Integrate')
const integ = await agent(PRE + `Integration task. The data files in ${ROOT}/data/ were compiled in parallel by three agents. Make them one coherent guide:
1. Write ${ROOT}/tools/validate.js (node, no dependencies; run as: node tools/validate.js) that loads all four data files with a fake window, and checks: every file parses; schema fields present and typed per BRIEF.md; chapter IDs and order exactly match BRIEF.md; step/section IDs unique and well-formed; every collect[] ID exists in collectibles; every collectible appears in collect[] of exactly one step; each collectible's chapter/step match the step that collects it; category totals (100 GS, 36 PoH, 8 HC, etc.); every ledger.json check is covered by a collectible or a step; style lint (no "simply", digits for numbers, "Rupees" capitalization, bold only via **...**); step size (error: any section with more than 7 steps; warning: sections under 3 steps, and a per-chapter steps-per-section average); control lint, because the same text serves N64 and Switch 2 readers (error: a button or input name in any guide text field except remake — a capital A/B/X/Y/Z/L/R/ZL/ZR/Start/Select followed by "Button" or "button", C-up/C-down/C-left/C-right, C-button(s), Z-target(ing), Control Stick, analog stick, D-pad; error: a {notes:...} token whose content is anything other than space-separated A ↑ ↓ ← →; error: a reference.songs notes value outside that same alphabet). Print a clear report and exit non-zero on errors.
2. Fill every collectible's step field from the walkthrough. Fix ID mismatches, duplicates, and missing placements by editing the data (consult research/route-plan.json and the research files). Do not rewrite prose beyond what the fixes need.
3. Smooth the seams: chapter c06's end must hand off cleanly into c07's start, and terminology must match across the three files (pick one N64 spelling per name, rule C).
4. Complete ${ROOT}/research/name-map.json with every item, song, place and enemy name the data uses.` + RULES + `\n
Run the validator until it passes or only judgment-call warnings remain. Return the summary.`, { label: 'integrator', phase: 'Integrate', schema: { type: 'object', properties: {
  validatorPasses: { type: 'boolean' }, remainingWarnings: { type: 'array', items: { type: 'string' } },
  fixes: { type: 'array', items: { type: 'string' } } }, required: ['validatorPasses', 'remainingWarnings', 'fixes'] }, effort: 'high' })

if (STOP === 'integrate') return { paused: 'after compile + integrate', plan, compiled, integ }

phase('Review')
const FINDINGS_SCHEMA = { type: 'object', properties: { findings: { type: 'array', items: { type: 'object', properties: {
  file: { type: 'string', enum: ['data/walkthrough-child.js', 'data/walkthrough-adult.js', 'data/collectibles.js', 'data/reference.js'] },
  locator: { type: 'string' }, severity: { type: 'string', enum: ['critical', 'major', 'minor'] },
  problem: { type: 'string' }, evidence: { type: 'string' }, fix: { type: 'string' },
}, required: ['file', 'locator', 'severity', 'problem', 'evidence', 'fix'] } } }, required: ['findings'] }
const REVIEW_COMMON = `Review task. The compiled guide is in ${ROOT}/data/ (validator: node tools/validate.js). Research and exact sources are in ${ROOT}/research/. You only report findings; do not edit data files. Each finding needs a locator (step ID, collectible ID, or reference entry ID), concrete evidence (a source file + what it says, or a URL), and an exact proposed fix. No vague findings; if you cannot point at evidence, leave it out. Severity: critical = wrong or impossible to follow, major = missing, misleading or badly placed, minor = polish.` + RULES + `\n\nYour lens:\n`
const REVIEWS = [
  { key: 'accuracy-child', web: WEB, prompt: `ACCURACY of data/walkthrough-child.js. Check every step against research files, LocationList.py (chest contents) and world/*.json (requirements), and spot-check doubtful facts on zeldadungeon.net. Wrong item contents, wrong directions, wrong enemy names, wrong counts, impossible requirements, boss strategy errors, missing chests or collectibles in an area the chapter clears.` },
  { key: 'accuracy-adult', web: WEB, prompt: `ACCURACY of data/walkthrough-adult.js. Check every step against research files, LocationList.py (chest contents) and world/*.json (requirements), and spot-check doubtful facts on zeldadungeon.net. Wrong item contents, wrong directions, wrong enemy names, wrong counts, impossible requirements, boss strategy errors, missing chests or collectibles in an area the chapter clears.` },
  { key: 'accuracy-collectibles', web: BROWSER, prompt: `ACCURACY of data/collectibles.js and data/reference.js. Every collectible's age, time, requirements, area and how-to against world/*.json, LocationList.py and research files; totals; reward tables; song note sequences; shop prices; mask payouts; trade-sequence timers; boss titles. Use the browser to check doubtful entries on zeldawiki.wiki. Also check that remake notes only state what research/10-remake.md supports, at the confidence tier it supports.` },
  { key: 'flow', web: WEB, prompt: `FLOW: does the guide really play in this order? Walk both walkthrough files from c01-s01-01 to the end as a player would. Keep a running inventory (items, upgrades, songs, age, Rupee capacity, magic, time of day). Flag any step that uses something not yet obtained, any check placed before it is reachable, any age mismatch, any night-only action without a time instruction, travel that skips how you got there (warp songs, owl, Epona), backtracking that a better placement would remove, points of no return without a warn, and collectible detours that break the story order. Also check that collectibles.js chapter/step placements agree with this walk.` },
  { key: 'consistency-style', web: WEB, prompt: `CONSISTENCY and STYLE across all four files, section to section: the BRIEF.md style guide (voice, tense, step length, step size — any step that is only movement, a menu or a cutscene, and any section over 7 steps, is a major finding — bolding rules, digits, item spellings, Rupees, tip vs warn usage, and any button or input name outside a remake note, a major finding since the same text serves N64 and Switch 2 readers), consistent naming of every item/place/enemy across files, consistent phrasing structure between chapters written by different compilers (compare c06 against c07 and a dungeon from each half), consistent section kinds and summary/needs/gains style, and any text that reads like it was copied from a source walkthrough (copyright risk). Report patterns once with a list of affected locators rather than one finding per step when the issue repeats.` },
]
const reviews = await parallel(REVIEWS.map(r => () => agent(PRE + r.web + REVIEW_COMMON + r.prompt,
  { label: r.key, phase: 'Review', schema: FINDINGS_SCHEMA, effort: 'high' })
  .then(res => res ? res.findings.map(f => ({ ...f, reviewer: r.key })) : [])))
const findings = reviews.filter(Boolean).flat()
log(`Review: ${findings.length} findings (${findings.filter(f => f.severity === 'critical').length} critical, ${findings.filter(f => f.severity === 'major').length} major)`)

phase('Fix')
const FILES = ['data/walkthrough-child.js', 'data/walkthrough-adult.js', 'data/collectibles.js', 'data/reference.js']
const FIX_SCHEMA = { type: 'object', properties: { outcomes: { type: 'array', items: { type: 'object', properties: {
  locator: { type: 'string' }, reviewer: { type: 'string' }, outcome: { type: 'string', enum: ['applied', 'applied-modified', 'rejected'] },
  reason: { type: 'string' } }, required: ['locator', 'reviewer', 'outcome', 'reason'] } }, parses: { type: 'boolean' } },
  required: ['outcomes', 'parses'] }
const fixes = await parallel(FILES.map(file => () => {
  const mine = findings.filter(f => f.file === file)
  if (!mine.length) return Promise.resolve({ file, outcomes: [], parses: true })
  return agent(PRE + WEB + `Fix task for ${ROOT}/${file} ONLY (other agents are fixing the other data files at the same time; do not touch them). Below are review findings for your file as JSON. For each: verify the evidence yourself against research/ files, LocationList.py, world/*.json or the cited URL. Apply it if it holds up (adapt the wording if the proposed fix breaks the style guide), and reject it with a reason if it does not. Findings that conflict with each other: decide on evidence and explain. Keep IDs stable; if a fix must move a collectible between steps or chapters, say so in the reason so collectibles.js can be synced. Afterwards make sure the file parses (node) and run node tools/validate.js, noting any new errors your edits caused and fixing them.` + RULES + `\n\nFindings:\n${JSON.stringify(mine, null, 1)}`,
    { label: 'fix:' + file.replace('data/', ''), phase: 'Fix', schema: FIX_SCHEMA, effort: 'high' })
    .then(r => r ? { file, ...r } : null)
}))

const finalCheck = await agent(PRE + `Final check. Fixers just edited the data files in parallel; some fixes moved collectibles between steps. Run node tools/validate.js in ${ROOT}, resolve every error (especially collectible chapter/step sync and ID references), and re-run until it passes. Do not change prose except to fix errors. Return the final validator output summary.`,
  { label: 'final-validate', phase: 'Fix', schema: { type: 'object', properties: { passes: { type: 'boolean' }, summary: { type: 'string' },
    warnings: { type: 'array', items: { type: 'string' } } }, required: ['passes', 'summary', 'warnings'] }, effort: 'medium' })

const designs = (await designsP).filter(Boolean)
return { research, plan, compiled, integ, findingsCount: findings.length, findings, fixes, finalCheck, designs }
