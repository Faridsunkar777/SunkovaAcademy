"use client";

import { Check, RotateCcw } from "lucide-react";
import { STEPS, type StepId, type ModuleProgress } from "@/lib/progress";
import { cardSurface, monoLabel, secondaryText } from "./shared";

export const stepHeadings: Record<StepId, string> = {
  watch: "Watch & explore",
  learn: "Learn the ideas",
  check: "Check understanding",
  challenge: "The challenge",
  reflect: "Pause & reflect",
};

export function ModuleSidebar({ active, progress, onChange, onReset }: {
  active: StepId;
  progress: ModuleProgress;
  onChange: (step: StepId) => void;
  onReset: () => void;
}) {
  const done = STEPS.filter((step) => progress.steps?.[step]).length;
  const percent = Math.round((done / STEPS.length) * 100);
  return (
    <aside className="min-w-0 lg:sticky lg:top-28">
      <div className={`${cardSurface} p-5! sm:p-6!`}>
        <div className="flex items-center justify-between gap-3">
          <span className={`${monoLabel} text-[#111115]/55 dark:text-[#F5F5F7]/55`}>YOUR PROGRESS</span>
          <span className="font-academy-mono text-[13px] tabular-nums text-[#6554A8] dark:text-[#B6ABF1]">{percent}%</span>
        </div>
        <div role="progressbar" aria-label="Module completion" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#111115]/10 dark:bg-white/15"><div className="h-full rounded-full bg-[#8B7BDB] transition-[width] duration-500" style={{ width: `${percent}%` }} /></div>
        <p className={`mt-3 text-[12px] leading-[1.7] ${secondaryText}`}>{done} of {STEPS.length} steps completed</p>
        <nav aria-label="Module sections" className="mt-6 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
          {STEPS.map((step, index) => {
            const selected = active === step;
            const finished = Boolean(progress.steps?.[step]);
            return (
              <button
                type="button" key={step} onClick={() => onChange(step)} aria-current={selected ? "step" : undefined}
                className={`flex min-h-12 min-w-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition-[background-color,color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7BDB] ${selected ? "bg-[#EAE6FB] text-[#111115] dark:bg-[#403C52] dark:text-[#F5F5F7]" : "text-[#111115]/70 hover:bg-[#EAE6FB]/60 hover:text-[#6554A8] dark:text-[#F5F5F7]/70 dark:hover:bg-white/5 dark:hover:text-[#B6ABF1]"}`}
              >
                <span aria-hidden="true" className={`grid size-7 shrink-0 place-items-center rounded-full font-academy-mono text-[10px] ${finished ? "bg-[#8B7BDB] text-[#111115]" : selected ? "bg-[#111115] text-[#F5F5F7] dark:bg-[#F5F5F7] dark:text-[#111115]" : "bg-[#111115]/5 text-[#111115]/60 dark:bg-white/10 dark:text-white/60"}`}>{finished ? <Check size={14} /> : String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0">{stepHeadings[step]}</span>
              </button>
            );
          })}
        </nav>
      </div>
      <button type="button" onClick={onReset} className="mt-4 inline-flex min-h-10 items-center gap-2 px-2 text-[12px] text-[#111115]/50 transition-colors duration-300 hover:text-[#6554A8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7BDB] dark:text-[#F5F5F7]/50 dark:hover:text-[#B6ABF1]"><RotateCcw size={15} aria-hidden="true" /> Reset module progress</button>
    </aside>
  );
}
