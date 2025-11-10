
import { Star, Quote, Play, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
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
  const testimonials = [
    {
      id: 1,
      name: 'Dra. Maria Santos',
      role: 'Nutricionista Clínica',
      text: 'O Genoxidil representa um avanço significativo na suplementação. A ativação da proteína Nrf2 é uma abordagem cientificamente fundamentada para a saúde celular.',
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: 'João Silva',
      role: 'Paciente há 6 meses',
      text: 'Desde que comecei a usar o Genoxidil, sinto muito mais energia e disposição. Minha pele também melhorou visivelmente.',
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: 'Dr. Carlos Mendes',
      role: 'Médico Geriatra',
      text: 'Recomendo o Genoxidil para meus pacientes que buscam um envelhecimento saudável. Os resultados têm sido muito positivos.',
      rating: 5,
      verified: true
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'Ana Isabel',
      role: 'Terapeuta',
      thumbnail: 'Depoimento em vídeo',
      duration: '2:45',
      videoUrl: 'https://youtu.be/t-2XPZGhNTQ'
    },
    {
      id: 2,
      name: 'Roberto Lima',
      role: 'Empresário',
      thumbnail: 'Depoimento em vídeo',
      duration: '3:12'
    },
    {
      id: 3,
      name: 'Sandra',
      role: 'Aposentada',
      thumbnail: 'Depoimento em vídeo',
      duration: '15:20',
      videoUrl: 'https://youtu.be/xVPtUkTp-rU'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Depoimentos de <span className="text-secondary">Especialistas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que profissionais da saúde e usuários estão dizendo sobre o Genoxidil 
            e os resultados obtidos.
          </p>
        </div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <Quote className="w-8 h-8 text-primary" />
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center text-accent">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">Verificado</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Depoimentos em <span className="text-secondary">Vídeo</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-40 overflow-hidden">
                  {video.id === 3 ? (
                    <img 
                      src="/thumbnails/sandra-depoimento-thumb.jpg" 
                      alt={`Depoimento de ${video.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : video.videoUrl && !video.videoUrl.startsWith('/') ? (
                    <img 
                      src={getYouTubeThumbnail(video.videoUrl) || ''} 
                      alt={`Depoimento de ${video.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('bg-primary');
                      }}
                    />
                  ) : (
                    <div className="bg-primary h-full" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <button
                    className="relative z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                    onClick={() => {
                      if (video.videoUrl) {
                        if (video.videoUrl.startsWith('/')) {
                          setSelectedVideo({ url: video.videoUrl, type: 'local' });
                        } else {
                          const videoId = getYouTubeVideoId(video.videoUrl);
                          if (videoId) {
                            setSelectedVideo({ url: videoId, type: 'youtube' });
                          }
                        }
                      }
                    }}
                  >
                    <Play className="w-5 h-5 text-primary ml-0.5" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-card-foreground mb-1">{video.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{video.role}</p>
                  <p className="text-muted-foreground text-sm">{video.thumbnail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Junte-se a milhares de pessoas satisfeitas
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experimente o Genoxidil e sinta a diferença que a ativação da proteína Nrf2 
            pode fazer em sua vida. Garantia de 30 dias ou seu dinheiro de volta.
          </p>
          <button 
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
            onClick={() => window.open('https://store.nbnliving.com/danielmoreira', '_blank')}
          >
            Experimente Agora
          </button>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] relative">
              <div className="flex justify-between items-center p-4 border-b bg-white">
                <h3 className="text-lg font-semibold text-gray-900">Reproduzindo depoimento</h3>
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

export default Testimonials;
