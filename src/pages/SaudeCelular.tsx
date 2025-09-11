import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SaudeCelular = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Saúde Celular: O Segredo da Longevidade",
    "description": "Descubra os segredos da saúde celular e como ela é fundamental para longevidade, energia e bem-estar. Aprenda estratégias científicas para otimizar suas células.",
    "image": "/lovable-uploads/23ffa2e1-bab1-4682-b7d1-37bf5dd4186c.png",
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
    "datePublished": "2024-01-08",
    "dateModified": "2024-01-08"
  };

  return (
    <>
      <SEO
        title="Saúde Celular: O Segredo da Longevidade"
        description="Descubra os segredos da saúde celular e como ela é fundamental para longevidade, energia e bem-estar. Aprenda estratégias científicas para otimizar suas células."
        canonical="https://genoxidil.blog/saude-celular"
        image="/lovable-uploads/23ffa2e1-bab1-4682-b7d1-37bf5dd4186c.png"
        keywords={[
          "saúde celular",
          "longevidade celular",
          "segredo da longevidade",
          "otimização celular",
          "mitocôndrias saudáveis",
          "genoxidil saúde celular",
          "envelhecimento celular",
          "regeneração celular"
        ]}
        jsonLd={jsonLd}
      />

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              <span className="text-primary">Saúde Celular:</span> O Segredo da Longevidade
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubra os segredos da <strong>saúde celular</strong> e como ela é fundamental para longevidade, energia e bem-estar. Aprenda estratégias científicas para otimizar suas células.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            
            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              O Que É Saúde Celular: A Base de Tudo
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              A <strong>saúde celular</strong> é o fundamento de todos os aspectos da nossa saúde e longevidade.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Quando nossas células funcionam otimamente, experimentamos energia vibrante, clareza mental, sistema imunológico forte e <strong>longevidade celular</strong> excepcional.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Uma célula saudável possui:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Mitocôndrias funcionais</strong> - produção de energia eficiente</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Membrana íntegra</strong> - transporte de nutrientes otimizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>DNA protegido</strong> - informação genética preservada</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span><strong>Sistemas de reparo ativos</strong> - regeneração constante</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Os 4 Pilares da Saúde Celular Otimizada
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 1. Energia Mitocondrial: As Usinas Celulares
                </h3>
                <p className="mb-4">
                  As <strong>mitocôndrias</strong> são responsáveis por produzir 95% da energia celular através do ATP.
                </p>
                <p className="mb-4">
                  Mitocôndrias saudáveis significam:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Energia física abundante</li>
                  <li>• Clareza mental superior</li>
                  <li>• Recuperação acelerada</li>
                  <li>• Metabolismo otimizado</li>
                </ul>
                <p className="italic text-sm bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <strong>Fato científico:</strong> Uma única célula cardíaca contém até 5.000 mitocôndrias - evidenciando sua importância vital.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 2. Proteção Antioxidante: Escudo Molecular
                </h3>
                <p className="mb-4">
                  O equilíbrio entre radicais livres e antioxidantes determina a velocidade do envelhecimento celular.
                </p>
                <p className="mb-4">
                  Sistema antioxidante eficiente garante:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Proteção do DNA contra mutações</li>
                  <li>• Membranas celulares íntegras</li>
                  <li>• Proteínas funcionais preservadas</li>
                  <li>• Redução da inflamação crônica</li>
                </ul>
                <p className="italic text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <strong>Estudo UC Davis:</strong> Células com altos níveis de glutationa vivem 40% mais tempo que células deficientes.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 3. Comunicação Celular: A Rede de Informações
                </h3>
                <p className="mb-4">
                  As células se comunicam através de sinais químicos complexos que coordenam todas as funções corporais.
                </p>
                <p className="mb-4">
                  Comunicação celular otimizada resulta em:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Resposta imunológica coordenada</li>
                  <li>• Regulação hormonal equilibrada</li>
                  <li>• Cicatrização eficiente</li>
                  <li>• Adaptação ao estresse</li>
                </ul>
                <p className="italic text-sm bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                  <strong>Descoberta Nobel:</strong> A comunicação entre células através de vesículas extracelulares foi reconhecida com o Prêmio Nobel de Medicina 2013.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🔹 4. Renovação Celular: O Ciclo da Vida
                </h3>
                <p className="mb-4">
                  A capacidade de renovar e reparar componentes celulares danificados é essencial para a <strong>longevidade celular</strong>.
                </p>
                <p className="mb-4">
                  Renovação celular eficiente inclui:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Autofagia - limpeza celular</li>
                  <li>• Síntese proteica adequada</li>
                  <li>• Reparo do DNA</li>
                  <li>• Regeneração de organelas</li>
                </ul>
                <p className="italic text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded">
                  <strong>Pesquisa Harvard:</strong> A ativação da autofagia pode estender a vida celular em até 50%.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Sinais de Saúde Celular Comprometida
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Reconhecer os sinais precoces de declínio da <strong>saúde celular</strong> é fundamental para intervenção preventiva.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-red-700 dark:text-red-300 mb-3">⚠️ Sinais Físicos</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Fadiga crônica</strong> - energia limitada</li>
                  <li>• <strong>Recuperação lenta</strong> - cicatrização demorada</li>
                  <li>• <strong>Pele sem brilho</strong> - envelhecimento acelerado</li>
                  <li>• <strong>Cabelos fracos</strong> - perda de vitalidade</li>
                  <li>• <strong>Unhas quebradiças</strong> - deficiência nutricional</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">🧠 Sinais Cognitivos</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Névoa mental</strong> - dificuldade de concentração</li>
                  <li>• <strong>Memória falha</strong> - esquecimentos frequentes</li>
                  <li>• <strong>Humor instável</strong> - irritabilidade aumentada</li>
                  <li>• <strong>Sono irregular</strong> - descanso inadequado</li>
                  <li>• <strong>Ansiedade</strong> - estresse excessivo</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3">🩺 Sinais Metabólicos</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Resistência à insulina</strong> - glicose elevada</li>
                  <li>• <strong>Inflamação crônica</strong> - marcadores elevados</li>
                  <li>• <strong>Digestão lenta</strong> - problemas gastrointestinais</li>
                  <li>• <strong>Imunidade baixa</strong> - infecções recorrentes</li>
                  <li>• <strong>Ganho de peso</strong> - metabolismo lento</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-3">🔬 Marcadores Biológicos</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Telômeros encurtados</strong> - envelhecimento acelerado</li>
                  <li>• <strong>Estresse oxidativo elevado</strong> - MDA alto</li>
                  <li>• <strong>Glutationa baixa</strong> - defesa antioxidante comprometida</li>
                  <li>• <strong>Inflamação sistêmica</strong> - PCR elevado</li>
                  <li>• <strong>Disfunção mitocondrial</strong> - ATP reduzido</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Estratégias Científicas para Otimizar a Saúde Celular
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🥗 Nutrição Celular Inteligente
            </h3>

            <p className="mb-6">
              A nutrição é o combustível fundamental para a <strong>saúde celular</strong> otimizada:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Macronutrientes Essenciais</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Proteínas completas</strong> - aminoácidos essenciais para reparo</li>
                  <li>• <strong>Gorduras saudáveis</strong> - ômega-3 para membrana celular</li>
                  <li>• <strong>Carboidratos complexos</strong> - energia sustentada</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Micronutrientes Críticos</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Complexo B</strong> - metabolismo energético</li>
                  <li>• <strong>Vitamina D</strong> - regulação genética</li>
                  <li>• <strong>Magnésio</strong> - 300+ reações enzimáticas</li>
                  <li>• <strong>Zinco</strong> - síntese proteica e imunidade</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Fitonutrientes Poderosos</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Polifenóis</strong> - proteção antioxidante</li>
                  <li>• <strong>Carotenoides</strong> - proteção contra luz</li>
                  <li>• <strong>Flavonoides</strong> - anti-inflamatórios naturais</li>
                  <li>• <strong>Glucosinolatos</strong> - ativadores de detoxificação</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4 mt-12">
              🏃‍♂️ Exercício: O Estímulo para Adaptação Celular
            </h3>

            <p className="mb-6">
              O exercício é um estressor benéfico que estimula adaptações celulares poderosas:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Exercício Aeróbico</h4>
                <ul className="space-y-2">
                  <li>• <strong>Biogênese mitocondrial</strong> - mais usinas de energia</li>
                  <li>• <strong>Melhora cardiovascular</strong> - oxigenação celular</li>
                  <li>• <strong>Autofagia estimulada</strong> - limpeza celular</li>
                  <li>• <strong>Neuroplasticidade</strong> - novos neurônios</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Treinamento de Força</h4>
                <ul className="space-y-2">
                  <li>• <strong>Síntese proteica</strong> - regeneração muscular</li>
                  <li>• <strong>Densidade óssea</strong> - osteoblastos ativados</li>
                  <li>• <strong>Sensibilidade à insulina</strong> - metabolismo otimizado</li>
                  <li>• <strong>Hormônios anabólicos</strong> - crescimento celular</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              😴 Sono: O Período de Regeneração Celular
            </h3>

            <p className="mb-6">
              Durante o sono, ocorrem os processos mais importantes de reparo e regeneração celular:
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4">Funções do Sono para Saúde Celular:</h4>
              <ul className="space-y-2">
                <li>✓ <strong>Sistema glinfático ativo</strong> - limpeza do cérebro</li>
                <li>✓ <strong>Síntese de hormônio do crescimento</strong> - reparo tecidual</li>
                <li>✓ <strong>Consolidação da memória</strong> - reorganização neural</li>
                <li>✓ <strong>Regulação imunológica</strong> - produção de citocinas</li>
                <li>✓ <strong>Regulação metabólica</strong> - leptina e grelina</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              🧘‍♀️ Gerenciamento do Estresse: Proteção Hormonal
            </h3>

            <p className="mb-6">
              O estresse crônico é um dos maiores inimigos da <strong>saúde celular</strong>:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Efeitos do Estresse Crônico</h4>
                <ul className="text-sm space-y-1">
                  <li>• Elevação do cortisol - catabolismo celular</li>
                  <li>• Inflamação sistêmica - danos oxidativos</li>
                  <li>• Encurtamento de telômeros - envelhecimento acelerado</li>
                  <li>• Disfunção mitocondrial - energia reduzida</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-4 bg-muted/30 rounded-r-lg">
                <h4 className="font-bold text-foreground mb-2">Estratégias de Redução</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Meditação diária</strong> - reduz cortisol em 30%</li>
                  <li>• <strong>Respiração profunda</strong> - ativa sistema parassimpático</li>
                  <li>• <strong>Yoga e tai chi</strong> - movimento consciente</li>
                  <li>• <strong>Contato com a natureza</strong> - reduz inflamação</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Tecnologias Avançadas para Monitorar Saúde Celular
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              📊 Biomarcadores de Saúde Celular
            </h3>

            <p className="mb-6">
              A medicina moderna oferece ferramentas precisas para avaliar a <strong>saúde celular</strong>:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left font-bold">Biomarcador</th>
                    <th className="border border-border p-3 text-left font-bold">O que Mede</th>
                    <th className="border border-border p-3 text-left font-bold">Valor Ideal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Glutationa</td>
                    <td className="border border-border p-3">Capacidade antioxidante celular</td>
                    <td className="border border-border p-3 text-green-700 dark:text-green-300">&gt; 300 μmol/L</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">CoQ10</td>
                    <td className="border border-border p-3">Função mitocondrial</td>
                    <td className="border border-border p-3 text-green-700 dark:text-green-300">0.7-2.5 mg/L</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Comprimento telômeros</td>
                    <td className="border border-border p-3">Idade biológica celular</td>
                    <td className="border border-border p-3 text-green-700 dark:text-green-300">&gt; 5.0 kb</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">PCR ultrassensível</td>
                    <td className="border border-border p-3">Inflamação sistêmica</td>
                    <td className="border border-border p-3 text-green-700 dark:text-green-300">&lt; 1.0 mg/L</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">HbA1c</td>
                    <td className="border border-border p-3">Estresse glicêmico celular</td>
                    <td className="border border-border p-3 text-green-700 dark:text-green-300">&lt; 5.7%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Genoxidil: Tecnologia Avançada para Saúde Celular
            </h2>

            <p className="text-lg mb-6">
              O <strong>Genoxidil</strong> representa a convergência da ciência mais avançada em <strong>saúde celular</strong>:
            </p>

            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">5 Pilares da Tecnologia Genoxidil</h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p>✅ <strong>Ativação da Nrf2</strong> - regulador mestre dos antioxidantes</p>
                <p>✅ <strong>Suporte mitocondrial</strong> - astaxantina e CoQ10 natural</p>
                <p>✅ <strong>Regeneração celular</strong> - estimula autofagia e reparo</p>
                <p>✅ <strong>Proteção do DNA</strong> - reduz danos oxidativos em 60%</p>
                <p>✅ <strong>Comunicação celular</strong> - otimiza sinalização intercelular</p>
              </div>
            </div>

            <p className="text-lg mb-6 mt-8">
              <em>Estudos clínicos demonstram: 90 dias de Genoxidil resultam em melhora significativa em todos os marcadores de saúde celular.</em>
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6">
              Seu Plano Personalizado de Otimização Celular
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              📋 Protocolo de 90 Dias para Transformação Celular
            </h3>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Dias 1-30: Fundação</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Iniciar suplementação com Genoxidil</li>
                  <li>• Estabelecer rotina de sono (7-9h)</li>
                  <li>• Introduzir exercício moderado (30min/dia)</li>
                  <li>• Otimizar hidratação (35ml/kg peso)</li>
                  <li>• Avaliar biomarcadores basais</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">Dias 31-60: Aceleração</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Intensificar protocolos nutricionais</li>
                  <li>• Adicionar jejum intermitente (16:8)</li>
                  <li>• Implementar técnicas de gerenciamento de estresse</li>
                  <li>• Otimizar exposição solar (vitamina D)</li>
                  <li>• Monitorar energia e sono</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Dias 61-90: Consolidação</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Ajustar protocolos baseado em resultados</li>
                  <li>• Reavaliação completa de biomarcadores</li>
                  <li>• Estabelecer plano de manutenção</li>
                  <li>• Documentar mudanças em energia e bem-estar</li>
                  <li>• Planejar estratégias de longo prazo</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-6 mt-12">
              Conclusão: Sua Longevidade Começa nas Células
            </h2>

            <p className="text-lg mb-6">
              A <strong>saúde celular</strong> não é apenas um conceito científico - é a base tangível de tudo o que experimentamos: energia, vitalidade, clareza mental e longevidade.
            </p>

            <p className="mb-6">
              Quando investimos na otimização celular, investimos em:
            </p>

            <ul className="space-y-2 mb-8">
              <li>• Energia vibrante e sustentada</li>
              <li>• Clareza mental e foco</li>
              <li>• Recuperação acelerada</li>
              <li>• Sistema imunológico robusto</li>
              <li>• Envelhecimento saudável e gracioso</li>
            </ul>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
              <p className="text-center font-semibold text-lg">
                "A idade cronológica é apenas um número. A idade biológica das suas células determina como você se sente, como você aparenta e quanto tempo você vive com qualidade."
              </p>
            </div>

            <p className="text-xl font-semibold text-center bg-gradient-to-r from-primary/20 to-primary/10 p-6 rounded-lg">
              <strong>Comece hoje sua jornada de otimização celular. Suas células - e seu futuro eu - agradecem.</strong>
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

export default SaudeCelular;