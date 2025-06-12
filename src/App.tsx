
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import Ecommerce from "./pages/services/Ecommerce";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SouthAfrica from "./pages/services/SouthAfrica";
import Zambia from "./pages/services/Zambia";
import BusinessServices from "./pages/services/BusinessServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/south-africa" element={<SouthAfrica />} />
            <Route path="/services/zambia" element={<Zambia />} />
            <Route path="/services/business-services" element={<BusinessServices />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
