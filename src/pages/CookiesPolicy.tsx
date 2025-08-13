import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Política de Cookies | Genoxidil"
        description="Saiba como utilizamos cookies e tecnologias semelhantes para melhorar sua experiência no site Genoxidil."
        canonical="https://genoxidil.blog/politica-de-cookies"
      />
      <Header />
      <main className="pt-24">
        <section className="container mx-auto px-4">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            <h1>Política de Cookies</h1>
            <p><strong>Última atualização:</strong> 01/08/2025</p>
            <h2>O que são cookies?</h2>
            <p>Cookies são pequenos arquivos de texto utilizados para melhorar o funcionamento do site e personalizar sua experiência.</p>
            <h2>Tipos de Cookies</h2>
            <ul>
              <li>Essenciais: necessários para funcionalidades básicas</li>
              <li>Desempenho: análise de uso e melhorias</li>
              <li>Funcionais: preferências e personalização</li>
              <li>Marketing: anúncios relevantes e medição</li>
            </ul>
            <h2>Gerenciamento de Cookies</h2>
            <p>Você pode gerenciar permissões no navegador. Algumas funcionalidades podem ser afetadas se desativadas.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
