---
name: NJU Engineering Defense
description: Nanjing University engineering master's thesis defense theme for system design, implementation, architecture, testing, and prototype demonstration.
mode: light
---

# NJU Engineering Defense

A formal Nanjing University theme for 工程型硕士论文答辩. It keeps the same academic
restraint as the institutional theme, but its layout grammar emphasizes system
views, module boundaries, process flows, test evidence, and prototype screens.

## Palette

| Role | Value | Use |
| --- | --- | --- |
| `bg` / `--paper` | `#F8F6FA` | light background with a subtle NJU purple cast |
| `text` / `--ink` | `#17151A` | primary text |
| `accent` / `--primary` | `#69075A` | NJU purple for section bars, active modules, key paths |
| `--ink-soft` | `#4A4650` | secondary text and captions |
| `--ink-faint` | `#9D9EA0` | footer, page numbers, quiet labels |
| `--rule` | `#D8CEDF` | hairlines, swimlanes, table borders |
| `--panel` | `#FFFFFF` | architecture panels, screenshots, test tables |
| `--primary-soft` | `#EFE5F1` | active lane, selected module, test pass row |
| `--system-blue` | `#0B4F6C` | secondary system path or external service |
| `--success` | `#2F6F4F` | passed tests or achieved requirement |
| `--risk` | `#9A4D2F` | limitation, bottleneck, risk, failed target |

Purple identifies the defended system or active module. Blue may identify
external systems or infrastructure paths. Do not use color as decoration.

## Typography

- Display: `Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif`
  for cover and section dividers.
- Body: `"Noto Sans CJK SC", "Microsoft YaHei", "PingFang SC", system-ui, sans-serif`.
- Page H1: 56-64px. Module labels: 28-34px. Captions/table cells: 22-24px.
- Dense engineering tables can use caption size only when still readable.

## Layout

- Canvas: 1920 x 1080.
- Safe margin: 96px minimum; standard content padding: 112-128px.
- Grid: 12 columns with stable lanes for architecture and process diagrams.
- Footer: left part name, optional short thesis title center, page number right.
- Use panels for diagrams/screenshots because engineering evidence often needs
  clear boundaries; do not nest cards inside cards.

## Page Types

- **Title**: thesis title, candidate, advisor, institution, date.
- **Contents**: five-part engineering roadmap.
- **Section divider**: part number, part title, and the engineering question this
  part answers.
- **Background**: incident/workflow/system pain point, current state, main work.
- **System design**: requirements, use case view, logical view, process view,
  development view, physical/deployment view.
- **System implementation**: module map, core modules, key flows, data/protocol
  structures, prototype screenshots.
- **System testing**: setup, functional tests, non-functional tests, acceptance
  against requirements.
- **Conclusion**: goals achieved, delivered modules, verified tests, limitations,
  future evolution.
- **Appendix**: full APIs, schemas, test cases, config, extra screenshots.

## Components To Copy

When a deck uses this theme, copy the demo's component grammar: `Eyebrow`,
`Footer`, section divider, architecture lane panels, module cards, process arrows,
test table styling, and screenshot frame. Set `meta.theme` to
`nju-engineering-defense` and export a matching `design` const.

## Avoid

Avoid commercial pitch-deck styling, decorative infrastructure icons, fake logos,
uncaptioned screenshots, unverified performance numbers, and summaries that do
not map requirements to design, implementation, and tests.
