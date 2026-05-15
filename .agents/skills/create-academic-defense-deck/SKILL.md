---
name: create-academic-defense-deck
description: Scope, plan, and draft an academic or research-oriented master's thesis defense deck in this open-slide repo. Use for 学术型硕士论文答辩, method/model/algorithm theses, RQ-driven experiment slides, research contribution decks, or a complete academic defense presentation. Produces a deck under slides/<id>/ with meta.theme usually set to nju-academic-defense.
---

# Create Academic Defense Deck

Use this skill for 学术型硕士论文答辩: methods, algorithms, models, research
questions, experiments, and contribution claims. Read `slide-authoring` before
writing `slides/<id>/index.tsx`; it owns the open-slide file contract, 1920 x
1080 canvas, `Page[]` export, assets, and type/layout rules.

## Non-Negotiables

- Create one deck folder: `slides/<deck-id>/index.tsx`.
- Export `meta` with `theme: "nju-academic-defense"` unless the user chooses a
  different theme.
- Export a non-empty `Page[]`; each page component is one slide.
- Put figures, screenshots, charts, data snippets, photos, and fonts in
  `slides/<deck-id>/assets/`.
- Do not invent datasets, results, citations, baselines, RQs, or numeric claims.
- Use Microsoft YaHei / 微软雅黑 for Chinese titles and body text, with Noto Sans
  CJK SC or PingFang SC fallback. Do not render Chinese headings with Georgia or
  Times New Roman.
- The title page must follow the `nju-academic-defense` cover master: NJU purple
  corner fields, central faded campus photo, NJU wordmark, "毕业答辩", thesis
  title, date, and candidate row.
- The committee has read the thesis. Slides clarify the argument and evidence;
  they do not reprint chapters.

## Step 1 - Scope

Collect or infer these facts from the thesis/materials before drafting:

- Thesis basics: title, discipline, degree, institution, candidate, advisor,
  defense date, deck language.
- Logistics: talk length, expected slide count, public/closed defense, committee
  emphasis if known.
- Core claim: research problem and contribution in one or two sentences.
- Objectives and RQs: exact wording and count. Part 3 length derives from this.
- Materials: thesis source, figures, architecture diagrams, result tables,
  ablations, citations, and appendix candidates.
- Real-world pain point: a concrete scene/problem for the opening background
  slide; use real images when available.
- Theme: default to `nju-academic-defense`; read its markdown before authoring.

If any required result, baseline, dataset, or RQ wording is missing, ask instead
of fabricating it.

## Step 2 - Fixed Academic Structure

Target: title + contents + four parts + closing + optional appendix. Keep the
main talk around 20-22 slides for a normal defense; do not pad.

1. **Title** - theme cover master with thesis title, candidate, advisor,
   institution, date.
2. **Contents** - four-part roadmap.
3. **Part 1: 研究背景与意义** - about 4 slides:
   - Real-life pain point: concrete practice/life problem with actual photos.
   - Research status / related technology: current approaches and what they miss.
   - Motivation and objectives: numbered objectives that return in Part 4.
   - Thesis structure: diagram of the thesis/deck logic, not a bullet list.
4. **Part 2: 关键技术与方法** - about 8 slides:
   - Overall method architecture and concise overview.
   - Core technique/module expansions. Each module page names inputs, outputs,
     design choice, and why the choice is defensible.
   - Every module page must visually point back to the architecture overview
     with a "you are here" locator or highlighted mini-map.
   - Give the central contribution two pages only when the thesis evidence needs it.
5. **Part 3: 实验设计与分析** - exactly `2 + RQ count` slides:
   - Experimental setup: datasets, baselines, metrics, protocol, environment.
   - RQ overview: numbered RQs, one line each.
   - One result slide per RQ. One chart/table answers one RQ; contribution uses
     NJU purple, baselines stay gray; show units and uncertainty when supported.
6. **Part 4: 总结** - about 2 slides:
   - Contributions: numbered list mapping to objectives and RQs.
   - Future work: 2-4 concrete directions with why they matter.
7. **Closing** - thanks/questions/contact.
8. **Appendix** - ablations, full tables, proofs, extra cases, dense details.

## High-Density Page Grammar

Follow the design logic of the provided academic and engineering reference PPTs:

- A content slide cannot be only a sparse statistic, a quote, or a few bullets.
- Every main slide needs a primary evidence object: figure, table, chart,
  architecture, process, screenshot, real photo, or result panel.
- Use multi-panel compositions when the evidence has parts: 2-up figures,
  left text rail + right evidence, bottom conclusion strip, comparison table,
  or flow chain.
- Use the bottom purple claim strip for the one sentence the committee should
  remember from the slide.
- Body text floor is 28px. Dense captions/table cells may use 22-24px if still
  readable and not load-bearing.
- The H1 should be a finding or claim, not a vague topic label.
- Keep all load-bearing text, axes, legends, and labels inside the 96px safe
  margin and aligned to the 12-column grid.

## Closure Check

Before passing back, verify:

- Every objective maps to an RQ, method/result explanation, or contribution.
- Every RQ has exactly one primary result slide in the linear talk.
- Every contribution maps to at least one objective and one result.
- Every numeric claim has a source, unit, metric definition, or test condition.
- Appendix-only slides are marked as appendix and not required for the main talk.
- The generated deck sets `meta.theme` and declares an exported `design` const.

## Pass Back

Summarize the final outline, total page count, Part 3 page count from RQs, any
missing facts you did not invent, and which slides are appendix-only.
