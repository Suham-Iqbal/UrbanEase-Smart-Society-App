"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-slate-50 px-4 pb-20 pt-32 text-center">
      <div className="max-w-lg">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-red-50 text-red-600">
          <AlertTriangle aria-hidden="true" size={29} />
        </span>
        <h1 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
          We couldn’t load this page.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Please try again. If the issue continues, return to the home page or
          contact the UrbanEase team.
        </p>
        <Button type="button" size="lg" className="mt-7" onClick={reset}>
          <RotateCcw aria-hidden="true" size={17} />
          Try again
        </Button>
      </div>
    </section>
  );
}
