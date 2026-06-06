import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/anes-auto-logo.asset.json";
import { PHONE, PHONE_HREF } from "@/lib/cars";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/inventory", label: "Inventory" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Anes Auto" className="h-10 w-10 md:h-12 md:w-12 rounded-md object-contain" />
          <div className="leading-tight">
            <div className="font-display text-base md:text-lg font-bold tracking-tight">
              <span className="text-brand-red">ANES</span> <span className="text-ink">AUTO</span>
            </div>
            <div className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase">China → Algeria</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-brand-red transition-colors"
              activeProps={{ className: "text-brand-red" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90 transition">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium"
                activeProps={{ className: "text-brand-red" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a href={PHONE_HREF} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-4 py-3 text-sm font-semibold">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
