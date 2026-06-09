import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, a as LotusIcon } from "./Layout-Bz-4u8U0.mjs";
import { p as products } from "./router-CqcUiD2V.mjs";
import { M as Minus, P as Plus, X, T as Tag, A as ArrowRight, S as ShoppingBag } from "../_libs/lucide-react.mjs";
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
function CartPage() {
  const [items, setItems] = reactExports.useState(products.slice(0, 3).map((p) => ({
    ...p,
    qty: 1,
    size: "M",
    color: p.colors?.[0]
  })));
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-3 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Your Selection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl mt-2", children: "Shopping Bag" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        items.length,
        " items"
      ] })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyCart, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_400px] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative bg-card rounded-2xl border border-border p-4 flex gap-4 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
          id: item.id
        }, className: "relative w-28 h-36 rounded-xl overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name, className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
            id: item.id
          }, className: "font-display text-lg hover:text-primary block mt-1 truncate", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-full border", style: {
                backgroundColor: item.color
              } }),
              " ",
              item.color
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Size ",
              item.size
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center border border-border rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setItems(items.map((i) => i.id === item.id ? {
                ...i,
                qty: Math.max(1, i.qty - 1)
              } : i)), className: "w-9 h-9 inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm", children: item.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setItems(items.map((i) => i.id === item.id ? {
                ...i,
                qty: i.qty + 1
              } : i)), className: "w-9 h-9 inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl", children: [
              "₹",
              (item.price * item.qty).toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setItems(items.filter((i) => i.id !== item.id)), className: "absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-accent inline-flex items-center justify-center text-muted-foreground hover:text-foreground", "aria-label": "Remove", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
      ] }, item.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-card rounded-2xl border border-border p-6 shadow-soft overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute -top-4 -right-4 w-24 h-24 text-primary/10", strokeWidth: 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Have a coupon?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "ENTER CODE", className: "flex-1 h-11 px-4 rounded-full border border-border bg-background text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-primary/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-5 h-11 rounded-full bg-foreground text-background text-sm hover:bg-luxe transition", children: "Apply" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Subtotal", value: `₹${subtotal.toLocaleString("en-IN")}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Shipping", value: shipping === 0 ? "Free" : `₹${shipping}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Tax (5%)", value: `₹${tax.toLocaleString("en-IN")}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border my-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Total", value: `₹${total.toLocaleString("en-IN")}`, bold: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-6 w-full h-14 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.02] transition inline-flex items-center justify-center gap-2", children: [
            "Proceed to Checkout ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-center text-muted-foreground", children: "Secure 256-bit encrypted checkout" })
        ] })
      ] })
    ] })
  ] }) });
}
function Row({
  label,
  value,
  bold
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between ${bold ? "font-display text-lg text-foreground" : "text-foreground/80"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: value })
  ] });
}
function EmptyCart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-32 h-32 mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute inset-0 w-full h-full text-primary/30", strokeWidth: 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "absolute inset-0 m-auto w-10 h-10 text-primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mt-6", children: "Your bag awaits its first treasure" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Discover heirloom pieces curated just for you." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "mt-8 inline-flex items-center gap-2 px-7 h-13 py-3 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.03] transition", children: [
      "Browse Collection ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
    ] })
  ] });
}
export {
  CartPage as component
};
