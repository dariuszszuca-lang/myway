import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle, TrendingUp, Users, Clock, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import addictionStagesImage from '@/assets/articles/addiction-stages.jpg';

const AddictionStagesArticle = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <section className="pt-32 pb-8 bg-background-subtle">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-foreground-muted mb-4">
            <Link to="/eduway" className="hover:text-primary transition-colors">EduWay</Link>
            <span>/</span>
            <Link to="/eduway" className="hover:text-primary transition-colors">Artykuły</Link>
            <span>/</span>
            <span>Etapy uzależnienia</span>
          </div>
          
          <Link to="/eduway">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do artykułów
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-12 bg-background-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Zrozumieć trzeźwość
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Jak rozpoznać uzależnienie? 4 etapy, które musisz znać
            </h1>
            
            <p className="text-xl text-foreground-muted mb-8">
              Naucz się rozpoznawać sygnały ostrzegawcze uzależnienia. Poznaj 4 etapy rozwoju choroby i dowiedz się, kiedy szukać pomocy.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 min czytania</span>
              </div>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img 
                src={addictionStagesImage} 
                alt="Etapy rozwoju uzależnienia - rozpoznawanie objawów"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray dark:prose-invert">
            
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-primary" />
                Wstęp: Kiedy przyjemność zamienia się w przymus?
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Wielu z nas sięga po alkohol czy inne substancje, aby się zrelaksować, uczcić sukces lub po prostu spędzić miło czas. Granica między okazjonalnym używaniem a uzależnieniem jest jednak niezwykle cienka i łatwa do przekroczenia. Zanim się zorientujemy, to, co kiedyś było wyborem, staje się przymusem, który niszczy nasze zdrowie, relacje i życie.
              </p>
            </section>

            {/* Etap 1 */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Faza wstępna – Eksperymentowanie i odkrywanie "ulgi"
                  </h2>
                </div>
                
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Pierwszy etap uzależnienia jest najbardziej niewinny i często bagatelizowany. Zaczyna się od eksperymentowania z substancją – alkoholem, narkotykami czy lekami. Człowiek odkrywa, że dana substancja przynosi mu ulgę, redukuje stres, nieśmiałość czy ból.
                </p>
                
                <div className="bg-white/60 dark:bg-black/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Sygnały ostrzegawcze:</h4>
                  <ul className="space-y-2 text-foreground-muted text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Sięganie po substancję w stresujących sytuacjach
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Myślenie o substancji jako o "rozwiązaniu problemów"
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Etap 2 */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Faza ostrzegawcza – Szukanie okazji i pierwsze "urwane filmy"
                  </h2>
                </div>
                
                <p className="text-foreground-muted leading-relaxed mb-6">
                  W drugim etapie substancja staje się stałym elementem życia. Osoba aktywnie szuka okazji do picia lub zażywania, a jej myśli coraz częściej krążą wokół planowania kolejnego "relaksu".
                </p>
                
                <div className="bg-white/60 dark:bg-black/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Sygnały ostrzegawcze:</h4>
                  <ul className="space-y-2 text-foreground-muted text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Pierwsze luki w pamięci ("urwane filmy")
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Aktywne szukanie okazji do używania
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Bagatelizowanie niepokojących incydentów
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Etap 3 */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Faza krytyczna – Utrata kontroli i widoczne konsekwencje
                  </h2>
                </div>
                
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Trzeci etap to moment, w którym uzależnienie staje się widoczne dla otoczenia. Osoba traci kontrolę nad ilością i częstotliwością spożywania substancji. Pojawiają się poważne konsekwencje: problemy w pracy, konflikty w rodzinie, zaniedbywanie obowiązków.
                </p>
                
                <div className="bg-white/60 dark:bg-black/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Sygnały ostrzegawcze:</h4>
                  <ul className="space-y-2 text-foreground-muted text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      Utrata kontroli nad ilością i częstotliwością
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      Problemy w pracy i rodzinie
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      Nieudane próby samodzielnego odstawienia
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Etap 4 */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-700 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Faza chroniczna – Picie, by "normalnie" funkcjonować
                  </h2>
                </div>
                
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Ostatni, najbardziej destrukcyjny etap, to faza chroniczna. Osoba uzależniona pije lub zażywa nie po to, by poczuć przyjemność, ale by uniknąć objawów odstawiennych i móc "normalnie" funkcjonować. Tolerancja na substancję jest bardzo wysoka, a całe życie kręci się wokół jej zdobywania i spożywania.
                </p>
                
                <div className="bg-white/60 dark:bg-black/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Sygnały ostrzegawcze:</h4>
                  <ul className="space-y-2 text-foreground-muted text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Używanie substancji, by uniknąć objawów odstawiennych
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Całkowita degradacja zdrowia
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Życie podporządkowane zdobywaniu substancji
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Kiedy szukać pomocy? Nie czekaj na ostatni dzwonek!
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Jeśli rozpoznajesz u siebie lub u kogoś bliskiego którykolwiek z powyższych etapów, nie czekaj. Im wcześniej podejmiesz działanie, tym łatwiej będzie zatrzymać chorobę. Pamiętaj, że prośba o pomoc to nie oznaka słabości, ale pierwszy krok do odzyskania swojego życia.
              </p>
            </div>

            <div className="text-center mt-16">
              <Link to="/kontakt">
                <Button size="lg" className="btn-premium">
                  <Heart className="w-5 h-5 mr-2" />
                  Skontaktuj się z nami
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AddictionStagesArticle;