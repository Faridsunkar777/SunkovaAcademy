# Sunkova Academy Learn: learner flow (v1)

This is a static LMS shell with mock auth and progress. Everything is stored in the learner's browser (`localStorage`). There is no backend.

## Flow

```
Marketing site ── "Start learning" (nav + footer) ──▶ learn/login.html
        │
        ▼
login.html ── email sign-in (any email) or "Continue as demo learner"
        │      stores sunkova-learn-user · honours ?next=
        ▼
index.html  (My courses)
   • enrolled course card: progress %, "Start course" / "Continue" (→ next unfinished module)
   • "Opening soon" courses → Join waitlist
        │
        ▼
course.html?course=ai-product-design-foundations
   • Overview: who it's for · prereqs · duration · format · outcomes · tools
   • Course frame: Big Idea · Essential Question · Course Challenge
   • Schedule tabs: Live (weekly plan) | Self-paced (hours/module + checkpoints)
   • Module list with status (not started · x/5 steps · complete · coming soon) + Capstone
        │
        ▼
module.html?course=…&module=01   (module page = the full lesson page in v1)
   Header: title · Essential Question · 3–5 objectives
   Progress tracker (sticky chips on mobile, sidebar on desktop):
     01 Watch      2–4 videos/readings (YouTube click-to-embed or external link) → "Mark watched"
     02 Learn      notes (400–800 words)                                          → "Mark as read"
     03 Check      3–5 accordion Qs, answers hidden; opening all ticks the step automatically
     04 Challenge  scenario · build · deliverables · constraints · hints ·
                   submission format · rubric (Emerging→Exemplary) · stretch
                   Submission form (link + file) → ticks Challenge
     05 Reflect    2–3 prompts (autosaved) → "Save reflection"
   Finish line: "Complete module" unlocks at 5/5 → completion badge → "Next: Module 02"
   Pager: previous / next module
        │
        ▼
module.html?course=…&module=capstone
   Brief → weekly milestones → deliverables + rubric + submission → "Capstone shipped" badge
```

## Rules

- **Auth guard:** `index`, `course`, and `module` redirect to `login.html?next=…` when no one is signed in. Sign out from the avatar button.
- **Module states:** `draft` shows the skeleton with slots, `published` shows real content, and `coming-soon` shows a locked row and a "Coming soon" page.
- **Course %:** each module and the capstone count as one unit. Partial steps count proportionally.
- **Theme:** light/dark toggle shared with the marketing site (`sunkova-academy-theme`).
- **`lesson.html`** redirects to `module.html` with the same query string. It is reserved for a future version with several lessons per module.

## Storage keys

| Key | Shape |
|---|---|
| `sunkova-learn-user` | `{ email, name, signedInAt }` |
| `sunkova-learn-progress` | `{ [course]: { [moduleId]: { steps:{watch,learn,check,challenge,reflect}, submission:{link,fileName,fileSize,note,at}, reflections:[…], completedAt } } }` |
| `sunkova-academy-theme` | `"light"` / `"dark"` |

Reset everything: run `localStorage.clear()` in the browser console. To reset one module, use the "Reset progress" button on its badge.
