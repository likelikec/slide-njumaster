import type React from "react";
import type { DesignSystem, Page, SlideMeta } from "@open-slide/core";

import configurationPage from "./assets/configuration-page.png";
import coverCampus from "./assets/nju-cover-campus.png";
import executionTrace from "./assets/execution-trace.png";
import guiEvolution from "./assets/gui-test-evolution.png";
import hitlUi from "./assets/human-in-the-loop.png";
import langgraphState from "./assets/langgraph-state-diagram.png";
import logicalView from "./assets/logical-view.png";
import methodArchitecture from "./assets/method-architecture.png";
import njuWordmark from "./assets/nju-wordmark.png";
import overallArchitecture from "./assets/overall-architecture.png";
import preexpFailure from "./assets/preexp_failure_taxonomy_overview.png";
import preexpPrimary from "./assets/preexp_primary_distribution.png";
import processView from "./assets/process-view.png";
import rq2Ablation from "./assets/rq2_ablation_overview.png";
import rq2Failure from "./assets/rq2_failure_taxonomy.png";
import rq3Sensitivity from "./assets/rq3_sensitivity.png";
import rq3Time from "./assets/rq3_time_efficiency.png";
import rq4Trigger from "./assets/rq4_trigger_matching.png";
import testingState from "./assets/testing-state-structure.png";

const displayFont =
  '"Microsoft YaHei", "微软雅黑", "Microsoft YaHei UI", "Noto Sans CJK SC", "PingFang SC", sans-serif';
const bodyFont =
  '"Microsoft YaHei", "微软雅黑", "Noto Sans CJK SC", "PingFang SC", Arial, sans-serif';

export const design: DesignSystem = {
  palette: { bg: "#F8F6FA", text: "#17151A", accent: "#6E0F6D" },
  fonts: {
    display: displayFont,
    body: bodyFont,
  },
  typeScale: { hero: 84, body: 32 },
  radius: 8,
};

export const meta: SlideMeta = {
  title: "CoactBot 硕士论文答辩",
  theme: "nju-academic-defense",
};

const c = {
  paper: "#F8F6FA",
  ink: "#17151A",
  inkSoft: "#4A4650",
  inkFaint: "#9D9EA0",
  rule: "#D8CEDF",
  panel: "#FFFFFF",
  primary: "#6E0F6D",
  primaryDark: "#540049",
  primarySoft: "#E6D3E6",
  positive: "#2F6F4F",
  caution: "#9A6A2F",
  blue: "#0B4F6C",
  softBlue: "#E7EFF3",
};

const total = 24;
const shortTitle = "边界感知人机协同方法";

const pageBase: React.CSSProperties = {
  width: "100%",
  height: "100%",
  position: "relative",
  background: "var(--osd-bg)",
  color: "var(--osd-text)",
  fontFamily: "var(--osd-font-body)",
  boxSizing: "border-box",
  overflow: "hidden",
};

const CalendarIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
    <rect x="5" y="7" width="20" height="18" rx="3" fill="none" stroke="#fff" strokeWidth="2.2" />
    <path d="M10 4v6M20 4v6M6 13h18" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M12 18h6v4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const PresenterIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
    <circle cx="12" cy="10" r="4" fill="none" stroke="#fff" strokeWidth="2.2" />
    <path d="M5 25c1.4-5 4-7 7-7s5.6 2 7 7" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M22 9h4v12h-4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
);

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
    <div
      style={{
        width: 62,
        height: 62,
        borderRadius: 31,
        background: c.primary,
        display: "grid",
        placeItems: "center",
      }}
    >
      {icon}
    </div>
    <div style={{ display: "flex", gap: 18, alignItems: "baseline", color: c.primary }}>
      <span style={{ fontSize: 30, fontWeight: 400 }}>{label}</span>
      <span style={{ fontSize: 30, fontWeight: 300 }}>{value}</span>
    </div>
  </div>
);

const CoverMaster = () => (
  <div style={{ ...pageBase, background: "#FFFFFF" }}>
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 580,
        height: 580,
        background: c.primaryDark,
        clipPath: "polygon(0 0, 100% 0, 0 100%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        width: 560,
        height: 560,
        background: c.primaryDark,
        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 36,
        top: 118,
        width: 1848,
        height: 848,
        boxShadow: "0 28px 32px rgba(0, 0, 0, 0.26)",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <img src={coverCampus} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(255, 255, 255, 0.72)" }} />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 540,
          height: 540,
          background: "rgba(230, 211, 230, 0.82)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 520,
          height: 520,
          background: "rgba(230, 211, 230, 0.86)",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />
    </div>
    <main
      style={{
        position: "absolute",
        left: 250,
        right: 250,
        top: 214,
        height: 590,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: c.primary,
      }}
    >
      <img src={njuWordmark} alt="南京大学" style={{ width: 520, height: "auto", objectFit: "contain" }} />
      <h1
        style={{
          margin: "74px 0 0",
          fontFamily: displayFont,
          fontSize: 82,
          lineHeight: 1.08,
          fontWeight: 300,
          color: c.primary,
          borderBottom: `3px solid ${c.primary}`,
          paddingBottom: 8,
        }}
      >
        毕业答辩
      </h1>
      <p
        style={{
          margin: "46px 0 0",
          fontSize: 34,
          lineHeight: 1.45,
          fontWeight: 300,
          textAlign: "center",
          color: c.primary,
          maxWidth: 1160,
        }}
      >
        面向移动 GUI 智能体的边界感知人机协同方法
      </p>
      <div style={{ display: "flex", gap: 66, alignItems: "center", marginTop: 60 }}>
        <InfoItem icon={<CalendarIcon />} label="日期：" value="2026.04.15" />
        <InfoItem icon={<PresenterIcon />} label="答辩人：" value="李克诚" />
      </div>
    </main>
  </div>
);

