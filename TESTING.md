# Verification and Test Policy

This document is the organization-wide authority for choosing verification evidence in InKCre
repositories. Repository-local guides may identify admitted suites and commands, but must not
silently weaken this policy.

## Choosing Evidence

Use the least complex mechanism that adequately proves the intended invariant. The options below
are not a mandatory maturation sequence:

- Prefer language types, schemas, compiler checks, linters, formatters, generated-contract checks,
  build checks, database constraints, and other static enforcement when they fully prove the fact.
- Use a manual or scripted black-box journey for exploratory, expensive, or deployment-dependent
  acceptance evidence.
- Use an automated test for a realistic observable regression, a non-trivial invariant or boundary,
  or a concrete bug when static evidence is insufficient and automation repays its maintenance and
  implementation-shaping cost.

Implementing a feature or increasing coverage does not by itself justify a new test. Conversely, a
prior manual script or repeated regression is useful evidence but is not a prerequisite when the
valuable behavior and the appropriate boundary are already clear.

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

An automated test is justified when:

- it protects materially valuable observable behavior, a non-trivial invariant or boundary, or a
  concrete bug;
- static enforcement cannot prove the invariant;
- it exercises the nearest stable behavior boundary with realistic inputs, transports, and state;
- concurrency is verified with deterministic coordination or controlled scheduling rather than
  sleeps when practical;
- its diagnostic and regression value repays its runtime and maintenance cost;
- the test does not introduce a second authority for product behavior or fixture-specific output;
- its owner, failure diagnosis, and removal condition are clear.

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
admission criteria.

## Bug and Security Regressions

A bug should be fixed at the boundary that allowed it: type model, parser, schema, library choice,
architecture, observability, runtime contract, or product behavior. A concrete bug can justify a
regression test when it can be reproduced at a stable behavior boundary. Do not add a redundant test
when correcting the boundary itself or restoring the intended tool and architecture already proves
the fix.

Do not create speculative safety or security regression matrices. Only a confirmed boundary defect
with a specific actor and attack path enters this policy, and it then uses the same ordinary evidence
criteria as any other concrete defect.

## Pull-Request Evidence

Pull requests should state which evidence proves the change and why that evidence level is
proportionate. When automation is newly proposed, identify the observable behavior or invariant,
the exercised boundary, and why static or existing end-to-end evidence is insufficient.
