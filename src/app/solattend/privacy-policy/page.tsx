import type { Metadata } from "next";
import PolicyDocument, { type Section } from "@/components/PolicyDocument";

const PATH = "/solattend/privacy-policy";
const EFFECTIVE_DATE = "22 October 2026";
const EFFECTIVE_ISO = "2026-10-22";

export const metadata: Metadata = {
  title: "SolAttend Privacy Policy – Employee Attendance App",
  description:
    "Privacy Policy for SolAttend by Sollabs Tech, the employee attendance app: what profile, location, face and attendance data it handles, why, who can see it, and how to remove your data.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "SolAttend Privacy Policy",
    description: "What the SolAttend employee app handles, how it is used and protected, and how to remove your data.",
    url: `https://www.sollabstech.com${PATH}`,
    type: "article",
  },
};

const sections: Section[] = [
  {
    h: "1. Who is responsible for the data",
    id: "roles",
    body: [
      "SolAttend is the employee app of an attendance system that your employer (the “Company”) has chosen. Your Company decides what information about you is kept, which attendance rules apply, and whether face verification is used. The Company is responsible for informing you and for getting any permission the law requires. Sollabs Tech provides the software and processes your information on the Company’s behalf.",
      "For your sign-in to the app, Sollabs Tech is responsible.",
    ],
  },
  {
    h: "2. Information the app handles",
    id: "data",
    body: [
      "Sign-in: you sign in with your Google account (Gmail). We use your email address to find the record your employer created for you, and Firebase creates a user ID for your login. Only Gmail addresses added by an employer can sign in.",
      "Your profile, entered by your employer and shown in the app:",
      { list: [
        "Name, Gmail address, employee ID, department, job title, shift and assigned office",
        "Your profile photo, if your employer added one, and your company name",
      ] },
      "Your phone:",
      { list: [
        "The phone model and the Android device identifier. They are used only for the “one phone per account” security lock: the first phone you sign in on is linked to your account until your employer resets it.",
        "The time of your last login",
      ] },
      "Your attendance:",
      { list: [
        "Check-in and check-out time, how it was recorded, worked time and status (present, late, half day, absent, leave)",
        "Late, early-leave, overtime and short minutes, and a copy of the working-hours rules used that day",
        "Your location at check-in and check-out (section 3), whether you were inside or outside the office, and whether a fake location was detected",
        "Whether face verification passed (a yes or no result, never a picture), and whether the check-in was saved while offline",
      ] },
      "Your leave requests: leave type, dates, the reason you write, the status, and who decided and when.",
      "Stored on your phone: a local copy of your own records and of check-ins that were not sent yet (so the app works offline), your company and employee IDs, and your light or dark theme choice.",
    ],
  },
  {
    h: "3. Your location",
    id: "location",
    body: [
      { note: "The app uses your location only while it is open. It does not track you in the background." },
      { list: [
        "On the Home screen, the app follows your phone’s position to show “Inside office” or “Outside office” and your distance from the office.",
        "When you check in or out, the app reads your precise GPS position, checks that it is not a fake location, compares it with your office area, and saves the latitude, longitude, inside or outside result and the fake-location flag with that check-in or check-out.",
        "If your employer set you to “office only”, a check-in outside the office area is blocked.",
        "If you turn location off, you cannot check in from the mobile app.",
      ] },
    ],
  },
  {
    h: "4. Face verification (biometric information)",
    id: "face",
    body: [
      { note: "Face data is used only to confirm it is you when you check in or out. It is not sold, not used for advertising and not used to profile anyone." },
      { list: [
        "Only if your employer saved your face, check-in and check-out open the front camera and ask you to blink once, so a photo cannot be used.",
        "The app compares your live face with the face templates (lists of numbers, not photos) that your employer saved. This happens on your phone, using Google ML Kit and a TensorFlow Lite model.",
        "Camera images are not saved and are not uploaded. The app keeps only the yes or no result.",
        "You get 3 tries. If it fails, check-in is not saved.",
        "Your saved face templates are kept by your Company and are deleted when the Company removes your face data or your employee record.",
      ] },
    ],
  },
  {
    h: "5. Who can see your information",
    id: "who",
    body: [
      "Your Company’s owner and managers can see your profile, attendance, check-in locations, face-verified result, phone model and leave requests, and they decide on your leave. Other companies cannot see your information. We do not sell it. We share it only with the service providers in section 7, who process it for us, or when the law requires it.",
    ],
  },
  {
    h: "6. Permissions the app asks for",
    id: "permissions",
    body: [
      { list: [
        "Camera: for face verification, only if your employer turned it on for you.",
        "Location: for check-in and check-out and the inside or outside office display, only while the app is open.",
        "Internet: the app sends and receives your records. Without internet, check-ins are saved on your phone and sent later.",
      ] },
      "The app does not access your contacts, SMS, microphone or photo gallery. You can change permissions in Android Settings, under Apps, then SolAttend, then Permissions.",
    ],
  },
  {
    h: "7. Services we use",
    id: "services",
    body: [
      "These services help the app work. They have their own privacy policies:",
      { links: [
        { label: "Google Firebase (Authentication, Cloud Firestore) and Google Sign-In", href: "https://firebase.google.com/support/privacy" },
        { label: "Google ML Kit, face detection that runs on your phone", href: "https://developers.google.com/ml-kit/android-data-disclosure" },
        { label: "Google Fonts, which provides the app’s font. It receives your IP address", href: "https://developers.google.com/fonts/faq/privacy" },
      ] },
      "Google Firebase may also process technical data such as your IP address to run its services.",
    ],
  },
  {
    h: "8. No advertising, no selling",
    id: "no-ads",
    body: [
      "The app contains no advertising, no analytics tools, no crash-reporting tools and no tracking across other apps.",
    ],
  },
  {
    h: "9. Storage and security",
    id: "security",
    body: [
      "Data is stored on Google Firebase servers, which may be outside India, including in the United States. It is encrypted while it travels (HTTPS) and while it is stored. Security rules let you read and write only your own records. No system is completely secure, but we take reasonable steps to protect your information.",
    ],
  },
  {
    h: "10. How long we keep data",
    id: "retention",
    body: [
      "Your records are kept while your Company uses SolAttend and you are listed as an employee. Your Company controls them and can delete them. After a verified deletion request we remove the data within 30 days. Copies in Google’s backup systems disappear on Google’s normal schedule.",
    ],
  },
  {
    h: "11. Your rights and choices",
    id: "rights",
    body: [
      "Under India’s Digital Personal Data Protection Act, 2023, and similar laws where they apply, you may ask for a copy of your information, ask for corrections, ask for deletion, withdraw your consent, and raise a complaint. Please ask your employer first, because your employer controls attendance records. You can also write to us at the email below and we will pass the request to your Company or act on it.",
    ],
  },
  {
    h: "12. Delete your data",
    id: "delete",
    body: [
      "SolAttend does not let people create their own accounts: your employer adds you. To have your data removed, ask your employer to delete your employee record in the SolAttend Admin app, which also deletes your saved face data, or email us and we will handle it.",
      "To stop the app using your account on your phone, use Log out on the Profile screen. To erase everything stored on the phone, clear the app’s storage in Android Settings or uninstall the app.",
      { links: [{ label: "How to delete your data (SolAttend)", href: "https://www.sollabstech.com/solattend/delete-account" }] },
    ],
  },
  {
    h: "13. Children",
    id: "children",
    body: [
      "SolAttend is for employees at work. It is not meant for children, and we do not knowingly collect information from children.",
    ],
  },
  {
    h: "14. Changes to this policy",
    id: "changes",
    body: [
      "We may update this policy from time to time. The newest version is always on this page, and the effective date above changes when it does.",
    ],
  },
];

export default function SolAttendPrivacyPage() {
  return (
    <PolicyDocument
      tag="SolAttend App"
      title="Privacy Policy for SolAttend"
      appName="SolAttend"
      packageName="com.sollabs.solattend"
      path={PATH}
      effectiveDate={EFFECTIVE_DATE}
      effectiveIso={EFFECTIVE_ISO}
      intro="SolAttend (“we”, “our”, “us”) is the employee app of the SolAttend attendance system. Employees use it to check in and out, see their calendar and hours, apply for leave and view their profile. This policy explains what information the app handles, why, who can see it, and your choices."
      sections={sections}
      scopeNote="This policy applies only to the SolAttend employee app."
      otherLinks={[
        { label: "SolAttend Admin app policy", href: "/solattend-admin/privacy-policy" },
        { label: "Sollabs Tech website policy", href: "/privacy" },
      ]}
      schemaDescription="Employee attendance app: check in and out with location and face verification, view attendance and apply for leave."
    />
  );
}
