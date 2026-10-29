import { type CourseModule } from "@/lib/learning";
import { Checklist, Eyebrow, Panel, PanelTitle, secondaryText, Subheading } from "./shared";

export function LessonIntro({ content, summary }: { content: NonNullable<CourseModule["content"]>; summary?: string }) {
  return (
    <Panel>
      <Eyebrow>THE QUESTION</Eyebrow>
      <PanelTitle>{content.essentialQuestion || "What will you build?"}</PanelTitle>
      {summary && <p className={`mt-5 text-[15px] leading-[1.8] ${secondaryText}`}>{summary}</p>}
      <Subheading>By the end, you can…</Subheading>
      <Checklist items={content.objectives} />
    </Panel>
  );
}
