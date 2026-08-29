import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/core/site";
import { ProductDetailPage } from "@/features/products/product-detail-page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | RestroScale Products`,
    description: product.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
