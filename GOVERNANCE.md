# Git and GitHub Governance

This document is the canonical Git and GitHub workflow policy for the active
InKCre repositories. Repository-local documentation owns implementation,
verification, and release details; it may extend this policy but must not weaken
it silently.

This policy defines the required baseline. Enforcement is rolled out and
verified one repository at a time. An approved migration may differ temporarily
only when it has a bounded plan, owner, verification, and rollback; missing
enforcement is never permission to bypass the policy.

## Scope and ownership

The enforcement scope is:

- `InKCre/core-py` — service;
- `InKCre/client-web` — application;
- `InKCre/ui` — package;
- `InKCre/docs` — documentation site.

`InKCre/.github` owns this organization policy and the default contribution
files. It does not replace product or system truth in `InKCre/docs`.

InKCre uses GitHub Free. Common rules are therefore applied to each repository
instead of through an organization ruleset.

## Protected main

Each scoped `main` branch must:

- change through a pull request, including changes made by administrators;
- require its repository-specific checks against the latest base revision;
- bind each required check to its expected GitHub App source when the setting
  supports it, so an identically named check from another source cannot satisfy
  the gate;
- require every review conversation to be resolved;
- reject force pushes and branch deletion; and
- require linear history.

The initial two-maintainer baseline requires zero approving reviews. A pull
request, required checks, and resolved conversations are mandatory; a human
approval is not. Requiring approvals or CODEOWNERS review is a future policy
decision, not an implied rule.

## Merge policy

Merge commits are disabled. Squash and rebase merge remain available:

- Use **squash** by default. One pull request then becomes one `main` commit,
  which keeps routine history and reverts easy to scan.
- Use **rebase merge** intentionally when a curated commit series improves
  review, blame, or diagnosis. GitHub rewrites the commit identities, so this is
  not a way to preserve a branch's original SHAs.

Automatic branch deletion stays disabled while the team learns stacked pull
requests.

### Stacked pull requests

1. Name the immediate parent and known children in every dependent pull request.
2. Merge bottom-up: merge the parent first.
3. Restack the child onto the new `main`, update its base, and rerun strict
   checks.
4. Never merge a child that still includes an unmerged parent's changes.

Stacking tools are optional. The ancestry and latest-base rules apply regardless
of the tool or merge method.

## Workflow authorities

### Pull-request validation

A pull-request workflow validates a candidate change. It may build artifacts for
evidence and may deliver an isolated preview when all of these controls hold:

- the pull request comes from the same repository;
- a trusted controller verifies the workflow, pull request, and exact head SHA;
- credentials are scoped to the preview environment;
- names and resources are deterministic, isolated, and short-lived; and
- cleanup and concurrency are explicit.

A pull-request workflow must not publish a canonical package or artifact, mutate
a shared staging or production environment, or receive production authority.
Fork pull requests receive no preview or production credentials.

### Protected-main release

Protected `main` is the canonical release authority. A release workflow selects
an exact current-main source SHA, builds the release output, verifies it, and
deploys or publishes the artifact produced by that release run. It records enough
source, artifact, run, and deployment identity to diagnose or roll back the
release.

Independent builds from the same source are not assumed to be byte-identical.
Each repository owns dependency and toolchain pinning and must describe artifact
identity accurately. A persistent shared staging environment belongs to the
release lane, not the pull-request preview exception.

## Repository profiles

| Repository | Pull-request evidence | Main authority |
| --- | --- | --- |
| `core-py` | Hermetic repository, dependency security, portable peer database, and isolated database-branch contracts | Source-verified GHCR publication and Heroku production delivery |
| `client-web` | Full workspace, dependency security, peer-database browser, and browser-extension contracts; isolated web preview | Focused web release build and production Pages delivery |
| `ui` | Reproducible workspace and Changesets validation | Changesets release pull request, package publication, tag, and release |
| `docs` | Website contract | Website release build and production Pages delivery |

Check names and commands remain repository-local implementation truth. The
profiles standardize authority and evidence semantics, not identical jobs.

`InKCre/.github` is a non-product governance carrier outside the active
repository enforcement scope. It owns no required check, release workflow, or
deployment workflow.

## Pull-request evidence

Every pull request should make these facts easy to review:

- intent, scope, and related issue or task;
- repository-local verification evidence;
- risk and a practical rollback;
- preview, release, deployment, migration, or credential effects; and
- parent and child pull requests when the change is stacked.

Repository-local templates may add profile-specific fields. GitHub uses this
repository's default only when a repository has no local file of the same type.

## Actions and credentials

- Default workflow-token permission must be read-only; write-capable jobs must
  declare the minimum permissions they need.
- GitHub Actions must not approve pull-request reviews.
- Third-party Actions must use immutable commit SHAs after the repository's pin
  audit is complete.
- Production credentials must belong to a production environment restricted to
  `main`; preview credentials belong only to a preview environment.
- Cross-repository write tokens are outside this baseline.

## Exceptions and break glass

There is no standing administrator bypass. An emergency rule change requires
explicit authorization and a record of the repository, owner, reason,
compensating control, and review date. Restore the baseline immediately after
recovery and follow the emergency change with a pull request.

Any longer-lived exception must be documented here with the same fields. Outside
an approved migration, an undocumented difference between this policy and live
GitHub state is governance drift, not an exception.
