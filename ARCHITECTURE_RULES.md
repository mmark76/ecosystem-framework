# Architecture and Codebase Health Rules

## 1. Goal

Build software that grows through small, clear, controlled changes without architectural chaos, giant files, excessive context requirements, repeated patches, or unnecessary rebuilds.

## 2. Fundamental Principles

- One clear responsibility per file, component, module, or service.
- One cohesive capability per feature or domain module.
- One clear location for every responsibility.
- Prefer feature-based or domain-based organization.
- Keep shared code genuinely shared.
- Preserve low coupling and high cohesion.
- Communicate through clear public interfaces.
- Keep technical details outside core domain logic where practical.
- Start with the smallest architecture that supports current needs and the next foreseeable extension.
- Add abstractions only when actual pressure justifies them.

## 3. Logical Layers

```text
Presentation / UI
        ↓
Application / Use Cases
        ↓
Domain / Business Rules

Infrastructure implements interfaces required by inner layers.
```

Folder names may vary by language or framework. Dependency direction matters more than names.

## 4. Architecture Invariants

- `ARCH-INV-001`: Circular dependencies are forbidden.
- `ARCH-INV-002`: Domain logic must not depend on UI frameworks.
- `ARCH-INV-003`: Domain logic must not depend directly on database implementations.
- `ARCH-INV-004`: Shared code must not depend on feature-specific code.
- `ARCH-INV-005`: Modules may use only another module's public interface.
- `ARCH-INV-006`: Business rules must not be duplicated across layers.
- `ARCH-INV-007`: External providers must be isolated behind adapters when replacement risk is meaningful.
- `ARCH-INV-008`: Database changes require versioned migrations.
- `ARCH-INV-009`: Secrets and environment-specific values must remain outside source code.
- `ARCH-INV-010`: Significant deviations require an approved architecture exception.
- `ARCH-INV-011`: New features must have an explicit owner module.
- `ARCH-INV-012`: A feature should be removable or replaceable without collapsing unrelated modules.

## 5. General Repository Pattern

```text
project/
├── apps/
├── packages/
├── src/
│   ├── app/
│   ├── features/
│   ├── entities/
│   ├── shared/
│   └── infrastructure/
├── tests/
├── docs/
├── scripts/
└── evidence/
```

Use only directories the project actually needs.

## 6. Feature Pattern

```text
features/
└── example-feature/
    ├── ui/
    ├── application/
    ├── domain/
    ├── api/
    ├── infrastructure/
    ├── validation/
    ├── styles/
    ├── tests/
    └── index
```

The `index` file represents the public interface. Internal files remain private.

## 7. HTML, CSS, and JavaScript / TypeScript

### HTML / Markup
Organize semantic pages, layouts, templates, partials, components, and accessible forms.

### CSS
Use design tokens, base styles, layouts, components, themes, utilities, and scoped feature styles. Avoid uncontrolled global selectors, high specificity, repeated arbitrary values, and `!important` as a routine fix.

### JavaScript / TypeScript
Separate UI behavior, application use cases, domain rules, data access, infrastructure adapters, validation, state, and utilities. Prefer TypeScript when static checking materially improves safety and maintainability.

## 8. File Size and Complexity

Line counts are warning signals, not absolute laws.

Split a unit when it:

- has multiple responsibilities,
- changes for unrelated reasons,
- contains significant duplication,
- requires excessive context for a small change,
- is difficult to test independently,
- has excessive branching or hidden side effects.

## 9. Dependency Rules

Allowed direction should be explicit and enforceable where possible.

Avoid:

- circular imports,
- deep imports,
- global mutable state,
- feature-to-feature internal coupling,
- hidden runtime dependencies,
- direct external-provider use throughout business code.

## 10. Shared Code Rule

Move code to `shared` only when:

- it is used by multiple independent modules,
- its responsibility is stable and generic,
- moving it does not create a broad dependency hub.

Do not use `shared`, `helpers`, `misc`, or `utils` as dumping grounds.

## 11. Root-Cause and Patch Prevention

Before every correction, inspect:

1. the root cause,
2. the responsible module,
3. affected contracts and dependencies,
4. the structural solution,
5. the regression test,
6. possible side effects.

Temporary mitigations must be clearly labeled, time-bounded, owned, and tracked.

## 12. Refactoring

Refactor in small, reviewable steps. Keep refactoring separate from unrelated feature work. Protect behavior with tests. Record major structural decisions.

A full rebuild is a last resort.

## 13. New Feature Gate

Before adding a feature, define:

- purpose and requirement IDs,
- owner module,
- data and interfaces,
- trust boundaries,
- tests,
- impact on existing modules,
- documentation,
- removal or replacement strategy where relevant.

## 14. Architecture Health Gate

Architecture is sufficient for the current release when:

- all mandatory invariants pass,
- circular dependencies equal zero,
- blocking violations equal zero,
- unapproved exceptions equal zero,
- required architecture tests pass,
- architecture documentation is current,
- the approved release scope is supported,
- speculative future abstractions were not added.

At that point, stop refactoring for the current release.
