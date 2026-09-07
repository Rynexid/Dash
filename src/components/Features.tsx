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
  MonitorSpeaker,
} from "lucide-react"

const features = [
  { icon: Music, label: "High Quality Audio" },
  { icon: ListMusic, label: "Smart Queue" },
  { icon: SlidersHorizontal, label: "Audio Filters" },
  { icon: Headphones, label: "24/7 Playback" },
  { icon: Radio, label: "AutoPlay" },
  { icon: Repeat, label: "Loop & Shuffle" },
  { icon: Mic2, label: "Synced Lyrics" },
  { icon: Library, label: "Playlists" },
  { icon: Languages, label: "Multi-language" },
  { icon: Shield, label: "Safe & Secure" },
  { icon: LayoutDashboard, label: "Live Dashboard" },
  { icon: Timer, label: "Seek, Forward & Rewind" },
]

export function Features() {
  return (
    <section id="modules" className="relative border-t border-border py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">The all in one bot</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-[family-name:var(--font-heading)]">
            Rynote does it all
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-muted">
            Music, playlists, filters, and a full web dashboard — packed into one bot.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="group flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 shadow-md transition-all duration-200 hover:border-brand/30 hover:bg-card"
            >
              <f.icon className="h-5 w-5 text-brand" />
              <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary">{f.label}</span>
            </div>
          ))}
          <div className="flex flex-col gap-3 rounded-lg border border-dashed border-border bg-surface/50 p-5">
            <MonitorSpeaker className="h-5 w-5 text-text-muted" />
            <span className="text-sm font-medium text-text-muted">And more...</span>
          </div>
        </div>
      </div>
    </section>
  )
}