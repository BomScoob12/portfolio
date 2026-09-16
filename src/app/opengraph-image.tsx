import { ImageResponse } from "next/og";
export const alt = "Sarawit Kraukham — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
        background: "#080e1b",
        color: "#edf2fb",
      }}
    >
      <div style={{ fontSize: 25, color: "#86aeff", letterSpacing: 5 }}>
        BOM / SOFTWARE ENGINEER
      </div>
      <div style={{ fontSize: 83, marginTop: 36, fontWeight: 700 }}>
        Sarawit Kraukham.
      </div>
      <div style={{ fontSize: 35, marginTop: 28, color: "#a4afc2" }}>
        Thoughtful code. Useful experiences.
      </div>
      <div style={{ fontSize: 22, marginTop: 55, color: "#86aeff" }}>
        Bangkok, Thailand
      </div>
    </div>,
    { ...size },
  );
}
