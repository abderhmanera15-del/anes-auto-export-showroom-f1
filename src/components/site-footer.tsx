import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/anes-auto-logo.asset.json";
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/lib/cars";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Anes Auto" className="h-12 w-12 rounded-md object-contain" />
            <div>
              <div className="font-display font-bold text-lg">
                <span className="text-brand-red">ANES</span> AUTO
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Export cars from China to Algeria</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Your trusted partner for importing premium Chinese vehicles to Algeria. Direct sourcing, transparent process, full support.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-brand-red">Home</Link></li>
            <li><Link to="/inventory" className="hover:text-brand-red">Inventory</Link></li>
            <li><Link to="/about" className="hover:text-brand-red">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-red">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-brand-red"><Phone className="h-4 w-4" />{PHONE}</a></li>
            <li><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-brand-green"><MessageCircle className="h-4 w-4" />WhatsApp</a></li>
            <li className="inline-flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" />Algeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Anes Auto. All rights reserved.
      </div>
    </footer>
  );
}
