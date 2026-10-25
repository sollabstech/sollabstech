"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { INDIA_DISTRICTS, INDIA_STATES } from "@/lib/india";
import { Field, Grid, Step, formatINR, type Estimate } from "./ui";

const WHATSAPP = "919003850743";
const OTHER = "__other";

// What the calculator knows about the device, in the shape the admin Sell Requests page reads.
export type DeviceDetails = {
  deviceType: "laptop" | "mobile";
  brand: string;
  model: string;
  specs: string;
  age: string;
  condition: string;
  accessories: string;
};

const errText: React.CSSProperties = { fontSize: 12.5, color: "#F87171" };

// Adds "Your details" fields to a calculator and a button that sends the request to Sollabs Tech.
// Returns the fields (for the form) and the action (for the price card).
export function useSellForm(device: DeviceDetails, result: Estimate) {
  const [v, setV] = useState({ name: "", phone: "", state: "", district: "", otherDistrict: "", price: "" });
  const [touched, setTouched] = useState(false);
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setV((x) => ({ ...x, [k]: e.target.value }));

  const phone = v.phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "").replace(/^0(?=\d{10}$)/, "");
  const district = v.district === OTHER ? v.otherDistrict.trim() : v.district;
  const errors = {
    name: v.name.trim() ? "" : "Enter your name",
    phone: /^[6-9]\d{9}$/.test(phone) ? "" : "Enter a 10-digit mobile number",
    state: v.state ? "" : "Choose your state",
    district: district ? "" : "Choose your district",
  };
  const err = (k: keyof typeof errors) => (touched ? errors[k] : "");
  const estimate = `${formatINR(result.low)} – ${formatINR(result.high)}`;

  async function send() {
    setTouched(true);
    if (Object.values(errors).some(Boolean)) {
      requestAnimationFrame(() => document.querySelector<HTMLElement>("[data-sell] [aria-invalid='true']")?.focus());
      return;
    }
    setState("saving");
    try {
      await addDoc(collection(db, "sellRequests"), {
        deviceType: device.deviceType,
        name: v.name.trim().slice(0, 100),
        phone,
        brand: device.brand.slice(0, 80),
        model: device.model.slice(0, 120),
        specs: device.specs.slice(0, 200),
        age: device.age.slice(0, 50),
        condition: device.condition.slice(0, 40),
        accessories: device.accessories.slice(0, 200),
        expectedPrice: v.price.replace(/\D/g, "").slice(0, 9),
        city: `${district}, ${v.state}`.slice(0, 80),
        state: v.state.slice(0, 60),
        district: district.slice(0, 60),
        estimate: estimate.slice(0, 40),
        status: "new",
        createdAt: serverTimestamp(),
      });
      setState("done");
    } catch {
      setState("error");
    }
  }

  const input = (k: keyof typeof v, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input value={v[k]} onChange={set(k)} aria-invalid={k in errors && err(k as keyof typeof errors) ? true : undefined} {...props} />
  );

  const fields = (
    <div data-sell>
      <Step>Your details</Step>
      <Grid>
        <Field label="Your name *">
          {input("name", { placeholder: "e.g. Karthik", autoComplete: "name" })}
          {err("name") && <span style={errText}>{err("name")}</span>}
        </Field>
        <Field label="Mobile number *">
          {input("phone", { type: "tel", inputMode: "numeric", placeholder: "e.g. 98765 43210", autoComplete: "tel" })}
          {err("phone") && <span style={errText}>{err("phone")}</span>}
        </Field>
        <Field label="State *">
          <select value={v.state} onChange={(e) => setV((x) => ({ ...x, state: e.target.value, district: "", otherDistrict: "" }))} aria-invalid={err("state") ? true : undefined}>
            <option value="">Choose state</option>
            {INDIA_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {err("state") && <span style={errText}>{err("state")}</span>}
        </Field>
        <Field label="District *">
          <select value={v.district} onChange={set("district")} disabled={!v.state} aria-invalid={err("district") && v.district !== OTHER ? true : undefined}>
            <option value="">{v.state ? "Choose district" : "Choose state first"}</option>
            {(INDIA_DISTRICTS[v.state] ?? []).map((d) => <option key={d} value={d}>{d}</option>)}
            {v.state && <option value={OTHER}>Other / not listed</option>}
          </select>
          {v.district === OTHER && input("otherDistrict", { placeholder: "Type your district", "aria-invalid": err("district") ? true : undefined })}
          {err("district") && <span style={errText}>{err("district")}</span>}
        </Field>
        <Field label="Your expected price (₹, optional)">
          {input("price", { inputMode: "numeric", placeholder: `e.g. ${result.high}` })}
        </Field>
      </Grid>
    </div>
  );

  const waText = encodeURIComponent(`Hi Sollabs Tech, I just sent a request to sell my ${device.deviceType} (${device.brand} ${device.model}). Here are the photos:`);

  const action = state === "done" ? (
    <div style={{ padding: 16, borderRadius: 14, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.35)", textAlign: "center" }}>
      <div style={{ fontSize: 30 }}>✅</div>
      <div style={{ fontSize: 16, fontWeight: 800, color: "white", margin: "4px 0" }}>Request sent!</div>
      <p style={{ fontSize: 13.5, color: "#C4D0E0", lineHeight: 1.6, margin: "0 0 12px" }}>
        We&apos;ll call or WhatsApp you on <strong style={{ color: "white" }}>{phone}</strong>{" "}with an offer, usually the same day.
      </p>
      <a href={`https://wa.me/${WHATSAPP}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="lp-wa" style={{ marginTop: 0 }}>
        📷 Send photos on WhatsApp
      </a>
    </div>
  ) : (
    <>
      <button type="button" onClick={send} disabled={state === "saving"} className="btn-primary"
        style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: 15, border: "none", cursor: "pointer", opacity: state === "saving" ? 0.6 : 1, background: "linear-gradient(135deg,#16A34A,#22C55E)" }}>
        {state === "saving" ? "Sending…" : "📨 Send to Sollabs Tech"}
      </button>
      {touched && Object.values(errors).some(Boolean) && <p style={{ ...errText, margin: "8px 0 0", textAlign: "center" }}>Fill in your details on the left</p>}
      {state === "error" && <p style={{ ...errText, margin: "8px 0 0", textAlign: "center" }}>Couldn&apos;t send. Please try again or WhatsApp +91 90038 50743.</p>}
      <p style={{ fontSize: 12, color: "#64748B", textAlign: "center", margin: "8px 0 0" }}>Free, no obligation. We usually reply the same day.</p>
    </>
  );

  return { fields, action };
}
