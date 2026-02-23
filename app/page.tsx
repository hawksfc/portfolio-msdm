import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutPreview from "@/components/AboutPreview";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-cobre selection:text-white pb-32 md:pb-0">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <AboutPreview />
      {/* Aquí podrías añadir un pie de página o sección de contacto final */}
    </main>
  );
}