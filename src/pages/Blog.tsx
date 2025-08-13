import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useEffect, useMemo, useRef, useState } from "react";
import { Clock, Tag, User, Bookmark, Filter } from "lucide-react";

// Simple mock data for posts
const basePosts = [
  {
    id: 1,
    title: "Genoxidil e Nrf2: avanços na saúde celular",
    excerpt:
      "Como a ativação da proteína Nrf2 pode apoiar longevidade, energia e defesa antioxidante.",
    category: "Ciência",
    date: "2025-08-01",
    readTime: 6,
    image: "/lovable-uploads/529f578b-3241-4eb4-a569-8b921817b603.png",
  },
  {
    id: 2,
    title: "Antioxidantes endógenos: o que são e como estimular",
    excerpt:
      "Entenda o papel dos antioxidantes produzidos pelo corpo na proteção contra radicais livres.",
    category: "Bem-estar",
    date: "2025-07-20",
    readTime: 7,
    image: "/lovable-uploads/899d038e-e71e-4dd8-869e-f8ae2b9a45dd.png",
  },
  {
    id: 3,
    title: "Guia de uso do Genoxidil no dia a dia",
    excerpt:
      "Dicas práticas para integrar o suplemento na rotina com segurança e constância.",
    category: "Guia",
    date: "2025-07-05",
    readTime: 5,
    image: "/lovable-uploads/742f2448-5081-4e5b-8d45-a2c1aa4332a6.png",
  },
  {
    id: 4,
    title: "Regeneração celular e desempenho cognitivo",
    excerpt:
      "Entenda as relações entre redução de estresse oxidativo e saúde do cérebro.",
    category: "Ciência",
    date: "2025-06-18",
    readTime: 8,
    image: "/lovable-uploads/23ffa2e1-bab1-4682-b7d1-37bf5dd4186c.png",
  },
  {
    id: 5,
    title: "Alimentação inteligente e Nrf2",
    excerpt:
      "Alimentos que podem potencialmente apoiar vias antioxidantes naturais.",
    category: "Nutrição",
    date: "2025-06-01",
    readTime: 6,
    image: "/lovable-uploads/744bea02-712f-4edc-a49e-3b0708006424.png",
  },
  {
    id: 6,
    title: "Sono, imunidade e estresse oxidativo",
    excerpt:
      "Como noites de qualidade favorecem equilíbrio metabólico e defesa celular.",
    category: "Bem-estar",
    date: "2025-05-24",
    readTime: 4,
    image: "/lovable-uploads/6b195fff-dab1-45f0-bf34-232664f3ebf2.png",
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
  const allPosts = useMemo(() => generatePosts(60), []);
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [visible, setVisible] = useState(12);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "Todos") return allPosts;
    return allPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory, allPosts]);

  useEffect(() => {
    setVisible(12);
  }, [activeCategory]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setVisible((v) => Math.min(v + 12, filtered.length));
            setLoading(false);
          }, 400);
        }
      });
    }, { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length, loading]);

  const postsToRender = filtered.slice(0, visible);

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
                <a href={`/blog/${post.id}`} className="block">
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

          {/* Sentinel */}
          <div ref={sentinelRef} className="h-10" />

          {/* Loader */}
          {loading && (
            <div className="py-8 text-center text-muted-foreground">Carregando…</div>
          )}

          {/* Fallback button */}
          {visible < filtered.length && !loading && (
            <div className="py-8 text-center">
              <button
                className="rounded-md border border-border bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setVisible((v) => Math.min(v + 12, filtered.length))}
              >
                Carregar mais
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
