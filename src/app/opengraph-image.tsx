import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE.name} — Telefonia móvel premium`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(243, 22, 35, 0.2)",
            filter: "blur(80px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(243,22,35,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(243,22,35,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-2px",
            }}
          >
            MAX{" "}
            <span style={{ color: "#F31623" }}>MOBILE</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#AFAFAF",
              textAlign: "center",
              maxWidth: 700,
            }}
          >
            {SITE.tagline}
          </div>
          <div
            style={{
              marginTop: 16,
              padding: "12px 32px",
              background: "#F31623",
              borderRadius: 999,
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            maxmobile.com.br
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
