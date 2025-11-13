import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Users, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import familyImage from '@/assets/articles/family-relationships.jpg';

const FamilyRelationshipsArticle = () => {
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
            <span>Odbudowa relacji rodzinnych</span>
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
                Transformacja
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Jak odbudować relacje z rodziną po terapii uzależnień
            </h1>
            
            <p className="text-xl text-foreground-muted mb-8">
              Przewodnik krok po kroku, jak naprawić relacje z bliskimi i odbudować zaufanie po zakończeniu terapii uzależnień.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>7 min czytania</span>
              </div>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img 
                src={familyImage} 
                alt="Odbudowa relacji rodzinnych po terapii uzależnień"
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
                <Heart className="w-6 h-6 text-primary" />
                Wstęp: Powrót do domu – nowy początek czy stare problemy?
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Zakończenie terapii w ośrodku leczenia uzależnień to ogromny sukces i początek nowego, trzeźwego życia. Jednak powrót do domu często bywa trudniejszy, niż się wydaje. Uzależnienie to choroba, która rani nie tylko osobę uzależnioną, ale całą jej rodzinę. Bliscy przez lata doświadczali zawiedzionych nadziei, kłamstw i bólu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Krok 1: Zrozumienie i akceptacja – perspektywa Twoich bliskich
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Pierwszym krokiem do odbudowy relacji jest zrozumienie, przez co przeszła Twoja rodzina. Twoi bliscy przez długi czas żyli w chaosie, strachu i niepewności. Mogli czuć się współwinni, bezradni, a jednocześnie wściekli.
              </p>
              
              <div className="bg-background-subtle border border-border rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4">Pamiętaj:</h3>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    Ich nieufność to mechanizm obronny, nie złośliwość
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    Wysłuchaj ich historii bez osądzania
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    Akceptuj ich perspektywę jako punkt wyjścia
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Krok 2: Cierpliwość i konsekwencja – czyny mówią głośniej niż słowa
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Zaufanie buduje się miesiącami, a nawet latami. Nie oczekuj, że po powrocie z terapii wszystko od razu wróci do normy. Twoje obietnice, nawet najszczersze, mogą być dla bliskich niewiele warte – słyszeli je już wielokrotnie. Teraz liczą się tylko czyny.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Krok 3: Otwarta i szczera komunikacja – nauczcie się rozmawiać na nowo
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Uzależnienie niszczy komunikację w rodzinie. Rozmowy często ograniczają się do kłótni, oskarżeń lub unikania trudnych tematów. Teraz musicie nauczyć się rozmawiać na nowo.
              </p>
              
              <ul className="space-y-4 text-foreground-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Mów o swoich uczuciach:</strong> Używaj komunikatów "ja" (np. "Czuję się zraniony, kiedy...") zamiast oskarżycielskiego "ty".
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Słuchaj aktywnie:</strong> Staraj się zrozumieć, co czują Twoi bliscy, a nie tylko czekać na swoją kolej.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Ustalcie granice:</strong> Zdrowe relacje opierają się na wzajemnym szacunku i granicach.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Unikajcie wracania do przeszłości:</strong> Skupcie się na teraźniejszości i przyszłości.
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Krok 4: Wspólna terapia – profesjonalne wsparcie dla całej rodziny
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Odbudowa relacji po uzależnieniu to proces, który może być zbyt trudny do przejścia w pojedynkę. Dlatego tak ważna jest profesjonalna pomoc.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background-subtle border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Terapia dla par</h3>
                  <p className="text-foreground-muted text-sm">
                    Pomaga partnerom na nowo nauczyć się ze sobą rozmawiać, rozwiązywać konflikty i odbudować intymność.
                  </p>
                </div>
                <div className="bg-background-subtle border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Konsultacje dla rodzin</h3>
                  <p className="text-foreground-muted text-sm">
                    Uczą bliskich, czym jest uzależnienie, jak wspierać osobę trzeźwiejącą i jak dbać o własne potrzeby.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Podsumowanie: Rodzina to Twój największy sojusznik w trzeźwości
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Odbudowa relacji z rodziną to maraton, a nie sprint. Wymaga czasu, cierpliwości i zaangażowania z obu stron. Pamiętaj jednak, że zdrowa, wspierająca rodzina to Twój największy kapitał i najsilniejsza tarcza chroniąca przed nawrotem.
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

export default FamilyRelationshipsArticle;