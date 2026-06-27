import Image from "next/image";
import { ButtonLink } from "./button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  summary,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:px-12">
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-sm font-bold uppercase text-[#E10909]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-black md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#33332e]">
          {summary}
        </p>
        {ctaLabel && ctaHref ? (
          <div className="mt-8">
            <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-2 self-stretch">
        <div className="space-y-2 pt-10">
          <div className="aspect-[4/5] overflow-hidden rounded-[32px] bg-[#f6f6f3]">
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
              alt="Busy restaurant dining room"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-2xl bg-[#f6f6f3] p-4 text-sm font-semibold text-black">
            10 to 500 outlet brands
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-2xl bg-[#262622] p-5 text-white">
            <p className="text-3xl font-bold">4</p>
            <p className="mt-2 text-sm text-white/70">
              focused services for ordering, menus, integrations, and rollout.
            </p>
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#f6f6f3]">
            <Image
              src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=800&q=80"
              alt="Cafe customer ordering at counter"
              width={800}
              height={1067}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
