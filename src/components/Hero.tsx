
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Zap, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-20 pb-16 bg-muted min-h-screen flex items-center relative"
      style={{
        backgroundImage: `url('/lovable-uploads/606227e1-5f47-413a-8760-62590ab49818.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-muted/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-2 text-accent text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Tecnologia Nrf2 Avançada
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Genoxidil
                <span className="block text-primary">
                  Suplemento do Futuro
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                O primeiro multivitamínico de última geração que ativa a proteína Nrf2, 
                promovendo saúde celular, desintoxicação e bem-estar através da ciência mais avançada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary"
                size="lg" 
                className="text-lg px-8 py-3"
              >
                Comprar Agora
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-3"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                Certificado
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-secondary mr-2" />
                Seguro
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-accent mr-2" />
                Eficaz
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-muted rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto bg-card rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-primary rounded-2xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-3xl">G</span>
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground">Genoxidil</h3>
                    <p className="text-muted-foreground">Ativação Nrf2</p>
                    <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
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
