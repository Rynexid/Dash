import { useState } from "react"
import { Menu, X, Sparkles, SquareTerminal, Activity, LifeBuoy, type LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { LINKS } from "@/lib/links"
import { AddToServerButton } from "@/components/AddToServerButton"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/60 glass">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-1">
          <a href="/" className="-ml-5 flex items-center gap-2.5">
            <img src="/RynoteLogo.png" alt="Rynote" className="h-15 w-15 rounded-[12px] object-cover" />
            <span className="text-[22px] font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Rynote
            </span>
          </a>

          <div className="ml-6 hidden md:flex items-center gap-1">
            <NavLink href="/features" icon={Sparkles}>Features</NavLink>
            <NavLink href="/commands" icon={SquareTerminal}>Commands</NavLink>
            <NavLink href="/stats" icon={Activity}>Stats</NavLink>
            <NavLink href={LINKS.support} icon={LifeBuoy}>Support</NavLink>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <AddToServerButton />
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-1">
            <MobileNavLink href="/features" icon={Sparkles} onClick={() => setMobileOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="/commands" icon={SquareTerminal} onClick={() => setMobileOpen(false)}>Commands</MobileNavLink>
            <MobileNavLink href="/stats" icon={Activity} onClick={() => setMobileOpen(false)}>Stats</MobileNavLink>
            <MobileNavLink href={LINKS.support} icon={LifeBuoy} onClick={() => setMobileOpen(false)}>Support</MobileNavLink>
            <div className="pt-2 space-y-2">
              <AddToServerButton full />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function NavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: LucideIcon }) {
  const isExternal = href.startsWith("http")
  const className =
    "inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium text-text-muted hover:text-text-primary transition-colors rounded-[10px] hover:bg-white/5"
  const inner = (
    <>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </>
  )
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={href} className={className}>
      {inner}
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
  icon: Icon,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
  icon?: LucideIcon
}) {
  const isExternal = href.startsWith("http")
  const className =
    "flex items-center gap-2.5 px-4 py-2.5 text-sm text-text-muted hover:text-text-primary transition-colors rounded-[10px] hover:bg-white/5"
  const inner = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </>
  )
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={href} onClick={onClick} className={className}>
      {inner}
    </Link>
  )
}