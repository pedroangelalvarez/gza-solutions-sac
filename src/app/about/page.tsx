"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-10">¿Quiénes Somos?</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <p className="text-lg text-foreground/80 mb-4 text-justify">
            En GZA Solutions S.A.C. creemos en la ingeniería con propósito. Somos un equipo comprometido, responsable y apasionado por lo que hacemos. Ejecutamos proyectos de ingeniería, mantenimiento y construcción para el sector minero, plantas industriales y otras industrias, con un enfoque humano, eficiente y de alta calidad.
          </p>
          <p className="text-lg text-foreground/80 mb-4 text-justify">
            Nos especializamos en integridad estructural y gestión de activos bajo la norma ISO 55000, aplicando simulaciones avanzadas FEM y DEM para el diseño, optimización y rediseño de estructuras. Estas herramientas nos permiten brindar soluciones personalizadas, de alto valor agregado y respaldo tecnológico de clase mundial.
          </p>
          <p className="text-lg text-foreground/80 mb-4 text-justify">
            También contamos con sólida experiencia en Ingeniería Eléctrica, destacando por la implementación de soluciones eficientes y seguras en entornos industriales complejos, bajo estrictas normativas técnicas. En Instrumentación y Control, ofrecemos automatización avanzada con integración de IoT e inteligencia artificial, permitiendo monitoreo predictivo y control de calidad en tiempo real.
          </p>
          <p className="text-lg text-foreground/80 mb-4 text-justify">
            Además, brindamos servicios de Ingeniería Multidisciplinaria y elaboración de Expedientes Técnicos, incluyendo diseño en ingeniería civil, arquitectura, mecánica, eléctrica, instrumentación, control y procesos. Modelado BIM 3D/4D/5D, cálculos aplicados a todas las disciplinas, levantamientos en campo y coordinación de especialidades, bajo normativas nacionales e internacionales.
          </p>
          <p className="text-lg text-foreground/80 text-justify">
          En GZA Solutions resolvemos los desafíos de nuestros clientes con tecnología avanzada, un equipo experto, ofreciendo soluciones innovadoras y sostenibles.
          </p>
        </div>

        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-full">
            <Image
              src="/images/about.jpeg"
              alt="Foto institucional de GZA Solutions"
              layout="fill"
              objectFit="cover"
              className="opacity-0 transition-all duration-500 hover:scale-105"
              loading="lazy"
              onLoadingComplete={(img) => {
                img.classList.remove('opacity-0');
              }}
              onError={(e) => {
                e.currentTarget.classList.remove('opacity-0');
              }}
            />
            <Skeleton className="absolute inset-0 -z-10" />
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Misión</h2>
          <p className="text-lg text-foreground/80 text-justify">
            Creamos soluciones innovadoras de ingeniería, integrando tecnologías de clase mundial para generar alto valor y mejorar la gestión de activos de nuestros clientes.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Visión</h2>
          <p className="text-lg text-foreground/80 text-justify">
            Ser reconocidos como líderes en soluciones de ingeniería innovadora, aplicadas a la gestión de activos a nivel nacional e internacional.
          </p>
        </div>
      </div>
    </motion.div>
  );
}