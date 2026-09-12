"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { servicePillars, services } from "@/core/site";

export function ServicePillarShowcase() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [focusedSlug, setFocusedSlug] = useState<string | null>(null);
  const descriptionId = useId();
  const activeService = services.find((service) => service.slug === (hoveredSlug ?? focusedSlug));

  return (
    <div className="divide-y divide-line border-y border-line">
      {servicePillars.map((pillar) => (
        <div key={pillar.id} className="grid gap-6 py-7 md:grid-cols-2 md:gap-12">
          <div className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-2.5 size-2.5 shrink-0 rounded-full" style={{ backgroundColor: pillar.color.accent }} />
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-ink">{pillar.title}</h3>
              {activeService?.pillar === pillar.id ? (
                <p id={`${descriptionId}-${pillar.id}`} className="mt-3 max-w-md text-sm leading-6 text-copy">{activeService.summary}</p>
              ) : null}
            </div>
          </div>
          <div>
            <ul className="grid gap-1">
              {services.filter((service) => service.pillar === pillar.id).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    onPointerEnter={(event) => { if (event.pointerType !== "touch") setHoveredSlug(service.slug); }}
                    onPointerLeave={() => setHoveredSlug(null)}
                    onPointerCancel={() => setHoveredSlug(null)}
                    onFocus={() => setFocusedSlug(service.slug)}
                    onBlur={() => setFocusedSlug(null)}
                    aria-describedby={activeService?.slug === service.slug ? `${descriptionId}-${pillar.id}` : undefined}
                    style={activeService?.slug === service.slug ? { backgroundColor: pillar.color.soft, color: pillar.color.text } : undefined}
                    className="group flex min-h-11 items-center justify-between gap-4 rounded-control px-3 py-2 text-sm font-medium text-ink transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
                  >
                    {service.title}
                    <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 opacity-0 transition-[opacity,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transform-none motion-reduce:transition-none" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {services.filter((service) => service.pillar === "general").map((service) => (
        <Link key={service.slug} href={`/services/${service.slug}`} className="group flex min-h-11 items-center justify-between gap-4 rounded-control px-3 py-5 text-sm font-medium text-action-deep transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action">
          {service.title}
          <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
        </Link>
      ))}
    </div>
  );
}
