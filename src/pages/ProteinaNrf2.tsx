import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ProteinaNrf2 = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "O que é a Proteína Nrf2 e por que ela é fundamental para sua saúde?",
    "description": "Descubra como a proteína Nrf2 funciona como guardião antioxidante celular, protegendo contra estresse oxidativo e promovendo longevidade celular.",
    "image": "/lovable-uploads/899d038e-e71e-4dd8-869e-f8ae2b9a45dd.png",
    "author": {
      "@type": "Organization",
      "name": "NBN Living"
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
    "dateModified": "2024-01-15"
  };

  return (
    <>
      <SEO
        title="O que é a Proteína Nrf2 e por que ela é fundamental para sua saúde?"
        description="Descubra como a proteína Nrf2 funciona como guardião antioxidante celular, protegendo contra estresse oxidativo e promovendo longevidade celular."
        canonical="https://genoxidil.blog/proteina-nrf2"
        image="/lovable-uploads/899d038e-e71e-4dd8-869e-f8ae2b9a45dd.png"
        keywords={[
          "proteína nrf2",
          "nrf2 função",
          "antioxidantes naturais",
          "estresse oxidativo",
          "longevidade celular",
          "genoxidil nrf2",
          "saúde celular",
          "radicais livres"
        ]}
        jsonLd={jsonLd}
      />

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              O que é a <span className="text-primary">Proteína Nrf2</span> e por que ela é fundamental para sua saúde?
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubra como a <strong>proteína Nrf2</strong> funciona como guardião antioxidante celular, protegendo contra estresse oxidativo e promovendo longevidade celular.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            
            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              O que é a Proteína Nrf2: O Guardião Molecular das Células
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              A <strong>proteína Nrf2 (Nuclear factor erythroid 2-related factor 2)</strong> é considerada um dos mais importantes sistemas de defesa celular do organismo humano.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Como um verdadeiro guardião molecular, ela coordena a resposta antioxidante das células, protegendo-nos contra o <strong>estresse oxidativo</strong> e promovendo a <strong>longevidade celular</strong>.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">A proteína Nrf2 atua como:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Sensor de estresse celular</strong> - detecta ameaças oxidativas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Regulador genético</strong> - ativa mais de 250 genes antioxidantes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Coordenador de defesas</strong> - organiza a resposta protetiva celular</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Promotor de longevidade</strong> - mantém células funcionais por mais tempo</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Como Funciona o Mecanismo Nrf2/Keap1: Inteligência Molecular
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Em condições normais, a <strong>proteína Nrf2</strong> permanece inativa no citoplasma, ligada à proteína Keap1.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Quando a Nrf2 Detecta Perigo:
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Radicais livres em excesso
                </h4>
                <p>
                  Moléculas instáveis que danificam estruturas celulares
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Toxinas ambientais
                </h4>
                <p>
                  Poluentes, pesticidas e substâncias químicas nocivas
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Estresse oxidativo
                </h4>
                <p>
                  Desequilíbrio entre produção de radicais livres e antioxidantes
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Inflamação celular
                </h4>
                <p>
                  Processos inflamatórios crônicos que danificam tecidos
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6 mt-8">
              A <strong>Nrf2</strong> se liberta e migra para o núcleo celular, onde ativa genes produtores de <strong>antioxidantes naturais</strong>.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Benefícios Científicos da Ativação da Nrf2
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🔬 Proteção Antioxidante Potencializada
            </h3>

            <p className="mb-6">A ativação da <strong>proteína Nrf2</strong> estimula a produção de:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Enzimas Antioxidantes</h4>
                <ul className="space-y-2">
                  <li><strong>Glutationa</strong> - o "mestre dos antioxidantes"</li>
                  <li><strong>Superóxido dismutase (SOD)</strong></li>
                  <li><strong>Catalase</strong></li>
                  <li><strong>Glutationa peroxidase</strong></li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Funções de Proteção</h4>
                <ul className="space-y-2">
                  <li>Neutraliza radicais livres</li>
                  <li>Repara danos celulares</li>
                  <li>Fortalece membranas celulares</li>
                  <li>Protege o DNA</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🧬 Detoxificação Celular Avançada
            </h3>

            <p className="mb-6">As enzimas ativadas pela <strong>Nrf2</strong> eliminam:</p>

            <ul className="space-y-2 mb-8">
              <li>• Metais pesados (mercúrio, chumbo, alumínio)</li>
              <li>• Poluentes ambientais</li>
              <li>• Toxinas metabólicas</li>
              <li>• Compostos carcinogênicos</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              ❤️ Proteção Cardiovascular
            </h3>

            <p className="mb-6">Estudos mostram que a <strong>proteína Nrf2</strong> ativa:</p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
              <ul className="space-y-2">
                <li>✓ Reduz inflamação vascular</li>
                <li>✓ Previne oxidação do LDL-colesterol</li>
                <li>✓ Melhora função endotelial</li>
                <li>✓ Protege contra aterosclerose</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🧠 Neuroproteção e Função Cognitiva
            </h3>

            <p className="mb-6">A <strong>Nrf2</strong> protege o cérebro contra:</p>

            <ul className="space-y-2 mb-8">
              <li>• Neurodegeneração</li>
              <li>• Declínio cognitivo</li>
              <li>• Doenças de Alzheimer e Parkinson</li>
              <li>• Danos neurológicos</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Como Ativar Naturalmente a Proteína Nrf2
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🌿 Compostos Bioativos Naturais
            </h3>

            <p className="mb-6">Os melhores ativadores naturais da <strong>proteína Nrf2</strong> incluem:</p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Sulforafano</h4>
                <p className="text-sm">Encontrado em brócolis e vegetais crucíferos</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Curcumina</h4>
                <p className="text-sm">Presente na cúrcuma, potente anti-inflamatório</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Trans-resveratrol</h4>
                <p className="text-sm">Uvas vermelhas, ativa vias de longevidade</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Astaxantina</h4>
                <p className="text-sm">Microalgas, o antioxidante mais potente da natureza</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-12">
              💪 Estratégias de Estilo de Vida
            </h3>

            <p className="mb-6">Para otimizar a função da <strong>proteína Nrf2</strong>:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Ativação Natural</h4>
                <ul className="space-y-2">
                  <li><strong>Exercício moderado regular</strong></li>
                  <li><strong>Jejum intermitente</strong></li>
                  <li><strong>Sono reparador (7-9h)</strong></li>
                  <li><strong>Gerenciamento do estresse</strong></li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Evitar Inibidores</h4>
                <ul className="space-y-2">
                  <li>Tabagismo</li>
                  <li>Álcool excessivo</li>
                  <li>Alimentos ultraprocessados</li>
                  <li>Estresse crônico</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Nrf2 e o Processo de Envelhecimento
            </h2>

            <p className="text-lg mb-6">
              Com o avanço da idade, a função da <strong>proteína Nrf2</strong> naturalmente declina, resultando em:
            </p>

            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg mb-8">
              <ul className="space-y-2">
                <li>❌ Aumento do <strong>estresse oxidativo</strong></li>
                <li>❌ Redução dos <strong>antioxidantes naturais</strong></li>
                <li>❌ Maior susceptibilidade a doenças</li>
                <li>❌ Aceleração do envelhecimento celular</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Estratégias Anti-Aging para Manter a Nrf2 Ativa
            </h3>

            <ol className="space-y-3 mb-8">
              <li><strong>1. Nutrição antioxidante rica</strong></li>
              <li><strong>2. Suplementação estratégica</strong></li>
              <li><strong>3. Redução de toxinas ambientais</strong></li>
              <li><strong>4. Atividade física regular</strong></li>
            </ol>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Genoxidil: Ativação Científica da Nrf2
            </h2>

            <p className="text-lg mb-6">
              O <strong>Genoxidil</strong> foi formulado com base na ciência mais avançada sobre a <strong>proteína Nrf2</strong>, combinando:
            </p>

            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Fórmula Avançada Genoxidil</h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p>✅ <strong>Astaxantina natural</strong> - potente ativador Nrf2</p>
                <p>✅ <strong>Trans-resveratrol</strong> - ativa vias de longevidade</p>
                <p>✅ <strong>Vitaminas do complexo B</strong> - cofatores essenciais</p>
                <p>✅ <strong>Magnésio</strong> - suporte enzimático</p>
                <p>✅ <strong>Curcumina nanotecnológica</strong> - máxima biodisponibilidade</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Conclusão: Investindo na Proteção Celular
            </h2>

            <p className="text-lg mb-6">
              A <strong>proteína Nrf2</strong> representa uma das descobertas mais importantes da medicina preventiva moderna.
            </p>

            <p className="mb-6">
              Compreender e otimizar sua função é fundamental para:
            </p>

            <ul className="space-y-2 mb-8">
              <li>• Prevenir doenças relacionadas à idade</li>
              <li>• Manter vitalidade e energia</li>
              <li>• Promover <strong>longevidade celular</strong></li>
              <li>• Alcançar um envelhecimento saudável</li>
            </ul>

            <p className="text-xl font-semibold text-center bg-gradient-to-r from-primary/20 to-primary/10 p-6 rounded-lg">
              <strong>Investir na ativação da proteína Nrf2 hoje é investir em um futuro mais saudável e longevo.</strong>
            </p>

            <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg mt-12 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Entre em Contato com a NBN Living Brasil</h3>
              <p className="text-lg mb-6">
                Quer saber mais sobre depoimentos reais, protocolos personalizados ou dados científicos completos?
              </p>
              <div className="space-y-2">
                <p><strong>Site NBN Living:</strong> https://nbnliving.news/</p>
                <p><strong>WhatsApp:</strong> (12) 98251-9116</p>
                <p><strong>Biblioteca científica:</strong> Relatórios Científicos Genoxidil TEA</p>
              </div>
            </div>

          </article>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProteinaNrf2;