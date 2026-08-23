# Verification and Test Policy

This document is the organization-wide authority for choosing verification evidence in InKCre
repositories. Repository-local guides may identify admitted suites and commands, but must not
silently weaken this policy.

## Default Evidence Order

Use the least complex mechanism that proves the intended invariant:

1. language types, schemas, compiler checks, linters, formatters, generated-contract checks, build
   checks, database constraints, and other static or mechanically enforced facts;
2. a manually executed black-box journey over the real public boundary;
3. a repeatable script for a black-box journey that has become useful more than once;
4. an automated test only after the scripted journey has matured and repeated regressions prove
   that automation repays its maintenance and implementation-shaping cost.

New automated tests require explicit maintainer approval. Implementing a feature, fixing a bug, or
finding a regression does not by itself authorize a new test.

## What Not to Automate by Default

Do not add tests that primarily restate:

- a type, schema, declaration, configuration shape, or generated artifact already checked
  statically;
- private helpers, internal call order, mocks, manager wiring, route wiring, CSS classes, component
  props/emits, or another implementation detail;
- framework or mature-library behavior;
- arbitrary fixture output, incidental ordering, or a visual pixel snapshot without product value;
- a negative-path matrix assembled for completeness rather than a distinct public outcome.

Such tests increase coupling and can shape implementation around the test harness instead of the
product contract. Delete them when stronger static or black-box evidence exists.

## Admission Criteria for Automation

An automated test is justified only when all of the following are true:

- it protects a stable, public, materially valuable invariant;
- static enforcement cannot prove the invariant;
- the journey has first been exercised manually or as a script against the real boundary;
- repeated execution or observed regressions demonstrate positive return on maintenance;
- the test does not introduce a second authority for product behavior or fixture-specific output;
- its owner, runtime cost, failure diagnosis, and removal condition are clear; and
- explicit maintainer approval has been recorded.

Prefer black-box end-to-end tests. A lower-level automated test needs stronger evidence that the
public boundary cannot provide useful, reliable, or affordable feedback.

## Existing Admitted Suites

Existing automation is not automatically justified by age. Repositories should periodically remove
unit, helper, schema, mock-heavy, component-mounting, and implementation-order suites that do not
meet this policy.

The following categories may remain when their repository documents the concrete owner and value:

- migration and database integrity checks where failure can corrupt or strand persisted data;
- mature integration or acceptance journeys over real transports and persistence;
- mature browser, extension, packaging, release, or deployment end-to-end journeys.

Category membership is not blanket permission to add another test. New cases still require the
admission criteria and explicit approval.

## Bug and Security Regressions

A bug should first be fixed at the boundary that allowed it: type model, parser, schema, library
choice, architecture, observability, runtime contract, or product behavior. Do not automatically add
a regression test when the defect came from bypassing an existing mechanism or using the wrong
tool.

Security-sensitive validation follows the same evidence discipline but may justify automation when
it protects a demonstrated security boundary. Generic hardening, hypothetical attack coverage, or a
mocked security check is not automatically a test requirement.

## Pull-Request Evidence

Pull requests should state which evidence proves the change and why that evidence level is
proportionate. When automation is newly proposed, include the prior manual/scripted journey, the
observed regression or repeated need, the approval, and why static or existing end-to-end evidence
is insufficient.
