import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Shield, Truck, Phone, CreditCard, Users, Gift, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
const Products = () => {
  const benefits = ["Regeneração de células-tronco", "Estímulo à longevidade celular", "Fortalecimento do sistema imune", "Redução de inflamações e dores", "Equilíbrio metabólico e mais energia no dia a dia"];
  const systems = [{
    name: "Sistema Imunológico",
    description: "reforça as defesas naturais"
  }, {
    name: "Sistema Antioxidante",
    description: "combate o estresse oxidativo"
  }, {
    name: "Sistema Anti-envelhecimento",
    description: "retarda o envelhecimento celular"
  }, {
    name: "Sistema de Nutrição Celular",
    description: "otimiza a absorção de nutrientes"
  }, {
    name: "Sistema de Desintoxicação",
    description: "elimina toxinas e metais pesados"
  }];
  const conditions = ["Diabetes", "Câncer", "Parkinson", "Alzheimer", "Lúpus", "Hipertensão", "Esclerose Múltipla", "Artrite", "Artrose", "Fibromialgia", "Dores Articulares", "Gastrite", "Reumatismo", "Impotência Sexual", "Enxaqueca", "Obesidade", "Anemia", "Insônia", "Depressão", "Cansaço", "Problemas de memória e visão"];
  const ingredients = ["Espirulina", "Resveratrol", "Licopeno", "Clorofila", "Astaxantina", "Vitaminas e minerais essenciais", "Proteínas NRF1 e NRF2"];
  const advantages = [{
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Produto 100% original com Nota Fiscal"
  }, {
    icon: <Truck className="h-5 w-5" />,
    title: "Frete grátis para todo o Brasil"
  }, {
    icon: <Phone className="h-5 w-5" />,
    title: "Suporte com médicos e nutricionistas"
  }, {
    icon: <Phone className="h-5 w-5" />,
    title: "Atendimento via WhatsApp com um Especialista"
  }, {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Cashback em todas as compras"
  }, {
    icon: <Users className="h-5 w-5" />,
    title: "Possibilidade de se tornar Distribuidor Oficial"
  }, {
    icon: <Gift className="h-5 w-5" />,
    title: "Preços e promoções exclusivas para clientes diretos"
  }];
  const faqs = [{
    question: "Como devo tomar o Genoxidil?",
    answer: "Tome 1 comprimido ao dia pela manhã, preferencialmente com o estômago vazio ou conforme orientação profissional."
  }, {
    question: "Quanto tempo para ver os primeiros resultados?",
    answer: "Os primeiros benefícios podem ser percebidos entre 15 a 30 dias de uso contínuo, mas o efeito completo ocorre após 90 dias."
  }, {
    question: "O Genoxidil tem contraindicações?",
    answer: "O produto é natural e seguro. Não deve ser consumido por gestantes, lactantes e crianças. Consulte um profissional de saúde em caso de dúvidas."
  }, {
    question: "Posso tomar junto com outros medicamentos?",
    answer: "Por ser um suplemento natural, geralmente não há interações. Porém, consulte seu médico se estiver fazendo uso de medicamentos."
  }, {
    question: "Qual a validade do produto?",
    answer: "O Genoxidil tem validade de 24 meses a partir da data de fabricação, quando armazenado adequadamente."
  }, {
    question: "Vocês oferecem garantia?",
    answer: "Sim! Oferecemos garantia de satisfação com reembolso em até 7 dias caso não esteja satisfeito com o produto."
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Star className="h-4 w-4" />
                Sucesso em mais de 75 países
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-primary">Genoxidil</span> - Suplemento de{" "}
                <span className="text-secondary">Regeneração Celular</span> e Ativação da{" "}
                <span className="text-primary">Proteína Nrf2</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium">
                Genoxidil ativa mais de 2.000 genes de sobrevivência e combate 1 milhão de radicais livres por segundo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  COMPRE AGORA
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Falar com Especialista
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img src="/lovable-uploads/744bea02-712f-4edc-a49e-3b0708006424.png" alt="Genoxidil - Suplemento de Regeneração Celular" className="w-full max-w-md object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              
              {/* O que é o Genoxidil */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">O que é o Genoxidil?</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground">
                      Suplemento 100% natural à base de nanotecnologia com sucesso comprovado em mais de 75 países.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Atua na regeneração celular, ativando a proteína NRF2 para combater o envelhecimento e fortalecer o organismo.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Saiba mais sobre a <a href="/sobre" className="text-primary underline underline-offset-2">NBN Living</a> e nossa tecnologia.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img src="/lovable-uploads/a2a45f78-dcf9-411b-8f57-8d39ffdcfe88.png" alt="Certificações Genoxidil" className="w-full max-w-sm object-contain" loading="lazy" decoding="async" sizes="(min-width: 768px) 400px, 100vw" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Como Funciona */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Como o Genoxidil Funciona?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ação Celular</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Atua diretamente nos mecanismos celulares</p>
                      <p>• Ativa a proteína Nrf2 a nível celular</p>
                      <p>• Estimula antioxidantes endógenos</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Benefícios Sistêmicos</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p>• Nutre e fortalece o sistema imunológico</p>
                      <p>• Promove desintoxicação celular</p>
                      <p>• Combate 1 milhão de radicais livres por segundo</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Principais Benefícios */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Principais Benefícios</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </div>)}
                </div>
                <div className="mt-8 flex justify-center">
                  <img src="/lovable-uploads/0e94673e-0098-4131-9d67-3267472bb4e7.png" alt="Casal feliz e saudável" className="w-full max-w-md object-contain rounded-lg" loading="lazy" decoding="async" sizes="(min-width: 768px) 512px, 100vw" />
                </div>
              </div>

              <Separator />

              {/* Sistemas Ativados */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Sistemas do Corpo que o Genoxidil Ativa</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {systems.map((system, index) => <Card key={index} className="text-center">
                      <CardHeader>
                        <CardTitle className="text-base">{system.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{system.description}</CardDescription>
                      </CardContent>
                    </Card>)}
                </div>
              </div>

              <Separator />

              {/* Indicações */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Indicações de Uso</h2>
                <p className="text-lg text-muted-foreground">
                  Genoxidil auxilia na prevenção e/ou tratamento complementar de:
                </p>
                <div className="grid md:grid-cols-3 gap-2">
                  {conditions.map((condition, index) => <Badge key={index} variant="outline" className="justify-center py-2">
                      {condition}
                    </Badge>)}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Também é pesquisado e referenciado como: genoxidil benefícios; genoxidil para alzheimer, anemia, artrite, artrose, asma, bronquite, câncer, colite, colesterol, diabetes, doenças renais, esclerose múltipla, gastrite, hepatite, hipertensão, hipoparatiroidismo, impotência, insônia, lúpus, miomas, enxaqueca/migraña, neuropatia ciática, obesidade, osteoporose, parkinson, problemas renais, próstata, triglicerídeos, trombose, úlcera, varizes; além de termos relacionados: NBN Living, proteína Nrf2, nrf2, antiparasitário, antitumoral, antiviral, desinflamatório, rins, cálculos, cirrose e estreitamento intestinal.
                </p>
              </div>

              <Separator />

              {/* Composição */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Composição e Ingredientes Naturais</h2>
                <p className="text-lg text-muted-foreground">
                  Genoxidil contém mais de 50 fitonutrientes e 22 ingredientes premium:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {ingredients.map((ingredient, index) => <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                      <span>{ingredient}</span>
                    </div>)}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  * Todos os ingredientes são importados de seus países de origem com pureza garantida.
                </p>
              </div>

            </div>

            {/* Sidebar com Informações do Produto */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <img src="/lovable-uploads/568b97a3-2e2b-4780-80b6-eeb6a7e70709.png" alt="Rótulo Genoxidil" className="w-full object-contain mb-4" loading="lazy" decoding="async" sizes="(min-width: 768px) 360px, 100vw" />
                  <CardTitle className="text-center">Informações do Produto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Instruções de Uso:</h4>
                    <p className="text-sm text-muted-foreground">
                      Tomar 1 comprimido ao dia pela manhã
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Conteúdo:</h4>
                    <p className="text-sm text-muted-foreground">
                      30 comprimidos de 1,2g cada
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Conservação:</h4>
                    <p className="text-sm text-muted-foreground">
                      Armazenar em local fresco, seco e ao abrigo da luz
                    </p>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    COMPRE AGORA
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Falar com Especialista
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens Exclusivas */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vantagens Exclusivas ao Comprar Diretamente Conosco
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => <Card key={index} className="text-center">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-center text-primary">
                    {advantage.icon}
                  </div>
                  <p className="font-medium">{advantage.title}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Segurança e Garantia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Segurança e Garantia</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <Shield className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Produto Registrado</h3>
                <p className="text-muted-foreground">
                  Produto com registro e controle de qualidade
                </p>
              </div>
              
              <div className="space-y-4">
                <CheckCircle className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Padrão Internacional</h3>
                <p className="text-muted-foreground">
                  Fabricação em laboratório com padrão internacional
                </p>
              </div>
              
              <div className="space-y-4">
                <Star className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Garantia de Satisfação</h3>
                <p className="text-muted-foreground">
                  Reembolso em até 7 dias caso não esteja satisfeito
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Transforme Sua Saúde Hoje Mesmo!
          </h2>
          <p className="text-xl opacity-90">
            Junte-se a milhares de pessoas que já descobriram o poder da regeneração celular
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              COMPRE AGORA COM DESCONTO
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white hover:bg-white text-orange-600">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Products;