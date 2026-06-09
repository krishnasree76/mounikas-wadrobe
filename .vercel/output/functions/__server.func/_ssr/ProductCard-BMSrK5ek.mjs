import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as LotusIcon } from "./Layout-Bz-4u8U0.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { H as Heart, E as Eye, S as ShoppingBag, d as Star } from "../_libs/lucide-react.mjs";
function ProductCard({ product, index = 0 }) {
  const discount = product.originalPrice ? Math.round((product.originalPrice - product.price) / product.originalPrice * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: index % 8 * 0.05 },
      className: "group relative bg-card rounded-2xl overflow-hidden border border-border/60 hover:shadow-luxe transition-all duration-500 hover:-translate-y-1",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: { id: product.id }, className: "block relative aspect-[3/4] overflow-hidden bg-accent/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              loading: "lazy",
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.hoverImage,
              alt: "",
              loading: "lazy",
              className: "absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute top-2 right-2 w-10 h-10 text-white/40 pointer-events-none", strokeWidth: 0.8 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-2", children: [
            product.isNew && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-foreground text-background", children: "New" }),
            discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-[color:var(--sale)] text-white", children: [
              "-",
              discount,
              "%"
            ] }),
            product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-luxe text-white", children: product.badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-3 top-14 flex flex-col gap-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Wishlist", className: "w-9 h-9 rounded-full glass shadow-soft inline-flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Quick view", className: "w-9 h-9 rounded-full glass shadow-soft inline-flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-3 bottom-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full h-10 rounded-full bg-foreground text-background text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-luxe transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
            " Add to Cart"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: product.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base leading-snug text-foreground line-clamp-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: { id: product.id }, className: "hover:text-primary transition", children: product.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-[color:var(--gold)] text-[color:var(--gold)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: product.rating.toFixed(1) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "(",
              product.reviews,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg text-foreground", children: [
              "₹",
              product.price.toLocaleString("en-IN")
            ] }),
            product.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs line-through text-muted-foreground", children: [
              "₹",
              product.originalPrice.toLocaleString("en-IN")
            ] }),
            discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[color:var(--sale)] font-medium", children: [
              discount,
              "% OFF"
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
