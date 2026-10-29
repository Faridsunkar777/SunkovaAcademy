# Apply this brand revamp to your existing Academy feature branch

Your current repository contains the **earlier Next.js migration**, with its lint fix and `Theme` type fix applied. This patch is specifically based on that state; it is not meant for the original static-only repo or `main`.

1. Download `SunkovaAcademy-brand-revamp.patch` to `~/Downloads/`.
2. In Terminal:

```bash
cd ~/Work/SunkovaAcademy
git switch feat/nextjs-academy-revamp
git status --short
git apply --check ~/Downloads/SunkovaAcademy-brand-revamp.patch
git apply ~/Downloads/SunkovaAcademy-brand-revamp.patch
npm install
npm run lint
npm run typecheck
npm test
npm run build
npm run dev
```

If `git apply --check` fails, **do not force it**; capture the output for review. Do not run the old migration `rsync --delete` instructions again.

3. In a browser check desktop/mobile, `/#programs`, `/courses`, category detail pages, `/about`, `/contact` and demo learner routes. Turn on reduced motion to verify the experience still works.
4. After all checks pass:

```bash
git add -A
git commit -m "design: restore Academy identity and add restrained GSAP motion"
git push -u origin feat/nextjs-academy-revamp
```

No GitHub push is made by this handoff. Do not merge `main` until you are satisfied with the review.

If you prefer a full replacement, the ZIP contains the complete project, but the patch is safer for your existing migration branch.
