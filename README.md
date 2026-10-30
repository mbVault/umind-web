# U Mind Web

Marketing website (landing + supporting pages) plus the **staff admin** surface under `/admin`.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS** v4 + shared classes in `src/app/app.css`
- Marketing fonts: **Lora** + **Poppins** · Admin fonts: **Fraunces** + **Manrope**
- Admin auth: **SuperTokens** (`supertokens-web-js`) against backend `/api/v1/staff/auth`

## Design tokens

See `weblookandfeel.md`. Marketing CSS: `src/app/app.css` (`u-*`). Admin CSS: `src/admin/styles/admin.css`.

## Routing

Use `next/link` (`AppLink`) or `useRouter` for in-app navigation — not raw `<a href>` for internal routes. Route map: `src/lib/routes.ts`.

| Path | Purpose |
|------|---------|
| `/` … | Marketing |
| `/admin/login` | Admin email/password sign-in |
| `/admin` | Dashboard (persistent shell + React Query) |
| `/admin/applications` … | Psychologist management modules (A2+ placeholders) |
| `/admin/settings/*` | Users/roles + audit (A6 placeholders) |

Local demo admin (after backend `npm run admin:provision:demo`):

- email: `admin@gmail.com`
- password: `admin123`

Copy `.env.example` → `.env.local`. Backend needs `CORS_ORIGIN` + `SUPERTOKENS_WEBSITE_DOMAIN` matching this origin (`http://localhost:3000`).

## Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

Reference screenshots: `images/devImages/`.
