import { learnerCatalogue, learningCourses } from "@/lib/learning";
import { coursePercent, nextModule, moduleHref, type Progress } from "@/lib/progress";
import { Container, LearnMarker } from "./shared";
import { DashboardCourseCard } from "./dashboard-course-card";

export function DashboardCourses({ progress }: { progress: Progress }) {
  const available = learnerCatalogue.filter(meta => !!learningCourses[meta.slug]);
  const enrolled = available.filter(meta => meta.enrolled).length;

  return (
    <section aria-labelledby="my-learning-title" className="pb-10 sm:pb-14">
      <Container>
        <LearnMarker left="01 / YOUR PATHS" right={`${String(enrolled).padStart(2, "0")} ENROLLED PATHS`} />
        <div className="mt-8 mb-8 flex flex-wrap items-end justify-between gap-4 sm:mt-10 sm:mb-10">
          <h2 id="my-learning-title" className="font-academy text-[clamp(2.3rem,6vw,4rem)] font-normal leading-[1.04] tracking-[-0.06em]">My <span className="text-[#6554A8] dark:text-[#B6ABF1]">courses.</span></h2>
          <span className="font-academy-mono text-[10px] uppercase tracking-[0.1em] text-[#111115]/45 dark:text-[#F5F5F7]/45">LEARNING IN PROGRESS</span>
        </div>
        {available.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {available.map(meta => {
              const course = learningCourses[meta.slug];
              const percent = coursePercent(course, progress);
              const next = nextModule(course, progress);
              const nextHref = next ? moduleHref(meta.slug, next.id) : `/learn/course/${meta.slug}`;
              return <DashboardCourseCard key={meta.slug} meta={meta} percent={percent} nextHref={nextHref} />;
            })}
          </div>
        ) : (
          <div className="rounded-[22px] bg-[#EAE6FB] p-8 text-[15px] leading-[1.7] text-[#111115] dark:bg-[#24242A] dark:text-[#F5F5F7]">
            No learning paths are currently available.
          </div>
        )}
      </Container>
    </section>
  );
}
