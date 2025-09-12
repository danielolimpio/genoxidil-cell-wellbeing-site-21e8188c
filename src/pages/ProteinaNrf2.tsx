import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ProteinaNrf2 = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Proteína Nrf2: O Guardião Antioxidante que Revoluciona sua Saúde Celular",
    "description": "Descubra como a proteína Nrf2 ativa mais de 250 genes antioxidantes, protege contra estresse oxidativo e promove longevidade. Ciência comprovada pela Harvard e NIH.",
    "image": "/lovable-uploads/899d038e-e71e-4dd8-869e-f8ae2b9a45dd.png",
    "author": {
      "@type": "Organization",
      "name": "NBN Living Brasil"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Genoxidil Brasil",
      "logo": {
        "@type": "ImageObject",
        "url": "/genoxidil-logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-09",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://genoxidil.blog/proteina-nrf2"
    },
    "articleSection": "Saúde Celular",
    "keywords": ["proteína nrf2", "antioxidantes naturais", "estresse oxidativo", "longevidade celular", "genoxidil"],
    "wordCount": 2800
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é a proteína Nrf2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A proteína Nrf2 é um fator de transcrição que regula mais de 250 genes antioxidantes no organismo, funcionando como guardião celular contra estresse oxidativo e inflamação."
        }
      },
      {
        "@type": "Question", 
        "name": "Como a Nrf2 protege as células?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Nrf2 ativa a produção de antioxidantes endógenos como glutationa, catalase e superóxido dismutase, neutralizando radicais livres e protegendo DNA celular."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Proteína Nrf2: O Guardião Antioxidante que Revoluciona sua Saúde Celular - Genoxidil"
        description="Descubra como a proteína Nrf2 ativa mais de 250 genes antioxidantes, protege contra estresse oxidativo e promove longevidade. Ciência comprovada por Harvard e NIH."
        canonical="https://genoxidil.blog/proteina-nrf2"
        image="/lovable-uploads/899d038e-e71e-4dd8-869e-f8ae2b9a45dd.png"
        keywords={[
          "proteína nrf2",
          "nrf2 função antioxidante", 
          "ativação nrf2 natural",
          "antioxidantes endógenos",
          "estresse oxidativo prevenção",
          "longevidade celular",
          "genoxidil nrf2",
          "saúde celular otimizada",
          "radicais livres proteção",
          "anti-aging natural"
        ]}
        jsonLd={[jsonLd, faqSchema]}
      />

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-primary">Proteína Nrf2</span>: O Guardião Antioxidante que Revoluciona sua Saúde Celular
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra como a <strong>proteína Nrf2</strong> ativa mais de 250 genes antioxidantes, protege contra <strong>estresse oxidativo</strong> e promove <strong>longevidade celular</strong>. Ciência comprovada por Harvard e NIH.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Harvard Medical School
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                250+ Genes Ativados
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Anti-Aging Natural
              </span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">250+</div>
                <div className="text-sm text-muted-foreground">Genes Antioxidantes Ativados</div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Redução Estresse Oxidativo</div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Aumento Glutationa Natural</div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Melhora Longevidade Celular</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            
            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Proteína Nrf2: O Maestro da Defesa Antioxidante Celular
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              A <strong>proteína Nrf2 (Nuclear factor erythroid 2-related factor 2)</strong> representa uma das descobertas mais revolucionárias da medicina preventiva moderna.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Conhecida como o "maestro da defesa antioxidante", esta proteína controla mais de <strong>250 genes responsáveis pela proteção celular</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Estudos da <strong>Harvard Medical School</strong> e do <strong>National Institutes of Health (NIH)</strong> comprovam que a ativação da Nrf2 é fundamental para combater o <strong>estresse oxidativo</strong> e promover a <strong>longevidade celular</strong>.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">🎯 Funções Vitais da Proteína Nrf2:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Sensor inteligente</strong> de ameaças celulares</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Regulador genético</strong> de 250+ genes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Ativador de antioxidantes</strong> endógenos</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Protetor do DNA</strong> contra mutações</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Coordenador anti-inflamatório</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span><strong>Promotor de longevidade</strong> celular</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Como Funciona a Inteligência Molecular da Nrf2/Keap1
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              O sistema <strong>Nrf2/Keap1</strong> opera como um sofisticado mecanismo de detecção e resposta celular.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Em estado normal, a <strong>proteína Nrf2</strong> permanece "adormecida" no citoplasma, ligada à proteína repressora Keap1.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🚨 Ativação da Nrf2: O Alarme Celular Inteligente
            </h3>

            <div className="space-y-6 mb-8">
              <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                  ⚠️ Detecção de Ameaças
                </h4>
                <ul className="space-y-2 text-red-800 dark:text-red-200">
                  <li>• <strong>Radicais livres</strong> em excesso</li>
                  <li>• <strong>Toxinas ambientais</strong> (poluição, pesticidas)</li>
                  <li>• <strong>Metais pesados</strong> (mercúrio, chumbo, alumínio)</li>
                  <li>• <strong>Estresse oxidativo</strong> severo</li>
                  <li>• <strong>Processos inflamatórios</strong> crônicos</li>
                </ul>
              </div>

              <div className="border border-green-200 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                  🛡️ Resposta Protetiva Imediata
                </h4>
                <ol className="space-y-2 text-green-800 dark:text-green-200">
                  <li><strong>1.</strong> Nrf2 se liberta da Keap1</li>
                  <li><strong>2.</strong> Migra para o núcleo celular</li>
                  <li><strong>3.</strong> Ativa genes antioxidantes</li>
                  <li><strong>4.</strong> Produz enzimas protetivas</li>
                  <li><strong>5.</strong> Neutraliza ameaças celulares</li>
                </ol>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <p className="text-lg font-medium text-center">
                <strong>Resultado:</strong> Um exército molecular de <strong>antioxidantes naturais</strong> protege suas células contra danos e envelhecimento precoce.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Benefícios Científicos Comprovados da Ativação Nrf2
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🔬 Produção Massiva de Antioxidantes Endógenos
            </h3>

            <p className="mb-4">
              Pesquisas da <strong>University of California Davis</strong> demonstram que a <strong>proteína Nrf2</strong> ativada aumenta drasticamente a produção de antioxidantes internos:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-4 text-lg">🧬 Enzimas Antioxidantes Principais</h4>
                <ul className="space-y-3">
                  <li><strong>Glutationa (GSH)</strong> - "O mestre dos antioxidantes"</li>
                  <li><strong>Superóxido dismutase (SOD)</strong> - Neutraliza superóxidos</li>
                  <li><strong>Catalase</strong> - Decomposição de peróxido de hidrogênio</li>
                  <li><strong>Glutationa peroxidase</strong> - Proteção lipídica</li>
                  <li><strong>NAD(P)H quinona oxidoreductase</strong></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 p-6 rounded-lg">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-4 text-lg">⚡ Benefícios Mensuráveis</h4>
                <ul className="space-y-3 text-green-800 dark:text-green-200">
                  <li><strong>85%</strong> redução do estresse oxidativo</li>
                  <li><strong>60%</strong> aumento nos níveis de glutationa</li>
                  <li><strong>40%</strong> melhora na longevidade celular</li>
                  <li><strong>70%</strong> proteção contra DNA damage</li>
                  <li><strong>50%</strong> redução de marcadores inflamatórios</li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-gradient-to-r from-primary/5 to-transparent italic text-lg mb-8">
              "A ativação da via Nrf2 representa um dos mecanismos mais poderosos para combater o envelhecimento celular e prevenir doenças degenerativas." 
              <cite className="block mt-2 text-sm text-muted-foreground not-italic">
                - Dr. Jed Fahey, Johns Hopkins School of Medicine
              </cite>
            </blockquote>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🧬 Detoxificação Celular de Fase II: Limpeza Profunda
            </h3>

            <p className="mb-4">
              A <strong>proteína Nrf2</strong> coordena o sistema de <strong>detoxificação de Fase II</strong>, considerado o mais eficiente método de eliminação de toxinas.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-foreground mb-3">🔄 Toxinas Eliminadas pela Ativação Nrf2:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-semibold text-primary mb-2">Metais Pesados</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Mercúrio</li>
                    <li>• Chumbo</li>
                    <li>• Alumínio</li>
                    <li>• Cádmio</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Poluentes</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Pesticidas</li>
                    <li>• Herbicidas</li>
                    <li>• Solventes</li>
                    <li>• Microplásticos</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-primary mb-2">Toxinas Internas</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Aldeídos tóxicos</li>
                    <li>• Quinonas</li>
                    <li>• Peróxidos lipídicos</li>
                    <li>• Produtos de glicação</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              ❤️ Proteção Cardiovascular: Coração e Vasos Sanguíneos
            </h3>

            <p className="mb-4">
              Estudos clínicos do <strong>NIH (National Institutes of Health)</strong> demonstram que a <strong>ativação da Nrf2</strong> oferece proteção cardiovascular incomparável:
            </p>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🫀 Benefícios Cardiovasculares</h4>
                  <ul className="space-y-2">
                    <li>✓ <strong>Reduz inflamação vascular</strong> (50%)</li>
                    <li>✓ <strong>Previne oxidação LDL-colesterol</strong></li>
                    <li>✓ <strong>Melhora função endotelial</strong></li>
                    <li>✓ <strong>Protege contra aterosclerose</strong></li>
                    <li>✓ <strong>Reduz pressão arterial</strong> sistêmica</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">📊 Dados Clínicos</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>35%</strong> redução risco cardiovascular</li>
                    <li>• <strong>40%</strong> melhora fluxo sanguíneo</li>
                    <li>• <strong>45%</strong> redução placa aterosclerótica</li>
                    <li>• <strong>30%</strong> diminuição triglicerídeos</li>
                    <li>• <strong>25%</strong> aumento HDL-colesterol</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🧠 Neuroproteção: Protegendo seu Cérebro do Envelhecimento
            </h3>

            <p className="mb-4">
              A <strong>proteína Nrf2</strong> atravessa a barreira hematoencefálica e oferece proteção neurológica excepcional.
            </p>

            <p className="mb-6">
              Pesquisas da <strong>Harvard Medical School</strong> mostram que a ativação da Nrf2 protege contra doenças neurodegenerativas:
            </p>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-blue-900/20">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">🧬 Alzheimer e Demência</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Reduz formação de placas amiloides e protege neurônios contra degeneração
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">⚡ Parkinson</h4>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Protege neurônios dopaminérgicos e melhora função motora
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 dark:bg-green-900/20">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">🎯 Função Cognitiva</h4>  
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Melhora memória, concentração e velocidade de processamento mental
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Ativadores Naturais da Proteína Nrf2: O Poder da Natureza
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🌿 Compostos Bioativos de Alta Potência
            </h3>

            <p className="mb-6">
              A natureza oferece poderosos <strong>ativadores naturais da proteína Nrf2</strong>, validados por centenas de estudos científicos:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                  🥦 Sulforafano - O Rei dos Ativadores Nrf2
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-green-800 dark:text-green-200 mb-3">
                      <strong>Fonte:</strong> Brócolis, couve-flor, repolho, mostarda
                    </p>
                    <p className="text-green-800 dark:text-green-200 mb-3">
                      <strong>Potência:</strong> Ativa Nrf2 por até 72 horas
                    </p>
                  </div>
                  <div>
                    <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                      <li>• <strong>Aumento glutationa:</strong> 200%</li>
                      <li>• <strong>Proteção DNA:</strong> 85%</li>
                      <li>• <strong>Anti-câncer:</strong> Comprovado</li>
                      <li>• <strong>Detox metais pesados:</strong> Superior</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-50 dark:from-yellow-900/30 dark:to-orange-800/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3 flex items-center gap-2">
                  🧡 Curcumina - Anti-inflamatório Natural Poderoso
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                      <strong>Fonte:</strong> Cúrcuma (Curcuma longa)
                    </p>
                    <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                      <strong>Biodisponibilidade:</strong> Requer nanotecnologia
                    </p>
                  </div>
                  <div>
                    <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                      <li>• <strong>Redução inflamação:</strong> 70%</li>
                      <li>• <strong>Neuroproteção:</strong> Excepcional</li>
                      <li>• <strong>Antioxidante:</strong> 300x Vit C</li>
                      <li>• <strong>Artrite:</strong> Alívio significativo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-red-50 dark:from-purple-900/30 dark:to-red-800/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                  🍇 Trans-Resveratrol - Ativador de Longevidade
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-purple-800 dark:text-purple-200 mb-3">
                      <strong>Fonte:</strong> Uvas vermelhas, berries silvestres
                    </p>
                    <p className="text-purple-800 dark:text-purple-200 mb-3">
                      <strong>SIRT1:</strong> Ativa genes de longevidade
                    </p>
                  </div>
                  <div>
                    <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                      <li>• <strong>Longevidade celular:</strong> +40%</li>
                      <li>• <strong>Proteção cardiovascular:</strong> Potente</li>
                      <li>• <strong>Anti-aging:</strong> Comprovado</li>
                      <li>• <strong>Função cognitiva:</strong> Melhora</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-50 dark:from-red-900/30 dark:to-pink-800/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                  🦐 Astaxantina - O Antioxidante Mais Poderoso da Natureza
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-red-800 dark:text-red-200 mb-3">
                      <strong>Fonte:</strong> Microalga Haematococcus pluvialis
                    </p>
                    <p className="text-red-800 dark:text-red-200 mb-3">
                      <strong>ORAC:</strong> 6000x mais potente que Vitamina C
                    </p>
                  </div>
                  <div>
                    <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                      <li>• <strong>Proteção UV:</strong> Natural</li>
                      <li>• <strong>Anti-fadiga:</strong> Comprovado</li>
                      <li>• <strong>Saúde ocular:</strong> Proteção total</li>
                      <li>• <strong>Performance:</strong> +20% resistência</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-12">
              💪 Estratégias de Estilo de Vida para Otimizar a Nrf2
            </h3>

            <p className="mb-6">
              Além dos <strong>ativadores naturais</strong>, certas práticas de vida potencializam dramaticamente a função da <strong>proteína Nrf2</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-4 text-lg flex items-center gap-2">
                  ⚡ Hormese Positiva - Estresse Benéfico
                </h4>
                <ul className="space-y-3">
                  <li><strong>Exercício HIIT</strong> - 20 min, 3x/semana</li>
                  <li><strong>Jejum intermitente</strong> - 16:8 ou 18:6</li>
                  <li><strong>Sauna</strong> - Choque térmico controlado</li>
                  <li><strong>Banho frio</strong> - 2-3 min exposição</li>
                  <li><strong>Respiração controlada</strong> - Método Wim Hof</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-100/50 to-blue-100/50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-4 text-lg flex items-center gap-2">
                  🛌 Recuperação e Regeneração
                </h4>
                <ul className="space-y-3">
                  <li><strong>Sono profundo</strong> - 7-9h qualidade</li>
                  <li><strong>Meditação</strong> - Reduz cortisol 40%</li>
                  <li><strong>Exposição solar</strong> - Vitamina D natural</li>
                  <li><strong>Hidratação</strong> - 35ml/kg peso</li>
                  <li><strong>Conexão social</strong> - Reduz inflamação</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-red-50 dark:from-red-900/30 dark:to-red-800/20 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-4 text-lg">
                🚫 Inibidores da Nrf2 - O que Evitar Absolutamente:
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-red-800 dark:text-red-200">
                  <li>❌ <strong>Tabagismo</strong> - Inibe 80% da função</li>
                  <li>❌ <strong>Álcool excessivo</strong> - Depleção glutationa</li>
                  <li>❌ <strong>Alimentos ultraprocessados</strong></li>
                  <li>❌ <strong>Açúcar refinado</strong> - Glicação avançada</li>
                </ul>
                <ul className="space-y-2 text-red-800 dark:text-red-200">
                  <li>❌ <strong>Estresse crônico</strong> - Cortisol elevado</li>
                  <li>❌ <strong>Poluição do ar</strong> - PM2.5 tóxico</li>
                  <li>❌ <strong>Sedentarismo</strong> - Reduz ativação</li>
                  <li>❌ <strong>Privação de sono</strong> - Fragmenta DNA</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Nrf2 e Envelhecimento: A Ciência da Longevidade
            </h2>

            <p className="text-lg mb-4">
              Um dos aspectos mais fascinantes da <strong>proteína Nrf2</strong> é sua relação direta com o processo de envelhecimento.
            </p>

            <p className="text-lg mb-6">
              Estudos longitudinais mostram que a função da Nrf2 declina aproximadamente <strong>1.2% ao ano</strong> após os 30 anos de idade.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-800/20 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-4">
                📉 Declínio da Nrf2 com a Idade:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Consequências do Declínio:</h4>
                  <ul className="space-y-2 text-orange-800 dark:text-orange-200">
                    <li>❌ <strong>Estresse oxidativo</strong> aumenta 300%</li>
                    <li>❌ <strong>Glutationa</strong> reduz 50%</li>
                    <li>❌ <strong>Inflamação crônica</strong> se instala</li>
                    <li>❌ <strong>DNA damage</strong> acumula</li>
                    <li>❌ <strong>Doenças degenerativas</strong> emergem</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Sinais Visíveis:</h4>
                  <ul className="space-y-2 text-orange-800 dark:text-orange-200">
                    <li>• Fadiga crônica persistente</li>
                    <li>• Pele ressecada e sem brilho</li>
                    <li>• Capacidade mental reduzida</li>
                    <li>• Recuperação lenta pós-exercício</li>
                    <li>• Maior susceptibilidade a doenças</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🔄 Reativação da Nrf2: Reversão do Envelhecimento Celular
            </h3>

            <p className="mb-6">
              A boa notícia é que a <strong>ativação da proteína Nrf2</strong> pode ser restaurada e até potencializada, independentemente da idade.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-800/20 p-8 rounded-lg mb-8 text-center">
              <h4 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">
                🎯 Protocolo Anti-Aging Nrf2 Avançado
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h5 className="font-bold text-primary mb-3">🥗 Nutrição Estratégica</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Sulforafano concentrado</li>
                    <li>• Curcumina lipossomal</li>
                    <li>• Trans-resveratrol puro</li>
                    <li>• Astaxantina natural</li>
                    <li>• Vegetais crucíferos diários</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-3">⚡ Hormese Controlada</h5>
                  <ul className="text-sm space-y-1">
                    <li>• HIIT 3x semana</li>
                    <li>• Jejum 16:8 diário</li>
                    <li>• Sauna 4x semana</li>
                    <li>• Banho frio 2x semana</li>
                    <li>• Respiração Wim Hof</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-3">🛡️ Proteção Ambiental</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Filtros de ar HEPA</li>
                    <li>• Água filtrada alcalina</li>
                    <li>• Orgânicos certificados</li>
                    <li>• Detox metais pesados</li>
                    <li>• Sono 7-9h profundo</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Genoxidil: Ativação Científica da Nrf2 de Próxima Geração
            </h2>

            <p className="text-lg mb-6">
              O <strong>Genoxidil</strong> representa o ápice da tecnologia de <strong>ativação da proteína Nrf2</strong>, desenvolvido com base em mais de 15 anos de pesquisa científica avançada.
            </p>

            <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-center text-primary mb-6">
                🧬 Fórmula Genoxidil: Sinergia Científica Perfeita
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-lg">🎯 Ativadores Nrf2 Premium:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong>Astaxantina Natural</strong> - 12mg (dose terapêutica)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong>Trans-Resveratrol Puro</strong> - 250mg concentrado</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong>Curcumina Nanotecnológica</strong> - Biodisponibilidade 185x</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong>Sulforafano Estabilizado</strong> - Liberação controlada</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-lg">⚡ Sistema de Suporte Avançado:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Complexo B Ativo</strong> - Cofatores enzimáticos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Magnésio Bisglicinato</strong> - Absorção superior</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Zinco Quelado</strong> - Suporte antioxidante</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Selênio Orgânico</strong> - Glutationa peroxidase</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-center text-green-700 dark:text-green-300 mb-4">
                📊 Resultados Clínicos Genoxidil:
              </h4>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">89%</div>
                  <div className="text-xs text-muted-foreground">Aumento Glutationa</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">76%</div>
                  <div className="text-xs text-muted-foreground">Redução Inflamação</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">92%</div>
                  <div className="text-xs text-muted-foreground">Melhora Energia</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">68%</div>
                  <div className="text-xs text-muted-foreground">Proteção Neural</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🔬 Diferencial Tecnológico do Genoxidil
            </h3>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Nanotecnologia Avançada</h4>
                <p className="text-sm text-muted-foreground">
                  Partículas ultra-pequenas garantem absorção celular máxima e biodisponibilidade superior
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Liberação Controlada</h4>
                <p className="text-sm text-muted-foreground">
                  Sistema de liberação gradual mantém níveis séricos estáveis por 12-16 horas
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Sinergia Molecular</h4>
                <p className="text-sm text-muted-foreground">
                  Combinação sinérgica potencializa cada componente, criando efeito multiplicativo
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Pureza Farmacêutica</h4>
                <p className="text-sm text-muted-foreground">
                  Ingredientes com 99%+ de pureza, livres de contaminantes e metais pesados
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Depoimentos Reais: Transformações Comprovadas
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    M.S.
                  </div>
                  <div>
                    <p className="text-green-800 dark:text-green-200 mb-2">
                      <strong>"Após 6 meses com Genoxidil, meus exames mostraram aumento de 85% na glutationa e redução de 60% nos marcadores inflamatórios. Sinto-me 10 anos mais jovem!"</strong>
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Maria Silva, 58 anos - Executiva, São Paulo
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    R.O.
                  </div>
                  <div>
                    <p className="text-blue-800 dark:text-blue-200 mb-2">
                      <strong>"Como médico, fiquei impressionado com os resultados. Minha energia triplicou, a qualidade do sono melhorou drasticamente e a capacidade de concentração está excepcional."</strong>
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Dr. Roberto Oliveira, 45 anos - Cardiologista, Rio de Janeiro
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    A.C.
                  </div>
                  <div>
                    <p className="text-purple-800 dark:text-purple-200 mb-2">
                      <strong>"Atleta há 20 anos, nunca experimentei uma recuperação tão rápida. Minha performance melhorou 25% e não sinto mais dores pós-treino."</strong>
                    </p>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      André Costa, 35 anos - Triatleta Profissional, Brasília
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Conclusão: O Futuro da Saúde Celular Começa Hoje
            </h2>

            <p className="text-lg mb-4">
              A <strong>proteína Nrf2</strong> representa uma revolução na compreensão da <strong>saúde celular</strong> e do <strong>envelhecimento saudável</strong>.
            </p>

            <p className="text-lg mb-4">
              Mais do que um simples antioxidante, ela é o maestro de uma sinfonia molecular que determina como nossas células respondem às agressões diárias.
            </p>

            <p className="text-lg mb-6">
              Investir na <strong>ativação da proteína Nrf2</strong> hoje é investir em:
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">🎯</span>
                    <span><strong>Prevenção</strong> de doenças degenerativas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">⚡</span>
                    <span><strong>Energia</strong> e vitalidade duradouras</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">🧠</span>
                    <span><strong>Proteção cognitiva</strong> e mental</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">❤️</span>
                    <span><strong>Saúde cardiovascular</strong> otimizada</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">🛡️</span>
                    <span><strong>Sistema imunológico</strong> fortalecido</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">🔄</span>
                    <span><strong>Detoxificação</strong> celular avançada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">✨</span>
                    <span><strong>Longevidade</strong> com qualidade de vida</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary font-bold">🌟</span>
                    <span><strong>Envelhecimento</strong> saudável e ativo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                🔬 A Ciência da Longevidade Está ao Seu Alcance
              </h3>
              <p className="text-xl font-semibold text-foreground mb-4">
                <strong>Não espere os sinais do envelhecimento aparecerem.</strong>
              </p>
              <p className="text-lg">
                Comece hoje a <strong>otimizar sua proteína Nrf2</strong> e construa um futuro de saúde, vitalidade e longevidade excepcional.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg mt-12 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Entre em Contato com a NBN Living Brasil</h3>
              <p className="text-lg mb-6">
                Quer saber mais sobre <strong>depoimentos científicos reais</strong>, <strong>protocolos personalizados</strong> ou <strong>dados científicos completos</strong> sobre a proteína Nrf2?
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">🌐 Site Oficial</h4>
                  <p className="text-sm"><strong>https://nbnliving.news/</strong></p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">📱 WhatsApp Direto</h4>
                  <p className="text-sm"><strong>(12) 98251-9116</strong></p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">📚 Biblioteca Científica</h4>
                  <p className="text-sm"><strong>Relatórios Científicos Genoxidil TEA</strong></p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                <strong>Especialistas em saúde celular • Protocolos personalizados • Acompanhamento científico</strong>
              </p>
            </div>

          </article>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProteinaNrf2;