import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { n as navCategories } from "./router-CqcUiD2V.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { j as Search, U as User, H as Heart, S as ShoppingBag, k as Menu, X, l as Mail, m as Phone, c as MapPin, I as Instagram, F as Facebook, n as MessageCircle, o as ArrowUp } from "../_libs/lucide-react.mjs";
const logo = "/assets/logo-Bx7Iod69.png";
const announcements = [
  "🚚 Free Shipping Above ₹999",
  "🔄 Easy 7-Day Returns",
  "💳 Secure Payments",
  "📦 Cash On Delivery Available"
];
function Header() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-luxe text-primary-foreground text-xs md:text-[13px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-[shimmer_30s_linear_infinite] whitespace-nowrap py-2", children: [...announcements, ...announcements, ...announcements].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-8 tracking-wide", children: a }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 shrink-0 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logo,
              alt: "Mounika's Wardrobe",
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl md:text-2xl text-foreground leading-none", children: [
            "Mounika's ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-luxe", children: "Wardrobe" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex flex-1 max-w-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "search",
              placeholder: "Search sarees, lehengas, bridal collection...",
              className: "w-full h-11 pl-11 pr-4 rounded-full bg-white/80 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm placeholder:text-muted-foreground"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 md:gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { label: "Account", to: "/account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { label: "Wishlist", to: "/wishlist", badge: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { label: "Cart", to: "/cart", badge: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Menu",
              onClick: () => setMobileOpen(true),
              className: "lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent transition",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center justify-center gap-1 py-2 border-t border-border/60", children: navCategories.map((c) => {
        const isSale = c === "Sale";
        const to = c === "Home" ? "/" : "/shop";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to,
            className: `relative px-4 py-2 text-sm tracking-wide rounded-full transition group ${isSale ? "text-[color:var(--sale)] font-medium" : "text-foreground/80 hover:text-primary"}`,
            children: [
              c,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-1/2 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-2/3 -translate-x-1/2" })
            ]
          },
          c
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 bg-foreground/40 z-40",
          onClick: () => setMobileOpen(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.aside,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { type: "spring", stiffness: 280, damping: 30 },
          className: "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-background z-50 shadow-luxe p-6 overflow-y-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-luxe", children: "Menu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMobileOpen(false), className: "w-9 h-9 rounded-full hover:bg-accent inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative block mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search...", className: "w-full h-11 pl-11 pr-4 rounded-full bg-accent/40 border border-border text-sm focus:outline-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: navCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: c === "Home" ? "/" : "/shop",
                onClick: () => setMobileOpen(false),
                className: "block px-4 py-3 rounded-xl hover:bg-accent transition text-foreground/90",
                children: c
              }
            ) }, c)) })
          ]
        }
      )
    ] }) })
  ] });
}
function IconBtn({
  children,
  to,
  label,
  badge
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to,
      "aria-label": label,
      className: "relative inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent transition group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:scale-110", children }),
        badge ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-medium inline-flex items-center justify-center", children: badge }) : null
      ]
    }
  );
}
function LotusIcon({ className = "", strokeWidth = 1.5 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className, fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 18 C46 32 46 50 50 64 C54 50 54 32 50 18 Z", stroke: "currentColor", strokeWidth, strokeLinejoin: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 64 C40 58 32 46 30 30 C36 38 44 50 50 64 Z", stroke: "currentColor", strokeWidth, strokeLinejoin: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 64 C60 58 68 46 70 30 C64 38 56 50 50 64 Z", stroke: "currentColor", strokeWidth, strokeLinejoin: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 66 C36 64 22 56 16 40 C20 54 30 64 50 66 Z", stroke: "currentColor", strokeWidth, strokeLinejoin: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 66 C64 64 78 56 84 40 C80 54 70 64 50 66 Z", stroke: "currentColor", strokeWidth, strokeLinejoin: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 60 C28 70 40 72 50 70 C60 72 72 70 82 60", stroke: "currentColor", strokeWidth, strokeLinecap: "round" })
  ] });
}
function LotusWatermark({
  className = "",
  opacity = 0.05,
  spin = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `pointer-events-none absolute ${spin ? "animate-lotus-spin" : ""} ${className}`,
      style: { opacity },
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "w-full h-full text-primary", strokeWidth: 0.6 })
    }
  );
}
function FloatingPetals({ count = 8 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden z-0", "aria-hidden": "true", children: Array.from({ length: count }).map((_, i) => {
    const left = (i * 13 + 7) % 100;
    const size = 14 + i * 7 % 24;
    const delay = i * 2.3 % 18;
    const duration = 14 + i * 3 % 10;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute text-primary/30",
        style: {
          left: `${left}%`,
          bottom: -40,
          width: size,
          height: size,
          animation: `float-petal ${duration}s linear ${delay}s infinite`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "w-full h-full", strokeWidth: 1 })
      },
      i
    );
  }) });
}
function LotusSeparator({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-center gap-4 py-8 ${className}`, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-24 bg-gradient-to-r from-transparent to-primary/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "w-8 h-8 text-primary/60", strokeWidth: 1.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-24 bg-gradient-to-l from-transparent to-primary/40" })
  ] });
}
const sections = [
  {
    title: "Shop",
    links: ["New Arrivals", "Sarees", "Lehengas", "Kurtis", "Bridal Collection", "Sale"]
  },
  {
    title: "Customer Care",
    links: ["Contact Us", "Shipping Info", "Returns & Exchange", "Size Guide", "FAQs", "Track Order"]
  },
  {
    title: "About",
    links: ["Our Story", "Sustainability", "Press", "Careers", "Stores", "Blog"]
  },
  {
    title: "Policies",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden bg-foreground text-background mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "-bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px]", opacity: 0.04 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LotusWatermark, { className: "top-10 right-10 w-64 h-64", opacity: 0.03, spin: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "w-8 h-8 text-white", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl", children: "Mounika's Wardrobe" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/70 max-w-sm text-sm leading-relaxed", children: "Elegance woven into every thread. A premium destination for luxury Indian ethnic wear, crafted with love and timeless artistry." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-background/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:mounikaswardrobe@gmail.com", className: "flex items-center gap-2 hover:text-secondary transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
              " mounikaswardrobe@gmail.com"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+919676591606", className: "flex items-center gap-2 hover:text-secondary transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              " +91 96765 91606"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
              " Hyderabad, India"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 pt-2", children: [
            { Icon: Instagram, href: "https://www.instagram.com/mounikaswardrobe", label: "Instagram" },
            { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590799374612", label: "Facebook" },
            { Icon: MessageCircle, href: "https://wa.me/919676591606", label: "WhatsApp" }
          ].map(({ Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": label,
              className: "inline-flex items-center justify-center w-10 h-10 rounded-full border border-background/20 hover:bg-luxe hover:border-transparent transition",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
            },
            label
          )) })
        ] }),
        sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-4", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm text-background/70", children: s.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-secondary transition story-link", children: l }) }, l)) })
        ] }, s.title))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Mounika's Wardrobe. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
          "Crafted with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "♡" }),
          " for timeless elegance"
        ] })
      ] })
    ] })
  ] });
}
function FloatingActions() {
  const [show, setShow] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? h.scrollTop / total * 100 : 0;
      setProgress(p);
      setShow(h.scrollTop > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-luxe transition-[width] duration-150", style: { width: `${progress}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://wa.me/919676591606",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "Chat on WhatsApp",
        className: "fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.button,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "Back to top",
        className: "fixed bottom-24 right-6 z-40 inline-flex items-center justify-center w-12 h-12 rounded-full bg-luxe text-white shadow-luxe hover:scale-110 transition",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-5 h-5" })
      }
    ) })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingPetals, { count: 6 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActions, {})
  ] });
}
export {
  Layout as L,
  LotusIcon as a,
  LotusWatermark as b,
  LotusSeparator as c
};
