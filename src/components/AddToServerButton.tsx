import { useEffect, useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/Button"
import { DiscordIcon } from "@/components/ui/DiscordIcon"
import { authClient } from "@/lib/auth"
import { LINKS } from "@/lib/links"
import { cn } from "@/lib/cn"

function useSession() {
  const [loading, setLoading] = useState(true)
  const [me, setMe] = useState<{ name?: string; image?: string | null } | null>(null)

  useEffect(() => {
    let active = true
    authClient.getSession()
      .then(({ data }) => {
        if (active) setMe(data?.user ?? null)
      })
      .catch(() => null)
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [])

  return { loading, me }
}

function handleClick(me: { name?: string; image?: string | null } | null) {
  if (me) {
    window.open(LINKS.invite, "_blank", "noopener,noreferrer")
    return
  }
  authClient.signIn.social({ provider: "discord" })
}

type Props = Omit<ButtonProps, "asChild" | "onClick" | "children"> & {
  full?: boolean
  children?: React.ReactNode
}

export function AddToServerButton({ className, full = false, children, ...props }: Props) {
  const { loading, me } = useSession()

  if (full) {
    return (
      <Button variant="primary" size="md" className={cn("w-full", className)} disabled={loading} {...props} onClick={() => handleClick(me)}>
        {children ?? (
          <>
            <DiscordIcon className="h-4 w-4" />
            Add to Server
          </>
        )}
      </Button>
    )
  }

  return (
    <Button variant="primary" size="sm" className={className} disabled={loading} {...props} onClick={() => handleClick(me)}>
      {children ?? (
        <>
          <DiscordIcon className="h-3.5 w-3.5" />
          Add to Server
        </>
      )}
    </Button>
  )
}