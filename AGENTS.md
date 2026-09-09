# AGENTS.md

Single-page marketing site for the Rynote Discord bot. React 19 + Vite + Tailwind CSS v4.

## Commands
- `bun install` — package manager is **bun** (bun.lock; do not use npm/yarn)
- `bun run dev` — Vite dev server
- `bun run build` — `tsc -b && vite build` (typecheck is part of build)
- `bun run lint` — oxlint (linter; there is no separate tsc/typecheck script)
- No test suite is configured.

There is no standalone typecheck script — a full type-aware check only runs during `bun run build`.

## Conventions
- Path alias `@/*` → `src/*` (configured in `vite.config.ts` and `tsconfig.app.json`). Import `@/components/...`, not relative paths.
- **Tailwind v4, CSS-first config**: there is no `tailwind.config`. Theme tokens (colors, fonts) are defined with `@theme` in `src/index.css` and used as `bg-bg`, `text-text-primary`, `text-muted`, `font-heading`, etc. Add/edit brand tokens there, not in a JS config.
- UI primitives live in `src/components/ui/` (Button, Card, Tooltip, Badge, ...) built on Radix + `cn()` (`src/lib/cn.ts`, clsx + tailwind-merge). Reuse these instead of ad-hoc markup.
- `index.html` is `class="dark"` and sets `bg-bg text-text-primary`; site is dark-themed by design.
- Code style: no semicolons, single quotes, trailing commas omitted — matches existing files. No code comments unless asked.

## API
- `src/lib/api.ts` reads `VITE_API_URL` and `VITE_API_AUTH` env vars (dev defaults: `http://localhost:8080` / `rynote-dashboard-secret`) and sends `Authorization` header via `apiGet<T>()`. Note the committed `.env` has a stray trailing `h` in `VITE_API_AUTH` — the code falls back to the default so don't rely on that file's value.
- External links (Discord invite, support server, GitHub) are centralized in `src/lib/links.ts`.

## Structure
- One-page app: `src/App.tsx` composes section components (`Hero`, `Stats`, `FeatureShowcase`, `Features`, `Platforms`, `DashboardPreview`, `Commands`, `Docs`, `FAQ`, `CTA`) plus `Navbar`/`Footer`.
