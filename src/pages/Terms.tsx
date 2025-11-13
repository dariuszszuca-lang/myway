import { ArrowLeft, FileText, Users, Shield, CreditCard, Clock, AlertTriangle, Scale, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';

const Terms = () => {
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
              <Scale className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                Regulamin
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zasady świadczenia usług terapeutycznych i pobytu w ośrodku
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
                <span className="!text-gray-900">Informacje o usługodawcy</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold !text-gray-900 mb-3">Nazwa:</h3>
                  <p className="text-gray-700 mb-4">KN Nagaba - Ośrodek Leczenia Uzależnień MyWay</p>
                  
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
                <h3 className="font-semibold !text-gray-900 mb-3">Kontakt:</h3>
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

            {/* Terms Sections */}
            <div className="space-y-12">
              
              {/* General Terms */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Postanowienia ogólne</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <ol className="text-gray-700 space-y-4">
                    <li><strong>1.</strong> Niniejszy regulamin określa zasady świadczenia usług terapeutycznych przez Ośrodek Leczenia Uzależnień MyWay.</li>
                    <li><strong>2.</strong> Regulamin jest integralną częścią umowy zawieranej z pacjentami ośrodka.</li>
                    <li><strong>3.</strong> Korzystanie z usług ośrodka oznacza akceptację postanowień niniejszego regulaminu.</li>
                    <li><strong>4.</strong> Ośrodek zastrzega sobie prawo do zmiany regulaminu z zachowaniem 14-dniowego okresu wypowiedzenia.</li>
                  </ol>
                </div>
              </div>

              {/* Services */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Zakres usług</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold !text-gray-900">Ośrodek świadczy następujące usługi:</h3>
                  <ul className="text-gray-700 space-y-3 mb-6">
                    <li>Detoksykacja od substancji psychoaktywnych</li>
                    <li>Terapia grupowa uzależnień</li>
                    <li>Terapia indywidualna</li>
                    <li>Wsparcie psychologiczne</li>
                    <li>Program rehabilitacji społecznej</li>
                    <li>Wsparcie po zakończeniu terapii</li>
                    <li>Zapewnienie komfortowego pobytu</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    Szczegółowy program terapii jest ustalany indywidualnie z każdym pacjentem po przeprowadzeniu diagnostyki.
                  </p>
                </div>
              </div>

              {/* Patient Rights and Duties */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Prawa i obowiązki pacjenta</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold !text-gray-900">Prawa pacjenta:</h3>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>Prawo do pełnej informacji o stanie zdrowia i proponowanych metodach leczenia</li>
                    <li>Prawo do wyrażenia zgody lub odmowy na zaproponowane leczenie</li>
                    <li>Prawo do poufności informacji związanych z leczeniem</li>
                    <li>Prawo do godnego traktowania</li>
                    <li>Prawo do bezpiecznego środowiska terapeutycznego</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold !text-gray-900">Obowiązki pacjenta:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>Przestrzeganie regulaminu ośrodka</li>
                    <li>Aktywny udział w procesie terapeutycznym</li>
                    <li>Powstrzymanie się od używania substancji psychoaktywnych</li>
                    <li>Szacunek wobec innych pacjentów i personelu</li>
                    <li>Terminowe regulowanie należności</li>
                    <li>Informowanie o zmianach stanu zdrowia</li>
                  </ul>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Warunki płatności</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>Opłaty:</strong> Wysokość opłat jest określona w cenniku dostępnym w ośrodku i na stronie internetowej</li>
                    <li><strong>Płatność:</strong> Opłaty są pobierane z góry za okres pobytu lub w ratach według ustalonego harmonogramu</li>
                    <li><strong>Faktury:</strong> Na żądanie pacjenta wystawiane są faktury VAT</li>
                    <li><strong>Zwroty:</strong> W przypadku przerwania terapii z przyczyn leżących po stronie pacjenta, zwrot opłat następuje proporcjonalnie do niewykorzystanego okresu</li>
                    <li><strong>Opóźnienia:</strong> Za opóźnienia w płatnościach naliczane są odsetki ustawowe</li>
                  </ul>
                </div>
              </div>

              {/* Schedule and Rules */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Harmonogram i zasady pobytu</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold !text-gray-900">Godziny funkcjonowania:</h3>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>Zajęcia terapeutyczne: 8:00 - 20:00</li>
                    <li>Dyżur medyczny: 24/7</li>
                    <li>Infolinia: 24/7</li>
                    <li>Godziny odwiedzin: 15:00 - 18:00 (po wcześniejszym umówieniu)</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold !text-gray-900">Zasady pobytu:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>Zakaz wnoszenia i używania substancji psychoaktywnych</li>
                    <li>Zakaz wnoszenia przedmiotów niebezpiecznych</li>
                    <li>Obowiązek uczestnictwa w zaplanowanych zajęciach</li>
                    <li>Szacunek dla mienia ośrodka i współpacjentów</li>
                    <li>Zakaz nagrywania i fotografowania bez zgody</li>
                  </ul>
                </div>
              </div>

              {/* Complaints and Liability */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Reklamacje i odpowiedzialność</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold !text-gray-900">Procedura reklamacyjna:</h3>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>Reklamacje można składać ustnie lub pisemnie</li>
                    <li>Ośrodek rozpatruje reklamacje w terminie 14 dni roboczych</li>
                    <li>Odpowiedź na reklamację jest udzielana w formie pisemnej</li>
                    <li>W przypadku negatywnego rozpatrzenia reklamacji, przysługuje prawo odwołania</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold !text-gray-900">Odpowiedzialność:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>Ośrodek ponosi odpowiedzialność za szkody wynikłe z niewłaściwego świadczenia usług</li>
                    <li>Ośrodek nie ponosi odpowiedzialności za szkody powstałe wskutek nieprzestrzegania regulaminu przez pacjenta</li>
                    <li>Pacjent ponosi odpowiedzialność za szkody wyrządzone w mieniu ośrodka</li>
                  </ul>
                </div>
              </div>

              {/* Final Provisions */}
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center space-x-3">
                  <Scale className="w-6 h-6 text-primary" />
                  <span className="!text-gray-900">Postanowienia końcowe</span>
                </h2>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>1.</strong> W sprawach nieuregulowanych niniejszym regulaminem stosuje się przepisy Kodeksu Cywilnego</li>
                    <li><strong>2.</strong> Spory wynikające z realizacji umów będą rozstrzygane przez sąd właściwy dla siedziby ośrodka</li>
                    <li><strong>3.</strong> Regulamin wchodzi w życie z dniem publikacji</li>
                    <li><strong>4.</strong> Pacjent otrzymuje egzemplarz regulaminu przy podpisywaniu umowy</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-primary rounded-xl p-8 text-center">
                <h2 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                  Masz pytania dotyczące regulaminu?
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  Skontaktuj się z nami - chętnie wyjaśnimy wszystkie wątpliwości
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

export default Terms;