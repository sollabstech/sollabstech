import type { Metadata } from "next";
import PolicyDocument, { type Section } from "@/components/PolicyDocument";
import { CONTACT } from "@/lib/config";

const PATH = "/solattend-kiosk/delete-account";
const EFFECTIVE_DATE = "27 October 2026";
const EFFECTIVE_ISO = "2026-10-27";

export const metadata: Metadata = {
  title: "Delete SolAttend Kiosk Data | Sollabs Tech",
  description:
    "How to delete the data of the SolAttend Kiosk app: remove the device in SolAttend Admin, clear the device, or ask us by email.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Delete SolAttend Kiosk data",
    description: "Remove the kiosk, clear the device, or ask us by email.",
    url: `https://www.sollabstech.com${PATH}`,
    type: "article",
  },
};

const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Delete SolAttend Kiosk data")}`;

const sections: Section[] = [
  {
    h: "1. The kiosk has no personal account",
    id: "no-account",
    body: [
      "SolAttend Kiosk connects to a company with an anonymous account. There is no personal sign-in to delete. Use the options below.",
    ],
  },
  {
    h: "2. Remove the kiosk device (company owner or manager)",
    id: "revoke",
    body: [
      { list: [
        "Open SolAttend Admin and go to Kiosk Devices.",
        "Remove (revoke) the kiosk.",
        "The device record (name, model, status, battery and last-seen time) is deleted and the kiosk loses all access straight away.",
        "The next time the kiosk checks in, it wipes everything it stored on the device, including its copy of the employee list and face templates.",
      ] },
    ],
  },
  {
    h: "3. Clear the device",
    id: "clear",
    body: [
      "Uninstall the app, or open Android Settings, Apps, SolAttend Kiosk, Storage, then Clear data. This wipes all data stored on that device. Check-ins not yet sent are lost.",
    ],
  },
  {
    h: "4. Delete employee face and attendance data",
    id: "employee",
    body: [
      "Face templates and attendance belong to the company. In SolAttend Admin, the company can remove an employee’s face data, delete the employee, or the owner can delete the whole company under Settings, “Delete my account and data”.",
      "Employees should ask their employer first. You can also email us (below).",
    ],
  },
  {
    h: "5. Ask us by email",
    id: "email",
    body: [
      { links: [{ label: `Email ${CONTACT.email} with the subject “Delete SolAttend Kiosk data”`, href: mailto }] },
      "Tell us the company name and what you want deleted. We may ask one question to confirm the request. We act within 30 days of confirming it and tell you when it is done.",
    ],
  },
  {
    h: "6. What we may keep",
    id: "keep",
    body: [
      { note: "Data is deleted, not hidden." },
      "We keep only the record of your deletion request and anything the law requires us to keep. Copies in Google’s backup systems disappear on Google’s normal schedule.",
    ],
  },
  {
    h: "7. More information",
    id: "more",
    body: [
      { links: [{ label: "SolAttend Kiosk Privacy Policy", href: "https://www.sollabstech.com/solattend-kiosk/privacy-policy" }] },
    ],
  },
];

export default function SolAttendKioskDeletePage() {
  return (
    <PolicyDocument
      tag="SolAttend Kiosk App"
      title="Delete SolAttend Kiosk Data"
      appName="SolAttend Kiosk"
      packageName="com.sollabs.solattend.kiosk"
      path={PATH}
      effectiveDate={EFFECTIVE_DATE}
      effectiveIso={EFFECTIVE_ISO}
      intro="This page explains how to delete the data of the SolAttend Kiosk app, and what is deleted."
      sections={sections}
      scopeNote="This page applies only to the SolAttend Kiosk app."
      otherLinks={[
        { label: "SolAttend Kiosk Privacy Policy", href: "/solattend-kiosk/privacy-policy" },
        { label: "SolAttend Admin data deletion", href: "/solattend-admin/delete-account" },
      ]}
      schemaDescription="How to delete the data of the SolAttend Kiosk app."
    />
  );
}
