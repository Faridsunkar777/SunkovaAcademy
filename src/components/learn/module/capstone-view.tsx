"use client";

import type { FormEvent } from "react";
import type { LearningCourse } from "@/lib/learning";
import { Checklist, CompletedNotice, Eyebrow, MarkdownContent, Panel, PanelTitle, secondaryText } from "./shared";
import { ModuleRubric } from "./module-rubric";
import { SubmissionForm } from "./submission-form";

type Capstone = NonNullable<LearningCourse["capstone"]>;

export function CapstoneView({ capstone, completed, link, notes, fileName, onLink, onNotes, onFileName, onSubmit }: {
  capstone: Capstone;
  completed: boolean;
  link: string;
  notes: string;
  fileName: string;
  onLink: (value: string) => void;
  onNotes: (value: string) => void;
  onFileName: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.6fr)] lg:items-start">
      <div className="min-w-0 space-y-5">
        <Panel><Eyebrow>YOUR FINAL PROJECT</Eyebrow><PanelTitle>The brief</PanelTitle><div className="mt-6"><MarkdownContent value={capstone.brief} /></div></Panel>
        <Panel>
          <Eyebrow>ROADMAP</Eyebrow><PanelTitle>Milestones</PanelTitle>
          <ol className="mt-6 space-y-4">{capstone.milestones?.map((milestone, index) => (
            <li key={index} className="flex items-start gap-4 rounded-xl bg-[#F5F5F7] p-4 dark:bg-[#1A1A20]"><span className="font-academy-mono text-[12px] text-[#6554A8] dark:text-[#B6ABF1]">{String(milestone.week ?? index + 1).padStart(2, "0")}</span><p className="text-[14px] leading-[1.75]">{milestone.label}</p></li>
          ))}</ol>
        </Panel>
        <Panel><Eyebrow>WHAT TO DELIVER</Eyebrow><PanelTitle>Deliverables</PanelTitle><Checklist items={capstone.deliverables} /></Panel>
        {!!capstone.rubric?.length && <Panel><Eyebrow>ASSESSMENT</Eyebrow><PanelTitle>The rubric</PanelTitle><ModuleRubric rows={capstone.rubric} /></Panel>}
      </div>
      <div className="min-w-0 space-y-5 lg:sticky lg:top-28">
        <Panel>
          <Eyebrow>SUBMIT YOUR WORK</Eyebrow><PanelTitle>Ship your capstone.</PanelTitle>
          <p className={`mt-4 text-[13px] leading-[1.7] ${secondaryText}`}>This demo records your project link and filename only. No files are uploaded.</p>
          <SubmissionForm capstone link={link} notes={notes} fileName={fileName} onLink={onLink} onNotes={onNotes} onFileName={onFileName} onSubmit={onSubmit} />
        </Panel>
        {completed && <CompletedNotice>Capstone marked complete in this browser.</CompletedNotice>}
      </div>
    </div>
  );
}
