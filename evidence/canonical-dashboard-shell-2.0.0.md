# Canonical Dashboard Shell 2.0.0 Evidence

**Verified:** 2026-08-28

**Requirements:** FWK-006, FWK-007, FWK-008, FWK-009

**Acceptance criteria:** AC-FWK-006, AC-FWK-007, AC-FWK-008, AC-FWK-009

## Git and scope

- Repository: `mmark76/template-repo`
- Branch: `feat/canonical-dashboard-shell`
- Verified starting `origin/main`: `cd95d3c0c3983cc5feac003a17539cebb54082a2`
- Starting branch SHA: `cd95d3c0c3983cc5feac003a17539cebb54082a2`
- The local branch and its remote-tracking branch were synchronized before work.
- No other repository, existing dashboard, deployment, DNS, hosting, domain,
  secret, credential, or production configuration was changed.

## Implemented contracts

- Header left: project mark and project identity.
- Header right, in source and logical focus order: Template Assistant, GR, EN,
  Back to markellosecosystem, Light/Dark, Settings, Info.
- Template Assistant: customizable avatar, project-specific name, visible Ready
  indicator, native dialog, and safe adoption placeholder.
- Localization: the shell controls switch between Greek and English. The UI
  explicitly states that reference content remains English until an adopting
  project supplies its translations.
- Settings: Accent colour, Background colour, Font, Text size, Spacing, Reset
  appearance, and Close. Only the six bounded appearance fields are stored under
  `markellos.dashboard.appearance.v1`; storage failures fall back safely.
- Info: Important Info, Feedback, separator, License, Privacy, Analytics choices,
  Copyright protected, separator, copyright, and build ID. Native disclosure
  elements provide non-broken reference behavior.
- Footer: exactly the copyright line followed by the build line.
- Build contract: `vX.Y.Z_YYYYMMDD_HHMM_SHA`; the unpopulated static template
  visibly uses `v2.0.0_YYYYMMDD_HHMM_SHA` and does not fabricate a SHA.
- Timestamp contract: `Europe/Nicosia`, with winter UTC+2 and summer UTC+3
  behavior verified through `Intl.DateTimeFormat` tests.

## Automated verification

```text
node --check dashboard.js
PASS

node --test tests/dashboard-shell.test.cjs
12 tests, 12 passed, 0 failed

git diff --check
PASS (line-ending conversion notices only)
```

The test suite covers the canonical header order, Settings/Info/footer source
contracts, bounded appearance persistence, invalid-value fallback, custom-colour
contrast crossover, real-HEAD build-ID formatting, fallback formatting,
`Europe/Nicosia` winter/summer conversion, no visible GitHub reference, no unsafe
DOM injection primitive, local-only script loading, responsive/reduced-motion
source contracts, and framework/design-system version consistency.

## Browser and accessibility verification

The static page was served locally and inspected in the in-app Chromium browser.

- Wide: effective 1441 × 1000 CSS px; no horizontal overflow; all seven header
  utilities visible and in the required order.
- Medium: effective 767 × 1024 CSS px; no horizontal overflow; required utilities
  remain visible and the navigation menu remains operable.
- Narrow: effective 390 × 844 CSS px; no horizontal overflow; all utilities wrap
  without disappearing; navigation expands and exposes all four links.
- 200% reflow equivalent: a 1440 px reference at 720 CSS px, combined with the
  built-in 125% text option and spacious density; no horizontal overflow and no
  required control disappeared.
- All 16 visible interactive targets at the final wide audit were at least 44 ×
  44 CSS px; no target-size failures were found.
- The header utilities are native links/buttons, enabled, `tabIndex=0`, and in the
  required DOM focus order. Visible focus styling was visually inspected.
- Assistant and Settings dialogs initially focus their close control; explicit
  Escape closes the dialog and focus returns to the invoking control.
- Settings changes persist across reload; Reset appearance restores and persists
  the defaults.
- GR changes `lang` to `el`, changes shell labels, and exposes the partial-
  localization notice; EN restores `lang=en`.
- Light/Dark changes the pressed state and persists across reload independently
  of the Settings trigger.
- Info uses native keyboard-operable disclosures; Analytics choices exposes the
  safe message that no analytics service is configured.
- Sample text contrast ratios were at least 5.83:1 on the default theme. Mid-tone
  custom page and accent colours selected a 4.69:1 foreground.
- Reduced-motion support is present through `prefers-reduced-motion: reduce`.
- No warning or error was recorded for `127.0.0.1:43117` in the browser console.
- The final wide audit found zero open dialogs, two footer lines, English/light
  defaults, and an explicit template build status.

## Visual evidence

- `evidence/canonical-dashboard-shell/desktop-1440.png`
- `evidence/canonical-dashboard-shell/tablet-768.png`
- `evidence/canonical-dashboard-shell/mobile-390.png`
- `evidence/canonical-dashboard-shell/settings-dialog.png`
- `evidence/canonical-dashboard-shell/info-dialog.png`
- `evidence/canonical-dashboard-shell/footer.png`

The screenshots were inspected for hierarchy, wrapping, required utility
visibility, dialog structure, focus indication, and absence of horizontal
overflow.

## Security and boundaries

- No dependency, framework, backend, analytics service, authentication, remote
  font, or third-party script was introduced.
- User-controlled colours are validated as six-digit hex values; stored enum
  values are allow-listed before use.
- Runtime text changes use `textContent`; no `innerHTML`, `document.write`, or
  evaluation primitive is used.
- The user-facing HTML and scripts contain no GitHub reference.
- Existing projects are explicitly future/backlog candidates only and require a
  separate approved task.

## Limitations

- Reference project content remains English by design; only the reusable shell is
  localized in this release.
- The static reference cannot know a release timestamp or post-build commit SHA.
  Deploying projects must inject real version, `Europe/Nicosia` build date/time,
  and short commit metadata as documented in `TEMPLATE_SITE.md`.
- No deployment was performed.
