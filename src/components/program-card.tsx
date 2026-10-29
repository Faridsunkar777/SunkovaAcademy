import Link from 'next/link';
import { type Category } from '@/lib/catalog';
import { ArrowUpRight } from './icons';
export function ProgramCard({category,compact=false}:{category:Category;compact?:boolean}){return <Link className={'program-card '+(compact?'program-card-compact':'')} href={'/courses/'+category.slug}>
 <div className="program-card-image"><img src={category.image} alt="" loading="lazy"/><span className="program-card-num">{category.number} / 05</span></div>
 <div className="program-card-copy"><div><span className="eyebrow dark-eyebrow">{category.duration} · LIVE & SELF-PACED</span><h3>{category.title}</h3><p>{category.description}</p></div><span className="round-arrow" aria-label="View program"><ArrowUpRight size={19}/></span></div>
 </Link>}
