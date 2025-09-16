
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe de especialistas está pronta para esclarecer suas dúvidas sobre o Genoxidil 
            e ajudá-lo a alcançar seus objetivos de saúde e bem-estar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Fale Conosco</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(12) 98251-9116</p>
                    <p className="text-sm text-muted-foreground/70">Ligação gratuita</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">(12) 98251-9116</p>
                    <p className="text-sm text-muted-foreground/70">Atendimento via chat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@genoxidil.blog</p>
                    <p className="text-sm text-muted-foreground/70">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                    <p className="text-sm text-muted-foreground/70">Exceto feriados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-2xl p-6">
              <h4 className="text-xl font-bold text-accent-foreground mb-4">Atendimento Especializado</h4>
              <p className="text-accent-foreground/80 mb-4">
                Nossa equipe inclui nutricionistas, farmacêuticos e especialistas em saúde celular 
                prontos para orientá-lo sobre o uso do Genoxidil.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium text-accent-foreground">Especialistas online agora</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envie sua Mensagem</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(12) 98251-9116"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Informações sobre o produto</option>
                    <option>Dúvidas sobre uso</option>
                    <option>Suporte técnico</option>
                    <option>Consultoria nutricional</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite sua mensagem ou dúvida sobre o Genoxidil..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Aceito receber informações sobre produtos e promoções por e-mail e WhatsApp. 
                  Posso cancelar a qualquer momento.
                </label>
              </div>

              <Button 
                type="submit" 
                variant="secondary"
                className="w-full py-3 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-primary/10 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Suporte por Telefone</h4>
            <p className="text-muted-foreground mb-4">
              Fale diretamente com nossos especialistas para esclarecimentos imediatos.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Ligar Agora
            </Button>
          </div>

          <div className="bg-secondary/10 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Chat Online</h4>
            <p className="text-muted-foreground mb-4">
              Converse conosco via WhatsApp para respostas rápidas e personalizadas.
            </p>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Abrir Chat
            </Button>
          </div>

          <div className="bg-accent/10 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Consultoria Gratuita</h4>
            <p className="text-muted-foreground mb-4">
              Agende uma consulta gratuita com nossos nutricionistas especializados.
            </p>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Agendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
