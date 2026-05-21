import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

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

const galleryFiles = import.meta.glob("@/assets/gallery-*.*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const photos = Object.entries(galleryFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: path
      .split("/")
      .pop()
      ?.replace(/^gallery-/, "")
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()) ?? "Imagen de galería",
  }));

function GaleriaPage() {
  return (
    <SiteLayout>
      <section className="relative border-b border-border bg-card/30">
        <div className="absolute inset-0 bg-carbon-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Trabajos</span>
          <h1 className="text-display text-5xl md:text-7xl font-black mt-2">Galería</h1>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 racing-stripe opacity-60" />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <article key={p.src} className="overflow-hidden rounded-3xl border border-border bg-card/50 shadow-sm">
              <div className="aspect-[4/3] bg-card/20 flex items-center justify-center p-4">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="px-4 py-3 text-sm font-semibold text-foreground/90">{p.alt}</div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
