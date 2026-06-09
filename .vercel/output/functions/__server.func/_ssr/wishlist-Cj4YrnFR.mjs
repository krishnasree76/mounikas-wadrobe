import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, a as LotusIcon } from "./Layout-Bz-4u8U0.mjs";
import { p as products } from "./router-CqcUiD2V.mjs";
import { H as Heart, A as ArrowRight, X, S as ShoppingBag } from "../_libs/lucide-react.mjs";
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
function WishlistPage() {
  const [items, setItems] = reactExports.useState(products.slice(2, 8));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-3 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Saved for Later" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl lg:text-5xl mt-2", children: "My Wishlist" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        items.length,
        " pieces saved"
      ] })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-32 h-32 mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute inset-0 w-full h-full text-primary/30", strokeWidth: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "absolute inset-0 m-auto w-10 h-10 text-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mt-6", children: "Your wishlist is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Save your favourites to view them anytime." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "mt-8 inline-flex items-center gap-2 px-7 h-13 py-3 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.03] transition", children: [
        "Discover ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative bg-card rounded-2xl border border-border shadow-soft hover:shadow-luxe transition overflow-hidden group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: {
        id: p.id
      }, className: "relative block aspect-[4/5] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute top-3 right-3 w-10 h-10 text-white/50", strokeWidth: 0.9 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setItems(items.filter((i) => i.id !== p.id)), className: "absolute top-3 left-3 w-9 h-9 rounded-full glass inline-flex items-center justify-center hover:text-[color:var(--sale)]", "aria-label": "Remove", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mt-1", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 font-display text-base", children: [
          "₹",
          p.price.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 w-full h-11 rounded-full bg-luxe text-white inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
          " Move to Bag"
        ] })
      ] })
    ] }, p.id)) })
  ] }) });
}
export {
  WishlistPage as component
};
