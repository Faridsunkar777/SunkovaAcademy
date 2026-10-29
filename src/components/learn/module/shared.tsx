import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, ExternalLink } from "lucide-react";

export const cardSurface = "rounded-[20px] border border-[#111115]/10 bg-white p-5 text-[#111115] dark:border-white/15 dark:bg-[#24242A] dark:text-[#F5F5F7] sm:p-8";
export const secondaryText = "text-[#111115]/65 dark:text-[#F5F5F7]/65";
export const monoLabel = "font-academy-mono text-[10px] font-medium uppercase tracking-[0.12em]";
export const inputStyle = "mt-2 block w-full min-w-0 rounded-xl border border-[#111115]/15 bg-[#F5F5F7] px-4 py-3 text-[14px] text-[#111115] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-[#111115]/40 focus:border-[#8B7BDB] focus:ring-2 focus:ring-[#8B7BDB]/20 dark:border-white/20 dark:bg-[#1A1A20] dark:text-[#F5F5F7] dark:placeholder:text-[#F5F5F7]/40";
export const fieldLabel = "block text-[13px] font-medium text-[#111115] dark:text-[#F5F5F7]";
export const primaryButton = "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#111115]! px-5 text-[13px] font-semibold text-[#F5F5F7]! transition-[scale,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 dark:bg-[#F5F5F7]! dark:text-[#111115]! motion-reduce:transition-none";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className={`flex items-center gap-2 ${monoLabel} text-[#6554A8] dark:text-[#B6ABF1]`}><span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#8B7BDB]" />{children}</div>;
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`${cardSurface} ${className}`}>{children}</section>;
}

export function PanelTitle({ children }: { children: ReactNode }) {
  return <h2 className="mt-4 font-academy text-[clamp(1.7rem,3.4vw,2.75rem)] font-normal leading-[1.13] tracking-[-0.055em]">{children}</h2>;
}

export function MarkdownContent({ value }: { value?: string | null }) {
  if (!value) return <p className={`text-[14px] ${secondaryText}`}>This section is being prepared.</p>;
  return (
    <div className={`min-w-0 space-y-4 text-[14px] leading-[1.85] sm:text-[15px] ${secondaryText} [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1 [&_a]:text-[#6554A8] [&_a]:underline [&_a]:underline-offset-4 dark:[&_a]:text-[#B6ABF1] [&_blockquote]:border-l-2 [&_blockquote]:border-[#8B7BDB] [&_blockquote]:pl-4 [&_code]:break-words [&_code]:rounded [&_code]:bg-[#EAE6FB] [&_code]:px-1 dark:[&_code]:bg-[#3A354E] [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_p]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-[#111115] [&_pre]:p-4 [&_pre]:text-[#F5F5F7] [&_ul]:list-disc [&_ul]:space-y-2`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}<ExternalLink aria-hidden="true" size={12} />
            </a>
          ),
        }}
      >{value}</ReactMarkdown>
    </div>
  );
}

export function Checklist({ items }: { items?: string[] | null }) {
  if (!items?.length) return <p className={`text-[14px] ${secondaryText}`}>Content coming soon.</p>;
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#EAE6FB] text-[#6554A8] dark:bg-[#403C52] dark:text-[#B6ABF1]"><Check size={12} /></span>
          <div className="min-w-0 flex-1"><MarkdownContent value={item} /></div>
        </li>
      ))}
    </ul>
  );
}

export function Subheading({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 mb-3 font-academy text-[20px] font-normal tracking-[-0.04em] text-[#111115] dark:text-[#F5F5F7]">{children}</h3>;
}

export function CompletedNotice({ children }: { children: ReactNode }) {
  return <div role="status" className="flex items-start gap-3 rounded-[16px] border border-[#8B7BDB]/35 bg-[#EAE6FB] p-4 text-[14px] leading-[1.7] text-[#28213C] dark:bg-[#332F45] dark:text-[#F5F5F7]"><Check size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-[#6554A8] dark:text-[#B6ABF1]" /><div>{children}</div></div>;
}
