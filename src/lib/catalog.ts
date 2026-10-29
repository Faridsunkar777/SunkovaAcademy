import catalog from '@/data/catalog.json';

export type Category = (typeof catalog.categories)[number];
export type CatalogueCourse = (typeof catalog.courses)[number];
export const categories: Category[] = catalog.categories;
export const courses: CatalogueCourse[] = catalog.courses;
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const coursesFor = (slug: string) => courses.filter((c) => c.categorySlug === slug);
