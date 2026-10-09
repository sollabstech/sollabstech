import type { Metadata } from "next";
import { fetchAllClients } from "@/lib/clients";
import ClientsClient from "./ClientsClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Clients & Projects – Sollabs Tech",
  description:
    "Explore the mobile apps, websites, Windows software, and custom solutions built by Sollabs Tech for clients across India. Real projects, real reviews.",
  alternates: { canonical: "/clients" },
  openGraph: {
    title: "Our Clients & Projects – Sollabs Tech",
    description:
      "Mobile apps, websites, Windows software & custom ERP systems delivered by Sollabs Tech. Browse our project portfolio with client reviews.",
    url: "https://www.sollabstech.com/clients",
  },
};

export default async function ClientsPage() {
  const clients = await fetchAllClients();
  return <ClientsClient clients={clients} />;
}
