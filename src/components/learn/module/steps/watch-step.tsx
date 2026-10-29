"use client";

import { BookOpen, Play, ArrowUpRight, Check } from "lucide-react";
import type { CourseModule } from "@/lib/learning";
import { primaryButton, secondaryText } from "../shared";

type WatchResources = NonNullable<CourseModule["content"]>["watch"];

export function WatchStep({ resources, onComplete }: { resources: WatchResources; onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <p className={`text-[14px] leading-[1.8] ${secondaryText}`}>Explore the resources below, then mark this step complete.</p>
      <div className="grid gap-3">
        {resources?.map((item, index) => {
          const inner = <>
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#EAE6FB] text-[#6554A8] dark:bg-[#403C52] dark:text-[#B6ABF1]">{item.type === "video" ? <Play size={19} /> : <BookOpen size={19} />}</span>
            <span className="min-w-0 flex-1"><strong className="block text-[14px] font-semibold text-[#111115] dark:text-[#F5F5F7]">{item.title || "Learning resource"}</strong><small className={`mt-1 block text-[12px] ${secondaryText}`}>{[item.channel, item.length].filter(Boolean).join(" · ")}</small>{item.why && <span className={`mt-2 block text-[13px] leading-[1.7] ${secondaryText}`}>{item.why}</span>}</span>
            {item.url && <ArrowUpRight size={17} aria-hidden="true" className="shrink-0 text-[#6554A8] dark:text-[#B6ABF1]" />}
          </>;
          const cls = "group flex min-w-0 items-start gap-3 rounded-[16px] border border-[#111115]/10 bg-[#F5F5F7] p-4 transition-[border-color,background-color] duration-300 hover:border-[#8B7BDB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7BDB] dark:border-white/15 dark:bg-[#1A1A20] dark:hover:border-[#8B7BDB]/70";
          return item.url ? <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a> : <div key={index} className={cls}>{inner}</div>;
        })}
        {!resources?.length && <p className={`text-[14px] ${secondaryText}`}>Resources are being prepared.</p>}
      </div>
      <button className={primaryButton} type="button" onClick={onComplete}>Mark as watched <Check size={17} /></button>
    </div>
  );
}
