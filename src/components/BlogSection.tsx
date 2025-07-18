
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
      featured: true
    },
    {
      id: 2,
      title: 'Estresse Oxidativo: O Inimigo Silencioso da Sua Saúde',
      excerpt: 'Entenda como os radicais livres afetam seu organismo e como o Genoxidil pode ajudar na proteção celular.',
      author: 'Dra. Ana Silva',
      date: '12 Jan 2024',
      readTime: '7 min',
      category: 'Saúde'
    },
    {
      id: 3,
      title: 'Antioxidantes Naturais: A Diferença que Faz a Diferença',
      excerpt: 'Por que escolher antioxidantes naturais como Astaxantina e Trans-resveratrol para sua suplementação.',
      author: 'Dr. Carlos Mendes',
      date: '10 Jan 2024',
      readTime: '6 min',
      category: 'Nutrição'
    },
    {
      id: 4,
      title: 'Saúde Celular: O Segredo da Longevidade',
      excerpt: 'Como manter suas células saudáveis e funcionais por mais tempo através da nutrição adequada.',
      author: 'Dra. Maria Santos',
      date: '8 Jan 2024',
      readTime: '8 min',
      category: 'Longevidade'
    },
    {
      id: 5,
      title: 'Vitaminas do Complexo B: Energia para Suas Células',
      excerpt: 'A importância das vitaminas B1, B2, B3, B5, B6, B7, B9 e B12 no metabolismo celular e produção de energia.',
      author: 'Dr. Ricardo Costa',
      date: '5 Jan 2024',
      readTime: '4 min',
      category: 'Vitaminas'
    },
    {
      id: 6,
      title: 'Desintoxicação Natural: Como Seu Corpo se Limpa',
      excerpt: 'Os mecanismos naturais de desintoxicação do organismo e como otimizá-los através da suplementação.',
      author: 'Dra. Lucia Fernandes',
      date: '3 Jan 2024',
      readTime: '6 min',
      category: 'Detox'
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
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-foreground font-bold text-xl">G</span>
                      </div>
                      <p className="text-gray-600">Artigo em Destaque</p>
                    </div>
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
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-accent-foreground font-bold">G</span>
                    </div>
                    <span className="text-accent font-medium text-sm">{post.category}</span>
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
