import type React from "react";
import type { DesignSystem, Page } from "@open-slide/core";

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

const campusPhoto = new URL("./assets/nju-cover-campus.png", import.meta.url).href;
const njuWordmark = new URL("./assets/nju-wordmark.png", import.meta.url).href;

const primary = "#6E0F6D";
const primaryDark = "#540049";
const primarySoft = "#E6D3E6";
const ink = "#17151A";
const inkSoft = "#4A4650";
const inkFaint = "#9D9EA0";
const rule = "#D8CEDF";
const panel = "#FFFFFF";
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
} satisfies React.CSSProperties;

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

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
    <div
      style={{
        width: 62,
        height: 62,
        borderRadius: 31,
        background: primary,
        display: "grid",
        placeItems: "center",
      }}
    >
      {icon}
    </div>
    <div style={{ display: "flex", gap: 18, alignItems: "baseline", color: primary }}>
      <span style={{ fontSize: 30, fontWeight: 400 }}>{label}</span>
      <span style={{ fontSize: 30, fontWeight: 300 }}>{value}</span>
    </div>
  </div>
);

const CoverMaster = ({
  thesisTitle,
  date,
  presenter,
}: {
  thesisTitle: string;
  date: string;
  presenter: string;
}) => (
  <div style={{ ...pageBase, background: "#FFFFFF" }}>
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 580,
        height: 580,
        background: primaryDark,
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
        background: primaryDark,
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
      <img
        src={campusPhoto}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
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
        left: 260,
        right: 260,
        top: 214,
        height: 590,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: primary,
      }}
    >
      <img src={njuWordmark} alt="南京大学" style={{ width: 520, height: "auto", objectFit: "contain" }} />
      <h1
        style={{
          margin: "76px 0 0",
          fontFamily: displayFont,
          fontSize: 82,
          lineHeight: 1.08,
          fontWeight: 300,
          color: primary,
          borderBottom: `3px solid ${primary}`,
          paddingBottom: 8,
        }}
      >
        毕业答辩
      </h1>
      <p
        style={{
          margin: "48px 0 0",
          fontFamily: bodyFont,
          fontSize: 34,
          lineHeight: 1.45,
          fontWeight: 300,
          textAlign: "center",
          color: primary,
          maxWidth: 1120,
        }}
      >
        {thesisTitle}
      </p>
      <div style={{ display: "flex", gap: 66, alignItems: "center", marginTop: 62 }}>
        <InfoItem icon={<CalendarIcon />} label="日期：" value={date} />
        <InfoItem icon={<PresenterIcon />} label="答辩人：" value={presenter} />
      </div>
    </main>
  </div>
);

const PageHeader = ({
  part,
  title,
  section,
}: {
  part: string;
  title: string;
  section: string;
}) => (
  <header style={{ position: "relative", paddingTop: 54 }}>
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 44,
        width: 128,
        height: 42,
        background: primary,
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontSize: 24,
        fontWeight: 700,
      }}
    >
      {part}
    </div>
    <div style={{ marginLeft: 158, color: primary, fontSize: 24, fontWeight: 700 }}>{section}</div>
    <h2
      style={{
        margin: "16px 0 0 158px",
        fontFamily: displayFont,
        fontSize: 58,
        lineHeight: 1.16,
        fontWeight: 600,
        color: ink,
      }}
    >
      {title}
    </h2>
  </header>
);

