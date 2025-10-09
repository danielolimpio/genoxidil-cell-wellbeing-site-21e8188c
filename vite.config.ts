import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    sitemap({
      hostname: 'https://genoxidil.blog',
      dynamicRoutes: [
        '/',
        '/sobre',
        '/produtos',
        '/blog',
        '/faq',
        '/afiliado',
        '/contato',
        '/politica-de-privacidade',
        '/politica-de-cookies',
        '/termos-de-uso',
        '/politica-de-transparencia',
        '/politica-de-reembolso',
        '/genoxidil-autismo',
        '/proteina-nrf2',
        '/estresse-oxidativo',
        '/antioxidantes-naturais',
        '/saude-celular',
        '/vitaminas-complexo-b',
        '/desintoxicacao-natural',
      ],
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      exclude: ['/404'],
      robots: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
