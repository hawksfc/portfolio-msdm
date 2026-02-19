import Image from "next/image";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-grisClaro/50 selection:bg-cobre selection:text-white">
      <Hero />
    </main>
  );
}