const PageHeader = ({ part, section, title }: { part: string; section: string; title: string }) => (
  <header style={{ position: "relative", paddingTop: 54 }}>
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 44,
        width: 128,
        height: 42,
        background: c.primary,
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontSize: 24,
        fontWeight: 700,
      }}
    >
      {part}
    </div>
    <div style={{ marginLeft: 158, color: c.primary, fontSize: 24, fontWeight: 700 }}>{section}</div>
    <h2
      style={{
        margin: "16px 0 0 158px",
        fontFamily: displayFont,
        fontSize: 56,
        lineHeight: 1.16,
        fontWeight: 600,
        color: c.ink,
        maxWidth: 1450,
      }}
    >
      {title}
    </h2>
  </header>
);

const Footer = ({ part, page }: { part: string; page: number }) => (
  <footer
    style={{
      position: "absolute",
      left: 120,
      right: 120,
      bottom: 34,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      color: c.inkFaint,
      fontSize: 18,
      borderTop: `1px solid ${c.rule}`,
      paddingTop: 14,
    }}
  >
    <span>{part}</span>
    <span style={{ textAlign: "center" }}>{shortTitle}</span>
    <span style={{ textAlign: "right" }}>{page} / {total}</span>
  </footer>
);

const ClaimStrip = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: "absolute",
      left: 120,
      right: 120,
      bottom: 94,
      minHeight: 70,
      background: c.primary,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      padding: "0 34px",
      fontSize: 28,
      lineHeight: 1.35,
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

const FigurePanel = ({
  src,
  caption,
  fit = "contain",
  pad = 22,
}: {
  src: string;
  caption: string;
  fit?: "contain" | "cover";
  pad?: number;
}) => (
  <div style={{ background: c.panel, border: `2px solid ${c.rule}`, padding: pad, minHeight: 0, display: "grid", gridTemplateRows: "1fr auto" }}>
    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: fit, minHeight: 0 }} />
    <div style={{ marginTop: 12, color: c.inkSoft, fontSize: 21, lineHeight: 1.25 }}>{caption}</div>
  </div>
);

const Note = ({ label, children, tone = "plain" }: { label: string; children: React.ReactNode; tone?: "plain" | "primary" | "caution" }) => (
  <div
    style={{
      background: tone === "primary" ? c.primarySoft : c.panel,
      border: `2px solid ${tone === "primary" ? c.primary : tone === "caution" ? c.caution : c.rule}`,
      padding: "24px 26px",
    }}
  >
    <div style={{ color: tone === "caution" ? c.caution : c.primary, fontSize: 24, fontWeight: 700 }}>{label}</div>
    <div style={{ marginTop: 12, color: c.ink, fontSize: 29, lineHeight: 1.38 }}>{children}</div>
  </div>
);

const Metric = ({ value, label, note }: { value: string; label: string; note: string }) => (
  <div style={{ background: c.panel, border: `2px solid ${c.rule}`, padding: "24px 26px", minHeight: 150 }}>
    <div style={{ color: c.primary, fontSize: 48, lineHeight: 1, fontWeight: 700 }}>{value}</div>
    <div style={{ color: c.ink, fontSize: 26, fontWeight: 700, marginTop: 16 }}>{label}</div>
    <div style={{ color: c.inkSoft, fontSize: 21, lineHeight: 1.3, marginTop: 10 }}>{note}</div>
  </div>
);

