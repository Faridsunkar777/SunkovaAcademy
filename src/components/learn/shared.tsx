import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export { Container } from "@/components/home/shared";

export function LearnMarker({ left, right }: { left: string; right?: string }) {
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

export function LearnPill({ href, children, fullWidth = false }: { href: string; children: ReactNode; fullWidth?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-[52px] items-center justify-between gap-4 rounded-full bg-[#111115]! px-5 text-[13px] font-semibold text-[#F5F5F7]! transition-[scale,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] motion-reduce:transition-none dark:bg-[#F5F5F7]! dark:text-[#111115]! ${fullWidth ? "w-full" : "w-fit"}`}
    >
      <span className="text-inherit">{children}</span>
      <ArrowRight size={18} strokeWidth={1.7} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
    </Link>
  );
}
