
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
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
