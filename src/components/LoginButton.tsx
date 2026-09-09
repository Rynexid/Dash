import { useEffect, useState } from "react"
import { LogIn, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { authClient } from "@/lib/auth"

type SessionUser = NonNullable<Awaited<ReturnType<typeof authClient.getSession>>["data"]>["user"]

function UserCell({ me, onSignOut }: {
  me: SessionUser
  onSignOut: () => void
}) {
  return (
    <Button variant="secondary" size="sm" onClick={onSignOut}>
      {me.image ? <img src={me.image} alt={me.name} className="h-5 w-5 rounded-full object-cover" /> : null}
      {me.name ?? "Signed in"}
      <LogOut className="h-3.5 w-3.5" />
    </Button>
  )
}

function Guest({ onSignIn }: { onSignIn: () => void }) {
  return (
    <Button variant="secondary" size="sm" onClick={onSignIn}>
      <LogIn className="h-3.5 w-3.5" />
      Login
    </Button>
  )
}

export function LoginButton() {
  const [loading, setLoading] = useState(true)
  const [me, setMe] = useState<SessionUser | null>(null)

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

  if (loading) {
    return <Button variant="secondary" size="sm" disabled>Loading</Button>
  }

  if (me) {
    return <UserCell me={me} onSignOut={() => authClient.signOut()} />
  }

  return <Guest onSignIn={() => authClient.signIn.social({ provider: "discord" })} />
}

export function LoginButtonMobile() {
  const [me, setMe] = useState<SessionUser | null>(null)

  useEffect(() => {
    let active = true
    authClient.getSession()
      .then(({ data }) => active && setMe(data?.user ?? null))
      .catch(() => null)
    return () => {
      active = false
    }
  }, [])

  return (
    <Button
      variant="secondary"
      size="md"
      className="w-full"
      onClick={() =>
        me ? authClient.signOut() : authClient.signIn.social({ provider: "discord" })
      }
    >
      {me ? <LogOut className="h-4 w-4" /> : <User className="h-4 w-4" />}
      {me ? "Logout" : "Login with Discord"}
    </Button>
  )
}