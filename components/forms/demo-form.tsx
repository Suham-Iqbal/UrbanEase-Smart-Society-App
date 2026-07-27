"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { demoSchema, type DemoFormValues } from "@/lib/validations/demo";
import { cn } from "@/lib/utils";

const modules = [
  "Billing & payments",
  "Complaints",
  "Notices",
  "SOS alerts",
  "Community chat",
  "Service providers",
  "Admin analytics",
  "Society map",
];

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-semibold text-red-600">{message}</p>;
}

export function DemoForm({ compact = false }: { compact?: boolean }) {
  const [submitState, setSubmitState] = useState<
    { type: "idle" } | { type: "success"; message: string } | { type: "error"; message: string }
  >({ type: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      phone: "",
      societyName: "",
      city: "",
      residents: "",
      role: "",
      interestedModules: [],
      message: "",
    },
  });

  const onSubmit = async (values: DemoFormValues) => {
    setSubmitState({ type: "idle" });
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(result.message || "We could not send your request.");
      }
      setSubmitState({
        type: "success",
        message: result.message || "Thank you. Our team will be in touch.",
      });
      reset();
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(15,23,42,.45)] sm:p-8",
        compact && "shadow-none",
      )}
    >
      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-slate-800">
          Full name
          <input
            {...register("fullName")}
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
            aria-invalid={Boolean(errors.fullName)}
          />
          <ErrorText message={errors.fullName?.message} />
        </label>
        <label className="block text-sm font-bold text-slate-800">
          Work email
          <input
            {...register("workEmail")}
            type="email"
            autoComplete="email"
            placeholder="name@society.com"
            className={fieldClass}
            aria-invalid={Boolean(errors.workEmail)}
          />
          <ErrorText message={errors.workEmail?.message} />
        </label>
        <label className="block text-sm font-bold text-slate-800">
          Phone number
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="+92 300 0000000"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
          />
          <ErrorText message={errors.phone?.message} />
        </label>
        <label className="block text-sm font-bold text-slate-800">
          Society name
          <input
            {...register("societyName")}
            autoComplete="organization"
            placeholder="e.g. Nava Heights"
            className={fieldClass}
            aria-invalid={Boolean(errors.societyName)}
          />
          <ErrorText message={errors.societyName?.message} />
        </label>
        <label className="block text-sm font-bold text-slate-800">
          City
          <input
            {...register("city")}
            autoComplete="address-level2"
            placeholder="e.g. Islamabad"
            className={fieldClass}
            aria-invalid={Boolean(errors.city)}
          />
          <ErrorText message={errors.city?.message} />
        </label>
        <label className="block text-sm font-bold text-slate-800">
          Approximate residents
          <select
            {...register("residents")}
            className={fieldClass}
            aria-invalid={Boolean(errors.residents)}
          >
            <option value="">Select range</option>
            <option value="under-250">Under 250</option>
            <option value="250-1000">250–1,000</option>
            <option value="1000-5000">1,000–5,000</option>
            <option value="5000-plus">5,000+</option>
          </select>
          <ErrorText message={errors.residents?.message} />
        </label>
        <label className="block text-sm font-bold text-slate-800 sm:col-span-2">
          Your role
          <select
            {...register("role")}
            className={fieldClass}
            aria-invalid={Boolean(errors.role)}
          >
            <option value="">Select role</option>
            <option value="administrator">Society administrator</option>
            <option value="owner">Society owner or developer</option>
            <option value="resident">Resident</option>
            <option value="provider">Service provider</option>
            <option value="other">Other</option>
          </select>
          <ErrorText message={errors.role?.message} />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-bold text-slate-800">Interested modules</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {modules.map((module) => (
            <label
              key={module}
              className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50/50"
            >
              <input
                {...register("interestedModules")}
                type="checkbox"
                value={module}
                className="size-4 rounded border-slate-300 accent-emerald-600"
              />
              {module}
            </label>
          ))}
        </div>
        <ErrorText message={errors.interestedModules?.message} />
      </fieldset>

      <label className="mt-6 block text-sm font-bold text-slate-800">
        Message
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your society and the processes you want to improve."
          className={`${fieldClass} resize-y py-3`}
          aria-invalid={Boolean(errors.message)}
        />
        <ErrorText message={errors.message?.message} />
      </label>

      {submitState.type !== "idle" && (
        <div
          role={submitState.type === "error" ? "alert" : "status"}
          className={cn(
            "mt-5 flex items-start gap-3 rounded-xl border p-4 text-sm font-semibold",
            submitState.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-700",
          )}
        >
          {submitState.type === "success" ? (
            <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
          ) : (
            <AlertCircle aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
          )}
          {submitState.message}
        </div>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <LoaderCircle aria-hidden="true" size={18} className="animate-spin" />
            Sending request…
          </>
        ) : (
          <>
            Request a demo
            <Send aria-hidden="true" size={17} />
          </>
        )}
      </Button>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        By submitting this form, you agree that UrbanEase may contact you about
        this enquiry. No payment information is collected here.
      </p>
    </form>
  );
}
