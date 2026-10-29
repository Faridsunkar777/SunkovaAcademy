
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

const container =
  "mx-auto w-[calc(100%-40px)] max-w-[1376px] sm:w-[calc(100%-72px)] lg:w-[calc(100%-112px)]";

function StoryMedia({ active }: { active: number }) {
  const currentScene = scenes[active] ?? scenes[0];

  return (
    <div
      className="hidden self-start lg:sticky lg:top-28 lg:block"
      aria-hidden="true"
    >
      <div
        className="
          relative
          aspect-[5/4]
          overflow-hidden
          rounded-[22px]
          bg-[#EAE6FB]
          shadow-[0_20px_60px_rgba(17,17,21,0.10)]
          dark:bg-[#222228]
          dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
        {/* Crossfading artwork */}
        {scenes.map((scene, index) => (
          <div
            key={scene.number}
            className={`
              absolute inset-0
              transition-opacity
              duration-700
              ease-in-out
              motion-reduce:transition-none
              ${
                active === index
                  ? "z-10 opacity-100"
                  : "z-0 opacity-0"
              }
            `}
          >
            <Image
              src={scene.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 1px, 53vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Chapter counter */}
        <div
          className="
            absolute top-5 right-5 left-5 z-20
            flex items-center justify-between
            rounded-full
            border border-white/15
            bg-[#111115]/80
            px-5 py-3
            font-academy-mono
            text-[10px]
            tracking-[0.14em]
            text-[#F5F5F7]
            backdrop-blur-md
          "
        >
          <span>STUDIO NOTES</span>

          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[#8B7BDB]"
            />
            <span>{currentScene.number} / 03</span>
          </div>
        </div>

        {/* Image footer */}
        <div
          className="
            absolute right-5 bottom-5 left-5 z-20
            flex items-center justify-between
            gap-3
            rounded-xl
            border border-white/15
            bg-[#111115]/80
            px-5 py-4
            font-academy-mono
            text-[10px]
            uppercase
            tracking-[0.13em]
            text-[#F5F5F7]
            backdrop-blur-md
          "
        >
          <span>{currentScene.foot}</span>

          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#8B7BDB]"
          />
        </div>
      </div>

      {/* Progress dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {scenes.map((scene, index) => (
          <span
            key={scene.number}
            className={`
              h-1.5 rounded-full
              transition-[width,background-color]
              duration-500
              motion-reduce:transition-none
              ${
                active === index
                  ? "w-8 bg-[#8B7BDB]"
                  : "w-1.5 bg-[#111115]/20 dark:bg-white/20"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

function StoryStep({
  scene,
  index,
  active,
}: {
  scene: (typeof scenes)[number];
  index: number;
  active: number;
}) {
  const isActive = active === index;

  return (
    <article
      data-story-step
      className="
        relative
        flex flex-col justify-center
        border-t border-[#111115]/15
        py-14
        dark:border-white/15
        lg:min-h-[78vh]
        lg:py-24
      "
    >
      {/* Chapter number and label */}
      <div
        className="
          flex items-center justify-between gap-4
          font-academy-mono
          text-[10px]
          uppercase
          tracking-[0.14em]
        "
      >
        <span className="flex items-center gap-3">
          <span
            className={`
              size-1.5 rounded-full
              transition-colors duration-300
              ${
                isActive
                  ? "bg-[#8B7BDB]"
                  : "bg-[#111115]/25 dark:bg-white/30"
              }
            `}
          />

          {scene.number} / 03
        </span>

        <span className="text-[#111115]/55 dark:text-[#F5F5F7]/55">
          {scene.label}
        </span>
      </div>

      {/* Chapter heading */}
      <h3
        className="
          mt-9
          max-w-[560px]
          font-academy
          text-[clamp(2.5rem,4.4vw,4.75rem)]
          font-normal
          leading-[1.08]
          tracking-[-0.065em]
          text-[#111115]
          dark:text-[#F5F5F7]
        "
      >
        {scene.title}
      </h3>

      {/* Supporting paragraph */}
      <p
        className="
          mt-7
          max-w-[460px]
          text-[15px]
          leading-[1.85]
          text-[#111115]/65
          dark:text-[#F5F5F7]/65
          sm:text-[17px]
        "
      >
        {scene.copy}
      </p>

      {/* Mobile imagery */}
      <div
        className="
          relative
          mt-9
          aspect-[16/10]
          overflow-hidden
          rounded-[20px]
          bg-[#EAE6FB]
          dark:bg-[#222228]
          lg:hidden
        "
      >
        <Image
          src={scene.image}
          alt={scene.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1px"
          className="object-cover"
        />

        <span
          className="
            absolute right-4 bottom-4 left-4
            rounded-lg
            bg-[#111115]/85
            px-4 py-3
            font-academy-mono
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-[#F5F5F7]
            backdrop-blur-sm
          "
        >
          {scene.foot}
        </span>
      </div>

      {/* Chapter progress line */}
      <div
        className="
          mt-10 h-px w-full
          overflow-hidden
          bg-[#111115]/15
          dark:bg-white/15
          lg:mt-14
        "
      >
        <div
          className={`
            h-full bg-[#8B7BDB]
            transition-[width] duration-700 ease-out
            motion-reduce:transition-none
            ${
              isActive || index < active
                ? "w-full"
                : "w-0"
            }
          `}
        />
      </div>
    </article>
  );
}

export function BrandStory() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop-only scroll interaction.
      // Mobile and reduced-motion users see every
      // chapter and its own image without pinning.
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const steps =
            root.current?.querySelectorAll<HTMLElement>(
              "[data-story-step]"
            );

          if (!steps) return;

          steps.forEach((step, index) => {
            ScrollTrigger.create({
              trigger: step,
              start: "top 60%",
              end: "bottom 40%",
              onEnter: () => setActive(index),
              onEnterBack: () => setActive(index),
            });
          });
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      id="method"
      ref={root}
      aria-labelledby="brand-story-title"
      className="
        relative
        bg-[#F5F5F7]
        py-20
        text-[#111115]
        transition-colors duration-300
        dark:bg-[#111115]
        dark:text-[#F5F5F7]
        lg:py-32
      "
    >
      {/* Section introduction */}
      <div className={container}>
        <div
          className="
            flex items-center justify-between gap-4
            border-t border-[#111115]/15
            pt-5
            font-academy-mono
            text-[10px]
            uppercase
            tracking-[0.14em]
            dark:border-white/20
          "
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[#8B7BDB]"
            />
            <span>02 / THE METHOD</span>
          </div>

          <span className="text-[#111115]/55 dark:text-[#F5F5F7]/55">
            THE SUNKOVA WAY
          </span>
        </div>

        <div
          className="
            grid gap-8
            py-14
            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
            lg:gap-16
            lg:py-20
          "
        >
          <h2
            id="brand-story-title"
            className="
              font-academy
              text-[clamp(3.5rem,7vw,7rem)]
              font-normal
              leading-[0.98]
              tracking-[-0.075em]
            "
          >
            Less theory.
            <br />
            <span className="text-[#111115]/55 dark:text-[#F5F5F7]/55">
              More made.
            </span>
          </h2>

          <p
            className="
              max-w-[440px]
              text-[16px]
              leading-[1.85]
              text-[#111115]/65
              dark:text-[#F5F5F7]/65
              lg:pb-2
            "
          >
            Our approach comes from the studio:
            curiosity, craft, and the responsibility
            to make things work beyond the classroom.
          </p>
        </div>
      </div>

      {/* Sticky media and scrolling chapters */}
      <div
        className={`
          ${container}
          grid gap-10
          lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
          lg:items-start
          lg:gap-16
        `}
      >
        <StoryMedia active={active} />

        <div>
          {scenes.map((scene, index) => (
            <StoryStep
              key={scene.number}
              scene={scene}
              index={index}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Supports the new modular homepage import:
// import { HomeStory } from "@/components/home/story";
export { BrandStory as HomeStory };
