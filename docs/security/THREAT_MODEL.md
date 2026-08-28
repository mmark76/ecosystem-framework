# Threat Model

## Assets
What must be protected?

## Actors
- Legitimate users:
- Administrators:
- External attackers:
- Malicious insiders:
- Third parties:

## Entry Points
- UI:
- APIs:
- Webhooks:
- Files:
- Administrative interfaces:
- Background jobs:
- Integrations:

## Trust Boundaries
Describe every transition between different trust levels.

## Threat Register

| Threat ID | Asset | Scenario | Likelihood | Impact | Risk | Control | Residual risk | Owner | Status |
|---|---|---|---|---|---|---|---|---|---|
| THR-001 |  |  |  |  |  |  |  |  | Open |

## Abuse Cases
Document how valid features could be intentionally misused.

## Review Triggers
Update the model when scope, architecture, data, exposure, or integrations materially change.

## Canonical Dashboard Shell Review

| Threat ID | Asset | Scenario | Likelihood | Impact | Risk | Control | Residual risk | Owner | Status |
|---|---|---|---|---|---|---|---|---|---|
| THR-FWK-001 | Browser integrity | Modified local-storage values attempt to inject CSS or unexpected state. | Medium | Low | Low | One namespaced appearance record; allow-listed enums; strict six-digit color validation; safe defaults. | A user can intentionally select low-preference aesthetics, but text foreground is contrast-adjusted. | mmark76 | Controlled |
| THR-FWK-002 | DOM integrity | Project content or placeholder behavior injects executable markup. | Low | Medium | Low | Static trusted markup; dynamic content uses `textContent`; automated scan rejects common unsafe HTML insertion APIs. | Future adopters must preserve the safe-output contract. | mmark76 | Controlled |
| THR-FWK-003 | Privacy | Appearance storage expands to identity, Assistant conversation, analytics, or sensitive data. | Low | Medium | Low | Canonical key and schema are restricted to six appearance fields; documentation and tests enforce the boundary. | Future scope changes require a new privacy/security review. | mmark76 | Controlled |
| THR-FWK-004 | Supply chain | A framework, remote script, font, or analytics service is added to the reference shell. | Low | Medium | Low | No dependency manifest; local script provenance test; explicit no-third-party contract. | Approved future integrations require separate review. | mmark76 | Controlled |
