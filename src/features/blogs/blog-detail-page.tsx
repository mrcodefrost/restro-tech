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
import { ButtonLink } from "../shared/components/button-link";
import { Placeholder } from "../shared/components/placeholder";
import { ReadingProgress } from "./reading-progress";

type BlogDetailPageProps = {
  post: BlogPost;
};

export function BlogDetailPage({ post }: BlogDetailPageProps) {
  return (
    <>
      <ReadingProgress />
      <article>
        <section className="px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full bg-[#f7f8fa] px-4 py-2.5 text-sm font-medium text-[#1c1c1e]"
            >
              <ArrowLeft size={16} />
              Blogs
            </Link>
            <div className="mt-6 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-2xl border border-[#eef0f3] bg-white p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                  {post.category}
                </p>
                <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-[#1c1c1e] md:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-5 text-xl leading-8 text-[#555a6a]">
                  {post.deck}
                </p>
                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  <MetaItem icon={UserRound} label={post.author} />
                  <MetaItem icon={Clock} label={post.readTime} />
                  <MetaItem icon={CalendarDays} label={post.publishedAt} />
                  <MetaItem icon={Tag} label={post.tags.join(", ")} />
                </div>
                <p className="mt-5 text-sm font-medium text-[#6b6f7e]">
                  Written by {post.author}, {post.authorRole}. Updated{" "}
                  {post.updatedAt}.
                </p>
              </div>
              <Placeholder className="min-h-[420px] w-full" rounded="2xl" />
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-10 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="rounded-2xl border border-[#eef0f3] bg-[#f7f8fa] p-7 lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                In this article
              </p>
              <ol className="mt-5 grid gap-3">
                {post.tableOfContents.map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm font-medium text-[#1c1c1e]">
                    <span className="text-[#4262ff]">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </aside>
            <div className="rounded-2xl border border-[#eef0f3] bg-white p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">
                Key takeaways
              </p>
              <div className="mt-5 grid gap-3">
                {post.keyTakeaways.map((takeaway) => (
                  <div key={takeaway} className="flex gap-3 rounded-2xl bg-[#f7f8fa] p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#4262ff]" size={20} />
                    <p className="font-medium leading-6 text-[#1c1c1e]">
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
              <section key={section.title} className="border-t border-[#eef0f3] py-10">
                <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 grid gap-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-8 text-[#555a6a]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 grid gap-3 rounded-2xl bg-[#f7f8fa] p-6">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 font-medium leading-7 text-[#1c1c1e]">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#4262ff]" size={20} />
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
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#1c1c1e] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-medium text-white/60">
                Need this mapped for your brand?
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight md:text-4xl">
                Bring one restaurant growth problem. Leave with a pilot path.
              </h2>
            </div>
            <ButtonLink href="/contact" variant="on-dark">
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
    <div className="flex items-center gap-2 rounded-xl bg-[#f7f8fa] p-4 text-sm font-medium text-[#1c1c1e]">
      <Icon className="shrink-0 text-[#4262ff]" size={18} />
      <span>{label}</span>
    </div>
  );
}
