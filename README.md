# Justine Camello - Developer Portfolio

A modern, responsive developer portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
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

3. Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact Form

- `POST /api/contact` validates and accepts form submissions.
- In no-database mode, submissions are acknowledged by the API and logged on the server.

## Deployment (Vercel)

1. Push project to GitHub.
2. Import repository in Vercel.
3. Deploy.

This project is production-ready for Vercel with serverless API routes.
