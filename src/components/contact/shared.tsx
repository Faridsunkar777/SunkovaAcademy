import type { ReactNode } from "react";

export { Container } from "@/components/home/shared";

export function ContactMarker({
  children,
  aside,
  light = false,
}: {
  children: ReactNode;
  aside?: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 font-academy-mono text-[9px] uppercase tracking-[0.13em] sm:text-[10px]">
      <span
        className={`inline-flex items-center gap-2 ${light ? "text-[#F5F5F7]" : "text-[#111115] dark:text-[#F5F5F7]"}`}
      >
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#8B7BDB]" />
        {children}
      </span>
      {aside ? (
        <span className={light ? "text-[#F5F5F7]/55" : "text-[#111115]/50 dark:text-[#F5F5F7]/50"}>
          {aside}
        </span>
      ) : null}
    </div>
  );
}
