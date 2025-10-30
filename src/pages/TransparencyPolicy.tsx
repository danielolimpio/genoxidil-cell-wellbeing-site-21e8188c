import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Sparkles, Award, Microscope, Leaf, Users, Phone, Globe, Heart, TrendingUp, CheckCircle } from "lucide-react";

const TransparencyPolicy = () => {
  return (
    <>
      <SEO
        title="Política de Transparência | Genoxidil - Nossos Compromissos"
        description="Conheça nossos compromissos de transparência: qualidade, certificações, cadeia de produção e atendimento ao cliente."
        canonical="https://genoxidil.blog/politica-de-transparencia"
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Política de <span className="text-primary">Transparência</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Confiança construída através da transparência em cada etapa: da produção ao atendimento
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <article className="max-w-4xl mx-auto space-y-12">
            
            {/* Missão e Valores */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-blue-500" />
                Nossa Missão e Valores
              </h2>
              
              <p className="text-muted-foreground mb-6">
                A Genoxidil, parte da família <strong>NBN Living</strong>, tem como missão promover saúde celular e bem-estar através de suplementos científicos de alta qualidade baseados na ativação da proteína Nrf2.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <Microscope className="w-5 h-5" />
                    Ciência e Inovação
                  </h4>
                  <p className="text-sm text-muted-foreground">Pesquisas rigorosas e tecnologia de ponta</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Qualidade Suprema
                  </h4>
                  <p className="text-sm text-muted-foreground">Ingredientes premium testados e certificados</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    Naturalidade
                  </h4>
                  <p className="text-sm text-muted-foreground">Ingredientes naturais e sustentáveis</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Integridade
                  </h4>
                  <p className="text-sm text-muted-foreground">Honestidade em todas as relações</p>
                </div>
              </div>
            </div>

            {/* Qualidade e Certificações */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-green-500" />
                Qualidade e Certificações
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🏆 Padrões de Fabricação</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-5 rounded-lg">
                      <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">GMP</h4>
                      <p className="text-sm text-muted-foreground">Boas Práticas de Fabricação certificadas</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg">
                      <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">ISO 9001</h4>
                      <p className="text-sm text-muted-foreground">Sistema de gestão de qualidade internacional</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg">
                      <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">HACCP</h4>
                      <p className="text-sm text-muted-foreground">Controle de pontos críticos e segurança alimentar</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg">
                      <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">ANVISA</h4>
                      <p className="text-sm text-muted-foreground">Registro e notificação regulamentados</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">✓ Controle de Qualidade</h3>
                  <div className="space-y-3">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Antes da Produção</h4>
                      <p className="text-sm text-muted-foreground">Seleção de fornecedores, análise de matérias-primas, testes microbiológicos e análise de metais pesados</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Durante a Produção</h4>
                      <p className="text-sm text-muted-foreground">Monitoramento em tempo real, controle de temperatura e umidade, rastreabilidade completa de lotes</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Após a Produção</h4>
                      <p className="text-sm text-muted-foreground">Análise final, testes de estabilidade, verificação de embalagem e liberação por Garantia de Qualidade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rastreabilidade */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-purple-500" />
                Rastreabilidade da Cadeia de Suprimentos
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🌿 Origem dos Ingredientes</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Fornecedores Qualificados</strong> – trabalhamos apenas com parceiros certificados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Documentação Completa</strong> – registros detalhados da origem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Rastreabilidade de Lote</strong> – cada produto rastreado até a origem</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🔬 Principais Ingredientes do Genoxidil</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Sulforafano</h4>
                      <p className="text-sm text-muted-foreground">Extraído de brotos de brócolis orgânicos</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Curcumina</h4>
                      <p className="text-sm text-muted-foreground">Cúrcuma cultivada de forma sustentável</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Quercetina</h4>
                      <p className="text-sm text-muted-foreground">Alto grau de pureza natural</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Vitaminas B</h4>
                      <p className="text-sm text-muted-foreground">Formas bioativas de alta absorção</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🌱 Sustentabilidade</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Ingredientes de origem sustentável e renovável</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Embalagens recicláveis com menor impacto ambiental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Compensação de carbono em processos logísticos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comunicação Clara */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-orange-500" />
                Informações Claras e Precisas
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🏷️ Rotulagem Transparente</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>Lista completa de ingredientes em ordem decrescente</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>Informação nutricional detalhada por porção</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>Dosagem recomendada e modo de uso</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>Advertências e contraindicações</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">📢 Comunicação de Benefícios</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <p className="text-sm">✅ <strong>Fundamentação Científica</strong></p>
                      <p className="text-xs text-muted-foreground mt-1">Benefícios suportados por estudos</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <p className="text-sm">✅ <strong>Linguagem Clara</strong></p>
                      <p className="text-xs text-muted-foreground mt-1">Sem jargões desnecessários</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <p className="text-sm">✅ <strong>Expectativas Realistas</strong></p>
                      <p className="text-xs text-muted-foreground mt-1">Resultados podem variar</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <p className="text-sm">❌ <strong>Não Somos Medicamento</strong></p>
                      <p className="text-xs text-muted-foreground mt-1">Suplementos não substituem tratamento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Atendimento ao Cliente */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Phone className="w-8 h-8 text-indigo-500" />
                Atendimento ao Cliente e Suporte
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">📞 Canais de Comunicação</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-5 rounded-lg">
                      <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">📧 E-mail</h4>
                      <p className="text-sm text-muted-foreground mb-1">genoxidil@gmail.com</p>
                      <p className="text-xs text-muted-foreground">Resposta em até 24h</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg">
                      <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">📱 WhatsApp</h4>
                      <p className="text-sm text-muted-foreground mb-1">(12) 98251-9116</p>
                      <p className="text-xs text-muted-foreground">Resposta imediata</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🔧 Resolução de Problemas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500">✓</span>
                      <span>Entre em contato imediatamente através de qualquer canal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500">✓</span>
                      <span>Investigação pronta da situação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500">✓</span>
                      <span>Solução justa e adequada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500">✓</span>
                      <span>Você mantido informado em cada etapa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Responsabilidade Social */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl p-8 border-l-4 border-teal-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-teal-500" />
                Responsabilidade Social e Ambiental
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">🤝 Compromissos Sociais</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Condições justas de trabalho</li>
                    <li>• Não utilização de trabalho infantil</li>
                    <li>• Apoio a comunidades locais</li>
                    <li>• Diversidade e inclusão</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">🌍 Compromissos Ambientais</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Redução de emissões de carbono</li>
                    <li>• Uso responsável de recursos</li>
                    <li>• Embalagens sustentáveis</li>
                    <li>• Logística reversa</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contato e Ouvidoria
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Dúvidas, sugestões ou elogios relacionados a esta Política de Transparência:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📧 E-mail</h4>
                  <p className="text-foreground font-semibold">genoxidil@gmail.com</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📱 WhatsApp</h4>
                  <p className="text-foreground font-semibold">(12) 98251-9116</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Genoxidil Brasil</strong> – Transparência, qualidade e confiança em cada detalhe
              </p>
              <p className="text-xs text-muted-foreground">
                Última atualização: 15 de janeiro de 2025
              </p>
            </div>

          </article>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TransparencyPolicy;