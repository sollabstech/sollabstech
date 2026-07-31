import type { Metadata } from "next";
import TrackClient from "./TrackClient";

export const metadata: Metadata = {
  title: "Track Your Software Project – Sollabs Tech",
  description: "Track your software project status in real-time. Enter your Project ID to view build progress, milestones, and demo — powered by Sollabs Tech.",
  keywords: ["track software project", "project status India", "sollabs tech project tracker"],
  alternates: { canonical: "/track" },
  openGraph: {
    title: "Track Your Project – Sollabs Tech",
    description: "Real-time project tracking for apps, websites, and custom software built by Sollabs Tech.",
    url: "https://www.sollabstech.com/track",
  },
};

export default function TrackPage() {
  return <TrackClient />;
}
