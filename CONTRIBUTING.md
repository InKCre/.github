# Contributing to InKCre

Thank you for contributing. The organization-wide workflow is defined in
[Git and GitHub Governance](https://github.com/InKCre/.github/blob/main/GOVERNANCE.md).
Verification and test selection follow the organization-wide
[Verification and Test Policy](https://github.com/InKCre/.github/blob/main/TESTING.md).
Repository-local guides own implementation, verification, and release details
for the code or documentation being changed. They extend the organization
policy and must not weaken it silently.

## Workflow

1. Choose an issue whose owner, outcome, and verification boundary are clear. If no suitable
   `good first issue` or `help wanted` task exists, open a proposal in the owning repository before
   implementing a large change.
2. For independent work, start from the latest `main` and create a focused
   branch. For a dependent pull request, branch from its immediate parent and
   follow the [stacked pull-request procedure](https://github.com/InKCre/.github/blob/main/GOVERNANCE.md#stacked-pull-requests).
3. Read the repository-local instructions, satisfy its setup and package-access prerequisites, and
   run the checks that observe the changed behavior.
4. Open a pull request; a draft is useful when feedback is needed early.
5. Describe intent, affected release projects, evidence, risk, rollback, delivery effects, and any
   pull requests in the same stack.
6. Update the branch when `main` moves, wait for required checks, and resolve all
   review conversations.
7. Merge with squash by default. Use rebase merge only for an intentionally
   curated commit series.

## Change names and release projects

Use `type(scope): summary` for commit subjects and pull-request titles, with `feat`, `fix`, `ref`,
`docs`, or `chore` as the type. The title becomes the main commit subject after the default squash
merge, so write it for repository history rather than the temporary branch. Use the repository
guide's stable project or implementation area as `scope`, for example `core`, `cli`, `client-web`,
`client-webext`, or an Extension ID. For a coherent change that
crosses several projects, use an umbrella such as `extensions` or `release`; do not pack every project
name into the title.

The scope routes readers but does not select versions. List every affected release project in the
pull-request body and record user-useful release intent through that repository's Towncrier fragment,
Changeset, or equivalent mechanism. Pure contributor documentation and tooling changes do not invent
release news.

## External forks

External fork workflows require maintainer approval before read-only, secret-free CI starts. Forks
receive no preview or production credentials, so a trusted maintainer may need to run a preview after
the ordinary checks pass. Never add a credential to a branch to bypass this boundary.

Some repositories also consume packages whose read access is narrower than source access. Their
local contribution guide must name that prerequisite before the install command. A token scope alone
does not grant package access; contributors should treat `401` or `403` as an access/setup failure and
contact a maintainer instead of editing the lockfile.

Direct pushes to protected `main` are prohibited outside the audited break-glass
procedure. The initial baseline does not require an approving review, but a pull
request, repository-specific checks, and resolved conversations are still
required.

Canonical publication and production delivery happen only from protected
`main`. Pull requests may receive an isolated preview but must not receive
production credentials or publish a canonical release.
