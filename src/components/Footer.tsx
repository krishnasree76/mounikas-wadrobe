import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { LotusIcon, LotusWatermark } from "./Lotus";

const sections = [
  {
    title: "Shop",
    links: ["New Arrivals", "Sarees", "Lehengas", "Kurtis", "Bridal Collection", "Sale"],
  },
  {
    title: "Customer Care",
    links: ["Contact Us", "Shipping Info", "Returns & Exchange", "Size Guide", "FAQs", "Track Order"],
  },
  {
    title: "About",
    links: ["Our Story", "Sustainability", "Press", "Careers", "Stores", "Blog"],
  },
  {
    title: "Policies",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background mt-24">
      <LotusWatermark className="-bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px]" opacity={0.04} />
      <LotusWatermark className="top-10 right-10 w-64 h-64" opacity={0.03} spin />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-luxe">
                <LotusIcon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </span>
              <span className="font-display text-2xl">Mounika's Wardrobe</span>
            </div>
            <p className="text-background/70 max-w-sm text-sm leading-relaxed">
              Elegance woven into every thread. A premium destination for luxury Indian ethnic wear, crafted with love and timeless artistry.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <a href="mailto:mounikaswardrobe@gmail.com" className="flex items-center gap-2 hover:text-secondary transition">
                <Mail className="w-4 h-4" /> mounikaswardrobe@gmail.com
              </a>
              <a href="tel:+919676591606" className="flex items-center gap-2 hover:text-secondary transition">
                <Phone className="w-4 h-4" /> +91 96765 91606
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Hyderabad, India
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/mounikaswardrobe", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590799374612", label: "Facebook" },
                { Icon: MessageCircle, href: "https://wa.me/919676591606", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-background/20 hover:bg-luxe hover:border-transparent transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-display text-lg mb-4">{s.title}</h4>
              <ul className="space-y-2.5 text-sm text-background/70">
                {s.links.map((l) => (
                  <li key={l}>
                    <Link to="/shop" className="hover:text-secondary transition story-link">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Mounika's Wardrobe. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Crafted with <span className="text-secondary">♡</span> for timeless elegance
          </p>
        </div>
      </div>
    </footer>
  );
}
