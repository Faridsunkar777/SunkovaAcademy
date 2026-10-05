# Sunkova Academy — static marketing site

Sibling brand site for **Sunkova Academy** (education arm of [sunkova.com](https://sunkova.com)). Cinematic product UI with dark + light themes, premium frosted nav, Academy brand lockup, challenge-based course IA, live + self-paced formats.

## Preview locally

From this folder:

```bash
cd /workspace/sunkova-academy
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

Or open `index.html` directly in a browser (CDN scripts for Lenis/GSAP and Google Fonts need network).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — product hero, course categories, bento, formats, featured courses, method, CTA |
| `courses.html` | Full catalogue with category filters (`?category=ai-design` etc.) |
| `courses/*.html` | Five category detail pages with media heroes |
| `about.html` | Mission for beginners / career switchers |
| `contact.html` | Mailto demo form + `hello@sunkova.com` |
| `learn/` | **Learner area (LMS shell v1)**: login, My courses, course, module pages. See `learn/README.md` |
| `content/` | Drop zone for Jaylen's course markdown (`content/ai-design/…`) |
| `css/main.css` | Shared design system |
| `js/main.js` | Nav/footer inject, Lenis/GSAP, filters, form |
| `assets/brand/` | Academy logos (PNG/SVG), favicon, apple-touch, previews |
| `assets/logo.svg` | Hexagon-S mark (currentColor) |
| `assets/images/*.webp` | Local Unsplash-sourced WebP imagery |

## Learn (LMS shell)

"Start learning" in the nav and footer goes to `learn/login.html`. From there the learner goes to My courses, then the course page, then the module page (Watch, Learn, Check, Challenge, Reflect), where they get a completion badge. Auth and progress are mocked in `localStorage`. The flow is in `learn/LEARNER_FLOW.md`.

**Content pipeline.** Course markdown in `content/ai-design/` and `content/ai-engineering/` is parsed into `learn/data/<slug>.js` by `scripts/md_to_course_js.py`. The LMS catalogue uses **Category** (not Track) labels from that content.

## Design notes

- Palette and type cues aligned with sunkova.com: `#000` / `#1d1d1f`, `#f5f5f7` / `#d2d2d7`, accents `#0071e3` / `#f54900`
- Full light + dark themes via `data-theme` CSS variables; preference in `localStorage` (`sunkova-academy-theme`), default from `prefers-color-scheme`
- Theme toggle in the floating frosted-glass nav (sun/moon); logos swap per theme
- Academy lockup in `assets/brand/`: hexagon-S + SUNKOVA + ACADEMY (divider + stacked variants, PNG + SVG)
- Inter + Instrument Serif + IBM Plex Mono
- Premium editorial layout: cinematic numbered category rows, studio bento, catalogue chapters — not dense SaaS card grids
- Motion via Lenis + GSAP ScrollTrigger; respects `prefers-reduced-motion`
- Imagery downloaded into `assets/images/` (WebP, typically under ~200KB each) — not hotlinked

## Zip

`sunkova-academy-full.zip` is the complete shippable site (marketing + learn + assets + content md). `sunkova-academy.zip` / slim zip omit heavy reference dumps and preview PNGs where noted.
