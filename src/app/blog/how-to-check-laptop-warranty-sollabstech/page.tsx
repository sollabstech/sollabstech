import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, Table, type Faq } from "../_components/BlogArticle";

const slug = "how-to-check-laptop-warranty-sollabstech";
const title = "How to Check Laptop Warranty Online: HP, Dell, Lenovo, ASUS, Acer & Apple (Step-by-Step)";
const description =
  "Check your laptop warranty online in under 2 minutes. Find your serial number, then use the official HP, Dell, Lenovo, ASUS, Acer, Apple or MSI checker. Plus how to check a Sollabs Tech laptop warranty.";

export const metadata: Metadata = {
  title: "How to Check Laptop Warranty Online – HP, Dell, Lenovo, ASUS, Acer, Apple",
  description,
  keywords: [
    "laptop warranty check",
    "check laptop warranty online",
    "laptop warranty check by serial number",
    "how to check laptop warranty",
    "hp laptop warranty check",
    "lenovo warranty check",
    "dell warranty check",
    "asus warranty check",
    "laptop status check",
    "sollabs tech warranty check",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    type: "article",
    title,
    description,
    url: `https://www.sollabstech.com/blog/${slug}`,
    publishedTime: "2026-08-12",
    modifiedTime: "2026-10-11",
  },
};

const BRANDS: { brand: string; url: string; label: string; need: string }[] = [
  { brand: "HP", url: "https://support.hp.com/in-en/check-warranty", label: "support.hp.com – Check warranty", need: "Serial number" },
  { brand: "Lenovo", url: "https://pcsupport.lenovo.com/in/en/warranty-lookup", label: "pcsupport.lenovo.com – Warranty lookup", need: "Serial number" },
  { brand: "Dell", url: "https://www.dell.com/support/home/en-in", label: "dell.com – Support home", need: "Service Tag" },
  { brand: "ASUS", url: "https://www.asus.com/in/support/warranty-status-inquiry/", label: "asus.com – Warranty status inquiry", need: "Serial number" },
  { brand: "Acer", url: "https://www.acer.com/in-en/support/warranty", label: "acer.com – Warranty", need: "Serial number / SNID" },
  { brand: "Apple (MacBook)", url: "https://checkcoverage.apple.com/", label: "checkcoverage.apple.com", need: "Serial number" },
  { brand: "MSI", url: "https://www.msi.com/support", label: "msi.com – Support", need: "Serial number" },
];

const code: React.CSSProperties = { background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 6, color: "#E2E8F0", fontSize: 13.5 };

