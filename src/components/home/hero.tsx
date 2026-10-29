
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "./shared";

const stats = [
  ["05", "CATEGORIES"],
  ["15+", "COURSES"],
  ["CBL", "CHALLENGE-BASED"],
  ["KE", "BUILT IN NAIROBI"],
];

function HeroStats() {
  return (
    <aside
      aria-label="Sunkova Academy at a glance"
      className="relative z-10 mx-auto mt-5 w-full max-w-[440px] rounded-2xl border border-[#111115]/10 bg-white/95 p-5 text-[#111115] shadow-lg dark:border-white/15 dark:bg-[#1d1c24]/95 dark:text-[#F5F5F7] lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[245px]"
    >
      <div className="flex items-center justify-between gap-2 font-academy-mono text-[9px] tracking-[0.09em]">
        <span>ACADEMY / FOUNDING</span>
        <span className="opacity-60">05 / 05</span>
      </div>

      <div className="my-4 h-px bg-[#111115]/10 dark:bg-white/20">
        <div className="h-px w-10 bg-[#8B7BDB]" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong className="block font-academy-mono text-[22px] font-normal leading-tight">
              {value}
            </strong>
            <span className="mt-1 block font-academy-mono text-[8px] tracking-[0.07em] text-[#111115]/65 dark:text-[#F5F5F7]/65">
              {label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-[#111115]/65 dark:text-[#F5F5F7]/65">
        Sister to the Sunkova studio — same craft bar.
      </p>
    </aside>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[650px] lg:mx-0 lg:max-w-none">
      <div
        data-hero-art
        className="relative h-[260px] w-full sm:h-[380px] lg:h-[580px]"
      >
        <div className="absolute inset-[13%_5%_13%_18%] rotate-[-3deg] overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.18)] sm:rounded-3xl">
          <Image
            src="/assets/images/hero.webp"
            alt="Colorful digital sculpture"
            fill
            priority
            sizes="(max-width: 1023px) 85vw, 45vw"
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-[1%] left-[1%] h-[43%] w-[39%] rotate-[8deg] overflow-hidden rounded-xl border-4 border-[#111115] shadow-xl sm:rounded-2xl sm:border-[6px]">
          <Image
            src="/assets/images/hero-device.webp"
            alt="Mobile application interface"
            fill
            sizes="(max-width: 1023px) 38vw, 18vw"
            className="object-cover"
          />
        </div>

        <div className="absolute top-[2%] right-[1%] h-[32%] w-[33%] rotate-[7deg] overflow-hidden rounded-xl border-4 border-[#111115] shadow-xl sm:rounded-2xl sm:border-[6px]">
          <Image
            src="/assets/images/hero-vr.webp"
            alt="Person using virtual reality"
            fill
            sizes="(max-width: 1023px) 32vw, 16vw"
            className="object-cover"
          />
        </div>
      </div>

      <HeroStats />
    </div>
  );
}

export function HomeHero() {
  return (
    <section
      data-home-hero
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#F5F5F7] pt-28 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-32 lg:pt-[146px]"
    >
      <Container className="grid min-w-0 items-center gap-10 pb-14 sm:gap-12 lg:min-h-[650px] lg:grid-cols-[52%_48%] lg:gap-0 lg:pb-16">
        <div className="relative z-10 min-w-0">
          <div className="flex items-center gap-3 font-academy-mono text-[9px] tracking-[0.14em] text-[#111115]/60 dark:text-[#F5F5F7]/65 sm:text-[10px]">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-sm bg-[#8B7BDB]"
            />
            SUNKOVA ACADEMY
          </div>

          <h1
            id="hero-title"
            className="my-7 font-academy text-[clamp(2.7rem,11vw,5.25rem)] leading-[0.98] font-normal tracking-[-0.075em] sm:text-[clamp(5rem,8vw,8.85rem)] sm:leading-[0.93] lg:my-9"
          >
            <span data-hero-line className="block">
              Learn to
            </span>
            <span
              data-hero-line
              className="block text-[#111115]/55 dark:text-[#F5F5F7]/50"
            >
              ship in the
            </span>
            <span data-hero-line className="block">
              AI era.
            </span>
          </h1>

          <p className="max-w-[430px] text-[15px] leading-[1.75] text-[#111115]/65 dark:text-[#F5F5F7]/70 sm:text-[17px] lg:text-[18px]">
            Challenge-based education for people who want to
            design, build and ship real work. Made by the
            studio behind Sunkova.
          </p>



          {/* Hero buttons */}
          <div className="mt-8 grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4">

            {/* Explore courses */}
            <Link
              href="/courses"
              className="
                group
                flex h-[52px] w-full min-w-0
                items-center justify-between gap-1
                rounded-full
                bg-[#111115]!
                py-1 pr-1 pl-3
                text-[clamp(10px,2.7vw,13px)]
                font-semibold text-[#F5F5F7]!
                transition-transform duration-300
                hover:scale-[1.025]
                active:scale-[0.98]
                motion-reduce:transform-none
                sm:h-14 sm:w-[215px] sm:pl-5
                dark:bg-[#F5F5F7]!
                dark:text-[#111115]!
              "
            >
              <span className="whitespace-nowrap text-inherit">
                Explore courses
              </span>

              <span
                className="
                  grid size-8 shrink-0 place-items-center
                  rounded-full
                  bg-white/15 text-[#F5F5F7]!
                  transition-colors duration-300
                  group-hover:bg-[#8B7BDB]!
                  group-hover:text-white!
                  sm:size-10
                  dark:bg-[#111115]/10
                  dark:text-[#111115]!
                  dark:group-hover:bg-[#8B7BDB]!
                  dark:group-hover:text-white!
                "
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    transition-transform duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:rotate-45
                    motion-reduce:transform-none
                  "
                />
              </span>
            </Link>

            {/* Apply / Enquire */}
            <Link
              href="/contact?program=Academy%20enrolment"
              className="
                group
                flex h-[52px] w-full min-w-0
                items-center justify-between gap-1
                rounded-full
                border border-[#111115]/25!
                bg-transparent!
                px-3
                text-[clamp(10px,2.7vw,13px)]
                font-semibold text-[#111115]!
                transition-[transform,background-color,border-color]
                duration-300
                hover:scale-[1.025]
                hover:border-[#8B7BDB]!
                hover:bg-[#EAE6FB]/60!
                active:scale-[0.98]
                motion-reduce:transform-none
                sm:h-14 sm:w-[215px] sm:px-5
                dark:border-[#F5F5F7]/30!
                dark:text-[#F5F5F7]!
                dark:hover:bg-[#8B7BDB]/15!
              "
            >
              <span className="whitespace-nowrap text-inherit">
                Apply / enquire
              </span>

              <ArrowRight
                size={17}
                strokeWidth={1.7}
                className="
                  shrink-0
                  transition-transform duration-300
                  group-hover:translate-x-1
                  motion-reduce:transform-none
                "
              />
            </Link>

          </div>


        </div>

        <HeroArt />
      </Container>

      <Container className="flex flex-col gap-3 border-t border-[#111115]/10 py-5 font-academy-mono text-[9px] tracking-[0.12em] text-[#111115]/60 dark:border-white/15 dark:text-[#F5F5F7]/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>AN EDUCATION COMPANY BY</span>

          <p
            className="inline-flex items-center gaspan-1 text-[#111115] dark:text-[#F5F5F7]"
          >
            SUNKOVA STUDIO
          </p>
        </div>

        <a
          href="#perspective"
          className="inline-flex items-center gap-2 self-start text-[#111115] dark:text-[#F5F5F7] sm:self-auto"
        >
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </Container>
    </section>
  );
}
