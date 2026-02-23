"use client";

import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  MessageSquare, 
  User, 
  AtSign,
  CheckCircle2,
  Clock,
  Sparkles
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-antracita relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cobre/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cobre/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Cabecera */}
        <div className="flex flex-col items-center mb-20 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cobre/30 bg-cobre/5 text-cobre text-[10px] font-bold tracking-widest uppercase">
            Hablemos de tu próximo proyecto
          </div>
          <h1 className="text-4xl md:text-7xl font-titillium font-bold text-white tracking-tight">
            ¿Listo para <span className="text-cobre text-glow">Conectar</span>?
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cobre to-yellow-500 rounded-full" />
          <p className="text-gray-400 font-opensans max-w-2xl text-lg leading-relaxed mt-4">
            Estoy disponible para nuevos retos en desarrollo Full Stack e IoT. 
            Cuéntame tu idea y buscaremos la mejor solución técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: "Email Profesional", 
                  value: "hola@msdm.dev", 
                  icon: <Mail className="w-6 h-6" />,
                  desc: "Para propuestas y colaboraciones."
                },
                { 
                  title: "Ubicación", 
                  value: "Querétaro, México", 
                  icon: <MapPin className="w-6 h-6" />,
                  desc: "Disponible para trabajo remoto global."
                },
                { 
                  title: "Horario de Atención", 
                  value: "Lun - Vie | 9:00 - 18:00", 
                  icon: <Clock className="w-6 h-6" />,
                  desc: "GMT-6 (Hora Central de México)."
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-3xl hover:border-cobre/40 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-cobre/10 rounded-2xl text-cobre border border-cobre/20 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.title}</p>
                      <h4 className="text-xl text-white font-titillium font-bold">{item.value}</h4>
                      <p className="text-sm text-gray-500 font-opensans">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Note */}
            <div className="p-8 border border-white/5 bg-white/[0.01] rounded-3xl flex items-center gap-4">
              <Sparkles className="text-cobre w-6 h-6 shrink-0" />
              <p className="text-sm text-gray-400 font-opensans italic">
                "Mi objetivo es responder a todas las consultas en menos de 24 horas hábiles."
              </p>
            </div>
          </div>

          {/* Columna Derecha: Formulario Glassmorphism */}
          <div className="lg:col-span-7">
            <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              
              {submitted ? (
                <div className="py-20 flex flex-col items-center text-center space-y-6 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-cobre/20 rounded-full flex items-center justify-center border border-cobre/30">
                    <CheckCircle2 className="w-10 h-10 text-cobre" />
                  </div>
                  <h2 className="text-3xl font-titillium font-bold text-white">¡Mensaje Recibido!</h2>
                  <p className="text-gray-400 max-w-sm">
                    Gracias por escribirme. Me pondré en contacto contigo lo antes posible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-cobre font-bold hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                        <User className="w-3 h-3" /> Nombre Completo
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-opensans focus:outline-none focus:border-cobre/50 focus:ring-1 focus:ring-cobre/50 transition-all"
                        placeholder="Misael Delgado"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                        <AtSign className="w-3 h-3" /> Correo Electrónico
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-opensans focus:outline-none focus:border-cobre/50 focus:ring-1 focus:ring-cobre/50 transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" /> Tu Mensaje
                    </label>
                    <textarea 
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-opensans focus:outline-none focus:border-cobre/50 focus:ring-1 focus:ring-cobre/50 transition-all resize-none"
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-cobre hover:bg-cobre/80 disabled:bg-gray-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-cobre/20 group"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        ENVIAR MENSAJE
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 30px rgba(194, 120, 3, 0.4);
        }
      `}</style>
    </main>
  );
}
