import Image from "next/image";
import { Code2, ShieldCheck, Sparkles } from "lucide-react";
import { AboutMarker, Container } from "./shared";

const principles = [
  {
    id: "01",
    label: "THE PRACTICE",
    title: "Build to learn.",
    copy: "Real challenges become a bridge between understanding something and knowing how to use it.",
  },
  {
    id: "02",
    label: "THE MINDSET",
    title: "Stay curious.",
    copy: "Technology changes. Good questions, creative thinking, and the courage to try never go out of style.",
  },
  {
    id: "03",
    label: "THE RESPONSIBILITY",
    title: "Make it meaningful.",
    copy: "Learn to create technology that is useful, responsible, inclusive, and relevant in the real world.",
  },
];

export function AboutPrinciples() {
  return (
    <section
      aria-labelledby="principles-title"
      className="bg-[#F5F5F7] pt-8 pb-20 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32"
    >
      <Container>
        <AboutMarker left="02 / OUR PRINCIPLES" right="THREE THINGS WE BELIEVE" />
        <h2
          id="principles-title"
          data-motion-reveal
          className="mt-10 max-w-[1100px] font-academy text-[clamp(2.9rem,10vw,5rem)] leading-[1.02] font-normal tracking-[-0.07em] sm:mt-14 lg:mt-16 lg:text-[clamp(4.5rem,6.5vw,7rem)]"
        >
          What we believe
          <br />
          <span className="text-[#6554A8] dark:text-[#B6ABF1]">changes everything.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-3">
          {/* Principle 01: soft lavender editorial card */}
          <article
            data-motion-reveal
            className="flex min-h-[350px] min-w-0 flex-col justify-between rounded-[22px] bg-[#EAE6FB] p-6 text-[#111115] sm:min-h-[410px] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-academy-mono text-[10px] tracking-[0.13em] text-[#514585]">
                {principles[0].id} / {principles[0].label}
              </span>
              <Code2 aria-hidden="true" size={24} strokeWidth={1.5} className="shrink-0 text-[#6554A8]" />
            </div>
            <div className="mt-12">
              <h3 className="font-academy text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] font-normal tracking-[-0.06em]">
                {principles[0].title}
              </h3>
              <p className="mt-5 max-w-[360px] text-[14px] leading-[1.75] text-[#111115]/70 sm:text-[15px]">
                {principles[0].copy}
              </p>
            </div>
          </article>

          {/* Principle 02: photographic card */}
          <article
            data-motion-reveal
            className="relative isolate flex min-h-[350px] min-w-0 flex-col justify-between overflow-hidden rounded-[22px] bg-[#24242A] p-6 text-[#F5F5F7] sm:min-h-[410px] sm:p-8"
          >
            <Image
              src="/assets/images/editorial-studio.webp"
              alt=""
              fill
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 33vw"
              className="-z-20 object-cover"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#111115]/95 via-[#111115]/50 to-[#111115]/35" />
            <div className="flex items-start justify-between gap-4">
              <span className="font-academy-mono text-[10px] tracking-[0.13em] text-[#F5F5F7]/85">
                {principles[1].id} / {principles[1].label}
              </span>
              <Sparkles aria-hidden="true" size={24} strokeWidth={1.5} className="shrink-0 text-[#B6ABF1]" />
            </div>
            <div className="mt-12">
              <h3 className="font-academy text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] font-normal tracking-[-0.06em]">
                {principles[1].title}
              </h3>
              <p className="mt-5 max-w-[360px] text-[14px] leading-[1.75] text-[#F5F5F7]/80 sm:text-[15px]">
                {principles[1].copy}
              </p>
            </div>
          </article>

          {/* Principle 03: elevated charcoal card */}
          <article
            data-motion-reveal
            className="flex min-h-[350px] min-w-0 flex-col justify-between rounded-[22px] border border-white/10 bg-[#24242A] p-6 text-[#F5F5F7] sm:min-h-[410px] sm:p-8 md:col-span-2 lg:col-span-1 dark:border-white/15"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-academy-mono text-[10px] tracking-[0.13em] text-[#F5F5F7]/65">
                {principles[2].id} / {principles[2].label}
              </span>
              <ShieldCheck aria-hidden="true" size={24} strokeWidth={1.5} className="shrink-0 text-[#B6ABF1]" />
            </div>
            <div className="mt-12">
              <h3 className="font-academy text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] font-normal tracking-[-0.06em]">
                {principles[2].title}
              </h3>
              <p className="mt-5 max-w-[360px] text-[14px] leading-[1.75] text-[#F5F5F7]/70 sm:text-[15px]">
                {principles[2].copy}
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
