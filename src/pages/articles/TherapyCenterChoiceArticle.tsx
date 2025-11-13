import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Users, CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import therapyCenterImage from '@/assets/articles/therapy-center-choice.jpg';

const TherapyCenterChoiceArticle = () => {
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
            <span>Terapia uzależnień w Trójmieście</span>
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
                Poradniki
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Terapia uzależnień w Trójmieście – Jak wybrać najlepszy ośrodek
            </h1>
            
            <p className="text-xl text-foreground-muted mb-8">
              Praktyczny przewodnik, który pomoże Ci wybrać odpowiedni ośrodek leczenia uzależnień. Dowiedz się, na co zwrócić uwagę przy wyborze terapii.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>8 min czytania</span>
              </div>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img 
                src={therapyCenterImage} 
                alt="Wybór ośrodka terapii uzależnień w Trójmieście"
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
                Wstęp: Decyzja, która może uratować życie
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Wybór ośrodka leczenia uzależnień to jedna z najważniejszych decyzji w życiu osoby uzależnionej i jej rodziny. Od jakości terapii, atmosfery panującej w placówce i kompetencji zespołu terapeutycznego zależy skuteczność leczenia i szansa na trwałą trzeźwość. Rynek usług terapeutycznych w Trójmieście i województwie pomorskim jest szeroki, co może powodować zagubienie.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Program terapeutyczny – Sprawdź, na czym polega leczenie
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Podstawą skutecznej terapii jest sprawdzony i kompleksowy program. Zanim podejmiesz decyzję, zapytaj o:
              </p>
              <ul className="space-y-4 text-foreground-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Metody pracy:</strong> Czy ośrodek opiera się na konkretnym nurcie terapeutycznym (np. poznawczo-behawioralnym, modelu Minnesota)? Czy terapia jest zintegrowana i holistyczna?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Terapia indywidualna i grupowa:</strong> Jaka jest częstotliwość i intensywność sesji indywidualnych i grupowych? Terapia grupowa daje wsparcie i poczucie wspólnoty, ale to sesje indywidualne pozwalają na dogłębną pracę nad osobistymi problemami.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Zajęcia dodatkowe:</strong> Czy program obejmuje warsztaty umiejętności, psychoedukację, zajęcia relaksacyjne, sportowe czy artystyczne? Dobry ośrodek dba nie tylko o psychikę, ale i o ciało.
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Zespół terapeutyczny – Poznaj ludzi, którym powierzysz swoje życie
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Nawet najlepszy program nie zadziała bez kompetentnego i zaangażowanego zespołu. Sprawdź:
              </p>
              <ul className="space-y-4 text-foreground-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Kwalifikacje:</strong> Czy terapeuci posiadają certyfikaty specjalistów terapii uzależnień? Jakie mają doświadczenie w pracy z osobami uzależnionymi?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Dostępność:</strong> Czy terapeuci są dostępni dla pacjentów również poza zaplanowanymi sesjami? Czy w ośrodku panuje atmosfera otwartości i zaufania?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>Opieka medyczna:</strong> Czy ośrodek zapewnia stałą opiekę lekarską i psychiatryczną? Jest to kluczowe, zwłaszcza na etapie detoksu i w przypadku osób z podwójną diagnozą.
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Atmosfera i warunki – Miejsce, w którym poczujesz się bezpiecznie
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Terapia to niezwykle trudny i intymny proces. Dlatego tak ważne jest, aby odbywała się w miejscu, które zapewnia poczucie bezpieczeństwa, dyskrecję i komfort.
              </p>
            </section>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 my-12">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Podsumowanie: Wybierz mądrze, zainwestuj w swoje życie
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Wybór ośrodka terapii uzależnień to inwestycja w przyszłość – Twoją lub Twojego bliskiego. Nie podejmuj tej decyzji pochopnie. Zadzwoń do kilku placówek, zadaj pytania z naszej listy, a jeśli to możliwe, odwiedź je osobiście.
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

export default TherapyCenterChoiceArticle;