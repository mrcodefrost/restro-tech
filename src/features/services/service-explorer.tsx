"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, MagnifyingGlass, Question, X } from "@phosphor-icons/react/ssr";
import type { Service, ServicePillarInfo } from "@/core/site";

type ServiceExplorerProps = {
  services: Service[];
  servicePillars: ServicePillarInfo[];
};

export function ServiceExplorer({ services, servicePillars }: ServiceExplorerProps) {
  const searchParams = useSearchParams();
  const pillarFromUrl = searchParams.get("pillar");
  const isValidPillar = (id: string | null): id is string =>
    id !== null && servicePillars.some((pillar) => pillar.id === id);

  const [query, setQuery] = useState("");
  const [activePillar, setActivePillar] = useState<string>(
    isValidPillar(pillarFromUrl) ? pillarFromUrl : "all",
  );

  // The hero's pillar cards link to /services?pillar=<id>#all-services. Since
  // that's a same-route navigation, this component doesn't remount, so the
  // initial useState above only applies on first mount — this re-derives
  // activePillar during render whenever the URL param itself changes.
  // (React's documented pattern for adjusting state from a changed prop,
  // rather than doing it in an effect.)
  const [prevPillarFromUrl, setPrevPillarFromUrl] = useState(pillarFromUrl);
  if (pillarFromUrl !== prevPillarFromUrl) {
    setPrevPillarFromUrl(pillarFromUrl);
    setActivePillar(isValidPillar(pillarFromUrl) ? pillarFromUrl : "all");
  }

  const pillarLookup = useMemo(
    () => new Map(servicePillars.map((pillar) => [pillar.id, pillar])),
    [servicePillars],
  );

  // The "Not sure what you need?" service (pillar "general") is a catch-all,
  // not tied to any filter or search term — it always renders, pinned last,
  // regardless of what's typed or which pillar chip is active.
  const { matched, pinned } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matched: Service[] = [];
    const pinned: Service[] = [];

    for (const service of services) {
      if (service.pillar === "general") {
        pinned.push(service);
        continue;
      }
      if (activePillar !== "all" && service.pillar !== activePillar) {
        continue;
      }
      if (
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.summary.toLowerCase().includes(q) ||
        service.tags.some((tag) => tag.toLowerCase().includes(q))
      ) {
        matched.push(service);
      }
    }

    return { matched, pinned };
  }, [services, query, activePillar]);

  const filtered = [...matched, ...pinned];

  return (
    <section
      id="all-services"
      className="scroll-mt-20 border-b border-[#eef0f3] bg-white px-6 py-14 md:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
          All services
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-3xl">
          Search or filter to find the right service.
        </h2>

        <div className="sticky top-16 z-30 -mx-6 mt-6 border-b border-[#eef0f3] bg-white/95 px-6 py-4 backdrop-blur md:-mx-10 md:px-10 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center">
            <div className="relative w-full md:max-w-xl md:flex-1">
              <MagnifyingGlass
                size={18}
                weight="duotone"
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#8e91a0]"
              />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder='Search services, e.g. "FSSAI" or "video shoot"'
                className="h-13 w-full rounded-full border border-[#c7cad5] bg-white pl-12 pr-11 text-sm font-medium text-[#1c1c1e] focus:border-[#4262ff] focus:outline-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-[#8e91a0] transition-colors hover:bg-[#f7f8fa]"
                >
                  <X size={14} weight="duotone" />
                </button>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2 md:shrink-0">
              <button
                type="button"
                onClick={() => setActivePillar("all")}
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={
                  activePillar === "all"
                    ? { backgroundColor: "#1c1c1e", color: "#ffffff" }
                    : { backgroundColor: "#f7f8fa", color: "#1c1c1e" }
                }
              >
                All
              </button>
              {servicePillars.map((pillar) => {
                const active = activePillar === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillar(active ? "all" : pillar.id)}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                    style={
                      active
                        ? { backgroundColor: pillar.color.accent, color: "#ffffff" }
                        : { backgroundColor: pillar.color.soft, color: pillar.color.text }
                    }
                  >
                    {pillar.title}
                    {active ? (
                      <span
                        className="grid size-4 shrink-0 place-items-center rounded-full bg-white"
                        style={{ color: pillar.color.accent }}
                      >
                        <X size={10} weight="bold" />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {matched.length === 0 && query ? (
          <p className="mt-8 text-sm font-medium leading-6 text-[#6b6f7e]">
            No services match &quot;{query}&quot;. Try a different term, or talk to us below.
          </p>
        ) : null}

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => {
              const isGeneral = service.pillar === "general";
              const pillar = pillarLookup.get(service.pillar);
              const soft = isGeneral ? "#f7f8fa" : (pillar?.color.soft ?? "#f7f8fa");
              const text = isGeneral ? "#1c1c1e" : (pillar?.color.text ?? "#1c1c1e");
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group flex h-full flex-col rounded-2xl p-5 transition-opacity hover:opacity-90 ${
                    isGeneral ? "border border-dashed border-[#c7cad5]" : ""
                  }`}
                  style={{ backgroundColor: soft }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="flex items-center gap-2 text-base font-medium text-[#1c1c1e]">
                      {isGeneral ? (
                        <Question size={18} weight="duotone" className="shrink-0 text-[#ffd02f]" />
                      ) : null}
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      weight="duotone"
                      className="mt-1 shrink-0 text-[#1c1c1e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#2c2c34]">
                    {service.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium"
                        style={{ color: text }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
