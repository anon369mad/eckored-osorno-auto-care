
# ECKORED — Sitio web informativo

Sitio one-page (con rutas separadas para SEO) sobre los servicios de mecánica a domicilio, con estética automotriz agresiva inspirada en el logo: rojo intenso, negro carbón, blanco, acentos plateados metálicos, tipografía display condensada (estilo racing/industrial) + sans-serif técnico.

## Estructura

Rutas separadas para mejor SEO y compartibilidad:

- `/` — Home: hero con logo, propuesta de valor, CTA WhatsApp, resumen de servicios.
- `/servicios` — Detalle de los 6 servicios preventivos y correctivos.
- `/galeria` — Sección de fotos del trabajo (placeholders listos para reemplazar).
- `/contacto` — WhatsApp + mapa Google Maps embebido + cómo llegar.

Header con navegación y logo, footer con contacto rápido y redes.

## Servicios listados

Cada uno con icono, descripción corta y badge "Preventivo / Correctivo":

1. Cambio de aceite y filtros
2. Pastillas y sistema de frenos
3. Tren delantero
4. Scanner automotriz (diagnóstico)
5. Lavado de cortesía
6. Empaquetaduras

## Contacto

- Botón flotante WhatsApp visible en todas las páginas → `https://wa.me/56932226821`
- En `/contacto`: tarjeta con número, horario, botón WSP grande, y mapa.
- Mapa: Google Maps embed (iframe estándar, sin API key) centrado en "Las Quemas KM 5, Frente a pasarela, Osorno", con link "Abrir en Google Maps".

## Galería

Grid responsive (masonry/tipo bento) con 6–8 placeholders. El usuario podrá reemplazar luego subiendo fotos reales.

## Diseño visual (basado en el logo)

- Paleta:
  - Rojo principal: rojo encendido tipo ferrari (`oklch` equivalente a #E10600)
  - Negro carbón profundo para fondos
  - Blanco puro y gris plateado para detalles metálicos
  - Acentos de "chispa" (degradados sutiles rojo→naranja)
- Tipografía: display condensada agresiva (estilo Bebas Neue / Barlow Condensed) para títulos + Inter/Manrope para cuerpo.
- Elementos: diagonales inclinadas (estilo racing stripes), bordes filosos, sombras duras, micro-animaciones al hacer scroll.
- Logo subido se coloca en `src/assets/eckored-logo.png` y se usa en header, hero y footer.

## Detalles técnicos

- TanStack Start con rutas separadas en `src/routes/` (`index.tsx`, `servicios.tsx`, `galeria.tsx`, `contacto.tsx`).
- Tokens de color definidos en `src/styles.css` con `oklch` (no colores hardcoded en componentes).
- Componentes shadcn ya disponibles (Button, Card) personalizados con variantes "racing".
- `head()` por ruta con title/description/og en español para SEO local.
- WhatsApp link usa `https://wa.me/56932226821` (sin signos ni espacios).
- Mapa: iframe `google.com/maps?q=...&output=embed` — no requiere API key ni conector.
- Logo del usuario copiado de `user-uploads://image.png` a `src/assets/`.

¿Procedo con esta estructura?
