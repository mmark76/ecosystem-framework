# Cloudflare Pages Deployment

## Production Mapping

| Item | Value |
|---|---|
| Requirement | `OPS-001` |
| Cloudflare Pages project | `template-markellosecosystem` |
| Pages hostname | `https://template-markellosecosystem.pages.dev` |
| Custom hostname | `https://template.markellosecosystem.com` |
| Deployment model | Cloudflare Pages Direct Upload |
| Published directory | Repository root |
| Build command | None |
| Backend or runtime service | None |
| Initial production source | `b2b5ef9f09d3243956e31b019e388b1d4587a1dd` |

The requested source branch, `docs/add-basic-dashboard-template`, was merged by
PR #5 and then deleted. The initial deployment therefore used the exact merge
commit above without recreating or merging the branch.

The repository-root `CNAME` file documents the intended hostname for compatible
static hosts. It does not associate a hostname with Cloudflare Pages. The Pages
custom-domain configuration is authoritative.

## Deployment Procedure

1. Confirm that the approved source commit is available locally and that the
   repository worktree contains no unintended files.
2. Inspect `index.html` and its local asset references. The production entry
   point must remain at the repository root.
3. Create an archive containing only files tracked by the approved commit:

   ```powershell
   git archive --format=zip --output=template-repo-deploy.zip <approved-commit>
   ```

4. In Cloudflare, open **Workers & Pages**, select the
   `template-markellosecosystem` Pages project, and create a Direct Upload
   deployment from the archive. Do not configure a build command.
5. Confirm that the deployment succeeds at the Pages hostname before changing
   or verifying the custom domain.
6. In the Pages project's **Custom domains** tab, confirm that
   `template.markellosecosystem.com` is associated with the project and reaches
   `Active` status. Cloudflare manages the proxied DNS record for this zone.
7. Run the verification checks below and record the approved source commit in
   release evidence.

For CLI deployments, authenticate Wrangler with a least-privilege Cloudflare
API token and run `wrangler pages deploy . --project-name template-markellosecosystem`
from an approved, clean source checkout. Never commit or print the token. The
dashboard upload procedure is the baseline because it does not require a local
credential.

Direct Upload projects cannot be converted to Git integration. A migration to
Git-based deployment requires a separately approved replacement project. See
the [Cloudflare Direct Upload documentation](https://developers.cloudflare.com/pages/get-started/direct-upload/).

## DNS and Custom Domain

The initial activation created the only required DNS mapping:

| Type | Name | Target | TTL |
|---|---|---|---|
| CNAME (proxied) | `template` | `template-markellosecosystem.pages.dev` | Auto |

Always add or change the hostname through the Pages custom-domain workflow.
Creating only a DNS CNAME does not establish the required Pages association.
See the [Cloudflare custom-domain documentation](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Verification

After every production deployment, verify:

- both production hostnames return HTTPS `200` for `/`;
- `dashboard.css`, `dashboard.js`, and
  `design-system/tokens/tokens.css` return `200` with appropriate content types;
- `PROJECT_DASHBOARD_GUIDE.md` is reachable from the documentation card;
- an unknown route returns the repository's HTML `404` response;
- the page title and main dashboard content are present;
- desktop navigation and the narrow-layout menu work;
- the ecosystem return link targets `https://markellosecosystem.com/`;
- the footer, copyright year, and `v1.0.0_TEMPLATE` identifier are visible;
- Cloudflare Pages reports the custom domain as `Active`; and
- public DNS and the TLS certificate resolve without browser or Cloudflare
  errors.

Example checks:

```powershell
curl.exe -I https://template-markellosecosystem.pages.dev/
curl.exe -I https://template.markellosecosystem.com/
Resolve-DnsName template.markellosecosystem.com
```

## Recovery

If a deployment is defective, create a new Direct Upload deployment from the
last verified source commit. Re-run every verification check before declaring
recovery complete. Do not delete or repoint the custom domain unless an approved
incident or change record explicitly requires it.

The site has no database, server-side state, runtime secrets, or backend service.
Recovery therefore consists of restoring a verified static artifact and
confirming DNS and HTTPS health.
