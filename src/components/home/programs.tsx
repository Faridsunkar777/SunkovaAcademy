
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { categories, courses } from "@/lib/catalog";
import { Container } from "./shared";

// Individual program card
// Existing card design preserved.
function ProgramCard({
  category,
  index,
}: {
  category: (typeof categories)[number];
  index: number;
}) {
  return (
    <Link
      href={`/courses/${category.slug}`}
      data-motion-reveal
      className={`
        group relative isolate flex
        min-h-[425px] flex-col
        overflow-hidden rounded-2xl
        bg-[#19191d] text-white
        shadow-sm
        transition-transform duration-500
        hover:-translate-y-1.5
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#8B7BDB]
        motion-reduce:transition-none
        sm:min-h-[480px]
        lg:min-h-[510px]
        ${
          index < 2
            ? "lg:col-span-3"
            : "lg:col-span-2"
        }
      `}
    >
      {/* Card image */}
      <Image
        src={category.image}
        alt=""
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 45vw"
        className="
          -z-20 object-cover
          transition-transform duration-700
          group-hover:scale-[1.05]
          motion-reduce:transition-none
        "
      />

      {/* Original dark image gradient */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-black/25
          via-transparent
          to-black/85
        "
      />

      {/* Card metadata */}
      <div
        className="
          flex justify-between gap-3 p-6
          font-academy-mono
          text-[10px] uppercase
          tracking-[0.14em]
          sm:p-8
        "
      >
        <span>
          {String(index + 1).padStart(2, "0")} / 05
        </span>
        <span>{category.duration}</span>
      </div>

      {/* Card content */}
      <div
        className="
          mt-auto flex items-end
          justify-between gap-5
          p-6 sm:p-8
        "
      >
        <div className="max-w-[440px] min-w-0">
          <h3
            className="
              font-academy
              text-[clamp(2.5rem,4vw,4rem)]
              leading-none
              font-[450]
              tracking-[-0.06em]
              text-white
            "
          >
            {category.title}
          </h3>

          <p
            className="
              mt-4 max-w-[360px]
              text-sm leading-relaxed
              text-white/80
            "
          >
            {category.description}
          </p>
        </div>


        {/* Card arrow — Sunkova purple hover */}
        <span
          aria-hidden="true"
          className="
            grid size-11 shrink-0
            place-items-center
            rounded-full
            border border-white/60
            bg-transparent
            text-white
            transition-[background-color,border-color,color,transform]
            duration-300
            ease-out
            group-hover:rotate-45
            group-hover:border-[#8B7BDB]
            group-hover:bg-[#8B7BDB]
            group-hover:text-[#111115]
            group-focus-visible:rotate-45
            group-focus-visible:border-[#8B7BDB]
            group-focus-visible:bg-[#8B7BDB]
            group-focus-visible:text-[#111115]
            motion-reduce:transform-none
          "
        >
          <ArrowUpRight size={21} strokeWidth={1.7} />
        </span>

      </div>
    </Link>
  );
}

export function HomePrograms() {
  return (
    <section
      id="programs"
      aria-labelledby="program-title"
      className="
        bg-[#F5F5F7]
        pt-16 pb-20
        text-[#111115]
        dark:bg-[#111115]
        dark:text-[#F5F5F7]
        sm:pt-20 sm:pb-24
        lg:pt-28 lg:pb-32
      "
    >
      <Container>
        {/* Section identifier */}
        <div
          className="
            flex flex-wrap
            items-center justify-between
            gap-x-4 gap-y-2
            font-academy-mono
            text-[9px] uppercase
            tracking-[0.12em]
            sm:text-[10px]
          "
        >
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="
                size-1.5 shrink-0
                rounded-full
                bg-[#8B7BDB]
              "
            />
            03 / THE DISCIPLINES
          </span>

          <span
            className="
              text-[#111115]/55
              dark:text-[#F5F5F7]/55
            "
          >
            {String(categories.length).padStart(2, "0")} LEARNING PATHS
          </span>
        </div>

        {/* Heading and introduction */}
        <div
          data-motion-reveal
          className="
            mt-10 mb-10
            flex flex-col
            items-start justify-between
            gap-7
            sm:mt-14 sm:mb-12
            lg:mt-20 lg:mb-16
            lg:flex-row
            lg:items-end
            lg:gap-12
          "
        >
          <div className="min-w-0">
            <h2
              id="program-title"
              className="
                font-academy
                text-[clamp(3.2rem,11vw,5rem)]
                leading-[0.98]
                font-normal
                tracking-[-0.075em]
                lg:text-[clamp(4.5rem,6.5vw,7rem)]
              "
            >
              Find your
              <br />

              <span className="text-[#8B7BDB]">
                practice.
              </span>
            </h2>

            <p
              className="
                mt-6 max-w-[440px]
                text-[15px]
                leading-[1.8]
                text-[#111115]/65
                dark:text-[#F5F5F7]/65
                sm:text-[17px]
              "
            >
              Five different disciplines.
              One shared expectation: build
              something real.
            </p>
          </div>

          {/* Catalogue link */}
          <Link
            href="/courses"
            className="
              group inline-flex
              min-h-11 items-center gap-3
              text-[13px] font-medium
              text-[#111115]
              transition-colors duration-300
              hover:text-[#8B7BDB]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#8B7BDB]
              dark:text-[#F5F5F7]
              dark:hover:text-[#8B7BDB]
            "
          >
            Explore all {courses.length} courses

            <ArrowUpRight
              size={18}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                motion-reduce:transform-none
              "
            />
          </Link>
        </div>

        {/* Program cards — original layout preserved */}
        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-6
            lg:gap-5
          "
        >
          {categories.map((category, index) => (
            <ProgramCard
              key={category.slug}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Section footer */}
        <div
          className="
            mt-10 flex flex-col
            items-start justify-between
            gap-5
            sm:mt-12
            sm:flex-row
            sm:items-center
          "
        >
          <span
            className="
              font-academy-mono
              text-[9px] uppercase
              tracking-[0.12em]
              text-[#111115]/50
              dark:text-[#F5F5F7]/50
              sm:text-[10px]
            "
          >
            DESIGNED TO BE LEARNED.
            BUILT TO BE USED.
          </span>

          <Link
            href="/courses"
            className="
              group inline-flex
              min-h-11 items-center
              gap-3
              font-academy-mono
              text-[10px] uppercase
              tracking-[0.1em]
              text-[#111115]
              transition-colors duration-300
              hover:text-[#8B7BDB]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#8B7BDB]
              dark:text-[#F5F5F7]
              dark:hover:text-[#8B7BDB]
            "
          >
            VIEW THE FULL CATALOGUE

            <ArrowRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                motion-reduce:transform-none
              "
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
