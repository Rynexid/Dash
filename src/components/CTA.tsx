import { ArrowRight, MessageCircle } from "lucide-react"
import { LINKS } from "@/lib/links"
import { Button } from "@/components/ui/Button"

export function CTA() {
  return (
    <section className="relative border-t border-border py-20 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[32px] px-6 py-20 text-center sm:px-12 lg:py-28">
          {/* Brand gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #2D6CDF 0%, #4B88FF 45%, #5B5CFF 75%, #7867FF 100%)",
            }}
          />

          {/* Decorative shapes */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 460"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle cx="60" cy="70" r="130" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <circle cx="1050" cy="60" r="90" fill="rgba(255,255,255,0.08)" />
            <circle cx="1140" cy="360" r="150" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <polygon
              points="120,380 168,300 216,380"
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <rect x="1100" y="280" width="60" height="60" rx="14" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
            <path d="M300 60 A42 42 0 0 1 384 60 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M930 400 h16 v18 h18 v16 h-18 v18 h-16 v-18 h-18 v-16 h18 Z" fill="rgba(255,255,255,0.12)" />
          </svg>

          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.02em] mb-4 font-[family-name:var(--font-heading)] text-white">
              Ready to level up your server?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Add Rynote to your Discord server in one click. Free forever.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-brand hover:bg-white/90 hover:shadow-[0_15px_40px_rgba(0,0,0,.2)]">
                <a href={LINKS.invite} target="_blank" rel="noopener noreferrer">
                  Add to Server · Free
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:border-white/40"
              >
                <a href={LINKS.support} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Join Support Server
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}