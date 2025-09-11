import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EstresseOxidativo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Estresse Oxidativo: Como Proteger Suas Células dos Radicais Livres",
    "description": "Descubra como o estresse oxidativo acelera o envelhecimento e compromete sua saúde. Aprenda estratégias cientificamente comprovadas para combater radicais livres.",
    "image": "/lovable-uploads/95fc8720-74f6-47b0-8e51-8afd359da6cc.png",
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
    "datePublished": "2024-01-12",
    "dateModified": "2024-01-12"
  };

  return (
    <>
      <SEO
        title="Estresse Oxidativo: Como Proteger Suas Células dos Radicais Livres"
        description="Descubra como o estresse oxidativo acelera o envelhecimento e compromete sua saúde. Aprenda estratégias cientificamente comprovadas para combater radicais livres."
        canonical="https://genoxidil.blog/estresse-oxidativo"
        image="/lovable-uploads/95fc8720-74f6-47b0-8e51-8afd359da6cc.png"
        keywords={[
          "estresse oxidativo",
          "radicais livres",
          "antioxidantes naturais",
          "longevidade celular",
          "envelhecimento precoce",
          "genoxidil estresse oxidativo",
          "proteção celular",
          "saúde celular"
        ]}
        jsonLd={jsonLd}
      />

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-primary">Estresse Oxidativo:</span> Como Proteger Suas Células dos Radicais Livres
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubra como o <strong>estresse oxidativo</strong> acelera o envelhecimento e compromete sua saúde. Aprenda estratégias cientificamente comprovadas para combater radicais livres.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            
            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              O que é Estresse Oxidativo: Entendendo a Batalha Celular
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              O <strong>estresse oxidativo</strong> é considerado uma das principais causas do envelhecimento precoce e de diversas doenças crônicas.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Este processo silencioso ocorre em nível celular, mas seus efeitos são devastadores para nossa saúde e <strong>longevidade celular</strong>.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">O estresse oxidativo resulta de um desequilíbrio perigoso entre:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  <span><strong>Produção excessiva de radicais livres</strong> (espécies reativas de oxigênio - ROS)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  <span><strong>Capacidade limitada de neutralização</strong> pelos antioxidantes naturais</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  <span><strong>Acúmulo de danos celulares</strong> ao longo do tempo</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  <span><strong>Comprometimento das funções vitais</strong> das células</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              As espécies reativas de oxigênio são moléculas extremamente instáveis que possuem elétrons não pareados, tornando-as altamente reativas e destrutivas para as estruturas celulares.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Como os Radicais Livres São Formados no Organismo
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              ⚡ Fontes Internas de Radicais Livres
            </h3>

            <p className="mb-6">Nosso próprio metabolismo gera <strong>radicais livres</strong> através de:</p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Respiração celular mitocondrial
                </h4>
                <p>
                  A produção de ATP gera ROS como subproduto natural do metabolismo
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Metabolismo de gorduras
                </h4>
                <p>
                  O processo de beta-oxidação cria espécies reativas
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Resposta imunológica
                </h4>
                <p>
                  Células de defesa usam ROS para combater patógenos
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Exercício intenso
                </h4>
                <p>
                  Aumenta temporariamente a produção de radicais livres
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  🔹 Processos inflamatórios
                </h4>
                <p>
                  Inflamação crônica gera estresse oxidativo contínuo
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-12">
              🌍 Fatores Ambientais Prejudiciais
            </h3>

            <p className="mb-6">O ambiente moderno nos expõe constantemente a:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Fontes Ambientais</h4>
                <ul className="space-y-2">
                  <li><strong>Poluição atmosférica</strong> - partículas tóxicas</li>
                  <li><strong>Radiação ultravioleta</strong> - exposição solar excessiva</li>
                  <li><strong>Tabagismo</strong> - maior fonte de radicais livres</li>
                  <li><strong>Pesticidas e agrotóxicos</strong> - resíduos em alimentos</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Estilo de Vida</h4>
                <ul className="space-y-2">
                  <li><strong>Consumo de álcool</strong> - metabolismo gera acetaldeído</li>
                  <li><strong>Alimentos ultraprocessados</strong> - conservantes artificiais</li>
                  <li><strong>Estresse psicológico crônico</strong> - eleva cortisol</li>
                  <li><strong>Sedentarismo</strong> - reduz defesas antioxidantes</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Tipos Principais de Radicais Livres
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🔥 Espécies Reativas de Oxigênio (ROS)
            </h3>

            <p className="mb-6">Os <strong>radicais livres</strong> mais comuns incluem:</p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Superóxido (O2•-)</h4>
                <p className="text-sm">Formado principalmente nas mitocôndrias durante a produção de energia</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Peróxido de hidrogênio (H2O2)</h4>
                <p className="text-sm">Atravessa facilmente membranas celulares, causando danos internos</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Radical hidroxila (•OH)</h4>
                <p className="text-sm">O mais reativo e destrutivo de todos os radicais livres</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Oxigênio singlete (1O2)</h4>
                <p className="text-sm">Formado por exposição à luz solar intensa</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Como o Estresse Oxidativo Danifica Seu Corpo
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🧬 Danos ao Material Genético
            </h3>

            <p className="mb-6">Os <strong>radicais livres</strong> atacam diretamente o DNA, causando:</p>

            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg mb-8">
              <ul className="space-y-2">
                <li>• Quebras na dupla hélice do DNA</li>
                <li>• Modificações nas bases nitrogenadas</li>
                <li>• Mutações genéticas perigosas</li>
                <li>• Instabilidade cromossômica</li>
                <li>• Aumento do risco de câncer</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🧪 Peroxidação das Membranas Celulares
            </h3>

            <p className="mb-6">As membranas celulares, ricas em lipídios, sofrem:</p>

            <ul className="space-y-2 mb-8">
              <li>• Alteração da fluidez e permeabilidade</li>
              <li>• Perda da função de transporte</li>
              <li>• Formação de produtos tóxicos (malondialdeído)</li>
              <li>• Morte celular por ruptura da membrana</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              ⚙️ Oxidação e Disfunção Proteica
            </h3>

            <p className="mb-6">As proteínas oxidadas resultam em:</p>

            <ul className="space-y-2 mb-8">
              <li>• Perda total da função enzimática</li>
              <li>• Alteração da estrutura tridimensional</li>
              <li>• Formação de agregados proteicos tóxicos</li>
              <li>• Ativação de processos inflamatórios crônicos</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Doenças Causadas pelo Estresse Oxidativo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">❤️ Doenças Cardiovasculares</h3>
                <p className="mb-3">O <strong>estresse oxidativo</strong> promove:</p>
                <ul className="text-sm space-y-1">
                  <li>• Oxidação do LDL-colesterol</li>
                  <li>• Placas ateroscleróticas</li>
                  <li>• Danos ao endotélio vascular</li>
                  <li>• Inflamação e trombose</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">🎗️ Câncer</h3>
                <p className="mb-3">Danos oxidativos ao DNA podem:</p>
                <ul className="text-sm space-y-1">
                  <li>• Causar mutações oncogênicas</li>
                  <li>• Promover angiogênese tumoral</li>
                  <li>• Facilitar metástase</li>
                  <li>• Comprometer reparo celular</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">🧠 Doenças Neurodegenerativas</h3>
                <p className="mb-3">O cérebro é vulnerável ao estresse oxidativo:</p>
                <ul className="text-sm space-y-1">
                  <li>• Doença de Alzheimer</li>
                  <li>• Doença de Parkinson</li>
                  <li>• Esclerose lateral amiotrófica</li>
                  <li>• Declínio cognitivo</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">🍯 Diabetes</h3>
                <p className="mb-3">A hiperglicemia crônica:</p>
                <ul className="text-sm space-y-1">
                  <li>• Aumenta produção de ROS</li>
                  <li>• Cria ciclo vicioso de danos</li>
                  <li>• Agrava complicações diabéticas</li>
                  <li>• Acelera envelhecimento vascular</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Sistemas Naturais de Defesa Antioxidante
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🛡️ Antioxidantes Enzimáticos Endógenos
            </h3>

            <p className="mb-6">Nosso organismo produz poderosas enzimas antioxidantes:</p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Superóxido dismutase (SOD)</h4>
                <p className="text-sm">Converte superóxido em peróxido de hidrogênio</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Catalase</h4>
                <p className="text-sm">Decompõe peróxido de hidrogênio em água e oxigênio</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Glutationa peroxidase</h4>
                <p className="text-sm">Neutraliza peróxidos usando glutationa como cofator</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Peroxiredoxinas</h4>
                <p className="text-sm">Família de enzimas antioxidantes especializadas</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-12">
              🔋 Antioxidantes Não-Enzimáticos
            </h3>

            <p className="mb-6">Moléculas antioxidantes fundamentais:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Antioxidantes Internos</h4>
                <ul className="space-y-2">
                  <li><strong>Glutationa</strong> - o "mestre dos antioxidantes"</li>
                  <li><strong>Coenzima Q10</strong> - protetor mitocondrial</li>
                  <li><strong>Ácido úrico</strong> - antioxidante aquoso</li>
                  <li><strong>Melatonina</strong> - protetor noturno</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Antioxidantes Externos</h4>
                <ul className="space-y-2">
                  <li><strong>Vitamina E</strong> - protege membranas</li>
                  <li><strong>Vitamina C</strong> - antioxidante hidrossolúvel</li>
                  <li><strong>Carotenoides</strong> - proteção contra luz</li>
                  <li><strong>Flavonoides</strong> - compostos vegetais</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Estratégias Científicas Para Combater o Estresse Oxidativo
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🥗 Alimentação Rica em Antioxidantes Naturais
            </h3>

            <p className="mb-6">Priorize alimentos com alta capacidade antioxidante:</p>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Frutas vermelhas</h4>
                <p className="text-sm">Rica em antocianinas e ácido elágico - mirtilo, morango, framboesa</p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Vegetais crucíferos</h4>
                <p className="text-sm">Sulforafano e isotiocianatos - brócolis, couve-flor, repolho</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Chá verde</h4>
                <p className="text-sm">Catequinas e EGCG - poderosos antioxidantes</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Oleaginosas</h4>
                <p className="text-sm">Vitamina E e selênio - castanhas, nozes, amêndoas</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-12">
              💊 Suplementação Estratégica de Qualidade
            </h3>

            <p className="mb-6">Suplementos cientificamente validados:</p>

            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Suplementos Antioxidantes Avançados</h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p>✅ <strong>Astaxantina</strong> - o antioxidante mais potente da natureza</p>
                <p>✅ <strong>Trans-resveratrol</strong> - ativa proteínas de longevidade</p>
                <p>✅ <strong>Vitaminas do complexo B</strong> - cofatores para enzimas antioxidantes</p>
                <p>✅ <strong>Magnésio</strong> - essencial para mais de 300 reações enzimáticas</p>
                <p>✅ <strong>Curcumina</strong> - potente anti-inflamatório natural</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-12">
              🏃‍♂️ Estilo de Vida Antioxidante
            </h3>

            <p className="mb-6">Hábitos que fortalecem suas defesas naturais:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Práticas Benéficas</h4>
                <ul className="space-y-2">
                  <li><strong>Exercício regular moderado</strong></li>
                  <li><strong>Sono reparador (7-9h)</strong></li>
                  <li><strong>Gerenciamento do estresse</strong></li>
                  <li><strong>Hidratação adequada</strong></li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Redução de Exposição</h4>
                <ul className="space-y-2">
                  <li>Eliminar tabagismo</li>
                  <li>Moderar consumo de álcool</li>
                  <li>Usar protetor solar</li>
                  <li>Filtrar água potável</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Genoxidil: Proteção Avançada Contra Estresse Oxidativo
            </h2>

            <p className="text-lg mb-6">
              O <strong>Genoxidil</strong> foi desenvolvido especificamente para combater o <strong>estresse oxidativo</strong> através de:
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
              <ul className="space-y-2">
                <li>✓ Ativação da proteína Nrf2 - regulador mestre dos antioxidantes</li>
                <li>✓ Aumento da glutationa endógena em até 40%</li>
                <li>✓ Proteção mitocondrial contra danos oxidativos</li>
                <li>✓ Redução da inflamação celular crônica</li>
                <li>✓ Fortalecimento das defesas naturais do organismo</li>
              </ul>
            </div>

            <p className="text-lg mb-6">
              <em>Estudo da JAMA Pediatrics comprovou: suplementação adequada pode elevar os níveis de glutationa em até 40%, proporcionando proteção significativa contra o estresse oxidativo.</em>
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Conclusão: Proteja Suas Células Hoje
            </h2>

            <p className="text-lg mb-6">
              O <strong>estresse oxidativo</strong> é um processo natural, mas quando descontrolado, acelera o envelhecimento e aumenta o risco de doenças crônicas.
            </p>

            <p className="mb-6">
              A boa notícia é que temos ferramentas científicas poderosas para combatê-lo:
            </p>

            <ul className="space-y-2 mb-8">
              <li>• Alimentação rica em <strong>antioxidantes naturais</strong></li>
              <li>• Suplementação estratégica de qualidade</li>
              <li>• Estilo de vida que fortalece as defesas celulares</li>
              <li>• Redução da exposição a toxinas ambientais</li>
            </ul>

            <p className="text-xl font-semibold text-center bg-gradient-to-r from-primary/20 to-primary/10 p-6 rounded-lg">
              <strong>Investir na proteção contra o estresse oxidativo hoje é investir em saúde e longevidade para toda a vida.</strong>
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

export default EstresseOxidativo;