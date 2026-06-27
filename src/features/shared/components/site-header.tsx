import Link from "next/link";
import { navItems, siteConfig } from "@/core/site";
import { ButtonLink } from "./button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e0] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6 md:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-2 text-base font-bold text-black">
          <span className="grid size-9 place-items-center rounded-full bg-[#E10909] text-white">
            R
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <div className="ml-auto hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#f6f6f3]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto md:ml-2">
          <ButtonLink href="mailto:hello@restro.tech">
            Book a Discovery Call
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
