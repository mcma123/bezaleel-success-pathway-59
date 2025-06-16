
import Header from '@/components/Header';
import { BackgroundPaths } from "@/components/ui/background-paths";
import AboutUs from '@/components/AboutUs';
import ServicesOverview from '@/components/ServicesOverview';
import CountryServices from '@/components/CountryServices';
import PricingPlans from '@/components/PricingPlans';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-bezaleel-dark">
      <Header />
      <main>
        <BackgroundPaths title="Background Paths" />
        <AboutUs />
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
