# 🚀 Guia de Deploy - Genoxidil

## Pré-requisitos
- Node.js instalado
- Acesso ao painel da Hostinger

## 📦 Gerando Build para Deploy

Execute o comando:
```bash
npm run build
```

Isso gerará a pasta `dist/` com todos os arquivos estáticos prontos para deploy, incluindo:
- ✅ `sitemap.xml` (atualizado automaticamente)
- ✅ `robots.txt` (configurado para HTTPS)
- ✅ `.htaccess` (redirecionamento HTTP → HTTPS)
- ✅ Todos os assets otimizados

## 📤 Upload para Hostinger

1. Acesse o **File Manager** no painel da Hostinger
2. Navegue até a pasta `public_html` (ou pasta raiz do seu domínio)
3. **Delete todos os arquivos antigos** (exceto `.htaccess` se quiser manter configurações extras)
4. Faça upload de **TODO** o conteúdo da pasta `dist/`
5. Certifique-se que o `.htaccess` foi enviado (pode estar oculto - ative "Mostrar arquivos ocultos")

## ✅ Verificações Pós-Deploy

### 1. Teste o Redirecionamento HTTPS
- Acesse: `http://genoxidil.blog/` (sem HTTPS)
- Deve redirecionar automaticamente para: `https://genoxidil.blog/`

### 2. Verifique o Sitemap
- Acesse: `https://genoxidil.blog/sitemap.xml`
- Deve listar todas as 19 páginas com prioridades e frequências

### 3. Confirme o Robots.txt
- Acesse: `https://genoxidil.blog/robots.txt`
- Deve ter: `Sitemap: https://genoxidil.blog/sitemap.xml`

### 4. Teste as Rotas
Teste algumas URLs diretas:
- `https://genoxidil.blog/sobre`
- `https://genoxidil.blog/blog`
- `https://genoxidil.blog/genoxidil-autismo`

Todas devem funcionar sem erro 404.

## 🔍 Configuração Google Search Console

### 1. Envie o Sitemap
- Acesse: [Google Search Console](https://search.google.com/search-console)
- Vá em **Sitemaps** (menu lateral)
- Adicione: `https://genoxidil.blog/sitemap.xml`
- Clique em "Enviar"

### 2. Solicite Indexação
Para cada página importante:
- Cole a URL na barra de pesquisa do Search Console
- Clique em "Solicitar indexação"

### 3. Verifique Problemas
- Monitore a seção **Cobertura** para ver se há erros
- Verifique **Experiência** > **Core Web Vitals**
- Confira **Segurança e ações manuais**

## 🆕 Adicionando Novos Artigos

Quando criar um novo artigo:

1. **Crie a página** (ex: `src/pages/MeuNovoArtigo.tsx`)
2. **Adicione a rota** em `src/App.tsx`:
   ```tsx
   <Route path="/meu-novo-artigo" element={<MeuNovoArtigo />} />
   ```
3. **Atualize o sitemap** em `vite.config.ts`:
   ```typescript
   dynamicRoutes: [
     // ... rotas existentes
     '/meu-novo-artigo',
   ],
   ```
4. **Adicione ao sitemap.xml** em `public/sitemap.xml`:
   ```xml
   <url>
     <loc>https://genoxidil.blog/meu-novo-artigo</loc>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
   </url>
   ```
5. **Adicione ao Blog** em `src/components/BlogSection.tsx` e `src/pages/Blog.tsx`
6. **Rode o build** novamente: `npm run build`
7. **Faça upload** da nova `dist/` para a Hostinger

## 🛡️ Segurança e Performance

O `.htaccess` já inclui:
- ✅ Redirecionamento HTTPS forçado (301)
- ✅ Suporte a React Router (SPA routing)
- ✅ Compressão GZIP
- ✅ Cache de assets (1 ano para imagens, 1 mês para JS/CSS)

## 📊 Estrutura do Sitemap

| Página | Prioridade | Frequência |
|--------|-----------|------------|
| Homepage | 1.0 | Weekly |
| Produtos | 0.9 | Weekly |
| Artigos Blog | 0.8 | Monthly |
| Sobre/FAQ/Afiliado | 0.7-0.8 | Monthly |
| Políticas | 0.3 | Yearly |

## 🆘 Problemas Comuns

### As rotas não funcionam (erro 404)
- Verifique se o `.htaccess` foi enviado para a Hostinger
- Confirme que `mod_rewrite` está ativo no servidor Apache

### Sitemap não atualiza
- Delete o cache do navegador (Ctrl + Shift + R)
- Force re-crawling no Google Search Console

### HTTPS não redireciona
- Verifique se o certificado SSL está ativo na Hostinger
- Confirme que o `.htaccess` está na raiz do domínio

## 📝 Checklist Final

- [ ] Build gerado com `npm run build`
- [ ] Todos os arquivos de `dist/` enviados para Hostinger
- [ ] `.htaccess` está presente e ativo
- [ ] Sitemap acessível em `https://genoxidil.blog/sitemap.xml`
- [ ] Robots.txt acessível em `https://genoxidil.blog/robots.txt`
- [ ] Todas as páginas redirecionam HTTP → HTTPS
- [ ] Sitemap enviado ao Google Search Console
- [ ] Indexação solicitada para páginas principais

---

✅ **Tudo configurado!** Seu site está otimizado para SEO e pronto para indexação no Google.
