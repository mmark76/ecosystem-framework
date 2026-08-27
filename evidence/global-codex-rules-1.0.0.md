# Global Codex Rules 1.0.0 Verification Evidence

## Scope

- Requirement: `FWK-005`
- Acceptance criterion: `AC-FWK-005`
- Verification: `TEST-FWK-005`
- Starting commit: `b2b5ef9f09d3243956e31b019e388b1d4587a1dd`
- Task branch: `chore/adopt-global-codex-rules`

## Verification performed

- Compared `GLOBAL_CODEX_RULES.md` with the owner-provided canonical rules: exact match after newline normalization.
- Verified the managed block in root `AGENTS.md` matches `GLOBAL_CODEX_RULES.md` exactly.
- Verified one begin marker, one end marker, and global rules version `1.0.0`.
- Verified the existing template-specific `AGENTS.md` content remains after the managed block and precedence statement.
- Ran `python -m py_compile scripts/sync_global_codex_rules.py` successfully.
- Ran the helper against the template repository and confirmed it reports `Already synchronized`.
- Tested dry-run, write, and idempotent no-op behavior while preserving repository-specific content.
- Tested selection of a non-empty root `AGENTS.override.md` without modifying a competing root `AGENTS.md`.
- Tested that an empty root override is skipped and the root `AGENTS.md` is updated.
- Ran `git diff --check` successfully.

## Security and behavior review

The helper uses only the Python standard library. It does not run Git commands, read credentials, contact external services, push branches, force-update refs, create pull requests, or merge changes. Writes require the explicit `--write` flag and are limited to the effective root Codex instruction file.

## Result

`TEST-FWK-005`: PASS
