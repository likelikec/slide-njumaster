# open-slide - Master's Defense Agent Guide

This repo authors **master's thesis defense decks** with open-slide. Each deck is
React code rendered on a fixed 1920 x 1080 canvas.

## Hard Rules

- Put each deck under `slides/<kebab-case-id>/`.
- The entry is `slides/<id>/index.tsx`.
- Export a non-empty `Page[]`; each page component is one slide.
- Put deck-specific images, figures, screenshots, charts, and fonts under
  `slides/<id>/assets/`.
- Do not touch `package.json`, `open-slide.config.ts`, or unrelated slides.
- Do not add dependencies. Use only `react`, `@open-slide/core`, and standard web APIs.
- The committee has already read the thesis. Slides should surface structure,
  evidence, contribution, and rigor, not restate the document.

## Defense Types

Use one of the two project-local skills:

- **Academic / research thesis**: use `create-academic-defense-deck`.
  Best for methods, algorithms, models, research questions, experiments, and
  objective-RQ-result-contribution closure.
- **Engineering / design-and-implementation thesis**: use
  `create-engineering-defense-deck`.
  Best for systems, platforms, plugins, architectures, engineering decisions,
  implementation modules, testing, and prototype demonstrations.

When the type is unclear, infer from the thesis. Titles centered on "系统",
"平台", "插件", "设计与实现", or engineering applications usually route to
engineering. Titles centered on "方法", "模型", "算法", "机制", "实验", or
explicit RQs usually route to academic. If the evidence conflicts, ask the user
to choose before drafting.

## Shared Contract

Before writing or editing any deck page, read `slide-authoring`. Both local
defense skills inherit these constraints:

1. The canvas is 1920 x 1080 with a 96px safe margin and a 12-column grid.
2. Body text never goes below 28px; dense captions/tables may use 22-24px.
3. Use the NJU purple visual shell from the selected theme, with one primary
   accent and near-neutral content backgrounds.
4. Chinese decks default to Microsoft YaHei / 微软雅黑, with Noto Sans CJK SC or
   PingFang SC fallbacks. Do not render Chinese titles with Georgia or Times.
5. Prefer diagrams, charts, tables, screenshots, and real images over long prose.
6. Every quantitative claim needs a source, unit, axis label, or test condition.
7. Contributions must close the loop with earlier goals and evidence.

## Themes

- `nju-academic-defense`: NJU academic defense theme for research/RQ/experiment
  decks. Its title page uses the same engineering-reference cover master.
- `nju-engineering-defense`: NJU engineering defense theme for architecture,
  implementation, testing, and prototype decks. Its title page is the reference
  cover master.
- `nanjing-university` remains available as a general-purpose institutional theme.

Set `meta.theme` in a generated deck to the chosen theme id.

## Built-In Skills

The original open-slide skills remain available:

- `slide-authoring`: technical reference for open-slide pages.
- `apply-comments`: resolve inspector `@slide-comment` markers.
- `create-theme`: create or extract a generic theme bundle.
- `current-slide`: resolve "this slide", "this page", or selected element.
- `create-slide`: generic open-slide deck creation outside the thesis-defense workflows.

Built-in skills are managed by `@open-slide/core` and may be refreshed by
`pnpm sync:skills`. The two thesis-defense skills are project-local additions
and should not be treated as upstream built-ins.
