# slide-njumaster

`slide-njumaster` 是一个基于 [open-slide](https://github.com/1weiho/open-slide) 的硕士学位论文答辩幻灯片工作区。项目在 open-slide 的 React 幻灯片运行时之上，补充了面向中文硕士答辩的本地 AI skills 和南京大学风格主题，用于辅助生成结构清晰、证据充分、适合答辩场景的幻灯片。

本仓库不是独立的 PPT 文件集合，也不是已经包含所有运行依赖的离线包。使用者需要克隆本仓库，并通过 `pnpm install` 安装 `package.json` 中声明的依赖，其中包括 `@open-slide/core`、`react`、`react-dom` 和 `vite`。不需要另外下载 open-slide 源码。

## 项目定位

本项目面向两类硕士论文答辩场景：

- **学术型答辩**：适用于方法、算法、模型、研究问题、实验分析驱动的论文。
- **工程型答辩**：适用于系统设计与实现、平台建设、插件开发、工程落地、测试验收驱动的论文。

项目的目标不是提供装饰性模板，而是把答辩稿组织成可验证的论证结构：

- 学术型：研究目标 -> RQ -> 方法 -> 实验结果 -> 贡献。
- 工程型：工程痛点 -> 需求 -> 设计 -> 实现 -> 测试 -> 总结。

每一页幻灯片都是 React 组件，渲染在固定的 **1920 x 1080** 画布上。open-slide 负责本地预览、主题预览、缩放、播放和静态构建。

## 核心内容

### 本地 AI Skills

本项目新增两套答辩生成技能：

- `create-academic-defense-deck`：生成学术型硕士论文答辩稿。
- `create-engineering-defense-deck`：生成工程型硕士论文答辩稿。

技能文件同时放置在：

- `.agents/skills/`
- `.claude/skills/`

这样 Codex 和 Claude Code 都可以读取同一套答辩生成规则。

### 答辩主题

本项目新增两套南京大学风格主题：

- `nju-academic-defense`：面向研究问题、方法框架、实验图表和贡献映射。
- `nju-engineering-defense`：面向系统视图、模块边界、流程图、原型截图和测试表。

主题文件位于 `themes/`，每套主题包含：

- `<theme-id>.md`：主题说明、配色、字体、版式规范。
- `<theme-id>.demo.tsx`：open-slide 可预览的主题示例。

## 目录结构

```text
.
├─ .agents/skills/                         # Codex / agent 使用的技能
│  ├─ create-academic-defense-deck/
│  ├─ create-engineering-defense-deck/
│  └─ ...
├─ .claude/skills/                         # Claude Code 使用的技能镜像
├─ slides/                                 # 实际幻灯片源码
│  └─ getting-started/
├─ themes/                                 # 主题说明与主题 demo
│  ├─ nju-academic-defense.md
│  ├─ nju-academic-defense.demo.tsx
│  ├─ nju-engineering-defense.md
│  └─ nju-engineering-defense.demo.tsx
├─ AGENTS.md                               # Agent 使用说明与路由规则
├─ CLAUDE.md                               # Claude Code 使用说明与路由规则
├─ open-slide.config.ts                    # open-slide 配置
├─ package.json                            # npm 依赖与脚本
└─ pnpm-lock.yaml                          # pnpm 锁定文件
```

## 环境要求

使用本项目需要以下环境：

- Node.js 18 或更高版本
- pnpm
- Git

如果本机没有安装 pnpm，可以先执行：

```bash
npm install -g pnpm
```

## 安装与运行

### 1. 克隆仓库

```bash
git clone https://github.com/likelikec/slide-njumaster.git
cd slide-njumaster
```

也可以下载 GitHub ZIP 压缩包并解压；但无论采用哪种方式，都必须执行下一步安装依赖。

### 2. 安装依赖

```bash
pnpm install
```

这一步会根据 `package.json` 和 `pnpm-lock.yaml` 下载并安装运行 open-slide 所需的依赖。只下载本仓库源码而不安装依赖，无法启动本地预览或执行构建。

依赖安装完成后，项目会在本地生成 `node_modules/`。该目录不需要也不应该提交到 GitHub。

### 3. 启动本地开发服务

```bash
pnpm dev
```

启动后，终端会输出本地访问地址。打开该地址即可查看幻灯片列表、主题预览和播放界面。

常用操作：

- 方向键 / PageUp / PageDown：切换页面。
- `F`：进入全屏播放。
- `Esc`：退出全屏播放。

### 4. 构建静态站点

```bash
pnpm build
```

构建产物会输出到 `dist/`，可用于部署到 GitHub Pages、Vercel、Netlify 或其他静态站点平台。`dist/` 是构建结果，不建议提交到主分支。

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm install` | 安装项目依赖 |
| `pnpm dev` | 启动 open-slide 本地开发服务 |
| `pnpm build` | 构建静态站点 |
| `pnpm preview` | 本地预览构建后的站点 |
| `pnpm sync:skills` | 同步 open-slide 内置 skills |

注意：`pnpm sync:skills` 只用于同步 `@open-slide/core` 提供的内置 skills。本项目新增的 `create-academic-defense-deck` 和 `create-engineering-defense-deck` 是项目本地 skills，不应当当作 upstream 内置 skills 处理。

## 使用 AI Skills 生成答辩稿

本项目最适合与 Codex 或 Claude Code 配合使用。使用前建议先把论文材料、图片、实验表格、系统截图等放在本地工作区中，并注意不要把私人论文材料提交到公开仓库。

建议本地使用以下目录存放论文材料：

```text
thesis/
```

该目录已被 `.gitignore` 忽略，适合放置个人论文、实验数据、截图、参考模板等不应公开的内容。

### 学术型答辩

适用场景：

- 方法研究
- 算法研究
- 模型研究
- RQ 驱动的实验论文
- 包含基线对比、消融实验、指标分析的论文

示例指令：

```text
使用 create-academic-defense-deck，基于 thesis/ 中的论文材料，生成一套学术型硕士论文答辩幻灯片。
主题使用 nju-academic-defense。
```

默认结构：

1. 封面
2. 目录
3. 研究背景与意义
4. 关键技术与方法
5. 实验设计与分析
6. 总结与展望
7. 致谢
8. 附录

核心检查：

- 研究目标是否明确。
- RQ 数量和措辞是否准确。
- 每个 RQ 是否有对应的主要实验结果。
- 贡献点是否回扣目标、方法和实验结论。
- 图表是否包含单位、指标定义、数据来源和解释。

### 工程型答辩

适用场景：

- 系统设计与实现
- 平台建设
- 插件或工具开发
- 工程架构改进
- 包含功能测试、性能测试、非功能测试的论文

示例指令：

```text
使用 create-engineering-defense-deck，基于 thesis/ 中的论文材料，生成一套工程型硕士论文答辩幻灯片。
主题使用 nju-engineering-defense。
```

默认结构：

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

- 需求是否来自真实工程痛点。
- 系统设计是否覆盖用例视图、逻辑视图、过程视图、开发视图和物理/部署视图。
- 实现模块是否对应设计视图。
- 测试是否覆盖功能与非功能要求。
- 总结是否回扣“需求 - 设计 - 实现 - 测试”的证据闭环。

## 手动编写幻灯片

每套幻灯片放在 `slides/<id>/index.tsx`。一个最小页面示例如下：

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

open-slide 会把 `export default` 中的每个 `Page` 组件渲染为一页幻灯片。

## 答辩幻灯片规范

无论使用哪套 skill，都建议遵守以下规则：

- 固定使用 1920 x 1080 画布。
- 正文不小于 28px。
- 重要内容放在 96px 安全边距内。
- 使用 12 栏网格和 8px 间距节奏。
- 一页只表达一个核心观点。
- 评委通常已经阅读过论文，幻灯片不应复述论文正文。
- 优先使用图、表、架构图、流程图、实验结果和原型截图。
- 不编造数据、引用、测试结果或系统截图。
- 每个图表都应说明“该看什么”。
- 贡献点必须回扣前面的目标和证据。

## 公开仓库注意事项

本仓库适合作为可复用的答辩生成模板公开发布，但不应包含私人或未授权材料。以下内容已在 `.gitignore` 中忽略：

- `thesis/`
- `template/`
- `dev-server.log`
- `dev-server.err.log`
- `dist/`
- `node_modules/`
- `.env`
- `.env.*`

公开提交前建议执行：

```bash
git status --short
```

确认没有误提交个人论文、往届 PPT、实验原始数据、导师意见、学校内部文件或未授权图片。

## 部署

### Vercel / Netlify

构建命令：

```bash
pnpm build
```

输出目录：

```text
dist
```

### GitHub Pages

推荐使用 GitHub Actions 在远端执行：

```bash
pnpm install
pnpm build
```

然后发布 `dist/` 目录。不要直接把本地 `node_modules/` 或未构建源码当作静态站点发布。

## 常见问题

### 是否需要单独下载 open-slide？

不需要。open-slide 作为 npm 依赖写在 `package.json` 中，执行 `pnpm install` 后会自动安装 `@open-slide/core`。

### 只下载这个仓库可以使用吗？

只下载源码还不够。必须在项目根目录执行 `pnpm install` 安装依赖，然后才能运行 `pnpm dev` 或 `pnpm build`。

### 可以直接打开 HTML 文件预览吗？

不建议。该项目依赖 Vite 和 open-slide 开发服务，正确预览方式是运行 `pnpm dev`。

### 学术型和工程型可以混合吗？

可以，但需要明确主线。学术型可以包含原型展示，工程型也可以包含实验分析；区别在于答辩的主要证据闭环不同。

## 致谢

本项目基于 [open-slide](https://github.com/1weiho/open-slide) 构建。感谢 open-slide 提供 React 幻灯片运行时、主题预览、本地开发服务和静态构建能力。
