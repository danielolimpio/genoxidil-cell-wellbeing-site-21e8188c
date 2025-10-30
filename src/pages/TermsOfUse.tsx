import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FileText, UserCheck, Shield, AlertCircle, Ban, Scale, Package, Clock } from "lucide-react";

const TermsOfUse = () => {
  return (
    <>
      <SEO
        title="Termos de Uso | Genoxidil - Condições de Uso do Site"
        description="Termos e condições de uso do site Genoxidil: responsabilidades, limitações e direitos do usuário."
        canonical="https://genoxidil.blog/termos-de-uso"
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Termos de <span className="text-primary">Uso</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Condições gerais aplicáveis ao acesso e uso de nosso site, produtos e serviços
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Última atualização: 15/01/2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <article className="max-w-4xl mx-auto space-y-12">
            
            {/* Alerta Importante */}
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-6 rounded-lg">
              <p className="text-foreground font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                LEIA ATENTAMENTE ANTES DE UTILIZAR O SITE
              </p>
              <p className="text-muted-foreground">
                Ao utilizar nossa plataforma, você concorda integralmente com estes termos. Se não concordar com qualquer disposição, não deve acessar ou utilizar nossos serviços.
              </p>
            </div>

            {/* 1. Aceitação dos Termos */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-blue-500" />
                1. Aceitação dos Termos
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Ao acessar, navegar ou utilizar qualquer parte do site, você declara que:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-muted-foreground">Leu, compreendeu e concorda com estes Termos de Uso</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-muted-foreground">Tem capacidade legal para celebrar contratos (maior de 18 anos)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-muted-foreground">Fornecerá informações verdadeiras, precisas e atualizadas</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-muted-foreground">Utilizará o site de acordo com as leis aplicáveis</span>
                </div>
              </div>
            </div>

            {/* 2. Cadastro e Conta */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-500" />
                2. Cadastro e Conta de Usuário
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">📝 Criação de Conta</h3>
                  <p className="text-muted-foreground mb-3">
                    Para acessar determinadas funcionalidades, você precisará criar uma conta fornecendo:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Nome completo, e-mail válido e telefone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Endereço de entrega e CPF/CNPJ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Senha segura</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">🔒 Responsabilidades</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Manter a confidencialidade de sua senha</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Notificar-nos sobre qualquer uso não autorizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Assumir responsabilidade por atividades em sua conta</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Uso Permitido */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 rounded-xl p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Ban className="w-8 h-8 text-red-500" />
                3. Atividades Proibidas
              </h2>
              
              <p className="text-muted-foreground mb-6">
                É expressamente proibido:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Violar qualquer lei aplicável</span>
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Transmitir vírus ou malware</span>
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Coletar dados de outros usuários</span>
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Fazer spam ou phishing</span>
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Interferir no funcionamento do site</span>
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Usar robôs sem autorização</span>
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Burlar medidas de segurança</span>
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Violar propriedade intelectual</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Produtos e Serviços */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Package className="w-8 h-8 text-purple-500" />
                4. Produtos e Serviços
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">💰 Preços e Pagamento</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Preços em Reais (BRL) e sujeitos a alterações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Incluem impostos quando aplicável</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Frete calculado no checkout</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">🚚 Entrega</h3>
                  <p className="text-muted-foreground">
                    Prazos são estimativas e podem variar. Não nos responsabilizamos por atrasos causados por transportadoras, greves ou eventos naturais.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">↩️ Trocas e Devoluções</h3>
                  <p className="text-muted-foreground">
                    Consulte nossa <a href="/politica-de-reembolso" className="text-primary hover:underline font-semibold">Política de Reembolso</a> para informações detalhadas.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Avisos de Saúde */}
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-yellow-600" />
                5. Informações de Saúde Importantes
              </h2>
              
              <div className="space-y-4">
                <p className="text-muted-foreground font-semibold">
                  As informações fornecidas têm caráter meramente informativo e educacional. Não substituem aconselhamento médico profissional.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Sempre consulte um profissional de saúde antes de iniciar qualquer suplementação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Nunca desconsidere orientações médicas devido a informações do site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Resultados podem variar individualmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Suplementos não são medicamentos e não se destinam a tratar doenças</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Legislação Aplicável */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-indigo-500" />
                6. Legislação Aplicável
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Estes Termos são regidos pelas leis do Brasil, especialmente:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📜 CDC</h4>
                  <p className="text-sm text-muted-foreground">Código de Defesa do Consumidor</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔒 LGPD</h4>
                  <p className="text-sm text-muted-foreground">Lei Geral de Proteção de Dados</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🌐 Marco Civil</h4>
                  <p className="text-sm text-muted-foreground">Marco Civil da Internet</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">⚖️ Código Civil</h4>
                  <p className="text-sm text-muted-foreground">Código Civil Brasileiro</p>
                </div>
              </div>
            </div>

            {/* 7. Contato */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                7. Contato
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Dúvidas sobre estes Termos de Uso? Entre em contato:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📧 E-mail</h4>
                  <p className="text-foreground font-semibold">contato@genoxidil.blog</p>
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
                <strong>Genoxidil Brasil</strong> – Comprometidos com transparência e conformidade legal
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

export default TermsOfUse;