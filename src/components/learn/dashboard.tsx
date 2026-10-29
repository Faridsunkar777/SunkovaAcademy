"use client";

import { useStoredLearner, useStoredProgress } from "@/lib/client-store";
import { LearnerShell } from "./learner-shell";
import { DashboardHero } from "./dashboard-hero";
import { DashboardCourses } from "./dashboard-courses";

export function LearnDashboard() {
  const learner = useStoredLearner();
  const progress = useStoredProgress();
  const firstName = (learner?.name || "Learner").trim().split(/\s+/)[0] || "Learner";

  return (
    <LearnerShell>
      <DashboardHero name={firstName} />
      <DashboardCourses progress={progress} />
    </LearnerShell>
  );
}
