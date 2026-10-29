"use client";

import { Check } from "lucide-react";
import { MarkdownContent, primaryButton } from "../shared";

export function LearnStep({ notes, onComplete }: { notes?: string | null; onComplete: () => void }) {
  return <div className="space-y-7"><MarkdownContent value={notes} /><button className={primaryButton} type="button" onClick={onComplete}>Mark as read <Check size={17} /></button></div>;
}
