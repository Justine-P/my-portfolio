# Justine Camello - Developer Portfolio

A modern, responsive developer portfolio built with Next.js App Router, Tailwind CSS, Framer Motion, and Neon PostgreSQL for contact form submissions.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Neon PostgreSQL
- TypeScript

## Folder Structure

```txt
justine-portfolio/
  db/
    schema.sql
  public/
  src/
    app/
      api/
        contact/
          route.ts
      globals.css
      layout.tsx
      page.tsx
    components/
      ContactForm.tsx
      MotionReveal.tsx
      SectionHeading.tsx
    data/
      portfolio.ts
  .env.example
  package.json
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

3. Add your Neon connection string in `.env.local`:

```env
DATABASE_URL="postgresql://<user>:<password>@<host>/<database>?sslmode=require"
```

4. Create the database table in Neon using `db/schema.sql`.

5. Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

- `DATABASE_URL`: Neon PostgreSQL connection string used by `src/app/api/contact/route.ts`.

## Contact Form Database Schema

Run this SQL in your Neon database:

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## Deployment (Vercel)

1. Push project to GitHub.
2. Import repository in Vercel.
3. Add `DATABASE_URL` in Vercel project settings.
4. Deploy.

This project is production-ready for Vercel with serverless API routes.
