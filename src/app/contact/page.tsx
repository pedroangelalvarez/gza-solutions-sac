import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const lat = -12.093023293630683;
    const lng = -77.02620515044674;
    const zoom = 18;
  
    const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Contactanos</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-16">
        ¡Nos encantaría saber de ti! Ya sea que tengas una pregunta sobre nuestros servicios o quieras hablar sobre tu próximo proyecto, no dudes en comunicarte.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
             <Card className="border-secondary shadow-sm">
               <CardHeader>
                 <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
               </CardHeader>
               <CardContent>
                 <ContactForm />
               </CardContent>
             </Card>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <Card className="border-secondary shadow-sm bg-secondary/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Nuestra Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Dirección</h3>
                    <p className="text-foreground/80">Dean valdivia 243<br/>San Isidro<br/>Perú</p>
                  </div>
                </div>
                }
                <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Teléfono</h3>
                  <div className="flex flex-col text-foreground/80 space-y-1">
                    <a href="tel:+51998801864" className="hover:text-primary transition-colors">(51) 998801864</a>
                    <a href="tel:+51967744523" className="hover:text-primary transition-colors">(51) 967744523</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <div className="flex flex-col text-foreground/80 space-y-1">
                    <a href="mailto:herbert.alvarez@gzasolutions.com" className="hover:text-primary transition-colors">herbert.alvarez@gzasolutions.com</a>
                    <a href="mailto:albino.gomez@gzasolutions.com" className="hover:text-primary transition-colors">albino.gomez@gzasolutions.com</a>
                  </div>
                </div>
              </div>
            </CardContent>
            </Card>

             {/* Placeholder Map */}
             <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border border-border">
             <iframe
                title="Mapa"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
