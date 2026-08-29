import Link from "next/link";
import { ArrowLeft, CheckCircle2, TriangleAlert, Trophy } from "lucide-react";
import type { Product } from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";
import { FaqAccordion } from "../shared/components/faq-accordion";

type ProductDetailPageProps = {
  product: Product;
};

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <article>
      <header className="border-b border-[#eef0f3] bg-white px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#f7f8fa] px-4 py-2.5 text-sm font-medium text-[#1c1c1e]"
          >
            <ArrowLeft size={16} />
            Products
          </Link>

          <div className="mt-8 max-w-4xl">
            <p
              className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
              style={{ backgroundColor: product.color.soft, color: product.color.text }}
            >
              {product.tagline}
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-[#1c1c1e] md:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#555a6a]">
              {product.overview}
            </p>
          </div>
        </div>
      </header>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl p-8" style={{ backgroundColor: product.color.soft }}>
          <TriangleAlert
            className="absolute -right-10 -top-10 opacity-20"
            size={180}
            strokeWidth={1.4}
            style={{ color: product.color.text }}
          />
          <p
            className="relative text-xs font-semibold uppercase tracking-wide"
            style={{ color: product.color.text }}
          >
            The problem
          </p>
          <h2 className="relative mt-3 max-w-3xl text-2xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-3xl">
            {product.problem.headline}
          </h2>
          <p className="relative mt-4 max-w-3xl leading-7 text-[#2c2c34]">
            {product.problem.body}
          </p>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
            {product.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl bg-white p-5">
                <p
                  className="text-3xl font-medium tracking-tight"
                  style={{ color: product.color.text }}
                >
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-medium leading-5 text-[#1c1c1e]">
                  {metric.label}
                </p>
                <p className="mt-2 text-xs leading-5 text-[#6b6f7e]">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e]">
              The flow
            </h2>
            <div className="mt-6 grid gap-3">
              {product.howItWorks.map((step, index) => (
                <article key={step.title} className="rounded-2xl bg-[#1c1c1e] p-5 text-white">
                  <span
                    className="text-sm font-medium"
                    style={{ color: product.color.accent }}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {step.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div
              className="relative overflow-hidden rounded-2xl p-6"
              style={{ backgroundColor: product.color.soft }}
            >
              <Trophy
                className="absolute -right-5 -top-5 opacity-20"
                size={96}
                strokeWidth={1.5}
                style={{ color: product.color.text }}
              />
              <p
                className="relative text-xs font-semibold uppercase tracking-wide"
                style={{ color: product.color.text }}
              >
                Best for
              </p>
              <p className="relative mt-2 text-sm font-medium leading-6 text-[#1c1c1e]">
                {product.audience}
              </p>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Features
            </p>
            <ul className="mt-4 grid gap-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3 rounded-xl border border-[#eef0f3] bg-white p-4">
                  <CheckCircle2
                    className="mt-0.5 shrink-0"
                    style={{ color: product.color.accent }}
                    size={20}
                  />
                  <span className="text-sm font-medium leading-6 text-[#1c1c1e]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
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
              items={product.faqs}
              accentColor={product.color.accent}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[#eef0f3] bg-[#1c1c1e] px-6 py-10 text-white md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium text-white/60">
              Ask about {product.name}
            </p>
            <h2 className="mt-2 text-3xl font-medium leading-tight">
              Available standalone, no full engagement required.
            </h2>
          </div>
          <ButtonLink href="/contact" variant="on-dark">Book a Discovery Call</ButtonLink>
        </div>
      </section>
    </article>
  );
}
