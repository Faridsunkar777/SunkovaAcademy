# Sunkova Academy: Learn (LMS shell v1)

This is a static learner area: HTML, CSS and vanilla JS. It has no build step and no backend, and it works from `python3 -m http.server` or straight from `file://`.

| File | Purpose |
|---|---|
| `login.html` | Mock sign-in (any email) + demo learner |
| `index.html` | My courses (dashboard) |
| `course.html?course=<slug>` | Course overview, course frame, schedule tabs, modules, capstone |
| `module.html?course=<slug>&module=01` | Full module page: Watch, Learn, Check, Challenge, Reflect, plus tracker, submission, badge |
| `module.html?course=<slug>&module=capstone` | Capstone: brief, milestones, deliverables, rubric, submission |
| `lesson.html` | Redirects to `module.html` (v1 has one lesson per module) |
| `learn.css` | LMS styles. Loads after `../css/main.css` and reuses its tokens, buttons and theme |
| `learn.js` | Theme, mock auth, localStorage progress, renderers, complete/next |
| `data/courses.js` | Learner catalogue (enrolment cards) |
| `data/*.js` | Course + module content generated from `content/**/*.md` via `scripts/md_to_course_js.py` |
| `LEARNER_FLOW.md` | Flow + storage keys |

Preview: `cd /workspace/sunkova-academy && python3 -m http.server 8080`, then open <http://localhost:8080/learn/login.html>.

## Plugging in Jaylen's content

Jaylen's markdown goes in `/workspace/sunkova-academy/content/ai-design/`, for example `01-ai-product-design-foundations.md`.

1. Open `learn/data/ai-product-design-foundations.js`.
2. Replace each `null` with Jaylen's text, using the mapping below. Text fields accept light Markdown: `**bold**`, `*italic*`, `` `code` ``, `[link](https://…)`, `-`/`1.` lists, `###` headings and `>` quotes. Use a JS template string (`` `…` ``) for multi-line notes.
3. Set the module's `status` from `"draft"` to `"published"`. This removes the "Skeleton" flag.
4. For modules 02–07, copy Module 01's `content: { … }` block into the module, fill it in, and change `status: "coming-soon"` to `"published"`.
5. Reload the page. Any slot still empty keeps showing a dashed orange **Slot** label, so gaps are easy to spot.

| Jaylen's markdown heading | Data key |
|---|---|
| Course overview: who for / prereqs / duration / format / outcomes / tools | `overview.whoFor`, `.prereqs`, `.duration`, `.format`, `.outcomes[]`, `.tools[]` |
| Big Idea / Essential Question / Course Challenge | `bigIdea`, `essentialQuestion`, `courseChallenge` |
| Live weekly plan | `weeklyPlan[]` → `{ week, focus, session, due }` |
| Self-paced hours + checkpoints | `modules[].hours`, `selfPaced.checkpoints[]` → `{ after, label }` |
| Module title / Essential Question / Objectives (3–5) | `modules[].title`, `content.essentialQuestion`, `content.objectives[]` |
| Watch (2–4 videos; readings tagged) | `content.watch[]` → `{ type: "video" or "reading", title, channel, url, length, why }`. YouTube URLs auto-embed and anything else opens as a link |
| Learn notes (400–800 words) | `content.notes` |
| Quick check (3–5 Q&A) | `content.quickCheck[]` → `{ q, a }` |
| Challenge | `content.challenge.{ scenario, build, deliverables[], constraints[], hints[], submissionFormat, rubric[], stretch }` |
| Rubric rows | `{ criterion, emerging, developing, proficient, exemplary }` |
| Reflect (2–3 prompts) | `content.reflect[]` |
| Capstone | `capstone.{ brief, milestones[] → { week, label }, deliverables[], rubric[] }` |

Arrays can grow or shrink. The UI renders as many videos, questions, rubric rows and prompts as you provide.

**New course:** add `data/<slug>.js` with the same shape, plus an entry in `data/courses.js`. `course.html?course=<slug>` loads it automatically.

## Not in v1 (needs a backend)

Real accounts, enrolment, file storage, facilitator grading, cross-device progress, and email notifications. The demo form saves only the link and file *name* locally.
