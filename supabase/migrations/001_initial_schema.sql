-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads table (for lead magnet downloads and inquiries)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contact info
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  company TEXT,
  phone TEXT,
  
  -- Lead tracking
  source TEXT NOT NULL,
  lead_magnet TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  notes TEXT,
  last_contacted_at TIMESTAMP WITH TIME ZONE,
  
  -- Unique constraint on email for lead tracking
  CONSTRAINT unique_lead_email UNIQUE (email)
);

-- Acuity bookings sync table (read-only mirror from Acuity)
CREATE TABLE acuity_bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Acuity IDs
  acuity_appointment_id BIGINT UNIQUE NOT NULL,
  acuity_calendar_id BIGINT,
  acuity_appointment_type_id BIGINT,
  
  -- Contact info
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Booking details
  appointment_type TEXT NOT NULL,
  calendar_name TEXT,
  datetime TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE,
  duration INTEGER, -- in minutes
  
  -- Payment/status
  price DECIMAL(10,2),
  amount_paid DECIMAL(10,2),
  paid TEXT,
  status TEXT,
  
  -- Additional data
  notes TEXT,
  forms TEXT, -- JSON string of form responses
  
  -- Linked to our lead if email matches
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL
);

-- Email sequences table
CREATE TABLE email_sequences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Relations
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES acuity_bookings(id) ON DELETE CASCADE,
  
  -- Sequence type
  sequence_type TEXT NOT NULL CHECK (sequence_type IN ('lead_nurture', 'booking_confirmation', 'booking_reminder', 'post_session', 're_engagement')),
  
  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'completed', 'cancelled')),
  current_step INTEGER DEFAULT 0,
  total_steps INTEGER NOT NULL,
  
  -- Schedule
  next_send_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Email logs table
CREATE TABLE email_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Relations
  sequence_id UUID REFERENCES email_sequences(id) ON DELETE SET NULL,
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  booking_id UUID REFERENCES acuity_bookings(id) ON DELETE SET NULL,
  
  -- Email details
  step_number INTEGER,
  email_type TEXT NOT NULL CHECK (email_type IN ('confirmation', 'reminder', 'follow_up', 'nurture', 'lead_magnet', 're_engagement')),
  recipient_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  body TEXT,
  
  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'delivered', 'opened', 'clicked', 'bounced', 'failed')),
  sent_at TIMESTAMP WITH TIME ZONE,
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT
);

-- Webhook events log (for debugging)
CREATE TABLE webhook_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  source TEXT NOT NULL, -- 'acuity', 'stripe', etc
  event_type TEXT NOT NULL,
  payload JSONB,
  processed BOOLEAN DEFAULT FALSE,
  error_message TEXT
);

-- Create indexes for performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_source ON leads(source);
CREATE INDEX idx_acuity_bookings_email ON acuity_bookings(email);
CREATE INDEX idx_acuity_bookings_acuity_id ON acuity_bookings(acuity_appointment_id);
CREATE INDEX idx_acuity_bookings_datetime ON acuity_bookings(datetime);
CREATE INDEX idx_email_sequences_lead ON email_sequences(lead_id);
CREATE INDEX idx_email_sequences_booking ON email_sequences(booking_id);
CREATE INDEX idx_email_sequences_next_send ON email_sequences(next_send_at);
CREATE INDEX idx_email_logs_sequence ON email_logs(sequence_id);
CREATE INDEX idx_email_logs_lead ON email_logs(lead_id);
CREATE INDEX idx_email_logs_status ON email_logs(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_acuity_bookings_updated_at
  BEFORE UPDATE ON acuity_bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security Policies

-- Leads: Public can insert, service role can manage
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can manage leads" ON leads
  FOR ALL USING (auth.role() = 'service_role');

-- Acuity bookings: Service role only (synced via webhook)
ALTER TABLE acuity_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage bookings" ON acuity_bookings
  FOR ALL USING (auth.role() = 'service_role');

-- Email sequences: Service role only
ALTER TABLE email_sequences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage sequences" ON email_sequences
  FOR ALL USING (auth.role() = 'service_role');

-- Email logs: Service role only
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage email logs" ON email_logs
  FOR ALL USING (auth.role() = 'service_role');

-- Webhook events: Service role only
ALTER TABLE webhook_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage webhooks" ON webhook_events
  FOR ALL USING (auth.role() = 'service_role');
