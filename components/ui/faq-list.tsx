import { ChevronDown } from "lucide-react";

export function FaqList({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="divide-y divide-slate-200 rounded-[1.5rem] border border-slate-200 bg-white px-5 sm:px-7">
      {items.map((item, index) => (
        <details key={item.question} className="group py-5" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-extrabold text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/20">
            {item.question}
            <ChevronDown
              aria-hidden="true"
              size={19}
              className="shrink-0 text-slate-400 transition group-open:rotate-180"
            />
          </summary>
          <p className="max-w-3xl pb-1 pt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
