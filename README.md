# Mæt — Familiemadplanlægning

[![CI](https://github.com/heimdal/maet/actions/workflows/ci.yml/badge.svg)](https://github.com/heimdal/maet/actions/workflows/ci.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)

**Mæt** er en dansk familiemadplanlægningsplatform, der hjælper familier med at planlægge ugens måltider, generere indkøbslister automatisk og samle opskrifter ét sted.

## Tech Stack

| Lag | Teknologi |
|-----|-----------|
| Frontend | Next.js 14 (App Router), React, Tailwind CSS, shadcn/ui |
| Backend | NestJS, TypeScript |
| Database | PostgreSQL via Prisma ORM |
| Auth | Supabase Auth |
| Monorepo | Turborepo, pnpm workspaces |
| CI/CD | GitHub Actions, Vercel |

## Projektstruktur

```
maet/
├── apps/
│   ├── web/              # Next.js 14 frontend
│   └── api/              # NestJS backend
├── packages/
│   ├── database/         # Prisma schema & migrations
│   ├── shared/           # Delte typer & utilities
│   └── ui/               # Delte UI-komponenter (shadcn/ui)
├── .github/workflows/    # CI/CD pipelines
├── turbo.json            # Turborepo konfiguration
└── package.json          # Root package
```

## Kom i gang

### Forudsætninger

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 9
- [PostgreSQL](https://www.postgresql.org/) database (eller Supabase)

### Installation

```bash
# Klon repository
git clone https://github.com/heimdal/maet.git
cd maet

# Installer dependencies
pnpm install

# Kopiér environment filer
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
cp packages/database/.env.example packages/database/.env

# Generer Prisma client
pnpm db:generate

# Push database schema
pnpm db:push
```

### Udvikling

```bash
# Start alle apps i development mode
pnpm dev

# Start kun frontend
pnpm --filter @maet/web dev

# Start kun backend
pnpm --filter @maet/api dev
```

### Build

```bash
# Byg alle apps
pnpm build

# Typecheck
pnpm typecheck

# Lint
pnpm lint
```

## Environment Variabler

### Web (`apps/web/.env.local`)

| Variabel | Beskrivelse |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase projekt URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |

### API (`apps/api/.env`)

| Variabel | Beskrivelse |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret til JWT token signering |
| `SUPABASE_SERVICE_KEY` | Supabase service role key |
| `PORT` | API server port (default: 3001) |

### Database (`packages/database/.env`)

| Variabel | Beskrivelse |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |

## Deployment

Frontend deployes automatisk til [Vercel](https://vercel.com) ved push til `main` branch via GitHub Actions.

## Licens

Privat projekt — alle rettigheder forbeholdes.
