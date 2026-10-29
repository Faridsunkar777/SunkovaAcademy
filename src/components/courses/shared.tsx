import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export { Container } from "@/components/home/shared";

export function CourseMarker({ left, right }: { left: string; right?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-academy-mono text-[9px] uppercase tracking-[0.12em] sm:text-[10px]">
      <span className="inline-flex items-center gap-2 text-[#111115] dark:text-[#F5F5F7]">
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#8B7BDB]" />
        {left}
      </span>
      {right && <span className="text-[#111115]/50 dark:text-[#F5F5F7]/50">{right}</span>}
    </div>
  );
}

export function CoursePill({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-between gap-5 rounded-full px-5 text-[12px] font-semibold transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] motion-reduce:transform-none ${light ? "bg-[#F5F5F7]! text-[#111115]! hover:bg-[#EAE6FB]!" : "bg-[#111115]! text-[#F5F5F7]! dark:bg-[#F5F5F7]! dark:text-[#111115]!"}`}
    >
      <span className="text-inherit">{children}</span>
      <ArrowUpRight size={18} strokeWidth={1.7} className="shrink-0 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transform-none" />
    </Link>
  );
}
