# InKCre

InKCre is an open-source, self-hostable system for collecting information from external systems, organizing it into a durable graph-based info-base, and making it available for later retrieval and use.

The goal is simple: information that has already been encountered should remain useful in future work, instead of being trapped in source-specific flows or repeatedly rediscovered.

[Website](https://inkcre.dev) · [Developer Guide](https://inkcre.dev/developer/) · [Architecture](https://inkcre.dev/developer/architecture) · [Core](https://github.com/InKCre/core-py)

## Usable information

Information arrives from many places: messages, feeds, documents, bookmarks, applications, and the surrounding context of our work.

Capturing it is only the beginning.

InKCre aims to serve collected information improving your productivity:

```
external systems
      │
   Sources
      │
      ▼
┌───────────────────────┐
│       info-base       │
│                       │
│  Blocks ─ Relations   │
└───────────┬───────────┘
            │
    ┌───────┼───────────────┐
    │       │               │
 Resolvers  │          Organization
 + Storage  │          behaviors
            │               │
            ▼               └──────↺
   lexical / semantic /
     graph retrieval
            │
      ┌─────┴─────┐
      ▼           ▼
   clients      Sinks

```

A Block is one persisted information unit. A Relation is a directed semantic connection between Blocks. Together they form the authoritative graph of the info-base.

Around that graph:

* Sources collect information from external systems.
* Resolvers interpret stored content and its local graph context.
* Storage retrieves the actual bytes behind externally stored content.
* Organization improves information already in the info-base for later use.
* Retrieval and Sinks expose that information to people, applications, and agents.

These responsibilities stay separate even when one runtime implements several of them.

### Design principles

### Collection, organization, and use are independent actions

InKCre does not require information to pass through a fixed ingestion → processing → retrieval pipeline.

A Source may persist a useful graph directly. Information can be used immediately, or later reconsidered by Organization when doing so improves future use.

Reads do not silently rewrite the info-base.

### Preserve provenance and meaning

Collected information should retain the meaning and evidence provided by its source without turning InKCre into a mirror of every external system.

Source-authored facts, raw content, Resolver-derived meaning, and model-authored interpretation remain distinguishable so downstream consumers can reason about where information came from and how it was produced.

### Multiple ways to recover context

Different questions require different evidence.

InKCre keeps lexical feature retrieval, semantic retrieval, and graph navigation as distinct capabilities rather than hiding them behind one opaque search abstraction.

A caller can recover an entity from a remembered phrase, search by meaning, or navigate relationships already expressed in the graph.

### Agents can use and improve the info-base

InKCre exposes an MCP Sink for external agents to recall information, read Blocks, expand graph context, find paths, and invoke typed Resolver capabilities.

The downstream Agent owns its task reasoning and answer generation; the info-base remains the information authority.

Agents can also participate in Organization. Core currently models semantic behaviors such as rumination, refinement, synthesis, supersession, evidence stance, referent anchoring, and provenance-aware duplicate assertion as explicit graph operations with bounded mutation contracts.

## Architecture

InKCre is a multi-repository system built around one shared info-base.

core-py, client-web, and future runtimes participate as peers rather than being forced into a permanent frontend/backend hierarchy. PostgreSQL owns shared persisted state, while admitted database, HTTP, and extension contracts define how runtimes participate.

The project is under active development. Product behavior and developer contracts continue to evolve as real integrations clarify which boundaries should become durable.

For the canonical architecture and product vocabulary, see the Developer Guide and Architecture.

## Why “InKCre”?

Information → Knowledge → Creation -> In, K, Cre

InKCre is also known in Chinese as 第三持存 — tertiary retention.

The project exists to make accumulated information available when it becomes useful again, while leaving more human attention for understanding, judgment, and creation.