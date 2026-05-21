import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-8xl font-black text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Algo salió mal</h1>
        <p className="mt-2 text-sm text-muted-foreground">Intenta recargar la página.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            Reintentar
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#E10600" },
      { title: "ECKORED — Mecánica a Domicilio en Osorno" },
      { name: "description", content: "Taller mecánico en Osorno con atención a domicilio y en taller. Mecánica automotriz económica: diagnóstico, cambio de aceite, frenos, scanner y más." },
      { name: "keywords", content: "mecánica automotriz en Osorno, taller mecánico Osorno, mecánico a domicilio Osorno, mecánica automotriz barata Osorno, cambio de aceite Osorno, frenos Osorno" },
      { property: "og:site_name", content: "ECKORED" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "ECKORED — Mecánica a Domicilio en Osorno" },
      { name: "twitter:title", content: "ECKORED — Mecánica a Domicilio en Osorno" },
      { property: "og:description", content: "Mecánica automotriz en Osorno con precios convenientes: servicios preventivos y correctivos a domicilio y en taller." },
      { name: "twitter:description", content: "Mecánica automotriz en Osorno con precios convenientes: servicios preventivos y correctivos a domicilio y en taller." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dfe14f01-640c-4d24-8ad2-e0324a193776/id-preview-c63a31b1--5df730d5-15a3-4ed8-97f4-3f7c01f4d780.lovable.app-1779298296119.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dfe14f01-640c-4d24-8ad2-e0324a193776/id-preview-c63a31b1--5df730d5-15a3-4ed8-97f4-3f7c01f4d780.lovable.app-1779298296119.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        name: "ECKORED Mecánica a Domicilio",
        description: "Mecánica automotriz económica en Osorno con atención a domicilio y en taller.",
        image: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dfe14f01-640c-4d24-8ad2-e0324a193776/id-preview-c63a31b1--5df730d5-15a3-4ed8-97f4-3f7c01f4d780.lovable.app-1779298296119.png",
        telephone: "+56932226821",
        areaServed: ["Osorno", "Región de Los Lagos"],
        priceRange: "$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Las Quemas KM 5, Frente a pasarela",
          addressLocality: "Osorno",
          addressCountry: "CL",
        },
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
