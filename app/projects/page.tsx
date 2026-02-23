"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Layout, 
  Database, 
  Search,
  Filter
} from "lucide-react";

// Definición de proyectos
const allProjects = [
  {
    id: 1,
    title: "Capital Gym Web",
    description: "Sistema de gestión integral con pasarela de pagos, reservas en tiempo real y panel de administración avanzado.",
    image: "/background/hero_bg.jpg",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    github: "#",
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "Monitoreo Industrial IoT",
    description: "Dashboard para la visualización de datos provenientes de sensores ESP32 en tiempo real mediante el protocolo MQTT.",
    image: "/background/hero_bg.jpg",
    category: "IoT",
    tags: ["React", "Node.js", "MQTT", "ESP32"],
    github: "#",
    link: "#",
    featured: true
  },
  {
    id: 3,
    title: "Hawktronic Brand Identity",
    description: "Rediseño de identidad visual y landing page optimizada para conversión de servicios tecnológicos.",
    image: "/background/hero_bg.jpg",
    category: "Diseño",
    tags: ["Figma", "Branding", "Tailwind CSS"],
    github: "#",
    link: "#",
    featured: false
  },
  {
    id: 4,
    title: "Control de Acceso Biométrico",
    description: "Integración de hardware biométrico con bases de datos en la nube para control de personal.",
    image: "/background/hero_bg.jpg",
    category: "IoT",
    tags: ["C++", "Firebase", "ESP32", "Next.js"],
    github: "#",
    link: "#",
    featured: false
  },
  {
    id: 5,
    title: "E-commerce de Tecnología",
    description: "Tienda online con carrito de compras, gestión de inventario y optimización SEO.",
    image: "/background/hero_bg.jpg",
    category: "Web",
    tags: ["React", "Shopify API", "Tailwind"],
    github: "#",
    link: "#",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio MSDM v2",
    description: "Esta misma plataforma, diseñada para máxima velocidad y una estética glassmorphism premium.",
    image: "/background/hero_bg.jpg",
    category: "Diseño",
    tags: ["Next.js 15", "Framer Motion", "Tailwind"],
    github: "#",
    link: "#",
    featured: true
  }
];

const categories = ["Todos", "Web", "IoT", "Diseño"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-antracita">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cobre/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-[1600px] mx-auto">
        
        {/* Cabecera de Página */}
        <div className="flex flex-col mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cobre/30 bg-cobre/10 text-cobre text-[10px] font-bold tracking-widest uppercase w-fit">
            Portafolio Completo
          </div>
          <h1 className="text-5xl md:text-7xl font-titillium font-bold text-white tracking-tight">
            Mis <span className="text-cobre text-glow">Proyectos</span>
          </h1>
          <p className="text-gray-400 font-opensans text-xl max-w-3xl leading-relaxed">
            Una colección de trabajos que fusionan software moderno, hardware inteligente y diseño centrado en el usuario.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex items-center gap-2 mr-4 text-gray-500">
            <Filter className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Filtrar por:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border ${
                activeCategory === cat 
                ? "bg-cobre border-cobre text-white shadow-[0_0_20px_rgba(194,120,3,0.3)]" 
                : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-cobre/40 transition-all duration-500"
            >
              {/* Imagen con Overlay */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-antracita via-antracita/20 to-transparent opacity-60" />
                
                {/* Categoría Badge */}
                <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-antracita/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
                  {project.category}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-titillium font-bold text-white group-hover:text-cobre transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-cobre bg-cobre/10 p-1.5 rounded-lg border border-cobre/20">
                      <Layout className="w-4 h-4" />
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 font-opensans text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[9px] font-bold px-2.5 py-1 bg-white/5 rounded-md text-gray-500 border border-white/5 uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Acciones */}
                <div className="flex items-center gap-3">
                  <Link 
                    href={project.link}
                    className="flex-grow py-3 bg-white/5 hover:bg-cobre text-white text-center rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 hover:border-cobre"
                  >
                    PROYECTO COMPLETO
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link 
                    href={project.github}
                    className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all duration-300 border border-white/5"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500 font-opensans italic">No se encontraron proyectos en esta categoría.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 30px rgba(194, 120, 3, 0.4);
        }
      `}</style>
    </main>
  );
}
