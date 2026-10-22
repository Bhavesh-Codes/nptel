# NPTEL Software Engineering — Study & Test

A mobile-first, offline-capable study app for the **NPTEL Software Engineering** course (2026): all **12 weeks × 10 = 120** assignment questions, parsed and validated from the course PDFs, with Learn cards, practice, strict self-tests, and a self-updating **weak pile**.

Everything is static — plain HTML/CSS/JS with no build step and no backend — so it runs from any static folder, including offline after first load.

## Features

- **Home** — overall progress (mastered / attempted / weak), a `Weak pile (N)` button that mixes up to 20 weak questions across **all** weeks (level 1 first, least-recently-seen next), a 12-tile week grid with strength colours + per-question level bars, and a *weakest weeks* list.
- **Week screen** — four panels per week:
  - **Learn** — 3–5 exam-focused concept cards (definitions, bullets, *Exam trap* callouts, comparison tables, inline SVG diagrams recreated from the PDFs, KaTeX formulas with variable glossaries and worked examples) + a **Quick recap** box.
  - **Practice** — all 10 questions with correct options highlighted and the full detailed solution (nothing scored).
  - **Test** — the 10-question assignment test, one at a time, strict scoring (1 mark only for a *Perfect* answer). Retaking never wipes progress — levels just move again.
  - **Weak pile** — locked until the week's test is taken; contains your levels 1–2 questions, level 1 first, LRU ordered; updates live as you answer and on every retake.
- **Grading buckets** — *Perfect* (exact match, 1 mark), *Almost* (right options only but some missed), *Wrong pick* (≥1 wrong option, right ≥ wrong), *Way off* (re-queued **once** at the end of the session). A mastered question that slips re-enters the weak pile; a perfect answer only ever pushes levels up (max 3).
- **Trip tracking** — the app remembers which options you keep wrongly picking or keep missing and tells you (“you keep missing option c”).
- **Per-question reveal** — the global Show/Hide answers switch is joined by a small *Show answer / Hide answer* button in each Practice card's header, so you can reveal a single question while the rest stay hidden.
- **Option shuffling in weak piles & tests** — a *Shuffle options* strip on the weak-pile and Test screens randomises the a/b/c/d order per question (fixed per session, practice untouched), so you learn the content instead of the letter positions. Piles default to On; tests default to Off to mirror the real assignment.
- **Backup** — export progress as a JSON file and import it on another device (e.g. laptop → phone via the same static link); import is validated and sanitised before it replaces local state.
- **Learn pages** with genuine diagrams: use-case `«include»`/`«extend»` recreations, class diagrams with multiplicities, composition diamonds, a sequence diagram, and the course-management use-case diagram.
- **Keyboard-first answering** — `1`–`9` or `A`–`Z` selects an option, `Enter` submits, and `Enter` / `Space` / `→` advances after feedback. Option rows show their shortcut badges.
- **Responsive by design** — a single flat academic visual system: warm paper, navy ink, 1px rules, six-pixel corners, serif questions and sans-serif UI text. No gradients, glow or motion; safe-area insets and ≥44 px tap targets on phones.

## Editing the week titles

Week titles live in one config object: `window.SE_DATA.titles` at the top of [`data.js`](data.js). Edit them there and refresh. (If you regenerate `data.js` with `python parse.py`, edit the `TITLES` dict in `parse.py` instead — the regenerated file will carry the new titles.)

## Data provenance & validation

- Source of truth: the 12 assignment PDFs in [`PDFs/`](PDFs/).
- `python parse.py` re-extracts `extracted/*.txt` (via `extract.py`) into `data.js`. Its validation report and review dump are local `.txt` files, ignored by Git.
- Validation results: exactly 12 weeks × 10 questions, 120 total (18 MCQ / 102 MSQ), every answer key exists within the options, keys contiguous — all clean.
- Source-PDF exceptions (stray options, missing/pasted solutions, answer-key typos, spacing and exponent repairs) are preserved verbatim and **flagged per question** in each question's `fixes` array — shown as a *Source-exception note* in the app instead of being silently "fixed". Readability repairs (broken hyphenation, unbalanced quotes, truncated sentences, indentation of code listings) are applied directly to the question text.

## Progress storage

State is saved in `localStorage` under the versioned key **`nptel-se-study:v1`** (theme in `nptel-se-theme`, practice switch in `nptel-se-practice-answers`, pile shuffle in `nptel-se-pile-shuffle`, test shuffle in `nptel-se-test-shuffle`), wrapped in try/catch with an in-memory fallback if storage is unavailable. Progress per question: level 0–3, attempt count, last-seen time, last result, and per-option wrong/missed counters.

To wipe everything and start over, Home has a **Reset → “Clear progress & start fresh”** card with a two-tap confirmation (armed for 5 seconds): the first tap asks, the second tap deletes the versioned storage key, clears in-memory sessions and re-renders. Your theme preference is kept.

### Backup & cross-device transfer

The **Backup** card on Home exports/imports progress as a small JSON file — there is no server or account; the file *is* the transfer:

1. **Export** on the device that has the progress — downloads `nptel-se-progress-YYYY-MM-DD.json` (Downloads folder). If downloads are blocked (e.g. some in-app browsers), a copy-modal with the raw JSON appears instead.
2. **Move the file** to the other device by any channel you like: email it to yourself, WhatsApp “message yourself”, Google Drive/OneDrive link, Telegram, or a USB cable. You can also skip the file entirely — copy the JSON text from the fallback modal and paste it into any notes app.
3. **Import** on the target device: Home → Backup → *Import data* → **Choose export file…** (or paste the JSON into the box) → *Import & replace current progress*. Existing progress on that device is replaced by the file's version.

The import is sanitised: only question ids that exist in the app are kept, levels are clamped to 0–3, invalid fields dropped — a malformed or foreign file can't corrupt local state. The snapshot contains only anonymous study progress (no personal data).

## Tech notes

- `assets/katex/` vendors KaTeX 0.16.22 (CSS + JS + all fonts) locally, so formulas render offline with no CDN.
- Diagrams are inline SVG themed via CSS variables — crisp on any display, no images.
- Hash routing (`#/`, `#/week/<n>/<learn|practice|test|pile>`, `#/pile`), no reloads.
