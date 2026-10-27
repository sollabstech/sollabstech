import type { Metadata } from "next";
import PolicyDocument, { type Section } from "@/components/PolicyDocument";

const PATH = "/offerss/delete-account";
const EMAIL = "[CONTACT EMAIL]";

export const metadata: Metadata = {
  title: "Delete Your Offerss Account | Sollabs Tech",
  description: "How to delete your Offerss account and personal data, what is deleted and what must be kept.",
  alternates: { canonical: PATH },
};

const sections: Section[] = [
  { h: "1. How to ask", id: "how", body: [
    { list: [
      `Email ${EMAIL} from the email address you sign in with, subject “Delete my Offerss account”.`,
      "We may ask you to confirm the request.",
      "We delete your account within 30 days and email you when it is done.",
    ] },
  ] },
  { h: "2. What is deleted", id: "deleted", body: [
    { list: ["Your account: name, email, profile photo, phone number, user ID, join date and last login", "Your saved address"] },
    "Your cart, wishlist and saved address stored on your device can be removed by clearing the app’s data.",
  ] },
  { h: "3. What we must keep", id: "kept", body: [
    "Order and invoice records are kept for the period Indian law requires for tax and legal purposes, and deleted after that.",
  ] },
  { h: "4. More information", id: "more", body: [{ links: [{ label: "Offerss Privacy Policy", href: "https://www.sollabstech.com/offerss/privacy-policy" }] }] },
];

export default function OfferssDeletePage() {
  return (
    <PolicyDocument tag="Offerss App" title="Delete Your Offerss Account" appName="Offerss" packageName="com.sollabstech.offerss"
      path={PATH} effectiveDate="27 October 2026" effectiveIso="2026-10-27"
      intro="You can ask us to delete your Offerss account and personal data at any time. This page explains how."
      sections={sections} scopeNote="This page applies only to the Offerss app."
      otherLinks={[{ label: "Offerss Privacy Policy", href: "/offerss/privacy-policy" }]}
      schemaDescription="How to delete an Offerss account." />
  );
}
