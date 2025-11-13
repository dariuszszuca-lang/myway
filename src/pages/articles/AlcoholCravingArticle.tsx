import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle, Brain, Clock, Shield, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import alcoholCravingImage from '@/assets/articles/alcohol-craving-new.jpg';

const AlcoholCravingArticle = () => {
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
            <span>Głód alkoholowy</span>
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
                Porady
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Głód alkoholowy – 5 sprawdzonych sposobów, jak sobie z nim radzić
            </h1>
            
            <p className="text-xl text-foreground-muted mb-8">
              Poznaj skuteczne metody radzenia sobie z pragnieniem picia. Praktyczne techniki, które pomogą Ci w trudnych momentach.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min czytania</span>
              </div>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img 
                src={alcoholCravingImage} 
                alt="Radzenie sobie z głodem alkoholowym"
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
                Wstęp: Czym jest głód alkoholowy i dlaczego jest tak niebezpieczny?
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Głód alkoholowy to jeden z najtrudniejszych i najbardziej podstępnych wrogów w procesie trzeźwienia. To nie tylko fizyczna chęć napicia się, ale przede wszystkim potężny, natrętny stan psychiczny, który potrafi zdominować myśli i emocje. Osoby uzależnione opisują go jako obsesyjną potrzebę sięgnięcia po alkohol, która paraliżuje wolę i prowadzi do nawrotu choroby.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background-subtle border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground">
                    Zidentyfikuj swoje wyzwalacze
                  </h3>
                </div>
                <p className="text-foreground-muted text-sm mb-4">
                  Głód rzadko pojawia się znikąd. Zazwyczaj jest reakcją na konkretne bodźce, zwane wyzwalaczami.
                </p>
                <ul className="space-y-2 text-foreground-muted text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Miejsca:</strong> bar, sklep z alkoholem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Ludzie:</strong> dawni kompani od kieliszka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Emocje:</strong> stres, smutek, złość, radość, nuda</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background-subtle border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground">
                    Technika HALT
                  </h3>
                </div>
                <p className="text-foreground-muted text-sm mb-4">
                  Zatrzymaj się i zadaj sobie 4 pytania:
                </p>
                <ul className="space-y-2 text-foreground-muted text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>H</strong>ungry - Czy jestem głodny?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>A</strong>ngry - Czy jestem zły?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>L</strong>onely - Czy jestem samotny?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>T</strong>ired - Czy jestem zmęczony?</span>
                  </li>
                </ul>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-primary" />
                Sposób 3: Przekieruj uwagę – Nie daj się wciągnąć w obsesyjne myśli
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Głód karmi się uwagą. Im więcej o nim myślisz, tym staje się silniejszy. Kluczem jest świadome przekierowanie uwagi na coś innego.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background-subtle border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Zajmij się czymś</h4>
                  <p className="text-foreground-muted text-sm">Idź na spacer, pobiegaj, posprzątaj, posłuchaj muzyki</p>
                </div>
                
                <div className="text-center p-6 bg-background-subtle border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Skup się na zmysłach</h4>
                  <p className="text-foreground-muted text-sm">Zimny prysznic, intensywny smak, mocne perfumy</p>
                </div>
                
                <div className="text-center p-6 bg-background-subtle border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Zadzwoń do kogoś</h4>
                  <p className="text-foreground-muted text-sm">Rozmowa z przyjacielem, sponsorem lub terapeutą</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Sposób 4: Wizualizacja i gra na czas
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background-subtle border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3">"Przewiń taśmę do przodu"</h4>
                  <p className="text-foreground-muted text-sm">
                    Wyobraź sobie pełny obraz konsekwencji: utratę kontroli, kłótnię z bliskimi, kaca moralnego, poczucie winy i wstydu.
                  </p>
                </div>
                <div className="bg-background-subtle border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3">Gra na czas</h4>
                  <p className="text-foreground-muted text-sm">
                    "Nie napiję się tylko przez najbliższe 15 minut". Kiedy minie, przedłuż o kolejne 15 minut.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Sposób 5: Profesjonalne wsparcie – Nie walcz z tym sam
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Samodzielna walka z głodem alkoholowym jest niezwykle trudna. Dlatego tak ważne jest profesjonalne wsparcie.
              </p>
            </section>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Pamiętaj: Głód to nie wyrok, to sygnał
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Głód alkoholowy jest normalnym objawem choroby alkoholowej, a nie oznaką Twojej słabości. Traktuj go jako sygnał, że musisz o siebie zadbać – zaspokoić swoje potrzeby, unikać ryzyka lub sięgnąć po pomoc.
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

export default AlcoholCravingArticle;