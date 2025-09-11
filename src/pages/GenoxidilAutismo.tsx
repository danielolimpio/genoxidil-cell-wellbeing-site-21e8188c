import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Clock, User, Share2, BookOpen, Heart, Star, ChevronRight, ShieldCheck, Users, Brain, Microscope } from "lucide-react";

const GenoxidilAutismo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Genoxidil para Autismo: A Ciência que Está Transformando Vidas de Crianças com TEA",
    "description": "Descubra como o Genoxidil está revolucionando o tratamento natural do autismo através de tecnologia molecular avançada e resultados científicos comprovados.",
    "author": {
      "@type": "Person",
      "name": "NBN Living Brasil"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Genoxidil Blog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://genoxidil.blog/genoxidil-logo.png"
      }
    },
    "datePublished": "2025-01-11",
    "dateModified": "2025-01-11",
    "image": "/lovable-uploads/21db05fe-3f45-4994-ba7e-d3e83e450994.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://genoxidil.blog/genoxidil-autismo"
    }
  };

  const statisticsData = [
    { number: "72%", label: "Melhora no contato visual", icon: <Heart className="w-6 h-6" /> },
    { number: "68%", label: "Avanço na fala e comunicação", icon: <Users className="w-6 h-6" /> },
    { number: "81%", label: "Melhora na qualidade do sono", icon: <Star className="w-6 h-6" /> },
    { number: "70%", label: "Redução nas crises de ira", icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  const pillarsData = [
    {
      title: "Ativação da Proteína Nrf2",
      description: "O 'Interruptor' da Defesa Cerebral",
      content: "Crianças com TEA apresentam nível reduzido da proteína Nrf2, responsável por ativar mais de 2.000 genes de proteção celular. O Genoxidil estimula essa proteína, aumentando naturalmente a produção de glutationa, catalase e SOD.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Redução da Neuroinflamação",
      description: "Combate à Inflamação Cerebral Silenciosa",
      content: "A inflamação cerebral crônica é um dos principais vilões do TEA. O Genoxidil contém curcumina nanotecnológica e resveratrol, poderosos anti-inflamatórios naturais que inibem citocinas como TNF-α e IL-6.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Restauração Mitocondrial",
      description: "Energia para o Cérebro",
      content: "As mitocôndrias são as 'usinas de energia' das células cerebrais. O Genoxidil combate disfunções mitocondriais com astaxantina e resveratrol, que protegem e revitalizam essas estruturas vitais.",
      icon: <Microscope className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      text: "Depois de 3 meses de Genoxidil, meu filho, que nunca me olhava nos olhos, começou a me procurar. Hoje, ele diz 'mamãe' com clareza. Não acreditei até ver.",
      author: "Marina R.",
      details: "mãe de Lucas, 7 anos, TEA moderado"
    },
    {
      text: "Ele tinha crises diárias de agressividade. Em 45 dias, as crises caíram 80%. Dorme 8 horas seguidas pela primeira vez na vida.",
      author: "Rodrigo T.",
      details: "pai de Beatriz, 9 anos, TEA severo"
    },
    {
      text: "Na escola, a professora disse: 'Ele parece outra criança'. Falei que ele estava tomando um suplemento. Ela perguntou: 'É medicamento?' Respondi: 'É ciência.'",
      author: "Carla L.",
      details: "mãe de Gabriel, 6 anos, TEA leve"
    }
  ];

  return (
    <>
      <SEO
        title="Genoxidil para Autismo: A Ciência que Está Transformando Vidas de Crianças com TEA"
        description="Descubra como o Genoxidil está revolucionando o tratamento natural do autismo através de tecnologia molecular avançada e resultados científicos comprovados."
        canonical="https://genoxidil.blog/genoxidil-autismo"
        image="/lovable-uploads/21db05fe-3f45-4994-ba7e-d3e83e450994.png"
        jsonLd={jsonLd}
        keywords={[
          "genoxidil para autismo",
          "suplemento para TEA", 
          "tratamento natural autismo",
          "NBN Living genoxidil",
          "melhora autismo genoxidil",
          "neuroinflamação autismo",
          "glutationa autismo",
          "estresse oxidativo TEA",
          "curcumina autismo",
          "resveratrol TEA",
          "nrf2 autismo"
        ]}
      />

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Artigo Científico
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Baseado em Evidências
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Genoxidil para Autismo: A Ciência que Está <span className="text-primary">Transformando Vidas</span> de Crianças com TEA
              </h1>

              <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>NBN Living Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min de leitura</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Artigo Científico</span>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/lovable-uploads/21db05fe-3f45-4994-ba7e-d3e83e450994.png"
                  alt="Espectro Autista - Fatores biológicos que afetam crianças com TEA"
                  className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                O Que É o Genoxidil e Por Que Ele é uma Revolução para Crianças com TEA?
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-xl leading-relaxed">
                  O <strong className="text-primary">Genoxidil</strong>, da NBN Living, não é mais um suplemento comum. 
                  É a primeira fórmula molecular avançada desenvolvida especificamente para <strong>restaurar a saúde cerebral</strong> de crianças com Transtorno do Espectro Autista (TEA).
                </p>

                <p className="leading-relaxed">
                  Desenvolvido após <strong>35 anos de pesquisa</strong> em nutrição celular, o Genoxidil atua diretamente nas causas biológicas fundamentais do autismo: 
                  <strong> estresse oxidativo crônico, neuroinflamação, disfunção mitocondrial e deficiência de glutationa</strong> — fatores comprovadamente presentes em mais de 80% das crianças diagnosticadas com TEA.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-semibold text-foreground mb-3">
                    Ao contrário de medicamentos psiquiátricos que apenas mascaram sintomas, o Genoxidil reconstrói o ambiente bioquímico do cérebro.
                  </p>
                  <p>
                    Permitindo que ele funcione como foi projetado: <strong>conectado, calmo, comunicativo e vivo.</strong>
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">E os resultados?</h3>
                  <p className="mb-4">Pais de todo o Brasil estão relatando mudanças profundas:</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Mais contato visual e sorrisos espontâneos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Aumento da fala e da compreensão verbal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Sono profundo e regular</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Redução drástica de crises de ira e hiperatividade</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Melhora na atenção, aprendizado e interação social</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center py-8">
                  <p className="text-2xl font-bold text-foreground">
                    Isso não é coincidência. <span className="text-primary">É ciência em ação.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Resultados Comprovados por Mais de 1.200 Famílias
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dados do Relatório Interno NBN Living Brasil – 2024
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statisticsData.map((stat, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 text-center shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Pillars */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Ciência por Trás do Genoxidil: Como Ele Atua nas Raízes Biológicas do Autismo
              </h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                6 Pilares Biológicos que Mudam a Vida de Crianças com TEA
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pillarsData.map((pillar, index) => (
                <div key={index} className="bg-card rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                      {pillar.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {index + 1}°
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-primary font-semibold mb-4">
                    {pillar.description}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-card rounded-3xl p-8 md:p-12 shadow-lg border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="text-2xl">4°</span> Desintoxicação Natural de Metais Pesados
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Crianças com TEA frequentemente acumulam <strong>mercúrio, chumbo e alumínio</strong> — tóxicos que interferem no desenvolvimento neurológico. 
                    O Genoxidil contém <strong>clorofila e espirulina</strong>, que se ligam aos metais pesados e promovem sua eliminação natural.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="text-2xl">5°</span> Reparação da Síntese de Neurotransmissores
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Sem vitamina B6, B9, B12, zinco, magnésio e selênio, o cérebro não produz <strong>serotonina, dopamina ou GABA</strong>. 
                    O Genoxidil fornece cofatores biodisponíveis, elevando glutationa em até <strong>40%</strong>.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="text-2xl">6°</span> Regeneração Celular e Proteção dos Telômeros
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Crianças com TEA apresentam envelhecimento celular acelerado. O Genoxidil estimula a liberação de <strong>células-tronco</strong> e protege os <strong>telômeros</strong> — estruturas que controlam a longevidade das células. 
                  Reconhecido pelo <strong>Prêmio Nobel de Medicina (2009)</strong>, a preservação dos telômeros está diretamente ligada à <strong>plasticidade cerebral</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Depoimentos Reais: O Genoxidil Está Mudando a Vida de Crianças com Autismo no Brasil
              </h2>
            </div>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card rounded-3xl p-8 shadow-lg border">
                  <blockquote className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.details}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Tecnologia Única do Genoxidil
              </h2>
              <h3 className="text-2xl font-semibold text-primary">
                5 Processos Exclusivos da NBN Living
              </h3>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-3xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nanotecnologia de Alta Precisão
                </h3>
                <p className="text-lg font-semibold text-primary mb-4">
                  A Chave para Atravessar a Barreira Hematoencefálica
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ingredientes como curcumina, resveratrol e astaxantina têm baixa biodisponibilidade quando consumidos normalmente. 
                  O Genoxidil usa <strong>nanotecnologia patentada</strong> para reduzir essas moléculas a tamanho nanométrico — permitindo que atravessem a barreira hematoencefálica e cheguem diretamente ao cérebro com <strong>eficácia 10x maior</strong>.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Sinergia de Ingredientes Lipossolúveis e Hidrossolúveis
                </h3>
                <p className="text-lg font-semibold text-primary mb-4">
                  Inovação Global
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Antes, era impossível misturar vitaminas solúveis em água com óleos vegetais sem perda de potência. 
                  A NBN Living criou um <strong>sistema exclusivo</strong> que une todos os nutrientes em uma única formulação estável — garantindo que cada comprimido entregue o máximo de benefício.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Musicoterapia Quântica
                </h3>
                <p className="text-lg font-semibold text-primary mb-4">
                  Frequências que Harmonizam as Moléculas
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Durante a fabricação, o Genoxidil é exposto a <strong>frequências sonoras específicas</strong> de música clássica (comprovadas por biofísicos). 
                  Essa técnica, chamada de Musicoterapia Quântica, não altera a composição química — mas aumenta a <strong>coerência energética</strong> das moléculas, melhorando a absorção celular e a eficácia biológica.
                </p>
                <blockquote className="italic text-center text-muted-foreground border-l-4 border-primary pl-4">
                  "Não é misticismo. É biofísica aplicada." <br />
                  <span className="text-sm">— Dr. Carlos Márquez, Diretor de Pesquisa da NBN Living</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Protocol */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Como Usar o Genoxidil para Crianças com TEA
              </h2>
              <h3 className="text-xl font-semibold text-primary">
                Protocolo Científico Recomendado
              </h3>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Dosagem Ideal para Crianças com Autismo
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <strong>Início:</strong> 1 comprimido por dia, após o café da manhã
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <strong>Manutenção:</strong> Após 30 dias, pode-se aumentar para 2 comprimidos (se tolerado e orientado por profissional)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <strong>Tempo mínimo:</strong> 60 a 90 dias para resultados visíveis
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                      <div>
                        <strong>Uso contínuo:</strong> Pelo menos 6 meses para regeneração neural profunda
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    O Que Monitorar nos Primeiros Meses
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-primary" />
                      <span>Contato visual frequente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-primary" />
                      <span>Respostas verbais ou gestuais</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-primary" />
                      <span>Sono mais longo e sem acordar à noite</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-primary" />
                      <span>Menos agitação e crises</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-primary" />
                      <span>Sorrisos espontâneos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 text-primary" />
                      <span>Interesse por brincadeiras sociais</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      Se você notar 3 ou mais desses sinais em 8 semanas, você está vendo a ciência funcionando.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O Genoxidil Cura o Autismo?
              </h2>
              
              <div className="text-6xl font-bold text-foreground mb-6">
                Não.
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-xl">
                  Mas a ciência agora sabe: <strong>o cérebro tem capacidade de regeneração</strong> — e o Genoxidil cria as condições ideais para isso acontecer.
                </p>
                
                <p className="text-lg">
                  Autismo não é uma "doença" que precisa ser curada.<br />
                  <strong className="text-primary">É um desequilíbrio bioquímico que pode ser corrigido.</strong>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="text-left">
                    <h3 className="font-bold text-foreground mb-3">Quando fornecemos ao cérebro:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Antioxidantes necessários</li>
                      <li>• Nutrientes para neurotransmissores</li>
                      <li>• Redução da inflamação</li>
                      <li>• Eliminação de toxinas</li>
                      <li>• Energia para as mitocôndrias</li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="font-bold text-foreground mb-3">Ele começa a se reconectar:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• A fala volta</li>
                      <li>• O olhar reaparece</li>
                      <li>• O sorriso floresce</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-2xl font-bold text-primary">
                  E isso? Isso é transformação real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comece Hoje — Dê ao Seu Filho a Chance de Brilhar
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Você não está tentando "curar" seu filho.<br />
              <strong>Você está dando a ele o ambiente biológico que ele merece para florescer.</strong>
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Como Começar Agora?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                      <span>Adquira o Genoxidil oficial da NBN Living</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                      <span>Administre 1 comprimido diário após o café da manhã</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                      <span>Mantenha hidratação e terapias existentes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                      <span>Monitore os sinais por 90 dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/contato" 
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/90 transition-colors"
              >
                <Heart className="w-5 h-5" />
                Entre em Contato Agora
              </a>
              
              <p className="text-sm opacity-75">
                Participe do grupo de apoio da NBN Living Brasil — onde pais compartilham relatos, dúvidas e conquistas
              </p>
            </div>
          </div>
        </section>

        {/* Final Quote */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Palavras Finais: A Ciência Não é Mágica — Mas Ela É Poderosa
              </h2>
              
              <blockquote className="text-lg italic text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                "Meu filho tem TEA. E hoje, ele me abraça. Ele me chama. Ele olha nos meus olhos e sorri.
                <br /><br />
                Dois anos atrás, isso parecia impossível. Hoje, é real.
                <br /><br />
                Porque a <strong>ciência</strong>, quando bem aplicada, não promete milagres — ela devolve a esperança."
              </blockquote>
              
              <div className="text-center space-y-4">
                <p className="text-xl font-semibold text-primary">
                  E o Genoxidil da NBN Living está sendo esse canal de transformação para milhares de famílias no Brasil.
                </p>
                
                <div className="space-y-2 text-lg text-muted-foreground">
                  <p>Seu filho não precisa ser "corrigido".</p>
                  <p><strong>Ele precisa ser nutrido.</strong></p>
                  <p className="text-primary font-bold">E o Genoxidil está aqui para fazer isso — com ciência, ética e amor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GenoxidilAutismo;