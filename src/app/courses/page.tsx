import type { Metadata } from "next";
import { CatalogueHero } from "@/components/courses/catalogue-hero";
import { CourseFilter } from "@/components/courses/course-filter";
import { CatalogueCTA } from "@/components/courses/catalogue-cta";

export const metadata: Metadata = {
  title: "Explore All Programs",
  description: "Explore 15 challenge-based courses across AI design, AI engineering, security, mobile development, and 3D animation.",
};

export default function CoursesPage() {
  return <><CatalogueHero /><CourseFilter /><CatalogueCTA /></>;
}
