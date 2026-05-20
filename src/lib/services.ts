import { Droplet, Disc3, Car, ScanLine, SprayCan, Wrench } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: typeof Wrench;
  tags: ("Preventivo" | "Correctivo")[];
};

export const services: Service[] = [
  {
    slug: "aceite",
    name: "Aceite y Filtros",
    short: "Cambio de aceite y filtros con productos de calidad.",
    description:
      "Cambio de aceite del motor y filtros (aceite, aire, polen) según las especificaciones del fabricante. Lubricación óptima para alargar la vida útil de tu motor.",
    icon: Droplet,
    tags: ["Preventivo"],
  },
  {
    slug: "frenos",
    name: "Pastillas y Frenos",
    short: "Inspección y cambio de pastillas, discos y líquido de frenos.",
    description:
      "Revisión completa del sistema de frenos: pastillas, discos, líquido y mangueras. Seguridad ante todo, frenadas firmes y sin ruidos.",
    icon: Disc3,
    tags: ["Preventivo", "Correctivo"],
  },
  {
    slug: "tren-delantero",
    name: "Tren Delantero",
    short: "Rótulas, bujes, terminales, amortiguadores y alineación.",
    description:
      "Diagnóstico y reparación del tren delantero: rótulas, terminales, bujes, bandejas y amortiguadores. Estabilidad y manejo preciso en cualquier camino.",
    icon: Car,
    tags: ["Correctivo"],
  },
  {
    slug: "scanner",
    name: "Scanner Automotriz",
    short: "Diagnóstico computarizado de fallas electrónicas.",
    description:
      "Lectura y borrado de códigos de falla con scanner profesional. Identificamos el problema real antes de gastar en piezas que no son.",
    icon: ScanLine,
    tags: ["Preventivo", "Correctivo"],
  },
  {
    slug: "lavado",
    name: "Lavado de Cortesía",
    short: "Lavado exterior incluido con cada servicio.",
    description:
      "Como agradecimiento, entregamos tu vehículo con un lavado de cortesía después de cada servicio. Porque tu auto también se merece volver impecable.",
    icon: SprayCan,
    tags: ["Preventivo"],
  },
  {
    slug: "empaquetaduras",
    name: "Empaquetaduras",
    short: "Cambio de empaquetadura de culata, tapa válvulas y cárter.",
    description:
      "Reparación de filtraciones y cambio de empaquetaduras (culata, tapa de válvulas, cárter). Sello perfecto y motor sin pérdidas.",
    icon: Wrench,
    tags: ["Correctivo"],
  },
];
