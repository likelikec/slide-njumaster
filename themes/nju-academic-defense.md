---
name: NJU Academic Defense
description: Nanjing University academic master's thesis defense theme for research, methods, RQs, experiments, and contribution mapping.
mode: light
---

# NJU Academic Defense

A restrained Nanjing University theme for 学术型硕士论文答辩. It inherits the
institutional purple identity but gives priority to research structure, diagrams,
experiment charts, and contribution-to-RQ closure.

## Palette

| Role | Value | Use |
| --- | --- | --- |
| `bg` / `--paper` | `#FBFAFC` | warm off-white slide background |
| `text` / `--ink` | `#1A171C` | primary text |
| `accent` / `--primary` | `#69075A` | NJU purple for section dividers, H1 rules, key result marks |
| `--ink-soft` | `#4C4650` | secondary text and captions |
| `--ink-faint` | `#9D9EA0` | footer, page numbers, quiet labels |
| `--rule` | `#D9D0DF` | hairlines, axes, table borders |
| `--panel` | `#FFFFFF` | figure/table panels |
| `--primary-soft` | `#EEE3F0` | highlighted table row, subtle callout fill |
| `--positive` | `#2F6F4F` | favorable or significant result |
| `--caution` | `#9A6A2F` | gap, limitation, threat-to-validity |

Use one primary accent. Gray baselines, purple contribution, green/caution only
when the result semantics require them.

## Typography

- Display: `Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif`
  for cover, section dividers, and ceremonial title moments.
- Body: `"Noto Sans CJK SC", "Microsoft YaHei", "PingFang SC", system-ui, sans-serif`
  for readable Chinese and mixed Chinese/English research content.
- Page H1: 56-68px. Body: never below 28px. Captions/table cells: 22-24px.
- Use tabular numerals for metrics and tables when possible.

## Layout

- Canvas: 1920 x 1080.
- Safe margin: 96px minimum; standard content padding: 120-128px.
- Grid: 12 columns, 32px gutters, 8px vertical rhythm.
- Footer: left part name, optional short thesis title center, page number right.
- Title and section divider pages may use larger ceremonial margins.

## Page Types

- **Title**: thesis title, candidate, advisor, institution, date; one small NJU
  wordmark/emblem slot only.
- **Contents**: four-part academic roadmap.
- **Section divider**: full or partial purple field, part number, one sentence
  describing the question answered by this part.
- **Background**: pain point, related work, motivation/objectives, thesis map.
- **Method**: architecture first, then module zoom-ins with "you are here".
- **Experiment**: setup, RQ overview, one result chart/table per RQ.
- **Conclusion**: contribution list mapped to objectives and RQs, then future work.
- **Appendix**: dense backup evidence, clearly marked.

## Components To Copy

When a deck uses this theme, copy the demo's component grammar: `Eyebrow`,
`Footer`, section divider, white figure panels, purple H1 rule, and direct chart
labels. Set `meta.theme` to `nju-academic-defense` and export a matching
`design` const.

## Avoid

Avoid decorative gradients, logo repetition, stock ornaments, multi-color charts,
tiny text, screenshot paper figures with mismatched fonts, and slides that break
the objective-RQ-result-contribution loop.
