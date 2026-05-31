import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Home, FileText, BookOpen, Scale, HelpCircle, Users, Mail, Map } from "lucide-react";

const Sitemap = () => {
  const sitemapData = {
    principal: {
      title: "Páginas Principais",
      icon: Home,
      links: [
        { name: "Home", href: "/", description: "Página inicial do Genoxidil" },
        { name: "Sobre Nós", href: "/sobre", description: "Conheça a história e missão da empresa" },
        { name: "Produtos", href: "/produtos", description: "Catálogo completo de produtos" },
        { name: "Blog", href: "/blog", description: "Artigos e conteúdos sobre saúde" },
        { name: "FAQ", href: "/faq", description: "Perguntas frequentes" },
        { name: "Contato", href: "/contato", description: "Entre em contato conosco" },
        { name: "Programa de Afiliados", href: "/afiliado", description: "Seja um afiliado Genoxidil" },
      ]
    },
    artigos: {
      title: "Artigos do Blog",
      icon: BookOpen,
      links: [
        { name: "Genoxidil para Autismo", href: "/genoxidil-autismo", description: "Benefícios do Genoxidil para pessoas com autismo" },
        { name: "Proteína Nrf2", href: "/proteina-nrf2", description: "O guardião antioxidante das células" },
        { name: "Estresse Oxidativo", href: "/estresse-oxidativo", description: "Entenda o estresse oxidativo e seus efeitos" },
        { name: "Antioxidantes Naturais", href: "/antioxidantes-naturais", description: "Comparativo entre antioxidantes naturais e sintéticos" },
        { name: "Saúde Celular", href: "/saude-celular", description: "A importância da saúde das células" },
        { name: "Vitaminas do Complexo B", href: "/vitaminas-complexo-b", description: "Benefícios das vitaminas B para o organismo" },
        { name: "Desintoxicação Natural", href: "/desintoxicacao-natural", description: "Métodos naturais de desintoxicação" },
      ]
    },
    categorias: {
      title: "Categorias de Conteúdo",
      icon: FileText,
      links: [
        { name: "Saúde e Bem-estar", href: "/blog", description: "Artigos sobre qualidade de vida" },
        { name: "Ciência e Pesquisa", href: "/proteina-nrf2", description: "Estudos científicos sobre Nrf2" },
        { name: "Nutrição", href: "/vitaminas-complexo-b", description: "Informações nutricionais" },
        { name: "Antioxidantes", href: "/antioxidantes-naturais", description: "Tudo sobre antioxidantes" },
        { name: "Desintoxicação", href: "/desintoxicacao-natural", description: "Processos de limpeza do organismo" },
      ]
    },
    legal: {
      title: "Páginas Legais",
      icon: Scale,
      links: [
        { name: "Política de Privacidade", href: "/politica-de-privacidade", description: "Como tratamos seus dados pessoais" },
        { name: "Política de Cookies", href: "/politica-de-cookies", description: "Uso de cookies no site" },
        { name: "Termos de Uso", href: "/termos-de-uso", description: "Termos e condições de uso" },
        { name: "Política de Transparência", href: "/politica-de-transparencia", description: "Nossa política de transparência" },
        { name: "Política de Reembolso", href: "/politica-de-reembolso", description: "Condições para reembolso" },
        { name: "Sitemap", href: "/sitemap", description: "Mapa do site" },
      ]
    },
    recursos: {
      title: "Recursos e Suporte",
      icon: HelpCircle,
      links: [
        { name: "FAQ - Perguntas Frequentes", href: "/faq", description: "Tire suas dúvidas" },
        { name: "Contato e Suporte", href: "/contato", description: "Atendimento ao cliente" },
        { name: "Programa de Afiliados", href: "/afiliado", description: "Ganhe comissões indicando" },
      ]
    }
  };

  const allUrls = [
    "https://genoxidil.blog/",
    "https://genoxidil.blog/sobre/",
    "https://genoxidil.blog/produtos/",
    "https://genoxidil.blog/blog/",
    "https://genoxidil.blog/faq",
    "https://genoxidil.blog/contato",
    "https://genoxidil.blog/afiliado",
    "https://genoxidil.blog/genoxidil-autismo",
    "https://genoxidil.blog/proteina-nrf2",
    "https://genoxidil.blog/estresse-oxidativo",
    "https://genoxidil.blog/antioxidantes-naturais",
    "https://genoxidil.blog/saude-celular",
    "https://genoxidil.blog/vitaminas-complexo-b",
    "https://genoxidil.blog/desintoxicacao-natural",
    "https://genoxidil.blog/politica-de-privacidade",
    "https://genoxidil.blog/politica-de-cookies",
    "https://genoxidil.blog/termos-de-uso",
    "https://genoxidil.blog/politica-de-transparencia",
    "https://genoxidil.blog/politica-de-reembolso",
    "https://genoxidil.blog/sitemap",
  ];

  return (
    <>
      <SEO
        title="Sitemap | Mapa do Site Genoxidil - Todas as Páginas"
        description="Navegue por todas as páginas do site Genoxidil. Encontre rapidamente artigos sobre saúde, produtos, políticas e informações de contato."
        canonical="https://genoxidil.blog/sitemap"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Map className="w-10 h-10 text-orange-400" />
                <h1 className="text-4xl md:text-5xl font-bold">Sitemap</h1>
              </div>
              <p className="text-xl text-blue-100 mt-4">
                Mapa completo do site Genoxidil com todas as páginas e recursos disponíveis
              </p>
              <p className="text-blue-200 mt-2">
                Total de {allUrls.length} páginas indexadas
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(sitemapData).map(([key, category]) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                      </div>
                      <ul className="space-y-3">
                        {category.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              className="group flex flex-col p-3 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                              <span className="font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                                {link.name}
                              </span>
                              <span className="text-sm text-gray-500 mt-1">
                                {link.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* All URLs List */}
              <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-7 h-7 text-blue-600" />
                  Lista Completa de URLs ({allUrls.length})
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 font-mono text-sm">
                  <ul className="space-y-2">
                    {allUrls.map((url, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-gray-600 select-none">{index + 1}.</span>
                        <a
                          href={url}
                          className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* XML Sitemap Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Para mecanismos de busca, acesse o sitemap XML:
                </p>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Abrir sitemap.xml
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Sitemap;
