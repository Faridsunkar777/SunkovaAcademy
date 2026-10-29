import Image from "next/image";
import { ArrowUpRight, Globe2, Mail, MapPin } from "lucide-react";
import { ContactMarker } from "./shared";

const contactLink =
  "group flex min-h-14 w-full items-center justify-between gap-3 rounded-[14px] border border-[#111115]/10 bg-white/65 px-4 py-3 text-[#111115]! transition-[border-color,background-color] duration-300 hover:border-[#8B7BDB]/60 hover:bg-[#EAE6FB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] dark:border-white/15 dark:bg-[#24242A] dark:text-[#F5F5F7]! dark:hover:border-[#8B7BDB]/75 dark:hover:bg-[#2D2A3A]";

export function ContactDetails() {
  return (
    <aside data-contact-reveal className="min-w-0">
      <figure className="m-0 overflow-hidden rounded-[20px] bg-[#EAE6FB] sm:rounded-[24px]">
        <div className="relative aspect-[3/2] sm:aspect-[16/10] lg:aspect-[5/4]">
          <Image
            src="/assets/images/contact-space.webp"
            alt="Creative workspace with computers and design equipment"
            fill
            sizes="(max-width: 1023px) calc(100vw - 40px), 45vw"
            className="object-cover"
          />
        </div>
        <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 bg-[#EAE6FB] px-4 py-4 font-academy-mono text-[9px] tracking-[0.1em] text-[#111115] sm:px-5">
          <span>CREATIVE THINKING / REAL OUTCOMES</span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[#8B7BDB]" />
            SUNKOVA ACADEMY
          </span>
        </figcaption>
      </figure>

      <div className="mt-10 sm:mt-12">
        <ContactMarker aside="A STUDIO-BORN ACADEMY">
          01 / REACH THE ACADEMY
        </ContactMarker>
        <h2 className="mt-6 font-academy text-[clamp(2.5rem,9vw,4rem)] font-normal leading-[1.06] tracking-[-0.07em] lg:text-[clamp(2.8rem,4vw,4.5rem)]">
          We&apos;re always
          <br />
          up for a <span className="text-[#6554A8] dark:text-[#B6ABF1]">chat.</span>
        </h2>
        <p className="mt-5 max-w-[440px] text-[15px] leading-[1.8] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[16px]">
          Ask about a learning path, tell us what you want to build, or get to
          know the studio behind the Academy.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:mt-8">
          <a href="mailto:hello@sunkova.com" className={contactLink}>
            <span className="inline-flex min-w-0 items-center gap-3 text-[13px] font-medium sm:text-[14px]">
              <Mail size={19} className="shrink-0 text-[#6554A8] dark:text-[#B6ABF1]" />
              <span className="break-all">hello@sunkova.com</span>
            </span>
            <ArrowUpRight size={18} className="shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
          </a>
          <a
            href="https://sunkova.com"
            target="_blank"
            rel="noopener noreferrer"
            className={contactLink}
          >
            <span className="inline-flex min-w-0 items-center gap-3 text-[13px] font-medium sm:text-[14px]">
              <Globe2 size={19} className="shrink-0 text-[#6554A8] dark:text-[#B6ABF1]" />
              Visit Sunkova Studio
            </span>
            <ArrowUpRight size={18} className="shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
          </a>
        </div>

        <p className="mt-7 inline-flex items-start gap-2 font-academy-mono text-[10px] leading-[1.7] tracking-[0.05em] text-[#111115]/50 dark:text-[#F5F5F7]/55">
          <MapPin size={15} className="mt-0.5 shrink-0 text-[#8B7BDB]" />
          NAIROBI, KENYA. LEARNING WITHOUT BORDERS.
        </p>
      </div>
    </aside>
  );
}
