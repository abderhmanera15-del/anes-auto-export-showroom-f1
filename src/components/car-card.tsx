import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Check, X, Eye } from "lucide-react";
import type { Car } from "@/lib/cars";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/cars";

export function CarCard({ car }: { car: Car }) {
  const [open, setOpen] = useState(false);
  const [activeTrim, setActiveTrim] = useState(0);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative aspect-[16/10] bg-card overflow-hidden">
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setActiveTrim(0); setOpen(true); }}
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-brand-red hover:text-brand-red transition"
          >
            <Eye className="h-4 w-4" />
            <span>View models ({car.trims.length})</span>
          </motion.button>

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

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${car.brand} ${car.model} models`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl bg-card border border-border shadow-2xl flex flex-col"
            >
              <div className="relative aspect-[16/8] bg-gradient-to-br from-secondary to-background overflow-hidden shrink-0">
                <motion.img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur hover:bg-background transition"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{car.brand}</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-ink">{car.model}</h2>
                </div>
              </div>

              <div className="flex flex-col overflow-y-auto p-5 gap-4">
                <p className="text-sm text-muted-foreground">{car.tagline}</p>

                <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
                  {car.trims.map((t, i) => (
                    <motion.button
                      key={t.name}
                      onClick={() => setActiveTrim(i)}
                      whileTap={{ scale: 0.95 }}
                      className={`relative shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                        activeTrim === i ? "text-background" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {activeTrim === i && (
                        <motion.span
                          layoutId={`trim-pill-${car.brand}-${car.model}`}
                          className="absolute inset-0 rounded-full bg-foreground"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative">{t.name}</span>
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTrim}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-xl border border-border bg-secondary/40 p-4"
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {car.trims[activeTrim].highlights.map((h, idx) => (
                        <motion.li
                          key={h}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04, duration: 0.25 }}
                          className="flex items-start gap-2 text-sm text-foreground/90"
                        >
                          <Check className="h-4 w-4 text-brand-green shrink-0 mt-0.5" /> {h}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Price · {car.trims[activeTrim].name}</div>
                    <div className="text-base font-bold text-brand-red">Contact us</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background px-3 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                  >
                    <Phone className="h-4 w-4" /> Call
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