const faqs: Faq[] = [
  {
    q: "How do I check my laptop warranty online?",
    a: "Find your laptop's serial number (on the sticker underneath, or in Windows PowerShell with Get-CimInstance Win32_BIOS | Select-Object SerialNumber), then enter it on your brand's official warranty page: HP, Lenovo, Dell (Service Tag), ASUS, Acer, Apple or MSI.",
  },
  {
    q: "Where do I find my laptop's serial number?",
    a: "On the sticker under the laptop or under the battery, on the original box or invoice, in the BIOS/UEFI setup screen, or on Windows by running Get-CimInstance Win32_BIOS | Select-Object SerialNumber in PowerShell. On a MacBook, open the Apple menu and choose About This Mac.",
  },
  {
    q: "Why does my warranty start date look wrong?",
    a: "Some manufacturers start the warranty from the date the laptop was shipped rather than the date you bought it. Most let you correct it by uploading your purchase invoice on their support site.",
  },
  {
    q: "Does a used or refurbished laptop still have the manufacturer warranty?",
    a: "Often not. The manufacturer warranty may have expired or may not transfer to a new owner. That's why the seller's own warranty matters when you buy a used laptop.",
  },
  {
    q: "How do I check the warranty on a laptop bought from Sollabs Tech?",
    a: "Enter the serial number from your Sollabs Tech warranty sticker at sollabstech.com/warranty to see your warranty end date and days left. Benefits by purchase date: up to 7 days full refund, up to 1 month exchange, up to 6 months the 90% upgrade offer, and up to 1 year free service.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Warranty Guide"
      datePublished="2026-08-12"
      dateModified="2026-10-11"
      title={title}
      description={description}
      breadcrumb="How to Check Laptop Warranty"
      faqs={faqs}
      intro={
        <>
          Checking a laptop warranty takes two things: your <strong style={strong}>serial number</strong> and the <strong style={strong}>right official website</strong>. This guide shows where to find the serial number on any laptop, links to the official warranty checker for every major brand, and explains how to check the warranty on a laptop bought from Sollabs Tech.
        </>
      }
      cta={{
        title: "Bought your laptop from Sollabs Tech?",
        text: "Send us your bill or the serial number on your Sollabs Tech sticker and we'll confirm your warranty and next steps.",
        whatsappText: "Hi Sollabs Tech, I'd like to check my laptop warranty. Serial number: ",
        primary: { href: "/warranty#check", label: "Check Sollabs Tech Warranty" },
      }}
    >
      <h2 style={h2}>Step 1: Find your laptop&apos;s serial number</h2>
      <p style={p}>Every brand&apos;s checker asks for the serial number (Dell calls it the <strong style={strong}>Service Tag</strong>). Find it in any of these places:</p>
      <ul style={list}>
        <li><strong style={strong}>Sticker under the laptop</strong> (or under the battery on older models)</li>
        <li><strong style={strong}>The original box or purchase invoice</strong></li>
        <li>
          <strong style={strong}>Windows:</strong> open PowerShell and run{" "}
          <code style={code}>Get-CimInstance Win32_BIOS | Select-Object SerialNumber</code>
        </li>
        <li><strong style={strong}>BIOS/UEFI setup screen:</strong> shown on the main or information page</li>
        <li><strong style={strong}>MacBook:</strong> Apple menu → About This Mac</li>
      </ul>

      <h2 style={h2}>Step 2: Enter it on your brand&apos;s official warranty page</h2>
      <p style={p}>Use only the manufacturer&apos;s own website. Third-party &ldquo;warranty checker&rdquo; sites can show wrong dates or collect your details.</p>
      <div style={{ overflowX: "auto", margin: "8px 0 26px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 480 }}>
          <thead>
            <tr style={{ background: "rgba(0,102,255,0.1)" }}>
              {["Brand", "Official warranty page", "You need"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "12px 16px", color: "white", fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BRANDS.map((b) => (
              <tr key={b.brand} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <td style={{ padding: "12px 16px", color: "#E2E8F0", fontWeight: 600 }}>{b.brand}</td>
                <td style={{ padding: "12px 16px" }}>
                  <a href={b.url} target="_blank" rel="noopener noreferrer" style={link}>{b.label}</a>
                </td>
                <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{b.need}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>Step 3: Read the result correctly</h2>
      <ul style={list}>
        <li><strong style={strong}>Active / In warranty:</strong> repairs for covered hardware faults are free at the brand&apos;s service centre.</li>
        <li><strong style={strong}>Expired / Out of warranty:</strong> you can still get repairs, but you pay for parts and labour.</li>
        <li><strong style={strong}>Start date looks wrong?</strong> Some brands count from the ship date, not your purchase date. Most let you fix it by uploading your invoice.</li>
        <li><strong style={strong}>&ldquo;Product not found&rdquo;:</strong> re-check the serial number for mix-ups like O/0 and I/1, or try the number from the box.</li>
      </ul>

      <h2 style={h2}>Buying a used laptop? Check the seller&apos;s warranty too</h2>
      <p style={p}>
        On a second-hand or refurbished laptop, the manufacturer warranty has often expired or may not transfer to you. Before paying, check the brand warranty using the steps above, and ask the seller exactly what <em>they</em> cover after the sale. Our{" "}
        <Link href="/blog/used-laptop-with-warranty-madurai" style={link}>used laptop buying checklist</Link> covers what to look for.
      </p>

      <h2 style={h2}>How to check the warranty on a Sollabs Tech laptop</h2>
      <p style={p}>
        Laptops sold by Sollabs Tech carry a <strong style={strong}>Sollabs Tech warranty sticker</strong> with a short serial number (for example 197979). Enter it in the{" "}
        <Link href="/warranty#check" style={link}>Sollabs Tech warranty checker</Link> to see your device, purchase date, warranty end date and days left. Your after-sales benefits depend on how long ago you bought it:
      </p>
      <Table
        head={["Time since purchase", "What you can still use"]}
        rows={[
          ["Up to 7 days", "Full refund, exchange, upgrade offer, free service"],
          ["8 days to 1 month", "Exchange, upgrade offer, free service"],
          ["1 to 6 months", "RAM/SSD upgrade at 90% of parts cost, free service"],
          ["6 months to 1 year", "Free service"],
        ]}
      />
      <p style={p}>
        Serial not found, or no sticker? WhatsApp <strong style={strong}>+91 90038 50743</strong> with your bill. Full details are in the{" "}
        <Link href="/blog/sollabstech-warranty-policy" style={link}>Sollabs Tech warranty policy</Link>.
      </p>

      <h3 style={h3}>Video: Sollabs Tech warranty</h3>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 14, overflow: "hidden", margin: "8px 0 14px", border: "1px solid rgba(255,255,255,0.08)" }}>
        <iframe
          src="https://www.youtube.com/embed/YCevUGl3EMM"
          title="Sollabs Tech laptop warranty"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
      <p style={{ ...p, fontSize: 14 }}>
        Also on Instagram:{" "}
        <a href="https://www.instagram.com/reel/Dbze5Bav9uX/" target="_blank" rel="noopener noreferrer" style={link}>@sollabstech reel</a>
      </p>

      <Callout icon="🛠️" title="Warranty expired?">
        Sollabs Tech can still service and repair laptops after the warranty ends. Message us on WhatsApp and we&apos;ll quote you the cost.
      </Callout>
    </BlogArticle>
  );
}
