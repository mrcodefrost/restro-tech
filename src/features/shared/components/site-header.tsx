"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Buildings,
  Camera,
  CaretDown,
  ListChecks,
  EnvelopeSimple,
  List,
  Megaphone,
  Devices,
  Newspaper,
  Users,
  X,
} from "@phosphor-icons/react/ssr";
import { products, servicePillars, services } from "@/core/site";
import { ButtonLink } from "./button-link";
import { SiteLogo } from "./site-logo";

const EASE = [0.22, 1, 0.36, 1] as const;

type MegaColumn = {
  id: string;
  title: string;
  accent: string;
  soft: string;
  text: string;
  items: { label: string; href: string; description?: string }[];
  viewAllHref?: string;
  viewAllLabel?: string;
};

const servicesColumns: MegaColumn[] = servicePillars.map((pillar) => ({
  id: pillar.id,
  title: pillar.title,
  accent: pillar.color.accent,
  soft: pillar.color.soft,
  text: pillar.color.text,
  items: services
    .filter((service) => service.pillar === pillar.id)
    .map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  viewAllHref: `/services?pillar=${pillar.id}`,
  viewAllLabel: `All ${pillar.title.toLowerCase()} services`,
}));

const productsColumn: MegaColumn = {
  id: "products",
  title: "Products",
  accent: "#4262ff",
  soft: "#f5f3ff",
  text: "#2a41b6",
  items: products.map((product) => ({
    label: product.name,
    href: `/products/${product.slug}`,
    description: product.tagline,
  })),
  viewAllHref: "/products",
  viewAllLabel: "All products",
};

const aboutColumn: MegaColumn = {
  id: "about",
  title: "Company",
  accent: "#1c1c1e",
  soft: "#f7f8fa",
  text: "#1c1c1e",
  items: [
    {
      label: "About us",
      href: "/about",
      description: "Who Restrovate is and how we work",
    },
    {
      label: "Blogs",
      href: "/blogs",
      description: "Operator notes on F&B expansion",
    },
    {
      label: "Careers",
      href: "/careers",
      description: "Open roles on the team",
    },
    {
      label: "Contact",
      href: "/contact",
      description: "Start a conversation",
    },
  ],
};

type MenuKey = "services" | "products" | "about" | null;


function ProductsMegaPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="rounded-2xl bg-[#1c1c1e] p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
          Software suite
        </p>
        <h3 className="mt-4 text-2xl font-medium leading-tight">
          One account. Pick the tools you need.
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/70">
          Clients can opt into any product in the suite, pay only for what is
          active, and cancel anytime.
        </p>
        <Link
          href="/products"
          onClick={onNavigate}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#1c1c1e]"
        >
          See products
          <ArrowUpRight size={16} weight="duotone" />
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            onClick={onNavigate}
            className="group rounded-2xl border border-[#eef0f3] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7cad5] hover:shadow-[0_16px_36px_-28px_rgba(5,0,56,0.4)]"
            style={{ backgroundColor: product.color.soft }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: product.color.text }}
            >
              {product.tagline}
            </p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <h4 className="text-lg font-semibold text-[#1c1c1e]">
                {product.name}
              </h4>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#1c1c1e] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={16} weight="duotone" />
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-[#555a6a]">
              {product.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const serviceIcons = {
  legal: ListChecks,
  tech: Devices,
  marketing: Megaphone,
  production: Camera,
  general: Briefcase,
};

function ServicesMegaPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-3 xl:grid-cols-4">
      {servicesColumns.map((column) => {
        const Icon = serviceIcons[column.id as keyof typeof serviceIcons];
        return (
          <div
            key={column.id}
            className="flex h-full flex-col rounded-2xl border border-[#eef0f3] p-4"
            style={{ backgroundColor: column.soft }}
          >
            <div className="flex items-start justify-between gap-3">
              <div
                className="grid size-10 place-items-center rounded-full bg-white"
                style={{ color: column.text }}
              >
                <Icon size={19} weight="duotone" />
              </div>
              <Link
                href={column.viewAllHref ?? "/services"}
                onClick={onNavigate}
                className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#1c1c1e] transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5"
                aria-label={column.viewAllLabel}
              >
                <ArrowUpRight size={16} weight="duotone" />
              </Link>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-[#1c1c1e]">
              {column.title}
            </h4>
            <ul className="mt-4 flex-1 space-y-1.5">
              {column.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="group/item flex items-center justify-between gap-2 rounded-lg bg-white/65 px-3 py-2 text-xs font-medium text-[#1c1c1e] transition-all duration-200 hover:bg-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={13}
                      weight="duotone"
                      className="shrink-0 opacity-45 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            {column.viewAllHref && column.viewAllLabel ? (
              <Link
                href={column.viewAllHref}
                onClick={onNavigate}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: column.text }}
              >
                {column.viewAllLabel}
                <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">
                  -&gt;
                </span>
              </Link>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

const aboutCardTones: Record<
  string,
  { icon: typeof Buildings; soft: string; text: string }
> = {
  "/about": { icon: Buildings, soft: "#f7f8fa", text: "#1c1c1e" },
  "/blogs": { icon: Newspaper, soft: "#c3faf5", text: "#187574" },
  "/careers": { icon: Users, soft: "#fff8e0", text: "#746019" },
  "/contact": { icon: EnvelopeSimple, soft: "#ffc6c6", text: "#600000" },
};

function AboutMegaPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-3 xl:grid-cols-4">
      {aboutColumn.items.map((item) => {
        const tone = aboutCardTones[item.href];
        const Icon = tone?.icon ?? Buildings;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="group rounded-2xl border border-[#eef0f3] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7cad5] hover:shadow-[0_16px_36px_-28px_rgba(5,0,56,0.4)]"
            style={{ backgroundColor: tone?.soft ?? "#f7f8fa" }}
          >
            <div className="flex items-start justify-between gap-3">
              <div
                className="grid size-10 place-items-center rounded-full bg-white"
                style={{ color: tone?.text ?? "#1c1c1e" }}
              >
                <Icon size={19} weight="duotone" />
              </div>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#1c1c1e] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={16} weight="duotone" />
              </span>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-[#1c1c1e]">
              {item.label}
            </h4>
            <p className="mt-2 text-xs leading-5 text-[#555a6a]">
              {item.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

function NavTrigger({
  label,
  active,
  onEnter,
  onLeave,
  onClick,
}: {
  label: string;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="relative flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium text-[#1c1c1e] transition-colors"
    >
      <span className="relative z-10">{label}</span>
      <CaretDown
        size={14}
        weight="duotone"
        className={`relative z-10 transition-all duration-300 ${active ? "rotate-180 text-[#ffd02f]" : ""}`}
      />
      {active ? (
        <motion.span
          layoutId="nav-hover-pill"
          className="absolute inset-0 rounded-full bg-[#f7f8fa]"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
      ) : null}
    </button>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-full px-4 py-2.5 text-sm font-medium text-[#1c1c1e] transition-colors"
    >
      <span className="relative z-10">{label}</span>
      {hovered ? (
        <motion.span
          layoutId="nav-hover-pill"
          className="absolute inset-0 rounded-full bg-[#f7f8fa]"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (menu: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eef0f3] bg-white/95 backdrop-blur">
      <nav
        className="relative mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 md:gap-4 md:px-10 lg:px-12"
        onMouseLeave={scheduleClose}
      >
        <Link
          href="/"
          className="flex min-w-0 items-center"
          onClick={() => setOpen(false)}
        >
          <SiteLogo />
        </Link>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          <NavTrigger
            label="Services"
            active={activeMenu === "services"}
            onEnter={() => openMenu("services")}
            onLeave={scheduleClose}
            onClick={() =>
              setActiveMenu((value) => (value === "services" ? null : "services"))
            }
          />
          <NavTrigger
            label="Products"
            active={activeMenu === "products"}
            onEnter={() => openMenu("products")}
            onLeave={scheduleClose}
            onClick={() =>
              setActiveMenu((value) => (value === "products" ? null : "products"))
            }
          />
          <NavLink href="/case-studies" label="Case Studies" />
          <NavTrigger
            label="About"
            active={activeMenu === "about"}
            onEnter={() => openMenu("about")}
            onLeave={scheduleClose}
            onClick={() =>
              setActiveMenu((value) => (value === "about" ? null : "about"))
            }
          />
        </div>

        <div className="ml-auto hidden lg:ml-2 lg:block">
          <ButtonLink href="/contact">Book a Discovery Call</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="ml-auto grid size-10 shrink-0 place-items-center rounded-full text-[#1c1c1e] transition-colors hover:bg-[#f7f8fa] lg:hidden"
        >
          {open ? <X size={22} weight="duotone" /> : <List size={22} weight="duotone" />}
        </button>

        <AnimatePresence>
          {activeMenu ? (
            <motion.div
              onMouseEnter={() => openMenu(activeMenu)}
              onMouseLeave={scheduleClose}
              initial={{ opacity: 0, y: -8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="absolute left-0 right-0 top-full hidden origin-top border-t border-[#eef0f3] bg-white shadow-[0_24px_48px_-16px_rgba(5,0,56,0.12)] lg:block"
            >
              <div className="mx-auto max-w-7xl px-10 py-8 lg:px-12">
                {activeMenu === "services" ? (
                  <ServicesMegaPanel onNavigate={() => setActiveMenu(null)} />
                ) : activeMenu === "products" ? (
                  <ProductsMegaPanel onNavigate={() => setActiveMenu(null)} />
                ) : (
                  <AboutMegaPanel onNavigate={() => setActiveMenu(null)} />
                )}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden border-t border-[#eef0f3] bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              <MobileGroup
                label="Services"
                expanded={mobileExpanded === "services"}
                onToggle={() =>
                  setMobileExpanded((value) =>
                    value === "services" ? null : "services",
                  )
                }
                links={servicesColumns.flatMap((column) => column.items)}
                viewAllHref="/services"
                viewAllLabel="View all services"
                onNavigate={() => setOpen(false)}
              />
              <MobileGroup
                label="Products"
                expanded={mobileExpanded === "products"}
                onToggle={() =>
                  setMobileExpanded((value) =>
                    value === "products" ? null : "products",
                  )
                }
                links={productsColumn.items}
                viewAllHref="/products"
                viewAllLabel="View all products"
                onNavigate={() => setOpen(false)}
              />
              <Link
                href="/case-studies"
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-[#1c1c1e] transition-colors hover:bg-[#f7f8fa]"
              >
                Case Studies
              </Link>
              <MobileGroup
                label="About"
                expanded={mobileExpanded === "about"}
                onToggle={() =>
                  setMobileExpanded((value) =>
                    value === "about" ? null : "about",
                  )
                }
                links={aboutColumn.items}
                onNavigate={() => setOpen(false)}
              />
              <div className="mt-2 px-4">
                <ButtonLink href="/contact">Book a Discovery Call</ButtonLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MobileGroup({
  label,
  expanded,
  onToggle,
  links,
  viewAllHref,
  viewAllLabel,
  onNavigate,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
  links: { label: string; href: string; description?: string }[];
  viewAllHref?: string;
  viewAllLabel?: string;
  onNavigate: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium text-[#1c1c1e] transition-colors hover:bg-[#f7f8fa]"
      >
        {label}
        <CaretDown
          size={16}
          weight="duotone"
          className={`transition-all duration-300 ${expanded ? "rotate-180 text-[#ffd02f]" : ""}`}
        />
      </button>
      <AnimatePresence>
        {expanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="overflow-hidden pl-4"
          >
            <div className="flex flex-col gap-0.5 border-l border-[#eef0f3] py-1 pl-4">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2 text-sm text-[#555a6a] transition-colors hover:bg-[#f7f8fa] hover:text-[#1c1c1e]"
                >
                  {item.label}
                </Link>
              ))}
              {viewAllHref && viewAllLabel ? (
                <Link
                  href={viewAllHref}
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-[#2a41b6] transition-colors hover:bg-[#f7f8fa]"
                >
                  {viewAllLabel}
                </Link>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
