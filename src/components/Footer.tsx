import { Heart } from "lucide-react"
import { LINKS } from "@/lib/links"

const resources = [
  { label: "Commands", href: "#commands" },
  { label: "Features", href: "#features" },
  { label: "Stats", href: "#stats" },
  { label: "FAQ", href: "#faq" },
]

const community = [
  { label: "Invite Rynote", href: LINKS.invite, external: true },
  { label: "Support server", href: LINKS.support, external: true },
  { label: "GitHub", href: LINKS.github, external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="/" className="flex items-center gap-2.5">
              <img src="/RynoteLogo.png" alt="Rynote" className="h-8 w-8 rounded-[10px] object-cover" />
              <span className="text-base font-bold tracking-tight font-[family-name:var(--font-heading)]">Rynote</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Music that moves your server — high-quality playback, playlists, filters, and a live dashboard.
            </p>
            <div className="mt-5">
              <a
                href={LINKS.invite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-brand px-5 text-sm font-medium text-white transition-all hover:bg-brand-hover hover:shadow-[0_15px_40px_rgba(94,162,255,.18)]"
              >
                Add to Server
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Resources">
              {resources.map((r) => (
                <FooterLink key={r.label} href={r.href}>
                  {r.label}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Community">
              {community.map((r) => (
                <FooterLink key={r.label} href={r.href} external={r.external}>
                  {r.label}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Support">
              <span className="block text-sm text-text-muted">Need help or have ideas?</span>
              <FooterLink href={LINKS.support} external>
                Join the Discord
              </FooterLink>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <div className="text-xs text-text-disabled">© 2026 Rynote. All rights reserved.</div>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            Made with <Heart className="h-3 w-3 text-danger fill-danger" /> by{" "}
            <a
              href={LINKS.poweredBy}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              Rynex
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-sm font-semibold text-text-primary">{title}</div>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block text-sm text-text-muted transition-colors hover:text-text-primary"
    >
      {children}
    </a>
  )
}