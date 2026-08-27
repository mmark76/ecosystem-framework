# Cloudflare Pages Deployment Evidence

## Record

- Requirement: `OPS-001`
- Acceptance criterion: `AC-OPS-001`
- Test ID: `TEST-OPS-001`
- Verification date: 2026-08-27
- Source commit: `b2b5ef9f09d3243956e31b019e388b1d4587a1dd`
- Pages project: `template-markellosecosystem`
- Pages hostname: `https://template-markellosecosystem.pages.dev`
- Custom hostname: `https://template.markellosecosystem.com`

No Cloudflare account identifiers, credentials, API tokens, certificate
material, or private dashboard exports are included in this evidence.

## Source and Configuration Inspection

- The requested `docs/add-basic-dashboard-template` branch was no longer present
  on the remote because PR #5 had merged it into commit
  `b2b5ef9f09d3243956e31b019e388b1d4587a1dd` and deleted the branch.
- The exact merge commit was deployed without merging another branch.
- `index.html` is the repository-root entry point.
- `dashboard.css`, `dashboard.js`, and
  `design-system/tokens/tokens.css` are local static assets.
- No package manifest, build step, backend, runtime configuration, Wrangler
  configuration, or `.openai/hosting.json` is required.
- The uploaded ZIP was generated with `git archive`, contained tracked files
  from the approved commit only, and excluded `.git` and untracked local files.
- A pre-change filtered DNS inspection found no existing record for the custom
  hostname, so no conflicting or destructive DNS change was required.

## Cloudflare Result

- Direct Upload project creation: passed.
- Initial production deployment: passed.
- Pages hostname allocation: `template-markellosecosystem.pages.dev`.
- Pages custom-domain association: passed.
- Pages custom-domain status after activation: `Active`.
- DNS change confirmed by Cloudflare: proxied `CNAME` named `template`, target
  `template-markellosecosystem.pages.dev`, TTL Auto.
- Public DNS returned Cloudflare IPv4 and IPv6 addresses, as expected for the
  proxied hostname.

## HTTPS and Asset Checks

| Check | Result | Content type or observation |
|---|---|---|
| Pages hostname `/` | `200` | `text/html; charset=utf-8` |
| Custom hostname `/` | `200` | `text/html; charset=utf-8` |
| `/dashboard.css` | `200` | `text/css; charset=utf-8` |
| `/dashboard.js` | `200` | `application/javascript` |
| `/design-system/tokens/tokens.css` | `200` | `text/css; charset=utf-8` |
| `/PROJECT_DASHBOARD_GUIDE.md` | `200` | `text/markdown; charset=utf-8` |
| Unknown verification path | `404` | `text/html; charset=utf-8` |

Both production hostnames completed TLS negotiation without certificate errors.
The responses were served by Cloudflare and included the repository-defined
`x-content-type-options`, `referrer-policy`, and `permissions-policy` headers.

## Rendered Dashboard Checks

- Page title: `Project Dashboard Template`.
- Primary navigation: Home, Overview, Documents, About.
- Ecosystem return link: `https://markellosecosystem.com/`.
- Documentation and repository links: present.
- Footer: present with the 2026 copyright year.
- Visible build/version identifier: `v1.0.0_TEMPLATE`.
- Narrow viewport: the menu control replaced desktop navigation.
- Mobile interaction: `aria-expanded` changed from `false` to `true`, and the
  primary navigation became exposed after activation.
- No Cloudflare error page, broken local asset, or missing intended dashboard
  content was observed.

## Result

`TEST-OPS-001`: PASSED. `AC-OPS-001` is verified.
