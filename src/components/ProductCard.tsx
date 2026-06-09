import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/mock-data";
import { LotusIcon } from "./Lotus";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/60 hover:shadow-luxe transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <Link to="/product/$id" params={{ id: product.id }} className="block relative aspect-[3/4] overflow-hidden bg-accent/30">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* corner lotus decoration */}
        <LotusIcon className="absolute top-2 right-2 w-10 h-10 text-white/40 pointer-events-none" strokeWidth={0.8} />

        {/* badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-foreground text-background">New</span>
          )}
          {discount > 0 && (
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-[color:var(--sale)] text-white">-{discount}%</span>
          )}
          {product.badge && (
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-luxe text-white">{product.badge}</span>
          )}
        </div>

        {/* hover actions */}
        <div className="absolute right-3 top-14 flex flex-col gap-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          <button aria-label="Wishlist" className="w-9 h-9 rounded-full glass shadow-soft inline-flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition">
            <Heart className="w-4 h-4" />
          </button>
          <button aria-label="Quick view" className="w-9 h-9 rounded-full glass shadow-soft inline-flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* add to cart slide-up */}
        <div className="absolute inset-x-3 bottom-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full h-10 rounded-full bg-foreground text-background text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-luxe transition">
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </Link>

      {/* meta */}
      <div className="p-4 space-y-1.5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{product.category}</p>
        <h3 className="font-display text-base leading-snug text-foreground line-clamp-1">
          <Link to="/product/$id" params={{ id: product.id }} className="hover:text-primary transition">{product.name}</Link>
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="w-3.5 h-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
          <span className="text-foreground/80">{product.rating.toFixed(1)}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-display text-lg text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
          {product.originalPrice && (
            <span className="text-xs line-through text-muted-foreground">₹{product.originalPrice.toLocaleString("en-IN")}</span>
          )}
          {discount > 0 && (
            <span className="text-xs text-[color:var(--sale)] font-medium">{discount}% OFF</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
