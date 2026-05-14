import type React from "react";
import type { DesignSystem, Page } from "@open-slide/core";

export const design: DesignSystem = {
  palette: { bg: "#f7f4f8", text: "#1A171C", accent: "#69075A" },
  fonts: {
    display:
      'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
    body: '"Noto Sans CJK SC", "Microsoft YaHei", "PingFang SC", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 156, body: 36 },
  radius: 10,
};

const muted = "#9D9EA0";
const panel = "#ffffff";
const rule = "#d9d0df";
const purpleDark = "#69075A";
const yellow = "#FBBB00";
const blue = "#3275B6";
const red = "#DC004B";

const pageBase = {
  width: "100%",
  height: "100%",
  position: "relative",
  background: "var(--osd-bg)",
  color: "var(--osd-text)",
  fontFamily: "var(--osd-font-body)",
  boxSizing: "border-box",
} as const;

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily:
        'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
      fontSize: 156,
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: "-0.025em",
      margin: 0,
      color: "#69075A",
      maxWidth: 1320,
    }}
  >
    {children}
  </h1>
);

const Footer = ({ pageNum, total }: { pageNum: number; total: number }) => (
  <div
    style={{
      position: "absolute",
      left: 128,
      right: 128,
      bottom: 56,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "2px solid #d9d0df",
      paddingTop: 18,
      fontFamily:
        'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
      fontSize: 23,
      letterSpacing: "0.06em",
      color: "#9D9EA0",
    }}
  >
    <span>NANJING UNIVERSITY · ACADEMIC REPORT</span>
    <span>
      {pageNum} / {total}
    </span>
  </div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 18,
      fontFamily:
        'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#69075A",
    }}
  >
    <span
      style={{
        width: 54,
        height: 4,
        background: "#69075A",
        display: "inline-block",
      }}
    />
    {children}
  </div>
);

const MetricCard = ({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) => (
  <div
    style={{
      background: panel,
      border: `2px solid ${rule}`,
      borderLeft: `10px solid ${accent}`,
      padding: "34px 38px",
      minHeight: 178,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 18px 40px rgba(43, 0, 79, 0.07)",
    }}
  >
    <div style={{ fontSize: 24, color: muted, letterSpacing: "0.08em" }}>
      {label}
    </div>
    <div
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 54,
        fontWeight: 800,
        color: purpleDark,
      }}
    >
      {value}
    </div>
  </div>
);

const Cover: Page = () => (
  <div
    style={{
      ...pageBase,
      padding: 144,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: "0 auto 0 0",
        width: 38,
        background: purpleDark,
      }}
    />
    <div
      style={{
        position: "absolute",
        right: 144,
        top: 120,
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: 30,
        letterSpacing: "0.12em",
        color: "var(--osd-accent)",
      }}
    >
      NANJING UNIVERSITY
    </div>
    <Eyebrow>Thesis Defense</Eyebrow>
    <div style={{ height: 36 }} />
    <Title>面向复杂系统的可信智能方法研究</Title>
    <p
      style={{
        fontSize: 36,
        lineHeight: 1.55,
        color: muted,
        maxWidth: 1120,
        margin: "42px 0 0",
      }}
    >
      硕士学位论文答辩 · 软件学院
    </p>
    <p
      style={{
        fontSize: 28,
        lineHeight: 1.5,
        color: purpleDark,
        margin: "72px 0 0",
      }}
    >
      答辩人：张三　指导教师：李四 教授
    </p>
    <Footer pageNum={1} total={3} />
  </div>
);

const Content: Page = () => (
  <div style={{ ...pageBase, padding: "116px 128px 132px" }}>
    <Eyebrow>Research Overview</Eyebrow>
    <h2
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 84,
        lineHeight: 1.12,
        fontWeight: 800,
        margin: "28px 0 42px",
        color: purpleDark,
      }}
    >
      研究贡献与学术脉络
    </h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 56,
        alignItems: "stretch",
      }}
    >
      <div
        style={{ background: panel, border: `2px solid ${rule}`, padding: 48 }}
      >
        <p
          style={{
            fontSize: 36,
            lineHeight: 1.58,
            margin: 0,
            color: "#26202a",
          }}
        >
          主题以低饱和背景承载长时间阅读，以南大紫建立稳定识别；辅助色仅用于关键变量、风险提示与图表区分。
        </p>
        <div style={{ height: 44 }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            fontSize: 31,
            lineHeight: 1.48,
          }}
        >
          <div>
            <span style={{ color: "var(--osd-accent)", fontWeight: 800 }}>
              01
            </span>
            　问题定义保持单页单主题，减少答辩现场认知负担。
          </div>
          <div>
            <span style={{ color: "var(--osd-accent)", fontWeight: 800 }}>
              02
            </span>
            　图表进入白色面板，正文区域保留充足边距。
          </div>
          <div>
            <span style={{ color: "var(--osd-accent)", fontWeight: 800 }}>
              03
            </span>
            　校名、校训、校风优先使用官方矢量资产插入。
          </div>
        </div>
      </div>
      <div
        style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)", gap: 26 }}
      >
        <MetricCard
          label="STANDARD PURPLE"
          value="#69075A"
          accent="var(--osd-accent)"
        />
        <MetricCard label="DATA CONTRAST" value="#3275B6" accent={blue} />
        <MetricCard label="KEY MARK" value="#FBBB00" accent={yellow} />
      </div>
    </div>
    <Footer pageNum={2} total={3} />
  </div>
);

const Closer: Page = () => (
  <div
    style={{
      ...pageBase,
      background: purpleDark,
      color: "#ffffff",
      padding: 144,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 128,
        right: 128,
        top: 92,
        height: 3,
        background: "rgba(255, 255, 255, 0.22)",
      }}
    />
    <div
      style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: 32,
        letterSpacing: "0.16em",
        color: "#d8c8e8",
      }}
    >
      NANJING UNIVERSITY
    </div>
    <h2
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 132,
        lineHeight: 1.05,
        fontWeight: 800,
        letterSpacing: "-0.03em",
        maxWidth: 980,
        margin: "42px 0 0",
      }}
    >
      敬请各位老师批评指正
    </h2>
    <div style={{ display: "flex", gap: 18, marginTop: 66 }}>
      <span
        style={{ width: 72, height: 8, background: yellow, display: "block" }}
      />
      <span
        style={{ width: 72, height: 8, background: blue, display: "block" }}
      />
      <span
        style={{ width: 72, height: 8, background: red, display: "block" }}
      />
    </div>
    <p
      style={{
        fontSize: 30,
        color: "#d8c8e8",
        margin: "78px 0 0",
        lineHeight: 1.5,
      }}
    >
      官方校名、校训与校风建议在实际页面中替换为矢量图资产。
    </p>
    <div
      style={{
        position: "absolute",
        left: 128,
        right: 128,
        bottom: 56,
        display: "flex",
        justifyContent: "space-between",
        borderTop: "2px solid rgba(255, 255, 255, 0.22)",
        paddingTop: 18,
        fontFamily:
          'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
        fontSize: 23,
        letterSpacing: "0.06em",
        color: "#d8c8e8",
      }}
    >
      <span>NANJING UNIVERSITY · ACADEMIC REPORT</span>
      <span>3 / 3</span>
    </div>
  </div>
);

export default [Cover, Content, Closer] satisfies Page[];
