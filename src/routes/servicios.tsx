import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteLayout, WSP_URL } from "@/components/SiteLayout";
import { services } from "@/lib/services";

export const Route = createFileRoute("/servicios")({
  component: ServiciosPage,
  head: () => ({
    meta: [
      { title: "Servicios — ECKORED Mecánica a Domicilio" },
      { name: "description", content: "Aceite, frenos, tren delantero, scanner, lavado de cortesía y empaquetaduras. Servicios preventivos y correctivos en Osorno." },
      { property: "og:title", content: "Servicios — ECKORED" },
      { property: "og:description", content: "Servicios mecánicos preventivos y correctivos a domicilio en Osorno." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
});

function ServiciosPage() {
  return (
    <SiteLayout>
      <section className="relative border-b border-border bg-card/30">
        <div className="absolute inset-0 bg-carbon-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Catálogo</span>
          <h1 className="text-display text-5xl md:text-7xl font-black mt-2">Servicios</h1>
          <p className="mt-4 max-w-2xl text-foreground/80">
            Trabajos preventivos y correctivos para mantener tu auto al 100%. Todos incluyen lavado de cortesía.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 racing-stripe opacity-60" />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article key={s.slug} className="group relative border border-border bg-card/60 p-8 hover:border-primary/60 transition-all">
              <div className="flex items-start gap-5">
                <div className="shrink-0 grid place-items-center h-16 w-16 bg-primary/10 border border-primary/30 text-primary">
                  <s.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      0{i + 1}
                    </span>
                    {s.tags.map((t) => (
                      <span key={t} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${t === "Preventivo" ? "bg-primary/15 text-primary" : "bg-foreground/10 text-foreground/80"}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-display text-2xl md:text-3xl">{s.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">¿Tu vehículo necesita algo específico? Pregúntanos.</p>
          <a href={WSP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-red)]">
            <MessageCircle className="h-5 w-5" /> Consultar por WhatsApp
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
