import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  ChartBar,
  DeviceMobile,
  GearSix,
  Lightning,
  PlayCircle,
  ShieldCheck,
  Sparkle,
  Trophy,
  Users,
  Warning,
} from "@phosphor-icons/react/ssr";
import type { Product } from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";
import { FaqAccordion } from "../shared/components/faq-accordion";
import { StepFlow } from "../shared/components/step-flow";

const featureIcons = [Lightning, ShieldCheck, DeviceMobile, Bell, Users, ChartBar, GearSix, Sparkle];

// No demo video exists for any product yet. Flip on per-product once one is ready.
const SHOW_DEMO_VIDEO = false;

type ProductDetailPageProps = {
  product: Product;
};

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const contactHref = `/contact?interest=${encodeURIComponent("A standalone product")}&topic=${encodeURIComponent(product.name)}`;

  return (
    <article>
      <header className="border-b border-[#eef0f3] bg-white px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#f7f8fa] px-4 py-2.5 text-sm font-medium text-[#1c1c1e]"
          >
            <ArrowLeft size={16} weight="duotone" />
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
          <Warning
            className="absolute -right-10 -top-10 opacity-20"
            size={180}
            weight="duotone"
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
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e]">
            The flow
          </h2>
          <div className="mt-6">
            <StepFlow
              steps={product.howItWorks}
              accentColor={product.color.accent}
              direction="horizontal"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="relative overflow-hidden rounded-2xl p-6"
            style={{ backgroundColor: product.color.soft }}
          >
            <Trophy
              className="absolute -right-5 -top-5 opacity-20"
              size={96}
              weight="duotone"
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Features
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {product.features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <div
                    key={feature}
                    className="rounded-2xl border border-[#eef0f3] bg-white p-5"
                  >
                    <span
                      className="grid size-10 place-items-center rounded-xl"
                      style={{ backgroundColor: product.color.soft }}
                    >
                      <Icon size={20} weight="duotone" style={{ color: product.color.text }} />
                    </span>
                    <p className="mt-3 text-sm font-medium leading-6 text-[#1c1c1e]">
                      {feature}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {SHOW_DEMO_VIDEO && (
        <section className="px-6 pb-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <button
              type="button"
              aria-label={`Play ${product.name} demo video`}
              className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl border border-[#e0e2e8] bg-[#1c1c1e]"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: product.color.accent }}
              />
              <span className="relative flex flex-col items-center gap-3 text-white">
                <span className="grid size-16 place-items-center rounded-full bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-105">
                  <PlayCircle size={40} weight="duotone" />
                </span>
                <span className="text-sm font-medium text-white/80">
                  See {product.name} in action
                </span>
              </span>
            </button>
          </div>
        </section>
      )}

      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div
            className="relative overflow-hidden rounded-3xl border-2 p-8 sm:p-10"
            style={{ backgroundColor: product.color.soft, borderColor: product.color.accent }}
          >
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div>
                <p
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
                  style={{ color: product.color.text }}
                >
                  Simple pricing
                </p>
                <p className="mt-4 flex items-baseline justify-center gap-2 sm:justify-start">
                  <span className="text-6xl font-medium tracking-tight text-[#1c1c1e]">
                    ₹2,500
                  </span>
                  <span className="text-base font-medium text-[#2c2c34]">
                    /month
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-[#2c2c34]">
                  GST included, for 1 outlet. Scales per outlet as you grow.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#555a6a]">
                  Opt in on its own, pay for just {product.name}, cancel anytime.
                </p>
              </div>
              <ButtonLink href={contactHref} variant="yellow" className="shrink-0">
                Book a demo
              </ButtonLink>
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
              items={product.faqs}
              accentColor={product.color.accent}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[#eef0f3] bg-white px-6 py-12 md:px-10 lg:px-12">
        <div
          className="mx-auto grid max-w-7xl gap-6 rounded-3xl p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10"
          style={{ backgroundColor: product.color.soft }}
        >
          <div>
            <p className="text-sm font-medium" style={{ color: product.color.text }}>
              Ask about {product.name}
            </p>
            <h2 className="mt-2 text-3xl font-medium leading-tight text-[#1c1c1e]">
              Available standalone, no full engagement required.
            </h2>
          </div>
          <ButtonLink href={contactHref}>Book a demo</ButtonLink>
        </div>
      </section>
    </article>
  );
}
