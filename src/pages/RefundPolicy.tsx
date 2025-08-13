import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Política de Reembolso | Genoxidil"
        description="Entenda os critérios, prazos e procedimentos para solicitar reembolso de pedidos Genoxidil."
        canonical="https://genoxidil.blog/politica-de-reembolso"
      />
      <Header />
      <main className="pt-24">
        <section className="container mx-auto px-4">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            <h1>Política de Reembolso</h1>
            <p><strong>Última atualização:</strong> 01/08/2025</p>
            <h2>Solicitação</h2>
            <p>O pedido de reembolso pode ser solicitado em até 7 dias corridos após o recebimento, conforme o CDC.</p>
            <h2>Condições</h2>
            <ul>
              <li>Produto lacrado e em perfeitas condições</li>
              <li>Nota fiscal e comprovante de compra</li>
              <li>Formulário de solicitação via <a href="/contato">Contato</a></li>
            </ul>
            <h2>Estornos</h2>
            <p>O estorno será processado pelo mesmo método de pagamento utilizado na compra, em até 10 dias úteis após aprovação.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
