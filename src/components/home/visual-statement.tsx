import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./shared";

export function HomeVisualStatement() {
  return (
    <section
      aria-labelledby="visual-title"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#111115] py-16 text-[#F5F5F7] sm:py-20 lg:py-24"
    >
      <Image
        src="/assets/images/editorial-neon.webp"
        alt="Digital creative artwork from Sunkova"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[65%_center] sm:object-center"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#111115]/95 via-[#111115]/80 to-[#111115]/45 sm:via-[#111115]/70 sm:to-[#111115]/20"
      />

      <Container className="relative z-10 w-full">
        <div className="max-w-[1100px]">
          <div className="flex items-center gap-2.5 font-academy-mono text-[8px] uppercase tracking-[0.14em] text-[#F5F5F7]/75 sm:gap-3 sm:text-[10px]">
            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#8B7BDB]" />
            FROM THE STUDIO, NOT A PLAYBOOK
          </div>

          <h2
            id="visual-title"
            data-motion-reveal
            className="mt-6 mb-8 font-academy text-[clamp(2.4rem,9vw,7.75rem)] leading-[1.04] font-normal tracking-[-0.075em] sm:mt-8 sm:mb-10 lg:mt-10 lg:mb-14"
          >
            <span className="block">Ideas matter.</span>
            <span className="mt-1 block text-[#F5F5F7]/85 sm:mt-2">
              Execution changes things.
            </span>
          </h2>

          {/* CTA — half width on mobile, auto on desktop */}
          <Link
            href="/about"
            className="group inline-flex min-h-[48px] w-1/2 min-w-[160px] items-center justify-between gap-3 rounded-full border border-white/40 bg-[#111115]/25 py-1 pr-1 pl-4 text-[9px] font-semibold uppercase tracking-[0.05em] text-white backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#8B7BDB] hover:bg-[#111115]/50 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] motion-reduce:transform-none sm:min-h-[56px] sm:w-auto sm:min-w-[240px] sm:gap-5 sm:pl-6 sm:text-[11px]"
          >
            <span>THE ACADEMY APPROACH</span>
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/15 text-white transition-colors duration-300 group-hover:bg-[#8B7BDB] group-hover:text-[#111115] sm:size-[42px]">
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 motion-reduce:transform-none"
              />
            </span>
          </Link>

          <div className="mt-12 flex flex-wrap items-center gap-2.5 font-academy-mono text-[8px] uppercase tracking-[0.14em] text-[#F5F5F7]/55 sm:mt-16 sm:gap-3 sm:text-[9px] lg:mt-20">
            <span aria-hidden="true" className="h-px w-6 bg-[#8B7BDB] sm:w-8" />
            SUNKOVA / EDUCATION AS PRACTICE
          </div>
        </div>
      </Container>
    </section>
  );
}
