import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Acerca de GZA Solutions S.A.C.</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Nuestra Historia</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Fundada sobre los principios de calidad, integridad y satisfacción del cliente, GZA Solutions S.A.C. ha crecido de ser un pequeño constructor local a una empresa de construcción respetada, conocida por abordar proyectos de todos los tamaños con una dedicación inquebrantable.
            </p>
            <p className="text-lg text-foreground/80">
              Nuestro equipo está compuesto por profesionales experimentados apasionados por la construcción y comprometidos con ofrecer excelencia. Creemos en construir no solo estructuras, sino también relaciones sólidas con nuestros clientes basadas en la confianza y la transparencia.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
             <Image
              src="https://picsum.photos/800/600?grayscale"
              alt="Reunión del equipo de construcción"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
              data-ai-hint="planificación del equipo de construcción"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-secondary shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                Nuestra Misión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                Brindar servicios de construcción de alta calidad a través de la innovación, la mano de obra calificada y el compromiso con la seguridad y la sostenibilidad, asegurando que cada proyecto supere las expectativas del cliente y contribuya positivamente a la comunidad.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Nuestra Visión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                Ser la empresa líder en construcción reconocida por nuestra integridad, excelencia y soluciones innovadoras, moldeando el futuro del entorno construido mientras fomentamos relaciones duraderas con clientes, socios y empleados.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Nuestros Valores Fundamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['Integridad', 'Calidad', 'Seguridad', 'Colaboración'].map((value) => (
               <div key={value} className="flex items-center justify-center p-4 bg-secondary rounded-lg">
                 <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                 <span className="font-medium text-foreground/80">{value}</span>
               </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
