# Quickstart

This guide covers a normal change from `main` to a reviewed pull request (PR). Before starting, obtain repository access according to the [repository](/dev/01-source-code-repositories) and [developer tools](/dev/03-developer-tools) guides.

## Environment preparation

Install Git from a command line on your computer:

**Windows** — run in PowerShell or Command Prompt ([Git for Windows instructions](https://git-scm.com/install/windows)):

```powershell
winget install --id Git.Git -e --source winget
```

**macOS** — run in Terminal. If Homebrew is installed, use `brew`; otherwise install Apple's Command Line Tools, which include Git ([Git for macOS instructions](https://git-scm.com/install/mac)):

```bash
brew install git
```

Open a new terminal after installation and verify Git. Set the name and email that should appear on your commits; use an email associated with your GitHub account if you want GitHub to attribute them to you.

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 1. Clone and create a working branch

To create a new working branch from `main`, copy the repository URL from GitHub, then run (replace the example URL with your repository URL):

```bash
git clone https://github.com/Balco-Australia/demo-repository.git
cd demo-repository
git switch -c feat/demo
```

If `feat/demo` already exists on the remote or if you have manually created a branch, clone that branch instead:

```bash
git clone -b feat/demo https://github.com/Balco-Australia/demo-repository.git
cd demo-repository
```

## 2. Make and check the change

Edit the files, run the checks required by that repository, and inspect the staged changes before committing:

```bash
git status
git add .
git commit -m "feat: describe the change"
```

Choose the [commit type](./09-git-workflow.md#commit-rules) that fits the change, such as `feat` or `fix`. Review `git diff --cached` carefully after `git add .` so credentials, production data, or generated build outputs are not committed.

## 3. Push the branch

For a newly created local branch with no matching upstream branch, use `-u` (`--set-upstream`) on the first push. This creates or updates `origin/feat/demo` and records it as the upstream for your local branch:

```bash
git push -u origin feat/demo
```

Once the current branch tracks a remote branch of the same name, use `git push` for later commits:

```bash
git push
```

## 4. Open a PR to `main`

In GitHub, open a PR with **base `main`** and your working branch as the compare branch. For `hotfix/*`, use its target `release/*` as the base. Link the work item; describe the change, checks run, deployment or migration impact, and rollback approach. Wait for required checks and at least one review from someone other than the author. Resolve blocking comments before merging. Delete the working branch after merge.
