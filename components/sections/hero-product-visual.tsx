import { Bell, CircleDollarSign, FileCheck2, Siren } from "lucide-react";
import { RealAdminDashboardPreview } from "@/components/dashboard-preview/real-admin-dashboard-preview";
import { PhoneShell } from "@/components/mobile-preview/phone-shell";

const indicators = [
  { label: "Bills", value: "87% collected", icon: CircleDollarSign, className: "-left-2 top-[11%] bg-white text-emerald-700" },
  { label: "Complaints", value: "34 active", icon: FileCheck2, className: "-right-3 top-[20%] bg-white text-blue-700" },
  { label: "SOS", value: "2 open", icon: Siren, className: "-left-5 bottom-[24%] bg-red-600 text-white" },
  { label: "Notices", value: "12 this month", icon: Bell, className: "-right-2 bottom-[13%] bg-white text-amber-700" },
] as const;

export function HeroProductVisual() {
  return (
    <div className="relative mx-auto min-h-[500px] w-full max-w-[650px] lg:min-h-[570px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 bottom-3 top-14 rounded-[3rem] bg-gradient-to-br from-blue-100 via-white to-emerald-100 ring-1 ring-slate-200"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-14 left-10 right-10 h-32 rounded-[50%] bg-emerald-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-10 bottom-7 flex h-36 items-end gap-2 overflow-hidden rounded-b-[2.4rem] opacity-45"
      >
        {[42, 72, 55, 88, 64, 96, 58, 78].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-lg border border-emerald-800/10 bg-emerald-200/80 [background-image:radial-gradient(circle,#ffffff_1.2px,transparent_1.3px)] [background-size:12px_12px]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="absolute left-0 top-[18%] w-[86%] origin-left scale-[.78] sm:top-[14%] sm:scale-[.84] lg:scale-[.9]">
        <RealAdminDashboardPreview compact />
      </div>
      <div className="absolute bottom-0 right-[5%] z-20 origin-bottom-right scale-[.72] sm:scale-[.84] lg:scale-[.9]">
        <PhoneShell screen="Home" />
      </div>

      {indicators.map((item) => (
        <div
          key={item.label}
          className={`absolute z-30 hidden items-center gap-2 rounded-xl border border-slate-200/80 px-3 py-2 shadow-[0_14px_35px_-18px_rgba(15,23,42,.5)] sm:flex ${item.className}`}
        >
          <item.icon aria-hidden="true" size={16} />
          <span>
            <strong className="block text-[10px]">{item.label}</strong>
            <span className="block text-[9px] opacity-70">{item.value}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
