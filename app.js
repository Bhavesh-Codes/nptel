/* ============================================================
   NPTEL Software Engineering — Study & Test  (app.js)
   Router · state · grading & weak-pile engine · screens · SVG figures
   ============================================================ */
"use strict";

/* ------------------------------------------------------------------ *
 * 0. Small helpers
 * ------------------------------------------------------------------ */
const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const APP = $("#app");
const DATA = window.SE_DATA;
const WEEKS = DATA.weeks;
const TITLES = DATA.titles;
const QMAP = {};
WEEKS.forEach(w => w.questions.forEach(q => { QMAP[q.id] = q; }));

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined && text !== null && text !== "") e.textContent = text;
  return e;
}
function frag(children) {
  const f = document.createDocumentFragment();
  children.forEach(c => { if (c) f.appendChild(c); });
  return f;
}
function toast(msg) {
  let t = $("#toast");
  if (!t) { t = el("div"); t.id = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ------------------------------------------------------------------ *
 * 1. Theme (auto → dark → light cycle)
 * ------------------------------------------------------------------ */
const THEME_KEY = "nptel-se-theme";
function savedTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
function applyTheme(mode) {
  document.documentElement.removeAttribute("data-theme");
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", mode === "auto" ? (dark ? "dark" : "light") : mode);
  const meta = $("meta[name=theme-color]");
  if (meta) meta.setAttribute("content", dark ? "#0e131f" : "#f4f6fb");
}
let themeMode = savedTheme() || "auto";
function themeGlyph() { return themeMode === "dark" ? "☀️" : themeMode === "light" ? "🌙" : "🌗"; }
function cycleTheme() {
  themeMode = themeMode === "auto" ? "dark" : themeMode === "dark" ? "light" : "auto";
  try { localStorage.setItem(THEME_KEY, themeMode); } catch (e) { /* ok */ }
  applyTheme(themeMode);
  toast("Theme: " + themeMode);
}
applyTheme(themeMode);

/* ------------------------------------------------------------------ *
 * 2. Progress state (localStorage, versioned, try/catch-safe)
 * ------------------------------------------------------------------ */
const KEY = "nptel-se-study:v1";
let storageOK = true;
function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    if (raw && raw.v === 1) return raw;
  } catch (e) { storageOK = false; }
  return { v: 1, q: {}, testTaken: {} };
}
let state = loadState();
if (!state.q) state.q = {};
if (!state.testTaken) state.testTaken = {};
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); }
  catch (e) { storageOK = false; }
}
function qs(qid) { /* per-question recorded state (spec Step 4) */
  if (!state.q[qid]) state.q[qid] = { lv: 0, att: 0, last: 0, res: null, wp: {}, ms: {} };
  return state.q[qid];
}

/* ------------------------------------------------------------------ *
 * 3. Grading engine  (spec Step 5)
 * ------------------------------------------------------------------ */
function gradeQ(picked, correct) {
  const rightPicks = picked.filter(k => correct.includes(k)).length;
  const wrongPicks = picked.filter(k => !correct.includes(k)).length;
  let cat;
  if (wrongPicks === 0 && rightPicks === correct.length) cat = "perfect";
  else if (wrongPicks === 0 && rightPicks > 0) cat = "almost";
  else if (wrongPicks >= 1 && rightPicks >= wrongPicks) cat = "wrongpick";
  else cat = "wayoff";
  return { cat, score: cat === "perfect" ? 1 : 0, rightPicks, wrongPicks };
}
function catLabel(cat) {
  return {
    perfect: ["Perfect — full marks", "good", "✓"],
    almost: ["Almost — right options only, but some missed", "mid", "◑"],
    wrongpick: ["Wrong pick — you selected wrong option(s)", "poor", "✗"],
    wayoff: ["Way off — mostly incorrect", "poor", "✗"],
  }[cat];
}
/* Level rules (spec Step 6):
   First attempt : Perfect→3, Almost→2, Wrong pick/Way off→1
   Later attempt : Perfect→level+1 (max 3), Almost→min(level,2) (never up),
                   Wrong pick/Way off→1. Levels only ever change; history kept. */
function recordAttempt(qid, picked) {
  const q = QMAP[qid];
  const s = qs(qid);
  const first = s.att === 0;
  const before = s.lv;
  const g = gradeQ(picked, q.ans);

  picked.filter(k => !q.ans.includes(k)).forEach(k => { s.wp[k] = (s.wp[k] || 0) + 1; });
  q.ans.filter(k => !picked.includes(k)).forEach(k => { s.ms[k] = (s.ms[k] || 0) + 1; });

  if (g.cat === "perfect") s.lv = first ? 3 : Math.min(3, s.lv + 1);
  else if (g.cat === "almost") s.lv = first ? 2 : Math.min(s.lv, 2);
  else s.lv = 1;

  s.att += 1;
  s.res = g.cat;
  s.last = Date.now();
  save();
  return { ...g, before, after: s.lv };
}
function tripMessages(q, picked) {
  const s = qs(q.id);
  const out = [];
  q.options.forEach(o => {
    if ((s.wp[o.k] || 0) >= 2) out.push(`You keep wrongly picking option ${o.k}.`);
    if ((s.ms[o.k] || 0) >= 2) out.push(`You keep missing option ${o.k}.`);
  });
  return Array.from(new Set(out));
}

/* ------------------------------------------------------------------ *
 * 4. Piles & strength  (spec Step 8)
 * ------------------------------------------------------------------ */
function levelPile(qids) {
  return qids
    .map(id => ({ id, s: qs(id) }))
    .filter(x => x.s.lv === 1 || x.s.lv === 2)
    .sort((a, b) => (a.s.lv - b.s.lv) || (a.s.last - b.s.last))
    .map(x => x.id);
}
function weekPile(w) { return levelPile(WEEKS[w - 1].questions.map(q => q.id)); }
function mixedPile() { return levelPile(WEEKS.flatMap(w => w.questions.map(q => q.id))); }
function weekStrength(w) {
  return Math.round(10 * WEEKS[w - 1].questions.filter(q => qs(q.id).lv === 3).length);
}
function weekAttempted(w) { return WEEKS[w - 1].questions.some(q => qs(q.id).att > 0); }

