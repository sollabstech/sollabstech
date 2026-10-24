import type { Metadata } from "next";
import PolicyDocument, { type Section } from "@/components/PolicyDocument";

const PATH = "/solattend-admin/privacy-policy";
const EFFECTIVE_DATE = "22 October 2026";
const EFFECTIVE_ISO = "2026-10-22";

export const metadata: Metadata = {
  title: "SolAttend Admin Privacy Policy | Sollabs Tech",
  description:
    "How SolAttend Admin by Sollabs Tech handles staff, attendance, face and location data, and how to delete your account and data.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "SolAttend Admin Privacy Policy",
    description: "What the SolAttend Admin app handles, how it is used and protected, and how to delete your account and data.",
    url: `https://www.sollabstech.com${PATH}`,
    type: "article",
  },
};

const sections: Section[] = [
  {
    h: "1. Who is responsible for the data",
    id: "roles",
    body: [
      "SolAttend Admin is used by a business (the “Company”) to manage employee attendance. The Company decides which employees to add, which attendance rules to use, and whether to use face recognition. For the information about its employees, the Company is responsible for informing them and for getting any permission the law requires. Sollabs Tech provides the software and processes that information on the Company’s behalf.",
      "For the sign-in details of the people who use this admin app (the owner and managers), Sollabs Tech is responsible.",
    ],
  },
  {
    h: "2. Information we collect and process",
    id: "data",
    body: [
      "Your account (owner or manager):",
      { list: [
        "Email address and name from your Google account, or the email address and name you register with",
        "A user ID created by Firebase, your role (owner or manager) and your company name",
        "We never see or store your password. It is handled by Firebase Authentication, a Google service.",
      ] },
      "Staff information that you enter:",
      { list: [
        "Name, Gmail address (used to match the employee’s login), employee ID, department and job title",
        "Assigned shift, how the employee marks attendance (office kiosk or mobile app), location rule (anywhere or office only) and the assigned office",
        "Active or inactive status, and security details of the employee app: the phone model, a phone identifier and the last login time",
      ] },
      "Face data of employees who use the office kiosk is described in section 3.",
      "Attendance information:",
      { list: [
        "Date, check-in and check-out time, how it was recorded (office kiosk, mobile app or edited by an admin), worked time and status (present, late, half day, absent, leave)",
        "Late, early-leave, overtime and short minutes, and a copy of the working-hours rules used that day",
        "For mobile check-ins: GPS latitude and longitude, whether the person was inside or outside the office, and whether a fake location was detected",
        "A log of manual corrections: who changed it, when and why",
      ] },
      "Company settings and other records:",
      { list: [
        "Office locations (name, latitude, longitude and radius), working hours, weekly off days and holidays",
        "A kiosk exit PIN, which is stored only as an irreversible hash, and the face-match strictness setting",
        "Leave requests and decisions, and the manager invitations you send (the invited Gmail address)",
        "Monthly reports. You create Excel or PDF files on your phone and share them yourself with the share menu.",
      ] },
      "On your device only: your light or dark theme choice and a random kiosk device ID.",
      "Technical data: Google Firebase may process technical data such as your IP address and device information to run its services. See section 6 for the map and font services.",
    ],
  },
  {
    h: "3. Face data (biometric information)",
    id: "face",
    body: [
      { note: "Face data is used only to record attendance. It is not sold, not used for advertising and not used to profile anyone." },
      { list: [
        "When you save an employee’s face, the camera takes 5 photos (straight, two side turns, up and down).",
        "Software running on your phone turns each photo into a list of numbers, called a face template, using Google ML Kit and a TensorFlow Lite model. The templates are saved in the Company’s database record for that employee.",
        "One small cropped face photo may also be uploaded to Firebase Storage to show as the employee’s profile picture.",
        "In kiosk mode the front camera stays on while the kiosk screen is open. Each camera image is processed on the phone to find a face, check a blink (so a printed photo does not work) and compare it with the saved templates. These camera images are not saved or sent anywhere.",
        "Face templates and the profile photo are deleted when you remove the employee’s face data, delete the employee, or delete the account (see section 11).",
      ] },
      "The Company is responsible for telling its employees about face recognition and for getting any consent the law requires. Employees who cannot or do not want to use it can be set to the mobile app instead.",
    ],
  },
  {
    h: "4. How we use the information",
    id: "use",
    body: [
      { list: [
        "To sign you in and to create and manage your company account",
        "To record, show, correct and report employee attendance, leave and working hours",
        "To recognise employees at the office kiosk and to apply location rules for mobile check-ins",
        "To keep the service secure, for example the one-phone-per-employee lock and fake-location detection",
        "To let owners and managers create reports and share them",
      ] },
    ],
  },
  {
    h: "5. Permissions the app asks for",
    id: "permissions",
    body: [
      { list: [
        "Camera: to save employees’ faces and to run the office kiosk. Without it, face features do not work.",
        "Location (optional, only while the app is open): to place an office on the map using your current position. If you say no, you can still tap the map to place the office.",
        "Internet: the app needs a connection to work.",
        "Files: only the file you choose yourself when you import a staff list (CSV or Excel).",
      ] },
      "The app does not access your contacts, SMS, microphone or photo gallery. You can change permissions at any time in Android Settings, under Apps, then SolAttend Admin, then Permissions.",
    ],
  },
  {
    h: "6. Services we use",
    id: "services",
    body: [
      "These services help the app work. They have their own privacy policies:",
      { links: [
        { label: "Google Firebase (Authentication, Cloud Firestore, Cloud Storage) and Google Sign-In", href: "https://firebase.google.com/support/privacy" },
        { label: "Google ML Kit, face detection that runs on your phone", href: "https://developers.google.com/ml-kit/android-data-disclosure" },
        { label: "OpenStreetMap, which provides the map pictures. It receives your IP address and the map area you view", href: "https://osmfoundation.org/wiki/Privacy_Policy" },
        { label: "Google Fonts, which provides the app’s font. It receives your IP address", href: "https://developers.google.com/fonts/faq/privacy" },
      ] },
    ],
  },
  {
    h: "7. No advertising, no selling",
    id: "no-ads",
    body: [
      "The app contains no advertising, no analytics tools, no crash-reporting tools and no tracking across other apps. We do not sell your information or your employees’ information. We share it only with the service providers above, who process it for us, or when the law requires it.",
    ],
  },
  {
    h: "8. Storage and security",
    id: "security",
    body: [
      "Data is stored on Google Firebase servers, which may be outside India, including in the United States. It is encrypted while it travels (HTTPS) and while it is stored. Security rules make sure each person can reach only their own company’s data. Only the owner can change company settings, and managers have limited access. No system is completely secure, but we take reasonable steps to protect the information.",
    ],
  },
  {
    h: "9. How long we keep data",
    id: "retention",
    body: [
      "We keep the Company’s data while the Company uses SolAttend. The Company controls its records: deleting an employee removes that employee’s profile and face data, and deleting the account removes the whole company (section 11). After a verified deletion request we remove the data within 30 days. Copies in Google’s backup systems disappear on Google’s normal schedule.",
    ],
  },
  {
    h: "10. Your rights and choices",
    id: "rights",
    body: [
      "You can see, correct and delete the information you control in the app. Under India’s Digital Personal Data Protection Act, 2023, and similar laws where they apply, you may also ask us to give you a copy of your data, correct it, delete it, or withdraw your consent, and you may raise a complaint with us.",
      "Employees should first ask their employer, because the employer controls attendance records. You can also write to us at the email below and we will pass the request to the Company or act on it.",
    ],
  },
  {
    h: "11. Delete your account and data",
    id: "delete",
    body: [
      "You can delete your account and data inside the app: open Settings, then Account, then “Delete my account and data” (it is also on the More tab). You read a warning, type DELETE, and confirm it is you by signing in with Google again or typing your password.",
      { list: [
        "Owner: the whole company is permanently deleted: all staff records, saved face data and photos, attendance and leave history, offices, working hours, holidays, settings, manager access and your sign-in account. Staff can no longer sign in to the employee app.",
        "Manager: only your own access and sign-in account are removed. The company keeps its data.",
      ] },
      "If you cannot open the app, you can ask us to delete your data by email. See the page below for the steps and what happens next.",
      { links: [{ label: "Delete account and data (SolAttend Admin)", href: "https://www.sollabstech.com/solattend-admin/delete-account" }] },
    ],
  },
  {
    h: "12. Children",
    id: "children",
    body: [
      "SolAttend Admin is for businesses and adults at work. It is not meant for children, and we do not knowingly collect information from children.",
    ],
  },
  {
    h: "13. Changes to this policy",
    id: "changes",
    body: [
      "We may update this policy from time to time. The newest version is always on this page, and the effective date above changes when it does.",
    ],
  },
];

export default function SolAttendAdminPrivacyPage() {
  return (
    <PolicyDocument
      tag="SolAttend Admin App"
      title="Privacy Policy for SolAttend Admin"
      appName="SolAttend Admin"
      packageName="com.sollabs.solattend.admin"
      path={PATH}
      effectiveDate={EFFECTIVE_DATE}
      effectiveIso={EFFECTIVE_ISO}
      intro="SolAttend Admin (“we”, “our”, “us”) is the management app of the SolAttend employee attendance system. Business owners and managers use it to add staff, set working hours and offices, run an office face-attendance kiosk, check attendance, approve leave and create reports. This policy explains what information the app handles, why, who can see it, and your choices."
      sections={sections}
      scopeNote="This policy applies only to the SolAttend Admin app."
      otherLinks={[
        { label: "SolAttend employee app policy", href: "/solattend/privacy-policy" },
        { label: "Sollabs Tech website policy", href: "/privacy" },
      ]}
      schemaDescription="Management app for businesses to run employee attendance: staff, working hours, offices, face-attendance kiosk, leave and reports."
    />
  );
}
