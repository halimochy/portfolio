import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated at build time; used for link previews on social networks. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf8",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 36,
            background: "#2f5d50",
            color: "white",
            fontSize: 30,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, color: "#16181d", lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 40, color: "#2f5d50", marginTop: 16 }}>{profile.title}</div>
          <div style={{ fontSize: 26, color: "#757b87", marginTop: 24 }}>{profile.tagline}</div>
        </div>
      </div>
    ),
    size,
  );
}
