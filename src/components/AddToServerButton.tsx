import { useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/Button"
import { DiscordIcon } from "@/components/ui/DiscordIcon"
import { LINKS } from "@/lib/links"
import { cn } from "@/lib/cn"
import { authClient } from "@/lib/auth"

type Props = Omit<ButtonProps, "asChild" | "onClick" | "children"> & {
  full?: boolean
  children?: React.ReactNode
}

export function AddToServerButton({ className, full = false, children, ...props }: Props) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const { data } = await authClient.getSession()
      if (data?.session) {
        window.open(LINKS.invite, "_blank")
        return
      }
      await authClient.signIn.social({
        provider: "discord",
        callbackURL: `${window.location.origin}/invite`,
      })
    } finally {
      setLoading(false)
    }
  }

  const btnProps = {
    variant: "primary" as const,
    disabled: loading,
    ...props,
    onClick: handleClick,
  }

  if (full) {
    return (
      <Button {...btnProps} size="md" className={cn("w-full", className)}>
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
    <Button {...btnProps} size="sm" className={className}>
      {children ?? (
        <>
          <DiscordIcon className="h-3.5 w-3.5" />
          Add to Server
        </>
      )}
    </Button>
  )
}