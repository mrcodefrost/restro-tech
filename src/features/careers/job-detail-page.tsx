import Link from "next/link";
import {
  ArrowLeft,
  Buildings,
  CheckCircle,
  Clock,
  MapPin,
} from "@phosphor-icons/react/ssr";
import type { Role } from "@/core/site";
import { FadeIn } from "../shared/components/fade-in";

export function JobDetailPage({ role }: { role: Role }) {
  return (
    <>
      <section className="px-6 py-12 md:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-[#e0e2e8] px-4 py-2 text-sm font-medium text-[#1c1c1e] transition-colors hover:bg-[#f7f8fa]"
          >
            <ArrowLeft size={16} weight="duotone" />
            All roles
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.65fr)] lg:items-start">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                {role.team}
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[1.04] tracking-tight text-[#1c1c1e] md:text-6xl">
                {role.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555a6a]">
                {role.intro}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <MetaPill icon={MapPin} label={role.location} />
                <MetaPill icon={Buildings} label={role.workMode} />
                <MetaPill icon={Clock} label={role.experience} />
              </div>
            </FadeIn>

            <FadeIn
              delay={0.08}
              className="rounded-[28px] bg-[#1c1c1e] p-6 text-white"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Role snapshot
              </p>
              <div className="mt-5 grid gap-4">
                <Snapshot label="Location" value={role.location} />
                <Snapshot label="Work mode" value={role.workMode} />
                <Snapshot label="Role type" value={role.type} />
                <Snapshot label="Experience" value={role.experience} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eef0f3] bg-[#f7f8fa] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {role.highlights.map((highlight) => (
            <div key={highlight} className="rounded-2xl bg-white p-5">
              <CheckCircle
                size={22}
                weight="duotone"
                className="text-[#4262ff]"
              />
              <p className="mt-4 text-sm font-medium leading-6 text-[#1c1c1e]">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.7fr)] lg:items-start">
          <div className="grid gap-8">
            <JobSection title="What you will do" items={role.responsibilities} />
            <JobSection title="What we are looking for" items={role.requirements} />
            <JobSection title="Nice to have" items={role.niceToHave} />
          </div>

          <div id="apply" className="lg:sticky lg:top-24">
            <ApplicationForm role={role} />
          </div>
        </div>
      </section>
    </>
  );
}

function JobSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-medium tracking-tight text-[#1c1c1e]">
        {title}
      </h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-[#555a6a]">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-[#ffd02f]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ApplicationForm({ role }: { role: Role }) {
  return (
    <form
      name="career-application"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="rounded-[28px] border border-[#eef0f3] bg-white p-5 shadow-[0_16px_36px_-28px_rgba(5,0,56,0.28)] md:p-6"
    >
      <input type="hidden" name="form-name" value="career-application" />
      <input type="hidden" name="role" value={role.title} />
      <p className="absolute m-[-1px] h-px w-px overflow-hidden border-0 p-0 [clip:rect(0_0_0_0)]">
        <label>
          Do not fill this out if you are human:{" "}
          <input name="bot-field" type="text" tabIndex={-1} />
        </label>
      </p>

      <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
        Apply for this role
      </p>
      <h2 className="mt-3 text-2xl font-medium text-[#1c1c1e]">
        Send your profile
      </h2>

      <div className="mt-6 grid gap-4">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="LinkedIn / portfolio" name="profile" type="url" />
        <Field label="Resume link" name="resume" type="url" required />

        <div>
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]"
          >
            Why this role?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={40}
            placeholder="Share a few lines about your relevant work and why Restrovate is a fit."
            className="mt-2 w-full rounded-xl border border-[#c7cad5] bg-white px-4 py-3 text-sm font-medium text-[#1c1c1e] focus:border-[#4262ff] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1c1c1e] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2c2c34]"
        >
          Submit application
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-[#c7cad5] bg-white px-4 py-3 text-sm font-medium text-[#1c1c1e] focus:border-[#4262ff] focus:outline-none"
      />
    </div>
  );
}

function MetaPill({
  icon: Icon,
  label,
}: {
  icon: typeof MapPin;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e0e2e8] px-3 py-1.5 text-xs font-medium text-[#555a6a]">
      <Icon size={14} weight="duotone" />
      {label}
    </span>
  );
}

function Snapshot({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/45">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}
