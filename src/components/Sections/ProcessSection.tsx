import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import interiorBackground from '@/assets/interior-bg.jpg';
const ProcessSection = () => {
  const steps = [{
    number: '01',
    title: 'Podjęcie decyzji',
    description: 'Pierwszy krok to zawsze najtrudniejszy. Dołączenie do ośrodka MyWay i rozpoczęcie procesu leczenia z pełnym wsparciem naszego zespołu.',
    details: ['Wstępna rozmowa diagnostyczna', 'Ustalenie planu leczenia', 'Przygotowanie do pobytu']
  }, {
    number: '02',
    title: 'Rozmowy z terapeutą',
    description: 'Rozpoznanie Twoich indywidualnych potrzeb i stworzenie spersonalizowanego planu leczenia dostosowanego do Twojej sytuacji.',
    details: ['Szczegółowa diagnoza', 'Ustalenie celów terapii', 'Dobór metod leczenia']
  }, {
    number: '03',
    title: 'Terapia kompleksowa',
    description: 'Połączenie terapii grupowej i indywidualnej z czasem na regenerację i relaks w komfortowych warunkach ośrodka.',
    details: ['Terapia grupowa online', 'Sesje indywidualne z terapeutą', 'Zajęcia edukacyjne i warsztatowe']
  }, {
    number: '04',
    title: 'Wsparcie po terapii',
    description: 'Zapobieganie powrotu do uzależnienia i podtrzymanie efektów terapii poprzez programy follow-up i ciągłe wsparcie.',
    details: ['Sobotnie spotkania w ośrodku', 'Terapia grupowa online', 'Terapia indywidualna online']
  }];
  return <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `url(${interiorBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Proces leczenia
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Pierwszy krok</span>{' '}
            należy do Ciebie
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Wiemy, że powrót do codziennego życia po terapii może być trudny. Dlatego oferujemy program wsparcia po zakończeniu leczenia
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => <div key={step.number} className="animate-fade-in-up" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Number Section */}
                    <div className="lg:w-1/4 bg-gradient-primary p-8 flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-2">
                          {step.number}
                        </div>
                        <div className="w-16 h-1 bg-primary-foreground/30 mx-auto" />
                      </div>
                      
                      {/* Arrow for desktop */}
                      {index < steps.length - 1 && <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                          <div className="w-8 h-8 bg-gradient-primary rotate-45 border-r-4 border-b-4 border-primary-foreground/20" />
                        </div>}
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/4 p-8">
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {step.details.map((detail, detailIndex) => <div key={detail} className="flex items-center space-x-3 p-3 bg-background-subtle rounded-lg">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-sm font-medium text-white">
                              {detail}
                            </span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && <div className="lg:hidden flex justify-center my-6">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>}
            </div>)}
        </div>

      </div>
    </section>;
};
export default ProcessSection;