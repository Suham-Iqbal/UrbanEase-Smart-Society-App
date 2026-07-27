import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  FileSpreadsheet,
  Layers3,
  LockKeyhole,
  Palette,
  Settings2,
  ShieldCheck,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { RealAdminDashboardPreview } from "@/components/dashboard-preview/real-admin-dashboard-preview";
import { DemoForm } from "@/components/forms/demo-form";
import { ButtonLink } from "@/components/ui/button";
import { FaqList } from "@/components/ui/faq-list";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "UrbanEase for Housing Societies",
  description:
    "Transform resident verification, billing, complaints, announcements, emergency response, and reporting with one connected society management platform.",
  alternates: { canonical: "/for-societies" },
};

const operations = [
  ["Resident records", "Maintain verified, searchable resident and property information.", UserCheck],
  ["Billing operations", "Issue bills, monitor payments, and review collection progress.", FileSpreadsheet],
  ["Service requests", "Prioritize complaints, assign action, and track resolution status.", Layers3],
  ["Community safety", "Monitor urgent SOS alerts and coordinate response workflows.", ShieldCheck],
] as const;

const onboarding = [
  ["01", "Consultation", "Understand your society structure, priorities, and current processes."],
  ["02", "Society configuration", "Set up society details, modules, locations, and service categories."],
  ["03", "Administrator setup", "Create authorized administrator accounts and role permissions."],
  ["04", "Resident onboarding", "Invite residents and begin structured identity verification."],
  ["05", "Training", "Prepare management teams to operate their day-to-day workflows."],
  ["06", "Platform launch", "Move agreed services online and begin measured adoption."],
] as const;

const faqs = [
  {
    question: "Can UrbanEase be configured for our society’s processes?",
    answer:
      "Yes. Society information, administrator roles, available modules, service categories, notices, and community locations can be configured around the agreed operating model.",
  },
  {
    question: "How are residents added to the platform?",
    answer:
      "Residents create an account and submit the required society and property details. An authorized management team reviews and verifies the registration before full access is granted.",
  },
  {
    question: "Can different administrators have different permissions?",
    answer:
      "Yes. Role-based access is designed to separate responsibilities such as resident verification, billing, complaints, notices, emergency monitoring, and platform configuration.",
  },
  {
    question: "Is UrbanEase only suitable for large housing societies?",
    answer:
      "No. The platform is designed for apartment communities, cooperative schemes, gated societies, campuses, and mixed-use residential projects with different resident volumes.",
  },
  {
    question: "Does the demo include real resident data?",
    answer:
      "No. Product demonstrations use representative demo data unless a separate, authorized implementation workshop is arranged.",
  },
  {
    question: "Can we use our own society name and visual identity?",
    answer:
      "Custom society information and selected branding elements can be included during configuration, subject to the implementation scope.",
  },
];

