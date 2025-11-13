import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Users, 
  Clock, 
  Heart, 
  CheckCircle,
  ArrowRight,
  Star,
  Shield
} from 'lucide-react';
import interiorBackground from '@/assets/interior-bg.jpg';

const AboutSection = () => {
  const stats = [
    {
      icon: Star,
      label: 'Terapia podstawowa oparta na psychologii pozytywnej'
    },
    {
      icon: Users,
      label: 'Darmowe zjazdy dla absolwentów w każdą sobotę'
    },
    {
      icon: Award,
      label: 'Cotygodniowe spotkania Grup Online z całej Europy'
    },
    {
      icon: Star,
      label: 'Dzienniki MyWay na cały rok dla wsparcia i motywacji'
    }
  ];

  const features = [
    {
      icon: Heart,
      title: 'Indywidualny plan terapii',
      description: 'Każdy przypadek jest inny, dlatego dostosowujemy metody pracy do potrzeb pacjenta'
    },
    {
      icon: Users,
      title: 'Doświadczona kadra',
      description: 'Terapeuci, psychologowie, psychiatrzy i specjaliści uzależnień z wieloletnią praktyką'
    },
    {
      icon: Shield,
      title: 'Kompleksowa opieka',
      description: 'Terapia grupowa i indywidualna, wsparcie psychiatryczne, zajęcia rozwojowe'
    },
    {
      icon: Clock,
      title: 'Bezpieczne i komfortowe warunki',
      description: 'Kameralny ośrodek położony w otoczeniu lasów, sprzyjający wyciszeniu i regeneracji'
    }
  ];

  const values = [
    'Psychologia pozytywna - skupiamy się na budowaniu mocnych stron',
    'Terapie poznawczo-behawioralne (CBT) pomagające zmienić wzorce myślenia',
    'Terapia oparta na motywacji - znajdź wewnętrzną siłę do zmiany',
    'Trening umiejętności społecznych - rozwijaj komunikację i relacje',
    'Warsztaty rozwoju osobistego - praca nad samoświadomością',
    'Zajęcia relaksacyjne i aktywizujące - równowaga ciała i umysłu'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements with uploaded facility image */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(/lovable-uploads/093a3ed7-6abf-421e-b672-f061a263ae54.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>
      {/* Dark overlay for better readability with brightened theme */}
      <div className="absolute inset-0 bg-background/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            O nas
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Dlaczego{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              MyWay?
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-4xl mx-auto leading-relaxed">
            Twój komfort. Twoje tempo. Twój wybór. Każdy dzień w MY WAY to krok w stronę życia bez nałogu.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group text-center border-0 shadow-lg hover:shadow-xl hover-lift transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold">
                  {stat.label}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-display font-bold text-foreground mb-6">
              Profesjonalny program terapeutyczny
            </h3>
            <p className="text-foreground-muted mb-6 leading-relaxed text-lg">
              W życiu każdego człowieka może nadejść moment, gdy samodzielne radzenie sobie z problemem 
              uzależnienia staje się niemożliwe. Wtedy potrzebne jest wsparcie - pełne zrozumienia, 
              empatii i fachowej wiedzy.
            </p>
            <p className="text-foreground-muted mb-8 leading-relaxed">
              Leczenie w MY WAY oparte jest na sprawdzonych metodach, które pomagają odzyskać równowagę 
              i zbudować zdrowe fundamenty życia. Wykorzystujemy metody terapeutyczne skupione na 
              przyszłości i budowaniu mocnych stron osobowości.
            </p>

            {/* Values List */}
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground">{value}</span>
                </div>
              ))}
            </div>

            <a href="/kontakt" target="_blank" rel="noopener noreferrer">
              <Button className="btn-premium group">
                Umów się na rozmowę
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group border-0 shadow-md hover:shadow-lg hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-primary border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-display font-bold text-primary-foreground mb-4">
                Dlaczego warto zaufać naszej ekspertyzie?
              </h3>
              <p className="text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-lg">
                MyWay to nie tylko renomowany ośrodek odwykowy niedaleko Gdańska, 
                lecz instytucja, w której priorytetem jest przede wszystkim dobro Pacjenta. 
                Stawiamy na holistyczne podejście w walce o zdrowie psychiczne i fizyczne.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
                  <a href="/o-nas" target="_blank" rel="noopener noreferrer">
                    Poznaj nasz zespół
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="/o-nas#galeria" target="_blank" rel="noopener noreferrer">
                    Zobacz galerię ośrodka
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
