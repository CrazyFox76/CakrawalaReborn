import { ImageResponse } from "next/og"
import { loadGoogleFont } from "@/lib/load-google-font"

export const alt = "Cakrawala EduCentre | Les Privat & Bimbingan Belajar Terbaik"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const [interBold, interRegular] = await Promise.all([
    loadGoogleFont("Inter", 700),
    loadGoogleFont("Inter", 400),
  ])

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
          background: "linear-gradient(135deg, #263559 0%, #1a2538 50%, #0f1a2b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -180,
            width: 550,
            height: 550,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "Inter",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Cakrawala EduCentre
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#93a3c7",
              fontFamily: "Inter",
              letterSpacing: "0.01em",
              lineHeight: 1.5,
            }}
          >
            Les Privat & Bimbingan Belajar Terbaik
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            fontSize: 14,
            fontWeight: 400,
            color: "rgba(255,255,255,0.25)",
            fontFamily: "Inter",
            letterSpacing: "0.05em",
          }}
        >
          cakrawalaeducline.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
      ],
    }
  )
}
