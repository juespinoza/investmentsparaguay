# Investments Paraguay (Next.js + Tailwind)

Implementación en Next.js 14 (App Router) basada en tus archivos `index.html`, `propiedades.html`, `blog.html` y `contacto.html`.

## Scripts
```bash
yarn # o npm i / pnpm i
yarn dev # http://localhost:3000
yarn build && yarn start
```

## Estructura
- `app/` rutas: `/`, `/propiedades`, `/blog`, `/contacto`
- `components/` Header y Footer
- `lib/data.ts` datos de ejemplo para tarjetas

## Formularios (Web3Forms)
Reemplaza `YOUR_WEB3FORMS_KEY` por tu Access Key de Web3Forms o ajusta `action` a Formspree/Mailchimp.

## Deploy
### Vercel
- Importa repo → Framework **Next.js**
- Variables opcionales `.env` (si usas claves)
- Build command: `next build` – Output: `.vercel/output` (automático)

### GitHub Pages (estático)
Este proyecto es SSR/SPA. Si quieres export estático:
```bash
# experimental: genera export estático simple
# agrega a next.config.mjs:
# export default { output: 'export' }
```
Luego sube la carpeta `out/` a Pages.

## SEO
Incluye `app/robots.txt` y `app/sitemap.xml` (ajusta dominio).
