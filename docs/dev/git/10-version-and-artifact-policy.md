# Versions, Tags, Images, and Artifact Traceability

Each release must identify one exact `main` commit and the artifacts built from it. GitHub holds the source, Git tags, and release record; ACR holds container images. See the [artifact registry](/dev/02-image-and-artifact-registry) for repository and access rules.

## Versions and Tags

- Use `v<major>.<minor>[.<patch>][-<prerelease>]`, for example `v0.1`, `v1.0.2`, `v0.2.0-alpha`, or `v5.9-beta.3`. Increase major for breaking changes, minor for compatible features, and patch for a standalone fix. A prerelease suffix identifies a candidate; remove the suffix and create a new tag for a formal release. The numeric image-tag form follows the [container runtime standard](/infrastructure/05-container-runtime).
- Name a release branch `release/<version>` (for example `release/v1.0.2`) and the corresponding Git tag `<version>` (for example `v1.0.2`). The branch can change during preparation; the published tag is immutable and points to the validated `main` commit, not to the release branch before it is merged. Never move or overwrite a published tag; corrections need a new version.

## Build and Release

1. CI automatically builds and publishes artifacts when `main` or a `release/*` branch changes, or when a Git tag is created manually. If CI does not support a project, build and publish its artifacts manually according to that project's build and release guide. 
2. CD deploys the validated artifact to Prod. If CD is not yet ready or does not support a project, deploy the artifact manually, strictly following that project's deployment runbook.
3. Create or update the release record in the IT Team's [Publication Logs](https://balcoaustralia.sharepoint.com/sites/ITTeam/Lists/Publication%20Logs/AllItems.aspx)

## Release Record

The IT Team's [Publication Logs](https://balcoaustralia.sharepoint.com/sites/ITTeam/Lists/Publication%20Logs/AllItems.aspx) SharePoint list is the official release register. Create one item per project release and record the following details:

| SharePoint column | Required information | Example |
| --- | --- | --- |
| Title | Project name and release tag | `Development Guides v0.1` |
| Git Repo | Source repository URL | `https://github.com/Balco-Australia/dev-guides` |
| CI | Pipeline run link | `https://github.com/Balco-Australia/dev-guides/actions/runs/39519478617` |
| Commit SHA | Full `main` commit SHA | `3174ca7b5131edab6c03386fdb344712570be89f` |
| Artifact Location | Image repository and digest, or package location |  |
| Server Deployment Details | Target server | `GitHub Pages` |
| Service Deployment Details | Published service | `https://balco-australia.github.io/dev-guides/` |

The release owner completes deployment and runtime results after release. Roll back using the previous validated artifact with compatible configuration. Document a recovery approach before an irreversible data migration. Retain any artifact still used by production or a rollback plan.
