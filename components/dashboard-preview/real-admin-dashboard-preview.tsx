import Image from "next/image";
import { cn } from "@/lib/utils";

type RealAdminDashboardPreviewProps = {
  compact?: boolean;
  className?: string;
};

export function RealAdminDashboardPreview({
  compact = false,
  className,
}: RealAdminDashboardPreviewProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-emerald-950/10 bg-white shadow-[0_26px_70px_-32px_rgba(6,78,59,0.45)]",
        compact ? "rounded-2xl" : "rounded-[1.75rem]",
        className,
      )}
    >
      <div className="relative aspect-[1280/582] overflow-hidden bg-slate-100">
        <Image
          src="/images/urbanease-admin-dashboard.png"
          alt="UrbanEase admin control center showing residents, providers, complaints, announcements, services, map directory, and SOS activity"
          fill
          priority={compact}
          sizes={
            compact
              ? "(max-width: 1024px) 90vw, 650px"
              : "(max-width: 1024px) 100vw, 1200px"
          }
          className="object-cover object-[50%_61%]"
        />
      </div>
    </div>
  );
}
