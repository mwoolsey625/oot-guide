# Design B: Waypoint

## The idea

The guide behaves like a companion app with one job: always know your **next step**, and let you
finish it with one thumb tap without looking away from the TV for long. Everything else, like the
trackers, songs and search, sits one tab away. Checking anything off shows up straight away as
progress in rings, bars and short toasts.

## How the eye moves (the core reasoning)

A player glances down at the phone for 1 to 3 seconds, then looks back up at the TV. A plain wiki
page makes every glance a search: scroll, find your place, read. Waypoint removes the search:

1. **"Now" step.** The first unchecked step in the chapter is raised as a card with a teal edge.
   Finished steps fade. After a glance, your eye lands on the right line.
2. **Thumb dock.** On a phone, the next step's text and a large **Done** button sit just above
   the tab bar, in the lower third where the thumb already rests. Tapping Done checks the step,
   marks its collectibles, and scrolls the following step to the top of the screen.
3. **Resume.** Home opens on the next unchecked step of the chapter you were in, with Resume and
   Mark done buttons. Close the browser mid-dungeon, reopen it, and one tap puts you back.
4. **Signals you can read at a glance.** Night-only and Day-only show as pills in the step's top
   line. Warnings (missable, one-way, item loss) get a solid orange box. Tips get a soft blue box.
   Remake checks get a dashed violet box, so "might change in the remake" never looks like a
   confirmed fact.

## Palette

| Token | Dark | Light | Why |
|---|---|---|---|
| Background | `#0a0f14` | `#eef1f4` | Near-black blue, not pure black. Pure black with white text glows (halation) in a dark room. |
| Text | `#e6ecf2` | `#0e1621` | Off-white is easier on the eyes than `#fff` at night. |
| Brand / progress | `#3ccfbf` teal | `#0a7f76` | One action color for Done, checkmarks and progress, so anything teal means "advance". |
| Child / Adult / Both | green / amber / teal | darker versions | Era coding on chapter numbers, the dial and badges. |
| Warning | `#ff8f63` | `#b93b0b` | Kept separate from the brand color so a warning never reads as progress. |
| Remake | `#c6a4ff` violet + dashed border | `#6f3fc0` | Uncertain information gets its own color and a broken outline. |
| Collectible hues | gold (Skulltulas), rose (hearts), sky (songs), teal (stones), violet (items) | darker versions | Each chip and tracker gets its category color, so you can tell categories apart before reading. |

Both themes are defined as CSS tokens. The page follows the system theme by default; the topbar
button cycles System, Light and Dark, and the choice is saved.

## Type

- **Atkinson Hyperlegible** (body and step text). It was designed for low-vision readers, with
  distinct letterforms (Il1, 0O). That helps on a small screen in dim light and on a desk monitor
  viewed from a distance. Fallback: system-ui.
- **Space Grotesk** (headings, numbers, labels). Its compact, technical shapes give the app look
  and make counts like `37/100` easy to read. Fallback: Segoe UI or system sans.
- Step text is 17px at the default scale. Settings has a text-size control (90% to 140%), and
  the base size grows to 17px at 1600px wide and to 19px at 2200px for viewing from a desk.

## Signature visual: the chapter dial

Home shows a ring split into 14 arcs, one per chapter. Each arc fills in its era color as you
check steps, and a dot marks the current chapter. Chapters missing from the data show as thin
grey arcs. The same ring motif is reused as the chapter progress ring, the tracker rings and the
brand mark. All graphics are original CSS and SVG. The site uses no game artwork.

## Layout

**Phone (360 to 430px, the main target)**

- Top bar (56px, frosted): brand, then the chapter title. Tapping the title opens a bottom sheet
  that lists all chapters with progress. Theme and Settings buttons sit on the right.
- Bottom tab bar (64px): Home · Guide · Collect · Reference · Search, all within thumb reach.
- In the Guide, the current-step dock floats above the tab bar.
- Section headers stick under the top bar, so you always know which room or area you are in.
  Tapping a header collapses that section.
- Every tap target is at least 44px. No view scrolls sideways; this was measured on every view at
  390px and 1440px.

**Desktop (1100px and up)**: three columns, not a stretched phone layout.

- Left rail (272px): navigation with a `/` shortcut, then all 14 chapters, each with a mini
  progress ring. Chapters missing from the data are dimmed.
- Center column (up to 820px): the walkthrough, sized to a comfortable line length.
- Right panel (340px, sticky), in the Guide: an **Up next** card with a "Done, next step" button,
  chapter stats, a checklist of every collectible in this chapter (each with a jump-to-step
  arrow) and a short boss summary. In a tracker, the panel shows progress by area and why the
  category matters.
- Views without a panel (Home, Reference, Search, Settings) use the full width, with 2-column card
  grids.
- Keyboard: `N` marks the current step done and moves on, `J`/`K` move between steps, `/` opens
  search, `Esc` closes the sheet.

## What it does

- **Walkthrough.** Renders chapters, sections and steps from `OOT.walkthrough`. Each step has a
  checkbox, inline collectible chips, and notes for tip, warning, remake check, and the
  night/day time pill. Each section shows its kind (overworld, dungeon, boss, sweep, side quest)
  with an icon and a count. Boss cards show the weak point and numbered strategy steps. The
  chapter hero shows Needs and Gains. Only the open chapter is in the DOM.
- **One shared state.** Checking a step marks every collectible in its `collect` list. A chip in
  the walkthrough, a row in the tracker, the desktop panel checklist and the song "Learned" toggle
  all read and write the same `items` record. Unchecking a step clears its collectibles again.
  Counters, rings and bars update in place, so toggling never re-renders the page or moves the
  scroll position.
- **Trackers.** One per category, showing counts against the declared `total`. Filters: status,
  age, Day only / Night only, and area, saved per category. Rows are grouped by area with
  per-area counts. Each row links to its walkthrough step. If that step or chapter is not
  written yet, the row says so instead of showing a broken link.
- **Reference.** Songs with note glyphs (blue A button, gold direction notes, plus a screen-reader
  label), plus bosses, bestiary, minigames, side quests, and remake notes split into Confirmed,
  Reported, and What it changes in this guide.
- **Search.** One box covering steps (including tip, warning and remake text), collectibles
  (name, location, area, requirements) and every reference list. Results are ranked, grouped and
  highlighted. The index is built on first use.
- **Progress.** Saved in `localStorage`, and every access is wrapped in try/catch. If storage is
  blocked, the guide keeps working in memory, shows a banner, and suggests Export. Settings has
  Export (a `.json` download), Import (with a confirmation that shows the counts) and Reset.
  There is also an optional "Keep screen awake" (Wake Lock API, shown only where the browser
  supports it) so the phone does not dim between glances.

## Data contract

`index.html` loads `data/walkthrough-child.js`, `data/walkthrough-adult.js`,
`data/collectibles.js`, `data/reference.js`, then `app.js`. It uses no fetch, no modules and no
libraries, so it works from `file://`. The renderer reads only the fields defined in BRIEF.md and
treats every optional field as possibly missing. A collect ID that no category lists gets a
neutral fallback chip, and chapters missing from the data show as "not in this build yet" in the
dial, rail and lists. The fixture files are marked `FIXTURE — replaced by compiled data`.
