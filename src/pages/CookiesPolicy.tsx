import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Política de Cookies | Genoxidil"
        description="Saiba como utilizamos cookies e tecnologias semelhantes para melhorar sua experiência no site Genoxidil."
        canonical="https://genoxidil.blog/politica-de-cookies"
      />
      <Header />
      <main className="pt-24">
        <section className="container mx-auto px-4">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            <h1>Política de Cookies</h1>
            <p><strong>Última atualização:</strong> 15 de janeiro de 2025</p>
            
            <p className="lead">A Genoxidil utiliza cookies e tecnologias similares para melhorar sua experiência de navegação, personalizar conteúdo, analisar o tráfego do site e fornecer funcionalidades de redes sociais. Esta política explica o que são cookies, como os utilizamos e como você pode gerenciá-los.</p>

            <h2>1. O Que São Cookies?</h2>
            
            <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone, tablet) quando você visita um site. Eles contêm informações sobre sua navegação e permitem que o site "lembre" de suas preferências e ações ao longo do tempo.</p>

            <h3>Tipos de Arquivos Utilizados</h3>
            <ul>
              <li><strong>Cookies HTTP:</strong> Armazenados pelo navegador e enviados em cada requisição ao servidor</li>
              <li><strong>Local Storage:</strong> Armazenamento local persistente de dados no navegador</li>
              <li><strong>Session Storage:</strong> Armazenamento temporário de dados durante a sessão de navegação</li>
              <li><strong>Pixels e Web Beacons:</strong> Pequenas imagens transparentes que rastreiam interações com e-mails e páginas</li>
              <li><strong>Scripts de Terceiros:</strong> Códigos JavaScript de parceiros integrados ao site</li>
            </ul>

            <h2>2. Por Que Utilizamos Cookies?</h2>
            
            <p>Utilizamos cookies e tecnologias similares para diversos propósitos legítimos que melhoram sua experiência e permitem o funcionamento adequado do site:</p>

            <h3>Funcionalidades Essenciais</h3>
            <ul>
              <li>Manter você autenticado durante sua sessão</li>
              <li>Lembrar itens no carrinho de compras</li>
              <li>Garantir segurança e prevenir fraudes</li>
              <li>Permitir o funcionamento de formulários e processos de checkout</li>
            </ul>

            <h3>Personalização da Experiência</h3>
            <ul>
              <li>Lembrar suas preferências de idioma, moeda e região</li>
              <li>Recordar produtos visualizados anteriormente</li>
              <li>Adaptar conteúdo às suas preferências e interesses</li>
              <li>Oferecer recomendações de produtos personalizadas</li>
            </ul>

            <h3>Análise e Performance</h3>
            <ul>
              <li>Entender como visitantes interagem com o site</li>
              <li>Identificar páginas mais populares e padrões de navegação</li>
              <li>Detectar e corrigir erros técnicos</li>
              <li>Medir a efetividade de campanhas de marketing</li>
              <li>Otimizar velocidade de carregamento e desempenho</li>
            </ul>

            <h3>Publicidade e Marketing</h3>
            <ul>
              <li>Exibir anúncios relevantes baseados em seu comportamento de navegação</li>
              <li>Medir o retorno sobre investimento (ROI) de campanhas publicitárias</li>
              <li>Evitar a exibição repetitiva dos mesmos anúncios</li>
              <li>Realizar remarketing e retargeting personalizado</li>
            </ul>

            <h2>3. Categorias de Cookies Utilizados</h2>

            <h3>3.1 Cookies Estritamente Necessários</h3>
            <p>Estes cookies são essenciais para o funcionamento do site e não podem ser desativados em nossos sistemas. Geralmente, são configurados apenas em resposta a ações suas, como definir preferências de privacidade, fazer login ou preencher formulários.</p>
            
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Finalidade</th>
                  <th>Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Identificação de sessão do usuário</td>
                  <td>Sessão</td>
                </tr>
                <tr>
                  <td>csrf_token</td>
                  <td>Proteção contra ataques CSRF</td>
                  <td>Sessão</td>
                </tr>
                <tr>
                  <td>cart_items</td>
                  <td>Manutenção do carrinho de compras</td>
                  <td>7 dias</td>
                </tr>
                <tr>
                  <td>user_preferences</td>
                  <td>Preferências de idioma e região</td>
                  <td>1 ano</td>
                </tr>
              </tbody>
            </table>

            <p><strong>Base Legal:</strong> Legítimo interesse e execução contratual (não requer consentimento prévio).</p>

            <h3>3.2 Cookies de Performance e Análise</h3>
            <p>Estes cookies nos permitem contar visitas e fontes de tráfego para medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são mais e menos populares e como os visitantes se movem pelo site.</p>

            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Fornecedor</th>
                  <th>Finalidade</th>
                  <th>Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics</td>
                  <td>Identificação de visitantes únicos</td>
                  <td>2 anos</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics</td>
                  <td>Identificação de sessões</td>
                  <td>24 horas</td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>Google Analytics</td>
                  <td>Controle de taxa de requisições</td>
                  <td>1 minuto</td>
                </tr>
              </tbody>
            </table>

            <p><strong>Base Legal:</strong> Consentimento do usuário.</p>

            <h3>3.3 Cookies Funcionais</h3>
            <p>Estes cookies permitem que o site forneça funcionalidades e personalização aprimoradas. Podem ser definidos por nós ou por terceiros cujos serviços adicionamos às nossas páginas.</p>

            <ul>
              <li><strong>Preferências de Layout:</strong> Lembrança de visualização em grid ou lista</li>
              <li><strong>Chat de Atendimento:</strong> Histórico de conversas e preferências</li>
              <li><strong>Vídeos Incorporados:</strong> YouTube, Vimeo para exibição de conteúdo multimídia</li>
              <li><strong>Mapas Interativos:</strong> Google Maps para localização de pontos de venda</li>
            </ul>

            <p><strong>Base Legal:</strong> Consentimento do usuário.</p>

            <h3>3.4 Cookies de Marketing e Publicidade</h3>
            <p>Estes cookies podem ser definidos através do nosso site por nossos parceiros de publicidade. Podem ser usados para construir um perfil sobre seus interesses e mostrar anúncios relevantes em outros sites.</p>

            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Fornecedor</th>
                  <th>Finalidade</th>
                  <th>Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_fbp</td>
                  <td>Facebook Pixel</td>
                  <td>Rastreamento de conversões e remarketing</td>
                  <td>3 meses</td>
                </tr>
                <tr>
                  <td>fr</td>
                  <td>Facebook</td>
                  <td>Publicidade direcionada</td>
                  <td>3 meses</td>
                </tr>
                <tr>
                  <td>IDE</td>
                  <td>Google DoubleClick</td>
                  <td>Publicidade comportamental</td>
                  <td>1 ano</td>
                </tr>
              </tbody>
            </table>

            <p><strong>Base Legal:</strong> Consentimento do usuário.</p>

            <h3>3.5 Cookies de Redes Sociais</h3>
            <p>Estes cookies são definidos por serviços de redes sociais que adicionamos ao site para permitir que você compartilhe nosso conteúdo com amigos e redes.</p>

            <ul>
              <li><strong>Facebook:</strong> Botões de compartilhamento e plug-ins sociais</li>
              <li><strong>Instagram:</strong> Feed de conteúdo incorporado</li>
              <li><strong>YouTube:</strong> Vídeos incorporados e interações</li>
              <li><strong>WhatsApp:</strong> Botão de compartilhamento rápido</li>
            </ul>

            <p><strong>Base Legal:</strong> Consentimento do usuário.</p>

            <h2>4. Cookies de Terceiros</h2>
            
            <p>Alguns dos cookies em nosso site são colocados por serviços de terceiros que aparecem em nossas páginas. Não temos controle sobre esses cookies e recomendamos que você consulte as políticas de privacidade desses terceiros:</p>

            <h3>Principais Parceiros</h3>
            <ul>
              <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade</a></li>
              <li><strong>Google Ads:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Como o Google usa cookies em publicidade</a></li>
              <li><strong>Facebook:</strong> <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">Política de Dados</a></li>
              <li><strong>YouTube:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade</a></li>
            </ul>

            <h2>5. Como Gerenciar e Desativar Cookies</h2>
            
            <p>Você tem o direito de aceitar ou recusar cookies. Pode exercer suas preferências de cookies através das seguintes opções:</p>

            <h3>5.1 Através do Nosso Banner de Cookies</h3>
            <p>Ao visitar nosso site pela primeira vez, exibimos um banner de consentimento onde você pode:</p>
            <ul>
              <li>Aceitar todos os cookies</li>
              <li>Recusar cookies não essenciais</li>
              <li>Personalizar suas preferências por categoria</li>
              <li>Obter mais informações sobre cada tipo de cookie</li>
            </ul>
            <p>Você pode alterar suas preferências a qualquer momento clicando no ícone de configuração de cookies no rodapé do site.</p>

            <h3>5.2 Através das Configurações do Navegador</h3>
            <p>A maioria dos navegadores permite que você recuse ou aceite cookies. Os métodos variam de navegador para navegador. Consulte os links abaixo para instruções específicas:</p>

            <ul>
              <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Gerenciar cookies</a></li>
              <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/pt-BR/kb/desative-cookies-terceiros-impedir-rastreamento" target="_blank" rel="noopener noreferrer">Bloquear cookies</a></li>
              <li><strong>Safari:</strong> <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Gerenciar cookies e dados</a></li>
              <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Excluir cookies</a></li>
              <li><strong>Opera:</strong> <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer">Preferências de cookies</a></li>
            </ul>

            <h3>5.3 Ferramentas de Opt-Out de Publicidade</h3>
            <p>Para desativar cookies de publicidade comportamental de múltiplos fornecedores, você pode usar:</p>
            <ul>
              <li><strong>Your Online Choices (Europa):</strong> <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">www.youronlinechoices.com</a></li>
              <li><strong>Network Advertising Initiative (EUA):</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></li>
              <li><strong>Digital Advertising Alliance (EUA):</strong> <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a></li>
            </ul>

            <h3>5.4 Google Analytics Opt-Out</h3>
            <p>Você pode impedir que o Google Analytics reconheça suas visitas ao nosso site instalando o complemento de navegador:</p>
            <p><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Complemento de desativação do Google Analytics</a></p>

            <h3>Consequências de Desativar Cookies</h3>
            <p>Se você optar por desativar cookies, algumas funcionalidades do site podem ser afetadas:</p>
            <ul>
              <li>❌ Não conseguir fazer login ou manter-se autenticado</li>
              <li>❌ Perder itens do carrinho de compras entre sessões</li>
              <li>❌ Não salvar preferências de idioma, moeda ou região</li>
              <li>❌ Ter uma experiência de navegação menos personalizada</li>
              <li>❌ Ver anúncios menos relevantes para seus interesses</li>
            </ul>

            <p><strong>Importante:</strong> Cookies estritamente necessários não podem ser desativados através das configurações do site, pois são essenciais para o funcionamento básico.</p>

            <h2>6. Duração dos Cookies</h2>
            
            <p>Os cookies que utilizamos têm diferentes períodos de validade:</p>

            <h3>Cookies de Sessão</h3>
            <p>São cookies temporários que expiram quando você fecha o navegador. Geralmente usados para funcionalidades essenciais como autenticação e carrinho de compras.</p>

            <h3>Cookies Persistentes</h3>
            <p>Permanecem no seu dispositivo por um período determinado ou até você excluí-los manualmente. Usados para lembrar preferências, melhorar a experiência e análise de comportamento.</p>

            <table>
              <thead>
                <tr>
                  <th>Duração</th>
                  <th>Tipo de Cookie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sessão</td>
                  <td>Autenticação, segurança, carrinho</td>
                </tr>
                <tr>
                  <td>24 horas - 7 dias</td>
                  <td>Análise de curto prazo, campanhas temporárias</td>
                </tr>
                <tr>
                  <td>1 mês - 1 ano</td>
                  <td>Preferências, personalização, análise</td>
                </tr>
                <tr>
                  <td>1 ano - 2 anos</td>
                  <td>Identificação de visitantes recorrentes, marketing</td>
                </tr>
              </tbody>
            </table>

            <h2>7. Atualizações na Política de Cookies</h2>
            
            <p>Podemos atualizar esta Política de Cookies ocasionalmente para refletir mudanças em nossas práticas ou por razões operacionais, legais ou regulatórias. A data da última atualização será sempre indicada no topo desta página.</p>

            <p>Recomendamos que você revise esta política regularmente. Alterações significativas serão comunicadas através de um aviso destacado em nosso site antes da implementação.</p>

            <h2>8. Conformidade com a LGPD</h2>
            
            <p>Esta Política de Cookies está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e com o Marco Civil da Internet (Lei nº 12.965/2014).</p>

            <p>O uso de cookies que não sejam estritamente necessários está condicionado ao seu consentimento livre, informado e inequívoco. Você pode retirar seu consentimento a qualquer momento através das configurações de cookies.</p>

            <h2>9. Mais Informações e Contato</h2>
            
            <p>Se você tiver dúvidas sobre nossa utilização de cookies ou sobre esta política, entre em contato conosco:</p>

            <ul>
              <li><strong>E-mail:</strong> <a href="mailto:contato@genoxidil.blog">contato@genoxidil.blog</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/5512982519116" target="_blank" rel="noopener noreferrer">(12) 98251-9116</a></li>
              <li><strong>Formulário de Contato:</strong> <a href="/contato">Página de Contato</a></li>
            </ul>

            <p>Para informações mais detalhadas sobre como tratamos seus dados pessoais, consulte nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.</p>

            <hr className="my-8" />

            <p className="text-sm text-muted-foreground"><strong>Genoxidil - NBN Living</strong><br />
            Transparência e respeito à sua privacidade são nossa prioridade.<br />
            <a href="mailto:contato@genoxidil.blog">contato@genoxidil.blog</a> | <a href="https://wa.me/5512982519116" target="_blank" rel="noopener noreferrer">(12) 98251-9116</a></p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
