# NPTEL Software Engineering — Study & Test

A mobile-first, offline-capable study app for the **NPTEL Software Engineering** course (2026): all **12 weeks × 10 = 120** assignment questions, parsed and validated from the course PDFs, with Learn cards, practice, strict self-tests, and a self-updating **weak pile**.

Everything is static — plain HTML/CSS/JS with no build step and no backend — so it runs from GitHub Pages (or any static folder), including offline after first load.

## Features

- **Home** — overall progress (mastered / attempted / weak), a `Weak pile (N)` button that mixes up to 20 weak questions across **all** weeks (level 1 first, least-recently-seen next), a 12-tile week grid with strength colours + per-question level bars, and a *weakest weeks* list.
- **Week screen** — four panels per week:
  - **Learn** — 3–5 exam-focused concept cards (definitions, bullets, *Exam trap* callouts, comparison tables, inline SVG diagrams recreated from the PDFs, KaTeX formulas with variable glossaries and worked examples) + a **Quick recap** box.
  - **Practice** — all 10 questions with correct options highlighted and the full detailed solution (nothing scored).
  - **Test** — the 10-question assignment test, one at a time, strict scoring (1 mark only for a *Perfect* answer). Retaking never wipes progress — levels just move again.
  - **Weak pile** — locked until the week's test is taken; contains your levels 1–2 questions, level 1 first, LRU ordered; updates live as you answer and on every retake.
- **Grading buckets** — *Perfect* (exact match, 1 mark), *Almost* (right options only but some missed), *Wrong pick* (≥1 wrong option, right ≥ wrong), *Way off* (re-queued **once** at the end of the session). A mastered question that slips re-enters the weak pile; a perfect answer only ever pushes levels up (max 3).
- **Trip tracking** — the app remembers which options you keep wrongly picking or keep missing and tells you (“you keep missing option c”).
- **Learn pages** with genuine diagrams: use-case `«include»`/`«extend»` recreations, class diagrams with multiplicities, composition diamonds, a sequence diagram, and the course-management use-case diagram.
- **Keyboard-first answering** — `1`–`9` or `A`–`Z` selects an option, `Enter` submits, and `Enter` / `Space` / `→` advances after feedback. Option rows show their shortcut badges.
- **Responsive by design** — a single flat academic visual system: warm paper, navy ink, 1px rules, six-pixel corners, serif questions and sans-serif UI text. No gradients, glow or motion; safe-area insets and ≥44 px tap targets on phones.

## Running locally

Just serve the folder (any static server) and open the page:

```bash
python -m http.server 8000
# → http://localhost:8000/
```

Opening `index.html` directly from disk also works (no `fetch` is used; scripts are classic `<script src>` tags).

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `nptel-se-study`).
2. Push this folder's **deployable files** to the default branch:

   ```bash
   git init
   git add index.html style.css app.js learn.js data.js README.md assets/
   git commit -m "NPTEL SE study app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. Repository → **Settings → Pages → Build and deployment** → Source: *Deploy from a branch* → Branch: `main` / `/ (root)` → Save.
4. The site appears at `https://<your-username>.github.io/<repo-name>/` within a few minutes.

All paths are relative, so it works both at the domain root (user page) and in a sub-path (project page). No fetch/XHR is used, no build step, nothing to configure.

### Optional: keep the generator out of the repo

The `parse.py` pipeline (plus `extract.py`, `render.py`, `extracted/`, `diagpages/`, `check_chars.py`) is only needed to regenerate `data.js` from the PDFs. You can exclude them via `.gitignore` if you prefer — the app only needs `index.html`, `style.css`, `app.js`, `learn.js`, `data.js` and `assets/`.

## Editing the week titles

Week titles live in one config object: `window.SE_DATA.titles` at the top of [`data.js`](data.js). Edit them there and refresh. (If you regenerate `data.js` with `python parse.py`, edit the `TITLES` dict in `parse.py` instead — the regenerated file will carry the new titles.)

## Data provenance & validation

- Source of truth: the 12 assignment PDFs in [`PDFs/`](PDFs/).
- `python parse.py` re-extracts `extracted/*.txt` (via `extract.py`) into `data.js`. Its validation report and review dump are local `.txt` files, ignored by Git.
- Validation results: exactly 12 weeks × 10 questions, 120 total (18 MCQ / 102 MSQ), every answer key exists within the options, keys contiguous — all clean.
- Source-PDF exceptions (stray options, missing/pasted solutions, answer-key typos, spacing and exponent repairs) are preserved verbatim and **flagged per question** in each question's `fixes` array — shown as a *Source-exception note* in the app instead of being silently "fixed". Readability repairs (broken hyphenation, unbalanced quotes, truncated sentences, indentation of code listings) are applied directly to the question text.

## Progress storage

State is saved in `localStorage` under the versioned key **`nptel-se-study:v1`** (theme under `nptel-se-theme`), wrapped in try/catch with an in-memory fallback if storage is unavailable. Progress per question: level 0–3, attempt count, last-seen time, last result, and per-option wrong/missed counters. There is deliberately **no export button** — progress is private to your browser.

## Tech notes

- `assets/katex/` vendors KaTeX 0.16.22 (CSS + JS + all fonts) locally, so formulas render offline with no CDN.
- Diagrams are inline SVG themed via CSS variables — crisp on any display, no images.
- Hash routing (`#/`, `#/week/<n>/<learn|practice|test|pile>`, `#/pile`), no reloads.
