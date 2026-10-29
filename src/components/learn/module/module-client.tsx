"use client";

import { useState, type FormEvent, type SetStateAction } from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { learnerCourse, type CourseModule } from "@/lib/learning";
import { LearnerShell } from "@/components/learn/learner-shell";
import {
  STEPS, readProgress, updateProgress, moduleHref,
  type ModuleProgress, type StepId,
} from "@/lib/progress";
import { useStoredProgress } from "@/lib/client-store";
import { Container } from "@/components/learn/shared";
import { CapstoneView } from "./capstone-view";
import { LessonIntro } from "./lesson-intro";
import { LessonStep } from "./lesson-step";
import { ModuleHeader } from "./module-header";
import { ModuleNavigation, type ModuleNavItem } from "./module-navigation";
import { ModuleSidebar } from "./module-sidebar";
import { CompletedNotice, primaryButton, secondaryText } from "./shared";

type Draft = {
  key: string;
  reflections?: string[];
  link?: string;
  note?: string;
  fileName?: string;
};

/** Keeps demo progress writes in one place; the UI is split into reusable components. */
export function ModuleClient({ slug, moduleId }: { slug: string; moduleId: string }) {
  const course = learnerCourse(slug);
  const mod = course?.modules.find((item) => item.id === moduleId);
  const capstone = moduleId === "capstone" ? course?.capstone : null;
  const allProgress = useStoredProgress();
  const progress: ModuleProgress = allProgress[slug]?.[moduleId] || {};
  const [active, setActive] = useState<StepId>("watch");
  const [answers, setAnswers] = useState<number[]>([]);
  const key = `${slug}:${moduleId}`;
  const [draft, setDraft] = useState<Draft>({ key });
  const localDraft = draft.key === key ? draft : null;
  const reflections = localDraft?.reflections ?? progress.reflections ?? [];
  const submissionLink = localDraft?.link ?? progress.submission?.link ?? "";
  const submissionNote = localDraft?.note ?? progress.submission?.note ?? "";
  const fileName = localDraft?.fileName ?? progress.submission?.fileName ?? "";

  function updateDraft(patch: Partial<Draft>) {
    setDraft((previous) => ({ ...(previous.key === key ? previous : { key }), ...patch }));
  }

  function updateReflections(value: SetStateAction<string[]>) {
    setDraft((previous) => {
      const base = previous.key === key ? previous.reflections ?? progress.reflections ?? [] : progress.reflections ?? [];
      return { ...(previous.key === key ? previous : { key }), reflections: typeof value === "function" ? value(base) : value };
    });
  }

  function save(patch: Partial<ModuleProgress>) {
    updateProgress(slug, moduleId, patch);
  }

  function mark(step: StepId, extra?: Partial<ModuleProgress>) {
    const steps = { ...progress.steps, [step]: true };
    save({ ...extra, steps, completedAt: STEPS.every((item) => steps[item]) ? new Date().toISOString() : progress.completedAt });
    const index = STEPS.indexOf(step);
    if (index < STEPS.length - 1) setActive(STEPS[index + 1]);
  }

  function submitChallenge(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!submissionLink.trim() && !fileName.trim()) return;
    mark("challenge", { submission: { link: submissionLink.trim(), fileName, note: submissionNote, at: new Date().toISOString() } });
  }

  function saveReflection(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mark("reflect", { reflections });
  }

  function saveCapstone(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!submissionLink.trim() && !fileName.trim()) return;
    save({ submission: { link: submissionLink.trim(), fileName, note: submissionNote, at: new Date().toISOString() }, completedAt: new Date().toISOString() });
  }

  function reset() {
    if (!window.confirm("Clear your progress for this module on this device?")) return;
    const all = readProgress();
    if (all[slug]) delete all[slug][moduleId];
    localStorage.setItem("sunkova-learn-progress", JSON.stringify(all));
    window.dispatchEvent(new Event("sunkova-progress-change"));
    setDraft({ key, reflections: [], link: "", note: "", fileName: "" });
    setActive("watch");
    setAnswers([]);
  }

  if (!course || (!mod && !capstone)) {
    return <div className="min-h-[40svh] bg-[#F5F5F7] px-5 pt-32 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7]"><p>Learning module not found.</p><Link href="/learn" className="mt-3 inline-block text-[#6554A8] underline dark:text-[#B6ABF1]">Return to courses</Link></div>;
  }

  if (mod?.status === "coming-soon") {
    return <LearnerShell><Container><div className="mx-auto max-w-[600px] py-20 text-center"><Lock className="mx-auto text-[#8B7BDB]" size={34} /><h1 className="mt-6 font-academy text-[clamp(2.7rem,8vw,4.5rem)] font-normal tracking-[-0.06em]">Opening soon.</h1><p className={`mt-4 text-[15px] ${secondaryText}`}>This module is being prepared for learners.</p><Link href={`/learn/course/${slug}`} className={`${primaryButton} mt-8`}><ArrowLeft size={17} /> Back to course</Link></div></Container></LearnerShell>;
  }

  const isCapstone = Boolean(capstone);
  const content: NonNullable<CourseModule["content"]> = mod?.content || {};
  const completed = STEPS.every((step) => progress.steps?.[step]);
  const index = course.modules.findIndex((item) => item.id === moduleId);
  const previous = isCapstone
    ? [...course.modules].reverse().find((item) => item.status !== "coming-soon")
    : index > 0 ? course.modules[index - 1] : null;
  const next = !isCapstone ? course.modules.slice(index + 1).find((item) => item.status !== "coming-soon") : null;

  const previousNav: ModuleNavItem = previous
    ? { href: moduleHref(slug, previous.id), eyebrow: "PREVIOUS MODULE", title: previous.title }
    : { href: `/learn/course/${slug}`, eyebrow: "BACK TO", title: "Course overview" };
  const nextNav: ModuleNavItem | null = next
    ? { href: moduleHref(slug, next.id), eyebrow: "NEXT MODULE", title: next.title }
    : !isCapstone && course.capstone?.brief
      ? { href: moduleHref(slug, "capstone"), eyebrow: "YOUR FINAL PROJECT", title: "Capstone" }
      : !isCapstone ? { href: `/learn/course/${slug}`, eyebrow: "BACK TO", title: "Course overview" } : null;

  return (
    <LearnerShell>
      <Container>
        <ModuleHeader slug={slug} courseTitle={course.title} category={course.category} moduleId={moduleId} title={isCapstone ? `Capstone · ${capstone?.title || "Final project"}` : mod?.title || "Module"} summary={isCapstone ? capstone?.summary : content.essentialQuestion || mod?.summary} isCapstone={isCapstone} />
        {capstone ? (
          <CapstoneView capstone={capstone} completed={Boolean(progress.completedAt)} link={submissionLink} notes={submissionNote} fileName={fileName} onLink={(value) => updateDraft({ link: value })} onNotes={(value) => updateDraft({ note: value })} onFileName={(value) => updateDraft({ fileName: value })} onSubmit={saveCapstone} />
        ) : (
          <div className="grid min-w-0 gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-8">
            <ModuleSidebar active={active} progress={progress} onChange={setActive} onReset={reset} />
            <div className="min-w-0 space-y-5">
              {completed && <CompletedNotice><strong className="block">Module completed.</strong><p>Your progress is saved in this browser.</p></CompletedNotice>}
              <LessonIntro content={content} summary={mod?.summary} />
              <LessonStep
                active={active} content={content} progress={progress} answers={answers}
                onReveal={(question) => setAnswers((previous) => previous.includes(question) ? previous : [...previous, question])}
                onMark={mark} onChange={setActive}
                link={submissionLink} notes={submissionNote} fileName={fileName}
                onLink={(value) => updateDraft({ link: value })}
                onNotes={(value) => updateDraft({ note: value })}
                onFileName={(value) => updateDraft({ fileName: value })}
                onSubmitChallenge={submitChallenge}
                reflections={reflections}
                onReflection={(question, value) => updateReflections((previous) => { const nextValues = [...previous]; nextValues[question] = value; return nextValues; })}
                onSubmitReflection={saveReflection}
              />
            </div>
          </div>
        )}
        <ModuleNavigation previous={previousNav} next={nextNav} />
      </Container>
    </LearnerShell>
  );
}
