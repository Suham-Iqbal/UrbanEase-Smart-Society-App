import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  ToolCase,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "UrbanEase Service Provider Portal",
  description:
    "Access the UrbanEase service provider portal.",
  robots: { index: false, follow: true },
};

const portals = [
  {
    title: "Service provider portal",
    copy: "Manage your service profile and resident requests.",
    icon: ToolCase,
    href: "/login/provider",
    label: "Continue as provider",
    tone: "bg-violet-50 text-violet-700",
  },
] as const;

export default function PortalPage() {
  return (
    <section className="relative min-h-[calc(100vh-4.75rem)] overflow-hidden pb-20 pt-32 sm:pt-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dff7e9,transparent_34%),radial-gradient(circle_at_top_right,#dbeafe,transparent_32%),#f8fafc]"
      />
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Secure access gateway</p>
          <h1 className="page-title">Welcome to UrbanEase</h1>
          <p className="page-copy mx-auto max-w-2xl">
            Open the service provider workspace for profile management and
            resident requests.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-md">
          {portals.map((portal) => (
            <article
              key={portal.title}
              className="flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_-42px_rgba(15,23,42,.45)] transition hover:-translate-y-1 hover:border-emerald-200 sm:p-7"
            >
              <span className={`grid size-12 place-items-center rounded-2xl ${portal.tone}`}>
                <portal.icon aria-hidden="true" size={23} />
              </span>
              <h2 className="mt-6 text-xl font-extrabold text-slate-950">{portal.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{portal.copy}</p>
              <ButtonLink href={portal.href} variant="outline" className="mt-7 w-full">
                {portal.label}
                <ArrowRight aria-hidden="true" size={16} />
              </ButtonLink>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 text-center text-xs font-semibold text-slate-500">
          <ShieldCheck aria-hidden="true" size={15} className="text-emerald-600" />
          Portal screens are placeholders for integration with the production UrbanEase authentication service.
        </p>
      </div>
    </section>
  );
}
