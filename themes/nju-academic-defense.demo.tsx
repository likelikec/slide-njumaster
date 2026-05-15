import type React from "react";
import type { DesignSystem, Page } from "@open-slide/core";

const displayFont =
  '"Microsoft YaHei", "微软雅黑", "Microsoft YaHei UI", "Noto Sans CJK SC", "PingFang SC", sans-serif';
const bodyFont =
  '"Microsoft YaHei", "微软雅黑", "Noto Sans CJK SC", "PingFang SC", Arial, sans-serif';

export const design: DesignSystem = {
  palette: { bg: "#F8F6FA", text: "#1A171C", accent: "#6E0F6D" },
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
const ink = "#1A171C";
const inkSoft = "#4A4650";
const inkFaint = "#9D9EA0";
const rule = "#D8CEDF";
const panel = "#FFFFFF";

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

const TitleSlide: Page = () => (
  <CoverMaster thesisTitle="面向复杂任务的智能体协作方法研究" date="2026.04.26" presenter="李同学" />
);

const RoadmapSlide: Page = () => {
  const parts = [
    ["01", "研究背景与意义", "从真实痛点出发，明确研究缺口与目标"],
    ["02", "关键技术与方法", "先给整体架构，再展开核心模块"],
    ["03", "实验设计与分析", "按 RQ 组织证据，每页回答一个问题"],
    ["04", "总结", "贡献、局限与未来工作闭环"],
  ];

  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="01" section="Talk Roadmap" title="四段式结构把目标、方法、实验和贡献闭合起来" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 82 }}>
        {parts.map(([num, title, desc], index) => (
          <div
            key={num}
            style={{
              background: panel,
              border: `2px solid ${index === 0 ? primary : rule}`,
              minHeight: 430,
              padding: "34px 30px",
              display: "grid",
              gridTemplateRows: "auto auto 1fr",
              boxShadow: index === 0 ? "0 18px 34px rgba(84, 0, 73, 0.14)" : "none",
            }}
          >
            <div style={{ color: primary, fontSize: 54, fontWeight: 700 }}>{num}</div>
            <div style={{ marginTop: 30, color: ink, fontSize: 34, fontWeight: 700 }}>{title}</div>
            <p style={{ alignSelf: "end", color: inkSoft, fontSize: 26, lineHeight: 1.45, margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
      <ClaimStrip>学术型答辩不是复述论文，而是让评委快速看到：为什么做、怎么做、证据是什么、贡献在哪里。</ClaimStrip>
      <Footer part="研究背景与意义" page={2} total={3} />
    </div>
  );
};

const ResultSlide: Page = () => {
  const bars = [
    ["Baseline A", 72, inkFaint],
    ["Baseline B", 78, inkFaint],
    ["Ours", 91, primary],
  ];

  return (
    <div style={{ ...pageBase, padding: "0 120px 180px" }}>
      <PageHeader part="03" section="Experiment Design & Analysis" title="RQ1：协作规划显著提升复杂任务完成率" />
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 34, marginTop: 50 }}>
        <div style={{ background: panel, border: `2px solid ${rule}`, padding: 34, minHeight: 550 }}>
          <div style={{ color: primary, fontSize: 30, fontWeight: 700, marginBottom: 18 }}>任务完成率对比（%）</div>
          <svg width="920" height="430" viewBox="0 0 920 430" role="img" aria-label="任务完成率柱状图">
            <line x1="92" y1="338" x2="860" y2="338" stroke={rule} strokeWidth="2" />
            <line x1="92" y1="58" x2="92" y2="338" stroke={rule} strokeWidth="2" />
            {[0, 25, 50, 75, 100].map((tick) => {
              const y = 338 - tick * 2.8;
              return (
                <g key={tick}>
                  <line x1="86" y1={y} x2="860" y2={y} stroke={tick === 0 ? rule : "#ECE6EF"} strokeWidth="1" />
                  <text x="68" y={y + 8} textAnchor="end" fontFamily={bodyFont} fontSize="22" fill={inkFaint}>
                    {tick}
                  </text>
                </g>
              );
            })}
            {bars.map(([label, value, color], index) => {
              const x = 190 + index * 220;
              const height = Number(value) * 2.8;
              const y = 338 - height;
              return (
                <g key={label}>
                  <rect x={x} y={y} width="110" height={height} fill={String(color)} />
                  <text x={x + 55} y={y - 18} textAnchor="middle" fontFamily={bodyFont} fontSize="28" fontWeight="700" fill={String(color)}>
                    {value}%
                  </text>
                  <text x={x + 55} y="386" textAnchor="middle" fontFamily={bodyFont} fontSize="22" fill={inkSoft}>
                    {label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <div style={{ display: "grid", gap: 20 }}>
          {[
            ["研究问题", "协作规划是否改善复杂任务完成率？"],
            ["实验设置", "同一任务集、相同预算、三组方法对比。"],
            ["解释", "紫色柱表示本文方法；灰色柱表示基线方法。"],
          ].map(([label, text], index) => (
            <div
              key={label}
              style={{
                background: index === 0 ? primarySoft : panel,
                border: `2px solid ${index === 0 ? primary : rule}`,
                padding: "28px 30px",
              }}
            >
              <div style={{ color: index === 0 ? primary : inkSoft, fontSize: 24, fontWeight: 700 }}>{label}</div>
              <div style={{ marginTop: 14, color: ink, fontSize: 30, lineHeight: 1.42 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
      <ClaimStrip>结果页必须用一张图或表直接回答一个 RQ，并把本文贡献与基线方法区分开。</ClaimStrip>
      <Footer part="实验设计与分析" page={3} total={3} />
    </div>
  );
};

export default [TitleSlide, RoadmapSlide, ResultSlide] satisfies Page[];
