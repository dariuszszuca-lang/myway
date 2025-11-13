import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, MapPin, Clock, Mail, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    timeToCall: '',
    preferredHours: '',
    treatmentType: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare data for EmailJS
      const contactData = {
        name: formData.name,
        contact: formData.contact,
        preferred_time: formData.timeToCall && formData.preferredHours 
          ? `${formData.timeToCall} w godzinach ${formData.preferredHours}` 
          : formData.timeToCall || formData.preferredHours || undefined,
        treatment_type: formData.treatmentType || undefined,
        message: formData.message || undefined,
      };

      // Send email via EmailJS
      await sendContactEmail(contactData);

      toast({
        title: "Wiadomość wysłana!",
        description: "Skontaktujemy się z Tobą w najkrótszym możliwym czasie.",
      });
      
      // Reset form
      setFormData({
        name: '',
        contact: '',
        timeToCall: '',
        preferredHours: '',
        treatmentType: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Błąd wysyłania",
        description: error.message || "Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń bezpośrednio.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+48 731 395 295',
      link: 'tel:+48731395295',
      description: 'Czynny w godz. 6:00 - 22:00'
    },
    {
      icon: MapPin,
      title: 'Adres ośrodka',
      content: 'ul. Wichrowe Wzgórza 21\nKąpino, Pomorskie 84-200',
      link: null,
      description: 'W pobliżu Gdańska'
    },
    {
      icon: Clock,
      title: 'Godziny przyjęć',
      content: 'Ustalane indywidualnie',
      link: null,
      description: 'Skontaktuj się z nami'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'kontakt@osrodek-myway.pl',
      link: 'mailto:kontakt@osrodek-myway.pl',
      description: 'Odpowiadamy w ciągu 24h'
    }
  ];

  return (
    <div className="min-h-screen bg-background-subtle">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Phone className="w-4 h-4 mr-2" />
              Kontakt
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Nie jesteś sam -{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                skontaktuj się z nami
              </span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              W życiu każdego człowieka może nadejść moment, gdy samodzielne radzenie sobie z problemem uzależnienia staje się niemożliwe. Wtedy potrzebne jest wsparcie - pełne zrozumienia, empatii i fachowej wiedzy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Informacje kontaktowe
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="group hover-lift border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display font-semibold mb-1">
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-primary hover:text-primary-light transition-colors font-medium whitespace-pre-line"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="whitespace-pre-line">
                                {info.content}
                              </p>
                            )}
                            <p className="text-sm text-muted-foreground mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Umów niezobowiązującą rozmowę
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">
                          Imię i nazwisko *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jak mamy się do Ciebie zwracać?"
                          required
                          className="h-12 bg-gray-100"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">
                          Telefon/Email *
                        </label>
                        <Input
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          placeholder="Jak możemy się z Tobą skontaktować?"
                          required
                          className="h-12 bg-gray-100"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">
                          Kiedy mamy zadzwonić?
                        </label>
                        <Input
                          type="date"
                          value={formData.timeToCall}
                          onChange={(e) => setFormData({ ...formData, timeToCall: e.target.value })}
                          className="h-12 bg-gray-100"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">
                          W jakich godzinach?
                        </label>
                        <Select onValueChange={(value) => setFormData({ ...formData, preferredHours: value })}>
                          <SelectTrigger className="h-12 bg-gray-100">
                            <SelectValue placeholder="Wybierz przedział godzinowy" />
                          </SelectTrigger>
                          <SelectContent className="bg-black text-white">
                            <SelectItem value="8:00-12:00">8:00-12:00</SelectItem>
                            <SelectItem value="12:00-16:00">12:00-16:00</SelectItem>
                            <SelectItem value="16:00-22:00">16:00-22:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Rodzaj leczenia
                      </label>
                      <Select onValueChange={(value) => setFormData({ ...formData, treatmentType: value })}>
                        <SelectTrigger className="h-12 bg-gray-100">
                          <SelectValue placeholder="Wybierz rodzaj leczenia" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white">
                          <SelectItem value="pierwsze-podejscie">Pierwsze podejście</SelectItem>
                          <SelectItem value="powrot-do-naloga">Powrót do nałogu</SelectItem>
                          <SelectItem value="dodatkowy-okres">Dodatkowy okres</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Dodatkowe informacje
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Opisz swoją sytuację lub zadaj pytanie..."
                        rows={4}
                        className="resize-none bg-gray-100"
                      />
                    </div>

                    <Button type="submit" size="lg" className="btn-premium w-full group" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      )}
                      {isLoading ? 'Wysyłanie...' : 'Zamów rozmowę'}
                    </Button>

                    <p className="text-xs text-foreground-muted text-center">
                      Twoje dane są bezpieczne i nie będą przekazywane osobom trzecim. 
                      Skontaktujemy się z Tobą w wybranym przez Ciebie czasie.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Znajdź nas</h2>
              <p className="text-foreground-muted">Odwiedź nasz ośrodek w malowniczej okolicy Pomorskiego</p>
            </div>
            
            <Card className="border-0 shadow-lg overflow-hidden max-w-4xl mx-auto">
              <div className="w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2309.6743685272613!2d18.258518477286284!3d54.62734237268847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda17ea9a6ceed%3A0xd18689e7fe5655cf!2sMy%20Way%20-%20O%C5%9Brodek%20Leczenia%20Uzale%C5%BCnie%C5%84!5e0!3m2!1spl!2spl!4v1755183929930!5m2!1spl!2spl" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;