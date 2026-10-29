
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./shared";

export function HomeClosing() {
  return (
    <section
      aria-labelledby="closing-title"
      className="
        bg-[#F5F5F7]
        pt-12 pb-12
        text-[#111115]
        dark:bg-[#111115]
        dark:text-[#F5F5F7]
        sm:pt-16 sm:pb-16
        lg:pt-20 lg:pb-20
      "
    >
      <Container>
        <div
          data-motion-reveal
          className="
            relative isolate
            min-h-[460px]
            overflow-hidden
            rounded-[22px]
            bg-[#EAE6FB]
            sm:min-h-[430px]
            sm:rounded-[26px]
            lg:min-h-[490px]
            dark:bg-[#24242A]
          "
        >
          {/* Original retro-computer artwork */}
          <Image
            src="/assets/images/editorial-neon.webp"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 1200px"
            className="
              z-0 object-cover
              object-[64%_center]
              sm:object-center
            "
          />

          {/* Mobile image treatment */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0 z-10
              bg-[#F5F5F7]/90
              sm:hidden
              dark:bg-[#111115]/85
            "
          />

          {/* Desktop gradient: text on left, artwork on right */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0 z-10
              hidden
              bg-gradient-to-r
              from-[#F5F5F7]/98
              via-[#F5F5F7]/85
              to-[#F5F5F7]/15
              sm:block
              dark:from-[#111115]/98
              dark:via-[#111115]/85
              dark:to-[#111115]/20
            "
          />

          {/* Content */}
          <div
            className="
              relative z-20
              flex min-h-[460px]
              flex-col justify-center
              px-6 py-12
              sm:min-h-[430px]
              sm:px-10 sm:py-14
              lg:min-h-[490px]
              lg:px-16 lg:py-16
            "
          >
            <div className="max-w-[610px]">
              {/* Eyebrow */}
              <div
                className="
                  flex items-center gap-2.5
                  font-academy-mono
                  text-[9px] uppercase
                  tracking-[0.13em]
                  text-[#111115]/60
                  dark:text-[#F5F5F7]/65
                  sm:text-[10px]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    size-1.5 shrink-0
                    rounded-full bg-[#8B7BDB]
                  "
                />
                ENROL / APPLY
              </div>

              {/* Headline */}
              <h2
                id="closing-title"
                className="
                  mt-6
                  font-academy
                  text-[clamp(2.7rem,10vw,4.25rem)]
                  font-normal
                  leading-[1.03]
                  tracking-[-0.07em]
                  sm:mt-7
                  sm:text-[clamp(3.75rem,5.5vw,5.5rem)]
                "
              >
                Ready to build
                <br className="hidden sm:block" />{" "}
                <span className="text-[#6554A8] dark:text-[#B6ABF1]">
                  in public?
                </span>
              </h2>

              {/* Supporting copy */}
              <p
                className="
                  mt-5 max-w-[430px]
                  text-[15px]
                  leading-[1.75]
                  text-[#111115]/70
                  dark:text-[#F5F5F7]/75
                  sm:mt-6 sm:text-[16px]
                "
              >
                Tell us which courses interest you.
                We&apos;ll help you find the right
                learning path and take the next step.
              </p>

              {/* Actions */}
              <div
                className="
                  mt-8 flex flex-wrap
                  items-center gap-3
                  sm:mt-9 sm:gap-4
                "
              >
                {/* Primary button */}
                <Link
                  href="/contact?program=Academy%20enrolment"
                  className="
                    group inline-flex
                    min-h-[48px]
                    items-center justify-center
                    gap-4
                    rounded-full
                    bg-[#111115]!
                    px-5
                    text-[12px] font-semibold
                    text-[#F5F5F7]!
                    transition-transform duration-300
                    hover:scale-[1.035]
                    active:scale-[0.98]
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#8B7BDB]
                    motion-reduce:transform-none
                    dark:bg-[#F5F5F7]!
                    dark:text-[#111115]!
                  "
                >
                  <span className="text-inherit">
                    Apply / Enrol
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      motion-reduce:transform-none
                    "
                  />
                </Link>

                {/* Secondary button */}
                <a
                  href="https://sunkova.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group inline-flex
                    min-h-[48px]
                    items-center justify-center
                    gap-3
                    rounded-full
                    border border-[#111115]/25!
                    bg-transparent!
                    px-5
                    text-[12px] font-medium
                    text-[#111115]!
                    transition-[transform,border-color,background-color]
                    duration-300
                    hover:scale-[1.035]
                    hover:border-[#8B7BDB]!
                    hover:bg-[#EAE6FB]/60!
                    active:scale-[0.98]
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#8B7BDB]
                    motion-reduce:transform-none
                    dark:border-white/35!
                    dark:text-[#F5F5F7]!
                    dark:hover:bg-white/10!
                  "
                >
                  <span className="text-inherit">
                    Visit Sunkova Studio
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      motion-reduce:transform-none
                    "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
