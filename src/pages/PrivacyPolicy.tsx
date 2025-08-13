import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Política de Privacidade | Genoxidil"
        description="Entenda como a Genoxidil trata dados pessoais: coleta, uso, armazenamento e seus direitos de privacidade."
        canonical="https://genoxidil.blog/politica-de-privacidade"
      />
      <Header />
      <main className="pt-24">
        <section className="container mx-auto px-4">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            <h1>Política de Privacidade</h1>
            <p><strong>Última atualização:</strong> 01/08/2025</p>
            <p>Esta Política descreve como tratamos seus dados pessoais em conformidade com a LGPD e demais regulamentações aplicáveis.</p>
            <h2>Dados Coletados</h2>
            <ul>
              <li>Informações de contato: nome, e-mail, telefone</li>
              <li>Dados de navegação: páginas visitadas, dispositivo, IP</li>
              <li>Dados de transação: pedidos e histórico de compras</li>
            </ul>
            <h2>Finalidades do Tratamento</h2>
            <ul>
              <li>Processamento de pedidos e entrega de produtos</li>
              <li>Atendimento ao cliente e suporte</li>
              <li>Comunicações de marketing (com consentimento)</li>
              <li>Cumprimento de obrigações legais</li>
            </ul>
            <h2>Seus Direitos</h2>
            <p>Você pode solicitar acesso, correção, exclusão, portabilidade e revogação de consentimento a qualquer momento pelo canal <a href="/contato">Contato</a>.</p>
            <h2>Retenção de Dados</h2>
            <p>Armazenamos dados pelo tempo necessário para cumprir as finalidades e exigências legais.</p>
            <h2>Segurança</h2>
            <p>Adotamos medidas técnicas e organizacionais para proteger suas informações contra acessos não autorizados.</p>
            <h2>Contato do Encarregado (DPO)</h2>
            <p>contato@genoxidil.com.br</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
