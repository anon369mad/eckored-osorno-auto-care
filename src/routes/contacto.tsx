import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, ExternalLink, Clock } from "lucide-react";
import { SiteLayout, WSP_URL, WSP_DISPLAY } from "@/components/SiteLayout";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto — ECKORED Mecánica a Domicilio en Osorno" },
      { name: "description", content: "Contáctanos por WhatsApp al +56 9 8751 7272. Las Quemas KM 5, frente a pasarela, Osorno." },
      { property: "og:title", content: "Contacto — ECKORED" },
      { property: "og:description", content: "Escríbenos por WhatsApp o visítanos en Las Quemas KM 5, Osorno." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
});

const ADDRESS = "Las Quemas KM 5, Frente a pasarela, Osorno, Chile";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const MAPS_KEY = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
const MAPS_EMBED = `https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=${encodeURIComponent(ADDRESS)}&zoom=15`;

function ContactoPage() {
  return (
    <SiteLayout>
      <section className="relative border-b border-border bg-card/30">
        <div className="absolute inset-0 bg-carbon-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Hablemos</span>
          <h1 className="text-display text-5xl md:text-7xl font-black mt-2">Contacto</h1>
          <p className="mt-4 max-w-2xl text-foreground/80">
            Escríbenos por WhatsApp o visítanos. Coordinamos tu servicio donde lo necesites.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 racing-stripe opacity-60" />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        {/* Info */}
        <div className="space-y-5">
          <a
            href={WSP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-primary/40 bg-gradient-to-br from-primary/10 to-card p-7 hover:border-primary transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">WhatsApp</span>
            </div>
            <p className="text-display text-3xl md:text-4xl font-black group-hover:text-primary transition-colors">
              {WSP_DISPLAY}
            </p>
            <p className="mt-3 text-sm text-muted-foreground inline-flex items-center gap-1">
              Toca para abrir el chat <ExternalLink className="h-3.5 w-3.5" />
            </p>
          </a>

          <div className="border border-border bg-card/60 p-7">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Cómo llegar</span>
            </div>
            <p className="text-display text-xl">Las Quemas KM 5</p>
            <p className="text-muted-foreground text-sm mt-1">Frente a pasarela, Osorno</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:underline"
            >
              Abrir en Google Maps <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="border border-border bg-card/60 p-7">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Atención</span>
            </div>
            <p className="text-sm text-foreground/80">
              Coordinamos por WhatsApp en horarios flexibles. Atendemos a domicilio en Osorno y alrededores, y también recibimos en casa/taller.
            </p>
          </div>

          <a
            href={`tel:+56987517272`}
            className="block border border-border bg-card/60 p-7 hover:border-primary/60 transition-all"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Llamar</span>
            </div>
            <p className="text-display text-2xl mt-2">{WSP_DISPLAY}</p>
          </a>
        </div>

        {/* Map */}
        <div className="relative border border-border overflow-hidden min-h-[480px] lg:min-h-[600px]">
          {MAPS_KEY ? (
            <>
              <iframe
                title="Mapa ECKORED - Las Quemas KM 5, Osorno"
                src={MAPS_EMBED}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur border border-primary/40 px-4 py-2 text-xs font-bold uppercase tracking-wider pointer-events-none">
                <span className="text-primary">●</span> Las Quemas KM 5
              </div>
            </>
          ) : (
            <div className="h-full min-h-[480px] lg:min-h-[600px] grid place-items-center bg-card/50 p-6 text-center">
              <div>
                <p className="text-display text-2xl">Mapa no disponible en este navegador</p>
                <p className="mt-2 text-sm text-muted-foreground">Puedes abrir la ruta directamente en Google Maps.</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:underline">
                  Ver ruta en Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
