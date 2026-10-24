"use client";

import { useState } from "react";
import {
  BATTERY, BRANDS, CONDITIONS, DEFAULTS, KITS, NEW_PRICE_TIERS, OTHER_MODEL, STORAGE, WARRANTY_MONTHS,
  ageMonths, brandOf, estimate, find, underWarranty, type Inputs,
} from "./valuation";
import { CalcLayout, Field, Grid, MonthsInput, Select, Step, Toggle } from "@/components/price-calc/ui";

export default function PhoneCalculator() {
  const [v, setV] = useState<Inputs>(DEFAULTS);
  const set = <K extends keyof Inputs>(k: K) => (val: Inputs[K]) => setV((x) => ({ ...x, [k]: val }));

  // A new brand starts on a model in the middle of its list.
  const setBrand = (brand: string) =>
    setV((x) => {
      const models = brandOf(brand).models;
      const known = models.filter((m) => m.id !== OTHER_MODEL);
      return { ...x, brand, model: known.length ? known[Math.floor(known.length / 2)].id : OTHER_MODEL };
    });

  const brand = brandOf(v.brand);
  const model = find(brand.models, v.model);
  const isOther = model.id === OTHER_MODEL;
  const r = estimate(v);
  const warranty = underWarranty(v);
  const months = ageMonths(v);

  const summary = [
    isOther ? `${brand.label} phone (new price ${find(NEW_PRICE_TIERS, v.tier).label})` : model.label,
    find(STORAGE, v.storage).label,
    `${months} month${months === 1 ? "" : "s"} old`,
    `${find(CONDITIONS, v.condition).label.split(" –")[0]} condition`,
    `battery ${find(BATTERY, v.battery).label.split(" /")[0]}`,
    find(KITS, v.kit).label,
  ].join(", ");

  const form = (
    <>
      <Step>1 · Phone</Step>
      <Grid>
        <Field label="Brand"><Select value={v.brand} options={BRANDS} onChange={setBrand} /></Field>
        <Field label="Model"><Select value={v.model} options={brand.models} onChange={set("model")} /></Field>
        {isOther && <Field label="Price when new"><Select value={v.tier} options={NEW_PRICE_TIERS} onChange={set("tier")} /></Field>}
        <Field label="Storage"><Select value={v.storage} options={STORAGE} onChange={set("storage")} /></Field>
      </Grid>

      <Step>2 · Age & condition</Step>
      <Grid>
        <Field label="How many months old?">
          <MonthsInput value={v.months} onChange={set("months")} warranty={warranty} warrantyMonths={WARRANTY_MONTHS} />
        </Field>
        <Field label="Condition"><Select value={v.condition} options={CONDITIONS} onChange={set("condition")} /></Field>
        <Field label={v.brand === "apple" ? "Battery health" : "Battery"}><Select value={v.battery} options={BATTERY} onChange={set("battery")} /></Field>
        <Field label="What's included?"><Select value={v.kit} options={KITS} onChange={set("kit")} /></Field>
      </Grid>

      <Step>Anything else?</Step>
      <div style={{ display: "grid", gap: 10 }}>
        <Toggle label="Screen or battery has been replaced (not original)" checked={v.partReplaced} onChange={set("partReplaced")} />
        <Toggle label={v.brand === "apple" ? "Face ID / Touch ID not working" : "Fingerprint or face unlock not working"} checked={v.biometricBroken} onChange={set("biometricBroken")} />
      </div>
    </>
  );

  return <CalcLayout form={form} result={r} warranty={warranty} summary={summary} device="phone" />;
}
