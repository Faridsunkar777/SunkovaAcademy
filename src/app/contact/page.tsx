import type { Metadata } from "next";
import { ContactMotion } from "@/components/contact/contact-motion";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Have a question about Sunkova Academy? Write us at hello@sunkova.com.",
};

export default function ContactPage() {
  return (
    <ContactMotion>
      <ContactHero />
      <ContactSection />
    </ContactMotion>
  );
}
