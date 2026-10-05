/* Sunkova Academy — Learn (LMS shell v1)
   Theme · mock auth · mock progress (localStorage) · page renderers.
   No backend: everything lives in this browser. */
(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "sunkova-academy-theme";          // shared with marketing site
  var USER_KEY = "sunkova-learn-user";
  var PROGRESS_KEY = "sunkova-learn-progress";
  var STEPS = [
    { id: "watch", label: "Watch" },
    { id: "learn", label: "Learn" },
    { id: "check", label: "Check" },
    { id: "challenge", label: "Challenge" },
    { id: "reflect", label: "Reflect" }
  ];
  var CAPSTONE_STEPS = [
    { id: "brief", label: "Brief" },
    { id: "milestones", label: "Milestones" },
    { id: "submit", label: "Submit" }
  ];
  var LEVELS = ["emerging", "developing", "proficient", "exemplary"];

  /* ——— Utilities ——— */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function params() { return new URLSearchParams(location.search); }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key) || "null");
      if (val === null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(val));
    } catch (_) { return null; }
  }
  function filled(v) { return v !== null && v !== undefined && String(v).trim() !== ""; }

  /* Tiny Markdown → HTML (headings, lists, quotes, bold/italic/code/links). */
  function inline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|[^)\s]+\.html[^)\s]*)\)/g,
        '<a class="lx-link" href="$2" target="_blank" rel="noopener">$1</a>');
  }
  function md(src) {
    if (!filled(src)) return "";
    var lines = String(src).replace(/\r/g, "").split("\n");
    var out = [], list = null, para = [];
    function flushPara() { if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; } }
    function flushList() { if (list) { out.push("</" + list + ">"); list = null; } }
    lines.forEach(function (raw) {
      var line = raw.trim(), m;
      if (!line) { flushPara(); flushList(); return; }
      if ((m = line.match(/^(#{1,4})\s+(.*)$/))) {
        flushPara(); flushList();
        var lvl = Math.min(4, m[1].length + 2);
        out.push("<h" + lvl + ">" + inline(m[2]) + "</h" + lvl + ">"); return;
      }
      if ((m = line.match(/^>\s?(.*)$/))) { flushPara(); flushList(); out.push("<blockquote>" + inline(m[1]) + "</blockquote>"); return; }
      if ((m = line.match(/^[-*]\s+(.*)$/)) || (m = line.match(/^\d+[.)]\s+(.*)$/))) {
        flushPara();
        var type = /^\d/.test(line) ? "ol" : "ul";
        if (list !== type) { flushList(); out.push("<" + type + ">"); list = type; }
        out.push("<li>" + inline(m[1]) + "</li>"); return;
      }
      flushList(); para.push(line);
    });
    flushPara(); flushList();
    return out.join("");
  }

  function icon(name) {
    var p = {
      arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
      back: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
      check: '<path d="M20 6 9 17l-5-5"/>',
      play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
      ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
      book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
      lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
      moon: '<path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z"/>',
      upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
      badge: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14.2-1.5 7.8 5-3 5 3-1.5-7.8"/><path d="m9.5 9 1.8 1.8L14.8 7.3"/>'
    }[name] || "";
    var cls = name === "sun" ? ' class="icon-sun"' : name === "moon" ? ' class="icon-moon"' : "";
    return '<svg' + cls + ' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>";
  }

  /* Empty content slot — the visible placeholder for Jaylen's copy. */
  function slot(label, hint, tag) {
    return '<div class="lx-slot"' + (tag ? ' data-slot="' + esc(tag) + '"' : "") + '>' +
      '<span class="lx-slot-label">' + esc(label) + "</span>" +
      (hint ? '<span class="lx-slot-hint">' + esc(hint) + "</span>" : "") + "</div>";
  }
  function textOr(value, label, hint) { return filled(value) ? '<div class="lx-prose">' + md(value) + "</div>" : slot(label, hint); }
  function inlineOr(value, label) { return filled(value) ? inline(value) : '<span class="lx-slot-inline">' + esc(label) + "</span>"; }

  /* ——— Theme ——— */
  function applyTheme(theme, persist) {
    var next = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "light" ? "#f5f5f7" : "#000000");
    $all("[data-theme-toggle]").forEach(function (b) {
      b.setAttribute("aria-label", next === "light" ? "Switch to dark mode" : "Switch to light mode");
      b.setAttribute("aria-pressed", next === "light" ? "true" : "false");
    });
    if (persist) { try { localStorage.setItem(THEME_KEY, next); } catch (_) {} }
  }
  function bindTheme() {
    applyTheme(root.getAttribute("data-theme") || "dark", false);
    $all("[data-theme-toggle]").forEach(function (b) {
      b.addEventListener("click", function () {
        applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light", true);
      });
    });
  }

  /* ——— Mock auth ——— */
  function user() { return store(USER_KEY); }
  function requireUser() {
    if (document.body.dataset.auth !== "required" || user()) return true;
    var next = location.pathname.split("/").pop() + location.search + location.hash;
    location.replace("login.html?next=" + encodeURIComponent(next));
    return false;
  }
  function safeNext(n) {
    // only allow local learn/* pages
    return n && /^(index|course|module|lesson)\.html(\?[\w=&%.\-]*)?(#[\w-]*)?$/.test(n) ? n : "index.html";
  }

  /* ——— Mock progress ———
     { [course]: { [moduleId]: { steps:{watch:true,…}, submission:{…}, reflections:[…], completedAt } } } */
  function allProgress() { return store(PROGRESS_KEY) || {}; }
  function modProgress(course, mod) {
    var all = allProgress();
    return (all[course] && all[course][mod]) || { steps: {} };
  }
  function saveModProgress(course, mod, data) {
    var all = allProgress();
    all[course] = all[course] || {};
    all[course][mod] = data;
    store(PROGRESS_KEY, all);
  }
  function stepsFor(mod) { return mod === "capstone" ? CAPSTONE_STEPS : STEPS; }
  function stepCount(course, mod) {
    var p = modProgress(course, mod), steps = stepsFor(mod);
    return steps.filter(function (s) { return p.steps && p.steps[s.id]; }).length;
  }
  function courseUnits(c) { return c.modules.map(function (m) { return m.id; }).concat(c.capstone ? ["capstone"] : []); }
  function coursePercent(c) {
    var units = courseUnits(c), total = 0;
    units.forEach(function (id) {
      var p = modProgress(c.slug, id);
      total += p.completedAt ? 1 : stepCount(c.slug, id) / (stepsFor(id).length + 1);
    });
    return Math.round((total / units.length) * 100);
  }
  function moduleState(c, m) {
    if (m.status === "coming-soon") return { key: "soon", label: "Coming soon" };
    var p = modProgress(c.slug, m.id), n = stepCount(c.slug, m.id), of = stepsFor(m.id).length;
    if (p.completedAt) return { key: "done", label: "Complete" };
    if (n > 0) return { key: "progress", label: n + " / " + of + " steps" };
    return { key: "new", label: m.status === "draft" ? "Skeleton · not started" : "Not started" };
  }
  function nextUp(c) {
    var units = c.modules.filter(function (m) { return m.status !== "coming-soon"; });
    for (var i = 0; i < units.length; i++) if (!modProgress(c.slug, units[i].id).completedAt) return units[i];
    return units[0] || c.modules[0];
  }

  /* ——— Chrome ——— */
  function header() {
    var host = $("#lx-header");
    if (!host) return;
    var u = user();
    var initial = u ? (u.name || u.email || "L").trim().charAt(0).toUpperCase() : "";
    host.innerHTML =
      '<div class="lx-header-inner">' +
        '<a class="brand" href="' + (u ? "index.html" : "../index.html") + '" aria-label="Sunkova Academy — Learn">' +
          '<img class="brand-logo brand-logo-dark" src="../assets/brand/logo-academy-on-dark.png" alt="Sunkova Academy" width="220" height="32" />' +
          '<img class="brand-logo brand-logo-light" src="../assets/brand/logo-academy-on-light.png" alt="" width="220" height="32" />' +
        "</a>" +
        '<span class="lx-header-tag">Learn</span>' +
        (u ? '<nav class="lx-nav" aria-label="Learn"><a href="index.html"' + (document.body.dataset.page === "dashboard" ? ' aria-current="page"' : "") + '>My courses</a><a href="../courses.html">Catalogue</a></nav>' : '<span class="lx-spacer"></span>') +
        '<div class="lx-header-actions">' +
          '<button class="theme-toggle" type="button" data-theme-toggle aria-pressed="false" aria-label="Switch theme">' + icon("sun") + icon("moon") + "</button>" +
          (u ? '<button class="lx-avatar" type="button" data-signout title="Sign out ' + esc(u.email) + '" aria-label="Sign out"><span>' + esc(initial) + '</span></button>' : '<a class="btn lx-header-site" href="../index.html">Academy site</a>') +
        "</div>" +
      "</div>";
    var so = $("[data-signout]", host);
    if (so) so.addEventListener("click", function () {
      if (confirm("Sign out of Sunkova Academy? (Your demo progress stays in this browser.)")) {
        store(USER_KEY, null); location.href = "login.html";
      }
    });
  }

  function loadCourse(slug, cb) {
    if (!/^[a-z0-9-]+$/.test(slug || "")) return cb(null);
    var all = window.SUNKOVA_COURSES || {};
    if (all[slug]) return cb(all[slug]);
    var s = document.createElement("script");
    s.src = "data/" + slug + ".js";
    s.onload = function () { cb((window.SUNKOVA_COURSES || {})[slug] || null); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  function notFound(main, msg) {
    main.innerHTML = '<section class="lx-wrap lx-empty"><p class="micro">Not found</p><h1 class="lx-h1">' + esc(msg) + '</h1><a class="btn btn-solid" href="index.html">Back to my courses</a></section>';
  }

  function progressBar(pct, label) {
    return '<div class="lx-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '" aria-label="' + esc(label || "Progress") + '"><span style="width:' + pct + '%"></span></div>';
  }

  /* ===================================================================
     PAGE: login
     =================================================================== */
  function pageLogin() {
    if (user()) { location.replace(safeNext(params().get("next"))); return; }
    var form = $("#lx-login");
    function go(u) { store(USER_KEY, u); location.href = safeNext(params().get("next")); }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      if (!email || !form.checkValidity()) { form.reportValidity(); return; }
      var name = email.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); });
      go({ email: email, name: name, signedInAt: new Date().toISOString() });
    });
    $("#lx-demo").addEventListener("click", function () {
      go({ email: "demo@sunkova.com", name: "Demo Learner", signedInAt: new Date().toISOString() });
    });
  }

  /* ===================================================================
     PAGE: dashboard (My courses)
     =================================================================== */
  function pageDashboard() {
    var main = $("#main"), u = user();
    var cat = window.SUNKOVA_CATALOGUE || [];
    var enrolled = cat.filter(function (c) { return c.enrolled; });
    var others = cat.filter(function (c) { return !c.enrolled; });
    var pending = enrolled.length;
    var html =
      '<section class="lx-wrap lx-page-head">' +
        '<p class="micro">My courses</p>' +
        '<h1 class="lx-h1">Karibu, <span class="serif">' + esc((u.name || "learner").split(" ")[0]) + '.</span></h1>' +
        '<p class="lead">Pick up where you left off. Every module ends in something you build.</p>' +
      "</section>" +
      '<section class="lx-wrap"><div class="lx-course-list" id="lx-enrolled"></div></section>' +
      (others.length ? '<section class="lx-wrap lx-section"><div class="lx-section-head"><p class="micro">More courses</p><h2 class="lx-h2">Opening soon</h2></div><div class="lx-course-list lx-course-list-muted">' +
        others.map(function (c) {
          return '<article class="lx-course-card is-locked"><figure class="lx-course-media"><img src="' + esc(c.image) + '" alt="" loading="lazy" /></figure>' +
            '<div class="lx-course-body"><div class="lx-meta"><span class="pill">' + esc(c.category) + '</span><span class="mono">' + esc(c.format) + "</span></div>" +
            '<h3>' + esc(c.title) + '</h3><p>' + esc(c.summary) + '</p><div class="lx-card-actions"><a class="btn" href="../contact.html">Join waitlist</a></div></div></article>';
        }).join("") + "</div></section>" : "");
    main.innerHTML = html;

    var host = $("#lx-enrolled");
    if (!enrolled.length) { host.innerHTML = '<div class="lx-empty-card">No courses yet. <a class="lx-link" href="../courses.html">Browse the catalogue</a>.</div>'; return; }
    enrolled.forEach(function (meta) {
      var card = document.createElement("article");
      card.className = "lx-course-card";
      host.appendChild(card);
      loadCourse(meta.slug, function (c) {
        var pct = c ? coursePercent(c) : 0;
        var nx = c ? nextUp(c) : null;
        var started = pct > 0;
        card.innerHTML =
          '<figure class="lx-course-media"><img src="' + esc(meta.image) + '" alt="" /></figure>' +
          '<div class="lx-course-body">' +
            '<div class="lx-meta"><span class="pill"><span class="pill-dot"></span>' + esc(meta.category) + '</span><span class="mono">' + esc(meta.format) + " · " + esc(meta.duration) + "</span></div>" +
            "<h3>" + esc(meta.title) + "</h3><p>" + esc(meta.summary) + "</p>" +
            '<div class="lx-progress-row"><span class="mono">' + pct + '% complete</span>' + (nx ? '<span class="mono">Next: Module ' + esc(nx.id) + "</span>" : "") + "</div>" +
            progressBar(pct, meta.title + " progress") +
            '<div class="lx-card-actions">' +
              (nx ? '<a class="btn btn-solid" href="module.html?course=' + esc(meta.slug) + "&module=" + esc(nx.id) + '">' + (started ? "Continue" : "Start course") + " " + icon("arrow") + "</a>" : "") +
              '<a class="btn" href="course.html?course=' + esc(meta.slug) + '">Course overview</a>' +
            "</div>" +
          "</div>";
        pending--;
      });
    });
  }

  /* ===================================================================
     PAGE: course overview
     =================================================================== */
  function pageCourse() {
    var main = $("#main"), slug = params().get("course");
    loadCourse(slug, function (c) {
      if (!c) return notFound(main, "We couldn't find that course.");
      document.title = c.title + " — Sunkova Academy Learn";
      var o = c.overview || {};
      var pct = coursePercent(c), nx = nextUp(c);
      var fmt = params().get("format") || c.format || "live";

      var overviewCells = [
        ["Who it's for", textOr(o.whoFor, "Who it's for", "Audience in one or two sentences")],
        ["Prerequisites", textOr(o.prereqs, "Prerequisites", "What learners need before Module 01")],
        ["Duration", textOr(o.duration, "Duration", "Weeks · hours per week")],
        ["Format", textOr(o.format, "Format", "Live cohort / self-paced")],
        ["Outcomes", o.outcomes && o.outcomes.length ? "<ul class=\"lx-list\">" + o.outcomes.map(function (x) { return "<li>" + inlineOr(x, "Outcome") + "</li>"; }).join("") + "</ul>" : slot("Outcomes", "3–5 outcomes")],
        ["Tools", o.tools && o.tools.length ? '<div class="lx-chips">' + o.tools.map(function (t) { return '<span class="lx-chip">' + esc(t) + "</span>"; }).join("") + "</div>" : slot("Tools", "Software and references")]
      ];

      var moduleRows = c.modules.map(function (m) {
        var st = moduleState(c, m), locked = st.key === "soon";
        var inner =
          '<span class="lx-row-num mono">' + esc(m.id) + "</span>" +
          '<div class="lx-row-copy"><h3>' + esc(m.title) + "</h3><p>" + esc(m.summary || "") + "</p></div>" +
          '<div class="lx-row-side"><span class="lx-status lx-status-' + st.key + '">' + (st.key === "done" ? icon("check") : locked ? icon("lock") : "") + esc(st.label) + "</span>" +
          (filled(m.hours) ? '<span class="mono">' + esc(m.hours) + " hrs</span>" : "") + "</div>";
        return locked ? '<div class="lx-row is-locked" aria-disabled="true">' + inner + "</div>"
          : '<a class="lx-row" href="module.html?course=' + esc(c.slug) + "&module=" + esc(m.id) + '">' + inner + "</a>";
      }).join("");
      if (c.capstone) {
        var cs = moduleState(c, { id: "capstone", status: c.capstone.status });
        moduleRows += '<a class="lx-row lx-row-capstone" href="module.html?course=' + esc(c.slug) + '&module=capstone">' +
          '<span class="lx-row-num mono">CAP</span><div class="lx-row-copy"><h3>Capstone — ' + esc(c.capstone.title) + "</h3><p>" + esc(c.capstone.summary || "") + "</p></div>" +
          '<div class="lx-row-side"><span class="lx-status lx-status-' + cs.key + '">' + (cs.key === "done" ? icon("check") : "") + esc(cs.label) + "</span></div></a>";
      }

      var weekly = '<div class="lx-table-wrap"><table class="lx-table"><thead><tr><th scope="col">Week</th><th scope="col">Focus</th><th scope="col">Live session</th><th scope="col">Due</th></tr></thead><tbody>' +
        (c.weeklyPlan || []).map(function (w) {
          return "<tr><td class=\"mono\">" + esc(w.week) + "</td><td>" + inlineOr(w.focus, "Focus") + "</td><td>" + inlineOr(w.session, "Session slot") + "</td><td>" + inlineOr(w.due, "Due slot") + "</td></tr>";
        }).join("") + "</tbody></table></div>";
      var sp = c.selfPaced || {};
      var selfPaced = '<div class="lx-table-wrap"><table class="lx-table"><thead><tr><th scope="col">Module</th><th scope="col">Title</th><th scope="col">Est. hours</th></tr></thead><tbody>' +
        c.modules.map(function (m) {
          return '<tr><td class="mono">' + esc(m.id) + "</td><td>" + esc(m.title) + "</td><td>" + inlineOr(m.hours ? m.hours + " hrs" : null, "Hours slot") + "</td></tr>";
        }).join("") + "</tbody></table></div>" +
        '<div class="lx-checkpoints"><p class="micro">Checkpoints</p><ol>' +
        (sp.checkpoints || []).map(function (cp) {
          return '<li><span class="mono">After Module ' + esc(cp.after) + "</span>" + inlineOr(cp.label, "Checkpoint description") + "</li>";
        }).join("") + "</ol></div>";

      main.innerHTML =
        '<section class="lx-wrap lx-course-hero">' +
          '<nav class="lx-crumbs" aria-label="Breadcrumb"><a href="index.html">My courses</a><span>/</span><span aria-current="page">' + esc(c.title) + "</span></nav>" +
          '<div class="lx-course-hero-grid">' +
            "<div>" +
              '<div class="lx-meta"><span class="pill"><span class="pill-dot"></span>' + esc(c.category) + '</span><span class="mono">' + esc(o.duration || "") + "</span></div>" +
              '<h1 class="lx-h1">' + esc(c.title) + "</h1>" +
              '<p class="lead">' + esc(c.summary) + "</p>" +
              '<div class="lx-progress-row"><span class="mono">' + pct + '% complete</span><span class="mono">' + c.modules.length + " modules + capstone</span></div>" +
              progressBar(pct, "Course progress") +
              '<div class="lx-card-actions"><a class="btn btn-solid" href="module.html?course=' + esc(c.slug) + "&module=" + esc(nx.id) + '">' + (pct > 0 ? "Continue" : "Start") + " Module " + esc(nx.id) + " " + icon("arrow") + '</a><a class="btn" href="#modules">See modules</a></div>' +
            "</div>" +
            '<figure class="lx-course-hero-media"><img src="' + esc(c.image) + '" alt="" /></figure>' +
          "</div>" +
        "</section>" +

        '<section class="lx-wrap lx-section"><div class="lx-section-head"><p class="micro">Overview</p><h2 class="lx-h2">About this course</h2></div>' +
          '<div class="lx-overview">' + overviewCells.map(function (cell) {
            return '<div class="lx-cell"><p class="micro">' + esc(cell[0]) + "</p>" + cell[1] + "</div>";
          }).join("") + "</div></section>" +

        '<section class="lx-wrap lx-section"><div class="lx-section-head"><p class="micro">Course frame</p><h2 class="lx-h2">The big picture</h2></div>' +
          '<div class="lx-frame">' +
            '<div class="lx-frame-card"><p class="micro">Big Idea</p>' + textOr(c.bigIdea, "Big Idea", "One sentence: the concept everything hangs on") + "</div>" +
            '<div class="lx-frame-card lx-frame-eq"><p class="micro">Essential Question</p>' + textOr(c.essentialQuestion, "Essential Question", "The open question learners carry all course") + "</div>" +
            '<div class="lx-frame-card"><p class="micro">Course Challenge</p>' + textOr(c.courseChallenge, "Course Challenge", "The real-world problem the capstone answers") + "</div>" +
          "</div></section>" +

        '<section class="lx-wrap lx-section"><div class="lx-section-head lx-section-head-row"><div><p class="micro">Schedule</p><h2 class="lx-h2">How the weeks run</h2></div>' +
          '<div class="lx-tabs" role="tablist" aria-label="Schedule format">' +
            '<button role="tab" type="button" data-tab="live" aria-selected="' + (fmt === "live") + '">Live cohort</button>' +
            '<button role="tab" type="button" data-tab="self-paced" aria-selected="' + (fmt !== "live") + '">Self-paced</button>' +
          "</div></div>" +
          '<div data-panel="live"' + (fmt === "live" ? "" : " hidden") + '><p class="lx-note">Weekly plan — one module per week, capstone in week 8.</p>' + weekly + "</div>" +
          '<div data-panel="self-paced"' + (fmt !== "live" ? "" : " hidden") + '><p class="lx-note">Self-paced — estimated hours per module, plus checkpoints.</p>' + selfPaced + "</div>" +
        "</section>" +

        '<section class="lx-wrap lx-section" id="modules"><div class="lx-section-head"><p class="micro">Modules</p><h2 class="lx-h2">What you\'ll build through</h2></div>' +
          '<div class="lx-rows">' + moduleRows + "</div></section>";

      $all("[data-tab]").forEach(function (t) {
        t.addEventListener("click", function () {
          $all("[data-tab]").forEach(function (x) { x.setAttribute("aria-selected", String(x === t)); });
          $all("[data-panel]").forEach(function (p) { p.hidden = p.dataset.panel !== t.dataset.tab; });
        });
      });
    });
  }

  /* ===================================================================
     PAGE: module (full content page — one lesson per module in v1)
     =================================================================== */
  function ytId(url) {
    if (!url) return null;
    var m = String(url).match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return m ? m[1] : null;
  }

  function watchItem(w, i) {
    var isReading = w.type === "reading";
    var id = ytId(w.url);
    var media;
    if (id) {
      media = '<button class="lx-embed" type="button" data-yt="' + esc(id) + '" aria-label="Play ' + esc(w.title || "video") + '">' +
        '<img src="https://i.ytimg.com/vi/' + esc(id) + '/hqdefault.jpg" alt="" loading="lazy" /><span class="lx-embed-play">' + icon("play") + "</span></button>";
    } else if (filled(w.url)) {
      media = '<a class="lx-embed lx-embed-link" href="' + esc(w.url) + '" target="_blank" rel="noopener">' + icon(isReading ? "book" : "ext") + "<span>Open " + (isReading ? "reading" : "video") + "</span></a>";
    } else {
      media = '<div class="lx-embed lx-embed-empty">' + icon(isReading ? "book" : "play") + "<span>" + (isReading ? "Reading" : "Video") + " URL slot</span></div>";
    }
    return '<article class="lx-watch' + (isReading ? " is-reading" : "") + '">' + media +
      '<div class="lx-watch-body">' +
        '<div class="lx-meta"><span class="lx-tag' + (isReading ? " lx-tag-reading" : "") + '">' + (isReading ? "Reading" : "Video " + (i + 1)) + "</span>" +
        '<span class="mono">' + inlineOr(w.length, "Length") + "</span></div>" +
        "<h3>" + inlineOr(w.title, (isReading ? "Reading" : "Video") + " title") + "</h3>" +
        '<p class="mono">' + inlineOr(w.channel, isReading ? "Source / author" : "Channel") + "</p>" +
        '<p class="lx-why"><strong>Why: </strong>' + inlineOr(w.why, "One line on why this matters") + "</p>" +
        (filled(w.url) ? '<a class="lx-link" href="' + esc(w.url) + '" target="_blank" rel="noopener">' + (id ? "Watch on YouTube" : "Open link") + " ↗</a>" : "") +
      "</div></article>";
  }

  function rubricTable(rows) {
    return '<div class="lx-table-wrap"><table class="lx-table lx-rubric"><thead><tr><th scope="col">Criterion</th>' +
      LEVELS.map(function (l) { return '<th scope="col">' + l.charAt(0).toUpperCase() + l.slice(1) + "</th>"; }).join("") +
      "</tr></thead><tbody>" +
      (rows || []).map(function (r, i) {
        return '<tr><th scope="row">' + inlineOr(r.criterion, "Criterion " + (i + 1)) + "</th>" +
          LEVELS.map(function (l) { return "<td>" + inlineOr(r[l], "—") + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }

  function listOr(items, label, ordered) {
    var tag = ordered ? "ol" : "ul";
    return "<" + tag + ' class="lx-list">' + (items || []).map(function (x, i) { return "<li>" + inlineOr(x, label + " " + (i + 1)) + "</li>"; }).join("") + "</" + tag + ">";
  }

  function submissionForm(prev) {
    var s = prev || {};
    return '<form class="lx-submit" id="lx-submit" novalidate>' +
      '<div class="lx-submit-head"><p class="micro">Submit your work</p><p class="lx-note">Demo mode — the link and file name are saved in this browser only. Nothing is uploaded.</p></div>' +
      '<div class="form-row"><label for="sub-link">Link (Figma, prototype, doc)</label><input id="sub-link" name="link" type="url" placeholder="https://www.figma.com/…" value="' + esc(s.link || "") + '" /></div>' +
      '<div class="form-row"><label for="sub-file">File (PDF, PNG, ZIP)</label>' +
        '<label class="lx-file"><input id="sub-file" name="file" type="file" accept=".pdf,.png,.jpg,.jpeg,.zip,.fig,.key,.pptx" />' + icon("upload") +
        '<span data-file-name>' + (s.fileName ? esc(s.fileName) : "Choose a file or drop it here") + "</span></label></div>" +
      '<div class="form-row"><label for="sub-note">Note to your facilitator (optional)</label><textarea id="sub-note" name="note" rows="3" placeholder="What should we look at first?">' + esc(s.note || "") + "</textarea></div>" +
      '<div class="lx-submit-foot"><button class="btn btn-blue" type="submit">' + (s.at ? "Update submission" : "Submit challenge") + '</button><span class="lx-note" data-sub-status>' +
      (s.at ? "Submitted " + new Date(s.at).toLocaleString() : "Add a link, a file, or both.") + "</span></div></form>";
  }

  function section(id, num, title, kicker, body, doneLabel, done) {
    return '<section class="lx-block" id="' + id + '" data-step="' + id + '">' +
      '<header class="lx-block-head"><span class="lx-block-num mono">' + num + '</span><div><p class="micro">' + esc(kicker) + '</p><h2 class="lx-h2">' + esc(title) + "</h2></div></header>" +
      '<div class="lx-block-body">' + body + "</div>" +
      (doneLabel ? '<footer class="lx-block-foot"><button class="btn lx-mark' + (done ? " is-done" : "") + '" type="button" data-mark="' + id + '">' + icon("check") + "<span>" + (done ? "Done" : esc(doneLabel)) + "</span></button></footer>" : "") +
      "</section>";
  }

  function tracker(steps, p) {
    return '<nav class="lx-tracker" aria-label="Module progress"><p class="micro lx-tracker-title">Progress</p><ol>' +
      steps.map(function (s, i) {
        var d = p.steps && p.steps[s.id];
        return '<li><a href="#' + s.id + '" data-track="' + s.id + '" class="' + (d ? "is-done" : "") + '"><span class="lx-dot">' + (d ? icon("check") : i + 1) + "</span><span>" + s.label + "</span></a></li>";
      }).join("") + '</ol><div class="lx-tracker-bar">' + progressBar(0, "Steps complete") + "</div></nav>";
  }

  function badge(c, title, date) {
    return '<div class="lx-badge" role="status">' +
      '<div class="lx-badge-medal">' + icon("badge") + "</div>" +
      '<div><p class="micro">Completion badge</p><h3>' + esc(title) + "</h3>" +
      '<p class="mono">' + esc(c.title) + " · " + esc(new Date(date).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })) + "</p></div></div>";
  }

  function pageModule() {
    var main = $("#main"), q = params(), slug = q.get("course"), modId = q.get("module") || "01";
    loadCourse(slug, function (c) {
      if (!c) return notFound(main, "We couldn't find that course.");
      if (modId === "capstone") return renderCapstone(main, c);
      var idx = c.modules.findIndex(function (m) { return m.id === modId; });
      if (idx < 0) return notFound(main, "That module doesn't exist.");
      var m = c.modules[idx], prev = c.modules[idx - 1], next = c.modules[idx + 1];
      document.title = "Module " + m.id + " · " + m.title + " — Sunkova Academy Learn";
      var crumbs = '<nav class="lx-crumbs" aria-label="Breadcrumb"><a href="index.html">My courses</a><span>/</span><a href="course.html?course=' + esc(c.slug) + '">' + esc(c.title) + '</a><span>/</span><span aria-current="page">Module ' + esc(m.id) + "</span></nav>";
      var pager = '<nav class="lx-pager" aria-label="Module navigation">' +
        (prev ? '<a class="lx-pager-link" href="module.html?course=' + esc(c.slug) + "&module=" + esc(prev.id) + '">' + icon("back") + '<span><span class="micro">Previous</span>Module ' + esc(prev.id) + "</span></a>" : '<a class="lx-pager-link" href="course.html?course=' + esc(c.slug) + '">' + icon("back") + '<span><span class="micro">Back</span>Course overview</span></a>') +
        (next ? '<a class="lx-pager-link is-next" href="module.html?course=' + esc(c.slug) + "&module=" + esc(next.id) + '"><span><span class="micro">Next</span>Module ' + esc(next.id) + "</span>" + icon("arrow") + "</a>"
              : '<a class="lx-pager-link is-next" href="module.html?course=' + esc(c.slug) + '&module=capstone"><span><span class="micro">Next</span>Capstone</span>' + icon("arrow") + "</a>") +
        "</nav>";

      if (m.status === "coming-soon" || !m.content) {
        main.innerHTML = '<section class="lx-wrap lx-module-head">' + crumbs +
          '<p class="micro">Module ' + esc(m.id) + '</p><h1 class="lx-h1">' + esc(m.title) + '</h1><p class="lead">' + esc(m.summary || "") + "</p>" +
          '<div class="lx-empty-card">' + icon("lock") + "<div><strong>Coming soon.</strong> This module opens once its content is published. Finish Module 01 first.</div></div>" + pager + "</section>";
        return;
      }

      var k = m.content, p = modProgress(c.slug, m.id), ch = k.challenge || {};
      var draft = m.status === "draft";

      var watchBody = '<div class="lx-watch-grid">' + (k.watch || []).map(watchItem).join("") + "</div>";
      var learnBody = filled(k.notes) ? '<div class="lx-prose lx-notes">' + md(k.notes) + "</div>"
        : '<div class="lx-notes-slot">' + slot("Learn — notes", "400–800 words: core concepts, examples, a worked case. Markdown supported.", "notes") +
          '<div class="lx-skeleton" aria-hidden="true"><span></span><span></span><span></span><span class="short"></span><span></span><span></span><span class="short"></span></div></div>';
      var checkBody = '<div class="lx-accordion">' + (k.quickCheck || []).map(function (x, i) {
        return '<details class="lx-qa"><summary><span class="mono">Q' + (i + 1) + "</span><span>" + inlineOr(x.q, "Question " + (i + 1)) + '</span><span class="lx-qa-toggle" aria-hidden="true"></span></summary>' +
          '<div class="lx-qa-answer"><p class="micro">Answer</p>' + textOr(x.a, "Answer " + (i + 1), "Hidden until opened") + "</div></details>";
      }).join("") + "</div>";
      var challengeBody =
        '<div class="lx-challenge">' +
          '<div class="lx-ch-block lx-ch-scenario"><p class="micro">Scenario</p>' + textOr(ch.scenario, "Scenario", "The real-world situation / client") + "</div>" +
          '<div class="lx-ch-block"><p class="micro">Build</p>' + textOr(ch.build, "Build", "What exactly the learner makes") + "</div>" +
          '<div class="lx-ch-grid">' +
            '<div class="lx-ch-block"><p class="micro">Deliverables</p>' + listOr(ch.deliverables, "Deliverable", true) + "</div>" +
            '<div class="lx-ch-block"><p class="micro">Constraints</p>' + listOr(ch.constraints, "Constraint") + "</div>" +
          "</div>" +
          '<details class="lx-hints"><summary>Hints <span class="mono">(' + (ch.hints || []).length + ")</span></summary>" + listOr(ch.hints, "Hint") + "</details>" +
          '<div class="lx-ch-block"><p class="micro">Submission format</p>' + textOr(ch.submissionFormat, "Submission format", "e.g. Figma link + 10-slide PDF") + "</div>" +
          '<div class="lx-ch-block"><p class="micro">Rubric</p>' + rubricTable(ch.rubric) + "</div>" +
          '<div class="lx-ch-block lx-ch-stretch"><p class="micro">Stretch</p>' + textOr(ch.stretch, "Stretch goal", "Optional extension for fast finishers") + "</div>" +
          submissionForm(p.submission) +
        "</div>";
      var reflectBody = '<div class="lx-reflect">' + (k.reflect || []).map(function (r, i) {
        return '<div class="form-row"><label for="ref-' + i + '">' + (filled(r) ? inline(r) : "Reflection prompt " + (i + 1) + " — awaiting content") + "</label>" +
          '<textarea id="ref-' + i + '" data-reflect="' + i + '" rows="3" placeholder="Write a few honest sentences…">' + esc((p.reflections || [])[i] || "") + "</textarea></div>";
      }).join("") + '<p class="lx-note">Saved in this browser.</p></div>';

      main.innerHTML =
        '<section class="lx-wrap lx-module-head">' + crumbs +
          (draft ? '<p class="lx-draft-flag"><span class="pill pill-orange"><span class="pill-dot"></span>Skeleton</span> Layout preview — content slots are awaiting Jaylen\'s markdown.</p>' : "") +
          '<div class="lx-meta"><span class="micro">Module ' + esc(m.id) + " of " + c.modules.length + "</span>" + (filled(m.hours) ? '<span class="mono">' + esc(m.hours) + " hrs</span>" : "") + "</div>" +
          '<h1 class="lx-h1">' + esc(m.title) + "</h1>" +
          '<div class="lx-eq"><p class="micro">Essential Question</p>' + (filled(k.essentialQuestion) ? '<p class="lx-eq-text">' + inline(k.essentialQuestion) + "</p>" : slot("Essential Question", "One open, debatable question for this module")) + "</div>" +
          '<div class="lx-objectives"><p class="micro">By the end you can</p>' + listOr(k.objectives, "Objective") + "</div>" +
        "</section>" +
        '<div class="lx-wrap lx-module-grid">' +
          '<aside class="lx-aside">' + tracker(STEPS, p) + "</aside>" +
          '<div class="lx-content">' +
            section("watch", "01", "Watch", (k.watch || []).length + " resources · videos + readings", watchBody, "Mark watched", p.steps.watch) +
            section("learn", "02", "Learn", "Notes", learnBody, "Mark as read", p.steps.learn) +
            section("check", "03", "Quick check", "Test yourself — answers hidden", checkBody, "I've checked my answers", p.steps.check) +
            section("challenge", "04", "Challenge", "Build → portfolio artefact", challengeBody, null, p.steps.challenge) +
            section("reflect", "05", "Reflect", "Lock in what you learned", reflectBody, "Save reflection", p.steps.reflect) +
            '<section class="lx-complete" id="complete"></section>' +
            pager +
          "</div>" +
        "</div>";

      bindModule(c, m, next ? next : { id: "capstone", title: "Capstone" }, STEPS);
    });
  }

  function renderCapstone(main, c) {
    var cap = c.capstone || {}, p = modProgress(c.slug, "capstone");
    document.title = "Capstone · " + (cap.title || "") + " — Sunkova Academy Learn";
    var last = c.modules[c.modules.length - 1];
    main.innerHTML =
      '<section class="lx-wrap lx-module-head">' +
        '<nav class="lx-crumbs" aria-label="Breadcrumb"><a href="index.html">My courses</a><span>/</span><a href="course.html?course=' + esc(c.slug) + '">' + esc(c.title) + '</a><span>/</span><span aria-current="page">Capstone</span></nav>' +
        (cap.status === "draft" ? '<p class="lx-draft-flag"><span class="pill pill-orange"><span class="pill-dot"></span>Skeleton</span> Capstone slots are awaiting Jaylen\'s markdown.</p>' : "") +
        '<p class="micro">Capstone</p><h1 class="lx-h1">' + esc(cap.title || "Capstone") + '</h1><p class="lead">' + esc(cap.summary || "") + "</p>" +
      "</section>" +
      '<div class="lx-wrap lx-module-grid">' +
        '<aside class="lx-aside">' + tracker(CAPSTONE_STEPS, p) + "</aside>" +
        '<div class="lx-content">' +
          section("brief", "01", "Brief", "The client problem", textOr(cap.brief, "Capstone brief", "Client, problem, constraints, what 'done' looks like"), "Mark brief read", p.steps.brief) +
          section("milestones", "02", "Weekly milestones", "Plan your build",
            '<ol class="lx-timeline">' + (cap.milestones || []).map(function (ms) {
              return '<li><span class="mono">' + esc(ms.week) + "</span><div>" + inlineOr(ms.label, "Milestone description") + "</div></li>";
            }).join("") + "</ol>", "Milestones planned", p.steps.milestones) +
          section("submit", "03", "Deliver", "Deliverables · rubric · submission",
            '<div class="lx-ch-block"><p class="micro">Deliverables</p>' + listOr(cap.deliverables, "Deliverable", true) + "</div>" +
            '<div class="lx-ch-block"><p class="micro">Rubric</p>' + rubricTable(cap.rubric) + "</div>" +
            submissionForm(p.submission), null, p.steps.submit) +
          '<section class="lx-complete" id="complete"></section>' +
          '<nav class="lx-pager" aria-label="Module navigation"><a class="lx-pager-link" href="module.html?course=' + esc(c.slug) + "&module=" + esc(last.id) + '">' + icon("back") + '<span><span class="micro">Previous</span>Module ' + esc(last.id) + '</span></a><a class="lx-pager-link is-next" href="course.html?course=' + esc(c.slug) + '"><span><span class="micro">Done</span>Course overview</span>' + icon("arrow") + "</a></nav>" +
        "</div>" +
      "</div>";
    bindModule(c, { id: "capstone", title: "Capstone — " + (cap.title || "") }, null, CAPSTONE_STEPS);
  }

  /* Interactions shared by module + capstone pages */
  function bindModule(c, m, next, steps) {
    var submitStep = m.id === "capstone" ? "submit" : "challenge";
    function get() { var p = modProgress(c.slug, m.id); p.steps = p.steps || {}; return p; }
    function set(p) { saveModProgress(c.slug, m.id, p); refresh(); }

    function refresh() {
      var p = get(), n = steps.filter(function (s) { return p.steps[s.id]; }).length;
      var pct = Math.round((n / steps.length) * 100);
      $all("[data-track]").forEach(function (a) {
        var d = !!p.steps[a.dataset.track], i = steps.findIndex(function (s) { return s.id === a.dataset.track; });
        a.classList.toggle("is-done", d);
        $(".lx-dot", a).innerHTML = d ? icon("check") : String(i + 1);
      });
      var bar = $(".lx-tracker .lx-progress");
      if (bar) { bar.setAttribute("aria-valuenow", pct); $("span", bar).style.width = pct + "%"; }
      $all("[data-mark]").forEach(function (b) {
        var d = !!p.steps[b.dataset.mark];
        b.classList.toggle("is-done", d);
      });
      var box = $("#complete");
      if (!box) return;
      var nextHref = next ? "module.html?course=" + encodeURIComponent(c.slug) + "&module=" + encodeURIComponent(next.id) : "course.html?course=" + encodeURIComponent(c.slug);
      var nextLabel = next ? (next.id === "capstone" ? "Go to capstone" : "Next: Module " + next.id) : "Back to course";
      if (p.completedAt) {
        box.innerHTML = badge(c, m.id === "capstone" ? "Capstone shipped" : "Module " + m.id + " complete", p.completedAt) +
          '<div class="lx-card-actions"><a class="btn btn-solid" href="' + nextHref + '">' + esc(nextLabel) + " " + icon("arrow") + '</a><button class="btn" type="button" data-reset>Reset progress</button></div>';
      } else {
        var left = steps.filter(function (s) { return !p.steps[s.id]; }).map(function (s) { return s.label; });
        box.innerHTML = '<p class="micro">Finish line</p><h2 class="lx-h2">' + (left.length ? n + " of " + steps.length + " steps done" : "Ready to complete") + "</h2>" +
          '<p class="lx-note">' + (left.length ? "Still to do: " + esc(left.join(", ")) + "." : "Everything's in. Claim your badge.") + "</p>" +
          progressBar(pct, "Module steps") +
          '<div class="lx-card-actions"><button class="btn btn-solid" type="button" data-complete' + (left.length ? " disabled" : "") + ">" + icon("check") + " Complete " + (m.id === "capstone" ? "capstone" : "module") + "</button>" +
          '<a class="btn" href="' + nextHref + '">' + esc(nextLabel) + "</a></div>";
      }
      var cb = $("[data-complete]", box);
      if (cb) cb.addEventListener("click", function () {
        var p2 = get(); p2.completedAt = new Date().toISOString(); set(p2);
        box.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      var rb = $("[data-reset]", box);
      if (rb) rb.addEventListener("click", function () {
        if (confirm("Reset your demo progress for this module?")) { saveModProgress(c.slug, m.id, { steps: {} }); location.reload(); }
      });
    }

    $all("[data-mark]").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = get(), id = b.dataset.mark;
        if (id === "reflect") {
          p.reflections = $all("[data-reflect]").map(function (t) { return t.value; });
          if (!p.reflections.some(function (v) { return v.trim(); })) { $("[data-reflect]").focus(); return; }
        }
        p.steps[id] = !p.steps[id] || id === "reflect";
        if (!p.steps[id]) delete p.completedAt;
        $("span", b).textContent = p.steps[id] ? "Done" : b.dataset.label || $("span", b).textContent;
        set(p);
      });
      b.dataset.label = { watch: "Mark watched", learn: "Mark as read", check: "I've checked my answers", reflect: "Save reflection", brief: "Mark brief read", milestones: "Milestones planned" }[b.dataset.mark] || "Mark done";
    });

    // Quick check: opening every answer also ticks "Check"
    var qas = $all(".lx-qa");
    qas.forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (d.open) d.dataset.seen = "1";
        if (qas.length && qas.every(function (x) { return x.dataset.seen; })) {
          var p = get();
          if (!p.steps.check) { p.steps.check = true; set(p); var b = $('[data-mark="check"] span'); if (b) b.textContent = "Done"; }
        }
      });
    });

    // Reflections autosave (does not tick the step by itself)
    $all("[data-reflect]").forEach(function (t) {
      t.addEventListener("input", function () {
        var p = get(); p.reflections = $all("[data-reflect]").map(function (x) { return x.value; });
        saveModProgress(c.slug, m.id, p);
      });
    });

    // Submission form (link + file) — stored locally
    var form = $("#lx-submit");
    if (form) {
      var fileInput = form.querySelector('input[type="file"]'), fileName = $("[data-file-name]", form), status = $("[data-sub-status]", form);
      fileInput.addEventListener("change", function () {
        var f = fileInput.files[0];
        fileName.textContent = f ? f.name + " · " + Math.max(1, Math.round(f.size / 1024)) + " KB" : "Choose a file or drop it here";
      });
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var link = form.link.value.trim(), f = fileInput.files[0], prev = get().submission || {};
        if (link && !form.link.checkValidity()) { form.link.reportValidity(); return; }
        if (!link && !f && !prev.fileName) { status.textContent = "Add a link or a file first."; status.classList.add("is-error"); return; }
        var p = get();
        p.submission = { link: link, fileName: f ? f.name : prev.fileName || "", fileSize: f ? f.size : prev.fileSize || 0, note: form.note.value.trim(), at: new Date().toISOString() };
        p.steps[submitStep] = true;
        set(p);
        status.classList.remove("is-error");
        status.textContent = "Submitted " + new Date(p.submission.at).toLocaleString() + " (saved locally).";
        form.querySelector('button[type="submit"]').textContent = "Update submission";
      });
    }

    // YouTube: click-to-load privacy-friendly embed
    $all("[data-yt]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = document.createElement("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + btn.dataset.yt + "?autoplay=1&rel=0";
        f.title = btn.getAttribute("aria-label") || "Video";
        f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        f.allowFullscreen = true;
        f.className = "lx-embed lx-embed-frame";
        btn.replaceWith(f);
      });
    });

    // Active section highlight in tracker
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) $all("[data-track]").forEach(function (a) { a.classList.toggle("is-active", a.dataset.track === en.target.id); });
        });
      }, { rootMargin: "-35% 0px -55% 0px" });
      $all("[data-step]").forEach(function (s) { io.observe(s); });
    }

    refresh();
    if (location.hash) { var t = $(location.hash); if (t) setTimeout(function () { t.scrollIntoView(); }, 50); }
  }

  /* ——— Boot ——— */
  if (!requireUser()) return;
  header();
  bindTheme();
  var page = document.body.dataset.page;
  if (page === "login") pageLogin();
  else if (page === "dashboard") pageDashboard();
  else if (page === "course") pageCourse();
  else if (page === "module") pageModule();
})();
