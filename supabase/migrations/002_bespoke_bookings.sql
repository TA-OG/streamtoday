-- Bespoke bookings table (for direct website bookings, not Acuity sync)
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Contact info
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  notes TEXT,

  -- Booking details
  plan TEXT NOT NULL CHECK (plan IN ('cave-studio', 'studio-one', 'content-retainer', 'content-engine')),
  booking_date TEXT NOT NULL, -- YYYY-MM-DD
  booking_time TEXT NOT NULL, -- HH:MM
  duration_minutes INTEGER DEFAULT 90,

  -- Pricing
  hourly_rate DECIMAL(10,2),
  total_amount DECIMAL(10,2),
  deposit_amount DECIMAL(10,2),

  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled', 'no_show')),

  -- Payment (Stripe integration placeholder)
  stripe_payment_intent_id TEXT,
  deposit_paid BOOLEAN DEFAULT FALSE,
  balance_paid BOOLEAN DEFAULT FALSE,

  -- Source tracking
  source TEXT DEFAULT 'website',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,

  -- Linked lead
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL
);

-- Indexes
CREATE INDEX idx_bookings_email ON bookings(email);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_plan ON bookings(plan);

-- Trigger
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert bookings" ON bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can manage bookings" ON bookings
  FOR ALL USING (auth.role() = 'service_role');
