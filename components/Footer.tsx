"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone,
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com", color: "hover:text-white" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", color: "hover:text-[#0077B5]" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", color: "hover:text-[#E4405F]" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Sobre Mí", href: "/about-me" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-antracita/80 backdrop-blur-xl">
      {/* Elemento decorativo superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cobre/50 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Columna 1: Branding */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logos/msdm_logo.png" 
                  alt="Logo" 
                  fill
                  className="object-contain" 
                />
              </div>
              <span className="text-2xl font-titillium font-bold text-white tracking-widest">
                MSDM
              </span>
            </Link>
            <p className="text-gray-400 font-opensans text-sm leading-relaxed max-w-xs">
              Especialista en desarrollo Full Stack e IoT. Transformando visiones complejas en experiencias digitales fluidas y sistemas inteligentes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-6">
            <h4 className="text-white font-titillium font-bold text-lg tracking-wider">MAPA DEL SITIO</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-cobre transition-colors font-opensans text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-cobre transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-6">
            <h4 className="text-white font-titillium font-bold text-lg tracking-wider">CONTACTO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-cobre">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:hola@msdm.dev" className="text-gray-300 hover:text-white transition-colors text-sm break-all font-opensans">
                    hola@msdm.dev
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-cobre">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Ubicación</p>
                  <p className="text-gray-300 text-sm font-opensans">Querétaro, México</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="text-white font-titillium font-bold text-lg tracking-wider">TRABAJEMOS JUNTOS</h4>
            <p className="text-gray-400 font-opensans text-sm leading-relaxed">
              ¿Tienes un proyecto en mente? Estoy disponible para colaboraciones en desarrollo web e IoT.
            </p>
            <Link 
              href="/contact"
              className="flex items-center justify-between w-full p-4 bg-cobre/10 border border-cobre/30 rounded-2xl text-cobre font-bold text-sm group hover:bg-cobre/20 transition-all"
            >
              Iniciar un proyecto
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-opensans">
            © {currentYear} Misael Delgado. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-gray-500 text-xs font-bold tracking-widest">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">PRIVACIDAD</Link>
            <Link href="/cookies" className="hover:text-gray-300 transition-colors">COOKIES</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
