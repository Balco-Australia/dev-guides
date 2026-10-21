# Branches, Commits, and Contributions

Balco collaborates through GitHub. Every change should be traceable from a requirement or defect to a branch, commit, pull request (PR), and release. See [source repository standards](/dev/01-source-code-repositories) for access and structure. Branch names follow the `<type>/<description>` pattern from [Conventional Branch](https://conventionalbranch.org/), using the prefixes below.

## Branch Rules

| Branch | Purpose | Merge direction | Example |
| --- | --- | --- | --- |
| `main` | Protected integration branch and source of release artifacts | Accepts reviewed PRs from ordinary working branches and `release` | `main` |
| `dev` | Developer's personal branch |  | `dev/su` |
| `feature` | New feature | Branches from `main`; PR to `main` | `feat/report-export` |
| `hotfix` | Urgent fix for a release | Branches from the target `release`; PR back to that release branch | `hotfix/security-patch` |
| `release` | Release preparation and stabilization | Branches from `main`; PR to `main` after release changes are reviewed | `release/v0.1`<br>`release/v1.0.2` |

<br>![1](../../imgs/git_branch_simple.png)<br>

The normal flow is
- **main → dev**
- **main → feat → main**

The release fixes follow is
- **release → hotfix → release → main**

## Commit Rules

Each commit addresses one clear purpose. Use `type: #{Ticket_No} short description`, with a module or component as the optional scope. Choose the type that best matches the change:

| Type | Applicable change | Example |
| --- | --- | --- |
| `feat` | New features | `feat: add export feature` <br>`feat: #123 add export feature` <br>`feat: add export feature (#123)` |
| `fix` | Fix defacts | `fix: resolve sign-in failure` |
| `docs` | Documentation only | `docs: expand authentication guidance` |
| `refactor` | Refactor code structure| `refactor: split order service` |
| `test` | Add or adjust tests code | `test: cover export flow` |
| `perf` | Performance improvement | `perf: reduce duplicate queries` |
| `ci` | CI or deployment pipeline change | `ci: add test step` |

If a change corresponds to a GitHub Issue, include its number at the end of the subject or in the body, for example `feat: add export feature (#123)`. List multiple Issues in the body. Do not invent an Issue number when none exists. Describe the actual change instead of writing only “update” or “WIP”.

## Contribution and Review Rules

1. Developers complete code, tests, and related documentation on a working branch, run the required local checks, then push and open a PR to `main`.
2. Review the change scope before committing. Do not add passwords, tokens, certificate private keys, production data, or build outputs containing internal information to Git history.
3. Authors review their own work and wait for required checks. At least one person other than the author reviews it.
4. Protect `main` and `release` with separate GitHub Rulesets that restrict direct pushes and require PR reviews, status checks, and resolved conversations.
