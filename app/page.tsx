import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Check,
  CircleDollarSign,
  Landmark,
  Layers3,
  MapPinned,
  MessageSquareWarning,
  Radio,
  ShieldCheck,
  Siren,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { RealAdminDashboardPreview } from "@/components/dashboard-preview/real-admin-dashboard-preview";
import { ButtonLink } from "@/components/ui/button";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { HeroProductVisual } from "@/components/sections/hero-product-visual";
import { MobileShowcase } from "@/components/sections/mobile-showcase";
import { RoleTabs } from "@/components/sections/role-tabs";
import { SiteCta } from "@/components/sections/site-cta";
import { TeamShowcase } from "@/components/sections/team-showcase";
import { features } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "UrbanEase | Smart Society Management Platform",
  description:
    "Manage society bills, complaints, notices, emergency alerts, and community services through one secure resident and administrator platform.",
  alternates: { canonical: "/" },
};

const trustItems = [
  [ShieldCheck, "Secure", "Role-aware access"],
  [BadgeCheck, "Transparent", "Clear service status"],
  [Radio, "Real-time", "Faster community updates"],
  [UsersRound, "Community focused", "Built around residents"],
] as const;

const problems = [
  {
    number: "01",
    title: "Manual billing",
    copy: "Paper bills and fragmented payment records create delays and confusion.",
    icon: CircleDollarSign,
  },
  {
    number: "02",
    title: "Untracked complaints",
    copy: "Residents cannot easily follow the progress of submitted complaints.",
    icon: MessageSquareWarning,
  },
  {
    number: "03",
    title: "Missed announcements",
    copy: "Important notices get lost across group chats and physical boards.",
    icon: BellRing,
  },
  {
    number: "04",
    title: "Delayed emergency response",
    copy: "Traditional communication channels are too slow during urgent situations.",
    icon: Siren,
  },
] as const;

const steps = [
  ["01", "Society onboarding", "Society information, administrators, and services are configured."],
  ["02", "Resident verification", "Residents register and are verified by the management team."],
  ["03", "Digital operations", "Bills, complaints, notices, and community services move online."],
  ["04", "Smarter community", "Residents receive faster service, transparent updates, and support."],
] as const;

const security = [
  "Secure password hashing",
  "JWT-based authentication",
  "Role-based access control",
  "Protected API endpoints",
  "Input validation",
  "Controlled administrator permissions",
  "Rate limiting",
  "Environment-based secret management",
];

