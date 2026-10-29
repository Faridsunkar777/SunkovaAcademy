"use client";

import type { FormEvent } from "react";
import type { CourseModule } from "@/lib/learning";
import { Checklist, MarkdownContent, secondaryText, Subheading } from "../shared";
import { ModuleRubric } from "../module-rubric";
import { SubmissionForm } from "../submission-form";

type Challenge = NonNullable<NonNullable<CourseModule["content"]>["challenge"]>;

export function ChallengeStep({ challenge, link, notes, fileName, onLink, onNotes, onFileName, onSubmit }: {
  challenge?: Challenge;
  link: string;
  notes: string;
  fileName: string;
  onLink: (value: string) => void;
  onNotes: (value: string) => void;
  onFileName: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return <div className="min-w-0">
    <Subheading>Your brief</Subheading><MarkdownContent value={challenge?.scenario} />
    <Subheading>What to build</Subheading><MarkdownContent value={challenge?.build} />
    <Subheading>Deliverables</Subheading><Checklist items={challenge?.deliverables} />
    {!!challenge?.constraints?.length && <><Subheading>Constraints</Subheading><Checklist items={challenge.constraints} /></>}
    {!!challenge?.hints?.length && <><Subheading>Hints</Subheading><Checklist items={challenge.hints} /></>}
    {challenge?.submissionFormat && <><Subheading>Submission format</Subheading><MarkdownContent value={challenge.submissionFormat} /></>}
    {challenge?.stretch && <><Subheading>Stretch goal</Subheading><MarkdownContent value={challenge.stretch} /></>}
    {!!challenge?.rubric?.length && <><Subheading>Assessment rubric</Subheading><ModuleRubric rows={challenge.rubric} /></>}
    <div className="mt-10"><Subheading>Save your submission</Subheading><p className={`mt-2 text-[13px] leading-[1.75] ${secondaryText}`}>Demo submission: the link and filename stay on this device. Files are not uploaded.</p><SubmissionForm link={link} notes={notes} fileName={fileName} onLink={onLink} onNotes={onNotes} onFileName={onFileName} onSubmit={onSubmit} /></div>
  </div>;
}
