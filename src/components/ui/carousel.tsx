'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface CarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export function Carousel({ images, className, ...props }: CarouselProps & React.HTMLAttributes<HTMLDivElement>) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  React.useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden group", className)} {...props}>
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover opacity-0 transition-opacity duration-500"
          quality={100}
          priority
          sizes="100vw"
          onLoadingComplete={(img) => {
            img.classList.remove('opacity-0');
          }}
          onError={(e) => {
            e.currentTarget.classList.remove('opacity-0');
          }}
        />
        <Skeleton className="absolute inset-0 -z-10" />
      </div>

      {/* Navigation Buttons */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-black/30"
          onClick={previousSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Anterior</span>
        </Button>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-black/30"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-[50%] transform -translate-x-[50%] flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Diapositiva {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}