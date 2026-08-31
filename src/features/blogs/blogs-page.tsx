import Link from "next/link";
import { CalendarBlank, Clock, UserCircle } from "@phosphor-icons/react/ssr";
import { blogPosts } from "@/core/site";
import { PageHero } from "../shared/components/page-hero";
import { Placeholder } from "../shared/components/placeholder";

export function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Restaurant technology notes for growing food & beverage (F&B) chains."
        summary="Practical essays on ordering, menu operations, POS integration, loyalty, localization, and franchise rollout."
        mockupLabel="Latest notes"
        mockupSrc="/assets/blogs/pos-integration-checklist.png"
        mockupAlt="Restaurant technology planning notes and POS integration checklist"
        mockupImageClassName="object-center"
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-6 pb-20 md:px-10 lg:grid-cols-3 lg:px-12">
        {blogPosts.map((post) => (
          <Link
            href={`/blogs/${post.slug}`}
            key={post.slug}
            className="overflow-hidden rounded-2xl border border-[#eef0f3] bg-white transition-transform hover:-translate-y-1"
          >
            <Placeholder
              src={post.image}
              alt={`${post.title} cover image`}
              className="aspect-[16/10] w-full"
              rounded="xl"
              imageClassName="object-center"
            />
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#fff8e0] px-3 py-1.5 text-xs font-semibold text-[#746019]">
                  {post.category}
                </span>
                <span className="rounded-full bg-[#f7f8fa] px-3 py-1.5 text-xs font-semibold text-[#1c1c1e]">
                  {post.readTime}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-medium leading-tight text-[#1c1c1e]">
                {post.title}
              </h2>
              <p className="mt-3 leading-7 text-[#555a6a]">{post.excerpt}</p>
              <div className="mt-6 grid gap-2 text-sm font-medium text-[#6b6f7e]">
                <span className="flex items-center gap-2">
                  <UserCircle size={16} weight="duotone" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarBlank size={16} weight="duotone" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} weight="duotone" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
