import { FloatingChatButton } from '../components/ui/FloatingChatButton';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Usa --font-sans para la integración con Tailwind
});

export const metadata: Metadata = {
  title: 'GZA Solutions S.A.C. - Construyendo el Futuro',
  description: 'GZA Solutions S.A.C. ofrece servicios de construcción de primer nivel, incluyendo construcción residencial, proyectos comerciales, remodelaciones y diseño arquitectónico. Construyendo el futuro con integridad y excelencia.',
  keywords: 'construcción, construcción residencial, proyectos comerciales, remodelaciones, diseño arquitectónico, GZA Solutions S.A.C., construcción, contratista',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn('antialiased font-sans bg-background text-foreground min-h-screen flex flex-col', inter.variable)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      <FloatingChatButton />
      </body>
    </html>
  );
}
