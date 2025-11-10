
import { Play, Award, Users, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

const FeaturedVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; type: 'youtube' | 'local' } | null>(null);

  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const videos = [
    {
      id: 1,
      title: 'A Ciência por trás da Proteína Nrf2',
      description: 'Entenda como funciona o mecanismo de ativação da proteína Nrf2 e seus benefícios para a saúde celular.',
      duration: '12:34',
      views: '125K',
      category: 'Ciência',
      videoUrl: 'https://www.youtube.com/watch?v=Siiyj7dioFg'
    },
    {
      id: 2,
      title: 'Genoxidil: Revolução na Suplementação',
      description: 'Conheça a tecnologia inovadora que está mudando o conceito de multivitamínicos.',
      duration: '8:45',
      views: '89K',
      category: 'Produto',
      videoUrl: 'https://youtu.be/fl2_8yjlqQI'
    },
    {
      id: 3,
      title: 'Maneiras de Tomar o Genoxidil para Potencializar seus Resultados',
      description: 'Ative o poder do Genoxidil com a via antioxidante NRF2 e potencialize a saúde das suas células!',
      duration: '15:20',
      views: '76K',
      category: 'Educação',
      videoUrl: '/videos/genoxidil-como-tomar.mp4'
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
              <div className="relative h-48 overflow-hidden">
                {video.videoUrl && !video.videoUrl.startsWith('/') ? (
                  <img 
                    src={getYouTubeThumbnail(video.videoUrl) || ''} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('bg-muted', 'flex', 'items-center', 'justify-center');
                    }}
                  />
                ) : video.id === 3 ? (
                  <img 
                    src="/thumbnails/maneiras-tomar-genoxidil-thumb.jpg" 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-full flex items-center justify-center">
                    <Play className="w-16 h-16 text-primary/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <button 
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => {
                    if (video.videoUrl) {
                      if (video.videoUrl.startsWith('/')) {
                        setSelectedVideo({ url: video.videoUrl, type: 'local' });
                      } else {
                        // Abre vídeos do YouTube diretamente em nova aba
                        window.open(video.videoUrl, '_blank');
                      }
                    }
                  }}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
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
            <button 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => window.open('https://www.youtube.com/@genoxidiloficial', '_blank')}
            >
              Inscrever-se no Canal
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] relative">
              <div className="flex justify-between items-center p-4 border-b bg-white">
                <h3 className="text-lg font-semibold text-gray-900">Reproduzindo vídeo</h3>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                {selectedVideo.type === 'youtube' ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.url}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                ) : (
                  <video
                    src={selectedVideo.url}
                    controls
                    autoPlay
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    Seu navegador não suporta a reprodução de vídeos.
                  </video>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedVideos;
