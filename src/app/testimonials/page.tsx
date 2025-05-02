import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react'; // Using Star icon for rating

// Placeholder testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John & Jane Smith',
    project: 'Custom Home Build',
    review: 'Alvarez Constructora exceeded our expectations! Their attention to detail and communication throughout the process were outstanding. We love our new home!',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=20',
    aiHint: 'couple smiling happy',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    project: 'Office Renovation',
    review: 'Professional, efficient, and high-quality work. Our office space was transformed on time and within budget. Highly recommend Alvarez Constructora.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=21',
    aiHint: 'businessman professional portrait',
  },
  {
    id: 3,
    name: 'Maria Garcia',
    project: 'Kitchen Remodel',
    review: 'The team was fantastic to work with. They listened to our ideas and brought our dream kitchen to life. The craftsmanship is superb.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=22',
    aiHint: 'woman smiling friendly',
  },
   {
    id: 4,
    name: 'David Lee',
    project: 'Retail Space Design',
    review: 'From concept to final design, Alvarez Constructora provided innovative solutions and expert guidance. Their architectural team is top-notch.',
    rating: 4, // Example of a 4-star rating
    avatar: 'https://picsum.photos/100/100?random=23',
    aiHint: 'man architect thoughtful',
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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Client Testimonials</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-16">
          Hear what our satisfied clients have to say about their experience working with Alvarez Constructora.
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
