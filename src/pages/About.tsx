import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Phone, MapPin, Dumbbell, Activity, TreePine, Users, Heart, Calendar, Facebook, Instagram, MessageCircle, Youtube, Music, MapIcon, X } from 'lucide-react';
const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [location]);
  const features = [{
    icon: Dumbbell,
    title: 'Siłownia',
    description: 'Dostępna w naszym ośrodku, zadbasz o kondycję - wygodnie i zawsze, gdy potrzebujesz.'
  }, {
    icon: Activity,
    title: 'Tenis stołowy',
    description: 'Aktywność fizyczna wspiera dobrą formę psychiczną. Zadbasz o siebie holistycznie.'
  }, {
    icon: TreePine,
    title: 'Lokalizacja',
    description: 'Wśród lasów w pobliżu Trójmiasta. Wyciszysz się, ale i skorzystasz z atrakcji miasta.'
  }, {
    icon: Users,
    title: 'Indywidualne podejście',
    description: 'Leczenie dobrane do Twoich potrzeb, dzięki niemu osiągniesz lepsze efekty i je utrzymasz.'
  }, {
    icon: Heart,
    title: 'Konsultacje dla rodzin',
    description: 'Dbamy o rodziny naszych pacjentów, by umiały zadbać o siebie i bliskich uzależnionych.'
  }, {
    icon: Calendar,
    title: 'Wsparcie po terapii',
    description: 'Skuteczna terapia to dopiero początek nowego życia, pomożemy Ci wytrwać w trzeźwości.'
  }];
  const socialFeatures = [{
    title: 'Transmisje live',
    description: 'W każdy poniedziałek i wtorek LIVE o 18:00 na naszym Facebooku i YouTube.'
  }, {
    title: 'Spotkania absolwentów',
    description: 'Co sobotę w naszym ośrodku odbywają się spotkania absolwentów oraz konsultacje z terapeutą.'
  }, {
    title: 'Wsparcie oraz motywacja',
    description: 'Nasi terapeuci - Natalia oraz Krystian - prowadzą kanały motywująco-informacyjne na Facebooku oraz Tik-Toku.'
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/d4b9753b-4648-49c6-82e6-3498a7060af7.png" alt="Ośrodek MyWay - budynek w malowniczej okolicy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            O Nas
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Poznaj nasz ośrodek, naszą misję i zobacz, jak możemy Ci pomóc w walce z uzależnieniem
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Kim jesteśmy?
              </h2>
              <div className="space-y-4 text-white">
                <p>
                  Nasza misja polega na świadczeniu wsparcia dla osób uzależnionych i ich bliskich. 
                  Jesteśmy prywatnym ośrodkiem, który powstał z pasji i ogromnego doświadczenia w pomaganiu 
                  ludziom w ich trudnej walce z nałogiem.
                </p>
                <p>
                  Rozumiemy, że zmaganie się z uzależnieniem w samotności może prowadzić do poczucia 
                  bezsilności i wyczerpania. Dlatego właśnie, razem z naszym wyjątkowym zespołem 
                  specjalistów i grupą terapeutyczną, oferujemy kompleksowe wsparcie, pomagając 
                  pacjentom poradzić sobie z chorobą uzależnienia i jej skutkami.
                </p>
              </div>
              <Button className="mt-6 btn-premium">
                <Phone className="w-4 h-4 mr-2" />
                +48 731 395 295
              </Button>
            </div>
            <Card className="glass">
              <CardContent className="p-8">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/c928e564-92ea-4535-abcb-d47dceeefcd4.png" alt="Zespół terapeutów - Natalia i Krystian" className="w-full h-full object-cover object-center" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="glass order-2 lg:order-1">
              <CardContent className="p-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/d4b9753b-4648-49c6-82e6-3498a7060af7.png" alt="Budynek ośrodka MyWay w malowniczej okolicy" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                O lokalizacji ośrodka MyWay
              </h2>
              <div className="space-y-4 text-white">
                <p>
                  Jesteśmy prywatnym ośrodkiem, który oferuje swoje usługi w malowniczej okolicy, 
                  otoczonej jeziorami i lasem. Nasza lokalizacja zapewnia doskonałe warunki do 
                  odprężenia i skupienia na sobie. Dążymy do stworzenia kameralnej atmosfery, 
                  gdzie pełna dyskrecja jest dla nas priorytetem.
                </p>
                <p>
                  Mimo położenia w zaciszu przyrody, nasz ośrodek znajduje się w Trójmieście, 
                  co umożliwia szybkie wycieczki nad morze i odkrywanie uroków Gdańska, Gdyni i Sopotu. 
                  Po sesjach terapeutycznych, nasi Pacjenci mogą zrelaksować się i poprawić kondycję 
                  fizyczną na siłowni, wyciszyć się podczas wędrówek po lesie.
                </p>
                <p>
                  Nasz ośrodek nie tylko zapewnia wysokiej jakości terapię, ale również stwarza 
                  dogodne warunki do odprężenia i rozwoju. Jest to miejsce, gdzie możliwe jest 
                  połączenie pracy nad sobą z doświadczeniem przyrody i odkrywaniem nowych miejsc.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-sm text-white">
                <MapPin className="w-4 h-4" />
                <span>ul. Wichrowe Wzgórza 21 Kąpino, Pomorskie 84-200</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Co oferujemy
            </h2>
            <p className="max-w-2xl mx-auto text-slate-50">
              Zapewniamy intensywną pracę terapeutyczną oraz atrakcje, które – jeżeli tylko zechcesz – 
              wypełnią Twój czas wolny.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => <Card key={index} className="glass hover-lift">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Social Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Społeczność i wsparcie
            </h2>
            <p className="max-w-2xl mx-auto text-slate-50">
              Budujemy społeczność i oferujemy długotrwałe wsparcie na różnych platformach
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img src="/lovable-uploads/6c32f2b3-04fd-4a2c-9f34-e092179044ba.png" alt="Sala terapii grupowej z wygodnymi fotelami" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold text-black mb-2">
                    Terapia indywidualna
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Wygodne i nowoczesne sale zapewniają komfortowe warunki do pracy terapeutycznej
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img src="/lovable-uploads/1d085954-cf35-46e7-a2c5-61b7cb400c94.png" alt="Sala terapii grupowej z krzesłami ustawionymi w kręgu" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold text-black mb-2">
                    Terapia grupowa
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Przestronne sale do prowadzenia sesji grupowych i spotkań terapeutycznych
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialFeatures.map((feature, index) => <Card key={index} className="glass hover-lift">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-display font-semibold text-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Social Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Nasz zespół
            </h2>
            <p className="max-w-2xl mx-auto text-slate-50">
              Poznaj nasz doświadczony zespół terapeutów i specjalistów
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="glass">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="aspect-[3/4] w-full max-w-[200px] mx-auto overflow-hidden rounded-lg">
                      <img src="/lovable-uploads/224070fc-a841-499e-afea-b7b0d5410ced.png" alt="Krystian Nagaba" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-display font-bold text-black mb-4">
                      Krystian Nagaba
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">Może troszkę o sobie: Jestem Certyfikowanym Instruktorem Terapii Uzależnień. Student psychologii pozytywnej. Ojcem wspaniałej Córki oraz partnerem w wartościowym związku od 2018 roku.</p>
                    <p className="text-sm text-muted-foreground">
                      Moim zdaniem największą wartością jaką mam jest fakt, że jestem osobą uzależnioną od narkotyków i alkoholu. 
                      Trzeźwy od 2018 roku i całym sercem oddany ośrodkowi "My Way".
                    </p>
                    
                    <div className="mt-8">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                            Czytaj więcej
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
                          <div className="space-y-6">
                            <div className="flex items-start gap-6">
                              <div className="w-48 flex-shrink-0">
                                <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
                                  <img src="/lovable-uploads/224070fc-a841-499e-afea-b7b0d5410ced.png" alt="Krystian Nagaba" className="w-full h-full object-cover object-center" />
                                </div>
                              </div>
                              
                              <div className="flex-1">
                                <h3 className="text-2xl font-display font-bold text-black mb-6">
                                  Krystian Nagaba
                                </h3>
                                
                                <div className="space-y-4 text-sm text-muted-foreground">
                                  <p>
                                    <strong>Może troszkę o sobie:</strong>
                                  </p>
                                  <p>
                                    Jestem Certyfikowanym Instruktorem Terapii Uzależnień. Student psychologii pozytywnej. Ojcem wspaniałej Córki oraz partnerem w wartościowym związku od 2018 roku.
                                  </p>
                                  <p>
                                    Moim zdaniem największą wartością jaką mam jest fakt, że jestem osobą uzależnioną od narkotyków i alkoholu. Przez ponad 20 lat czynnie zażywałem środki psychoaktywne. Niestety musiałem osiągnąć swoje dno, a mianowicie straciłem wszystko co było do stracenia. Od pieniędzy po relacje.
                                  </p>
                                  <p>
                                    Na szczęście podjąłem decyzje by w końcu zrobić porządek w swoim życiem. Po ciężkich walkach i pracy nad sobą uważam, że jestem świetnym przykładem zmiany, dzięki czemu dokładnie wiem, jak to jest być uzależnionym, oraz jak to jest wspaniale być trzeźwym człowiekiem od 2018 roku.
                                  </p>
                                  <p>
                                    Mówią o mnie, że jestem bardzo szczery i prawdziwy w tym co robię, ponieważ poza teorią mam jeszcze 20 lat praktyki uzależnienia. Od 2021 roku całym sercem jestem oddany ośrodkowi „My Way". Prowadzę kanał na Tik-Toku, oraz Fb.
                                  </p>
                                  <p>
                                    Pomagam wychodzić z uzależnienia całym sobą, ponieważ wiem, jak to jest być w tym miejscu. Moja terapia oparta jest najbardziej na motywacji, relacjach i szczerości. Jestem za to bardzo lubianą osobą.
                                  </p>
                                  <p>
                                    Angażuję się w 100% w budowanie trzeźwego społeczeństwa „MY WAY", dlatego też organizuje różne spotkania, jak na przykład: spływy kajakowe, wyjazdy na motorach, spotkania przy ogniskach i inne.
                                  </p>
                                  <p>
                                    <strong>Moim celem i misją życia jest nauczyć jak największą liczbę osób żyć na trzeźwo.</strong> Uważam, że na dzień dzisiejszy świadomość o tej chorobie jest bardzo mała i chciałbym to zmienić.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                     </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="aspect-[3/4] w-full max-w-[200px] mx-auto overflow-hidden rounded-lg">
                      <img src="/lovable-uploads/e0fd43ec-8ac5-4036-aa93-9fefd1a4e114.png" alt="Natalia Pucz" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-display font-bold text-black mb-4">
                      Natalia Pucz
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Jestem Certyfikowanym Instruktorem terapii Uzależnień. Studentka Psychologii klinicznej 
                      na Uniwersytecie WSB Meritum. Mama wspaniałych córek.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Od kilku lat jestem w szczęśliwym związku z osobą uzależnioną - trzeźwą od 2018 roku. 
                      Od 2021 roku z pełnym zaangażowaniem oddana jestem Ośrodkowi "My Way".
                    </p>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white self-start mt-8">
                          Czytaj więcej
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
                        <div className="space-y-6">
                          <div className="flex items-start gap-6">
                            <div className="w-48 flex-shrink-0">
                              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
                                <img src="/lovable-uploads/e0fd43ec-8ac5-4036-aa93-9fefd1a4e114.png" alt="Natalia Pucz" className="w-full h-full object-cover object-center" />
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-2xl font-display font-bold text-black mb-6">
                                Natalia Pucz
                              </h3>
                              
                              <div className="space-y-4 text-sm text-muted-foreground">
                                <p>
                                  Jestem Certyfikowanym Instruktorem terapii Uzależnień. Studentka Psychologii klinicznej na Uniwersytecie WSB Meritum. Mama wspaniałych córek.
                                </p>
                                <p>
                                  Jedną z wartości, które mam to fakt, że od kilku lat jestem w szczęśliwym związku z osobą uzależnioną- trzeźwą od 2018 roku. Wspólnie z Nim przechodziłam jego proces trzeźwienia, widząc niekiedy ból i cierpienie, a z czasem czerpanie radości z życia na trzeźwo.
                                </p>
                                <p>
                                  Dziś poprzez swoje przejścia i doświadczenia, pomagam nie tylko osobom uzależnionym, ale staram się być otwarta na ich partnerów, z którymi rozmawiam i daję wiarę, że życie z osobą uzależnioną jest możliwe i kiedy oboje tego chcą szczęśliwe.
                                </p>
                                <p>
                                  Mówią o mnie, że jestem szczera i potrafię na czynniki pierwsze rozłożyć każdy problem, by wnikliwie i z zaangażowaniem pomagać swoim Pacjentom. Od 2021 roku z pełnym zaangażowaniem oddana jestem Ośrodkowi „My Way".
                                </p>
                                <p>
                                  Prowadzę kanał na FB jak i również na TikToku. Staram się pomagać wychodzić z uzależnienia całym sercem, bo wiem jak ciężka jest to walka. Swoją terapię opieram najbardziej na motywacji, relacji, szczerości i warsztatach poznawczych.
                                </p>
                                <p>
                                  Dzięki takiemu podejściu, jestem osobą lubianą. Angażuję się również w budowanie trzeźwej społeczności „My Way", dlatego współorganizuję różnego rodzaju spotkania, np. co sobotę trzeźwe spotkania naszych absolwentów, spływy kajakowe, spotkania przy ognisku i inne.
                                </p>
                                <p>
                                  <strong>Moim celem jest nauczyć ludzi życia pełnego wartości i radości na trzeźwo.</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          
          {/* Drugi rząd: Waldemar i Mirosława */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col md:flex-row gap-6 items-start flex-grow">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="aspect-[3/4] w-full max-w-[200px] mx-auto overflow-hidden rounded-lg">
                      <img src="/lovable-uploads/a970c0ee-98d6-4405-a243-5a8c53e83c04.png" alt="Mgr Waldemar Sikorski" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 flex flex-col">
                    <h3 className="text-xl font-display font-bold text-black mb-4">
                      Mgr Waldemar Sikorski
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <p>• Absolwent Administracji, Uniwersytet Łódzki</p>
                      <p>• Absolwent Prawa, Uniwersytet Śląski</p>
                      <p>• Terapeuta uzależnień</p>
                      <p>• Specjalista terapii grupowej</p>
                      <p>• Terapeuta indywidualny</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      Od kilku lat moją pasją jest pomaganie i praca z osobami uzależnionymi...
                    </p>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white self-start mt-4">
                          Czytaj więcej
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
                        <div className="space-y-6">
                          <div className="flex items-start gap-6">
                            <div className="w-48 flex-shrink-0">
                              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
                                <img src="/lovable-uploads/a970c0ee-98d6-4405-a243-5a8c53e83c04.png" alt="Mgr Waldemar Sikorski" className="w-full h-full object-cover object-center" />
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-2xl font-display font-bold text-black mb-6">
                                Mgr Waldemar Sikorski
                              </h3>
                              
                              <div className="space-y-4 text-sm text-muted-foreground">
                                <p>
                                  Absolwent kierunku Administracja na Uniwersytecie Łódzkim w Łodzi oraz kierunku Prawo na Uniwersytecie Śląskim w Katowicach.
                                </p>
                                <p>
                                  <strong>Prowadzę zajęcia grupowe w ramach grup terapeutycznych, warsztatów oraz terapie indywidualne.</strong>
                                </p>
                                <p>
                                  Od kilku lat moją pasją jest pomaganie i praca z osobami uzależnionymi. Prowadzę zajęcia grupowe w ramach grup terapeutycznych, warsztatów oraz terapie indywidualne.
                                </p>
                                <p>
                                  W swojej pracy pomagam ludziom uzależnionym od substancji jak i behawioralnie, korzystając z wiedzy i dorobku różnych nurtów terapeutycznych.
                                </p>
                                <p>
                                  Nie ma dla mnie przypadków beznadziejnych. W swoim podejściu kieruję się empatią i zrozumieniem drugiego człowieka.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col md:flex-row gap-6 items-start flex-grow">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="aspect-[3/4] w-full max-w-[200px] mx-auto overflow-hidden rounded-lg">
                      <img src="/lovable-uploads/d1d0ca00-d479-40cb-b76f-4bcb28f1c121.png" alt="Mgr Mirosława Kupska" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 flex flex-col">
                    <h3 className="text-xl font-display font-bold text-black mb-4">
                      Mgr Mirosława Kupska
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <p>• Mgr psychologii klinicznej i psychoterapii</p>
                      <p>• Mgr socjologii i psychosocjologii</p>
                      <p>• Pedagog w specj. psychologia człowieka</p>
                      <p>• Specjalista psychoterapii uzależnień</p>
                      <p>• Dyplomowany terapeuta zajęciowy</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      Praktykę i doświadczenia nabyłam w Stowarzyszeniu Monar i Ośrodkach Leczenia, Terapii i Rehabilitacji Uzależnień...
                    </p>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white self-start mt-auto">
                          Czytaj więcej
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
                        <div className="space-y-6">
                          <div className="flex items-start gap-6">
                            <div className="w-48 flex-shrink-0">
                              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
                                <img src="/lovable-uploads/d1d0ca00-d479-40cb-b76f-4bcb28f1c121.png" alt="Mgr Mirosława Kupska" className="w-full h-full object-cover object-center" />
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-2xl font-display font-bold text-black mb-6">
                                Mgr Mirosława Kupska
                              </h3>
                              
                              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                                <p>• Mgr psychologii klinicznej i psychoterapii</p>
                                <p>• Mgr socjologii i psychosocjologii</p>
                                <p>• Pedagog w specj. psychologia człowieka</p>
                                <p>• Specjalista psychoterapii uzależnień (certyfikacja kbpn, pfst)(zawód medyczny)</p>
                                <p>• Dyplomowany terapeuta zajęciowy (zawód medyczny)</p>
                                <p>• Terapeuta behawioralny, Si oraz ręki</p>
                                <p>• Terapeuta dialogu motywującego</p>
                                <p>• Trener Umiejętności Społecznych</p>
                                <p>• Trener Neurofeedbacku EEG, QEEG w zastosowaniach klinicznych</p>
                                <p>• Mediator</p>
                                <p>• Diagnosta rozw. psych. zachowań i emocji</p>
                              </div>
                              
                              <div className="space-y-4 text-sm text-muted-foreground">
                                <p>
                                  Praktykę i doświadczenia nabyłam w Stowarzyszeniu Monar i Ośrodkach Leczenia, Terapii i Rehabilitacji Uzależnień, Ośrodkach Psychoterapii Uzależnień. Profilaktykę prowadzę w poradniach oraz placówkach pomocy psychoterapeutycznej jak i psychologicznej. Prowadzę grupy wsparcia, motywujące i psychoedukacyjne.
                                </p>
                                <p>
                                  Zawodowo dążę do poprawy jakości i dobrostanu życia osób uzależnionych, z zaburzeniami, problemami i innych chorób. Praca z pacjentem i jego rodziną jest moją pasją, daje mi satysfakcję i jest motywacją do rozwoju osobistego. Wiedzę i praktykę zdobywałam aby zaopiekować pacjenta w potrzebie służąc jako drogowskaz, dając narzędzia w procesie zmian.
                                </p>
                                <p>
                                  W pracy stosuję podejście holistyczne, prowadząc również sesje indywidualne, które obejmują poprawę relacji i odkrycie wartości w strukturze całej rodziny jak i odpowiedzialności, zaangażowania, motywacji i celach wspierając terapeutycznie DDA, DDD, pary, rodziny itp.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Galeria
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Zobacz nasz ośrodek - malownicze otoczenie i komfortowe wnętrza
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/ad5255c0-bfaf-4e27-898f-3c6ca169c4fa.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/ad5255c0-bfaf-4e27-898f-3c6ca169c4fa.png" alt="Ośrodek MyWay z lotu ptaka - widok panoramiczny" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/ef82065b-f6ba-4f22-9a2f-6dc0b542aa97.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/ef82065b-f6ba-4f22-9a2f-6dc0b542aa97.png" alt="Ośrodek MyWay - widok z drona na budynek główny" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/e0fde6e3-180f-4476-90d9-d7e860422371.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/e0fde6e3-180f-4476-90d9-d7e860422371.png" alt="Ośrodek MyWay w otoczeniu lasu - ujęcie z wysokości" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/95199853-af28-4c2e-ac29-531fa8800569.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/95199853-af28-4c2e-ac29-531fa8800569.png" alt="Kompleks budynków ośrodka MyWay w malowniczej okolicy" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/473706f8-97ae-480f-85e6-0856fe22a3d1.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/473706f8-97ae-480f-85e6-0856fe22a3d1.png" alt="Ośrodek MyWay - widok panoramiczny z miastem w tle" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/d4b9753b-4648-49c6-82e6-3498a7060af7.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/d4b9753b-4648-49c6-82e6-3498a7060af7.png" alt="Budynek ośrodka MyWay - widok z zewnątrz" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/d30a0627-16f6-441e-a533-b2c5898a740f.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/d30a0627-16f6-441e-a533-b2c5898a740f.png" alt="Pokój dwuosobowy z wygodnymi łóżkami" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/bd2354ae-1dbc-4be2-ae78-22c76939520f.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/bd2354ae-1dbc-4be2-ae78-22c76939520f.png" alt="Jadalnia - domowe posiłki i miła atmosfera" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/d20fc034-b8b7-41de-a671-5b00380de66b.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/d20fc034-b8b7-41de-a671-5b00380de66b.png" alt="Sala terapeutyczna z fotelami w kręgu" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass hover-lift cursor-pointer" onClick={() => setSelectedImage("/lovable-uploads/010863a6-dbb3-4ec6-a782-d6590b121248.png")}>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/010863a6-dbb3-4ec6-a782-d6590b121248.png" alt="Główna sala terapeutyczna z komfortowymi fotelami" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full p-0 bg-black/90 border-none">
            <div className="relative">
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
              <img src={selectedImage} alt="Podgląd zdjęcia ośrodka" className="w-full h-auto max-h-[80vh] object-contain" />
            </div>
          </DialogContent>
        </Dialog>}

      {/* Weekly Plan Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Plan tygodnia
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Struktura dnia w naszym ośrodku - regularność jako klucz do sukcesu
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Poniedziałek */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-display font-semibold text-black mb-4 text-center bg-primary/10 rounded-lg py-2">
                  Poniedziałek
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">8:30 - 9:00</span>
                    <span>Śniadanie</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:00 - 10:45</span>
                    <span>Analiza dzienniczków</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:45 - 13:00</span>
                    <span>Analiza dzienniczków / Grupa zadaniowa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">13:00 - 15:00</span>
                    <span>Obiad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">14:30 - 15:00</span>
                    <span>Wykład 1 tyg/wykład ostatniego tyg.</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">15:15 - 15:45</span>
                    <span>Wykład</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">15:45 - 17:30</span>
                    <span>Grupa zadaniowa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">17:30 - 18:00</span>
                    <span>Podsumowanie dnia</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">18:00 - 20:00</span>
                    <span>Terapia indywidualna</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">19:00 - 19:30</span>
                    <span>Kolacja</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">20:00 - 22:00</span>
                    <span>Czas wolny</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1">
                    <span className="font-semibold">23:00 - 7:00</span>
                    <span>Cisza nocna</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wtorek */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-display font-semibold text-black mb-4 text-center bg-primary/10 rounded-lg py-2">
                  Wtorek
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">8:30 - 9:00</span>
                    <span>Śniadanie</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:00 - 10:45</span>
                    <span>Analiza dzienniczków</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:45 - 13:00</span>
                    <span>Analiza dzienniczków / Grupa zadaniowa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">13:00 - 15:00</span>
                    <span>Obiad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">14:30 - 15:00</span>
                    <span>Wykład 1 tyg/wykład ostatniego tyg.</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">15:15 - 15:45</span>
                    <span>Wykład</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">15:45 - 17:30</span>
                    <span>Grupa zadaniowa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">17:30 - 18:00</span>
                    <span>Podsumowanie dnia</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">18:00 - 20:00</span>
                    <span>Terapia indywidualna</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">19:00 - 19:30</span>
                    <span>Kolacja</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">20:00 - 22:00</span>
                    <span>Czas wolny</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1">
                    <span className="font-semibold">23:00 - 7:00</span>
                    <span>Cisza nocna</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Środa */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-display font-semibold text-black mb-4 text-center bg-primary/10 rounded-lg py-2">
                  Środa
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">8:30 - 9:00</span>
                    <span>Śniadanie</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:00 - 10:45</span>
                    <span>Analiza dzienniczków</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:45 - 13:00</span>
                    <span>Analiza dzienniczków / Wykład: mechanizmy</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">13:00 - 15:00</span>
                    <span>Obiad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">14:30 - 17:30</span>
                    <span>Warsztaty umiejętności psychospołecznych</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">17:30 - 18:00</span>
                    <span>Podsumowanie dnia</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">18:00 - 20:00</span>
                    <span>Terapia indywidualna</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">19:00 - 19:30</span>
                    <span>Kolacja</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">20:00 - 22:00</span>
                    <span>Czas wolny</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1">
                    <span className="font-semibold">23:00</span>
                    <span>Cisza nocna</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Czwartek */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-display font-semibold text-black mb-4 text-center bg-primary/10 rounded-lg py-2">
                  Czwartek
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">8:30 - 9:00</span>
                    <span>Śniadanie</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:00 - 10:45</span>
                    <span>Analiza dzienniczków</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:45 - 13:00</span>
                    <span>Analiza dzienniczków / Grupa zadaniowa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">13:00 - 15:00</span>
                    <span>Obiad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">14:30 - 15:00</span>
                    <span>Wykład 1 tyg/wykład ostatniego tyg.</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">15:15 - 15:45</span>
                    <span>Wykład</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">15:45 - 17:30</span>
                    <span>Grupa zadaniowa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">17:30 - 18:00</span>
                    <span>Podsumowanie dnia</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">18:00 - 20:00</span>
                    <span>Terapia indywidualna</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">19:00 - 19:30</span>
                    <span>Kolacja</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">20:00 - 22:00</span>
                    <span>Czas wolny</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1">
                    <span className="font-semibold">23:00 - 7:00</span>
                    <span>Cisza nocna</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Piątek */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-display font-semibold text-black mb-4 text-center bg-primary/10 rounded-lg py-2">
                  Piątek
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">8:30 - 9:00</span>
                    <span>Śniadanie</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:00 - 10:45</span>
                    <span>Analiza dzienniczków</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:45 - 13:00</span>
                    <span>Analiza dzienniczków / Grupa zadaniowa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">13:00 - 15:00</span>
                    <span>Obiad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">14:30 - 15:00</span>
                    <span>Wykład 1 tyg/wykład ostatniego tyg.</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">15:15 - 15:45</span>
                    <span>Wykład</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">15:45 - 17:30</span>
                    <span>Grupa zadaniowa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">17:30 - 18:00</span>
                    <span>Podsumowanie dnia</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">18:00 - 20:00</span>
                    <span>Terapia indywidualna</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">19:00 - 19:30</span>
                    <span>Kolacja</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">20:00 - 22:00</span>
                    <span>Film terapeutyczny lub praca własna</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1">
                    <span className="font-semibold">23:00 - 7:00</span>
                    <span>Cisza nocna</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sobota */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-display font-semibold text-black mb-4 text-center bg-primary/10 rounded-lg py-2">
                  Sobota
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">8:30 - 9:00</span>
                    <span>Śniadanie</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:00 - 10:45</span>
                    <span>Analiza dzienniczków</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:45 - 13:00</span>
                    <span>Spotkanie Absolwentów</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">13:00 - 15:00</span>
                    <span>Obiad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">14:30 - 17:30</span>
                    <span>Warsztaty umiejętności psychospołecznych</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">17:30 - 18:00</span>
                    <span>Podsumowanie dnia</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">18:00 - 20:00</span>
                    <span>Terapia indywidualna</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">19:00 - 19:30</span>
                    <span>Kolacja</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">20:00 - 22:00</span>
                    <span>Czas wolny</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1">
                    <span className="font-semibold">23:00</span>
                    <span>Cisza nocna</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Niedziela - osobno jako większa karta */}
          <div className="mt-6 max-w-md mx-auto">
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-display font-semibold text-black mb-4 text-center bg-secondary/10 rounded-lg py-2">
                  Niedziela
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">8:30 - 9:00</span>
                    <span>Śniadanie</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:00 - 10:45</span>
                    <span>Analiza dzienniczków</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">10:45 - 13:00</span>
                    <span>Czas wolny</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">13:00 - 15:00</span>
                    <span>Obiad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">14:30 - 17:30</span>
                    <span>Czas wolny (odwiedziny, terapia indywidualna)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">17:30 - 18:00</span>
                    <span>Podsumowanie dnia</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">18:00 - 20:00</span>
                    <span>Terapia indywidualna</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">19:00 - 19:30</span>
                    <span>Kolacja</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1 border-b border-muted/50">
                    <span className="font-semibold">20:00 - 22:00</span>
                    <span>Czas wolny</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-1">
                    <span className="font-semibold">23:00</span>
                    <span>Cisza nocna</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                  <p className="text-xs text-muted-foreground text-center">
                    Dzień regeneracji i refleksji w spokojnym otoczeniu ośrodka
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Zacznij leczenie już teraz
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Lepszego momentu nie będzie! Jesteśmy do Twojej dyspozycji 24h/dobę. 
            Zadzwoń, napisz, zapytaj o wszystko, co Cię interesuje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-premium">
              <Phone className="w-5 h-5 mr-2" />
              +48 731 395 295
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Formularz kontaktowy
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.facebook.com/osrodekleczeniauzalezniencom" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group" title="Facebook">
              <Facebook className="w-6 h-6 text-white group-hover:text-primary-foreground transition-colors" />
            </a>
            <a href="https://www.instagram.com/krystiannagaba/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group" title="Instagram">
              <Instagram className="w-6 h-6 text-white group-hover:text-primary-foreground transition-colors" />
            </a>
            <a href="https://www.youtube.com/@krystiannagaba/videos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group" title="YouTube">
              <Youtube className="w-6 h-6 text-white group-hover:text-primary-foreground transition-colors" />
            </a>
            <a href="https://www.tiktok.com/@krystian.nagaba" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group" title="TikTok">
              <Music className="w-6 h-6 text-white group-hover:text-primary-foreground transition-colors" />
            </a>
            <a href="https://share.google/hx1ycCrHeU5OgdCXb" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group" title="Google Maps">
              <MapIcon className="w-6 h-6 text-white group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default About;