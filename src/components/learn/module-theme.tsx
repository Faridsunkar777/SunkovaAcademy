import { ModuleClient } from "./module/module-client";

/** Keeps the previously refactored /learn route intact without legacy CSS overrides. */
export function LearnModuleTheme({ slug, moduleId }: { slug: string; moduleId: string }) {
  return <ModuleClient slug={slug} moduleId={moduleId} />;
}
