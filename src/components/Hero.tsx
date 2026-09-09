import { ArrowRight, Play, AudioLines, ListMusic, LayoutDashboard } from "lucide-react"
import { useEffect, useState } from "react"
import { LINKS } from "@/lib/links"
import { Button } from "@/components/ui/Button"

const FEATURES = [
  { icon: AudioLines, label: "Lossless audio" },
  { icon: ListMusic, label: "Smart queue" },
  { icon: LayoutDashboard, label: "Live dashboard" },
]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % FEATURES.length), 5000)
    return () => clearInterval(id)
  }, [])

  const current = FEATURES[index]

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Hero image, full width cinematic */}
      <div className="absolute inset-0">
        {/* Bottom fade */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(9,9,11,1) 0%, rgba(9,9,11,.5) 25%, transparent 55%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,9,11,.6) 0%, transparent 30%)",
          }}
        />
        {/* Soft blue radial glow */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(94,162,255,.1), transparent 70%)",
          }}
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(9,9,11,.5) 100%)",
          }}
        />
        <img
          src="/Hero.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "contrast(1.05) saturate(0.95)" }}
        />

        {/* Audio visualizer accent, bottom of image */}
        <div
          className="hidden lg:flex absolute z-20 right-[8%] bottom-16 items-end gap-1 h-9"
          aria-hidden="true"
        >
          {[14, 26, 36, 20, 30, 12].map((h, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-brand to-sky-200 opacity-80 animate-pulse"
              style={{ height: h, animationDelay: `-${(6 - i) * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[150px] animate-pulse-subtle" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-[1200px] px-6 w-full">
        <div className="max-w-xl">
          <div className="animate-fade-in-left">
            <div
              key={current.label}
              className="mb-6 flex items-center gap-2 text-sm text-text-muted animate-fade-in-up"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                <current.icon className="h-3 w-3 text-brand" />
              </span>
              {current.label}
            </div>
          </div>

          <h1
            className="text-5xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 font-[family-name:var(--font-heading)] animate-fade-in-left"
            style={{ animationDelay: "0.1s" }}
          >
            Your server&apos;s soundtrack,
            <br />
            one click <span className="gradient-text">away</span>.
          </h1>

          <p
            className="text-lg text-text-muted max-w-md mb-10 leading-relaxed animate-fade-in-left"
            style={{ animationDelay: "0.2s" }}
          >
            Music, playlists, smart queues, and a live dashboard. Everything your server needs,
            in one bot.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in-left"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" asChild>
              <a href={LINKS.invite} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4" />
                Add to Server
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={LINKS.support} target="_blank" rel="noopener noreferrer">
                Join Discord
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
