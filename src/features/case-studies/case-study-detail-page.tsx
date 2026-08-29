import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";
import { Placeholder } from "../shared/components/placeholder";

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
    <article className="bg-white">
      <header className="border-b border-[#eef0f3] px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-[#f7f8fa] px-4 py-2.5 text-sm font-medium text-[#1c1c1e]"
          >
            <ArrowLeft size={16} />
            Case studies
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                {study.category}
              </p>
              <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-[#1c1c1e] md:text-5xl lg:text-6xl">
                {study.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#555a6a]">
                {study.executiveSummary}
              </p>
            </div>

            <aside className="rounded-2xl bg-[#1c1c1e] p-6 text-white">
              <p className="text-xs font-medium text-white/60">
                Outcome
              </p>
              <p className="mt-3 text-2xl font-medium leading-tight">
                {study.result}
              </p>
            </aside>
          </div>
        </div>
      </header>

      <section className="px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <Placeholder
            src={study.image}
            alt={`${study.client} website homepage snapshot`}
            className="h-[260px] w-full md:h-[340px] lg:h-[380px]"
            rounded="2xl"
            imageClassName="object-top"
          />

          <aside className="rounded-2xl border border-[#eef0f3] bg-white p-6">
            <h2 className="text-xl font-medium text-[#1c1c1e]">Project brief</h2>
            <dl className="mt-5 divide-y divide-[#eef0f3]">
              {brief.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium leading-5 text-[#1c1c1e]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#eef0f3] rounded-2xl border border-[#eef0f3] bg-white md:grid-cols-4 md:divide-x md:divide-y-0">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="p-5">
              <p className="text-3xl font-medium leading-none text-[#1c1c1e]">
                {metric.value}
              </p>
              <p className="mt-3 text-sm font-medium leading-5 text-[#1c1c1e]">
                {metric.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#6b6f7e]">
                {metric.context}
              </p>
            </div>
          ))}
        </div>
      </section>

      <main className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 border-l border-[#eef0f3] pl-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                Report
              </p>
              <nav className="mt-4 grid gap-3 text-sm font-medium text-[#1c1c1e]">
                <a href="#context">Context</a>
                <a href="#diagnosis">Diagnosis</a>
                <a href="#work">Workstreams</a>
                <a href="#evidence">Evidence</a>
                <a href="#impact">Impact</a>
              </nav>
            </div>
          </aside>

          <div className="max-w-4xl">
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
              <div className="mt-8 divide-y divide-[#eef0f3] border-y border-[#eef0f3]">
                {study.problems.map((problem, index) => (
                  <div
                    key={problem}
                    className="grid gap-3 py-4 md:grid-cols-[56px_minmax(0,1fr)]"
                  >
                    <span className="text-sm font-medium text-[#4262ff]">
                      0{index + 1}
                    </span>
                    <p className="font-medium leading-7 text-[#1c1c1e]">
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
                    className="border-t border-[#eef0f3] pt-6"
                  >
                    <p className="text-sm font-medium text-[#4262ff]">
                      Workstream {index + 1}
                    </p>
                    <h3 className="mt-2 text-2xl font-medium text-[#1c1c1e]">
                      {solution.title}
                    </h3>
                    <ul className="mt-4 grid gap-3">
                      {solution.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm font-medium leading-6 text-[#555a6a]"
                        >
                          <CheckCircle2
                            className="mt-0.5 shrink-0 text-[#4262ff]"
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
                    className="grid gap-3 border-t border-[#eef0f3] pt-5 md:grid-cols-[56px_minmax(0,1fr)]"
                  >
                    <span className="text-sm font-medium text-[#6b6f7e]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium text-[#1c1c1e]">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-[#555a6a]">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Placeholder
                src={study.infographicImage}
                alt={`${study.client} before and after operating model visual`}
                className="mt-10 aspect-[16/7] w-full"
                rounded="xl"
                imageClassName="object-center"
              />

              <div className="mt-8 overflow-hidden rounded-2xl border border-[#eef0f3]">
                {study.infographic.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-0 border-b border-[#eef0f3] last:border-b-0 md:grid-cols-[180px_1fr_1fr]"
                  >
                    <p className="bg-[#f7f8fa] p-4 font-medium text-[#1c1c1e]">
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
              <div className="mt-8 divide-y divide-[#eef0f3] border-y border-[#eef0f3]">
                {study.impact.map((impact) => (
                  <div
                    key={`${impact.label}-${impact.value}`}
                    className="grid gap-3 py-5 md:grid-cols-[140px_minmax(0,1fr)]"
                  >
                    <p className="text-3xl font-medium text-[#4262ff]">
                      {impact.value}
                    </p>
                    <div>
                      <h3 className="font-medium text-[#1c1c1e]">{impact.label}</h3>
                      <p className="mt-2 leading-7 text-[#555a6a]">
                        {impact.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {study.quote ? (
                <blockquote className="mt-10 border-l-4 border-[#4262ff] pl-6">
                  <p className="text-2xl font-medium leading-9 text-[#1c1c1e]">
                    &quot;{study.quote.text}&quot;
                  </p>
                  <footer className="mt-6">
                    <p className="font-medium text-[#1c1c1e]">{study.quote.person}</p>
                    <p className="mt-1 text-sm font-medium text-[#6b6f7e]">
                      {study.quote.role}
                    </p>
                  </footer>
                </blockquote>
              ) : null}
            </ReportSection>
          </div>
        </div>
      </main>

      <section className="border-t border-[#eef0f3] bg-[#f7f8fa] px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium text-[#6b6f7e]">
              Discuss a similar project
            </p>
            <h2 className="mt-2 text-3xl font-medium leading-tight text-[#1c1c1e]">
              Bring one restaurant expansion problem to the table.
            </h2>
          </div>
          <ButtonLink href="/contact">
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
    <section id={id} className="border-t border-[#eef0f3] py-10 first:border-t-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-5 text-base leading-7 text-[#555a6a]">
        {children}
      </div>
    </section>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xl font-medium leading-8 text-[#1c1c1e]">{children}</p>
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
    <aside className="border-l-4 border-[#4262ff] bg-[#f7f8fa] p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">{title}</p>
      <p className="mt-3 font-medium leading-7 text-[#1c1c1e]">{children}</p>
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
    <div className={`p-4 ${isAfter ? "bg-[#1c1c1e] text-white" : "bg-white"}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-wide ${
          isAfter ? "text-white/60" : "text-[#6b6f7e]"
        }`}
      >
        {label}
      </p>
      <p className="mt-2 font-medium leading-6">{value}</p>
    </div>
  );
}
