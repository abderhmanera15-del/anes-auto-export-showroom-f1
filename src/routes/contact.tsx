import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/lib/cars";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anes Auto" },
      { name: "description", content: "Get in touch with Anes Auto for inquiries, quotes and availability." },
      { property: "og:title", content: "Contact — Anes Auto" },
      { property: "og:description", content: "Reach Anes Auto by phone or WhatsApp." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-red font-semibold">Contact</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-extrabold">Let's talk cars.</h1>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Send us a message or reach out directly by phone or WhatsApp. We respond fast and provide tailored quotes.
          </p>
          <div className="mt-8 space-y-4">
            <a href={PHONE_HREF} className="flex items-center gap-4 rounded-2xl border border-border p-4 hover:border-foreground transition">
              <div className="h-11 w-11 rounded-xl bg-foreground text-background inline-flex items-center justify-center"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                <div className="font-bold">{PHONE}</div>
              </div>
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-border p-4 hover:border-brand-green transition">
              <div className="h-11 w-11 rounded-xl bg-brand-green text-white inline-flex items-center justify-center"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-bold">Message us anytime</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border p-4">
              <div className="h-11 w-11 rounded-xl bg-secondary inline-flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                <div className="font-bold">Algeria</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = WHATSAPP_HREF; }}
          className="rounded-3xl border border-border p-6 md:p-8 bg-card"
        >
          <h2 className="font-display text-2xl font-bold">Request a quote</h2>
          <p className="mt-1 text-sm text-muted-foreground">Fill in the form — we'll get back to you on WhatsApp.</p>
          <div className="mt-6 grid gap-4">
            <input required placeholder="Full name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground" />
            <input required type="tel" placeholder="Phone number" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground" />
            <input placeholder="Car of interest (e.g. Geely Coolray)" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground" />
            <textarea rows={4} placeholder="Your message" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background px-5 py-3 text-sm font-semibold hover:opacity-90">
              <Mail className="h-4 w-4" /> Send via WhatsApp
            </button>
          </div>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
