"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
      <h1 className="text-4xl font-bold text-center mb-10">Quiénes Somos</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <p className="text-lg text-foreground/80 mb-4">
            GZA Solutions es una empresa especializada en el análisis de integridad estructural dentro del marco de gestión de activos basado en la norma ISO 55000. Nuestro enfoque se basa en la innovación mediante el uso, desarrollo y aplicación de herramientas de simulación numérica avanzada, dirigidas a la integridad estructural, diseño y optimización.
          </p>
          <p className="text-lg text-foreground/80 mb-4">
            Implementamos simulaciones FEM (método de elementos finitos) y análisis de performance en procesos de flujo usando DEM (método de elementos discretos), aplicadas principalmente al rediseño de chutes y tolvas. Estas soluciones permiten aportar un alto valor agregado mediante tecnología de clase mundial.
          </p>
          <p className="text-lg text-foreground/80">
            En GZA Solutions fomentamos una cultura de investigación, desarrollo e innovación constante, ofreciendo soluciones industriales con tecnologías emergentes que generan verdadero valor para nuestros clientes.
          </p>
        </div>

        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpeg"
            alt="Foto institucional de GZA Solutions"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Misión</h2>
          <p className="text-lg text-foreground/80">
            Generar soluciones innovadoras con base en ingeniería, proporcionando alto valor agregado mediante tecnologías de clase mundial, mejorando la gestión de activos de nuestros clientes.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Visión</h2>
          <p className="text-lg text-foreground/80">
            Ser reconocidos como líderes en soluciones de ingeniería innovadoras aplicadas a la gestión de activos a nivel nacional e internacional.
          </p>
        </div>
      </div>
    </motion.div>
  );
}