import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Shield, Heart, Users } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(/lovable-uploads/27aef970-950c-496c-9322-4dc72f39b068.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-backdrop" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-light/10 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Ośrodek leczenia uzależnień</span>
            </div>
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Całodobowa opieka</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Doświadczony zespół</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Znajdź swoją{' '}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              drogę
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Profesjonalny ośrodek leczenia uzależnień. Kompleksowa terapia i rehabilitacja z doświadczonym zespołem specjalistów. Skuteczne metody powrotu do trzeźwości.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="btn-premium text-lg px-8 py-4 group">
              Sięgnij po pomoc
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="tel:+48731395295"
              className="flex items-center space-x-3 text-primary-foreground hover:text-primary-light transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-lg font-medium">+48 731 395 295</p>
              </div>
            </a>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="glass-strong p-6 rounded-xl hover-lift">
              <div className="text-3xl font-display font-bold text-primary mb-2">250+</div>
              <div>pozytywnych opinii w sieci</div>
            </div>
            <div className="glass-strong p-6 rounded-xl hover-lift">
              <div className="text-3xl font-display font-bold text-primary mb-2">100 tys.+</div>
              <div>obserwujących</div>
            </div>
            <div className="glass-strong p-6 rounded-xl hover-lift">
              <div className="text-3xl font-display font-bold text-primary mb-2">1000+</div>
              <div>zadowolonych klientów</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
