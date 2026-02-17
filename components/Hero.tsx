// components/Hero.tsx
import Image from "next/image"; // Mantén esto por si usas imágenes luego

export default function Hero() {
  return (
    // AQUÍ DEBES PEGAR EL JSX (EL HTML) QUE TIENES EN PAGE.TSX
    // Pista: Copia desde el <div className="max-w-3xl..."> hasta que cierra ese div.
    // No copies el <main>, solo el contenido de adentro.
    <>
       {/* Pega aquí tu código */}
       <div className="max-w-3xl w-full space-y-8 animate-in fade-in zoom-in duration-700">
        
        {/* 1. LOGO (Simulado por ahora) */}
        <div className="mx-auto w-32 h-32 border-4 border-cobre flex items-center justify-center rounded-lg shadow-[0_0_30px_rgba(194,120,3,0.2)]">
          <span className="text-4xl font-titillium font-bold text-cobre tracking-tighter">
            MSDM
          </span>
        </div>

        {/* 2. TITULAR */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-titillium font-bold text-white tracking-tight">
            MISAEL DELGADO
          </h1>
          <h2 className="text-xl md:text-2xl text-verdeTech font-opensans font-semibold tracking-widest uppercase">
            INGENIERÍA · MECHATRONICS · IOT
          </h2>
        </div>

        {/* 3. DESCRIPCIÓN */}
        <p className="text-grisClaro font-opensans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Conectando el mundo físico con la inteligencia digital.
          <br className="hidden md:block" />
          Desarrollador Full Stack y Especialista en Automatización.
        </p>

        {/* 4. BOTONES DE ACCIÓN (CTA) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 bg-cobre text-white font-titillium font-bold text-lg rounded hover:bg-[#a66502] transition-colors shadow-lg">
            Ver Proyectos
          </button>
          
          <button className="px-8 py-3 border-2 border-verdeTech text-verdeTech font-titillium font-bold text-lg rounded hover:bg-verdeTech/10 transition-colors">
            Contactar
          </button>
        </div>

      </div>
    </>
  );
}