# Design A: Hero's Almanac

## The idea

An almanac is a book that tracks the sun, the moon and the seasons, which suits a game built
on day and night and a seven-year jump in time. The guide's look follows where you are in
the game: day or night through the theme, child or adult era, and each chapter's realm
(forest, fire, water and so on), while the text stays plain and legible.

## Palette, with reasons

Colors are tokens on `:root`, redefined for the dark theme. The theme follows the system
setting, and there is a manual toggle in the top bar and the desktop rail.

| Token | Day (light) | Night (dark) | Why |
|---|---|---|---|
| `--bg` | `#efe7d3` vellum | `#0c0f1d` midnight indigo | Warm paper by day. At night the background is near-black blue, not grey, so a dim room isn't lit by a white phone and the page feels like a night sky. |
| `--ink` | `#1e1b15` | `#ece5d3` moonlight cream | Warm off-white rather than pure white, which cuts glare in the dark. Contrast is above 12:1 in both themes. |
| `--gold` | `#8a5c00` | `#ebc679` | One "treasure" accent for collectibles, counts and focus rings. |
| `--realm` | hue per chapter, 30% L | same hue, 66% L | Tints the chapter emblem, checkboxes, section icons and landscape. Forest green for the Deku Tree, ember for the Fire Temple, deep blue for the Water Temple. One hue variable per chapter keeps the lightness readable in both themes. |
| `--night` / `--day` | indigo / amber | periwinkle / sun-gold | Time-of-day badges and the coloured left edge on night-only steps. |
| `--tip` / `--warn` / `--remake` | teal / rust / violet | mint / coral / lavender | Three note types with separate colours and treatments (below). |

Boss cards are the one dark element in both themes: a black-red panel with an ember glow.

Texture is a single fixed SVG `feTurbulence` grain layer at 5-7% opacity. There are no
images, no parchment JPEGs and no Nintendo assets. Every icon is an original inline SVG
symbol: a spider token for Gold Skulltulas, a quarter-heart, a gem, a medallion ring, a
dungeon arch, a horned mask for bosses, and an 8-point emblem behind chapter numbers.

## Type, with reasons

- **Atkinson Hyperlegible** (body). Made by the Braille Institute for low-vision reading.
  Its letters are distinctive (I/l/1, 0/O, rn/m), which matters when you glance at a phone
  between inputs. Base size is 17px, rising to 19px and 21px on 1800px+ and 2300px+
  screens for reading at desk distance. A text-size control adds Large and Huge.
- **Fraunces** (headings and numerals). A soft old-style serif with a slightly hand-cut
  feel. It gives the book its character without a fantasy cliché (no papyrus, no Cinzel).
  It stays in headings, counts and chapter numerals; body text never uses it.
- Fallbacks: system-ui / Segoe UI / Roboto for the body; Iowan Old Style / Palatino /
  Georgia for headings. The page stays well-typeset offline.

## Layout

**Phone (360-430px, primary).** Single column with a 16px gutter. Navigation sits in the
thumb zone:

- A bottom tab bar: Journey, Collect, Search, Lore, More.
- A floating **Next step** button above it, lower right. It scrolls to the first unchecked
  step after your last checked one. When the chapter is done it becomes **Next chapter**.
- The top bar shows the chapter and the section you are scrolled into. Tapping it opens a
  bottom sheet with every section (with counts) and every chapter.
- Each chapter opens with a frontispiece: realm-tinted sky (sun by day, crescent moon and
  stars by night), a hills-and-trees silhouette for child chapters or a ruined skyline for
  adult ones, Bring/Earn columns, a progress bar, and a fold-out "Collectibles here" list.
- Every tap target is at least 44px. A script checked all 16 views at 360px and 1440px:
  no horizontal scroll.

**Desktop (1024px+).** A real three-column layout, not a stretched phone:

- **Left rail (288-330px):** brand, search box, navigation, and the chapter timeline with
  per-chapter %. A "Seven years pass" break separates the eras.
- **Centre:** a reading column capped at 48rem.
- **Right panel (340-400px, 1280px+):** context for the current page. In a chapter it
  holds section links with counts, every collectible in the chapter as tappable chips, and
  a jump to the boss. In Collect it lists every missable item still open.
- The bottom bar is hidden, and `/` focuses search.

## How the walkthrough is drawn

- **Steps:** a 44px checkbox in the realm colour, a step number, then the text. **Bold**
  items get a soft realm-coloured underline so key items stand out at a glance. Checked
  steps fade; a setting can hide them.
