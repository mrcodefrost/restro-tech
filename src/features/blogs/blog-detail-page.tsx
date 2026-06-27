import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock,
  Tag,
  UserRound,
} from "lucide-react";
import type { BlogPost } from "@/core/site";
import { publicAsset } from "@/core/paths";
import { ButtonLink } from "../shared/components/button-link";
import { ReadingProgress } from "./reading-progress";

type BlogDetailPageProps = {
  post: BlogPost;
};

export function BlogDetailPage({ post }: BlogDetailPageProps) {
  return (
    <>
      <ReadingProgress />
      <article>
        <section className="sketch-texture px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-black"
            >
              <ArrowLeft size={16} />
              Blogs
            </Link>
            <div className="mt-6 grid gap-2 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[32px] bg-white p-7 md:p-10">
                <p className="text-sm font-bold uppercase text-[#E10909]">
                  {post.category}
                </p>
                <h1 className="mt-4 text-5xl font-semibold leading-[1.04] text-black md:text-6xl">
                  {post.title}
                </h1>
                <p className="mt-5 text-xl font-semibold leading-9 text-[#33332e]">
                  {post.deck}
                </p>
                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  <MetaItem icon={UserRound} label={post.author} />
                  <MetaItem icon={Clock} label={post.readTime} />
                  <MetaItem icon={CalendarDays} label={post.publishedAt} />
                  <MetaItem icon={Tag} label={post.tags.join(", ")} />
                </div>
                <p className="mt-5 text-sm font-semibold text-[#62625b]">
                  Written by {post.author}, {post.authorRole}. Updated{" "}
                  {post.updatedAt}.
                </p>
              </div>
              <div className="overflow-hidden rounded-[32px] bg-[#f6f6f3]">
                <Image
                  src={publicAsset(post.image)}
                  alt={post.title}
                  width={1400}
                  height={900}
                  priority
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-10 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-2 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="rounded-[32px] bg-[#f6f6f3] p-7 lg:sticky lg:top-24 lg:self-start">
              <p className="text-sm font-bold uppercase text-[#E10909]">
                In this article
              </p>
              <ol className="mt-5 grid gap-3">
                {post.tableOfContents.map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm font-bold text-black">
                    <span className="text-[#E10909]">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </aside>
            <div className="rounded-[32px] bg-white p-7 md:p-10">
              <p className="text-sm font-bold uppercase text-[#E10909]">
                Key takeaways
              </p>
              <div className="mt-5 grid gap-3">
                {post.keyTakeaways.map((takeaway) => (
                  <div key={takeaway} className="flex gap-3 rounded-2xl bg-[#f6f6f3] p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#E10909]" size={20} />
                    <p className="font-semibold leading-6 text-black">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-4xl">
            {post.sections.map((section) => (
              <section key={section.title} className="border-t border-[#dadad3] py-10">
                <h2 className="text-4xl font-bold leading-tight text-black">
                  {section.title}
                </h2>
                <div className="mt-6 grid gap-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-8 text-[#33332e]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 grid gap-3 rounded-[32px] bg-[#f6f6f3] p-6">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 font-semibold leading-7 text-black">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#E10909]" size={20} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </section>
      </article>

      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#262622] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">
                Need this mapped for your brand?
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight">
                Bring one restaurant growth problem. Leave with a pilot path.
              </h2>
            </div>
            <ButtonLink href="mailto:hello@restro.tech">
              Book a Discovery Call
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function MetaItem({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-[#f6f6f3] p-4 text-sm font-bold text-black">
      <Icon className="shrink-0 text-[#E10909]" size={18} />
      <span>{label}</span>
    </div>
  );
}