const MiniFlow = ({ items }: { items: string[] }) => (
  <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 14 }}>
    {items.map((item, index) => (
      <div key={item} style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
        <div
          style={{
            background: index === 0 ? c.primarySoft : c.panel,
            border: `2px solid ${index === 0 ? c.primary : c.rule}`,
            minHeight: 96,
            padding: "18px 16px",
            color: c.ink,
            fontSize: 24,
            lineHeight: 1.25,
            fontWeight: 600,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          {item}
        </div>
        {index < items.length - 1 && <div style={{ color: c.primary, fontSize: 34, fontWeight: 700, padding: "0 0 0 10px" }}>→</div>}
      </div>
    ))}
  </div>
);

const Cover: Page = () => <CoverMaster />;

const Contents: Page = () => {
  const parts = [
    ["01", "研究背景与意义", "为什么长程移动 GUI 自动化需要按需协同"],
    ["02", "关键技术与方法", "边界信号、恢复链路与 CoactBot 系统闭环"],
    ["03", "实验设计与分析", "四个 RQ 逐页回答效果、机制、成本与触发质量"],
    ["04", "总结", "贡献映射、局限与后续演进"],
  ];
  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="00" section="目录" title="答辩围绕“何时请求帮助、如何恢复自动执行”展开" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 76 }}>
        {parts.map(([num, title, desc], index) => (
          <div
            key={num}
            style={{
              background: c.panel,
              border: `2px solid ${index === 0 ? c.primary : c.rule}`,
              minHeight: 430,
              padding: "34px 30px",
              display: "grid",
              gridTemplateRows: "auto auto 1fr",
              boxShadow: index === 0 ? "0 18px 34px rgba(84, 0, 73, 0.14)" : "none",
            }}
          >
            <div style={{ color: c.primary, fontSize: 58, lineHeight: 1, fontWeight: 700 }}>{num}</div>
            <div style={{ marginTop: 34, color: c.ink, fontSize: 34, lineHeight: 1.22, fontWeight: 700 }}>{title}</div>
            <p style={{ alignSelf: "end", color: c.inkSoft, fontSize: 25, lineHeight: 1.45, margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <ClaimStrip>主线：长程 GUI 自动化的失败不是单步误差，而是局部失败沿执行链级联放大。</ClaimStrip>
      <Footer part="目录" page={2} />
    </div>
  );
};

const PainPoint: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="01" section="研究背景与意义" title="真实移动任务是跨页面、强状态依赖的长程交互" />
    <div style={{ display: "grid", gridTemplateColumns: "1.18fr 0.82fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={guiEvolution} caption="GUI 自动化技术从脚本/规则走向自然语言驱动的 GUI 智能体。图源：论文第 1 章。" fit="contain" />
      <div style={{ display: "grid", gap: 20 }}>
        <Note label="实际痛点" tone="primary">添加闹钟标签、编辑笔记、修改设置等任务，需要跨列表、详情、编辑态、保存反馈持续对齐目标。</Note>
        <Note label="失稳方式">一次点击无效或入口选择错误，会改变后续规划的前提，系统仍可能在错误页面上继续推进。</Note>
        <Note label="答辩切入">关键不只是“下一步怎么点”，而是“什么时候继续自动尝试已经不可靠”。</Note>
      </div>
    </div>
    <ClaimStrip>长程移动 GUI 自动化的核心可靠性问题：局部失败会在跨页面执行链中级联放大。</ClaimStrip>
    <Footer part="研究背景与意义" page={3} />
  </div>
);

const RelatedWork: Page = () => {
  const rows = [
    ["脚本 / 规则 / 回放", "稳定流程中高效复现", "依赖固定控件和路径，难以处理自然语言目标"],
    ["LLM/MLLM GUI 智能体", "观察、规划、执行、反思闭环", "强调更会自动执行，但缺少何时暂停的运行时判断"],
    ["人机协同 / Mixed-Initiative", "在不确定或风险场景引入人", "原则需要落到移动端 GUI 的触发、移交和回交机制"],
  ];
  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="01" section="研究现状" title="已有方法提升“会执行”，但没有系统回答“何时该求助”" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: 34, marginTop: 52 }}>
        <div style={{ background: c.panel, border: `2px solid ${c.rule}`, padding: 30 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", color: c.primary, fontSize: 24, fontWeight: 700, borderBottom: `2px solid ${c.primary}`, paddingBottom: 16 }}>
            <span>技术路线</span>
            <span>已有能力</span>
            <span>缺口</span>
          </div>
          {rows.map((row) => (
            <div key={row[0]} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", minHeight: 112, borderBottom: `1px solid ${c.rule}`, alignItems: "center", columnGap: 20, fontSize: 25, lineHeight: 1.35 }}>
              <b style={{ color: c.ink }}>{row[0]}</b>
              <span style={{ color: c.inkSoft }}>{row[1]}</span>
              <span style={{ color: c.caution }}>{row[2]}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gap: 22 }}>
          <Note label="本文定位" tone="primary">把“纯自动执行能力边界”建模为运行时可观测信号，而不是事后失败复盘。</Note>
          <Note label="要补上的链路">边界信号 → 自主恢复 → 协同触发 → 最小上下文移交 → 人工输入回注 → 自动执行恢复。</Note>
        </div>
      </div>
      <ClaimStrip>研究缺口：长程任务中需要一个低成本、可恢复、可继续自动执行的人机协同分支。</ClaimStrip>
      <Footer part="研究背景与意义" page={4} />
    </div>
  );
};

const Motivation: Page = () => {
  const objectives = [
    ["O1", "识别长程 GUI 智能体的典型失稳现象与可观测反馈"],
    ["O2", "设计边界判别信号，判断继续自主恢复是否仍可靠"],
    ["O3", "实现 CoactBot，将人工提示、确认和局部操作接回自动链路"],
    ["O4", "用外部基准与真实手机任务验证效果、成本和触发质量"],
  ];
  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="01" section="研究动机与目标" title="动机：少量高价值人工输入，应在能力边界处被结构化接入" />
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 34, marginTop: 50 }}>
        <div style={{ display: "grid", gap: 20 }}>
          <Metric value="69" label="核心失败样本" note="剥离外部环境干扰后，用于分析纯自动执行失稳根因。" />
          <Metric value="4 类" label="边界判别信号" note="LEG、PR、EUS、GTD 分别覆盖局部执行、路径、认知和全局轨迹。" />
          <Metric value="4 RQ" label="实验闭环" note="整体能力、机制增益、成本效率、触发合理性。" />
        </div>
        <div style={{ background: c.panel, border: `2px solid ${c.rule}`, padding: 30 }}>
          {objectives.map(([id, text], index) => (
            <div key={id} style={{ display: "grid", gridTemplateColumns: "86px 1fr", minHeight: 94, alignItems: "center", borderBottom: index === objectives.length - 1 ? "none" : `1px solid ${c.rule}` }}>
              <div style={{ width: 58, height: 58, borderRadius: 29, background: index === 1 ? c.primary : c.primarySoft, color: index === 1 ? "#fff" : c.primary, display: "grid", placeItems: "center", fontSize: 24, fontWeight: 700 }}>{id}</div>
              <div style={{ color: c.ink, fontSize: 30, lineHeight: 1.35 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
      <ClaimStrip>目标闭环：先证明问题存在，再设计运行时边界判别，最后验证协同是否真的提升稳定性与效率。</ClaimStrip>
      <Footer part="研究背景与意义" page={5} />
    </div>
  );
};

const ThesisStructure: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="01" section="本文结构" title="论文结构从问题抽象推进到方法、系统和实验验证" />
    <div style={{ marginTop: 58 }}>
      <MiniFlow items={["失稳现象", "边界信号", "协同闭环", "原型系统", "实验验证"]} />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22, marginTop: 50 }}>
      {[
        ["第 1-2 章", "背景与相关工作", "长程 GUI 自动化与人机协同的研究缺口"],
        ["第 3 章", "方法设计", "失败实证、边界判别、上下文移交与回交"],
        ["第 4 章", "系统实现", "状态图编排、核心模块、原型界面和执行记录"],
        ["第 5-6 章", "实验与总结", "四个 RQ、贡献闭环、局限与展望"],
      ].map(([label, title, desc]) => (
        <div key={label} style={{ background: c.panel, border: `2px solid ${c.rule}`, padding: 26, minHeight: 310 }}>
          <div style={{ color: c.primary, fontSize: 26, fontWeight: 700 }}>{label}</div>
          <div style={{ marginTop: 28, color: c.ink, fontSize: 32, fontWeight: 700 }}>{title}</div>
          <p style={{ marginTop: 42, color: c.inkSoft, fontSize: 25, lineHeight: 1.42 }}>{desc}</p>
        </div>
      ))}
    </div>
    <ClaimStrip>结构设计服务答辩逻辑：问题、方法、系统、实验、贡献逐层闭合。</ClaimStrip>
    <Footer part="研究背景与意义" page={6} />
  </div>
);

const MethodOverview: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="02" section="关键技术与方法" title="CoactBot 把边界判别与人机协同组织为统一执行闭环" />
    <div style={{ display: "grid", gridTemplateColumns: "1.22fr 0.78fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={methodArchitecture} caption="方法架构：自动执行、边界判别、自主恢复、人工协同与控制回交共同构成闭环。" fit="contain" />
      <div style={{ display: "grid", gap: 20 }}>
        <Note label="核心输入" tone="primary">任务目标、当前界面观测、执行历史、动作反馈和风险上下文。</Note>
        <Note label="核心判定">四类边界信号经自主恢复链路筛选后，聚合为是否触发协同的求助信号。</Note>
        <Note label="核心输出">人工提示、确认或局部操作被结构化回注到工作记忆，后续自动执行继续推进。</Note>
      </div>
    </div>
    <ClaimStrip>方法不是让人常驻监督，而是在纯自动恢复低收益时请求最小必要帮助。</ClaimStrip>
    <Footer part="关键技术与方法" page={7} />
  </div>
);

const FailureStudy: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="02" section="失败实证" title="纯自动长程执行的主要瓶颈集中在认知规划与动作落地" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={preexpFailure} caption="69 个核心失败样本的根因归纳：UI 语义误解、规划失败、动作定位误差等集中出现。" fit="contain" />
      <FigurePanel src={preexpPrimary} caption="一级失败类别分布说明：长程任务的失败往往不是单一点击错误，而是任务理解与路径组织失稳。" fit="contain" />
    </div>
    <ClaimStrip>实证研究为边界判别提供依据：失稳会在运行时留下动作无效、路径重复、不确定性和轨迹偏航等反馈。</ClaimStrip>
    <Footer part="关键技术与方法" page={8} />
  </div>
);

const BoundarySignals: Page = () => {
  const signals = [
    ["LEG", "局部可执行性缺口", "动作执行后界面无有效变化，局部页面难以推进"],
    ["PR", "路径重现", "系统重复进入旧路径，却缺少新进展"],
    ["EUS", "显式不确定性信号", "模型主动暴露信息缺口或判断不确定"],
    ["GTD", "全局轨迹偏航", "多步轨迹与原始任务目标的对齐减弱"],
  ];
  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="02" section="边界判别信号" title="四类信号覆盖局部执行、路径理解、认知不确定性与全局目标对齐" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22, marginTop: 54 }}>
        {signals.map(([abbr, title, desc], index) => (
          <div key={abbr} style={{ background: index === 0 ? c.primarySoft : c.panel, border: `2px solid ${index === 0 ? c.primary : c.rule}`, padding: 28, minHeight: 430 }}>
            <div style={{ color: c.primary, fontSize: 58, lineHeight: 1, fontWeight: 700 }}>{abbr}</div>
            <div style={{ marginTop: 38, color: c.ink, fontSize: 32, lineHeight: 1.24, fontWeight: 700 }}>{title}</div>
            <p style={{ marginTop: 58, color: c.inkSoft, fontSize: 25, lineHeight: 1.45 }}>{desc}</p>
          </div>
        ))}
      </div>
      <ClaimStrip>边界信号不是直接接管开关，而是先进入自主恢复链路；恢复仍低收益时才触发协同。</ClaimStrip>
      <Footer part="关键技术与方法" page={9} />
    </div>
  );
};

