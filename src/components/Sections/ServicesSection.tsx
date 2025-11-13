import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Brain, Home, Phone, ArrowRight } from 'lucide-react';
const ServicesSection = () => {
  const services = [{
    icon: Users,
    title: 'Grupowa terapia uzależnień',
    description: 'Siła wsparcia grupy i doświadczenia innych uzależnionych. Zyskasz pewność, że możesz wyzdrowieć i budować nowe relacje.',
    features: ['Wsparcie grupy', 'Wymiana doświadczeń', 'Motywacja wzajemna'],
    color: 'text-success',
    bgColor: 'bg-success/10'
  }, {
    icon: Brain,
    title: 'Indywidualna terapia uzależnień',
    description: 'Indywidualne podejście z doświadczonym terapeutą. Wypracowanie równowagi i umiejętności potrzebnych do trzeźwego życia.',
    features: ['Sesje 1 na 1', 'Plan indywidualny', 'Fokus na Twoje potrzeby'],
    color: 'text-warning',
    bgColor: 'bg-warning/10'
  }, {
    icon: Home,
    title: 'Komfortowy pobyt',
    description: 'Pobyt w komfortowych warunkach z pełnym wyżywieniem. Stwarzamy atmosferę sprzyjającą zdrowiu i regeneracji.',
    features: ['Komfortowe pokoje', 'Pełne wyżywienie', 'Przestrzeń relaksu'],
    color: 'text-primary-light',
    bgColor: 'bg-primary-light/10'
  }];
  return <section id="services" className="py-24 bg-background-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Nasze usługi
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Profesjonalny program terapeutyczny
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Leczenie w MY WAY oparte jest na sprawdzonych metodach, które pomagają odzyskać równowagę i zbudować zdrowe fundamenty życia
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => <Card key={service.title} className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map(feature => <li key={feature} className="flex items-center text-sm">
                      <div className={`w-2 h-2 ${service.bgColor} rounded-full mr-3`} />
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>


        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-display font-bold text-primary-foreground mb-4">
              Gotowy na zmianę swojego życia?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nie odkładaj decyzji o leczeniu. Każdy dzień to szansa na nowy początek.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Umów niezobowiązującą rozmowę
              </Button>
              <a href="tel:+48731395295" className="flex items-center space-x-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+48 731 395 295</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;