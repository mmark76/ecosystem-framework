# UI/UX Review Checklist

Use this checklist for any pull request that changes user-facing behavior or presentation.

## Identity and Theme

- [ ] Correct approved app theme is applied.
- [ ] Approved monogram/wordmark asset is used without distortion.
- [ ] Accent color is used selectively.
- [ ] No unapproved palette or typography values were introduced.

## Tokens and Components

- [ ] Semantic design tokens are used.
- [ ] Existing shared components were reused where appropriate.
- [ ] New shared components have documented states and accessibility contracts.
- [ ] No feature styles redefine ecosystem-wide values.

## Layout and Responsive Behavior

- [ ] Narrow, medium, and wide layouts were checked.
- [ ] Content remains readable at 200% browser zoom where applicable.
- [ ] Text scaling does not remove content or functionality.
- [ ] Touch and pointer targets meet the minimum size.
- [ ] Navigation behavior is appropriate for each platform.

## Interaction States

- [ ] Default, hover, focus, active, disabled, and loading states are defined where applicable.
- [ ] Loading, empty, zero-results, error, offline, and success states are handled where applicable.
- [ ] Destructive actions use clear warnings and proportional confirmation.
- [ ] Motion respects reduced-motion preferences.

## Accessibility

- [ ] Keyboard-only operation was checked.
- [ ] Focus order and visibility were checked.
- [ ] Text, icons, and essential boundaries meet contrast requirements.
- [ ] Controls have accessible names.
- [ ] Fields have labels and associated errors.
- [ ] Dynamic status changes are announced where needed.
- [ ] Color is not the only status cue.

## Content and Localization

- [ ] Greek and English content were checked where supported.
- [ ] Labels are explicit and use sentence case.
- [ ] Dates, numbers, units, and currencies are locale-aware.
- [ ] Text expansion does not break the layout.

## Evidence

- [ ] Screenshots or recordings cover materially changed states.
- [ ] Automated checks and manual checks are recorded.
- [ ] Known limitations are documented.
- [ ] Any deviation is recorded in `docs/governance/EXCEPTIONS.md`.
