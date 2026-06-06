import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { audiences } from "@/data/audiences";
import { SITE_NAME } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(audiences).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const audience = audiences[slug];
  if (!audience) return { title: SITE_NAME };

  return {
    title: `${audience.label} – ${SITE_NAME}`,
    description: audience.subheadline,
  };
}

export default async function AudiencePage({ params }: PageProps) {
  const { slug } = await params;
  const audience = audiences[slug];

  if (!audience) notFound();

  return <LandingPage audience={audience} showAudienceLinks={false} />;
}
