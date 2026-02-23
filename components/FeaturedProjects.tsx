"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Code2, Cpu, Globe } from "lucide-react";

const featuredProjects = [
  {
    title: "Capital Gym Web",
    description: "Plataforma integral de gestión para gimnasios con reserva de clases, perfiles de usuario y pagos integrados. Diseño ultra-moderno con enfoque en la experiencia del usuario.",
    image: "/background/hero_bg.jpg", // Usando un placeholder existente por ahora
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "Web App",
    icon: <Globe className="w-4 h-4" />,
    github: "#",
    link: "#"
  },
  {
    title: "Sistema IoT Hawktronic",
    description: "Desarrollo de hardware y software para monitoreo en tiempo real de variables industriales. Integración de sensores ESP32 con dashboard Next.js vía MQTT.",
    image: "/background/hero_bg.jpg", // Placeholder
    tags: ["ESP32", "MQTT", "Node.js", "React"],
    category: "IoT / Hardware",
    icon: <Cpu className="w-4 h-4" />,
    github: "#",
    link: "#"
  },
  {
    title: "Portfolio MSDM v2",
    description: "Mi propia vitrina digital diseñada con estética glassmorphism, optimizada para rendimiento y SEO. Refleja mi identidad como desarrollador Full Stack e IoT.",
    image: "/background/hero_bg.jpg", // Placeholder
    tags: ["Next.js 15", "TypeScript", "Tailwind 4"],
    category: "Branding",
    icon: <Code2 className="w-4 h-4" />,
    github: "#",
    link: "#"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-antracita relative">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cobre/30 bg-cobre/5 text-cobre text-[10px] font-bold tracking-widest uppercase">
              Portafolio Seleccionado
            </div>
            <h2 className="text-4xl md:text-6xl font-titillium font-bold text-white tracking-tight">
              Proyectos <span className="text-cobre">Destacados</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cobre to-yellow-500 rounded-full" />
          </div>
          
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-opensans font-bold tracking-widest text-sm"
          >
            VER TODOS LOS PROYECTOS
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group flex flex-col backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-cobre/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Imagen del Proyecto */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-antracita via-transparent to-transparent opacity-80" />
                
                {/* Badge de Categoría */}
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-2xl bg-antracita/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold">
                  {project.icon}
                  {project.category}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-titillium font-bold text-white mb-4 group-hover:text-cobre transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-opensans text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex}
                      className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-lg text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Acciones */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <Link 
                    href={project.link}
                    className="flex-grow py-3 px-4 bg-white/5 hover:bg-cobre text-white text-center rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Ver Detalles
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link 
                    href={project.github}
                    className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all duration-300"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
