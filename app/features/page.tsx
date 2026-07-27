import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  FileCheck2,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteCta } from "@/components/sections/site-cta";
import { detailedModules } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Platform Features | UrbanEase",
  description:
    "Explore UrbanEase modules for resident verification, digital billing, complaints, notices, SOS alerts, services, community chat, maps, and admin analytics.",
  alternates: { canonical: "/features" },
};

function ModulePreview({ index }: { index: number }) {
  const modes = [
    {
      title: "Resident verified",
      icon: ShieldCheck,
      value: "Account active",
      rows: ["Sara Ahmed", "Block C · House 214", "Verified 24 July"],
    },
    {
      title: "Complaint tracking",
      icon: FileCheck2,
      value: "In progress",
      rows: ["Street light repair", "Assigned to maintenance", "Updated 20 min ago"],
    },
    {
      title: "Payment overview",
      icon: CircleDollarSign,
      value: "87% collected",
      rows: ["PKR 2.84M received", "162 payments pending", "Monthly target on track"],
    },
    {
      title: "Community activity",
      icon: MessageCircle,
      value: "42 online",
      rows: ["286 verified members", "12 notices this month", "3 moderated threads"],
    },
    {
      title: "Society locations",
      icon: MapPin,
      value: "12 amenities",
      rows: ["Main gate", "Central park", "Admin office"],
    },
  ];
  const mode = modes[index % modes.length];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-12 size-32 rounded-full bg-emerald-200/50 blur-2xl"
      />
      <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_45px_-32px_rgba(15,23,42,.4)]">
        <div className="flex items-center justify-between">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            <mode.icon aria-hidden="true" size={19} />
          </span>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold text-emerald-700">
            Live preview
          </span>
        </div>
        <p className="mt-5 text-xs font-semibold text-slate-500">{mode.title}</p>
        <p className="mt-1 text-xl font-extrabold tracking-[-0.04em] text-slate-950">{mode.value}</p>
        <div className="mt-5 space-y-2">
          {mode.rows.map((row, rowIndex) => (
            <div key={row} className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-600">
              <span className={`size-2 rounded-full ${rowIndex === 0 ? "bg-emerald-500" : "bg-slate-300"}`} />
              {row}
            </div>
          ))}
        </div>
      </div>
      <p className="relative mt-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
        Illustrative UrbanEase interface
      </p>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container text-center">
          <p className="eyebrow">One connected platform</p>
          <h1 className="page-title mx-auto max-w-4xl">
            Every module a modern society needs to operate with clarity.
          </h1>
          <p className="page-copy mx-auto max-w-2xl">
            UrbanEase connects resident services, society operations, and
            community communication without turning daily tasks into complicated
            workflows.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg">
              Request a tailored demo
              <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
            <ButtonLink href="/for-societies" variant="outline" size="lg">
              See the admin experience
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-6">
        <div className="site-container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold text-slate-600">
          {["Resident-first", "Admin-ready", "Role-aware", "Responsive", "Built for Pakistan"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Check aria-hidden="true" size={15} className="text-emerald-600" strokeWidth={3} />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Explore the modules"
            title="Purpose-built workflows, not a collection of disconnected tools."
            description="Each UrbanEase module addresses a specific resident or management problem while contributing to one consistent society record."
          />
          <div className="mt-12 space-y-6">
            {detailedModules.map((module, index) => (
              <Reveal key={module.title}>
                <article className="grid gap-8 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,.35)] sm:p-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:p-10">
                  <div className={index % 2 ? "lg:order-2" : ""}>
                    <span className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <FeatureIcon name={module.icon} size={23} />
                    </span>
                    <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                      {module.title}
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-red-100 bg-red-50/60 p-4">
                        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-red-700">The problem</p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">{module.problem}</p>
                      </div>
                      <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-700">UrbanEase solution</p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">{module.solution}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-extrabold text-slate-900">Main actions</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {module.actions.map((action) => (
                          <span key={action} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-extrabold text-slate-900">For residents</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{module.residentBenefit}</p>
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-slate-900">For management</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{module.managementBenefit}</p>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 ? "lg:order-1" : ""}>
                    <ModulePreview index={index} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteCta />
    </>
  );
}
