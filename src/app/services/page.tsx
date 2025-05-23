import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Settings, ShieldCheck, Layers, Construction } from 'lucide-react'; // Nuevos íconos sugeridos

const services = [
  {
    title: 'Desarrollo de Proyectos de Ingeniería',
    description: 'Diseño y ampliación de instalaciones industriales (Greenfield y Brownfield), con enfoque en ingeniería de interconexiones y metodología BIM. Cumplimiento de normas ISO, API y NEC.',
    icon: Construction,
    image: '/images/service1.jpeg',
    aiHint: 'infraestructura industrial con planos técnicos',
  },
  {
    title: 'Ensayos No Destructivos y Análisis Avanzado',
    description: 'Servicios de inspección como NDT/NDT CONCRET, análisis de resonancia, vibración, ultrasonido y pruebas en laboratorio certificado por INACAL.',
    icon: ShieldCheck,
    image: '/images/service2.jpeg',
    aiHint: 'ingenieros haciendo pruebas de laboratorio en equipo industrial',
  },
  {
    title: 'Tecnología Avanzada en Ingeniería',
    description: 'Aplicación de SmartPlant® y escaneo 3D. Soporte en modelos 3D para diseño y operación eficiente, con integración BIM 4D para planificación de obra.',
    icon: Layers,
    image: '/images/service3.jpeg',
    aiHint: 'modelo digital 3D de planta industrial en pantalla',
  },
  {
    title: 'Servicios de Planta y Mantenimiento',
    description: 'Diseño de plantas de procesamiento, sistemas de bombeo y piping, mantenimiento de líneas de vapor, reparación con soldadura especializada y soporte en paradas de planta.',
    icon: Settings,
    image: '/images/service4.jpeg',
    aiHint: 'operario reparando maquinaria industrial en planta minera',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Nuestros Servicios</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-16">
          GZA Solutions S.A.C. ofrece soluciones de ingeniería avanzadas para el sector industrial y minero, integrando tecnología de punta, diseño especializado y experiencia multidisciplinaria.
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