const RuntimeLoop: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="02" section="运行闭环" title="自动执行、自主恢复和人工协同被建模为状态转移问题" />
    <div style={{ display: "grid", gridTemplateColumns: "1.08fr 0.92fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={testingState} caption="任务态结构：工作记忆、执行反馈、边界信号和协同上下文共同决定下一步状态。" fit="contain" />
      <div style={{ display: "grid", gap: 18 }}>
        {[
          ["1. 自动执行", "观察界面、提议动作、执行操作并记录反馈。"],
          ["2. 自主恢复", "局部纠偏、重规划、轨迹检查优先尝试自动修复。"],
          ["3. 协同触发", "当恢复难以推进时，生成最小充分协同上下文。"],
          ["4. 控制回交", "人工输入被写回状态，系统继续自动执行。"],
        ].map(([label, text], index) => (
          <Note key={label} label={label} tone={index === 2 ? "primary" : "plain"}>{text}</Note>
        ))}
      </div>
    </div>
    <ClaimStrip>CoactBot 的设计重点是让人工输入成为可恢复的运行时分支，而不是整段任务接管。</ClaimStrip>
    <Footer part="关键技术与方法" page={10} />
  </div>
);

const MemoryAndState: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="02" section="状态与记忆" title="工作记忆、情节记忆和流程控制状态共同支撑长程对齐" />
    <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={langgraphState} caption="状态图编排：自动执行节点与协同节点共享同一运行状态，便于记录、回放和回交。" fit="contain" />
      <div style={{ background: c.panel, border: `2px solid ${c.rule}`, padding: 30 }}>
        {[
          ["工作记忆", "当前任务目标、页面状态、已完成子目标、风险提示"],
          ["情节记忆", "近期动作、截图、失败反馈、重试轨迹"],
          ["流程控制", "边界信号、协同模式、检查点与回交状态"],
          ["长期应用记忆", "跨任务积累的应用入口、操作路径与经验规则"],
        ].map(([label, text], index) => (
          <div key={label} style={{ display: "grid", gridTemplateColumns: "190px 1fr", minHeight: 94, alignItems: "center", borderBottom: index === 3 ? "none" : `1px solid ${c.rule}`, columnGap: 24 }}>
            <div style={{ color: c.primary, fontSize: 28, fontWeight: 700 }}>{label}</div>
            <div style={{ color: c.ink, fontSize: 28, lineHeight: 1.35 }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
    <ClaimStrip>长程任务的稳定性来自“状态是否仍服务于目标”的持续维护，而不只是下一步动作生成。</ClaimStrip>
    <Footer part="关键技术与方法" page={11} />
  </div>
);

const HumanLoop: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="02" section="协同移交" title="最小充分上下文降低人工认知负担，并让输入可回注" />
    <div style={{ display: "grid", gridTemplateColumns: "1.06fr 0.94fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={hitlUi} caption="人工协同界面：向人展示任务目标、近期轨迹、失败原因和明确请求。" fit="contain" />
      <div style={{ display: "grid", gap: 20 }}>
        <Note label="指导模式" tone="primary">人提供方向性提示，例如“先进入预设列表再编辑名称”。</Note>
        <Note label="确认模式">高风险动作前请求确认，明确责任边界。</Note>
        <Note label="直接操作模式">人完成局部难以自动落地的界面操作，系统读取结果后恢复执行。</Note>
      </div>
    </div>
    <ClaimStrip>协同上下文必须足够少、足够准：让人知道当前卡在哪里，以及怎样帮助系统继续自动执行。</ClaimStrip>
    <Footer part="关键技术与方法" page={12} />
  </div>
);

const SystemArchitecture: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="02" section="系统实现" title="系统总体架构把任务管理、自动执行、边界判别和人机协同串成闭环" />
    <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={overallArchitecture} caption="CoactBot 总体架构：面向 Android / HarmonyOS 的移动端长程 GUI 自动化原型系统。" fit="contain" />
      <div style={{ display: "grid", gap: 20 }}>
        <Note label="任务管理">建立运行实例、设备参数、应用信息和截图/日志目录。</Note>
        <Note label="核心执行">规划、动作提议、风险检查、执行反馈、结果反思。</Note>
        <Note label="监测记录" tone="primary">边界信号、人工会话、检查点和执行归档共同支撑可复盘。</Note>
      </div>
    </div>
    <ClaimStrip>系统实现证明：边界判别与人机协同可以作为运行时控制流被明确建模和记录。</ClaimStrip>
    <Footer part="关键技术与方法" page={13} />
  </div>
);

const ViewsAndFlow: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="02" section="系统视图" title="逻辑视图与过程视图共同说明模块边界和运行路径" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={logicalView} caption="逻辑视图：模块职责、边界判别、人机协同和过程记录的分层关系。" fit="contain" />
      <FigurePanel src={processView} caption="过程视图：从任务发起、自动执行到人工协同和结果归档的运行路径。" fit="contain" />
    </div>
    <ClaimStrip>方法页讲机制，系统页讲落地：模块边界和执行路径必须能对上前面的协同闭环。</ClaimStrip>
    <Footer part="关键技术与方法" page={14} />
  </div>
);

const PrototypeTrace: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="02" section="原型与过程记录" title="原型界面和执行轨迹让协同过程可观察、可回放、可分析" />
    <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 30, marginTop: 42 }}>
      <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 22 }}>
        <FigurePanel src={configurationPage} caption="任务配置界面：配置应用、任务目标、设备与运行约束。" fit="contain" pad={18} />
        <FigurePanel src={executionTrace} caption="执行记录：截图、动作、反思与协同事件形成可复盘轨迹。" fit="contain" pad={18} />
      </div>
      <div style={{ display: "grid", gap: 18 }}>
        <FigurePanel src={testingState} caption="运行状态结构为后续实验中的触发、成本和失败归因提供数据基础。" fit="contain" pad={18} />
      </div>
    </div>
    <ClaimStrip>过程记录不是附属功能，而是证明边界判别与协同是否有效的实验基础。</ClaimStrip>
    <Footer part="关键技术与方法" page={15} />
  </div>
);

