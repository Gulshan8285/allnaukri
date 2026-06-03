import { ImageResponse } from "next/og";

export const alt = "All Naukri - All Jobs and Sarkari Naukri Updates";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #07131a 0%, #092436 58%, #06333b 100%)",
          color: "#e9f3f7",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%"
        }}
      >
        <div
          style={{
            border: "2px solid rgba(124, 236, 255, 0.22)",
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            height: "100%",
            justifyContent: "center",
            padding: 56,
            width: "100%"
          }}
        >
          <div style={{ color: "#08c7df", fontSize: 42, fontWeight: 900 }}>All Naukri</div>
          <div style={{ fontSize: 82, fontWeight: 950, lineHeight: 1.02 }}>
            All Jobs, Sarkari Naukri and Results
          </div>
          <div style={{ color: "#c7d6e1", fontSize: 32, fontWeight: 700, lineHeight: 1.35 }}>
            Latest government job updates, Sarkari Yojna and All Result information in one place.
          </div>
        </div>
      </div>
    ),
    size
  );
}
