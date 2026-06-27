import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/core/site";
import { BlogDetailPage } from "@/features/blogs/blog-detail-page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Restro Tech Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailPage post={post} />;
}
