import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Placeholder project data
const projects = [
  { id: 1, title: 'Modern Family Home', category: 'Residential', image: 'https://picsum.photos/600/400?random=10', aiHint: 'modern family house exterior sunset' },
  { id: 2, title: 'Downtown Office Complex', category: 'Commercial', image: 'https://picsum.photos/600/400?random=11', aiHint: 'modern office building exterior day' },
  { id: 3, title: 'Luxury Kitchen Remodel', category: 'Remodeling', image: 'https://picsum.photos/600/400?random=12', aiHint: 'luxury modern kitchen interior' },
  { id: 4, title: 'Sustainable Villa Design', category: 'Design', image: 'https://picsum.photos/600/400?random=13', aiHint: 'sustainable house design sketch' },
  { id: 5, title: 'Beachfront Property', category: 'Residential', image: 'https://picsum.photos/600/400?random=14', aiHint: 'beach house exterior modern' },
  { id: 6, title: 'Retail Store Fit-out', category: 'Commercial', image: 'https://picsum.photos/600/400?random=15', aiHint: 'modern retail store interior empty' },
  { id: 7, title: 'Historic Home Restoration', category: 'Remodeling', image: 'https://picsum.photos/600/400?random=16', aiHint: 'historic house exterior restored' },
  { id: 8, title: 'Community Center Blueprint', category: 'Design', image: 'https://picsum.photos/600/400?random=17', aiHint: 'architectural blueprint community center' },
];

const categories = ['All', 'Residential', 'Commercial', 'Remodeling', 'Design'];

export default function ProjectsPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Nuestros Proyectos</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-10">
          Explora una selección de nuestros proyectos completados, que muestran nuestras diversas capacidades y compromiso con la calidad en varios sectores.
        </p>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-10 mx-auto max-w-2xl h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {category === 'All' ? 'Todos' : category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => category === 'All' || project.category === category)
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
