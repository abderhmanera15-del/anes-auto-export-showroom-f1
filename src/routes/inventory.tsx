import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CarCard } from "@/components/car-card";
import { cars, BRANDS } from "@/lib/cars";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — Anes Auto" },
      { name: "description", content: "Browse all Chinese cars available for import: CAG, Geely, Livan, Jetour and Changan." },
      { property: "og:title", content: "Inventory — Anes Auto" },
      { property: "og:description", content: "All available Chinese vehicles for export to Algeria." },
    ],
  }),
  component: InventoryPage,
});

function InventoryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [hideBar, setHideBar] = useState(false);
  const { scrollY } = useScroll();
  const list = filter === "All" ? cars : cars.filter((c) => c.brand === filter);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 120) {
      setHideBar(true);
    } else if (latest < previous) {
      setHideBar(false);
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-b border-border bg-secondary/30"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <p className="text-xs uppercase tracking-widest text-brand-red font-semibold">Inventory</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">Available cars</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            All vehicles are sourced directly from Chinese manufacturers. Tap a car to explore its available trims and specs.
          </p>
        </div>
      </motion.section>

      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sticky top-16 md:top-20 z-30 bg-background"
        animate={{ y: hideBar ? -120 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap gap-2"
        >
          {["All", ...BRANDS].map((b) => (
            <button
              key={b}
              onClick={() => setFilter(b)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition hover:scale-105 active:scale-95 ${
                filter === b
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background border-border text-foreground hover:border-foreground"
              }`}
            >
              {b}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((c, i) => (
            <motion.div
              key={c.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
            >
              <CarCard car={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <SiteFooter />
    </div>
  );
}
