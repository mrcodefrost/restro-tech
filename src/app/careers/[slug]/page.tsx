import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { roles } from "@/core/site";
import { JobDetailPage } from "@/features/careers/job-detail-page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return roles.map((role) => ({
    slug: role.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = roles.find((item) => item.slug === slug);

  if (!role) {
    return {};
  }

  return {
    title: `${role.title} | Restrovate Careers`,
    description: role.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const role = roles.find((item) => item.slug === slug);

  if (!role) {
    notFound();
  }

  return <JobDetailPage role={role} />;
}
