import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, ShoppingBag, Star, Truck, Shield, RotateCcw, ChevronDown, Minus, Plus } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { LotusIcon, LotusSeparator } from "@/components/Lotus";
import { products } from "@/lib/mock-data";

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const p = products.find(x => x.id === params.id);
    return { meta: [{ title: `${p?.name ?? "Product"} — Mounika's Wardrobe` }, { name: "description", content: p?.name ?? "Luxury ethnic wear" }] };
  },
  notFoundComponent: () => <Layout><div className="py-32 text-center font-display text-3xl">Product not found</div></Layout>,
  loader: ({ params }) => {
    const product = products.find(p => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [color, setColor] = useState(product.colors?.[0]);
  const [size, setSize] = useState(product.sizes?.[2]);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  const gallery = [product.image, product.hoverImage, product.image, product.hoverImage];
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <nav className="text-xs text-muted-foreground tracking-wider uppercase flex items-center gap-2 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link> /
          <Link to="/shop" className="hover:text-primary">Shop</Link> /
          <span className="text-foreground">{product.category}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition ${activeImg === i ? "border-primary shadow-luxe" : "border-transparent opacity-70 hover:opacity-100"}`}
                >
                  <img src={g} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden bg-accent/30 group">
              <img src={gallery[activeImg]} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <LotusIcon className="absolute top-4 right-4 w-14 h-14 text-white/60" strokeWidth={1} />
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{product.category}</p>
            <h1 className="font-display text-4xl lg:text-5xl mt-3">{product.name}</h1>
            <div className="flex items-center gap-3 mt-3 text-sm">
              <div className="flex items-center gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-current" : ""}`} />)}
              </div>
              <span className="text-foreground/70">{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-3xl">₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && <span className="line-through text-muted-foreground">₹{product.originalPrice.toLocaleString("en-IN")}</span>}
              {discount > 0 && <span className="text-[color:var(--sale)] font-medium text-sm">{discount}% OFF</span>}
            </div>
            <p className="text-xs text-[color:var(--success)] mt-1">Inclusive of all taxes</p>

            <div className="mt-8 space-y-6">
              {/* color */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Color</p>
                <div className="flex gap-3">
                  {product.colors?.map((c: string) => (
                    <button key={c} onClick={() => setColor(c)} className={`relative w-10 h-10 rounded-full ring-offset-2 transition ${color === c ? "ring-2 ring-primary" : ""}`} style={{ backgroundColor: c }} aria-label={c} />
                  ))}
                </div>
              </div>
              {/* size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Size</p>
                  <button className="text-xs text-primary underline">Size guide</button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes?.map((s: string) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`min-w-12 h-12 px-4 rounded-full border text-sm transition ${size === s ? "bg-foreground text-background border-foreground" : "border-border hover:border-primary"}`}
                    >{s}</button>
                  ))}
                </div>
              </div>
              {/* qty */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Quantity</p>
                <div className="inline-flex items-center border border-border rounded-full">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-11 inline-flex items-center justify-center hover:text-primary"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center font-medium">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-11 h-11 inline-flex items-center justify-center hover:text-primary"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex-1 min-w-[200px] h-14 rounded-full bg-foreground text-background inline-flex items-center justify-center gap-2 hover:bg-luxe transition">
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
              <button className="flex-1 min-w-[200px] h-14 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.02] transition">Buy Now</button>
              <button aria-label="Wishlist" className="w-14 h-14 rounded-full border border-border inline-flex items-center justify-center hover:text-primary hover:border-primary transition">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
              {[{ Icon: Truck, t: "Free Shipping ₹999+" }, { Icon: RotateCcw, t: "Easy Returns" }, { Icon: Shield, t: "Secure Payment" }].map(({ Icon, t }) => (
                <div key={t} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-accent/40 text-center">
                  <Icon className="w-5 h-5 text-primary" /><span className="text-foreground/80">{t}</span>
                </div>
              ))}
            </div>

            {/* accordions */}
            <div className="mt-10 divide-y divide-border border-y border-border">
              {[
                { t: "Description", c: "An exquisite piece from the Mounika's Wardrobe couture line — hand-loomed by master artisans using time-honoured techniques. Tailored for the modern woman who values heritage and craft." },
                { t: "Fabric Details", c: "Pure silk with zari thread work. Lined with soft cotton for comfort." },
                { t: "Care Instructions", c: "Dry clean only. Store rolled in muslin cloth. Avoid direct sunlight and perfume contact." },
                { t: "Shipping & Returns", c: "Ships in 2-3 business days. Easy 7-day returns on unstitched products." },
              ].map(a => (
                <details key={a.t} className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-display text-lg">{a.t}</span>
                    <ChevronDown className="w-4 h-4 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.c}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <LotusSeparator className="mt-20" />
        <div className="mt-8">
          <h2 className="font-display text-3xl lg:text-4xl text-center">You May Also Love</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}
