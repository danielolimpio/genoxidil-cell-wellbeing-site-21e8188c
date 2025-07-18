
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Shield } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'Home', href: '#home' },
      { name: 'Sobre', href: '#sobre' },
      { name: 'Produtos', href: '#produtos' },
      { name: 'Blog', href: '#blog' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contato', href: '#contato' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '#privacy' },
      { name: 'Política de Cookies', href: '#cookies' },
      { name: 'Termos de Uso', href: '#terms' },
      { name: 'Política de Transparência', href: '#transparency' },
      { name: 'Política de Reembolso', href: '#refund' }
    ],
    business: [
      { name: 'Promoções', href: '#promotions' },
      { name: 'Afiliados', href: '#affiliates' },
      { name: 'Revenda', href: '#resale' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ];

  return (
    <footer className="bg-gray-800 text-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/f75280e0-b24e-4a95-be18-a24ef4c360d2.png" alt="Genoxidil" className="h-12 w-auto" />
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              O primeiro suplemento alimentar a ativar a proteína Nrf2, promovendo saúde celular 
              e bem-estar através da ciência mais avançada.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">contato@genoxidil.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Legal & Políticas</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Oportunidades</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-4">
                Receba novidades sobre saúde celular e promoções exclusivas.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <button className="w-full bg-accent text-accent-foreground px-4 py-2 rounded font-medium hover:bg-accent/90 transition-all">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-green-400" />
              <div>
                <p className="font-semibold">Produto Certificado</p>
                <p className="text-sm text-gray-400">ANVISA e Boas Práticas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SSL</span>
              </div>
              <div>
                <p className="font-semibold">Compra Segura</p>
                <p className="text-sm text-gray-400">Certificado SSL 256 bits</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">30d</span>
              </div>
              <div>
                <p className="font-semibold">Garantia</p>
                <p className="text-sm text-gray-400">30 dias de satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 Genoxidil by NBN Living. Todos os direitos reservados.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>CNPJ: 12.345.678/0001-90</span>
              <span>•</span>
              <span>Made in Brazil 🇧🇷</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
