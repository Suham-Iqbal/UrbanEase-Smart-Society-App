import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileText,
  LayoutDashboard,
  MessageSquareText,
  MoreHorizontal,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total residents", value: "1,248", delta: "+32", icon: Users, tone: "blue" },
  { label: "Active complaints", value: "34", delta: "8 urgent", icon: FileText, tone: "amber" },
  { label: "Bills collected", value: "87%", delta: "+6.2%", icon: CircleDollarSign, tone: "green" },
  { label: "Open SOS alerts", value: "2", delta: "Action needed", icon: AlertTriangle, tone: "red" },
] as const;

const recent = [
  ["Street light repair", "Block B · Complaint", "In progress"],
  ["Maintenance bill", "House 214 · Payment", "Received"],
  ["Water supply notice", "All residents · Notice", "Published"],
] as const;

export function AdminDashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,.35)]",
        compact ? "text-[7px]" : "text-[8px] sm:text-[9px] lg:text-[10px]",
      )}
      aria-label="UrbanEase administrator dashboard preview with demo data"
    >
      <div className="flex min-h-[24rem]">
        <aside className="hidden w-[20%] shrink-0 flex-col bg-[#0d2b40] p-[1.4em] text-white sm:flex">
          <div className="flex items-center gap-[.8em]">
            <span className="grid size-[2.6em] place-items-center rounded-[.7em] bg-emerald-500 font-black">
              U
            </span>
            <span className="text-[1.3em] font-extrabold">UrbanEase</span>
          </div>
          <p className="mt-[2.8em] px-[.4em] text-[.82em] font-bold uppercase tracking-[.16em] text-slate-500">
            Management
          </p>
          <nav className="mt-[.9em] space-y-[.45em]" aria-label="Dashboard preview navigation">
            {[
              [LayoutDashboard, "Overview"],
              [Users, "Residents"],
              [FileText, "Complaints"],
              [CircleDollarSign, "Billing"],
              [Bell, "Notices"],
              [MessageSquareText, "Community"],
              [Settings, "Settings"],
            ].map(([Icon, label], index) => {
              const NavIcon = Icon as typeof LayoutDashboard;
              return (
                <div
                  key={label as string}
                  className={cn(
                    "flex items-center gap-[.8em] rounded-[.7em] px-[.8em] py-[.75em] font-semibold",
                    index === 0 ? "bg-white/10 text-white" : "text-slate-400",
                  )}
                >
                  <NavIcon aria-hidden="true" size="1.3em" />
                  {label as string}
                </div>
              );
            })}
          </nav>
          <div className="mt-auto rounded-[.9em] border border-emerald-400/20 bg-emerald-400/10 p-[1.1em]">
            <p className="font-bold text-emerald-300">System status</p>
            <p className="mt-[.35em] text-slate-400">All core services operational</p>
          </div>
        </aside>

        <div className="min-w-0 flex-1 bg-[#f6f8fb] p-[1.5em] sm:p-[1.8em]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-slate-500">Monday, 27 July</p>
              <h3 className="mt-[.2em] text-[1.7em] font-extrabold tracking-[-0.04em] text-slate-950">
                Good morning, Ayesha
              </h3>
            </div>
            <div className="flex items-center gap-[.7em]">
              <span className="hidden rounded-[.65em] border border-slate-200 bg-white px-[1em] py-[.7em] text-slate-500 md:flex md:items-center md:gap-[.7em]">
                <Search aria-hidden="true" size="1.2em" />
                Search records
              </span>
              <span className="grid size-[2.9em] place-items-center rounded-full bg-emerald-600 font-extrabold text-white">
                AK
              </span>
            </div>
          </div>

          <div className="mt-[1.7em] grid grid-cols-2 gap-[1em] xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1em] border border-slate-200/80 bg-white p-[1.25em]">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "grid size-[2.8em] place-items-center rounded-[.8em]",
                      item.tone === "green" && "bg-emerald-50 text-emerald-700",
                      item.tone === "blue" && "bg-blue-50 text-blue-700",
                      item.tone === "amber" && "bg-amber-50 text-amber-700",
                      item.tone === "red" && "bg-red-50 text-red-600",
                    )}
                  >
                    <item.icon aria-hidden="true" size="1.4em" />
                  </span>
                  <MoreHorizontal aria-hidden="true" size="1.25em" className="text-slate-400" />
                </div>
                <p className="mt-[1.2em] text-slate-500">{item.label}</p>
                <div className="mt-[.2em] flex items-end justify-between gap-2">
                  <strong className="text-[1.65em] tracking-[-0.04em] text-slate-950">
                    {item.value}
                  </strong>
                  <span
                    className={cn(
                      "text-[.84em] font-bold",
                      item.tone === "red" ? "text-red-600" : "text-emerald-600",
                    )}
                  >
                    {item.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[1.1em] grid gap-[1.1em] lg:grid-cols-[1.45fr_1fr]">
            <div className="rounded-[1em] border border-slate-200/80 bg-white p-[1.35em]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[1.15em] font-extrabold text-slate-950">Payment collection</p>
                  <p className="mt-[.25em] text-slate-500">Six-month overview · demo data</p>
                </div>
                <span className="flex items-center gap-[.45em] rounded-[.6em] border border-slate-200 px-[.7em] py-[.5em] font-semibold text-slate-600">
                  2026 <ChevronDown aria-hidden="true" size="1em" />
                </span>
              </div>
              <div className="mt-[2em] flex h-[10em] items-end justify-between gap-[.85em] border-b border-l border-slate-200 px-[1em]">
                {[48, 65, 56, 77, 70, 87].map((height, index) => (
                  <div key={index} className="flex h-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-[.45em] bg-gradient-to-t from-emerald-600 to-emerald-400"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-[.7em] grid grid-cols-6 text-center text-[.82em] font-semibold text-slate-400">
                {["Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>

            <div className="rounded-[1em] border border-slate-200/80 bg-white p-[1.35em]">
              <p className="text-[1.15em] font-extrabold text-slate-950">Complaint status</p>
              <p className="mt-[.25em] text-slate-500">Current workload</p>
              <div className="mx-auto mt-[1.2em] grid aspect-square max-w-[10em] place-items-center rounded-full bg-[conic-gradient(#10b981_0_58%,#2563eb_58%_80%,#f59e0b_80%_94%,#ef4444_94%)]">
                <div className="grid size-[68%] place-items-center rounded-full bg-white text-center">
                  <span>
                    <strong className="block text-[1.65em] text-slate-950">34</strong>
                    <span className="text-slate-500">active</span>
                  </span>
                </div>
              </div>
              <div className="mt-[1.2em] grid grid-cols-2 gap-[.65em]">
                {[
                  ["Resolved", "58%", "bg-emerald-500"],
                  ["In progress", "22%", "bg-blue-600"],
                  ["Open", "14%", "bg-amber-500"],
                  ["Urgent", "6%", "bg-red-500"],
                ].map(([label, value, color]) => (
                  <div key={label} className="flex items-center gap-[.5em] text-slate-600">
                    <span className={cn("size-[.65em] rounded-full", color)} />
                    <span>{label}</span>
                    <strong className="ml-auto text-slate-900">{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {!compact && (
            <div className="mt-[1.1em] overflow-hidden rounded-[1em] border border-slate-200/80 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-[1.35em] py-[1em]">
                <p className="text-[1.15em] font-extrabold text-slate-950">Recent activity</p>
                <span className="font-bold text-emerald-700">View all</span>
              </div>
              {recent.map(([title, meta, status]) => (
                <div
                  key={title}
                  className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 border-b border-slate-100 px-[1.35em] py-[.9em] last:border-b-0"
                >
                  <span className="font-bold text-slate-800">{title}</span>
                  <span className="text-slate-500">{meta}</span>
                  <span className="flex items-center gap-[.4em] rounded-full bg-emerald-50 px-[.7em] py-[.35em] font-bold text-emerald-700">
                    <CheckCircle2 aria-hidden="true" size="1em" />
                    {status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
