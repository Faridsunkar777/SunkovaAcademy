'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {learningCourses} from '@/lib/learning';
export default function LegacyModule(){const router=useRouter();useEffect(()=>{const p=new URLSearchParams(window.location.search);const slug=p.get('course'),mod=p.get('module');router.replace(slug&&mod&&slug in learningCourses?`/learn/course/${slug}/module/${mod}`:'/learn');},[router]);return <p className="learner-loading">Opening your module…</p>}
