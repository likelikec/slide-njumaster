# open-slide — Master's Defense Agent Guide

You are authoring **master's thesis defense decks** in this repo. A deck is
React code rendered on a fixed 1920 x 1080 canvas by open-slide.

## Hard Rules

- Put each deck under `slides/<kebab-case-id>/`.
- The entry is `slides/<id>/index.tsx`.
- Export a non-empty `Page[]` from `index.tsx`; each page is one slide in the talk.
- Put images, figures, screenshots, charts, and fonts under `slides/<id>/assets/`.
- Do **not** touch `package.json`, `open-slide.config.ts`, or unrelated slides.
- Do not add dependencies. Use only `react`, `@open-slide/core`, and standard web APIs.
- The audience is a thesis committee that has already read the thesis. Slides
  clarify structure, evidence, contribution, and rigor; they must not re-state
  the thesis text.

## Defense Types

This project has two local defense-deck skills in addition to the built-in
open-slide skills.

- **Academic / research thesis** — use `create-academic-defense-deck`.
  Best for methods, algorithms, models, research questions, experiments, and
  contribution-to-RQ closure.
- **Engineering / design-and-implementation thesis** — use
  `create-engineering-defense-deck`.
  Best for systems, platforms, plugins, architectures, engineering decisions,
  implementation modules, testing, and prototype demonstrations.

When the type is unclear, infer from the thesis: titles containing "设计与实现",
"系统", "平台", "插件", or "工程应用" usually route to engineering; titles centered
on "方法", "模型", "算法", "机制", "实验", or explicit RQs usually route to academic.
If the evidence conflicts, ask the user to choose before drafting.

## Shared Authoring Contract

Before writing or editing any deck page, read `slide-authoring`. Its open-slide
contract remains authoritative: 1920 x 1080 canvas, `Page[]` export, tweakable
`design` const, 96px safe margin, readable type, asset handling, and comment
workflow.

Both local defense skills inherit these constraints:

1. Body text never goes below 28px.
2. Use a 12-column grid and keep load-bearing content inside the safe area.
3. Use one primary accent color and near-neutral academic backgrounds.
4. Prefer figures, charts, architecture diagrams, tables, and screenshots over
   long prose.
5. Every quantitative claim needs a source, unit, axis label, or explicit test
   condition.
6. Contributions must close the loop with the deck's earlier goals and evidence.

## Themes

- `nju-academic-defense` — Nanjing University academic defense theme for
  research/RQ/experiment-heavy decks.
- `nju-engineering-defense` — Nanjing University engineering defense theme for
  architecture, implementation, tests, and prototype-heavy decks.
- `nanjing-university` remains available as the general-purpose institutional
  theme.

Set `meta.theme` in a generated deck to the chosen theme id.

## Built-In Skills

The original open-slide skills remain available:

- `slide-authoring` — technical reference for open-slide pages.
- `apply-comments` — resolve inspector `@slide-comment` markers.
- `create-theme` — create or extract a generic theme bundle.
- `current-slide` — resolve "this slide", "this page", or selected element.
- `create-slide` — generic open-slide deck creation outside the thesis-defense
  workflows.

The built-in skills are managed by `@open-slide/core` and may be refreshed by
`pnpm sync:skills`. The two thesis-defense skills are project-local additions
and should not be treated as upstream built-ins.
