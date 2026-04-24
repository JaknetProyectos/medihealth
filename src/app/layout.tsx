import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Distribución Médica | Insumos y Equipo Médico de Alta Calidad",
    template: "%s | Distribución Médica"
  },
  description: "Distribuidora líder en insumos médicos especializados. Ofrecemos soluciones integrales para hospitales, clínicas y profesionales de la salud con estándares internacionales.",
  keywords: [
    "insumos médicos",
    "equipo hospitalario",
    "material de curación",
    "tecnología médica",
    "dispositivos médicos México",
    "distribuidora médica",
    "catálogo médico"
  ],
  authors: [{ name: "Distribución Médica" }],
  creator: "Distribución Médica",
  publisher: "Distribución Médica",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // No definimos lang aquí porque lo hará el layout dinámico
    <html suppressHydrationWarning>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}