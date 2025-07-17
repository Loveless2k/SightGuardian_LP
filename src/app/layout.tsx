import type { Metadata } from "next";
import { Toaster } from "sonner";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title:
    "SightGuardian AI - Protege la vista de tus hijos durante el tiempo de pantalla",
  description:
    "Nuestra app transforma la pantalla en un entorno visual dinámico, como si estuvieran jugando al aire libre. De la impotencia a la tranquilidad.",
  keywords: [
    "protección visual",
    "niños",
    "pantalla",
    "salud ocular",
    "miopía",
    "tiempo de pantalla",
  ],
  authors: [{ name: "SightGuardian AI" }],
  creator: "SightGuardian AI",
  publisher: "SightGuardian AI",
  openGraph: {
    title: "SightGuardian AI - El escudo digital para la vista de tus hijos",
    description:
      "Transforma la pantalla en un entorno visual dinámico para proteger la vista de tus hijos.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "SightGuardian AI - Protege la vista de tus hijos",
    description:
      "El escudo digital para la vista de tus hijos durante el tiempo de pantalla.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
