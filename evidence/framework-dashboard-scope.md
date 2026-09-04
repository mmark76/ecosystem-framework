# Framework dashboard separation — FWK-010

Approved by repository-owner task dated 2026-09-04. This maintenance scope keeps
Ecosystem Framework — The DNA at framework.markellosecosystem.com and moves
umbrella responsibility to The Foundation Systems in its own repository/domain.

Verified base: `f602d182559bbd538e2089709f8aaecf8f77581d` on origin/main.
Work uses an isolated clone; the user's original checkout and untracked deployment
archives are untouched. Existing open PR #16 is not changed or merged by this task.

The five other system cards are replaced by Framework architecture, baseline
security rules, lifecycle and delivery gates. Existing operating model, dashboard
guide, UI/UX rules, documentation index and status are preserved. A single umbrella
navigation link is added. Existing design tokens, controls, dialogs and localization
behavior remain in use; no Framework version or API change is required.

Validation: `node --check dashboard.js`, `node --test tests/dashboard-shell.test.cjs`,
commit-only build, source diff review, local asset/link checks and browser QA.
The 14 source tests pass. Browser checks at 320, 375, 768 and 1440 CSS pixels
show no horizontal overflow. Settings opens and Escape returns focus to its
button; Info opens with existing entries. Greek/English shell switching and mobile
navigation pass. No browser warning/error logs were observed. All 15 local
dashboard references exist; a credential-pattern scan reported no findings.
Build metadata is injected from the selected commit using Europe/Nicosia; the
full SHA is exposed in deployment.json. The production report records the final
merged SHA and external verification; this source document is not a deployment claim.

Deployment remains the existing Cloudflare Pages Direct Upload project. Both its
Framework hostname and legacy template alias continue to serve its artifact.
No domain association, DNS record, Access policy or origin changes in Framework.
