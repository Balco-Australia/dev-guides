# Versions, Tags, Images, and Artifact Traceability

A release version must identify one specific Git commit and one specific set of build artifacts. GitHub manages source code, tags, and release records. Container images are stored in ACR; see the [artifact registry](/dev/02-image-and-artifact-registry).

## Versions and Tags

- Use `v<major>.<minor>[.<patch>]` for formal releases, for example `v1.0` and `v1.2.1`. Increase major for compatibility-breaking changes, minor for compatible features, and add a patch component when releasing a standalone fix. This matches the [existing image-tag rules](/infrastructure/05-container-runtime).
- Release tags point to the validated `main` commit used to build the released artifact. Never move or overwrite a published tag; create a new version for corrections.
- Version shared libraries separately from applications. Application release records list dependency versions, database migration versions, and external API compatibility requirements.

## Build Artifacts

The integration-test pipeline builds a candidate artifact from a recorded `main` commit, including after a `release/*` branch is merged. After Test validation, CD deploys that same artifact to Prod without rebuilding in production. Before release, verify that the Git tag, build record, and artifact digest all refer to that `main` commit. Push images to `balco.azurecr.io`, name them under the [three-layer image standard](/infrastructure/05-container-runtime), and pin deployments by `sha256` digest. Keep checksums for non-container build packages. CI validation outputs may be stored in GitHub Actions Artifacts. Put formal release records in GitHub Release or the project release register and link a durable artifact location.

## Release Records

Record at least these fields for each release so the running content can be identified for diagnosis and rollback:

| Field | Recorded content |
| --- | --- |
| Source | Repository and Git tag |
| Build | Pipeline run link, toolchain version, test and scan results |
| Artifact | Image repository and digest, SHA-256 checksum |
| Deployment | Environment, target resource, deployment time, operator |
| Runtime | Configuration version, database migration, health-check result, rollback target |

The release owner completes runtime results after deployment. Roll back with the previous validated artifact and compatible configuration. If a data migration is irreversible, document the recovery approach before release. Do not remove old artifacts while production or a rollback plan still references them.
