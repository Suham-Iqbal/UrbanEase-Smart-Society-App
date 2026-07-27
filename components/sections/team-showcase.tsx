"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const teamMembers = [
  {
    slug: "muhammad-saim-ali",
    name: "Muhammad Saim Ali",
    role: "Documentation and QA Testing",
    image: "/images/team/muhammad-saim-ali.jpg",
    linkedin: "https://www.linkedin.com/in/saim-ali-4a9840342/",
    email: "saim.linkedin1122@gmail.com",
    phone: "03302404114",
  },
  {
    slug: "suham-iqbal-khan",
    name: "Suham Iqbal Khan",
    role: "App and Website Development",
    image: "/images/team/suham-iqbal-khan.jpg",
    linkedin: "https://www.linkedin.com/in/suhamiqbalkhan",
    email: "Suham.iqbal7860@gmail.com",
    phone: "03010816321",
  },
  {
    slug: "syed-adeen-sarosh",
    name: "Syed Adeen Sarosh",
    role: "Project Manager and Digital Marketing",
    image: "/images/team/syed-adeen-sarosh.png",
    linkedin: "https://www.linkedin.com/in/syedsarosh22",
    email: "syedsarosh.dev@gmail.com",
    phone: "03450485711",
  },
] as const;

export function TeamShowcase({
  eyebrow = "Collaboration",
  description = "UrbanEase was shaped by a small team working together across product thinking, interface detail, and implementation.",
}: {
  eyebrow?: string;
  description?: string;
}) {
  const [openMember, setOpenMember] = useState<string | null>(null);
  const [visiblePhone, setVisiblePhone] = useState<string | null>(null);

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <SectionHeading
          eyebrow={eyebrow}
          title="Meet our team"
          description={description}
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-start">
          {teamMembers.map((member, index) => {
            const isOpen = openMember === member.slug;
            const phoneIsVisible = visiblePhone === member.slug;

            return (
              <Reveal key={member.name} delay={index * 0.06}>
                <article className="h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white text-center shadow-[0_24px_70px_-45px_rgba(15,23,42,.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-42px_rgba(15,23,42,.55)]">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={`${member.name}, UrbanEase team member`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.035]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold tracking-[-0.025em] text-slate-950">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{member.role}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenMember(isOpen ? null : member.slug);
                        setVisiblePhone(null);
                      }}
                      className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-600 px-6 text-sm font-extrabold text-white shadow-[0_14px_30px_-14px_rgba(5,150,105,.8)] transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/20"
                      aria-expanded={isOpen}
                    >
                      Content
                    </button>
                    {isOpen && (
                      <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                        <div className="flex items-center justify-center gap-3">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn profile`}
                            className="grid size-11 place-items-center rounded-xl bg-white text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-800"
                          >
                            <span aria-hidden="true" className="text-lg font-black leading-none">
                              in
                            </span>
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            aria-label={`Email ${member.name}`}
                            className="grid size-11 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:text-emerald-800"
                          >
                            <Mail aria-hidden="true" size={20} />
                          </a>
                          <button
                            type="button"
                            onClick={() => setVisiblePhone(phoneIsVisible ? null : member.slug)}
                            aria-label={`Show ${member.name} phone number`}
                            className="grid size-11 place-items-center rounded-xl bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950"
                          >
                            <Phone aria-hidden="true" size={20} />
                          </button>
                        </div>
                        {phoneIsVisible && (
                          <p className="mt-4 rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-slate-950">
                            {member.phone}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
