import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clients, getClientBySlug, getRelatedClients, formatCompletedDate } from "@/lib/clients";
import ClientDetailClient from "./ClientDetailClient";

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getClientBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.companyName} – Sollabs Tech`,
    description: `${project.serviceTypes.map(s => s).join(" & ")} project for ${project.companyName} in ${project.location}. ${project.duration} · Completed ${formatCompletedDate(project.completedDate)}.`,
    alternates: { canonical: `/clients/${slug}` },
    openGraph: {
      title: `${project.companyName} – Sollabs Tech`,
      description: project.description.slice(0, 160),
      url: `https://www.sollabstech.com/clients/${slug}`,
    },
  };
}

export default async function ClientDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getClientBySlug(slug);
  if (!project) notFound();
  const related = getRelatedClients(slug, project.serviceTypes);
  return <ClientDetailClient project={project} related={related} />;
}
