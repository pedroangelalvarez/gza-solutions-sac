import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, Building, Wrench, Ruler } from 'lucide-react'; // Using relevant icons

const services = [
  {
    title: 'Construcción Residencial',
    description: 'Construimos casas personalizadas desde cero, adaptadas a tu estilo de vida y preferencias. Nos encargamos de todo, desde la consulta de diseño hasta los toques finales.',
    icon: Home,
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'exterior de casa moderna',
  },
  {
    title: 'Proyectos Comerciales',
    description: 'Desarrollamos espacios comerciales funcionales y estéticamente agradables, incluyendo oficinas, tiendas y fábricas, cumpliendo con los plazos y presupuestos.',
    icon: Building,
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'edificio de oficinas moderno',
  },
  {
    title: 'Remodelaciones y Renovaciones',
    description: 'Transformamos espacios existentes con servicios de remodelación de alta calidad para cocinas, baños, ampliaciones y renovaciones completas del hogar.',
    icon: Wrench,
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'renovación de cocina moderna',
  },
  {
    title: 'Diseño Arquitectónico',
    description: 'Ofrecemos servicios completos de diseño arquitectónico, traduciendo tu visión en planos detallados listos para la construcción, con un enfoque en innovación y eficiencia.',
    icon: Ruler,
    image: 'https://picsum.photos/600/400?random=4',
    aiHint: 'planos arquitectónicos dibujo',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Nuestros Servicios</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-16">
          GZA Solutions S.A.C. ofrece una amplia gama de servicios de construcción. Combinamos experiencia, materiales de calidad y una gestión de proyectos meticulosa para entregar resultados excepcionales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-secondary shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-60 w-full overflow-hidden">
                 <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={service.aiHint}
                />
              </div>
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                 <service.icon className="h-8 w-8 text-primary flex-shrink-0" />
                 <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
