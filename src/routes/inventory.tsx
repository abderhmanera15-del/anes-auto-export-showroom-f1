import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  const list = filter === "All" ? cars : cars.filter((c) => c.brand === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <p className="text-xs uppercase tracking-widest text-brand-red font-semibold">Inventory</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">Available cars</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            All vehicles are sourced directly from Chinese manufacturers. Tap a car to explore its available trims and specs.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sticky top-16 md:top-20 z-30 bg-background">
        <div className="flex flex-wrap gap-2">
          {["All", ...BRANDS].map((b) => (
            <button
              key={b}
              onClick={() => setFilter(b)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                filter === b
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background border-border text-foreground hover:border-foreground"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => <CarCard key={c.slug} car={c} />)}
      </section>

      <SiteFooter />
    </div>
  );
}
