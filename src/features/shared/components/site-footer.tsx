import Link from "next/link";
import {
  legalNavItems,
  products,
  servicePillars,
  services,
  siteConfig,
} from "@/core/site";
import { SocialLinks } from "./social-links";

const footerServiceColumns = servicePillars.map((pillar) => ({
  id: pillar.id,
  title: pillar.title,
  accent: pillar.color.accent,
  items: services.filter((service) => service.pillar === pillar.id).slice(0, 4),
}));

const companyColumn = {
  title: "Company",
  accent: "#8e91a0",
  items: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blogs", href: "/blogs" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

const productsColumn = {
  title: "Products",
  accent: "#4262ff",
  items: products.map((product) => ({ label: product.name, href: `/products/${product.slug}` })),
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1e] px-6 py-16 text-sm text-[#a5a8b5] md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-white/10">
                <span className="size-2.5 rounded-full bg-[#ffd02f]" />
              </span>
              <span className="text-lg font-semibold text-white">RestroScale</span>
            </Link>
            <p className="mt-3 max-w-sm leading-6">{siteConfig.tagline}</p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              {siteConfig.email}
            </a>
            <SocialLinks tone="dark" />
          </div>
        </div>

        <div className="grid gap-10 pb-12 pt-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Services
              </p>
              <Link
                href="/services"
                className="text-xs font-medium text-white/60 hover:text-white"
              >
                All services →
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {footerServiceColumns.map((column) => (
                <div key={column.id}>
                  <Link
                    href={`/services?pillar=${column.id}`}
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70 hover:text-white"
                  >
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: column.accent }}
                    />
                    {column.title}
                  </Link>
                  <div className="mt-3 grid gap-2.5">
                    {column.items.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="hover:text-white"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 divide-white/10 sm:max-w-xs lg:divide-x lg:border-l lg:border-white/10 lg:pl-10">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: productsColumn.accent }}
                />
                {productsColumn.title}
              </p>
              <div className="mt-4 grid gap-2.5">
                {productsColumn.items.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: companyColumn.accent }}
                />
                {companyColumn.title}
              </p>
              <div className="mt-4 grid gap-2.5">
                {companyColumn.items.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/60">
              &copy; {year} {siteConfig.legalName}. {siteConfig.legalNote}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
              {legalNavItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
