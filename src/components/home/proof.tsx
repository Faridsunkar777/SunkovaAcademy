import Image from "next/image";
import { Container } from "./shared";

function ChallengeCard() {
  return (
    <article
      data-motion-reveal
      className="group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl p-6 text-[#F5F5F7] sm:min-h-[400px] sm:p-8 lg:col-span-7 lg:min-h-[440px] lg:p-10"
    >
      <Image
        src="/assets/images/editorial-studio.webp"
        alt="Sunkova creative studio and design work"
        fill
        sizes="(max-width: 1023px) 100vw, 58vw"
        className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#111115]/90 via-[#111115]/45 to-[#111115]/20"
      />
      <span className="font-academy-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
        01 — Challenge-based
      </span>
      <div className="mt-auto max-w-[520px]">
        <h3 className="font-academy text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.07em]">
          Make first.
          <br />
          <span className="text-[#B6ABF1]">Understand deeply.</span>
        </h3>
        <p className="mt-5 max-w-[380px] text-sm leading-relaxed text-white/70 sm:text-[15px]">
          Real briefs. Real decisions. Tangible outcomes.
        </p>
      </div>
    </article>
  );
}

function CraftCard() {
  return (
    <article
      data-motion-reveal
      className="group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl p-6 text-[#F5F5F7] sm:min-h-[400px] sm:p-8 lg:col-span-5 lg:min-h-[440px]"
    >
      <Image
        src="/assets/images/bento-code.webp"
        alt="Code and product development work"
        fill
        sizes="(max-width: 1023px) 100vw, 42vw"
        className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#111115]/90 via-[#111115]/40 to-transparent"
      />
      <span className="font-academy-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
        02 — Multidisciplinary
      </span>
      <div className="mt-auto max-w-[380px]">
        <h3 className="font-academy text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.04] tracking-[-0.06em]">
          Design meets
          <br />
          engineering.
        </h3>
      </div>
    </article>
  );
}

function CuriosityCard() {
  return (
    <article
      data-motion-reveal
      className="flex min-h-[280px] flex-col justify-between gap-8 rounded-2xl bg-[#EAE6FB] p-6 text-[#111115] sm:p-8 lg:col-span-12 lg:min-h-[260px] lg:flex-row lg:items-end lg:p-10 dark:bg-[#2a2740] dark:text-[#F5F5F7]"
    >
      <div className="max-w-[520px]">
        <span className="font-academy-mono text-[10px] uppercase tracking-[0.14em] text-[#514585] dark:text-[#B6ABF1]">
          03 — The human side
        </span>
        <h3 className="mt-5 font-academy text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.03] tracking-[-0.07em]">
          Curiosity is a skill.
        </h3>
        <p className="mt-4 max-w-[400px] text-sm leading-relaxed text-[#111115]/65 dark:text-[#F5F5F7]/70 sm:text-[15px]">
          Space to experiment, question assumptions and develop your own point of view.
        </p>
      </div>
      <div className="flex items-end gap-3 lg:justify-end">
        <span className="font-academy text-[clamp(5rem,12vw,9rem)] leading-[0.85] tracking-[-0.1em]">
          05
        </span>
        <span className="pb-1 font-academy-mono text-[9px] uppercase tracking-[0.13em] text-[#514585] dark:text-[#B6ABF1] lg:pb-2">
          Learning
          <br />
          paths
        </span>
      </div>
    </article>
  );
}

export function HomeProof() {
  return (
    <section
      aria-labelledby="proof-title"
      className="bg-[#F5F5F7] py-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20 lg:py-28"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-academy-mono text-[9px] uppercase tracking-[0.12em] sm:text-[10px]">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[#8B7BDB]" />
            04 / Our commitment
          </span>
          <span className="text-[#111115]/50 dark:text-[#F5F5F7]/50">
            Built in the real world
          </span>
        </div>

        <div
          data-motion-reveal
          className="mt-8 mb-10 grid gap-6 sm:mt-12 sm:mb-14 lg:mt-16 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <h2
            id="proof-title"
            className="font-academy text-[clamp(3rem,10vw,6.5rem)] leading-[0.98] tracking-[-0.075em]"
          >
            The work is
            <br />
            <span className="text-[#8B7BDB]">the proof.</span>
          </h2>
          <p className="max-w-[400px] text-[15px] leading-relaxed text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-base">
            An education shaped by doing the work, testing the details and sharing what we learn.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <ChallengeCard />
          <CraftCard />
          <CuriosityCard />
        </div>
      </Container>
    </section>
  );
}
