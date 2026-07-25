import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#081317",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#102a43",
            border: "2px solid #294851",
            borderRadius: 18,
            display: "flex",
            height: 52,
            position: "relative",
            width: 52,
          }}
        >
          <div
            style={{
              background: "#f4f8f9",
              borderRadius: 4,
              height: 28,
              left: 14,
              position: "absolute",
              top: 12,
              width: 6,
            }}
          />
          <div
            style={{
              background: "#f4f8f9",
              borderRadius: 4,
              height: 28,
              position: "absolute",
              right: 14,
              top: 12,
              width: 6,
            }}
          />
          <div
            style={{
              background: "#52d3a4",
              borderRadius: 4,
              height: 6,
              left: 16,
              position: "absolute",
              top: 23,
              width: 20,
            }}
          />
          <div
            style={{
              background: "#f28c28",
              border: "2px solid #102a43",
              borderRadius: 999,
              height: 11,
              position: "absolute",
              right: 3,
              top: 3,
              width: 11,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
