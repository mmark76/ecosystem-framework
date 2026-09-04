# Release Scope

## Framework Maintenance Scope

These records describe approved maintenance of this template repository. They are
framework provenance, not project scope inherited by repositories created from
the template.

| ID | Deliverable | Classification | Owner | Notes |
|---|---|---|---|---|
| SCOPE-FWK-001 | Resolve the open UI/UX design-system integration findings from PR #2. | Mandatory | mmark76 | Covers traceability, line-height tokens, and the web font-weight adapter. |
| SCOPE-FWK-002 | Add and integrate a project initialization gate. | Mandatory | mmark76 | Applies before development readiness in newly created projects. |
| SCOPE-FWK-003 | Establish simple semantic framework versioning and upgrade guidance. | Mandatory | mmark76 | Repository-level framework version only; no release automation. |
| SCOPE-FWK-004 | Make instructional identifier rows unmistakably non-project data. | Mandatory | mmark76 | Preserve the documentation model while preventing false approvals. |
| SCOPE-FWK-005 | Establish canonical, portable global Codex working rules with safe synchronization guidance. | Mandatory | mmark76 | Global rules version 1.0.0; repository-specific instructions remain authoritative. |
| SCOPE-FWK-006 | Establish the canonical future dashboard header and ordered utility controls. | Mandatory | mmark76 | Project identity plus Assistant, GR, EN, ecosystem return, Light/Dark, Settings, and Info. |
| SCOPE-FWK-007 | Add accessible, locally persisted appearance settings without a backend or dependency. | Mandatory | mmark76 | Appearance data only; validated before use. |
| SCOPE-FWK-008 | Establish the canonical Info content, two-line footer, and production build-identity contract. | Mandatory | mmark76 | `Europe/Nicosia`; no fabricated build metadata or visible GitHub link. |
| SCOPE-FWK-009 | Verify responsive, localization-shell, accessibility, and security behavior for the canonical shell. | Mandatory | mmark76 | Existing projects and deployments remain out of scope and require separate approval. |

Approval sources: repository-owner remediation requests dated 2026-08-27 and canonical-dashboard request dated 2026-08-28.

## Approved Production Deployment Scope

## Approved Foundation Systems separation (2026-09-04)

| ID | Deliverable | Classification | Owner | Notes |
|---|---|---|---|---|
| SCOPE-FWK-010 | Retain the Framework-only dashboard, canonical identity, standards and documentation; link to The Foundation Systems; validate and deploy the merged commit through the existing Pages project. | Mandatory | mmark76 | Owner task authorizes PR merge and deployment after both repositories pass review and checks. No Framework DNS or access changes. |

Earlier deployment scope below is retained as historical provenance.

| ID | Deliverable | Classification | Owner | Notes |
|---|---|---|---|---|
| SCOPE-OPS-001 | Publish the reference dashboard through Cloudflare Pages at `template.markellosecosystem.com` and record a reproducible deployment and verification procedure. | Mandatory | mmark76 | Direct Upload of the repository-root static site; no build command, backend, or runtime service. |

Approval source: repository-owner deployment request dated 2026-08-27.

## Project Release Template

> **Initialization instruction:** Replace every `EXAMPLE-*` row and all blank
> metadata below with approved project data, or remove it when it does not apply.
> Example rows are instructional only and are never approved scope.

## Release
- Version:
- Scope owner:
- Freeze date:
- Target release date:
- Scope status: Draft / Frozen / Changed

## In Scope

| ID | Deliverable | Classification | Owner | Notes |
|---|---|---|---|---|
| EXAMPLE-SCOPE-001 | Replace with a real deliverable or remove this row. | Mandatory | Unassigned | NOT PROJECT DATA |

## Out of Scope

| ID | Item | Reason | Possible future release |
|---|---|---|---|
| EXAMPLE-OUT-001 | Replace with a real excluded item or remove this row. | Example only | NOT PROJECT DATA |

## Release Boundaries

- Supported users:
- Supported platforms:
- Supported environments:
- Supported integrations:
- Supported data:
- Known limitations:

## Freeze Approval

- Product owner:
- Technical owner:
- Security owner:
- Date:
