import Image from "next/image";
import { Container } from "./shared";

export function HomeManifesto() {
  return (
    <section
      id="perspective"
      aria-labelledby="manifesto-title"
      className="bg-[#F5F5F7] pt-16 pb-10 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16"
    >
      <Container>
        {/* Section identifier */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-academy-mono text-[9px] tracking-[0.12em] sm:text-[10px]">
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[#8B7BDB]"
            />
            01 / THE IDEA
          </span>

          <span className="text-[#111115]/55 dark:text-[#F5F5F7]/55">
            LEARN DIFFERENTLY
          </span>
        </div>

        {/* Editorial layout */}
        <div className="mt-9 grid items-center gap-8 sm:mt-12 sm:gap-10 lg:mt-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* Editorial photograph */}
          <figure
            data-motion-reveal
            className="
              order-2
              m-0
              w-full
              min-w-0
              overflow-hidden
              rounded-[20px]
              bg-[#EAE6FB]
              sm:rounded-[24px]
              lg:order-1
            "
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
              <Image
                src="/assets/images/editorial-cohort.webp"
                alt="People collaborating around laptops in a creative learning environment"
                fill
                sizes="(max-width: 1023px) calc(100vw - 40px), 58vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.025]
                  motion-reduce:transform-none
                "
              />
            </div>

            <figcaption
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-x-3
                gap-y-2
                bg-[#EAE6FB]
                px-4
                py-3.5
                font-academy-mono
                text-[8px]
                tracking-[0.1em]
                text-[#111115]
                sm:px-5
                sm:text-[9px]
              "
            >
              <span>LEARNING THROUGH PRACTICE</span>

              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-[#8B7BDB]"
                />
                SUNKOVA ACADEMY
              </span>
            </figcaption>
          </figure>

          {/* Editorial text */}
          <div data-motion-reveal className="order-1 min-w-0 lg:order-2">
            <p className="font-academy-mono text-[10px] tracking-[0.14em] text-[#8B7BDB]">
              THE WAY WE LEARN
            </p>

            <h2
              id="manifesto-title"
              className="mt-4 font-academy text-[clamp(2.5rem,9vw,4.25rem)] leading-[1.08] font-normal tracking-[-0.065em] lg:text-[clamp(2.75rem,4vw,4.5rem)]"
            >
              Less watching.
              <br />
              More making.
            </h2>

            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.8] text-[#111115]/70 dark:text-[#F5F5F7]/70 sm:text-[16px]">
              Most courses teach you how to follow. We believe in learning how
              to make.
            </p>

            <p className="mt-3 max-w-[460px] text-[15px] leading-[1.8] text-[#111115]/70 dark:text-[#F5F5F7]/70 sm:mt-4 sm:text-[16px]">
              Learn the skills behind intelligent products, then put them to
              work. Make the mistakes, understand the choices, and finish with
              something worth sharing.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 font-academy-mono text-[9px] tracking-[0.12em] text-[#111115]/55 dark:text-[#F5F5F7]/55 sm:mt-8">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-[#8B7BDB]"
              />
              LEARN / BUILD / SHIP
            </div>
          </div>
        </div>

        {/* Subtle footer — no divider */}
        <div className="mt-9 flex flex-wrap justify-between gap-x-4 gap-y-2 font-academy-mono text-[9px] tracking-[0.12em] text-[#111115]/45 dark:text-[#F5F5F7]/45 sm:mt-12">
          <span>BUILT WITH INTENTION</span>
          <span>NAIROBI — EVERYWHERE</span>
        </div>
      </Container>
    </section>
  );
}
