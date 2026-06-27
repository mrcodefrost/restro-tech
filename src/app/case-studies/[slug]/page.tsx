import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/core/site";
import { CaseStudyDetailPage } from "@/features/case-studies/case-study-detail-page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | Restro Tech Case Study`,
    description: study.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailPage study={study} />;
}
