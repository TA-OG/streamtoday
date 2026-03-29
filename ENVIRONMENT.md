# StreamToday Studios - Environment Configuration

## Required Environment Variables

Create a `.env.local` file in the project root with the following:

```env
# Supabase Configuration
# Get these from your Supabase project settings > API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend Email Configuration
# Get this from resend.com after verifying your domain
RESEND_API_KEY=re_xxxxxxxx

# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Stripe Configuration (for live payments)
# STRIPE_PUBLISHABLE_KEY=pk_test_xxx
# STRIPE_SECRET_KEY=sk_test_xxx
# STRIPE_WEBHOOK_SECRET=whsec_xxx
```

## Setup Instructions

### 1. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once created, go to Project Settings > API
3. Copy the Project URL and anon/public key
4. Copy the service_role key (keep this secret!)
5. Paste these into your `.env.local` file

### 2. Resend Setup

1. Go to [resend.com](https://resend.com) and create an account
2. Verify your domain (streamtoday.studio)
3. Generate an API key
4. Copy the API key to your `.env.local` file

### 3. Database Setup

1. In Supabase, go to the SQL Editor
2. Copy the contents of `supabase/migrations/001_initial_schema.sql`
3. Paste and run the SQL to create all tables

### 4. Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Production Deployment

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add environment variables in the Vercel dashboard:
- Go to Project Settings > Environment Variables
- Add all variables from `.env.local`

#### Environment Variables for Production

| Variable | Value | Secret? |
|----------|-------|---------|
| NEXT_PUBLIC_SUPABASE_URL | Your Supabase URL | No |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Your anon key | No |
| SUPABASE_SERVICE_ROLE_KEY | Your service role key | **Yes** |
| RESEND_API_KEY | Your Resend API key | **Yes** |
| NEXT_PUBLIC_SITE_URL | https://streamtoday.studio | No |

## Security Notes

- Never commit `.env.local` to git
- Keep `SUPABASE_SERVICE_ROLE_KEY` and `RESEND_API_KEY` secret
- Use different API keys for development and production
- Rotate keys periodically
- Enable Row Level Security (RLS) on all tables (already in migration)

## Testing Email Locally

Resend only sends to verified domains in production. For testing:

1. Use the Resend test API key (sends to your verified email only)
2. Or use a tool like [Mailtrap](https://mailtrap.io) for local testing
3. Or verify a test domain with Resend

## Troubleshooting

### "Failed to create booking" error
- Check Supabase connection
- Verify RLS policies allow inserts
- Check browser console for detailed error

### Emails not sending
- Verify Resend API key
- Check Resend dashboard for delivery status
- Ensure sender domain is verified

### Database connection issues
- Verify Supabase URL and keys
- Check if database is paused (free tier)
- Ensure tables are created from migration
