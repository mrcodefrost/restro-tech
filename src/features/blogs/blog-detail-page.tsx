import Link from "next/link";
import {
  ArrowLeft,
  CalendarBlank,
  CheckCircle,
  Clock,
  Tag,
  UserCircle,
} from "@phosphor-icons/react/ssr";
import type { BlogPost } from "@/core/site";
import { ButtonLink } from "../shared/components/button-link";
import { MediaFrame } from "../shared/components/media-frame";
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
              className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm font-medium text-ink"
            >
              <ArrowLeft size={16} weight="duotone" />
              Blogs
            </Link>
            <div className="mt-6 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-card border border-line-soft bg-white p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-wide text-copy-muted">
                  {post.category}
                </p>
                <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-5 text-xl leading-8 text-copy">
                  {post.deck}
                </p>
                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  <MetaItem icon={UserCircle} label={post.author} />
                  <MetaItem icon={Clock} label={post.readTime} />
                  <MetaItem icon={CalendarBlank} label={post.publishedAt} />
                  <MetaItem icon={Tag} label={post.tags.join(", ")} />
                </div>
                <p className="mt-5 text-sm font-medium text-copy-muted">
                  Written by {post.author}, {post.authorRole}. Updated{" "}
                  {post.updatedAt}.
                </p>
              </div>
              <MediaFrame className="min-h-[420px] w-full" rounded="feature" />
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-10 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="rounded-card border border-line-soft bg-surface p-7 lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wide text-copy-muted">
                In this article
              </p>
              <ol className="mt-5 grid gap-3">
                {post.tableOfContents.map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm font-medium text-ink">
                    <span className="text-action">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </aside>
            <div className="rounded-card border border-line-soft bg-white p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-copy-muted">
                Key takeaways
              </p>
              <div className="mt-5 grid gap-3">
                {post.keyTakeaways.map((takeaway) => (
                  <div key={takeaway} className="flex gap-3 rounded-card bg-surface p-4">
                    <CheckCircle className="mt-0.5 shrink-0 text-action" size={20} weight="duotone" />
                    <p className="font-medium leading-6 text-ink">
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
              <section key={section.title} className="border-t border-line-soft py-10">
                <h2 className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 grid gap-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-8 text-copy"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 grid gap-3 rounded-card bg-surface p-6">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 font-medium leading-7 text-ink">
                        <CheckCircle className="mt-1 shrink-0 text-action" size={20} weight="duotone" />
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
        <div className="mx-auto max-w-7xl rounded-feature bg-ink p-8 text-white md:p-12">
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
    <div className="flex items-center gap-2 rounded-control bg-surface p-4 text-sm font-medium text-ink">
      <Icon className="shrink-0 text-action" size={18} weight="duotone" />
      <span>{label}</span>
    </div>
  );
}
