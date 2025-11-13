import { ArrowLeft, Shield, Eye, Database, UserCheck, FileText, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';

const PrivacyPolicy = () => {
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
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Polityka Prywatności
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dbamy o Twoją prywatność i bezpieczeństwo danych osobowych
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Company Info */}
            <div className="bg-card rounded-xl p-8 mb-12 border border-border">
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                <FileText className="w-6 h-6 text-primary" />
                <span className="!text-gray-900">Dane administratora</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold !text-gray-900 mb-3">Firma:</h3>
                  <p className="text-gray-700 mb-4">KN Nagaba</p>
                  
                  <h3 className="font-semibold !text-gray-900 mb-3">Adres:</h3>
                  <p className="text-gray-700 mb-4">
                    ul. Wichrowe Wzgórza 21<br />
                    Kąpino, Pomorskie 84-200
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold !text-gray-900 mb-3">Dane rejestrowe:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>NIP:</strong> 5862311568</li>
                    <li><strong>KRS:</strong> 0000644953</li>
                    <li><strong>REGON:</strong> 365777527</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold !text-gray-900 mb-3">Kontakt w sprawach ochrony danych:</h3>
                <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
                  <a href="mailto:kontakt@osrodek-myway.pl" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>kontakt@osrodek-myway.pl</span>
                  </a>
                  <a href="tel:+48731395295" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+48 731 395 295</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-12">
              
              {/* Data Collection */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <Database className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Jakie dane zbieramy</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold !text-gray-900">Dane osobowe podawane przez użytkowników:</h3>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>Imię i nazwisko</li>
                    <li>Adres e-mail</li>
                    <li>Numer telefonu</li>
                    <li>Informacje przekazane w formularzach kontaktowych</li>
                    <li>Dane medyczne (w przypadku pacjentów)</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold !text-gray-900">Dane zbierane automatycznie:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>Adres IP</li>
                    <li>Informacje o przeglądarce i urządzeniu</li>
                    <li>Dane o aktywności na stronie (cookies)</li>
                    <li>Czas i data wizyty na stronie</li>
                  </ul>
                </div>
              </div>

              {/* Data Usage */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <Eye className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Jak wykorzystujemy dane</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-gray-700 mb-4">
                    Twoje dane osobowe przetwarzamy w następujących celach:
                  </p>
                  
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>Świadczenie usług terapeutycznych</strong> - na podstawie umowy lub przygotowania do jej zawarcia</li>
                    <li><strong>Kontakt z pacjentami</strong> - odpowiadanie na zapytania, umawianie wizyt</li>
                    <li><strong>Marketing bezpośredni</strong> - na podstawie prawnie uzasadnionego interesu</li>
                    <li><strong>Wypełnienie obowiązków prawnych</strong> - prowadzenie dokumentacji medycznej</li>
                    <li><strong>Bezpieczeństwo</strong> - ochrona przed nadużyciami i zapewnienie bezpieczeństwa</li>
                    <li><strong>Analiza statystyk</strong> - poprawa jakości usług</li>
                  </ul>
                </div>
              </div>

              {/* User Rights */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <UserCheck className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Twoje prawa</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-gray-700 mb-4">
                    Zgodnie z RODO przysługują Ci następujące prawa:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="text-gray-700 space-y-3">
                        <li><strong>Prawo dostępu</strong> - do swoich danych osobowych</li>
                        <li><strong>Prawo sprostowania</strong> - nieprawidłowych danych</li>
                        <li><strong>Prawo usunięcia</strong> - „prawo do bycia zapomnianym"</li>
                        <li><strong>Prawo ograniczenia przetwarzania</strong></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-700 space-y-3">
                        <li><strong>Prawo przenoszenia danych</strong></li>
                        <li><strong>Prawo sprzeciwu</strong> - wobec przetwarzania</li>
                        <li><strong>Prawo cofnięcia zgody</strong> - w każdym momencie</li>
                        <li><strong>Prawo wniesienia skargi</strong> - do UODO</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Bezpieczeństwo danych</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-gray-700 mb-4">
                    Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych:
                  </p>
                  
                  <ul className="text-gray-700 space-y-2">
                    <li>Szyfrowanie połączeń SSL/TLS</li>
                    <li>Regularne kopie zapasowe</li>
                    <li>Ograniczenie dostępu do danych tylko dla upoważnionych osób</li>
                    <li>Regularne audyty bezpieczeństwa</li>
                    <li>Szkolenia personelu w zakresie ochrony danych</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6">
                  <span className="!text-gray-900">Pliki cookies</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-gray-700 mb-4">
                    Nasza strona wykorzystuje pliki cookies w celu:
                  </p>
                  
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>Zapewnienia prawidłowego funkcjonowania strony</li>
                    <li>Zapamiętywania preferencji użytkownika</li>
                    <li>Analizy ruchu na stronie</li>
                    <li>Personalizacji treści</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    Możesz zarządzać plikami cookies w ustawieniach swojej przeglądarki.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-primary rounded-xl p-8 text-center">
                <h2 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                  Masz pytania dotyczące ochrony danych?
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania
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
              <div className="text-center text-sm text-muted-foreground">
                <p>Ostatnia aktualizacja: 23 sierpnia 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;