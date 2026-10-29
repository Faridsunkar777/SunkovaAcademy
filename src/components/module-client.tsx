"use client";
import {
  useState,
  type FormEvent,
  type CSSProperties,
  type SetStateAction,
} from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { learnerCourse, type CourseModule } from "@/lib/learning";
import { LearnerShell } from "./learner-shell";
import { Rubric } from "./rubric";
import {
  STEPS,
  readProgress,
  updateProgress,
  moduleHref,
  type ModuleProgress,
  type StepId,
} from "@/lib/progress";
import { useStoredProgress } from "@/lib/client-store";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Play,
  BookOpen,
  ExternalLink,
  BadgeCheck,
  Lock,
  RotateCcw,
} from "./icons";
const headings: Record<StepId, string> = {
  watch: "Watch & explore",
  learn: "Learn the ideas",
  check: "Check understanding",
  challenge: "The challenge",
  reflect: "Pause & reflect",
};
function Content({ value }: { value?: string | null }) {
  return value ? (
    <div className="learning-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children} <ExternalLink size={12} />
            </a>
          ),
        }}
      >
        {value}
      </ReactMarkdown>
    </div>
  ) : (
    <p className="empty-content">This section is being prepared.</p>
  );
}
function Items({ items }: { items?: string[] | null }) {
  return !!items?.length ? (
    <ul className="module-bullets">
      {items.map((x, i) => (
        <li key={i}>
          <Check size={15} />
          <span>
            <Content value={x} />
          </span>
        </li>
      ))}
    </ul>
  ) : (
    <p className="empty-content">Content coming soon.</p>
  );
}
function ProgressCircle({ done, total }: { done: number; total: number }) {
  return (
    <div
      className="progress-circle"
      style={
        { "--pct": `${Math.round((done / total) * 100)}%` } as CSSProperties
      }
    >
      <div>
        <strong>
          {done}/{total}
        </strong>
        <span>STEPS</span>
      </div>
    </div>
  );
}
export function ModuleClient({
  slug,
  moduleId,
}: {
  slug: string;
  moduleId: string;
}) {
  const course = learnerCourse(slug);
  const mod = course?.modules.find((m) => m.id === moduleId);
  const capstone = moduleId === "capstone" ? course?.capstone : null;
  const allProgress = useStoredProgress();
  const progress: ModuleProgress = allProgress[slug]?.[moduleId] || {};
  const [active, setActive] = useState<StepId>("watch");
  const [answers, setAnswers] = useState<number[]>([]);
  type Draft = {
    key: string;
    reflections?: string[];
    link?: string;
    note?: string;
    fileName?: string;
  };
  const key = `${slug}:${moduleId}`;
  const [draft, setDraft] = useState<Draft>({ key });
  const localDraft = draft.key === key ? draft : null;
  const reflections = localDraft?.reflections ?? progress.reflections ?? [];
  const submissionLink = localDraft?.link ?? progress.submission?.link ?? "";
  const submissionNote = localDraft?.note ?? progress.submission?.note ?? "";
  const fileName = localDraft?.fileName ?? progress.submission?.fileName ?? "";
  function updateDraft(patch: Partial<Draft>) {
    setDraft((prev) => ({ ...(prev.key === key ? prev : { key }), ...patch }));
  }
  function setReflections(value: SetStateAction<string[]>) {
    setDraft((prev) => {
      const base =
        prev.key === key
          ? (prev.reflections ?? progress.reflections ?? [])
          : (progress.reflections ?? []);
      return {
        ...(prev.key === key ? prev : { key }),
        reflections: typeof value === "function" ? value(base) : value,
      };
    });
  }
  function setSubmissionLink(value: string) {
    updateDraft({ link: value });
  }
  function setSubmissionNote(value: string) {
    updateDraft({ note: value });
  }
  function setFileName(value: string) {
    updateDraft({ fileName: value });
  }
  if (!course || (!mod && !capstone))
    return (
      <div className="site-width learner-error">
        Learning module not found. <Link href="/learn">Return to courses</Link>
      </div>
    );
  if (mod?.status === "coming-soon")
    return (
      <LearnerShell>
        <div className="site-width module-unavailable">
          <Lock size={28} />
          <h1>Opening soon.</h1>
          <p>This module is being prepared for learners.</p>
          <Link href={"/learn/course/" + slug} className="pill-button dark">
            Back to course <ArrowLeft size={16} />
          </Link>
        </div>
      </LearnerShell>
    );
  const done = STEPS.filter((s) => progress.steps?.[s]).length;
  const completed = done === 5;
  const idx = course.modules.findIndex((m) => m.id === moduleId);
  const next = course.modules
    .slice(idx + 1)
    .find((m) => m.status !== "coming-soon");
  const previous = idx > 0 ? course.modules[idx - 1] : null;
  function save(patch: Partial<ModuleProgress>) {
    updateProgress(slug, moduleId, patch);
  }
  function mark(step: StepId) {
    const steps = { ...progress.steps, [step]: true };
    const allDone = STEPS.every((s) => steps[s]);
    save({
      steps,
      completedAt: allDone ? new Date().toISOString() : progress.completedAt,
    });
    const n = STEPS.indexOf(step);
    if (n < STEPS.length - 1) setActive(STEPS[n + 1]);
  }
  function submitChallenge(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!submissionLink.trim() && !fileName.trim()) return;
    save({
      submission: {
        link: submissionLink.trim(),
        note: submissionNote,
        fileName,
        at: new Date().toISOString(),
      },
      steps: { challenge: true },
    });
    mark("challenge");
  }
  function saveReflection(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    save({ reflections, steps: { reflect: true } });
    mark("reflect");
  }
  function reset() {
    if (!window.confirm("Clear your progress for this module on this device?"))
      return;
    const all = readProgress();
    delete all[slug]?.[moduleId];
    localStorage.setItem("sunkova-learn-progress", JSON.stringify(all));
    window.dispatchEvent(new Event("sunkova-progress-change"));
    setDraft({ key, reflections: [], link: "", note: "", fileName: "" });
    setActive("watch");
    setAnswers([]);
  }
  const content: NonNullable<CourseModule["content"]> = mod?.content || {};
  const quickCheck = content.quickCheck || [];
  return (
    <LearnerShell>
      <div className="site-width module-wrap">
        <div className="module-breadcrumb">
          <Link href={"/learn/course/" + slug}>
            <ArrowLeft size={16} />
            {course.title}
          </Link>
          <span>/</span>
          <span>{capstone ? "Capstone" : "Module " + moduleId}</span>
        </div>
        <div className="module-heading">
          <span className="eyebrow">
            {course.category.toUpperCase()} /{" "}
            {capstone ? "FINAL PROJECT" : "MODULE " + moduleId}
          </span>
          <h1>
            {capstone
              ? "Capstone · " + (course.capstone?.title || "Final project")
              : mod?.title}
          </h1>
          <p>
            {capstone
              ? course.capstone?.summary
              : content.essentialQuestion || mod?.summary}
          </p>
        </div>
        {capstone ? (
          <div className="module-main">
            <div className="module-content">
              <section className="lesson-panel">
                <span className="eyebrow">YOUR FINAL PROJECT</span>
                <h2>The brief</h2>
                <Content value={capstone.brief} />
              </section>
              <section className="lesson-panel">
                <span className="eyebrow">ROADMAP</span>
                <h2>Milestones</h2>
                <div className="milestone-list">
                  {capstone.milestones?.map((m, i) => (
                    <div key={i}>
                      <span>{String(m.week ?? i + 1).padStart(2, "0")}</span>
                      <p>{m.label}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="lesson-panel">
                <span className="eyebrow">WHAT TO DELIVER</span>
                <h2>Deliverables</h2>
                <Items items={capstone.deliverables} />
              </section>
              <section className="lesson-panel">
                <span className="eyebrow">ASSESSMENT</span>
                <h2>The rubric</h2>
                <Rubric rows={capstone.rubric} />
              </section>
              <section className="lesson-panel">
                <span className="eyebrow">SUBMIT YOUR WORK</span>
                <h2>Ship your capstone.</h2>
                <p>
                  Your link and filename are saved on this device only. Nothing
                  is uploaded to a server.
                </p>
                <form
                  className="submission-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!submissionLink.trim() && !fileName.trim()) return;
                    save({
                      submission: {
                        link: submissionLink,
                        fileName,
                        note: submissionNote,
                        at: new Date().toISOString(),
                      },
                      completedAt: new Date().toISOString(),
                    });
                  }}
                >
                  <label>
                    Project link
                    <input
                      value={submissionLink}
                      type="url"
                      placeholder="https://…"
                      onChange={(e) => setSubmissionLink(e.target.value)}
                    />
                  </label>
                  <label>
                    Submission notes
                    <textarea
                      rows={3}
                      value={submissionNote}
                      onChange={(e) => setSubmissionNote(e.target.value)}
                    />
                  </label>
                  <label>
                    File name (optional)
                    <input
                      type="file"
                      onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name || "")
                      }
                    />
                  </label>
                  <button type="submit" className="pill-button dark">
                    Save submission locally <Check size={17} />
                  </button>
                </form>
                {progress.completedAt && (
                  <div className="module-completed">
                    <BadgeCheck size={25} /> Capstone marked complete in this
                    browser.
                  </div>
                )}
              </section>
            </div>
          </div>
        ) : (
          <div className="module-main">
            <aside className="module-sidebar">
              <div className="module-progress-card">
                <ProgressCircle done={done} total={5} />
                <strong>Your progress</strong>
                <p>Every step brings you closer to something worth sharing.</p>
              </div>
              <nav className="step-nav" aria-label="Module sections">
                {STEPS.map((s, i) => (
                  <button
                    key={s}
                    onClick={() => setActive(s)}
                    className={
                      (active === s ? "current " : "") +
                      (progress.steps?.[s] ? "is-done" : "")
                    }
                  >
                    <span>
                      {progress.steps?.[s] ? (
                        <Check size={15} />
                      ) : (
                        String(i + 1).padStart(2, "0")
                      )}
                    </span>
                    {headings[s]}
                  </button>
                ))}
              </nav>
              <button className="reset-progress" onClick={reset}>
                <RotateCcw size={15} /> Reset module progress
              </button>
            </aside>
            <div className="module-content">
              {completed && (
                <div className="module-completed">
                  <BadgeCheck size={29} />
                  <div>
                    <strong>Module completed.</strong>
                    <p>Nice work. Your progress is saved in this browser.</p>
                  </div>
                </div>
              )}
              <section className="lesson-panel">
                <span className="eyebrow">THE QUESTION</span>
                <h2>{content.essentialQuestion || "What will you build?"}</h2>
                <p>{mod?.summary}</p>
                <h3>By the end, you can…</h3>
                <Items items={content.objectives} />
              </section>
              <section className="lesson-panel step-panel" id="active-lesson">
                <div className="step-panel-header">
                  <span className="step-number">
                    {String(STEPS.indexOf(active) + 1).padStart(2, "0")} / 05
                  </span>
                  <h2>{headings[active]}</h2>
                  <span
                    className={
                      progress.steps?.[active]
                        ? "step-status done"
                        : "step-status"
                    }
                  >
                    {progress.steps?.[active] ? "COMPLETED" : "IN PROGRESS"}
                  </span>
                </div>
                {active === "watch" && (
                  <>
                    <p>
                      Explore the resources below, then mark this step complete.
                    </p>
                    <div className="resources">
                      {content.watch?.map((item, i) => (
                        <a
                          href={item.url || "#"}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resource"
                        >
                          <span className="resource-icon">
                            {item.type === "video" ? (
                              <Play size={19} />
                            ) : (
                              <BookOpen size={19} />
                            )}
                          </span>
                          <span>
                            <strong>{item.title || "Learning resource"}</strong>
                            <small>
                              {item.channel}{" "}
                              {item.length ? "· " + item.length : ""}
                            </small>
                            {item.why && <em>{item.why}</em>}
                          </span>
                          <ArrowUpRight size={18} />
                        </a>
                      ))}
                    </div>
                    <button
                      className="pill-button dark"
                      onClick={() => mark("watch")}
                    >
                      Mark as watched <Check size={17} />
                    </button>
                  </>
                )}
                {active === "learn" && (
                  <>
                    <Content value={content.notes} />
                    <button
                      className="pill-button dark"
                      onClick={() => mark("learn")}
                    >
                      Mark as read <Check size={17} />
                    </button>
                  </>
                )}
                {active === "check" && (
                  <>
                    <p>
                      Try answering each question yourself before revealing its
                      answer.
                    </p>
                    <div className="quiz-list">
                      {quickCheck.map((q, i) => (
                        <details
                          key={i}
                          onToggle={(e) => {
                            if (e.currentTarget.open)
                              setAnswers((old) =>
                                old.includes(i) ? old : [...old, i],
                              );
                          }}
                        >
                          <summary>
                            <span>{String(i + 1).padStart(2, "0")}</span>
                            {q.q}
                          </summary>
                          <Content value={q.a} />
                        </details>
                      ))}
                    </div>
                    <p className="lesson-hint">
                      {answers.length} of {quickCheck.length} answers opened
                    </p>
                    <button
                      className="pill-button dark"
                      onClick={() => mark("check")}
                    >
                      Complete quick check <Check size={17} />
                    </button>
                  </>
                )}
                {active === "challenge" && (
                  <>
                    <h3>Your brief</h3>
                    <Content value={content.challenge?.scenario} />
                    <h3>What to build</h3>
                    <Content value={content.challenge?.build} />
                    <h3>Deliverables</h3>
                    <Items items={content.challenge?.deliverables} />
                    {!!content.challenge?.constraints?.length && (
                      <>
                        <h3>Constraints</h3>
                        <Items items={content.challenge.constraints} />
                      </>
                    )}
                    {!!content.challenge?.hints?.length && (
                      <>
                        <h3>Hints</h3>
                        <Items items={content.challenge.hints} />
                      </>
                    )}
                    {content.challenge?.submissionFormat && (
                      <>
                        <h3>Submission format</h3>
                        <Content value={content.challenge.submissionFormat} />
                      </>
                    )}
                    {content.challenge?.stretch && (
                      <>
                        <h3>Stretch goal</h3>
                        <Content value={content.challenge.stretch} />
                      </>
                    )}
                    {!!content.challenge?.rubric?.length && (
                      <>
                        <h3>Assessment rubric</h3>
                        <Rubric rows={content.challenge.rubric} />
                      </>
                    )}
                    <h3>Save your submission</h3>
                    <p className="lesson-hint">
                      Demo: the link and selected filename stay in your browser.
                      Files are not uploaded.
                    </p>
                    <form
                      className="submission-form"
                      onSubmit={submitChallenge}
                    >
                      <label>
                        Project link
                        <input
                          type="url"
                          value={submissionLink}
                          onChange={(e) => setSubmissionLink(e.target.value)}
                          placeholder="https://your-project…"
                        />
                      </label>
                      <label>
                        File (filename only)
                        <input
                          type="file"
                          onChange={(e) =>
                            setFileName(e.target.files?.[0]?.name || "")
                          }
                        />
                      </label>
                      <label>
                        Optional notes
                        <textarea
                          rows={4}
                          value={submissionNote}
                          onChange={(e) => setSubmissionNote(e.target.value)}
                          placeholder="What did you make?"
                        />
                      </label>
                      <button
                        className="pill-button dark"
                        type="submit"
                        disabled={!submissionLink.trim() && !fileName.trim()}
                      >
                        Save submission <Check size={17} />
                      </button>
                    </form>
                  </>
                )}
                {active === "reflect" && (
                  <>
                    <p>
                      What changed in how you think? Capture it for your own
                      growth.
                    </p>
                    <form className="reflection-form" onSubmit={saveReflection}>
                      {(content.reflect || []).map((question, i) => (
                        <label key={i}>
                          <strong>{question}</strong>
                          <textarea
                            value={reflections[i] || ""}
                            onChange={(e) =>
                              setReflections((old) => {
                                const next = [...old];
                                next[i] = e.target.value;
                                return next;
                              })
                            }
                            rows={4}
                            placeholder="Your reflection…"
                          />
                        </label>
                      ))}
                      <button type="submit" className="pill-button dark">
                        Save reflections <Check size={17} />
                      </button>
                    </form>
                  </>
                )}
                <div className="lesson-step-controls">
                  <button
                    onClick={() =>
                      setActive(STEPS[Math.max(0, STEPS.indexOf(active) - 1)])
                    }
                    disabled={active === "watch"}
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() =>
                      setActive(STEPS[Math.min(4, STEPS.indexOf(active) + 1)])
                    }
                    disabled={active === "reflect"}
                  >
                    Next step →
                  </button>
                </div>
              </section>
            </div>
          </div>
        )}
        <div className="module-bottom-nav">
          {previous ? (
            <Link href={moduleHref(slug, previous.id)}>
              <ArrowLeft size={17} />
              <span>
                PREVIOUS MODULE
                <br />
                <strong>{previous.title}</strong>
              </span>
            </Link>
          ) : (
            <Link href={"/learn/course/" + slug}>
              <ArrowLeft size={17} />
              <span>
                BACK TO
                <br />
                <strong>Course overview</strong>
              </span>
            </Link>
          )}
          {next ? (
            <Link href={moduleHref(slug, next.id)}>
              <span>
                NEXT MODULE
                <br />
                <strong>{next.title}</strong>
              </span>
              <ArrowRight size={17} />
            </Link>
          ) : capstone ? null : course.capstone?.brief ? (
            <Link href={moduleHref(slug, "capstone")}>
              <span>
                YOUR FINAL PROJECT
                <br />
                <strong>Capstone</strong>
              </span>
              <ArrowRight size={17} />
            </Link>
          ) : (
            <Link href={"/learn/course/" + slug}>
              <span>
                BACK TO
                <br />
                <strong>Course overview</strong>
              </span>
              <ArrowRight size={17} />
            </Link>
          )}
        </div>
      </div>
    </LearnerShell>
  );
}
