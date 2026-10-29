import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/catalog";
import { Container, CourseMarker, CoursePill } from "./shared";

export function CategoryHero({ category }: { category: Category }) {
  return (
    <section className="bg-[#F5F5F7] pt-30 pb-14 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-36 sm:pb-20 lg:pt-42 lg:pb-24">
      <Container>
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 text-[12px] text-[#111115]/60 dark:text-[#F5F5F7]/60">
          <Link href="/courses" className="inline-flex items-center gap-2 transition-colors hover:text-[#8B7BDB] dark:hover:text-[#B6ABF1]"><ArrowLeft size={15} /> All programs</Link>
          <span aria-hidden="true">/</span><span aria-current="page" className="text-[#111115] dark:text-[#F5F5F7]">{category.title}</span>
        </nav>
        <div className="mt-9"><CourseMarker left={`PROGRAM ${category.number} / 05`} right={category.duration.toUpperCase()} /></div>
        <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="min-w-0">
            <h1 className="max-w-[750px] font-academy text-[clamp(3.2rem,12vw,6rem)] leading-[1] font-normal tracking-[-0.075em] lg:text-[clamp(4.2rem,6.5vw,7rem)]">{category.title}<span className="text-[#8B7BDB]">.</span></h1>
            <p className="mt-6 max-w-[490px] text-[17px] leading-[1.6] text-[#111115]/75 dark:text-[#F5F5F7]/75 sm:text-[21px]">{category.headline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <CoursePill href="#category-courses">Explore courses</CoursePill>
              <Link href="/contact" className="group inline-flex min-h-12 items-center gap-2 text-[12px] font-medium text-[#111115]! transition-colors hover:text-[#6554A8]! dark:text-[#F5F5F7]! dark:hover:text-[#B6ABF1]!">Ask us a question <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </div>
          </div>
          <figure className="relative m-0 aspect-[5/4] min-w-0 overflow-hidden rounded-[22px] bg-[#EAE6FB] sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image src={category.image} alt={`Visual representing ${category.title}`} fill priority sizes="(max-width: 1023px) calc(100vw - 40px), 45vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <figcaption className="absolute right-5 bottom-5 left-5 font-academy-mono text-[9px] uppercase tracking-[0.13em] text-white sm:right-7 sm:bottom-7 sm:left-7">{category.tagline}</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
