'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {learningCourses} from '@/lib/learning';
export default function LegacyCourse(){const router=useRouter();useEffect(()=>{const slug=new URLSearchParams(window.location.search).get('course');router.replace(slug&&slug in learningCourses?'/learn/course/'+slug:'/learn');},[router]);return <p className="learner-loading">Opening your course…</p>}
