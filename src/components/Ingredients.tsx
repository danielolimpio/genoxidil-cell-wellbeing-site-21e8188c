import { ShoppingBag, Clock, Pill } from 'lucide-react';

const Ingredients = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/2704316f-192a-4c7a-ab01-d4af129ec73d.png"
              alt="Genoxidil - Suplemento Alimentar"
              width="512"
              height="512"
              className="max-w-lg w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Content on the right */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ingredientes <span className="text-primary">Genoxidil</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                O Genoxidil Suplemento Alimentar estimulador da Proteína Nrf2 é um polivitáminico 
                de última geração que contém muitos fitonutrientes naturais.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Pill className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Composição</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong>Ingredientes Genoxidil:</strong> Espirulina, ácido ascórbico, niacinamida, 
                licopeno de tomate, ésteres de astaxantina de Haematococcus pluvialis, pantotenato 
                de cálcio, trans-resveratrol sintético, piridoxina, riboflavina, tiamina mononitrato, 
                retinol, ácido fólico, biotina, fitomenadiona, cianocobalamina, agente de massa 
                celulose microcristalina, antiumectante fosfato tricálcico, estabilizante 
                polivinilpirrolidona e corantes clorofila e curcumina.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">Apresentação</h3>
                </div>
                <p className="text-gray-600">
                  30 tabletas de 1.2g cada unidade.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">Modo de uso</h3>
                </div>
                <p className="text-gray-600">
                  Tomar 1 tablete por dia pela manhã.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;