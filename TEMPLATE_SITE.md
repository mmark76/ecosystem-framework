# Dashboard Template Site

This repository includes a minimal deployable reference dashboard intended to be published at:

`template.markellosecosystem.com`

## Files

- `index.html` — semantic page structure and sample content.
- `dashboard.css` — responsive dashboard shell and component styling.
- `dashboard.js` — current year, mobile navigation and build identification.
- `design-system/tokens/tokens.css` — shared ecosystem design tokens.
- `PROJECT_DASHBOARD_GUIDE.md` — governing dashboard standard.

## Purpose

The page is a visual and implementation reference, not a complete application. It demonstrates the default ecosystem structure:

**Header → Main Content → Footer**

with:

- project/category label,
- clear project name,
- limited primary navigation,
- utility area,
- return link to `markellosecosystem.com`,
- simple dashboard cards,
- current phase/status block,
- copyright information,
- visible version/build identification.

## Reuse

For a new project:

1. Copy `index.html`, `dashboard.css` and `dashboard.js`.
2. Reuse the shared design tokens or the approved project adapter.
3. Replace the project label, project name, navigation and cards with real project content.
4. Remove sections and utilities that are not needed.
5. Preserve the Header/Main/Footer identity rules from `PROJECT_DASHBOARD_GUIDE.md`.
6. Set the real project version in the `build-version` meta element.
7. During deployment, inject or replace `build-date` and `build-commit` when the build system supports it.

Do not invent a commit SHA. If no build metadata is available, the template intentionally displays `TEMPLATE` instead.

## Deployment

The site has no dependency manifest, build step or runtime backend. Serve the repository root as a static site. The custom host can then map `template.markellosecosystem.com` to that static deployment.

The root `index.html` is deliberately used so the deployment does not require a custom output directory.
