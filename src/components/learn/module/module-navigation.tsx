import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type ModuleNavItem = { href: string; eyebrow: string; title: string };

type NavItemProps = {
  item: ModuleNavItem;
  direction: "previous" | "next";
};

function ModuleNavLink({ item, direction }: NavItemProps) {
  const isNext = direction === "next";

  return (
    <Link
      href={item.href}
      className="
        group flex min-w-0 items-center gap-4 rounded-[18px]
        border border-[#111115]/10 bg-white p-5
        text-[#111115]!
        transition-[border-color,background-color,scale] duration-[550ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:border-[#8B7BDB]/50 hover:bg-[#EAE6FB]/40
        motion-safe:hover:scale-[1.012]
        focus-visible:outline-2 focus-visible:outline-offset-3
        focus-visible:outline-[#8B7BDB]
        dark:border-white/15 dark:bg-[#24242A]
        dark:text-[#F5F5F7]! dark:hover:border-[#8B7BDB]/65
        dark:hover:bg-[#2E2A3A]
        motion-reduce:transition-none
      "
    >
      {!isNext && (
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#EAE6FB] text-[#6554A8] dark:bg-[#403C52] dark:text-[#B6ABF1]">
          <ArrowLeft
            size={17}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none"
          />
        </span>
      )}

      <span className="min-w-0 flex-1">
        <span className="block font-academy-mono text-[9px] tracking-[0.12em] text-[#111115]/50 dark:text-[#F5F5F7]/50">
          {item.eyebrow}
        </span>
        <strong className="mt-1 block text-[14px] font-semibold leading-[1.55]">
          {item.title}
        </strong>
      </span>

      {isNext && (
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#EAE6FB] text-[#6554A8] dark:bg-[#403C52] dark:text-[#B6ABF1]">
          <ArrowRight
            size={17}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
          />
        </span>
      )}
    </Link>
  );
}

export function ModuleNavigation({
  previous,
  next,
}: {
  previous: ModuleNavItem;
  next?: ModuleNavItem | null;
}) {
  return (
    <nav
      aria-label="Adjacent modules"
      className="mt-12 grid gap-3 border-t border-[#111115]/10 pt-6 dark:border-white/15 sm:mt-16 sm:grid-cols-2"
    >
      <ModuleNavLink item={previous} direction="previous" />
      {next && <ModuleNavLink item={next} direction="next" />}
    </nav>
  );
}
