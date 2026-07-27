# Halim's Life

> A multilingual personal-brand platform for Halim Md Abdul—a Bangladesh-born
> software engineer, researcher and educator based in Japan.

[![Live Website](https://img.shields.io/badge/Live-halimslife.com-087f5b?style=for-the-badge)](https://halimslife.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

Halim's Life brings together Halim's engineering career, research, learning
projects and writing in one SEO-friendly website. It is designed especially
for people interested in Japan, technology, robotics, computer vision,
programming and Japanese-language learning.

বাংলাদেশ থেকে জাপানে Halim-এর শেখা, কাজ, research ও community projects-এর
একটি আধুনিক personal-brand website।

## Preview

[![Halim's Life homepage in dark mode](docs/halimslife-homepage.png)](https://halimslife.com)

_Live production homepage—dark mode, Bengali interface._

## What the project includes

- Personal-brand homepage with career story, expertise, research and projects
- Bengali, English and Japanese (`BN / EN / JA`) interface controls
- Persisted light/dark mode with automatic system-theme detection
- Server-rendered pages with clean URLs—no hash-based navigation
- Supabase-backed blog index and individual article pages
- Native social sharing for Facebook, LinkedIn, X and copy-link
- Email/password authentication with server-side cookie sessions
- Public signup, login and account pages
- Protected admin dashboard and user role management
- Privacy-safe first-party page-view and click analytics
- Admin analytics dashboard with top pages and interactions
- Optional Google Search Console and Bing Webmaster keyword reports
- PostgreSQL Row Level Security (RLS) policies
- Repeatable database migrations and development seed data
- Dynamic sitemap, `robots.txt`, canonical URLs and structured person data
- Responsive layouts for desktop, tablet and mobile
- Production deployment on Vercel with a Hostinger-managed custom domain

## Technology

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| UI | React 19, responsive custom CSS, Tailwind CSS toolchain |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth + `@supabase/ssr` |
| Authorization | Application roles + PostgreSQL RLS |
| Hosting | Vercel |
| Domain/DNS | Hostinger DNS |

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Personal-brand homepage |
| `/about` | Background, work and mission |
| `/journey` | Bangladesh-to-Japan career journey |
| `/projects` | Learning and engineering projects |
| `/blog` | Server-rendered published articles |
| `/blog/[slug]` | SEO-friendly individual article |
| `/contact` | Contact details and professional links |
| `/signup` | Create a community account |
| `/login` | Member login |
| `/account` | Authenticated user profile |
| `/admin` | Protected admin dashboard |
| `/admin/analytics` | Visits, clicks and search performance |
| `/admin/users` | Admin-only user and role management |
| `/supabase-status` | Database connection health check |

## Project structure

```text
halimslife/
├── docs/
│   └── halimslife-homepage.png
├── public/
├── src/
│   ├── app/                 # App Router pages, server actions and metadata
│   ├── assets/              # Profile and hero images
│   ├── components/          # Shared shell, auth, theme and language UI
│   ├── lib/
│   │   └── supabase/        # Browser, server and proxy clients
│   └── proxy.ts             # Supabase session refresh
├── supabase/
│   ├── migrations/          # Schema, auth roles, RLS and blog migrations
│   ├── config.toml          # Supabase CLI configuration
│   └── seed.sql             # Repeatable development seed data
├── .env.example
└── package.json
```

## Run locally

### Prerequisites

- Node.js 22 or newer
- npm
- A Supabase project

Docker is optional. It is needed only when running the complete Supabase stack
locally with `supabase start`; it is not required to connect to a hosted
Supabase project.

### 1. Clone and install

```bash
git clone https://github.com/halimmdabdul/halimslife.git
cd halimslife
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and add values from **Supabase Dashboard →
Project Settings → API Keys**:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your-key
```

The publishable key is intended for client use. Never expose a database
password, personal access token or Supabase service-role key in
`NEXT_PUBLIC_*` variables.

### 3. Start development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase database setup

The repository contains migrations for:

1. Blog posts
2. Auth-linked user profiles
3. `admin` and `user` roles
4. Row Level Security policies
5. Public blog fields and permissions

Link the CLI to your own project:

```bash
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
```

Set the database password in your terminal and push the migrations:

```powershell
$env:SUPABASE_DB_PASSWORD="YOUR_DATABASE_PASSWORD"
npx.cmd supabase db push
```

To include the development seed data:

```powershell
npx.cmd supabase db push --include-seed
```

The seed creates dummy profiles and sample blog posts. Seeded auth users use
unknown randomized passwords and are intended for admin-list/role testing—not
interactive login.

For a usable account, sign up through `/signup`, confirm the email and promote
the profile from the Supabase SQL Editor when admin access is required:

```sql
update public.profiles
set role = 'admin'
where lower(email) = lower('your-email@example.com');
```

## Authentication configuration

In **Supabase Dashboard → Authentication → URL Configuration**, use:

```text
Site URL: https://halimslife.com
Redirect URL: https://halimslife.com/account
```

Email confirmation is recommended for production. The application uses
server-side Supabase sessions and refreshes them through the Next.js proxy.

## Analytics and search performance

The application records privacy-safe first-party analytics in Supabase:

- Page views
- Anonymous browser sessions
- Internal and external link/button clicks
- Referrer host/path
- Device category
- Campaign UTM parameters

It does **not** record IP addresses, form values, passwords or typed text.
Browser `Do Not Track` is respected, and admin/status routes are excluded.

After applying the analytics migration, data appears at `/admin/analytics`.

### Google Search Console

1. Verify `halimslife.com` in Google Search Console.
2. Create a Google Cloud service account.
3. Enable the Search Console API.
4. Add the service-account email as a Search Console property user.
5. Add these server-only variables to Vercel:

```env
GOOGLE_SEARCH_CONSOLE_SITE_URL=sc-domain:halimslife.com
GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### Bing Webmaster Tools

Verify the site in Bing Webmaster Tools, create an API key and add:

```env
BING_WEBMASTER_SITE_URL=https://halimslife.com/
BING_WEBMASTER_API_KEY=your-bing-webmaster-api-key
```

Search credentials are read only on the server and must never use a
`NEXT_PUBLIC_` prefix. Google Search Console reports clicks, impressions, CTR
and average position; it is not a live incognito rank checker.

## Quality checks

```bash
npm run lint
npm run build
```

The production build validates TypeScript and all App Router routes.

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Add `NEXT_PUBLIC_SUPABASE_URL`.
3. Add `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
4. Apply both variables to Production and Preview.
5. Deploy the `main` branch.
6. Add the custom domain and point its DNS records to Vercel.

Environment-variable changes affect only new deployments, so redeploy after
changing them.

## Security notes

- Authorization is enforced in PostgreSQL through RLS—not only in the UI.
- Admin pages verify the authenticated user and profile role server-side.
- `.env.local`, Supabase temporary files and Vercel project files are ignored.
- No database password or service-role key should be committed.
- Seed accounts should be used only for development or staging data.

## Author

**Halim Md Abdul**<br />
Software Engineer · Researcher · Lifelong Learner

- Website: [halimslife.com](https://halimslife.com)
- GitHub: [@halimmdabdul](https://github.com/halimmdabdul)
- Google Scholar: [Research profile](https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ)
- Email: [reiazbubt@gmail.com](mailto:reiazbubt@gmail.com)
