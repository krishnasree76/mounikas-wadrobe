import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, b as LotusWatermark, a as LotusIcon, c as LotusSeparator } from "./Layout-Bz-4u8U0.mjs";
import { P as ProductCard } from "./ProductCard-BMSrK5ek.mjs";
import { c as categoriesData, p as products, t as testimonials, i as instagramPosts } from "./router-CqcUiD2V.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { f as Sparkles, A as ArrowRight, G as Gem, d as Star, g as Truck, R as RotateCcw, h as Shield, i as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const saree1 = "/assets/saree1-drS5FkEl.png";
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Categories, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Trending, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewArrivals, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramGallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Newsletter, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "-top-32 -right-32 w-[700px] h-[700px]", opacity: 0.06, spin: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "-bottom-40 -left-40 w-[600px] h-[600px]", opacity: 0.05 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, className: "relative z-10 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.2
        }, className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-primary mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
          " The Festive Edit 2026"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-foreground", children: [
          "Mounika's",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-luxe italic", children: "Wardrobe" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-light tracking-wide", children: "Elegance woven into every thread. Discover heirloom sarees, regal lehengas and bridal couture, crafted with timeless artistry." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "group inline-flex items-center gap-2 px-7 h-14 rounded-full bg-luxe text-white text-sm tracking-wide shadow-luxe hover:shadow-[0_25px_70px_-15px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-all hover:scale-[1.03]", children: [
            "Shop Collection",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "inline-flex items-center gap-2 px-7 h-14 rounded-full border border-foreground/20 text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition", children: "Explore New Arrivals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0", children: [{
          n: "500+",
          l: "Designs"
        }, {
          n: "12K+",
          l: "Happy Women"
        }, {
          n: "4.9★",
          l: "Rated"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-primary", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-1", children: s.l })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.92
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1,
        delay: 0.2
      }, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-[3rem] bg-luxe opacity-20 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full rounded-[2.5rem] overflow-hidden shadow-luxe border border-white/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: saree1, alt: "Mounika's Wardrobe luxury ethnic collection", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute top-6 right-6 w-16 h-16 text-white/70", strokeWidth: 1 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.8
        }, className: "absolute -bottom-6 -left-6 lg:-left-12 glass rounded-2xl p-4 shadow-luxe flex items-center gap-3 max-w-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-luxe inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Bridal Couture" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base", children: "Hand-embroidered" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1
        }, className: "absolute -top-6 -right-6 lg:-right-10 glass rounded-2xl px-4 py-3 shadow-luxe", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 text-[color:var(--gold)]", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Loved by 12,000+ women" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
      y: [0, 10, 0]
    }, transition: {
      duration: 2,
      repeat: Infinity
    }, className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2", children: [
      "Scroll",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-10 bg-gradient-to-b from-primary to-transparent" })
    ] })
  ] });
}
function Marquee() {
  const items = [{
    Icon: Truck,
    t: "Free Shipping ₹999+"
  }, {
    Icon: RotateCcw,
    t: "Easy 7-Day Returns"
  }, {
    Icon: Shield,
    t: "100% Authentic"
  }, {
    Icon: Gem,
    t: "Handcrafted Luxury"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6", children: items.map(({
    Icon,
    t
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 justify-center lg:justify-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm tracking-wide text-foreground/80", children: t })
  ] }, t)) }) });
}
function Categories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "top-20 -left-20 w-96 h-96", opacity: 0.04 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Curated Categories", title: "Shop by Category", subtitle: "From timeless drapes to regal ensembles — find your perfect look." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12", children: categoriesData.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i % 4 * 0.08
      }, className: "group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-luxe transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "block w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute top-3 right-3 w-10 h-10 text-white/60", strokeWidth: 0.9 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute bottom-3 left-3 w-8 h-8 text-white/30", strokeWidth: 0.8 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.25em] opacity-80", children: [
            c.count,
            " pieces"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mt-1", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-2 text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all", children: [
            "Explore ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }) }, c.name)) })
    ] })
  ] });
}
function Trending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Editor's Pick" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl mt-2", children: "Trending This Season" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all", children: [
        "View all ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: products.slice(0, 8).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
  ] }) });
}
function FeaturedBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] min-h-[420px] grid lg:grid-cols-2 shadow-luxe", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80", alt: "Luxury collection", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "-bottom-20 -right-20 w-96 h-96 text-white", opacity: 0.08 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-10 lg:p-16 text-white flex flex-col justify-center max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-secondary", children: "New Drop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl mt-3 leading-tight", children: [
        "The New ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-secondary", children: "Luxury" }),
        " Collection"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/80 max-w-md", children: "Limited-edition ensembles, woven by master artisans. Discover pieces destined to be heirlooms." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "mt-8 inline-flex items-center gap-2 px-7 h-14 rounded-full bg-white text-foreground text-sm tracking-wide w-fit hover:bg-luxe hover:text-white transition group", children: [
        "Shop Now ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
      ] })
    ] })
  ] }) }) });
}
function NewArrivals() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 bg-soft overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "bottom-10 -right-20 w-80 h-80", opacity: 0.05 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Just In", title: "New Arrivals", subtitle: "Fresh from the loom — the latest editions to grace our boutique." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 columns-2 lg:columns-3 gap-5 [column-fill:_balance]", children: products.slice(4, 13).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i % 6 * 0.05
      }, className: "mb-5 break-inside-avoid group relative rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-luxe transition", style: {
        aspectRatio: i % 3 === 0 ? "3/5" : i % 3 === 1 ? "3/4" : "4/5"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: {
        id: p.id
      }, className: "block w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.25em] opacity-80", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-1", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-1 opacity-90", children: [
            "₹",
            p.price.toLocaleString("en-IN")
          ] })
        ] })
      ] }) }, p.id)) })
    ] })
  ] });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px]", opacity: 0.04 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Words From Our Family", title: "Loved by Women Across India", subtitle: "Real stories from real women who chose Mounika's Wardrobe." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "relative glass rounded-2xl p-6 shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute top-3 right-3 w-10 h-10 text-primary/15", strokeWidth: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-[color:var(--gold)] mb-3", children: Array.from({
          length: t.rating
        }).map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-current" }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/80 leading-relaxed italic", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.avatar, alt: t.name, className: "w-11 h-11 rounded-full object-cover ring-2 ring-primary/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.location })
          ] })
        ] })
      ] }, t.name)) })
    ] })
  ] });
}
function InstagramGallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 bg-accent/30 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "@mounikaswardrobe", title: "Follow Our Journey", subtitle: "Tag #MounikasWardrobe to be featured." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-3", children: instagramPosts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/mounikaswardrobe", target: "_blank", rel: "noreferrer", className: "group relative aspect-square rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: "Instagram post", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-luxe opacity-0 group-hover:opacity-80 transition flex items-center justify-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 tracking-[0.2em] uppercase", children: "Shop the Look" })
      ] }) })
    ] }, p.id)) })
  ] }) });
}
function Newsletter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl rounded-[2.5rem] bg-luxe overflow-hidden shadow-luxe p-10 lg:p-16 text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "-top-20 -left-20 w-96 h-96 text-white", opacity: 0.12, spin: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "-bottom-32 -right-20 w-96 h-96 text-white", opacity: 0.1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "w-12 h-12 mx-auto text-white", strokeWidth: 1.2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] mt-4 opacity-80", children: "Stay In The Loop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl mt-3", children: "Join the Mounika's Wardrobe Family" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl mx-auto opacity-85", children: "Be the first to discover new arrivals, private sales and exclusive bridal previews." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "Enter your email", className: "flex-1 h-13 px-5 py-3.5 rounded-full bg-white/95 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-7 py-3.5 rounded-full bg-foreground text-white font-medium tracking-wide hover:bg-background hover:text-foreground transition", children: "Subscribe" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusSeparator, { className: "mt-12" })
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, className: "text-center max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl mt-3 text-foreground", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: subtitle })
  ] });
}
export {
  HomePage as component
};
