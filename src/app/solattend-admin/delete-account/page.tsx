import type { Metadata } from "next";
import PolicyDocument, { type Section } from "@/components/PolicyDocument";
import { CONTACT } from "@/lib/config";

const PATH = "/solattend-admin/delete-account";
const EFFECTIVE_DATE = "22 October 2026";
const EFFECTIVE_ISO = "2026-10-22";

export const metadata: Metadata = {
  title: "Delete Your SolAttend Admin Account and Data",
  description:
    "How to delete your SolAttend Admin account and all its data, in the app or by email, and exactly what is deleted.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Delete your SolAttend Admin account and data",
    description: "Delete your account and data in the app or by email.",
    url: `https://www.sollabstech.com${PATH}`,
    type: "article",
  },
};

const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Delete my SolAttend Admin account and data")}`;

const sections: Section[] = [
  {
    h: "1. Delete inside the app (fastest)",
    id: "in-app",
    body: [
      { list: [
        "Open SolAttend Admin and sign in.",
        "Go to Settings, then Account, then tap “Delete my account and data”. You can also find it on the More tab.",
        "Read the warning and type DELETE.",
        "Confirm it is you by signing in with Google again, or by typing your password.",
        "The deletion runs straight away. Please keep the app open until it finishes.",
      ] },
    ],
  },
  {
    h: "2. What is deleted",
    id: "what",
    body: [
      "If you are the owner, the whole company is permanently deleted:",
      { list: [
        "All staff records, including saved face data and profile photos",
        "All attendance and leave history",
        "Offices, working hours, holidays and settings",
        "Manager access and pending manager invitations",
        "The Gmail index used to sign staff in to the employee app",
        "Your own sign-in account",
      ] },
      "Staff can no longer sign in to the employee app. Their own Google accounts are not deleted by us, because they belong to them.",
      "If you are a manager, only your own access and your sign-in account are deleted. The company keeps its data.",
      { note: "Deleting an owner account cannot be undone. Export any reports you need first (More, then Reports)." },
    ],
  },
  {
    h: "3. Delete by email (if you cannot open the app)",
    id: "email",
    body: [
      "Send an email from the Gmail address you used to sign in, and include your company name and whether you are the owner or a manager. We may ask one question to confirm it is you.",
      { links: [{ label: `Email ${CONTACT.email} with the subject “Delete my SolAttend Admin account and data”`, href: mailto }] },
      "We delete the data within 30 days of confirming your request and tell you when it is done.",
    ],
  },
  {
    h: "4. What we may keep",
    id: "keep",
    body: [
      "Nothing else is kept after deletion, except the record of your deletion request and anything the law requires us to keep. Copies in Google’s backup systems disappear on Google’s normal schedule.",
    ],
  },
  {
    h: "5. More information",
    id: "more",
    body: [
      { links: [{ label: "SolAttend Admin Privacy Policy", href: "https://www.sollabstech.com/solattend-admin/privacy-policy" }] },
    ],
  },
];

export default function SolAttendAdminDeleteAccountPage() {
  return (
    <PolicyDocument
      tag="SolAttend Admin App"
      title="Delete Your SolAttend Admin Account and Data"
      appName="SolAttend Admin"
      packageName="com.sollabs.solattend.admin"
      path={PATH}
      effectiveDate={EFFECTIVE_DATE}
      effectiveIso={EFFECTIVE_ISO}
      intro="You can delete your SolAttend Admin account and the data it controls at any time. This page explains how, and what is deleted."
      sections={sections}
      scopeNote="This page applies only to the SolAttend Admin app."
      otherLinks={[
        { label: "SolAttend Admin Privacy Policy", href: "/solattend-admin/privacy-policy" },
        { label: "SolAttend employee app data deletion", href: "/solattend/delete-account" },
      ]}
      schemaDescription="How to delete a SolAttend Admin account and all its data."
    />
  );
}
