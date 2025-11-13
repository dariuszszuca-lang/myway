import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import About from "./pages/About";
import Therapy from "./pages/Therapy";
import MyTherapy from "./pages/MyTherapy";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import CRM from "./pages/CRM";

// Article pages
import TherapyCenterChoiceArticle from "./pages/articles/TherapyCenterChoiceArticle";
import MotivationSobrietyArticle from "./pages/articles/MotivationSobrietyArticle";
import FamilyRelationshipsArticle from "./pages/articles/FamilyRelationshipsArticle";
import AlcoholCravingArticle from "./pages/articles/AlcoholCravingArticle";
import AddictionStagesArticle from "./pages/articles/AddictionStagesArticle";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Apply dark theme by default for brightened dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/terapia" element={<Therapy />} />
            <Route path="/eduway" element={<MyTherapy />} />
            <Route path="/cennik" element={<Pricing />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="/regulamin" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/crm" element={<CRM />} />

            {/* Article Routes */}
            <Route path="/artykuly/terapia-uzaleznien-trojmiasto" element={<TherapyCenterChoiceArticle />} />
            <Route path="/artykuly/motywacja-do-trzezwosci" element={<MotivationSobrietyArticle />} />
            <Route path="/artykuly/odbudowa-relacji-rodzinnych" element={<FamilyRelationshipsArticle />} />
            <Route path="/artykuly/glod-alkoholowy" element={<AlcoholCravingArticle />} />
            <Route path="/artykuly/rozpoznanie-uzaleznienia" element={<AddictionStagesArticle />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
