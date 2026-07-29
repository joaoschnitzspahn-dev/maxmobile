import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE.name} — Telefonia móvel premium`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#090909",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          MAX <span style={{ color: "#F31623" }}>MOBILE</span>
        </div>
        <div style={{ fontSize: 28, color: "#AFAFAF", marginTop: 16 }}>
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
