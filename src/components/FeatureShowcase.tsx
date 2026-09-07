import { Sparkles } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/cn"
import { Play, Music, Headphones, ListMusic, Radio, Heart, Pause, SkipForward, Repeat, Volume2 } from "lucide-react"
import { Badge } from "@/components/ui/Badge"

type Tab = "nowplaying" | "queue" | "filters" | "playlist"

const tabs: { id: Tab; label: string }[] = [
  { id: "nowplaying", label: "Now Playing" },
  { id: "queue", label: "Smart Queue" },
  { id: "filters", label: "Audio Filters" },
  { id: "playlist", label: "Playlists" },
]

/* ─── Discord embed mockups ─────────────────────────────── */

function DiscordTop() {
  return (
    <div className="flex items-center gap-2.5 px-4 pt-4 pb-2">
      <img src="/RynoteLogo.png" alt="Rynote" className="h-8 w-8 rounded-full object-cover" />
      <div className="flex items-baseline gap-2">
        <span className="text-sm font-semibold text-[#e2e1eb]">Rynote</span>
        <span className="rounded-[4px] bg-brand px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white">APP</span>
        <span className="text-xs text-[#a19ea9]">Today at 12:00</span>
      </div>
    </div>
  )
}

function EmbedFrame({ color, accent, children }: { color: string; accent?: boolean; children: React.ReactNode }) {
  return (
    <div className="mx-4 my-2 flex gap-3 rounded-[8px] bg-[#23212b] px-4 pb-4 pt-3">
      <div className="w-[4px] shrink-0 rounded-full" style={{ background: color }} />
      <div className="min-w-0 flex-1">{children}</div>
      {accent && (
        <img src="/RynoteLogo.png" alt="" className="mt-0.5 h-12 w-12 shrink-0 rounded-[6px] object-cover" />
      )}
    </div>
  )
}

function EmbedRows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="mt-2 grid grid-cols-2 gap-2">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="text-[9px] font-semibold uppercase tracking-wide text-[#8a8794]">{r.label}</div>
          <div className="text-xs text-[#e2e1eb]">{r.value}</div>
        </div>
      ))}
    </div>
  )
}

function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="mt-2">
      <div className="h-1.5 w-full rounded-full bg-[#32303c]">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "#f73b8c" }} />
      </div>
      <div className="mt-0.5 flex justify-between text-[9px] text-[#8a8794]">
        <span>2:12</span>
        <span>4:03</span>
      </div>
    </div>
  )
}

function PlayerControls() {
  return (
    <div className="mt-2 flex items-center gap-3 text-[#e2e1eb]">
      <Repeat className="h-3.5 w-3.5 opacity-50" />
      <SkipForward className="h-3.5 w-3.5 -scale-x-100" />
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
        <Pause className="h-3.5 w-3.5" />
      </div>
      <SkipForward className="h-3.5 w-3.5" />
      <Volume2 className="h-3.5 w-3.5 opacity-50" />
    </div>
  )
}

const mockups: Record<Tab, () => React.ReactElement> = {
  nowplaying: () => (
    <>
      <DiscordTop />
      <EmbedFrame color="#f73b8c" accent>
        <div className="text-[10px] font-bold tracking-wider text-[#f73b8c]">RYNOTE • PLAYING</div>
        <div className="mt-0.5 text-sm font-semibold text-[#e2e1eb]">Midnight City</div>
        <div className="text-xs text-[#a19ea9]">M83 • Hurry Up, We're Dreaming</div>
        <ProgressBar pct={45} />
        <PlayerControls />
      </EmbedFrame>
    </>
  ),
  queue: () => (
    <>
      <DiscordTop />
      <EmbedFrame color="#5EA2FF">
        <div className="text-[10px] font-bold tracking-wider text-[#5EA2FF]">UP NEXT</div>
        <div className="mt-1.5 space-y-1.5">
          {[
            ["1", "Midnight City", "M83 • 4:03"],
            ["2", "Intro", "The xx • 2:07"],
            ["3", "Nightcall", "Kavinsky • 4:18"],
          ].map(([n, t, s]) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-3 text-xs text-[#8a8794]">{n}</span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-xs text-[#e2e1eb]">{t}</div>
                <div className="text-[10px] text-[#a19ea9]">{s}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-[#8a8794]">+ 17 more • 78:24 total</div>
      </EmbedFrame>
    </>
  ),
  filters: () => (
    <>
      <DiscordTop />
      <EmbedFrame color="#7867FF">
        <div className="text-[10px] font-bold tracking-wider text-[#7867FF]">AUDIO FILTERS</div>
        <div className="mt-1 text-sm font-semibold text-[#e2e1eb]">Bass Boost is on</div>
        <EmbedRows
          rows={[
            { label: "Bass", value: "+12 dB" },
            { label: "Pitch", value: "1.0x" },
            { label: "Speed", value: "1.0x" },
            { label: "Vibrato", value: "Off" },
          ]}
        />
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["bassboost", "superbass", "nightcore", "8bit", "vaporwave"].map((f) => (
            <span key={f} className="rounded-full bg-[#32303c] px-2 py-0.5 text-[10px] text-[#e2e1eb]">
              {f}
            </span>
          ))}
        </div>
      </EmbedFrame>
    </>
  ),
  playlist: () => (
    <>
      <DiscordTop />
      <EmbedFrame color="#22C55E">
        <div className="text-[10px] font-bold tracking-wider text-[#22C55E]">PLAYLIST • 24 SONGS</div>
        <div className="mt-0.5 text-sm font-semibold text-[#e2e1eb]">Late Night Drives</div>
        <div className="text-xs text-[#a19ea9]">Shared by riu • 1:37:00</div>
        <EmbedRows
          rows={[
            { label: "Created", value: "Aug 2026" },
            { label: "Plays", value: "128" },
            { label: "Last added", value: "2d ago" },
            { label: "Source", value: "Spotify" },
          ]}
        />
      </EmbedFrame>
    </>
  ),
}

/* ─── Icons chips ───────────────────────────────────────── */

const chips = [
  { icon: Play, label: "High quality" },
  { icon: Music, label: "Any source" },
  { icon: Headphones, label: "24/7 playback" },
  { icon: ListMusic, label: "Smart queue" },
  { icon: Radio, label: "AutoPlay" },
  { icon: Heart, label: "Favorites" },
]

export function FeatureShowcase() {
  const [tab, setTab] = useState<Tab>("nowplaying")
  const Mockup = mockups[tab]

  return (
    <section id="features" className="relative border-t border-border py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge variant="brand" className="mb-4">
              <Sparkles className="h-3 w-3" />
              Feature showcase
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-[family-name:var(--font-heading)]">
              Everything your server needs
            </h2>
            <p className="mt-3 max-w-lg text-text-muted">
              From flawless playback to deep queue control, Rynote brings the full music experience into Discord.
            </p>
          </div>

          {/* Tab pills */}
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

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Mockup */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-2xl border border-border bg-[#1b1a21] p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="rounded-[12px] bg-[#111014]">
                <Mockup />
              </div>
            </div>
          </div>

          {/* Chips */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {chips.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-brand/40"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-border/60 bg-bg-elevated/50 px-4 py-3 text-sm text-text-muted">
              Built on <span className="text-text-primary">Lavalink</span> with a live web dashboard for full control.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}