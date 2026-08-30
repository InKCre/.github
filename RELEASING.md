# Release lifecycle guidance

Repositories with one or more independently releasable projects should keep feature intent separate from release preparation and canonical delivery.

1. A feature pull request records user-useful news for every affected release project using the repository's fragment convention. It leaves project versions and generated changelogs unchanged.
2. The repository classifies affected projects and owns its version policy. A shared fragment tool may validate categories and render news, but it does not decide which monorepo projects changed.
3. After feature work reaches checked protected `main`, an independent Release pull request consumes pending fragments, prepares each affected version, and renders changelogs. The Release pull request is reviewable preparation and does not publish or deploy canonical artifacts.
4. Only the prepared change returning to protected `main` enables the repository's normal publication or deployment lane. Exact source and artifact identities remain recorded independently of the Human-facing version.

For projects below `1.0.0`, a breaking or removed contract should normally advance the minor version and reset patch. Stable projects use a major increment. Added or deprecated behavior normally advances minor; compatible changes and fixes normally advance patch. Repository-local documentation owns exact categories, commands, paths, project mapping, automation, and any justified deviation.

Manual delivery triggers are recovery mechanisms. They may redeploy an already selected current artifact, but should not manufacture version or changelog history or grant publication authority to a feature pull request.
