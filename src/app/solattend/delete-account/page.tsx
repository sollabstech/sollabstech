import type { Metadata } from "next";
import PolicyDocument, { type Section } from "@/components/PolicyDocument";
import { CONTACT } from "@/lib/config";

const PATH = "/solattend/delete-account";
const EFFECTIVE_DATE = "22 October 2026";
const EFFECTIVE_ISO = "2026-10-22";

export const metadata: Metadata = {
  title: "Delete Your SolAttend Data – Employee App",
  description:
    "How to have your SolAttend employee data removed, including your saved face data, and how to clear the app on your phone.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Delete your SolAttend data",
    description: "How to remove your data from the SolAttend employee app.",
    url: `https://www.sollabstech.com${PATH}`,
    type: "article",
  },
};

const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Delete my SolAttend employee data")}`;

const sections: Section[] = [
  {
    h: "1. How SolAttend accounts work",
    id: "how",
    body: [
      "SolAttend does not let people create their own accounts. Your employer adds your Gmail address in the SolAttend Admin app, and you sign in with that Google account. So your employee record belongs to your employer’s company, and your employer can remove it.",
    ],
  },
  {
    h: "2. Ask your employer to delete your record",
    id: "employer",
    body: [
      "Your employer’s owner or manager can delete your employee record in the SolAttend Admin app. This removes your profile, your saved face data and your login access to the company. Ask them to do this.",
    ],
  },
  {
    h: "3. Or ask us by email",
    id: "email",
    body: [
      "Send an email from your Gmail address that is registered in SolAttend. Include your name and your company name. We will confirm it is you, work with your company to remove your data and tell you when it is done, within 30 days.",
      { links: [{ label: `Email ${CONTACT.email} with the subject “Delete my SolAttend employee data”`, href: mailto }] },
      "Past attendance records can stay in your company’s history. If you want them erased too, say so in your email.",
    ],
  },
  {
    h: "4. Remove the data from your phone",
    id: "phone",
    body: [
      { list: [
        "Use Log out on the Profile screen to stop the app using your account on that phone.",
        "To erase everything the app stored on the phone (your cached records and any check-ins not yet sent), clear the app’s storage in Android Settings, under Apps, then SolAttend, then Storage, or uninstall the app.",
      ] },
      { note: "Check-ins that were saved offline and not yet sent will be lost if you clear the app before you reconnect to the internet." },
    ],
  },
  {
    h: "5. What we may keep",
    id: "keep",
    body: [
      "Nothing else is kept after deletion, except the record of your request and anything the law requires. Copies in Google’s backup systems disappear on Google’s normal schedule.",
      { links: [{ label: "SolAttend Privacy Policy", href: "https://www.sollabstech.com/solattend/privacy-policy" }] },
    ],
  },
];

export default function SolAttendDeleteAccountPage() {
  return (
    <PolicyDocument
      tag="SolAttend App"
      title="Delete Your SolAttend Data"
      appName="SolAttend"
      packageName="com.sollabs.solattend"
      path={PATH}
      effectiveDate={EFFECTIVE_DATE}
      effectiveIso={EFFECTIVE_ISO}
      intro="This page explains how to have your data removed from the SolAttend employee app, and how to clear the app from your phone."
      sections={sections}
      scopeNote="This page applies only to the SolAttend employee app."
      otherLinks={[
        { label: "SolAttend Privacy Policy", href: "/solattend/privacy-policy" },
        { label: "SolAttend Admin data deletion", href: "/solattend-admin/delete-account" },
      ]}
      schemaDescription="How to have your data removed from the SolAttend employee attendance app."
    />
  );
}
