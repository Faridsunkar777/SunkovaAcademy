"use client";

import { type FormEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CourseModule } from "@/lib/learning";
import { STEPS, type StepId, type ModuleProgress } from "@/lib/progress";
import { Eyebrow, Panel, PanelTitle } from "./shared";
import { stepHeadings } from "./module-sidebar";
import { WatchStep } from "./steps/watch-step";
import { LearnStep } from "./steps/learn-step";
import { CheckStep } from "./steps/check-step";
import { ChallengeStep } from "./steps/challenge-step";
import { ReflectionStep } from "./steps/reflection-step";

type Content = NonNullable<CourseModule["content"]>;

export function LessonStep({ active, content, progress, answers, onReveal, onMark, onChange, link, notes, fileName, onLink, onNotes, onFileName, onSubmitChallenge, reflections, onReflection, onSubmitReflection }: {
  active: StepId;
  content: Content;
  progress: ModuleProgress;
  answers: number[];
  onReveal: (index: number) => void;
  onMark: (step: StepId) => void;
  onChange: (step: StepId) => void;
  link: string;
  notes: string;
  fileName: string;
  onLink: (value: string) => void;
  onNotes: (value: string) => void;
  onFileName: (value: string) => void;
  onSubmitChallenge: (event: FormEvent<HTMLFormElement>) => void;
  reflections: string[];
  onReflection: (index: number, value: string) => void;
  onSubmitReflection: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const index = STEPS.indexOf(active);
  return (
    <Panel className="scroll-mt-28" >
      <div id="active-lesson" className="scroll-mt-28">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <Eyebrow>{String(index + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}</Eyebrow>
          <span className={`rounded-full border px-3 py-1.5 font-academy-mono text-[9px] tracking-[0.1em] ${progress.steps?.[active] ? "border-[#8B7BDB]/40 bg-[#EAE6FB] text-[#514585] dark:bg-[#403C52] dark:text-[#B6ABF1]" : "border-[#111115]/15 text-[#111115]/50 dark:border-white/20 dark:text-[#F5F5F7]/60"}`}>{progress.steps?.[active] ? "COMPLETED" : "IN PROGRESS"}</span>
        </div>
        <PanelTitle>{stepHeadings[active]}</PanelTitle>
        <div className="mt-7">
          {active === "watch" && <WatchStep resources={content.watch} onComplete={() => onMark("watch")} />}
          {active === "learn" && <LearnStep notes={content.notes} onComplete={() => onMark("learn")} />}
          {active === "check" && <CheckStep questions={content.quickCheck} answers={answers} onReveal={onReveal} onComplete={() => onMark("check")} />}
          {active === "challenge" && <ChallengeStep challenge={content.challenge} link={link} notes={notes} fileName={fileName} onLink={onLink} onNotes={onNotes} onFileName={onFileName} onSubmit={onSubmitChallenge} />}
          {active === "reflect" && <ReflectionStep questions={content.reflect} reflections={reflections} onChange={onReflection} onSubmit={onSubmitReflection} />}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#111115]/10 pt-5 dark:border-white/15">
          <button type="button" disabled={index === 0} onClick={() => onChange(STEPS[Math.max(0, index - 1)])} className="inline-flex min-h-11 items-center gap-2 text-[13px] font-medium transition-colors hover:text-[#6554A8] disabled:cursor-not-allowed disabled:opacity-30 dark:hover:text-[#B6ABF1]"><ArrowLeft size={16} /> Previous</button>
          <button type="button" disabled={index === STEPS.length - 1} onClick={() => onChange(STEPS[Math.min(STEPS.length - 1, index + 1)])} className="inline-flex min-h-11 items-center gap-2 text-[13px] font-medium transition-colors hover:text-[#6554A8] disabled:cursor-not-allowed disabled:opacity-30 dark:hover:text-[#B6ABF1]">Next step <ArrowRight size={16} /></button>
        </div>
      </div>
    </Panel>
  );
}
