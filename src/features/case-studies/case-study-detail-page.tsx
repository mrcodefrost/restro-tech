import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/core/site";
import { publicAsset } from "@/core/paths";
import { ButtonLink } from "../shared/components/button-link";

type CaseStudyDetailPageProps = {
  study: CaseStudy;
};

export function CaseStudyDetailPage({ study }: CaseStudyDetailPageProps) {
  const brief = [
    { label: "Client", value: study.client },
    { label: "Category", value: study.category },
    { label: "Scale", value: study.outletCount },
    { label: "Region", value: study.region },
    { label: "Timeline", value: study.timeline },
  ];

  return (
    <article className="bg-[#fbfbf9]">
      <header className="border-b border-[#e5e5e0] bg-white px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#f6f6f3] px-4 py-3 text-sm font-bold text-black"
          >
            <ArrowLeft size={16} />
            Case studies
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase text-[#e60023]">
                {study.category}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.04] text-black md:text-5xl lg:text-6xl">
                {study.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#33332e]">
                {study.executiveSummary}
              </p>
            </div>

            <aside className="rounded-2xl bg-[#262622] p-6 text-white">
              <p className="text-xs font-bold uppercase text-white/60">
                Outcome
              </p>
              <p className="mt-3 text-2xl font-bold leading-tight">
                {study.result}
              </p>
            </aside>
          </div>
        </div>
      </header>

      <section className="px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="overflow-hidden rounded-[32px] bg-[#f6f6f3]">
            <Image
              src={publicAsset(study.image)}
              alt={study.title}
              width={1400}
              height={900}
              priority
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>

          <aside className="rounded-2xl border border-[#dadad3] bg-white p-6">
            <h2 className="text-xl font-bold text-black">Project brief</h2>
            <dl className="mt-5 divide-y divide-[#e5e5e0]">
              {brief.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <dt className="text-xs font-bold uppercase text-[#62625b]">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-bold leading-5 text-black">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#e5e5e0] rounded-2xl border border-[#e5e5e0] bg-white md:grid-cols-4 md:divide-x md:divide-y-0">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="p-5">
              <p className="text-3xl font-bold leading-none text-black">
                {metric.value}
              </p>
              <p className="mt-3 text-sm font-bold leading-5 text-black">
                {metric.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#62625b]">
                {metric.context}
              </p>
            </div>
          ))}
        </div>
      </section>

      <main className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 border-l border-[#dadad3] pl-5">
              <p className="text-xs font-bold uppercase text-[#62625b]">
                Report
              </p>
              <nav className="mt-4 grid gap-3 text-sm font-bold text-black">
                <a href="#context">Context</a>
                <a href="#diagnosis">Diagnosis</a>
                <a href="#work">Workstreams</a>
                <a href="#evidence">Evidence</a>
                <a href="#impact">Impact</a>
              </nav>
            </div>
          </aside>

          <div className="max-w-4xl bg-white px-6 py-2 md:px-10">
            <ReportSection
              id="context"
              eyebrow="01 / Context"
              title="What the brand was trying to change"
            >
              <Lead>{study.situation}</Lead>
              <p>{study.challenge}</p>
              <Callout title="Why it mattered">{study.whyItMattered}</Callout>
            </ReportSection>

            <ReportSection
              id="diagnosis"
              eyebrow="02 / Diagnosis"
              title="The real constraint was operational clarity"
            >
              <Lead>{study.diagnosis}</Lead>
              <div className="mt-8 divide-y divide-[#e5e5e0] border-y border-[#e5e5e0]">
                {study.problems.map((problem, index) => (
                  <div
                    key={problem}
                    className="grid gap-3 py-4 md:grid-cols-[56px_minmax(0,1fr)]"
                  >
                    <span className="text-sm font-bold text-[#e60023]">
                      0{index + 1}
                    </span>
                    <p className="font-semibold leading-7 text-black">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>
            </ReportSection>

            <ReportSection
              id="work"
              eyebrow="03 / Workstreams"
              title="How the solution was structured"
            >
              <Lead>{study.implementationNarrative}</Lead>
              <div className="mt-8 grid gap-6">
                {study.solution.map((solution, index) => (
                  <section
                    key={solution.title}
                    className="border-t border-[#e5e5e0] pt-6"
                  >
                    <p className="text-sm font-bold text-[#e60023]">
                      Workstream {index + 1}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-black">
                      {solution.title}
                    </h3>
                    <ul className="mt-4 grid gap-3">
                      {solution.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm font-semibold leading-6 text-[#33332e]"
                        >
                          <CheckCircle2
                            className="mt-0.5 shrink-0 text-[#e60023]"
                            size={18}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </ReportSection>

            <ReportSection
              id="evidence"
              eyebrow="04 / Evidence"
              title="What changed in the operating model"
            >
              <div className="grid gap-5">
                {study.rationale.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid gap-3 border-t border-[#e5e5e0] pt-5 md:grid-cols-[56px_minmax(0,1fr)]"
                  >
                    <span className="text-sm font-bold text-[#62625b]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-[#33332e]">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl bg-[#f6f6f3]">
                <Image
                  src={publicAsset(study.infographicImage)}
                  alt={`${study.title} before and after infographic`}
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-[#dadad3]">
                {study.infographic.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-0 border-b border-[#dadad3] last:border-b-0 md:grid-cols-[180px_1fr_1fr]"
                  >
                    <p className="bg-[#f6f6f3] p-4 font-bold text-black">
                      {item.label}
                    </p>
                    <BeforeAfter label="Before" value={item.before} />
                    <BeforeAfter label="After" value={item.after} isAfter />
                  </div>
                ))}
              </div>
            </ReportSection>

            <ReportSection
              id="impact"
              eyebrow="05 / Impact"
              title="The result after the pilot"
            >
              <Lead>{study.impactNarrative}</Lead>
              <div className="mt-8 divide-y divide-[#e5e5e0] border-y border-[#e5e5e0]">
                {study.impact.map((impact) => (
                  <div
                    key={impact.label}
                    className="grid gap-3 py-5 md:grid-cols-[140px_minmax(0,1fr)]"
                  >
                    <p className="text-3xl font-bold text-[#e60023]">
                      {impact.value}
                    </p>
                    <div>
                      <h3 className="font-bold text-black">{impact.label}</h3>
                      <p className="mt-2 leading-7 text-[#33332e]">
                        {impact.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="mt-10 border-l-4 border-[#e60023] pl-6">
                <p className="text-2xl font-bold leading-9 text-black">
                  &quot;{study.quote.text}&quot;
                </p>
                <footer className="mt-6">
                  <p className="font-bold text-black">{study.quote.person}</p>
                  <p className="mt-1 text-sm font-semibold text-[#62625b]">
                    {study.quote.role}
                  </p>
                </footer>
              </blockquote>
            </ReportSection>
          </div>
        </div>
      </main>

      <section className="border-t border-[#e5e5e0] bg-white px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#62625b]">
              Discuss a similar project
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-black">
              Bring one restaurant expansion problem to the table.
            </h2>
          </div>
          <ButtonLink href="mailto:hello@restro.tech">
            Book a Discovery Call
          </ButtonLink>
        </div>
      </section>
    </article>
  );
}

function ReportSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-[#dadad3] py-10 first:border-t-0">
      <p className="text-sm font-bold uppercase text-[#e60023]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-black md:text-4xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-5 text-base leading-7 text-[#33332e]">
        {children}
      </div>
    </section>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xl font-semibold leading-8 text-black">{children}</p>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="border-l-4 border-[#e60023] bg-[#f6f6f3] p-5">
      <p className="text-sm font-bold uppercase text-[#62625b]">{title}</p>
      <p className="mt-3 font-semibold leading-7 text-black">{children}</p>
    </aside>
  );
}

function BeforeAfter({
  label,
  value,
  isAfter = false,
}: {
  label: string;
  value: string;
  isAfter?: boolean;
}) {
  return (
    <div className={`p-4 ${isAfter ? "bg-[#262622] text-white" : "bg-white"}`}>
      <p
        className={`text-xs font-bold uppercase ${
          isAfter ? "text-white/60" : "text-[#62625b]"
        }`}
      >
        {label}
      </p>
      <p className="mt-2 font-semibold leading-6">{value}</p>
    </div>
  );
}
