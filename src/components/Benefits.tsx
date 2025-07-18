
import { Heart, Brain, Shield, Sparkles, Zap, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Nutrição Celular',
      description: 'Fornece nutrientes essenciais para o bom funcionamento das células, otimizando o metabolismo celular.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Desintoxicação',
      description: 'Ajuda a eliminar toxinas do organismo através da ativação de enzimas de desintoxicação.',
      color: 'orange'
    },
    {
      icon: Sparkles,
      title: 'Ação Antioxidante',
      description: 'Protege as células contra os danos causados pelos radicais livres e estresse oxidativo.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Saúde da Pele, Cabelo e Unhas',
      description: 'Melhora a aparência e a saúde desses tecidos através da nutrição celular específica.',
      color: 'orange'
    },
    {
      icon: Heart,
      title: 'Sistema Imunológico',
      description: 'Fortalece as defesas naturais do corpo, aumentando a resistência a doenças.',
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'Saúde Cognitiva',
      description: 'Melhora a função cerebral, memória e capacidade de concentração.',
      color: 'orange'
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefícios <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Científicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada benefício do Genoxidil é baseado em pesquisas científicas sobre a ativação da proteína Nrf2 
            e seus efeitos no organismo humano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClass = benefit.color === 'blue' ? 'from-blue-600 to-blue-700' : 'from-orange-500 to-orange-600';
            const bgClass = benefit.color === 'blue' ? 'bg-blue-50' : 'bg-orange-50';
            
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-r ${colorClass} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Bem-estar <span className="text-orange-500">Geral</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O Genoxidil contribui para o aumento da energia e vitalidade, promovendo uma sensação 
                geral de bem-estar através da otimização do funcionamento celular.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Aumento da energia natural</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Melhora da vitalidade</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Sensação de bem-estar</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Saúde Cardiovascular</h4>
                <p className="text-gray-600">
                  Promove a saúde do coração e da circulação através da proteção antioxidante 
                  e melhora da função endotelial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
