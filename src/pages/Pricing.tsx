import Header from '@/components/Layout/Header';
import PricingSection from '@/components/Sections/PricingSection';
import Footer from '@/components/Sections/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;