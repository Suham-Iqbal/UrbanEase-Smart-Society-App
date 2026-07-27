"use client";

import { useState } from "react";
import { Check, ExternalLink, Smartphone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PhoneShell, type PhoneScreen } from "@/components/mobile-preview/phone-shell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const screens: PhoneScreen[] = [
  "Home",
  "Complaints",
  "Bills",
  "Notices",
  "Emergency",
  "Community",
  "Community Chat",
  "Map",
];

const androidAppUrl = "https://play.google.com/store/apps/details?id=com.urbanease.mobile&hl=en";

const benefits = [
  "Faster access to society services",
  "Real-time complaint updates",
  "Secure, organized digital records",
  "Instant emergency support",
  "Stronger community communication",
];

export function MobileShowcase() {
  const [active, setActive] = useState<PhoneScreen>("Home");
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-pad overflow-hidden bg-[#071a2b]">
      <div className="site-container">
        <SectionHeading
          eyebrow="Resident application"
          title="Everything residents need, right in their pocket."
          description="One focused mobile experience for daily services, official communication, community support, and urgent situations."
          invert
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="relative min-h-[560px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="relative z-10"
                initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.24 }}
              >
                <PhoneShell screen={active} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Mobile application previews"
            >
              {screens.map((screen) => (
                <button
                  key={screen}
                  type="button"
                  role="tab"
                  aria-selected={active === screen}
                  onClick={() => setActive(screen)}
                  className={cn(
                    "min-h-10 rounded-xl border px-3.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/20",
                    active === screen
                      ? "border-emerald-400 bg-emerald-400 text-[#071a2b]"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white",
                  )}
                >
                  {screen}
                </button>
              ))}
            </div>

            <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.045] p-6">
              <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-emerald-300">
                <Smartphone aria-hidden="true" size={17} />
                Built for everyday access
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Check aria-hidden="true" size={12} strokeWidth={3} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a
                  href={androidAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download UrbanEase from the Google Play Store"
                >
                  Download our app on Play Store
                  <ExternalLink aria-hidden="true" size={17} />
                </a>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                disabled
                title="iOS release coming soon"
                className="border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                iOS - Coming soon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
