import { Shield } from "lucide-react"

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "Rynote collects the minimum data required to provide its core music playback features. This includes:",
      "• Discord user ID and guild (server) ID — used to persist per-server configuration such as player setup channels, loop/queue settings, and autoplay preferences, and to attribute song requests.",
      "• Music playback data — the title, artist, and duration of tracks you queue, stored only as needed to restore playback (auto-reconnect) and to maintain your recently-played history.",
      "• Server configuration — data you set through commands, such as the music-channel setup, custom prefix, language preference, and premium status.",
      "We do not collect or store message content, and we do not read your DMs.",
    ],
  },
  {
    title: "2. How We Use Your Data",
    body: [
      "The data we collect is used solely to operate and improve Rynote:",
      "• To deliver music playback and playlist management.",
      "• To persist server preferences and restore sessions after the bot restarts.",
      "• To provide premium features you activate.",
      "• To diagnose errors and improve reliability.",
      "We never sell, rent, or share your personal data with third parties for marketing purposes.",
    ],
  },
  {
    title: "3. Data Storage & Retention",
    body: [
      "Data is stored on the Rynote infrastructure and retained only for as long as it is needed to provide the service. Summary data such as playback history is kept for a limited time and can be cleared on request.",
      "When Rynote is removed from a server, we will delete the configuration associated with that server within a reasonable time, unless you have independently asked us to keep it.",
    ],
  },
  {
    title: "4. Third-Party Services",
    body: [
      "Rynote relies on third-party services to function, including Discord itself and music providers used to resolve and stream tracks. These services operate under their own privacy policies, and Rynote is not responsible for their practices.",
    ],
  },
  {
    title: "5. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the data we hold about you at any time by contacting us. We will respond to reasonable requests within a reasonable timeframe.",
    ],
  },
  {
    title: "6. Children's Privacy",
    body: [
      "Rynote is not directed to children under the age of 13 (or the applicable minimum age in your jurisdiction). We do not knowingly collect data from children.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Continued use of Rynote after changes are posted constitutes acceptance of the revised policy. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "8. Contact",
    body: [
      "If you have any questions about this Privacy Policy, please reach out to us through our support server at https://discord.gg/J8MJBPBupy.",
    ],
  },
]

export function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="mb-10 flex flex-col items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-border bg-white/5">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted">
          Last updated: September 27, 2026
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
          This Privacy Policy explains how Rynote collects, uses, and protects information when you
          use our Discord bot. By inviting and using Rynote, you agree to the practices described
          in this policy.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)]">
              {section.title}
            </h2>
            {section.body.map((paragraph, i) => (
              <p
                key={i}
                className={`text-sm leading-relaxed text-text-muted ${i === 0 ? "" : "mt-2"}`}
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}