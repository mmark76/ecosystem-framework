# Security Rules

## 1. Security Objective

Protect confidentiality, integrity, availability, authenticity, accountability, privacy, and recoverability in proportion to the system's risk and criticality.

Absolute security is not a valid completion claim. Security completion means the approved controls for the current scope and risk profile were implemented and verified.

## 2. Security-by-Design Requirements

Before development:

- identify assets and sensitive data,
- classify data,
- identify users, roles, and privileges,
- define trust boundaries and data flows,
- create a threat model,
- define abuse cases,
- select required controls,
- record accepted residual risks.

## 3. Mandatory Baseline

- Secure authentication appropriate to risk.
- Server-side authorization on every protected action and object.
- Least privilege for users, services, infrastructure, and administrators.
- Explicit validation at trust boundaries.
- Parameterized or safe data-access patterns.
- Safe output handling and browser protections.
- Secure session and token lifecycle.
- Encryption in transit and at rest where required.
- Secrets outside source code and client bundles.
- Security-relevant logging without leaking secrets or unnecessary personal data.
- Rate limits and abuse controls where exposure warrants them.
- Dependency, secret, and vulnerability scanning.
- Secure configuration and hardened production defaults.
- Backup, restore, incident, and vulnerability-management processes.

## 4. Frontend Security

Review:

- semantic and safe markup,
- XSS and DOM injection risks,
- Content Security Policy where appropriate,
- CSRF protections,
- CORS configuration,
- cookie attributes,
- browser storage,
- third-party scripts,
- safe links, embeds, and file handling,
- exposure of source maps and configuration.

The frontend is not a trusted authorization boundary.

## 5. Backend and API Security

Review:

- object- and function-level authorization,
- input schemas,
- mass assignment,
- rate limiting,
- replay and idempotency,
- webhook verification,
- file upload processing,
- transaction integrity,
- background jobs,
- safe error responses,
- audit events.

## 6. Data Security and Privacy

Define:

- purpose and lawful use,
- minimization,
- ownership,
- classification,
- access rules,
- retention,
- deletion,
- export and portability,
- masking or anonymization,
- backup protection,
- restore testing,
- tenant isolation where applicable.

## 7. Infrastructure and Supply Chain

Review:

- network boundaries,
- origin protection,
- cloud IAM,
- environment separation,
- infrastructure as code,
- dependency pinning and updates,
- build pipeline access,
- artifact provenance and signing where appropriate,
- third-party services and exit risks,
- patch and vulnerability response.

## 8. Security Exception Rule

Any unimplemented mandatory control requires:

- exception ID,
- affected requirement,
- reason,
- risk assessment,
- compensating control,
- owner,
- expiry or review date,
- explicit approval.

Critical unaccepted risks block completion.