const ExperimentSetup: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="03" section="实验设计与分析" title="实验覆盖外部基准、真实手机开源应用、消融和触发质量" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22, marginTop: 52 }}>
      <Metric value="99" label="外部基准任务" note="10 类常见业务场景，用于评估总体任务执行能力。" />
      <Metric value="85" label="真实开源应用任务" note="计算、天气、闹钟、笔记、生活服务 5 类应用。" />
      <Metric value="4" label="消融配置" note="逐步加入 LEG、PR、EUS、GTD，分析机制增益。" />
      <Metric value="27" label="触发需求任务" note="人工标注需要协同的任务，用于评估触发召回和准确率。" />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 26, marginTop: 34 }}>
      <Note label="任务复杂度">开源应用任务分为简单 32 个、中等 39 个、困难 14 个，覆盖短链路、多页面与深层导航。</Note>
      <Note label="评价指标" tone="primary">场景成功率、场景覆盖率、正常结束率、自动化执行时长、token 消耗、人工认知时长、触发召回率和触发准确率。</Note>
    </div>
    <ClaimStrip>实验设计围绕四个 RQ：效果、机制、成本、触发质量，每个 RQ 对应一张核心结果页。</ClaimStrip>
    <Footer part="实验设计与分析" page={16} />
  </div>
);

