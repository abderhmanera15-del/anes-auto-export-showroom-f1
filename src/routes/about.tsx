import { createFileRoute } from "@tanstack/react-router";
import { Ship, ShieldCheck, Globe2, Handshake } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Anes Auto" },
      { name: "description", content: "Anes Auto specializes in exporting premium Chinese vehicles to Algeria with a transparent, end-to-end process." },
      { property: "og:title", content: "About — Anes Auto" },
      { property: "og:description", content: "Premium Chinese cars exported to Algeria." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-widest text-brand-red font-semibold">About us</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold max-w-3xl">Bridging China & Algeria, one car at a time.</h1>
        <p className="mt-5 text-muted-foreground max-w-3xl">
          Anes Auto is an Algerian import specialist focused on bringing the latest Chinese vehicles — CAG, Geely, Livan, Jetour and Changan — to the local market. We handle sourcing, inspection, shipping and delivery so you get the right car with confidence.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Globe2, title: "Global Sourcing", text: "Direct partnerships with Chinese factories." },
            { icon: ShieldCheck, title: "Verified Quality", text: "Pre-shipment inspection on every vehicle." },
            { icon: Ship, title: "Logistics Handled", text: "Sea freight, customs and clearance covered." },
            { icon: Handshake, title: "Trusted Service", text: "Transparent process from order to delivery." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border p-6 bg-card">
              <div className="h-11 w-11 rounded-xl brand-gradient text-white inline-flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
