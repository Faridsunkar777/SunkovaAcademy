import { ArrowDown } from "lucide-react";
import { ContactMarker, Container } from "./shared";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-[#111115] pt-36 pb-16 text-[#F5F5F7] sm:pt-44 sm:pb-20 lg:pt-52 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_88%_20%,rgba(139,123,219,0.16),transparent_57%)]"
      />
      <Container>
        <ContactMarker light aside="NAIROBI / WORLDWIDE">
          LET&apos;S START A CONVERSATION
        </ContactMarker>

        <h1
          id="contact-title"
          data-contact-reveal
          className="mt-10 max-w-[1200px] font-academy text-[clamp(3.1rem,11vw,7.5rem)] font-normal leading-[0.99] tracking-[-0.075em] sm:mt-14 lg:mt-20 lg:text-[clamp(6rem,8.7vw,9rem)]"
        >
          Big things start
          <br />
          with <span className="text-[#B6ABF1]">hello.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between sm:gap-10 lg:mt-20">
          <p className="max-w-[620px] text-[16px] leading-[1.8] text-[#F5F5F7]/70 sm:text-[18px] lg:text-[20px]">
            Interested in a course, a collaboration, or just exploring your
            options? We&apos;d love to hear from you.
          </p>
          <a
            href="#contact-details"
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 self-start font-academy-mono text-[10px] tracking-[0.12em] text-[#F5F5F7]/80 transition-colors duration-300 hover:text-[#B6ABF1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] sm:self-auto"
          >
            GET IN TOUCH
            <ArrowDown
              size={16}
              className="transition-transform duration-500 group-hover:translate-y-1 motion-reduce:transform-none"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
