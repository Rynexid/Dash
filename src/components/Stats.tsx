import { useEffect, useState } from "react"
import { Server, Users, Music, Zap } from "lucide-react"
import { apiGet } from "@/lib/api"

interface BotStats {
  guilds: number
  users: number
  commands: number
  uptime: string
  uptimeMs: number
  node: { connected: boolean; nodes: { name: string; status: string }[] }
  version: string
}

export function Stats() {
  const [stats, setStats] = useState<BotStats | null>(null)

  useEffect(() => {
    apiGet<BotStats>("/v1/bot")
      .then(setStats)
      .catch(() => setStats(null))
  }, [])

  const UPTIME_FALLBACK = "N/A"
  const uptime = stats?.uptime ?? UPTIME_FALLBACK

  const items = [
    { icon: Server, label: "Servers", value: stats?.guilds },
    { icon: Users, label: "Users", value: stats?.users },
    { icon: Music, label: "Commands", value: stats?.commands },
    { icon: Zap, label: "Uptime", value: uptime !== UPTIME_FALLBACK ? uptime : UPTIME_FALLBACK },
  ]

  return (
    <section id="stats" className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mx-auto max-w-3xl text-center text-3xl text-text-muted sm:text-5xl font-[family-name:var(--font-script)] leading-[1.3]">
          <span className="inline-block translate-x-[calc(25%+1.5cm)] -translate-y-[calc(2.5rem+18%)] -rotate-3">Trusted by</span>{" "}
          <span className="inline-block translate-x-6 -translate-y-3 -rotate-3 text-4xl sm:text-6xl text-brand underline decoration-brand/60 decoration-[3px] underline-offset-8">
            {typeof stats?.guilds === "number" ? stats.guilds.toLocaleString() : "hundreds of"}
          </span>{" "}
          <span className="inline-block -translate-x-[calc(35%+0.75rem)] translate-y-6 rotate-2">communities</span>
        </p>
        <p className="mt-2 text-center text-sm text-text-disabled font-[family-name:var(--font-script-soft)]">
          {stats ? `v${stats.version}` : "Live data from the bot"}
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                <item.icon className="h-4 w-4" />
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
                {typeof item.value === "number" ? item.value.toLocaleString() : item.value}
              </div>
              <div className="text-xs text-text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}