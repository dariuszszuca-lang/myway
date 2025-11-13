import { ArrowLeft, Cookie, Settings, Eye, Database, Shield, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Powrót do strony głównej</span>
            </Link>
            
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Cookie className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Polityka Cookies
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Informacje o wykorzystywaniu plików cookies na naszej stronie internetowej
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* What are Cookies */}
            <div className="bg-card rounded-xl p-8 mb-12 border border-border">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                <Cookie className="w-6 h-6 text-primary" />
                <span className="!text-gray-900">Czym są pliki cookies?</span>
              </h2>
              
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-gray-700 mb-4">
                  Pliki cookies to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu 
                  (komputerze, tablecie, smartfonie) podczas przeglądania stron internetowych.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Cookies umożliwiają stronie internetowej rozpoznanie Twojego urządzenia i zapamiętanie 
                  pewnych informacji o Twoich preferencjach lub poprzednich działaniach.
                </p>
                
                <p className="text-gray-700">
                  Pliki cookies nie szkodzą Twojemu urządzeniu ani nie mogą być używane do 
                  identyfikacji Cię osobiście.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="bg-card rounded-xl p-8 mb-12 border border-border">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                <Database className="w-6 h-6 text-primary" />
                <span className="!text-gray-900">Rodzaje cookies na naszej stronie</span>
              </h2>
              
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold !text-gray-900 mb-3">Cookies niezbędne</h3>
                    <p className="text-gray-700 mb-4">
                      Te pliki cookies są konieczne do prawidłowego funkcjonowania strony. 
                      Bez nich niektóre funkcje mogą nie działać poprawnie.
                    </p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Obsługa sesji użytkownika</li>
                      <li>• Bezpieczeństwo strony</li>
                      <li>• Funkcjonalność formularzy</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold !text-gray-900 mb-3">Cookies analityczne</h3>
                    <p className="text-gray-700 mb-4">
                      Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony, 
                      dzięki czemu możemy ją ulepszać.
                    </p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Statystyki odwiedzin</li>
                      <li>• Analiza ruchu na stronie</li>
                      <li>• Optymalizacja treści</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold !text-gray-900 mb-3">Cookies funkcjonalne</h3>
                    <p className="text-gray-700 mb-4">
                      Zapamiętują Twoje preferencje i personalizują doświadczenie 
                      korzystania ze strony.
                    </p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Ustawienia języka</li>
                      <li>• Preferencje wyświetlania</li>
                      <li>• Zapamiętane wybory</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold !text-gray-900 mb-3">Cookies marketingowe</h3>
                    <p className="text-gray-700 mb-4">
                      Używane do śledzenia odwiedzających na stronach internetowych 
                      w celu wyświetlania reklam.
                    </p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Personalizacja reklam</li>
                      <li>• Śledzenie konwersji</li>
                      <li>• Remarketing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Party Cookies */}
            <div className="bg-card rounded-xl p-8 mb-12 border border-border">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                <Eye className="w-6 h-6 text-primary" />
                <span className="!text-gray-900">Cookies zewnętrzne</span>
              </h2>
              
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-gray-700 mb-6">
                  Na naszej stronie mogą być również stosowane cookies pochodzące od zewnętrznych dostawców:
                </p>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold !text-gray-900 mb-2">Google Analytics</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Używane do analizy ruchu na stronie i zachowań użytkowników
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Więcej informacji:</strong> 
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 ml-1">
                        Google Privacy Policy
                      </a>
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold !text-gray-900 mb-2">Google Maps</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Używane do wyświetlania interaktywnych map
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Więcej informacji:</strong> 
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 ml-1">
                        Google Privacy Policy
                      </a>
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold !text-gray-900 mb-2">Social Media</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Cookies z platform społecznościowych (Facebook, Instagram, YouTube)
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Więcej informacji:</strong> Polityki prywatności odpowiednich platform
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="bg-card rounded-xl p-8 mb-12 border border-border">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                <Settings className="w-6 h-6 text-primary" />
                <span className="!text-gray-900">Zarządzanie cookies</span>
              </h2>
              
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-gray-700 mb-6">
                  Możesz kontrolować i zarządzać plikami cookies na kilka sposobów:
                </p>
                
                <h3 className="text-lg font-semibold !text-gray-900 mb-4">Ustawienia przeglądarki</h3>
                <p className="text-gray-700 mb-4">
                  Większość przeglądarek internetowych automatycznie akceptuje pliki cookies, 
                  ale możesz zmienić ustawienia, aby blokować cookies lub otrzymywać powiadomienia.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold !text-gray-900 mb-2">Chrome:</h4>
                    <p className="text-gray-700 text-sm">Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</p>
                  </div>
                  <div>
                    <h4 className="font-semibold !text-gray-900 mb-2">Firefox:</h4>
                    <p className="text-gray-700 text-sm">Opcje → Prywatność i bezpieczeństwo → Pliki cookie</p>
                  </div>
                  <div>
                    <h4 className="font-semibold !text-gray-900 mb-2">Safari:</h4>
                    <p className="text-gray-700 text-sm">Preferencje → Prywatność → Pliki cookie</p>
                  </div>
                  <div>
                    <h4 className="font-semibold !text-gray-900 mb-2">Edge:</h4>
                    <p className="text-gray-700 text-sm">Ustawienia → Pliki cookie i uprawnienia witryn</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold !text-gray-900 mb-2 flex items-center">
                    <Shield className="w-4 h-4 text-yellow-600 mr-2" />
                    Ważna informacja
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Wyłączenie niektórych plików cookies może wpłynąć na funkcjonalność strony 
                    i ograniczyć dostęp do niektórych funkcji.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-primary rounded-xl p-8 text-center">
              <h2 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                Pytania dotyczące cookies?
              </h2>
              <p className="text-primary-foreground/90 mb-6">
                Jeśli masz pytania dotyczące naszej polityki cookies, skontaktuj się z nami
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="mailto:kontakt@osrodek-myway.pl"
                  className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>kontakt@osrodek-myway.pl</span>
                </a>
                <a 
                  href="tel:+48731395295"
                  className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+48 731 395 295</span>
                </a>
              </div>
            </div>

            {/* Last Update */}
            <div className="text-center text-sm text-muted-foreground mt-12">
              <p>Ostatnia aktualizacja: 23 sierpnia 2024</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;