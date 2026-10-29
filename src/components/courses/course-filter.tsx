"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, courses, type CatalogueCourse } from "@/lib/catalog";
import { Container, CourseMarker } from "./shared";

function CourseRow({ course, number }: { course: CatalogueCourse; number: number }) {
  return (
    <Link
      href={`/courses/${course.categorySlug}`}
      className="group grid min-w-0 grid-cols-[88px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-[#111115]/10 py-6 transition-colors duration-300 hover:bg-[#EAE6FB]/35 focus-visible:outline-2 focus-visible:outline-[#8B7BDB] dark:border-white/15 dark:hover:bg-white/[0.035] sm:grid-cols-[36px_130px_minmax(0,1fr)_44px] sm:items-center sm:gap-5 sm:py-7 lg:grid-cols-[42px_180px_minmax(0,1fr)_48px] lg:gap-8"
    >
      <span className="hidden font-academy-mono text-[10px] text-[#111115]/45 dark:text-[#F5F5F7]/45 sm:block">{String(number).padStart(2, "0")}</span>
      <div className="relative row-span-2 aspect-[4/5] w-[88px] overflow-hidden rounded-[12px] bg-[#EAE6FB] sm:row-span-1 sm:aspect-[5/4] sm:w-[130px] lg:w-[180px]">
        <Image src={course.image} alt="" fill sizes="(max-width: 639px) 88px, (max-width: 1023px) 130px, 180px" className="object-cover transition-transform duration-700 group-hover:scale-[1.045] motion-reduce:transform-none" />
      </div>
      <div className="min-w-0">
        <p className="font-academy-mono text-[9px] uppercase tracking-[0.1em] text-[#8B7BDB]">{course.category} / {course.format}</p>
        <h3 className="mt-2 font-academy text-[clamp(1.4rem,4.8vw,2.6rem)] leading-[1.13] font-normal tracking-[-0.055em] text-[#111115] transition-colors group-hover:text-[#6554A8] dark:text-[#F5F5F7] dark:group-hover:text-[#B6ABF1]">{course.title}</h3>
        <p className="mt-2 max-w-[650px] text-[13px] leading-[1.65] text-[#111115]/60 dark:text-[#F5F5F7]/60 sm:text-[14px]">{course.description}</p>
        <p className="mt-3 font-academy-mono text-[9px] tracking-[0.06em] text-[#111115]/55 dark:text-[#F5F5F7]/55">{course.details} · {course.price}</p>
      </div>
      <span aria-hidden="true" className="col-start-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#111115] dark:text-[#F5F5F7] sm:col-start-auto sm:grid sm:size-11 sm:place-items-center sm:rounded-full sm:border sm:border-[#111115]/20 sm:transition-[background-color,border-color,color,transform] sm:duration-300 sm:group-hover:rotate-45 sm:group-hover:border-[#8B7BDB] sm:group-hover:bg-[#8B7BDB] sm:group-hover:text-[#111115] sm:dark:border-white/25">
        <span className="sm:hidden">View path</span><ArrowUpRight size={19} strokeWidth={1.7} />
      </span>
    </Link>
  );
}

export function CourseFilter() {
  const [selected, setSelected] = useState("all");
  const filtered = selected === "all" ? courses : courses.filter(course => course.categorySlug === selected);
  const chips = [{ slug: "all", title: "All", count: courses.length }, ...categories.map(category => ({ slug: category.slug, title: category.title, count: courses.filter(course => course.categorySlug === category.slug).length }))];

  return (
    <section id="course-catalogue" aria-label="Course catalogue" className="scroll-mt-28 bg-[#F5F5F7] pb-20 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pb-24 lg:pb-28">
      <Container>
        <CourseMarker left="01 / EXPLORE" right="FILTER BY DISCIPLINE" />
        <div role="group" aria-label="Filter courses by discipline" className="mt-7 flex flex-wrap gap-2 sm:mt-9 sm:gap-3">
          {chips.map(chip => {
            const active = selected === chip.slug;
            return (
              <button key={chip.slug} type="button" aria-pressed={active} onClick={() => setSelected(chip.slug)} className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-[12px] font-medium transition-[background-color,border-color,color,transform] duration-300 hover:scale-[1.025] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7BDB] motion-reduce:transform-none ${active ? "border-[#111115] bg-[#111115] text-[#F5F5F7] dark:border-[#F5F5F7] dark:bg-[#F5F5F7] dark:text-[#111115]" : "border-[#111115]/15 bg-transparent text-[#111115]/75 hover:border-[#8B7BDB] hover:text-[#6554A8] dark:border-white/20 dark:text-[#F5F5F7]/75 dark:hover:text-[#B6ABF1]"}`}>
                {chip.title}<span className="font-academy-mono text-[9px] opacity-60">{String(chip.count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
        <div aria-live="polite" className="mt-12 flex flex-wrap items-center justify-between gap-3 font-academy-mono text-[10px] uppercase tracking-[0.12em] text-[#111115]/55 dark:text-[#F5F5F7]/55 sm:mt-16">
          <span>{String(filtered.length).padStart(2, "0")} COURSES</span><span>DISCOVER / BUILD / SHIP</span>
        </div>
        <div className="mt-3 border-t border-[#111115]/15 dark:border-white/20">
          {filtered.map((course, index) => <CourseRow key={course.id} course={course} number={index + 1} />)}
        </div>
      </Container>
    </section>
  );
}
