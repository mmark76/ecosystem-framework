# Definition of Done

A task is `COMPLETE` only when all applicable conditions below are satisfied.

## Functional

- Approved requirement IDs are implemented.
- Acceptance criteria pass.
- Edge cases and error paths are handled.
- No unapproved scope was added.

## Architecture

- Code is in the correct module and layer.
- Module boundaries remain intact.
- No new circular dependency exists.
- No unjustified duplication or speculative abstraction was introduced.
- Significant decisions or deviations are documented.

## Security and Data

- Relevant threats and controls were reviewed.
- Authorization and validation are enforced in trusted code.
- No secrets or sensitive data were exposed.
- Data, privacy, logging, and retention requirements are satisfied.

## UI/UX and Accessibility

For every user-facing change:

- `UI_UX_RULES.md` and the approved app theme are followed.
- Semantic design tokens are used; no arbitrary ecosystem-wide values were introduced.
- Existing shared components are reused where appropriate.
- Required loading, empty, error, offline, and success states are handled.
- Narrow, medium, and wide layouts are verified where applicable.
- Keyboard operation, focus visibility and order, contrast, text scaling, touch targets, and reduced motion are verified.
- Greek and English content works where supported.
- Material visual changes have screenshots, recordings, or equivalent evidence.
- Any deviation is approved and recorded in `docs/governance/EXCEPTIONS.md`.

## Quality

- Formatting passes.
- Linting passes.
- Type checking passes where applicable.
- Required tests pass.
- Accessibility tests pass where applicable.
- Build passes.
- Required security and dependency scans pass.
- Regression coverage exists for significant fixes where practical.

## Documentation and Evidence

- Documentation reflects the implementation.
- Traceability is updated.
- Test and verification evidence is recorded.
- Known limitations and deferred work are explicit.
- No required evidence is missing.

## Cleanup Boundary

Completion does not require unrelated cleanup or optional optimization. Such work belongs in `FUTURE_BACKLOG.md` unless formally added to scope.
