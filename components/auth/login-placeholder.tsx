"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LoginPlaceholder({
  role,
  accent,
  description,
}: {
  role: string;
  accent: "green" | "blue" | "violet";
  description: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-[calc(100vh-4.75rem)] overflow-hidden bg-slate-50 pb-20 pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_50%_0%,#dff7e9,transparent_55%)]"
      />
      <div className="site-container">
        <Link
          href="/portal"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          Back to portal selection
        </Link>
        <div className="mx-auto mt-8 grid max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_-50px_rgba(15,23,42,.6)] lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-[#0d2b40] p-7 text-white sm:p-10">
            <div
              aria-hidden="true"
              className={cn(
                "absolute -right-20 -top-20 size-64 rounded-full blur-3xl",
                accent === "green" && "bg-emerald-400/25",
                accent === "blue" && "bg-blue-400/25",
                accent === "violet" && "bg-violet-400/25",
              )}
            />
            <div className="relative">
              <span className={cn(
                "grid size-12 place-items-center rounded-2xl",
                accent === "green" && "bg-emerald-400 text-emerald-950",
                accent === "blue" && "bg-blue-400 text-blue-950",
                accent === "violet" && "bg-violet-400 text-violet-950",
              )}>
                <ShieldCheck aria-hidden="true" size={24} />
              </span>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
                {role} access
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.045em]">
                Welcome back to UrbanEase.
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
              <div className="mt-8 space-y-3 text-sm font-semibold text-slate-300">
                {[
                  "Role-aware access",
                  "Protected account session",
                  "Society-specific workspace",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 aria-hidden="true" size={16} className="text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
              Sign in
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Use the credentials associated with your UrbanEase account.
            </p>

            <form onSubmit={onSubmit} className="mt-7">
              <label className="block text-sm font-bold text-slate-800">
                Email address
                <span className="relative mt-2 block">
                  <Mail aria-hidden="true" size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="min-h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </span>
              </label>
              <label className="mt-5 block text-sm font-bold text-slate-800">
                Password
                <span className="relative mt-2 block">
                  <LockKeyhole aria-hidden="true" size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="min-h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-11 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2.5 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff aria-hidden="true" size={16} /> : <Eye aria-hidden="true" size={16} />}
                  </button>
                </span>
              </label>
              <div className="mt-4 flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <input type="checkbox" className="size-4 accent-emerald-600" />
                  Remember me
                </label>
                <Link href="/contact" className="text-xs font-bold text-emerald-700 hover:text-emerald-800">
                  Forgot password?
                </Link>
              </div>

              {submitted && (
                <div role="status" className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-800">
                  This is a website preview. Connect this form to the production
                  UrbanEase authentication service to sign in.
                </div>
              )}

              <Button type="submit" size="lg" className="mt-6 w-full">
                Sign in to {role.toLowerCase()} portal
              </Button>
            </form>
            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              Need access? Contact your society management team or{" "}
              <Link href="/contact" className="font-bold text-emerald-700">
                UrbanEase support
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
