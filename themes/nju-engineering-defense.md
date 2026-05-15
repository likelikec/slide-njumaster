---
name: NJU Engineering Defense
description: Nanjing University engineering master's thesis defense theme for system design, implementation, architecture, testing, and prototype demonstration.
mode: light
---

# NJU Engineering Defense

A formal Nanjing University theme for 工程型硕士论文答辩. It follows the provided
engineering reference PPT: NJU purple cover fields, faded campus photo, dense
architecture/process pages, bottom conclusion strips, and evidence-first system
design/test layouts.

## Palette

| Role | Value | Use |
| --- | --- | --- |
| `bg` / `--paper` | `#F8F6FA` | light background with a subtle NJU purple cast |
| `text` / `--ink` | `#17151A` | primary text |
| `accent` / `--primary` | `#6E0F6D` | NJU purple for cover fields, section bars, active modules, key paths |
| `--primary-dark` | `#540049` | deep purple corner fields and strong section marks |
| `--primary-soft` | `#E6D3E6` | cover wedges, active lanes, selected modules, test pass rows |
| `--ink-soft` | `#4A4650` | secondary text and captions |
| `--ink-faint` | `#9D9EA0` | footer, page numbers, quiet labels |
| `--rule` | `#D8CEDF` | hairlines, swimlanes, table borders |
| `--panel` | `#FFFFFF` | architecture panels, screenshots, test tables |
| `--system-blue` | `#0B4F6C` | secondary system path or external service |
| `--success` | `#2F6F4F` | passed tests or achieved requirement |
| `--risk` | `#9A4D2F` | limitation, bottleneck, risk, failed target |

Purple identifies the defended system or active module. Blue may identify
external systems or infrastructure paths. Do not use color as decoration.

## Typography

- Display / titles: `"Microsoft YaHei", "微软雅黑", "Microsoft YaHei UI",
  "Noto Sans CJK SC", "PingFang SC", sans-serif`.
- Body: `"Microsoft YaHei", "微软雅黑", "Noto Sans CJK SC", "PingFang SC",
  Arial, sans-serif`.
- Do not use Georgia or Times New Roman for Chinese titles.
- Page H1: 56-64px. Module labels: 28-34px. Captions/table cells: 22-24px.
- Dense engineering tables can use caption size only when still readable.

## Cover Master

The title slide must follow the engineering-reference cover:

1. White 1920 x 1080 base.
2. Deep NJU purple top-left diagonal field and bottom-right diagonal field.
3. Central campus/gate photo panel at approximately `left: 36`, `top: 118`,
   `width: 1848`, `height: 848`.
4. Soft shadow under the photo panel.
5. White translucent overlay on the photo (`~72%`) to fade the image.
6. Light purple translucent diagonal overlays on the left and lower-right of the
   photo panel.
7. Centered NJU wordmark/logo, then large "毕业答辩", thesis title, date, and
   candidate row with purple circular icons.

Use `themes/assets/nju-cover-campus.png` and `themes/assets/nju-wordmark.png`
when available. If the deck will be public and the user cannot confirm the
image's usage rights, keep the same geometry and ask them to replace the image
with an authorized NJU campus photo.

## Page Grammar

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

Content pages should inherit the reference PPT's high-density grammar: top
section marker, large diagrams/screenshots, two-panel comparisons, process lanes,
module cards, test tables, and bottom purple conclusion strips. Avoid sparse
pages that show only text or isolated numbers.

## Components To Copy

When a deck uses this theme, copy the demo's component grammar: `CoverMaster`,
`PageHeader`, `Footer`, architecture lane panels, module cards, process arrows,
test table styling, screenshot frames, and bottom claim strip. Set `meta.theme`
to `nju-engineering-defense` and export a matching `design` const.

## Avoid

Avoid commercial pitch-deck styling, decorative infrastructure icons, fake logos,
uncaptioned screenshots, unverified performance numbers, sparse pages, and
summaries that do not map requirements to design, implementation, and tests.
