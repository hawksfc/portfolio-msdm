// 1. Importa el Navbar
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Titillium_Web, Open_Sans } from "next/font/google";
import "./globals.css";

// 1. Configuramos Titillium Web (Para títulos e impacto)
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, SemiBold, Bold
  variable: "--font-titillium",
});

// 2. Configuramos Open Sans (Para lectura)
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-opensans",
});

// 3. Metadatos (Lo que sale en la pestaña del navegador y Google)
export const metadata: Metadata = {
  title: "Misael Delgado | Ingeniería & IoT",
  description: "Portafolio profesional de Misael Delgado. Conectando el mundo físico con la inteligencia digital.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      {/* 4. Aquí aplicamos las variables de fuente y el color de fondo ANTRACITA */}
      <body className={`${titillium.variable} ${openSans.variable} bg-antracita text-white antialiased`}>
        {/* 2. Ponlo AQUÍ, antes del children */}
        <Navbar />
        
        {/* El children son tus páginas (Home, Proyectos, etc) */}
        {children}
      </body>
    </html>
  );
}
