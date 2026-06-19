import { ImageResponse } from "next/og"
import { loadGoogleFont } from "@/lib/load-google-font"
import { getBlogPostBySlug } from "@/data/blog-posts"

export const alt = "Blog | Cakrawala EduCentre"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  const [interBold, interSemiBold, interRegular] = await Promise.all([
    loadGoogleFont("Inter", 700),
    loadGoogleFont("Inter", 600),
    loadGoogleFont("Inter", 400),
  ])

  const title = post
    ? post.title.length > 80
      ? post.title.slice(0, 77) + "..."
      : post.title
    : "Artikel Tidak Ditemukan"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #263559 0%, #1a2538 50%, #0f1a2b 100%)",
          position: "relative",
          overflow: "hidden",
          padding: 60,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {post && (
            <div
              style={{
                display: "flex",
                fontSize: 16,
                fontWeight: 600,
                color: "#ffffff",
                background: "rgba(255,255,255,0.15)",
                padding: "8px 20px",
                borderRadius: 20,
                alignSelf: "flex-start",
                marginBottom: 24,
              }}
            >
              {post.category}
            </div>
          )}

          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: 24,
              maxWidth: 850,
            }}
          >
            {title}
          </div>

          {post && (
            <div
              style={{
                display: "flex",
                gap: 32,
                fontSize: 18,
                color: "#93a3c7",
                fontWeight: 400,
              }}
            >
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            fontSize: 16,
            fontWeight: 600,
            color: "#93a3c7",
          }}
        >
          <span>Cakrawala EduCentre</span>
          <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.3)" }}>
            cakrawalaeducline.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
      ],
    }
  )
}
