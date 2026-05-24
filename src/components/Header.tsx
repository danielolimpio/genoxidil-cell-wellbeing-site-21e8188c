
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Afiliado', href: '/afiliado' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md shadow-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/">
              <img 
                src="/lovable-uploads/f75280e0-b24e-4a95-be18-a24ef4c360d2.png" 
                alt="Genoxidil" 
                width="150" 
                height="48" 
                fetchPriority="high"
                className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity" 
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="secondary"
              onClick={() => window.open('https://store.nbnliving.com/danielmoreira', '_blank')}
            >
              Comprar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="secondary" 
                className="mt-4"
                onClick={() => window.open('https://store.nbnliving.com/danielmoreira', '_blank')}
              >
                Comprar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
