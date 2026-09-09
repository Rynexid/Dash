import { useState } from "react"
import { cn } from "@/lib/cn"
import {
  Sparkles,
  Music,
  ListMusic,
  Settings,
  Heart,
  Pause,
  SkipForward,
  Volume2,
  Home,
  Library,
  Headphones,
  Radio,
  Users,
  Disc3,
  History,
  ChevronDown,
  BarChart3,
  RefreshCw,
  Search,
  Bell,
} from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"

type Tab = "nowplaying" | "queue" | "filters" | "playlist"

const tabs: { id: Tab; label: string }[] = [
  { id: "nowplaying", label: "Now Playing" },
  { id: "queue", label: "Smart Queue" },
  { id: "filters", label: "Audio Filters" },
  { id: "playlist", label: "Playlists" },
]

const nav = [
  { icon: Home, label: "Overview", active: true },
  { icon: Music, label: "Player" },
]

const stats = [
  { label: "Listening now", value: "12,483", icon: Radio, delta: "+18%" },
  { label: "Active servers", value: "8,512", icon: Users, delta: "+4.2%" },
  { label: "Tracks played", value: "1,204,391", icon: Music, delta: "+9.7%" },
  { label: "Queue length", value: "14", icon: ListMusic, delta: "3.1h" },
]

const bars = [40, 55, 38, 62, 48, 72, 58, 45, 66, 82, 70, 90]

const queueItems = [
  { t: "Midnight City", a: "M83", d: "4:03", now: true },
  { t: "Strobe", a: "deadmau5", d: "10:33", now: false },
  { t: "Nightcall", a: "Kavinsky", d: "4:18", now: false },
  { t: "Intro", a: "The xx", d: "2:07", now: false },
  { t: "Interstellar", a: "Hans Zimmer", d: "4:36", now: false },
]

const filterChips = ["bassboost", "superbass", "nightcore", "8bit", "vaporwave", "earrape"]

const playlists = [
  { name: "Chill Evenings", count: 42, dur: "2h 48m", cr: "bg-sky-400/70" },
  { name: "Gym Fuel", count: 28, dur: "1h 52m", cr: "bg-rose-400/70" },
  { name: "Lo-fi Focus", count: 57, dur: "3h 41m", cr: "bg-violet-400/70" },
  { name: "Road Trip", count: 33, dur: "2h 09m", cr: "bg-amber-400/70" },
]

