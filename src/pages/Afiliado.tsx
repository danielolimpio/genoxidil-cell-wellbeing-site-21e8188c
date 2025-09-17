import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, TrendingUp, DollarSign, Award, Phone, MessageCircle } from 'lucide-react';

const Afiliado = () => {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5512982519116?text=Olá,%20Gostaria%20de%20saber%20mais%20sobre%20o%20Genoxidil', '_blank');
  };

  const handleAffiliateRegister = () => {
    window.open('https://register.nbnliving.com/danielmoreira', '_blank');
  };

  return (
    <>
      <SEO
        title="Programa de Afiliados NBN Living | Genoxidil - Comissões e Oportunidades"
        description="Torne-se um afiliado NBN Living e ganhe comissões vendendo Genoxidil. Sistema mundial de comissões, cadastro gratuito e plano estruturado de ganhos."
        keywords="afiliado genoxidil, programa afiliados, comissões nbn living, renda extra, marketing multinível"
        canonical="/afiliado"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Programa de Afiliados
                <span className="block text-primary-glow">NBN Living</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Transforme seu network em renda com o sistema mundial de comissões 
                baseado em ativações, recompras e vendas diretas
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold">50%</div>
                  <div className="text-sm opacity-90">Bônus Primeiro Pedido</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold">55%</div>
                  <div className="text-sm opacity-90">Bônus Residual</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold">10%</div>
                  <div className="text-sm opacity-90">Bônus Liderança</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={handleAffiliateRegister}>
                  Cadastrar-se Agora
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white hover:bg-white text-primary" onClick={handleWhatsAppContact}>
                  Falar com Especialista
                  <MessageCircle className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-16">
          <div className="container mx-auto px-4">
            
            {/* Introduction */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Plano de Comissões de Afiliados NBN Living
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A NBN Living oferece um sistema mundial de comissões para afiliados baseado em 
                  ativações, recompras e vendas diretas, com um cadastro gratuito e um plano de 
                  comissões voltado para expandir as oportunidades de ganhos e recompensas dos distribuidores.
                </p>
              </div>
            </section>

            {/* 1. Ativações Iniciais */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold mb-6 text-green-800">
                  <Award className="inline-block mr-3 w-8 h-8" />
                  1. Ativações Iniciais
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-700">Bônus de Primeiro Pedido</h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                      <p className="text-gray-700">
                        Para cada indicado direto que realiza a ativação inicial com um pedido, 
                        você recebe 50% de bônus sobre os pontos do primeiro pedido.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-700">Bônus de Liderança (Exclusivo para Diamantes)</h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">10%</div>
                      <p className="text-gray-700 mb-4">
                        Distribuído em 5 níveis, com 2% por nível, disponível para distribuidores 
                        no nível Diamante Quantum que possuem 5 indicados diretos ativos.
                      </p>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-green-100">
                            <tr>
                              <th className="p-2 text-left">Nível de Liderança</th>
                              <th className="p-2 text-center">Percentual</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[1, 2, 3, 4, 5].map(level => (
                              <tr key={level} className="border-b">
                                <td className="p-2">{level}º Nível</td>
                                <td className="p-2 text-center font-semibold">2%</td>
                              </tr>
                            ))}
                            <tr className="bg-green-50 font-bold">
                              <td className="p-2">Total</td>
                              <td className="p-2 text-center">10%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Bônus de Recompras */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold mb-6 text-blue-800">
                  <TrendingUp className="inline-block mr-3 w-8 h-8" />
                  2. Bônus de Recompras
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-700">Bônus Residual e Excedentes</h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">55%</div>
                      <p className="text-gray-700 mb-4">
                        Bônus residual e excedente distribuído ao longo de 10 níveis.
                      </p>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-blue-100">
                            <tr>
                              <th className="p-2 text-left">Nível</th>
                              <th className="p-2 text-center">Percentual</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2">1º ao 5º Nível</td>
                              <td className="p-2 text-center font-semibold">10% por nível</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">6º ao 10º Nível</td>
                              <td className="p-2 text-center font-semibold">5% por nível</td>
                            </tr>
                            <tr className="bg-blue-50 font-bold">
                              <td className="p-2">Total</td>
                              <td className="p-2 text-center">55%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-700">Bônus Pool Infinito</h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">2%</div>
                      <p className="text-gray-700">
                        Bônus global de 2% do volume mundial rateado pelo volume proporcional da equipe, 
                        destinado aos distribuidores que alcançam o nível Diamante INFINITI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Projeção de Comissões */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold mb-6 text-purple-800">
                  <DollarSign className="inline-block mr-3 w-8 h-8" />
                  3. Projeção de Comissões no Sistema
                </h3>
                
                <p className="text-purple-700 mb-6">Com Base nas Ativações (20 Ativações Diretas):</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-700 mb-2">1 Colágeno + 1 Genoxidil</h4>
                    <p className="text-sm text-gray-600 mb-3">Pacote Saúde e Bem-Estar</p>
                    <div className="text-2xl font-bold text-purple-600">R$ 2.970</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-700 mb-2">5 Genoxidil</h4>
                    <p className="text-sm text-gray-600 mb-3">Pacote Genoxidil em Lote</p>
                    <div className="text-2xl font-bold text-purple-600">R$ 12.140</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-700 mb-2">Saúde Integral</h4>
                    <p className="text-sm text-gray-600 mb-3">Pacote Básico de Saúde</p>
                    <div className="text-2xl font-bold text-purple-600">R$ 1.350</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-4 text-purple-700">Projeção de Ganhos com Recompras (20 Recompras):</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-purple-700 mb-2">1 Colágeno + 1 Genoxidil</h5>
                    <div className="text-xl font-bold text-purple-600">R$ 297</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-purple-700 mb-2">5 Genoxidil</h5>
                    <div className="text-xl font-bold text-purple-600">R$ 1.215</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-purple-700 mb-2">Pacote Saúde Integral</h5>
                    <div className="text-xl font-bold text-purple-600">R$ 270</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Projeção com Vendas Diretas */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold mb-6 text-orange-800">
                  <TrendingUp className="inline-block mr-3 w-8 h-8" />
                  4. Projeção com Vendas Diretas (Por Dia e Mês)
                </h3>
                
                <p className="text-orange-700 mb-6">
                  Os distribuidores também têm a oportunidade de adquirir packs de negócios e revendê-los. 
                  Abaixo estão projeções de ganhos mensais com diferentes volumes de vendas.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-orange-700">Vendas Diretas – Genoxidil ou Colágeno Max (Preço de 1 Frasco):</h4>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full bg-white rounded-lg shadow-sm">
                    <thead className="bg-orange-100">
                      <tr>
                        <th className="p-4 text-left">Quantidade Vendida</th>
                        <th className="p-4 text-center">Frascos por Dia</th>
                        <th className="p-4 text-center">Vendas Mensais</th>
                        <th className="p-4 text-center">Ganhos Estimados</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4">1 Frasco</td>
                        <td className="p-4 text-center">1</td>
                        <td className="p-4 text-center">22</td>
                        <td className="p-4 text-center font-bold text-orange-600">R$ 4.290</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">2 Frascos</td>
                        <td className="p-4 text-center">2</td>
                        <td className="p-4 text-center">44</td>
                        <td className="p-4 text-center font-bold text-orange-600">R$ 8.580</td>
                      </tr>
                      <tr>
                        <td className="p-4">5 Frascos</td>
                        <td className="p-4 text-center">5</td>
                        <td className="p-4 text-center">110</td>
                        <td className="p-4 text-center font-bold text-orange-600">R$ 21.450</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-orange-700 mb-3">Projeção com Packs de Negócios:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Packs de 10 Frascos:</strong> Adquirindo em packs maiores, como 10 frascos, e revendendo no sistema, os distribuidores podem otimizar os lucros.</li>
                    <li><strong>Projeção Idêntica para Colágeno Max:</strong> As vendas diárias e mensais de Colágeno Max seguem a mesma projeção de ganhos apresentada para o Genoxidil.</li>
                  </ul>
                  
                  <p className="mt-4 text-orange-700 font-medium">
                    Este plano de comissões permite ganhos diversificados e crescentes conforme a rede e o volume de vendas aumentam, 
                    oferecendo oportunidades atraentes para os distribuidores.
                  </p>
                </div>
              </div>
            </section>

            {/* Como Começar */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <Users className="inline-block mr-3 w-8 h-8" />
                  Como Começar com a NBN Living
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold text-xl">1</span>
                    </div>
                    <h4 className="font-semibold mb-3">Fale com Quem Te Convidou</h4>
                    <p className="text-sm text-gray-600">
                      Entre em contato com a pessoa que te apresentou a NBN Living para esclarecer dúvidas e receber orientações iniciais.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">2</span>
                    </div>
                    <h4 className="font-semibold mb-3">Solicite Seu Link de Cadastro</h4>
                    <p className="text-sm text-gray-600">
                      Peça o link de cadastro para fazer parte oficialmente da equipe e começar sua jornada com a NBN Living.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold text-xl">3</span>
                    </div>
                    <h4 className="font-semibold mb-3">Adquira Seu Pedido Hoje Mesmo</h4>
                    <p className="text-sm text-gray-600">
                      Realize seu primeiro pedido para ativar seu cadastro e começar a desfrutar dos produtos e programas de ganho.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange-600 font-bold text-xl">4</span>
                    </div>
                    <h4 className="font-semibold mb-3">Marque Sua Primeira Reunião</h4>
                    <p className="text-sm text-gray-600">
                      Agende uma reunião de negócios com seu mentor para entender estratégias e alcançar seus objetivos.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Inspirational Quote */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-xl p-8 text-center">
                <blockquote className="text-xl md:text-2xl font-medium italic">
                  "As bênçãos que você recebe em sua vida são diretamente proporcionais 
                  à quantidade de famílias que você ajuda diariamente."
                </blockquote>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-white border border-border rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Pronto para Começar?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Esses passos iniciais ajudarão a estabelecer uma base forte para o seu sucesso na NBN Living! 
                  Entre em contato conosco para esclarecer dúvidas ou fazer seu cadastro.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={handleAffiliateRegister}>
                    Cadastrar-se como Afiliado
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleWhatsAppContact}>
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Tirar Dúvidas via WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleWhatsAppContact}>
                    <Phone className="mr-2 w-5 h-5" />
                    (12) 98251-9116
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Afiliado;