import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="page-hero pb-12 sm:pb-14">
        <div className="site-container">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title max-w-4xl">{title}</h1>
          <p className="page-copy max-w-3xl">{intro}</p>
          <p className="mt-5 text-sm font-semibold text-slate-500">Last updated: {updated}</p>
        </div>
      </section>
      <section className="pb-20 sm:pb-24">
        <div className="site-container">
          <article className="legal-copy max-w-4xl rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,.45)] sm:p-10">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
