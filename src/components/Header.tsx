import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LotusIcon } from "./Lotus";
import { navCategories } from "@/lib/mock-data";
import logo from "@/assets/logo.png";
const announcements = [
  "🚚 Free Shipping Above ₹999",
  "🔄 Easy 7-Day Returns",
  "💳 Secure Payments",
  "📦 Cash On Delivery Available",
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar */}
      <div className="bg-luxe text-primary-foreground overflow-hidden">
  <div className="flex w-max py-2 animate-[marquee_20s_linear_infinite]">
    {[...announcements, ...announcements, ...announcements, ...announcements].map(
      (item, index) => (
        <span
          key={index}
          className="mx-8 whitespace-nowrap text-xs md:text-sm"
        >
          {item}
        </span>
      )
    )}
  </div>
</div>

      {/* Main header */}
      <div className="glass border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg bg-white">
    <img
      src={logo}
      alt="Mounika's Wardrobe"
      className="w-full h-full object-cover"
    />
  </div>

  <span className="font-display text-xl md:text-2xl text-foreground leading-none">
    Mounika's <span className="text-luxe">Wardrobe</span>
  </span>
</Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <label className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search sarees, lehengas, bridal collection..."
                  className="w-full h-11 pl-11 pr-4 rounded-full bg-white/80 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm placeholder:text-muted-foreground"
                />
              </label>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1 md:gap-2">
              <IconBtn label="Account" to="/account"><User className="w-5 h-5" /></IconBtn>
              <IconBtn label="Wishlist" to="/wishlist" badge={3}><Heart className="w-5 h-5" /></IconBtn>
              <IconBtn label="Cart" to="/cart" badge={2}><ShoppingBag className="w-5 h-5" /></IconBtn>
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent transition"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 py-2 border-t border-border/60">
            {navCategories.map((c) => {
              const isSale = c === "Sale";
              const to = c === "Home" ? "/" : "/shop";
              return (
                <Link
                  key={c}
                  to={to}
                  className={`relative px-4 py-2 text-sm tracking-wide rounded-full transition group ${
                    isSale
                      ? "text-[color:var(--sale)] font-medium"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {c}
                  <span className="absolute left-1/2 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-2/3 -translate-x-1/2" />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/40 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-background z-50 shadow-luxe p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xl text-luxe">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="w-9 h-9 rounded-full hover:bg-accent inline-flex items-center justify-center">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <label className="relative block mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input placeholder="Search..." className="w-full h-11 pl-11 pr-4 rounded-full bg-accent/40 border border-border text-sm focus:outline-none" />
              </label>
              <ul className="space-y-1">
                {navCategories.map((c) => (
                  <li key={c}>
                    <Link
                      to={c === "Home" ? "/" : "/shop"}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl hover:bg-accent transition text-foreground/90"
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconBtn({
  children,
  to,
  label,
  badge,
}: {
  children: React.ReactNode;
  to: string;
  label: string;
  badge?: number;
}) {
  return (
    <Link
      to={to}
      aria-label={label}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent transition group"
    >
      <span className="transition-transform group-hover:scale-110">{children}</span>
      {badge ? (
        <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-medium inline-flex items-center justify-center">
          {badge}
        </span>
      ) : null}
    </Link>
  );
}
