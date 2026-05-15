---
name: NJU Academic Defense
description: Nanjing University academic master's thesis defense theme for research, methods, RQs, experiments, and contribution mapping.
mode: light
---

# NJU Academic Defense

A formal Nanjing University theme for 学术型硕士论文答辩. It shares the same
engineering-reference cover master as `nju-engineering-defense`, then uses
research-first layouts for RQs, methods, experiments, and contribution closure.

## Palette

| Role | Value | Use |
| --- | --- | --- |
| `bg` / `--paper` | `#F8F6FA` | light slide background |
| `text` / `--ink` | `#1A171C` | primary text |
| `accent` / `--primary` | `#6E0F6D` | NJU purple for cover fields, section bars, H1 marks, key results |
| `--primary-dark` | `#540049` | deep purple corner fields and title emphasis |
| `--primary-soft` | `#E6D3E6` | translucent cover wedges, table highlights, soft callouts |
| `--ink-soft` | `#4A4650` | secondary text and captions |
| `--ink-faint` | `#9D9EA0` | footer, page numbers, quiet labels |
| `--rule` | `#D8CEDF` | hairlines, axes, table borders |
| `--panel` | `#FFFFFF` | figure/table panels |
| `--positive` | `#2F6F4F` | favorable or significant result |
| `--caution` | `#9A6A2F` | gap, limitation, threat-to-validity |

Use one primary accent. Gray baselines, purple contribution, green/caution only
when the result semantics require them.

## Typography

- Display / titles: `"Microsoft YaHei", "微软雅黑", "Microsoft YaHei UI",
  "Noto Sans CJK SC", "PingFang SC", sans-serif`.
- Body: `"Microsoft YaHei", "微软雅黑", "Noto Sans CJK SC", "PingFang SC",
  Arial, sans-serif`.
- Do not use Georgia or Times New Roman for Chinese titles.
- Page H1: 56-68px. Body: never below 28px. Captions/table cells: 22-24px.
- Use tabular numerals for metrics and tables when possible.

## Cover Master

The title slide must follow the engineering-reference cover exactly in structure:

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

- **Contents / roadmap**: four-part academic map, not a text-only agenda.
- **Section divider**: large purple section identity, part number, and one line
  stating what the part answers.
- **Background**: real pain point photo, related technology gap, motivation and
  objectives, thesis structure diagram.
- **Methods**: architecture first, then module zoom-ins with "you are here".
- **Experiment**: setup, RQ overview, one result chart/table per RQ.
- **Conclusion**: contribution list mapped to objectives and RQs, then future work.
- **Appendix**: dense backup evidence, clearly marked.

Content pages should use the same visual shell as the engineering reference:
top section marker, central evidence object, multi-panel diagrams/tables, and a
bottom purple claim strip when a slide has a key takeaway. Avoid sparse pages.

## Components To Copy

When a deck uses this theme, copy the demo's component grammar: `CoverMaster`,
`PageHeader`, `Footer`, dense white evidence panels, purple bottom claim strip,
and direct chart labels. Set `meta.theme` to `nju-academic-defense` and export a
matching `design` const.

## Avoid

Avoid decorative gradients, logo repetition, stock ornaments, multi-color charts,
tiny text, screenshot paper figures with mismatched fonts, sparse statistic-only
slides, and slides that break the objective-RQ-result-contribution loop.
