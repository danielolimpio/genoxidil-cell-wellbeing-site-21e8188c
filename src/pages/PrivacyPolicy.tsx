import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Shield, Eye, Lock, UserCheck, FileText, Globe, AlertCircle, Clock, Users, Scale } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Política de Privacidade | Genoxidil - Proteção de Dados e LGPD"
        description="Conheça nossa política de privacidade e como protegemos seus dados pessoais de acordo com a LGPD. Transparência e segurança em primeiro lugar."
        canonical="https://genoxidil.blog/politica-de-privacidade"
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Política de <span className="text-primary">Privacidade</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transparência e segurança no tratamento dos seus dados pessoais, em conformidade com a <strong>LGPD</strong> (Lei nº 13.709/2018)
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
                A <strong>Genoxidil Brasil</strong> respeita a privacidade de todos os usuários e visitantes do site <strong>https://genoxidil.blog/</strong>. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)</strong>.
              </p>
            </div>

            {/* 1. Coleta de Informações */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-blue-500" />
                1. Informações que Coletamos
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">📝 Dados Fornecidos Voluntariamente</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Nome completo</strong> – para personalização do atendimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>E-mail</strong> – para comunicação, newsletters e atualizações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Telefone</strong> – para suporte ao cliente e confirmação de pedidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Endereço de entrega</strong> – para processamento e envio de pedidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Dados de pagamento</strong> – processados por gateways seguros (não armazenamos diretamente)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">🔍 Dados Coletados Automaticamente</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Endereço IP</strong> – para segurança e análise geográfica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Tipo de navegador e dispositivo</strong> – para otimização da experiência</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Páginas visitadas e tempo de navegação</strong> – para melhorias no site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Cookies e tecnologias similares</strong> – conforme nossa Política de Cookies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Uso dos Dados */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-green-500" />
                2. Como Usamos suas Informações
              </h2>
              
              <div className="space-y-4">
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Processamento de Pedidos</h4>
                  <p className="text-muted-foreground">Confirmar, processar e entregar produtos adquiridos</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Comunicação</h4>
                  <p className="text-muted-foreground">Enviar confirmações de pedidos, atualizações de entrega e newsletters (com opção de cancelamento)</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Suporte ao Cliente</h4>
                  <p className="text-muted-foreground">Responder dúvidas, solicitações e fornecer assistência técnica</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Melhorias no Site</h4>
                  <p className="text-muted-foreground">Analisar comportamento de navegação para otimizar funcionalidades e conteúdo</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Segurança</h4>
                  <p className="text-muted-foreground">Detectar e prevenir fraudes, atividades maliciosas e violações de segurança</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Cumprimento Legal</h4>
                  <p className="text-muted-foreground">Atender obrigações legais, regulatórias e fiscais</p>
                </div>
              </div>
            </div>

            {/* 3. Base Legal */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-purple-500" />
                3. Base Legal para o Tratamento de Dados
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Fundamentamos o tratamento dos seus dados pessoais nas seguintes bases legais previstas na LGPD:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">⚖️ Consentimento</h4>
                  <p className="text-sm text-muted-foreground">Quando você autoriza expressamente o tratamento</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">📋 Execução de Contrato</h4>
                  <p className="text-sm text-muted-foreground">Para cumprir obrigações contratuais de compra e venda</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">⚠️ Obrigação Legal</h4>
                  <p className="text-sm text-muted-foreground">Quando necessário para cumprir legislação aplicável</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">🎯 Legítimo Interesse</h4>
                  <p className="text-sm text-muted-foreground">Para fins de segurança, prevenção de fraudes e melhorias no serviço</p>
                </div>
              </div>
            </div>

            {/* 4. Compartilhamento */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl p-8 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-orange-500" />
                4. Compartilhamento de Dados
              </h2>
              
              <p className="text-muted-foreground mb-6">
                <strong className="text-orange-600 dark:text-orange-400">Não vendemos, alugamos ou divulgamos seus dados pessoais a terceiros para fins comerciais.</strong> Compartilhamos informações apenas quando estritamente necessário:
              </p>

              <div className="space-y-4">
                <div className="bg-background/50 p-5 rounded-lg border-l-2 border-orange-400">
                  <h4 className="font-bold text-foreground mb-2">🚚 Empresas de Logística</h4>
                  <p className="text-sm text-muted-foreground">Para processamento e entrega de pedidos (Correios, transportadoras)</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg border-l-2 border-orange-400">
                  <h4 className="font-bold text-foreground mb-2">💳 Processadores de Pagamento</h4>
                  <p className="text-sm text-muted-foreground">Para transações financeiras seguras (PagSeguro, Stripe, etc.)</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg border-l-2 border-orange-400">
                  <h4 className="font-bold text-foreground mb-2">📧 Plataformas de E-mail Marketing</h4>
                  <p className="text-sm text-muted-foreground">Para envio de newsletters (apenas com seu consentimento)</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg border-l-2 border-orange-400">
                  <h4 className="font-bold text-foreground mb-2">⚖️ Autoridades Legais</h4>
                  <p className="text-sm text-muted-foreground">Quando exigido por lei ou ordem judicial</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Importante:</strong> Todos os parceiros são contratualmente obrigados a manter a confidencialidade e segurança dos seus dados.
                </p>
              </div>
            </div>

            {/* 5. Direitos dos Titulares */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl p-8 border-l-4 border-indigo-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-indigo-500" />
                5. Seus Direitos (LGPD)
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Como titular de dados pessoais, você possui os seguintes direitos garantidos pela LGPD:
              </p>

              <div className="grid gap-4">
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">✓ Confirmação e Acesso</h4>
                  <p className="text-sm text-muted-foreground">Confirmar se tratamos seus dados e solicitar acesso às informações</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">✓ Correção</h4>
                  <p className="text-sm text-muted-foreground">Solicitar a correção de dados incompletos, inexatos ou desatualizados</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">✓ Anonimização, Bloqueio ou Eliminação</h4>
                  <p className="text-sm text-muted-foreground">Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">✓ Portabilidade</h4>
                  <p className="text-sm text-muted-foreground">Receber seus dados em formato estruturado e interoperável</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">✓ Revogação do Consentimento</h4>
                  <p className="text-sm text-muted-foreground">Retirar seu consentimento a qualquer momento</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">✓ Oposição ao Tratamento</h4>
                  <p className="text-sm text-muted-foreground">Opor-se ao tratamento realizado com base em legítimo interesse</p>
                </div>
              </div>

              <div className="mt-6 p-6 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
                <h4 className="font-bold text-foreground mb-3">📬 Como exercer seus direitos:</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Entre em contato através do e-mail: <strong className="text-indigo-600 dark:text-indigo-400">contato@genoxidil.blog</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Ou pelo WhatsApp: <strong className="text-indigo-600 dark:text-indigo-400">(12) 98251-9116</strong>
                </p>
              </div>
            </div>

            {/* 6. Segurança */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 rounded-xl p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lock className="w-8 h-8 text-red-500" />
                6. Segurança dos Dados
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Implementamos medidas técnicas e administrativas robustas para proteger seus dados contra acessos não autorizados:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">🔐 Criptografia SSL/TLS</h4>
                  <p className="text-sm text-muted-foreground">Todas as transmissões de dados são criptografadas</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">🛡️ Firewalls</h4>
                  <p className="text-sm text-muted-foreground">Proteção contra invasões e ataques cibernéticos</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">👤 Controle de Acesso</h4>
                  <p className="text-sm text-muted-foreground">Acesso restrito apenas a funcionários autorizados</p>
                </div>
                
                <div className="bg-background/50 p-5 rounded-lg">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">📊 Monitoramento</h4>
                  <p className="text-sm text-muted-foreground">Auditoria contínua de atividades suspeitas</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/20 rounded-lg">
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Aviso:</strong> Nenhum método de transmissão pela Internet é 100% seguro. Embora nos esforcemos para proteger seus dados, não podemos garantir segurança absoluta.</span>
                </p>
              </div>
            </div>

            {/* 7. Retenção de Dados */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-xl p-8 border-l-4 border-yellow-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-600" />
                7. Retenção de Dados
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Mantemos seus dados pessoais pelo tempo necessário para:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                  <span>Cumprir as finalidades descritas nesta Política</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                  <span>Atender obrigações legais, regulatórias, contratuais e fiscais (normalmente 5 anos conforme legislação tributária)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                  <span>Resolver disputas e fazer cumprir nossos acordos</span>
                </li>
              </ul>

              <p className="text-sm text-muted-foreground bg-background/50 p-4 rounded-lg">
                Após o período de retenção, os dados serão excluídos ou anonimizados de forma segura e irreversível.
              </p>
            </div>

            {/* 8. Transferência Internacional */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl p-8 border-l-4 border-teal-500">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-teal-500" />
                8. Transferência Internacional de Dados
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Alguns dos nossos fornecedores de serviços (como plataformas de hospedagem e pagamento) podem estar localizados fora do Brasil.
              </p>

              <p className="text-muted-foreground mb-4">
                Nesses casos, garantimos que:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>A transferência é realizada apenas para países com nível adequado de proteção de dados</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>Contratos com cláusulas de proteção de dados (Standard Contractual Clauses)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-teal-600 dark:text-teal-400">✓</span>
                  <span>Conformidade com as exigências da LGPD e GDPR (regulamento europeu)</span>
                </li>
              </ul>
            </div>

            {/* 9. Menores de Idade */}
            <div className="bg-muted/50 p-8 rounded-xl border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-primary" />
                9. Dados de Menores de Idade
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Nosso site e produtos <strong>não são destinados a menores de 18 anos</strong>. Não coletamos intencionalmente dados pessoais de crianças ou adolescentes sem o consentimento dos pais ou responsáveis legais.
              </p>

              <p className="text-muted-foreground">
                Se identificarmos que coletamos inadvertidamente dados de menores, excluiremos essas informações imediatamente. Caso seja responsável por um menor e acredite que ele forneceu dados pessoais, entre em contato conosco.
              </p>
            </div>

            {/* 10. Contato e DPO */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                10. Encarregado de Dados (DPO) e Contato
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Para dúvidas, solicitações ou exercício dos seus direitos sobre dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📧 E-mail</h4>
                  <p className="text-foreground font-semibold">contato@genoxidil.blog</p>
                  <p className="text-sm text-muted-foreground mt-2">Resposta em até 48 horas úteis</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">📱 WhatsApp</h4>
                  <p className="text-foreground font-semibold">(12) 98251-9116</p>
                  <p className="text-sm text-muted-foreground mt-2">Atendimento de segunda a sexta, 9h às 18h</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Endereço:</strong> São José dos Campos, SP – Brasil
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Genoxidil Brasil</strong> – Comprometidos com a transparência e proteção dos seus dados
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

export default PrivacyPolicy;