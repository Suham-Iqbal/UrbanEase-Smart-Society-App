import Link from "next/link";
import { ArrowLeft, MapPinOff } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[75vh] place-items-center overflow-hidden bg-slate-50 px-4 pb-20 pt-32 text-center">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/45 blur-3xl"
      />
      <div className="max-w-xl">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#0d2b40] text-emerald-300">
          <MapPinOff aria-hidden="true" size={29} />
        </span>
        <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">404 · Not found</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-5xl">
          This community route doesn’t exist.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          The page may have moved, or the address may be incorrect. Return to
          the UrbanEase home page to continue.
        </p>
        <Link href="/" className={buttonClasses({ size: "lg", className: "mt-8" })}>
          <ArrowLeft aria-hidden="true" size={17} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
