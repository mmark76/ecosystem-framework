# Acceptance Criteria

Every mandatory objective must have objective, measurable, and testable criteria.

## Approved Framework Remediation Criteria

| Criterion ID | Requirement ID | Given / Preconditions | When / Action | Then / Expected Result | Blocking | Verification | Status |
|---|---|---|---|---|---|---|---|
| AC-FWK-001 | FWK-001 | PR #2 introduced the shared UI/UX system and its three audit findings remain open. | The token JSON, CSS adapter, typography specification, and traceability records are inspected. | The integration has an approved traceability chain; every prescribed line height maps to a named JSON and CSS token; and CSS exposes all JSON font weights with matching names and values. | Yes | TEST-FWK-001 | APPROVED |
| AC-FWK-002 | FWK-002 | A repository is newly created from this template. | The initialization gate and development workflow references are followed. | The gate checks every initialization item required by FWK-002, is linked from README, AGENTS, the documentation index, the framework lifecycle, and development readiness, and requires unresolved items to block readiness. | Yes | TEST-FWK-002 | APPROVED |
| AC-FWK-003 | FWK-003 | The template has no repository-level version source or upgrade history. | Framework version references and upgrade documents are inspected. | One SemVer value is the framework source of truth; README, changelog, and upgrade guidance agree with it; and the initial-version rationale and backward-compatible adoption process are documented. | Yes | TEST-FWK-003 | APPROVED |
| AC-FWK-004 | FWK-004 | Template documents contain blank rows with realistic identifiers. | Identifier-bearing instructional rows and their initialization instructions are inspected. | All shipped instructional rows use `EXAMPLE-*` identifiers, explicitly state that they are not project data, and direct adopters to replace or remove them before approval. | Yes | TEST-FWK-004 | APPROVED |

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
