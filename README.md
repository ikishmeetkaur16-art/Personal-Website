# Ishmeet Kaur Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Sign in to Vercel with GitHub.
3. Select **Add New → Project** and import this repository.
4. Vercel should detect **Vite** automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

Every future push to `main` will trigger a new Vercel deployment.

## Project images

Two homepage visuals are loaded directly from their source GitHub repositories; the remaining projects use clean placeholders until their real README assets are added.

## Automation

The repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that builds the site on pushes and pull requests to `main`.
