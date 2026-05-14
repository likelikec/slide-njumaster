import type React from "react";
import type { DesignSystem, Page } from "@open-slide/core";

export const design: DesignSystem = {
  palette: { bg: "#F8F6FA", text: "#17151A", accent: "#69075A" },
  fonts: {
    display:
      'Georgia, "Times New Roman", "Noto Serif CJK SC", "Songti SC", serif',
    body: '"Noto Sans CJK SC", "Microsoft YaHei", "PingFang SC", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 136, body: 32 },
  radius: 8,
};

const inkSoft = "#4A4650";
const inkFaint = "#9D9EA0";
const rule = "#D8CEDF";
const panel = "#FFFFFF";
const primarySoft = "#EFE5F1";
const systemBlue = "#0B4F6C";
const success = "#2F6F4F";
const risk = "#9A4D2F";

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
      gap: 16,
      color: "var(--osd-accent)",
      fontFamily: "var(--osd-font-display)",
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    }}
  >
    <span style={{ width: 54, height: 4, background: "var(--osd-accent)" }} />
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
    <span style={{ textAlign: "center" }}>工程型硕士学位论文答辩</span>
    <span style={{ textAlign: "right" }}>
      {page} / {total}
    </span>
  </div>
);

const CoverSlide: Page = () => (
  <div
    style={{
      ...pageBase,
      padding: "132px 144px",
      display: "grid",
      gridTemplateColumns: "1.08fr 0.92fr",
      gap: 72,
      alignItems: "center",
    }}
  >
    <div>
      <Eyebrow>Engineering Thesis Defense</Eyebrow>
      <h1
        style={{
          fontFamily: "var(--osd-font-display)",
          fontSize: 112,
          lineHeight: 1.08,
          margin: "40px 0 0",
          color: "var(--osd-accent)",
        }}
      >
        基于异地多活架构的授权系统设计与实现
      </h1>
      <p style={{ fontSize: 32, lineHeight: 1.55, color: inkSoft }}>
        答辩人：张三　指导教师：李四 教授
        <br />
        软件学院 · 2026年5月
      </p>
    </div>
    <div
      style={{
        background: panel,
        border: `2px solid ${rule}`,
        padding: 46,
        minHeight: 520,
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <div
        style={{
          color: "var(--osd-accent)",
          fontFamily: "var(--osd-font-display)",
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        NANJING UNIVERSITY
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 22,
          alignContent: "center",
        }}
      >
        {["需求", "设计", "实现", "测试"].map((label, index) => (
          <div
            key={label}
            style={{
              border: `2px solid ${index === 0 ? "var(--osd-accent)" : rule}`,
              background: index === 0 ? primarySoft : "#FAF9FB",
              padding: 28,
              minHeight: 120,
              fontSize: 34,
              fontWeight: 700,
              color: index === 0 ? "var(--osd-accent)" : inkSoft,
            }}
          >
            {label}
          </div>
        ))}
      </div>
      <div style={{ color: inkFaint, fontSize: 22 }}>
        工程型答辩强调需求、设计、实现、测试的闭环证据。
      </div>
    </div>
  </div>
);

const ArchitectureSlide: Page = () => {
  const modules = [
    ["接入层", "协议适配 / API 网关"],
    ["业务层", "授权、路由、审计核心模块"],
    ["数据层", "状态存储 / 令牌 / 日志"],
    ["运维层", "监控、配置、容灾切换"],
  ];

  return (
    <div style={{ ...pageBase, padding: "112px 128px 132px" }}>
      <Eyebrow>System Design</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--osd-font-display)",
          fontSize: 62,
          lineHeight: 1.16,
          color: "var(--osd-accent)",
          margin: "28px 0 42px",
        }}
      >
        系统设计页要同时说明边界、职责与关键数据流
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 52,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: panel,
            border: `2px solid ${rule}`,
            padding: 42,
          }}
        >
          <div style={{ display: "grid", gap: 24 }}>
            {modules.map(([name, note], index) => (
              <div
                key={name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  alignItems: "center",
                  minHeight: 104,
                  border: `2px solid ${index === 1 ? "var(--osd-accent)" : rule}`,
                  background: index === 1 ? primarySoft : "#FAF9FB",
                }}
              >
                <div
                  style={{
                    padding: "0 26px",
                    fontSize: 30,
                    fontWeight: 800,
                    color: index === 1 ? "var(--osd-accent)" : systemBlue,
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    borderLeft: `2px solid ${rule}`,
                    padding: "0 30px",
                    fontSize: 28,
                    color: inkSoft,
                  }}
                >
                  {note}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 30,
              color: inkFaint,
              fontSize: 22,
              lineHeight: 1.4,
            }}
          >
            真实答辩中替换为论文系统架构图，并标注当前页展开的模块。
          </div>
        </div>
        <div style={{ display: "grid", gap: 24 }}>
          {[
            ["设计视图", "用例、逻辑、过程、开发、物理视图必须互相对齐。"],
            ["工程取舍", "说明为什么采用该机制，以及它解决哪个约束。"],
            ["验证入口", "每个关键设计最终要能落到测试证据。"],
          ].map(([title, note]) => (
            <div
              key={title}
              style={{
                background: panel,
                borderLeft: `8px solid ${systemBlue}`,
                padding: "30px 34px",
              }}
            >
              <h3 style={{ margin: 0, fontSize: 32, color: systemBlue }}>
                {title}
              </h3>
              <p style={{ margin: "16px 0 0", fontSize: 26, lineHeight: 1.45 }}>
                {note}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer part="系统设计" page={2} total={3} />
    </div>
  );
};

const TestSlide: Page = () => {
  const rows = [
    ["功能测试", "42 个核心用例", "通过", success],
    ["性能测试", "峰值负载与延迟", "达标", success],
    ["容灾测试", "跨区切换演练", "待补充", risk],
  ];

  return (
    <div style={{ ...pageBase, padding: "112px 128px 132px" }}>
      <Eyebrow>System Testing</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--osd-font-display)",
          fontSize: 62,
          lineHeight: 1.16,
          color: "var(--osd-accent)",
          margin: "28px 0 48px",
        }}
      >
        测试页必须回答“设计目标是否被工程证据验证”
      </h2>
      <div
        style={{
          background: panel,
          border: `2px solid ${rule}`,
          padding: "40px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr 160px",
            borderBottom: `2px solid ${rule}`,
            paddingBottom: 18,
            color: inkFaint,
            fontSize: 22,
          }}
        >
          <div>测试类型</div>
          <div>证据对象</div>
          <div>结论</div>
        </div>
        {rows.map(([type, evidence, result, color]) => (
          <div
            key={type}
            style={{
              display: "grid",
              gridTemplateColumns: "260px 1fr 160px",
              alignItems: "center",
              minHeight: 104,
              borderBottom: `2px solid ${rule}`,
              fontSize: 28,
            }}
          >
            <div style={{ fontWeight: 800, color: "var(--osd-accent)" }}>
              {type}
            </div>
            <div style={{ color: inkSoft }}>{evidence}</div>
            <div style={{ color, fontWeight: 800 }}>{result}</div>
          </div>
        ))}
        <p style={{ margin: "28px 0 0", color: inkFaint, fontSize: 22 }}>
          示例文字仅展示主题语法；正式生成时必须替换为真实测试环境、指标、单位与结论。
        </p>
      </div>
      <Footer part="系统测试" page={3} total={3} />
    </div>
  );
};

export default [CoverSlide, ArchitectureSlide, TestSlide] satisfies Page[];
