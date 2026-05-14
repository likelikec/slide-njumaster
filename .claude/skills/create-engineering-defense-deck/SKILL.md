---
name: create-engineering-defense-deck
description: Scope, plan, and draft an engineering or design-and-implementation master's thesis defense deck in this open-slide repo. Use when the user asks for 工程型硕士论文答辩, 系统设计与实现答辩, platform/plugin/system implementation slides, architecture and testing defense slides, or a complete engineering defense presentation. Produces a deck under slides/<id>/ with meta.theme usually set to nju-engineering-defense.
---

# Create Engineering Defense Deck

Use this skill for 工程型 master's thesis defenses: systems, platforms, plugins,
engineering architectures, implementation modules, testing, deployment, and
prototype demonstrations. Read `slide-authoring` before writing
`slides/<id>/index.tsx`; it owns the open-slide file contract, 1920 x 1080
canvas, `Page[]` export, assets, and type/layout rules.

## Ground Rules

- Create one deck folder: `slides/<deck-id>/index.tsx`.
- Export `meta` with `theme: "nju-engineering-defense"` unless the user chooses
  a different theme.
- Export a non-empty `Page[]`; each page component is one slide.
- Put all architecture diagrams, screenshots, flowcharts, test tables, and
  fonts in `slides/<deck-id>/assets/`.
- Do not invent requirements, performance numbers, test results, failure cases,
  screenshots, or deployment facts.
- Treat the committee as evaluating whether the system design is justified,
  implemented, tested, and aligned with the stated engineering goal.

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

Target length: about 22-28 slides for a normal engineering defense. Compress for
short talks by merging minor modules; do not skip testing evidence.

1. **Title** - thesis title, candidate, advisor, institution, date.
2. **Contents** - five-part roadmap.
3. **Part 1: 项目背景与意义** - about 3-4 slides:
   - Engineering pain point: concrete incident, workflow problem, or system gap.
   - Current state / related systems: what exists and what is missing.
   - Main work: numbered goals or deliverables that will be verified later.
4. **Part 2: 系统设计** - about 5-7 slides:
   - Requirements overview: functional and non-functional requirements.
   - Use case view: actors, core scenarios, permission/boundary assumptions.
   - Logical view: major layers/modules and responsibility boundaries.
   - Process view: runtime flow, sequence, state machine, or data path.
   - Development view: code organization, component dependencies, integration.
   - Physical/deployment view: topology, regions, services, storage, external
     dependencies, failover path when relevant.
5. **Part 3: 系统实现** - about 7-9 slides:
   - Overall implementation map: modules tied back to the design views.
   - Core module pages: one slide per important module, each with role, key
     mechanism, input/output, and engineering tradeoff.
   - Key process pages: protocol flow, algorithmized token/data structure,
     consistency mechanism, scheduling, or human-in-the-loop logic.
   - Prototype pages: UI screenshots only when they prove implemented workflow.
6. **Part 4: 系统测试** - about 3-5 slides:
   - Test setup: environment, data, tools, versions, deployment assumptions.
   - Functional testing: representative cases and pass/fail summary.
   - Non-functional testing: performance, reliability, security, compatibility,
     usability, or fault-tolerance according to the requirements.
   - Result interpretation: explicitly state whether design goals are met.
7. **Part 5: 总结与展望** - about 2 slides:
   - Summary: goals achieved, modules delivered, tests passed, limitations.
   - Future work: specific engineering evolution paths and expected benefit.
8. **Closing** - thanks/questions/contact.
9. **Appendix** - full test cases, APIs, schemas, extra screenshots, deployment
   configs, sequence details, and backup evidence.

## Step 3 - Page Grammar

- Every design page must name the engineering decision, not only the component.
- Architecture diagrams should show boundaries and flows; decorative boxes are
  not enough.
- Prototype screenshots must be cropped to the workflow being defended and carry
  a caption explaining what has been implemented.
- Testing pages must preserve units, environment, sample size/load, pass criteria,
  and whether the result satisfies the requirement.
- Body text floor is 28px; dense tables may use caption-sized text only when the
  slide remains readable from the back row.
- Keep all load-bearing text, axes, legends, and labels inside the 96px safe
  margin and aligned to the 12-column grid.

## Step 4 - Closure Check

Before passing back, verify:

- Every main work item maps to a requirement or engineering pain point.
- Every requirement has a corresponding design and implementation explanation.
- Every core implementation module maps back to a design view.
- Every stated design goal has test evidence or is explicitly marked unverified.
- Summary items map to goals, delivered modules, and test outcomes.
- Appendix-only slides are marked as appendix and not needed for the main talk.
- The generated deck sets `meta.theme` and declares an exported `design` const.

## Pass Back

Summarize the final outline, total page count, requirement/design/implementation/
test closure, any missing facts you did not invent, and which slides are
appendix-only.
