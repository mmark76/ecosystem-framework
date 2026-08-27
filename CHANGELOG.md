# Changelog

All notable changes to the repository-level application framework are recorded
here. Framework releases use semantic versioning: major for breaking adoption
changes, minor for backward-compatible additions, and patch for
backward-compatible fixes.

`FRAMEWORK_VERSION` is the single source of truth for the current framework
version. Project/application versions and component versions, such as the design
system token version, are independent.

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
