"use client";

import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiNestjs, SiExpress, SiFastapi, SiPython,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiFirebase,
  SiArduino, SiRaspberrypi, SiEspressif, SiGit, SiDocker, 
  SiAmazonwebservices, SiVercel, SiFigma, SiGithub
} from "react-icons/si";
import { Cpu, Layout, Server, Database, Wrench, Globe } from "lucide-react";

const stacks = [
  {
    category: "Frontend",
    categoryIcon: <Layout className="w-5 h-5 text-cobre" />,
    skills: [
      { name: "React", icon: <SiReact className="group-hover:text-[#61DAFB] transition-colors" /> },
      { name: "Next.js", icon: <SiNextdotjs className="group-hover:text-white transition-colors" /> },
      { name: "TypeScript", icon: <SiTypescript className="group-hover:text-[#3178C6] transition-colors" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="group-hover:text-[#06B6D4] transition-colors" /> },
      { name: "Redux", icon: <SiRedux className="group-hover:text-[#764ABC] transition-colors" /> },
    ]
  },
  {
    category: "Backend",
    categoryIcon: <Server className="w-5 h-5 text-cobre" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="group-hover:text-[#339933] transition-colors" /> },
      { name: "NestJS", icon: <SiNestjs className="group-hover:text-[#E0234E] transition-colors" /> },
      { name: "Express", icon: <SiExpress className="group-hover:text-white transition-colors" /> },
      { name: "FastAPI", icon: <SiFastapi className="group-hover:text-[#05998B] transition-colors" /> },
      { name: "Python", icon: <SiPython className="group-hover:text-[#3776AB] transition-colors" /> },
    ]
  },
  {
    category: "Databases",
    categoryIcon: <Database className="w-5 h-5 text-cobre" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="group-hover:text-[#4169E1] transition-colors" /> },
      { name: "MongoDB", icon: <SiMongodb className="group-hover:text-[#47A248] transition-colors" /> },
      { name: "Firebase", icon: <SiFirebase className="group-hover:text-[#FFCA28] transition-colors" /> },
      { name: "Redis", icon: <SiRedis className="group-hover:text-[#DC382D] transition-colors" /> },
      { name: "Prisma", icon: <SiPrisma className="group-hover:text-white transition-colors" /> },
    ]
  },
  {
    category: "IoT & Hardware",
    categoryIcon: <Cpu className="w-5 h-5 text-cobre" />,
    skills: [
      { name: "Arduino", icon: <SiArduino className="group-hover:text-[#00979D] transition-colors" /> },
      { name: "ESP32", icon: <SiEspressif className="group-hover:text-[#E7352C] transition-colors" /> },
      { name: "Raspberry Pi", icon: <SiRaspberrypi className="group-hover:text-[#C51A4A] transition-colors" /> },
      { name: "IoT/MQTT", icon: <Globe className="w-4 h-4 group-hover:text-cobre transition-colors" /> },
      { name: "C++", icon: <span className="font-bold text-[10px] group-hover:text-[#00599C]">C++</span> },
    ]
  },
  {
    category: "Tools & DevOps",
    categoryIcon: <Wrench className="w-5 h-5 text-cobre" />,
    skills: [
      { name: "Git", icon: <SiGit className="group-hover:text-[#F05032] transition-colors" /> },
      { name: "Docker", icon: <SiDocker className="group-hover:text-[#2496ED] transition-colors" /> },
      { name: "AWS", icon: <SiAmazonwebservices className="group-hover:text-[#FF9900] transition-colors" /> },
      { name: "Vercel", icon: <SiVercel className="group-hover:text-white transition-colors" /> },
      { name: "GitHub", icon: <SiGithub className="group-hover:text-white transition-colors" /> },
    ]
  },
  {
    category: "Design & UX",
    categoryIcon: <Layout className="w-5 h-5 text-cobre" />,
    skills: [
      { name: "Figma", icon: <SiFigma className="group-hover:text-[#F24E1E] transition-colors" /> },
      { name: "UI Design", icon: <Layout className="w-4 h-4 group-hover:text-cobre transition-colors" /> },
      { name: "UX Research", icon: <Globe className="w-4 h-4 group-hover:text-cobre transition-colors" /> },
    ]
  }
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-antracita relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cobre/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cobre/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1600px] mx-auto">
        {/* Cabecera */}
        <div className="flex flex-col items-center mb-20 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cobre/30 bg-cobre/5 text-cobre text-[10px] font-bold tracking-widest uppercase">
            Especialización Técnica
          </div>
          <h2 className="text-4xl md:text-6xl font-titillium font-bold text-white tracking-tight">
            Mi <span className="text-cobre text-glow">Stack</span> Tecnológico
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cobre to-yellow-500 rounded-full" />
          <p className="text-gray-400 font-opensans max-w-2xl text-lg leading-relaxed">
            Dominio de herramientas modernas para el desarrollo de software escalable 
            y soluciones de hardware inteligente.
          </p>
        </div>

        {/* Grid de Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stacks.map((stack, index) => (
            <div 
              key={index}
              className="group relative backdrop-blur-md bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.05] hover:border-cobre/40 transition-all duration-500"
            >
              {/* Icono de Categoría Flotante */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-antracita border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-cobre/50 group-hover:shadow-[0_0_20px_rgba(194,120,3,0.3)] transition-all duration-500">
                {stack.categoryIcon}
              </div>

              <h3 className="text-2xl font-titillium font-bold text-white mb-8 group-hover:text-cobre transition-colors">
                {stack.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {stack.skills.map((skill, sIndex) => (
                  <div 
                    key={sIndex}
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-2xl group/skill hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-2xl text-gray-400 group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-opensans font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(194, 120, 3, 0.4);
        }
      `}</style>
    </section>
  );
}
