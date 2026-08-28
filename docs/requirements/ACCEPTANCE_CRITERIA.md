# Acceptance Criteria

Every mandatory objective must have objective, measurable, and testable criteria.

## Approved Framework Remediation Criteria

| Criterion ID | Requirement ID | Given / Preconditions | When / Action | Then / Expected Result | Blocking | Verification | Status |
|---|---|---|---|---|---|---|---|
| AC-FWK-001 | FWK-001 | PR #2 introduced the shared UI/UX system and left three audit findings open before this remediation. | The token JSON, CSS adapter, typography specification, and traceability records are inspected. | The integration has an approved traceability chain; every prescribed line height maps to a named JSON and CSS token; and CSS exposes all JSON font weights with matching names and values. | Yes | TEST-FWK-001 | VERIFIED |
| AC-FWK-002 | FWK-002 | A repository is newly created from this template. | The initialization gate and development workflow references are followed. | The gate checks every initialization item required by FWK-002, is linked from README, AGENTS, the documentation index, the framework lifecycle, and development readiness, and requires unresolved items to block readiness. | Yes | TEST-FWK-002 | VERIFIED |
| AC-FWK-003 | FWK-003 | The template has no repository-level version source or upgrade history. | Framework version references and upgrade documents are inspected. | One SemVer value is the framework source of truth; README, changelog, and upgrade guidance agree with it; and the initial-version rationale and backward-compatible adoption process are documented. | Yes | TEST-FWK-003 | VERIFIED |
| AC-FWK-004 | FWK-004 | Template documents contain blank rows with realistic identifiers. | Identifier-bearing instructional rows and their initialization instructions are inspected. | All shipped instructional rows use `EXAMPLE-*` identifiers, explicitly state that they are not project data, and direct adopters to replace or remove them before approval. | Yes | TEST-FWK-004 | VERIFIED |
| AC-FWK-005 | FWK-005 | Codex local and cloud environments require a shared baseline without replacing project instructions. | The canonical file, managed root block, synchronization documentation, and helper behavior are inspected and tested. | Global rules version 1.0.0 matches the managed block exactly; project content remains outside the markers; the effective root override is honored; dry-run is the default; and writes preserve content outside the managed block. | Yes | TEST-FWK-005 | VERIFIED |
| AC-FWK-006 | FWK-006 | A future project adopts the canonical dashboard shell. | The header is inspected and operated at narrow, medium, and wide widths. | Project identity remains distinct; the seven required utilities occur in the approved logical order; the Assistant exposes a project-specific avatar, name, and visible status; the ecosystem link has the approved target; and every control remains available. | Yes | TEST-FWK-006 | VERIFIED |
| AC-FWK-007 | FWK-007 | Browser storage is available or unavailable and the Settings dialog is operated by keyboard and pointer. | Each appearance control is changed, the page is reloaded, reset is activated, and dialog open/close/Escape/focus behavior is checked. | Valid appearance values apply and persist under one namespaced key; invalid stored values fall back safely; reset restores defaults; unavailable storage does not break the UI; focus is contained by the modal and returns to Settings; and no non-appearance data is stored. | Yes | TEST-FWK-007 | VERIFIED |
| AC-FWK-008 | FWK-008 | The reference has no deployment metadata and a test uses real repository Git metadata. | Info, footer, build formatting, and Cyprus timezone handling are inspected and tested. | Info has the required groups and safe placeholder behavior; the footer has exactly two logical lines; the reference displays an explicit template build ID without a fabricated SHA; a real populated build ID matches the canonical regex; winter and summer timestamps prove `Europe/Nicosia` DST behavior; and the user-facing HTML contains no GitHub link. | Yes | TEST-FWK-008 | VERIFIED |
| AC-FWK-009 | FWK-009 | The static shell runs with HTML, CSS, vanilla JavaScript, and approved tokens only. | Source, browser runtime, responsive layouts, keyboard flow, focus, zoom/text sizing, contrast, reduced motion, localization controls, storage, and external resources are reviewed. | No framework, dependency, backend, analytics, authentication, unsafe DOM injection, console error, horizontal overflow, keyboard trap, missing required control, or unapproved deployment/project change is present; future-only adoption is explicit in the UI and documentation. | Yes | TEST-FWK-009 | VERIFIED |

## Approved Production Deployment Criterion

| Criterion ID | Requirement ID | Given / Preconditions | When / Action | Then / Expected Result | Blocking | Verification | Status |
|---|---|---|---|---|---|---|---|
| AC-OPS-001 | OPS-001 | The approved dashboard source is the repository-root static site at commit `b2b5ef9f09d3243956e31b019e388b1d4587a1dd`, and the `markellosecosystem.com` zone is managed in Cloudflare. | The source is deployed to the `template-markellosecosystem` Pages project and its custom domain is activated and checked. | Both HTTPS hostnames return the intended dashboard with successful asset responses; the custom domain is Active in Pages; public DNS resolves through Cloudflare; desktop and mobile navigation, the ecosystem return link, stable footer, and visible version are present; and deployment and recovery instructions are recorded without secrets. | Yes | TEST-OPS-001 | VERIFIED |

## Project Criteria Template

> **Initialization instruction:** Replace or remove every `EXAMPLE-*` row. An
> example criterion is never evidence that a project requirement was approved or
> verified.

| Criterion ID | Requirement ID | Given / Preconditions | When / Action | Then / Expected Result | Blocking | Verification | Status |
|---|---|---|---|---|---|---|---|
| EXAMPLE-AC-001 | EXAMPLE-FUNC-001 | Replace with real preconditions. | Replace with a measurable action. | Replace with an observable result. | Yes | Define a real verification method. | NOT PROJECT DATA |

## Quality Rules

Acceptance criteria must not rely only on phrases such as:

- works correctly,
- user friendly,
- secure,
- fast,
- professional,
- production ready.

Replace them with measurable behavior, limits, tests, or evidence.
