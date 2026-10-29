
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "./shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const scenes = [
  {
    number: "01",
    label: "THINK IN SYSTEMS",
    title: "Start with the question.",
    copy:
      "Learn to frame a real problem, not just follow a tutorial. Understand the people, the constraints, and what a useful solution actually looks like.",
    image: "/assets/images/editorial-studio.webp",
    alt: "Sunkova creative studio and design work",
    foot: "FRAME / RESEARCH / EXPLORE",
  },
  {
    number: "02",
    label: "MAKE THE WORK",
    title: "Build your way through it.",
    copy:
      "Work from realistic briefs. Make decisions, test the details, and learn the technical and creative craft that separates a concept from a finished product.",
    image: "/assets/images/hero-device.webp",
    alt: "Digital product interface on a mobile device",
    foot: "DESIGN / PROTOTYPE / ENGINEER",
  },
  {
    number: "03",
    label: "SHOW THE EVIDENCE",
    title: "Leave with something real.",
    copy:
      "Every learning path leads toward demonstrable work: a prototype, a working app, a security assessment, or a piece of motion design you can stand behind.",
    image: "/assets/images/editorial-cohort.webp",
    alt: "Creative collaboration and hands-on learning",
    foot: "TEST / REFINE / SHIP",
  },
];

type Scene = (typeof scenes)[number];

function StickyVisual({ active }: { active: number }) {
  const current = scenes[active] ?? scenes[0];

  return (
    <div
      className="
        hidden
        self-start
        lg:sticky
        lg:top-[max(7rem,calc((100svh-520px)/2))]
        lg:block
      "
    >
      <div className="relative h-[min(520px,calc(100svh-150px))] min-h-[360px] overflow-hidden rounded-[22px] bg-[#EAE6FB] dark:bg-[#24242A]">
        {scenes.map((scene, index) => (
          <div
            key={scene.number}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              index === active
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            <Image
              src={scene.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 1px"
              className="object-cover"
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

        <div className="absolute top-5 right-5 left-5 z-30 flex justify-between gap-4 font-academy-mono text-[10px] tracking-[0.12em] text-white">
          <span>STUDIO NOTES</span>
          <span>{current.number} / 03</span>
        </div>

        <div className="absolute right-5 bottom-5 left-5 z-30 font-academy-mono text-[10px] tracking-[0.12em] text-white">
          {current.foot}
        </div>
      </div>

      <div
        aria-label={`Chapter ${active + 1} of ${scenes.length}`}
        className="mt-4 flex justify-center gap-2"
      >
        {scenes.map((scene, index) => (
          <span
            key={scene.number}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${
              index === active
                ? "w-7 bg-[#8B7BDB]"
                : "w-1.5 bg-[#111115]/20 dark:bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Chapter({
  scene,
  index,
  active,
}: {
  scene: Scene;
  index: number;
  active: number;
}) {
  return (
    <article
      data-story-step
      className={`py-10 first:pt-0 last:pb-0 sm:py-12 lg:flex lg:min-h-[min(540px,76svh)] lg:flex-col lg:justify-center lg:py-16 ${
        index > 0
          ? "border-t border-[#8B7BDB]/55"
          : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-academy-mono text-[10px] tracking-[0.12em]">
        <span
          className={
            active === index
              ? "font-medium text-[#8B7BDB]"
              : "text-[#111115]/55 dark:text-[#F5F5F7]/55"
          }
        >
          {scene.number} / 03
        </span>

        <span className="text-[#111115]/50 dark:text-[#F5F5F7]/50">
          {scene.label}
        </span>
      </div>

      <h3 className="mt-5 max-w-[540px] font-academy text-[clamp(2.3rem,9vw,3.5rem)] leading-[1.08] font-normal tracking-[-0.065em] sm:text-[clamp(3rem,5vw,4.5rem)] lg:mt-7">
        {scene.title}
      </h3>

      <p className="mt-5 max-w-[470px] text-[15px] leading-[1.8] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[17px]">
        {scene.copy}
      </p>



      {/* Responsive mobile story image */}
      <figure
        className="
          relative
          m-0
          mt-8
          w-full
          min-w-0
          overflow-hidden
          rounded-[20px]
          bg-[#EAE6FB]
          sm:rounded-[24px]
          dark:bg-[#24242A]
          lg:hidden
        "
      >
        <Image
          src={scene.image}
          alt={scene.alt}
          width={1200}
          height={800}
          sizes="(max-width: 1023px) calc(100vw - 40px), 1px"
          className="
            block
            h-auto
            w-full
            object-contain
          "
        />
      </figure>


    </article>
  );
}

export function HomeStory() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const steps = Array.from(
          root.current?.querySelectorAll<HTMLElement>(
            "[data-story-step]"
          ) ?? []
        );

        if (!root.current || !steps.length) return;

        const updateActive = () => {
          // Switch when the next chapter enters the
          // lower portion of the viewport, not its center.
          const threshold = window.innerHeight * 0.82;
          let next = 0;

          steps.forEach((step, index) => {
            if (
              step.getBoundingClientRect().top <= threshold
            ) {
              next = index;
            }
          });

          setActive((previous) =>
            previous === next ? previous : next
          );
        };

        const trigger = ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: updateActive,
          onEnter: updateActive,
          onEnterBack: updateActive,
          onRefresh: updateActive,
        });

        updateActive();

        return () => trigger.kill();
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="method"
      aria-labelledby="brand-story-title"
      className="bg-[#F5F5F7] pt-10 pb-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-academy-mono text-[9px] tracking-[0.12em] sm:text-[10px]">
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[#8B7BDB]"
            />
            02 / THE METHOD
          </span>

          <span className="text-[#111115]/55 dark:text-[#F5F5F7]/55">
            THE SUNKOVA WAY
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-7 lg:mb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
          <h2
            id="brand-story-title"
            className="font-academy text-[clamp(2.8rem,11vw,5rem)] leading-[1] font-normal tracking-[-0.07em] lg:text-[clamp(4.5rem,7vw,7rem)]"
          >
            Less theory.
            <br />
            <span className="text-[#111115]/50 dark:text-[#F5F5F7]/50">
              More made.
            </span>
          </h2>

          <p className="max-w-[460px] text-[15px] leading-[1.8] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[17px]">
            Our approach comes from the studio:
            curiosity, craft, and the responsibility
            to make things work beyond the classroom.
          </p>
        </div>

        <div className="mt-10 grid min-w-0 gap-8 sm:mt-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-[7%] lg:pb-32">
          <StickyVisual active={active} />

          <div className="min-w-0">
            {scenes.map((scene, index) => (
              <Chapter
                key={scene.number}
                scene={scene}
                index={index}
                active={active}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
