
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import CountryServices from '@/components/CountryServices';
import PricingPlans from '@/components/PricingPlans';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <CountryServices />
        <Gallery />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
