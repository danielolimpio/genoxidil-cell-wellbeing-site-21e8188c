import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Contact from "@/components/Contact";
import { Headphones, Users, PhoneCall } from "lucide-react";

const ContactPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contato - Genoxidil',
    url: 'https://genoxidil.blog/contato'
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato Genoxidil | Suporte ao Cliente, Afiliados e SAC"
        description="Fale com o suporte Genoxidil: atendimento ao cliente, suporte de afiliados e SAC. WhatsApp, e-mail e telefone."
        canonical="https://genoxidil.blog/contato"
        jsonLd={jsonLd}
      />
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="container mx-auto px-4">
          <div className="rounded-2xl border border-border p-8 bg-card text-card-foreground">
            <h1 className="text-3xl md:text-4xl font-extrabold">Contato e Suporte</h1>
            <p className="mt-2 text-muted-foreground max-w-3xl">Canais de atendimento dedicados para clientes, parceiros afiliados e Serviço de Atendimento ao Consumidor (SAC).</p>

            {/* Atalhos de suporte */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a href="#form" className="rounded-xl border border-border p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                <div className="flex items-center gap-3">
                  <Headphones/>
                  <div>
                    <h3 className="font-semibold">Suporte ao Cliente</h3>
                    <p className="text-sm text-muted-foreground">Dúvidas de pedidos, entregas e uso.</p>
                  </div>
                </div>
              </a>
              <a href="#afiliados" className="rounded-xl border border-border p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                <div className="flex items-center gap-3">
                  <Users/>
                  <div>
                    <h3 className="font-semibold">Suporte de Afiliados</h3>
                    <p className="text-sm text-muted-foreground">Parcerias, links e comissões.</p>
                  </div>
                </div>
              </a>
              <a href="#sac" className="rounded-xl border border-border p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                <div className="flex items-center gap-3">
                  <PhoneCall/>
                  <div>
                    <h3 className="font-semibold">SAC</h3>
                    <p className="text-sm text-muted-foreground">Reclamações e sugestões.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Formulário e canais */}
        <section id="form" className="container mx-auto px-4 mt-8">
          <Contact />
        </section>

        <section id="afiliados" className="container mx-auto px-4 mt-8">
          <div className="rounded-2xl border border-border p-6 bg-card text-card-foreground">
            <h2 className="text-xl font-bold">Central do Afiliado</h2>
            <p className="text-muted-foreground">Suporte dedicado para afiliados e distribuidores oficiais.</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <li className="rounded-md border border-border p-3">Onboarding e materiais de marketing</li>
              <li className="rounded-md border border-border p-3">Links, cupons e rastreio de vendas</li>
              <li className="rounded-md border border-border p-3">Atendimento prioritário no WhatsApp</li>
              <li className="rounded-md border border-border p-3">Treinamentos e suporte técnico</li>
            </ul>
          </div>
        </section>

        <section id="sac" className="container mx-auto px-4 mt-8 mb-12">
          <div className="rounded-2xl border border-border p-6 bg-card text-card-foreground">
            <h2 className="text-xl font-bold">SAC - Serviço de Atendimento ao Consumidor</h2>
            <p className="text-muted-foreground">Registre solicitações de troca, reembolso ou reclamações.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:contato@genoxidil.com.br" className="rounded-md border border-border bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">E-mail</a>
              <a href="tel:08001234567" className="rounded-md border border-border bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">0800 123 4567</a>
              <a href="/politica-de-reembolso" className="rounded-md bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90">Política de Reembolso</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
