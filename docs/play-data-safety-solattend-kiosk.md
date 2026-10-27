# Google Play Data safety – SolAttend Kiosk (`com.sollabs.solattend.kiosk`)

Cheat-sheet for filling in Play Console › App content › Data safety. Based on the facts in the privacy policy and a check of the app code (manifest and `pubspec.yaml`, 27 Oct 2026). Not legal advice.

- Privacy policy URL: https://www.sollabstech.com/solattend-kiosk/privacy-policy
- Data deletion URL: https://www.sollabstech.com/solattend-kiosk/delete-account

## Overview answers

| Question | Answer |
|---|---|
| Does the app collect or share any of the required user data types? | **Yes** (collects; does not share) |
| Is all user data encrypted in transit? | **Yes** (HTTPS/TLS to Firebase) |
| Do you provide a way for users to request that their data is deleted? | **Yes**: the URL above, plus remove the kiosk in SolAttend Admin, or email |
| Shared with third parties? | **No**. Firebase/Google act as service providers, which Play does not count as "sharing" |
| Ads / advertising ID | No ads, no advertising ID |

## Data types

| Play category › type | Collected? | Shared? | Required / optional | Purpose | Processed ephemerally? | Notes |
|---|---|---|---|---|---|---|
| Personal info › **Name** | Yes | No | Required | App functionality | No | Employee names cached on the device from the Company's data |
| Personal info › **User IDs** | Yes | No | Required | App functionality, Security | No | Employee ID, anonymous Firebase UID of the kiosk, company ID |
| Personal info › Other info | Yes | No | Required | App functionality | No | Department, shift, active flag; salted PIN hashes (manager + employee) |
| Photos and videos › **Photos** | Yes | No | Optional | App functionality | No | Profile photos (set in SolAttend Admin) are downloaded and cached on the device; the kiosk uploads no photos |
| Camera frames | Processed only | No | – | App functionality | **Yes**, in memory on the device | Never saved or uploaded. Declare under "processed ephemerally" if Play asks |
| **Face data / biometric** (see note below) | Yes | No | Required for face check-in; PIN is the alternative | App functionality, Security | Templates: No (saved in Company's Firestore and cached on device) | 192-number face templates from MobileFaceNet; matching on the device |
| App activity › **Other actions** | Yes | No | Required | App functionality | No | Attendance check-in/out time, method (kiosk face / kiosk PIN), match score, worked/late/overtime minutes, offline flag |
| Device or other IDs | Yes | No | Required | App functionality, Security | No | Random kiosk device ID, anonymous Firebase UID; device model, battery level, charging, app version in the device record |
| Location | **No** | – | – | – | – | Location permissions are removed in the manifest |
| Messages, contacts, audio, files, calendar, web history, financial, health | No | – | – | – | – | – |
| Diagnostics / crash logs | No | – | – | – | – | No crash-reporting or analytics SDK in `pubspec.yaml` |

### Face data on Play
Play has no separate "biometric" data type. Face templates are usually declared under **Personal info › Other info** (or Photos if you prefer to be conservative), with purpose *App functionality* and *Security*, collected and **not shared**. Play's User Data policy requires a **prominent in-app disclosure and consent** before collecting face data; make sure the enrolment screen in manager mode shows one. Because faces of anyone in front of the camera are scanned (not stored), mention this in the store description and the policy (done).

## Permissions that may need a declaration

| Permission (in manifest) | Note for Play |
|---|---|
| `CAMERA` | Normal runtime permission. Explain: face scan and pairing QR |
| `SYSTEM_ALERT_WINDOW` (display over other apps) | Play may ask for a justification in the Permissions declaration form. Use: bring the kiosk back to the front on a dedicated office device |
| `RECEIVE_BOOT_COMPLETED` | No declaration, but explain: restart the kiosk after reboot |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Play restricts this. Be ready to justify it as a dedicated, always-on kiosk device, or remove it and ask admins to change the setting manually |
| `WAKE_LOCK`, `VIBRATE`, `INTERNET`, `ACCESS_NETWORK_STATE` | Normal, no declaration |
| Removed with `tools:node="remove"` | RECORD_AUDIO, READ_PHONE_STATE, storage, FINE/COARSE location, biometric/fingerprint |

## Third-party SDKs (for the SDK section)
Firebase Authentication (anonymous), Cloud Firestore, Google ML Kit face detection (on device), TensorFlow Lite (on device), Android text-to-speech (on device), Google Fonts (`google_fonts` package; fetches fonts at runtime unless bundled, so Google receives the IP address). **Not** used: Firebase Storage, Analytics, Crashlytics, ads SDKs.
