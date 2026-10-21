/* ============================================================
   NPTEL Software Engineering — Learn pages (learn.js)
   Week concept cards, KaTeX formula blocks, quick recaps.
  window.LEARN_CONTENT / window.LearnRender
   ============================================================ */
"use strict";

/* ------------------------------ renderer ------------------------------ */
const mk = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined && text !== null && text !== "") e.textContent = text;
  return e;
};
window.LearnRender = {
  renderCard(c, n) {
    const card = mk("div", "lcard");
    const h = mk("h3");
    h.appendChild(mk("span", "card-index", String((n || 0) + 1).padStart(2, "0")));
    h.appendChild(mk("span", "card-title", c.t || ""));
    card.appendChild(h);
    if (c.sub) card.appendChild(mk("p", "dim small", c.sub));
    if (c.b && c.b.length) {
      const ul = mk("ul");
      c.b.forEach(b => ul.appendChild(mk("li", null, b)));
      card.appendChild(ul);
    }
    if (c.def) { const x = mk("div", "callout def"); x.appendChild(mk("span", "clabel", "Definition")); x.appendChild(mk("div", null, c.def)); card.appendChild(x); }
    if (c.key) { const x = mk("div", "callout key"); x.appendChild(mk("span", "clabel", "Remember")); x.appendChild(mk("div", null, c.key)); card.appendChild(x); }
    if (c.trap) { const x = mk("div", "callout trap"); x.appendChild(mk("span", "clabel", "Exam trap")); x.appendChild(mk("div", null, c.trap)); card.appendChild(x); }
    if (c.table) {
      const tb = mk("table", "compare");
      if (c.table.title) {
        const cp = document.createElement("caption");
        cp.className = "tcap";
        cp.textContent = c.table.title;
        tb.appendChild(cp);
      }
      const thead = mk("thead"); const trh = mk("tr");
      c.table.cols.forEach(k => trh.appendChild(mk("th", null, k)));
      thead.appendChild(trh); tb.appendChild(thead);
      const tbod = mk("tbody");
      c.table.rows.forEach(r => {
        const tr = mk("tr");
        r.forEach((cell, i) => tr.appendChild(mk(i === 0 ? "th" : "td", null, cell)));
        tbod.appendChild(tr);
      });
      tb.appendChild(tbod);
      card.appendChild(tb);
    }
    if (c.fig) (Array.isArray(c.fig) ? c.fig : [c.fig]).forEach(qid => {
      const f = window.figureFor ? window.figureFor(qid) : null;
      if (f) card.appendChild(f);
    });
    return card;
  },
  renderFormula(f) {
    const box = mk("div", "frm");
    if (f.label) box.appendChild(mk("span", "kicker", f.label));
    let math;
    try {
      math = window.katex
        ? window.katex.renderToString(f.latex, { displayMode: true, throwOnError: false })
        : null;
    } catch (e) { math = null; }
    if (math) {
      const holder = mk("div", "katex-holder");
      holder.innerHTML = math;
      box.appendChild(holder);
    } else {
      box.appendChild(mk("div", "katex-fallback", f.latex));
    }
    if (f.vars && f.vars.length) {
      const dl = mk("dl");
      f.vars.forEach(v => {
        dl.appendChild(mk("dt", null, v[0]));
        dl.appendChild(mk("dd", null, v[1]));
      });
      box.appendChild(dl);
    }
    if (f.when) box.appendChild(mk("p", "when", "When it matters: " + f.when));
    if (f.worked) {
      const w = mk("div", "worked");
      w.innerHTML = '<span class="clabel" style="color:var(--accent)">Worked example</span>';
      w.appendChild(mk("div", null, f.worked));
      box.appendChild(w);
    }
    return box;
  },
  renderRecap(list) {
    const r = mk("div", "recap");
    r.appendChild(mk("div", "rlabel", "Quick recap"));
    const ul = mk("ul");
    list.forEach(x => ul.appendChild(mk("li", null, x)));
    r.appendChild(ul);
    return r;
  },
};

