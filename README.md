# Adam Tidball — Portfolio

Personal portfolio site, live at **https://adam-tidball.github.io/portfolio/**.

Built with Next.js (static export) and Tailwind CSS, and deployed to GitHub Pages.

## Updating content

All text, experience, projects and skills live in [`src/content.ts`](src/content.ts). Edit that file; the page layout picks up the changes automatically.

Images and the resume PDF go in `public/`. Reference them in `content.ts` with a leading slash, e.g. `/marketplace/diagram.png`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static site in out/
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Pull requests run lint and build via `.github/workflows/ci.yml`.
