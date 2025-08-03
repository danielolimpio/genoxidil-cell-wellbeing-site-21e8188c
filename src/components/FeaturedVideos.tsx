
import { Play, Award, Users, TrendingUp } from 'lucide-react';

const FeaturedVideos = () => {
  const videos = [
    {
      id: 1,
      title: 'A Ciência por trás da Proteína Nrf2',
      description: 'Entenda como funciona o mecanismo de ativação da proteína Nrf2 e seus benefícios para a saúde celular.',
      duration: '12:34',
      views: '125K',
      category: 'Ciência'
    },
    {
      id: 2,
      title: 'Genoxidil: Revolução na Suplementação',
      description: 'Conheça a tecnologia inovadora que está mudando o conceito de multivitamínicos.',
      duration: '8:45',
      views: '89K',
      category: 'Produto'
    },
    {
      id: 3,
      title: 'Antioxidantes Naturais vs Sintéticos',
      description: 'A diferença entre antioxidantes naturais e sintéticos e por que isso importa para sua saúde.',
      duration: '15:20',
      views: '76K',
      category: 'Educação'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vídeos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda mais sobre a ciência por trás do Genoxidil através dos nossos vídeos educacionais 
            e explicações de especialistas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video) => (
            <div key={video.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative bg-muted h-48 flex items-center justify-center">
                <button className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </button>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {video.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {video.views} visualizações
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="rounded-2xl p-8 text-center relative"
          style={{
            backgroundImage: 'url(/lovable-uploads/ff4de8e8-6c25-43d9-8be1-c65e1bc68040.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <Award className="w-16 h-16 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4 text-white">Canal Oficial Genoxidil</h3>
            <p className="text-white/90 mb-6">
              Inscreva-se no nosso canal para receber conteúdo exclusivo sobre saúde celular, 
              pesquisas científicas e dicas de bem-estar.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Inscrever-se no Canal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
