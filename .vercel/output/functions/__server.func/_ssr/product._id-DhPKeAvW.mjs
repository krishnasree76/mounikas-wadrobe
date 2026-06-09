import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, a as LotusIcon, c as LotusSeparator } from "./Layout-Bz-4u8U0.mjs";
import { P as ProductCard } from "./ProductCard-BMSrK5ek.mjs";
import { R as Route, p as products } from "./router-CqcUiD2V.mjs";
import { d as Star, M as Minus, P as Plus, S as ShoppingBag, H as Heart, g as Truck, R as RotateCcw, h as Shield, C as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ProductPage() {
  const {
    product
  } = Route.useLoaderData();
  const [color, setColor] = reactExports.useState(product.colors?.[0]);
  const [size, setSize] = reactExports.useState(product.sizes?.[2]);
  const [qty, setQty] = reactExports.useState(1);
  const [activeImg, setActiveImg] = reactExports.useState(0);
  const gallery = [product.image, product.hoverImage, product.image, product.hoverImage];
  const discount = product.originalPrice ? Math.round((product.originalPrice - product.price) / product.originalPrice * 100) : 0;
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-xs text-muted-foreground tracking-wider uppercase flex items-center gap-2 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }),
      " /",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-primary", children: "Shop" }),
      " /",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.category })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse md:flex-row gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-3", children: gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveImg(i), className: `relative w-20 h-24 rounded-xl overflow-hidden border-2 transition ${activeImg === i ? "border-primary shadow-luxe" : "border-transparent opacity-70 hover:opacity-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g, alt: "", className: "absolute inset-0 w-full h-full object-cover" }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden bg-accent/30 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gallery[activeImg], alt: product.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute top-4 right-4 w-14 h-14 text-white/60", strokeWidth: 1 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: product.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl mt-3", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-[color:var(--gold)]", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-4 h-4 ${i < Math.round(product.rating) ? "fill-current" : ""}` }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/70", children: [
            product.rating.toFixed(1),
            " (",
            product.reviews,
            " reviews)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl", children: [
            "₹",
            product.price.toLocaleString("en-IN")
          ] }),
          product.originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "line-through text-muted-foreground", children: [
            "₹",
            product.originalPrice.toLocaleString("en-IN")
          ] }),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[color:var(--sale)] font-medium text-sm", children: [
            discount,
            "% OFF"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[color:var(--success)] mt-1", children: "Inclusive of all taxes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3", children: "Color" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: product.colors?.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setColor(c), className: `relative w-10 h-10 rounded-full ring-offset-2 transition ${color === c ? "ring-2 ring-primary" : ""}`, style: {
              backgroundColor: c
            }, "aria-label": c }, c)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs text-primary underline", children: "Size guide" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: product.sizes?.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSize(s), className: `min-w-12 h-12 px-4 rounded-full border text-sm transition ${size === s ? "bg-foreground text-background border-foreground" : "border-border hover:border-primary"}`, children: s }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3", children: "Quantity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center border border-border rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(Math.max(1, qty - 1)), className: "w-11 h-11 inline-flex items-center justify-center hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center font-medium", children: qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(qty + 1), className: "w-11 h-11 inline-flex items-center justify-center hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex-1 min-w-[200px] h-14 rounded-full bg-foreground text-background inline-flex items-center justify-center gap-2 hover:bg-luxe transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
            " Add to Cart"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 min-w-[200px] h-14 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.02] transition", children: "Buy Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Wishlist", className: "w-14 h-14 rounded-full border border-border inline-flex items-center justify-center hover:text-primary hover:border-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-3 text-xs", children: [{
          Icon: Truck,
          t: "Free Shipping ₹999+"
        }, {
          Icon: RotateCcw,
          t: "Easy Returns"
        }, {
          Icon: Shield,
          t: "Secure Payment"
        }].map(({
          Icon,
          t
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 p-4 rounded-2xl bg-accent/40 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: t })
        ] }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 divide-y divide-border border-y border-border", children: [{
          t: "Description",
          c: "An exquisite piece from the Mounika's Wardrobe couture line — hand-loomed by master artisans using time-honoured techniques. Tailored for the modern woman who values heritage and craft."
        }, {
          t: "Fabric Details",
          c: "Pure silk with zari thread work. Lined with soft cotton for comfort."
        }, {
          t: "Care Instructions",
          c: "Dry clean only. Store rolled in muslin cloth. Avoid direct sunlight and perfume contact."
        }, {
          t: "Shipping & Returns",
          c: "Ships in 2-3 business days. Easy 7-day returns on unstitched products."
        }].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-center justify-between cursor-pointer list-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: a.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 transition group-open:rotate-180" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: a.c })
        ] }, a.t)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusSeparator, { className: "mt-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl text-center", children: "You May Also Love" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-5", children: related.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
    ] })
  ] }) });
}
export {
  ProductPage as component
};
