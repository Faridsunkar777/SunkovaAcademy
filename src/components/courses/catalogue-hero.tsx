import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { categories, courses } from "@/lib/catalog";
import { Container, CourseMarker } from "./shared";

export function CatalogueHero() {
  return (
    <section aria-labelledby="catalogue-title" className="overflow-hidden bg-[#F5F5F7] pt-32 pb-14 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-40 lg:pt-44 lg:pb-20">
      <Container>
        <CourseMarker left="THE CATALOGUE / 2026" right={`${String(courses.length).padStart(2, "0")} COURSES · ${String(categories.length).padStart(2, "0")} PATHS`} />
        <div className="mt-10 grid items-center gap-10 sm:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="min-w-0">
            <h1 id="catalogue-title" className="font-academy text-[clamp(3.2rem,11vw,6rem)] leading-[0.99] font-normal tracking-[-0.075em] lg:text-[clamp(5.2rem,6.6vw,8rem)]">
              Find something<br />
              <span className="text-[#8B7BDB]">worth building.</span>
            </h1>
            <p className="mt-7 max-w-[500px] text-[15px] leading-[1.8] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[17px]">
              From first principles to ambitious projects. Explore practical learning paths designed to help you make your next move.
            </p>
            <a href="#course-catalogue" className="mt-9 inline-flex items-center gap-3 font-academy-mono text-[10px] tracking-[0.12em] text-[#111115]! transition-colors hover:text-[#8B7BDB]! dark:text-[#F5F5F7]! dark:hover:text-[#8B7BDB]!">
              SCROLL TO EXPLORE <ArrowDown size={15} />
            </a>
          </div>
          <figure className="relative m-0 aspect-[5/4] min-w-0 overflow-hidden rounded-[22px] bg-[#EAE6FB] sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image src={categories[0].image} alt="Creative work from the Academy's learning paths" fill priority sizes="(max-width: 1023px) calc(100vw - 40px), 40vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#111115]/65 via-transparent to-transparent" />
            <figcaption className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-3 font-academy-mono text-[9px] tracking-[0.12em] text-white sm:right-7 sm:bottom-7 sm:left-7">
              <span>LEARN / BUILD / SHIP</span><span>01 — 05</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
