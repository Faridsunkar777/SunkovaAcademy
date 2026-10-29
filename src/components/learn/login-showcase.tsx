import Image from "next/image";
import { Check } from "lucide-react";

const steps = ["Watch & understand", "Practice & apply", "Build & reflect"];

export function LoginShowcase() {
  return (
    <aside className="relative isolate flex min-h-[370px] min-w-0 flex-col justify-between overflow-hidden rounded-[22px] bg-[#211F2C] p-6 text-[#F5F5F7] sm:min-h-[460px] sm:rounded-[26px] sm:p-9 lg:min-h-[640px] lg:p-12">
      <Image
        src="/assets/images/hero-vr.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 1023px) 100vw, 55vw"
        className="-z-20 object-cover object-center opacity-60"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#111115]/95 via-[#111115]/70 to-[#111115]/45" />
      <div className="flex items-center gap-2.5 font-academy-mono text-[9px] uppercase tracking-[0.12em] text-white/75 sm:text-[10px]">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-[#8B7BDB]" />
        WELCOME TO YOUR LEARNING SPACE
      </div>
      <div className="mt-12 max-w-[530px]">
        <h1 className="font-academy text-[clamp(2.9rem,8vw,5rem)] leading-[1.02] font-normal tracking-[-0.075em] lg:text-[clamp(4rem,5vw,6rem)]">
          Great work<br />starts <span className="text-[#B6ABF1]">here.</span>
        </h1>
        <p className="mt-5 max-w-[350px] text-[15px] leading-[1.75] text-white/75 sm:mt-7">
          Every module is an opportunity to understand something new and create something real.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 sm:mt-10 lg:flex-col lg:gap-4">
          {steps.map(step => (
            <span key={step} className="inline-flex items-center gap-2.5 text-[12px] text-white/85 sm:text-[13px]">
              <Check size={16} strokeWidth={1.7} className="shrink-0 text-[#B6ABF1]" />
              {step}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