export default function ForSocietiesPage() {
  return (
    <>
      <section className="page-hero overflow-hidden">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <p className="eyebrow">For society leaders</p>
            <h1 className="page-title">
              Transform daily society operations with one connected platform.
            </h1>
            <p className="page-copy">
              Give your management team a structured system for residents,
              billing, complaints, announcements, safety, services, and
              operational reporting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#request-demo" size="lg">
                Request a society demo
                <ArrowRight aria-hidden="true" size={17} />
              </ButtonLink>
              <ButtonLink href="#implementation" variant="outline" size="lg">
                See implementation
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-slate-600">
              {["Role-aware", "Scalable records", "Pakistan-focused"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" size={15} className="text-emerald-600" strokeWidth={3} />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Reveal>
            <RealAdminDashboardPreview compact />
            <p className="mt-3 text-center text-xs text-slate-400">
              The real UrbanEase administrator control center.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Operational clarity"
            title="Replace manual follow-up with visible, accountable workflows."
            description="UrbanEase helps society teams move essential records and services into a shared operating environment."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {operations.map(([title, copy, Icon], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h2 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="site-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Administrator capabilities"
              title="The right information, ready when action is needed."
              description="A focused control center keeps key activity visible without forcing management teams to work across separate registers and chat groups."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Verify resident accounts",
                "Create and monitor bills",
                "Assign complaint status",
                "Publish society notices",
                "Review active SOS alerts",
                "Approve service providers",
                "Moderate community chat",
                "Maintain society locations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 text-sm font-semibold text-slate-700">
                  <BadgeCheck aria-hidden="true" size={17} className="shrink-0 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] bg-[#0d2b40] p-6 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
              A management view built around priorities
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["1,248", "Total residents", UsersRound],
                ["87%", "Bills collected", BarChart3],
                ["34", "Active complaints", Layers3],
                ["2", "Open SOS alerts", ShieldCheck],
              ].map(([value, label, Icon]) => {
                const ItemIcon = Icon as typeof UsersRound;
                return (
                  <div key={label as string} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                    <ItemIcon aria-hidden="true" size={19} className="text-emerald-300" />
                    <strong className="mt-5 block text-3xl tracking-[-0.05em] text-white">{value as string}</strong>
                    <span className="mt-1 block text-sm text-slate-400">{label as string}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-slate-500">Representative demo data.</p>
          </div>
        </div>
      </section>

      <section id="implementation" className="section-pad scroll-mt-24">
        <div className="site-container">
          <SectionHeading
            eyebrow="Implementation process"
            title="A practical path from consultation to launch."
            description="The onboarding sequence is shaped around your society’s structure, selected modules, administrator roles, and resident communication plan."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {onboarding.map(([number, title, copy]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-sm font-black text-emerald-600">{number}</span>
                <h2 className="mt-4 text-lg font-extrabold text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#0d2b40]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Governance and scale"
            title="Structured permissions, reporting, and society configuration."
            description="UrbanEase supports a clear separation of responsibilities while keeping society-wide reporting accessible to authorized teams."
            invert
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Role permissions",
                icon: LockKeyhole,
                copy: "Define which administrators can access resident records, billing, complaints, notices, safety alerts, or configuration.",
                bullets: ["Module-level responsibilities", "Controlled admin creation", "Clear operating boundaries"],
              },
              {
                title: "Reporting capabilities",
                icon: BarChart3,
                copy: "Review operational summaries across resident activity, complaint status, payment collection, and emergency incidents.",
                bullets: ["Status visibility", "Trend summaries", "Recent activity records"],
              },
              {
                title: "Society configuration",
                icon: Settings2,
                copy: "Adapt the experience around the society name, modules, locations, services, and selected visual identity.",
                bullets: ["Custom society details", "Flexible resident volume", "Configurable modules"],
              },
            ].map((card) => (
              <article key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-white">
                <span className="grid size-11 place-items-center rounded-xl bg-emerald-400 text-[#0d2b40]">
                  <card.icon aria-hidden="true" size={21} />
                </span>
                <h2 className="mt-5 text-xl font-extrabold">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{card.copy}</p>
                <ul className="mt-5 space-y-2.5">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <Check aria-hidden="true" size={15} className="text-emerald-300" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="request-demo" className="section-pad scroll-mt-24">
        <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Request a demo"
              title="Tell us how your society works today."
              description="Share a few details and we’ll shape the conversation around your resident volume, management needs, and priority modules."
            />
            <div className="mt-8 space-y-4">
              {[
                [Building2, "Society-specific discussion"],
                [Palette, "Branding and configuration options"],
                [UsersRound, "Resident onboarding approach"],
                [BarChart3, "Relevant dashboard walkthrough"],
              ].map(([Icon, text]) => {
                const ItemIcon = Icon as typeof Building2;
                return (
                  <div key={text as string} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                      <ItemIcon aria-hidden="true" size={18} />
                    </span>
                    {text as string}
                  </div>
                );
              })}
            </div>
          </div>
          <DemoForm compact />
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="site-container grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <SectionHeading
            eyebrow="Frequently asked"
            title="Questions from society teams."
            description="A clear starting point for planning an UrbanEase implementation."
          />
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
