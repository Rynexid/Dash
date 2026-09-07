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

  const uptime = stats?.uptime ?? "—"

  const items = [
    { icon: Server, label: "Servers", value: stats?.guilds },
    { icon: Users, label: "Users", value: stats?.users },
    { icon: Music, label: "Commands", value: stats?.commands },
    { icon: Zap, label: "Uptime", value: uptime !== "—" ? uptime : "—" },
  ]

  return (
    <section id="stats" className="border-t border-border py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mx-auto max-w-xl text-center text-xl italic text-text-muted sm:text-2xl">
          Trusted by{" "}
          <span className="font-serif font-semibold text-text-primary">
            {typeof stats?.guilds === "number" ? stats.guilds.toLocaleString() : "hundreds of"}
          </span>{" "}
          communities
        </p>
        <p className="mt-2 text-center text-sm text-text-disabled">
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