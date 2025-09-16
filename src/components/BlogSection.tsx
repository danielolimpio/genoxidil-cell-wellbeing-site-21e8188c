
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Genoxidil para Autismo: A Ciência que Está Transformando Vidas de Crianças com TEA',
      excerpt: 'Descubra como o Genoxidil está revolucionando o tratamento natural do autismo através de tecnologia molecular avançada e resultados científicos comprovados.',
      author: 'NBN Living',
      date: '15 Jan 2024',
      readTime: '12 min',
      category: 'Ciência',
      featured: true,
      image: '/lovable-uploads/21db05fe-3f45-4994-ba7e-d3e83e450994.png',
      slug: 'genoxidil-autismo'
    },
    {
      id: 2,
      title: 'Proteína Nrf2: O Guardião Antioxidante que Revoluciona sua Saúde Celular',
      excerpt: 'Descubra como a proteína Nrf2 ativa mais de 250 genes antioxidantes, protege contra estresse oxidativo e promove longevidade celular.',
      author: 'Dr. Pedro Oliveira',
      date: '12 Jan 2024',
      readTime: '10 min',
      category: 'Ciência',
      image: '/lovable-uploads/899d038e-e71e-4dd8-869e-f8ae2b9a45dd.png',
      slug: 'proteina-nrf2'
    },
    {
      id: 3,
      title: 'Estresse Oxidativo: Como Proteger Suas Células dos Radicais Livres',
      excerpt: 'Descubra como o estresse oxidativo acelera o envelhecimento e aprenda estratégias cientificamente comprovadas para combater radicais livres.',
      author: 'Dra. Ana Silva',
      date: '10 Jan 2024',
      readTime: '8 min',
      category: 'Saúde',
      image: '/lovable-uploads/95fc8720-74f6-47b0-8e51-8afd359da6cc.png',
      slug: 'estresse-oxidativo'
    },
    {
      id: 4,
      title: 'Antioxidantes Naturais vs Sintéticos: Por Que a Natureza Vence',
      excerpt: 'Descubra a superioridade científica dos antioxidantes naturais e como eles oferecem biodisponibilidade superior e benefícios únicos.',
      author: 'Dr. Carlos Mendes',
      date: '8 Jan 2024',
      readTime: '9 min',
      category: 'Nutrição',
      image: '/lovable-uploads/23ffa2e1-bab1-4682-b7d1-37bf5dd4186c.png',
      slug: 'antioxidantes-naturais'
    },
    {
      id: 5,
      title: 'Saúde Celular: O Segredo da Longevidade',
      excerpt: 'Como manter suas células saudáveis é a chave para longevidade, energia e prevenção de doenças relacionadas ao envelhecimento.',
      author: 'Dra. Maria Santos',
      date: '6 Jan 2024',
      readTime: '11 min',
      category: 'Longevidade',
      image: '/lovable-uploads/744bea02-712f-4edc-a49e-3b0708006424.png',
      slug: 'saude-celular'
    },
    {
      id: 6,
      title: 'Vitaminas do Complexo B: Energia para Suas Células',
      excerpt: 'A importância das 8 vitaminas do complexo B no metabolismo celular, produção de energia e função neurológica otimizada.',
      author: 'Dr. Ricardo Costa',
      date: '4 Jan 2024',
      readTime: '7 min',
      category: 'Vitaminas',
      image: '/lovable-uploads/742f2448-5081-4e5b-8d45-a2c1aa4332a6.png',
      slug: 'vitaminas-complexo-b'
    },
    {
      id: 7,
      title: 'Desintoxicação Natural: Como Seu Corpo se Limpa',
      excerpt: 'Os mecanismos naturais de desintoxicação do organismo e como otimizá-los para melhor saúde celular e eliminação de toxinas.',
      author: 'Dra. Lucia Fernandes',
      date: '2 Jan 2024',
      readTime: '6 min',
      category: 'Detox',
      image: '/lovable-uploads/6b195fff-dab1-45f0-bf34-232664f3ebf2.png',
      slug: 'desintoxicacao-natural'
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
                  <Link 
                    to={`/${post.slug}`}
                    className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-all flex items-center inline-flex"
                  >
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
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
              <Link to={`/${post.slug}`} key={post.id}>
                <article className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
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
                  
                  <span className="text-accent font-medium text-sm flex items-center">
                    Ler mais
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </span>
                  </div>
                </article>
              </Link>
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
