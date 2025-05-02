import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, Building, Wrench, Ruler } from 'lucide-react'; // Using relevant icons

const services = [
  {
    title: 'Residential Construction',
    description: 'Building custom homes from the ground up, tailored to your lifestyle and preferences. We handle everything from design consultation to final finishing touches.',
    icon: Home,
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'modern house exterior',
  },
  {
    title: 'Commercial Projects',
    description: 'Developing functional and aesthetically pleasing commercial spaces, including offices, retail stores, and industrial facilities, on time and within budget.',
    icon: Building,
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'modern office building',
  },
  {
    title: 'Remodeling & Renovations',
    description: 'Transforming existing spaces with high-quality remodeling services for kitchens, bathrooms, additions, and whole-home renovations.',
    icon: Wrench,
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'kitchen renovation modern',
  },
  {
    title: 'Architectural Design',
    description: 'Offering comprehensive architectural design services, translating your vision into detailed plans ready for construction, focusing on innovation and efficiency.',
    icon: Ruler,
    image: 'https://picsum.photos/600/400?random=4',
    aiHint: 'architectural blueprints drawing',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Our Services</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-16">
          Alvarez Constructora provides a comprehensive range of construction services. We combine expertise, quality materials, and meticulous project management to deliver outstanding results.
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
