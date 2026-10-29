import Link from "next/link";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import type { LearningCourse, CourseModule } from "@/lib/learning";
import type { Progress } from "@/lib/progress";
import { moduleHref, STEPS } from "@/lib/progress";
import { CourseMarker } from "./shared";

function ModuleRow({ module, slug, progress }: { module: CourseModule; slug: string; progress: Progress }) {
  const state = progress[slug]?.[module.id];
  const completedSteps = STEPS.filter(step => state?.steps?.[step]).length;
  const locked = module.status === "coming-soon";
  const complete = !!state?.completedAt;
  const content = <>
    <span className="font-academy-mono text-[11px] text-[#8B7BDB]">{module.id}</span>
    <div className="min-w-0"><h3 className="font-academy text-[clamp(1.2rem,3vw,1.6rem)] leading-[1.15] font-normal tracking-[-0.04em]">{module.title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-[#111115]/60 dark:text-[#F5F5F7]/60">{module.summary}</p></div>
    <span className="col-start-2 inline-flex items-center gap-2 text-[11px] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:col-start-auto sm:justify-self-end sm:whitespace-nowrap">{complete ? <><Check size={16} /> Complete</> : locked ? <><Lock size={15} /> Coming soon</> : <>{completedSteps ? `${completedSteps}/${STEPS.length} steps` : "Start module"} <ArrowUpRight size={17} /></>}</span>
  </>;
  const rowClass = "grid min-w-0 grid-cols-[32px_minmax(0,1fr)] items-start gap-x-3 gap-y-2 border-b border-[#111115]/10 py-5 dark:border-white/15 sm:grid-cols-[36px_minmax(0,1fr)_auto] sm:items-center sm:gap-5";
  return locked ? <div key={module.id} aria-disabled="true" className={`${rowClass} opacity-55`}>{content}</div> : <Link key={module.id} href={moduleHref(slug, module.id)} className={`${rowClass} group transition-colors duration-300 hover:text-[#6554A8] focus-visible:outline-2 focus-visible:outline-[#8B7BDB] dark:hover:text-[#B6ABF1]`}>{content}</Link>;
}

export function LearnerModules({ course, progress }: { course: LearningCourse; progress: Progress }) {
  return (
    <section aria-labelledby="learner-modules-title" className="min-w-0">
      <CourseMarker left="02 / THE MODULES" right={`${String(course.modules.length).padStart(2, "0")} MODULES`} />
      <h2 id="learner-modules-title" className="mt-6 font-academy text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] font-normal tracking-[-0.06em]">Course <span className="text-[#8B7BDB]">modules.</span></h2>
      <div className="mt-6 border-t border-[#111115]/10 dark:border-white/15">
        {course.modules.map(module => <ModuleRow key={module.id} module={module} slug={course.slug} progress={progress} />)}
        {course.capstone?.brief && <Link href={moduleHref(course.slug, "capstone")} className="group grid grid-cols-[32px_minmax(0,1fr)] gap-3 py-6 text-[#111115] transition-colors hover:text-[#6554A8] dark:text-[#F5F5F7] dark:hover:text-[#B6ABF1] sm:grid-cols-[36px_minmax(0,1fr)_auto] sm:items-center sm:gap-5"><span className="font-academy-mono text-[14px] text-[#8B7BDB]">★</span><div><h3 className="font-academy text-[23px] font-normal tracking-[-0.04em]">Final capstone</h3><p className="mt-2 text-[13px] leading-[1.7] text-[#111115]/60 dark:text-[#F5F5F7]/60">Bring your skills together and ship a portfolio-ready project.</p></div><span className="col-start-2 inline-flex items-center gap-2 text-[11px] sm:col-start-auto">View brief <ArrowUpRight size={16} /></span></Link>}
      </div>
    </section>
  );
}
