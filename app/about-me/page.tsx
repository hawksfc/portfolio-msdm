"use client";

import Image from "next/image";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Target, 
  Award, 
  Code2, 
  Cpu, 
  Rocket,
  CheckCircle2
} from "lucide-react";

const experience = [
  {
    role: "Full Stack Developer & IoT Specialist",
    company: "Hawktronic",
    period: "2022 - Presente",
    description: "Liderazgo técnico en el desarrollo de soluciones de monitoreo industrial. Integración de sistemas embebidos con dashboards web en tiempo real.",
    achievements: ["Optimización de latencia en protocolos MQTT", "Arquitectura de microservicios para IoT", "Diseño de interfaces administrativas"]
  },
  {
    role: "Desarrollador Web Senior",
    company: "Capital Gym",
    period: "2021 - 2022",
    description: "Creación de la plataforma de gestión integral. Digitalización completa del proceso de ventas y reserva de clases.",
    achievements: ["Automatización de pagos recurrentes", "Sistema de control de acceso QR", "Incremento de retención de usuarios en 30%"]
  },
  {
    role: "Desarrollador Junior Full Stack",
    company: "Proyectos Independientes / Freelance",
    period: "2019 - 2021",
    description: "Desarrollo de MVPs para startups y digitalización de negocios locales.",
    achievements: ["Implementación de E-commerce", "Mantenimiento de bases de datos", "Optimización SEO"]
  }
];

const education = [
  {
    title: "Ingeniería en Sistemas / Electrónica",
    institution: "Universidad Tecnológica",
    period: "Graduado en 2020",
    description: "Especialización en sistemas embebidos y arquitectura de software."
  },
  {
    title: "Certificación AWS Certified Developer",
    institution: "Amazon Web Services",
    period: "2023",
    description: "Dominio de servicios cloud, despliegue escalable y arquitecturas serverless."
  }
];

export default function AboutMePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-antracita overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cobre/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-cobre/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-[1400px] mx-auto space-y-32">
        
        {/* SECCIÓN 1: HERO / INTRODUCCIÓN */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/img/msdm_portrain.png" 
                alt="Misael Delgado"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-antracita via-transparent to-transparent opacity-60" />
            </div>
            {/* Badge Flotante */}
            <div className="absolute -bottom-6 -right-6 p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl">
              <h4 className="text-3xl font-titillium font-bold text-cobre">+4</h4>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Años de Exp.</p>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cobre/30 bg-cobre/10 text-cobre text-[10px] font-bold tracking-widest uppercase">
                Trayectoria Profesional
              </div>
              <h1 className="text-5xl md:text-7xl font-titillium font-bold text-white tracking-tight">
                Misael <span className="text-cobre">Delgado</span>
              </h1>
              <p className="text-2xl font-opensans text-gray-300 font-light">
                Ingeniero de Software enfocado en soluciones de alto rendimiento e <span className="text-white font-semibold italic">IoT Industrial</span>.
              </p>
            </div>
            
            <p className="text-gray-400 font-opensans text-lg leading-relaxed">
              Desde mis inicios en la electrónica hasta mi evolución al desarrollo Full Stack, 
              mi misión ha sido la misma: **conectar el mundo físico con la inteligencia digital.** 
              No solo escribo código; diseño sistemas que resuelven problemas del mundo real, 
              desde la gestión de un gimnasio hasta el monitoreo de sensores industriales en la nube.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300 font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Target className="w-4 h-4 text-cobre" /> Solucionador
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Rocket className="w-4 h-4 text-cobre" /> Innovador
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <Award className="w-4 h-4 text-cobre" /> Calidad Tech
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: EXPERIENCIA (Línea de Tiempo) */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-titillium font-bold text-white">Experiencia <span className="text-cobre">Laboral</span></h2>
            <div className="h-1 w-20 bg-cobre mx-auto rounded-full" />
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-antracita text-cobre shadow absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-3xl hover:border-cobre/40 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-titillium font-bold text-white group-hover:text-cobre transition-colors">{exp.role}</h3>
                    <span className="text-xs font-bold text-cobre bg-cobre/10 px-3 py-1 rounded-lg border border-cobre/20">{exp.period}</span>
                  </div>
                  <h4 className="text-gray-300 font-bold text-sm mb-4 uppercase tracking-widest">{exp.company}</h4>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-3 text-xs text-gray-500">
                        <CheckCircle2 className="w-4 h-4 text-cobre/50" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: EDUCACIÓN Y VALORES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Educación */}
          <div className="space-y-8">
            <h3 className="text-3xl font-titillium font-bold text-white flex items-center gap-4">
              <GraduationCap className="text-cobre" /> Formación <span className="text-cobre">Académica</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border-l-4 border-cobre rounded-r-2xl space-y-2">
                  <h4 className="text-white font-bold text-lg">{edu.title}</h4>
                  <p className="text-cobre font-bold text-xs uppercase tracking-widest">{edu.institution} | {edu.period}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Valores / Metodología */}
          <div className="space-y-8">
            <h3 className="text-3xl font-titillium font-bold text-white flex items-center gap-4">
              <Code2 className="text-cobre" /> Filosofía de <span className="text-cobre">Trabajo</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Clean Code", desc: "Priorizo la mantenibilidad y legibilidad del código.", icon: <Code2 /> },
                { title: "IoT Focus", desc: "Hardware y software trabajando en perfecta armonía.", icon: <Cpu /> },
                { title: "Agile Dev", desc: "Iteración rápida y comunicación constante.", icon: <Rocket /> },
                { title: "User Centric", desc: "Diseño pensado en la experiencia del usuario final.", icon: <User /> },
              ].map((val, idx) => (
                <div key={idx} className="p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-cobre/20 rounded-lg flex items-center justify-center text-cobre mb-4">
                    {val.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{val.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
