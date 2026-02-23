"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, User, Award, Code, Cpu } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-antracita relative overflow-hidden">
      {/* Círculo decorativo de fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cobre/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1600px] mx-auto">
        <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
            
            {/* Columna de Texto */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cobre/30 bg-cobre/5 text-cobre text-[10px] font-bold tracking-widest uppercase">
                  Conoce al Desarrollador
                </div>
                <h2 className="text-4xl md:text-5xl font-titillium font-bold text-white leading-tight">
                  Pasión por la <span className="text-cobre">Ingeniería</span> <br />
                  & el Código Limpio
                </h2>
                <div className="h-1.5 w-20 bg-cobre rounded-full" />
              </div>

              <p className="text-gray-400 font-opensans text-lg leading-relaxed max-w-xl">
                Soy un desarrollador **Full Stack** especializado en crear soluciones que conectan el mundo físico con el digital. Con experiencia en **IoT** y arquitecturas web modernas, me enfoco en entregar software que no solo funcione, sino que sea escalable y estéticamente impecable.
              </p>

              {/* Stats Rápidos */}
              <div className="grid grid-cols-2 gap-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-2xl text-cobre border border-white/10">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">+4 Años</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">Experiencia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-2xl text-cobre border border-white/10">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">IoT Real</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">Implementado</p>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/about-me"
                  className="px-8 py-4 bg-cobre hover:bg-cobre/80 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-cobre/20"
                >
                  Saber más sobre mí
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="/CV_Misael_Delgado.pdf" 
                  download
                  className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Download className="w-4 h-4" />
                  Descargar CV
                </a>
              </div>
            </div>

            {/* Columna de Imagen / Composición Visual */}
            <div className="relative group">
              <div className="relative aspect-square max-w-[500px] mx-auto">
                {/* Marcos decorativos */}
                <div className="absolute -inset-4 border border-cobre/20 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                <div className="absolute -inset-4 border border-white/10 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 delay-75" />
                
                {/* Imagen Principal */}
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl">
                  <Image 
                    src="/img/msdm_portrain.png" 
                    alt="Misael Delgado - Resumen"
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Overlay de gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-antracita/80 via-transparent to-transparent" />
                </div>

                {/* Badge Flotante */}
                <div className="absolute bottom-8 -right-4 md:-right-8 p-6 backdrop-blur-xl bg-cobre/90 border border-white/20 rounded-3xl shadow-2xl animate-bounce duration-[4000ms]">
                  <Award className="w-8 h-8 text-white mb-2" />
                  <p className="text-white font-bold text-sm leading-tight">
                    Soluciones de<br />Calidad Industrial
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
