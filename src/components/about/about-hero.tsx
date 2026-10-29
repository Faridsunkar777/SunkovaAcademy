import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { AboutMarker, Container } from "./shared";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden bg-[#111115] pt-36 pb-16 text-[#F5F5F7] sm:pt-44 sm:pb-20 lg:pt-52 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_88%_23%,rgba(139,123,219,0.18),transparent_58%)]"
      />
      <Container>
        <AboutMarker left="THIS IS SUNKOVA ACADEMY" right="NAIROBI / WORLDWIDE" light />
        <h1
          id="about-title"
          data-motion-reveal
          className="mt-10 max-w-[1180px] font-academy text-[clamp(3.1rem,11vw,7.5rem)] leading-[0.98] font-normal tracking-[-0.075em] sm:mt-14 lg:mt-20 lg:text-[clamp(6rem,8.7vw,9rem)]"
        >
          Education
          <br />
          for <span className="text-[#B6ABF1]">doers.</span>
        </h1>
        <div className="mt-10 flex flex-col gap-7 sm:mt-14 sm:flex-row sm:items-end sm:justify-between sm:gap-10 lg:mt-20">
          <p className="max-w-[640px] text-[16px] leading-[1.8] text-[#F5F5F7]/70 sm:text-[18px] lg:text-[20px]">
            We believe the future belongs to people who are willing to learn,
            experiment, and create something that matters.
          </p>
          <Link
            href="#about-story"
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 self-start font-academy-mono text-[10px] tracking-[0.12em] text-[#F5F5F7]/80 transition-colors duration-300 hover:text-[#B6ABF1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] sm:self-auto"
          >
            OUR STORY
            <ArrowDown size={16} className="transition-transform duration-500 group-hover:translate-y-1 motion-reduce:transform-none" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
