# Test Strategy

## Objectives
Define what confidence each test level must provide.

## Test Levels

| Level | Scope | Required for | Command | Evidence |
|---|---|---|---|---|
| Unit | Pure units and rules | All critical logic |  |  |
| Component | UI or service components | Applicable projects |  |  |
| Integration | Boundaries and dependencies | Critical integrations |  |  |
| API | Contracts and authorization | API projects |  |  |
| End-to-end | Critical user journeys | Release blockers |  |  |
| Security | Threats and controls | Risk-based |  |  |
| Accessibility | User-facing interfaces | Applicable projects |  |  |
| Performance | Capacity and latency | NFR-driven |  |  |
| Recovery | Backup and restore | Production systems |  |  |

## Quality Gates
- Formatting:
- Linting:
- Type checking:
- Build:
- Static analysis:
- Dependency scan:
- Secret scan:

## Failure Rules
- Never hide a failing test.
- Never delete or weaken a valid test merely to obtain green status.
- Flaky tests must be repaired, quarantined with approval, or treated as incomplete evidence.
