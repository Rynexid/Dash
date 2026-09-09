import { Button, type ButtonProps } from "@/components/ui/Button"
import { DiscordIcon } from "@/components/ui/DiscordIcon"
import { LINKS } from "@/lib/links"
import { cn } from "@/lib/cn"

type Props = Omit<ButtonProps, "asChild" | "onClick" | "children"> & {
  full?: boolean
  children?: React.ReactNode
}

export function AddToServerButton({ className, full = false, children, ...props }: Props) {
  const invite = () => {
    window.location.href = LINKS.invite
  }

  if (full) {
    return (
      <Button variant="primary" size="md" className={cn("w-full", className)} {...props} onClick={invite}>
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
    <Button variant="primary" size="sm" className={className} {...props} onClick={invite}>
      {children ?? (
        <>
          <DiscordIcon className="h-3.5 w-3.5" />
          Add to Server
        </>
      )}
    </Button>
  )
}