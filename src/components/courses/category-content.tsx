import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category, CatalogueCourse } from "@/lib/catalog";
import { Container, CourseMarker } from "./shared";

export function CategoryOpportunity({ category }: { category: Category }) {
  return (
    <section className="bg-[#F5F5F7] py-14 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20 lg:py-24">
      <Container>
        <CourseMarker left="01 / THE OPPORTUNITY" right="WHY THIS MATTERS" />
        <div className="mt-9 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          <h2 className="max-w-[850px] font-academy text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.08] font-normal tracking-[-0.065em]">{category.description}</h2>
          <p className="max-w-[430px] text-[15px] leading-[1.85] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[16px]">Our approach combines guided practice, useful tools and portfolio-ready work. The focus is on what you can make, not just what you can memorise.</p>
        </div>
      </Container>
    </section>
  );
}

function CategoryCourseCard({ course }: { course: CatalogueCourse }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#111115]/10 bg-white text-[#111115] dark:border-white/15 dark:bg-[#24242A] dark:text-[#F5F5F7] sm:rounded-[24px]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE6FB]">
        <Image src={course.image} alt="" fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 45vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <p className="font-academy-mono text-[9px] uppercase tracking-[0.10em] text-[#8B7BDB]">{course.format} / {course.details}</p>
        <h3 className="mt-4 font-academy text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.1] font-normal tracking-[-0.055em]">{course.title}</h3>
        <p className="mt-4 text-[14px] leading-[1.75] text-[#111115]/60 dark:text-[#F5F5F7]/65">{course.description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-8">
          <span className="text-[13px] font-medium">{course.price}</span>
          <Link href={`/contact?program=${encodeURIComponent(course.title)}`} aria-label={`Enquire about ${course.title}`} className="group/button inline-flex min-h-10 items-center gap-2 rounded-full border border-[#111115]/15 px-4 text-[12px] font-semibold text-[#111115]! transition-[background-color,color,border-color] duration-300 hover:border-[#8B7BDB] hover:bg-[#8B7BDB] hover:text-[#111115]! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7BDB] dark:border-white/25 dark:text-[#F5F5F7]! dark:hover:text-[#111115]!">
            Enquire <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/button:rotate-45 motion-reduce:transform-none" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function CategoryCourses({ courses }: { courses: CatalogueCourse[] }) {
  return (
    <section id="category-courses" aria-labelledby="category-courses-title" className="scroll-mt-24 bg-[#F5F5F7] py-14 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20 lg:py-24">
      <Container>
        <CourseMarker left="02 / THE LEARNING PATH" right={`${String(courses.length).padStart(2, "0")} COURSES`} />
        <h2 id="category-courses-title" className="mt-9 mb-9 font-academy text-[clamp(3rem,9vw,6rem)] leading-[1.02] font-normal tracking-[-0.075em] sm:mb-12">Choose where<br /><span className="text-[#8B7BDB]">you begin.</span></h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {courses.map(course => <CategoryCourseCard key={course.id} course={course} />)}
        </div>
      </Container>
    </section>
  );
}
