import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Ship, ShieldCheck, Wrench, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CarCard } from "@/components/car-card";
import { cars, BRANDS, PHONE_HREF, WHATSAPP_HREF } from "@/lib/cars";
import heroImg from "@/assets/hero-ship.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anes Auto — Chinese Cars Imported to Algeria" },
      { name: "description", content: "Discover CAG, Geely, Livan, Jetour and Changan vehicles imported directly from China to Algeria by Anes Auto." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              <span className="text-brand-red">China</span>
              <ArrowRight className="h-3 w-3" />
              <span className="text-brand-green">Algeria</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} custom={1} className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Premium Chinese cars,<br />
              <span className="text-brand-red">delivered to Algeria.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} custom={2} className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              Anes Auto sources, ships and delivers the latest models from CAG, Geely, Livan, Jetour and Changan — directly from Chinese factories to your door.
            </motion.p>
            <motion.div variants={fadeInUp} custom={3} className="mt-8 flex flex-wrap gap-3">
              <Link to="/inventory" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition hover:scale-105 active:scale-95">
                Browse Inventory <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-green text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition hover:scale-105 active:scale-95">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-6 py-3 text-sm font-semibold hover:border-foreground transition hover:scale-105 active:scale-95">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Brands we import</span>
          {BRANDS.map((b) => (
            <span key={b} className="font-display font-bold text-lg md:text-xl text-foreground/80">{b}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid gap-6 md:grid-cols-3">
        {[
          { icon: Ship, title: "Direct from China", text: "We ship straight from manufacturer factories — no middlemen, no markup." },
          { icon: ShieldCheck, title: "Verified Quality", text: "Every vehicle is inspected before export. Genuine specs and full documentation." },
          { icon: Wrench, title: "After-Sales Support", text: "Spare parts, service guidance and ongoing support for every car we deliver." },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border border-border p-6 hover:shadow-md transition bg-card">
            <div className="h-11 w-11 rounded-xl brand-gradient text-white inline-flex items-center justify-center">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      {/* Featured cars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-red font-semibold">Featured</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-1">Latest arrivals</h2>
          </div>
          <Link to="/inventory" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold hover:text-brand-red">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.slice(0, 3).map((c) => <CarCard key={c.slug} car={c} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-8 md:p-14">
          <div className="absolute inset-y-0 right-0 w-1/2 brand-gradient opacity-20" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold">Found your next car?</h2>
            <p className="mt-3 text-background/80">Talk to our team for availability, specs and a personalized quote.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-semibold">
                <Phone className="h-4 w-4" /> +213 561 00 92 25
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
