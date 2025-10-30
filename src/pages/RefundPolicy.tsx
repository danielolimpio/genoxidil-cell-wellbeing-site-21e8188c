import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { RotateCcw, Clock, Package, AlertTriangle, CheckCircle, XCircle, CreditCard, Phone } from "lucide-react";

const RefundPolicy = () => {
  return (
    <>
      <SEO
        title="Política de Reembolso | Genoxidil - Trocas e Devoluções"
        description="Entenda os critérios, prazos e procedimentos para solicitar reembolso, troca ou devolução de pedidos Genoxidil."
        canonical="https://genoxidil.blog/politica-de-reembolso"
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <RotateCcw className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Política de <span className="text-primary">Reembolso</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Sua satisfação é nossa prioridade. Entenda seus direitos e procedimentos para trocas, devoluções e reembolsos
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
            
            {/* Introdução */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                A <strong>Genoxidil</strong> está comprometida com a satisfação de seus clientes. Esta Política estabelece os procedimentos, critérios e prazos para solicitação de trocas, devoluções e reembolsos em conformidade com o <strong>Código de Defesa do Consumidor (CDC)</strong>.
              </p>
            </div>

            {/* 1. Direito de Arrependimento */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-blue-500" />
                1. Direito de Arrependimento (7 dias)
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-5 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">⚖️ Fundamentação Legal</p>
                  <p className="text-sm text-muted-foreground">
                    De acordo com o <strong>Artigo 49 do CDC</strong>, você tem direito de desistir da compra no prazo de <strong>7 dias corridos</strong> a contar do recebimento do produto, sem necessidade de justificativa.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">📋 Condições para Exercício do Direito</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Produto <strong>lacrado e na embalagem original</strong>, sem sinais de uso</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Acompanhar <strong>todos os acessórios e nota fiscal</strong></span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Não apresentar <strong>violação do lacre</strong></span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>Estar em <strong>perfeitas condições de revenda</strong></span>
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-5 rounded-lg">
                  <p className="text-sm text-foreground flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Importante:</strong> Por se tratar de suplemento alimentar, produtos com lacre violado ou parcialmente consumidos não poderão ser aceitos por questões de segurança sanitária.</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🔄 Como Exercer o Direito</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-background/50 p-5 rounded-lg text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">1</span>
                      </div>
                      <h4 className="font-semibold mb-2">Entre em Contato</h4>
                      <p className="text-xs text-muted-foreground">Via e-mail ou WhatsApp</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">2</span>
                      </div>
                      <h4 className="font-semibold mb-2">Forneça Dados</h4>
                      <p className="text-xs text-muted-foreground">Nº pedido e CPF</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">3</span>
                      </div>
                      <h4 className="font-semibold mb-2">Aguarde Autorização</h4>
                      <p className="text-xs text-muted-foreground">Resposta em 24h</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">4</span>
                      </div>
                      <h4 className="font-semibold mb-2">Envie o Produto</h4>
                      <p className="text-xs text-muted-foreground">Com nota fiscal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Defeito de Fabricação */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 rounded-xl p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Package className="w-8 h-8 text-red-500" />
                2. Defeito de Fabricação ou Vício do Produto
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">⚖️ Garantia Legal</h3>
                  <p className="text-muted-foreground mb-4">
                    Conforme o <strong>Artigo 26 do CDC</strong>, você tem direito de reclamar por vícios:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-5 rounded-lg">
                      <h4 className="font-semibold mb-2">Produtos não duráveis</h4>
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">30 dias</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg">
                      <h4 className="font-semibold mb-2">Produtos duráveis</h4>
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">90 dias</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🔍 O Que É Considerado Defeito</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Produto diferente do pedido</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Embalagem violada no transporte</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Quantidade errada ou itens faltando</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Produto vencido ou próximo ao vencimento</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Lacre rompido ou adulterado</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      <span>Problema de qualidade comprovado</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">💡 Soluções Oferecidas</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-background/50 p-5 rounded-lg text-center">
                      <div className="text-3xl mb-2">📦</div>
                      <h4 className="font-semibold mb-2">Opção 1</h4>
                      <p className="text-sm text-muted-foreground">Envio de novo produto (frete grátis)</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg text-center">
                      <div className="text-3xl mb-2">💰</div>
                      <h4 className="font-semibold mb-2">Opção 2</h4>
                      <p className="text-sm text-muted-foreground">Reembolso integral (inclui frete)</p>
                    </div>
                    <div className="bg-background/50 p-5 rounded-lg text-center">
                      <div className="text-3xl mb-2">🎁</div>
                      <h4 className="font-semibold mb-2">Opção 3</h4>
                      <p className="text-sm text-muted-foreground">Crédito com bônus adicional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Casos Não Cobertos */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-xl p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                3. Casos NÃO Cobertos
              </h2>
              
              <p className="text-muted-foreground mb-6">
                As seguintes situações <strong>NÃO</strong> se enquadram em reembolso ou troca:
              </p>

              <div className="space-y-3">
                <div className="bg-background/50 p-4 rounded-lg flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Desistência após 7 dias do recebimento (fora do prazo legal)</span>
                </div>
                <div className="bg-background/50 p-4 rounded-lg flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Produto com lacre violado ou parcialmente consumido</span>
                </div>
                <div className="bg-background/50 p-4 rounded-lg flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Produto danificado por uso inadequado ou mau armazenamento</span>
                </div>
                <div className="bg-background/50 p-4 rounded-lg flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Alegação de ineficácia (resultados variam individualmente)</span>
                </div>
                <div className="bg-background/50 p-4 rounded-lg flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Mudança de ideia após início do consumo</span>
                </div>
              </div>
            </div>

            {/* 4. Formas de Reembolso */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-green-500" />
                4. Formas de Reembolso
              </h2>
              
              <p className="text-muted-foreground mb-6">
                O reembolso será processado através do <strong>mesmo método de pagamento</strong> utilizado na compra:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-100 dark:bg-green-900/30">
                    <tr>
                      <th className="p-4 text-left font-semibold">Método de Pagamento</th>
                      <th className="p-4 text-left font-semibold">Prazo de Reembolso</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-background/50">
                      <td className="p-4">💳 Cartão de Crédito</td>
                      <td className="p-4 text-muted-foreground">1 a 2 faturas (conforme operadora)</td>
                    </tr>
                    <tr className="bg-background/50">
                      <td className="p-4">💳 Cartão de Débito</td>
                      <td className="p-4 text-muted-foreground">Até 10 dias úteis</td>
                    </tr>
                    <tr className="bg-background/50">
                      <td className="p-4">⚡ PIX</td>
                      <td className="p-4 text-muted-foreground">Até 5 dias úteis</td>
                    </tr>
                    <tr className="bg-background/50">
                      <td className="p-4">🏦 Boleto Bancário</td>
                      <td className="p-4 text-muted-foreground">Depósito em até 10 dias úteis</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-bold text-foreground mb-3">📧 Comprovação</h4>
                <p className="text-sm text-muted-foreground">
                  Você receberá confirmação por e-mail quando o reembolso for aprovado, processado e creditado.
                </p>
              </div>
            </div>

            {/* 5. Contato */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Phone className="w-8 h-8 text-primary" />
                5. Contato e Suporte
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Para solicitar reembolso, troca ou esclarecer dúvidas sobre esta política:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📧 E-mail</h4>
                  <p className="text-foreground font-semibold mb-1">genoxidil@gmail.com</p>
                  <p className="text-xs text-muted-foreground">Resposta em até 24h</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📱 WhatsApp</h4>
                  <p className="text-foreground font-semibold mb-1">(12) 98251-9116</p>
                  <p className="text-xs text-muted-foreground">Segunda a sexta, 9h-18h</p>
                </div>

                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📞 Telefone</h4>
                  <p className="text-foreground font-semibold mb-1">(12) 98251-9116</p>
                  <p className="text-xs text-muted-foreground">Horário comercial</p>
                </div>
              </div>
            </div>

            {/* Legislação */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">📜 Direitos do Consumidor</h3>
              <p className="text-muted-foreground mb-4">Esta política está em conformidade com:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Código de Defesa do Consumidor (Lei nº 8.078/1990)</li>
                <li>• Decreto Federal nº 7.962/2013 (Comércio Eletrônico)</li>
                <li>• LGPD (Lei nº 13.709/2018)</li>
                <li>• Marco Civil da Internet (Lei nº 12.965/2014)</li>
              </ul>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Genoxidil Brasil</strong> – Sua satisfação é nossa prioridade
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

export default RefundPolicy;