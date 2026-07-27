import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  UsersRound,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteCta } from "@/components/sections/site-cta";

export const metadata: Metadata = {
  title: "About UrbanEase",
  description:
    "Learn why UrbanEase was created, its mission for connected residential communities, and the team building it for Pakistani housing societies.",
  alternates: { canonical: "/about" },
};

const team = [
  {
    name: "Suham Iqbal Khan",
    role: "Application development",
    image: "/images/team/suham-iqbal-khan.jpg",
  },
  {
    name: "Muhammad Saim Ali",
    role: "Platform & experience",
    image: "/images/team/muhammad-saim-ali.jpg",
  },
  {
    name: "Syed Adeen Sarosh",
    role: "Product & engineering",
    image: "/images/team/syed-adeen-sarosh.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">About UrbanEase</p>
            <h1 className="page-title">
              A better operating layer for everyday community life.
            </h1>
            <p className="page-copy">
              UrbanEase was created to reduce the friction caused by paper
              records, scattered chats, delayed updates, and disconnected
              service processes in residential societies.
            </p>
            <ButtonLink href="/features" size="lg" className="mt-8">
              Explore the platform
              <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </div>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0d2b40] p-7 text-white sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-16 size-56 rounded-full border-[30px] border-emerald-400/10"
              />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {[
                  [Building2, "Residential operations"],
                  [UsersRound, "Verified community"],
                  [HeartHandshake, "Local services"],
                  [Compass, "Connected experience"],
                ].map(([Icon, label]) => {
                  const ItemIcon = Icon as typeof Building2;
                  return (
                    <div key={label as string} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                      <ItemIcon aria-hidden="true" size={22} className="text-emerald-300" />
                      <p className="mt-5 text-sm font-extrabold">{label as string}</p>
                    </div>
                  );
                })}
              </div>
              <p className="relative mt-6 text-sm leading-7 text-slate-300">
                One platform connects the daily interactions between residents,
                society teams, super administrators, and verified service
                providers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why we built it"
            title="Traditional society management creates avoidable gaps."
            description="Important records live in too many places. Residents wait for updates, administrators repeat manual work, and urgent information competes with everyday conversation."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Scattered communication", "Notices, complaints, and conversations become difficult to separate."],
              ["Manual records", "Billing and resident information take more time to update and verify."],
              ["Limited visibility", "Residents cannot easily see progress and management cannot see the full picture."],
              ["Disconnected services", "Community support depends on informal contacts and separate processes."],
            ].map(([title, copy], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-xs font-black text-emerald-600">0{index + 1}</span>
                <h2 className="mt-4 text-lg font-extrabold text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="site-container grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-7 sm:p-9">
            <span className="grid size-12 place-items-center rounded-2xl bg-emerald-600 text-white">
              <Lightbulb aria-hidden="true" size={23} />
            </span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">Our mission</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950">
              To simplify residential society management through accessible,
              secure, and connected digital services.
            </h2>
          </article>
          <article className="rounded-[1.75rem] border border-blue-200 bg-blue-50 p-7 sm:p-9">
            <span className="grid size-12 place-items-center rounded-2xl bg-blue-600 text-white">
              <Compass aria-hidden="true" size={23} />
            </span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">Our vision</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950">
              To build smarter and better-connected residential communities
              where convenience meets community.
            </h2>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Designed in context"
              title="Focused on how Pakistani housing societies work."
              description="UrbanEase reflects the need for resident verification, maintenance billing, society notices, complaint follow-up, community safety, local services, and amenity navigation."
            />
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <MapPin aria-hidden="true" size={21} className="mt-0.5 shrink-0 text-emerald-600" />
              <p className="text-sm leading-6 text-slate-600">
                The product is designed for communities across Pakistan and can
                scale from focused apartment operations to multi-block
                residential societies.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#0d2b40] p-7 sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">Future direction</p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-white">
              A scalable foundation for connected community services.
            </h2>
            <div className="mt-7 space-y-3">
              {[
                "Support more societies with separate configurations",
                "Expand reporting and operational insights",
                "Improve accessibility across resident journeys",
                "Strengthen integrations around payments and notifications",
                "Grow local service and amenity discovery",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-3.5 text-sm font-semibold text-slate-200">
                  <span className="size-2 shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="site-container">
          <SectionHeading
            eyebrow="The project team"
            title="The people behind UrbanEase."
            description="A multidisciplinary student team shaping the product, application, platform, and user experience."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-[0_18px_50px_-36px_rgba(15,23,42,.45)]">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={`${member.name}, UrbanEase team member`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-extrabold text-slate-950">{member.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-6 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center sm:flex-row sm:text-left">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white">
              <GraduationCap aria-hidden="true" size={23} />
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-700">Project supervisor</p>
              <p className="mt-1 text-lg font-extrabold text-slate-950">Mr. Fahim Shahzad</p>
              <p className="mt-1 text-sm text-slate-600">With appreciation for project guidance and supervision.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteCta />
    </>
  );
}
