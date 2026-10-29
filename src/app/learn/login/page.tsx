import type { Metadata } from "next";
import { LearnLoginPage } from "@/components/learn/login-page";

export const metadata: Metadata = {
  title: "Learner Login | Sunkova Academy",
  description: "Explore the demo learning environment at Sunkova Academy.",
};

export default function LearnerLogin() {
  return <LearnLoginPage />;
}
