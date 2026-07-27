import { ArrowRight, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function SiteCta() {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0b2b40] px-6 py-12 shadow-[0_30px_90px_-45px_rgba(15,23,42,.75)] sm:px-10 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-14 -top-28 size-80 rounded-full border-[42px] border-emerald-400/10"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-24 w-80 -translate-x-1/2 rounded-t-full bg-blue-500/10 blur-2xl"
          />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-300">
                Start the conversation
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
                Ready to modernize your society?
              </h2>
              <p className="mt-4 text-pretty text-base leading-7 text-slate-300">
                Bring residents, management, and community services together
                through one organized digital platform.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Request a demo
                <ArrowRight aria-hidden="true" size={17} />
              </ButtonLink>
              <ButtonLink
                href="/contact#contact-details"
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <PhoneCall aria-hidden="true" size={17} />
                Contact our team
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
