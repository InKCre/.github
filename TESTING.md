# Verification and Test Policy

This document is the organization-wide authority for choosing verification evidence in InKCre
repositories. Repository-local guides may identify admitted suites and commands, but must not
silently weaken this policy.

## 格式与静态检查

每个仓库的本地检查入口与 CI 必须使用同一份配置和锁定的工具版本，覆盖正式维护的源码、测试与工具脚本。已经采用的类型感知 lint 应进入默认检查入口；仅提供一个需要开发者额外记住的命令，不能算持续执行。检查必须只读，发现违规时以非零状态退出；自动修复使用单独入口。

检查范围由仓库配置明确拥有。构建产物、测试报告、外部维护的技能和共享文档挂载不按消费者仓库的格式重写；任务目录内的临时实验不进入产品质量门禁。实验成为正式验证或交付步骤时，必须迁入受检查的维护目录。生成代码的例外应限定到具体产物和不适用的规则，并保留其生成一致性、编译或类型验证。不要用忽略整个源码目录、关闭有效规则或添加历史问题基线来取得通过。

遇到“既有问题”，先记录命令、工具版本、具体路径和失败原因，核对同一工具与配置下的已提交基线。分别说明源码缺陷、检查范围错误和环境阻塞；不得把未执行、跳过或失败写成通过。修复检查入口后，使用一次受控违规验证它确实失败，再运行正常检查；不为检查配置复制一套长期测试框架。阻塞暂时无法修复时，报告实际剩余问题和负责的仓库，而不是长期沿用笼统豁免。

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
