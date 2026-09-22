# Rawnaz Anam — Engineering Portfolio

Astro portfolio for **Rawnaz Anam**, with the headline **Senior Software Engineer | .NET · Angular · Enterprise Integrations**. Employment history retains the résumé title **Senior Software Developer**.

The page presents an introduction, professional experience, three selected projects, technical skills, education, and contact details. Selected work covers ongoing enterprise web/PWA modernization, ERP/workflow automation, and **ATARVI**, an independent restaurant operations product in active development and pilot preparation.

## Local development

Use Node.js **22.12 or newer** (Node.js **24** in CI) and npm 10 or newer.

```sh
npm ci
npm run dev
```

Run checks and preview the production build:

```sh
npm run check
npm run build
npm test
npm run preview
```

The preview normally runs at `http://localhost:4321`; static output is in `dist/`. Tests use Node's built-in test runner and require a current production build. No test dependencies are added.

## Content and assets

- `src/content/site.ts`: shared headline, metadata copy, career history, projects, skills, education, and links.
- `src/pages/index.astro`: page hierarchy and contact/résumé actions.
- `src/layouts/BaseLayout.astro`: metadata, structured data, initial theme, and shared document shell.
- `src/components/`: navigation, section headings, and project summaries.
- `src/styles/global.css`: responsive navy/neutral styling, both themes, keyboard focus, and reduced motion.
- `public/resume.pdf`: owner-authorized phone-free website résumé, prepared from the supplied 2026 Word résumé. The original private document is not stored here.
- `src/assets/social-card.svg` and `public/social-card.png`: matching editable and rendered social previews (1200 × 630).
- `tests/portfolio.test.mjs`: built-page regression checks for navigation, metadata, approved destinations, project stages, and the résumé asset.

The résumé action downloads `/resume.pdf`. Email, LinkedIn, and GitHub use the supplied résumé's destinations. ATARVI information stays on the portfolio; no external product destination is configured.

Keep career content aligned with the owner-approved résumé. Dates and overlapping freelance experience should not be combined to inflate tenure. Project descriptions distinguish current development from completed outcomes.

## Deployment

The existing `.github/workflows/deploy.yml` builds and deploys GitHub Pages on pushes to `main` or manual dispatch. The Astro site URL is `https://anamraz.github.io`, without a subdirectory base. No deployment workflow or repository permissions are changed by this update.

Content and changes require owner approval before publication. A local build does not establish that a deployment succeeded.

## License

[MIT](LICENSE)
