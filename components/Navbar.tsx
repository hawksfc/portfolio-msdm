"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* ==============================================
          🖥️ VERSIÓN ESCRITORIO (Top Navigation)
      =============================================== */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border border-white/5 h-14 items-center px-12 justify-between transition-all duration-300 rounded-2xl">
        
        {/* LOGO con efecto Hover */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Image 
              src="/logos/msdm_logo.png" 
              alt="Logo" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(194,120,3,0.5)]" 
              priority 
            />
          </div>
          <span className="text-xl font-titillium font-bold text-antracita tracking-widest group-hover:text-cobre transition-colors">
            MSDM
          </span>
        </Link>

        {/* LINKS con "Láser Underline" */}
        <div className="flex gap-10 font-opensans text-sm font-semibold items-center">
          {["/", "/proyectos", "/sobre-mi"].map((path) => (
            <Link 
              key={path}
              href={path} 
              className={`relative group py-2 ${isActive(path) ? "text-antracita" : "text-gray-500 hover:text-white"}`}
            >
              {/* Texto del Link */}
              <span className="relative z-10 transition-colors duration-300">
                {path === "/" ? "INICIO" : path.replace("/", "").toUpperCase().replace("-", " ")}
              </span>
              
              {/* Línea animada (Láser) */}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cobre to-yellow-500 transition-all duration-300 ease-out 
                ${isActive(path) ? "w-full shadow-[0_0_10px_#C27803]" : "w-0 group-hover:w-full group-hover:shadow-[0_0_10px_#C27803]"}
              `}></span>
            </Link>
          ))}

          {/* Botón Contactar con efecto Glow */}
          <Link 
            href="/contacto" 
            className="px-6 py-2.5 bg-transparent border border-cobre text-cobre rounded hover:bg-cobre hover:text-white hover:shadow-[0_0_15px_rgba(194,120,3,0.6)] transition-all duration-300 text-xs tracking-widest font-bold"
          >
            CONTACTAR
          </Link>
        </div>
      </nav>

      {/* ==============================================
          📱 VERSIÓN MÓVIL (Bottom Navigation)
      =============================================== */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white/70 backdrop-blur-lg border border-white/10 h-20 rounded-2xl shadow-2xl pb-1">
        <div className="grid grid-cols-4 h-full items-center justify-items-center">
          
          {/* Mapeamos los items para no repetir código */}
          {[
            { path: "/", label: "MSDM", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { path: "/projects", label: "Proyectos", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
            { path: "/about-me", label: "Perfil", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
            { path: "/contact", label: "Contacto", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
          ].map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className="relative flex flex-col items-center justify-center w-full h-full group"
            >
              {/* Fondo brillante (Cápsula) - Solo visible si está activo */}
              {isActive(item.path) && (
                <span className="absolute -top-3 w-10 h-1 bg-cobre rounded-full shadow-[0_0_10px_#C27803] animate-pulse"></span>
              )}
              
              {/* Icono con animación de rebote sutil al hover */}
              {item.path === "/" ? (
                <div className={`transition-all duration-300 ${isActive(item.path) ? "text-cobre -translate-y-1" : "text-gray-400 group-hover:text-white"}`}>
                  <Image 
                    src="/logos/msdm_logo.png" 
                    alt="Logo" 
                    width={18} 
                    height={18}
                    className="object-contain drop-shadow-[0_0_8px_rgba(194,120,3,0.5)]" 
                    priority
                  />
                </div>
              ) : (
              <div className={`transition-all duration-300 ${isActive(item.path) ? "text-cobre -translate-y-1" : "text-gray-400 group-hover:text-white"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              )}
              
              {/* Texto */}
              <span className={`text-[10px] font-bold mt-1 transition-colors ${isActive(item.path) ? "text-white" : "text-gray-500"}`}>
                {item.label}
              </span>
            </Link>
          ))}

        </div>
      </nav>
    </>
  );
}