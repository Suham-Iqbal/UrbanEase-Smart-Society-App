import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  inverted = false,
  compact = false,
  className,
}: {
  inverted?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="UrbanEase home"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <span className="relative size-12 shrink-0">
        <Image
          src="/images/urbanease-logo.png"
          alt=""
          fill
          priority
          sizes="48px"
          className="object-contain"
        />
      </span>
      {!compact && (
        <span
          className={cn(
            "text-[1.22rem] font-extrabold tracking-[-0.04em]",
            inverted ? "text-white" : "text-slate-950",
          )}
        >
          Urban<span className={inverted ? "text-emerald-300" : "text-emerald-600"}>Ease</span>
        </span>
      )}
    </Link>
  );
}
