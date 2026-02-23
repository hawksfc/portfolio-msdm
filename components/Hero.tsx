// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-start lg:items-center justify-center overflow-hidden px-6 lg:px-12">
      {/* Fondo con profundidad */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/background/hero_bg.jpg"
          alt="Background"
          fill
          className="object-cover object-center opacity-15 grayscale-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-antracita via-antracita/80 to-transparent" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center py-6 md:py-10">
        
        {/* ==============================================
            COLUMNA IZQUIERDA: CONTENIDO
        =============================================== */}
        <div className="z-10 order-2 lg:order-1 flex flex-col justify-center items-start space-y-5 md:space-y-10 animate-in fade-in slide-in-from-left-20 duration-1000">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cobre/30 bg-cobre/10 text-cobre text-[10px] md:text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cobre opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cobre"></span>
              </span>
              Disponible para proyectos
            </div>
            
            <h1 className="text-4xl md:text-7xl xl:text-8xl font-titillium font-bold text-white leading-[1.1] tracking-tight">
              Diseño <span className="text-cobre">Digital</span> <br />
              & <span className="text-white/90">IoT Real</span>
            </h1>
          </div>

          <div className="w-full max-w-xl backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <p className="text-base md:text-xl font-opensans text-gray-300 leading-relaxed">
              Hola, soy <span className="text-white font-semibold">Misael Delgado</span>. 
              Especialista en desarrollo <span className="text-verdeTech font-semibold">Full Stack</span>. 
              Transformo ideas complejas en interfaces elegantes y sistemas conectados.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-cobre hover:bg-cobre/80 text-white font-bold rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-cobre/20 flex items-center justify-center gap-2">
                Explorar Trabajos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 md:py-4 border border-white/20 hover:bg-white/5 backdrop-blur-sm text-white font-bold rounded-2xl transition-all">
                Conóceme
              </button>
            </div>
          </div>
        </div>

        {/* ==============================================
            COLUMNA DERECHA: PORTAL ESCALABLE (Efecto 3D
        =============================================== */}
        <div className="relative order-1 lg:order-2 lg:mt-24 flex justify-center items-end h-[350px] md:h-[550px] lg:h-[750px] w-full animate-in fade-in zoom-in duration-1000 delay-200">
          
          {/* Brillo de fondo dinámico */}
          <div className="absolute bottom-[10%] w-[60%] aspect-square bg-cobre/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse z-0" />

          {/* 1. BASE DEL PORTAL (Círculo de fondo) */}
          <div className="absolute bottom-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[580px] xl:h-[580px] rounded-full border-4 border-cobre/40 bg-antracita/60 backdrop-blur-md shadow-[0_0_80px_rgba(194,120,3,0.2)] flex items-center justify-center overflow-hidden z-10">
            {/* Logo de fondo dentro del portal */}
            <div className="relative w-[60%] h-[60%] opacity-20">
              <Image src="/logos/msdm_logo.png" alt="" fill className="object-contain" />
            </div>
          </div>

          {/* 2. LA FOTO PRINCIPAL (Saliendo del portal) */}
          <div className="absolute bottom-[4px] w-[232px] h-[340px] md:w-[392px] md:h-[580px] lg:w-[492px] lg:h-[720px] xl:w-[570px] xl:h-[820px] rounded-b-full overflow-hidden z-30 pointer-events-none flex justify-center items-end">
            <Image
              src="/img/msdm_portrain.png"
              alt="Misael Delgado"
              fill
              className="object-contain object-bottom scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-115"
              priority
            />
          </div>

          {/* Anillos de energía decorativos (Giran alrededor) */}
          <div className="absolute bottom-[-20px] w-[320px] md:w-[450px] lg:w-[600px] xl:w-[680px] aspect-square rounded-full border border-white/5 z-5 animate-[spin_40s_linear_infinite]" />
          <div className="absolute bottom-[-40px] w-[350px] md:w-[500px] lg:w-[650px] xl:w-[750px] aspect-square rounded-full border border-cobre/10 z-5 animate-[spin_25s_linear_infinite_reverse]" />
          
          {/* Elementos Flotantes */}
          <div className="absolute top-[20%] right-[5%] w-16 h-16 border border-white/10 rounded-2xl rotate-12 backdrop-blur-md bg-white/5 animate-bounce duration-[4000ms] z-40 hidden md:block" />
          <div className="absolute bottom-[30%] left-[5%] w-10 h-10 border border-cobre/20 rounded-full backdrop-blur-md bg-cobre/5 animate-pulse z-40 hidden md:block" />
        </div>

      </div>
    </section>
  );
}
