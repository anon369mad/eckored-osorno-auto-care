import { Link } from "@tanstack/react-router";
import { MessageCircle, Menu, X, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/eckored-logo.png";

const WSP_URL = "https://wa.me/56987517272";
const WSP_DISPLAY = "+56 9 8751 7272";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
] as const;

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-35">
          <Link to="/" className="flex items-center gap-3 group py-2">
            <img src={logo} alt="Mecánica Osorno" className="h-30 mt-5  w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={WSP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all shadow-[var(--shadow-red)]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <div className="px-4 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-semibold uppercase tracking-wider text-foreground/80"
                  activeProps={{ className: "px-3 py-3 text-sm font-semibold uppercase tracking-wider text-primary" }}
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={WSP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 bg-card/40 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <img src={logo} alt="ECKORED" className="h-35 w-auto object-contain mb-3" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Mecánica en Osorno: servicio a domicilio y también atención en casa/taller en Las Quemas KM 5.
            </p>
          </div>
          <div>
            <h4 className="text-display text-lg text-primary mb-3">Contacto</h4>
            <a href={WSP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
              <Phone className="h-4 w-4" /> {WSP_DISPLAY}
            </a>
            <p className="flex items-start gap-2 text-sm mt-2 text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Las Quemas KM 5, Frente a pasarela, Osorno
            </p>
          </div>
          <div>
            <h4 className="text-display text-lg text-primary mb-3">Navegación</h4>
            <ul className="space-y-1.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-primary">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ECKORED — Mecánica a Domicilio
        </div>
      </footer>

      <a
        href={WSP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full pl-4 pr-5 py-3 shadow-[var(--shadow-red)] hover:scale-105 transition-transform font-bold uppercase tracking-wider text-sm"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}

export { WSP_URL, WSP_DISPLAY };
