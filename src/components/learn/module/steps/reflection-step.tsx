"use client";

import { type FormEvent } from "react";
import { Check } from "lucide-react";
import { fieldLabel, inputStyle, primaryButton, secondaryText } from "../shared";

export function ReflectionStep({ questions, reflections, onChange, onSubmit }: {
  questions?: string[];
  reflections: string[];
  onChange: (index: number, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return <div>
    <p className={`text-[14px] leading-[1.8] ${secondaryText}`}>What changed in how you think? Capture it for your own growth.</p>
    <form className="mt-6 space-y-5" onSubmit={onSubmit}>
      {questions?.map((question, index) => <label key={index} className={fieldLabel}><span>{question}</span><textarea rows={4} value={reflections[index] || ""} onChange={(event) => onChange(index, event.target.value)} placeholder="Your reflection..." className={inputStyle} /></label>)}
      {!questions?.length && <p className={`text-[13px] ${secondaryText}`}>Reflection questions are being prepared.</p>}
      <button className={primaryButton} type="submit">Save reflections <Check size={17} /></button>
    </form>
  </div>;
}
