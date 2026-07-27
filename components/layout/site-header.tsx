"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-slate-200/80 bg-white/95 shadow-[0_12px_35px_-24px_rgba(15,23,42,.5)] backdrop-blur-xl"
          : "border-transparent bg-white/75 backdrop-blur-md",
      )}
    >
      <div className="site-container flex h-[4.75rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/20"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 xl:flex">
          <ButtonLink href="/contact" size="sm">
            Request demo
            <ArrowUpRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/20 xl:hidden"
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 xl:hidden",
          open ? "max-h-[34rem] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="site-container flex flex-col gap-1 py-5"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-slate-200 pt-5">
            <ButtonLink href="/contact" className="w-full">
              Request demo
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
