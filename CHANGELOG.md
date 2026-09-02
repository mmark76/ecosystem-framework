# Changelog

All notable changes to the repository-level application framework are recorded
here. Framework releases use semantic versioning: major for breaking adoption
changes, minor for backward-compatible additions, and patch for
backward-compatible fixes.

`FRAMEWORK_VERSION` is the single source of truth for the current framework
version. Project/application versions and component versions, such as the design
system token version, are independent.

## [2.1.0] - 2026-09-02

### Added

- Canonical `PROJECT_OPERATING_MODEL.md` for Markellos Ecosystem software and
  infrastructure projects.
- Hybrid Agile planning with product goals, roadmaps, backlogs, controlled
  iterations/change windows, verified increments, and continuous learning.
- DevOps delivery rules connecting Git/PR review, automated validation,
  security, deployment, runtime verification, operations, and recovery.
- GitOps principles for version-controlled declared state, reviewed change
  intent, reproducibility, actual-state verification, drift awareness, and
  controlled reconciliation without requiring a specific GitOps platform.
- Risk-based tailoring for lightweight, standard, and high-impact production
  changes.

### Changed

- `FRAMEWORK.md` now identifies Hybrid Agile + DevOps + GitOps principles as the
  ecosystem-wide operating model.
- Framework navigation now exposes the operating model as a first-class
  document.
- Existing repositories continue to adopt framework changes only through
  project-specific reviewed upgrades; no bulk production or repository mutation
  is authorized by this framework release.

## [2.0.0] - 2026-08-28

### Added

- A canonical future-project dashboard header with ordered Assistant, GR, EN,
  ecosystem return, Light/Dark, Settings, and Info utilities.
- Accessible native dialogs, validated appearance-only local persistence, an
  explicit Greek/English shell-localization contract, and dependency-free
  verification tests.
- Canonical `Europe/Nicosia` build timestamp handling and the visible
  `vX.Y.Z_YYYYMMDD_HHMM_SHA` production identity contract.
- Design-system component 1.2.0, exposing the existing neutral source tokens in
  the maintained CSS adapter for accessible light/dark role mappings.

### Changed

- The canonical footer now contains exactly the copyright line and build-ID
  line; informational/legal entries moved to Info.
- The reference dashboard no longer exposes a visible GitHub link.
- Existing projects do not adopt this breaking shell contract automatically;
  each migration requires a separate approved task.

## [1.1.0] - 2026-08-27

### Added

- Canonical shared Codex working rules in `GLOBAL_CODEX_RULES.md`, version 1.0.0.
- A marked portable copy in the effective root `AGENTS.md` for local and cloud Codex runs.
- Dry-run-first, dependency-free synchronization helper and rollout documentation that preserve repository-specific instructions.

### Changed

- Framework traceability and documentation navigation now cover the portable Codex-rules capability.

## [1.0.0] - 2026-08-27

### Added

- A mandatory project initialization gate before development readiness.
- Repository-level framework versioning and upgrade guidance.
- Explicit framework remediation scope, requirements, acceptance criteria, and traceability.

### Changed

- Template identifier rows are explicitly marked as examples rather than approved project data.
- The design-system component advances to 1.1.0 with additive typography tokens and a complete web typography adapter.

### Rationale for 1.0.0

This is the first formally versioned framework release, but the repository is
already a stable baseline: it defines product scope, architecture, security,
data, testing, operations, UI/UX, accessibility, evidence, and controlled
completion. A 1.0.0 baseline reflects that maturity; it does not imply that this
is the repository's first historical change.
