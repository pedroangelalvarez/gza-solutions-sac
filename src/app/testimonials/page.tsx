import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react'; // Using Star icon for rating

// Placeholder testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John & Jane Smith',
    project: 'Construcción de Casa Personalizada',
    review: '¡Alvarez Constructora superó nuestras expectativas! Su atención al detalle y comunicación durante todo el proceso fueron excepcionales. ¡Nos encanta nuestra nueva casa!',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=20',
    aiHint: 'pareja sonriendo feliz',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    project: 'Renovación de Oficina',
    review: 'Profesionales, eficientes y con un trabajo de alta calidad. Nuestro espacio de oficina fue transformado a tiempo y dentro del presupuesto. Altamente recomendados.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=21',
    aiHint: 'empresario retrato profesional',
  },
  {
    id: 3,
    name: 'Maria Garcia',
    project: 'Remodelación de Cocina',
    review: 'El equipo fue fantástico para trabajar. Escucharon nuestras ideas y dieron vida a la cocina de nuestros sueños. La calidad del trabajo es excelente.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=22',
    aiHint: 'mujer sonriendo amigable',
  },
   {
    id: 4,
    name: 'David Lee',
    project: 'Diseño de Espacio Comercial',
    review: 'Desde el concepto hasta el diseño final, Alvarez Constructora brindó soluciones innovadoras y orientación experta. Su equipo de arquitectura es de primera categoría.',
    rating: 4, // Ejemplo de una calificación de 4 estrellas
    avatar: 'https://picsum.photos/100/100?random=23',
    aiHint: 'hombre arquitecto pensativo',
  },
];

function renderStars(rating: number) {
  return Array(5).fill(0).map((_, i) => (
    <Star
      key={i}
      className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted-foreground'}`}
    />
  ));
}


export default function TestimonialsPage() {
  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Testimonios de Clientes</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-16">
          Descubre lo que nuestros clientes satisfechos tienen que decir sobre su experiencia trabajando con Alvarez Constructora.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                   <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-2 pb-4 flex-grow">
                <p className="text-foreground/80 italic">&quot;{testimonial.review}&quot;</p>
              </CardContent>
              <CardFooter className="pt-4 border-t border-border">
                 <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                 </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