/* ------------------------------------------------------------------ *
 * 5. SVG figures (recreated from source PDFs; themed via CSS vars)
 * ------------------------------------------------------------------ */
const FGC = 'fill="none" stroke="currentColor"';
function head(x2, y2, ang) {
  const L = 11, W = 4.6, c = Math.cos(ang), s = Math.sin(ang);
  return `M ${x2} ${y2} L ${x2 - L * c + W * s} ${y2 - L * s - W * c} L ${x2 - L * c - W * s} ${y2 - L * s + W * c} Z`;
}
function arrow(x1, y1, x2, y2, cls) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const bx = x2 - 9 * Math.cos(ang), by = y2 - 9 * Math.sin(ang);
  return `<path d="M ${x1} ${y1} L ${bx.toFixed(1)} ${by.toFixed(1)}" class="${cls || "ls"}"/><path d="${head(x2, y2, ang)}" class="af"/>`;
}
function dArrow(x1, y1, x2, y2) { return arrow(x1, y1, x2, y2, "ld"); } /* dashed UML dependency */
function box(x, y, w, h, label, cls) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" class="${cls || "nd"}"/>` +
    `<text x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" class="tx">${label}</text>`;
}
function oval(cx, cy, rx, ry, lines) {
  const tspans = (lines || []).map((l, i) =>
    `<tspan x="${cx}" dy="${i === 0 ? (1 - (lines.length - 1) * 1.1) * ry / 2 + ry / 2 - 2 : 13}" text-anchor="middle">${l}</tspan>`).join("");
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" class="ov"/>` +
    `<text class="tx">${tspans}</text>`;
}
function txt(x, y, t, cls) { return `<text x="${x}" y="${y}" class="${cls || "lb"}">${t}</text>`; }
function mtxt(x, y, lines, anchor, cls) {
  const tspans = lines.map((l, i) => `<tspan x="${x}" dy="${i ? 12 : 0}" text-anchor="${anchor || "middle"}">${l}</tspan>`).join("");
  return `<text y="${y}" class="${cls || "lb"}">${tspans}</text>`;
}
function diamond(cx, cy) {
  return `<path d="M ${cx} ${cy - 7} L ${cx + 12} ${cy} L ${cx} ${cy + 7} L ${cx - 12} ${cy} Z" class="hg"/>`;
}
function genTri(x, y, ang) { /* hollow generalization triangle; (x,y)=tip, pointing up */
  return `<path transform="translate(${x} ${y}) rotate(${ang})" d="M 0 0 L -8 13 L 8 13 Z" class="hf"/>`;
}
function actor(cx, cy) {
  return `<circle cx="${cx}" cy="${cy + 8}" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/>` +
    `<path d="M ${cx} ${cy + 15} L ${cx} ${cy + 33} M ${cx - 9} ${cy + 21} L ${cx + 9} ${cy + 21} ` +
    `M ${cx} ${cy + 33} L ${cx - 8} ${cy + 47} M ${cx} ${cy + 33} L ${cx + 8} ${cy + 47}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`;
}
function activationBox(x, y, h) { return `<rect x="${x - 6}" y="${y}" width="12" height="${h}" rx="3" class="act"/>`; }

