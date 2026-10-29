import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory, coursesFor } from "@/lib/catalog";
import { CategoryHero } from "@/components/courses/category-hero";
import { CategoryOpportunity, CategoryCourses } from "@/components/courses/category-content";
import { CatalogueCTA } from "@/components/courses/catalogue-cta";

export function generateStaticParams() {
  return categories.map(category => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return { title: category?.title ?? "Program", description: category?.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const courses = coursesFor(slug);
  return <><CategoryHero category={category} /><CategoryOpportunity category={category} /><CategoryCourses courses={courses} /><CatalogueCTA category /></>;
}
