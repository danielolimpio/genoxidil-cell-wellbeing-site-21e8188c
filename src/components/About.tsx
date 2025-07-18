
import { Microscope, Dna, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que é o <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Genoxidil</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um suplemento alimentar revolucionário desenvolvido pela NBN Living que ativa a proteína Nrf2, 
            o antioxidante natural mais poderoso do seu corpo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Tecnologia Nrf2</h3>
              <p className="text-gray-600 leading-relaxed">
                A proteína Nrf2 é um fator de transcrição crucial que regula a resposta do organismo ao estresse oxidativo. 
                Quando ativada, ela aumenta a produção de enzimas antioxidantes naturais, protegendo suas células contra danos 
                e promovendo o rejuvenescimento celular.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Microscope className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Pesquisa Avançada</h4>
                <p className="text-sm text-gray-600">Base científica sólida</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <Dna className="w-8 h-8 text-orange-500 mb-2" />
                <h4 className="font-semibold text-gray-900">Ação Celular</h4>
                <p className="text-sm text-gray-600">Proteção molecular</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 text-center">Como Funciona</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Ativação</h5>
                    <p className="text-sm text-gray-600">Fitonutrientes ativam a proteína Nrf2</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Produção</h5>
                    <p className="text-sm text-gray-600">Aumento de enzimas antioxidantes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Proteção</h5>
                    <p className="text-sm text-gray-600">Defesa celular contra radicais livres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Composição Científica</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h5 className="font-semibold text-gray-900 mb-2">Antioxidantes Naturais</h5>
              <p className="text-sm text-gray-600">Espirulina, Astaxantina, Licopeno, Trans-resveratrol</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <Zap className="w-10 h-10 text-orange-500 mb-4" />
              <h5 className="font-semibold text-gray-900 mb-2">Complexo Vitamínico</h5>
              <p className="text-sm text-gray-600">Vitaminas A, C, E, Complexo B, K1</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <Microscope className="w-10 h-10 text-blue-600 mb-4" />
              <h5 className="font-semibold text-gray-900 mb-2">Estabilizantes</h5>
              <p className="text-sm text-gray-600">Celulose microcristalina, Fosfato tricálcico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
