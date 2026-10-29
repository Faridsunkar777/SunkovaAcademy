// Compatibility component for existing imports of '@/components/contact-form'.
// The Contact page uses the modular form directly inside its Suspense boundary.
import { Suspense } from "react";
import { ContactForm as ModularContactForm } from "./contact/contact-form";

export function ContactForm() {
  return (
    <Suspense fallback={<p>Preparing the enquiry form…</p>}>
      <ModularContactForm />
    </Suspense>
  );
}
