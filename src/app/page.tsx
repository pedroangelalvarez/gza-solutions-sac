'use client';

import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        <Carousel
          className="absolute inset-0 -z-10"
          images={[
            { src: '/carousel/carousel1.jpeg', alt: 'Diseño arquitectónico moderno' },
            { src: '/carousel/carousel2.jpeg', alt: 'Edificio corporativo' },
            { src: '/carousel/carousel3.jpeg', alt: 'Construcción industrial' }
          ]}
        />
        <div className="relative z-10 container mx-auto px-8 py-12 rounded-xl shadow-2xl border border-border/10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            GZA Solutions S.A.C.
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up drop-shadow" style={{ animationDelay: '0.4s' }}>
            Ingeniería y Mantenimiento
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/services">Explora Nuestros Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Placeholder for additional sections (e.g., featured projects, brief about) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a GZA Solutions</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Somos una empresa especializada en soluciones integrales para la construcción minera. Aplicamos tecnología de punta, ingeniería avanzada y un enfoque colaborativo para optimizar cada etapa del proyecto.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Tecnología e Innovación</h3>
              <p className="text-foreground/70">
                Integramos herramientas como BIM, escaneo 3D y simulación FEM para asegurar eficiencia, precisión y seguridad en la construcción minera.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Ingeniería Especializada</h3>
              <p className="text-foreground/70">
                Ofrecemos análisis estructurales, estudios dinámicos y diseños multidisciplinarios que cumplen con las normativas más exigentes del sector.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-primary">Compromiso con la Minería</h3>
              <p className="text-foreground/70">
                Brindamos soporte completo a proyectos mineros, desde el diseño y la planificación hasta el montaje y la puesta en marcha de instalaciones.
              </p>
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
