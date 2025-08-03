
import { Microscope, Dna, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            O que é o <span className="text-secondary">Genoxidil</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um suplemento alimentar revolucionário desenvolvido pela NBN Living que ativa a proteína Nrf2, 
            o antioxidante natural mais poderoso do seu corpo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Tecnologia Nrf2</h3>
              <p className="text-muted-foreground leading-relaxed">
                A proteína Nrf2 é um fator de transcrição crucial que regula a resposta do organismo ao estresse oxidativo. 
                Quando ativada, ela aumenta a produção de enzimas antioxidantes naturais, protegendo suas células contra danos 
                e promovendo o rejuvenescimento celular.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Microscope className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold text-foreground">Pesquisa Avançada</h4>
                <p className="text-sm text-muted-foreground">Base científica sólida</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <Dna className="w-8 h-8 text-secondary mb-2" />
                <h4 className="font-semibold text-foreground">Ação Celular</h4>
                <p className="text-sm text-muted-foreground">Proteção molecular</p>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-primary-foreground">Como Funciona</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-semibold text-primary-foreground">Ativação</h5>
                      <p className="text-sm text-primary-foreground/80">Fitonutrientes ativam a proteína Nrf2</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-semibold text-primary-foreground">Produção</h5>
                      <p className="text-sm text-primary-foreground/80">Aumento de enzimas antioxidantes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-semibold text-primary-foreground">Proteção</h5>
                      <p className="text-sm text-primary-foreground/80">Defesa celular contra radicais livres</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img 
                  src="/lovable-uploads/47d1c536-59d7-41a7-bfd4-6f6d5b9d33b3.png" 
                  alt="Genoxidil Suplemento" 
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-foreground mb-6 text-center">Composição Científica</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h5 className="font-semibold text-card-foreground mb-2">Antioxidantes Naturais</h5>
              <p className="text-sm text-muted-foreground">Espirulina, Astaxantina, Licopeno, Trans-resveratrol</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <Zap className="w-10 h-10 text-secondary mb-4" />
              <h5 className="font-semibold text-card-foreground mb-2">Complexo Vitamínico</h5>
              <p className="text-sm text-muted-foreground">Vitaminas A, C, E, Complexo B, K1</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <Microscope className="w-10 h-10 text-accent mb-4" />
              <h5 className="font-semibold text-card-foreground mb-2">Estabilizantes</h5>
              <p className="text-sm text-muted-foreground">Celulose microcristalina, Fosfato tricálcico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
