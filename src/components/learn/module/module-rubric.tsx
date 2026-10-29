import { secondaryText } from "./shared";

const levels = ["emerging", "developing", "proficient", "exemplary"] as const;

export function ModuleRubric({ rows }: { rows?: Record<string, string>[] | null }) {
  if (!rows?.length) return null;
  return (
    <div role="region" aria-label="Assessment rubric" tabIndex={0} className="mt-4 max-w-full overflow-x-auto rounded-xl border border-[#111115]/10 focus-visible:outline-2 focus-visible:outline-[#8B7BDB] dark:border-white/15">
      <table className="w-full min-w-[700px] border-collapse text-left text-[13px] leading-[1.6]">
        <thead className="bg-[#EAE6FB] text-[#111115] dark:bg-[#403C52] dark:text-[#F5F5F7]"><tr><th scope="col" className="px-4 py-3 font-semibold">Criterion</th>{levels.map(level => <th key={level} scope="col" className="px-4 py-3 font-semibold capitalize">{level}</th>)}</tr></thead>
        <tbody>{rows.map((row, index) => <tr key={index} className="border-t border-[#111115]/10 align-top dark:border-white/15"><th scope="row" className="px-4 py-4 font-medium">{row.criterion || `Criterion ${index + 1}`}</th>{levels.map(level => <td key={level} className={`px-4 py-4 ${secondaryText}`}>{row[level] || "—"}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
