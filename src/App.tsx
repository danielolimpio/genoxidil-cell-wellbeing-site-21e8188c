import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import BlogPost from "./components/BlogPost";
import { HelmetProvider } from "react-helmet-async";
import Blog from "./pages/Blog";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import TransparencyPolicy from "./pages/TransparencyPolicy";
import RefundPolicy from "./pages/RefundPolicy";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<AboutUs />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
              <Route path="/politica-de-cookies" element={<CookiesPolicy />} />
              <Route path="/termos-de-uso" element={<TermsOfUse />} />
              <Route path="/politica-de-transparencia" element={<TransparencyPolicy />} />
              <Route path="/politica-de-reembolso" element={<RefundPolicy />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);


export default App;
