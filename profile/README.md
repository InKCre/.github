# InKCre

**Information → Knowledge → Creation**

InKCre is an open-source, self-hostable system for **collecting, organizing, and reusing information — for people and agents**. It brings information from different sources into one durable, graph-based **info-base**, so what you have already encountered stays useful in future work.

[Website](https://inkcre.dev) · [Developer Guide](https://inkcre.dev/developer/) · [Architecture](https://inkcre.dev/developer/architecture)

[Discussions](https://github.com/orgs/InKCre/discussions) · [Get involved](https://github.com/InKCre/.github/blob/main/SUPPORT.md) · [Current work](https://github.com/orgs/InKCre/projects/12)

## The idea

Information is scattered across messages, feeds, documents, and apps. Capturing it is only the first step — the harder problem is making it remain useful after its original context has passed.

InKCre's answer is a graph-based **info-base**:

- A **Block** is one persisted information unit. A **Relation** is a directed semantic connection between Blocks.
- **Sources** collect from external systems. **Resolvers** interpret content with graph context. **Storage** owns the bytes. **Sinks** project the info-base into downstream apps and agents.
- **Retrieval** exposes lexical, semantic, and graph-navigation primitives — composed per task, not hidden behind one search box.
- **Organization** is explicit and additive: rumination, refinement, synthesis, supersession, evidence stance, referent anchoring, duplicate assertion. Collection does not auto-trigger AI processing.

Provenance is preserved end-to-end: source-authored facts, raw content, Resolver-derived meaning, and model-authored interpretation stay distinguishable.

## For agents

InKCre exposes an MCP Sink: external agents can recall information, read Blocks, expand graph context, find paths, and invoke typed Resolver methods. Agents can also participate in Organization — bounded graph operations validated against structural invariants.

## Engineering boundaries

<details>
<summary>Click to expand</summary>

- **Authoritative graph, derived support** — Blocks and Relations are authoritative; embeddings and lexical records are derived and rebuildable.
- **Interpretation and bytes are different responsibilities** — Resolvers own meaning; Storage owns bytes.
- **Persisted information outlives runtime enablement** — an installed decoder continues to interpret its persisted Blocks even when its Source is disabled.
- **Peers around shared authority** — `impl-py`, `impl-ts`, and future runtimes are peers around a shared info-base, not a frontend/backend hierarchy. PostgreSQL owns shared persisted state.

</details>

## Project structure

InKCre is a multi-repository project under active development.

- [`InKCre/impl-py`](https://github.com/InKCre/impl-py) — Python peer; owns schema/migrations, `inkcre-cli`, and first-party Python extensions
- [`InKCre/impl-ts`](https://github.com/InKCre/impl-ts) — TypeScript peer; web app, browser extension, and first-party TypeScript extensions
- [`InKCre/ui`](https://github.com/InKCre/ui) — design system and `@inkcre/ui-web`
- [`InKCre/docs`](https://github.com/InKCre/docs) — canonical product truth Hub and [inkcre.dev](https://inkcre.dev)
- [`InKCre/ext-reg`](https://github.com/InKCre/ext-reg) — public Extension Registry

## Why "InKCre"?

**In · K · Cre** = **In**formation → **K**nowledge → **Cre**ation, and sounds like _increase_.

Also known in Chinese as **第三持存** — _tertiary retention_.
