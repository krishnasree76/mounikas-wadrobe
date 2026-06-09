import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Package, Heart, MapPin, Star, LogOut, Settings } from "lucide-react";
import { Layout } from "@/components/Layout";
import { LotusIcon } from "@/components/Lotus";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account — Mounika's Wardrobe" }] }),
  component: AccountPage,
});

const tabs = [
  { key: "profile", label: "Profile", Icon: User },
  { key: "orders", label: "Orders", Icon: Package },
  { key: "wishlist", label: "Wishlist", Icon: Heart },
  { key: "addresses", label: "Addresses", Icon: MapPin },
  { key: "reviews", label: "Reviews", Icon: Star },
  { key: "settings", label: "Settings", Icon: Settings },
];

const orders = [
  { id: "MW-10284", date: "May 22, 2026", items: 2, total: 8499, status: "Delivered" },
  { id: "MW-10231", date: "Apr 14, 2026", items: 1, total: 12499, status: "Delivered" },
  { id: "MW-10198", date: "Mar 02, 2026", items: 3, total: 21450, status: "Delivered" },
];

function AccountPage() {
  const [active, setActive] = useState("profile");

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="bg-card border border-border rounded-2xl p-6 shadow-soft h-fit relative overflow-hidden">
            <LotusIcon className="absolute -top-6 -right-6 w-24 h-24 text-primary/10" strokeWidth={1} />
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-luxe inline-flex items-center justify-center text-white font-display text-xl">M</div>
              <div>
                <p className="font-display text-lg">Welcome back</p>
                <p className="text-xs text-muted-foreground">Mounika</p>
              </div>
            </div>
            <nav className="mt-6 space-y-1">
              {tabs.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`w-full flex items-center gap-3 px-3 h-11 rounded-xl text-sm transition ${active === key ? "bg-luxe text-white shadow-soft" : "hover:bg-accent text-foreground/80"}`}
                >
                  <Icon className="w-4 h-4" /> {label}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-3 h-11 rounded-xl text-sm text-[color:var(--sale)] hover:bg-accent transition mt-2">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </nav>
          </aside>

          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-soft relative overflow-hidden min-h-[500px]">
            <LotusIcon className="absolute -bottom-10 -right-10 w-40 h-40 text-primary/5" strokeWidth={1} />
            {active === "profile" && <Profile />}
            {active === "orders" && <Orders />}
            {active === "wishlist" && <WishlistTab />}
            {active === "addresses" && <Addresses />}
            {active === "reviews" && <Reviews />}
            {active === "settings" && <SettingsTab />}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Profile() {
  return (
    <div>
      <h2 className="font-display text-3xl">Profile Details</h2>
      <p className="text-sm text-muted-foreground mt-1">Manage your personal information.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {[
          { l: "Full Name", v: "Mounika Reddy" },
          { l: "Email", v: "mounikaswardrobe@gmail.com" },
          { l: "Phone", v: "+91 96765 91606" },
          { l: "Date of Birth", v: "12 March, 1994" },
        ].map(f => (
          <label key={f.l} className="block">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{f.l}</span>
            <input defaultValue={f.v} className="mt-2 w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </label>
        ))}
      </div>
      <button className="mt-8 px-7 h-12 rounded-full bg-luxe text-white shadow-luxe hover:scale-[1.02] transition">Save Changes</button>
    </div>
  );
}

function Orders() {
  return (
    <div>
      <h2 className="font-display text-3xl">My Orders</h2>
      <p className="text-sm text-muted-foreground mt-1">Track and review your purchases.</p>
      <ul className="mt-8 space-y-3">
        {orders.map(o => (
          <li key={o.id} className="flex items-center justify-between p-5 rounded-xl border border-border hover:shadow-soft transition flex-wrap gap-4">
            <div>
              <p className="font-display text-lg">{o.id}</p>
              <p className="text-xs text-muted-foreground">{o.date} · {o.items} items</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[color:var(--success)]/10 text-[color:var(--success)] text-xs font-medium">{o.status}</span>
            <p className="font-display text-lg">₹{o.total.toLocaleString("en-IN")}</p>
            <button className="text-sm text-primary hover:underline">View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WishlistTab() {
  return (
    <div>
      <h2 className="font-display text-3xl">My Wishlist</h2>
      <p className="text-sm text-muted-foreground mt-1">Your saved pieces.</p>
      <Link to="/wishlist" className="mt-6 inline-flex items-center gap-2 px-6 h-12 rounded-full bg-luxe text-white">Open Wishlist</Link>
    </div>
  );
}

function Addresses() {
  return (
    <div>
      <h2 className="font-display text-3xl">Saved Addresses</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-primary bg-accent/30 relative">
          <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider bg-luxe text-white px-2 py-0.5 rounded-full">Default</span>
          <p className="font-display text-lg">Home</p>
          <p className="text-sm text-muted-foreground mt-1">Mounika Reddy<br />Jubilee Hills, Hyderabad<br />Telangana 500033, India</p>
        </div>
        <button className="p-5 rounded-xl border border-dashed border-border hover:border-primary text-muted-foreground hover:text-primary transition">+ Add New Address</button>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div>
      <h2 className="font-display text-3xl">My Reviews</h2>
      <p className="text-sm text-muted-foreground mt-1">Reviews you've shared with our community.</p>
      <div className="mt-8 text-center py-12 text-muted-foreground">
        <LotusIcon className="w-16 h-16 mx-auto text-primary/30" strokeWidth={1} />
        <p className="mt-4">You haven't written any reviews yet.</p>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div>
      <h2 className="font-display text-3xl">Account Settings</h2>
      <p className="text-sm text-muted-foreground mt-1">Notifications, privacy & preferences.</p>
      <div className="mt-8 space-y-4">
        {["Email notifications", "WhatsApp updates", "Personalised recommendations", "Marketing emails"].map(s => (
          <label key={s} className="flex items-center justify-between p-4 rounded-xl border border-border">
            <span className="text-sm">{s}</span>
            <input type="checkbox" defaultChecked className="w-10 h-5 accent-[var(--primary)]" />
          </label>
        ))}
      </div>
    </div>
  );
}
