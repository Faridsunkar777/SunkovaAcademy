import { Suspense } from "react";
import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";
import { Container } from "./shared";

function FormLoading() {
  return (
    <div
      role="status"
      className="flex min-h-[600px] items-center justify-center rounded-[22px] border border-[#111115]/10 bg-[#EAE6FB]/60 px-6 text-center font-academy-mono text-[11px] text-[#111115]/60 dark:border-white/15 dark:bg-[#24242A] dark:text-[#F5F5F7]/70"
    >
      Preparing the enquiry form…
    </div>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact-details"
      aria-label="Contact information and enquiry form"
      className="scroll-mt-24 bg-[#F5F5F7] py-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20 lg:py-28"
    >
      <Container>
        <div className="grid min-w-0 items-start gap-12 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          <ContactDetails />
          <div data-contact-reveal className="min-w-0">
            <Suspense fallback={<FormLoading />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
