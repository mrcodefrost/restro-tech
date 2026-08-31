import Link from "next/link";
import {
  ArrowRight,
  Buildings,
  Clock,
  MapPin,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import { roles, values } from "@/core/site";
import { FadeIn } from "../shared/components/fade-in";

const workNotes = [
  {
    title: "Build close to operators",
    summary:
      "The work starts with outlet realities: menus, queues, complaints, franchise leads, paperwork, shoots, and launch dates.",
    icon: Buildings,
  },
  {
    title: "Small team, real ownership",
    summary:
      "You will work across the full path from brief to launch, with direct context instead of layers of handoff.",
    icon: UsersThree,
  },
  {
    title: "Systems over theatrics",
    summary:
      "Restrovate serves F&B brands with practical systems: clean software, disciplined content, and dependable rollout support.",
    icon: Sparkle,
  },
];

export function CareersPage() {
  return (
    <>
      <section className="px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(420px,0.72fr)] lg:items-end">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
              Careers
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[1.04] tracking-tight text-[#1c1c1e] md:text-6xl">
              Build the operating layer for ambitious F&amp;B brands.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555a6a]">
              Restrovate brings paperwork, tech, marketing, and production
              together for restaurant chains, private chefs, catering teams,
              and culinary brands preparing for their next stage.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="rounded-[28px] bg-[#1c1c1e] p-6 text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Work location
            </p>
            <div className="mt-5 flex items-start gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#ffd02f] text-[#1c1c1e]">
                <MapPin size={22} weight="duotone" />
              </span>
              <div>
                <h2 className="text-2xl font-medium">Delhi</h2>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Roles are based in Delhi, with on-site collaboration and
                  client/location visits depending on the team.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-[#eef0f3] bg-[#f7f8fa] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {workNotes.map((note) => {
            const Icon = note.icon;
            return (
              <FadeIn key={note.title} className="rounded-2xl bg-white p-5">
                <div className="grid size-10 place-items-center rounded-full bg-[#fff8e0] text-[#746019]">
                  <Icon size={20} weight="duotone" />
                </div>
                <h2 className="mt-5 text-xl font-medium text-[#1c1c1e]">
                  {note.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#555a6a]">
                  {note.summary}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                Open roles
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#1c1c1e] md:text-4xl">
                Current openings
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[#555a6a]">
              We look for people who can work with ambiguity, document clearly,
              and care about how a system behaves in the real world.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
          {roles.map((role) => (
            <Link
              key={role.slug}
              href={`/careers/${role.slug}`}
              className="group grid gap-5 rounded-2xl border border-[#eef0f3] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7cad5] hover:shadow-[0_16px_36px_-28px_rgba(5,0,56,0.35)] md:grid-cols-[1fr_auto] md:p-6"
            >
              <div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                  <span>{role.team}</span>
                  <span aria-hidden>/</span>
                  <span>{role.type}</span>
                </div>
                <h3 className="mt-3 text-2xl font-medium text-[#1c1c1e]">
                  {role.title}
                </h3>
                <p className="mt-3 max-w-3xl leading-7 text-[#555a6a]">
                  {role.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <RolePill icon={MapPin} label={role.location} />
                  <RolePill icon={Buildings} label={role.workMode} />
                  <RolePill icon={Clock} label={role.experience} />
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-end rounded-full bg-[#1c1c1e] px-5 py-3 text-sm font-medium text-white transition-colors group-hover:bg-[#2c2c34] md:self-center">
                View role
                <ArrowRight size={16} weight="duotone" />
              </span>
            </Link>
          ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c1c1e] px-6 py-16 text-white md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Clear taste. Clear systems.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value, index) => (
              <div key={value} className="rounded-2xl bg-white/8 p-5">
                <span className="text-sm font-medium text-[#ffd02f]">
                  0{index + 1}
                </span>
                <p className="mt-3 text-sm font-medium leading-6 text-white/85">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function RolePill({
  icon: Icon,
  label,
}: {
  icon: typeof MapPin;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e0e2e8] px-3 py-1.5 text-xs font-medium text-[#555a6a]">
      <Icon size={14} weight="duotone" />
      {label}
    </span>
  );
}
