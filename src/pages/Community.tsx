import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Calendar,
  Star,
  Shield,
  UserCheck,
  Phone
} from 'lucide-react';

const Community = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: "Grupa wsparcia",
      description: "Regularne spotkania z osobami, które przeszły podobną drogę. Dziel się doświadczeniami i czerpij siłę z wzajemnego wsparcia."
    },
    {
      icon: MessageCircle,
      title: "Czat WhatsApp 24/7",
      description: "Zawsze dostępna grupa wsparcia na WhatsApp. Możesz pisać o swoich wyzwaniach i sukcesach o każdej porze dnia i nocy."
    },
    {
      icon: Calendar,
      title: "Spotkania mentorskie",
      description: "Regularne konsultacje z doświadczonymi terapeutami i osobami, które pomyślnie ukończyły terapię."
    },
    {
      icon: UserCheck,
      title: "Program buddy",
      description: "Zostań sparowany z mentorem, który przeszedł podobną drogę i może podzielić się swoimi doświadczeniami."
    }
  ];

  const testimonials = [
    {
      name: "Anna M.",
      quote: "Grupa wsparcia to była najważniejsza część mojego powrotu do zdrowia. Wiedziałam, że nie jestem sama.",
      time: "6 miesięcy po terapii"
    },
    {
      name: "Tomasz K.",
      quote: "WhatsApp grupa uratowała mnie w najtrudniejszych momentach. Zawsze ktoś był gotowy pomóc.",
      time: "1 rok po terapii"
    },
    {
      name: "Magdalena S.",
      quote: "Mój mentor stał się moim najlepszym przyjacielem. To niesamowite jak można się wspierać.",
      time: "2 lata po terapii"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background-subtle to-background-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Nasza społeczność
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Razem jesteśmy{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                silniejsi
              </span>
            </h1>
            
            <p className="text-xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Po zakończeniu terapii nie zostawiamy Cię samego. Nasza społeczność to miejsce, 
              gdzie możesz dzielić się sukcesami, wyzwaniami i czerpać siłę z wzajemnego wsparcia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="btn-premium">
                <MessageCircle className="w-5 h-5 mr-2" />
                Dołącz do grupy WhatsApp
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Następne spotkanie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Jak działamy razem
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Nasza społeczność to sieć wsparcia, która pomoże Ci utrzymać pozytywne zmiany w życiu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">{feature.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Historie{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                powrotu do życia
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Poznaj historie osób, które z pomocą naszej społeczności odzyskały kontrolę nad swoim życiem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground-muted mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-foreground-muted">{testimonial.time}</div>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Rules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Zasady społeczności
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Bezpieczne miejsce dla wszystkich
              </h2>
              <p className="text-xl text-foreground-muted">
                Nasze zasady pomagają stworzyć środowisko pełne szacunku i wzajemnego wsparcia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Zachowuj anonimowość innych uczestników",
                "Szanuj różnorodność doświadczeń",
                "Oferuj wsparcie bez osądzania",
                "Dziel się pozytywnie i konstruktywnie",
                "Przestrzegaj poufności grupy",
                "Bądź obecny i zaangażowany"
              ].map((rule, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 glass rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground-muted">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background-subtle to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Gotowy na{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                nowy początek?
              </span>
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Dołącz do naszej społeczności już dziś. Pierwszy krok to tylko telefon lub wiadomość.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="btn-premium">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń teraz: +48 731 395 295
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Napisz na WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;