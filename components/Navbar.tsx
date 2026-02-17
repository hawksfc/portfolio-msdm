"use client" //Convierte en componente interactivo
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    const mobileIconClass = (path: string) => {
        `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive(path) ? "text-cobre" : "text-grisClaro hover:text-white"}`;
    }

  return (
    <>
    {/*
    ================================================
    VERSIÓN ESCRITORIO (TOP NAVIGATION)
    - Visible de 'md' para arriba
    ================================================
    */}
    <nav className="hidden md:flex fixed top-0 w-full z-50 bg-antracita/90 backdrop-blur-md border-b border-white/10 h-16 items-center px-8 justify-between">
    {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Asegúrate de tener tu logo.png en /public */}
          <Image src="/logos/msdm_logo.png" alt="Logo" width={32} height={32} className="w-8 h-8 object-contain" priority />
          <span className="text-xl font-titillium font-bold text-white">
            MS<span className="text-cobre">DM</span>
          </span>
        </Link>

        {/* Links Escritorio */}
        <div className="flex gap-8 font-opensans text-sm font-semibold items-center">
            <Link href="/" className={isActive("/") ? "text-cobre border-b-2 border-cobre pb-1" : "text-grisClaro hover:text-verdeTech transition-colors"}>
                INICIO
            </Link>
            <Link href="/projects" className={isActive("/proyectos") ? "text-cobre border-b-2 border-cobre pb-1" : "text-grisClaro hover:text-verdeTech transition-colors"}>
                PROjECTS
            </Link>
            <Link href="/about-me" className={isActive("/sobre-mi") ? "text-cobre border-b-2 border-cobre pb-1" : "text-grisClaro hover:text-verdeTech transition-colors"}>
                SOBRE MÍ
            </Link>
            <Link href="/contact" className="px-4 py-2 border border-cobre text-cobre rounded hover:bg-cobre hover:text-white transition-all text-xs">
                CONTACTAR
            </Link>
            </div>
        </nav>
    </>
  );
}