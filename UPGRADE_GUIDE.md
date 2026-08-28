# Framework Upgrade Guide

Use this guide to adopt framework changes in repositories created from an older
version of this template without overwriting project-specific decisions.

## Version Sources

- `FRAMEWORK_VERSION` is the source of truth for the adopted repository-level framework version. The current framework version is 2.0.0.
- `CHANGELOG.md` describes framework changes by semantic version.
- Project/application versions remain project-owned and must continue to drive the visible version/build identity required by `PROJECT_DASHBOARD_GUIDE.md`.
- Component versions, including the design-system token version, are independent and are updated according to their own compatibility rules.

Repositories created before `FRAMEWORK_VERSION` existed may record their current
baseline as `pre-1.0-unversioned` while preparing the upgrade. Do not represent an
unknown prior version as a known release.

## Upgrade Process

1. Create a dedicated upgrade branch and record the current framework baseline.
2. Read every `CHANGELOG.md` entry after that baseline and identify the applicable mandatory changes.
3. Compare the newer template files with the project's copies. Preserve approved project scope, IDs, owners, architecture decisions, security controls, UI/UX decisions, exceptions, and evidence.
4. Apply the smallest compatible framework changes. Do not replace project-specific documents wholesale.
5. Resolve any breaking change explicitly through `CHANGE_CONTROL.md`; do not silently weaken project governance.
6. Run `checklists/INITIALIZATION_GATE.md` for newly introduced initialization requirements, then rerun the affected readiness, quality, security, UI/UX, and completion gates.
7. Update traceability and record upgrade evidence, known limitations, deviations, and deferred work.
8. Set `FRAMEWORK_VERSION` to the adopted version only after the applicable upgrade criteria pass.

## Version Change Expectations

- Major releases may require project decisions or migrations and must include explicit breaking-change instructions.
- Minor releases add backward-compatible capabilities. Adopt the relevant additions without discarding project customizations.
- Patch releases contain compatible corrections and should not require project architecture changes.

Skipping versions is allowed only when all intervening changelog entries and
upgrade instructions are reviewed and satisfied.

## Adopting the 2.0.0 Canonical Dashboard Shell

Version 2.0.0 replaces the prior dashboard-shell contract. Adoption is not
automatic. Every existing repository or deployed dashboard requires its own
approved task, impact review, verification evidence, and deployment approval.

For an approved adoption:

1. Preserve the project's identity, content, navigation, scope, and approved
   theme while mapping its shell to `PROJECT_DASHBOARD_GUIDE.md`.
2. Customize the Assistant avatar and name without changing the shared
   Assistant component contract.
3. Supply complete Greek and English project strings before claiming full
   localization. The reference translates shell controls only and says so.
4. Keep appearance storage limited to the validated preferences documented in
   `TEMPLATE_SITE.md`; do not add user, analytics, authentication, or sensitive
   data to that store.
5. Inject the real semantic version, Cyprus-local build date/time, and Git SHA
   into the build metadata. Never replace the template placeholders with
   invented values.
6. Run the dependency-free shell tests plus project-specific browser,
   accessibility, security, and responsive checks.
7. Deploy only through the project's separately approved release process.

## Adopting the 1.1.0 Codex Rules Baseline

1. Treat `GLOBAL_CODEX_RULES.md` from `mmark76/template-repo` as the canonical shared source.
2. Determine the effective root Codex instruction file: use a non-empty root `AGENTS.override.md` when present; otherwise use root `AGENTS.md`.
3. Preview synchronization with `scripts/sync_global_codex_rules.py` and review the complete diff before using `--write`.
4. Preserve project-specific content outside the managed markers and keep it after the shared block so it can specialize the defaults.
5. Verify markers, global rules version, retained project content, and final diff on a dedicated branch before opening a pull request.

This addition does not authorize replacing project-specific instructions, creating a competing root override, force-pushing, or merging automatically.

## Adopting the 1.0.0 Baseline

For an older unversioned repository, review and adopt as applicable:

- `FRAMEWORK_VERSION`, `CHANGELOG.md`, and this guide;
- `checklists/INITIALIZATION_GATE.md` and its workflow integrations;
- the approved framework traceability records in `docs/requirements/`;
- the explicit `EXAMPLE-*` marker convention for instructional rows;
- design-system 1.1.0 typography additions in `design-system/tokens/`.

Keep the project's existing approved requirements and decisions. Record any
inapplicable framework change with a reason and owner rather than deleting a
control silently.
