import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useMemo, useState } from "react";
import { Clock, Tag, User, Bookmark, Filter } from "lucide-react";

// Simple mock data for posts
const basePosts = [
  {
    id: 1,
    title: "Genoxidil para Autismo: A Ciência que Está Transformando Vidas de Crianças com TEA",
    excerpt:
      "Descubra como o Genoxidil está revolucionando o tratamento natural do autismo através de tecnologia molecular avançada e resultados científicos comprovados.",
    category: "Ciência",
    date: "2025-01-11",
    readTime: 15,
    image: "/lovable-uploads/21db05fe-3f45-4994-ba7e-d3e83e450994.png",
    slug: "/genoxidil-autismo",
  },
  {
    id: 2,
    title: "O que é a Proteína Nrf2 e por que ela é fundamental para sua saúde?",
    excerpt:
      "Descubra como a proteína Nrf2 funciona como guardião antioxidante celular, protegendo contra estresse oxidativo e promovendo longevidade.",
    category: "Ciência",
    date: "2025-01-10",
    readTime: 12,
    image: "/lovable-uploads/899d038e-e71e-4dd8-869e-f8ae2b9a45dd.png",
    slug: "/proteina-nrf2",
  },
  {
    id: 3,
    title: "Estresse Oxidativo: Como Proteger Suas Células dos Radicais Livres",
    excerpt:
      "Entenda o que é estresse oxidativo, como ele acelera o envelhecimento e como proteger suas células com antioxidantes naturais.",
    category: "Ciência",
    date: "2025-01-09",
    readTime: 10,
    image: "/lovable-uploads/529f578b-3241-4eb4-a569-8b921817b603.png",
    slug: "/estresse-oxidativo",
  },
  {
    id: 4,
    title: "Antioxidantes Naturais vs Sintéticos: Por Que a Natureza Vence",
    excerpt:
      "Compare antioxidantes naturais e sintéticos. Descubra por que fontes naturais oferecem biodisponibilidade superior e benefícios únicos.",
    category: "Nutrição",
    date: "2025-01-08",
    readTime: 8,
    image: "/lovable-uploads/23ffa2e1-bab1-4682-b7d1-37bf5dd4186c.png",
    slug: "/antioxidantes-naturais",
  },
  {
    id: 5,
    title: "Saúde Celular: O Segredo da Longevidade",
    excerpt:
      "Descubra como manter suas células saudáveis é a chave para longevidade, energia e prevenção de doenças relacionadas ao envelhecimento.",
    category: "Bem-estar",
    date: "2025-01-07",
    readTime: 9,
    image: "/lovable-uploads/744bea02-712f-4edc-a49e-3b0708006424.png",
    slug: "/saude-celular",
  },
  {
    id: 6,
    title: "Vitaminas do Complexo B: Energia para Suas Células",
    excerpt:
      "Entenda o papel essencial das vitaminas B no metabolismo celular, produção de energia e função neurológica otimizada.",
    category: "Nutrição",
    date: "2025-01-06",
    readTime: 7,
    image: "/lovable-uploads/742f2448-5081-4e5b-8d45-a2c1aa4332a6.png",
    slug: "/vitaminas-complexo-b",
  },
  {
    id: 7,
    title: "Desintoxicação Natural: Como Seu Corpo se Limpa",
    excerpt:
      "Descubra os mecanismos naturais de desintoxicação do corpo e como otimizar a eliminação de toxinas para melhor saúde celular.",
    category: "Bem-estar",
    date: "2025-01-05",
    readTime: 8,
    image: "/lovable-uploads/6b195fff-dab1-45f0-bf34-232664f3ebf2.png",
    slug: "/desintoxicacao-natural",
  },
];

const categories = ["Todos", "Ciência", "Bem-estar", "Guia", "Nutrição"] as const;

type Category = typeof categories[number];

type Post = (typeof basePosts)[number] & { id: number };

const generatePosts = (count = 36): Post[] => {
  const items: Post[] = [];
  for (let i = 0; i < count; i++) {
    const base = basePosts[i % basePosts.length];
    items.push({ ...base, id: i + 1 });
  }
  return items;
};

const Blog = () => {
  const allPosts = useMemo(() => basePosts, []);
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filtered = useMemo(() => {
    if (activeCategory === "Todos") return allPosts;
    return allPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory, allPosts]);

  const postsToRender = filtered;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Genoxidil',
    description: 'Artigos sobre Genoxidil, Nrf2, saúde celular e bem-estar.',
    url: 'https://genoxidil.blog/blog'
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog Genoxidil | Saúde Celular, Nrf2 e Longevidade"
        description="Artigos sobre Genoxidil, proteína Nrf2, antioxidantes e saúde celular. Conteúdo atualizado, prático e confiável."
        canonical="https://genoxidil.blog/blog"
        jsonLd={jsonLd}
      />
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="container mx-auto px-4">
          <div className="rounded-2xl border border-border p-8 bg-card text-card-foreground">
            <div className="flex items-center gap-3 mb-3">
              <Bookmark className="text-primary" />
              <span className="text-sm text-muted-foreground">Blog Oficial</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Insights sobre Genoxidil, Nrf2 e saúde celular
            </h1>
            <p className="mt-3 text-muted-foreground max-w-3xl">
              Explore conteúdos exclusivos, estudos, guias práticos e tendências em bem-estar e longevidade.
            </p>

            {/* Filtros */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm"><Filter size={16}/>Categorias</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`rounded-full px-4 py-1.5 text-sm border transition-colors hover-scale ${
                    activeCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-foreground border-border'
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-4 mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {postsToRender.map((post) => (
              <article key={post.id} className="group overflow-hidden rounded-xl border border-border bg-card text-card-foreground hover:shadow-lg transition-shadow animate-fade-in">
                <a href={post.slug || `/blog/${post.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={`${post.title} - Genoxidil e Nrf2`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Tag size={14} />
                      <span>{post.category}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><User size={14}/> Redação</span>
                      <span className="inline-flex items-center gap-1"><Clock size={14}/> {post.readTime} min</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
