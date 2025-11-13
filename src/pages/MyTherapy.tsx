import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Sections/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  BookOpen,
  Heart,
  Star,
  MessageCircle,
  Play,
  Eye,
  FileText,
  Video,
  Film
} from 'lucide-react';

// Import article images
import therapyCenterImage from '@/assets/articles/therapy-center-choice.jpg';
import motivationImage from '@/assets/articles/motivation-sobriety.jpg';
import familyRelationshipsImage from '@/assets/articles/family-relationships.jpg';
import alcoholCravingImage from '@/assets/articles/alcohol-craving-new.jpg';
import addictionStagesImage from '@/assets/articles/addiction-stages.jpg';

const MyTherapy = () => {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const videos = [
    {
      id: 1,
      title: "Masz tylko 24 godziny. Co z nimi zrobisz?",
      videoId: "1W8W0R5v34k",
      category: "zrozumieć trzeźwość",
      duration: "15:32",
      views: "25k"
    },
    {
      id: 2,
      title: "Nie dotykaj przeszłości jeśli Ci nie przeszkadza",
      videoId: "Fz6BLK9QSp0", 
      category: "transformacja",
      duration: "18:45",
      views: "18k"
    },
    {
      id: 3,
      title: "Czy życie w trzeźwości mi się opłaca?",
      videoId: "qlj31IPIBFg",
      category: "zrozumieć trzeźwość", 
      duration: "12:28",
      views: "22k"
    },
    {
      id: 4,
      title: "Czy człowiek uzależniony może wrócić do kontrolowanego picia?",
      videoId: "5MZ7m0tmdDE",
      category: "zrozumieć trzeźwość",
      duration: "16:45",
      views: "15k"
    },
    {
      id: 5,
      title: "Co popycha nas z powrotem do nałogu?",
      videoId: "YX9h2Kby9d8",
      category: "wsparcie",
      duration: "14:20",
      views: "12k"
    },
    {
      id: 6,
      title: "Jak sobie radzić z głodami?",
      videoId: "n9J_Y9hzay8",
      category: "porady",
      duration: "11:30",
      views: "19k"
    },
    {
      id: 7,
      title: "Nie masz czasu pracować nad swoją trzeźwością? To duży błąd!",
      videoId: "4QfBdgOGp6A",
      category: "porady",
      duration: "13:15",
      views: "17k"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Terapia uzależnień w Trójmieście – Jak wybrać najlepszy ośrodek",
      excerpt: "Praktyczny przewodnik, który pomoże Ci wybrać odpowiedni ośrodek leczenia uzależnień. Dowiedz się, na co zwrócić uwagę przy wyborze terapii.",
      image: therapyCenterImage,
      category: "Porady",
      readTime: "8 min",
      slug: "terapia-uzaleznien-trojmiasto"
    },
    {
      id: 2,
      title: "Motywacja do trzeźwości – Jak ją znaleźć, kiedy wszystko inne zawodzi",
      excerpt: "Odkryj, jak znaleźć w sobie siłę do trzeźwienia i utrzymać ją na stałe. Sprawdzone metody budowania trwałej motywacji.",
      image: motivationImage,
      category: "Wsparcie",
      readTime: "6 min",
      slug: "motywacja-do-trzezwosci"
    },
    {
      id: 3,
      title: "Jak odbudować relacje z rodziną po terapii uzależnień",
      excerpt: "Przewodnik krok po kroku, jak naprawić relacje z bliskimi i odbudować zaufanie po zakończeniu terapii uzależnień.",
      image: familyRelationshipsImage,
      category: "Transformacja",
      readTime: "7 min",
      slug: "odbudowa-relacji-rodzinnych"
    },
    {
      id: 4,
      title: "Głód alkoholowy – 5 sprawdzonych sposobów, jak sobie z nim radzić",
      excerpt: "Poznaj skuteczne metody radzenia sobie z pragnieniem picia. Praktyczne techniki, które pomogą Ci w trudnych momentach.",
      image: alcoholCravingImage,
      category: "Porady",
      readTime: "5 min",
      slug: "glod-alkoholowy"
    },
    {
      id: 5,
      title: "Jak rozpoznać uzależnienie? 4 etapy, które musisz znać",
      excerpt: "Naucz się rozpoznawać sygnały ostrzegawcze uzależnienia. Poznaj 4 etapy rozwoju choroby i dowiedz się, kiedy szukać pomocy.",
      image: addictionStagesImage,
      category: "Zrozumieć trzeźwość",
      readTime: "6 min",
      slug: "rozpoznanie-uzaleznienia"
    }
  ];

  const reels = [
    {
      id: 1,
      title: "Szybka rada na trudne chwile",
      videoId: "UPvO_jkL0ws",
      views: "1.2K",
      description: "Krótka technika oddechowa na nagłe stany lękowe"
    },
    {
      id: 2,
      title: "Motywacja na dziś", 
      videoId: "gXe8F5El_QQ",
      views: "2.8K",
      description: "Przypomnienie o tym, dlaczego warto być trzeźwym"
    },
    {
      id: 3,
      title: "Unikaj pułapek",
      videoId: "TK10lLBZRUc",
      views: "890",
      description: "3 sytuacje, które mogą zagrozić Twojej trzeźwości"
    },
    {
      id: 4,
      title: "Radzenie z pokusą",
      videoId: "UOE-w1MOK3Q", 
      views: "1.5K",
      description: "Praktyczne sposoby na opór wobec pokus"
    },
    {
      id: 5,
      title: "Wsparcie w trudnych chwilach",
      videoId: "a0qOIkYCS3M",
      views: "3.1K", 
      description: "Jak szukać pomocy gdy wszystko się wali"
    },
    {
      id: 6,
      title: "Nowy dzień, nowe możliwości",
      videoId: "E7EJKteWV68",
      views: "2.4K",
      description: "Codzienna dawka motywacji i nadziei"
    }
  ];

  const categories = [
    "Wszystkie",
    "Zrozumieć trzeźwość", 
    "Transformacja",
    "Wsparcie",
    "Porady"
  ];

  const filteredVideos = selectedCategory === "Wszystkie" 
    ? videos 
    : videos.filter(video => 
        video.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === "Zrozumieć trzeźwość" && video.category === "zrozumieć trzeźwość")
      );

  const filteredArticles = selectedCategory === "Wszystkie" 
    ? articles 
    : articles.filter(article => 
        article.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === "Zrozumieć trzeźwość" && article.category === "Zrozumieć trzeźwość")
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background-subtle to-background-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Edukacja i wsparcie
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                EduWay
              </span>
            </h1>
            
            <p className="text-xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Centrum edukacji i wsparcia w procesie powrotu do zdrowia. Znajdź praktyczne poradniki, 
              artykuły naukowe i wsparcie specjalistów na każdym etapie swojej drogi do trzeźwości.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="btn-premium">
                <BookOpen className="w-5 h-5 mr-2" />
                Portal EduWay
              </Button>
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300">
                  <Heart className="w-5 h-5 mr-2" />
                  Formularz kontaktowy
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('videos-section')}
              variant="default"
              size="lg"
              className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300"
            >
              <Video className="w-5 h-5" />
              Materiały wideo
            </Button>
            <Button 
              onClick={() => scrollToSection('articles-section')}
              variant="default"
              size="lg"
              className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              Artykuły
            </Button>
            <Button 
              onClick={() => scrollToSection('reels-section')}
              variant="default"
              size="lg"
              className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300"
            >
              <Film className="w-5 h-5" />
              Rolki
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background-subtle border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Videos Section */}
      <section id="videos-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Materiały{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                wideo
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Obejrzyj wykłady i prezentacje naszych specjalistów na temat uzależnień i procesu zdrowienia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover-lift group cursor-pointer overflow-hidden">
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs !text-gray-900">
                      {video.category}
                    </Badge>
                    <div className="flex items-center text-xs text-foreground-muted">
                      <Eye className="w-3 h-3 mr-1" />
                      {video.views}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center text-xs text-foreground-muted">
                    <Play className="w-3 h-3 mr-1" />
                    <span>Obejrzyj na YouTube</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles-section" className="py-20 bg-background-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Artykuły{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                specjalistyczne
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Przeczytaj nasze artykuły napisane przez specjalistów w dziedzinie terapii uzależnień
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredArticles.map((article) => (
              <Link key={article.id} to={`/artykuly/${article.slug}`} className="block h-full">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover-lift group cursor-pointer overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs !text-gray-900">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-foreground-muted">
                      <FileText className="w-3 h-3 mr-1" />
                      Artykuł
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-900 mb-4 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-primary font-medium mt-auto">
                    <span>Czytaj dalej</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section id="reels-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Rolki{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                edukacyjne
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Krótkie, treściwe materiały wideo z praktycznymi poradami na każdy dzień
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reels.map((reel) => (
              <Card key={reel.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover-lift group cursor-pointer overflow-hidden">
                <div className="relative aspect-[9/16] bg-gray-100 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.videoId}`}
                    title={reel.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {reel.views}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-sm font-display font-semibold group-hover:text-primary transition-colors leading-tight mb-1">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-foreground-muted">
                    {reel.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-foreground-muted mb-4">Więcej rolek znajdziesz na naszych mediach społecznościowych</p>
            <a href="https://myway-links.lovable.app" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Film className="w-5 h-5 mr-2" />
                Zobacz wszystkie rolki
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background-subtle to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Potrzebujesz{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                wsparcia?
              </span>
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              Skontaktuj się z naszymi specjalistami, aby uzyskać personalne wsparcie i poradnictwo 
              na każdym etapie procesu zdrowienia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-premium">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Umów konsultację
                </Button>
              </a>
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Pobierz e-book
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyTherapy;