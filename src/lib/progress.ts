import type {LearningCourse} from './learning';
export type Learner={name:string;email:string;signedInAt:string};
export type StepId='watch'|'learn'|'check'|'challenge'|'reflect';
export const STEPS:StepId[]=['watch','learn','check','challenge','reflect'];
export type ModuleProgress={steps?:Partial<Record<StepId,boolean>>;submission?:{link?:string;fileName?:string;note?:string;at?:string};reflections?:string[];completedAt?:string};
export type Progress=Record<string,Record<string,ModuleProgress>>;
const USER_KEY='sunkova-learn-user';const PROGRESS_KEY='sunkova-learn-progress';
export const readLearner=():Learner|null=>{try{return JSON.parse(localStorage.getItem(USER_KEY)||'null')}catch{return null}};
export const saveLearner=(u:Learner)=>{localStorage.setItem(USER_KEY,JSON.stringify(u));window.dispatchEvent(new Event('sunkova-learner-change'));};
export const signOut=()=>{localStorage.removeItem(USER_KEY);window.dispatchEvent(new Event('sunkova-learner-change'));};
export const readProgress=():Progress=>{try{return JSON.parse(localStorage.getItem(PROGRESS_KEY)||'{}')||{}}catch{return {}}};
export function updateProgress(course:string,module:string,patch:Partial<ModuleProgress>){const data=readProgress();const prev=data[course]?.[module]||{};data[course]={...(data[course]||{}),[module]:{...prev,...patch,steps:{...prev.steps,...patch.steps}}};localStorage.setItem(PROGRESS_KEY,JSON.stringify(data));window.dispatchEvent(new Event('sunkova-progress-change'));return data;}
export function coursePercent(course:LearningCourse,all:Progress):number{const list=course.modules.filter(m=>m.status!=='coming-soon');const availableCapstone=!!(course.capstone&&course.capstone.brief);const total=list.length+(availableCapstone?1:0);if(!total)return 0;const done=list.reduce((acc,m)=>acc+(STEPS.filter(s=>all[course.slug]?.[m.id]?.steps?.[s]).length/STEPS.length),0)+(availableCapstone?(all[course.slug]?.capstone?.completedAt?1:0):0);return Math.round(done/total*100)}
export function nextModule(course:LearningCourse,all:Progress){return course.modules.find(m=>m.status!=='coming-soon'&&!all[course.slug]?.[m.id]?.completedAt)||course.modules.find(m=>m.status!=='coming-soon');}
export const moduleHref=(slug:string,moduleId:string)=>`/learn/course/${slug}/module/${moduleId}`;
