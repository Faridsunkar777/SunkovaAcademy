import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LearnerMeta } from "@/lib/learning";
import { LearnPill } from "./shared";

type Props = {
  meta: LearnerMeta;
  percent: number;
  nextHref: string;
};

export function DashboardCourseCard({ meta, percent, nextHref }: Props) {
  const overviewHref = `/learn/course/${meta.slug}`;

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#111115]/10 bg-white text-[#111115] transition-[border-color,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#8B7BDB]/45 dark:border-white/15 dark:bg-[#24242A] dark:text-[#F5F5F7] dark:hover:border-[#8B7BDB]/65">
      <Link href={overviewHref} aria-label={`View ${meta.title} course overview`} className="relative block aspect-[16/10] overflow-hidden bg-[#EAE6FB] sm:aspect-[16/9] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#8B7BDB]">
        <Image
          src={meta.image}
          alt=""
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 50vw, 45vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111115]/40 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-[#111115]/75 px-3 py-1.5 font-academy-mono text-[9px] uppercase tracking-[0.1em] text-white backdrop-blur-sm sm:bottom-5 sm:left-5">
          {meta.level} / {meta.format}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <p className="font-academy-mono text-[9px] uppercase tracking-[0.1em] text-[#6554A8] dark:text-[#B6ABF1]">{meta.category}</p>
        <h3 className="mt-4 font-academy text-[clamp(1.7rem,3vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.055em]">{meta.title}</h3>
        <p className="mt-3 text-[14px] leading-[1.75] text-[#111115]/65 dark:text-[#F5F5F7]/65">{meta.summary}</p>

        <div className="mt-auto pt-7">
          <div className="mb-3 flex items-center justify-between gap-3 font-academy-mono text-[9px] uppercase tracking-[0.1em] text-[#111115]/60 dark:text-[#F5F5F7]/60">
            <span>{percent}% COMPLETE</span>
            <span>{meta.moduleCount} MODULES</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[#111115]/10 dark:bg-white/15" role="progressbar" aria-label={`${meta.title} progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
            <div className="h-full rounded-full bg-[#8B7BDB] transition-[width] duration-500" style={{ width: `${percent}%` }} />
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <LearnPill href={nextHref}>{percent ? "Continue learning" : "Start learning"}</LearnPill>
            <Link
              href={overviewHref}
              aria-label={`View ${meta.title} overview`}
              className="grid size-[52px] shrink-0 place-items-center rounded-full border border-[#111115]/20 text-[#111115]! transition-[border-color,background-color,color,scale] duration-500 hover:scale-[1.04] hover:border-[#8B7BDB] hover:bg-[#8B7BDB] hover:text-[#111115]! focus-visible:outline-2 focus-visible:outline-[#8B7BDB] dark:border-white/30 dark:text-[#F5F5F7]! dark:hover:text-[#111115]!"
            >
              <ArrowUpRight size={20} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
