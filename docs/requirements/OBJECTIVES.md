# Objectives and Requirements

## Status Values

`DRAFT`, `APPROVED`, `IN_PROGRESS`, `IMPLEMENTED`, `VERIFIED`, `DEFERRED`, `REJECTED`, `BLOCKED`

## Approved Framework Maintenance Objective

| ID | Objective | Type | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| OBJ-FWK-001 | Remediate the highest-priority framework audit findings while preserving the template architecture and dashboard standard. | Framework maintenance | Critical | Yes | mmark76 | AC-FWK-001 through AC-FWK-004 | VERIFIED |
| OBJ-FWK-002 | Establish one canonical and portable baseline of global Codex working rules without weakening repository-specific authority. | Framework maintenance | Critical | Yes | mmark76 | AC-FWK-005 | VERIFIED |
| OBJ-FWK-003 | Establish a secure, accessible, dependency-free canonical dashboard shell for future Markellos ecosystem projects. | Framework maintenance | Critical | Yes | mmark76 | AC-FWK-006 through AC-FWK-009 | VERIFIED |

Approval sources: repository-owner remediation requests dated 2026-08-27 and canonical-dashboard request dated 2026-08-28.

## Framework Maintenance Requirements

| ID | Objective ID | Requirement | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| FWK-001 | OBJ-FWK-001 | The UI/UX design-system integration must be traceable, prescribe only available line-height tokens, and expose every JSON font-weight token through the CSS adapter. | Critical | Yes | mmark76 | AC-FWK-001 | VERIFIED |
| FWK-002 | OBJ-FWK-001 | A project initialization gate must verify identity, ownership, criticality/profile, scope, theme applicability, safe template replacement, real project commands, environment/secrets policy, and project documentation before development readiness. | Critical | Yes | mmark76 | AC-FWK-002 | VERIFIED |
| FWK-003 | OBJ-FWK-001 | The framework must have one repository-level semantic version source, a changelog, and backward-compatible upgrade guidance. | High | Yes | mmark76 | AC-FWK-003 | VERIFIED |
| FWK-004 | OBJ-FWK-001 | Instructional identifiers must be explicitly marked as examples and must not appear to be approved project records. | High | Yes | mmark76 | AC-FWK-004 | VERIFIED |
| FWK-005 | OBJ-FWK-002 | `GLOBAL_CODEX_RULES.md` must be the versioned canonical source; the root effective Codex instruction file must contain its marked portable block before preserved project rules; and a dry-run-first dependency-free helper must update only that block while respecting root override discovery. | Critical | Yes | mmark76 | AC-FWK-005 | VERIFIED |
| FWK-006 | OBJ-FWK-003 | The canonical dashboard header must show project identity on the left and, in order on the right, a customizable project Assistant with avatar and status, GR, EN, the ecosystem return link, Light/Dark, Settings, and Info. | Critical | Yes | mmark76 | AC-FWK-006 | VERIFIED |
| FWK-007 | OBJ-FWK-003 | Settings must provide accessible accent, background, font, text-size, and spacing controls with reset and close actions, persist only validated appearance preferences locally, and require no backend or dependency. | Critical | Yes | mmark76 | AC-FWK-007 | VERIFIED |
| FWK-008 | OBJ-FWK-003 | Info must contain the approved informational/legal items, copyright, and build identity; the footer must contain exactly the copyright and build lines; populated builds must use `vX.Y.Z_YYYYMMDD_HHMM_SHA` with `Europe/Nicosia` timestamps and real Git metadata; and no GitHub link may be visible in the dashboard UI. | Critical | Yes | mmark76 | AC-FWK-008 | VERIFIED |
| FWK-009 | OBJ-FWK-003 | The canonical shell must preserve all required controls without horizontal overflow at narrow, medium, and wide widths; provide explicit partial Greek/English localization behavior; meet applicable WCAG 2.2 AA interaction requirements; and remain a future-adoption standard that does not automatically change existing projects or deployments. | Critical | Yes | mmark76 | AC-FWK-009 | VERIFIED |

## Approved Production Operations Objective

| ID | Objective | Type | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| OBJ-OPS-001 | Make the reference dashboard publicly available through a secure, reproducible Cloudflare Pages deployment. | Operations | High | Yes | mmark76 | AC-OPS-001 | VERIFIED |

## Production Operations Requirement

| ID | Objective ID | Requirement | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| OPS-001 | OBJ-OPS-001 | The repository-root static site must be deployed without a build or backend, remain available at the Pages hostname and `template.markellosecosystem.com` over HTTPS, serve all dashboard assets, and have documented deployment, verification, and recovery steps. | High | Yes | mmark76 | AC-OPS-001 | VERIFIED |

## Project Objectives Template

> **Initialization instruction:** Replace or remove all `EXAMPLE-*` rows before
> approving project scope. Example rows are not objectives or requirements and
> must never be referenced as implementation authority.

| ID | Objective | Type | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| EXAMPLE-OBJ-001 | Replace with a measurable project objective or remove this row. | Product | Critical | Yes | Unassigned | Define project criteria | NOT PROJECT DATA |

## Requirement Prefixes

- `FUNC`: functional
- `NFR`: non-functional
- `SEC`: security
- `PRIV`: privacy
- `DATA`: data
- `ARCH`: architecture
- `OPS`: operations
- `TEST`: testing
- `LEGAL`: legal or regulatory
- `FWK`: template framework maintenance
