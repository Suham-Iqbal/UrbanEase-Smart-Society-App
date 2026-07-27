export default function Loading() {
  return (
    <div className="site-container min-h-[70vh] pb-20 pt-32" aria-label="Loading page">
      <div className="h-4 w-36 animate-pulse rounded-full bg-emerald-100" />
      <div className="mt-6 h-14 max-w-2xl animate-pulse rounded-2xl bg-slate-100" />
      <div className="mt-4 h-14 max-w-xl animate-pulse rounded-2xl bg-slate-100" />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-48 animate-pulse rounded-2xl bg-slate-100" />
        ))}
      </div>
    </div>
  );
}
