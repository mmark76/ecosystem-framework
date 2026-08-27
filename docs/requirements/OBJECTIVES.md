# Objectives and Requirements

## Status Values

`DRAFT`, `APPROVED`, `IN_PROGRESS`, `IMPLEMENTED`, `VERIFIED`, `DEFERRED`, `REJECTED`, `BLOCKED`

## Approved Framework Maintenance Objective

| ID | Objective | Type | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| OBJ-FWK-001 | Remediate the highest-priority framework audit findings while preserving the template architecture and dashboard standard. | Framework maintenance | Critical | Yes | mmark76 | AC-FWK-001 through AC-FWK-004 | VERIFIED |

Approval source: repository-owner remediation request dated 2026-08-27.

## Framework Maintenance Requirements

| ID | Objective ID | Requirement | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| FWK-001 | OBJ-FWK-001 | The UI/UX design-system integration must be traceable, prescribe only available line-height tokens, and expose every JSON font-weight token through the CSS adapter. | Critical | Yes | mmark76 | AC-FWK-001 | VERIFIED |
| FWK-002 | OBJ-FWK-001 | A project initialization gate must verify identity, ownership, criticality/profile, scope, theme applicability, safe template replacement, real project commands, environment/secrets policy, and project documentation before development readiness. | Critical | Yes | mmark76 | AC-FWK-002 | VERIFIED |
| FWK-003 | OBJ-FWK-001 | The framework must have one repository-level semantic version source, a changelog, and backward-compatible upgrade guidance. | High | Yes | mmark76 | AC-FWK-003 | VERIFIED |
| FWK-004 | OBJ-FWK-001 | Instructional identifiers must be explicitly marked as examples and must not appear to be approved project records. | High | Yes | mmark76 | AC-FWK-004 | VERIFIED |

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
