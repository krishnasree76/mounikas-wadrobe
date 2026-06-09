import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import { Layout } from "@/components/Layout";
import { LotusIcon } from "@/components/Lotus";
import { products } from "@/lib/mock-data";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Mounika's Wardrobe" }] }),
  component: CartPage,
});

function CartPage() {
  const [items, setItems] = useState(
    products.slice(0, 3).map(p => ({ ...p, qty: 1, size: "M", color: p.colors?.[0] }))
  );

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Your Selection</p>
            <h1 className="font-display text-4xl lg:text-5xl mt-2">Shopping Bag</h1>
          </div>
          <p className="text-sm text-muted-foreground">{items.length} items</p>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid lg:grid-cols-[1fr_400px] gap-10">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="relative bg-card rounded-2xl border border-border p-4 flex gap-4 shadow-soft">
                  <Link to="/product/$id" params={{ id: item.id }} className="relative w-28 h-36 rounded-xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{item.category}</p>
                    <Link to="/product/$id" params={{ id: item.id }} className="font-display text-lg hover:text-primary block mt-1 truncate">{item.name}</Link>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full border" style={{ backgroundColor: item.color }} /> {item.color}
                      </span>
                      <span>Size {item.size}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                      <div className="inline-flex items-center border border-border rounded-full">
                        <button onClick={() => setItems(items.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))} className="w-9 h-9 inline-flex items-center justify-center"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-8 text-center text-sm">{item.qty}</span>
                        <button onClick={() => setItems(items.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))} className="w-9 h-9 inline-flex items-center justify-center"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                      <p className="font-display text-xl">₹{(item.price * item.qty).toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                  <button onClick={() => setItems(items.filter(i => i.id !== item.id))} className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-accent inline-flex items-center justify-center text-muted-foreground hover:text-foreground" aria-label="Remove">
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>

            <aside className="space-y-5">
              <div className="relative bg-card rounded-2xl border border-border p-6 shadow-soft overflow-hidden">
                <LotusIcon className="absolute -top-4 -right-4 w-24 h-24 text-primary/10" strokeWidth={1} />
                <div className="flex items-center gap-2 text-sm">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="font-medium">Have a coupon?</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <input placeholder="ENTER CODE" className="flex-1 h-11 px-4 rounded-full border border-border bg-background text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <button className="px-5 h-11 rounded-full bg-foreground text-background text-sm hover:bg-luxe transition">Apply</button>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
                <h3 className="font-display text-xl mb-4">Order Summary</h3>
                <dl className="space-y-3 text-sm">
                  <Row label="Subtotal" value={`₹${subtotal.toLocaleString("en-IN")}`} />
                  <Row label="Shipping" value={shipping === 0 ? "Free" : `₹${shipping}`} />
                  <Row label="Tax (5%)" value={`₹${tax.toLocaleString("en-IN")}`} />
                  <div className="h-px bg-border my-2" />
                  <Row label="Total" value={`₹${total.toLocaleString("en-IN")}`} bold />
                </dl>
                <button className="mt-6 w-full h-14 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.02] transition inline-flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-3 text-xs text-center text-muted-foreground">Secure 256-bit encrypted checkout</p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </Layout>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "font-display text-lg text-foreground" : "text-foreground/80"}`}>
      <dt>{label}</dt><dd>{value}</dd>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="text-center py-20">
      <div className="relative w-32 h-32 mx-auto">
        <LotusIcon className="absolute inset-0 w-full h-full text-primary/30" strokeWidth={1} />
        <ShoppingBag className="absolute inset-0 m-auto w-10 h-10 text-primary" />
      </div>
      <h2 className="font-display text-3xl mt-6">Your bag awaits its first treasure</h2>
      <p className="mt-3 text-muted-foreground">Discover heirloom pieces curated just for you.</p>
      <Link to="/shop" className="mt-8 inline-flex items-center gap-2 px-7 h-13 py-3 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.03] transition">
        Browse Collection <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
