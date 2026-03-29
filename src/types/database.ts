export interface Booking {
  id: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string | null;
  booking_date: string;
  booking_time: string;
  plan: "single" | "package" | "retainer" | "custom";
  status: "pending" | "confirmed" | "completed" | "cancelled" | "no_show";
  deposit_amount: number;
  total_amount: number;
  deposit_paid: boolean;
  balance_paid: boolean;
  stripe_payment_intent_id: string | null;
  notes: string | null;
  source: string | null;
}

export interface Lead {
  id: string;
  created_at: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  company: string | null;
  phone: string | null;
  source: string;
  lead_magnet: string | null;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  notes: string | null;
  last_contacted_at: string | null;
}

export interface EmailLog {
  id: string;
  created_at: string;
  booking_id: string | null;
  lead_id: string | null;
  email_type: "confirmation" | "reminder" | "follow_up" | "nurture" | "lead_magnet";
  recipient_email: string;
  subject: string;
  status: "pending" | "sent" | "delivered" | "bounced" | "failed";
  sent_at: string | null;
  error_message: string | null;
}

export interface Availability {
  id: string;
  date: string;
  time_slots: string[];
  is_fully_booked: boolean;
}
