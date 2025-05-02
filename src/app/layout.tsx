import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Use --font-sans for Tailwind integration
});

export const metadata: Metadata = {
  title: 'Alvarez Constructora - Building the Future',
  description: 'Alvarez Constructora offers premier construction services including residential, commercial, remodeling, and architectural design. Building the future with integrity and excellence.',
  keywords: 'construction, residential construction, commercial projects, remodeling, architectural design, Alvarez Constructora, building, contractor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('antialiased font-sans bg-background text-foreground min-h-screen flex flex-col', inter.variable)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
