import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Cookie, Info, Settings, Shield, Clock, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

const CookiesPolicy = () => {
  return (
    <>
      <SEO
        title="Política de Cookies | Genoxidil - Como Utilizamos Cookies"
        description="Saiba como utilizamos cookies e tecnologias semelhantes para melhorar sua experiência no site Genoxidil. Transparência e controle total."
        canonical="https://genoxidil.blog/politica-de-cookies"
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Cookie className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Política de <span className="text-primary">Cookies</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Entenda como utilizamos cookies para melhorar sua experiência de navegação e como você pode gerenciá-los
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
                A <strong>Genoxidil</strong> utiliza cookies e tecnologias similares para melhorar sua experiência de navegação, personalizar conteúdo, analisar o tráfego do site e fornecer funcionalidades essenciais. Esta política explica o que são cookies, como os utilizamos e como você pode gerenciá-los.
              </p>
            </div>

            {/* 1. O Que São Cookies */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Info className="w-8 h-8 text-blue-500" />
                1. O Que São Cookies?
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone, tablet) quando você visita um site. Eles permitem que o site "lembre" de suas preferências e ações.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">🍪 Cookies HTTP</h4>
                  <p className="text-sm text-muted-foreground">Armazenados pelo navegador e enviados em cada requisição</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">💾 Local Storage</h4>
                  <p className="text-sm text-muted-foreground">Armazenamento persistente no navegador</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">📊 Session Storage</h4>
                  <p className="text-sm text-muted-foreground">Dados temporários durante a sessão</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">📍 Pixels e Beacons</h4>
                  <p className="text-sm text-muted-foreground">Rastreamento de interações com páginas e e-mails</p>
                </div>
              </div>
            </div>

            {/* 2. Por Que Utilizamos Cookies */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                2. Por Que Utilizamos Cookies?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">🔐 Funcionalidades Essenciais</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Manter você autenticado durante sua sessão</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Lembrar itens no carrinho de compras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Garantir segurança e prevenir fraudes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">🎨 Personalização</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Lembrar suas preferências de idioma e região</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Adaptar conteúdo aos seus interesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Oferecer recomendações personalizadas</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">📊 Análise e Performance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Entender como visitantes interagem com o site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Medir efetividade de campanhas de marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Otimizar velocidade e desempenho</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Categorias de Cookies */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-purple-500" />
                3. Categorias de Cookies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-background/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">🔒 Cookies Estritamente Necessários</h3>
                  <p className="text-muted-foreground mb-4">
                    Essenciais para o funcionamento do site. Não podem ser desativados em nossos sistemas.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-3 bg-background rounded">
                      <span className="font-semibold">session_id</span>
                      <span className="text-muted-foreground">Sessão</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background rounded">
                      <span className="font-semibold">cart_items</span>
                      <span className="text-muted-foreground">7 dias</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    <strong>Base Legal:</strong> Legítimo interesse (não requer consentimento prévio)
                  </p>
                </div>

                <div className="bg-background/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">📊 Cookies de Análise</h3>
                  <p className="text-muted-foreground mb-4">
                    Permitem medir e melhorar o desempenho do site.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-3 bg-background rounded">
                      <span className="font-semibold">_ga (Google Analytics)</span>
                      <span className="text-muted-foreground">2 anos</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background rounded">
                      <span className="font-semibold">_gid (Google Analytics)</span>
                      <span className="text-muted-foreground">24 horas</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    <strong>Base Legal:</strong> Consentimento do usuário
                  </p>
                </div>

                <div className="bg-background/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">🎯 Cookies de Marketing</h3>
                  <p className="text-muted-foreground mb-4">
                    Utilizados para exibir anúncios relevantes.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-3 bg-background rounded">
                      <span className="font-semibold">_fbp (Facebook Pixel)</span>
                      <span className="text-muted-foreground">3 meses</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background rounded">
                      <span className="font-semibold">IDE (Google DoubleClick)</span>
                      <span className="text-muted-foreground">1 ano</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    <strong>Base Legal:</strong> Consentimento do usuário
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Como Gerenciar Cookies */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-orange-500" />
                4. Como Gerenciar e Desativar Cookies
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🎛️ Banner de Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Ao visitar nosso site pela primeira vez, exibimos um banner onde você pode:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Aceitar todos os cookies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Recusar cookies não essenciais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Personalizar suas preferências por categoria</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">🌐 Configurações do Navegador</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Google Chrome
                      </h4>
                      <p className="text-sm text-muted-foreground">Configurações → Privacidade → Cookies</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Mozilla Firefox
                      </h4>
                      <p className="text-sm text-muted-foreground">Opções → Privacidade → Cookies</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Safari
                      </h4>
                      <p className="text-sm text-muted-foreground">Preferências → Privacidade → Cookies</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Microsoft Edge
                      </h4>
                      <p className="text-sm text-muted-foreground">Configurações → Privacidade → Cookies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Consequências de Desativar Cookies
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>❌ Não conseguir fazer login ou manter-se autenticado</li>
                  <li>❌ Perder itens do carrinho de compras entre sessões</li>
                  <li>❌ Não salvar preferências de idioma e região</li>
                  <li>❌ Ter uma experiência menos personalizada</li>
                </ul>
              </div>
            </div>

            {/* 5. Contato */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                5. Dúvidas sobre Cookies?
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Se você tiver dúvidas sobre nossa utilização de cookies ou sobre esta política:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📧 E-mail</h4>
                  <p className="text-foreground font-semibold">genoxidil@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-2">Resposta em até 24 horas</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📱 WhatsApp</h4>
                  <p className="text-foreground font-semibold">(12) 98251-9116</p>
                  <p className="text-sm text-muted-foreground mt-2">Segunda a sexta, 9h às 18h</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Para mais informações sobre proteção de dados, consulte nossa <a href="/politica-de-privacidade" className="text-primary hover:underline font-semibold">Política de Privacidade</a>.
              </p>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Genoxidil Brasil</strong> – Transparência no uso de cookies
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

export default CookiesPolicy;