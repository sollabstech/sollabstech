import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Customer Reviews – Sollabs Tech",
  description: "Read real reviews from 650+ Sollabs Tech customers. 4.9/5 for software development and 5.0/5 for laptop purchases. See what people say about us.",
  keywords: ["sollabs tech reviews", "software development reviews India", "laptop shop reviews India"],
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Customer Reviews – Sollabs Tech",
    description: "650+ real reviews. 4.9/5 software rating, 5.0/5 laptop rating. Trusted across India.",
    url: "https://www.sollabstech.com/reviews",
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