function NowPlayingPanel() {
  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[14px] border border-border bg-bg-elevated p-4">
            <div className="flex items-center gap-2 text-text-muted mb-3">
              <s.icon className="h-3.5 w-3.5" />
              <span className="text-xs">{s.label}</span>
            </div>
            <p className="text-xl font-bold tracking-tight">{s.value}</p>
            <p className="mt-1 text-[11px] text-success">{s.delta} this week</p>
          </div>
        ))}
      </div>

      {/* Now playing + chart */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-3 mb-3">
        <div className="rounded-[14px] border border-border bg-bg-elevated p-4">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">Now Playing</p>
          <div className="flex items-center gap-3 mb-3">
            <img src="/RynoteLogo.png" alt="Now Playing Cover" className="h-12 w-12 rounded-[10px] object-cover" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Midnight City</p>
              <p className="truncate text-xs text-text-muted">M83 • Hurry Up, We&apos;re Dreaming</p>
            </div>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-1.5">
            <div className="h-full w-[45%] rounded-full gradient-brand" />
          </div>
          <div className="flex items-center justify-between text-[11px] text-text-muted mb-4">
            <span>1:48</span>
            <span>-2:14</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="text-text-muted hover:text-text-primary"><SkipForward className="h-4 w-4 rotate-180" /></button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-hover transition-colors"><Pause className="h-4 w-4" /></button>
            <button className="text-text-muted hover:text-text-primary"><SkipForward className="h-4 w-4" /></button>
            <button className="text-text-muted hover:text-text-primary"><Volume2 className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="rounded-[14px] border border-border bg-bg-elevated p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold">Listening activity</p>
              <p className="text-xs text-text-muted">Last 12 hours</p>
            </div>
            <Badge variant="success">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Live
            </Badge>
          </div>
          <div className="flex items-end gap-1.5 sm:gap-2 h-32">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className={`w-full rounded-md ${i >= bars.length - 1 ? "gradient-brand" : "bg-brand/25"}`}
                  style={{ height: `${h}px` }}
                />
                <span className="text-[10px] text-text-disabled">{i % 2 === 0 ? `${i}${i === 0 ? "" : "0"}:00` : ""}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function QueuePanel() {
  return (
    <div className="rounded-[14px] border border-border bg-bg-elevated p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold">Up next</p>
        <span className="text-xs text-text-muted">14 tracks • 3h 12m</span>
      </div>
      <div className="space-y-1">
        {queueItems.map((q) => (
          <div
            key={q.t}
            className={cn(
              "flex items-center gap-3 rounded-lg px-2 py-2",
              q.now ? "bg-brand/10 border border-brand/15" : "hover:bg-white/5"
            )}
          >
            {q.now ? (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand/20">
                <Music className="h-3 w-3 text-brand" />
              </span>
            ) : (
              <Disc3 className="h-4 w-4 shrink-0 text-text-muted" />
            )}
            <div className="min-w-0 flex-1">
              <p className={cn("truncate text-sm", q.now ? "font-semibold text-text-primary" : "text-text-secondary")}>{q.t}</p>
              <p className="truncate text-[11px] text-text-muted">{q.a}</p>
            </div>
            <span className="shrink-0 text-[11px] text-text-disabled">{q.d}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FiltersPanel() {
  return (
    <div className="rounded-[14px] border border-border bg-bg-elevated p-4">
      <div className="mb-4">
        <p className="text-sm font-semibold">Audio Filters</p>
        <p className="text-xs text-text-muted">Bass boost is active</p>
      </div>
      <div className="mb-4 space-y-3">
        {[
          { label: "Bass", value: "+12 dB", active: true },
          { label: "Pitch", value: "1.0x", active: false },
          { label: "Speed", value: "1.0x", active: false },
          { label: "Equalizer", value: "On", active: true },
        ].map((f) => (
          <div key={f.label} className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">{f.label}</span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-text-muted">{f.value}</span>
              <span className={cn("relative h-5 w-9 rounded-full transition-colors", f.active ? "bg-brand" : "bg-white/10")}>
                <span className={cn("absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all", f.active ? "left-4.5" : "left-0.5")} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {filterChips.map((f) => (
          <span key={f} className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-text-secondary">{f}</span>
        ))}
      </div>
    </div>
  )
}

function PlaylistPanel() {
  return (
    <div className="rounded-[14px] border border-border bg-bg-elevated p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">Your Playlists</p>
        <button className="flex h-7 items-center gap-1 rounded-full bg-brand/10 px-3 text-[11px] font-medium text-brand hover:bg-brand/20">
          <RefreshCw className="h-3 w-3" /> Create
        </button>
      </div>
      <div className="space-y-1">
        {playlists.map((p) => (
          <div key={p.name} className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${p.cr}`}>
              <Disc3 className="h-4 w-4 text-white/80" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-text-secondary">{p.name}</p>
              <p className="text-[11px] text-text-muted">Created Aug 2026</p>
            </div>
            <span className="shrink-0 text-[11px] text-text-disabled">{p.count} songs</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const panels: Record<Tab, React.ReactNode> = {
  nowplaying: <NowPlayingPanel />,
  queue: <QueuePanel />,
  filters: <FiltersPanel />,
  playlist: <PlaylistPanel />,
}

export function FeatureShowcase() {
  const [tab, setTab] = useState<Tab>("nowplaying")

  return (
    <section id="features" className="relative border-t border-border py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge variant="brand" className="mb-4">
              <Sparkles className="h-3 w-3" />
              Feature showcase
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-[family-name:var(--font-heading)]">
              Everything your server needs
            </h2>
            <p className="mt-3 max-w-lg text-text-muted">
              Control playback, queue, filters, and playlists straight from the live dashboard.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "h-10 rounded-full border px-5 text-sm font-medium transition-all duration-200",
                  tab === t.id
                    ? "border-brand/30 bg-brand/10 text-brand"
                    : "border-border bg-surface text-text-muted hover:border-brand/30 hover:text-text-primary"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 flex-1 truncate rounded-lg bg-bg-elevated px-3 py-1 text-xs text-text-muted">
                dashboard.rynote.app/overview
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
              {/* Sidebar */}
              <div className="hidden md:block border-r border-border p-4">
                <div className="flex items-center gap-2 px-3 py-2 mb-4">
                  <Headphones className="h-4 w-4 text-brand" />
                  <span className="text-sm font-semibold">Rynote</span>
                </div>
                {nav.map((item) => (
                  <div
                    key={item.label}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 rounded-[10px] text-sm transition-colors",
                      item.active ? "bg-brand/10 text-brand" : "text-text-muted hover:text-text-primary hover:bg-white/5"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </div>
                ))}

                {/* Your Library group */}
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="px-3 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-disabled">
                    Your Library
                  </p>
                  <div className="flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2 text-sm text-text-secondary">
                    <ListMusic className="h-4 w-4" />
                    Queue
                    <ChevronDown className="ml-auto h-3.5 w-3.5 text-text-muted" />
                  </div>
                  <div className="mt-1 mb-1 space-y-1 rounded-[10px] border border-border bg-bg-elevated p-2">
                    {queueItems.slice(0, 4).map((q) => (
                      <div
                        key={q.t}
                        className={cn("flex items-center justify-between gap-2 rounded-lg px-2 py-1", q.now ? "bg-white/5" : "")}
                      >
                        {q.now ? (
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-white/10">
                            <Music className="h-2.5 w-2.5 text-text-muted" />
                          </span>
                        ) : (
                          <span className="h-4 w-4 shrink-0 rounded bg-white/5" />
                        )}
                        <span className={cn("truncate text-xs", q.now ? "font-semibold text-text-primary" : "text-text-muted")}>
                          {q.t}
                        </span>
                        <span className="shrink-0 text-[10px] text-text-disabled">{q.d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2 text-sm text-text-secondary">
                    <Library className="h-4 w-4" />
                    Playlists
                    <ChevronDown className="ml-auto h-3.5 w-3.5 text-text-muted" />
                  </div>
                  <div className="mt-1 mb-1 space-y-0.5 rounded-[10px] border border-border bg-bg-elevated p-2">
                    {playlists.map((p) => (
                      <div key={p.name} className="flex items-center gap-2.5 rounded-[8px] px-2 py-1.5">
                        <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${p.cr}`}>
                          <Disc3 className="h-2.5 w-2.5 text-white/80" />
                        </span>
                        <span className="min-w-0 flex-1 truncate text-xs text-text-muted">{p.name}</span>
                        <span className="shrink-0 text-[10px] text-text-disabled">{p.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other nav */}
                <div className="mt-2 space-y-1">
                  {[
                    { icon: Heart, label: "Favorites" },
                    { icon: History, label: "History" },
                    { icon: BarChart3, label: "Statistics" },
                    { icon: Settings, label: "Settings" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-[10px] text-sm text-text-muted transition-colors hover:text-text-primary hover:bg-white/5"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main */}
              <div className="p-5 lg:p-6 min-w-0">
                {/* Topbar */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative flex-1 max-w-xs">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <input
                      className="w-full rounded-lg border border-border bg-bg-elevated py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-brand"
                      placeholder="Search tracks, playlists..."
                      readOnly
                    />
                  </div>
                  <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted hover:text-text-primary">
                    <Bell className="h-4 w-4" />
                    <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-white">2</span>
                  </button>
                  <div className="ml-auto flex items-center gap-2.5">
                    <div className="hidden sm:block text-right">
                      <p className="text-xs font-semibold leading-tight">Soraku</p>
                      <p className="text-[11px] text-text-muted leading-tight">Connected</p>
                    </div>
                    <div className="h-9 w-9 rounded-full gradient-brand flex items-center justify-center text-sm font-bold text-white">S</div>
                  </div>
                </div>

                {panels[tab]}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}