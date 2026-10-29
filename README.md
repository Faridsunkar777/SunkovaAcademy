# Sunkova Academy — Lesson module refactor

This archive replaces the **legacy 680-line `src/components/module-client.tsx`** with a modular Tailwind v4 lesson interface under `src/components/learn/module/`.

## Installation

1. Back up your current working tree / commit the active feature branch.
2. Download the ZIP into `~/Downloads` and extract into the repository root:

   ```bash
   cd ~/Work/SunkovaAcademy
   git status --short
   unzip -o ~/Downloads/SunkovaAcademy-module-refactor.zip -d .
   ```

3. Validate using your project's installed dependencies:

   ```bash
   npm run typecheck
   npm run lint
   npm run build
   npm run dev
   ```

4. Check `/learn/course/ai-product-design-foundations/module/01/` and a capstone URL, plus mobile and both color themes.

## Files

```text
src/components/
  module-client.tsx                    # backwards-compatible re-export
  learn/
    module-theme.tsx                  # route adapter; no legacy CSS selectors
    module/
      module-client.tsx               # progression/drafts controller
      module-header.tsx               # page heading and breadcrumbs
      module-sidebar.tsx              # sticky progress + section navigation
      lesson-intro.tsx                # essential question and objectives
      lesson-step.tsx                 # current step and prev/next controls
      submission-form.tsx             # browser-local submission form
      module-rubric.tsx               # responsive rubric table
      module-navigation.tsx           # adjacent modules/capstone links
      capstone-view.tsx               # brief, milestones, rubric, submission
      shared.tsx                      # Tailwind UI + Markdown rendering
      steps/
        watch-step.tsx                # learning resource links
        learn-step.tsx                # notes/markdown
        check-step.tsx                # expandable Q&A
        challenge-step.tsx            # brief + local submission
        reflection-step.tsx           # reflections
```

## Compatibility and behavior

- Existing module route `src/app/learn/course/[slug]/module/[moduleId]/page.tsx` can remain unchanged. It already calls `LearnModuleTheme`.
- `src/components/module-client.tsx` remains an export shim. Do not remove it if another route still imports it.
- Existing progress helpers from `@/lib/progress`, content from `@/lib/learning` and the demo `LearnerShell` stay in place.
- All five steps, question reveal counts, local progress reset, step completion, reflection drafts, challenge submissions, capstone completion and prev/next links are preserved.
- Submission still stores only a URL, notes, and filename in **localStorage**. It does not upload files or authenticate users on a server.
- The design uses the Sunkova Academy palette (#111115 / #F5F5F7 / #8B7BDB / #EAE6FB), responsive cards, fixed-width desktop sidebar and dark mode.
- `module-rubric.tsx` is a Tailwind replacement for the older `.rubric` styling **within these module screens only**. Keep `src/components/rubric.tsx` until you have checked other imports.
- No modifications to `globals.css` or `brand.css`; no new npm dependencies.

## Manual regression checklist

- [ ] `/learn/login` -> module direct link respects the demo sign-in guard.
- [ ] Mobile 375px/390px: no horizontal page scroll; sidebar steps stack above lesson content; forms work.
- [ ] Desktop: sidebar stays sticky, right content remains scrollable.
- [ ] Mark watch/learn/check, submit challenge, save reflections; progress and done states update.
- [ ] Reload page: saved progress/submission/reflections remain.
- [ ] Reset clears only this module's progress.
- [ ] Quiz answer `<details>` open/close works; counts increase once per unique answer.
- [ ] Capstone: milestones, rubric, local completion and navigation work.
- [ ] Coming-soon modules are not accessible.
- [ ] Dark mode: panel backgrounds and input/CTA contrast are readable.
- [ ] No reduce-motion regressions.

## Validation status

The 17 TSX files were parsed successfully using TypeScript's `transpileModule` API with **zero syntax diagnostics**. Full Next.js type checking, ESLint and integration checks must be run in your actual project after installation; they have not been claimed as complete here.
