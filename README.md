# Rawnaz Anam — Developer Portfolio

Production portfolio for **Rawnaz Anam**, positioning her work across enterprise
applications, software architecture, technical leadership, and SaaS product
engineering. The static site is published at
[anamraz.github.io](https://anamraz.github.io).

## Technology

- Astro and TypeScript
- Maintainable plain CSS (no UI framework)
- `@astrojs/sitemap` for sitemap generation
- GitHub Actions and GitHub Pages

## Local development

Prerequisites:

- Node.js 22.12 or newer (Node.js 24 is used in CI)
- npm 10 or newer

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321`.

Run the production checks:

```sh
npm run check
npm run build
npm run preview
```

The static production output is generated in `dist/`.

## Site structure

```text
src/
  components/   Reusable navigation, section, and project components
  content/      Centralized personal information and portfolio content
  layouts/      Shared document shell, metadata, and structured data
  pages/        Routable Astro pages
  styles/       Global design system and responsive styles
public/         Static assets, robots.txt, and favicon
```

All personal links, project content, skills, and the reusable case-study model
live in [`src/content/site.ts`](src/content/site.ts). Update this file for
routine content changes rather than editing layout components.

## Deployment

The workflow in `.github/workflows/deploy.yml` runs on every push to `main` and
can also be started manually. It uses Astro's official GitHub action to install
dependencies, build the site, upload the Pages artifact, and deploy it.

This repository is a GitHub user site, so Astro's `site` is
`https://anamraz.github.io` and no project-subdirectory `base` is configured.

To enable publishing:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push or merge the portfolio changes to `main`.
5. Confirm both the build and deploy jobs pass in the **Actions** tab.

Local build success does not confirm a successful GitHub Pages deployment.

## Remaining placeholders

Replace every value beginning with `xxxxxxxxx` in
[`src/content/site.ts`](src/content/site.ts):

- LinkedIn profile URL
- Contact email (`mailto:`) or contact-page URL
- Résumé URL

Until configured, missing public calls to action are rendered as disabled text
instead of broken or invented links.

## License

[MIT](LICENSE)
