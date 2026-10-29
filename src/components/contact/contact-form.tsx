"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { categories } from "@/lib/catalog";

const fieldClass =
  "block w-full min-w-0 rounded-[14px] border border-[#111115]/15! bg-white/80! px-4 py-3.5 text-[15px] text-[#111115]! placeholder:text-[#111115]/35! outline-none transition-[border-color,box-shadow] duration-300 focus:border-[#8B7BDB]! focus:ring-2 focus:ring-[#8B7BDB]/20! dark:border-white/20! dark:bg-[#1A1A20]! dark:text-[#F5F5F7]! dark:placeholder:text-[#F5F5F7]/35! dark:focus:border-[#8B7BDB]!";

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[13px] font-medium text-[#111115] dark:text-[#F5F5F7]"
    >
      {children}
    </label>
  );
}

export function ContactForm() {
  const params = useSearchParams();
  const requestedProgram = params.get("program")?.trim() ?? "";
  const [editedMessage, setEditedMessage] = useState<string | null>(null);
  const [editedInterest, setEditedInterest] = useState<string | null>(null);
  const [openedDraft, setOpenedDraft] = useState(false);

  const matchedCategory = categories.find(
    (category) => category.title.toLowerCase() === requestedProgram.toLowerCase(),
  );
  const initialInterest = !requestedProgram
    ? "General enquiry"
    : matchedCategory
      ? matchedCategory.title
      : requestedProgram.toLowerCase() === "academy enrolment"
        ? "Academy enrolment"
        : "Specific course enquiry";

  const interest = editedInterest ?? initialInterest;
  const message =
    editedMessage ??
    (requestedProgram
      ? `I'm interested in ${requestedProgram}. I'd like to know more about enrolment and the learning format.`
      : "");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const selectedInterest = String(form.get("interest") ?? "General enquiry").trim();
    const note = String(form.get("message") ?? "").trim();

    if (!name || !email || !note) return;

    const subject = `Sunkova Academy enquiry — ${requestedProgram || selectedInterest}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Interest: ${selectedInterest}`,
      ...(requestedProgram ? [`Requested program: ${requestedProgram}`] : []),
      "",
      note,
    ].join("\n");

    // This opens the visitor's own email application. It does not send the message.
    window.location.href = `mailto:hello@sunkova.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpenedDraft(true);
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[22px] border border-[#111115]/10 bg-[#EAE6FB]/60 p-5 text-[#111115] dark:border-white/15 dark:bg-[#24242A] dark:text-[#F5F5F7] sm:rounded-[24px] sm:p-8 lg:p-10"
    >
      <div className="inline-flex items-center gap-2 font-academy-mono text-[10px] tracking-[0.13em] text-[#6554A8] dark:text-[#B6ABF1]">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-[#8B7BDB]" />
        02 / SEND US A NOTE
      </div>

      <h2 className="mt-6 font-academy text-[clamp(2.35rem,8vw,3.8rem)] font-normal leading-[1.08] tracking-[-0.065em]">
        Tell us a little
        <br />
        about you.
      </h2>
      <p className="mt-4 max-w-[430px] text-[14px] leading-[1.75] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[15px]">
        Share what you&apos;re curious about. We&apos;ll help you find a good place to start.
      </p>

      <div className="mt-9 grid gap-5">
        <div>
          <FieldLabel htmlFor="contact-name">Your name</FieldLabel>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="contact-email">Email address</FieldLabel>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="contact-interest">What interests you?</FieldLabel>
          <div className="relative">
            <select
              id="contact-interest"
              name="interest"
              value={interest}
              onChange={(event) => setEditedInterest(event.target.value)}
              className={`${fieldClass} appearance-none pr-12`}
            >
              <option value="General enquiry">General enquiry</option>
              <option value="Academy enrolment">Academy enrolment</option>
              <option value="Specific course enquiry">Specific course enquiry</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.title}>
                  {category.title}
                </option>
              ))}
              <option value="Team / corporate training">Team / corporate training</option>
            </select>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#111115]/60 dark:text-[#F5F5F7]/65"
            />
          </div>
        </div>
        <div>
          <FieldLabel htmlFor="contact-message">Your message</FieldLabel>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell us what you'd love to learn or build…"
            value={message}
            onChange={(event) => setEditedMessage(event.target.value)}
            required
            className={`${fieldClass} min-h-[150px] resize-y`}
          />
        </div>
      </div>

      <p className="mt-5 max-w-[480px] text-[12px] leading-[1.7] text-[#111115]/60 dark:text-[#F5F5F7]/65">
        This opens your email application with a prefilled draft. Nothing is submitted
        to our website; you&apos;ll need to send the email in your mail app.
      </p>

      <button
        type="submit"
        className="group mt-6 flex min-h-14 w-full items-center justify-between gap-4 rounded-full bg-[#111115]! py-1.5 pr-1.5 pl-5 text-[13px] font-semibold text-[#F5F5F7]! transition-[scale,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] motion-reduce:scale-100 motion-reduce:transition-none dark:bg-[#F5F5F7]! dark:text-[#111115]!"
      >
        <span className="text-inherit">Open email draft</span>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 text-[#F5F5F7]! transition-colors duration-300 group-hover:bg-[#8B7BDB]! group-hover:text-[#111115]! dark:bg-[#111115]/10 dark:text-[#111115]! dark:group-hover:bg-[#8B7BDB]! dark:group-hover:text-[#111115]!">
          <ArrowUpRight
            size={19}
            className="transition-transform duration-500 group-hover:rotate-45 motion-reduce:transform-none"
          />
        </span>
      </button>

      {openedDraft ? (
        <p role="status" className="mt-5 text-[13px] leading-[1.7] text-[#111115]/75 dark:text-[#F5F5F7]/75">
          Your email app should open with a draft. Please send it there to complete
          your enquiry. If it didn&apos;t open, email{" "}
          <a href="mailto:hello@sunkova.com" className="underline decoration-[#8B7BDB] underline-offset-4">
            hello@sunkova.com
          </a>.
        </p>
      ) : null}
    </form>
  );
}
