import { cn } from "@/lib/cn"

export function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 19" className={cn("fill-current", className)} aria-hidden="true">
      <use href="/icons.svg#discord-icon" />
    </svg>
  )
}