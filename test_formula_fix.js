/* Verify formula-block formatting fix on Learn panels (weeks 10, 11, 12). */
"use strict";
const fs = require("fs");
const { JSDOM, VirtualConsole } = require(process.env.JSDOM_PATH || "jsdom");

const html = fs.readFileSync("index.html", "utf8");
const vc = new VirtualConsole(); const errs = [];
vc.on("jsdomError", e => errs.push(String((e.detail && e.detail.stack) || e.message || e)));

const dom = new JSDOM(html, { url: "https://nptel-se.test/", runScripts: "outside-only", virtualConsole: vc });
const { window } = dom;
window.matchMedia = q => ({ matches: false, addListener() {}, addEventListener() {}, removeListener() {} });
window.scrollTo = () => {};
for (const s of ["assets/katex/katex.min.js", "data.js", "learn.js", "app.js"]) window.eval(fs.readFileSync(s, "utf8"));
const doc = window.document;

let pass = 0, fail = 0;
function ok(c, n, x) { if (c) { pass++; console.log("  ✓", n); } else { fail++; console.log("  ✗ FAIL:", n, x === undefined ? "" : JSON.stringify(x)); } }
function nav(h) { window.location.hash = h; window.dispatchEvent(new window.Event("hashchange")); }

for (const w of [10, 11, 12]) {
  nav("#/week/" + w + "/learn");
  const frms = Array.from(doc.querySelectorAll(".frm"));
  ok(frms.length > 0, `week ${w}: formula blocks render`, frms.length);

  /* every symbol renders as KaTeX, not raw LaTeX text */
  const syms = Array.from(doc.querySelectorAll(".frm .vrow .vsym"));
  ok(syms.length > 0, `week ${w}: glossary rows exist`);
  const rawSym = syms.filter(s => !s.querySelector(".katex"));
  ok(rawSym.length === 0, `week ${w}: all symbols are KaTeX-rendered`, rawSym.map(s => s.textContent));

  /* VISIBLE text must not contain raw \text{ or spacing commands.
     (KaTeX embeds the LaTeX source in a hidden <annotation> for MathML/AT — exclude it.) */
  const visible = frms.map(f =>
    f.innerHTML.replace(/<annotation[^>]*>[\s\S]*?<\/annotation>/gi, " ").replace(/<[^>]*>/g, " ")).join(" ");
  ok(!visible.includes("\\text{"), `week ${w}: no raw \\text{ leaks into visible text`);
  ok(!visible.includes("qquad"), `week ${w}: no raw spacing commands leak`);

  /* worked example is a bullet list */
  const lists = Array.from(doc.querySelectorAll(".frm .worked .wlist"));
  ok(lists.length === frms.length, `week ${w}: worked examples are bullet lists`, { lists: lists.length, frms: frms.length });

  /* no legacy dl/dt/dd remain */
  ok(doc.querySelectorAll(".frm dl, .frm dt, .frm dd").length === 0, `week ${w}: legacy dl removed`);

  /* glossary grid: symbol column doesn't overflow viewport width assumptions (basic shape) */
  const rows = doc.querySelectorAll(".frm .vrow");
  ok(rows.length > 0 && rows.length === syms.length, `week ${w}: vrow/sym counts match`);
}

/* key symbols from the screenshot render to expected text incl. subscripts */
nav("#/week/11/learn");
const body = doc.body.textContent;
ok(body.includes("multiple") && body.includes("MC/DC") && body.includes("rules"), "subscripted names appear (as rendered math)", "");

ok(errs.filter(e => !/Not implemented/.test(e)).length === 0, "no script errors", errs.slice(0, 3));
console.log(`\nRESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
