import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import brakes from "@/assets/gallery-brakes.jpg";
import oil from "@/assets/gallery-oil.jpg";
import scanner from "@/assets/gallery-scanner.jpg";
import suspension from "@/assets/gallery-suspension.jpg";
import wash from "@/assets/gallery-wash.jpg";
import gasket from "@/assets/gallery-gasket.jpg";
import tools from "@/assets/gallery-tools.jpg";

export const Route = createFileRoute("/galeria")({
  component: GaleriaPage,
  head: () => ({
    meta: [
      { title: "Galería — ECKORED Mecánica a Domicilio" },
      { name: "description", content: "Mira nuestro trabajo: frenos, aceite, scanner, suspensión y más. Calidad ECKORED." },
      { property: "og:title", content: "Galería — ECKORED" },
      { property: "og:description", content: "Trabajos realizados por ECKORED en Osorno." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
});

const photos = [
  { src: brakes, alt: "Pastillas y frenos", label: "Frenos", span: "row-span-2" },
  { src: oil, alt: "Cambio de aceite", label: "Aceite", span: "" },
  { src: scanner, alt: "Scanner automotriz", label: "Scanner", span: "" },
  { src: suspension, alt: "Tren delantero", label: "Suspensión", span: "row-span-2" },
  { src: wash, alt: "Lavado de cortesía", label: "Lavado", span: "" },
  { src: gasket, alt: "Empaquetaduras", label: "Empaquetaduras", span: "" },
  { src: tools, alt: "Herramientas profesionales", label: "Herramientas", span: "col-span-2" },
];

function GaleriaPage() {
  return (
    <SiteLayout>
      <section className="relative border-b border-border bg-card/30">
        <div className="absolute inset-0 bg-carbon-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Trabajos</span>
          <h1 className="text-display text-5xl md:text-7xl font-black mt-2">Galería</h1>
          <p className="mt-4 max-w-2xl text-foreground/80">
            Una muestra del trabajo que entregamos día a día.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 racing-stripe opacity-60" />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {photos.map((p, i) => (
            <figure key={i} className={`group relative overflow-hidden border border-border ${p.span}`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <figcaption className="absolute bottom-3 left-3 right-3">
                <span className="text-display text-lg font-bold text-white drop-shadow-md">{p.label}</span>
              </figcaption>
              <div className="absolute top-3 right-3 h-2 w-2 bg-primary shadow-[0_0_12px_var(--primary)]" />
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
