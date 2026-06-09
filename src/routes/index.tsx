import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Truck, Shield, RotateCcw, Gem, Star, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { LotusIcon, LotusWatermark, LotusSeparator } from "@/components/Lotus";
import { ProductCard } from "@/components/ProductCard";
import { products, categoriesData,  testimonials, instagramPosts } from "@/lib/mock-data";
import saree1 from "@/assets/saree1.png";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mounika's Wardrobe — Luxury Indian Ethnic Fashion" },
      { name: "description", content: "Premium sarees, lehengas, bridal collection & festive ethnic wear. Elegance woven into every thread." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <Categories />
      {/* <Occasions /> */}
      <Trending />
      <FeaturedBanner />
      <NewArrivals />
      {/* <BridalSection /> */}
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </Layout>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft">
      <LotusWatermark
  className="-top-10 -right-10 md:-top-32 md:-right-32 w-[220px] h-[220px] md:w-[700px] md:h-[700px]"
  opacity={0.06}
  spin
/>

<LotusWatermark
  className="-bottom-10 -left-10 md:-bottom-40 md:-left-40 w-[200px] h-[200px] md:w-[600px] md:h-[600px]"
  opacity={0.05}
/>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-primary mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" /> The Festive Edit 2026
          </motion.span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-foreground">
            Mounika's
            <br />
            <span className="text-luxe italic">Wardrobe</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-light tracking-wide">
            Elegance woven into every thread. Discover heirloom sarees, regal lehengas and bridal couture, crafted with timeless artistry.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 px-7 h-14 rounded-full bg-luxe text-white text-sm tracking-wide shadow-luxe hover:shadow-[0_25px_70px_-15px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-all hover:scale-[1.03]"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-7 h-14 rounded-full border border-foreground/20 text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition"
            >
              Explore New Arrivals
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0">
            {[
              { n: "500+", l: "Designs" },
              { n: "12K+", l: "Happy Women" },
              { n: "4.9★", l: "Rated" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="font-display text-xl sm:text-2xl text-primary">{s.n}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-4 rounded-[3rem] bg-luxe opacity-20 blur-2xl" />
            <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-luxe border border-white/40">
              <img
  src={saree1}
  alt="Mounika's Wardrobe luxury ethnic collection"
  className="w-full h-full object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              <LotusIcon className="absolute top-6 right-6 w-16 h-16 text-white/70" strokeWidth={1} />
            </div>
            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-2 left-2 md:-bottom-6 md:-left-6 lg:-left-12 glass rounded-2xl p-4 shadow-luxe flex items-center gap-3 max-w-[240px]"
            >
              <div className="w-12 h-12 rounded-xl bg-luxe inline-flex items-center justify-center">
                <Gem className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Bridal Couture</div>
                <div className="font-display text-base">Hand-embroidered</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute top-2 right-2 md:-top-6 md:-right-6 lg:-right-10 glass rounded-2xl px-4 py-3 shadow-luxe"
            >
              <div className="flex items-center gap-1.5 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              {/* <div className="text-xs text-muted-foreground mt-1">Loved by 12,000+ women</div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2"
      >
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    { Icon: Truck, t: "Free Shipping ₹999+" },
    { Icon: RotateCcw, t: "Easy 7-Day Returns" },
    { Icon: Shield, t: "100% Authentic" },
    { Icon: Gem, t: "Handcrafted Luxury" },
  ];
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ Icon, t }) => (
          <div key={t} className="flex items-center gap-3 justify-center lg:justify-start">
            <Icon className="w-5 h-5 text-primary" />
            <span className="text-sm tracking-wide text-foreground/80">{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  return (
    <section className="relative py-24 overflow-hidden">
      <LotusWatermark
  className="top-20 -left-10 md:-left-20 w-[180px] h-[180px] md:w-96 md:h-96"
  opacity={0.04}
/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="Curated Categories" title="Shop by Category" subtitle="From timeless drapes to regal ensembles — find your perfect look." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {categoriesData.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-luxe transition"
            >
              <Link to="/shop" className="block w-full h-full">
                <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                <LotusIcon className="absolute top-3 right-3 w-10 h-10 text-white/60" strokeWidth={0.9} />
                <LotusIcon className="absolute bottom-3 left-3 w-8 h-8 text-white/30" strokeWidth={0.8} />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">{c.count} pieces</div>
                  <h3 className="font-display text-2xl mt-1">{c.name}</h3>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- TRENDING ---------------- */
function Trending() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Editor's Pick</p>
            <h2 className="font-display text-4xl lg:text-5xl mt-2">Trending This Season</h2>
          </div>
          <Link to="/shop" className="text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.slice(0, 8).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED BANNER ---------------- */
function FeaturedBanner() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] min-h-[420px] grid lg:grid-cols-2 shadow-luxe">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80" alt="Luxury collection" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          </div>
          <LotusWatermark className="-bottom-20 -right-20 w-96 h-96 text-white" opacity={0.08} />
          <div className="relative z-10 p-10 lg:p-16 text-white flex flex-col justify-center max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">New Drop</p>
            <h2 className="font-display text-4xl lg:text-6xl mt-3 leading-tight">The New <span className="italic text-secondary">Luxury</span> Collection</h2>
            <p className="mt-5 text-white/80 max-w-md">Limited-edition ensembles, woven by master artisans. Discover pieces destined to be heirlooms.</p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 px-7 h-14 rounded-full bg-white text-foreground text-sm tracking-wide w-fit hover:bg-luxe hover:text-white transition group">
              Shop Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- NEW ARRIVALS (masonry) ---------------- */
function NewArrivals() {
  return (
    <section className="relative py-24 bg-soft overflow-hidden">
      <LotusWatermark className="bottom-10 -right-20 w-80 h-80" opacity={0.05} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="Just In" title="New Arrivals" subtitle="Fresh from the loom — the latest editions to grace our boutique." />
        <div className="mt-12 columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {products.slice(4, 13).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="mb-5 break-inside-avoid group relative rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-luxe transition"
              style={{ aspectRatio: i % 3 === 0 ? "3/5" : i % 3 === 1 ? "3/4" : "4/5" }}
            >
              <Link to="/product/$id" params={{ id: p.id }} className="block w-full h-full">
                <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">{p.category}</p>
                  <h3 className="font-display text-xl mt-1">{p.name}</h3>
                  <p className="text-sm mt-1 opacity-90">₹{p.price.toLocaleString("en-IN")}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <LotusWatermark
  className="top-20 left-1/2 -translate-x-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px]"
  opacity={0.04}
/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <SectionHeader eyebrow="Words From Our Family" title="Loved by Women Across India" subtitle="Real stories from real women who chose Mounika's Wardrobe." />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass rounded-2xl p-6 shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1"
            >
              <LotusIcon className="absolute top-3 right-3 w-10 h-10 text-primary/15" strokeWidth={1} />
              <div className="flex items-center gap-1 text-[color:var(--gold)] mb-3">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/30" />
                <div>
                  <div className="font-display text-base">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSTAGRAM ---------------- */
function InstagramGallery() {
  return (
    <section className="relative py-24 bg-accent/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="@mounikaswardrobe" title="Follow Our Journey" subtitle="Tag #MounikasWardrobe to be featured." />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {instagramPosts.map((p) => (
            <a key={p.id} href="https://www.instagram.com/mounikaswardrobe" target="_blank" rel="noreferrer" className="group relative aspect-square rounded-xl overflow-hidden">
              <img src={p.image} alt="Instagram post" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-luxe opacity-0 group-hover:opacity-80 transition flex items-center justify-center text-white">
                <div className="text-center">
                  <Sparkles className="w-6 h-6 mx-auto" />
                  <p className="text-xs mt-2 tracking-[0.2em] uppercase">Shop the Look</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- NEWSLETTER ---------------- */
function Newsletter() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl rounded-[2.5rem] bg-luxe overflow-hidden shadow-luxe p-10 lg:p-16 text-center text-white">
        <LotusWatermark
  className="-top-10 -left-10 md:-top-20 md:-left-20 w-[180px] h-[180px] md:w-96 md:h-96 text-white"
  opacity={0.12}
  spin
/>

<LotusWatermark
  className="-bottom-10 -right-10 md:-bottom-32 md:-right-20 w-[180px] h-[180px] md:w-96 md:h-96 text-white"
  opacity={0.1}
/>
        <div className="relative">
          <LotusIcon className="w-12 h-12 mx-auto text-white" strokeWidth={1.2} />
          <p className="text-xs uppercase tracking-[0.4em] mt-4 opacity-80">Stay In The Loop</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-3">Join the Mounika's Wardrobe Family</h2>
          <p className="mt-4 max-w-xl mx-auto opacity-85">Be the first to discover new arrivals, private sales and exclusive bridal previews.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="Enter your email" className="flex-1 h-13 px-5 py-3.5 rounded-full bg-white/95 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white" />
            <button className="px-7 py-3.5 rounded-full bg-foreground text-white font-medium tracking-wide hover:bg-background hover:text-foreground transition">Subscribe</button>
          </form>
        </div>
      </div>
      <LotusSeparator className="mt-12" />
    </section>
  );
}

/* ---------------- shared ---------------- */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl lg:text-5xl mt-3 text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
