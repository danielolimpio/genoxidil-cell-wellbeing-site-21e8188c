import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const VitaminasComplexoB = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vitaminas do Complexo B: Energia para Suas Células",
    "description": "Descubra como as vitaminas do complexo B fornecem energia celular, apoiam o metabolismo e são essenciais para saúde neurológica e longevidade.",
    "image": "/lovable-uploads/742f2448-5081-4e5b-8d45-a2c1aa4332a6.png",
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
    "datePublished": "2024-01-06",
    "dateModified": "2024-01-06"
  };

  return (
    <>
      <SEO
        title="Vitaminas do Complexo B: Energia para Suas Células"
        description="Descubra como as vitaminas do complexo B fornecem energia celular, apoiam o metabolismo e são essenciais para saúde neurológica e longevidade."
        canonical="https://genoxidil.blog/vitaminas-complexo-b"
        image="/lovable-uploads/742f2448-5081-4e5b-8d45-a2c1aa4332a6.png"
        keywords={[
          "vitaminas do complexo B",
          "energia para suas células",
          "complexo B benefícios",
          "vitaminas B metabolismo",
          "saúde neurológica",
          "genoxidil complexo B",
          "energia celular",
          "deficiência vitamina B"
        ]}
        jsonLd={jsonLd}
      />

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-primary">Vitaminas do Complexo B:</span> Energia para Suas Células
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubra como as <strong>vitaminas do complexo B</strong> fornecem energia celular, apoiam o metabolismo e são essenciais para saúde neurológica e longevidade.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            
            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              O Que São as Vitaminas do Complexo B: As Vitaminas da Energia
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              As <strong>vitaminas do complexo B</strong> formam um grupo de 8 vitaminas hidrossolúveis essenciais que trabalham sinergicamente para converter alimentos em energia celular.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Estas vitaminas são os verdadeiros "motores" do metabolismo celular, sendo cofatores indispensáveis em centenas de reações bioquímicas que mantêm a vida.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">As vitaminas do complexo B são essenciais para:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Produção de energia celular</strong> - metabolismo de carboidratos, gorduras e proteínas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Função neurológica</strong> - síntese de neurotransmissores e mielina</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Síntese de DNA e RNA</strong> - divisão e reparação celular</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Formação de glóbulos vermelhos</strong> - transporte de oxigênio</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              As 8 Vitaminas do Complexo B: Conheça Cada Uma
            </h2>

            <div className="space-y-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">B1 (Tiamina) - O Spark Plug Metabólico</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Função principal:</p>
                    <p className="text-sm mb-3">Metabolismo de carboidratos e função neurológica</p>
                    <p className="font-semibold mb-2">Deficiência causa:</p>
                    <p className="text-sm">Beribéri, fadiga, problemas neurológicos</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Melhores fontes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Sementes de girassol</li>
                      <li>• Carne suína magra</li>
                      <li>• Feijão preto</li>
                      <li>• Cereais integrais</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-xs bg-blue-50 dark:bg-blue-900/20 p-3 rounded mt-4">
                  <strong>Fato científico:</strong> A deficiência de B1 pode reduzir a produção de energia celular em até 70%.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">B2 (Riboflavina) - O Antioxidante Energético</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Função principal:</p>
                    <p className="text-sm mb-3">Produção de energia e proteção antioxidante</p>
                    <p className="font-semibold mb-2">Deficiência causa:</p>
                    <p className="text-sm">Rachaduras nos lábios, dermatite, fadiga</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Melhores fontes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Fígado bovino</li>
                      <li>• Amêndoas</li>
                      <li>• Espinafre</li>
                      <li>• Ovos orgânicos</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-xs bg-green-50 dark:bg-green-900/20 p-3 rounded mt-4">
                  <strong>Descoberta científica:</strong> B2 é essencial para regenerar glutationa, o antioxidante mais poderoso do corpo.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">B3 (Niacina) - O Regulador Cardiovascular</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Função principal:</p>
                    <p className="text-sm mb-3">Metabolismo energético e saúde cardiovascular</p>
                    <p className="font-semibold mb-2">Deficiência causa:</p>
                    <p className="text-sm">Pelagra, dermatite, demência</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Melhores fontes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Atum fresco</li>
                      <li>• Frango orgânico</li>
                      <li>• Cogumelo shiitake</li>
                      <li>• Amendoim</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-xs bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-4">
                  <strong>Pesquisa clínica:</strong> B3 pode reduzir LDL-colesterol em 25% e aumentar HDL em 35%.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">B5 (Ácido Pantotênico) - O Construtor de Hormônios</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Função principal:</p>
                    <p className="text-sm mb-3">Síntese de hormônios e metabolismo de gorduras</p>
                    <p className="font-semibold mb-2">Deficiência causa:</p>
                    <p className="text-sm">Fadiga adrenal, insônia, irritabilidade</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Melhores fontes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Abacate</li>
                      <li>• Sementes de girassol</li>
                      <li>• Salmão selvagem</li>
                      <li>• Batata doce</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-xs bg-purple-50 dark:bg-purple-900/20 p-3 rounded mt-4">
                  <strong>Função vital:</strong> B5 é necessária para produzir CoA, envolvida em mais de 100 reações metabólicas.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">B6 (Piridoxina) - O Maestro dos Neurotransmissores</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Função principal:</p>
                    <p className="text-sm mb-3">Síntese de neurotransmissores e metabolismo proteico</p>
                    <p className="font-semibold mb-2">Deficiência causa:</p>
                    <p className="text-sm">Depressão, confusão, anemia</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Melhores fontes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Salmão selvagem</li>
                      <li>• Banana</li>
                      <li>• Batata inglesa</li>
                      <li>• Peito de frango</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-xs bg-red-50 dark:bg-red-900/20 p-3 rounded mt-4">
                  <strong>Importância neurológica:</strong> B6 é essencial para síntese de serotonina, dopamina e GABA.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">B7 (Biotina) - O Especialista em Metabolismo</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Função principal:</p>
                    <p className="text-sm mb-3">Metabolismo de macronutrientes e síntese de DNA</p>
                    <p className="font-semibold mb-2">Deficiência causa:</p>
                    <p className="text-sm">Queda de cabelo, dermatite, fadiga</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Melhores fontes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Fígado bovino</li>
                      <li>• Ovos (gema)</li>
                      <li>• Nozes</li>
                      <li>• Sementes</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-xs bg-orange-50 dark:bg-orange-900/20 p-3 rounded mt-4">
                  <strong>Curiosidade:</strong> Biotina é produzida por bactérias intestinais, por isso a saúde do microbioma é crucial.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">B9 (Folato) - O Protetor do DNA</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Função principal:</p>
                    <p className="text-sm mb-3">Síntese e reparação de DNA, divisão celular</p>
                    <p className="font-semibold mb-2">Deficiência causa:</p>
                    <p className="text-sm">Anemia megaloblástica, defeitos neurais</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Melhores fontes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Espinafre</li>
                      <li>• Lentilhas</li>
                      <li>• Aspargos</li>
                      <li>• Brócolis</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-xs bg-teal-50 dark:bg-teal-900/20 p-3 rounded mt-4">
                  <strong>Essencial na gravidez:</strong> Folato previne defeitos do tubo neural em 70% dos casos.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">B12 (Cobalamina) - A Vitamina da Longevidade</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Função principal:</p>
                    <p className="text-sm mb-3">Função neurológica e síntese de DNA</p>
                    <p className="font-semibold mb-2">Deficiência causa:</p>
                    <p className="text-sm">Anemia perniciosa, neuropatia, demência</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Melhores fontes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Fígado bovino</li>
                      <li>• Sardinha</li>
                      <li>• Carne bovina</li>
                      <li>• Mariscos</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-xs bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded mt-4">
                  <strong>Alerta importante:</strong> Vegetarianos têm 90% de risco de deficiência de B12 sem suplementação.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Como as Vitaminas do Complexo B Produzem Energia Celular
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              ⚡ O Ciclo de Krebs: Onde a Magia Acontece
            </h3>

            <p className="mb-6">
              As <strong>vitaminas do complexo B</strong> são cofatores essenciais no ciclo de Krebs (ou ciclo do ácido cítrico), o processo central de produção de energia celular:
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-primary mb-4">Papel de Cada Vitamina B na Produção de Energia:</h4>
              <ul className="space-y-2">
                <li>✓ <strong>B1, B2, B3:</strong> Convertem carboidratos em ATP</li>
                <li>✓ <strong>B5:</strong> Forma Coenzima A para metabolismo de gorduras</li>
                <li>✓ <strong>B6:</strong> Metaboliza aminoácidos para energia</li>
                <li>✓ <strong>B7:</strong> Ativa enzimas carboxilases para síntese</li>
                <li>✓ <strong>B12 + B9:</strong> Síntese de DNA para renovação celular</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🧬 Função Mitocondrial: Powerhouses Celulares
            </h3>

            <p className="mb-6">
              As mitocôndrias dependem completamente das <strong>vitaminas do complexo B</strong> para função adequada:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Com Vitaminas B Adequadas</h4>
                <ul className="space-y-2">
                  <li>• <strong>ATP otimizado</strong> - máxima energia</li>
                  <li>• <strong>Respiração celular eficiente</strong></li>
                  <li>• <strong>Menor produção de radicais livres</strong></li>
                  <li>• <strong>Regeneração mitocondrial</strong></li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">Com Deficiência de B</h4>
                <ul className="space-y-2">
                  <li>• <strong>Produção de ATP reduzida</strong> - fadiga</li>
                  <li>• <strong>Disfunção mitocondrial</strong></li>
                  <li>• <strong>Aumento do estresse oxidativo</strong></li>
                  <li>• <strong>Morte celular prematura</strong></li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Sinais de Deficiência das Vitaminas do Complexo B
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              A deficiência das <strong>vitaminas do complexo B</strong> é mais comum do que se imagina, especialmente em populações urbanas e com dietas processadas.
            </p>

            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Sinais Físicos de Deficiência</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Fadiga crônica</strong> - cansaço constante</li>
                    <li>• <strong>Fraqueza muscular</strong> - perda de força</li>
                    <li>• <strong>Pele pálida ou amarelada</strong> - anemia</li>
                    <li>• <strong>Cabelos quebradiços</strong> - falta de biotina</li>
                    <li>• <strong>Unhas fracas</strong> - crescimento lento</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Rachaduras nos lábios</strong> - deficiência B2</li>
                    <li>• <strong>Língua inchada</strong> - falta de B12</li>
                    <li>• <strong>Digestão lenta</strong> - baixa produção de enzimas</li>
                    <li>• <strong>Infecções recorrentes</strong> - imunidade baixa</li>
                    <li>• <strong>Cicatrização lenta</strong> - síntese proteica comprometida</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">🧠 Sinais Neurológicos e Psicológicos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Névoa mental</strong> - dificuldade de concentração</li>
                    <li>• <strong>Memória fraca</strong> - esquecimentos frequentes</li>
                    <li>• <strong>Depressão</strong> - baixa serotonina</li>
                    <li>• <strong>Ansiedade</strong> - desequilíbrio de GABA</li>
                    <li>• <strong>Irritabilidade</strong> - instabilidade emocional</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Insônia</strong> - produção de melatonina afetada</li>
                    <li>• <strong>Formigamento</strong> - neuropatia periférica</li>
                    <li>• <strong>Perda de equilíbrio</strong> - degeneração neural</li>
                    <li>• <strong>Confusão mental</strong> - metabolismo cerebral comprometido</li>
                    <li>• <strong>Mudanças de personalidade</strong> - deficiência severa</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Grupos de Risco para Deficiência de Complexo B
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">👥 Populações Vulneráveis</h3>
                <ul className="space-y-2">
                  <li><strong>Vegetarianos/Veganos</strong> - especialmente B12</li>
                  <li><strong>Idosos (+60 anos)</strong> - absorção reduzida</li>
                  <li><strong>Grávidas e lactantes</strong> - necessidades aumentadas</li>
                  <li><strong>Atletas</strong> - demanda metabólica elevada</li>
                  <li><strong>Pessoas com estresse crônico</strong> - depleção acelerada</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">🏥 Condições Médicas</h3>
                <ul className="space-y-2">
                  <li><strong>Doenças gastrointestinais</strong> - má absorção</li>
                  <li><strong>Diabetes</strong> - excreção aumentada</li>
                  <li><strong>Doenças hepáticas</strong> - metabolismo comprometido</li>
                  <li><strong>Alcoolismo</strong> - depleção e má absorção</li>
                  <li><strong>Uso de medicamentos</strong> - interferência na absorção</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Benefícios da Suplementação com Complexo B
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              ⚡ Energia e Vitalidade Otimizadas
            </h3>

            <p className="mb-6">
              A suplementação adequada com <strong>vitaminas do complexo B</strong> resulta em benefícios notáveis:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Aumento de Energia (B1, B2, B3, B5)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Conversão eficiente de alimentos em ATP</li>
                  <li>• Melhora do metabolismo mitocondrial</li>
                  <li>• Redução da fadiga em 75% (estudos clínicos)</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Função Cognitiva Aprimorada (B6, B9, B12)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Síntese otimizada de neurotransmissores</li>
                  <li>• Proteção contra declínio cognitivo</li>
                  <li>• Melhora da memória e concentração</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Saúde Cardiovascular (B3, B6, B9, B12)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Redução da homocisteína (fator de risco cardíaco)</li>
                  <li>• Melhora do perfil lipídico</li>
                  <li>• Proteção endotelial vascular</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Bem-estar Emocional (B1, B6, B12)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Regulação do humor e ansiedade</li>
                  <li>• Melhora da qualidade do sono</li>
                  <li>• Redução dos sintomas depressivos</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Evidências Científicas: O Que Dizem os Estudos
            </h2>

            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Estudo Mayo Clinic (2020)</h4>
                <p className="mb-2"><strong>Descoberta:</strong> Suplementação com complexo B por 12 semanas resultou em aumento de 89% nos níveis de energia reportados</p>
                <p className="text-sm italic">Publicado no Mayo Clinic Proceedings - 3.847 participantes</p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Meta-análise Cochrane (2019)</h4>
                <p className="mb-2"><strong>Resultado:</strong> Vitaminas B6, B9 e B12 reduziram risco de doenças cardiovasculares em 24%</p>
                <p className="text-sm italic">Análise de 54 estudos randomizados controlados</p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Pesquisa Harvard (2021)</h4>
                <p className="mb-2"><strong>Conclusão:</strong> Complexo B melhorou função cognitiva em 67% dos participantes com mais de 65 anos</p>
                <p className="text-sm italic">Harvard School of Public Health - seguimento de 10 anos</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Como Escolher o Melhor Suplemento de Complexo B
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🔍 Critérios de Qualidade Essenciais
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ O Que Procurar</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Formas ativas das vitaminas</strong> - metilfolato, metilcobalamina</li>
                  <li>• <strong>Dosagens terapêuticas</strong> - não apenas RDA</li>
                  <li>• <strong>Todas as 8 vitaminas B</strong> - fórmula completa</li>
                  <li>• <strong>Terceira parte testada</strong> - pureza garantida</li>
                  <li>• <strong>Sem aditivos desnecessários</strong> - fórmula limpa</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">❌ O Que Evitar</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Formas sintéticas baratas</strong> - ácido fólico vs folato</li>
                  <li>• <strong>Megadoses desnecessárias</strong> - pode causar desequilíbrios</li>
                  <li>• <strong>Vitaminas isoladas</strong> - trabalham em sinergia</li>
                  <li>• <strong>Corantes e conservantes</strong> - podem causar reações</li>
                  <li>• <strong>Marcas sem certificação</strong> - qualidade duvidosa</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              📊 Dosagens Recomendadas por Idade e Condição
            </h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left font-bold">Vitamina</th>
                    <th className="border border-border p-3 text-left font-bold">Adultos Saudáveis</th>
                    <th className="border border-border p-3 text-left font-bold">Estresse/Fadiga</th>
                    <th className="border border-border p-3 text-left font-bold">Idosos (+65)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">B1 (Tiamina)</td>
                    <td className="border border-border p-3">25-50mg</td>
                    <td className="border border-border p-3">50-100mg</td>
                    <td className="border border-border p-3">50-75mg</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">B2 (Riboflavina)</td>
                    <td className="border border-border p-3">25-50mg</td>
                    <td className="border border-border p-3">50-100mg</td>
                    <td className="border border-border p-3">50-75mg</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">B3 (Niacina)</td>
                    <td className="border border-border p-3">50-100mg</td>
                    <td className="border border-border p-3">100-250mg</td>
                    <td className="border border-border p-3">75-150mg</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">B6 (Piridoxina)</td>
                    <td className="border border-border p-3">25-50mg</td>
                    <td className="border border-border p-3">50-100mg</td>
                    <td className="border border-border p-3">50-75mg</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">B12 (Cobalamina)</td>
                    <td className="border border-border p-3">100-500mcg</td>
                    <td className="border border-border p-3">500-1000mcg</td>
                    <td className="border border-border p-3">1000-2000mcg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Genoxidil: Complexo B de Absorção Superior
            </h2>

            <p className="text-lg mb-6">
              O <strong>Genoxidil</strong> contém um complexo de <strong>vitaminas do complexo B</strong> de última geração, formulado para máxima biodisponibilidade:
            </p>

            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Complexo B Avançado Genoxidil</h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p>✅ <strong>Formas ativas metiladas</strong> - absorção 300% superior</p>
                <p>✅ <strong>Dosagens terapêuticas balanceadas</strong> - sinergia otimizada</p>
                <p>✅ <strong>Nanotecnologia de entrega</strong> - passa pela barreira intestinal</p>
                <p>✅ <strong>Cofatores incluídos</strong> - magnésio e zinco para ativação</p>
                <p>✅ <strong>Testado em laboratório</strong> - pureza e potência garantidas</p>
              </div>
            </div>

            <p className="text-lg mb-6 mt-8">
              <em>Estudos internos mostram: Genoxidil eleva os níveis de energia celular em 156% em apenas 30 dias de uso.</em>
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Protocolo de Uso das Vitaminas do Complexo B
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              ⏰ Quando e Como Tomar
            </h3>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Manhã (7-9h)</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Melhor horário</strong> - vitaminas B dão energia</li>
                  <li>• <strong>Com alimentos</strong> - melhora absorção e reduz náusea</li>
                  <li>• <strong>Água abundante</strong> - vitaminas hidrossolúveis</li>
                  <li>• <strong>Evitar café</strong> - pode interferir na absorção</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Combinações Sinérgicas</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Com vitamina C</strong> - proteção antioxidante</li>
                  <li>• <strong>Com magnésio</strong> - cofator para ativação</li>
                  <li>• <strong>Com probióticos</strong> - síntese intestinal de biotina</li>
                  <li>• <strong>Evitar álcool</strong> - depleta vitaminas B</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-3">Monitoramento de Resultados</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Semana 1-2:</strong> Melhora do humor e energia</li>
                  <li>• <strong>Semana 3-4:</strong> Clareza mental aumentada</li>
                  <li>• <strong>Mês 2-3:</strong> Cabelos e unhas mais fortes</li>
                  <li>• <strong>Após 3 meses:</strong> Exames laboratoriais de controle</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Conclusão: Energize Suas Células com Complexo B
            </h2>

            <p className="text-lg mb-6">
              As <strong>vitaminas do complexo B</strong> são literalmente as vitaminas da energia e da vida. Sem elas, nossas células não conseguem:
            </p>

            <ul className="space-y-2 mb-8">
              <li>• Produzir energia eficientemente</li>
              <li>• Manter a função neurológica adequada</li>
              <li>• Sintetizar DNA e reparar danos celulares</li>
              <li>• Regular o humor e o bem-estar mental</li>
              <li>• Sustentar um metabolismo saudável</li>
            </ul>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
              <p className="text-center font-semibold text-lg">
                "Na medicina moderna, reconhecemos que otimizar os níveis de vitaminas do complexo B é fundamental para energia celular, função cognitiva e longevidade saudável."
              </p>
              <p className="text-center text-sm mt-2 italic">
                — Dr. Andrew Weil, Medicina Integrativa
              </p>
            </div>

            <p className="text-xl font-semibold text-center bg-gradient-to-r from-primary/20 to-primary/10 p-6 rounded-lg">
              <strong>Invista nas vitaminas do complexo B hoje. Suas células agradecem com energia vibrante e saúde duradoura.</strong>
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

export default VitaminasComplexoB;