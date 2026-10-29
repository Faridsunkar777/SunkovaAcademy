"use client";

import { type FormEvent } from "react";
import { Check } from "lucide-react";
import { fieldLabel, inputStyle, primaryButton, secondaryText } from "./shared";

export function SubmissionForm({ link, notes, fileName, onLink, onNotes, onFileName, onSubmit, capstone = false }: {
  link: string;
  notes: string;
  fileName: string;
  onLink: (value: string) => void;
  onNotes: (value: string) => void;
  onFileName: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  capstone?: boolean;
}) {
  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5">
      <label className={fieldLabel}>Project link
        <input type="url" value={link} onChange={(event) => onLink(event.target.value)} placeholder="https://your-project..." className={inputStyle} />
      </label>
      <label className={fieldLabel}>{capstone ? "Submission notes" : "Optional notes"}
        <textarea rows={4} value={notes} onChange={(event) => onNotes(event.target.value)} placeholder="What did you make?" className={inputStyle} />
      </label>
      <label className={fieldLabel}>File (filename only)
        <input type="file" onChange={(event) => onFileName(event.target.files?.[0]?.name || "")} className={`${inputStyle} file:mr-4 file:rounded-full file:border-0 file:bg-[#EAE6FB] file:px-3 file:py-1.5 file:text-[12px] file:text-[#514585] dark:file:bg-[#403C52] dark:file:text-[#F5F5F7]`} />
      </label>
      {fileName && <p className={`text-[12px] ${secondaryText}`}>Selected: {fileName}</p>}
      <p className={`text-[12px] leading-[1.75] ${secondaryText}`}>This demo saves the link and filename in this browser only. The file itself is not uploaded.</p>
      <button type="submit" disabled={!link.trim() && !fileName.trim()} className={primaryButton}>{capstone ? "Save capstone locally" : "Save submission"}<Check size={17} aria-hidden="true" /></button>
    </form>
  );
}
