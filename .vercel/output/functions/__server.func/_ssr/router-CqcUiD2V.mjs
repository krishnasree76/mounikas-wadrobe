import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DZdXO57b.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mounika's Wardrobe — Luxury Indian Ethnic Wear" },
      { name: "description", content: "Discover premium sarees, lehengas, bridal & festive ethnic wear. Elegance woven into every thread." },
      { property: "og:title", content: "Mounika's Wardrobe — Luxury Indian Ethnic Wear" },
      { property: "og:description", content: "Premium sarees, lehengas & bridal collections, crafted with timeless artistry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./wishlist-Cj4YrnFR.mjs");
const Route$5 = createFileRoute("/wishlist")({
  head: () => ({
    meta: [{
      title: "Wishlist — Mounika's Wardrobe"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./shop-B3Gi_Jev.mjs");
const Route$4 = createFileRoute("/shop")({
  head: () => ({
    meta: [{
      title: "Shop — Mounika's Wardrobe"
    }, {
      name: "description",
      content: "Browse luxury ethnic wear by category, occasion, color and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./cart-DSLBtAKC.mjs");
const Route$3 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Cart — Mounika's Wardrobe"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./account-C1QKXT5U.mjs");
const Route$2 = createFileRoute("/account")({
  head: () => ({
    meta: [{
      title: "My Account — Mounika's Wardrobe"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-adHegx5g.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Mounika's Wardrobe — Luxury Indian Ethnic Fashion"
    }, {
      name: "description",
      content: "Premium sarees, lehengas, bridal collection & festive ethnic wear. Elegance woven into every thread."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const kurti1 = "/assets/kurti1-CtFBV0XZ.png";
const salwar1 = "/assets/salwar1-BmbHAnk-.png";
const gown1 = "/assets/gown1-BvakiY0t.png";
const bridal1 = "/assets/bridal1-Boa_9Utz.png";
const festive1 = "/assets/festive1-CvRa9tHT.png";
const silksaree = "/assets/silksaree-CaMEAlUK.png";
const pastelanarkali = "/assets/pastelanarkali-C7Oq995W.png";
const mirror = "/assets/mirror-BNNt5u9f.png";
const photos = [
  silksaree,
  // Anaisha Banarasi Silk Saree
  bridal1,
  // Padmaja Bridal Lehenga
  kurti1,
  // Ridhima Embroidered Kurti Set
  pastelanarkali,
  // Saanvi Anarkali Suit
  gown1,
  // Aishwarya Wedding Gown
  mirror,
  // Mehr Designer Sharara
  festive1,
  // Tara Festive Silk Saree
  bridal1,
  // Inaya Reception Lehenga
  kurti1,
  // Diya Chanderi Kurti
  bridal1,
  // Naina Royal Bridal Set
  mirror,
  // Aarohi Mirror Work Lehenga
  pastelanarkali
  // Suhana Pastel Anarkali
];
const names = [
  "Anaisha Banarasi Silk Saree",
  "Padmaja Bridal Lehenga",
  "Ridhima Embroidered Kurti Set",
  "Saanvi Anarkali Suit",
  "Aishwarya Wedding Gown",
  "Mehr Designer Sharara",
  "Tara Festive Silk Saree",
  "Inaya Reception Lehenga",
  "Diya Chanderi Kurti",
  "Naina Royal Bridal Set",
  "Aarohi Mirror Work Lehenga",
  "Suhana Pastel Anarkali"
];
const categories = ["Sarees", "Lehengas", "Kurtis", "Salwar Suits", "Gowns", "Bridal"];
const products = Array.from({ length: 16 }, (_, i) => {
  const p = photos[i % photos.length];
  const p2 = photos[(i + 3) % photos.length];
  const price = 2499 + i % 6 * 1500;
  const original = price + 1200 + i % 3 * 800;
  return {
    id: `p-${i + 1}`,
    name: names[i % names.length],
    category: categories[i % categories.length],
    price,
    originalPrice: original,
    rating: 4 + i * 7 % 10 / 10,
    reviews: 28 + i * 13 % 240,
    image: p,
    hoverImage: p2,
    colors: ["#B85AA3", "#D68BC5", "#2D2D2D", "#C9A84C"].slice(
      0,
      3 + i % 2
    ),
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: i % 5 === 0 ? "Bestseller" : i % 7 === 0 ? "Limited" : void 0,
    isNew: i % 4 === 0
  };
});
const categoriesData = [
  {
    name: "Sarees",
    image: silksaree,
    count: 184
  },
  {
    name: "Lehengas",
    image: bridal1,
    count: 96
  },
  {
    name: "Kurtis",
    image: kurti1,
    count: 220
  },
  {
    name: "Salwar Suits",
    image: salwar1,
    count: 142
  },
  {
    name: "Gowns",
    image: gown1,
    count: 78
  },
  {
    name: "Bridal",
    image: bridal1,
    count: 54
  },
  {
    name: "Party Wear",
    image: mirror,
    count: 120
  },
  {
    name: "Festive",
    image: festive1,
    count: 88
  }
];
const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Absolutely stunning craftsmanship. My bridal lehenga was a dream — every stitch felt like art.",
    avatar: "https://i.pravatar.cc/120?img=47"
  },
  {
    name: "Ananya Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Mounika's Wardrobe has become my go-to for festive occasions. The fabrics are luxurious and the fit is perfect.",
    avatar: "https://i.pravatar.cc/120?img=45"
  },
  {
    name: "Kavya Iyer",
    location: "Bengaluru",
    rating: 5,
    text: "The detailing on my reception saree left everyone speechless. Beautiful packaging and even better service.",
    avatar: "https://i.pravatar.cc/120?img=44"
  },
  {
    name: "Meera Krishnan",
    location: "Chennai",
    rating: 5,
    text: "A truly luxurious boutique experience, online. I keep coming back for every special occasion.",
    avatar: "https://i.pravatar.cc/120?img=49"
  }
];
const instagramPosts = [
  { id: "ig-1", image: silksaree },
  { id: "ig-2", image: bridal1 },
  { id: "ig-3", image: kurti1 },
  { id: "ig-4", image: salwar1 },
  { id: "ig-5", image: gown1 },
  { id: "ig-6", image: festive1 },
  { id: "ig-7", image: mirror },
  { id: "ig-8", image: pastelanarkali }
];
const navCategories = [
  "Home",
  "New Arrivals",
  "Sarees",
  "Lehengas",
  "Kurtis",
  "Salwar Suits",
  "Gowns",
  "Bridal",
  "Festive",
  "Sale"
];
const $$splitComponentImporter = () => import("./product._id-DhPKeAvW.mjs");
const $$splitNotFoundComponentImporter = () => import("./product._id-Ds_b-UYf.mjs");
const Route = createFileRoute("/product/$id")({
  head: ({
    params
  }) => {
    const p = products.find((x) => x.id === params.id);
    return {
      meta: [{
        title: `${p?.name ?? "Product"} — Mounika's Wardrobe`
      }, {
        name: "description",
        content: p?.name ?? "Luxury ethnic wear"
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  loader: ({
    params
  }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return {
      product
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WishlistRoute = Route$5.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$6
});
const ShopRoute = Route$4.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$6
});
const CartRoute = Route$3.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$6
});
const AccountRoute = Route$2.update({
  id: "/account",
  path: "/account",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const ProductIdRoute = Route.update({
  id: "/product/$id",
  path: "/product/$id",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AccountRoute,
  CartRoute,
  ShopRoute,
  WishlistRoute,
  ProductIdRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  categoriesData as c,
  instagramPosts as i,
  navCategories as n,
  products as p,
  router as r,
  testimonials as t
};
