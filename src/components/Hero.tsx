
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Zap, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-800 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Tecnologia Nrf2 Avançada
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Genoxidil
                <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Suplemento do Futuro
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                O primeiro multivitamínico de última geração que ativa a proteína Nrf2, 
                promovendo saúde celular, desintoxicação e bem-estar através da ciência mais avançada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white text-lg px-8 py-3"
              >
                Comprar Agora
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                Certificado
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-orange-500 mr-2" />
                Seguro
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-blue-600 mr-2" />
                Eficaz
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10"></div>
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">G</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Genoxidil</h3>
                    <p className="text-gray-600">Ativação Nrf2</p>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      Disponível
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
