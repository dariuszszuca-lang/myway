import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Users, Lightbulb, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import motivationImage from '@/assets/articles/motivation-sobriety.jpg';

const MotivationSobrietyArticle = () => {
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
            <span>Motywacja do trzeźwości</span>
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
                Wsparcie
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Motywacja do trzeźwości – Jak ją znaleźć, kiedy wszystko inne zawodzi
            </h1>
            
            <p className="text-xl text-foreground-muted mb-8">
              Odkryj, jak znaleźć w sobie siłę do trzeźwienia i utrzymać ją na stałe. Sprawdzone metody budowania trwałej motywacji.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>6 min czytania</span>
              </div>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img 
                src={motivationImage} 
                alt="Motywacja do trzeźwości i walki z uzależnieniem"
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
                Wstęp: Kiedy chęć zmiany przegrywa z siłą nałogu
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Każda osoba uzależniona ma za sobą momenty, w których szczerze pragnęła przestać pić lub brać. Obietnice składane sobie i bliskim, poranki pełne wstydu i postanowień poprawy – to scenariusz znany aż za dobrze. Niestety, siła nałogu często okazuje się potężniejsza niż najsilniejsza nawet wola.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Krok 1: Znajdź swoje "DLACZEGO?" – fundament Twojej motywacji
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Motywacja oparta na strachu ("muszę przestać pić, bo stracę pracę/rodzinę") jest skuteczna, ale krótkotrwała. Kiedy kryzys minie, znika też powód do zmiany. Prawdziwa, trwała motywacja musi wypływać z Twoich najgłębszych pragnień i wartości.
              </p>
              
              <div className="bg-background-subtle border border-border rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4">Zadaj sobie te pytania:</h3>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    Jakie jest Twoje największe marzenie, które nałóg Ci odebrał?
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    Jaką osobą chcesz być dla swoich bliskich?
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    Jak chcesz się czuć każdego dnia?
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                Krok 2: Metoda małych kroków – odzyskaj poczucie sprawczości
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Myślenie o "trzeźwości do końca życia" może być przytłaczające i demotywujące. Dlatego w terapii uzależnień często stosuje się zasadę "Tylko dzisiaj". Skup się na tym, by nie napić się tylko przez najbliższe 24 godziny. To cel, który jest w Twoim zasięgu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Krok 3: Otocz się właściwymi ludźmi – siła wsparcia
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Samotna walka z nałogiem jest z góry skazana na porażkę. Potrzebujesz ludzi, którzy Cię zrozumieją, wesprą i zmotywują w trudnych chwilach.
              </p>
              <ul className="space-y-4 text-foreground-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Grupy wsparcia (AA, NA):</strong> Spotkania z innymi osobami uzależnionymi, które dzielą się swoim doświadczeniem, siłą i nadzieją.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Terapeuta:</strong> Profesjonalista, który pomoże Ci zrozumieć mechanizmy Twojego nałogu i da Ci narzędzia do radzenia sobie z trudnościami.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Trzeźwi przyjaciele:</strong> Buduj nowe relacje z ludźmi, dla których alkohol czy narkotyki nie są centralnym punktem życia.
                  </div>
                </li>
              </ul>
            </section>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Pamiętaj: Motywacja rodzi się z działania
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Nie czekaj na cudowny przypływ motywacji, aby zacząć działać. Zacznij działać, a motywacja pojawi się sama. Każdy, nawet najmniejszy krok w kierunku trzeźwości, buduje Twoją siłę i wiarę w siebie.
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

export default MotivationSobrietyArticle;