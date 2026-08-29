import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TriangleAlert } from "lucide-react";
import { products } from "@/core/site";
import { PageHero } from "../shared/components/page-hero";
import { ButtonLink } from "../shared/components/button-link";

export function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="One software suite. Four products you can switch on as needed."
        summary="Q, Feedbackly, Loyalty, and Resolve all live inside one software suite. Clients use one account, opt into any product, pay only for what is active, and cancel anytime."
        ctaLabel="Ask about a product"
        ctaHref="/contact"
        mockupLabel="Our products"
        mockupSrc="/assets/home/guest-ordering.png"
        mockupAlt="Guest ordering and restaurant technology product journey"
        mockupImageClassName="object-center"
      />

      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.slug}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#eef0f3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c7cad5] hover:shadow-[0_18px_42px_-30px_rgba(5,0,56,0.45)]"
            >
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: product.color.accent }}
              />
              <div className="flex h-full flex-col p-6">
                <p
                  className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{ backgroundColor: product.color.soft, color: product.color.text }}
                >
                  {product.tagline}
                </p>
                <h2 className="mt-4 inline-flex w-fit rounded-full bg-[#1c1c1e] px-4 py-2 text-2xl font-semibold text-white">
                  {product.name}
                </h2>
                <p className="mt-3 leading-7 text-[#555a6a]">{product.summary}</p>

                <div
                  className="relative mt-5 overflow-hidden rounded-xl p-4"
                  style={{ backgroundColor: product.color.soft }}
                >
                  <TriangleAlert
                    className="absolute -right-4 -top-4 opacity-20"
                    size={72}
                    strokeWidth={1.5}
                    style={{ color: product.color.text }}
                  />
                  <p
                    className="relative text-xs font-semibold uppercase tracking-wide"
                    style={{ color: product.color.text }}
                  >
                    The problem
                  </p>
                  <p className="relative mt-2 text-sm font-medium leading-6 text-[#1c1c1e]">
                    {product.problem.headline}
                  </p>
                </div>

                <ul className="mt-5 grid flex-1 gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-[#555a6a]">
                      <CheckCircle2
                        className="mt-0.5 shrink-0"
                        style={{ color: product.color.accent }}
                        size={18}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/products/${product.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: product.color.text }}
                >
                  Learn more
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
            Why not just use standard POS?
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
            Petpooja and Restroworks solve point of sale. They weren&apos;t built for franchise management.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#555a6a]">
            Standard restaurant POS platforms are built for a single
            restaurant, and licensing them across many outlets gets expensive
            without buying franchise-specific capability. Our products are
            scoped to the problems a franchise operator actually has, queueing,
            feedback, loyalty, and complaint tracking, rather than being a full
            POS replacement.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#1c1c1e] px-6 py-12 text-white md:px-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-medium text-white/60">
                Start here
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight md:text-4xl">
                Need a full engagement instead?
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-white/70">
                Paperwork, tech, marketing, and production, end to end, for
                food & beverage (F&B) brands at every stage of the franchise
                journey.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/services" variant="outline-on-dark">
                See services
              </ButtonLink>
              <ButtonLink href="/contact" variant="on-dark">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
