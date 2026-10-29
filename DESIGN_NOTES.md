# Sunkova Academy — brand-led redesign

This is **not** a replica of Apple, Sana or Integrated Biosciences. It reuses the Academy's own visual language from the original `SunkovaAcademy-main.zip`, and applies reference patterns to the same content.

## Source of truth

- **Original static Academy**: headline, challenge-based positioning, color direction, image collage, futuristic product art, capsule navigation, mono labels, editorial serif, five categories and portfolio outcomes.
- **Sunkova Studio**: a studio that designs and builds practical digital systems, so Academy pages should sound like people who make products—not a generic EdTech marketing template.
- **Apple**: disciplined typography, decisive hierarchy, focus on one message per section, whitespace, clear actions.
- **Sana**: mixed-scale editorial cards, visual product storytelling, and readable typography. No copied imagery or copy.
- **Integrated Biosciences**: scroll-led chapter storytelling. The Academy chapter section uses native scroll with a sticky image, not scroll hijacking.

## New homepage sections

1. `brand-hero` — original `Learn to ship in the AI era` positioning and original hero artwork.
2. `brand-manifesto` — a short point of view instead of generic marketing numbers.
3. `BrandStory` — three chapters, sticky visual on desktop, inline images on mobile.
4. `brand-programs` — asymmetric 2+3 category deck using original images.
5. `brand-visual-statement` — deliberate, full-width interruption.
6. `brand-proof` — compact method/value cards without fabricated learner testimonials.
7. `brand-closing` — final CTA.

All original **five categories, 15 catalogue courses, 5 detailed curricula and 30 modules** remain in `src/data` and the learning routes.

## Motion contract

- `gsap` and `@gsap/react` are used in **client components only**.
- `BrandMotion`: entrance sequence, mild hero scroll parallax, one-time section reveals.
- `BrandStory`: `ScrollTrigger` updates the image while text scrolls naturally.
- `gsap.matchMedia()` and CSS respect `prefers-reduced-motion`. Mobile chapters show every image without depending on GSAP.
- No `ScrollSmoother`, no `ScrollToPlugin`, no mandatory page transitions, no forced wheel interception.

## Deployment

The project remains a static Next.js App Router export: `npm run build` generates `/out` for Cloudflare Pages. Configure **Next.js (Static HTML Export)** with build command `npm run build`, output `out`. Cloudflare Workers/vinext can be considered later for real authentication, server-side forms or progress storage.

`NEXT_PUBLIC_SITE_URL` in `.env.local` should be set to the intended public hostname to generate absolute Open Graph URLs. Default is `https://academy.sunkova.com` as a *placeholder only*; no domain ownership is assumed.

The learner portal is still a **browser-local demo**. It is not an authentication/authorization system and must not be presented as one. Contact inquiries currently open the visitor's email client and are not delivered to a backend.

## QA before publishing

```
npm install
npm run lint
npm run typecheck
npm test
npm run build
npm run dev
```

Review `/`, `/courses`, each category, `/about`, `/contact`, `/learn/login`, `/learn`, a course, and a module at mobile and desktop widths; test light/dark, hover/focus, reduced motion, menu, scroll chapters and saved local progress.

**Build verification:** this delivery passed content tests and TS/TSX syntax transpilation in the working environment, but full `npm install`, lint and Next build could not run because DNS access to the npm package registry was unavailable. Run the commands above before pushing the branch.
