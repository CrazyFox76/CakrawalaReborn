export async function loadGoogleFont(font: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)",
      },
    }
  ).then((r) => r.text())

  const resource = css.match(/src: url\((.+?)\) format\('woff'\)/)
  if (!resource) throw new Error(`Failed to load Google Font: ${font} weight ${weight}`)

  return fetch(resource[1]).then((r) => r.arrayBuffer())
}
