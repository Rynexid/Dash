import { useEffect, useState } from "react"
import {
  Music,
  ListMusic,
  Headphones,
  SlidersHorizontal,
  Radio,
  Repeat,
  Mic2,
  Library,
  Languages,
  Shield,
  LayoutDashboard,
  Timer,
  Star,
} from "lucide-react"
import { cn } from "@/lib/cn"

interface Feature {
  icon: typeof Music
  label: string
  desc: string
  featured?: boolean
}

const SLIDE_SIZE = 4

const SHAPES = [
  {
    cls: "absolute -bottom-24 -right-24 h-56 w-56",
    shape: (
      <circle cx="50%" cy="50%" r="38%" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="13" />
    ),
  },
  {
    cls: "absolute -top-14 -right-16 h-40 w-40",
    shape: <path d="M10 50 A40 40 0 0 0 90 50 Z" fill="rgba(255,255,255,0.06)" />,
  },
  {
    cls: "absolute -bottom-24 -right-20 h-48 w-48",
    shape: (
      <polygon
        points="50,16 58.8,39.9 84.2,40.9 64.3,56.6 71.2,81.1 50,67 28.8,81.1 35.7,56.6 15.8,40.9 41.2,39.9"
        fill="rgba(255,255,255,0.05)"
        strokeLinejoin="round"
      />
    ),
  },
  {
    cls: "absolute -bottom-24 -left-20 h-48 w-48",
    shape: (
      <rect x="18%" y="18%" width="64%" height="64%" rx="12%" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="13" />
    ),
  },
  {
    cls: "absolute -top-20 -left-16 h-44 w-44",
    shape: (
      <polygon
        points="90,50 70,84.6 30,84.6 10,50 30,15.4 70,15.4"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    ),
  },
  {
    cls: "absolute -bottom-24 -left-16 h-44 w-44",
    shape: (
      <polygon
        points="50,8 92,50 50,92 8,50"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    ),
  },
  {
    cls: "absolute -bottom-20 -right-20 h-44 w-44",
    shape: (
      <polygon
        points="50,8 92,80 8,80"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    ),
  },
  {
    cls: "absolute -top-24 -right-24 h-56 w-56",
    shape: <circle cx="50%" cy="50%" r="40%" fill="rgba(255,255,255,0.05)" />,
  },
  {
    cls: "absolute -bottom-20 -right-16 h-40 w-40",
    shape: <path d="M50 92 A42 42 0 0 1 92 50 L50 50 Z" fill="rgba(255,255,255,0.06)" />,
  },
  {
    cls: "absolute -top-14 -right-16 h-40 w-40",
    shape: (
      <path
        d="M44 10 h12 v20 h20 v12 h-20 v20 h-12 v-20 h-20 v-12 h20 Z"
        fill="rgba(255,255,255,0.05)"
      />
    ),
  },
  {
    cls: "absolute -top-20 -left-20 h-48 w-48",
    shape: (
      <polygon
        points="50,10 88,37.6 73.5,82.4 26.5,82.4 12,37.6"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    ),
  },
  {
    cls: "absolute -bottom-20 -left-16 h-40 w-40",
    shape: <rect x="16%" y="34%" width="68%" height="32%" rx="16%" fill="rgba(255,255,255,0.05)" />,
  },
]

const features: Feature[] = [
  {
    icon: Music,
    label: "High Quality Audio",
    desc: "Lossless-quality playback with crystal clear sound in every channel.",
    featured: true,
  },
  { icon: ListMusic, label: "Smart Queue", desc: "Intelligent queue that learns what your server wants to hear." },
  {
    icon: SlidersHorizontal,
    label: "Audio Filters",
    desc: "Bass boost, nightcore, vaporwave and more. Tune the sound to perfection.",
    featured: true,
  },
  { icon: Headphones, label: "24/7 Playback", desc: "Keep the music going around the clock, non-stop." },
  { icon: Radio, label: "AutoPlay", desc: "Seamlessly continues when the queue ends." },
  { icon: Repeat, label: "Loop & Shuffle", desc: "Repeat tracks or queues and shuffle on demand." },
  { icon: Mic2, label: "Synced Lyrics", desc: "Real-time lyrics that scroll with the music." },
  { icon: Library, label: "Playlists", desc: "Create, import and share playlists across sources." },
  { icon: Languages, label: "Multi-language", desc: "Rynote speaks the language your community prefers." },
  { icon: Shield, label: "Safe & Secure", desc: "Battle-tested, permission-aware and safe to add anywhere." },
  {
    icon: LayoutDashboard,
    label: "Live Dashboard",
    desc: "Full control from a beautiful web dashboard in real time.",
    featured: true,
  },
  { icon: Timer, label: "Seek, Forward & Rewind", desc: "Jump to any moment of a track, instantly." },
]

export function Features() {
  const items = features
  const slideCount = Math.ceil(items.length / SLIDE_SIZE)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), 4000)
    return () => clearInterval(id)
  }, [paused, slideCount])

  return (
    <section id="modules" className="relative border-t border-border py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">The all in one bot</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-[family-name:var(--font-heading)]">
            Rynote does it all
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-muted">
            Music, playlists, filters, and a full web dashboard. Packed into one bot.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {Array.from({ length: slideCount }).map((_, slide) => (
                <div key={slide} className="grid w-full shrink-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {items.slice(slide * SLIDE_SIZE, slide * SLIDE_SIZE + SLIDE_SIZE).map((item, pos) => {
                      const ring = SHAPES[(slide * SLIDE_SIZE + pos) % SHAPES.length]
                      return (
                      <div
                        key={item.label}
                        className={cn(
                          "glass group relative flex aspect-[1.4] flex-col justify-between overflow-hidden rounded-[25px] p-6 transition-all duration-300",
                          item.featured && "border-brand/40 hover:shadow-[0_0_40px_rgba(94,162,255,0.18)]"
                        )}
                      >
                        {/* Shape decoration */}
                        <svg viewBox="0 0 100 100" className={cn("pointer-events-none absolute", ring.cls)} aria-hidden="true">
                          {ring.shape}
                        </svg>

                        {/* Ambient glows */}
                        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/15 blur-2xl transition-opacity duration-300 group-hover:bg-brand/25" />
                        <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-brand-indigo/10 blur-2xl" />

                        {/* Chip + brand row */}
                        <div className="flex items-start justify-between">
                          <span
                            className={cn(
                              "flex h-11 w-11 items-center justify-center rounded-[13px] border border-white/10 bg-white/5",
                              item.featured && "bg-brand/20"
                            )}
                          >
                            <item.icon className={cn("h-5 w-5", item.featured ? "text-brand" : "text-brand/90")} />
                          </span>
                          {item.featured ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-brand/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand">
                              <Star className="h-3 w-3" /> Popular
                            </span>
                          ) : (
                            <span className="pt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted/60">
                              Rynote
                            </span>
                          )}
                        </div>

                        <div>
                          <h3 className="text-base font-semibold tracking-wide text-white/85 transition-colors group-hover:text-white">
                            {item.label}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-brand" : "w-1.5 bg-border hover:bg-text-muted"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
