"use client";

import { useState } from "react";
import {
  BRANDS, CONDITIONS, DEFAULTS, GPUS, GPU_TYPES, MAKES, PROCESSORS, RAM, STORAGE_TYPES, WARRANTY_MONTHS,
  ageMonths, estimate, find, generationsFor, storageSizesFor, underWarranty,
  type GpuType, type Inputs, type Make, type StorageType,
} from "./valuation";
import { CalcLayout, Field, Grid, MonthsInput, Select, Step, Toggle } from "@/components/price-calc/ui";

export default function Calculator() {
  const [v, setV] = useState<Inputs>(DEFAULTS);
  const set = <K extends keyof Inputs>(k: K) => (val: Inputs[K]) => setV((x) => ({ ...x, [k]: val }));

  // Each choice resets the dropdowns that depend on it.
  const setBrand = (brand: string) =>
    setV((x) => {
      if (brand === "apple") return { ...x, brand, make: "apple", processor: "m1", generation: "", gpuType: "none", gpu: "" };
      if (x.make === "apple") return { ...x, brand, make: "intel", processor: "i5", generation: "11" };
      return { ...x, brand };
    });
  const setMake = (make: Make) =>
    setV((x) => {
      const processor = make === "apple" ? "m1" : make === "amd" ? "r5" : "i5";
      const gens = generationsFor(make, processor);
      return {
        ...x, make, processor, generation: gens[Math.floor(gens.length / 2)]?.id ?? "",
        brand: make === "apple" ? "apple" : x.brand === "apple" ? "dell" : x.brand,
        ...(make === "apple" ? { gpuType: "none" as GpuType, gpu: "" } : {}),
      };
    });
  const setProcessor = (processor: string) =>
    setV((x) => {
      const gens = generationsFor(x.make, processor);
      const keep = gens.some((g) => g.id === x.generation);
      return { ...x, processor, generation: keep ? x.generation : gens[gens.length - 1]?.id ?? "" };
    });
  const setStorageType = (storageType: StorageType) =>
    setV((x) => {
      const sizes = storageSizesFor(storageType);
      return { ...x, storageType, storageSize: sizes.some((s) => s.id === x.storageSize) ? x.storageSize : sizes[1]?.id ?? sizes[0].id };
    });
  const setGpuType = (gpuType: GpuType) =>
    setV((x) => ({ ...x, gpuType, gpu: gpuType === "none" ? "" : GPUS[gpuType][0].id }));

  const isMac = v.make === "apple";
  const gens = generationsFor(v.make, v.processor);
  const r = estimate(v);
  const warranty = underWarranty(v);
  const months = ageMonths(v);

  const summary = [
    find(BRANDS, v.brand).label,
    [find(PROCESSORS[v.make], v.processor).label, gens.length ? find(gens, v.generation).label : ""].filter(Boolean).join(" "),
    `${find(RAM, v.ram).label} RAM`,
    v.storageType === "hdd"
      ? `${find(storageSizesFor("hdd"), v.storageSize).label} HDD`
      : `${find(storageSizesFor("ssd"), v.storageSize).label} SSD${v.storageType === "both" ? " + HDD" : ""}`,
    !isMac && v.gpuType !== "none" ? find(GPUS[v.gpuType], v.gpu).label : "",
    `${months} month${months === 1 ? "" : "s"} old`,
    `${find(CONDITIONS, v.condition).label.split(" –")[0]} condition`,
  ].filter(Boolean).join(", ");

  const form = (
    <>
      <Step>1 · Laptop & processor</Step>
      <Grid>
        <Field label="Brand"><Select value={v.brand} options={BRANDS} onChange={setBrand} /></Field>
        <Field label="Processor make"><Select value={v.make} options={MAKES} onChange={(id) => setMake(id as Make)} /></Field>
        <Field label={isMac ? "Chip" : "Processor model"}><Select value={v.processor} options={PROCESSORS[v.make]} onChange={setProcessor} /></Field>
        {gens.length > 0 && <Field label="Generation"><Select value={v.generation} options={gens} onChange={set("generation")} /></Field>}
      </Grid>

      <Step>2 · RAM & storage</Step>
      <Grid>
        <Field label="RAM"><Select value={v.ram} options={RAM} onChange={set("ram")} /></Field>
        <Field label="Storage type"><Select value={v.storageType} options={STORAGE_TYPES} onChange={(id) => setStorageType(id as StorageType)} /></Field>
        <Field label={v.storageType === "hdd" ? "Hard disk size" : "SSD size"}>
          <Select value={v.storageSize} options={storageSizesFor(v.storageType)} onChange={set("storageSize")} />
        </Field>
      </Grid>

      {!isMac && (
        <>
          <Step>3 · Graphics card</Step>
          <Grid>
            <Field label="Graphics"><Select value={v.gpuType} options={GPU_TYPES} onChange={(id) => setGpuType(id as GpuType)} /></Field>
            {v.gpuType !== "none" && (
              <Field label="Graphics model"><Select value={v.gpu} options={GPUS[v.gpuType]} onChange={set("gpu")} /></Field>
            )}
          </Grid>
        </>
      )}

      <Step>{isMac ? "3" : "4"} · Age & condition</Step>
      <Grid>
        <Field label="How many months old?">
          <MonthsInput value={v.months} onChange={set("months")} warranty={warranty} warrantyMonths={WARRANTY_MONTHS} />
        </Field>
        <Field label="Condition"><Select value={v.condition} options={CONDITIONS} onChange={set("condition")} /></Field>
      </Grid>

      <Step>Anything else?</Step>
      <div style={{ display: "grid", gap: 10 }}>
        <Toggle label="Battery is weak (lasts under 1 hour)" checked={v.batteryWeak} onChange={set("batteryWeak")} />
        <Toggle label="Original charger is missing" checked={v.noCharger} onChange={set("noCharger")} />
        <Toggle label="Has the original bill and box" checked={v.billAndBox} onChange={set("billAndBox")} />
      </div>
    </>
  );

  return <CalcLayout form={form} result={r} warranty={warranty} summary={summary} device="laptop" />;
}
