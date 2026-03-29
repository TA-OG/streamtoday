# StreamToday Studios

Professional podcast and content studio at 20 Fletcher Gate, Nottingham's Lace Market.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript (Strict Mode)
- Tailwind CSS
- Supabase (PostgreSQL + Auth)
- Resend (Email)
- Lucide React (Icons)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── book/              # Booking funnel
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components
│   ├── sections/         # Page sections
│   └── booking/          # Booking components
├── lib/                   # Utilities and config
│   ├── supabase/         # Supabase clients
│   ├── email/            # Email templates
│   └── utils/            # Helper functions
├── types/                 # TypeScript types
├── public/               # Static assets
└── supabase/             # Database migrations
```

## Setup Instructions

### 1. Environment Variables

Create `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend Email
RESEND_API_KEY=your_resend_api_key

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Supabase Setup

1. Create a new Supabase project
2. Run the SQL migrations in `supabase/migrations/`
3. Copy your project URL and anon key to `.env.local`

### 3. Database Schema

Run the SQL in `supabase/migrations/001_initial_schema.sql` to create:

- `bookings` table
- `leads` table
- `email_logs` table
- Row Level Security policies

### 4. Resend Setup

1. Sign up at resend.com
2. Verify your domain
3. Copy API key to `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Add environment variables in Vercel dashboard.

### Environment Variables for Production

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_SITE_URL` (your production URL)

## Features

- **Landing Pages**: Homepage, Services, Pricing, About, Contact
- **Booking Funnel**: Calendar selection, deposit system, confirmation emails
- **Lead Capture**: Content audit lead magnet
- **Email Automation**: Confirmation and nurture sequences
- **Admin Dashboard**: View bookings and leads

## Pricing Structure

- **Single Session**: £299 (2 hours)
- **Content Package**: £749 (4 sessions/month)
- **Retainer**: £549/month (3 sessions + editing)

## Contact

StreamToday Studios
20 Fletcher Gate
Nottingham, NG1 2FZ

---

Built by TheOkelloGroup
