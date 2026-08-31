import Link from "next/link";
import { ArrowLeft, CheckCircle, FileText, Warning } from "@phosphor-icons/react/ssr";
import { servicePillars, type Service } from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";
import { FaqAccordion } from "../shared/components/faq-accordion";
import { StepFlow } from "../shared/components/step-flow";

const pillarInterest: Record<Service["pillar"], string> = {
  legal: "Paperwork & compliance",
  tech: "Tech",
  marketing: "Marketing",
  production: "Production",
  general: "Something else",
};

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const pillar = servicePillars.find((item) => item.id === service.pillar);
  const contactHref = `/contact?interest=${encodeURIComponent(pillarInterest[service.pillar])}&topic=${encodeURIComponent(service.title)}`;

  return (
    <article>
      <header className="border-b border-[#eef0f3] bg-white px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#f7f8fa] px-4 py-2.5 text-sm font-medium text-[#1c1c1e]"
          >
            <ArrowLeft size={16} weight="duotone" />
            Services
          </Link>

          <div className="mt-8 max-w-4xl">
            {pillar && (
              <p
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
                style={{ backgroundColor: pillar.color.soft, color: pillar.color.text }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: pillar.color.accent }}
                />
                {pillar.title}
              </p>
            )}
            <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-[#1c1c1e] md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#555a6a]">
              {service.overview}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f7f8fa] px-3 py-1.5 text-xs font-medium text-[#1c1c1e]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              What you get
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e]">
              Deliverables
            </h2>
            <ul className="mt-6 grid gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-[#eef0f3] bg-white p-4">
                  <CheckCircle className="mt-0.5 shrink-0 text-[#4262ff]" size={20} weight="duotone" />
                  <span className="text-sm font-medium leading-6 text-[#1c1c1e]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {service.requirements && service.requirements.length > 0 && (
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                  Before we start
                </p>
                <h2 className="mt-3 text-2xl font-medium leading-tight tracking-tight text-[#1c1c1e]">
                  What you&apos;ll need to have ready
                </h2>
                <ul className="mt-6 grid gap-3">
                  {service.requirements.map((item) => (
                    <li key={item} className="relative flex overflow-hidden gap-3 rounded-xl bg-[#f5f3ff] p-4">
                      <Warning className="absolute -right-4 -top-4 text-[#4262ff]/10" size={72} weight="duotone" />
                      <FileText className="relative mt-0.5 shrink-0 text-[#4262ff]" size={20} weight="duotone" />
                      <span className="relative text-sm font-medium leading-6 text-[#1c1c1e]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e]">
              Our process
            </h2>
            <div className="mt-6">
              <StepFlow
                steps={service.process}
                accentColor={pillar?.color.accent ?? "#ffd02f"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e]">
            Frequently asked
          </h2>
          <div className="mt-6">
            <FaqAccordion
              items={service.faqs}
              accentColor={pillar?.color.accent}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[#eef0f3] bg-white px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl bg-[#fff8e0] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-sm font-medium text-[#746019]">
              Discuss this service
            </p>
            <h2 className="mt-2 text-3xl font-medium leading-tight text-[#1c1c1e]">
              Bring one restaurant expansion problem to the table.
            </h2>
          </div>
          <ButtonLink href={contactHref}>Book a Discovery Call</ButtonLink>
        </div>
      </section>
    </article>
  );
}
