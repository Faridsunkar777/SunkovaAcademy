import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AboutAction, AboutMarker, Container } from "./shared";

export function AboutStory() {
  return (
    <section
      id="about-story"
      aria-labelledby="about-story-title"
      className="scroll-mt-24 bg-[#F5F5F7] py-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20 lg:py-28"
    >
      <Container>
        <AboutMarker left="01 / WHY WE EXIST" right="THE STUDIO BEHIND THE ACADEMY" />
        <div className="mt-10 grid min-w-0 items-center gap-9 sm:mt-12 lg:mt-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <figure data-motion-reveal className="m-0 min-w-0 overflow-hidden rounded-[20px] bg-[#EAE6FB] sm:rounded-[24px]">
            <div className="relative aspect-[3/2] overflow-hidden lg:aspect-[4/5] xl:aspect-[5/4]">
              <Image
                src="/assets/images/about-craft.webp"
                alt="Creative work taking place inside the Sunkova studio"
                fill
                sizes="(max-width: 1023px) calc(100vw - 40px), 54vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-wrap justify-between gap-x-4 gap-y-2 bg-[#EAE6FB] px-4 py-4 font-academy-mono text-[9px] tracking-[0.11em] text-[#111115] sm:px-5">
              <span>THE ART OF MAKING THINGS REAL</span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-[#8B7BDB]" />
                SUNKOVA STUDIO
              </span>
            </figcaption>
          </figure>

          <div data-motion-reveal className="min-w-0">
            <p className="font-academy-mono text-[10px] tracking-[0.14em] text-[#6554A8] dark:text-[#B6ABF1]">
              LEARNING THROUGH PRACTICE
            </p>
            <h2
              id="about-story-title"
              className="mt-5 font-academy text-[clamp(2.7rem,9.5vw,4.8rem)] leading-[1.06] font-normal tracking-[-0.07em] lg:text-[clamp(3.15rem,4.4vw,5rem)]"
            >
              Built by makers.
              <br />
              <span className="text-[#6554A8] dark:text-[#B6ABF1]">For makers.</span>
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.85] text-[#111115]/70 dark:text-[#F5F5F7]/70 sm:text-[16px]">
              Sunkova Academy is the education arm of{" "}
              <a
                href="https://sunkova.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#111115] underline decoration-[#8B7BDB]/50 underline-offset-4 transition-colors duration-300 hover:text-[#6554A8] dark:text-[#F5F5F7] dark:hover:text-[#B6ABF1]"
              >
                Sunkova Studio <ArrowUpRight size={15} />
              </a>
              , a design and technology company that creates digital products and experiences.
            </p>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.85] text-[#111115]/70 dark:text-[#F5F5F7]/70 sm:text-[16px]">
              We started with a simple idea: the best way to learn how to build
              technology is to actually build it. Our programs turn abstract
              skills into concrete outcomes.
            </p>
            <div className="mt-8 sm:mt-10">
              <AboutAction href="/courses">Explore programs</AboutAction>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
