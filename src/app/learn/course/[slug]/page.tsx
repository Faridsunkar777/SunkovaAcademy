import { learningSlugs } from '@/lib/learning';
import CourseOverview from '@/components/course-overview';
export function generateStaticParams(){return learningSlugs.map(slug=>({slug}));}
export default async function CoursePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <CourseOverview slug={slug}/>;}
