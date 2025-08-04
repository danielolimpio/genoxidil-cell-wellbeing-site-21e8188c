
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'O que é a Proteína Nrf2 e por que ela é fundamental para sua saúde?',
      excerpt: 'Descubra como esta proteína regula os antioxidantes naturais do seu corpo e protege contra o envelhecimento celular.',
      author: 'Dr. Pedro Oliveira',
      date: '15 Jan 2024',
      readTime: '5 min',
      category: 'Ciência',
      featured: true,
      image: '/lovable-uploads/c9a9b6c1-2493-432d-928d-eddaa96390e1.png'
    },
    {
      id: 2,
      title: 'Estresse Oxidativo: O Inimigo Silencioso da Sua Saúde',
      excerpt: 'Entenda como os radicais livres afetam seu organismo e como o Genoxidil pode ajudar na proteção celular.',
      author: 'Dra. Ana Silva',
      date: '12 Jan 2024',
      readTime: '7 min',
      category: 'Saúde',
      image: '/lovable-uploads/95fc8720-74f6-47b0-8e51-8afd359da6cc.png'
    },
    {
      id: 3,
      title: 'Antioxidantes Naturais: A Diferença que Faz a Diferença',
      excerpt: 'Por que escolher antioxidantes naturais como Astaxantina e Trans-resveratrol para sua suplementação.',
      author: 'Dr. Carlos Mendes',
      date: '10 Jan 2024',
      readTime: '6 min',
      category: 'Nutrição',
      image: '/lovable-uploads/8c7dac5e-b7e0-49c0-8b4c-46b4f50a1026.png'
    },
    {
      id: 4,
      title: 'Saúde Celular: O Segredo da Longevidade',
      excerpt: 'Como manter suas células saudáveis e funcionais por mais tempo através da nutrição adequada.',
      author: 'Dra. Maria Santos',
      date: '8 Jan 2024',
      readTime: '8 min',
      category: 'Longevidade',
      image: '/lovable-uploads/21493484-bf1c-499c-b124-dd49850909b3.png'
    },
    {
      id: 5,
      title: 'Vitaminas do Complexo B: Energia para Suas Células',
      excerpt: 'A importância das vitaminas B1, B2, B3, B5, B6, B7, B9 e B12 no metabolismo celular e produção de energia.',
      author: 'Dr. Ricardo Costa',
      date: '5 Jan 2024',
      readTime: '4 min',
      category: 'Vitaminas',
      image: '/lovable-uploads/742f2448-5081-4e5b-8d45-a2c1aa4332a6.png'
    },
    {
      id: 6,
      title: 'Desintoxicação Natural: Como Seu Corpo se Limpa',
      excerpt: 'Os mecanismos naturais de desintoxicação do organismo e como otimizá-los através da suplementação.',
      author: 'Dra. Lucia Fernandes',
      date: '3 Jan 2024',
      readTime: '6 min',
      category: 'Detox',
      image: '/lovable-uploads/564ec4b2-8f99-4ca1-90e8-ea872d0a9e89.png'
    }
  ];

  const categories = ['Todos', 'Ciência', 'Saúde', 'Nutrição', 'Longevidade', 'Vitaminas', 'Detox'];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Blog <span className="text-secondary">Científico</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artigos científicos e educacionais sobre saúde celular, antioxidantes, 
            e os mais recentes avanços em suplementação nutricional.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                category === 'Todos'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts
          .filter(post => post.featured)
          .map((post) => (
            <div key={post.id} className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </span>
                    <span className="text-accent font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-all flex items-center">
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts
            .filter(post => !post.featured)
            .map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-accent font-medium text-sm hover:text-accent/80 transition-colors flex items-center">
                    Ler mais
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Mantenha-se Atualizado</h3>
          <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
            Receba os últimos artigos sobre saúde celular, pesquisas científicas e 
            dicas de bem-estar diretamente em seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground"
            />
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
