
# Arreglar mapa de ubicación en /contacto

El mapa actual usa el iframe gratuito `google.com/maps?output=embed`, que a veces se ve degradado o no carga bien. Lo cambio a la **Google Maps Embed API oficial** usando el conector de Google Maps Platform de Lovable (sin necesidad de que el usuario configure API keys).

## Cambios

1. **Conectar Google Maps Platform** vía `standard_connectors--connect` (managed connection — sin setup del usuario).
2. **Reemplazar el iframe** en `src/routes/contacto.tsx`:
   - Usar `https://www.google.com/maps/embed/v1/place?key=...&q=Las+Quemas+KM+5,+Osorno` con la `VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY`.
   - Esto entrega un mapa nítido, interactivo y con marker oficial.
3. **Mejorar layout del mapa**:
   - Aumentar altura mínima en desktop para que se vea bien (h-[600px]).
   - Mantener el badge superior con la dirección.
   - Mantener el botón "Abrir en Google Maps" debajo.
4. Quitar el filtro `grayscale` para que se vea con sus colores reales.

No toco nada más del sitio.
