import type { Metadata } from "next";
import { LearnDashboard } from "@/components/learn/dashboard";

export const metadata: Metadata = {
  title: "My Learning | Sunkova Academy",
  description: "Your Sunkova Academy learning dashboard and course progress.",
};

export default function LearnPage() {
  return <LearnDashboard />;
}
