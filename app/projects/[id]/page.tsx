"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Calendar, 
  User, 
  CheckCircle2,
  AlertCircle,
  ChevronRight
} from "lucide-react";
import { allProjects } from "@/lib/projects-data";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const project = allProjects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-antracita text-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-titillium font-bold">Proyecto no encontrado</h1>
          <button 
            onClick={() => router.push("/projects")}
            className="px-6 py-3 bg-cobre rounded-xl font-bold"
          >
            Volver a proyectos
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-antracita">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cobre/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Breadcrumbs & Back */}
        <div className="flex items-center gap-4 mb-12 text-sm">
          <Link href="/projects" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Proyectos
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-700" />
          <span className="text-cobre font-bold uppercase tracking-widest text-[10px]">{project.title}</span>
        </div>

        {/* HERO DEL PROYECTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cobre/30 bg-cobre/5 text-cobre text-[10px] font-bold tracking-widest uppercase">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-8xl font-titillium font-bold text-white tracking-tighter">
              {project.title}
            </h1>
            <p className="text-gray-400 font-opensans text-xl leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 flex gap-4">
            <Link 
              href={project.link} 
              className="flex-grow py-4 px-6 bg-cobre hover:bg-cobre/80 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-cobre/20"
            >
              Demo en Vivo <ExternalLink className="w-4 h-4" />
            </Link>
            <Link 
              href={project.github} 
              className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl transition-all"
            >
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden border border-white/10 mb-20 shadow-2xl">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover grayscale-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-antracita via-transparent to-transparent opacity-60" />
        </div>

        {/* DETALLES TÉCNICOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          
          {/* Ficha Técnica */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-titillium font-bold text-white border-b border-white/10 pb-4">FICHA TÉCNICA</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <User className="w-5 h-5 text-cobre mt-1" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Rol</p>
                    <p className="text-white font-opensans">{project.role}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-cobre mt-1" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Timeline</p>
                    <p className="text-white font-opensans">{project.timeline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code2 className="w-5 h-5 text-cobre mt-1" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Stack Principal</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] px-2 py-1 bg-white/5 border border-white/5 rounded text-gray-400 uppercase font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Descripción Larga & Desafíos */}
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-titillium font-bold text-white">Sobre el <span className="text-cobre">Proyecto</span></h3>
              <p className="text-gray-400 font-opensans text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Desafíos */}
              <div className="p-8 backdrop-blur-md bg-white/[0.02] border border-white/5 rounded-[2.5rem] space-y-6">
                <h4 className="text-xl font-titillium font-bold text-white flex items-center gap-3">
                  <AlertCircle className="text-red-500/50 w-5 h-5" /> Desafíos
                </h4>
                <ul className="space-y-4">
                  {project.challenges?.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 font-opensans leading-relaxed flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/30 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Soluciones */}
              <div className="p-8 backdrop-blur-md bg-white/[0.02] border border-white/5 rounded-[2.5rem] space-y-6">
                <h4 className="text-xl font-titillium font-bold text-white flex items-center gap-3">
                  <CheckCircle2 className="text-cobre w-5 h-5" /> Soluciones
                </h4>
                <ul className="space-y-4">
                  {project.solutions?.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 font-opensans leading-relaxed flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobre/30 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Footer de navegación interna */}
        <div className="pt-16 border-t border-white/5 flex justify-between items-center">
          <Link href="/projects" className="text-gray-500 hover:text-white transition-colors font-bold text-sm tracking-widest flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> VOLVER AL LISTADO
          </Link>
          <div className="flex items-center gap-6">
             {/* Aquí se podrían añadir botones de Siguiente / Anterior */}
          </div>
        </div>

      </div>
    </main>
  );
}
