"use client";

import { Check, ChevronDown } from "lucide-react";
import type { CourseModule } from "@/lib/learning";
import { MarkdownContent, primaryButton, secondaryText } from "../shared";

type Checks = NonNullable<CourseModule["content"]>["quickCheck"];

export function CheckStep({ questions, answers, onReveal, onComplete }: {
  questions: Checks;
  answers: number[];
  onReveal: (index: number) => void;
  onComplete: () => void;
}) {
  return <div className="space-y-6">
    <p className={`text-[14px] leading-[1.8] ${secondaryText}`}>Try answering each question yourself before revealing its answer.</p>
    <div className="space-y-3">{questions?.map((question, index) => (
      <details key={index} className="group rounded-[16px] border border-[#111115]/10 bg-[#F5F5F7] p-4 open:border-[#8B7BDB]/50 dark:border-white/15 dark:bg-[#1A1A20]" onToggle={(event) => { if (event.currentTarget.open) onReveal(index); }}>
        <summary className="flex cursor-pointer list-none items-start gap-3 text-[14px] font-medium leading-[1.65] text-[#111115] marker:hidden dark:text-[#F5F5F7] [&::-webkit-details-marker]:hidden"><span className="font-academy-mono text-[10px] text-[#6554A8] dark:text-[#B6ABF1]">{String(index + 1).padStart(2, "0")}</span><span className="min-w-0 flex-1">{question.q}</span><ChevronDown size={17} aria-hidden="true" className="mt-0.5 shrink-0 transition-transform duration-300 group-open:rotate-180" /></summary>
        <div className="mt-4 border-t border-[#111115]/10 pt-4 dark:border-white/15"><MarkdownContent value={question.a} /></div>
      </details>
    ))}{!questions?.length && <p className={secondaryText}>Questions are being prepared.</p>}</div>
    <p className={`font-academy-mono text-[11px] ${secondaryText}`}>{answers.length} of {questions?.length ?? 0} answers opened</p>
    <button type="button" className={primaryButton} onClick={onComplete}>Complete quick check <Check size={17} /></button>
  </div>;
}
