const RYNOTE_INVITE =
  "https://discord.com/oauth2/authorize?client_id=1496804643530080376&permissions=687261216064&response_type=code&redirect_uri=https%3A%2F%2Frynote.apps.bot-hosting.cloud%2Fapi%2Fauth%2Fcallback%2Fdiscord&integration_type=0&scope=identify+email+guilds+bot+applications.commands"
const SORAKU_INVITE = "https://discord.gg/MsxdNeExdg"
const GITHUB = "https://github.com/Rynexid"

export const LINKS = {
  invite: RYNOTE_INVITE,
  support: SORAKU_INVITE,
  github: GITHUB,
  poweredBy: "https://rynexdev.vercel.app?ref=discord",
  youtube: "#",
  twitter: "#",
  patreon: "#",
} as const
