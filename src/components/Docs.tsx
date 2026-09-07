import { BookOpen, Compass, Users, ArrowRight } from "lucide-react"
import { LINKS } from "@/lib/links"

const cards = [
  {
    icon: BookOpen,
    title: "Extensive Documentation",
    text: "Every command documented — slash and prefix — with real usage examples.",
    href: LINKS.invite,
  },
  {
    icon: Compass,
    title: "Easy to Set Up",
    text: "Add the bot, type your prefix, and start playing. No config required.",
    href: LINKS.invite,
  },
  {
    icon: Users,
    title: "Community Driven",
    text: "Request features and report bugs in the official Rynote community server.",
    href: LINKS.support,
  },
]

export function Docs() {
  return (
    <section className="relative border-t border-border py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Everything you need</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-[family-name:var(--font-heading)]">
            Clear, simple, ready to use
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-muted">
            Get the most out of Rynote without touching a single config file.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex flex-col rounded-lg border border-border bg-surface p-6 shadow-md transition-all duration-200 hover:border-brand/30 hover:bg-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-text-primary">{c.title}</div>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-text-muted">{c.text}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}