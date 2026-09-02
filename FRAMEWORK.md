# Complete Application Development Framework

## Purpose

This framework defines how a software project is conceived, scoped, experience-designed, architected, secured, developed, tested, deployed, operated, completed, evolved, and retired.

## Lifecycle

```text
Idea
→ Project Initialization
→ Feasibility
→ Product Definition
→ Requirements
→ Experience Design and Accessibility
→ Scope Freeze
→ Risk and Criticality
→ Architecture
→ Security and Privacy
→ Development Readiness
→ Implementation
→ Verification
→ Production Readiness
→ Release Completion
→ Operation
→ Controlled Evolution
→ Retirement
```

## Operating Model

Markellos Ecosystem software and infrastructure projects follow the canonical
`PROJECT_OPERATING_MODEL.md` using **Hybrid Agile + DevOps + GitOps principles**.

The operating model provides the delivery loop that connects product intent,
roadmaps, backlogs, iterations, Git/PR review, automated validation, security,
deployment, runtime verification, operations, learning, and the next iteration.
It uses risk-based tailoring so low-impact work stays lightweight while
production, security, database, network, and other high-impact changes retain
explicit gates, rollback, evidence, and owner approval where required.

Existing projects do not receive framework changes automatically. Adoption is
controlled and project-specific through the framework versioning and upgrade
process.

## Project Initialization

Immediately after creating a repository from this template, complete
`checklists/INITIALIZATION_GATE.md`. It converts instructional template content
into project-specific authority and must pass before
`checklists/DEVELOPMENT_READINESS.md` can pass.

Unresolved identity, ownership, criticality/profile, scope, theme, example-row,
project-command, environment/secrets, or required-documentation items block
development readiness.

## Core Modules

1. Product and Scope
2. Requirements and Traceability
3. Experience Design, Design System, and Accessibility
4. Architecture and Codebase Health
5. Security Assurance
6. Data and Privacy
7. Frontend Engineering
8. Backend and API Engineering
9. Testing and Quality
10. Infrastructure, Deployment, and Operations
11. Governance and Change Control
12. Completion and Stop Protocol
13. Future Evolution and Retirement

## Experience Design Rule

Every user-facing project must:

- identify its users, key journeys, and critical tasks,
- select one approved Markellos app theme,
- use the shared design tokens and component contracts,
- define responsive and platform-specific behavior,
- define loading, empty, error, offline, and success states,
- define measurable accessibility criteria,
- record evidence for material UI changes.

Visual implementation is part of the controlled product design, not an independent styling phase.

## Release Philosophy

Every release has a finite approved scope.

Completion means:

> 100% of the approved mandatory release scope has been implemented and verified.

Completion does not mean every possible feature exists, the system can never be improved, or no future maintenance will be needed.

## Framework Versioning

`FRAMEWORK_VERSION` is the repository-level source of truth and uses semantic
versioning. Record notable changes in `CHANGELOG.md` and use `UPGRADE_GUIDE.md`
when adopting a newer framework version into an existing project. This version
does not replace the project/application version or the visible build identity
required by `PROJECT_DASHBOARD_GUIDE.md`.

## Evidence Chain

```text
Objective
→ Requirement
→ Experience and Design Decision
→ Architecture Decision
→ Implementation
→ Verification
→ Evidence
→ Approval
```

Code alone is not proof of completion.

## Roles

### Human Owner
Approves scope, priorities, risk acceptance, major product and design decisions, and release completion.

### Planning Agent
Clarifies objectives, requirements, users, journeys, edge cases, accessibility needs, and acceptance criteria.

### Builder Agent
Implements approved work using the required architecture, security controls, design system, and verification practices.

### Verifier Agent
Checks traceability, architecture, security, UI/UX consistency, accessibility, tests, evidence, and completion.

Independent verification is preferred when practical.
