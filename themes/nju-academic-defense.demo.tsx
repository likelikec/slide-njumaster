import type React from "react";
import type { DesignSystem, Page } from "@open-slide/core";

export const design: DesignSystem = {
  palette: { bg: "#FBFAFC", text: "#1A171C", accent: "#69075A" },
  fonts: {
    display:
      'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
    body: '"Noto Sans CJK SC", "Microsoft YaHei", "PingFang SC", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 148, body: 32 },
  radius: 8,
};

const inkSoft = "#4C4650";
const inkFaint = "#9D9EA0";
const rule = "#D9D0DF";
const panel = "#FFFFFF";
const primarySoft = "#EEE3F0";
const positive = "#2F6F4F";
const caution = "#9A6A2F";

const pageBase = {
  width: "100%",
  height: "100%",
  position: "relative",
  background: "var(--osd-bg)",
  color: "var(--osd-text)",
  fontFamily: "var(--osd-font-body)",
  boxSizing: "border-box",
  overflow: "hidden",
} as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 18,
      color: "var(--osd-accent)",
      fontFamily: "var(--osd-font-display)",
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    }}
  >
    <span style={{ width: 56, height: 4, background: "var(--osd-accent)" }} />
    {children}
  </div>
);

const Footer = ({
  part,
  page,
  total,
}: {
  part: string;
  page: number;
  total: number;
}) => (
  <div
    style={{
      position: "absolute",
      left: 128,
      right: 128,
      bottom: 48,
      borderTop: `2px solid ${rule}`,
      paddingTop: 16,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      alignItems: "center",
      color: inkFaint,
      fontSize: 18,
      lineHeight: 1.3,
    }}
  >
    <span>{part}</span>
    <span style={{ textAlign: "center" }}>硕士学位论文答辩</span>
    <span style={{ textAlign: "right" }}>
      {page} / {total}
    </span>
  </div>
);

const TitleSlide: Page = () => (
  <div
    style={{
      ...pageBase,
      padding: "136px 144px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 36,
        background: "var(--osd-accent)",
      }}
    />
    <div
      style={{
        position: "absolute",
        right: 144,
        top: 112,
        color: "var(--osd-accent)",
        fontFamily: "var(--osd-font-display)",
        fontSize: 30,
        fontWeight: 700,
      }}
    >
      NANJING UNIVERSITY
    </div>
    <Eyebrow>Academic Thesis Defense</Eyebrow>
    <h1
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 132,
        lineHeight: 1.08,
        fontWeight: 800,
        margin: "42px 0 0",
        maxWidth: 1240,
        color: "var(--osd-accent)",
      }}
    >
      面向复杂软件系统的可信智能方法研究
    </h1>
    <div
      style={{
        width: 780,
        height: 3,
        background: "var(--osd-accent)",
        marginTop: 48,
      }}
    />
    <p
      style={{
        fontSize: 32,
        lineHeight: 1.55,
        margin: "56px 0 0",
        color: inkSoft,
      }}
    >
      答辩人：张三　指导教师：李四 教授
      <br />
      软件学院 · 2026年5月
    </p>
  </div>
);

const RoadmapSlide: Page = () => {
  const parts = [
    ["01", "研究背景与意义", "问题从哪里来，现有方法缺什么"],
    ["02", "关键技术与方法", "本文如何建模、设计并实现核心方法"],
    ["03", "实验设计与分析", "RQ 如何被数据逐一回答"],
    ["04", "总结与展望", "贡献如何回扣目标与证据"],
  ];

  return (
    <div style={{ ...pageBase, padding: "112px 128px 132px" }}>
      <Eyebrow>Talk Roadmap</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--osd-font-display)",
          fontSize: 68,
          lineHeight: 1.15,
          margin: "28px 0 56px",
          color: "var(--osd-accent)",
        }}
      >
        四段式结构把目标、方法、RQ 与贡献闭合起来
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 28,
        }}
      >
        {parts.map(([num, title, note]) => (
          <div
            key={num}
            style={{
              minHeight: 460,
              background: panel,
              border: `2px solid ${rule}`,
              padding: 34,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontFamily: "var(--osd-font-display)",
                fontSize: 76,
                fontWeight: 800,
                color: primarySoft,
              }}
            >
              {num}
            </div>
            <div>
              <h3
                style={{
                  fontSize: 36,
                  lineHeight: 1.25,
                  margin: 0,
                  color: "var(--osd-accent)",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 28,
                  lineHeight: 1.45,
                  color: inkSoft,
                  margin: "26px 0 0",
                }}
              >
                {note}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer part="目录" page={2} total={3} />
    </div>
  );
};

const ResultSlide: Page = () => {
  const rows = [
    ["Baseline A", "71.4", "#C8C2CA"],
    ["Baseline B", "76.8", "#AFA8B3"],
    ["本文方法", "84.6", "var(--osd-accent)"],
  ];

  return (
    <div style={{ ...pageBase, padding: "112px 128px 132px" }}>
      <Eyebrow>Experiment Analysis</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--osd-font-display)",
          fontSize: 64,
          lineHeight: 1.16,
          margin: "28px 0 46px",
          color: "var(--osd-accent)",
        }}
      >
        RQ1：本文方法在核心指标上优于主流基线
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.35fr 0.65fr",
          gap: 56,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: panel,
            border: `2px solid ${rule}`,
            padding: "52px 56px",
          }}
        >
          <div style={{ fontSize: 24, color: inkFaint, marginBottom: 36 }}>
            指标：通过率（%） · 示例数据需替换为论文实验结果
          </div>
          <div style={{ display: "grid", gap: 32 }}>
            {rows.map(([label, value, color]) => (
              <div
                key={label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "210px 1fr 88px",
                  gap: 24,
                  alignItems: "center",
                  fontSize: 26,
                }}
              >
                <div style={{ color: inkSoft }}>{label}</div>
                <div style={{ height: 34, background: "#F1EEF3" }}>
                  <div
                    style={{
                      width: `${Number(value)}%`,
                      height: "100%",
                      background: color,
                    }}
                  />
                </div>
                <div
                  style={{
                    fontVariantNumeric: "tabular-nums",
                    color: label === "本文方法" ? "var(--osd-accent)" : inkSoft,
                    fontWeight: label === "本文方法" ? 800 : 500,
                    textAlign: "right",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            borderLeft: `6px solid ${positive}`,
            background: primarySoft,
            padding: "42px 38px",
          }}
        >
          <h3 style={{ margin: 0, fontSize: 36, color: "var(--osd-accent)" }}>
            解释口径
          </h3>
          <p style={{ fontSize: 28, lineHeight: 1.5, color: inkSoft }}>
            结果页只回答一个 RQ。贡献用紫色突出，基线保持灰色；误差线、显著性和样本量按论文材料补齐。
          </p>
          <p style={{ fontSize: 22, lineHeight: 1.35, color: caution }}>
            图中数值为主题示例，生成正式答辩时必须替换为真实实验数据。
          </p>
        </div>
      </div>
      <Footer part="实验设计与分析" page={3} total={3} />
    </div>
  );
};

export default [TitleSlide, RoadmapSlide, ResultSlide] satisfies Page[];
