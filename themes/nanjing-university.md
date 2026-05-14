---
name: Nanjing University
description: A formal academic theme for Nanjing University thesis defenses, seminars, and research talks.
---

# Nanjing University

## Palette

| Role        | Value     | Notes                                                                 |
| ----------- | --------- | --------------------------------------------------------------------- |
| bg          | `#f7f4f8` | warm off-white page background with a slight purple cast              |
| text        | `#1A171C` | official auxiliary black for primary copy                            |
| accent      | `#69075A` | Nanjing University standard purple, user-confirmed screen value       |
| muted       | `#9D9EA0` | official auxiliary gray for secondary copy and fine dividers          |
| panel       | `#ffffff` | card / figure panel background                                       |
| rule        | `#d9d0df` | hairline separators and low-contrast grid lines                       |
| red         | `#DC004B` | official auxiliary red, use only for warnings or one key highlight    |
| blue        | `#3275B6` | official auxiliary blue, use sparingly for data-series contrast       |
| yellow      | `#FBBB00` | official auxiliary yellow, use as a small seal-like accent            |
| purpleDark  | `#69075A` | title-band purple for ceremonial cover or closing pages               |

## Typography

- Display font: `Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif` — weight 700–800 for formal academic titles; Georgia intentionally echoes the official English wordmark direction.
- Body font: `"Noto Sans CJK SC", "Microsoft YaHei", "PingFang SC", system-ui, -apple-system, sans-serif` — weight 400–500 for readable projected Chinese and English text.
- Brand asset typography: do not imitate the handwritten university name, motto, or spirit text with ordinary fonts. Use official vector artwork when needed; reserve empty logo / motto slots in the layout instead.
- Type-scale overrides:
  - Hero title: 156 px (default 140–200 ✓)
  - Section heading: 92 px
  - Page heading: 68 px
  - Body text: 36 px
  - Caption / label: 24 px

## Layout

- Content padding: 128 px from canvas edges on standard content pages; cover pages may use 144 px for a more ceremonial frame.
- Alignment: mostly left-aligned, with a restrained title band and a stable footer rule. Centered composition is reserved for cover and closing pages.
- Grid notes: use a 12-column academic grid with 96 px gutters for figure-heavy pages; keep diagrams and tables inside white panels so the official purple remains an identity layer rather than a heavy background.
- Brand asset placement: put the Chinese / English university name vector at the top-left or bottom-left, and place校训 / 校风 vectors as optional low-contrast assets on cover or closing pages only. Do not repeat all brand marks on every content page.

## Fixed components

These are paste-ready. Copy them verbatim into a slide that uses this theme.

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily: 'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
      fontSize: 156,
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: '-0.025em',
      margin: 0,
      color: '#69075A',
      maxWidth: 1320,
    }}
  >
    {children}
  </h1>
);
```

### Footer

```tsx
const Footer = ({ pageNum, total }: { pageNum: number; total: number }) => (
  <div
    style={{
      position: 'absolute',
      left: 128,
      right: 128,
      bottom: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '2px solid #d9d0df',
      paddingTop: 18,
      fontFamily: 'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
      fontSize: 23,
      letterSpacing: '0.06em',
      color: '#9D9EA0',
    }}
  >
    <span>NANJING UNIVERSITY · ACADEMIC REPORT</span>
    <span>{pageNum} / {total}</span>
  </div>
);
```

### Eyebrow / accents

```tsx
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 18,
      fontFamily: 'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#69075A',
    }}
  >
    <span style={{ width: 54, height: 4, background: '#69075A', display: 'inline-block' }} />
    {children}
  </div>
);
```

## Motion

- Philosophy: subtle — formal academic slides should feel calm, so use only small opacity / vertical entrance motion for section changes.
- Reusable keyframes:

```css
@keyframes njuFadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

## Aesthetic

This theme is ceremonial academic minimalism: Nanjing University purple, serif title typography, thin rules, and spacious white panels carry the identity without overwhelming research content. Prefer calm light backgrounds for thesis defenses and seminars, with `#69075A` reserved for cover / closing title fields. Avoid fake calligraphy, decorative patterns, gradients, heavy shadows, rounded novelty cards, and overusing the red / blue / yellow auxiliary colors; official校名、校训、校风 should be inserted as vector assets when the slide actually needs them.

## Example usage

```tsx
const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%', background: '#f7f4f8', color: '#1A171C', padding: 144, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow>THESIS DEFENSE</Eyebrow>
    <Title>面向复杂系统的可信智能方法研究</Title>
    <p style={{ fontSize: 36, lineHeight: 1.55, color: '#9D9EA0', maxWidth: 1120, margin: '42px 0 0' }}>
      硕士学位论文答辩 · 软件学院
    </p>
    <div style={{ position: 'absolute', right: 144, top: 120, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 30, letterSpacing: '0.12em', color: '#69075A' }}>
      NANJING UNIVERSITY
    </div>
    <Footer pageNum={1} total={3} />
  </div>
);
```
