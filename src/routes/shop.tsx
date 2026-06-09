import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { LotusSeparator, LotusWatermark } from "@/components/Lotus";
import { products } from "@/lib/mock-data";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [{ title: "Shop — Mounika's Wardrobe" }, { name: "description", content: "Browse luxury ethnic wear by category, occasion, color and more." }] }),
  component: ShopPage,
});

const filters = [
  { title: "Category", options: ["Sarees", "Lehengas", "Kurtis", "Salwar Suits", "Gowns", "Bridal"] },
  { title: "Occasion", options: ["Wedding", "Reception", "Festival", "Party", "Casual"] },
  { title: "Color", options: ["Pink", "Red", "Gold", "Black", "Pastel", "Ivory"] },
  { title: "Size", options: ["XS", "S", "M", "L", "XL", "XXL"] },
  { title: "Fabric", options: ["Silk", "Chanderi", "Banarasi", "Georgette", "Net"] },
];

function ShopPage() {
  const [sort, setSort] = useState("Latest");
  const [open, setOpen] = useState(false);

  const sorted = useMemo(() => {
    const arr = [...products];
    if (sort === "Price: Low to High") arr.sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") arr.sort((a, b) => b.price - a.price);
    if (sort === "Popularity") arr.sort((a, b) => b.reviews - a.reviews);
    return arr;
  }, [sort]);

  return (
    <Layout>
      <section className="relative bg-soft py-14 overflow-hidden">
        <LotusWatermark className="-top-20 -right-20 w-80 h-80" opacity={0.05} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="text-xs text-muted-foreground tracking-wider uppercase flex items-center gap-2">
            <Link to="/" className="hover:text-primary">Home</Link> / <span className="text-foreground">Shop</span>
          </nav>
          <h1 className="font-display text-5xl lg:text-6xl mt-4">The Collection</h1>
          <p className="mt-3 text-muted-foreground max-w-xl">Heirloom craftsmanship meets contemporary couture. Filter to find your moment.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <button onClick={() => setOpen(true)} className="lg:hidden inline-flex items-center gap-2 px-4 h-11 rounded-full border border-border bg-card text-sm">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <p className="text-sm text-muted-foreground">{sorted.length} products</p>
          <label className="inline-flex items-center gap-3 text-sm">
            <span className="text-muted-foreground">Sort by</span>
            <div className="relative">
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none pl-4 pr-10 h-11 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                {["Latest", "Price: Low to High", "Price: High to Low", "Popularity"].map(s => <option key={s}>{s}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
            </div>
          </label>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="hidden lg:block">
            <FiltersPanel />
          </aside>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {sorted.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
        <LotusSeparator />
      </section>

      {/* mobile filters drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-background p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl">Filters</h3>
              <button onClick={() => setOpen(false)} className="w-9 h-9 rounded-full hover:bg-accent inline-flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>
            <FiltersPanel />
          </div>
        </div>
      )}
    </Layout>
  );
}

function FiltersPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Price Range</h4>
        <input type="range" min={500} max={50000} defaultValue={25000} className="w-full accent-[var(--primary)]" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>₹500</span><span>₹50,000</span></div>
      </div>
      {filters.map(f => (
        <details key={f.title} open className="border-t border-border pt-4 group">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">{f.title}</span>
            <ChevronDown className="w-4 h-4 transition group-open:rotate-180" />
          </summary>
          <ul className="mt-3 space-y-2">
            {f.options.map(o => (
              <li key={o}>
                <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer hover:text-primary transition">
                  <input type="checkbox" className="accent-[var(--primary)] w-4 h-4 rounded" />
                  {o}
                </label>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
