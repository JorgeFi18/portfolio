# Jorge Figueroa — portfolio

Sitio personal para compartir en el CV.

## Dónde editar

- [`src/content/copy.ts`](src/content/copy.ts): todos los textos en español (`es`) e inglés (`en`). Ambos objetos deben tener la misma forma; TypeScript avisa si falta una clave en inglés.

El sitio vive en `/es` y `/en`. Entrar a `/` redirige según el idioma del navegador, y la última elección queda en una cookie. Cada página declara la otra con `hreflang`.
- [`src/content/profile.ts`](src/content/profile.ts): nombre, contacto (`email`, `linkedin`, `github`, `location`), empresas y la tira de tecnologías. Los campos vacíos no se muestran.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Publicar en Vercel

1. Subí el repositorio a GitHub.
2. Importalo en [Vercel](https://vercel.com/new).
3. Opcional: definí `NEXT_PUBLIC_SITE_URL` con la URL final (`https://tu-dominio`). Se usa en la vista previa del link, el sitemap y `robots.txt`.
4. Pegá esa URL en el CV.

El proyecto usa Next.js. No hace falta configurar build: el comando es `npm run build` y el de arranque es `npm start`.