const FIGBUILDERS = {
  /* W7 Q4 — Borrow Book --«include»--> Verify membership */
  w7q4() {
    return `<svg viewBox="0 0 360 110" role="img" aria-label="Borrow Book includes Verify Member">
      ${oval(88, 55, 74, 30, ["Borrow Book"])}
      ${oval(278, 55, 80, 30, ["Verify Member"])}
      ${dArrow(163, 55, 196, 55)}
      ${txt(180, 36, "«include»", "lb")}
    </svg>`;
  },
  /* W7 Q5 — Print Receipt --«extend»--> Withdraw Money (PDF labels base as such) */
  w7q5() {
    return `<svg viewBox="0 0 380 110" role="img" aria-label="Print Receipt extends Withdraw Money">
      ${oval(112, 55, 80, 30, ["Withdraw Money"])}
      ${oval(292, 55, 78, 30, ["Print Receipt"])}
      ${dArrow(213, 55, 181, 55)}
      ${txt(197, 36, "«extend»", "lb")}
    </svg>`;
  },
  /* W8 Q1 — Bank class model */
  w8q1() {
    let s = `<svg viewBox="0 0 440 250" role="img" aria-label="Branch issues 1..* Account; Customer has 0..* Account; Account uses 0..* ATM; Saving and Current generalize Account">`;
    s += box(170, 8, 100, 28, "Customer");
    s += box(6, 110, 86, 28, "Branch");
    s += box(184, 110, 84, 28, "Account");
    s += box(348, 110, 84, 28, "ATM");
    s += box(60, 202, 76, 28, "Saving");
    s += box(252, 202, 76, 28, "Current");
    s += `<path d="M 220 36 L 220 108" class="ls"/>` + txt(240, 70, "has") + txt(240, 98, "0..*");
    s += `<path d="M 92 124 L 184 124" class="ls"/>` + txt(134, 116, "issues") + txt(172, 142, "1..*", "lb");
    s += arrow(268, 124, 346, 124) + txt(306, 116, "uses") + txt(348, 142, "0..*", "lb");
    s += `<path d="M 104 202 L 210 138" class="ls"/>` + genTri(213, 136, -55);
    s += `<path d="M 284 202 L 242 138" class="ls"/>` + genTri(241, 136, 25);
    return s + `</svg>`;
  },
  /* W8 Q2 — composition: Circle ◆—1 Point, Polygon ◆—3..* Point */
  w8q2() {
    let s = `<svg viewBox="0 0 404 196" role="img" aria-label="Circle composes 1 Point; Polygon composes 3..* Points">`;
    s += box(8, 18, 104, 34, "Circle");
    s += box(8, 146, 104, 34, "Polygon");
    s += box(296, 82, 96, 34, "Point");
    s += diamond(120, 35);
    s += `<path d="M 132 35 L 296 96" class="ls"/>` + txt(258, 78, "1", "lb");
    s += diamond(120, 163);
    s += `<path d="M 132 163 L 296 102" class="ls"/>` + txt(256, 124, "3..*", "lb");
    return s + `</svg>`;
  },
  /* W8 Q3 — Window 1 ◆— * Frame */
  w8q3() {
    let s = `<svg viewBox="0 0 320 192" role="img" aria-label="Window composes many Frames">`;
    s += box(94, 14, 132, 34, "Window");
    s += box(94, 146, 132, 34, "Frame");
    s += diamond(160, 55);
    s += `<path d="M 160 62 L 160 146" class="ls"/>`;
    s += txt(146, 78, "1", "lb") + txt(146, 138, "*", "lb");
    return s + `</svg>`;
  },
  /* W8 Q5 — sequence diagram */
  w8q5() {
    let s = `<svg viewBox="0 0 430 264" role="img" aria-label="Sequence diagram: a:A calls :B which calls :C">`;
    s += box(44, 8, 78, 26, "a : A");
    s += box(196, 8, 70, 26, ": B");
    s += box(328, 8, 68, 26, ": C");
    s += `<path d="M 83 34 L 83 250" class="ld"/>`;
    s += `<path d="M 231 34 L 231 250" class="ld"/>`;
    s += `<path d="M 362 34 L 362 250" class="ld"/>`;
    s += activationBox(83, 56, 122);
    s += activationBox(231, 92, 74);
    s += activationBox(362, 124, 44);
    s += arrow(14, 64, 76, 64) + txt(30, 56, "m1()");
    s += arrow(89, 96, 224, 96) + txt(152, 88, "«create»");
    s += arrow(240, 108, 355, 108) + txt(298, 100, "doB(c)");
    s += arrow(89, 124, 224, 124) + txt(152, 142, "flag = doA(this)");
    s += arrow(237, 148, 355, 148, "ld") + txt(296, 166, "«create»");
    return s + `</svg>`;
  },
  /* W9 Q6 — Course Management Software use cases */
  w9q6() {
    let s = `<svg viewBox="0 0 458 320" role="img" aria-label="Course Management Software: Professor registers offerings and shows registration; Student registers and drops courses; External Billing System participates; Show registration extends Set Course List">`;
    s += `<rect x="98" y="8" width="340" height="302" rx="10" class="nd"/>`;
    s += txt(268, 28, "Course Management Software");
    s += actor(36, 42) + mtxt(36, 106, ["Professor"]);
    s += actor(36, 194) + mtxt(36, 258, ["Student"]);
    s += actor(416, 200) + mtxt(416, 264, ["«External»", "Billing System"]);
    s += oval(252, 66, 84, 24, ["Register course", "offering"]);
    /* extend line first, under ellipses */
    s += dArrow(252, 140, 280, 140);
    s += txt(266, 128, "«Extend»");
    s += oval(188, 140, 62, 22, ["Show registration"]);
    s += oval(348, 140, 68, 22, ["Set Course List"]);
    s += oval(280, 204, 78, 22, ["Register course"]);
    s += oval(196, 282, 70, 22, ["Drop course"]);
    s += `<path d="M 64 72 L 170 66" class="ls"/>`;
    s += `<path d="M 64 86 L 126 134" class="ls"/>`;
    s += `<path d="M 64 214 L 202 208" class="ls"/>`;
    s += `<path d="M 64 238 L 134 270" class="ls"/>`;
    s += `<path d="M 400 230 L 356 212" class="ls"/>`;
    return s + `</svg>`;
  },
};
const FIGCAPTIONS = {
  w7q4: "Recreated from the PDF: Borrow Book always executes Verify Member — «include» runs from the base use case to the included one.",
  w7q5: "Recreated from the PDF (which labels the base use case “Withdraw Money”): Print Receipt is optional — «extend» runs from the extension to the base.",
  w8q1: "Recreated from the PDF: Branch issues 1..* Account, Customer has 0..* Account, Account uses 0..* ATM; Saving and Current specialize (is-a) Account.",
  w8q2: "Recreated from the PDF: filled diamonds mark composition — Circle owns exactly 1 Point, Polygon owns 3..* Points.",
  w8q3: "Recreated from the PDF: Window 1 ◆— * Frame; a Frame cannot exist outside its Window.",
  w8q5: "Recreated from the PDF: lifelines a:A, :B, :C; synchronous calls with activations; «create» denotes object creation messages.",
  w9q6: "Recreated from the PDF: 5 use cases ⇒ 5 boundary classes (one interface per use case); actors Professor, Student, «External» Billing System.",
};
function figureFor(qid) {
  const b = FIGBUILDERS[qid];
  if (!b) return null;
  const wrap = el("div", "figwrap");
  const holder = document.createElement("div");
  holder.innerHTML = b(); /* trusted static SVG built above */
  while (holder.firstChild) wrap.appendChild(holder.firstChild);
  wrap.appendChild(el("div", "figcap", FIGCAPTIONS[qid] || "Recreated as an SVG from the diagram in the source PDF."));
  return wrap;
}

/* ------------------------------------------------------------------ *
 * 6. Question cards & option rows
 * ------------------------------------------------------------------ */
