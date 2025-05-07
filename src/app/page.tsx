'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-100 via-gray-50 to-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Modern building construction"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-20"
          priority
          data-ai-hint="modern building architecture"
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            GZA Solutions S.A.C.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Construyendo el futuro con integridad y excelencia.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg">
              <Link href="/services">Explora Nuestros Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Placeholder for additional sections (e.g., featured projects, brief about) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bienvenido</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Descubre cómo Álvarez Constructora aporta innovación, calidad y fiabilidad a cada proyecto. Estamos dedicados a superar expectativas y construir relaciones duraderas.
          </p>
           <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-primary">Artesanía de Calidad</h3>
                <p className="text-foreground/70">Utilizamos los mejores materiales y profesionales capacitados para asegurar resultados superiores.</p>
             </div>
             <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-primary">Enfoque en el Cliente</h3>
                <p className="text-foreground/70">Tu visión es nuestra prioridad. Colaboramos estrechamente contigo a lo largo de todo el proceso.</p>
             </div>
             <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-primary">Entrega Oportuna</h3>
                <p className="text-foreground/70">Respetamos tu tiempo y nos esforzamos por completar los proyectos a tiempo y dentro del presupuesto.</p>
             </div>
           </div>
        </div>
      </section>
       <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </div>
  );
}
