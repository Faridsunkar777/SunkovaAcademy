import { learningCourses } from "@/lib/learning";
import { LearnModuleTheme } from "@/components/learn/module-theme";

export function generateStaticParams() {
  return Object.values(learningCourses).flatMap(course => [
    ...course.modules.map(module => ({ slug: course.slug, moduleId: module.id })),
    ...(course.capstone?.brief ? [{ slug: course.slug, moduleId: "capstone" }] : []),
  ]);
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string; moduleId: string }> }) {
  const { slug, moduleId } = await params;
  return <LearnModuleTheme slug={slug} moduleId={moduleId} />;
}