function optRow(q, o, cfg) {
  const row = el("div", "opt" + (cfg.cls ? " " + cfg.cls : ""));
  row.setAttribute("role", cfg.interactive ? "checkbox" : "option");
  if (cfg.interactive) row.setAttribute("aria-checked", cfg.picked ? "true" : "false");
  const k = el("span", "key", o.k.toUpperCase());
  const t = el("span", "txt", o.t);
  row.appendChild(k); row.appendChild(t);
  if (cfg.mark) row.appendChild(el("span", "optmark", cfg.mark));
  if (cfg.interactive) {
    row.tabIndex = 0;
    const toggle = () => {
      cfg.picked = !cfg.picked;
      row.setAttribute("aria-checked", cfg.picked ? "true" : "false");
      if (cfg.onChange) cfg.onChange();
    };
    row.addEventListener("click", toggle);
    row.addEventListener("keydown", ev => {
      if (ev.key === " " || ev.key === "Enter") { ev.preventDefault(); toggle(); }
    });
  }
  return row;
}
/* modes: "practice" (answers+solution) · "answered" (feedback) · "ask" (interactive) */
function questionCard(q, mode, ctx) {
  ctx = ctx || {};
  const card = el("div", "qcard");
  const head = el("div", null);
  head.appendChild(el("span", "qidchip", q.id.toUpperCase()));
  head.appendChild(el("span", "qtype", q.ans.length === 1 ? "MCQ" : "MSQ — multiple answers"));
  card.appendChild(head);
  card.appendChild(el("p", "qtext", q.text));

  const picked = ctx.picked || [];
  const stack = el("div", "opts");
  q.options.forEach(o => {
    if (mode === "ask") {
      stack.appendChild(optRow(q, o, {
        interactive: true,
        picked: picked.includes(o.k),
        onChange: () => { ctx.onPick && ctx.onPick(); },
      }));
      return;
    }
    let cls = "", mark = "";
    const isC = q.ans.includes(o.k), isP = picked.includes(o.k);
    if (mode === "practice") {
      if (isC) { cls = "is-correct"; mark = "✓"; }
    } else if (mode === "answered") {
      if (isC && isP) { cls = "is-correct"; mark = "✓"; }
      else if (!isC && isP) { cls = "is-wrongpick"; mark = "✗"; }
      else if (isC && !isP) { cls = "is-missed"; mark = "+"; }
      else if (!isC && !isP && ctx.graded == null) { cls = "is-picked"; }
    }
    stack.appendChild(optRow(q, o, { cls, mark }));
  });
  card.appendChild(stack);

  if (q.fig) { const f = figureFor(q.fig); if (f) card.appendChild(f); }

  if (ctx.graded) {
    const L = catLabel(ctx.graded.cat);
    const fb = el("div", "fb " + L[1]);
    fb.appendChild(el("span", null, L[2] + " " + L[0]));
    fb.appendChild(el("span", "sc", ctx.graded.score ? "1 mark" : "0 marks"));
    card.appendChild(fb);
    const trips = tripMessages(q, picked);
    if (trips.length) { const t = el("div", "trips"); t.textContent = trips.join(" "); card.appendChild(t); }
  }
  if (mode === "practice" || ctx.graded) card.appendChild(solutionBox(q));
  return card;
}
function solutionBox(q) {
  const b = el("div", "solution");
  b.appendChild(el("span", "slabel", "Detailed solution" + (q.fixes && q.fixes.length ? " · flagged in source PDF" : "")));
  b.appendChild(el("div", "soltext", q.sol));
  if (q.fixes && q.fixes.length) b.appendChild(el("div", "qnote", "Source-exception note: " + q.fixes.join(" ")));
  return b;
}
function progressLine(cur, total, label) {
  const p = el("div", "progressline");
  if (label) p.appendChild(el("span", null, label));
  const bar = el("div", "bar");
  const i = el("i"); i.style.cssText = `width:${Math.round(100 * cur / total)}%;background:var(--accent)`;
  bar.appendChild(i); p.appendChild(bar);
  p.appendChild(el("span", null, `${cur}/${total}`));
  return p;
}

/* Fixed bottom action bar */
function actionsBar() {
  $$(".actions").forEach(a => a.remove());
  const bar = el("div", "actions");
  document.body.appendChild(bar);
  return bar;
}
function clearActions() { $$(".actions").forEach(a => a.remove()); }

/* ------------------------------------------------------------------ *
 * 7. Router
 * ------------------------------------------------------------------ */
