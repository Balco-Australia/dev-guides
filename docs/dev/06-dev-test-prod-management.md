# Dev, Test, and Prod Deployment and Access Management

Dev, Test, and Prod are **application deployment environments** and cannot be distinguished solely by Git branch names. Give each its own deployment target, configuration, identity grants, and data source. Validate a candidate artifact in Test before deploying that same artifact to Prod. See the [resource inventory](/infrastructure/01-resource-inventory) for foundational resources and server ownership.

## Environment Purposes

| Environment | Purpose | Users | Data | Release entry point |
| --- | --- | --- | --- | --- |
| Dev | Daily development and integration | Project developers | Synthetic or de-identified data | Automatic or on-demand deployment |
| Test | Integration, regression, and business acceptance | Testers and business reviewers | Dedicated test data | Deploy a version that passed CI |
| Prod | Live business operations | Authorized business users | Production data | Approved release pipeline |

Environment configuration includes site/API addresses, Entra app registrations, Graph permissions, SharePoint sites or databases, log workspaces, and alert recipients. Dev/Test must not connect directly to Prod data. If real data is essential, de-identify it and obtain approval first.

## GitHub and Azure Binding

- Create `dev`, `test`, and `prod` GitHub Environments. Bind each to permitted deployment branches or tags, target Azure resources, and required approvals.
- CI runs fast quality checks. The integration-test pipeline builds a candidate artifact from `main` and validates it in Test. After validation, CD deploys that same artifact to Prod without rebuilding in production. Record the Git commit, run number, and image or package digest.
- Separate deployment identities by environment. A Dev identity cannot deploy to Prod. Use the production identity only through protected workflows. Prefer GitHub OIDC federation with Azure to reduce long-lived secrets. The [official GitHub guide](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-azure) describes Azure OIDC and environment protection rules.
- The application owner approves Prod releases. Run health checks and key business validations after deployment; roll back to the previous validated artifact on failure.

## TODO

- Validate these practices in a real project.
