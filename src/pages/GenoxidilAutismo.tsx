import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const GenoxidilAutismo = () => {
  return (
    <>
      <SEO
        title="Genoxidil para Autismo: A Ciência que Está Transformando Vidas de Crianças com TEA"
        description="Descubra como o Genoxidil está revolucionando o tratamento natural do autismo através de tecnologia molecular avançada e resultados científicos comprovados."
        canonical="https://genoxidil.blog/genoxidil-autismo"
        image="/lovable-uploads/21db05fe-3f45-4994-ba7e-d3e83e450994.png"
        keywords={[
          "genoxidil para autismo",
          "suplemento para TEA", 
          "tratamento natural autismo",
          "NBN Living genoxidil"
        ]}
      />

      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted">
        <section className="relative pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Genoxidil para Autismo: A Ciência que Está <span className="text-primary">Transformando Vidas</span> de Crianças com TEA
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Conteúdo sendo carregado...
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GenoxidilAutismo;