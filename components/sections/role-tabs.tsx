"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { roleContent } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Role = keyof typeof roleContent;
const roles = Object.keys(roleContent) as Role[];

export function RoleTabs() {
  const [active, setActive] = useState<Role>("Resident");

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_70px_-42px_rgba(15,23,42,.42)]">
      <div
        className="flex overflow-x-auto border-b border-slate-200 bg-slate-50 p-2"
        role="tablist"
        aria-label="UrbanEase user roles"
      >
        {roles.map((role) => (
          <button
            key={role}
            id={`role-${role.replaceAll(" ", "-").toLowerCase()}`}
            type="button"
            role="tab"
            aria-selected={active === role}
            aria-controls="role-panel"
            onClick={() => setActive(role)}
            className={cn(
              "min-h-11 shrink-0 rounded-xl px-4 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/20 sm:flex-1",
              active === role
                ? "bg-[#0d2b40] text-white shadow-sm"
                : "text-slate-600 hover:bg-white hover:text-slate-950",
            )}
          >
            {role}
          </button>
        ))}
      </div>
      <div
        id="role-panel"
        role="tabpanel"
        aria-labelledby={`role-${active.replaceAll(" ", "-").toLowerCase()}`}
        className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[.75fr_1.25fr] lg:p-10"
      >
        <div className="rounded-2xl bg-emerald-50 p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">
            {active} experience
          </p>
          <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
            The right tools, without the noise.
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Every role sees a focused workspace designed around its daily
            responsibilities and access permissions.
          </p>
        </div>
        <ul className="grid content-center gap-3 sm:grid-cols-2">
          {roleContent[active].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 text-sm font-semibold leading-6 text-slate-700"
            >
              <CheckCircle2
                aria-hidden="true"
                size={18}
                className="mt-0.5 shrink-0 text-emerald-600"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
