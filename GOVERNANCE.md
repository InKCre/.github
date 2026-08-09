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

### Upstream dependency admission

Some repositories validate a production-admitted artifact owned by another
repository. Ordinary pull-request checks are candidate feedback; before merge,
the required checks must be refreshed against the current base and current
upstream delivery. An open pull request does not need an immediate fan-out rerun
every time upstream changes because it has no merge authority.

Prefer this final authority-boundary proof over a polling workflow,
dependency-update pull request, or cross-repository write credential. Upstream
contracts must still evolve additively: deliver the expanded upstream surface,
migrate the consumer, then remove the old surface in a later change. A merge
queue and `merge_group` checks are useful when final synthetic-merge validation
outweighs the queue's fixed merge method; they are not an organization-wide
requirement.

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

### Check and delivery names

Repository-owned GitHub contexts use a short, lowercase public name:

- `<scope> checks` for an aggregate workspace, static, build, or package contract;
- `<scope> tests` for a focused automated test suite;
- `<scope> e2e tests` for an end-to-end runtime test;
- `<scope> preview` and `<scope> preview cleanup` for pull-request delivery evidence; and
- `<scope> deployment` for canonical delivery from protected `main`.

The scope is the repository name unless a package or application is independently
understood inside a monorepo. Reproducibility, hermeticity, portability, and other
implementation properties belong in step names and repository documentation rather
than the public context name. Required contexts remain bound to their expected GitHub
App source.

Repositories adopt this naming convention when their workflow is next changed for a
substantive reason. A cosmetic rename alone does not justify invalidating an existing
required context.

| Repository | Pull-request evidence | Main authority |
| --- | --- | --- |
| `core-py` | Hermetic repository, dependency security, portable peer database, and isolated database-branch contracts | Canonical schema-bearing image publication, exact-image Heroku delivery, then `stable` admission |
| `client-web` | `Workspace contract`, `Dependency review`, `client-web E2E`, and `client-webext E2E`; isolated Pages preview | Focused web release build and same-run production Pages delivery |
| `ui` | `ui-web checks`; isolated runner-pushed Histoire preview | Changesets package publication and runner-pushed Histoire deployment |
| `docs` | Website contract | Website release build and production Pages delivery |

Check names and commands remain repository-local implementation truth. The
profiles standardize authority and evidence semantics, not identical jobs.

For `client-web`, required E2E owns a fresh, data-free PostgreSQL runtime and
runs the real immutable core service selected through its production-admitted
`stable` channel. The human Pages preview proves the checked environment-neutral
web artifact and deterministic preview alias; it does not imply a cloned
production database or an automatically configured full-stack environment.

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
- Every external fork contributor requires maintainer approval before Actions
  may start read-only, secret-free CI. Approval grants no preview or production
  credentials.
- Third-party Actions must use immutable commit SHAs after the repository's pin
  audit is complete.
- Jobs that consume production credentials must declare a production
  environment restricted to `main`. Preview delivery jobs must declare the
  preview environment, and fork workflows receive neither credential set.
- Cross-repository write tokens are outside this baseline.

## Exceptions and break glass

There is no standing administrator bypass. An emergency rule change requires
explicit authorization and a record of the repository, owner, reason,
compensating control, and review date. Restore the baseline immediately after
recovery and follow the emergency change with a pull request.

Any longer-lived exception must be documented here with the same fields. Outside
an approved migration, an undocumented difference between this policy and live
GitHub state is governance drift, not an exception.
