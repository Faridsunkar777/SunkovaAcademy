"use client";

import Link from "next/link";
import { learningCourses, learnerCatalogue } from "@/lib/learning";
import { LearnerShell } from "@/components/learner-shell";
import { coursePercent, moduleHref, nextModule } from "@/lib/progress";
import { useStoredProgress } from "@/lib/client-store";
import { Container } from "./shared";
import { LearnerHero } from "./learner-hero";
import { LearnerDetails } from "./learner-details";
import { LearnerModules } from "./learner-modules";
import { LearnerSchedule } from "./learner-schedule";

export default function CourseOverview({ slug }: { slug: string }) {
  const progress = useStoredProgress();
  const course = learningCourses[slug];
  const meta = learnerCatalogue.find(item => item.slug === slug);

  if (!course) return <LearnerShell><Container className="py-20 text-[#111115] dark:text-[#F5F5F7]"><h1 className="font-academy text-4xl">Course not found.</h1><Link href="/learn" className="mt-5 inline-block text-[#6554A8] dark:text-[#B6ABF1]">Back to learning</Link></Container></LearnerShell>;

  const percent = coursePercent(course, progress);
  const next = nextModule(course, progress);
  const nextHref = next ? moduleHref(slug, next.id) : undefined;

  return (
    <LearnerShell>
      <LearnerHero course={course} meta={meta} percent={percent} nextHref={nextHref} />
      <section className="bg-[#F5F5F7] pb-20 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pb-24">
        <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <LearnerDetails course={course} />
          <div className="min-w-0"><LearnerModules course={course} progress={progress} /><LearnerSchedule course={course} /></div>
        </Container>
      </section>
    </LearnerShell>
  );
}
