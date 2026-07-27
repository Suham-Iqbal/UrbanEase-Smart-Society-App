import type { Metadata } from "next";
import {
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { DemoForm } from "@/components/forms/demo-form";

export const metadata: Metadata = {
  title: "Request a Demo | UrbanEase",
  description:
    "Request an UrbanEase demo for your housing society or contact the team in Islamabad, Pakistan.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero pb-12 sm:pb-16">
        <div className="site-container text-center">
          <p className="eyebrow">Contact UrbanEase</p>
          <h1 className="page-title mx-auto max-w-4xl">
            Let’s talk about a better digital experience for your society.
          </h1>
          <p className="page-copy mx-auto max-w-2xl">
            Tell us about your community, current processes, and priority
            modules. We’ll use that context to prepare a relevant product
            conversation.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="site-container grid gap-8 lg:grid-cols-[.68fr_1.32fr] lg:items-start">
          <aside
            id="contact-details"
            className="rounded-[1.75rem] bg-[#0d2b40] p-6 text-white sm:p-8 lg:sticky lg:top-28"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300">
              Contact details
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.04em]">
              Start with a short conversation.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Reach the UrbanEase team to discuss your society, priorities,
              and preferred implementation timeline.
            </p>
            <div className="mt-8 space-y-3">
              {[
                [Mail, "Email", "sasifysolutions2@gmail.com"],
                [Phone, "Phone", "+92 311 6185711"],
                [MapPin, "Location", "Islamabad, Pakistan"],
                [Clock3, "Response", "Typically within 1–2 working days"],
              ].map(([Icon, label, value]) => {
                const ItemIcon = Icon as typeof Mail;
                return (
                  <div key={label as string} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-4">
                    <ItemIcon aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                    <span>
                      <span className="block text-xs font-bold text-slate-400">{label as string}</span>
                      <span className="mt-1 block text-sm font-semibold text-white">{value as string}</span>
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 rounded-xl bg-emerald-400 p-4 text-[#0d2b40]">
              <div className="flex items-center gap-2 font-extrabold">
                <ShieldCheck aria-hidden="true" size={18} />
                Your enquiry stays focused
              </div>
              <p className="mt-2 text-xs font-semibold leading-5 text-emerald-950/75">
                This form collects only the information needed to understand
                your request. Please do not include passwords or sensitive
                resident records.
              </p>
            </div>
          </aside>
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                <MessageSquareText aria-hidden="true" size={21} />
              </span>
              <div>
                <h2 className="text-xl font-extrabold text-slate-950">Request a platform demo</h2>
                <p className="mt-0.5 text-sm text-slate-500">Fields marked by the form are required.</p>
              </div>
            </div>
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
