import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, a as LotusIcon } from "./Layout-Bz-4u8U0.mjs";
import { U as User, b as Package, H as Heart, c as MapPin, d as Star, e as Settings, L as LogOut } from "../_libs/lucide-react.mjs";
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
import "./router-CqcUiD2V.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const tabs = [{
  key: "profile",
  label: "Profile",
  Icon: User
}, {
  key: "orders",
  label: "Orders",
  Icon: Package
}, {
  key: "wishlist",
  label: "Wishlist",
  Icon: Heart
}, {
  key: "addresses",
  label: "Addresses",
  Icon: MapPin
}, {
  key: "reviews",
  label: "Reviews",
  Icon: Star
}, {
  key: "settings",
  label: "Settings",
  Icon: Settings
}];
const orders = [{
  id: "MW-10284",
  date: "May 22, 2026",
  items: 2,
  total: 8499,
  status: "Delivered"
}, {
  id: "MW-10231",
  date: "Apr 14, 2026",
  items: 1,
  total: 12499,
  status: "Delivered"
}, {
  id: "MW-10198",
  date: "Mar 02, 2026",
  items: 3,
  total: 21450,
  status: "Delivered"
}];
function AccountPage() {
  const [active, setActive] = reactExports.useState("profile");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[280px_1fr] gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "bg-card border border-border rounded-2xl p-6 shadow-soft h-fit relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute -top-6 -right-6 w-24 h-24 text-primary/10", strokeWidth: 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-luxe inline-flex items-center justify-center text-white font-display text-xl", children: "M" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg", children: "Welcome back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Mounika" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-6 space-y-1", children: [
        tabs.map(({
          key,
          label,
          Icon
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(key), className: `w-full flex items-center gap-3 px-3 h-11 rounded-xl text-sm transition ${active === key ? "bg-luxe text-white shadow-soft" : "hover:bg-accent text-foreground/80"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
          " ",
          label
        ] }, key)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full flex items-center gap-3 px-3 h-11 rounded-xl text-sm text-[color:var(--sale)] hover:bg-accent transition mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
          " Sign Out"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-soft relative overflow-hidden min-h-[500px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "absolute -bottom-10 -right-10 w-40 h-40 text-primary/5", strokeWidth: 1 }),
      active === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsx(Profile, {}),
      active === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsx(Orders, {}),
      active === "wishlist" && /* @__PURE__ */ jsxRuntimeExports.jsx(WishlistTab, {}),
      active === "addresses" && /* @__PURE__ */ jsxRuntimeExports.jsx(Addresses, {}),
      active === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsx(Reviews, {}),
      active === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsTab, {})
    ] })
  ] }) }) });
}
function Profile() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Profile Details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage your personal information." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid md:grid-cols-2 gap-5", children: [{
      l: "Full Name",
      v: "Mounika Reddy"
    }, {
      l: "Email",
      v: "mounikaswardrobe@gmail.com"
    }, {
      l: "Phone",
      v: "+91 96765 91606"
    }, {
      l: "Date of Birth",
      v: "12 March, 1994"
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: f.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: f.v, className: "mt-2 w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" })
    ] }, f.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-8 px-7 h-12 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.02] transition", children: "Save Changes" })
  ] });
}
function Orders() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "My Orders" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Track and review your purchases." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between p-5 rounded-xl border border-border hover:shadow-soft transition flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg", children: o.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          o.date,
          " · ",
          o.items,
          " items"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-[color:var(--success)]/10 text-[color:var(--success)] text-xs font-medium", children: o.status }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg", children: [
        "₹",
        o.total.toLocaleString("en-IN")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-sm text-primary hover:underline", children: "View Details" })
    ] }, o.id)) })
  ] });
}
function WishlistTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "My Wishlist" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Your saved pieces." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wishlist", className: "mt-6 inline-flex items-center gap-2 px-6 h-12 rounded-full bg-luxe text-white", children: "Open Wishlist" })
  ] });
}
function Addresses() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Saved Addresses" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-xl border border-primary bg-accent/30 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 text-[10px] uppercase tracking-wider bg-luxe text-white px-2 py-0.5 rounded-full", children: "Default" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
          "Mounika Reddy",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Jubilee Hills, Hyderabad",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Telangana 500033, India"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-5 rounded-xl border border-dashed border-border hover:border-primary text-muted-foreground hover:text-primary transition", children: "+ Add New Address" })
    ] })
  ] });
}
function Reviews() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "My Reviews" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Reviews you've shared with our community." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LotusIcon, { className: "w-16 h-16 mx-auto text-primary/30", strokeWidth: 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "You haven't written any reviews yet." })
    ] })
  ] });
}
function SettingsTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Account Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Notifications, privacy & preferences." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: ["Email notifications", "WhatsApp updates", "Personalised recommendations", "Marketing emails"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between p-4 rounded-xl border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: s }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "w-10 h-5 accent-[var(--primary)]" })
    ] }, s)) })
  ] });
}
export {
  AccountPage as component
};
