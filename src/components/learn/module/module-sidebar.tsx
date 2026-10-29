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

export function ModuleSidebar({
  active,
  progress,
  onChange,
  onReset,
}: {
  active: StepId;
  progress: ModuleProgress;
  onChange: (step: StepId) => void;
  onReset: () => void;
}) {
  const done = STEPS.filter((step) => progress.steps?.[step]).length;
  const percent = Math.round((done / STEPS.length) * 100);

  return (
    <aside className="min-w-0 self-start lg:sticky lg:top-40">
      <div className={`${cardSurface} p-5! sm:p-6!`}>
        <div className="flex items-center justify-between gap-3">
          <span className={`${monoLabel} text-[#111115]/55 dark:text-[#F5F5F7]/55`}>
            YOUR PROGRESS
          </span>
          <span className="font-academy-mono text-[13px] tabular-nums text-[#6554A8] dark:text-[#B6ABF1]">
            {percent}%
          </span>
        </div>

        <div
          role="progressbar"
          aria-label="Module completion"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#111115]/10 dark:bg-white/15"
        >
          <div
            className="h-full rounded-full bg-[#8B7BDB] transition-[width] duration-500 motion-reduce:transition-none"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className={`mt-3 text-[12px] leading-[1.7] ${secondaryText}`}>
          {done} of {STEPS.length} steps completed
        </p>

        <nav
          aria-label="Module sections"
          className="mt-6 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1"
        >
          {STEPS.map((step, index) => {
            const selected = active === step;
            const finished = Boolean(progress.steps?.[step]);

            return (
              <button
                key={step}
                type="button"
                onClick={() => onChange(step)}
                aria-current={selected ? "step" : undefined}
                className={`
                  group flex min-h-[49px] w-full min-w-0 appearance-none!
                  items-center gap-3 rounded-[13px] border-0! px-3! py-2.5!
                  text-left! text-[13px] font-medium
                  transition-[background-color,color,scale] duration-[550ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-safe:hover:scale-[1.015]
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-[#8B7BDB]
                  motion-reduce:transition-none
                  ${
                    selected
                      ? "bg-[#EAE6FB]! text-[#111115]! dark:bg-[#403C52]! dark:text-[#F5F5F7]!"
                      : "bg-transparent! text-[#111115]/70! hover:bg-[#EAE6FB]/65! hover:text-[#6554A8]! dark:text-[#F5F5F7]/70! dark:hover:bg-white/7! dark:hover:text-[#B6ABF1]!"
                  }
                `}
              >
                <span
                  aria-hidden="true"
                  className={`
                    grid size-7 shrink-0 place-items-center rounded-full
                    font-academy-mono text-[10px]
                    transition-colors duration-[450ms]
                    ${
                      finished
                        ? "bg-[#8B7BDB] text-[#111115]"
                        : selected
                          ? "bg-[#111115] text-[#F5F5F7] dark:bg-[#F5F5F7] dark:text-[#111115]"
                          : "bg-[#111115]/7 text-[#111115]/60 dark:bg-white/10 dark:text-white/65"
                    }
                  `}
                >
                  {finished ? <Check size={14} /> : String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">{stepHeadings[step]}</span>
                {finished && <Check aria-label="Completed" size={13} className="ml-auto shrink-0 text-[#6554A8] dark:text-[#B6ABF1]" />}
              </button>
            );
          })}
        </nav>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="
          group mt-3 inline-flex min-h-11 appearance-none! items-center gap-2
          rounded-full border-0! bg-transparent! px-4! py-2!
          text-[12px] font-medium text-[#111115]/55!
          transition-[background-color,color,scale] duration-[550ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:bg-[#8B7BDB]/10! hover:text-[#6554A8]!
          motion-safe:hover:scale-[1.02]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#8B7BDB]
          dark:text-[#F5F5F7]/55! dark:hover:bg-white/8!
          dark:hover:text-[#B6ABF1]!
          motion-reduce:transition-none
        "
      >
        <RotateCcw
          size={15}
          aria-hidden="true"
          className="transition-transform duration-500 group-hover:-rotate-30 motion-reduce:transform-none"
        />
        Reset module progress
      </button>
    </aside>
  );
}
