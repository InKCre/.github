# Contributing to InKCre

Thank you for contributing. The organization-wide workflow is defined in
[Git and GitHub Governance](https://github.com/InKCre/.github/blob/main/GOVERNANCE.md).
Repository-local guides own implementation, verification, and release details
for the code or documentation being changed. They extend the organization
policy and must not weaken it silently.

## Workflow

1. For independent work, start from the latest `main` and create a focused
   branch. For a dependent pull request, branch from its immediate parent and
   follow the [stacked pull-request procedure](https://github.com/InKCre/.github/blob/main/GOVERNANCE.md#stacked-pull-requests).
2. Read the repository-local instructions and run its required checks.
3. Open a pull request; a draft is useful when feedback is needed early.
4. Describe intent, evidence, risk, rollback, delivery effects, and any pull
   requests in the same stack.
5. Update the branch when `main` moves, wait for required checks, and resolve all
   review conversations.
6. Merge with squash by default. Use rebase merge only for an intentionally
   curated commit series.

Direct pushes to protected `main` are prohibited outside the audited break-glass
procedure. The initial baseline does not require an approving review, but a pull
request, repository-specific checks, and resolved conversations are still
required.

Canonical publication and production delivery happen only from protected
`main`. Pull requests may receive an isolated preview but must not receive
production credentials or publish a canonical release.
