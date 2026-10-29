import ReactMarkdown from "react-markdown";
import { Check } from "lucide-react";
import type { LearningCourse } from "@/lib/learning";
import { CourseMarker } from "./shared";

const markdownClasses = "mt-3 text-[14px] leading-[1.8] text-[#111115]/65 dark:text-[#F5F5F7]/65 [&_p]:mb-3 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-[#111115] dark:[&_strong]:text-[#F5F5F7]";

export function LearnerDetails({ course }: { course: LearningCourse }) {
  return (
    <section aria-labelledby="learning-brief-title" className="min-w-0">
      <CourseMarker left="01 / THE BRIEF" />
      <h2 id="learning-brief-title" className="mt-6 font-academy text-[clamp(2.5rem,6vw,4.2rem)] leading-[1.04] font-normal tracking-[-0.06em]">What you&apos;ll <span className="text-[#8B7BDB]">learn.</span></h2>
      {course.bigIdea && <div className="mt-7"><h3 className="font-academy-mono text-[10px] uppercase tracking-[0.11em] text-[#111115]/55 dark:text-[#F5F5F7]/55">THE BIG IDEA</h3><p className="mt-2 text-[15px] leading-[1.8] text-[#111115]/75 dark:text-[#F5F5F7]/75">{course.bigIdea}</p></div>}
      {course.courseChallenge && <div className="mt-6"><h3 className="font-academy-mono text-[10px] uppercase tracking-[0.11em] text-[#111115]/55 dark:text-[#F5F5F7]/55">THE CHALLENGE</h3><p className="mt-2 text-[15px] leading-[1.8] text-[#111115]/75 dark:text-[#F5F5F7]/75">{course.courseChallenge}</p></div>}
      {!!course.overview?.outcomes?.length && <div className="mt-8 space-y-3">{course.overview.outcomes.map((outcome, index) => <div key={`${index}-${outcome}`} className="flex items-start gap-3"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#EAE6FB] text-[#6554A8] dark:bg-[#24242A] dark:text-[#B6ABF1]"><Check size={13}/></span><span className="text-[14px] leading-[1.7] text-[#111115]/75 dark:text-[#F5F5F7]/75">{outcome}</span></div>)}</div>}
      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div><h3 className="font-academy text-[22px] font-normal tracking-[-0.04em]">Who it&apos;s for</h3><div className={markdownClasses}><ReactMarkdown>{course.overview?.whoFor ?? "Open to curious builders."}</ReactMarkdown></div></div>
        <div><h3 className="font-academy text-[22px] font-normal tracking-[-0.04em]">Before you start</h3><div className={markdownClasses}><ReactMarkdown>{course.overview?.prereqs ?? "Bring your curiosity."}</ReactMarkdown></div></div>
      </div>
      {!!course.overview?.tools?.length && <div className="mt-8"><h3 className="font-academy text-[22px] font-normal tracking-[-0.04em]">Tools you&apos;ll use</h3><div className="mt-4 flex flex-wrap gap-2">{course.overview.tools.map(tool => <span key={tool} className="rounded-full bg-[#EAE6FB] px-3 py-2 text-[12px] text-[#111115] dark:bg-[#24242A] dark:text-[#F5F5F7]">{tool}</span>)}</div></div>}
    </section>
  );
}
