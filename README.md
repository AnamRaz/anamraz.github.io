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
npm test
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

## Public links

Public profile, email, and résumé links are centralized in
[`src/content/site.ts`](src/content/site.ts). The phone-free website résumé is
available at `/resume.pdf`, with a download link beside the existing hero actions.
Career facts follow the owner-supplied 2026 résumé. ATARVI is in active development
and pilot preparation; its project information stays on this portfolio.

The existing design and page structure are retained. `npm test` checks the built
page with Node's built-in test runner; run `npm run build` first.

## License

[MIT](LICENSE)
