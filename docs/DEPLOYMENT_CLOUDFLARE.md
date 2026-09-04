# Framework Cloudflare Pages deployment

## Verified mapping (2026-09-04)

| Item | Value |
|---|---|
| Canonical dashboard | https://framework.markellosecosystem.com/ |
| Identity | Ecosystem Framework — The DNA |
| Cloudflare Pages project | `template-markellosecosystem` (existing name) |
| Pages hostname | https://template-markellosecosystem.pages.dev/ |
| Model | Direct Upload; no Git connection |
| Existing legacy alias | https://template.markellosecosystem.com/ |
| Pre-change production deployment | `f171acfd-4fda-40b1-bfab-fbff845199bf` |

Both existing custom domains belong to the same production project and serve the
same artifact. Updating Framework also updates that existing alias; neither
association nor DNS changes in this release. The legacy project name and alias
are retained for compatibility. The Foundation Systems umbrella has a separate
project and foundations.markellosecosystem.com.

## Build and deploy

1. Review the PR and pass `node --check dashboard.js` and
   `node --test tests/dashboard-shell.test.cjs`. Merge to main. For the initial
   separation, both repositories' PRs must pass and merge first.
2. Fetch origin and record the exact merged origin/main SHA.
3. Run `node scripts/build-site.cjs <merged-main-sha> <new-output-directory>`.
   This reads tracked dashboard assets and existing documentation from that
   commit, excluding workflows and test/build scripts. It injects the real SHA
   and commit timestamp using Europe/Nicosia, and writes deployment.json.
4. Zip the contents of the output directory. In Cloudflare Workers & Pages select
   **template-markellosecosystem → Create deployment → Production** and upload
   the archive. Never upload the development worktree or another project's
   artifact. No Cloudflare build command, runtime secret or backend is required.
5. Record deployment ID, source SHA and archive checksum. Verify the Pages URL
   and canonical Framework hostname. Leave domains and access controls unchanged.

CI builds for validation only. It does not publish PR branches or merged changes.
Direct Upload follows the [Cloudflare procedure](https://developers.cloudflare.com/pages/get-started/direct-upload/).

## Verification

- HTTPS 200: /, /dashboard.css, /dashboard.js, /design-system/tokens/tokens.css,
  /deployment.json.
- deployment.json contains the exact merged SHA and the build ID shown in Info
  and the footer.
- Ecosystem Framework — The DNA identity, Framework-only cards and standards,
  lifecycle/change/completion references, and the Foundation Systems link work.
- Existing PROJECT_OPERATING_MODEL.md, PROJECT_DASHBOARD_GUIDE.md,
  UI_UX_RULES.md and docs/INDEX.md remain reachable.
- Unknown routes return HTTP 404 with working home navigation.
- Desktop, tablet, narrow layouts, menu, keyboard, Settings, Info, English/Greek
  shell controls and reduced motion remain usable.
- Both existing custom domains remain Active. Confirm the legacy alias responds;
  do not remove or repoint it.

## Recovery

Use Cloudflare Pages production rollback to the previous verified deployment,
or rebuild and upload its exact merged source commit. Retain custom domains and
DNS records. Verify dashboard assets, documentation, build identity and HTTPS
after recovery. The static site has no database or server-side state to migrate.

## Historical provenance

The original template reference was deployed at commit
`b2b5ef9f09d3243956e31b019e388b1d4587a1dd`. Older OPS-001 evidence records that
template deployment; it is historical evidence, not the current canonical
Framework or Foundation Systems mapping.
