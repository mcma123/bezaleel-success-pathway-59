
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import Ecommerce from "./pages/services/Ecommerce";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