/* ------------------------------ content ------------------------------ */
window.LEARN_CONTENT = {

/* ------------------------------- WEEK 1 ------------------------------- */
1: {
  cards: [
    { t: "What software engineering actually is",
      def: "A systematic, disciplined and quantifiable approach to developing, operating and maintaining software.",
      b: [
        "Software = programs + data structures + documentation. Docs are part of the product.",
        "The aim is engineering discipline: predictable cost, schedule and quality — not ad-hoc heroics.",
        "Lifecycle: specification → design → implementation → testing → maintenance; maintenance dominates the bill.",
      ],
      trap: "“Faster hardware removes software quality issues” — never. Design, logic and security flaws are independent of processing speed (W1Q1).",
    },
    { t: "Jobs, projects and products — where software work falls",
      b: [
        "Service projects: work done for a specific client — maintenance contracts, custom development, testing services, porting/outsource work (W1Q4, W1Q8).",
        "Product projects (COTS): built for a mass market and sold as off-the-shelf software — product development, not a service.",
        "One-off exploratory experiments (throwaway prototypes) are explorations, not deliverable projects.",
      ],
      key: "Custom, client-bound work = service. Mass-sale shrink-wrapped software = product.",
    },
    { t: "Build & fix, entropy and why quality slips",
      b: [
        "Build-and-fix: hack it together, patch over and over — leads to schedule/cost overruns, poor structure, and eventually a rewrite.",
        "Software entropy: without deliberate refactoring, every change degrades structure — continuous maintenance does NOT automatically improve it (W1Q3).",
        "Maintenance-heavy change on a bad design lowers maintainability — 'the more it is maintained the less structured it can become' when no design discipline is applied.",
      ],
      trap: "“Maintenance always improves the software” is a classic distractor — only disciplined change improves structure.",
    },
    { t: "Readability & structured programming",
      b: [
        "Readable code lowers maintenance cost, eases debugging and team handover — readability is a maintenance/understandability goal, not a runtime-efficiency one (W1Q7).",
        "Structured programming (Dijkstra): build control flow from sequence, selection and iteration only — no arbitrary GOTO (W1Q2).",
        "Abstraction: keep essential features, ignore irrelevant details (levels of detail in a spec, module interfaces) (W1Q10).",
        "Decomposition: split a large problem into smaller modules that can be developed and verified independently.",
      ],
      trap: "“Excessive GOTO encouraged” and “readability = efficient memory usage” are standard false options.",
    },
  ],
  recap: [
    "Software = programs + data + docs; engineering = systematic and disciplined.",
    "Service projects serve a specific client; COTS products sell to a market.",
    "Build-and-fix breeds entropy; refactoring holds structure.",
    "Structured programming = sequence + selection + iteration (no GOTO).",
    "Abstraction (essentials) + decomposition (modules) tame complexity.",
  ],
},

/* ------------------------------- WEEK 2 ------------------------------- */
2: {
  cards: [
    { t: "Classical Waterfall model",
      b: [
        "Phases: Requirements → Specification (SRS) → Design → Implementation → Testing → Deployment & Maintenance.",
        "Output of one phase = input to the NEXT; feedback only to the immediately preceding phase (minor corrections).",
        "Frequent backtracking between all phases is NOT supported (W2Q4) — that's exactly why it struggles with changing requirements.",
        "Best when requirements are clear, stable and well-understood; testing is concentrated at the end — errors found late are expensive.",
      ],
      trap: "“The waterfall supports frequent backtracking between all phases during normal execution” — FALSE; only limited feedback to the previous phase.",
    },
    { t: "Milestones & the 99% complete syndrome",
      def: "A milestone = a tangible, verifiable end-product of a phase (SRS document, design document, test report…).",
      b: [
        "Milestones make progress measurable and trackable; they anchor reviews and payment gates (W2Q1, W2Q10).",
        "'99% complete' happens when work has no verifiable milestone — cure it by attaching deliverables and exit criteria to every phase (W2Q2).",
        "Phase containment of errors: detect and fix an error in the SAME phase it was introduced — later phases catch it at much higher cost (W2Q6), and reviews/inspections, not just testing, catch errors.",
      ],
      key: "Milestone = document/verified artifact, not '% complete'. Errors are cheapest to fix in their phase of origin.",
    },
    { t: "Iterative, incremental, prototyping, RAD, V-model",
      b: [
        "Incremental: deliver usable slices with growing functionality; Iterative: cycle through phases repeatedly until mature; iterative models need more customer involvement.",
        "Prototyping: build a quick throwaway (or evolutionary) model when requirements are unclear/hard to express; code of a throwaway prototype is typically discarded (W2Q9).",
        "RAD: rapid development via reusable components and heavy user participation — poor fit for huge, safety-critical or technically-risky systems.",
        "V-model: each dev phase pairs with a test level (requirements↔acceptance, design↔integration, code↔unit) — testing planned alongside development, not an afterthought (W2Q8).",
        "Spiral: risk-driven cycles — every iteration analyses risks first and prototyping attacks uncertain requirements.",
      ],
      trap: "Feasibility includes technical, economic and operational aspects — evaluating them BEFORE commitment is standard practice (W2Q3).",
    },
    { t: "Maintenance types — the eternal trap",
      table: { cols: ["Type", "Triggered by", "Example"],
        rows: [
          ["Corrective", "defects/bugs reported after delivery", "fix a crash in the billing module"],
          ["Adaptive", "changes in the environment (OS, platform, regulations)", "port an app to Linux / new DB version"],
          ["Perfective", "user requests for new features & improvements", "add a loyalty-points feature"],
        ] },
      b: [
        "“Adding new features on user request” = perfective — NOT corrective (W2Q5).",
        "Adaptive maintenance adapts the SOFTWARE to its ENVIRONMENT; it adds no features of its own.",
      ],
    },
  ],
  formulas: [],
  recap: [
    "Waterfall: linear + feedback to previous phase only;testing late = costly fixes.",
    "Milestone = verifiable artifact; kills the 99% complete syndrome.",
    "Phase containment: catch the error where it was born.",
    "Prototyping for unclear requirements; spiral for risk; V-model pairs dev with test levels.",
    "Corrective = fix bugs · Adaptive = new environment · Perfective = new features.",
  ],
},

/* ------------------------------- WEEK 3 ------------------------------- */
3: {
  cards: [
    { t: "Agile fundamentals",
      b: [
        "Working software over comprehensive documentation; respond to change over following a plan (Agile manifesto) (W3Q1, W3Q3).",
        "Deliver in small increments (typically 1–3 weeks), each producing quality, working code with continuous customer feedback.",
        "Agile does NOT mean: all documentation upfront, one final complete delivery, or zero testing — quality is maintained by continuous testing and integration.",
        "Suits changing/unclear requirements; harder for very large teams and fixed-price contracts.",
      ],
      trap: "Any option claiming agile “requires completing all documentation before coding” or “delivers the final system at the end only” is FALSE.",
    },
    { t: "Scrum: roles, backlogs, sprints",
      b: [
        "Roles: Product Owner (owns and prioritises the product backlog, represents customer), Scrum Master (facilitates, removes obstacles — not the team's coder), Team (self-organising, ~5–9 members) (W3Q9).",
        "Product/backlog: ordered list of ALL desired features; refined continuously (W3Q10).",
        "Sprint: fixed-length iteration (1–4 weeks); requirements do NOT change mid-sprint (W3Q5).",
        "Sprint planning picks items from the product backlog into the sprint backlog (the sprint's worklist) (W3Q6).",
        "Daily Scrum: 15 minutes — what I did yesterday, what I will do today, what blocks me (W3Q4). Sprint review demonstrates the increment.",
      ],
      trap: "“Scrum master holds the sprint review and codes features” — the Scrum Master facilitates; the TEAM reviews work daily, not the master.",
    },
    { t: "Extreme Programming (XP) practices",
      b: [
        "Pair programming: two developers, one keyboard — continuous review; collectively owned code.",
        "Test-driven development: write the unit test FIRST, then the code.",
        "Refactoring: improve internal structure WITHOUT changing behaviour; done continuously, so it's encouraged — not forbidden (W3Q7, W3Q8).",
        "User stories (requirements as ≤ 3-sentence texts), release planning, on-site customer, continuous integration, 40-hour week, spike solutions (throwaway experiments to answer a design question).",
      ],
      key: "XP = engineering practices (pairing, TDD, refactoring). Scrum = management framework (roles, sprints, ceremonies).",
    },
    { t: "Software entropy in agile life",
      b: [
        "As a system is modified repeatedly, its structure decays unless refactoring is scheduled as a first-class activity (W3Q3's entropy trap).",
        "Symptoms: duplicated logic, long methods, ever-growing classes, patch-on-patch fixes.",
        "Agile keeps entropy low via small increments, refactoring, continuous integration and automated tests after each change (W3Q2's shopping app scenario).",
      ],
      trap: "You already saw the W3Q3 note: the pasted solution in the source PDF was a leftover about software entropy — the corrected explanation (increments, customer feedback, responding to change) is attached right in the app's solution box.",
    },
  ],
  recap: [
    "Agile: small increments + working software + customer feedback + embrace change.",
    "Scrum = PO · SM · Team; product backlog → sprint backlog → sprint (frozen) → demo.",
    "Daily scrum: yesterday / today / blockers.",
    "XP: pair programming, TDD, refactoring (structure-only change), stories, CI.",
    "Entropy goes up unless you refactor deliberately.",
  ],
},

/* ------------------------------- WEEK 4 ------------------------------- */
4: {
  cards: [
    { t: "The SRS document",
      def: "The SRS is the ultimate contract on WHAT the software will do — completely describing its external behaviour, and NOT how it's implemented.",
      b: [
        "Answers “what”, never “how” — no design or code choices in the SRS (W4Q1, W4Q4).",
        "Written by the analyst, for the customer; feeds design, coding and test planning (functional + performance per IEEE 830).",
        "A good SRS is: correct, complete, consistent, unambiguous, verifiable, traceable, modifiable (W4Q1).",
      ],
      trap: "Options listing “detailed source code”, “coding standards”, “program listings”, or “describing design techniques” are NOT SRS sections (W4Q3, IEEE 830-1998).",
    },
    { t: "IEEE 830-1998 SRS skeleton",
      table: { cols: ["Section", "Contains"],
        rows: [
          ["1. Introduction", "purpose, scope, definitions, references, overview"],
          ["2. Overall description", "product perspective, functions, user characteristics, constraints, assumptions"],
          ["3. Specific requirements", "functional requirements, external interfaces, performance, logical database, design constraints, software system attributes (security, reliability, portability, maintainability)"],
          ["4. Supporting material", "appendices, index"],
        ] },
      b: [
        "W4Q3 asks which sections are NOT part of it — coding standards, source listings and GUI screenshots-as-requirements don't belong.",
        "Design constraints DO belong: platform (“must run on Linux”), standards, hardware limits (W4Q6).",
      ],
    },
    { t: "Functional vs non-functional — classify fast",
      table: { cols: ["Says what the system DOES", "Says what the system must BE/have"],
        rows: [
          ["transfer funds between accounts (W4Q5: functional + “service provided by the system”)", "security: biometric login (W4Q9)"],
          ["generate reports, process orders", "performance, reliability, portability"],
          ["syntax processing of user commands", "constraints: Linux-only (W4Q6: non-functional + design constraint), standards"],
        ] },
      b: [
        "Functional requirement = service the system provides (input → processing → output) (W4Q5).",
        "Non-functional = constraints & qualities: security, performance, platform, standards, reliability.",
        "A security mechanism like biometric authentication is classified as a non-functional (security) requirement with specific technology attached.",
      ],
      trap: "“Must run on Linux” looks functional but is a design constraint → non-functional (W4Q6). Watch for “constraint on design”/“design constraint” wording.",
    },
    { t: "Requirements engineering & SRS review",
      b: [
        "Workflow: requirements gathering/elicitation (incl. prototyping) → analysis → specification → validation/review.",
        "Analysis identifies inconsistencies, ambiguities, incompleteness — and classifies into functional/non-functional (W4Q8).",
        "Reviews & walkthroughs detect errors EARLY: yes/no questions from the checklist, not just “looks fine” (W4Q7, W4Q10).",
        "Poor SRS signs: ambiguous phrasing (“user-friendly”), completeness gaps, mixed design decisions, untestable statements (W4Q4).",
      ],
      key: "Reviews are verification, not validation — checking the document against intent/spec.",
    },
  ],
  recap: [
    "SRS = what, not how; correct/complete/unambiguous/verifiable.",
    "IEEE 830: intro, overall description, specific requirements, supporting material.",
    "Functional = service; security/performance/platform = non-functional; platform mandates = design constraints.",
    "Biometric authentication ⇒ security requirement (non-functional with tech attached).",
    "Reviews catch spec errors before they reach code.",
  ],
},

/* ------------------------------- WEEK 5 ------------------------------- */
5: {
  cards: [
    { t: "Modularity & functional independence",
      b: [
        "Modularity: split software into separately named, addressable modules — enables team split, reuse, and simpler unit testing (W5Q1).",
        "Functional independence = HIGH cohesion + LOW coupling — the design quality goal (W5Q6).",
        "Independence improves maintainability, testability, error isolation and reuse.",
      ],
      key: "Aim: modules that do ONE thing well (high cohesion) and talk through narrow data interfaces (low coupling). Trade-off: too many modules raise integration cost (WP: optimum count as design goal).",
    },
    { t: "Cohesion ladder — worst to best",
      table: { title: "From coincidental (bad) up to functional (good)", cols: ["Level", "What binds the module's parts", "Signal example"],
        rows: [
          ["1. Coincidental", "nothing in common; random grouping", "utils.c gathers everything"],
          ["2. Logical", "similar category, chosen by a flag passed from outside", "one “I/O” module does input OR output"],
          ["3. Temporal", "executed at the same time", "init() sets battery, config, logs at startup (W5Q8)"],
          ["4. Procedural", "sequenced by control flow order", "read → compute → print chain"],
          ["5. Communicational", "operate on the same data set/area", "all functions touching one record"],
          ["6. Sequential", "output of one part = input of next", "pipeline stages in one module"],
          ["7. Functional", "single, well-defined task", "computeMedian()"],
        ] },
      b: ["Weak cohesion trio ≤ temporal (W5Q10): coincidental, logical, temporal are the weak forms."],
      trap: "Same-time execution = TEMPORAL, not procedural. A module selected by flag/caller = LOGICAL, not temporal.",
    },
    { t: "Coupling ladder — best to worst",
      table: { title: "From data (good) down to content (bad)", cols: ["Level", "What couples the modules", "Signal example"],
        rows: [
          ["1. Data", "passing simple data items by value into parameters", "computeArea(length, width)"],
          ["2. Stamp", "passing a whole data structure though only part is used", "passing entire customer record when one field needed (W5Q5)"],
          ["3. Control", "passing control flags/switches that decide the callee's flow", "process(data, MINIMIZE-flag)"],
          ["4. Common", "sharing global data between modules", "two modules read/write the same global (W5Q4)"],
          ["5. Content", "one module modifies or branches into another's code/local data", "module A edits module B's internal variable"],
        ] },
      b: [
        "If coupling is unavoidable, prefer data and stamp coupling (W5Q9).",
        "Non-direct/uncoupled is ideal — but total independence usually can't be achieved (W5Q2, W5Q7).",
      ],
      trap: "Content coupling is the absolute worst; passing a flag = control coupling; global data = common coupling.",
    },
    { t: "Reading design questions under exam pressure", 
      b: [
        "Ask: how do these pieces relate? Same data? → communicational. Same time? → temporal. Sequenced by flow? → procedural.",
        "Coupling questions: what crosses the module boundary? values → data; structure → stamp; flag → control; global → common; internals → content.",
        "“Which two are BEST if coupling can't be avoided?” → data, then stamp (W5Q9).",
        "“Which three cohesion types are weak?” → coincidental, logical, temporal (W5Q10).",
      ],
    },
  ],
  recap: [
    "Cohesion up: coincidental→logical→temporal→procedural→communicational→sequential→functional.",
    "Coupling down (good→bad): data→stamp→control→common→content.",
    "High cohesion + low coupling = independence = goal.",
    "Temporal = same time; logical = flag-selected; content = intruding into another's internals.",
  ],
},

/* ------------------------------- WEEK 6 ------------------------------- */
6: {
  cards: [
    { t: "Structured analysis & functional decomposition",
      b: [
        "Function-oriented design: decompose by FUNCTIONS/data flow (top-down); OO design decomposes by interacting OBJECTS (W6Q1).",
        "Structured analysis: represent the problem as data flow through processes — produces DFDs + data dictionary (+ process mini-specs) (W6Q2, W6Q9).",
        "Functional decomposition: refine level-0 bubble into level-1 major processes, then into level-2 primitives — always top-down, never bottom-up (W6Q5).",
        "Structured design maps DFD processes onto modules; aims for high cohesion/low coupling between them.",
      ],
    },
    { t: "DFD — syntax and what it does NOT show",
      table: { cols: ["Symbol", "Meaning"],
        rows: [
          ["Rounded bubble / circle", "process — “do something with data” (numbered 0, 1, 2…)"],
          ["Rectangle (or 3-D box)", "external entity / terminator — source or sink of data"],
          ["Open-ended rectangle / parallel lines", "data store"],
          ["Labelled arrow", "data flow (named, meaningful data)"],
        ] },
      b: [
        "DFD represents ONLY data flow and transforms — no control flow, no decision logic, no loops, no sequence info (W6Q3, W6Q4, W6Q8).",
        "It is NOT a flow chart and NOT a module hierarchy chart.",
        "Flowchart shows control/logic; DFD shows data moving between processes.",
      ],
      trap: "Every W6 option saying DFD “represents control flow / decisions / system sequence” is FALSE.",
    },
    { t: "Levels of DFD & the balancing rule",
      b: [
        "Level 0 = context diagram: whole system as ONE process (#0) + external entities (W6Q7).",
        "Level 1: split into the major system functions; Level 2: refine each further, until primitive processes remain.",
        "Numbering: processes get hierarchical numbers (1, 1.1, 1.2, 2, 2.1…).",
        "Balancing: data flows entering/leaving a child diagram must match the flows of its parent bubble exactly (in AND out) — keeps levels consistent (W6Q6).",
      ],
      key: "Balancing = parent bubble's inflows/outflows == child diagram's net inputs/outputs.",
    },
    { t: "Data dictionary",
      def: "A structured catalogue defining every data flow, data store, process and data element appearing in the DFDs.",
      b: [
        "Describes composite data items via their component elements; includes names, aliases, and contents (W6Q10).",
        "Standard notations:  = is composed of, + concatenation, [a|b] selection, {} repetition, () optional.",
        "It does NOT define control logic or processing algorithms — only data (W6Q10's trap option about control flow).",
      ],
    },
  ],
  recap: [
    "Function-oriented = top-down decomposition by data flow; OO = by objects.",
    "DFD symbols: bubble(process), box(entity), open rect(data store), arrow(data flow).",
    "No control flow, decisions or loops in a DFD.",
    "Level 0 = context (1 bubble); balancing child↔parent.",
    "Data dictionary documents data — never control.",
  ],
},

/* ------------------------------- WEEK 7 ------------------------------- */
7: {
  cards: [
    { t: "OO analysis vs OO design, via UML",
      b: [
        "OO analysis = WHAT: actors + use cases (W7Q1), domain classes; OO design = HOW: refine into design classes, interactions, and detailed relationships (W8Q6 covers the formal split).",
        "UML models are unified vocabulary for visualising, specifying and documenting systems; structural (class, object, component, deployment) + behavioural (use case, sequence, activity, state machine).",
        "Use cases: actor ↔ system interactions, each with a textual description (flow of events); good descriptions are complete, clear, actor-focused, say both normal and alternate paths (W7Q7).",
      ],
      trap: "Statements like “UML shows only implementation details”, “cannot model non-functional requirements” context, or “only for OO languages” are FALSE (W7Q8).",
    },
    { t: "Generalization (is-a) and inheritance power-ups",
      b: [
        "“A savings account IS A bank account” → generalization: SavingsAccount inherits from BankAccount attributes and operations (W7Q2).",
        "Inheritance advantages: reuse of attributes/operations, substitutability (Liskov at runtime), polymorphism, lower duplication (W7Q10).",
        "Runtime polymorphism needs: common superclass interface, overridden methods, and a superclass-typed reference bound at run time (W7Q9).",
        "Multiple inheritance = ONE class derived from MORE THAN ONE parent class — not two classes sharing parents (W7Q3).",
      ],
      trap: "“Two classes derived from the same parents = multiple inheritance” — FALSE; that's a shared hierarchical structure. Multiple inheritance is about a single class having several parents.",
    },
    { t: "«include» vs «extend» — direction decides",
      b: [
        "«include»: the BASE use case ALWAYS executes the included one (factored-out common behaviour). Dashed arrow: base → included. Workflow factorization (W7Q6: “verify payment” included in Place Order).",
        "«extend»: OPTIONAL/conditional behaviour extending the base at extension points. Dashed arrow: extension → base. (W7Q5's Print Receipt extends Withdraw Cash — you can still withdraw without a receipt.)",
        "In W7Q4's diagram, Borrow Book → Verify membership is «include»: the included use case always runs (e.g., membership verification on every borrow).",
      ],
      table: { cols: ["", "«include»", "«extend»"],
        rows: [
          ["Meaning", "base always runs the included part", "optional extra behaviour"],
          ["Arrow", "base → included", "extension → base"],
          ["Necessity", "mandatory", "conditional at extension point"],
        ] },
      fig: ["w7q4", "w7q5"],
      trap: "Mixing up arrow direction is the #1 UML distractor. Remember: include flows WITH the base; extend points back AT the base.",
    },
  ],
  recap: [
    "OOA = what (actors/use cases/classes); OOD = how.",
    "Generalization = is-a; “SavingsAccount is a BankAccount”.",
    "Multiple inheritance = one class, many parents.",
    "«include»: base→included, always runs; «extend»: extension→base, optional.",
    "Polymorphism needs overrides + base-type references.",
  ],
},

/* ------------------------------- WEEK 8 ------------------------------- */
8: {
  cards: [
    { t: "Reading class diagrams & multiplicities",
      b: [
        "Multiplicity sits at the FAR end of an association: Branch issues 1..* Account; Customer has 0..* Account; Account uses 0..* ATM (W8Q1).",
        "1..* = at least one; 0..* = any number; 0..1 = optional; ranges like 3..5 possible.",
        "Generalization arrows point from the specialised class UP to the general one (Saving ▷ Account, Current ▷ Account).",
      ],
      fig: "w8q1",
      trap: "1..* vs 0..* on the issues-relationship: a Branch can exist with no Account, but the association still demands 1..* Accounts for the linking semantics — read the labels, don't assume.",
    },
    { t: "Composition vs aggregation",
      table: { cols: ["", "Composition (filled ◆)", "Aggregation (hollow ◇)"],
        rows: [
          ["Lifetime", "part dies with the whole", "part can outlive / be shared"],
          ["Creation", "whole creates & owns the part", "part passed in / exists independently"],
          ["UML", "filled diamond at the WHOLE", "hollow diamond at the whole"],
          ["In code", "wheels created inside Car's constructor (W8Q4)", "passed-in shared references"],
        ] },
      b: [
        "Circle ◆—1— Point and Polygon ◆—3..*— Point: the Points belong to their whole (W8Q2).",
        "Window ◆—1—*— Frame: frames cannot exist outside their window (W8Q3).",
        "Car ← Wheels: wheels created inside Car's constructor, exactly four, carriage dies with Car → composition (W8Q4).",
      ],
      fig: ["w8q2", "w8q3"],
      trap: "“A Wheel may independently exist outside a Car in this design” — FALSE when the whole is responsible for creating and owning the parts.",
    },
    { t: "Analysis objects: boundary / entity / controller",
      b: [
        "Boundary objects: interfaces between the system and actors — screens, forms, menus, external system interfaces (W8Q7). One per use case at the analysis stage (W9Q6's counting).",
        "Entity objects: core information, usually persistent — survive individual use cases and even application restarts (BankAccount, Ticket) (W8Q8).",
        "Controller objects: coordinate use-case activity; transient, per-use-case, they call on boundary + entity objects to do the work (W8Q9).",
      ],
      trap: "Entities are NOT screens; controllers are NOT persistent; boundary objects do NOT store long-lived data.",
    },
    { t: "Sequence diagrams & composite states",
      b: [
        "Sequence diagram: lifelines (dashed verticals), activations (thin rectangles = executing), messages left→right over time; dashed arrows = returns; «create» = object creation (W8Q5).",
        "Synchronous message: caller waits (solid arrowhead); asynchronous: fire-and-forget (open arrowhead).",
        "Composite/nested states: a state can contain sub-states — used when a state has internal structure (e.g., “inspecting” holding “analysing” + “repairing”) (W8Q10). Drawn as a larger region holding the sub-state machine.",
      ],
      fig: "w8q5",
      trap: "Activation bars show the OWN object executing; a nested/composite state must have at least an initial and final sub-state when it models a full region.",
    },
  ],
  recap: [
    "Multiplicity at the far end: Branch 1..* Account; Customer 0..*; ATM 0..*.",
    "Filled diamond = composition (part dies with whole); hollow = aggregation.",
    "Car/Wheels: created & owned → composition.",
    "Boundary = interface, Entity = persistent data, Controller = coordination.",
    "Sequence: lifeline, activation, sync/async, «create»; composite states nest sub-states.",
  ],
},

/* ------------------------------- WEEK 9 ------------------------------- */
9: {
  cards: [
    { t: "Error → fault → failure",
      table: { cols: ["Term", "Where it lives", "Example"],
        rows: [
          ["Error", "human mistake (deviation from intent)", "developer confuses < and <="],
          ["Fault/defect/bug", "wrong code or data in the product", "the wrong comparison in the code"],
          ["Failure", "observed wrong behaviour at runtime", "system rejects a valid deposit"],
        ] },
      b: [
        "A fault may stay latent forever — if never executed with the right input/state, no failure (W9Q3, W9Q5).",
        "Failures surface only when the faulty code runs under particular conditions.",
      ],
      trap: "“The system rejected a VALID input” = failure, not fault; “the wrong condition in code” = fault; the developer's slip = error.",
    },
    { t: "Verification vs validation",
      b: [
        "Verification: are we building the system RIGHT — conformance to the specification; mostly static: reviews, walkthroughs, inspections.",
        "Validation: are we building the RIGHT system — does it meet user needs; usually dynamic testing with real users (W9Q4).",
        "Acceptance testing with customers = validation; code inspection = verification.",
      ],
      key: "V&V: “right product” vs “product right”. Reviews = verification, never validation.",
    },
    { t: "Testing principles that drive the exam",
      b: [
        "Pesticide paradox: repeating the SAME tests eventually stops finding new bugs → revise/vary test suites (W9Q9).",
        "Exhaustive testing is impossible; testing shows the PRESENCE of defects, never their absence.",
        "Negative test cases: feed INVALID/out-of-range input and expect proper rejection/handling (W9Q8).",
        "Who tests: developers unit-test their own code, but system testing belongs to an INDEPENDENT team to avoid developer bias (W9Q10).",
        "Testing effort is a big share of project cost but finishes quickly when tests run in parallel with automation (W9Q7).",
      ],
      trap: "“Independent testers write and run system tests, developers focus on unit tests” — TRUE. “Customers test everything” — FALSE.",
    },
    { t: "CRC cards & boundary-class counting",
      b: [
        "CRC = Class–Responsibilities–Collaborators: brainstorming/design tool to distribute responsibilities across classes (W9Q1).",
        "Boundary classes: system↔actor interfaces; each use case needs one boundary interface → a use case diagram with 5 use cases ⇒ 5 boundary classes (W9Q6).",
        "Not useful guideline: “boundary classes are randomly named data holders” — they're identified from actor interactions, not data lists (W9Q2).",
      ],
      fig: "w9q6",
      key: "Use case ↔ one boundary class (analysis level). Count use cases to answer boundary-count questions.",
    },
  ],
  recap: [
    "Error (human) → fault (code) → failure (runtime).",
    "Verification = reviews/conformance; validation = user-need testing.",
    "Pesticide paradox → vary your tests.",
    "Negative tests cover invalid inputs & expected rejection.",
    "One boundary class per use case.",
  ],
},

/* ------------------------------- WEEK 10 ------------------------------- */
10: {
  cards: [
    { t: "Equivalence partitioning",
      def: "Partition the input domain into classes that behave alike; pick ONE representative per class — valid and invalid alike.",
      b: [
        "Triangle type (a,b,c): classes like valid-scalene, valid-isosceles, valid-equilateral, invalid (degenerate/negative) sides (W10Q2, W10Q6).",
        "substr(s1 ≤ 20 chars, s2 ≤ 5 chars): classes = s1 length 1–20 (valid), s1 > 20 (invalid), s2 substring / not a substring (W10Q10).",
        "Unbounded/1..N ranges can't be tested exhaustively — one representative per class is the practical cut.",
      ],
      trap: "“Test ONLY valid values” is wrong — invalid classes get tested too. “s2 length exactly 3 only” or “s1 length always 20” are NOT sensible partitions (W10Q10).",
    },
    { t: "Counting combinations & combinatorial explosion",
      b: [
        "3 Boolean parameters → 2³ = 8 valid combinations (W10Q8): each variable has 2 values, so the classes are all 8 assignments.",
        "Exhaustive testing multiplies partition sizes: 5 subjects × 3 difficulties × 4 types = 60 complete cases (W10Q4).",
        "Combinatorial explosion motivates t-way (pairwise = 2-way) testing: cover every PAIR of parameter values instead of every combination (W11Q2).",
      ],
      trap: "Exhaustive ≠ pairwise: pairwise covers pairs, not full cross-products — the savings grow with more parameters.",
    },
    { t: "Boundary value analysis (BVA)",
      b: [
        "Underlying assumption: defects cluster at the edges of input ranges — off-by-one bugs live there (W10Q7).",
        "Test min, min+, nominal, max−, max — plus just-outside invalid values for boundaries (e.g., 0 and 101 for a 1..100 field).",
        "Pairs beautifully with EP: representatives of each class + its edges.",
      ],
      key: "Valid length 1..100 → test 1, 2, 50, 99, 100 and invalid 0, 101.",
    },
    { t: "Technique taxonomy & effort planning",
      table: { cols: ["Black-box (spec-based)", "White-box (code-based)"],
        rows: [
          ["equivalence partitioning", "statement / branch coverage"],
          ["boundary value analysis", "condition, MC/DC, multiple-condition"],
          ["decision tables, state-based, cause-effect", "basis path, mutation, data-flow"],
        ] },
      b: [
        "Effort allocation: share% × total = phase effort — 35% × 200 person-months = 70 for integration (W10Q1).",
        "Unit testing uses drivers (call the module) and stubs (replace called modules) (W10Q9).",
      ],
    },
  ],
  formulas: [
    { label: "Exhaustive test count across k partitions", latex: "N_\\text{tests} = |P_1| \\times |P_2| \\times \\cdots \\times |P_k|",
      vars: [ ["|P_i|", "number of values in partition i"], ["k", "number of independent input parameters"] ],
      when: "a function has independent inputs partitioned into classes; decide whether exhaustive testing is affordable.",
      worked: "Web exam portal (W10Q4): 5 subjects × 3 difficulty levels × 4 question types = 60 exhaustive tests. With more parameters the product explodes — pairwise covers pairs of values and shrinks the suite massively." },
    { label: "Phase effort share", latex: "E_\\text{phase} = s \\times E_\\text{total}",
      vars: [ ["s", "share of defects/effort observed for the phase (e.g. 0.35)"], ["E_\\text{total}", "total planned effort"] ],
      when: "allocating testing effort from historical defect distributions.",
      worked: "Unit 40% · Integration 35% · System 25% of 200 person-months ⇒ integration gets 0.35 × 200 = 70 person-months (W10Q1)." },
  ],
  recap: [
    "EP: one representative per valid & invalid class.",
    "3 Booleans ⇒ 2³ = 8; 5×3×4 = 60 exhaustive.",
    "BVA: edges min/min+/nominal/max−/max ± invalid.",
    "35% × 200 = 70 person-months for integration.",
    "Drivers call modules; stubs fake the modules they call.",
  ],
},

/* ------------------------------- WEEK 11 ------------------------------- */
11: {
  cards: [
    { t: "Coverage ladder — strong beats weak",
      table: { cols: ["Coverage", "Requires", "Strength"],
        rows: [
          ["Statement", "every line executes at least once", "weakest"],
          ["Decision/branch", "every decision takes T and F", "> statement"],
          ["Condition", "every atomic condition takes T and F", "doesn't imply branch!"],
          ["MC/DC", "each condition independently affects outcome", "> branch & condition"],
          ["Multiple condition", "all 2^n truth combos of conditions", "> MC/DC"],
          ["All paths", "every path through graph", "strongest, usually infeasible"],
        ] },
      b: [
        "W12Q2's ordering: statement weakest – all-path strongest; MC/DC sits above plain branch/condition coverage.",
        "Condition coverage does NOT guarantee branch coverage: atoms can take T/F separately while the overall decision always evaluates the same (W11Q9–style suites).",
      ],
      trap: "“Condition coverage implies branch coverage” — FALSE. The atoms get both values but the composed decision may never flip.",
    },
    { t: "Counting conditions, rows and rules",
      b: [
        "Multiple condition coverage of n atomic conditions = 2^n tests (W11Q1: two conditions ⇒ 2² = 4: TT, TF, FT, FF).",
        "Decision table with c independent Boolean conditions has 2^c rules (W11Q5: 3 conditions ⇒ 8; multiple rules may share the same action).",
        "3 Boolean system parameters (W11Q4): exhaustive = 2³ = 8; pairwise is far fewer.",
        "Basic condition coverage on if (x>=5 || y<20): x takes {T,F} and y takes {T,F} across the suite — (x=10,y=30) gives x=T,y=F and (x=2,y=10) gives x=F,y=T (W11Q9).",
      ],
      trap: "Condition coverage asks each ATOM for both outcomes — not every combination, not decision outcomes.",
    },
    { t: "MC/DC — independence on a budget",
      def: "Modified Condition/Decision Coverage: every condition shown to INDEPENDENTLY affect the decision's outcome, with a minimal test set.",
      b: [
        "Minimum tests = n + 1 for n atomic conditions (the standard result) — 2 conditions ⇒ 3 tests (W12Q10).",
        "Each test flips exactly one condition at a time against an unchanging background of the others.",
        "MC/DC dominates branch and plain condition coverage, but multiple condition coverage (2^n) still remains strongest.",
      ],
      key: "n conditions ⇒ n+1 MC/DC tests; 2^n multiple-condition tests; decision table ⇒ 2^c rules.",
    },
    { t: "Combinatorial testing, cause-effect, mixing approaches",
      b: [
        "t-way interaction: values of t parameters covering all their combinations; 2-way = pairwise (W11Q3).",
        "Cause-effect graphing maps Boolean causes to effects, then derives decision-table test cases (W11Q6).",
        "One approach alone (only black-box or only white-box) misses defects the other would catch — mix them (W11Q7, W11Q8).",
        "Pairwise assumes most failures come from ≤2 parameter interactions; use stronger t or exhaustive for critical parts.",
      ],
    },
  ],
  formulas: [
    { label: "Coverage counts that repeat every year",
      latex: "T_\\text{multiple} = 2^n, \\qquad T_\\text{MC/DC} = n + 1, \\qquad T_\\text{rules} = 2^c",
      vars: [
        ["n", "number of atomic conditions in the (compound) decision"],
        ["c", "number of independent Boolean conditions in a decision table"],
        ["T_\\text{multiple}", "tests for multiple (combinatorial) condition coverage"],
        ["T_\\text{MC/DC}", "minimum MC/DC tests — each condition proven influential"],
        ["T_\\text{rules}", "columns/rules of a full decision table"] ],
      when: "any “at least how many tests…” question on compound conditions and decision tables.",
      worked: "n = 2 ⇒ multiple condition = 2² = 4 (W11Q1); MC/DC = 2 + 1 = 3 (W12Q10 pattern: (p>10)&&(q<50)). Basic condition coverage on if (x>=5||y<20): suite {(10,30),(2,10)} gives x = {T,F}, y = {F,T} (W11Q9). W11Q10: two sequential ifs ⇒ decision coverage with 2 cases (one per branch pattern)." },
  ],
  recap: [
    "Statement < branch < condition? NO: condition does not subsume branch.",
    "2^n combos for multiple condition; n+1 for MC/DC.",
    "Decision table: 2^c rules; multiple rules can share one action.",
    "Pairwise (2-way) covers value-pairs, not full combinations.",
    "Mix black-box and white-box — each finds what the other misses.",
  ],
},

/* ------------------------------- WEEK 12 ------------------------------- */
12: {
  cards: [
    { t: "Cyclomatic complexity — count the independent paths",
      def: "Cyclomatic complexity V(G) = number of linearly independent paths through a program's flow graph.",
      b: [
        "M = E − N + 2P; for a single connected program (P = 1): M = E − N + 2.",
        "Equivalent shortcut: M = number of Binary/predicate decision nodes + 1 (W12Q8: three nested if's ⇒ predicates 3 ⇒ M = 4).",
        "Straight-line code with no decisions ⇒ M = 1 (minimum).",
        "Basis path testing designs exactly M independent-path test cases (W12Q3).",
        "Values 1–10 signal simple, well-structured code; above 10 → split the module (W12Q1).",
      ],
      trap: "V(G) equals predicate nodes + 1 — NOT the node count, NOT the statement count. And it never drops below 1.",
    },
    { t: "Basis path testing flow",
      b: [
        "Draw the flow graph: nodes = statements, edges = control flow, diamond nodes = decisions.",
        "Compute V(G) with the formulas; it fixes the SIZE of the basis set.",
        "Choose M paths that are linearly independent (each adds something new); derive one test case per path.",
      ],
      key: "Independent path = a path that introduces at least one new edge not covered by previous paths.",
    },
    { t: "Mutation testing — measuring your test suite",
      b: [
        "Take the program, create mutants by small syntactic changes (swap operators, flip conditions…); run the suite against each mutant.",
        "Killed mutant: some test's output changes → your suite detects it. Survived mutant: suite too weak → add tests (W12Q5, W12Q6).",
        "Equivalent mutant: semantically identical to the original — it can NEVER be killed and is excluded from the score; near-equivalent mutants (like if(a>b)→if(a>=b−1)) are the tricky ones (W12Q7).",
        "Mutation score = killed / (total − equivalent). Objectives: measure test adequacy, find weak spots, guide new tests.",
        "Challenges: huge number of mutants, cost of execution, deciding equivalence — which is undecidable in general (W12Q9).",
      ],
      trap: "A survived mutant doesn't always mean weak tests — it might be equivalent. Equivalence is undecidable, hence the cost.",
    },
    { t: "Data-flow testing & strength ordering",
      b: [
        "Data-flow testing tracks definition/use (du) pairs of variables: def before use, anomalies like def-def or use-without-def (W12Q4).",
        "Coverage strength recap (W12Q2): statement < branch/condition < MC/DC < multiple-condition < all-paths.",
        "Pick the strongest coverage that fits risk and budget; use mutation to audit the suite.",
      ],
    },
  ],
  formulas: [
    { label: "Cyclomatic complexity — all equivalent shapes",
      latex: "M = E - N + 2P \\;\\;\\overset{P=1}{=}\\; E - N + 2 \\;\\;=\\; \\pi + 1",
      vars: [
        ["E", "edges in the control-flow graph"],
        ["N", "nodes in the control-flow graph"],
        ["P", "number of connected components (1 for one program)"],
        ["\\pi", "number of predicate (decision) nodes"] ],
      when: "any “what is the V(G)/cyclomatic complexity” question, basis-path sizing, and complexity-guided refactoring.",
      worked: "W12Q8: three nested if-else predicates ⇒ π = 3 ⇒ M = 3 + 1 = 4. No decisions at all ⇒ M = 1. Basis path testing then designs exactly 4 path tests." },
    { label: "Mutation score",
      latex: "MS = \\frac{K}{m - e}",
      vars: [
        ["K", "mutants killed by the test suite"],
        ["m", "total generated mutants"],
        ["e", "equivalent mutants (never killable)"] ],
      when: "judging test-suite adequacy in mutation testing.",
      worked: "100 mutants, 12 equivalent, 33 killed ⇒ MS = 33 / (100 − 12) ≈ 37.5% — add tests targeting the surviving regions, then re-measure." },
  ],
  recap: [
    "M = E − N + 2 (single program) = predicate nodes + 1 = basis-path test count.",
    "No branches ⇒ M = 1; ≤ 10 is manageable complexity.",
    "Mutation: killed/survived/equivalent; score = K/(m−e).",
    "Data-flow tests follow def-use pairs and anomalies.",
    "Strength: statement → branch/condition → MC/DC → multiple → paths.",
  ],
},
};
