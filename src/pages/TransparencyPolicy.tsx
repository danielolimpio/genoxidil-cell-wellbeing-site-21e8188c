import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TransparencyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Política de Transparência | Genoxidil"
        description="Conheça nossos compromissos de transparência: cadeia de produção, qualidade, certificações e atendimento."
        canonical="https://genoxidil.blog/politica-de-transparencia"
      />
      <Header />
      <main className="pt-24">
        <section className="container mx-auto px-4">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            <h1>Política de Transparência</h1>
            <p><strong>Última atualização:</strong> 01/08/2025</p>
            <h2>Qualidade e Certificações</h2>
            <p>Seguimos padrões rigorosos de fabricação e controle de qualidade, com certificações reconhecidas internacionalmente.</p>
            <h2>Rastreabilidade</h2>
            <p>Garantimos rastreabilidade de insumos e processos, priorizando fornecedores auditados.</p>
            <h2>Atendimento e Confiabilidade</h2>
            <p>Canal de atendimento transparente, prazos e políticas claras para trocas e reembolsos.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TransparencyPolicy;
