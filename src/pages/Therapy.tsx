import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Users, 
  Clock, 
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  ArrowRight,
  Wine,
  Pill,
  Syringe,
  Dice6,
  FlaskConical,
  Stethoscope,
  Activity
} from 'lucide-react';

const Therapy = () => {
  const therapyMethods = [
    {
      icon: Users,
      title: "Terapia grupowa",
      description: "Wsparcie w grupie osób przechodzących podobne doświadczenia. Dzielenie się i wzajemna motywacja.",
      features: ["Grupa wsparcia", "Wspólne ćwiczenia", "Wymiana doświadczeń", "Budowanie więzi"]
    },
    {
      icon: Heart,
      title: "Terapia indywidualna",
      description: "Spersonalizowane podejście dostosowane do Twoich potrzeb. Praca jeden na jeden z doświadczonym terapeutą.",
      features: ["Ocena stanu zdrowia", "Plan terapeutyczny", "Regularne sesje", "Monitoring postępów"]
    },
    {
      icon: Users,
      title: "Terapia grupowa online",
      description: "Kontynuacja wsparcia grupowego po wyjściu z ośrodka. Regularne spotkania online z grupą terapeutyczną.",
      features: ["Spotkania online", "Ciągłość wsparcia", "Spotkania 2x w tygodniu", "Długoterminowa pomoc"]
    },
    {
      icon: Shield,
      title: "Terapia rodzinna",
      description: "Włączenie najbliższych w proces zdrowienia. Praca nad relacjami i komunikacją w rodzinie.",
      features: ["Sesje rodzinne", "Edukacja bliskich", "Wsparcie systemu", "Odbudowa zaufania"]
    }
  ];

  const treatmentTypes = [
    {
      icon: Wine,
      title: "Leczenie alkoholizmu",
      description: "Kompleksowa terapia uzależnienia od alkoholu z użyciem nowoczesnych metod leczenia.",
      features: ["Detoksykacja alkoholowa", "Terapia psychologiczna", "Wsparcie medyczne", "Program reintegracji"]
    },
    {
      icon: Pill,
      title: "Leczenie lekomanii", 
      description: "Specjalistyczne programy dla osób uzależnionych od leków psychotropowych.",
      features: ["Stopniowe odstawianie", "Kontrola medyczna", "Terapia zastępcza", "Edukacja zdrowotna"]
    },
    {
      icon: Syringe,
      title: "Leczenie narkomanii",
      description: "Profesjonalne wsparcie w walce z uzależnieniem od substancji psychoaktywnych.",
      features: ["Terapia substytucyjna", "Redukcja szkód", "Resocjalizacja", "Wsparcie rodziny"]
    },
    {
      icon: Dice6,
      title: "Leczenie uzależnienia od hazardu",
      description: "Specjalistyczna terapia uzależnień behawioralnych i patologicznego hazardu.",
      features: ["Terapia poznawcza", "Kontrola finansów", "Grupy wsparcia", "Profilaktyka nawrotów"]
    }
  ];

  const detoxServices = [
    {
      icon: FlaskConical,
      title: "Detoks alkoholowy",
      description: "Bezpieczne oczyszczenie organizmu z alkoholu pod stałą opieką medyczną.",
      duration: "3-7 dni",
      features: ["Monitoring 24/7", "Wsparcie farmakologiczne", "Kontrola objawów", "Przygotowanie do terapii"]
    },
    {
      icon: Stethoscope,
      title: "Detoks lekowy",
      description: "Kontrolowane odstawianie leków psychotropowych z minimalizacją objawów odstawiennych.",
      duration: "5-14 dni", 
      features: ["Redukcja stopniowa", "Alternatywne leczenie", "Monitoring EKG", "Wsparcie psychiatryczne"]
    },
    {
      icon: Activity,
      title: "Detoks narkotykowy",
      description: "Kompleksowy program detoksykacji od substancji psychoaktywnych.",
      duration: "7-21 dni",
      features: ["Terapia substytucyjna", "Leczenie objawowe", "Wsparcie żywieniowe", "Przygotowanie psychiczne"]
    }
  ];

  const treatmentPhases = [
    {
      phase: "Faza 1",
      title: "Detoksykacja i stabilizacja dla osób kontynuujących terapię w ośrodku",
      description: "Bezpieczne oczyszczenie organizmu pod stałą opieką medyczną",
      activities: ["Ocena medyczna", "Monitorowanie stanu", "Wsparcie farmakologiczne", "Pierwsza pomoc psychologiczna"]
    },
    {
      phase: "Faza 2", 
      title: "Intensywna terapia oparta na psychologii pozytywnej",
      description: "Główny etap pracy terapeutycznej z psychologami i terapeutami",
      activities: ["Terapia grupowa", "Terapia indywidualna", "Warszaty tematyczne", "Psychologia pozytywna"]
    },
    {
      phase: "Faza 3",
      title: "Przygotowanie do wyjścia",
      duration: "2-4 tygodnie", 
      description: "Przygotowanie do powrotu do społeczeństwa i utrzymania trzeźwości",
      activities: ["Plan po-terapii", "Wsparcie społeczności", "Strategie radzenia sobie", "Kontakty pomocowe"]
    },
    {
      phase: "Faza 4",
      title: "Po wyjściu",
      duration: "Długoterminowo", 
      description: "Kontynuacja wsparcia i utrzymanie trzeźwości po opuszczeniu ośrodka",
      activities: ["Terapia grupowa online", "Spotkania sobotnie w ośrodku", "Społeczność", "Wsparcie long-term"]
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
              <Heart className="w-4 h-4 mr-2" />
              Profesjonalna terapia
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Twoja droga do{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                wolności
              </span>
            </h1>
            
            <p className="text-xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Nasze profesjonalne programy terapeutyczne są dostosowane indywidualnie do Twoich potrzeb. 
              Oferujemy kompleksowe wsparcie na każdym etapie powrotu do zdrowia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-premium">
                  <Calendar className="w-5 h-5 mr-2" />
                  Umów konsultację
                </Button>
              </a>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: +48 731 395 295
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Metody terapeutyczne
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Wykorzystujemy sprawdzone metody terapeutyczne dostosowane do indywidualnych potrzeb każdego pacjenta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {therapyMethods.map((method, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <method.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-3">{method.title}</h3>
                  <p className="text-card-foreground mb-4 text-sm leading-relaxed">{method.description}</p>
                  <ul className="space-y-1">
                    {method.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-card-foreground">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Types */}
      <section className="py-20 bg-background-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Rodzaje{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                leczenia
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Oferujemy specjalistyczne programy leczenia dostosowane do różnych rodzajów uzależnień
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {treatmentTypes.map((treatment, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <treatment.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-3">{treatment.title}</h3>
                  <p className="text-card-foreground mb-4 text-sm leading-relaxed">{treatment.description}</p>
                  <ul className="space-y-1">
                    {treatment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-card-foreground">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Phases */}
      <section className="py-20 bg-background-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Etapy{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                terapii
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Nasz program terapeutyczny składa się z trzech głównych etapów, każdy z nich ma swoje cele i metody
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {treatmentPhases.map((phase, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                
                <Card className="flex-1 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <div className="text-sm text-primary font-medium mb-1">{phase.phase}</div>
                        <h3 className="text-2xl font-display font-semibold">{phase.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-card-foreground mb-6 leading-relaxed">{phase.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center text-sm text-card-foreground">
                            <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {activity}
                          </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background-subtle to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Rozpocznij swoją{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                przemianę już dziś
              </span>
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Każda wielka podróż zaczyna się od pierwszego kroku. Zrób ten krok już dziś i odzyskaj kontrolę nad swoim życiem.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="btn-premium">
                <Phone className="w-5 h-5 mr-2" />
                Umów rozmowę: +48 731 395 295
              </Button>
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Wybierz termin online
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Therapy;