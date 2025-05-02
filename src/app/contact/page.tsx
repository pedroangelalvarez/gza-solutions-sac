import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Contact Us</h1>
        <p className="text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-16">
          We&apos;d love to hear from you! Whether you have a question about our services or want to discuss your next project, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
             <Card className="border-secondary shadow-sm">
               <CardHeader>
                 <CardTitle className="text-2xl">Send Us a Message</CardTitle>
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
                <CardTitle className="text-2xl text-primary">Our Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-foreground/80">123 Construction Way<br/>Building City, BC 12345<br/>Canada</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                   <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+1234567890" className="text-foreground/80 hover:text-primary transition-colors">(123) 456-7890</a>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@alvarezconstructora.com" className="text-foreground/80 hover:text-primary transition-colors">info@alvarezconstructora.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>

             {/* Placeholder Map */}
             <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border border-border">
               <MapPin className="h-10 w-10 mr-2"/> Placeholder Map Area
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
