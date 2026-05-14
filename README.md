# bishe-defense

基于 [open-slide](https://github.com/1weiho/open-slide) 的硕士毕业论文答辩幻灯片工作区。这个项目把通用 open-slide 模板扩展成两套面向中文硕士答辩的本地技能和主题：

- **学术型答辩**：适合方法、算法、模型、研究问题、实验分析驱动的论文。
- **工程型答辩**：适合系统设计与实现、平台、插件、工程落地、测试验收驱动的论文。

每一页幻灯片都是 React 组件，渲染在固定的 **1920 x 1080** 画布上。项目重点不是做“漂亮模板”，而是帮助答辩稿围绕目标、方法、证据和贡献形成闭环。

## 功能概览

- 两套本地 AI skill：
  - `create-academic-defense-deck`
  - `create-engineering-defense-deck`
- 两套南京大学风格答辩主题：
  - `nju-academic-defense`
  - `nju-engineering-defense`
- 保留 open-slide 默认能力：
  - React 编写幻灯片
  - 本地预览
  - 主题预览
  - 构建静态站点
  - inspector 批注工作流

## 目录结构

```text
.
├─ .agents/skills/                         # Codex / agent 使用的技能
│  ├─ create-academic-defense-deck/
│  ├─ create-engineering-defense-deck/
│  └─ ...
├─ .claude/skills/                         # Claude Code 使用的技能镜像
├─ slides/                                 # 实际幻灯片
│  └─ getting-started/
├─ themes/                                 # 主题说明与主题 demo
│  ├─ nju-academic-defense.md
│  ├─ nju-academic-defense.demo.tsx
│  ├─ nju-engineering-defense.md
│  └─ nju-engineering-defense.demo.tsx
├─ AGENTS.md                               # Agent 路由与项目规则
├─ CLAUDE.md                               # Claude Code 路由与项目规则
├─ open-slide.config.ts
└─ package.json
```

本仓库不应包含个人论文源码、往届答辩 PPT、实验原始数据、导师意见、学校内部材料等隐私或版权敏感文件。公开发布前请确认这些内容没有被提交。

## 环境要求

- Node.js 18 或更新版本
- pnpm

如果没有安装 pnpm：

```bash
npm install -g pnpm
```

## 安装

```bash
pnpm install
```

## 本地启动

```bash
pnpm dev
```

启动后打开终端显示的本地地址。默认情况下，open-slide 会扫描：

- `slides/`：展示实际幻灯片
- `themes/`：展示主题及 `.demo.tsx` 预览

常用操作：

- 方向键 / PageUp / PageDown：切换页面
- `F`：进入全屏播放
- `Esc`：退出全屏

## 构建

```bash
pnpm build
```

构建产物会输出到 `dist/`，可部署到 GitHub Pages、Netlify、Vercel 或其他静态站点平台。

本项目目前已验证：

```bash
pnpm build
```

可以成功构建，并能编译两个新增主题 demo。

## 使用 AI Skill 生成答辩稿

这个项目的核心用法是配合 Codex 或 Claude Code，让 agent 根据论文材料生成 open-slide 幻灯片代码。

### 学术型论文

适合以下论文：

- 方法研究
- 算法研究
- 模型研究
- 实验/RQ 驱动论文
- 需要明确“目标 - RQ - 实验 - 贡献”闭环的论文

在 Codex / Claude Code 中可以这样说：

```text
使用 create-academic-defense-deck，基于 thesis/ 中的论文材料，生成一套学术型硕士论文答辩幻灯片。
主题使用 nju-academic-defense。
```

学术型默认结构：

1. 封面
2. 目录
3. 研究背景与意义
4. 关键技术与方法
5. 实验设计与分析
6. 总结与展望
7. 致谢
8. 附录

核心检查：

- 研究目标是否明确
- RQ 数量和措辞是否准确
- 每个 RQ 是否有一页主要实验结果
- 贡献点是否回扣目标和 RQ
- 图表是否有单位、指标定义、数据来源和解释

### 工程型论文

适合以下论文：

- 系统设计与实现
- 平台建设
- 插件或工具实现
- 工程架构改进
- 有明确功能测试、性能测试、非功能测试的论文

在 Codex / Claude Code 中可以这样说：

```text
使用 create-engineering-defense-deck，基于 thesis/ 中的论文材料，生成一套工程型硕士论文答辩幻灯片。
主题使用 nju-engineering-defense。
```

工程型默认结构：

1. 封面
2. 目录
3. 项目背景与意义
4. 系统设计
5. 系统实现
6. 系统测试
7. 总结与展望
8. 致谢
9. 附录

核心检查：

- 需求是否来自真实工程痛点
- 设计是否覆盖用例视图、逻辑视图、过程视图、开发视图和物理/部署视图
- 实现模块是否能对应设计视图
- 测试是否覆盖功能与非功能要求
- 总结是否回扣“需求 - 设计 - 实现 - 测试”闭环

## 手动创建一个 slide

每套幻灯片放在 `slides/<id>/index.tsx`。最小例子：

```tsx
import type { DesignSystem, Page, SlideMeta } from "@open-slide/core";

export const design: DesignSystem = {
  palette: { bg: "#FBFAFC", text: "#1A171C", accent: "#69075A" },
  fonts: {
    display: 'Georgia, "Times New Roman", "Noto Serif CJK SC", serif',
    body: '"Noto Sans CJK SC", "Microsoft YaHei", system-ui, sans-serif',
  },
  typeScale: { hero: 148, body: 32 },
  radius: 8,
};

const Cover: Page = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      fontFamily: "var(--osd-font-body)",
      padding: 128,
      boxSizing: "border-box",
    }}
  >
    <h1 style={{ fontSize: 72 }}>硕士学位论文答辩</h1>
  </div>
);

export const meta: SlideMeta = {
  title: "示例答辩",
  theme: "nju-academic-defense",
};

export default [Cover] satisfies Page[];
```

## 主题说明

### `nju-academic-defense`

学术型主题，强调：

- 研究背景与意义
- 方法架构
- RQ 列表
- 实验图表
- 贡献映射

文件：

- `themes/nju-academic-defense.md`
- `themes/nju-academic-defense.demo.tsx`

### `nju-engineering-defense`

工程型主题，强调：

- 系统视图
- 模块边界
- 流程图
- 原型截图
- 功能/非功能测试表

文件：

- `themes/nju-engineering-defense.md`
- `themes/nju-engineering-defense.demo.tsx`

## 答辩幻灯片写作规则

无论使用哪套 skill，都遵守以下规则：

- 固定 1920 x 1080 画布。
- 正文不小于 28px。
- 重要内容放在 96px 安全边距内。
- 使用 12 栏网格和 8px 间距节奏。
- 一页只讲一个核心观点。
- 评委已经读过论文，幻灯片不要复述论文正文。
- 优先使用图、表、架构图、流程图和实验结果。
- 不编造数据、引用、测试结果或系统截图。
- 每个图表都要说明“该看什么”。
- 贡献点必须能回扣前面的目标和证据。

## 公开发布到 GitHub

公开之前请先检查工作区：

```bash
git status --short
```

确认不要提交这些内容：

- `thesis/`
- `template/`
- `dev-server.log`
- `dev-server.err.log`
- `dist/`
- `node_modules/`
- 任何包含个人信息、导师意见、未授权模板、未公开论文内容的文件

首次提交示例：

```bash
git add .
git commit -m "Add master's defense skills and NJU themes"
```

如果你已经在 GitHub 新建了公开仓库，例如：

```text
https://github.com/<your-name>/bishe-defense.git
```

则执行：

```bash
git branch -M main
git remote add origin https://github.com/<your-name>/bishe-defense.git
git push -u origin main
```

如果 remote 已存在：

```bash
git remote -v
git remote set-url origin https://github.com/<your-name>/bishe-defense.git
git push -u origin main
```

在 GitHub 仓库页面中，进入 **Settings -> General -> Danger Zone -> Change repository visibility**，确认仓库为 Public。

## 部署为网页

构建：

```bash
pnpm build
```

然后把 `dist/` 部署到静态托管平台。

### GitHub Pages

推荐做法是使用 GitHub Actions 构建并发布 `dist/`。如果只想手动发布，也可以在本地构建后，把 `dist/` 内容推送到 `gh-pages` 分支。

### Vercel / Netlify

构建命令：

```bash
pnpm build
```

输出目录：

```text
dist
```

## 常见问题

### 我应该选学术型还是工程型？

如果论文围绕 RQ、方法、实验对比和消融分析展开，选学术型。如果论文围绕需求、系统架构、模块实现、测试验收和原型展示展开，选工程型。

### 可以把学术型和工程型混合吗？

可以，但要有主线。工程型论文也可以有实验分析，学术型论文也可以有原型展示；区别在于答辩的证据闭环不同。

### 为什么不把往届模板放进仓库？

往届 PPT 可能包含个人信息、学校内部格式、未授权图片或论文内容。公开仓库只保留可复用的规则、skill 和主题，不上传参考模板本体更安全。

### 为什么不直接改 open-slide 默认 skill？

默认 skill 由 `@open-slide/core` 管理，运行 `pnpm sync:skills` 时可能被覆盖。本项目把硕士答辩能力做成本地新增 skill，便于公开维护和长期复用。

## 致谢

本项目基于 [open-slide](https://github.com/1weiho/open-slide) 构建。感谢 open-slide 提供的 React 幻灯片运行时、主题预览和本地开发体验。
