'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-100 via-gray-50 to-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Modern building construction"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-20"
          priority
          data-ai-hint="modern building architecture"
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Alvarez Constructora
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Building the future with integrity and excellence.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Placeholder for additional sections (e.g., featured projects, brief about) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Discover how Alvarez Constructora brings innovation, quality, and reliability to every project. We are dedicated to exceeding expectations and building lasting relationships.
          </p>
           <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-primary">Quality Craftsmanship</h3>
                <p className="text-foreground/70">We use the finest materials and skilled professionals to ensure superior results.</p>
             </div>
             <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-primary">Client-Focused</h3>
                <p className="text-foreground/70">Your vision is our priority. We collaborate closely with you throughout the process.</p>
             </div>
             <div className="bg-card p-6 rounded-lg shadow-sm border border-border transition-shadow hover:shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-primary">Timely Delivery</h3>
                <p className="text-foreground/70">We respect your time and strive to complete projects on schedule and within budget.</p>
             </div>
           </div>
        </div>
      </section>
       <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
      `}</style>
    </div>
  );
}
