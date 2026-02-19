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
      </div>
    </>
  );
}