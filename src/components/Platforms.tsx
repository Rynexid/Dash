import { useEffect } from "react"

const platforms = [
  { name: "YouTube", src: "/source/youtube.svg" },
  { name: "Spotify", src: "/source/spotify.svg" },
  { name: "SoundCloud", src: "/source/soundcloud.svg" },
  { name: "HTTP Streams", src: "/source/link.svg" },
  { name: "Twitch", src: "/source/twitch.svg" },
  { name: "Deezer", src: "/source/deezer.svg" },
  { name: "iTunes", src: "/source/itunes.svg" },
]

const REFRESH_MS = 3 * 60 * 1000

export function Platforms() {
  useEffect(() => {
    const id = setInterval(() => window.location.reload(), REFRESH_MS)
    return () => clearInterval(id)
  }, [])

  const loop = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <section className="relative overflow-hidden border-t border-border/40 pt-6 pb-8 lg:pb-10">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
          {loop.map((i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
              {platforms.map((p) => (
                <div key={p.name} className="flex shrink-0 items-center gap-3" title={p.name}>
                  <img src={p.src} alt={p.name} className="h-[15px] w-auto" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
