import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Eyebrow, secondaryText } from "./shared";

export function ModuleHeader({
  slug,
  courseTitle,
  category,
  moduleId,
  title,
  summary,
  isCapstone,
}: {
  slug: string;
  courseTitle: string;
  category: string;
  moduleId: string;
  title: string;
  summary?: string;
  isCapstone: boolean;
}) {
  return (
    <header className="scroll-mt-44 pt-14 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
      <nav
        aria-label="Breadcrumb"
        className="mb-10 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-[#111115]/55 dark:text-[#F5F5F7]/55"
      >
        <Link
          href={`/learn/course/${slug}`}
          className="group inline-flex max-w-full items-center gap-2 transition-colors duration-300 hover:text-[#6554A8] dark:hover:text-[#B6ABF1]"
        >
          <ArrowLeft
            size={15}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none"
          />
          <span className="truncate">{courseTitle}</span>
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-[#111115] dark:text-[#F5F5F7]">
          {isCapstone ? "Capstone" : `Module ${moduleId}`}
        </span>
      </nav>

      <Eyebrow>
        {category.toUpperCase()} / {isCapstone ? "FINAL PROJECT" : `MODULE ${moduleId}`}
      </Eyebrow>

      <h1 className="mt-6 max-w-[1050px] text-balance font-academy text-[clamp(2.5rem,6.7vw,5.6rem)] font-normal leading-[1.06] tracking-[-0.07em] text-[#111115] dark:text-[#F5F5F7]">
        {title}
      </h1>
      {summary && (
        <p className={`mt-7 max-w-[760px] text-[15px] leading-[1.85] sm:text-[18px] ${secondaryText}`}>
          {summary}
        </p>
      )}
    </header>
  );
}
