import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Daily Oracle — Your Daily Fortune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "linear-gradient(135deg, #78350f 0%, #d97706 50%, #fbbf24 100%)", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 96, marginBottom: 16 }}>✨</div>
        <div style={{ fontSize: 64, fontWeight: 800, color: "#ffffff", marginBottom: 16, letterSpacing: "-1px" }}>Daily Oracle</div>
        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>Draw Your Fortune — Career, Love, Wealth & Health</div>
        <div style={{ marginTop: 40, background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 28px", fontSize: 22, color: "rgba(255,255,255,0.9)" }}>daily-oracle.vercel.app</div>
      </div>
    ),
    { ...size }
  );
}
