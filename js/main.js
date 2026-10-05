/* Sunkova Academy — theme, chrome, motion, filters, contact */
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const isNested = root.dataset.depth === "1";
  const prefix = isNested ? "../" : "";
  const THEME_KEY = "sunkova-academy-theme";

  function svgArrow() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
  }

  function iconSun() {
    return `<svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;
  }

  function iconMoon() {
    return `<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z"/></svg>`;
  }

  function preferredTheme() {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "light" || stored === "dark") return stored;
    } catch (_) {}
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme, persist) {
    const next = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "light" ? "#f5f5f7" : "#000000");
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", next === "light" ? "Switch to dark mode" : "Switch to light mode");
      btn.setAttribute("aria-pressed", next === "light" ? "true" : "false");
    });
    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (_) {}
    }
  }

  function setupTheme() {
    applyTheme(root.getAttribute("data-theme") || preferredTheme(), false);
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cur = root.getAttribute("data-theme") === "light" ? "light" : "dark";
        applyTheme(cur === "light" ? "dark" : "light", true);
      });
    });
    try {
      window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
        let stored = null;
        try {
          stored = localStorage.getItem(THEME_KEY);
        } catch (_) {}
        if (!stored) applyTheme(e.matches ? "light" : "dark", false);
      });
    } catch (_) {}
  }

  function currentPath() {
    const path = (location.pathname || "").replace(/\\/g, "/");
    const parts = path.split("/").filter(Boolean);
    return parts[parts.length - 1] || "index.html";
  }

  function markCurrent(link, file) {
    const href = link.getAttribute("href") || "";
    const end = href.split("/").pop();
    if (end === file || (file === "index.html" && (end === "" || end === "index.html"))) {
      link.setAttribute("aria-current", "page");
    }
  }

  function brandMarkup(homeHref) {
    return `
      <a class="brand" href="${homeHref}" aria-label="Sunkova Academy home">
        <img class="brand-logo brand-logo-dark" src="${prefix}assets/brand/logo-academy-on-dark.png" alt="Sunkova Academy" width="220" height="32" decoding="async" />
        <img class="brand-logo brand-logo-light" src="${prefix}assets/brand/logo-academy-on-light.png" alt="" width="220" height="32" decoding="async" />
      </a>`;
  }

  function injectChrome() {
    const headerHost = document.getElementById("site-header");
    const footerHost = document.getElementById("site-footer");
    if (!headerHost && !footerHost) return;

    const file = currentPath();
    const navItems = [
      { href: `${prefix}courses.html`, label: "Courses", match: "courses.html" },
      { href: `${prefix}about.html`, label: "About", match: "about.html" },
      { href: `${prefix}contact.html`, label: "Contact", match: "contact.html" },
      { href: `${prefix}learn/login.html`, label: "Start learning", match: "learn" },
    ];

    if (headerHost) {
      headerHost.innerHTML = `
        <div class="header-shell">
          ${brandMarkup(`${prefix}index.html`)}
          <nav class="nav" aria-label="Primary">
            ${navItems
              .map((n) => `<a href="${n.href}" data-match="${n.match || ""}">${n.label}</a>`)
              .join("")}
          </nav>
          <div class="header-actions">
            <button class="theme-toggle" type="button" data-theme-toggle aria-pressed="false" aria-label="Switch to light mode">
              ${iconSun()}${iconMoon()}
            </button>
            <a class="btn btn-solid nav-cta" href="${prefix}contact.html">Join waitlist</a>
            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
              <span></span>
            </button>
          </div>
        </div>
        <div class="mobile-nav" id="mobile-nav" hidden>
          ${navItems
            .map((n) => `<a href="${n.href}" data-match="${n.match || ""}">${n.label}</a>`)
            .join("")}
          <a class="btn btn-solid mobile-nav-cta" href="${prefix}contact.html">Join waitlist</a>
        </div>
      `;

      const onCategoryPage = /^(ai-|mobile-|3d-)/.test(file);
      headerHost.querySelectorAll("a[data-match]").forEach((a) => {
        const match = a.getAttribute("data-match");
        if (match && match === file) a.setAttribute("aria-current", "page");
        else if (onCategoryPage && match === "courses.html") a.setAttribute("aria-current", "page");
      });

      const toggle = headerHost.querySelector(".menu-toggle");
      const mobile = headerHost.querySelector(".mobile-nav");
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
        mobile.hidden = open;
        mobile.classList.toggle("is-open", !open);
        document.body.style.overflow = open ? "" : "hidden";
      });
      mobile.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open menu");
          mobile.classList.remove("is-open");
          mobile.hidden = true;
          document.body.style.overflow = "";
        })
      );
    }

    if (footerHost) {
      footerHost.innerHTML = `
        <div class="container footer-grid">
          <div class="footer-brand">
            ${brandMarkup(`${prefix}index.html`)}
            <p>Challenge-based learning for career switchers and beginners who want to ship — not just study.</p>
          </div>
          <div class="footer-col">
            <h4>Learn</h4>
            <a href="${prefix}courses.html">All courses</a>
            <a href="${prefix}courses/ai-design.html">AI Design</a>
            <a href="${prefix}courses/mobile-applications.html">Mobile Applications</a>
            <a href="${prefix}courses/ai-security.html">AI Security</a>
            <a href="${prefix}courses/ai-engineering.html">AI Engineering</a>
            <a href="${prefix}courses/3d-animation.html">3-D Animation</a>
          </div>
          <div class="footer-col">
            <h4>Academy</h4>
            <a href="${prefix}about.html">About</a>
            <a href="${prefix}contact.html">Contact</a>
            <a href="${prefix}learn/login.html">Start learning</a>
            <a href="${prefix}index.html#how">How it works</a>
            <a href="${prefix}index.html#formats">Live &amp; self-paced</a>
          </div>
          <div class="footer-col">
            <h4>Studio</h4>
            <a href="https://sunkova.com" target="_blank" rel="noopener">sunkova.com</a>
            <a href="mailto:hello@sunkova.com">hello@sunkova.com</a>
            <a href="${prefix}contact.html">Nairobi, Kenya — Global</a>
          </div>
        </div>
        <div class="container footer-bottom">
          <span>© ${new Date().getFullYear()} Sunkova. All rights reserved.</span>
          <span>Built as a sibling brand to the Sunkova studio.</span>
        </div>
      `;
    }
  }

  function headerScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupReveals() {
    const items = [
      ...document.querySelectorAll("[data-reveal]"),
      ...document.querySelectorAll("[data-reveal-stagger]"),
    ];
    if (!items.length) return;
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-inview"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  }

  function setupMotion() {
    if (reduced) return;

    let lenis = null;
    if (window.Lenis) {
      lenis = new window.Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      window.__sunkovaLenis = lenis;
    }

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      }

      document.querySelectorAll("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: Number(el.dataset.parallax) || 12,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      document.querySelectorAll(".hero-float, .hero-frame-main").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -12 : 10,
          duration: 3.2 + i * 0.4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });
    }
  }

  function setupFilters() {
    const buttons = document.querySelectorAll("[data-filter]");
    const chapters = document.querySelectorAll("[data-category-group]");
    const cards = document.querySelectorAll("#course-catalogue [data-category], .course-grid [data-category]");
    const empty = document.getElementById("courses-empty");
    if (!buttons.length) return;
    if (!chapters.length && !cards.length) return;

    const params = new URLSearchParams(location.search);
    const initial = params.get("category") || params.get("track") || "all";

    function apply(filter) {
      buttons.forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.filter === filter);
      });
      let visible = 0;
      if (chapters.length) {
        chapters.forEach((ch) => {
          const show = filter === "all" || ch.dataset.categoryGroup === filter;
          ch.classList.toggle("is-hidden", !show);
          if (show) visible += 1;
        });
      } else {
        cards.forEach((card) => {
          const show = filter === "all" || card.dataset.category === filter;
          card.classList.toggle("is-hidden", !show);
          if (show) visible += 1;
        });
      }
      if (empty) empty.hidden = visible > 0;

      const url = new URL(location.href);
      url.searchParams.delete("track");
      if (filter === "all") url.searchParams.delete("category");
      else url.searchParams.set("category", filter);
      history.replaceState({}, "", url);
    }

    buttons.forEach((btn) =>
      btn.addEventListener("click", () => apply(btn.dataset.filter))
    );
    apply(
      [...buttons].some((b) => b.dataset.filter === initial) ? initial : "all"
    );
  }

  function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const success = document.getElementById("form-success");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const interest = String(data.get("category") || data.get("interest") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !message) {
        form.reportValidity();
        return;
      }

      const subject = encodeURIComponent(`Academy enquiry — ${interest || "General"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nInterest: ${interest || "General"}\n\n${message}`
      );

      if (success) {
        success.classList.add("is-visible");
        success.textContent =
          "Demo form — opening your mail client to hello@sunkova.com. Nothing was submitted to a server.";
      }

      window.location.href = `mailto:hello@sunkova.com?subject=${subject}&body=${body}`;
    });
  }

  injectChrome();
  setupTheme();
  headerScroll();
  setupReveals();
  setupFilters();
  setupContactForm();

  if (document.readyState === "complete") setupMotion();
  else window.addEventListener("load", setupMotion);
})();
