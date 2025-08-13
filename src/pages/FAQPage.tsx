import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { HelpCircle, ShieldCheck, MessageCircle } from "lucide-react";

const FAQPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'Perguntas Frequentes - Genoxidil',
    url: 'https://genoxidil.blog/faq'
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="FAQ Genoxidil | Perguntas Frequentes e Suporte"
        description="Tire suas dúvidas sobre Genoxidil, Nrf2, ingredientes, uso e entrega. FAQ completo com suporte ao cliente."
        canonical="https://genoxidil.blog/faq"
        jsonLd={jsonLd}
      />
      <Header />

      <main className="pt-24">
        {/* Hero criativo */}
        <section className="container mx-auto px-4">
          <div className="rounded-2xl border border-border p-8 bg-card text-card-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground"><HelpCircle/> Ajuda oficial</span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground"><ShieldCheck/> Conteúdo verificado</span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground"><MessageCircle/> Suporte humano</span>
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold">Perguntas Frequentes</h1>
            <p className="mt-2 text-muted-foreground max-w-3xl">
              Encontre respostas rápidas e confiáveis sobre o suplemento Genoxidil, ativação da proteína Nrf2 e cuidados essenciais.
            </p>
          </div>
        </section>

        {/* FAQ existente com layout diferenciado via componente */}
        <section className="container mx-auto px-4 mt-8">
          <div className="rounded-2xl border border-border bg-background">
            <FAQ />
          </div>
        </section>

        {/* CTA Suporte */}
        <section className="container mx-auto px-4 mt-8">
          <div className="rounded-2xl border border-border p-6 bg-card text-card-foreground flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold">Ainda tem dúvidas?</h2>
              <p className="text-muted-foreground">Fale com um especialista por WhatsApp, e-mail ou telefone. Nosso time responde rápido.</p>
            </div>
            <div className="flex gap-3">
              <a href="/contato" className="rounded-md border border-border bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors">Falar com suporte</a>
              <a href="/produtos" className="rounded-md bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90">Ver produtos</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
