---
name: create-engineering-defense-deck
description: Scope, plan, and draft an engineering or design-and-implementation master's thesis defense deck in this open-slide repo. Use for 工程型硕士论文答辩, 系统设计与实现答辩, platform/plugin/system implementation slides, architecture and testing defense slides, or a complete engineering defense presentation. Produces a deck under slides/<id>/ with meta.theme usually set to nju-engineering-defense.
---

# Create Engineering Defense Deck

Use this skill for 工程型硕士论文答辩: systems, platforms, plugins, engineering
architectures, implementation modules, testing, deployment, and prototype
demonstrations. Read `slide-authoring` before writing `slides/<id>/index.tsx`;
it owns the open-slide file contract, 1920 x 1080 canvas, `Page[]` export,
assets, and type/layout rules.

## Non-Negotiables

- Create one deck folder: `slides/<deck-id>/index.tsx`.
- Export `meta` with `theme: "nju-engineering-defense"` unless the user chooses
  a different theme.
- Export a non-empty `Page[]`; each page component is one slide.
- Put architecture diagrams, screenshots, flowcharts, test tables, photos, and
  fonts in `slides/<deck-id>/assets/`.
- Do not invent requirements, performance numbers, test results, failure cases,
  screenshots, or deployment facts.
- Use Microsoft YaHei / 微软雅黑 for Chinese titles and body text, with Noto Sans
  CJK SC or PingFang SC fallback. Do not render Chinese headings with Georgia or
  Times New Roman.
- The title page must follow the `nju-engineering-defense` cover master: NJU
  purple corner fields, central faded campus photo, NJU wordmark, "毕业答辩",
  thesis title, date, and candidate row.
- The committee evaluates whether the system design is justified, implemented,
  tested, and aligned with the stated engineering goal.

## Step 1 - Scope

Collect or infer these facts from the thesis/materials before drafting:

- Thesis basics: title, discipline, degree, institution, candidate, advisor,
  defense date, deck language.
- Logistics: talk length, expected slide count, committee emphasis, demo needs.
- Engineering problem: business/technical pain point, users, operating context,
  and why existing solutions are insufficient.
- Requirements: functional requirements, non-functional requirements, constraints,
  acceptance criteria, and risk points.
- Architecture: use case view, logical view, process view, development view,
  physical/deployment view, data/storage view if relevant.
- Implementation: core modules, key flows, algorithms/protocols, engineering
  tradeoffs, prototype screenshots.
- Testing: functional cases, performance/load tests, non-functional tests,
  fault-tolerance/security tests, environment, pass/fail criteria.
- Theme: default to `nju-engineering-defense`; read its markdown before authoring.

If test evidence, requirement wording, architecture diagrams, or screenshots are
missing, ask or leave a concrete `ImagePlaceholder`; never fill with fiction.

## Step 2 - Fixed Engineering Structure

Target: title + contents + five parts + closing + optional appendix. Keep a
normal engineering defense around 24-30 slides; compress by merging minor
modules, never by dropping test evidence.

1. **Title** - theme cover master with thesis title, candidate, advisor,
   institution, date.
2. **Contents** - five-part roadmap.
3. **Part 1: 项目背景与意义** - about 3-4 slides:
   - Engineering pain point: concrete incident, workflow problem, or system gap.
   - Current state / related systems: what exists and what is missing.
   - Main work: numbered goals or deliverables that will be verified later.
4. **Part 2: 系统设计** - about 5-7 slides:
   - Requirements overview: functional and non-functional requirements.
   - Use case view: actors, scenarios, permissions, and system boundary.
   - Logical view: layers/modules and responsibility boundaries.
   - Process view: runtime flow, sequence, state machine, or data path.
   - Development view: code organization, dependencies, integration points.
   - Physical/deployment view: topology, services, storage, external dependencies,
     failover or scaling path when relevant.
5. **Part 3: 系统实现** - about 7-9 slides:
   - Overall implementation map tied back to the design views.
   - Core module pages: role, key mechanism, input/output, and tradeoff.
   - Key process pages: protocol flow, data structure, consistency mechanism,
     scheduling, orchestration, or human-in-the-loop logic.
   - Prototype pages: UI screenshots only when they prove an implemented workflow.
6. **Part 4: 系统测试** - about 3-5 slides:
   - Test setup: environment, data, tools, versions, deployment assumptions.
   - Functional testing: representative cases and pass/fail summary.
   - Non-functional testing: performance, reliability, security, compatibility,
     usability, or fault tolerance according to the requirements.
   - Result interpretation: explicitly state whether design goals are met.
7. **Part 5: 总结与展望** - about 2 slides:
   - Summary: goals achieved, modules delivered, tests passed, limitations.
   - Future work: concrete evolution paths and expected engineering benefit.
8. **Closing** - thanks/questions/contact.
9. **Appendix** - full test cases, APIs, schemas, extra screenshots, deployment
   configs, sequence details, and backup evidence.

## High-Density Page Grammar

Follow the engineering reference PPT's design logic:

- A content slide cannot be only sparse bullets or isolated numbers.
- Every main slide needs a primary evidence object: architecture diagram, flow,
  requirement matrix, module map, screenshot, deployment topology, or test table.
- Prefer two-diagram pages, multi-screenshot panels, bottom conclusion strips,
  process lanes, module cards, and requirement-test mapping tables.
- System design pages must name the engineering decision, not just the component.
- Prototype screenshots must be cropped to the defended workflow and captioned.
- Testing pages must preserve units, environment, load/sample size, pass criteria,
  and whether each result satisfies the requirement.
- Body text floor is 28px. Dense captions/table cells may use 22-24px if still
  readable and not load-bearing.
- Keep all load-bearing text, axes, legends, and labels inside the 96px safe
  margin and aligned to the 12-column grid.

## Closure Check

Before passing back, verify:

- Every main work item maps to a requirement or engineering pain point.
- Every requirement has corresponding design and implementation explanation.
- Every core implementation module maps back to a design view.
- Every stated design goal has test evidence or is explicitly marked unverified.
- Summary items map to goals, delivered modules, and test outcomes.
- Appendix-only slides are marked as appendix and not required for the main talk.
- The generated deck sets `meta.theme` and declares an exported `design` const.

## Pass Back

Summarize the final outline, total page count, requirement/design/implementation/
test closure, any missing facts you did not invent, and which slides are
appendix-only.
