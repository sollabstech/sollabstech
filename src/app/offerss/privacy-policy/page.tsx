import type { Metadata } from "next";
import PolicyDocument, { type Section } from "@/components/PolicyDocument";

const PATH = "/offerss/privacy-policy";
const EFFECTIVE_DATE = "27 October 2026";
const EFFECTIVE_ISO = "2026-10-27";

// Fill these in before publishing to Google Play.
const OP = { name: "[LEGAL NAME]", address: "[REGISTERED ADDRESS]", email: "[CONTACT EMAIL]", officer: "[NAME]", phone: "[PHONE]" };

export const metadata: Metadata = {
  title: "Offerss App Privacy Policy | Sollabs Tech",
  description: "How the Offerss shopping app and theofferss.com collect, use, share and protect your personal data, and how to delete it.",
  alternates: { canonical: PATH },
  openGraph: { title: "Offerss Privacy Policy", description: "What the Offerss app collects and how to delete your data.", url: `https://www.sollabstech.com${PATH}`, type: "article" },
};

const sections: Section[] = [
  { h: "1. Who we are", id: "who", body: [
    `Offerss is an online marketplace: the website theofferss.com and the Offerss Android app (package com.sollabstech.offerss), which shows the website inside the app. It is run by ${OP.name}, ${OP.address}, and the app was developed by Sollabs Tech. “We” and “us” means ${OP.name}.`,
  ] },
  { h: "2. Data we collect", id: "collect", body: [
    "When you sign in with Google (through Firebase Authentication):",
    { list: ["Name, email address and profile photo from Google", "Firebase user ID, and your phone number if your Google account provides it", "Date you joined, last login, number of orders and total spent"] },
    "When you place an order:",
    { list: ["Products and prices", "Delivery name, address, city, state, pincode, country and phone, and your email", "Payment method and order status", "Shipment courier and tracking ID"] },
    "Returns and replacements: order ID, product, reason and the details you write.",
  ] },
  { h: "3. Payments", id: "payments", body: [
    "Card, UPI and net-banking payments are processed by Razorpay. We never receive or store your full card number, UPI PIN or bank details. We keep only the payment method and order and payment reference numbers.",
  ] },
  { h: "4. Data kept only on your device", id: "device", body: [
    "Your cart, wishlist and saved address are kept in local storage on your phone or browser. The help chat bubble answers from information built into the page; your messages are not sent anywhere.",
  ] },
  { h: "5. How we use your data", id: "use", body: [
    { list: ["To sign you in and run your account", "To process, deliver and track orders", "To handle payments, returns and replacements", "To answer your questions and keep the service secure"] },
  ] },
  { h: "6. Who we share data with", id: "share", body: [
    { list: [
      "Delivery: name, address, phone, pincode and items go to Shiprocket and its courier partners, or to a courier the seller books, to deliver your order.",
      "Sellers: a seller sees the order details for their own products (items, your name, delivery address and phone) only to fulfil the order.",
      "Service providers: Google Firebase / Google Cloud (login and database), Vercel (website hosting; server logs may include IP address and device or browser information), Razorpay (payments), Shiprocket (shipping).",
      "Authorities, when the law requires it.",
    ] },
    { note: "We never sell personal data. There are no ads and no analytics, advertising or tracking tools." },
  ] },
  { h: "7. Permissions", id: "permissions", body: [
    "The Android app uses only Internet and network-state access. It does not use location, camera, contacts, SMS or storage permissions.",
  ] },
  { h: "8. Security", id: "security", body: [
    "All pages use HTTPS, so data is encrypted while it travels. Account and order data is stored with Google Firebase. No system is completely secure, but we take reasonable steps to protect your data.",
  ] },
  { h: "9. How long we keep data", id: "retention", body: [
    "We keep account data while your account is open and delete it within 30 days of a deletion request. Order and invoice records are kept for the period Indian law requires for tax and legal purposes.",
  ] },
  { h: "10. Your rights", id: "rights", body: [
    "Under India’s Digital Personal Data Protection Act, 2023, you can:",
    { list: ["Ask for a summary of your personal data", "Ask us to correct or complete it", "Ask us to delete it", "Withdraw your consent", "Raise a complaint", "Nominate someone to act for you if you die or cannot act"] },
    `Email ${OP.email} to use these rights.`,
  ] },
  { h: "11. Delete your account", id: "delete", body: [
    "See the steps on our account deletion page:",
    { links: [{ label: "Delete your Offerss account", href: "https://www.sollabstech.com/offerss/delete-account" }] },
  ] },
  { h: "12. Grievance Officer", id: "grievance", body: [
    { list: [`Name: ${OP.officer}`, `Email: ${OP.email}`, `Phone: ${OP.phone}`, `Address: ${OP.address}`] },
  ] },
  { h: "13. Children", id: "children", body: ["Offerss is not intended for anyone under 18. We do not knowingly collect data from children."] },
  { h: "14. Changes", id: "changes", body: ["If we change this policy, we will update this page and the effective date above."] },
];

export default function OfferssPrivacyPage() {
  return (
    <PolicyDocument tag="Offerss App" title="Privacy Policy for Offerss" appName="Offerss" packageName="com.sollabstech.offerss"
      path={PATH} effectiveDate={EFFECTIVE_DATE} effectiveIso={EFFECTIVE_ISO}
      intro="This policy explains what personal data the Offerss shopping app and website collect, how we use it, who we share it with, and your rights."
      sections={sections} scopeNote="This policy applies only to the Offerss app and theofferss.com."
      otherLinks={[{ label: "Delete your Offerss account", href: "/offerss/delete-account" }]}
      schemaDescription="Online marketplace app for India: shop products from verified sellers." />
  );
}
