import { Scale } from "lucide-react"

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By inviting Rynote to your Discord server and using its features, you agree to these Terms of Service. If you do not agree, please do not use the bot.",
    ],
  },
  {
    title: "2. Description of Service",
    body: [
      "Rynote is a Discord music bot that provides music playback, playlist management, and related utilities. We may modify, suspend, or discontinue part or all of the service at any time without prior notice.",
    ],
  },
  {
    title: "3. Acceptable Use",
    body: [
      "You agree not to misuse the bot, including: attempting to disrupt its operation, exploiting bugs for malicious purposes, using it to store or distribute unlawful content, or using it in a manner that violates Discord's Terms of Service or Community Guidelines.",
      "We reserve the right to remove access for users or servers that violate these terms.",
    ],
  },
  {
    title: "4. Music Content",
    body: [
      "Rynote is a playback tool only. We do not host or distribute music files. You are responsible for ensuring that the content you play through the bot does not infringe the rights of others and complies with applicable laws.",
    ],
  },
  {
    title: "5. Disclaimer of Warranties",
    body: [
      "The service is provided \"as is\" without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that Rynote will be uninterrupted, error-free, or secure.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, the Rynote team shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the service.",
    ],
  },
  {
    title: "7. Termination",
    body: [
      "You may stop using Rynote at any time by removing it from your server. We may also terminate or suspend access to the service at our discretion, without liability, if you violate these terms.",
    ],
  },
  {
    title: "8. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. Continued use of Rynote after changes are posted constitutes acceptance of the revised terms. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      "If you have any questions about these Terms of Service, please reach out to us through our support server at https://discord.gg/J8MJBPBupy.",
    ],
  },
]

export function TermsOfService() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="mb-10 flex flex-col items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-border bg-white/5">
          <Scale className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          Terms of Service
        </h1>
        <p className="text-sm text-text-muted">
          Last updated: September 27, 2026
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
          These Terms of Service govern your use of the Rynote Discord bot. Please read them
          carefully before using the service.
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