import Header from '@/components/Layout/Header';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import GoogleReviewsSection from '@/components/Sections/GoogleReviewsSection';
import ServicesSection from '@/components/Sections/ServicesSection';
import ProcessSection from '@/components/Sections/ProcessSection';
import ContactSection from '@/components/Sections/ContactSection';
import Footer from '@/components/Sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GoogleReviewsSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
