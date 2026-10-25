import Link from "next/link";
import Image from "next/image";
import { fetchProducts, formatINR, type Product } from "@/lib/products";

const WHATSAPP = "919003850743";

// In-stock products to offer instead, same type as the sold one first.
export async function soldOutSuggestions(sold?: Product, count = 3): Promise<Product[]> {
  const all = await fetchProducts().catch(() => [] as Product[]);
  const inStock = all.filter((p) => p.inStock && p.id !== sold?.id);
  if (!sold) return inStock.slice(0, count);
  return [...inStock.filter((p) => p.category === sold.category), ...inStock.filter((p) => p.category !== sold.category)].slice(0, count);
}

// Shown when a product is sold, or the product link doesn't exist.
// Behind a frosted-glass card sits a blurred product view: the sold product itself when we
// know it, otherwise a placeholder laptop page.
export default function SoldOut({ product, suggestions }: { product?: Product; suggestions: Product[] }) {
  const image = product?.images[0] ?? suggestions.find((p) => p.images[0])?.images[0];
  const name = product?.name ?? "Gaming Laptop";
  const specs = product?.shortSpecs ?? "Intel Core i7 · 16 RAM · 512 NVMe SSD · RTX 3060";
  const price = product ? `₹${formatINR(product.price)}` : "₹54,999";
  const mrp = product?.originalPrice ? `₹${formatINR(product.originalPrice)}` : product ? "" : "₹1,09,000";
  const askText = product
    ? `Hi Sollabs Tech, the ${product.name} is sold out. Do you have something similar?`
    : "Hi Sollabs Tech, the product link I opened isn't available. Can you suggest something similar?";

  return (
    <section className="so-page">
      {/* Blurred product view in the background */}
      <div className="so-bg" aria-hidden>
        <div className="so-grid">
          <div className="so-photo">
            {image ? <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} /> : <span>💻</span>}
          </div>
          <div>
            <div className="so-chips"><span>In Stock</span><span>💻 Laptop</span></div>
            <div className="so-brand">{product?.brand ?? "ASUS"}</div>
            <div className="so-name">{name}</div>
            <div className="so-specs">{specs}</div>
            <div className="so-price">{price} {mrp && <s>{mrp}</s>}</div>
            <div className="so-box" />
            <div className="so-rows">{[0, 1, 2, 3, 4].map((i) => <div key={i}><span /><span /></div>)}</div>
          </div>
        </div>
      </div>

      {/* Glass card */}
      <div className="so-front">
        <div className="so-glass" role="status">
          <div className="so-badge">SOLD OUT</div>
          <h1>This product is sold out</h1>
          <p>
            {product
              ? <>The <strong>{product.name}</strong> has already found a new home.</>
              : <>This product has been sold, or the link is no longer available.</>}
            {" "}Here are similar ones in stock right now.
          </p>
          <div className="so-actions">
            <Link href="/products" className="btn-primary">See all products →</Link>
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(askText)}`} target="_blank" rel="noopener noreferrer" className="so-wa">
              💬 Ask for a similar one
            </a>
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="so-suggest">
            <h2>Available now</h2>
            <div className="so-cards">
              {suggestions.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="so-card">
                  <div className="so-card-img">
                    {p.images[0]
                      ? <Image src={p.images[0]} alt={p.name} fill sizes="(max-width: 640px) 100vw, 280px" style={{ objectFit: "cover" }} />
                      : <span>{p.category === "mobile" ? "📱" : "💻"}</span>}
                    <em>{p.condition}</em>
                  </div>
                  <div className="so-card-body">
                    <div className="so-card-brand">{p.brand}</div>
                    <div className="so-card-name">{p.name}</div>
                    <div className="so-card-specs">{p.shortSpecs}</div>
                    <div className="so-card-price">
                      ₹{formatINR(p.price)}
                      {p.originalPrice ? <s>₹{formatINR(p.originalPrice)}</s> : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .so-page { position: relative; min-height: 100vh; padding: 100px 16px 80px; overflow: hidden; }
        .so-bg { position: absolute; inset: 0; padding: 110px 24px 0; filter: blur(9px); opacity: 0.85; transform: scale(1.04); pointer-events: none; user-select: none; }
        .so-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .so-photo { position: relative; aspect-ratio: 4/3; border-radius: 20px; overflow: hidden; background: linear-gradient(135deg, rgba(0,102,255,0.35), rgba(0,170,255,0.15)); display: flex; align-items: center; justify-content: center; font-size: 90px; }
        .so-chips { display: flex; gap: 8px; margin-bottom: 16px; }
        .so-chips span { padding: 6px 14px; border-radius: 100px; font-size: 13px; color: #4ADE80; border: 1px solid rgba(74,222,128,0.4); }
        .so-brand { font-size: 13px; letter-spacing: 2px; color: #64748B; font-weight: 700; text-transform: uppercase; }
        .so-name { font-size: 30px; font-weight: 800; color: white; margin: 6px 0; }
        .so-specs { font-size: 15px; color: #8193AB; }
        .so-price { font-size: 40px; font-weight: 800; color: white; margin: 18px 0; }
        .so-price s { font-size: 18px; color: #64748B; font-weight: 500; margin-left: 10px; }
        .so-box { height: 54px; border-radius: 14px; background: rgba(0,102,255,0.15); border: 1px solid rgba(0,102,255,0.3); margin-bottom: 18px; }
        .so-rows div { display: flex; gap: 16px; padding: 14px 0; border-top: 1px solid rgba(255,255,255,0.08); }
        .so-rows span { height: 12px; border-radius: 6px; background: rgba(255,255,255,0.18); flex: 1; }
        .so-rows span:first-child { flex: 0 0 30%; background: rgba(255,255,255,0.1); }

        .so-front { position: relative; z-index: 1; max-width: 960px; margin: 0 auto; }
        .so-glass { max-width: 560px; margin: 40px auto 0; padding: 34px 28px; text-align: center; border-radius: 24px; background: rgba(10,22,40,0.45); border: 1px solid rgba(255,255,255,0.14); box-shadow: 0 30px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08); backdrop-filter: blur(22px) saturate(140%); -webkit-backdrop-filter: blur(22px) saturate(140%); animation: fadeInUp .5s ease both; }
        .so-badge { display: inline-block; padding: 6px 16px; border-radius: 100px; font-size: 12.5px; font-weight: 800; letter-spacing: 2px; color: #FCA5A5; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.45); margin-bottom: 16px; }
        .so-glass h1 { font-size: clamp(1.6rem, 4.5vw, 2.3rem); font-weight: 800; color: white; margin: 0 0 10px; line-height: 1.2; }
        .so-glass p { font-size: 15.5px; color: #C4D0E0; line-height: 1.7; margin: 0 0 24px; }
        .so-glass strong { color: white; }
        .so-actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
        .so-actions .btn-primary { padding: 13px 24px; font-size: 15px; }
        .so-wa { padding: 13px 22px; border-radius: 12px; font-size: 15px; font-weight: 700; color: #4ADE80; border: 1px solid rgba(34,197,94,0.45); background: rgba(34,197,94,0.08); text-decoration: none; }

        .so-suggest { margin-top: 48px; }
        .so-suggest h2 { font-size: 20px; font-weight: 800; color: white; text-align: center; margin: 0 0 18px; }
        .so-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 280px)); justify-content: center; gap: 16px; }
        .so-card { display: block; text-decoration: none; border-radius: 18px; overflow: hidden; background: rgba(10,22,40,0.7); border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); transition: transform .2s, border-color .2s; }
        .so-card:hover { transform: translateY(-3px); border-color: rgba(0,170,255,0.5); }
        .so-card-img { position: relative; aspect-ratio: 4/3; background: rgba(0,102,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 44px; }
        .so-card-img em { position: absolute; top: 10px; left: 10px; font-style: normal; font-size: 11.5px; font-weight: 700; color: white; background: #0066FF; padding: 4px 10px; border-radius: 100px; }
        .so-card-body { padding: 14px 16px 16px; }
        .so-card-brand { font-size: 11px; font-weight: 700; letter-spacing: 1px; color: #64748B; text-transform: uppercase; }
        .so-card-name { font-size: 15px; font-weight: 700; color: white; margin: 3px 0; }
        .so-card-specs { font-size: 12.5px; color: #8193AB; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .so-card-price { font-size: 19px; font-weight: 800; color: white; margin-top: 8px; }
        .so-card-price s { font-size: 12.5px; font-weight: 500; color: #64748B; margin-left: 8px; }

        @media (max-width: 768px) {
          .so-grid { grid-template-columns: 1fr; gap: 24px; }
          .so-glass { margin-top: 70px; padding: 28px 20px; }
        }
      `}</style>
    </section>
  );
}
