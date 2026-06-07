import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, MessageCircle, Check } from "lucide-react";
import type { Car } from "@/lib/cars";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/cars";

export function CarCard({ car }: { car: Car }) {
  const [open, setOpen] = useState(false);
  const [activeTrim, setActiveTrim] = useState(0);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-secondary to-background overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
          width={1280}
          height={800}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold">
          <span className="h-2 w-2 rounded-full bg-brand-green" /> {car.brand}
        </div>
        <div className="absolute top-3 right-3 rounded-full bg-foreground/90 text-background px-3 py-1 text-[11px] font-medium">
          {car.body} • {car.fuel}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-bold text-ink">{car.brand} {car.model}</h3>
          <p className="text-sm text-muted-foreground mt-1">{car.tagline}</p>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Price</div>
            <div className="text-sm font-bold text-brand-red">Contact us</div>
          </div>
          <a href={PHONE_HREF} className="text-xs font-semibold text-foreground hover:text-brand-red inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-between w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-brand-red hover:text-brand-red transition"
          aria-expanded={open}
        >
          <span>View models ({car.trims.length})</span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-xl border border-border bg-background overflow-hidden"
            >
              <div className="flex border-b border-border">
                {car.trims.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setActiveTrim(i)}
                    className={`flex-1 text-xs sm:text-sm font-semibold py-2.5 transition ${
                      activeTrim === i
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
              <motion.ul
                key={activeTrim}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="p-4 grid grid-cols-2 gap-2"
              >
                {car.trims[activeTrim].highlights.map((h) => (
                  <li key={h} className="flex items-start gap-1.5 text-xs text-foreground/80">
                    <Check className="h-3.5 w-3.5 text-brand-green shrink-0 mt-0.5" /> {h}
                  </li>
                ))}
              </motion.ul>
              <div className="px-4 pb-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Pricing for {car.trims[activeTrim].name}</span>
                <span className="font-bold text-brand-red">Contact us</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-2 gap-2">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background px-3 py-2.5 text-sm font-semibold hover:opacity-90 transition"
          >
            <Phone className="h-4 w-4" /> Details
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green text-background px-3 py-2.5 text-sm font-semibold hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