const audiences = [
  ["Gated housing societies", Landmark],
  ["Apartment communities", Layers3],
  ["Cooperative housing schemes", UsersRound],
  ["Smart residential projects", Sparkles],
  ["University campuses", MapPinned],
  ["Mixed-use communities", Landmark],
] as const;

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UrbanEase",
    url: "https://myurbanease.com",
    email: "sasifysolutions2@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "UrbanEase",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, Web",
    description:
      "A resident and society management platform for billing, complaints, notices, emergency alerts, and community services.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[790px] lg:pb-24 lg:pt-40">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#f8fbff_0%,#ffffff_48%,#eefbf5_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 -z-10 size-[28rem] rounded-full bg-blue-200/35 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 -z-10 size-[30rem] rounded-full bg-emerald-200/45 blur-3xl"
        />
        <div className="site-container grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-800">
                <Sparkles aria-hidden="true" size={14} />
                Smart living for connected communities
              </p>
              <h1 className="mt-7 text-balance text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[4.55rem]">
                Smarter societies.
                <span className="block text-emerald-600">Better communities.</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600">
                UrbanEase brings complaints, billing, notices, emergency
                support, and community services into one secure platform.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg">
                  Request a demo
                  <ArrowRight aria-hidden="true" size={18} />
                </ButtonLink>
                <ButtonLink href="/features" variant="outline" size="lg">
                  Explore features
                </ButtonLink>
              </div>
              <a
                href="#resident-app"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-800"
              >
                Download the app
                <ArrowRight aria-hidden="true" size={15} />
              </a>
              <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-500">
                <BadgeCheck aria-hidden="true" size={17} className="text-emerald-600" />
                Built for modern residential societies in Pakistan.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <HeroProductVisual />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" aria-label="Platform qualities">
        <div className="site-container grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
          {trustItems.map(([Icon, title, subtitle]) => (
            <div key={title} className="flex items-center gap-3 px-3 py-6 sm:px-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                <Icon aria-hidden="true" size={19} />
              </span>
              <span>
                <strong className="block text-sm text-slate-900">{title}</strong>
                <span className="mt-0.5 hidden text-xs text-slate-500 lg:block">{subtitle}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="The problem"
            title="Society management should not depend on paperwork and scattered messages."
            description="Every disconnected process adds friction for residents and more administrative work for management teams."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problems.map((problem, index) => (
              <Reveal key={problem.title} delay={index * 0.05}>
                <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,.35)]">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-emerald-50 group-hover:text-emerald-700">
                      <problem.icon aria-hidden="true" size={21} />
                    </span>
                    <span className="text-xs font-black text-slate-300">{problem.number}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-extrabold tracking-[-0.025em] text-slate-950">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{problem.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="The UrbanEase ecosystem"
            title="One connected platform for the entire community."
            description="UrbanEase creates a shared environment for residents, society teams, and verified professionals while keeping every role focused on the work that matters."
          />
          <Reveal>
            <div className="relative grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-45px_rgba(15,23,42,.4)] sm:grid-cols-3 sm:p-8">
              {[
                ["Residents", UsersRound, "Bills, services, and community"],
                ["UrbanEase", Layers3, "One organized operating layer"],
                ["Society management", Landmark, "Visibility and control"],
              ].map(([label, Icon, copy], index) => {
                const ItemIcon = Icon as typeof UsersRound;
                return (
                  <div
                    key={label as string}
                    className={`relative rounded-2xl p-5 text-center ${
                      index === 1
                        ? "bg-[#0d2b40] text-white"
                        : "border border-slate-200 bg-slate-50 text-slate-900"
                    }`}
                  >
                    <span className={`mx-auto grid size-11 place-items-center rounded-xl ${
                      index === 1 ? "bg-emerald-500 text-white" : "bg-emerald-50 text-emerald-700"
                    }`}>
                      <ItemIcon aria-hidden="true" size={21} />
                    </span>
                    <strong className="mt-4 block text-sm">{label as string}</strong>
                    <span className={`mt-1 block text-xs leading-5 ${index === 1 ? "text-slate-300" : "text-slate-500"}`}>
                      {copy as string}
                    </span>
                    {index < 2 && (
                      <ArrowRight
                        aria-hidden="true"
                        size={18}
                        className="absolute -right-[1.15rem] top-1/2 z-10 hidden -translate-y-1/2 text-emerald-600 sm:block"
                      />
                    )}
                  </div>
                );
              })}
              <div className="sm:col-start-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                  <FeatureIcon name="tool-case" className="mx-auto text-emerald-700" />
                  <strong className="mt-2 block text-sm text-slate-900">Verified service providers</strong>
                  <span className="mt-1 block text-xs text-slate-500">Local services within reach</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="features" className="section-pad scroll-mt-24">
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Connected modules"
              title="Everyday society services, thoughtfully organized."
              description="Residents get a simpler experience while management gains the structure needed to respond, track, and improve."
            />
            <ButtonLink href="/features" variant="outline">
              Explore all modules
              <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 5) * 0.035}>
                <article className="group h-full rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_45px_-30px_rgba(5,150,105,.35)]">
                  <span
                    className={`grid size-11 place-items-center rounded-xl ${
                      feature.accent === "red"
                        ? "bg-red-50 text-red-600"
                        : feature.accent === "blue"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    <FeatureIcon name={feature.icon} />
                  </span>
                  <h3 className="mt-5 text-[0.98rem] font-extrabold leading-6 text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="resident-app" className="scroll-mt-20">
        <MobileShowcase />
      </div>

      <TeamShowcase />

      <section className="section-pad overflow-hidden">
        <div className="site-container">
          <div className="grid items-end gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Management command centre"
              title="Complete visibility for society management."
              description="Monitor operations, resolve resident issues, track payments, and coordinate community activity from one structured workspace."
            />
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "Resident verification",
                "Complaint processing",
                "Billing management",
                "Announcement publishing",
                "Emergency monitoring",
                "Provider approval",
                "Chat moderation",
                "Reporting and analytics",
              ].map((capability) => (
                <li key={capability} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Check aria-hidden="true" size={16} className="text-emerald-600" strokeWidth={3} />
                  {capability}
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="mt-12">
            <RealAdminDashboardPreview />
          </Reveal>
          <p className="mt-4 text-center text-xs text-slate-400">
            The real UrbanEase administrator control center.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="section-pad scroll-mt-24 bg-[#eff7f3]">
        <div className="site-container">
          <SectionHeading
            eyebrow="How it works"
            title="From onboarding to better daily operations."
            description="A structured implementation path helps society teams move services online without losing operational clarity."
            align="center"
          />
          <div className="relative mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-emerald-200 xl:block" />
            {steps.map(([number, title, copy], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="relative z-10 h-full rounded-2xl border border-emerald-100 bg-white p-6">
                  <span className="grid size-14 place-items-center rounded-2xl bg-[#0d2b40] text-sm font-black text-emerald-300 shadow-lg shadow-slate-900/10">
                    {number}
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Built for every role"
            title="One platform. Four focused experiences."
            description="Permissions and workflows adapt to the needs of residents, administrators, professionals, and platform teams."
          />
          <div className="mt-10">
            <RoleTabs />
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Shared value"
            title="Better service for residents. Better control for management."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[
              {
                title: "For residents",
                icon: UsersRound,
                tone: "bg-emerald-50 text-emerald-700",
                items: [
                  "Greater everyday convenience",
                  "Transparent complaint tracking",
                  "Faster verified communication",
                  "Secure payment history",
                  "Reliable emergency support",
                  "Improved community engagement",
                ],
              },
              {
                title: "For society management",
                icon: Landmark,
                tone: "bg-blue-50 text-blue-700",
                items: [
                  "Reduced paperwork",
                  "Centralized operational records",
                  "Improved activity visibility",
                  "Faster complaint resolution",
                  "Better payment tracking",
                  "More organized communication",
                ],
              },
            ].map((column) => (
              <article key={column.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className={`grid size-12 place-items-center rounded-2xl ${column.tone}`}>
                    <column.icon aria-hidden="true" size={22} />
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-950">{column.title}</h3>
                </div>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <Check aria-hidden="true" size={16} className="text-emerald-600" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="section-pad scroll-mt-24 bg-[#0d2b40]">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <span className="grid size-14 place-items-center rounded-2xl bg-emerald-400 text-[#0d2b40]">
              <ShieldCheck aria-hidden="true" size={27} />
            </span>
            <SectionHeading
              eyebrow="Responsible security"
              title="Designed with community safety and data protection in mind."
              description="UrbanEase applies practical application-security controls across identity, permissions, APIs, and operational records—without making unrealistic guarantees."
              invert
              className="mt-7"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {security.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-4 text-sm font-semibold text-slate-200">
                <ShieldCheck aria-hidden="true" size={17} className="shrink-0 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Flexible by design"
            title="Built for communities of every size."
            description="The platform can be configured for established societies and growing residential projects across Pakistan."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, Icon]) => (
              <article key={title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200 hover:bg-emerald-50/40">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h3 className="font-extrabold text-slate-900">{title}</h3>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-slate-500">
            Designed with the operating patterns of communities such as DHA,
            Bahria Town, and WAPDA Town in mind. UrbanEase does not claim an
            official partnership with these societies.
          </p>
        </div>
      </section>

      <SiteCta />
    </>
  );
}
