import learningData from '@/data/learning.json';
export type CourseModule = {
  id: string;
  title: string;
  summary?: string;
  hours?: number;
  status?: string;
  content?: {
    essentialQuestion?: string;
    objectives?: string[];
    watch?: { type?: string; title?: string; channel?: string; url?: string; length?: string; why?: string }[];
    notes?: string;
    quickCheck?: { q: string; a: string }[];
    challenge?: {
      scenario?: string; build?: string; deliverables?: string[]; constraints?: string[];
      hints?: string[]; submissionFormat?: string; rubric?: Record<string,string>[]; stretch?: string;
    };
    reflect?: string[];
  } | null;
};
export type LearningCourse = {
  slug: string; title: string; category: string; categorySlug: string; format: string;
  image: string; summary: string;
  overview?: { whoFor?: string; prereqs?: string; duration?: string; format?: string; outcomes?: string[]; tools?: string[] };
  bigIdea?: string; essentialQuestion?: string; courseChallenge?: string;
  weeklyPlan?: { week: number; focus: string; session: string; due: string }[];
  selfPaced?: { checkpoints?: { after: string; label: string }[] };
  modules: CourseModule[];
  capstone?: { title?:string; summary?:string; brief?: string; milestones?: {week?:number; label?:string}[]; deliverables?: string[]; rubric?: Record<string,string>[] } | null;
};
export type LearnerMeta = { slug:string; title:string; category:string; categorySlug:string; format:string; duration:string; level:string; image:string; summary:string; enrolled:boolean; moduleCount:number };
export const learnerCatalogue = learningData.catalogue as LearnerMeta[];
export const learningCourses = learningData.courses as unknown as Record<string, LearningCourse>;
export const learningSlugs = Object.keys(learningCourses);
export function learnerCourse(slug: string) { return learningCourses[slug]; }
