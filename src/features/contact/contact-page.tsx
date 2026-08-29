"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/core/site";
import { SocialLinks } from "../shared/components/social-links";

const interestOptions = [
  "Paperwork & compliance",
  "Tech",
  "Marketing",
  "Production",
  "A standalone product",
  "Something else",
];

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "brand" | "message", string>
>;

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function validate(formData: FormData) {
  const errors: FieldErrors = {};
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (name.length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (phone && !/^[+()0-9\s-]{7,18}$/.test(phone)) {
    errors.phone = "Use digits, spaces, +, -, or brackets only.";
  }

  if (message.length < 20) {
    errors.message = "Share at least 20 characters so we can route this well.";
  }

  return errors;
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);

    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const payload: Record<string, string> = { "form-name": "contact" };
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="px-6 py-10 md:px-10 lg:min-h-[calc(100vh-64px)] lg:px-12 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-[1.08] tracking-tight text-[#1c1c1e] md:text-5xl">
              Tell us what is blocking the next stage of your F&amp;B brand.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#555a6a]">
              Use the form and give us the practical details: outlet count,
              cities, paperwork status, website or app gaps, and the launch
              timeline you are trying to protect.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1c1c1e] hover:underline"
              >
                <Mail size={18} />
                {siteConfig.email}
              </a>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[#eef0f3] bg-white p-5 shadow-[0_16px_36px_-28px_rgba(5,0,56,0.28)] md:p-7"
          >
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-start justify-center gap-4">
                <div className="grid size-12 place-items-center rounded-full bg-[#1c1c1e] text-white">
                  <CheckCircle2 size={26} />
                </div>
                <h2 className="text-2xl font-medium text-[#1c1c1e]">
                  Message sent.
                </h2>
                <p className="max-w-md leading-7 text-[#555a6a]">
                  We have received your message and will reply from{" "}
                  {siteConfig.email} within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fff8e0] text-[#746019]">
                    <MessageSquareText size={20} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-medium text-[#1c1c1e]">
                      Start the discovery form
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-[#6b6f7e]">
                      Required fields are marked. We only ask for what helps us
                      route your request properly.
                    </p>
                  </div>
                </div>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid gap-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="absolute m-[-1px] h-px w-px overflow-hidden border-0 p-0 [clip:rect(0_0_0_0)]">
                    <label>
                      Do not fill this out if you are human:{" "}
                      <input name="bot-field" type="text" tabIndex={-1} />
                    </label>
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      name="name"
                      autoComplete="name"
                      error={fieldErrors.name}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      error={fieldErrors.email}
                      required
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      error={fieldErrors.phone}
                    />
                    <Field
                      label="Brand / company"
                      name="brand"
                      autoComplete="organization"
                      error={fieldErrors.brand}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]"
                    >
                      What are you interested in? *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      defaultValue={interestOptions[0]}
                      required
                      className="mt-2 w-full rounded-xl border border-[#c7cad5] bg-white px-4 py-3 text-sm font-medium text-[#1c1c1e] focus:border-[#4262ff] focus:outline-none"
                    >
                      {interestOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]"
                    >
                      Tell us about your brand *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={20}
                      rows={5}
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={
                        fieldErrors.message ? "message-error" : undefined
                      }
                      placeholder="Outlet count, cities or regions, and the problem you are trying to solve."
                      className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium text-[#1c1c1e] focus:border-[#4262ff] focus:outline-none ${
                        fieldErrors.message
                          ? "border-[#c0392b]"
                          : "border-[#c7cad5]"
                      }`}
                    />
                    {fieldErrors.message ? (
                      <p
                        id="message-error"
                        className="mt-2 text-xs font-medium text-[#c0392b]"
                      >
                        {fieldErrors.message}
                      </p>
                    ) : null}
                  </div>

                  {error ? (
                    <p className="text-sm font-medium text-[#c0392b]">
                      Something went wrong sending your message. Please email{" "}
                      {siteConfig.email} directly.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1c1c1e] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2c2c34] disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send message"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-[#eef0f3] bg-[#f7f8fa] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {[
            "We reply within one business day.",
            "A short call maps outlets, regions, paperwork, and launch goals.",
            "You get a scoped next step across legal, tech, marketing, or production.",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-[#eef0f3] bg-white p-5"
            >
              <span className="text-sm font-medium text-[#4262ff]">
                0{index + 1}
              </span>
              <p className="mt-3 text-sm font-medium leading-6 text-[#1c1c1e]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
  autoComplete,
}: {
  label: string;
  name: keyof FieldErrors;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;

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
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium text-[#1c1c1e] focus:border-[#4262ff] focus:outline-none ${
          error ? "border-[#c0392b]" : "border-[#c7cad5]"
        }`}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-xs font-medium text-[#c0392b]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
