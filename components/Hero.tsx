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
        <Image
          src="/background/hero_bg.jpg" // Cambia esto por tu imagen si quieres
          alt="Imagen de Hero"
          fill
          className="object-cover object-center -z-20"
          priority
        />
        <div className="relative z-10">
          <Image
            src="/img/msdm_portrain.png"
            alt="Misael Delgado"
            width={420}
            height={420}
            className="mx-auto"
            priority
          />
          <Image
            src="/logos/msdm_logo.png" // Cambia esto por tu logo si quieres
            alt="Logo"
            width={120}
            height={120}
            className=" mx-auto mb-6 drop-shadow-[0_0_10px_rgba(194,120,3,0.5)]"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-titillium font-bold text-antracita tracking-wide">
            Hola, soy <span className="text-cobre">Misael Delgado</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-opensans text-gray-700">
            Desarrollador Full Stack con experiencia en React, Next.js, Node.js y más. Apasionado por crear soluciones web eficientes y escalables.
          </p>
        </div>
{/* ==============================================
    COLUMNA DERECHA: FOTO "EFECTO PORTAL 3D" + LOGO BG
=============================================== */}
<div className="relative flex justify-center items-end h-[500px] md:h-[650px] w-full max-w-[500px] mx-auto order-1 lg:order-2 animate-in fade-in zoom-in duration-1000 delay-300 mt-10 lg:mt-0">
  
  {/* 1. Destello de luz secundario (Verde Tech) detrás de todo */}
  <div className="absolute bottom-20 w-[280px] h-[280px] bg-verdeTech/20 rounded-full blur-[60px] z-0 animate-pulse"></div>

  {/* 2. BASE DEL CÍRCULO (El "Portal" con su borde Cobre) */}
  {/* Tiene border-4, así que su interior es 8px más pequeño en total */}
  <div className="absolute bottom-0 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-4 border-cobre shadow-[0_0_60px_rgba(194,120,3,0.4)] bg-[#1F2937] z-10 overflow-hidden flex items-center justify-center">
    
    {/* EL LOGO DE FONDO: Opacidad subida (50%) y con sombra brillante pura */}
    <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-50 z-10">
      <Image 
        src="/logos/msdm_logo.png"
        alt="Marca de agua MSDM"
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(194,120,3,1)]"
      />
    </div>
  </div>

  {/* 3. LA FOTO PRINCIPAL (Saliendo del portal) */}
  {/* EL TRUCO: Medidas exactas. Ancho = Círculo - 8px. 
      bottom-[4px] lo alinea exactamente por dentro del borde inferior.
      rounded-b-full crea la curva perfecta que abraza el círculo por dentro. */}
  <div className="absolute bottom-[4px] w-[312px] h-[450px] md:w-[412px] md:h-[580px] rounded-b-full overflow-hidden z-20 pointer-events-none flex justify-center items-end">
    <Image
      src="/img/msdm_portrain.png"
      alt={`Foto de Misael Delgado saliendo del portal`}
      fill
      // scale-105 o scale-110 ayuda a que tu cuerpo llene mejor el ancho del círculo
      className="object-contain object-bottom scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
      priority
    />
  </div>
</div>
      </div>
    </>
  );
}