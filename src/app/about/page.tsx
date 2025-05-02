import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">About Alvarez Constructora</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Founded on the principles of quality, integrity, and client satisfaction, Alvarez Constructora has grown from a small local builder into a respected construction company known for tackling projects of all sizes with unwavering dedication.
            </p>
            <p className="text-lg text-foreground/80">
              Our team comprises experienced professionals passionate about construction and committed to delivering excellence. We believe in building not just structures, but also strong relationships with our clients based on trust and transparency.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
             <Image
              src="https://picsum.photos/800/600?grayscale"
              alt="Construction team meeting"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
              data-ai-hint="construction team planning"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-secondary shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                To deliver high-quality construction services through innovation, skilled craftsmanship, and a commitment to safety and sustainability, ensuring every project exceeds client expectations and contributes positively to the community.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">
                To be the leading construction company recognized for our integrity, excellence, and innovative solutions, shaping the future of the built environment while fostering lasting relationships with clients, partners, and employees.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['Integrity', 'Quality', 'Safety', 'Collaboration'].map((value) => (
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
