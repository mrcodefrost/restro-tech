import Link from "next/link";
import { navItems, services, siteConfig } from "@/core/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dadad3] bg-white px-6 py-10 text-sm text-[#62625b] md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="text-base font-bold text-black">
            {siteConfig.name}
          </Link>
          <p className="mt-3 max-w-sm leading-6">{siteConfig.tagline}</p>
          <p className="mt-4 text-xs">{siteConfig.email}</p>
        </div>
        <div>
          <p className="font-bold text-black">Pages</p>
          <div className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-black">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-black">Services</p>
          <div className="mt-3 grid gap-2">
            {services.map((service) => (
              <span key={service.title}>{service.title}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-xs">
        Copyright 2026 {siteConfig.name}. Built for franchise restaurant brands.
      </div>
    </footer>
  );
}
