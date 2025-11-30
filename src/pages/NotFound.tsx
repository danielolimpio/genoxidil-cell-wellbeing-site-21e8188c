import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, BookOpen, HelpCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const suggestedPages = [
    { name: "Página Inicial", path: "/", icon: Home, description: "Volte para a home" },
    { name: "Produtos", path: "/produtos", icon: Search, description: "Conheça o Genoxidil" },
    { name: "Blog", path: "/blog", icon: BookOpen, description: "Artigos sobre saúde" },
    { name: "FAQ", path: "/faq", icon: HelpCircle, description: "Perguntas frequentes" },
    { name: "Contato", path: "/contato", icon: Phone, description: "Fale conosco" },
  ];

  // Generate breadcrumb from current path
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <>
      <SEO
        title="Página Não Encontrada | Genoxidil"
        description="A página que você está procurando não foi encontrada. Navegue pelo site Genoxidil para encontrar informações sobre saúde celular e longevidade."
        canonical={`https://genoxidil.blog${location.pathname}`}
        robots="noindex, follow"
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl w-full text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Início
                  </Link>
                </li>
                {pathSegments.map((segment, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>/</span>
                    <span className="text-foreground capitalize">
                      {segment.replace(/-/g, ' ')}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>

            {/* 404 Visual */}
            <div className="relative mb-8">
              <h1 className="text-[120px] md:text-[180px] font-bold text-primary/10 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full p-6 shadow-lg">
                  <Search className="w-12 h-12" />
                </div>
              </div>
            </div>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Página Não Encontrada
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Desculpe, a página <span className="font-mono text-sm bg-muted px-2 py-1 rounded">{location.pathname}</span> não existe ou foi movida.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="gap-2">
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Ir para Início
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2" onClick={() => window.history.back()}>
                <button type="button" onClick={() => window.history.back()}>
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </button>
              </Button>
            </div>

            {/* Suggested Pages */}
            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Páginas Sugeridas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {suggestedPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="group flex flex-col items-center p-4 rounded-lg bg-card hover:bg-primary/5 border border-border hover:border-primary/30 transition-all duration-200"
                  >
                    <page.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-foreground text-sm">{page.name}</span>
                    <span className="text-xs text-muted-foreground mt-1">{page.description}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Text */}
            <p className="mt-8 text-sm text-muted-foreground">
              Precisa de ajuda?{" "}
              <a
                href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre o Genoxidil."
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Fale com um especialista
              </a>
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
