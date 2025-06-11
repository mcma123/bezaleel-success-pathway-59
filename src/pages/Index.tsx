
import Header from '@/components/Header';
import { BackgroundPaths } from "@/components/ui/background-paths";
import ServicesOverview from '@/components/ServicesOverview';
import CountryServices from '@/components/CountryServices';
import PricingPlans from '@/components/PricingPlans';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main>
        <BackgroundPaths title="Background Paths" />
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
