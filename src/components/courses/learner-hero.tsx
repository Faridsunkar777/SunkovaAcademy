import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LearningCourse, LearnerMeta } from "@/lib/learning";
import { Container, CourseMarker } from "./shared";

export function LearnerHero({ course, meta, percent, nextHref }: { course: LearningCourse; meta?: LearnerMeta; percent: number; nextHref?: string }) {
  const tags = [meta?.duration ?? course.overview?.duration, meta?.format ?? course.format, `${course.modules.length} MODULES`].filter(Boolean);
  return (
    <section className="bg-[#F5F5F7] pb-14 pt-12 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-16 sm:pb-20">
      <Container>
        <CourseMarker left={`${course.category} / LEARNING PATH`} right="YOUR LEARNING SPACE" />
        <div className="mt-9 grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="min-w-0">
            <h1 className="font-academy text-[clamp(3rem,10vw,5.5rem)] leading-[1.02] font-normal tracking-[-0.075em] lg:text-[clamp(4.5rem,6vw,6.5rem)]">{course.title}<span className="text-[#8B7BDB]">.</span></h1>
            <p className="mt-6 max-w-[550px] text-[15px] leading-[1.8] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[17px]">{course.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full border border-[#111115]/15 px-3 py-2 font-academy-mono text-[9px] uppercase tracking-[0.06em] text-[#111115]/65 dark:border-white/20 dark:text-[#F5F5F7]/65">{tag}</span>)}</div>
            <div className="mt-9 max-w-[500px] rounded-2xl bg-[#EAE6FB] p-5 dark:bg-[#24242A] sm:p-6">
              <div className="flex items-end justify-between gap-4"><span className="font-academy-mono text-[10px] uppercase tracking-[0.11em]">COURSE PROGRESS</span><strong className="font-academy text-[32px] font-normal leading-none tabular-nums">{percent}%</strong></div>
              <div role="progressbar" aria-label="Course progress" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#111115]/15 dark:bg-white/20"><div className="h-full rounded-full bg-[#8B7BDB] transition-[width] duration-500" style={{ width: `${percent}%` }} /></div>
            </div>
            {nextHref && <Link href={nextHref} className="group mt-7 inline-flex min-h-12 items-center gap-5 rounded-full bg-[#111115]! px-5 text-[12px] font-semibold text-[#F5F5F7]! transition-transform duration-300 hover:scale-[1.025] focus-visible:outline-2 focus-visible:outline-[#8B7BDB] dark:bg-[#F5F5F7]! dark:text-[#111115]!">{percent ? "Continue learning" : "Start the course"}<ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" /></Link>}
          </div>
          <figure className="relative m-0 aspect-[4/3] min-w-0 overflow-hidden rounded-[22px] bg-[#EAE6FB] sm:aspect-[16/10] lg:aspect-[4/5]"><Image src={course.image} alt="" fill priority sizes="(max-width: 1023px) calc(100vw - 40px), 40vw" className="object-cover" /></figure>
        </div>
      </Container>
    </section>
  );
}