- **Collectible chips** sit under the step and show glyph, category and name, plus a moon
  if the item is night-only. A chip uses the same state as the tracker row. Checking a
  step also checks its chips. Every toggle shows an **Undo** toast for a mis-tap.
  Unrecognised `collect` IDs (dungeon chests, for example) appear as muted "Other check"
  chips with a readable name rather than vanishing.
- **Notes**, each with its own treatment:
  - **Hint:** teal panel with a sparkle.
  - **Caution:** rust panel with a solid left rule and a diamond "!". This is for
    missables and one-way doors.
  - **Remake check · unconfirmed:** violet, dashed border, hourglass. The dashed line
    signals "not settled yet".
  - **Night only / Day only:** a badge, plus a coloured left edge on the step card.
- **Section kinds change the setting:**
  - Overworld steps sit on open ground.
  - Dungeon and boss steps sit inside a sunken stone-block panel, so you can tell at a
    glance that you are underground.
  - Sweeps and side quests get a gold icon.
  - Era rules under section titles: a leaf vine for child, a notched double blade line for
    adult.
- **Boss card:** epithet-style name, a "Weak point" callout, and a numbered strategy list.

## Trackers and reference

- **Collect hub:** a card per category with its count (for example 37/100), a progress bar
  and a missable flag.
- **Tracker pages:** each has a picture of your progress next to the big count:
  - Gold Skulltulas: a 10×10 token grid with "N more to the next reward".
  - Pieces of Heart: hearts filling in quarters, with "2 of 4 toward the next".
  - Small sets: diamond pips.
- **Tracker filters:** Missing/Got, age, "gettable at" day or night, and area. Results are
  grouped by area with per-area counts. Each row links to its exact walkthrough step, or
  says which chapter covers it when that chapter is not in the build.
- **Songs:** button glyphs (A, and arrow C-buttons as original circles) plus the notes
  placed on a five-line staff, so the melody's shape is visible. Song cards carry the same
  collect chip as the tracker.
- **Other reference pages:** Bosses, Bestiary (with an inline filter), Minigames, Side
  quests, and Remake notes. Remake notes include an auto-built list of every step flagged
  for a post-launch check.
- **Search:** one search across chapters, steps, collectibles, songs, bosses, enemies,
  minigames and side quests. All words must match, title matches rank first, and matches
  are highlighted. You can tick a result's checkbox without leaving search.

## Why it beats a wiki page mid-game

1. **It knows where you are.** Opening the guide returns to your last chapter and scrolls to
   the next unchecked step. **Next step** does the same with one thumb.
2. **One tap does two jobs.** Checking a step records its collectibles too, everywhere. A
   wiki makes you keep a separate checklist.
3. **Glanceable state.** Night-only, missable, one-way and unconfirmed-for-the-remake each
   look different, so you can see them without reading the paragraph.
4. **"What can I get right now?"** Filter Skulltulas to Missing + Child + Night +
   Kokiri Forest and you get exactly the list for where you are standing.
5. **Built for a dim room and one hand.** The dark theme has no glare, text is
   hyperlegible at 17px or more, and every control is at least 44px and sits at the bottom
   of the screen.
6. **Fast.** Only the open chapter is in the DOM. There are no libraries and no build; it
   works from `file://`.

## Technical notes

- Loads `data/walkthrough-child.js`, `data/walkthrough-adult.js`, `data/collectibles.js`
  and `data/reference.js` in that order, then `assets/app.js`.
- The renderer is generic over the BRIEF.md schema:
  - Chapters are sorted by `num`.
  - Realm hues are keyed by chapter-ID prefix, falling back to era.
  - Missing chapters, unknown collect IDs, empty reference arrays and unknown section
    kinds all degrade gracefully.
- Progress is stored under `oot-guide.progress.v1` and prefs under `oot-guide.prefs.v1`.
  Every storage access is in try/catch with an in-memory fallback. When storage is blocked,
  the guide still works, a toast and a Settings notice say so, and Export keeps progress.
  This was tested by forcing `localStorage` to throw.
- Export writes `oot-guide-progress-YYYY-MM-DD.json` (`{app, version, done[], last}`).
  Import validates the file and asks before replacing.
- Hash routes: `#/journey`, `#/ch/<chapter>[/<step-or-section>]`,
  `#/collect[/<cat>[/<item>]]`, `#/search/<q>`, `#/lore[/<page>[/<id>]]`, `#/settings`.
- The fixture in `data/` is marked `FIXTURE — replaced by compiled data` and is not
  fact-checked.
