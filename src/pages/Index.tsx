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
import SEO from '@/components/SEO';

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Genoxidil Brasil - NBN Living",
      "description": "Suplemento de regeneração celular e ativação da proteína Nrf2 para longevidade e saúde celular",
      "url": "https://genoxidil.blog",
      "logo": "https://genoxidil.blog/genoxidil-logo.png",
      "sameAs": [
        "https://www.youtube.com/@genoxidiloficial",
        "https://nbnliving.news/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-12-98251-9116",
        "contactType": "Customer Service",
        "availableLanguage": "Portuguese"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Genoxidil",
      "description": "Suplemento de regeneração celular com nanotecnologia, ativa a proteína Nrf2 e combate 1 milhão de radicais livres por segundo",
      "image": "https://genoxidil.blog/genoxidil.jpg",
      "brand": {
        "@type": "Brand",
        "name": "NBN Living"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://store.nbnliving.com/danielmoreira",
        "priceCurrency": "BRL",
        "price": "297.00",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "BR",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 30
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "BR"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 3,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 3,
              "maxValue": 10,
              "unitCode": "DAY"
            }
          }
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ana Isabel"
        },
        "reviewBody": "Excelente produto! Senti melhora significativa na disposição e energia após algumas semanas de uso."
      }
    }
  ];

  return (
    <>
      <SEO
        title="Genoxidil – Saúde Celular e Longevidade com Nrf2"
        description="Descubra como o Genoxidil ativa a proteína Nrf2, combate o estresse oxidativo e promove saúde celular naturalmente."
        canonical="https://genoxidil.blog/"
        image="https://genoxidil.blog/genoxidil.jpg"
        keywords={[
          "genoxidil",
          "proteína nrf2",
          "regeneração celular",
          "antioxidantes naturais",
          "estresse oxidativo",
          "longevidade celular",
          "NBN Living",
          "saúde celular",
          "suplemento natural",
          "genoxidil brasil"
        ]}
        jsonLd={jsonLd}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Ingredients />
          <FeaturedVideos />
          <Testimonials />
          <BlogSection />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