function parseHash() {
  return { seg: (location.hash || "#/").replace(/^#\/?/, "").split("/").filter(Boolean) };
}
function go(hash) { location.hash = hash; }
window.addEventListener("hashchange", route);

/* in-memory session bookkeeping (progress itself is saved on every answer) */
const wsessions = {};   /* "test4" / "wpile4" -> session object */
const lastTest = {};    /* week -> {score, results} for the results view */
let mixedSession = null;

function route() {
  clearActions();
  const { seg } = parseHash();
  APP.textContent = "";
  window.scrollTo(0, 0);
  if (seg.length === 0) return renderHome();
  if (seg[0] === "week") {
    const w = parseInt(seg[1], 10);
    if (!(w >= 1 && w <= 12)) return renderHome();
    const panel = ["learn", "practice", "test", "pile"].includes(seg[2]) ? seg[2] : "learn";
    return renderWeek(w, panel);
  }
  if (seg[0] === "pile") return renderMixedPile();
  return renderHome();
}

/* ------------------------------------------------------------------ *
 * 8. Shared top bar
 * ------------------------------------------------------------------ */
function topbar(title, sub, opts) {
  opts = opts || {};
  const bar = el("div", "topbar");
  if (opts.back) {
    const b = el("button", "iconbtn", "←");
    b.setAttribute("aria-label", "Back");
    b.addEventListener("click", () => go("#/"));
    bar.appendChild(b);
  }
  const h = el("h1", null, title);
  if (sub) h.appendChild(el("small", null, sub));
  bar.appendChild(h);
  bar.appendChild(el("div", "spacer"));
  const t = el("button", "iconbtn", themeGlyph());
  t.setAttribute("aria-label", "Cycle theme (currently " + themeMode + ")");
  t.addEventListener("click", cycleTheme);
  bar.appendChild(t);
  return bar;
}

/* ------------------------------------------------------------------ *
 * 9. HOME
 * ------------------------------------------------------------------ */
function homeStats() {
  let mastered = 0, attempted = 0;
  WEEKS.forEach(w => w.questions.forEach(q => {
    const s = qs(q.id);
    if (s.att > 0) attempted++;
    if (s.lv === 3) mastered++;
  }));
  return { mastered, attempted, weak: mixedPile().length };
}
function renderHome() {
  mixedSession = null;
  const st = homeStats();
  const pct = Math.round(100 * st.mastered / 120);

  APP.appendChild(topbar("NPTEL Software Engineering", "Study, practice & test — all 12 weeks"));

  const hero = el("section", "card");
  hero.appendChild(el("h2", null, "Your progress"));
  const sg = el("div", "statgrid");
  [[st.mastered + "/120", "mastered"], [st.attempted, "attempted"], [st.weak, "in weak pile"]]
    .forEach(([v, l]) => {
      const s = el("div", "stat");
      s.appendChild(el("b", null, String(v)));
      s.appendChild(el("span", null, l));
      sg.appendChild(s);
    });
  hero.appendChild(sg);
  hero.appendChild(el("p", "kicker small dim", pct + "% of the whole course at level 3"));
  const bar = el("div", "bar");
  const bi = el("i"); bi.style.cssText = `width:${pct}%;background:var(--accent)`;
  bar.appendChild(bi); hero.appendChild(bar);
  APP.appendChild(hero);

  const wp = el("section", "card");
  wp.appendChild(el("h2", null, "Weak pile"));
  const btn = el("button", "btn primary big", st.weak > 20 ? `Weak pile (${st.weak}) — round of 20` : `Weak pile (${st.weak})`);
  btn.disabled = st.weak === 0;
  btn.addEventListener("click", () => {
    mixedSession = makeSession(mixedPile().slice(0, 20), "mixed");
    go("#/pile");
  });
  wp.appendChild(btn);
  wp.appendChild(el("p", "small dim", st.weak === 0
    ? "Empty — take a week Test first. Questions you slip on land here; Perfect answers move to level 3."
    : "Up to 20 questions across all weeks, level 1 first, then least recently seen."));
  APP.appendChild(wp);

  APP.appendChild(el("h2", null, "Weeks"));
  const legend = el("div", "legend");
  legend.innerHTML =
    '<span><i style="background:var(--ok)"></i>mastered</span>' +
    '<span><i style="background:var(--warn)"></i>shaky</span>' +
    '<span><i style="background:var(--bad)"></i>weak</span>' +
    '<span><i style="background:var(--lv0)"></i>untouched</span>';
  APP.appendChild(legend);

  const grid = el("div", "tiles");
  WEEKS.forEach(wk => {
    const strg = weekStrength(wk.num);
    const weakCount = weekPile(wk.num).length;
    const tile = el("a", "tile");
    tile.href = "#/week/" + wk.num;
    const dot = el("span", "dot");
    dot.style.background = !weekAttempted(wk.num) ? "var(--lv0)" : strg === 100 ? "var(--ok)" : strg >= 60 ? "var(--warn)" : "var(--bad)";
    tile.appendChild(dot);
    tile.appendChild(el("div", "wnum", "WEEK " + wk.num));
    tile.appendChild(el("div", "ttitle", wk.title));
    const tb = el("div", "tbar");
    wk.questions.forEach(q => {
      const lv = qs(q.id).lv;
      const segm = el("i");
      segm.style.flex = "1";
      segm.style.background = lv === 3 ? "var(--ok)" : lv === 2 ? "var(--warn)" : lv === 1 ? "var(--bad)" : "var(--lv0)";
      tb.appendChild(segm);
    });
    tile.appendChild(tb);
    tile.appendChild(el("div", "tmeta", [
      el("span", null, "Strength " + strg + "%"),
      el("span", null, weakCount ? weakCount + " weak" : "—"),
    ]));
    grid.appendChild(tile);
  });
  APP.appendChild(grid);

  /* weakest weeks — attempted weeks only, ascending strength */
  const ranked = WEEKS
    .map(wk => ({ wk, strg: weekStrength(wk.num), weak: weekPile(wk.num).length, att: weekAttempted(wk.num) }))
    .sort((a, b) => (a.att === b.att) ? (a.strg - b.strg) || (b.weak - a.weak) : (a.att ? -1 : 1));
  const top3 = ranked.slice(0, 3);
  if (top3.some(r => r.att && r.strg < 100)) {
    APP.appendChild(el("h2", null, "Weakest weeks"));
    const list = el("div", "card flush");
    top3.forEach(r => {
      const row = el("a");
      row.style.cssText = "padding:12px 14px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--line);text-decoration:none;color:inherit;min-height:46px";
      if (r.wk === top3[top3.length - 1].wk) row.style.borderBottom = "none";
      row.href = "#/week/" + r.wk.num;
      row.appendChild(el("b", null, "W" + r.wk.num));
      row.appendChild(el("span", "small", r.wk.title));
      const sp = el("span"); sp.style.flex = "1"; row.appendChild(sp);
      row.appendChild(el("span", "small dim", r.att ? r.strg + "% · " + r.weak + " weak" : "not attempted yet"));
      list.appendChild(row);
    });
    APP.appendChild(list);
  }

  const foot = el("footer", "colo");
  foot.textContent = "120 questions parsed from the 12 NPTEL assignment PDFs. Progress is stored only in this browser (localStorage).";
  if (!storageOK) {
    const warn = el("div", null, "Storage unavailable — your progress won't be saved.");
    warn.style.color = "var(--warn)";
    foot.appendChild(warn);
  }
  APP.appendChild(foot);
}

/* ------------------------------------------------------------------ *
 * 10. WEEK SCREEN  (Learn · Practice · Test · Weak pile)
 * ------------------------------------------------------------------ */
function renderWeek(w, panel) {
  const wk = WEEKS[w - 1];
  APP.appendChild(topbar("Week " + w, wk.title, { back: true }));

  const headr = el("div", "weekhead");
  headr.appendChild(el("div", "wk", "STRENGTH " + weekStrength(w) + "%"));
  const sbar = el("div", "bar");
  wk.questions.forEach(q => {
    const lv = qs(q.id).lv;
    const segm = el("i");
    segm.style.flex = "1";
    segm.style.background = lv === 3 ? "var(--ok)" : lv === 2 ? "var(--warn)" : lv === 1 ? "var(--bad)" : "var(--lv0)";
    sbar.appendChild(segm);
  });
  headr.appendChild(sbar);
  APP.appendChild(headr);

  const chips = el("nav", "chips");
  const weakCount = weekPile(w).length;
  [["learn", "Learn 📘"], ["practice", "Practice 🧠"], ["test", "Test ⏱️"], ["pile", "Weak pile 🔁"]]
    .forEach(([k, label]) => {
      const c = el("a", "chip" + (panel === k ? " active" : ""), label);
      if (k === "pile" && weakCount) c.appendChild(el("span", "n", String(weakCount)));
      c.href = "#/week/" + w + "/" + k;
      chips.appendChild(c);
    });
  APP.appendChild(chips);

  const sec = el("div", "panel-sec");
  APP.appendChild(sec);
  if (panel === "learn") renderLearn(w, sec);
  else if (panel === "practice") renderPractice(w, sec);
  else if (panel === "test") renderTest(w, sec);
  else renderWeekPile(w, sec);
}

/* ---------------- Learn ---------------- */
function renderLearn(w, host) {
  const content = window.LEARN_CONTENT[w];
  host.appendChild(el("p", "dim small", "Exam-focused concept cards. Move on to Practice or the Test when done."));
  (content.cards || []).forEach(c => host.appendChild(window.LearnRender.renderCard(c)));
  (content.formulas || []).forEach(f => host.appendChild(window.LearnRender.renderFormula(f)));
  if (content.recap) host.appendChild(window.LearnRender.renderRecap(content.recap));
}

/* ---------------- Practice ---------------- */
function renderPractice(w, host) {
  host.appendChild(el("p", "dim small", "All 10 questions with correct options highlighted and full solutions. Nothing is scored or recorded here."));
  WEEKS[w - 1].questions.forEach(q => host.appendChild(questionCard(q, "practice")));
}

/* ---------------- Sessions (Test / week pile / mixed pile) ---------------- */
function makeSession(qids, kind, week) {
  return { kind, week: week || null, queue: qids.slice(), i: 0, step: "ask",
           picked: [], graded: null, requeued: {}, results: [] };
}
/* last result per unique qid (a re-queued Way off answer replaces the first) */
function sessionFinals(sess) {
  const byQ = new Map();
  sess.results.forEach(r => byQ.set(r.qid, r));
  return Array.from(byQ.values());
}

function renderSessionStep(host, sess, opts) {
  opts = opts || {};
  host.textContent = "";
  if (sess.i >= sess.queue.length) return opts.onFinish(sess);

  const qid = sess.queue[sess.i];
  const q = QMAP[qid];
  window.scrollTo(0, 0);

  /* ----- asking ----- */
  if (sess.step === "ask" || sess.step === undefined) {
    sess.step = "ask";
    host.appendChild(progressLine(sess.i + 1, sess.queue.length,
      sess.kind === "test" ? "Test" : sess.kind === "wpile" ? "Weak pile" : "Weak pile session"));

    const card = questionCard(q, "ask", {
      picked: sess.picked,
      onPick() {
        /* keep picks on the session so navigating away & back preserves them */
        sess.picked = $$(".opt[role=checkbox]", card)
          .filter(r => r.getAttribute("aria-checked") === "true")
          .map(r => r.querySelector(".key").textContent.toLowerCase());
        submitBtn.disabled = sess.picked.length === 0;
      },
    });
    host.appendChild(card);

    const bar = actionsBar();
    const submitBtn = el("button", "btn primary", "Submit");
    submitBtn.disabled = sess.picked.length === 0;
    submitBtn.addEventListener("click", () => {
      const picked = $$(".opt[role=checkbox]", card).filter(r => r.getAttribute("aria-checked") === "true")
        .map(r => r.querySelector(".key").textContent.toLowerCase());
      if (!picked.length) { toast("Select at least one option"); return; }
      submit(qid, picked);
    });
    bar.appendChild(submitBtn);
    return;
  }

  /* ----- feedback ----- */
  if (sess.step === "feedback") {
    host.appendChild(progressLine(sess.i + 1, sess.queue.length));
    const res = sess.graded;
    host.appendChild(questionCard(q, "answered", { picked: sess.picked, graded: res }));
    const bar = actionsBar();
    const nextBtn = el("button", "btn primary", sess.i + 1 >= sess.queue.length ? "Finish" : "Next question");
    nextBtn.addEventListener("click", () => {
      sess.i += 1;
      sess.picked = [];
      sess.graded = null;
      sess.step = "ask";
      if (sess.i >= sess.queue.length) opts.onFinish(sess);
      else renderSessionStep(host, sess, opts);
    });
    bar.appendChild(nextBtn);
  }

  function submit(qid2, picked) {
    const res = recordAttempt(qid2, picked);
    sess.picked = picked;
    sess.graded = res;
    sess.results.push({ qid: qid2, cat: res.cat, before: res.before, after: res.after, picked });
    if (res.cat === "wayoff" && !sess.requeued[qid2]) {
      sess.requeued[qid2] = true;
      sess.queue.push(qid2);
      toast("Way off — added back at the end of this round (once)");
    }
    sess.step = "feedback";
    renderSessionStep(host, sess, opts);
  }
}

/* ---------------- Test panel ---------------- */
function renderTest(w, host) {
  const sess = wsessions["test" + w];
  if (sess) { renderSessionStep(host, sess, { onFinish: () => finishTest(w, host, sess) }); return; }

  host.appendChild(el("h2", null, "Week " + w + " test"));
  const c = el("section", "card");
  c.appendChild(el("p", "dim small",
    "10 questions, one at a time. Multi-select answers must include every correct option, exactly like the real assignments — but scoring is strict: 1 mark only for a Perfect answer."));
  const b = el("button", "btn primary big", state.testTaken[w] ? "Retake test" : "Start test");
  b.addEventListener("click", () => {
    wsessions["test" + w] = makeSession(WEEKS[w - 1].questions.map(q => q.id), "test", w);
    route();
  });
  c.appendChild(b);
  if (state.testTaken[w]) c.appendChild(el("p", "small dim", "Last taken: " + new Date(state.testTaken[w]).toLocaleString()));
  host.appendChild(c);

  if (lastTest[w]) host.appendChild(testResultsCard(w, lastTest[w]));
}

/* results section (shown on the Test panel when a session isn't running) */
function resultsSection(w, data) {
  const sec = el("div");

  const c = el("section", "card");
  const big = el("div", "bigscore");
  big.appendChild(el("b", null, data.score + "/10"));
  big.appendChild(el("span", null, "Strict: 1 mark only for a Perfect answer"));
  c.appendChild(big);
  const strip = el("div", "strip");
  data.results.forEach(r => strip.appendChild(el("i", "s-" + (r.cat === "perfect" ? "good" : r.cat === "almost" ? "mid" : "bad"))));
  c.appendChild(strip);
  c.appendChild(el("p", "small dim",
    "Taken " + new Date(data.takenAt).toLocaleString() + " — tap a question below to review it as you answered."));
  sec.appendChild(c);

  const detail = el("div");

  const list = el("div", "reviewlist");
  data.results.forEach(r => {
    const q = QMAP[r.qid];
    const L = catLabel(r.cat);
    const b = el("button");
    const m = el("span", "rvmark", L[2]);
    m.style.color = L[1] === "good" ? "var(--ok)" : L[1] === "mid" ? "var(--warn)" : "var(--bad)";
    const t = el("span", "rvtext small", q.text.length > 74 ? q.text.slice(0, 74) + "…" : q.text);
    const l = el("span", "rvlvl", "L" + r.before + "→" + r.after);
    b.append(m, t, l);
    b.addEventListener("click", () => {
      detail.textContent = "";
      detail.appendChild(el("p", "kicker dim", "Review: " + q.id.toUpperCase() + " as you answered it"));
      detail.appendChild(questionCard(q, "answered", { picked: r.picked, graded: { cat: r.cat, score: r.cat === "perfect" ? 1 : 0 } }));
      const back = el("button", "btn", "Back to result summary");
      back.addEventListener("click", () => { detail.textContent = ""; window.scrollTo(0, 0); });
      detail.appendChild(back);
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    list.appendChild(b);
  });
  sec.appendChild(list);
  sec.appendChild(detail);

  const whatNext = el("section", "card");
  whatNext.appendChild(el("h2", null, "What next"));
  const pile = weekPile(w).length;
  whatNext.appendChild(el("p", "dim small", pile
    ? pile + " question" + (pile === 1 ? "" : "s") + " from this week are in your weak pile (levels 1–2). Play the pile, push them to level 3, then retake the test to chase 10/10."
    : "Weak pile empty for this week. Retake the test to re-challenge mastered questions — Almost/Perfect raises their level again."));
  const row = el("div"); row.style.cssText = "display:flex;gap:10px;flex-wrap:wrap";
  const bp = el("a", "btn primary", "Weak pile (" + pile + ")");
  bp.href = "#/week/" + w + "/pile";
  if (!pile) { bp.setAttribute("aria-disabled", "true"); bp.classList.add("hidden"); }
  const bt = el("button", "btn", "Retake test");
  bt.addEventListener("click", () => {
    wsessions["test" + w] = makeSession(WEEKS[w - 1].questions.map(q => q.id), "test", w);
    route();
  });
  const bl = el("a", "btn", "Home"); bl.href = "#/";
  row.append(bp, bt, bl);
  whatNext.appendChild(row);
  sec.appendChild(whatNext);

  return sec;
}

/* ---------------- Test panel ---------------- */
function renderTest(w, host) {
  const sess = wsessions["test" + w];
  if (sess) { renderSessionStep(host, sess, { onFinish: () => finishTest(w, sess) }); return; }

  host.appendChild(el("h2", null, "Week " + w + " test"));
  const c = el("section", "card");
  c.appendChild(el("p", "dim small",
    "10 questions, one at a time. Multi-select answers must include every correct option, exactly like the real assignments — but scoring is strict: 1 mark only for a Perfect answer."));
  const b = el("button", "btn primary big", state.testTaken[w] ? "Retake test" : "Start test");
  b.addEventListener("click", () => {
    wsessions["test" + w] = makeSession(WEEKS[w - 1].questions.map(q => q.id), "test", w);
    route();
  });
  c.appendChild(b);
  if (state.testTaken[w]) c.appendChild(el("p", "small dim", "Last taken: " + new Date(state.testTaken[w]).toLocaleString()));
  host.appendChild(c);

  if (lastTest[w]) {
    host.appendChild(el("h2", null, "Last result"));
    host.appendChild(resultsSection(w, lastTest[w]));
  }
}

function finishTest(w, sess) {
  const finals = sessionFinals(sess);
  const score = finals.filter(r => r.cat === "perfect").length;
  state.testTaken[w] = Date.now();
  save();
  wsessions["test" + w] = null;
  lastTest[w] = { score, takenAt: state.testTaken[w], results: finals };
  clearActions();
  route();
}

function renderWeekPile(w, host) {
  const sess = wsessions["wpile" + w];
  if (sess) { renderSessionStep(host, sess, { onFinish: () => finishWeekPile(w, host, sess) }); return; }

  if (!state.testTaken[w]) {
    host.appendChild(el("h2", null, "Weak pile"));
    const c = el("section", "card lockbox");
    c.appendChild(el("span", "em", "🔒"));
    c.appendChild(el("p", "dim", "This week's weak pile opens after you take the Week " + w + " Test — it is built from the questions you slip on."));
    const b = el("a", "btn primary big", "Take the test"); b.href = "#/week/" + w + "/test";
    c.appendChild(b);
    host.appendChild(c);
    return;
  }
  host.appendChild(el("h2", null, "Weak pile"));
  const pile = weekPile(w);
  if (!pile.length) {
    const c = el("section", "card emptybox");
    c.appendChild(el("span", "em", "🌱"));
    c.appendChild(el("b", null, "Nothing weak right now"));
    c.appendChild(el("p", "dim small", "Every attempted question here is at level 3. Retake the test to re-challenge them — misses re-enter the pile."));
    const b = el("a", "btn primary big", "Retake test"); b.href = "#/week/" + w + "/test";
    c.appendChild(b);
    host.appendChild(c);
    return;
  }
  const lv1 = pile.filter(id => qs(id).lv === 1).length;
  const c = el("section", "card");
  c.appendChild(el("h2", null, pile.length + " weak questions"));
  c.appendChild(el("p", "dim small", lv1 + " at level 1 · " + (pile.length - lv1) + " at level 2. Level 1 first, least recently seen next. Answering moves levels; retaking the test recalculates the pile."));
  const b = el("button", "btn primary big", "Start weak pile session");
  b.addEventListener("click", () => {
    wsessions["wpile" + w] = makeSession(pile, "wpile", w);
    route();
  });
  c.appendChild(b);
  host.appendChild(c);
}

function finishWeekPile(w, host, sess) {
  wsessions["wpile" + w] = null;
  clearActions();
  host.textContent = "";
  host.appendChild(el("h2", null, "Weak pile — session done"));
  const now = { l1: 0, l2: 0, l3: 0 };
  WEEKS[w - 1].questions.forEach(q => {
    const lv = qs(q.id).lv;
    if (lv === 1) now.l1++; else if (lv === 2) now.l2++; else if (lv === 3) now.l3++;
  });
  const c = el("section", "card");
  c.appendChild(el("p", "dim", "Week " + w + " levels now: " + now.l3 + " mastered · " + now.l2 + " shaky · " + now.l1 + " weak."));
  const strip = el("div", "strip");
  sessionFinals(sess).forEach(r => strip.appendChild(el("i", "s-" + (r.cat === "perfect" ? "good" : r.cat === "almost" ? "mid" : "bad"))));
  c.appendChild(strip);
  c.appendChild(el("p", "dim small", "The pile recalculates instantly: improved questions moved up or out; any new misses join."));
  const b = el("a", "btn primary big", "Retake test to push levels up"); b.href = "#/week/" + w + "/test";
  c.appendChild(b);
  const b2 = el("a", "btn", "Back to result"); b2.href = "#/week/" + w + "/test";
  c.appendChild(b2);
  host.appendChild(c);
}

/* ---------------- Mixed weak pile (from Home) ---------------- */
function renderMixedPile() {
  APP.appendChild(topbar("Weak pile", "mixed across all weeks", { back: true }));
  const host = el("div");
  APP.appendChild(host);
  if (!mixedSession) mixedSession = makeSession(mixedPile().slice(0, 20), "mixed");
  const sess = mixedSession;
  if (!sess.queue.length) {
    const c = el("section", "card emptybox");
    c.appendChild(el("span", "em", "🎉"));
    c.appendChild(el("b", null, "Weak pile is empty"));
    c.appendChild(el("p", "dim small", "Take a week Test first — questions you slip on land here."));
    c.appendChild(Object.assign(el("a", "btn primary big", "Home"), { href: "#/" }));
    host.appendChild(c);
    mixedSession = null;
    return;
  }
  renderSessionStep(host, sess, { onFinish: () => finishMixed(host, sess) });
}
function finishMixed(host, sess) {
  mixedSession = null;
  clearActions();
  host.textContent = "";
  host.appendChild(el("h2", null, "Weak pile — session done"));
  const finals = sessionFinals(sess);
  const c = el("section", "card");
  const score = finals.filter(r => r.cat === "perfect").length;
  const big = el("div", "bigscore");
  big.appendChild(el("b", null, score + "/" + finals.length));
  big.appendChild(el("span", null, "Perfect answers only"));
  c.appendChild(big);
  const strip = el("div", "strip");
  finals.forEach(r => strip.appendChild(el("i", "s-" + (r.cat === "perfect" ? "good" : r.cat === "almost" ? "mid" : "bad"))));
  c.appendChild(strip);
  const left = mixedPile().length;
  c.appendChild(el("p", "dim small", left
    ? left + " question" + (left === 1 ? "" : "s") + " still weak across all weeks. The next round picks level-1 and least-recently-seen first."
    : "Nothing weak anywhere — retake week tests to keep challenging mastered questions."));
  const row = el("div"); row.style.cssText = "display:flex;gap:10px;flex-wrap:wrap";
  const again = el("button", "btn primary", left ? "New round" : "Back home");
  again.addEventListener("click", () => {
    if (left) { mixedSession = makeSession(mixedPile().slice(0, 20), "mixed"); route(); }
    else go("#/");
  });
  const home = el("a", "btn", "Home"); home.href = "#/";
  row.append(again, home);
  c.appendChild(row);
  host.appendChild(c);
}

/* ------------------------------------------------------------------ *
 * Boot
 * ------------------------------------------------------------------ */
route();
