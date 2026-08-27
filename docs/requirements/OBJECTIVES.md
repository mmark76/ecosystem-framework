# Objectives and Requirements

## Status Values

`DRAFT`, `APPROVED`, `IN_PROGRESS`, `IMPLEMENTED`, `VERIFIED`, `DEFERRED`, `REJECTED`, `BLOCKED`

## Approved Framework Maintenance Objective

| ID | Objective | Type | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| OBJ-FWK-001 | Remediate the highest-priority framework audit findings while preserving the template architecture and dashboard standard. | Framework maintenance | Critical | Yes | mmark76 | AC-FWK-001 through AC-FWK-004 | VERIFIED |
| OBJ-FWK-002 | Establish one canonical and portable baseline of global Codex working rules without weakening repository-specific authority. | Framework maintenance | Critical | Yes | mmark76 | AC-FWK-005 | VERIFIED |

Approval sources: repository-owner remediation requests dated 2026-08-27.

## Framework Maintenance Requirements

| ID | Objective ID | Requirement | Priority | Mandatory | Owner | Verification | Status |
|---|---|---|---|---|---|---|---|
| FWK-001 | OBJ-FWK-001 | The UI/UX design-system integration must be traceable, prescribe only available line-height tokens, and expose every JSON font-weight token through the CSS adapter. | Critical | Yes | mmark76 | AC-FWK-001 | VERIFIED |
| FWK-002 | OBJ-FWK-001 | A project initialization gate must verify identity, ownership, criticality/profile, scope, theme applicability, safe template replacement, real project commands, environment/secrets policy, and project documentation before development readiness. | Critical | Yes | mmark76 | AC-FWK-002 | VERIFIED |
| FWK-003 | OBJ-FWK-001 | The framework must have one repository-level semantic version source, a changelog, and backward-compatible upgrade guidance. | High | Yes | mmark76 | AC-FWK-003 | VERIFIED |
| FWK-004 | OBJ-FWK-001 | Instructional identifiers must be explicitly marked as examples and must not appear to be approved project records. | High | Yes | mmark76 | AC-FWK-004 | VERIFIED |
| FWK-005 | OBJ-FWK-002 | `GLOBAL_CODEX_RULES.md` must be the versioned canonical source; the root effective Codex instruction file must contain its marked portable block before preserved project rules; and a dry-run-first dependency-free helper must update only that block while respecting root override discovery. | Critical | Yes | mmark76 | AC-FWK-005 | VERIFIED |

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
