import type { Metadata } from "next";
import PolicyDocument, { type Section } from "@/components/PolicyDocument";
import { CONTACT } from "@/lib/config";

const PATH = "/solattend-kiosk/privacy-policy";
const EFFECTIVE_DATE = "27 October 2026";
const EFFECTIVE_ISO = "2026-10-27";

export const metadata: Metadata = {
  title: "SolAttend Kiosk Privacy Policy | Sollabs Tech",
  description:
    "How the SolAttend Kiosk app by Sollabs Tech marks attendance by face scan or PIN on a shared office device, what it stores, and how to delete it.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "SolAttend Kiosk Privacy Policy",
    description: "What the SolAttend Kiosk app handles on a shared office device, how face data is used and protected, and how to delete data.",
    url: `https://www.sollabstech.com${PATH}`,
    type: "article",
  },
};

const sections: Section[] = [
  {
    h: "1. Who is responsible for the data",
    id: "roles",
    body: [
      "SolAttend Kiosk is used by a business (the “Company”) on a shared tablet or phone at its office entrance. The Company decides which employees to add, whether to use face recognition and which attendance rules apply. For its employees’ information, the Company is responsible (it is the data controller or “data fiduciary”): it must inform its employees and get any permission the law requires.",
      "Sollabs Tech provides the software and processes this information on the Company’s behalf. Employees who want to see, correct or delete their data should ask their employer first. You can also contact us (section 13).",
    ],
  },
  {
    h: "2. Information the app handles",
    id: "data",
    body: [
      "The kiosk has no personal sign-in. It connects to the Company with an anonymous Firebase account: no email, no Google account and no password.",
      "Pairing and device record (saved in the Company’s data):",
      { list: [
        "A random anonymous user ID, the pairing code used to connect, and the company ID",
        "The device name the admin chooses, the phone or tablet model, and the status (waiting, active or removed)",
        "When the kiosk was last online, its battery level, whether it is charging, and the app version",
      ] },
      "Face data: see section 4.",
      "Employee list kept on the device, so the kiosk also works without internet:",
      { list: [
        "Employee name, employee ID, department, shift, active status, face templates and profile photo (if the Company added one)",
        "The Company’s shifts, holidays and offices, and today’s leave status (used only to show “On leave”)",
      ] },
      "Attendance records the kiosk creates:",
      { list: [
        "Employee ID, date, check-in or check-out time, and how it was marked (kiosk face scan or kiosk PIN)",
        "The kiosk device ID and the face-match score",
        "Worked minutes, status, late, early-leave and overtime minutes, and whether it was marked offline",
        "Check-ins made without internet are kept on the device and sent when the connection is back.",
        "The kiosk does not collect your location.",
      ] },
      "PINs:",
      { list: [
        "The manager PIN is set by the owner in SolAttend Admin. The kiosk receives and checks only a salted, irreversible hash of it, never the PIN itself.",
        "If an employee uses the PIN option instead of the face scan, their PIN is also stored only as a salted hash.",
      ] },
      "On the device only: language and theme choice, kiosk settings, check-ins waiting to be sent, the cached data above, and a random device ID.",
      "Technical data: Google Firebase may process technical data such as the device’s IP address to run its services.",
    ],
  },
  {
    h: "3. Why we use it, and consent",
    id: "use",
    body: [
      { list: [
        "To mark employee attendance (check-in and check-out) at the office",
        "To recognise employees by face, or by PIN as an alternative",
        "To show a greeting on screen, and say it aloud if the Company turns that on (this uses the device’s own text-to-speech; nothing is recorded)",
        "To let a manager open a PIN-protected manager mode to enrol faces and check today’s attendance",
        "To keep the kiosk connected, secure and working offline",
      ] },
      "The Company must tell its employees about the kiosk and face recognition, and get their consent where the law requires it. Where the law requires an alternative to face recognition, the Company can let employees use a PIN instead.",
      { note: "Notice for the office entrance. Because the kiosk is a shared device that anyone can stand in front of, the Company should put up a sign such as: “Face-scan attendance in use. This device scans faces only to record staff attendance. Faces are matched on the device and camera images are not saved. Ask the office manager for details or for a PIN option.”" },
    ],
  },
  {
    h: "4. Face data (biometric information)",
    id: "face",
    body: [
      { note: "Face data is used only to record attendance. It is not sold, not used for advertising and not used to profile anyone." },
      { list: [
        "A face template is a list of 192 numbers that describes a face. It is not a photo.",
        "While the kiosk screen is on, the front camera looks for a face. On the device, Google ML Kit finds the face, checks image quality and checks it is a live person (a blink or a small head turn). A TensorFlow Lite model (MobileFaceNet) then turns the face into a template and compares it with the templates the Company saved. A match needs to be above the strictness level the owner sets.",
        "All of this happens on the device. Camera images are processed in memory and are never saved or uploaded.",
        "Anyone who stands in front of the camera is scanned only to look for a match. Faces that do not match are not stored.",
        "In manager mode, a manager can enrol or re-enrol an employee’s face: 5 captures are turned into templates and saved in the Company’s database (Firebase Cloud Firestore). The kiosk does not upload any photos.",
        "Templates are deleted when the Company removes the employee’s face data, deletes the employee, or deletes the company (section 10).",
      ] },
    ],
  },
  {
    h: "5. Permissions the app uses",
    id: "permissions",
    body: [
      { list: [
        "Camera: for the face scan and to scan the pairing QR code. Without it, the face scan and QR pairing do not work; the PIN option still works.",
        "Internet and network state: to connect to the Company and to send check-ins. Without internet, check-ins wait on the device.",
        "Keep the screen awake: so the kiosk stays on at the entrance.",
        "Vibration: for feedback on the kiosk screen.",
        "Start after restart (optional): to open the kiosk again after the device restarts.",
        "Display over other apps (optional): to bring the kiosk back to the front.",
        "Ignore battery optimisation (optional): so Android does not put the kiosk to sleep.",
      ] },
      "Screen pinning is an Android setting the admin turns on; it is not a data permission. The app does not use location, contacts, SMS, the microphone or the photo gallery. You can turn permissions off in Android Settings, under Apps, then SolAttend Kiosk, then Permissions.",
    ],
  },
  {
    h: "6. Who we share data with",
    id: "services",
    body: [
      "These service providers help the app work. They are not advertisers, and they have their own privacy policies:",
      { links: [
        { label: "Google Firebase (anonymous Authentication and Cloud Firestore)", href: "https://firebase.google.com/support/privacy" },
        { label: "Google ML Kit face detection, which runs on the device", href: "https://developers.google.com/ml-kit/android-data-disclosure" },
        { label: "Google Fonts, which provides the app’s font. It receives the device’s IP address", href: "https://developers.google.com/fonts/faq/privacy" },
      ] },
      "TensorFlow Lite and the Android text-to-speech engine run entirely on the device.",
      { note: "We do not sell data and we do not share it for advertising. The app has no ads, no advertising ID, no analytics tools, no crash-reporting tools and no tracking across other apps." },
    ],
  },
  {
    h: "7. Storage, security and transfers",
    id: "security",
    body: [
      { list: [
        "Data travels over encrypted connections (HTTPS/TLS) and is encrypted when stored by Firebase.",
        "Security rules let an active, approved kiosk read only its own company’s data, and write only attendance check-ins, face enrolment and a small status update.",
        "A kiosk that the admin removes loses all access straight away.",
        "The manager PIN hash is kept in a separate protected record.",
      ] },
      "Firebase servers may be outside India, including in the United States. No system is completely secure, but we take reasonable steps to protect the information.",
    ],
  },
  {
    h: "8. How long we keep data",
    id: "retention",
    body: [
      "Attendance records and face templates are kept in the Company’s data while the Company uses SolAttend, until the Company deletes them. The copy on the kiosk is wiped when the admin removes the device (the next time the kiosk checks in), or when the app’s data is cleared or the app is uninstalled. After a verified deletion request we remove the data within 30 days. Copies in Google’s backup systems disappear on Google’s normal schedule.",
    ],
  },
  {
    h: "9. Your rights and choices",
    id: "rights",
    body: [
      "Under India’s Digital Personal Data Protection Act, 2023, you may ask for a summary of your data, ask for it to be corrected or deleted, withdraw your consent, and raise a complaint. Where the EU GDPR or similar laws apply, you have similar rights.",
      "Because your employer controls attendance and face data, please ask your employer first. You can also write to us at the email in section 13 with any request or complaint; we will pass it to the Company or act on it.",
    ],
  },
  {
    h: "10. Delete your data",
    id: "delete",
    body: [
      "The kiosk has no personal account to delete. Data is deleted, not hidden:",
      { list: [
        "Remove the device: in SolAttend Admin, open Kiosk Devices and remove (revoke) the kiosk. Its device record is deleted, it loses all access, and it wipes its local data.",
        "Clear the device: uninstall the app, or open Android Settings, Apps, SolAttend Kiosk, Storage, Clear data. This wipes everything stored on that device.",
        "Employee data: the Company deletes an employee’s face data or attendance in SolAttend Admin. The owner can delete the whole company in SolAttend Admin, under Settings, “Delete my account and data”.",
        `Email us at ${CONTACT.email}. We act within 30 days of confirming the request.`,
      ] },
      "After deletion we keep only the record of the deletion request and anything the law requires us to keep.",
      { links: [{ label: "Data deletion for SolAttend Kiosk", href: "https://www.sollabstech.com/solattend-kiosk/delete-account" }] },
    ],
  },
  {
    h: "11. Children",
    id: "children",
    body: [
      "SolAttend Kiosk is for businesses and adults at work. It is not meant for children, and we do not knowingly collect information from children.",
    ],
  },
  {
    h: "12. Changes to this policy",
    id: "changes",
    body: [
      "We may update this policy from time to time. The newest version is always on this page, and the effective date above changes when it does.",
    ],
  },
  {
    h: "13. Contact",
    id: "contact",
    body: [
      `Questions, requests or complaints: email ${CONTACT.email}, or write to Sollabs Tech, Madurai, Tamil Nadu, India.`,
    ],
  },
];

export default function SolAttendKioskPrivacyPage() {
  return (
    <PolicyDocument
      tag="SolAttend Kiosk App"
      title="Privacy Policy for SolAttend Kiosk"
      appName="SolAttend Kiosk"
      packageName="com.sollabs.solattend.kiosk"
      path={PATH}
      effectiveDate={EFFECTIVE_DATE}
      effectiveIso={EFFECTIVE_ISO}
      intro="SolAttend Kiosk (“we”, “our”, “us”) runs on a shared tablet or phone at an office entrance. Employees look at the camera, or use a PIN, and their check-in or check-out is recorded. A manager pairs the kiosk from the SolAttend Admin app. This policy explains what information the app handles, why, who can see it, and your choices."
      sections={sections}
      scopeNote="This policy applies only to the SolAttend Kiosk app."
      otherLinks={[
        { label: "SolAttend Admin app policy", href: "/solattend-admin/privacy-policy" },
        { label: "SolAttend employee app policy", href: "/solattend/privacy-policy" },
      ]}
      schemaDescription="Shared office kiosk that records employee attendance by on-device face recognition or PIN."
    />
  );
}
