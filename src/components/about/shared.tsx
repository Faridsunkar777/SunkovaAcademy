import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export { Container } from "@/components/home/shared";

export function AboutMarker({
  left,
  right,
  light = false,
}: {
  left: string;
  right?: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-academy-mono text-[9px] uppercase tracking-[0.13em] sm:text-[10px]">
      <span className={`inline-flex items-center gap-2 ${light ? "text-[#F5F5F7]" : "text-[#111115] dark:text-[#F5F5F7]"}`}>
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#8B7BDB]" />
        {left}
      </span>
      {right && (
        <span className={light ? "text-[#F5F5F7]/55" : "text-[#111115]/50 dark:text-[#F5F5F7]/50"}>
          {right}
        </span>
      )}
    </div>
  );
}

export function AboutAction({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-[#111115]! py-1.5 pr-1.5 pl-5 text-[13px] font-semibold text-[#F5F5F7]! transition-[scale,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] motion-reduce:scale-100 motion-reduce:transition-none dark:bg-[#F5F5F7]! dark:text-[#111115]! sm:w-[225px]"
    >
      <span className="text-inherit">{children}</span>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 text-[#F5F5F7]! transition-colors duration-300 group-hover:bg-[#8B7BDB]! group-hover:text-[#111115]! dark:bg-[#111115]/10 dark:text-[#111115]! dark:group-hover:bg-[#8B7BDB]! dark:group-hover:text-[#111115]!">
        <ArrowUpRight
          size={19}
          strokeWidth={1.7}
          className="transition-transform duration-500 group-hover:rotate-45 motion-reduce:transform-none"
        />
      </span>
    </Link>
  );
}
