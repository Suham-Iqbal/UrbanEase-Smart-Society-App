import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "mb-4 text-xs font-extrabold uppercase tracking-[0.18em]",
          invert ? "text-emerald-300" : "text-emerald-700",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-balance text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[2.75rem]",
          invert ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-7 sm:text-lg",
            invert ? "text-slate-300" : "text-slate-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
