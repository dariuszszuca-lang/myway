import { 
  Phone, 
  MapPin, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Music,
  MapIcon,
  Heart,
  Shield,
  Clock
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'O Nas', href: '/o-nas' },
    { label: 'Terapia', href: '/terapia' },
    { label: 'EduWay', href: '/eduway' },
    { label: 'Sklep MyWay', href: 'https://sklep-myway.pl', external: true },
    { label: 'Cennik', href: '/cennik' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  const services = [
    { label: 'Detoks od substancji', href: '#services' },
    { label: 'Terapia grupowa', href: '#services' },
    { label: 'Terapia indywidualna', href: '#services' },
    { label: 'Wsparcie po terapii', href: '#services' },
    { label: 'Komfortowy pobyt', href: '#services' },
  ];

  const socialMedia = [
    { 
      icon: Facebook, 
      name: 'Facebook', 
      link: 'https://www.facebook.com/osrodekleczeniauzalezniencom',
      color: 'hover:text-blue-500'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      link: 'https://www.instagram.com/krystiannagaba/',
      color: 'hover:text-pink-500'
    },
    { 
      icon: Youtube, 
      name: 'YouTube', 
      link: 'https://www.youtube.com/@krystiannagaba/videos',
      color: 'hover:text-red-500'
    },
    { 
      icon: Music, 
      name: 'TikTok', 
      link: 'https://www.tiktok.com/@krystian.nagaba',
      color: 'hover:text-gray-300'
    },
    { 
      icon: MapIcon, 
      name: 'Google Maps', 
      link: 'https://share.google/hx1ycCrHeU5OgdCXb',
      color: 'hover:text-green-500'
    },
  ];

  const trustIndicators = [
    {
      icon: Shield,
      text: 'Ośrodek leczenia uzależnień'
    },
    {
      icon: Heart,
      text: 'Całodobowa opieka'
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/c64cf2c8-c2d3-4584-817e-f02a9471e25d.png"
                  alt="MyWay - Ośrodek Leczenia Uzależnień"
                  className="h-16 w-auto mb-4"
                />
              </div>
              
              <p className="text-background/80 mb-6 leading-relaxed">
                Prywatny ośrodek leczenia uzależnień w pięknej lokalizacji w pobliżu Trójmiasta. 
                Tu odnajdziesz siłę, by żyć w trzeźwości.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-3">
                {trustIndicators.map((indicator) => (
                  <div key={indicator.text} className="flex items-center space-x-3">
                    <indicator.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-background/80">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-semibold text-background mb-6">
                Szybkie linki
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-display font-semibold text-background mb-6">
                Nasze usługi
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <a 
                      href={service.href}
                      className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-display font-semibold text-background mb-6">
                Kontakt
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a 
                      href="tel:+48731395295"
                      className="text-background hover:text-primary transition-colors font-medium"
                    >
                      +48 731 395 295
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-background/60">Adres</p>
                    <p className="text-background text-sm">
                      ul. Wichrowe Wzgórza 21<br />
                      Kąpino, Pomorskie 84-200
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-background/60">E-mail</p>
                    <a 
                      href="mailto:kontakt@osrodek-myway.pl"
                      className="text-background hover:text-primary transition-colors text-sm"
                    >
                      kontakt@osrodek-myway.pl
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="text-sm font-medium text-background mb-3">
                  Obserwuj nas
                </h5>
                <div className="flex space-x-3">
                  {socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5 text-background group-hover:text-primary-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="py-8 border-t border-background/20">
          <div className="bg-gradient-primary rounded-xl p-6 text-center">
            <h4 className="text-xl font-display font-bold text-primary-foreground mb-2">
              Potrzebujesz natychmiastowej pomocy?
            </h4>
            <p className="text-primary-foreground/90 mb-4">
              Nasza infolinia jest dostępna przez całą dobę
            </p>
            <a 
              href="tel:+48731395295"
              className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń teraz: +48 731 395 295</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-background/60 mb-4 md:mb-0">
              © 2024 MyWay - Prywatny Ośrodek Leczenia Uzależnień. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors">
                Polityka prywatności
              </a>
              <a href="/regulamin" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors">
                Regulamin
              </a>
              <a href="/cookies" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;