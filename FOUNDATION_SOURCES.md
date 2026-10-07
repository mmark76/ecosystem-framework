# Integrated Foundation Sources

This template contains sanitized, vendored reusable material from the four
ecosystem foundations. The upstream repositories remain the canonical owners;
the copies below make safe starting implementations available without copying
credentials, populated configurations, production evidence, or live state.

The exact reviewed revisions are pinned in [`FOUNDATION_VERSIONS`](FOUNDATION_VERSIONS).
`TEMPLATE_VERSION` and `FRAMEWORK_VERSION` identify this template release.

| Foundation | Imported material | Local location | Deliberately excluded |
| --- | --- | --- | --- |
| DNA / Ecosystem Framework | Lifecycle, gates, traceability, design system, delivery and upgrade method | repository root | No project records, approved production values, or deployment evidence are supplied as implementation defaults. |
| Engineering Standards | Complete requirements catalogue and authority guide | `foundations/engineering-standards/` | No independent implementation exists in the pinned source; requirements remain authoritative upstream. |
| Shield | Strong Room templates, executable validators, tests, capability model, schemas, standards, reusable documentation, monitoring and alert guidance | `foundations/shield/` | `checks/**/validation-record.md` is excluded because it is dated validation/operational evidence. No populated configuration, credentials, identities, endpoints or runtime logs are imported. |
| Infrastructure | Sanitized reusable ownership, runtime and deployment-boundary guidance | `foundations/infrastructure/` | The pinned source contains no infrastructure code, IaC modules, scripts, assets or configuration templates. Host-specific evidence and external environment references are not imported. |

## Safe adoption

1. Treat every placeholder such as `<APP_NAME>` or `<LOCAL_PORT>` as required
   project input; do not replace it with an invented value.
2. Render Strong Room templates only into protected, project-owned deployment
   locations. Do not commit populated credentials, identity selectors or
   production configuration.
3. Run `node scripts/validate-foundations.cjs`, then the relevant Shield tests
   before accepting an upgrade.
4. Fetch the upstream sources, review the change by pinned revision, update
   `FOUNDATION_VERSIONS`, and record upgrade evidence before changing a pinned
   snapshot. Never overwrite project-owned controls or evidence wholesale.

## Provenance integrity

Most Shield and Engineering snapshots are direct source copies at their pinned
revision. The Infrastructure guide is a sanitized adaptation because the only
upstream artifact is a domain README containing host-specific references. The
local test and validation gate verifies the pinned metadata, required imported
artifacts, absence of prohibited sensitive-file names, common credential
shapes, public IPv4 literals, and required placeholder structure. It is a
bounded safety check, not a claim that arbitrary text can never be sensitive.
