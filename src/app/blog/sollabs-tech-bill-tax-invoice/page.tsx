import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, Table, type Faq } from "../_components/BlogArticle";

const slug = "sollabs-tech-bill-tax-invoice";
const title = "Sollabs Tech Bill Explained: How to Read Your Tax Invoice and Official Seal (With Sample)";
const SEAL_URL = "https://www.sollabstech.com/images/sollabstech-official-seal-madurai.webp";
const description =
  "See a sample Sollabs Tech tax invoice and the official seal, and what each part means: invoice number, serial or IMEI, GST and warranty promise.";

export const metadata: Metadata = {
  title: "Sollabs Tech Bill, Tax Invoice & Official Seal Explained",
  description,
  keywords: [
    "sollabs tech bill",
    "sollabstech seal",
    "sollabs tech seal",
    "sollabs tech official seal",
    "sollabstech bill",
    "sollabstech invoice",
    "sollabs tech tax invoice",
    "sollabs tech bill sample",
    "sollabstech bill check",
    "laptop bill madurai",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    type: "article", title, description, url: `https://www.sollabstech.com/blog/${slug}`, publishedTime: "2026-10-12",
    images: [{ url: SEAL_URL, width: 1254, height: 1254, alt: "Sollabs Tech official seal, Madurai" }],
  },
};

const faqs: Faq[] = [
  {
    q: "What does the Sollabs Tech seal look like?",
    a: "The official Sollabs Tech seal is a blue circular stamp with a double outer ring, SOLLABSTECH curved around the top, MADURAI around the bottom, a star on each side, and the Sollabs Tech S logo in the centre. Every genuine Sollabs Tech bill carries it.",
  },
  {
    q: "Do I get a bill when I buy from Sollabs Tech?",
    a: "Yes. Every laptop and mobile comes with a Sollabs Tech tax invoice showing the invoice number, date, device details, amount with GST, and the warranty promise.",
  },
  {
    q: "What is the Sollabs Tech invoice number format?",
    a: "Invoice numbers start with SLT, followed by the date and time of the bill, for example SLT-20261012-121859 for a bill made on 12 October 2026 at 12:18:59.",
  },
  {
    q: "Why should I keep my Sollabs Tech bill?",
    a: "The purchase date on your bill decides which warranty benefits you can use: 7-day refund, 1-month exchange, 6-month upgrade offer and 1-year free service. Refunds also require the bill.",
  },
  {
    q: "I lost my Sollabs Tech bill. What should I do?",
    a: "Check your warranty online with your mobile number at sollabstech.com/warranty, or WhatsApp +91 90038 50743 with the serial number or IMEI and we'll look up your purchase.",
  },
  {
    q: "How do I check that my bill is genuine?",
    a: "Check that the serial number or IMEI on the bill matches your device, the invoice number follows the SLT-date-time format, and the bill carries the Sollabs Tech seal and authorised signature. If in doubt, WhatsApp us with the invoice number.",
  },
];

