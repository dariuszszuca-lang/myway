import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviewsSection = () => {
  const reviews = [
    {
      name: "meridok",
      rating: 5,
      text: "Powiem jedno... zwiedzałem kilka ośrodków (mój przypadek jest ciężki), ale takiej opieki i takiej terapii jaką mam u Krystiana MyWay nigdy nie doświadczyłem! Jeśli zmagasz się, nie wahaj się. To świetne miejsce, z wysoko wykwalifikowanymi...",
      date: "tydzień temu"  
    },
    {
      name: "K W",
      rating: 5,
      text: "Miejsce które ratuje życie. Kompetentna kadra, wspaniała atmosfera... \"Wszystko można\" jeśli się chce.",
      date: "tydzień temu"
    },
    {
      name: "Janusz Woronowicz",
      rating: 5,
      text: "Właśnie ukończyłem pięciotygodniową terapię w ośrodku My Way. Przyjście do ośrodka i rozpoczęcie leczenia to była najlepsza decyzja w moim życiu. W malowniczej scenerii, w miłej, domowej atmosferze...",
      date: "4 tygodnie temu"
    },
    {
      name: "Robert Jałkiewicz",
      rating: 5,
      text: "Bardzo fajny ośrodek. Właściciele uśmiechnięci, pogodni i sympatyczni, a atmosfera super luźna i przyjazna. Jest dużo merytorycznych treści pomocnych w przezwyciężeniu uzależnień.",
      date: "miesiąc temu"
    },
    {
      name: "Zapomniałeś Się Wylogować",
      rating: 5,
      text: "Gorąco polecam to miejsce, świetna atmosfera i znakomici terapeuci. Sobotnie spotkania absolwentów pozwalają lepiej zrozumieć tę chorobę. Każdej osobie poświęca się dużo czasu.",
      date: "miesiąc temu"
    },
    {
      name: "Marckethings Online",
      rating: 5,
      text: "Byłem już na dwóch innych terapiach i tylko My Way mi to wytłumaczył i wskazał właściwy kierunek. Dał mi narzędzia, których potrzebowałem, a co najważniejsze - działają. To świetna społeczność po terapii.",
      date: "miesiąc temu"
    },
    {
      name: "Mateusz Borecki",
      rating: 5,
      text: "Trafiłem tutaj po prawie sześciu miesiącach abstynencji. Terapia nawrotowa. Samo miejsce daje mi energię do podniesienia się i spojrzenia w siebie, by znaleźć przyczynę poślizgu i iść dalej.",
      date: "2 miesiące temu"
    },
    {
      name: "Justyna N",
      rating: 5,
      text: "Jako uzależniona, która wcześniej próbowała sobie pomóc samodzielnie, teraz widzę jak potężny jest ten ośrodek. Ludzie, którzy tworzą to miejsce, czyli Pani Natalia i Pan Krystian, oraz pozostali terapeuci...",
      date: "4 miesiące temu"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Opinie pacjentów
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Co mówią o nas{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              nasi pacjenci?
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Prawdziwe historie, autentyczne doświadczenia - zobacz opinie z Google Maps
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-md hover:shadow-lg hover-lift transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.name}`} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Stars and Name */}
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <h4 className="text-base font-semibold text-center text-black">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    {review.date}
                  </p>
                </div>
                
                {/* Review Text */}
                <p className="text-sm text-black text-center leading-relaxed line-clamp-4">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-premium group"
            asChild
          >
            <a 
              href="https://www.google.com/maps/place/My+Way+-+Ośrodek+Leczenia+Uzależnień/@54.6273424,18.2585185,17z/data=!4m18!1m9!3m8!1s0x46fda17ea9a6ceed:0xd18689e7fe5655cf!2sMy+Way+-+Ośrodek+Leczenia+Uzależnień!8m2!3d54.6273424!4d18.2610934!9m1!1b1!16s%2Fg%2F11rfq31gkl!3m7!1s0x46fda17ea9a6ceed:0xd18689e7fe5655cf!8m2!3d54.6273424!4d18.2610934!9m1!1b1!16s%2Fg%2F11rfq31gkl?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz wszystkie opinie w Google Maps
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;