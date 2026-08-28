# Requirements Traceability Matrix

## Framework Maintenance Traceability

| Requirement ID | Scope ID | Design / ADR | Implementation | Test IDs | Evidence | Owner | Status |
|---|---|---|---|---|---|---|---|
| FWK-001 | SCOPE-FWK-001 | `UI_UX_RULES.md`; `docs/design/UI_UX_DESIGN_SYSTEM.md`; no new ADR required | `design-system/tokens/tokens.json`; `design-system/tokens/tokens.css`; requirements records | TEST-FWK-001 | `evidence/framework-1.0.0-remediation.md` | mmark76 | VERIFIED |
| FWK-002 | SCOPE-FWK-002 | `FRAMEWORK.md`; no new ADR required | `checklists/INITIALIZATION_GATE.md`; workflow references | TEST-FWK-002 | `evidence/framework-1.0.0-remediation.md` | mmark76 | VERIFIED |
| FWK-003 | SCOPE-FWK-003 | Semantic Versioning; no new ADR required | `FRAMEWORK_VERSION`; `CHANGELOG.md`; `UPGRADE_GUIDE.md` | TEST-FWK-003 | `evidence/framework-1.0.0-remediation.md` | mmark76 | VERIFIED |
| FWK-004 | SCOPE-FWK-004 | Existing documentation model; no new ADR required | Project template documents containing instructional ID rows | TEST-FWK-004 | `evidence/framework-1.0.0-remediation.md` | mmark76 | VERIFIED |
| FWK-005 | SCOPE-FWK-005 | Codex `AGENTS.md` discovery model; no new ADR required | `GLOBAL_CODEX_RULES.md`; `AGENTS.md`; `scripts/sync_global_codex_rules.py`; `docs/governance/GLOBAL_CODEX_RULES_SYNC.md` | TEST-FWK-005 | `evidence/global-codex-rules-1.0.0.md` | mmark76 | VERIFIED |
| FWK-006 | SCOPE-FWK-006 | `PROJECT_DASHBOARD_GUIDE.md`; existing static-site architecture; no new ADR required | `index.html`; `dashboard.css`; `dashboard.js` | TEST-FWK-006 | `evidence/canonical-dashboard-shell-2.0.0.md` | mmark76 | VERIFIED |
| FWK-007 | SCOPE-FWK-007 | `docs/design/UI_UX_DESIGN_SYSTEM.md`; browser storage is an untrusted local boundary | `index.html`; `dashboard.css`; `dashboard.js` | TEST-FWK-007 | `evidence/canonical-dashboard-shell-2.0.0.md` | mmark76 | VERIFIED |
| FWK-008 | SCOPE-FWK-008 | `PROJECT_DASHBOARD_GUIDE.md`; `TEMPLATE_SITE.md`; semantic versioning | `index.html`; `dashboard.js`; `FRAMEWORK_VERSION`; `CHANGELOG.md`; `UPGRADE_GUIDE.md` | TEST-FWK-008 | `evidence/canonical-dashboard-shell-2.0.0.md` | mmark76 | VERIFIED |
| FWK-009 | SCOPE-FWK-009 | `UI_UX_RULES.md`; `docs/design/UI_UX_DESIGN_SYSTEM.md`; `docs/security/THREAT_MODEL.md` | `index.html`; `dashboard.css`; `dashboard.js`; `tests/dashboard-shell.test.cjs`; canonical documentation | TEST-FWK-009 | `evidence/canonical-dashboard-shell-2.0.0.md` | mmark76 | VERIFIED |

## Production Deployment Traceability

| Requirement ID | Scope ID | Design / ADR | Implementation | Test IDs | Evidence | Owner | Status |
|---|---|---|---|---|---|---|---|
| OPS-001 | SCOPE-OPS-001 | `DEPLOYMENT.md`; `docs/DEPLOYMENT_CLOUDFLARE.md`; no new ADR required | Cloudflare Pages project `template-markellosecosystem`; custom domain `template.markellosecosystem.com` | TEST-OPS-001 | `evidence/cloudflare-pages-deployment.md` | mmark76 | VERIFIED |

## Project Traceability Template

> **Initialization instruction:** Replace or remove this `EXAMPLE-*` row before
> approving project scope. It is not a real requirement, decision, test, or
> verification record.

| Requirement ID | Scope ID | Design / ADR | Implementation | Test IDs | Evidence | Owner | Status |
|---|---|---|---|---|---|---|---|
| EXAMPLE-FUNC-001 | EXAMPLE-SCOPE-001 | EXAMPLE-ADR-001 | Replace with implementation references. | EXAMPLE-TEST-001 | Replace with evidence references. | Unassigned | NOT PROJECT DATA |

## Completion Rule

No mandatory requirement may reach `VERIFIED` without implementation, applicable tests, evidence, and updated documentation.
