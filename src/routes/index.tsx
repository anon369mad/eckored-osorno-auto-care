import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Shield, Wrench, Clock, ExternalLink } from "lucide-react";
import { SiteLayout, WSP_URL } from "@/components/SiteLayout";
import { services } from "@/lib/services";
import hero from "@/assets/hero-mechanic.jpg";
import brakes from "@/assets/gallery-brakes.jpg";
import oil from "@/assets/gallery-oil.jpg";
import scanner from "@/assets/gallery-scanner.jpg";
import suspension from "@/assets/gallery-suspension.jpg";

const MAP_COORDS = "-40.63026,-73.11047";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_COORDS)}`;
const MAPS_EMBED_FALLBACK = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_COORDS)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ECKORED — Mecánica a Domicilio en Osorno" },
      { name: "description", content: "Servicios preventivos y correctivos a domicilio en Osorno: aceite, frenos, tren delantero, scanner, lavado y empaquetaduras." },
      { property: "og:title", content: "ECKORED — Mecánica a Domicilio en Osorno" },
      { property: "og:description", content: "Mecánica profesional donde estés. Atendemos en Osorno y alrededores." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-carbon-grid opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 border border-primary/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Mecánica a Domicilio · Osorno
            </span>
            <h1 className="text-display text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9]">
              Tu auto.<br />
              <span className="text-primary">Donde estés.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl">
              Servicios mecánicos preventivos y correctivos con la calidad de un taller, pero en la puerta de tu casa. Diagnóstico, reparación y lavado de cortesía.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
              COTICE CON NOSOTROS
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WSP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-red)] transition-all">
                <MessageCircle className="h-5 w-5" /> COTICE CON NOSOTROS
              </a>
              <Link to="/servicios"
                className="inline-flex items-center gap-2 border border-border bg-card/40 backdrop-blur px-6 py-4 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all">
                Ver servicios <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/70">
              {["Repuestos garantizados", "Atención rápida", "Lavado incluido"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 racing-stripe opacity-60" />
      </section>

      {/* VALUE PROPS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Wrench, title: "Experiencia real", text: "Diagnóstico preciso, reparación honesta y trabajo bien hecho." },
            { icon: Shield, title: "Servicio integral", text: "Preventivo y correctivo, desde aceite hasta empaquetaduras." },
            { icon: Clock, title: "Sin perder tu día", text: "Te atendemos en tu casa o trabajo. Tú no te mueves." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative border border-border bg-card/40 backdrop-blur p-7 hover:border-primary/60 transition-all">
              <div className="absolute top-0 left-0 h-1 w-12 bg-primary group-hover:w-full transition-all duration-500" />
              <Icon className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Lo que hacemos</span>
            <h2 className="text-display text-4xl md:text-5xl font-black mt-2">Nuestros Servicios</h2>
          </div>
          <Link to="/servicios" className="text-sm font-bold uppercase tracking-wider text-primary hover:underline inline-flex items-center gap-1">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.slug} className="group relative border border-border bg-card/60 p-6 hover:bg-card hover:border-primary/60 transition-all">
              <s.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-display text-xl mb-1.5">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.short}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${t === "Preventivo" ? "bg-primary/15 text-primary" : "bg-foreground/10 text-foreground/80"}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Trabajos</span>
            <h2 className="text-display text-4xl md:text-5xl font-black mt-2">Galería</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-3">
          {[
            { src: brakes, alt: "Pastillas y frenos", label: "Frenos", span: "row-span-2" },
            { src: oil, alt: "Cambio de aceite", label: "Aceite", span: "" },
            { src: scanner, alt: "Scanner automotriz", label: "Scanner", span: "" },
            { src: suspension, alt: "Tren delantero", label: "Suspensión", span: "row-span-2" },
          ].map((p, i) => (
            <figure key={i} className={`group relative overflow-hidden border border-border ${p.span}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
              <figcaption className="absolute bottom-3 left-3">
                <span className="text-display text-lg font-bold text-white drop-shadow-md">{p.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="relative overflow-hidden border border-border bg-card/50 p-8 md:p-12">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Contacto</span>
              <h2 className="text-display text-4xl md:text-5xl font-black mt-2">Cotiza tu servicio hoy</h2>
              <p className="mt-4 text-foreground/80">
                Atención a domicilio en Osorno y alrededores, y también en casa/taller en Las Quemas KM 5. Cuéntanos el problema de tu vehículo y te enviamos cotización por WhatsApp.
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Las Quemas KM 5, Frente a pasarela, Osorno
              </p>
            </div>
            <a href={WSP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-primary px-7 py-5 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-red)] hover:scale-[1.02] transition-transform">
              <MessageCircle className="h-5 w-5" /> COTICE CON NOSOTROS
            </a>
          </div>
          <a href={WSP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-semibold">
            Abrir WhatsApp <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Ubicación</span>
            <h2 className="text-display text-4xl md:text-5xl font-black mt-2">Cómo llegar</h2>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-wider text-primary hover:underline inline-flex items-center gap-1">
            Abrir en Google Maps <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="border border-border bg-card/60 p-7">
            <p className="text-display text-2xl">Las Quemas KM 5</p>
            <p className="text-muted-foreground mt-1">Frente a pasarela, Osorno</p>
            <p className="mt-4 text-sm text-foreground/80">
              Si prefieres, también podemos atenderte a domicilio. Tú eliges si vas a nuestra casa/taller o si vamos a tu ubicación.
            </p>
          </div>
          <div className="relative border border-border overflow-hidden min-h-[360px]">
            <iframe
              title="Cómo llegar a ECKORED en Osorno"
              src={MAPS_EMBED_FALLBACK}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-card to-background p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative grid md:grid-cols-[2fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-display text-3xl md:text-5xl font-black">¿Tu auto necesita atención?</h2>
              <p className="mt-4 text-foreground/80 max-w-xl">
                Escríbenos por WhatsApp y agenda tu visita. Atendemos en Osorno y alrededores.
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Las Quemas KM 5, Frente a pasarela, Osorno
              </p>
            </div>
            <a href={WSP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-primary px-7 py-5 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-red)] hover:scale-[1.02] transition-transform">
              <MessageCircle className="h-5 w-5" /> COTICE CON NOSOTROS
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
