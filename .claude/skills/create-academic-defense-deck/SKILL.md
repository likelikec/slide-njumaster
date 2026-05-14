---
name: create-academic-defense-deck
description: Scope, plan, and draft an academic or research-oriented master's thesis defense deck in this open-slide repo. Use when the user asks for 学术型硕士论文答辩, research defense slides, algorithm/model/method thesis slides, RQ-driven experiment slides, or a complete academic defense presentation. Produces a deck under slides/<id>/ with meta.theme usually set to nju-academic-defense.
---

# Create Academic Defense Deck

Use this skill for 学术型 master's thesis defenses: methods, algorithms, models,
research questions, experiments, and contribution claims. Read `slide-authoring`
before writing `slides/<id>/index.tsx`; it owns the open-slide file contract,
1920 x 1080 canvas, `Page[]` export, assets, and type/layout rules.

## Ground Rules

- Create one deck folder: `slides/<deck-id>/index.tsx`.
- Export `meta` with `theme: "nju-academic-defense"` unless the user chooses a
  different theme.
- Export a non-empty `Page[]`; each page component is one slide.
- Put all figures, screenshots, charts, data snippets, and fonts in
  `slides/<deck-id>/assets/`.
- Do not invent datasets, results, citations, baselines, RQs, or numeric claims.
- Treat the committee as already familiar with the thesis text. Slides reduce
  cognitive load and surface evidence; they do not reprint chapters.

## Step 1 - Scope

Collect or infer these facts from the thesis/materials before drafting:

- Thesis basics: title, discipline, degree, institution, candidate, advisor,
  defense date, deck language.
- Logistics: talk length, expected slide count, public/closed defense, committee
  emphasis if known.
- Core claim: research question and contribution in one or two sentences.
- Objectives and RQs: exact wording and count. Part 3 length derives from this.
- Materials: thesis source, figures, architecture diagrams, result tables,
  ablations, citations, and appendix candidates.
- Real-world pain point: a concrete scene/problem for the opening background
  slide; use real imagery when available.
- Theme: default to `nju-academic-defense`; read its markdown before authoring.

If any required result, baseline, dataset, or RQ wording is missing, ask instead
of fabricating it.

## Step 2 - Fixed Academic Structure

Target length: about 18 content slides plus title, closing, and appendix. Scale
down for short defenses; do not pad.

1. **Title** - thesis title, candidate, advisor, institution, date.
2. **Contents** - four-part roadmap.
3. **Part 1: 研究背景与意义** - about 4 slides:
   - Pain point: concrete real-world problem, image-led when possible.
   - Related work / state of practice: position the field and name the gap.
   - Motivation and objectives: numbered objectives that will return later.
   - Thesis structure: diagram of the deck/thesis logic, not a bullet list.
4. **Part 2: 关键技术与方法** - about 6-8 slides:
   - Overall architecture: one figure that names the main modules.
   - Method/module expansion: one page per major module; central contribution
     may get two pages.
   - Use a "you are here" locator for module pages when the architecture is deep.
   - Explain design choices, inputs/outputs, and why the method is defensible.
5. **Part 3: 实验设计与分析** - exactly `2 + RQ count` slides:
   - Experimental setup: datasets, baselines, metrics, protocol, environment.
   - RQ overview: numbered RQs, one line each.
   - One result slide per RQ: one chart/table answers one RQ; contribution uses
     the primary accent, baselines stay gray; show units and uncertainty when
     the source supports it.
6. **Part 4: 总结与展望** - about 2 slides:
   - Contributions: numbered list mapping back to objectives and RQs.
   - Future work: 2-4 concrete directions with why they matter.
7. **Closing** - thanks/questions/contact.
8. **Appendix** - ablations, full tables, proofs, extra cases, dense details.

## Step 3 - Page Grammar

- Use one claim per slide. The H1 should be a finding or claim, not a vague
  topic label.
- Body text floor is 28px. Prefer fewer words, larger figures, and captions.
- Put diagrams/charts/tables at the center of the argument; prose is a rail.
- Use the same number labels for objectives, RQs, and contributions when they
  map to each other.
- Keep all load-bearing text, axes, legends, and labels inside the 96px safe
  margin and aligned to the 12-column grid.
- Use real citations for borrowed material; quiet footnotes are enough.

## Step 4 - Closure Check

Before passing back, verify:

- Every objective has a matching RQ or method/result explanation.
- Every RQ has exactly one primary result slide in the linear talk.
- Every contribution maps to at least one objective and one result.
- Every numeric claim has a source, unit, metric definition, or test condition.
- Appendix-only slides are marked as appendix and not needed for the main talk.
- The generated deck sets `meta.theme` and declares an exported `design` const.

## Pass Back

Summarize the final outline, total page count, Part 3 page count from RQs, any
missing facts you did not invent, and which slides are appendix-only.
