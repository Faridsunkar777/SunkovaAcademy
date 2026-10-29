# Sunkova Academy — Tailwind v4 + navigation logo repair

This is an **incremental** Tailwind integration, not a rewrite of every existing page.
The source baseline is the earlier hero/nav patch **plus the user's supplied `nav.tsx`**.

## Changes

- Adds Tailwind v4 with `@tailwindcss/postcss` and `postcss`.
- Imports Tailwind's **theme and utilities only**; deliberately avoids Preflight to preserve all existing legacy page styles.
- Converts **navigation only** to Tailwind utility classes, removing the conflicting `.wordmark` and `.brand-logo-*` selectors from this component.
- Uses your existing `black-logo.png`, not a generated logo. A `fill` image in a 28px-high responsive wrapper keeps the aspect ratio (`object-contain`) and uses one asset in both themes, inverted for the dark theme.
- Does not modify course content, the rest of the homepage, or your media files.
- Leaves `og-sunkova.png` untouched: it is intended for social sharing, not the navigation bar.

## Important: image location

Next.js serves `/assets/brand/black-logo.png` **only** from `public/assets/brand/black-logo.png`.
If the image currently lives in the repository root `assets/brand/`, move or copy it to `public/assets/brand/`. Preserve your own original files.

```bash
cd ~/Work/SunkovaAcademy
if [ ! -f public/assets/brand/black-logo.png ] && [ -f assets/brand/black-logo.png ]; then
  mkdir -p public/assets/brand
  cp assets/brand/black-logo.png public/assets/brand/black-logo.png
fi
ls -lh public/assets/brand/black-logo.png
```

If the file isn't at either location, locate it before proceeding — don't deploy with a broken image path.

## Apply

1. Save `SunkovaAcademy-tailwind-navbar-fix.patch` to `~/Downloads`.
2. In the existing branch (do not create another branch):

```bash
cd ~/Work/SunkovaAcademy
git switch feat/nextjs-academy-revamp
git diff -- src/components/nav.tsx > ~/Downloads/academy-nav-personal-backup.patch
cp src/components/nav.tsx ~/Downloads/academy-nav-personal-backup.tsx
git apply --check ~/Downloads/SunkovaAcademy-tailwind-navbar-fix.patch
git apply ~/Downloads/SunkovaAcademy-tailwind-navbar-fix.patch
npm install
npm run typecheck
npm run lint
npm test
npm run build
npm run dev
```

If `git apply --check` fails, **do not use `--force`, `git reset --hard`, or `rsync --delete`**. The live branch differs from the provided nav source: compare and resolve before continuing.

For the layout, note that Tailwind's default Preflight reset is intentionally not included. The rest of the existing CSS remains for subsequent section-by-section conversion. If the logo still appears tiny after this patch, check whether `black-logo.png` itself contains large transparent margins; CSS cannot remove margins baked into an image.
