"use client";

import { useState } from "react";
import type { LearningCourse } from "@/lib/learning";

export function LearnerSchedule({ course }: { course: LearningCourse }) {
  const [tab, setTab] = useState<"live" | "self">("live");
  if (!course.weeklyPlan?.length && !course.selfPaced?.checkpoints?.length) return null;
  const weekly = course.weeklyPlan ?? [];
  const checkpoints = course.selfPaced?.checkpoints ?? [];
  const activeList = tab === "live" ? weekly : checkpoints;

  return (
    <section aria-label="Learning schedule" className="mt-10 rounded-[20px] bg-[#EAE6FB] p-5 dark:bg-[#24242A] sm:p-7">
      <div role="tablist" aria-label="Schedule format" className="grid grid-cols-2 gap-2 rounded-full bg-[#111115]/5 p-1 dark:bg-white/10">
        {([{ id: "live", name: "Live schedule" }, { id: "self", name: "Self-paced checkpoints" }] as const).map(item => <button key={item.id} type="button" role="tab" aria-selected={tab === item.id} onClick={() => setTab(item.id)} className={`min-h-10 rounded-full px-3 text-[11px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#8B7BDB] ${tab === item.id ? "bg-[#111115] text-[#F5F5F7] dark:bg-[#F5F5F7] dark:text-[#111115]" : "text-[#111115]/65 dark:text-[#F5F5F7]/65"}`}>{item.name}</button>)}
      </div>
      <div role="tabpanel" className="mt-6 space-y-4">
        {!activeList.length && <p className="text-[13px] text-[#111115]/65 dark:text-[#F5F5F7]/65">This schedule is not yet available.</p>}
        {tab === "live" ? weekly.map((week, index) => <div key={`${week.week}-${index}`} className="grid gap-2 border-b border-[#111115]/10 pb-4 last:border-0 dark:border-white/15 sm:grid-cols-[96px_1fr]"><span className="font-academy-mono text-[10px] tracking-[0.08em] text-[#6554A8] dark:text-[#B6ABF1]">WEEK {String(week.week).padStart(2, "0")}</span><div><h3 className="text-[14px] font-medium">{week.focus}</h3><p className="mt-1 text-[12px] leading-[1.6] text-[#111115]/60 dark:text-[#F5F5F7]/60">{week.session} · {week.due}</p></div></div>) : checkpoints.map((checkpoint, index) => <div key={`${checkpoint.after}-${index}`} className="grid gap-2 border-b border-[#111115]/10 pb-4 last:border-0 dark:border-white/15 sm:grid-cols-[135px_1fr]"><span className="font-academy-mono text-[10px] tracking-[0.08em] text-[#6554A8] dark:text-[#B6ABF1]">AFTER MODULE {checkpoint.after}</span><span className="text-[14px]">{checkpoint.label}</span></div>)}
      </div>
    </section>
  );
}
