import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, b as LotusWatermark, c as LotusSeparator } from "./Layout-Bz-4u8U0.mjs";
import { P as ProductCard } from "./ProductCard-BMSrK5ek.mjs";
import { p as products } from "./router-CqcUiD2V.mjs";
import { a as SlidersHorizontal, C as ChevronDown, X } from "../_libs/lucide-react.mjs";
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
const filters = [{
  title: "Category",
  options: ["Sarees", "Lehengas", "Kurtis", "Salwar Suits", "Gowns", "Bridal"]
}, {
  title: "Occasion",
  options: ["Wedding", "Reception", "Festival", "Party", "Casual"]
}, {
  title: "Color",
  options: ["Pink", "Red", "Gold", "Black", "Pastel", "Ivory"]
}, {
  title: "Size",
  options: ["XS", "S", "M", "L", "XL", "XXL"]
}, {
  title: "Fabric",
  options: ["Silk", "Chanderi", "Banarasi", "Georgette", "Net"]
}];
function ShopPage() {
  const [sort, setSort] = reactExports.useState("Latest");
  const [open, setOpen] = reactExports.useState(false);
  const sorted = reactExports.useMemo(() => {
    const arr = [...products];
    if (sort === "Price: Low to High") arr.sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") arr.sort((a, b) => b.price - a.price);
    if (sort === "Popularity") arr.sort((a, b) => b.reviews - a.reviews);
    return arr;
  }, [sort]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-soft py-14 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "-top-20 -right-20 w-80 h-80", opacity: 0.05 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-xs text-muted-foreground tracking-wider uppercase flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }),
          " / ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Shop" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl lg:text-6xl mt-4", children: "The Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl", children: "Heirloom craftsmanship meets contemporary couture. Filter to find your moment." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-8 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(true), className: "lg:hidden inline-flex items-center gap-2 px-4 h-11 rounded-full border border-border bg-card text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
          " Filters"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          sorted.length,
          " products"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Sort by" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "appearance-none pl-4 pr-10 h-11 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30", children: ["Latest", "Price: Low to High", "Price: High to Low", "Popularity"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[260px_1fr] gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersPanel, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5", children: sorted.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusSeparator, {})
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/40", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-background p-6 overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: "Filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "w-9 h-9 rounded-full hover:bg-accent inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersPanel, {})
      ] })
    ] })
  ] });
}
function FiltersPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-3", children: "Price Range" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 500, max: 5e4, defaultValue: 25e3, className: "w-full accent-[var(--primary)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹50,000" })
      ] })
    ] }),
    filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { open: true, className: "border-t border-border pt-4 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-center justify-between cursor-pointer list-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 transition group-open:rotate-180" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: f.options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-foreground/80 cursor-pointer hover:text-primary transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "accent-[var(--primary)] w-4 h-4 rounded" }),
        o
      ] }) }, o)) })
    ] }, f.title))
  ] });
}
export {
  ShopPage as component
};
