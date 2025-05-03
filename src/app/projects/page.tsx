import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Datos de proyectos de ejemplo
const projects = [
  { id: 1, title: 'Casa Familiar Moderna', category: 'Residencial', image: 'https://picsum.photos/600/400?random=10', aiHint: 'exterior de casa familiar moderna al atardecer' },
  { id: 2, title: 'Complejo de Oficinas en el Centro', category: 'Comercial', image: 'https://picsum.photos/600/400?random=11', aiHint: 'edificio de oficinas moderno exterior de día' },
  { id: 3, title: 'Remodelación de Cocina de Lujo', category: 'Remodelación', image: 'https://picsum.photos/600/400?random=12', aiHint: 'interior de cocina moderna de lujo' },
  { id: 4, title: 'Diseño de Villa Sostenible', category: 'Diseño', image: 'https://picsum.photos/600/400?random=13', aiHint: 'boceto de diseño de casa sostenible' },
  { id: 5, title: 'Propiedad Frente al Mar', category: 'Residencial', image: 'https://picsum.photos/600/400?random=14', aiHint: 'exterior moderno de casa frente al mar' },
  { id: 6, title: 'Acondicionamiento de Tienda Minorista', category: 'Comercial', image: 'https://picsum.photos/600/400?random=15', aiHint: 'interior moderno de tienda minorista vacía' },
  { id: 7, title: 'Restauración de Casa Histórica', category: 'Remodelación', image: 'https://picsum.photos/600/400?random=16', aiHint: 'exterior restaurado de casa histórica' },
  { id: 8, title: 'Plano de Centro Comunitario', category: 'Diseño', image: 'https://picsum.photos/600/400?random=17', aiHint: 'plano arquitectónico de centro comunitario' },
];

const categories = ['Todos', 'Residencial', 'Comercial', 'Remodelación', 'Diseño'];

export default function ProjectsPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Nuestros Proyectos</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-10">
          Explora una selección de nuestros proyectos completados, que muestran nuestras diversas capacidades y compromiso con la calidad en varios sectores.
        </p>

        <Tabs defaultValue="Todos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-10 mx-auto max-w-2xl h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => category === 'Todos' || project.category === category)
                  .map((project) => (
                    <Card key={project.id} className="overflow-hidden group border-secondary shadow-sm hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative h-60 w-full overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={project.aiHint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                             <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-primary font-medium">{project.category}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