const RQOverview: Page = () => {
  const rqs = [
    ["RQ1", "与现有 GUI 智能体和自动化方法相比，整体任务执行能力如何？"],
    ["RQ2", "真实手机未见开源应用中，四类边界信号是否稳定提升长程任务完成效果？"],
    ["RQ3", "提升的代价是多少？时间、token 与人工介入负担是否更高效？"],
    ["RQ4", "边界判别信号触发是否合理？偏差集中在哪些任务和结果分层？"],
  ];
  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="03" section="研究问题综述" title="四个研究问题分别检验效果、机制、成本与触发质量" />
      <div style={{ background: c.panel, border: `2px solid ${c.rule}`, marginTop: 54, padding: 30 }}>
        {rqs.map(([id, text], index) => (
          <div key={id} style={{ display: "grid", gridTemplateColumns: "120px 1fr", minHeight: 102, alignItems: "center", borderBottom: index === rqs.length - 1 ? "none" : `1px solid ${c.rule}` }}>
            <div style={{ width: 72, height: 72, borderRadius: 36, background: index === 0 ? c.primary : c.primarySoft, color: index === 0 ? "#fff" : c.primary, display: "grid", placeItems: "center", fontSize: 26, fontWeight: 700 }}>{id}</div>
            <div style={{ color: c.ink, fontSize: 31, lineHeight: 1.35 }}>{text}</div>
          </div>
        ))}
      </div>
      <ClaimStrip>后续四页严格一页回答一个 RQ，避免把结果、消融和讨论混在一起。</ClaimStrip>
      <Footer part="实验设计与分析" page={17} />
    </div>
  );
};

const BarChart = ({ data, max = 100 }: { data: Array<[string, number, string]>; max?: number }) => (
  <svg width="820" height="380" viewBox="0 0 820 380" role="img" aria-label="bar chart">
    <line x1="90" y1="300" x2="770" y2="300" stroke={c.rule} strokeWidth="2" />
    <line x1="90" y1="54" x2="90" y2="300" stroke={c.rule} strokeWidth="2" />
    {[0, 25, 50, 75, 100].map((tick) => {
      const y = 300 - (tick / max) * 246;
      return (
        <g key={tick}>
          <line x1="84" y1={y} x2="770" y2={y} stroke={tick === 0 ? c.rule : "#ECE6EF"} strokeWidth="1" />
          <text x="68" y={y + 8} textAnchor="end" fontFamily={bodyFont} fontSize="21" fill={c.inkFaint}>{tick}</text>
        </g>
      );
    })}
    {data.map(([label, value, color], index) => {
      const x = 170 + index * 190;
      const h = (value / max) * 246;
      const y = 300 - h;
      return (
        <g key={label}>
          <rect x={x} y={y} width="96" height={h} fill={color} />
          <text x={x + 48} y={y - 16} textAnchor="middle" fontFamily={bodyFont} fontSize="27" fontWeight="700" fill={color}>{value.toFixed(2)}%</text>
          <text x={x + 48} y="342" textAnchor="middle" fontFamily={bodyFont} fontSize="22" fill={c.inkSoft}>{label}</text>
        </g>
      );
    })}
  </svg>
);

