import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  { src: brakes, alt: "Pastillas y frenos" },
  { src: oil, alt: "Cambio de aceite" },
  { src: scanner, alt: "Scanner automotriz" },
  { src: suspension, alt: "Tren delantero" },
  { src: wash, alt: "Lavado de cortesía" },
  { src: gasket, alt: "Empaquetaduras" },
  { src: tools, alt: "Herramientas profesionales" },
];

function GaleriaPage() {
  const [galleryApi, setGalleryApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!galleryApi) return;

    const id = window.setInterval(() => galleryApi.scrollNext(), 3500);
    return () => window.clearInterval(id);
  }, [galleryApi]);

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

      <section className="mx-auto max-w-5xl px-10 sm:px-14 py-16">
        <Carousel opts={{ loop: true }} setApi={setGalleryApi} className="w-full">
          <CarouselContent>
            {photos.map((p, i) => (
              <CarouselItem key={i}>
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-[260px] w-full rounded-md border border-border object-cover sm:h-[360px] md:h-[460px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      </section>
    </SiteLayout>
  );
}
