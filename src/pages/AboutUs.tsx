import { Building2, Globe, Target, Eye, MapPin, Users, Microscope, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Quem <span className="text-primary">Somos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Somos a <strong>NBN LIVING</strong>, uma empresa Mexicana com sede nos Estados Unidos. 
              Estamos há 30 anos desenvolvendo produtos com tecnologia avançada que tem levado 
              qualidade de vida de milhares de pessoas ao redor do mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Na NBN Living, nos preocupamos com o seu <span className="text-secondary">bem-estar integral</span>
            </h2>
            <p className="text-lg text-muted-foreground">Conheça nossa Missão e Visão</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-primary mr-4" />
                <h3 className="text-3xl font-bold text-card-foreground">Missão</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Servir famílias em todo mundo para melhorar sua Qualidade de Vida, 
                através de Sistemas De Saúde e Financeiros.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-secondary mr-4" />
                <h3 className="text-3xl font-bold text-card-foreground">Visão</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser a Empresa que vai revolucionar o conceito de Marketing de Rede no mundo, 
                consolidando-nos nos 5 continentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Nossa <span className="text-primary">História</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A NBN Living é uma empresa com foco em saúde e bem-estar, oferecendo suplementos 
                alimentares e um modelo de negócio baseado em distribuição independente.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A empresa, com sede em São José dos Campos, nasceu de uma inspiração inovadora 
                e tecnológica, buscando devolver vitalidade e equilíbrio à vida das pessoas.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-card p-4 rounded-lg text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">75</div>
                  <div className="text-sm text-muted-foreground">Países</div>
                </div>
                <div className="bg-card p-4 rounded-lg text-center">
                  <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">30</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-center">
              <img 
                src="/lovable-uploads/529f578b-3241-4eb4-a569-8b921817b603.png" 
                alt="NBN Living Laboratório" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Chegamos ao Brasil em Novembro de 2021
              </h3>
              <p className="text-primary-foreground/90">
                Nossa Sede no Brasil fica localizada em São José dos Campos e atualmente 
                temos 4 Centro Logístico nas 4 Regiões do Brasil para fazer com que o 
                produto chegue mais rápido até nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="text-secondary">Presença Global</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              SOMOS UMA EMPRESA PRESENTE EM TODOS OS CONTINENTES
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Europa</h3>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Globe className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Ásia</h3>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Globe className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">África</h3>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Estados Unidos</h3>
            </div>

            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Globe className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">América Latina</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-primary">Laboratórios</span>
            </h2>
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              HERBOLARIS & XI FARMA
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Microscope className="w-12 h-12 text-primary" />
                    <div>
                      <h4 className="text-xl font-bold text-card-foreground">Excelência Científica</h4>
                      <p className="text-muted-foreground">Mais de 30 anos de experiência</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Com mais de 30 anos de experiência, desenvolvemos e fabricamos produtos 
                    com resultados de alto impacto para a saúde física de milhões de famílias 
                    ao redor da Terra.
                  </p>

                  <div className="flex items-center space-x-4">
                    <Award className="w-12 h-12 text-secondary" />
                    <div>
                      <h4 className="text-xl font-bold text-card-foreground">Qualidade Mundial</h4>
                      <p className="text-muted-foreground">Sistemas certificados de classe mundial</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Possuímos um Complexo Corporativo com Sistemas Certificados de Qualidade 
                    e Comercialização de Classe Mundial.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <img 
                    src="/lovable-uploads/23ffa2e1-bab1-4682-b7d1-37bf5dd4186c.png" 
                    alt="Complexo NBN Living" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;