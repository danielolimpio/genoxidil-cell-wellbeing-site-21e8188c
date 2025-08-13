import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Termos de Uso | Genoxidil"
        description="Termos e condições de uso do site Genoxidil: responsabilidades, limitações e direitos do usuário."
        canonical="https://genoxidil.blog/termos-de-uso"
      />
      <Header />
      <main className="pt-24">
        <section className="container mx-auto px-4">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            <h1>Termos de Uso</h1>
            <p><strong>Última atualização:</strong> 01/08/2025</p>
            <h2>Uso do Site</h2>
            <p>Ao acessar o site, você concorda com estes termos. O conteúdo é fornecido tal como está e pode ser atualizado sem aviso prévio.</p>
            <h2>Responsabilidades</h2>
            <p>Não nos responsabilizamos por decisões tomadas com base nas informações do site. Consulte um profissional de saúde quando necessário.</p>
            <h2>Propriedade Intelectual</h2>
            <p>Todo o conteúdo é protegido por direitos autorais. É proibida a reprodução sem autorização.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