const RQ1: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="03" section="RQ1 整体效果" title="外部基准上，CoactBot 的场景成功率达到 91.92%" />
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 34, marginTop: 48 }}>
      <div style={{ background: c.panel, border: `2px solid ${c.rule}`, padding: 30 }}>
        <div style={{ color: c.primary, fontSize: 30, fontWeight: 700 }}>99 个外部基准任务：场景成功率（%）</div>
        <BarChart data={[["GPTDroid", 68.69, c.inkFaint], ["ScenTest", 69.7, c.inkFaint], ["CoactBot", 91.92, c.primary]]} />
      </div>
      <div style={{ display: "grid", gap: 20 }}>
        <Metric value="93.94%" label="场景覆盖率" note="高于 GPTDroid 74.75% 与 ScenTest 77.78%。" />
        <Metric value="95.96%" label="正常结束率" note="异常终止更少，终止行为更稳定。" />
        <Note label="回答 RQ1" tone="primary">CoactBot 在常见业务任务上显著提升整体执行能力，并减少未完整达成目标的任务。</Note>
      </div>
    </div>
    <ClaimStrip>RQ1 结论：边界感知协同没有削弱通用性，反而提升了外部基准上的整体任务完成效果。</ClaimStrip>
    <Footer part="实验设计与分析" page={18} />
  </div>
);

const RQ2: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="03" section="RQ2 机制增益" title="四类边界信号逐步加入后，真实手机任务成功率提升至 88.24%" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={rq2Ablation} caption="消融结果与成本走势：完整 CoactBot 在成功率、覆盖率、正常结束率上均优于纯自动配置。" fit="contain" />
      <FigurePanel src={rq2Failure} caption="残余失败归因：主要集中在近完成判断、瞬时交互窗口和高语义相似组件。" fit="contain" />
    </div>
    <ClaimStrip>RQ2 结论：LEG、PR、EUS、GTD 在不同运行层次上互补，完整机制将成功率由 68.24% 提升到 88.24%。</ClaimStrip>
    <Footer part="实验设计与分析" page={19} />
  </div>
);

const RQ3: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="03" section="RQ3 成本效率" title="按需协同以 27.92 分钟人工成本换来更高成功率和更低自动化开销" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, marginTop: 44 }}>
      <FigurePanel src={rq3Time} caption="时间效率：平均自动化执行时长从 655.6s 降至 479.3s，下降 26.9%。" fit="contain" />
      <FigurePanel src={rq3Sensitivity} caption="条件敏感性：失败后统一接管若要追平收益，需要同时满足高转化率和短接管时长。" fit="contain" />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 26 }}>
      <Metric value="24.4%" label="总 token 下降" note="从 121.6K 降至 92.0K。" />
      <Metric value="17" label="新增 c1 场景" note="纯自动 58 个提升到 75 个。" />
      <Metric value="1.64min" label="单位成功增益人工成本" note="27.92 分钟 / 17 个新增成功场景。" />
    </div>
    <ClaimStrip>RQ3 结论：按需协同主要压缩原本昂贵、容易失控的轨迹，而不是把负担转嫁给人。</ClaimStrip>
    <Footer part="实验设计与分析" page={20} />
  </div>
);

const RQ4: Page = () => (
  <div style={{ ...pageBase, padding: "0 120px 180px" }}>
    <PageHeader part="03" section="RQ4 触发质量" title="CoactBot 覆盖多数真实触发需求，触发召回率达到 77.78%" />
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 34, marginTop: 48 }}>
      <FigurePanel src={rq4Trigger} caption="触发召回率与触发准确率热力图：总体召回 77.78%，准确率 70.37%。" fit="contain" />
      <div style={{ display: "grid", gap: 20 }}>
        <Metric value="21 / 27" label="实际触发任务" note="人工标注 27 个存在触发需求，系统实际触发 21 个。" />
        <Metric value="19" label="类型匹配任务" note="触发类型与人工标注主要卡点一致。" />
        <Note label="剩余问题" tone="caution">偏差集中在中等复杂度任务和近完成轨迹，指向完成证据建模与置信控制。</Note>
      </div>
    </div>
    <ClaimStrip>RQ4 结论：触发质量总体可用，后续提升重点是近完成轨迹上的漏触发和完成幻觉。</ClaimStrip>
    <Footer part="实验设计与分析" page={21} />
  </div>
);