// Illustrative sample only: not a real customer, and no real seal or signature.
function SampleBill() {
  const cell: React.CSSProperties = { padding: "8px 10px", borderTop: "1px solid #CBD5E1", fontSize: 12, color: "#1E293B", verticalAlign: "top" };
  const head: React.CSSProperties = { padding: "8px 10px", fontSize: 11, fontWeight: 700, color: "#0F172A", background: "#F1F5F9", textAlign: "left" };
  const pin = (n: number): React.ReactNode => (
    <span aria-hidden style={{ display: "inline-grid", placeItems: "center", width: 18, height: 18, borderRadius: "50%", background: "#0066FF", color: "white", fontSize: 10, fontWeight: 800, marginRight: 6, verticalAlign: "middle" }}>{n}</span>
  );
  return (
    <figure style={{ margin: "8px 0 30px" }}>
      <div role="img" aria-label="Sample Sollabs Tech tax invoice with numbered parts" style={{ position: "relative", overflow: "hidden", background: "white", color: "#0F172A", borderRadius: 14, padding: "22px 20px", border: "1px solid #E2E8F0", fontFamily: "system-ui, sans-serif" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", pointerEvents: "none" }}>
          <span style={{ fontSize: "clamp(48px, 12vw, 110px)", fontWeight: 900, color: "rgba(220,38,38,0.12)", transform: "rotate(-24deg)", letterSpacing: 8 }}>SAMPLE</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", borderBottom: "2px solid #0F172A", paddingBottom: 12 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900 }}>{pin(1)}SOLLABS TECH</div>
            <div style={{ fontSize: 11, color: "#475569", marginTop: 3 }}>SS Colony, Bharathiyar 4th Street, Madurai, Tamil Nadu - 625402</div>
            <div style={{ fontSize: 11, color: "#475569" }}>+91 90038 50743 · sollabstech@gmail.com</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ display: "inline-block", border: "2px solid #0F172A", padding: "3px 10px", fontSize: 12, fontWeight: 800, letterSpacing: 3 }}>TAX INVOICE</div>
            <div style={{ fontSize: 11, marginTop: 5 }}>{pin(2)}No: <b>SLT-20261012-121859</b></div>
            <div style={{ fontSize: 11 }}>Date: <b>12/10/2026</b></div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 10, margin: "12px 0" }}>
          <div style={{ border: "1px solid #CBD5E1", padding: "8px 10px", fontSize: 11.5 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#64748B" }}>{pin(3)}BILL TO</div>
            <div style={{ fontWeight: 700 }}>Sample Customer</div>
            <div>Phone: 98XXX XXXXX</div>
          </div>
          <div style={{ border: "1px solid #CBD5E1", padding: "8px 10px", fontSize: 11.5 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#64748B" }}>PAYMENT</div>
            <div style={{ fontWeight: 700 }}>UPI</div>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", border: "1.5px solid #0F172A", minWidth: 460 }}>
            <thead>
              <tr>{["Type", "Description", "Condition", "Accessories", "Taxable (₹)"].map((h) => <th key={h} style={head}>{h}</th>)}</tr>
            </thead>
            <tbody>
              <tr>
                <td style={cell}>{pin(4)}Laptop</td>
                <td style={cell}>
                  <b>Dell Latitude 5420</b><br />i5 11th Gen | 16GB | 512GB SSD<br />Serial No: SAMPLE123<br />Warranty: 1 year free service
                </td>
                <td style={cell}>Refurbished</td>
                <td style={cell}>Charger</td>
                <td style={{ ...cell, textAlign: "right" }}>27,118.64</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
          <div style={{ fontSize: 11, maxWidth: 260 }}>
            <div style={{ fontWeight: 700, color: "#64748B", fontSize: 10 }}>AMOUNT IN WORDS</div>
            <div>Thirty-Two Thousand Rupees Only</div>
          </div>
          <div style={{ border: "1.5px solid #0F172A", minWidth: 220, fontSize: 12 }}>
            {[["Taxable value", "₹ 27,118.64"], ["CGST", "₹ 2,440.68"], ["SGST", "₹ 2,440.68"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "5px 10px" }}><span>{k === "Taxable value" ? <>{pin(5)}{k}</> : k}</span><span>{v}</span></div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 10px", borderTop: "1.5px solid #0F172A", background: "#F1F5F9", fontWeight: 800 }}><span>Grand Total</span><span>₹ 32,000.00</span></div>
          </div>
        </div>

        <div style={{ border: "1.5px solid #0F172A", padding: "10px 12px", marginTop: 12, fontSize: 11, lineHeight: 1.7 }}>
          <div style={{ fontWeight: 800 }}>{pin(6)}Warranty &amp; Service Promise</div>
          <div>• 7-day refund · • 1-month exchange · • 6-month upgrade (90% of parts) · • 1-year free service</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
          <div style={{ fontSize: 11, textAlign: "center" }}>
            <div style={{ width: 150, borderTop: "1.5px solid #0F172A", marginBottom: 3 }} />Customer signature
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
            <div style={{ width: 54, height: 54, borderRadius: "50%", border: "2px dashed #94A3B8", display: "grid", placeItems: "center", fontSize: 9, color: "#64748B", textAlign: "center" }}>{pin(7)}seal</div>
            <div style={{ fontSize: 11, textAlign: "center" }}>
              <div style={{ width: 150, height: 26, borderBottom: "1.5px solid #0F172A", marginBottom: 3 }} />Authorised signature
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #CBD5E1", marginTop: 14, paddingTop: 8, textAlign: "center", fontSize: 10.5, color: "#475569" }}>
          {pin(8)}Phone/WhatsApp: +91 90038 50743 · www.sollabstech.com · Instagram: @sollabs_tech_laptop__custom_pc
        </div>
      </div>
      <figcaption style={{ fontSize: 13, color: "#64748B", marginTop: 8, textAlign: "center" }}>
        Sample for illustration only. The customer, serial number and amounts are made up; GST rates on your bill depend on the product.
      </figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Billing"
      datePublished="2026-10-12"
      title={title}
      description={description}
      breadcrumb="Sollabs Tech Bill Explained"
      faqs={faqs}
      intro={
        <>
          Every laptop and mobile you buy from Sollabs Tech comes with a <strong style={strong}>tax invoice</strong>, your Sollabs Tech bill. It&apos;s more than a receipt: the date on it starts your warranty, and the serial number or IMEI on it proves which device is yours. Here&apos;s a sample bill with each part explained.
        </>
      }
      cta={{
        title: "Questions about your bill?",
        text: "Send us your invoice number and we'll help, whether it's a warranty claim, a lost bill or a GST question.",
        whatsappText: "Hi Sollabs Tech, I have a question about my bill. Invoice number: ",
        primary: { href: "/warranty#check", label: "Check My Warranty" },
      }}
    >
      <h2 style={h2}>Sample Sollabs Tech bill</h2>
      <SampleBill />

      <h2 style={h2}>What each part of the bill means</h2>
      <h3 style={h3}>1. Business details</h3>
      <p style={p}>
        The top of every bill shows <strong style={strong}>Sollabs Tech</strong>, our address (SS Colony, Bharathiyar 4th Street, Madurai, Tamil Nadu 625402), phone <strong style={strong}>+91 90038 50743</strong> and email <strong style={strong}>sollabstech@gmail.com</strong>.
      </p>
      <h3 style={h3}>2. Invoice number and date</h3>
      <p style={p}>
        Each bill is a <strong style={strong}>tax invoice</strong> with a unique number in the format <strong style={strong}>SLT-YYYYMMDD-HHMMSS</strong>: SLT, then the date and time the bill was made. The <strong style={strong}>date</strong> is the most important line for you, because every warranty benefit is counted from it.
      </p>
      <h3 style={h3}>3. Bill to and payment</h3>
      <p style={p}>Your name and phone number, and how you paid (for example cash, UPI, card or bank transfer).</p>
      <h3 style={h3}>4. Your device</h3>
      <p style={p}>The product line identifies exactly what you bought:</p>
      <ul style={list}>
        <li><strong style={strong}>Type:</strong> laptop or mobile.</li>
        <li><strong style={strong}>Description:</strong> brand, model and key specs, plus the <strong style={strong}>serial number</strong> for laptops or <strong style={strong}>IMEI</strong> for phones.</li>
        <li><strong style={strong}>Condition:</strong> for example new, refurbished or used.</li>
        <li><strong style={strong}>Accessories:</strong> what came with it, such as the charger or box. Keep these for a refund.</li>
      </ul>
      <h3 style={h3}>5. Amount and GST</h3>
      <p style={p}>
        The <strong style={strong}>taxable value</strong>, the GST split into <strong style={strong}>CGST</strong> and <strong style={strong}>SGST</strong>, and the <strong style={strong}>grand total</strong> you paid, written in figures and in words.
      </p>
      <h3 style={h3}>6. Warranty and service promise</h3>
      <p style={p}>
        Every bill prints the after-sales promise: <Link href="/blog/laptop-refund-policy-7-days" style={link}>7-day refund</Link>,{" "}
        <Link href="/blog/laptop-exchange-offer-madurai" style={link}>1-month exchange</Link>,{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>6-month upgrade offer</Link> and{" "}
        <Link href="/blog/free-laptop-service-madurai" style={link}>1-year free service</Link>, plus what isn&apos;t covered.
      </p>
      <h3 style={h3}>7. Seal and signatures</h3>
      <p style={p}>A genuine bill carries the official Sollabs Tech seal and the authorised signature, with space for the customer&apos;s signature.</p>

      <h2 id="seal" style={h2}>The official Sollabs Tech seal</h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            name: "Sollabs Tech official seal",
            caption: "Official Sollabs Tech seal, Madurai, used on genuine Sollabs Tech bills",
            contentUrl: SEAL_URL,
            width: 1254,
            height: 1254,
            creditText: "Sollabs Tech",
            copyrightNotice: "© Sollabs Tech",
            creator: { "@type": "Organization", name: "Sollabs Tech", url: "https://www.sollabstech.com" },
          }),
        }}
      />
      <figure style={{ margin: "8px 0 24px", textAlign: "center" }}>
        <Image
          src="/images/sollabstech-official-seal-madurai.webp"
          alt="Sollabs Tech official seal: blue circular stamp with SOLLABSTECH at the top, MADURAI at the bottom and the Sollabs Tech S logo in the centre"
          width={320}
          height={320}
          style={{ display: "block", margin: "0 auto", width: "min(320px, 80%)", height: "auto", borderRadius: 16, background: "white", padding: 12 }}
        />
        <figcaption style={{ fontSize: 13, color: "#64748B", marginTop: 8 }}>The official Sollabs Tech seal, Madurai</figcaption>
      </figure>
      <p style={p}>Every genuine Sollabs Tech bill is stamped with this seal. Here&apos;s how to recognise it:</p>
      <ul style={list}>
        <li>A <strong style={strong}>blue, circular</strong> stamp with a double outer ring.</li>
        <li><strong style={strong}>SOLLABSTECH</strong> curved around the top and <strong style={strong}>MADURAI</strong> around the bottom.</li>
        <li>A <strong style={strong}>star</strong> on each side.</li>
        <li>The Sollabs Tech <strong style={strong}>&ldquo;S&rdquo; logo</strong> in the centre.</li>
      </ul>
      <p style={p}>
        A bill without the seal and an authorised signature, or with a seal that looks different, may not be genuine. WhatsApp{" "}
        <strong style={strong}>+91 90038 50743</strong>{" "}with the invoice number and we&apos;ll confirm it.
      </p>
      <h3 style={h3}>8. Contact details</h3>
      <p style={p}>Phone/WhatsApp, website and Instagram, so you always know how to reach us.</p>

      <h2 style={h2}>Why keep your bill safe</h2>
      <Table
        head={["Time since the bill date", "What you can use"]}
        rows={[
          ["Up to 7 days", "Full refund (bill, box and accessories needed)"],
          ["Up to 1 month", "Exchange for another device"],
          ["Up to 6 months", "RAM/SSD upgrade at 90% of parts cost"],
          ["Up to 1 year", "Free servicing, diagnostics and maintenance"],
        ]}
      />
      <p style={p}>A bill with the serial number also helps if you resell the device later, because it shows where and when it was bought.</p>

      <h2 style={h2}>How to check your bill is genuine</h2>
      <ol style={list}>
        <li>The <strong style={strong}>serial number</strong> (laptops) or <strong style={strong}>IMEI</strong> (phones) on the bill matches your device. For phones, dial <strong style={strong}>*#06#</strong>.</li>
        <li>The invoice number follows the <strong style={strong}>SLT-date-time</strong> format, and its date matches the bill date.</li>
        <li>The bill has the Sollabs Tech seal and authorised signature.</li>
        <li>Still unsure? WhatsApp <strong style={strong}>+91 90038 50743</strong> with the invoice number and we&apos;ll confirm.</li>
      </ol>

      <Callout icon="🔍" title="Lost your bill?">
        Enter the mobile number you gave at purchase in the <Link href="/warranty#check" style={link}>warranty checker</Link>{" "}to see your purchase date and warranty, or WhatsApp us with the serial number or IMEI and we&apos;ll look up your purchase.
      </Callout>

      <p style={p}>
        More about your cover: the <Link href="/blog/sollabstech-warranty-policy" style={link}>Sollabs Tech warranty policy</Link> and{" "}
        <Link href="/blog/how-to-check-laptop-warranty-sollabstech" style={link}>how to check your laptop warranty</Link>.
      </p>
    </BlogArticle>
  );
}
