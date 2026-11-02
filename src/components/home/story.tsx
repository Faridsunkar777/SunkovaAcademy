"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "./shared";

/* ==========================================
   STORY DATA
========================================== */

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
] as const;

type Scene = (typeof scenes)[number];

/*
  Extra scroll distance the sticky image stays visible after
  Chapter 03's top border reaches the top of the image. This is what keeps
  image 03 on screen long enough to read before the sticky
  container releases.
*/
const FINAL_IMAGE_VIEWING_DISTANCE = 220;

/* ==========================================
   STICKY VISUAL
========================================== */

function StickyVisual({ active }: { active: number }) {
  const current = scenes[active] ?? scenes[0];

  return (
    <div
      data-story-sticky
      className="
        hidden
        self-start
        lg:sticky
        lg:top-[max(7rem,calc((100svh-520px)/2))]
        lg:block
      "
    >
      <div
        data-story-visual
        className="
          relative
          h-[min(520px,calc(100svh-150px))]
          min-h-[360px]
          overflow-hidden
          rounded-[22px]
          bg-[#EAE6FB]
          dark:bg-[#24242A]
        "
      >
        {scenes.map((scene, index) => {
          const isActive = index === active;
          return (
            <div
              key={scene.number}
              aria-hidden={!isActive}
              className={`
                absolute inset-0
                ${isActive ? "z-10 opacity-100" : "z-0 opacity-0"}
              `}
            >
              <Image
                src={scene.image}
                alt=""
                fill
                /* Image 01 is the first one the user sees in this section */
                priority={index === 0}
                /* Images 02 and 03 must already be decoded by the time their
                   chapter reaches its divider. `loading="eager"` helps ensure they
                   are fetched immediately instead of waiting for a lazy
                   intersection. */
                loading={index === 0 ? undefined : "eager"}
                sizes="(min-width: 1024px) 50vw, 1px"
                className="object-cover"
                onError={() => {
                  console.error(
                    `Failed to load story image: ${scene.image}`
                  );
                }}
              />
            </div>
          );
        })}

        {/* Image overlay */}
        <div
          className="
            pointer-events-none
            absolute inset-0 z-20
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-black/25
          "
        />

        {/* Image metadata */}
        <div
          className="
            absolute top-5 right-5 left-5 z-30
            flex justify-between gap-4
            font-academy-mono
            text-[10px]
            tracking-[0.12em]
            text-white
          "
        >
          <span>STUDIO NOTES</span>
          <span>{current.number} / 03</span>
        </div>

        <div
          className="
            absolute right-5 bottom-5 left-5 z-30
            font-academy-mono
            text-[10px]
            tracking-[0.12em]
            text-white
          "
        >
          {current.foot}
        </div>
      </div>

      {/* Chapter indicators */}
      <div
        aria-label={`Chapter ${active + 1} of ${scenes.length}`}
        className="mt-4 flex justify-center gap-2"
      >
        {scenes.map((scene, index) => (
          <span
            key={scene.number}
            className={`
              h-1.5 rounded-full
              transition-[width,background-color]
              duration-300
              motion-reduce:transition-none
              ${
                index === active
                  ? "w-7 bg-[#8B7BDB]"
                  : "w-1.5 bg-[#111115]/20 dark:bg-white/20"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

/* ==========================================
   CHAPTER
========================================== */

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
      data-story-step={index}
      data-story-trigger={index}
      className={`
        py-10
        first:pt-0
        last:pb-0
        sm:py-12
        lg:flex
        lg:min-h-[min(540px,76svh)]
        lg:flex-col
        lg:justify-center
        lg:py-16
        ${index > 0 ? "border-t border-[#8B7BDB]/55" : ""}
      `}
    >
      {/* The heading keeps its original padding and layout. The trigger is
          the article's top border, not this padded heading. */}
      <div>
        <div
          className="
            flex flex-wrap items-center
            gap-x-4 gap-y-1
            font-academy-mono
            text-[10px]
            tracking-[0.12em]
          "
        >
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

        <h3
          className="
            mt-5
            max-w-[540px]
            font-academy
            text-[clamp(2.3rem,9vw,3.5rem)]
            leading-[1.08]
            font-normal
            tracking-[-0.065em]
            sm:text-[clamp(3rem,5vw,4.5rem)]
            lg:mt-7
          "
        >
          {scene.title}
        </h3>
      </div>

      <p
        className="
          mt-5
          max-w-[470px]
          text-[15px]
          leading-[1.8]
          text-[#111115]/65
          dark:text-[#F5F5F7]/65
          sm:text-[17px]
        "
      >
        {scene.copy}
      </p>

      {/* Mobile image */}
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
          className="block h-auto w-full object-contain"
        />
      </figure>
    </article>
  );
}

/* ==========================================
   MAIN HOME STORY
========================================== */

export function HomeStory() {
  const root = useRef<HTMLElement>(null);
  const runwayRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = root.current;
    const runway = runwayRef.current;
    if (!section || !runway) return;

    const grid = section.querySelector<HTMLElement>(
      "[data-story-grid]"
    );
    const sticky = section.querySelector<HTMLElement>(
      "[data-story-sticky]"
    );
    const visual = section.querySelector<HTMLElement>(
      "[data-story-visual]"
    );
    const chapter02 = section.querySelector<HTMLElement>(
      '[data-story-trigger="1"]'
    );
    const chapter03 = section.querySelector<HTMLElement>(
      '[data-story-trigger="2"]'
    );

    if (!grid || !sticky || !visual || !chapter02 || !chapter03) {
      return;
    }

    const desktopQuery = window.matchMedia(
      "(min-width: 1024px)"
    );

    let frameId: number | null = null;
    let disposed = false;

    /* ======================================
       RUNWAY

       The runway is invisible space added
       below Chapter 03 in the right column.

       It gives the sticky image extra
       scroll distance so that Chapter 03's
       divider can reach the image's top edge while
       the image is still stuck, and then
       keep image 03 visible for an extra
       FINAL_IMAGE_VIEWING_DISTANCE pixels
       before the sticky releases.
    ====================================== */
    const updateRunway = () => {
      if (!desktopQuery.matches) {
        if (runway.style.height !== "0px") {
          runway.style.height = "0px";
        }
        return;
      }

      const gridRect = grid.getBoundingClientRect();
      const chapter03Rect =
        chapter03.getBoundingClientRect();
      const stickyHeight =
        sticky.getBoundingClientRect().height;
      const currentRunway =
        runway.getBoundingClientRect().height;

      /* Available space below Chapter 03's
         top border, excluding whatever the
         runway is currently contributing. */
      const availableWithoutRunway =
        gridRect.bottom -
        chapter03Rect.top -
        currentRunway;

      const requiredSpace =
        stickyHeight + FINAL_IMAGE_VIEWING_DISTANCE;

      const requiredRunway = Math.max(
        0,
        Math.ceil(requiredSpace - availableWithoutRunway)
      );

      if (
        Math.abs(currentRunway - requiredRunway) > 1
      ) {
        runway.style.height = `${requiredRunway}px`;
      }
    };

    /* ======================================
       IMAGE ACTIVATION

       01 stays active until Chapter 02's top
       divider meets the sticky image top.

       02 stays active until Chapter 03's top
       divider meets that exact same line.

       03 stays active afterward.

       Reverse scrolling follows the same
       boundaries naturally.
    ====================================== */
    const syncActiveImage = () => {
      frameId = null;
      if (disposed) return;

      if (!desktopQuery.matches) {
        updateRunway();
        setActive((previous) =>
          previous === 0 ? previous : 0
        );
        return;
      }

      updateRunway();

      /* Top edge of the actual image (the
         sticky visual, not the whole
         sticky wrapper which includes the
         chapter indicators below). */
      const imageTop =
        visual.getBoundingClientRect().top;

      const chapter02Top =
        chapter02.getBoundingClientRect().top;
      const chapter03Top =
        chapter03.getBoundingClientRect().top;

      let nextActive = 0;

      /* Compare actual article borders (purple lines), not the
         chapter headings nested beneath 64px of top padding.
         Small epsilon avoids subpixel rounding discrepancies. */
      if (chapter03Top <= imageTop + 1) {
        nextActive = 2;
      } else if (chapter02Top <= imageTop + 1) {
        nextActive = 1;
      }

      setActive((previous) =>
        previous === nextActive
          ? previous
          : nextActive
      );
    };

    /* ======================================
       FRAME-SYNCHRONIZED SCROLL HANDLER
    ====================================== */
    const scheduleSync = () => {
      if (disposed || frameId !== null) return;
      frameId = window.requestAnimationFrame(
        syncActiveImage
      );
    };

    window.addEventListener("scroll", scheduleSync, {
      passive: true,
    });
    window.addEventListener("resize", scheduleSync);
    desktopQuery.addEventListener(
      "change",
      scheduleSync
    );

    /*
      Recalculate when the section, the
      sticky visual, or the anchors change
      size (responsive layouts, font
      loading, image reflow, etc.).
    */
    const resizeObserver = new ResizeObserver(
      scheduleSync
    );
    resizeObserver.observe(section);
    resizeObserver.observe(sticky);
    resizeObserver.observe(chapter02);
    resizeObserver.observe(chapter03);

    document.fonts.ready.then(() => {
      if (!disposed) scheduleSync();
    });

    // First pass.
    scheduleSync();

    return () => {
      disposed = true;
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      desktopQuery.removeEventListener(
        "change",
        scheduleSync
      );
      resizeObserver.disconnect();
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={root}
      id="method"
      aria-labelledby="brand-story-title"
      className="
        bg-[#F5F5F7]
        pt-10 pb-16
        text-[#111115]
        dark:bg-[#111115]
        dark:text-[#F5F5F7]
        sm:pt-14 sm:pb-20
        lg:pt-16 lg:pb-24
      "
    >
      <Container>
        {/* Section eyebrow */}
        <div
          className="
            flex flex-wrap items-center
            justify-between
            gap-x-4 gap-y-2
            font-academy-mono
            text-[9px]
            tracking-[0.12em]
            sm:text-[10px]
          "
        >
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

        {/* Section introduction */}
        <div
          className="
            mt-8
            grid gap-5
            sm:mt-12 sm:gap-7
            lg:mb-12
            lg:grid-cols-[1.2fr_0.8fr]
            lg:items-end
            lg:gap-10
          "
        >
          <h2
            id="brand-story-title"
            className="
              font-academy
              text-[clamp(2.8rem,11vw,5rem)]
              leading-[1]
              font-normal
              tracking-[-0.07em]
              lg:text-[clamp(4.5rem,7vw,7rem)]
            "
          >
            Less theory.
            <br />
            <span className="text-[#111115]/50 dark:text-[#F5F5F7]/50">
              More made.
            </span>
          </h2>

          <p
            className="
              max-w-[460px]
              text-[15px]
              leading-[1.8]
              text-[#111115]/65
              dark:text-[#F5F5F7]/65
              sm:text-[17px]
            "
          >
            Our approach comes from the studio:
            curiosity, craft, and the responsibility
            to make things work beyond the classroom.
          </p>
        </div>

        {/* =====================================
            STORY GRID
        ===================================== */}
        <div
          data-story-grid
          className="
            mt-10
            grid min-w-0 gap-8
            sm:mt-12
            lg:grid-cols-[1.08fr_0.92fr]
            lg:items-start
            lg:gap-[7%]
            lg:pb-32
          "
        >
          {/* Sticky image */}
          <StickyVisual active={active} />

          {/* Scrollable chapters */}
          <div className="min-w-0">
            {scenes.map((scene, index) => (
              <Chapter
                key={scene.number}
                scene={scene}
                index={index}
                active={active}
              />
            ))}

            {/*
              DYNAMIC SCROLL RUNWAY

              Invisible spacer whose height is
              computed by the effect above. It
              keeps the sticky image stuck long
              enough for Chapter 03's divider to reach the
              image's top edge, and for image 03
              to be visible before the sticky
              releases.

              Height is managed via `runwayRef`
              so React never reconciles it back
              to 0.
            */}
            <div
              ref={runwayRef}
              data-story-runway
              aria-hidden="true"
              className="hidden lg:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
