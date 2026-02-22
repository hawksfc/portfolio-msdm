import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-cobre selection:text-white pb-32 md:pb-0">
      <Hero />
      {/* Aquí podrías añadir otras secciones como Features o Featured Projects */}
    </main>
  );
}