const Contributions: Page = () => {
  const rows = [
    ["C1", "失稳问题", "O1", "RQ2/RQ4", "归纳移动端长程 GUI 自动化中的失败级联与结构性失稳。"],
    ["C2", "边界判别", "O2", "RQ2/RQ4", "提出 LEG、PR、EUS、GTD 四类运行时边界信号。"],
    ["C3", "协同闭环", "O3", "RQ3", "设计并实现可移交、可回注、可恢复的人机协同增强方法。"],
    ["C4", "系统验证", "O4", "RQ1-RQ4", "在外部基准和真实手机任务上验证效果、成本和触发质量。"],
  ];
  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="04" section="贡献点" title="四个贡献分别闭合目标、研究问题和实验结果" />
      <div style={{ background: c.panel, border: `2px solid ${c.rule}`, marginTop: 48, padding: 30 }}>
        <div style={{ display: "grid", gridTemplateColumns: "86px 150px 110px 150px 1fr", color: c.primary, fontSize: 23, fontWeight: 700, borderBottom: `2px solid ${c.primary}`, paddingBottom: 16 }}>
          <span>贡献</span><span>对应问题</span><span>目标</span><span>证据</span><span>内容</span>
        </div>
        {rows.map((row, index) => (
          <div key={row[0]} style={{ display: "grid", gridTemplateColumns: "86px 150px 110px 150px 1fr", minHeight: 92, alignItems: "center", borderBottom: index === rows.length - 1 ? "none" : `1px solid ${c.rule}`, columnGap: 16, fontSize: 24, lineHeight: 1.35 }}>
            <span style={{ color: c.primary, fontWeight: 700 }}>{row[0]}</span>
            <span style={{ color: c.inkSoft }}>{row[1]}</span>
            <span style={{ color: c.primary, fontWeight: 700 }}>{row[2]}</span>
            <span style={{ color: c.blue, fontWeight: 700 }}>{row[3]}</span>
            <span style={{ color: c.ink }}>{row[4]}</span>
          </div>
        ))}
      </div>
      <ClaimStrip>总结页必须闭环：不是重新罗列章节，而是把目标、RQ、实验和贡献一一对上。</ClaimStrip>
      <Footer part="总结" page={22} />
    </div>
  );
};

const FutureWork: Page = () => {
  const works = [
    ["完成证据包", "针对查询、设置、编辑、创建等任务类型定义更稳定的完成证据组合。"],
    ["瞬时交互观测", "增强短生命周期控件、撤销入口和即时反馈的快速捕获能力。"],
    ["跨视口搜索", "维护候选组件跨视口记忆，降低高相似组件和隐藏目标造成的偏航。"],
    ["真实部署评估", "扩展到更多应用类型、弱网、多语言和真实用户参与的协同实验。"],
  ];
  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="04" section="未来展望" title="后续工作围绕完成证据、观测节奏、搜索能力和真实部署推进" />
      <div style={{ display: "grid", gap: 22, marginTop: 50 }}>
        {works.map(([title, desc], index) => (
          <div key={title} style={{ display: "grid", gridTemplateColumns: "260px 1fr", alignItems: "center", background: index === 0 ? c.primarySoft : c.panel, border: `2px solid ${index === 0 ? c.primary : c.rule}`, minHeight: 112, padding: "0 30px", columnGap: 30 }}>
            <div style={{ color: c.primary, fontSize: 31, fontWeight: 700 }}>{title}</div>
            <div style={{ color: c.ink, fontSize: 29, lineHeight: 1.38 }}>{desc}</div>
          </div>
        ))}
      </div>
      <ClaimStrip>未来工作的共同方向：让边界判别更细、更准，并让人工输入继续保持低成本高价值。</ClaimStrip>
      <Footer part="总结" page={23} />
    </div>
  );
};

const Closing: Page = () => (
  <div style={{ ...pageBase, background: "#FFFFFF" }}>
    <div style={{ position: "absolute", inset: 0, background: c.primaryDark }} />
    <div style={{ position: "absolute", left: 80, top: 80, right: 80, bottom: 80, background: "rgba(255,255,255,0.96)" }} />
    <div style={{ position: "absolute", left: 180, right: 180, top: 180, bottom: 180, display: "grid", placeItems: "center", textAlign: "center" }}>
      <div>
        <img src={njuWordmark} alt="南京大学" style={{ width: 430, height: "auto" }} />
        <div style={{ marginTop: 82, color: c.primary, fontSize: 90, fontWeight: 300 }}>感谢各位老师</div>
        <div style={{ marginTop: 42, color: c.inkSoft, fontSize: 34 }}>敬请批评指正</div>
        <div style={{ marginTop: 70, color: c.inkFaint, fontSize: 24 }}>李克诚 · 南京大学软件学院 · Kecheng Li@smail.nju.edu.cn</div>
      </div>
    </div>
  </div>
);

export default [
  Cover,
  Contents,
  PainPoint,
  RelatedWork,
  Motivation,
  ThesisStructure,
  MethodOverview,
  FailureStudy,
  BoundarySignals,
  RuntimeLoop,
  MemoryAndState,
  HumanLoop,
  SystemArchitecture,
  ViewsAndFlow,
  PrototypeTrace,
  ExperimentSetup,
  RQOverview,
  RQ1,
  RQ2,
  RQ3,
  RQ4,
  Contributions,
  FutureWork,
  Closing,
] satisfies Page[];
