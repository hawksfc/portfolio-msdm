export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  tags: string[];
  role: string;
  timeline: string;
  github: string;
  link: string;
  featured: boolean;
  challenges?: string[];
  solutions?: string[];
  technologies?: { name: string; icon: string }[]; // Optional: detailed tech list
}

export const allProjects: Project[] = [
  {
    id: "capital-gym",
    title: "Capital Gym Web",
    description: "Sistema de gestión integral con pasarela de pagos y reservas en tiempo real.",
    longDescription: "Este proyecto consistió en la digitalización completa de la gestión operativa de un gimnasio de alto rendimiento. Se implementó una arquitectura escalable capaz de manejar cientos de usuarios concurrentes, integrando servicios de pago para membresías y un sistema de agendamiento inteligente.",
    image: "/background/hero_bg.jpg",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    role: "Lead Full Stack Developer",
    timeline: "4 Meses (2022)",
    github: "#",
    link: "#",
    featured: true,
    challenges: [
      "Sincronización de cupos en tiempo real para clases populares.",
      "Integración segura de pagos recurrentes con Stripe.",
      "Manejo de estados complejos en el panel de administración."
    ],
    solutions: [
      "Implementación de WebSockets para actualización instantánea de disponibilidad.",
      "Uso de Webhooks de Stripe para validar transacciones de forma asíncrona.",
      "Arquitectura basada en React Query para una gestión eficiente de la caché."
    ]
  },
  {
    id: "iot-industrial",
    title: "Monitoreo Industrial IoT",
    description: "Dashboard para la visualización de datos de sensores ESP32 vía MQTT.",
    longDescription: "Un sistema robusto diseñado para entornos industriales donde la latencia es crítica. El hardware (ESP32) recolecta variables como temperatura, humedad y presión, enviándolas a un broker MQTT que el dashboard web procesa para mostrar gráficas en tiempo real y alertas preventivas.",
    image: "/background/hero_bg.jpg",
    category: "IoT",
    tags: ["React", "Node.js", "MQTT", "ESP32"],
    role: "IoT Engineer & Backend Dev",
    timeline: "6 Meses (2023)",
    github: "#",
    link: "#",
    featured: true,
    challenges: [
      "Conectividad inestable en entornos de planta con interferencia electromagnética.",
      "Manejo de grandes volúmenes de datos por segundo sin saturar el cliente.",
      "Consumo energético eficiente del hardware en modo batería."
    ],
    solutions: [
      "Implementación de lógica de reconexión automática y buffers locales en C++.",
      "Uso de TimescaleDB para el almacenamiento eficiente de series temporales.",
      "Optimización de 'Deep Sleep' en el ESP32 para extender la vida de la batería."
    ]
  },
  {
    id: "hawktronic-brand",
    title: "Hawktronic Brand",
    description: "Rediseño de identidad visual y landing page optimizada para servicios tech.",
    longDescription: "Desarrollo de una identidad de marca moderna que refleje innovación y solidez. El proyecto incluyó desde el diseño del logo hasta la creación de una landing page de alto impacto centrada en la conversión de leads para servicios de ingeniería.",
    image: "/background/hero_bg.jpg",
    category: "Diseño",
    tags: ["Figma", "Branding", "Tailwind CSS"],
    role: "UI/UX Designer",
    timeline: "2 Meses (2023)",
    github: "#",
    link: "#",
    featured: false,
    challenges: [
      "Crear una estética que combine hardware (industrial) con software (moderno).",
      "Optimizar el tiempo de carga a pesar del uso de gráficos de alta calidad.",
      "Asegurar una experiencia de usuario fluida en dispositivos móviles."
    ],
    solutions: [
      "Uso de una paleta de colores antracita y cobre para denotar tecnología y calidad.",
      "Implementación de optimización de imágenes (Next/Image) y carga diferida.",
      "Diseño basado en componentes reutilizables para facilitar futuras expansiones."
    ]
  }
];
