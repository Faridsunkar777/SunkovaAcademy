# Sunkova Academy — feature-branch review and push

The current changes belong on `feat/nextjs-academy-revamp` in
`git@github.com:Faridsunkar777/SunkovaAcademy.git`. This handoff has NOT
pushed to GitHub.

For the existing local branch with the earlier Next.js migration and lint fix,
follow **[APPLY_TO_EXISTING_BRANCH.md](APPLY_TO_EXISTING_BRANCH.md)**.

After applying the patch:

```bash
cd ~/Work/SunkovaAcademy
npm install
npm run lint && npm run typecheck && npm test && npm run build
npm run dev
```

Review desktop, mobile, light/dark, scroll story, program links, contact, and
the demo learning portal. Then:

```bash
git status --short
git add -A
git commit -m "design: restore Academy identity and add restrained GSAP motion"
git push -u origin feat/nextjs-academy-revamp
```

Open a PR against `main` only after visual review. Do not merge the branch
merely because the build passes; inspect scroll, keyboard and reduced-motion
behavior in the browser.
