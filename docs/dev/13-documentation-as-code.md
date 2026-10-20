# Documentation as Code, Knowledge Base, Templates, and Archives

Version, review, and publish engineering documentation alongside code. The integration-test build publishes documentation from `main` to an internal preview site; formal CD publishes documentation for the released version to the formal site. Record the source commit and site URL for both publications so application and documentation versions stay aligned.

## Document Placement and Minimum Requirements

| Document | Location and purpose |
| --- | --- |
| Repository `README.md` | System purpose, owner, local startup, testing, and deployment entry points |
| Requirements and acceptance records | Link work items; define goals, scope, and acceptance criteria |
| Architecture and decision records (ADRs) | Component relationships, data flows, dependencies, and key trade-offs |
| API and data contracts | Interfaces, authentication, errors, compatibility, and migration rules |
| Operations and runbooks | Deployment, monitoring, troubleshooting, backup, and rollback |
| Release notes | Version, changes, migration, known issues, and rollback entry point |

Keep system-specific documents in an application's `docs/` directory and shared cross-project standards on this VitePress site.

## Automated Build and Publication

| Stage | Documentation source | Publication destination |
| --- | --- | --- |
| CI | None | None |
| Integration test | `main` commit that passed CI and integration testing | Internal preview site |
| CD | Deployed release version | Formal documentation site |

## TODO

- Add engineering documents.
