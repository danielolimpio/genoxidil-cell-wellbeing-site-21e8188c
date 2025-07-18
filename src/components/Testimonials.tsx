
import { Star, Quote, Play, CheckCircle } from 'lucide-react';

const Testimonials = () => {
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
      name: 'Ana Costa',
      role: 'Professora',
      thumbnail: 'Depoimento em vídeo',
      duration: '2:45'
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
      name: 'Lúcia Fernandes',
      role: 'Aposentada',
      thumbnail: 'Depoimento em vídeo',
      duration: '2:58'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Depoimentos de <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Especialistas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que profissionais da saúde e usuários estão dizendo sobre o Genoxidil 
            e os resultados obtidos.
          </p>
        </div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <Quote className="w-8 h-8 text-blue-600" />
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center text-green-600">
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Depoimentos em <span className="text-orange-500">Vídeo</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative bg-gradient-to-br from-blue-100 to-orange-100 h-40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20"></div>
                  <button className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-blue-600 ml-0.5" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-1">{video.name}</h4>
                  <p className="text-sm text-gray-500 mb-3">{video.role}</p>
                  <p className="text-gray-600 text-sm">{video.thumbnail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Junte-se a milhares de pessoas satisfeitas
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experimente o Genoxidil e sinta a diferença que a ativação da proteína Nrf2 
            pode fazer em sua vida. Garantia de 30 dias ou seu dinheiro de volta.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all">
            Experimente Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
