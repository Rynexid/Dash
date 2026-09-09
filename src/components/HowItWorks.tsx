import { Link2, ListMusic, Play } from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { DiscordIcon } from "@/components/ui/DiscordIcon"
import { AddToServerButton } from "@/components/AddToServerButton"

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Invite Rynote",
    text: "Add Rynote to your server with a single click. No config files, no setup wizard. It just works.",
  },
  {
    icon: ListMusic,
    step: "02",
    title: "Pick a source",
    text: "Play from YouTube, Spotify, SoundCloud, or any link. Search by name or drop a URL straight in.",
  },
  {
    icon: Play,
    step: "03",
    title: "Enjoy the music",
    text: "Control everything from Discord or the live web dashboard. Filters, queue, playlists, all at your fingertips.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative border-t border-border py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center lg:mb-16">
          <Badge variant="brand" className="mb-4">
            How it works
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-[family-name:var(--font-heading)]">
            Up and running in seconds
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-muted">
            Three steps between you and flawless music in your Discord server.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent md:block" />
          {steps.map(({ icon: Icon, step, title, text }) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-brand/30 bg-surface shadow-[0_8px_30px_rgba(94,162,255,0.12)]">
                <Icon className="h-8 w-8 text-brand" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  {step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-heading)]">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <AddToServerButton size="lg">
              <DiscordIcon className="h-4 w-4" />
              Start listening now
            </AddToServerButton>
        </div>
      </div>
    </section>
  )
}
