import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, ShoppingBag, X, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { LotusIcon } from "@/components/Lotus";
import { products } from "@/lib/mock-data";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — Mounika's Wardrobe" }] }),
  component: WishlistPage,
});

function WishlistPage() {
  const [items, setItems] = useState(products.slice(2, 8));

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Saved for Later</p>
            <h1 className="font-display text-4xl lg:text-5xl mt-2">My Wishlist</h1>
          </div>
          <p className="text-sm text-muted-foreground">{items.length} pieces saved</p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="relative w-32 h-32 mx-auto">
              <LotusIcon className="absolute inset-0 w-full h-full text-primary/30" strokeWidth={1} />
              <Heart className="absolute inset-0 m-auto w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl mt-6">Your wishlist is empty</h2>
            <p className="mt-3 text-muted-foreground">Save your favourites to view them anytime.</p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 px-7 h-13 py-3 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.03] transition">
              Discover <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map(p => (
              <li key={p.id} className="relative bg-card rounded-2xl border border-border shadow-soft hover:shadow-luxe transition overflow-hidden group">
                <Link to="/product/$id" params={{ id: p.id }} className="relative block aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <LotusIcon className="absolute top-3 right-3 w-10 h-10 text-white/50" strokeWidth={0.9} />
                </Link>
                <button onClick={() => setItems(items.filter(i => i.id !== p.id))} className="absolute top-3 left-3 w-9 h-9 rounded-full glass inline-flex items-center justify-center hover:text-[color:var(--sale)]" aria-label="Remove">
                  <X className="w-4 h-4" />
                </button>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.category}</p>
                  <h3 className="font-display text-lg mt-1">{p.name}</h3>
                  <p className="mt-1 font-display text-base">₹{p.price.toLocaleString("en-IN")}</p>
                  <button className="mt-4 w-full h-11 rounded-full bg-luxe text-white inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition">
                    <ShoppingBag className="w-4 h-4" /> Move to Bag
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}
