import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, UserRound } from "lucide-react";
import { blogPosts } from "@/core/site";
import { publicAsset } from "@/core/paths";
import { PageHero } from "../shared/components/page-hero";

export function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Restaurant technology notes for growing F&B chains."
        summary="Practical essays on ordering, menu operations, POS integration, loyalty, localization, and franchise rollout."
      />
      <section className="mx-auto grid max-w-7xl gap-2 px-6 py-16 md:px-10 lg:grid-cols-3 lg:px-12">
        {blogPosts.map((post) => (
          <Link
            href={`/blogs/${post.slug}`}
            key={post.title}
            className="overflow-hidden rounded-[32px] bg-[#f6f6f3] transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[16/10]">
              <Image
                src={publicAsset(post.image)}
                alt={post.title}
                width={1100}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-black">
                  {post.category}
                </span>
                <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-black">
                  {post.readTime}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight text-black">
                {post.title}
              </h2>
              <p className="mt-3 leading-7 text-[#33332e]">{post.excerpt}</p>
              <div className="mt-6 grid gap-2 text-sm font-semibold text-[#62625b]">
                <span className="flex items-center gap-2">
                  <UserRound size={16} />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
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