const Footer = ({ part, page, total }: { part: string; page: number; total: number }) => (
  <footer
    style={{
      position: "absolute",
      left: 120,
      right: 120,
      bottom: 34,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      color: inkFaint,
      fontSize: 18,
      borderTop: `1px solid ${rule}`,
      paddingTop: 14,
    }}
  >
    <span>{part}</span>
    <span style={{ textAlign: "center" }}>南京大学硕士论文答辩</span>
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
      background: primary,
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

const CoverSlide: Page = () => (
  <CoverMaster
    thesisTitle="基于异地多活架构的 OAuth 2.1 授权系统的设计与实现"
    date="2026.04.26"
    presenter="卢同学"
  />
);

const ArchitectureSlide: Page = () => {
  const lanes = [
    ["接入层", "统一入口、限流、身份上下文"],
    ["授权核心", "授权码、令牌、会话与策略"],
    ["多活协调", "跨地域状态同步与故障切换"],
    ["观测测试", "指标、日志、压测与验收"],
  ];

  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="02" section="System Design" title="系统设计页用架构图说明边界、路径和工程取舍" />
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 34, marginTop: 50 }}>
        <div style={{ background: panel, border: `2px solid ${rule}`, padding: 30, minHeight: 560 }}>
          <div style={{ color: primary, fontSize: 30, fontWeight: 700, marginBottom: 30 }}>五视图闭环</div>
          {["需求视图", "用例视图", "逻辑视图", "过程视图", "部署视图"].map((item, index) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                minHeight: 78,
                borderBottom: index === 4 ? "none" : `1px solid ${rule}`,
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 23,
                  background: index === 2 ? primary : primarySoft,
                  color: index === 2 ? "#fff" : primary,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </div>
              <div style={{ fontSize: 30, color: ink, fontWeight: 600 }}>{item}</div>
            </div>
          ))}
        </div>
        <div style={{ background: panel, border: `2px solid ${rule}`, padding: 30, minHeight: 560 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, alignItems: "stretch" }}>
            {lanes.map(([name, desc], index) => (
              <div
                key={name}
                style={{
                  minHeight: 380,
                  border: `2px solid ${index === 1 ? primary : rule}`,
                  background: index === 1 ? primarySoft : "#FAF9FB",
                  padding: 22,
                  display: "grid",
                  gridTemplateRows: "auto 1fr auto",
                }}
              >
                <div style={{ color: index === 1 ? primary : inkSoft, fontSize: 28, fontWeight: 700 }}>{name}</div>
                <div style={{ alignSelf: "center", height: 96, borderLeft: `5px solid ${index === 2 ? systemBlue : primary}`, marginLeft: 12 }} />
                <p style={{ color: inkSoft, fontSize: 23, lineHeight: 1.35, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, background: "#F4EFF6", border: `1px solid ${rule}`, padding: 22, fontSize: 26, color: inkSoft }}>
            工程型页面要同时展示系统边界、运行路径、模块职责与取舍，而不是只放一张装饰性框图。
          </div>
        </div>
      </div>
      <ClaimStrip>设计页必须回答“为什么这样设计”，并在后续实现页和测试页中被验证。</ClaimStrip>
      <Footer part="系统设计" page={2} total={3} />
    </div>
  );
};

const TestSlide: Page = () => {
  const rows = [
    ["FR-01", "授权码流程", "18 个用例", "通过", success],
    ["NFR-02", "跨地域切换", "RTO < 30s", "通过", success],
    ["NFR-03", "高并发授权", "P95 < 200ms", "达标", success],
    ["Risk-01", "弱网重试", "异常注入", "需优化", risk],
  ];

  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="04" section="System Testing" title="测试页把需求、指标、环境和验收结论放在同一张证据表里" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22, marginTop: 46 }}>
        {[
          ["测试环境", "双地域部署、统一网关、独立数据库实例"],
          ["测试数据", "授权码、刷新令牌、异常会话与并发请求"],
          ["验收口径", "功能通过率、P95 延迟、故障切换时间"],
        ].map(([label, text]) => (
          <div key={label} style={{ background: panel, border: `2px solid ${rule}`, padding: 26, minHeight: 140 }}>
            <div style={{ color: primary, fontSize: 25, fontWeight: 700 }}>{label}</div>
            <div style={{ marginTop: 14, color: ink, fontSize: 27, lineHeight: 1.35 }}>{text}</div>
          </div>
        ))}
      </div>
      <div style={{ background: panel, border: `2px solid ${rule}`, marginTop: 26, padding: 30 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1.2fr 1fr 140px",
            color: primary,
            fontSize: 24,
            fontWeight: 700,
            borderBottom: `2px solid ${primary}`,
            paddingBottom: 16,
          }}
        >
          <span>需求编号</span>
          <span>测试对象</span>
          <span>指标/样本</span>
          <span>结论</span>
        </div>
        {rows.map(([id, target, metric, result, color]) => (
          <div
            key={id}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1.2fr 1fr 140px",
              alignItems: "center",
              minHeight: 72,
              borderBottom: `1px solid ${rule}`,
              fontSize: 25,
              color: ink,
            }}
          >
            <span style={{ fontWeight: 700, color: primary }}>{id}</span>
            <span>{target}</span>
            <span style={{ color: inkSoft }}>{metric}</span>
            <span style={{ color: String(color), fontWeight: 700 }}>{result}</span>
          </div>
        ))}
      </div>
      <ClaimStrip>工程型总结必须能回指需求、设计、实现和测试证据，不能只写“完成了系统”。</ClaimStrip>
      <Footer part="系统测试" page={3} total={3} />
    </div>
  );
};

export default [CoverSlide, ArchitectureSlide, TestSlide] satisfies Page[];
