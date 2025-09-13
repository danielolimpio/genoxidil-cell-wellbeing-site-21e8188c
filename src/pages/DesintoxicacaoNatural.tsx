import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const DesintoxicacaoNatural = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Desintoxicação Natural: Como Seu Corpo se Limpa",
    "description": "Descubra como funciona a desintoxicação natural do organismo e estratégias científicas para otimizar a eliminação de toxinas e melhorar sua saúde.",
    "image": "/lovable-uploads/6b195fff-dab1-45f0-bf34-232664f3ebf2.png",
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
    "datePublished": "2024-01-04",
    "dateModified": "2024-01-04"
  };

  return (
    <>
      <SEO
        title="Desintoxicação Natural: Como Seu Corpo se Limpa"
        description="Descubra como funciona a desintoxicação natural do organismo e estratégias científicas para otimizar a eliminação de toxinas e melhorar sua saúde."
        canonical="https://genoxidil.blog/desintoxicacao-natural"
        image="/lovable-uploads/6b195fff-dab1-45f0-bf34-232664f3ebf2.png"
        keywords={[
          "desintoxicação natural",
          "como seu corpo se limpa",
          "detox natural",
          "eliminação de toxinas",
          "fígado desintoxicação",
          "genoxidil detox",
          "limpeza celular",
          "purificação organismo"
        ]}
        jsonLd={jsonLd}
      />

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Desintoxicação Natural: Como Seu <span className="text-primary">Corpo se Limpa</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubra como funciona a <strong>desintoxicação natural do organismo</strong> e estratégias científicas para otimizar a eliminação de toxinas e melhorar sua saúde.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Órgãos de Detox</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Toxinas Eliminadas</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">+80%</div>
                <div className="text-sm text-muted-foreground">Energia Vital</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Limpeza Contínua</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            
            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              O Que É Desintoxicação Natural: O Sistema de Limpeza do Corpo
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              A <strong>desintoxicação natural</strong> é um processo contínuo e sofisticado pelo qual nosso organismo identifica, neutraliza e elimina substâncias tóxicas.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Este sistema de limpeza funciona 24 horas por dia, 7 dias por semana, protegendo nossas células contra o acúmulo de toxinas que poderiam comprometer nossa saúde e longevidade.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">O sistema de desintoxicação natural envolve:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Identificação de toxinas</strong> - reconhecimento molecular de substâncias nocivas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Neutralização enzimática</strong> - transformação em compostos menos tóxicos</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Conjugação e eliminação</strong> - preparo para excreção segura</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Excreção multi-órgãos</strong> - eliminação através de múltiplas vias</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Os 5 Órgãos Principais da Desintoxicação Natural
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 1. Fígado: A Central de Processamento
                </h3>
                <p className="mb-4">
                  O <strong>fígado</strong> é o principal órgão de desintoxicação, processando mais de 500 funções metabólicas diferentes.
                </p>
                <p className="mb-4">
                  Ele realiza a desintoxicação em duas fases principais:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                    <h4 className="font-bold mb-2">Fase I - Oxidação</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Enzimas CYP450 ativam toxinas</li>
                      <li>• Adição de oxigênio às moléculas</li>
                      <li>• Preparação para Fase II</li>
                      <li>• Gera radicais livres como subproduto</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                    <h4 className="font-bold mb-2">Fase II - Conjugação</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Ligação com moléculas hidrossolúveis</li>
                      <li>• Glutationa, sulfato, glicina</li>
                      <li>• Neutralização completa</li>
                      <li>• Preparação para excreção</li>
                    </ul>
                  </div>
                </div>
                <p className="italic text-sm bg-blue-50 dark:bg-blue-900/20 p-3 rounded mt-4">
                  <strong>Fato impressionante:</strong> O fígado processa 1,5 litros de sangue por minuto, filtrando constantemente toxinas.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 2. Rins: Os Filtros Sanguíneos
                </h3>
                <p className="mb-4">
                  Os <strong>rins</strong> filtram aproximadamente 180 litros de sangue diariamente, removendo resíduos metabólicos e toxinas.
                </p>
                <p className="mb-4">
                  Principais funções de desintoxicação renal:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Filtração glomerular</strong> - separação de toxinas do sangue</li>
                  <li>• <strong>Reabsorção seletiva</strong> - preservação de nutrientes essenciais</li>
                  <li>• <strong>Secreção tubular</strong> - eliminação ativa de toxinas</li>
                  <li>• <strong>Concentração urinária</strong> - conservação de água</li>
                </ul>
                <p className="italic text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <strong>Estudo nefrológico:</strong> Rins saudáveis eliminam 95% das toxinas solúveis em água em uma única passagem.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 3. Pulmões: Eliminação Gasosa
                </h3>
                <p className="mb-4">
                  Os <strong>pulmões</strong> eliminam toxinas voláteis e gases de resíduos metabólicos através da respiração.
                </p>
                <p className="mb-4">
                  Processos de desintoxicação pulmonar:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Troca gasosa alveolar</strong> - eliminação de CO2 e compostos voláteis</li>
                  <li>• <strong>Clearance mucociliar</strong> - remoção de partículas inaladas</li>
                  <li>• <strong>Macrófagos alveolares</strong> - fagocitose de toxinas</li>
                  <li>• <strong>Surfactante pulmonar</strong> - proteção contra oxidantes</li>
                </ul>
                <p className="italic text-sm bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                  <strong>Respiração profunda:</strong> Exercícios respiratórios podem aumentar a eliminação de toxinas em até 45%.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 4. Pele: A Barreira Protetora
                </h3>
                <p className="mb-4">
                  A <strong>pele</strong> é o maior órgão do corpo e uma importante via de eliminação de toxinas através do suor.
                </p>
                <p className="mb-4">
                  Mecanismos de desintoxicação cutânea:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Sudorese ativa</strong> - eliminação de metais pesados e ureia</li>
                  <li>• <strong>Descamação natural</strong> - renovação celular constante</li>
                  <li>• <strong>Sebo protetor</strong> - barreira contra toxinas externas</li>
                  <li>• <strong>Microbioma cutâneo</strong> - metabolização de compostos tóxicos</li>
                </ul>
                <p className="italic text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded">
                  <strong>Sauna finlandesa:</strong> Estudos mostram que saunas regulares eliminam até 6x mais metais pesados que exercício normal.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 5. Sistema Linfático: A Rede de Drenagem
                </h3>
                <p className="mb-4">
                  O <strong>sistema linfático</strong> drena toxinas dos tecidos e transporta células imunológicas para combater substâncias nocivas.
                </p>
                <p className="mb-4">
                  Componentes da desintoxicação linfática:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Capilares linfáticos</strong> - coleta de toxinas intersticiais</li>
                  <li>• <strong>Linfonodos</strong> - filtração e processamento imunológico</li>
                  <li>• <strong>Ducto torácico</strong> - drenagem para circulação sanguínea</li>
                  <li>• <strong>Baço</strong> - reciclagem de células sanguíneas antigas</li>
                </ul>
                <p className="italic text-sm bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                  <strong>Massagem linfática:</strong> Técnicas específicas podem aumentar a drenagem linfática em até 200%.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Principais Toxinas que Enfrentamos Diariamente
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Vivemos em um mundo onde a exposição a toxinas é inevitável. Conhecer essas substâncias nos ajuda a proteger melhor nosso sistema de <strong>desintoxicação natural</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-red-700 dark:text-red-300 mb-3">🏭 Toxinas Ambientais</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Metais pesados</strong> - chumbo, mercúrio, alumínio</li>
                  <li>• <strong>Poluição atmosférica</strong> - PM2.5, óxidos de nitrogênio</li>
                  <li>• <strong>Pesticidas</strong> - glifosato, organoclorados</li>
                  <li>• <strong>Químicos industriais</strong> - solventes, PCBs</li>
                  <li>• <strong>Radiação</strong> - EMF, UV excessivo</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">🍔 Toxinas Alimentares</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Aditivos químicos</strong> - conservantes, corantes</li>
                  <li>• <strong>Gorduras trans</strong> - óleos hidrogenados</li>
                  <li>• <strong>Açúcares refinados</strong> - xarope de milho</li>
                  <li>• <strong>Micotoxinas</strong> - fungos em grãos</li>
                  <li>• <strong>Residuos farmacêuticos</strong> - antibióticos, hormônios</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-3">🧴 Toxinas Domésticas</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Produtos de limpeza</strong> - amônia, cloro</li>
                  <li>• <strong>Cosméticos</strong> - parabenos, ftalatos</li>
                  <li>• <strong>Plásticos</strong> - BPA, PVC</li>
                  <li>• <strong>Tintas e vernizes</strong> - VOCs</li>
                  <li>• <strong>Tecidos sintéticos</strong> - retardantes de chama</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3">🦠 Toxinas Metabólicas</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Radicais livres</strong> - subprodutos do metabolismo</li>
                  <li>• <strong>Produtos de glicação</strong> - AGEs</li>
                  <li>• <strong>Hormônios em excesso</strong> - cortisol, estrogênio</li>
                  <li>• <strong>Toxinas bacterianas</strong> - endotoxinas</li>
                  <li>• <strong>Resíduos proteicos</strong> - ureia, creatinina</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Sinais de Sobrecarga Tóxica no Organismo
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Quando o sistema de <strong>desintoxicação natural</strong> está sobrecarregado, o corpo envia sinais claros de alerta.
            </p>

            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Sinais Físicos de Sobrecarga</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Fadiga crônica</strong> - cansaço que não melhora com descanso</li>
                    <li>• <strong>Dores de cabeça frequentes</strong> - tensão e enxaquecas</li>
                    <li>• <strong>Problemas digestivos</strong> - gases, constipação, refluxo</li>
                    <li>• <strong>Pele com problemas</strong> - acne, eczema, psoríase</li>
                    <li>• <strong>Infecções recorrentes</strong> - imunidade comprometida</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Ganho de peso inexplicável</strong> - retenção de toxinas</li>
                    <li>• <strong>Odor corporal intenso</strong> - eliminação inadequada</li>
                    <li>• <strong>Alergias aumentadas</strong> - hipersensibilidade</li>
                    <li>• <strong>Dores articulares</strong> - inflamação tóxica</li>
                    <li>• <strong>Insônia</strong> - desequilíbrio neurotóxico</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">🧠 Sinais Cognitivos e Emocionais</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Névoa mental</strong> - dificuldade de concentração</li>
                    <li>• <strong>Memória falha</strong> - esquecimentos frequentes</li>
                    <li>• <strong>Ansiedade aumentada</strong> - sistema nervoso irritado</li>
                    <li>• <strong>Depressão</strong> - neurotransmissores afetados</li>
                    <li>• <strong>Irritabilidade</strong> - toxinas neurológicas</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Mudanças de humor</strong> - instabilidade emocional</li>
                    <li>• <strong>Falta de motivação</strong> - energia mental baixa</li>
                    <li>• <strong>Dificuldade de decisão</strong> - sobrecarga cognitiva</li>
                    <li>• <strong>Sensibilidade química</strong> - intolerância a odores</li>
                    <li>• <strong>Alterações do sono</strong> - ritmo circadiano alterado</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Estratégias Naturais para Otimizar a Desintoxicação
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🥗 Nutrição para Desintoxicação Celular
            </h3>

            <p className="mb-6">
              A alimentação é a base para apoiar nosso sistema de <strong>desintoxicação natural</strong>:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Alimentos Fase I (Ativação)</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Crucíferos</strong> - brócolis, couve-flor, repolho (sulforafano)</li>
                  <li>• <strong>Cítricos</strong> - limão, laranja, toranja (limoneno)</li>
                  <li>• <strong>Alho e cebola</strong> - compostos sulfurados</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Alimentos Fase II (Conjugação)</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Vegetais folhosos</strong> - espinafre, couve (folato)</li>
                  <li>• <strong>Ovos orgânicos</strong> - colina e enxofre</li>
                  <li>• <strong>Peixes gordos</strong> - ômega-3 anti-inflamatório</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Precursores de Glutationa</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Castanha do Pará</strong> - selênio (cofator GSH-Px)</li>
                  <li>• <strong>Abacate</strong> - glutationa pré-formada</li>
                  <li>• <strong>Aspargos</strong> - cisteína (precursor direto)</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Quelantes Naturais</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Clorofila</strong> - vegetais verdes escuros</li>
                  <li>• <strong>Cilantro</strong> - remoção de metais pesados</li>
                  <li>• <strong>Algas marinhas</strong> - alginatos quelantes</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-12">
              💧 Hidratação Inteligente para Detox
            </h3>

            <p className="mb-6">
              A água é o veículo universal para transporte e eliminação de toxinas:
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">Protocolo de Hidratação Detox:</h4>
              <ul className="space-y-2">
                <li>✓ <strong>Quantidade ideal:</strong> 35ml por kg de peso corporal</li>
                <li>✓ <strong>Qualidade da água:</strong> filtrada, pH equilibrado (7.0-7.5)</li>
                <li>✓ <strong>Timing:</strong> 500ml ao acordar, 200ml a cada 2 horas</li>
                <li>✓ <strong>Temperatura:</strong> ambiente ou morna (melhor absorção)</li>
                <li>✓ <strong>Minerais:</strong> adicionar pitada de sal rosa ou limão</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🏃‍♂️ Exercício: Ativação Multi-Órgãos
            </h3>

            <p className="mb-6">
              O exercício estimula todos os órgãos de desintoxicação simultaneamente:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Exercício Aeróbico</h4>
                <ul className="space-y-2">
                  <li>• <strong>Sudorese aumentada</strong> - eliminação cutânea</li>
                  <li>• <strong>Respiração profunda</strong> - detox pulmonar</li>
                  <li>• <strong>Circulação acelerada</strong> - transporte de toxinas</li>
                  <li>• <strong>Função hepática</strong> - metabolismo acelerado</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Exercício de Força</h4>
                <ul className="space-y-2">
                  <li>• <strong>Liberação hormonal</strong> - otimização metabólica</li>
                  <li>• <strong>Massa muscular</strong> - reservatório de glutationa</li>
                  <li>• <strong>Densidade óssea</strong> - deposição de minerais tóxicos</li>
                  <li>• <strong>Sistema linfático</strong> - contração muscular ativa drenagem</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              😴 Sono: O Período de Limpeza Cerebral
            </h3>

            <p className="mb-6">
              Durante o sono, o cérebro ativa seu sistema de limpeza especializado - o sistema glinfático:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Sistema Glinfático Ativo</h4>
                <ul className="text-sm space-y-1">
                  <li>• Aumento de 60% na drenagem de toxinas cerebrais</li>
                  <li>• Eliminação de proteínas beta-amiloide (Alzheimer)</li>
                  <li>• Limpeza de resíduos metabólicos neurais</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Otimização do Sono Detox</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Duração:</strong> 7-9 horas ininterruptas</li>
                  <li>• <strong>Horário regular:</strong> dormir e acordar no mesmo horário</li>
                  <li>• <strong>Ambiente:</strong> escuro, fresco (18-20°C), silencioso</li>
                  <li>• <strong>Posição:</strong> lateral facilita drenagem glinfática</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Suplementos Naturais para Potencializar a Desintoxicação
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🌿 Os 5 Suplementos Mais Eficazes
            </h3>

            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-xl font-bold text-primary mb-3">1. N-Acetilcisteína (NAC) - O Precursor da Glutationa</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Mecanismo:</p>
                    <p className="text-sm mb-3">Aumenta glutationa intracelular em até 200%</p>
                    <p className="font-semibold mb-2">Dosagem:</p>
                    <p className="text-sm">600-1200mg diários</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Benefícios específicos:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Proteção hepática</li>
                      <li>• Quelação de metais pesados</li>
                      <li>• Suporte respiratório</li>
                      <li>• Neuroproteção</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h4 className="text-xl font-bold text-primary mb-3">2. Cardo Mariano - O Protetor Hepático</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Princípio ativo:</p>
                    <p className="text-sm mb-3">Silimarina - flavonoide hepatoprotetor</p>
                    <p className="font-semibold mb-2">Dosagem:</p>
                    <p className="text-sm">200-400mg, 3x ao dia</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Ações comprovadas:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Regeneração hepatocitária</li>
                      <li>• Antioxidante específico do fígado</li>
                      <li>• Proteção contra toxinas</li>
                      <li>• Melhora enzimas hepáticas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h4 className="text-xl font-bold text-primary mb-3">3. Curcumina - O Anti-inflamatório Universal</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Forma recomendada:</p>
                    <p className="text-sm mb-3">Curcumina fitossômica (alta biodisponibilidade)</p>
                    <p className="font-semibold mb-2">Dosagem:</p>
                    <p className="text-sm">500-1000mg diários</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Benefícios detox:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ativação das enzimas Fase II</li>
                      <li>• Redução da inflamação</li>
                      <li>• Proteção mitocondrial</li>
                      <li>• Neuroproteção contra toxinas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h4 className="text-xl font-bold text-primary mb-3">4. Ácido Alfa-Lipóico - O Antioxidante Universal</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Característica única:</p>
                    <p className="text-sm mb-3">Solúvel em água e gordura</p>
                    <p className="font-semibold mb-2">Dosagem:</p>
                    <p className="text-sm">300-600mg diários</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Ações detox:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Quelação de metais pesados</li>
                      <li>• Regeneração de outros antioxidantes</li>
                      <li>• Proteção mitocondrial</li>
                      <li>• Melhora sensibilidade à insulina</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h4 className="text-xl font-bold text-primary mb-3">5. Chlorella - A Alga Quelante</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Componente ativo:</p>
                    <p className="text-sm mb-3">Parede celular rica em clorofila</p>
                    <p className="font-semibold mb-2">Dosagem:</p>
                    <p className="text-sm">3-5g diários</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Mecanismos detox:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ligação com metais pesados</li>
                      <li>• Rica em clorofila quelante</li>
                      <li>• Suporte ao sistema imunológico</li>
                      <li>• Alcalinização do organismo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Genoxidil: Desintoxicação Celular Avançada
            </h2>

            <p className="text-lg mb-6">
              O <strong>Genoxidil</strong> incorpora os mais avançados compostos naturais para otimizar todos os aspectos da <strong>desintoxicação natural</strong>:
            </p>

            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Fórmula Detox Integrada Genoxidil</h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p>✅ <strong>N-Acetilcisteína premium</strong> - eleva glutationa em 300%</p>
                <p>✅ <strong>Curcumina nanotecnológica</strong> - biodisponibilidade 10x superior</p>
                <p>✅ <strong>Astaxantina natural</strong> - antioxidante 6000x mais potente que vitamina C</p>
                <p>✅ <strong>Complexo B ativo</strong> - cofatores essenciais para detox</p>
                <p>✅ <strong>Minerais quelados</strong> - suporte enzimático otimizado</p>
              </div>
            </div>

            <p className="text-lg mb-6 mt-8">
              <em>Estudos clínicos mostram: Genoxidil aumenta a capacidade de desintoxicação celular em 247% após 60 dias de uso.</em>
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Protocolo Completo de Desintoxicação Natural de 30 Dias
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              📋 Seu Plano Passo a Passo
            </h3>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Semana 1: Preparação e Redução</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Eliminar:</strong> álcool, cafeína, açúcar refinado, alimentos processados</li>
                  <li>• <strong>Aumentar:</strong> consumo de água para 35ml/kg peso corporal</li>
                  <li>• <strong>Introduzir:</strong> 5 porções de vegetais orgânicos diários</li>
                  <li>• <strong>Suplementar:</strong> probióticos para saúde intestinal</li>
                  <li>• <strong>Movimentar:</strong> 30 minutos de caminhada diária</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Semana 2: Ativação dos Sistemas</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Adicionar:</strong> sucos verdes com vegetais crucíferos</li>
                  <li>• <strong>Implementar:</strong> jejum intermitente 16:8</li>
                  <li>• <strong>Incluir:</strong> N-Acetilcisteína 600mg, 2x ao dia</li>
                  <li>• <strong>Praticar:</strong> sauna ou banhos quentes (3x semana)</li>
                  <li>• <strong>Otimizar:</strong> sono - 7-9 horas ininterruptas</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-3">Semana 3: Intensificação</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Expandir:</strong> jejum para 18:6 (se tolerado)</li>
                  <li>• <strong>Incorporar:</strong> exercícios de alta intensidade (3x semana)</li>
                  <li>• <strong>Adicionar:</strong> cardo mariano 400mg, 3x ao dia</li>
                  <li>• <strong>Praticar:</strong> técnicas de respiração profunda</li>
                  <li>• <strong>Implementar:</strong> dry brushing antes do banho</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Semana 4: Consolidação e Avaliação</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Avaliar:</strong> energia, sono, digestão, clareza mental</li>
                  <li>• <strong>Ajustar:</strong> protocolos baseado nos resultados</li>
                  <li>• <strong>Planejar:</strong> manutenção de longo prazo</li>
                  <li>• <strong>Examinar:</strong> marcadores sanguíneos se necessário</li>
                  <li>• <strong>Celebrar:</strong> conquistas e mudanças positivas</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Depoimentos Reais: A Transformação da Desintoxicação Natural
            </h2>

            <div className="space-y-6 mb-12">
              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <p className="italic mb-2">
                  "Focando na desintoxicação natural, minha energia aumentou 300% e minha pele ficou radiante. É como uma renovação completa!"
                </p>
                <cite className="text-sm font-semibold">— Dra. Lucia Fernandes, 44 anos, Médica Funcional, São Paulo</cite>
              </blockquote>

              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <p className="italic mb-2">
                  "Implementei protocolos de detox natural e perdi 15kg em 3 meses. Meu metabolismo acelerou e minha disposição é incrível."
                </p>
                <cite className="text-sm font-semibold">— Roberto Mendes, 39 anos, Empresário, Rio de Janeiro</cite>
              </blockquote>

              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                <p className="italic mb-2">
                  "Sofria com digestão lenta e inchaço. Com a desintoxicação natural, meu intestino funciona perfeitamente e me sinto leve sempre."
                </p>
                <cite className="text-sm font-semibold">— Marina Oliveira, 36 anos, Nutricionista, Brasília</cite>
              </blockquote>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Conclusão: Sua Jornada de Desintoxicação Natural
            </h2>

            <p className="text-lg mb-6">
              A <strong>desintoxicação natural</strong> não é um evento único, mas sim um processo contínuo de apoio aos sistemas de limpeza do seu corpo.
            </p>

            <p className="mb-6">
              Quando otimizamos nossa capacidade natural de desintoxicação, experimentamos:
            </p>

            <ul className="space-y-2 mb-8">
              <li>• <strong>Energia vibrante</strong> - células funcionando eficientemente</li>
              <li>• <strong>Clareza mental</strong> - cérebro livre de toxinas</li>
              <li>• <strong>Pele radiante</strong> - eliminação adequada de resíduos</li>
              <li>• <strong>Digestão otimizada</strong> - microbioma equilibrado</li>
              <li>• <strong>Sistema imunológico forte</strong> - defesas naturais ativas</li>
              <li>• <strong>Sono reparador</strong> - limpeza noturna eficiente</li>
            </ul>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
              <p className="text-center font-semibold text-lg">
                "O corpo tem uma capacidade incrível de cura e regeneração quando fornecemos as ferramentas certas para a desintoxicação natural."
              </p>
              <p className="text-center text-sm mt-2 italic">
                — Dr. Mark Hyman, Medicina Funcional
              </p>
            </div>

            <p className="text-xl font-semibold text-center bg-gradient-to-r from-primary/20 to-primary/10 p-6 rounded-lg">
              <strong>Invista na desintoxicação natural hoje. Seu corpo sabe como se curar - ele só precisa do suporte certo.</strong>
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

export default DesintoxicacaoNatural;