import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Ingredients from '@/components/Ingredients';
import FeaturedVideos from '@/components/FeaturedVideos';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Genoxidil | Suplemento Nrf2 e Regeneração Celular"
        description="Genoxidil ativa a proteína Nrf2 para regeneração celular, antioxidantes naturais e bem-estar. Conheça benefícios, ingredientes e depoimentos."
        canonical="https://genoxidil.blog/"
      />
      <Header />
      <Hero />
      <Benefits />
      <Ingredients />
      <FeaturedVideos />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
