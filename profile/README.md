# InKCre

**Information → Knowledge → Creation**

InKCre is an open-source, self-hostable system for **collecting, organizing, and reusing information—for people and agents**.

It brings information from different sources into one durable, graph-based **info-base**, keeping content connected to its context and provenance. The goal is to make information you have already encountered useful in future work, leaving more attention for understanding, judgment, and creation.

[Website](https://inkcre.dev) · [Developer Guide](https://inkcre.dev/developer/) · [Architecture](https://inkcre.dev/developer/architecture) · [Core](https://github.com/InKCre/core-py)

## Why InKCre

Information is scattered across messages, feeds, documents, bookmarks, applications, and the surrounding context of everyday work.

Capturing it is only the first step. The harder problem is making that information remain useful after its original context has passed: finding it again, recovering the relationships around it, understanding where it came from, and letting it participate in later work.

InKCre is built around that problem.

```text
external systems
      │
   Sources
      │
      ▼
┌──────────────────────────┐
│        info-base         │
│                          │
│   Blocks ─ Relations     │
└────────────┬─────────────┘
             │
      ┌──────┼───────────────┐
      │      │               │
  Resolvers  │          Organization
  + Storage  │           behaviors
      │      │               │
      │      ▼               └──────↺
      │ lexical / semantic /
      │   graph retrieval
      │      │
      └──────┼───────────────┐
             ▼               ▼
          clients          Sinks
                              │
                              ▼
                           agents
```

A **Block** is one persisted information unit. A **Relation** is a directed semantic connection between Blocks. Together, they form the authoritative graph of the info-base.

The surrounding capabilities stay intentionally separate:

- **Sources** collect information from external systems or compatible clients.
- **Resolvers** interpret stored content together with its local graph context.
- **Storage** retrieves the actual bytes behind externally stored content.
- **Organization** improves information already in the info-base for later use.
- **Retrieval** exposes lexical, semantic, and graph-navigation ways to recover context.
- **Sinks** project info-base capabilities into downstream applications and agents.

## Information that survives its source

InKCre does not treat collected information as output that belongs permanently to the system where it was first encountered.

For example, an email can enter the info-base as several connected pieces: the message, mailbox occurrence, participants, body content, attachments, and relationships to other messages. These pieces remain independently addressable and reusable after collection. A future task can retrieve the body, follow a relationship, inspect an attachment, or combine the message with information collected somewhere else.

This is why collection, organization, and use are independent actions rather than mandatory stages in a fixed ingestion pipeline.

Information may be useful immediately after collection. It may also become more useful later, after new information arrives or an Agent explicitly reorganizes it.

## Preserve provenance, not just content

Information becomes less trustworthy when its origin, evidence, and transformations are flattened away.

InKCre keeps source-authored facts, raw content, Resolver-derived meaning, and model-authored interpretation distinguishable. Relations can express where derived information came from and how it changed.

For example, an Agent-created synthesis can remain linked to every source Block that materially contributed to it. A later revision can remain connected to the previous synthesis instead of silently replacing its history.

The goal is to let downstream consumers reason about **what an information unit means, where it came from, and how it was produced**.

## Multiple ways to recover context

Different tasks need different evidence, so InKCre does not hide retrieval behind one universal search abstraction.

- **Lexical retrieval** recovers a Block from exact clues such as a phrase, identifier, filename, transcript, OCR fragment, metadata field, or description.
- **Semantic retrieval** ranks existing Blocks and Relations by meaning.
- **Graph navigation** follows relationships already expressed in the info-base, including bounded neighborhoods and paths.

These primitives can be composed by applications or Agents according to the task.

## Agents can use the info-base

InKCre exposes an MCP Sink that lets an external Agent recall information, read Blocks, expand graph context, find paths, discover Resolver capabilities, and invoke typed Resolver methods.

The Agent remains responsible for its task reasoning and final output. InKCre acts as an evidence environment: it supplies reusable information and provenance without pretending that retrieved evidence is already an answer.

This also changes when retrieval can happen. An Agent may consider information collected earlier whenever it can improve the current productive or creative task—even when the person did not explicitly ask to search—while avoiding reflexive retrieval when stored information is unlikely to help.

## Agents can improve the info-base

Agents can also participate in Organization: explicit actions over existing information whose purpose is to improve later use.

Current organization behaviors include:

- **rumination** — reconsider one information unit and its direct context;
- **refinement** — add information that makes an existing idea more precise without replacing it;
- **synthesis** — create reusable information from multiple sources while preserving exact source basis;
- **supersession** — express that newer information replaces older information within a compatible scope;
- **evidence stance** — preserve support, contradiction, or other attributable evidence relationships;
- **referent anchoring** — connect a mention to an existing entity when justified;
- **duplicate assertion** — record provenance-aware duplication without destructively collapsing information.

These behaviors are implemented as bounded graph operations. The Agent makes semantic judgments using retrieval, Resolver capabilities, and graph navigation; behavior-specific commands validate structural invariants before changing the authoritative graph.

Organization is additive and explicit. Collection does not automatically force information through an AI-processing pipeline, and retrieval does not implicitly trigger Organization.

<details>
<summary><strong>Engineering boundaries</strong></summary>

### Authoritative graph, derived support

Blocks and Relations are authoritative information state. Embeddings and lexical retrieval records are derived support that can be rebuilt.

Retrieval reads only usable derived records; it does not silently maintain stale indexes while serving a query.

### Interpretation and bytes are different responsibilities

A Resolver interprets a Block's hydrated content and local graph context. Storage only turns an opaque pointer into bytes and, when writable, owns that byte lifecycle.

This separation lets externally stored content remain part of the same information model without making storage backends responsible for meaning.

Some Resolver reads may explicitly materialize a missing derivation when their own contract permits it. That behavior remains owned by the Resolver; it is not a hidden retrieval or Organization side effect.

### Persisted information outlives runtime enablement

Extensions can add Sources, Resolvers, Storage handlers, Sinks, and bounded protocol behavior. Runtime enablement and persisted readability are intentionally different lifetimes: an installed decoder can continue to interpret its persisted Blocks even when the Extension's active Source or API surface is disabled.

### Peers around shared authority

`core-py`, `client-web`, and future runtimes participate as peers around a shared info-base rather than being forced into a permanent frontend/backend hierarchy.

PostgreSQL owns shared persisted state. Individual peers can have different runtime capabilities, and exact capability contracts allow work to be routed without transferring information authority.

</details>

## Project structure

InKCre is a multi-repository project under active development.

- [`InKCre/core-py`](https://github.com/InKCre/core-py) — Python runtime and reference implementation for the info-base, Sources, Resolvers, Storage, retrieval, Organization, Agent runtime, MCP Sink, and first-party Extensions.
- [`InKCre/docs`](https://github.com/InKCre/docs) — canonical shared product intent, vocabulary, cross-unit contracts, and the public documentation website.
- [`inkcre.dev`](https://inkcre.dev) — project website and developer documentation.

The system is designed to be self-hostable and extensible. Product behavior and developer contracts continue to evolve as implementation and real integrations clarify which boundaries should become durable.

## Why “InKCre”?

**Information → Knowledge → Creation** gives the project its name: **In · K · Cre**.

InKCre is also known in Chinese as **第三持存** — *tertiary retention*.

The project exists to make accumulated information available when it becomes useful again, so people and Agents can spend less effort rediscovering context and more effort understanding, deciding, and creating.
