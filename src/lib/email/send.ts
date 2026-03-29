import { Resend } from "resend";
import { emailTemplates } from "./templates";

let resend: Resend | null = null;

function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from = "StreamToday <hello@streamtoday.studio>" }: SendEmailOptions) {
  const client = getResend();
  
  if (!client) {
    console.warn("Resend not configured - email would be sent:", { to, subject });
    return { success: true, data: { id: "mock-email-id" } };
  }

  try {
    const { data, error } = await client.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Email send error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email send exception:", error);
    return { success: false, error };
  }
}

export async function sendBookingConfirmation(booking: {
  first_name: string;
  email: string;
  booking_date: string;
  booking_time: string;
  plan: string;
  deposit_amount: number;
  total_amount: number;
}) {
  const template = emailTemplates.bookingConfirmation({
    firstName: booking.first_name,
    bookingDate: booking.booking_date,
    bookingTime: booking.booking_time,
    plan: booking.plan,
    depositAmount: booking.deposit_amount,
    totalAmount: booking.total_amount,
    studioAddress: "20 Fletcher Gate, Nottingham NG1 2FZ",
  });

  return sendEmail({
    to: booking.email,
    subject: template.subject,
    html: template.html,
  });
}

export async function sendBookingReminder(booking: {
  first_name: string;
  email: string;
  booking_date: string;
  booking_time: string;
}) {
  const template = emailTemplates.bookingReminder({
    firstName: booking.first_name,
    bookingDate: booking.booking_date,
    bookingTime: booking.booking_time,
    studioAddress: "20 Fletcher Gate, Nottingham NG1 2FZ",
  });

  return sendEmail({
    to: booking.email,
    subject: template.subject,
    html: template.html,
  });
}

export async function sendLeadMagnet(lead: {
  first_name: string | null;
  email: string;
  lead_magnet: string | null;
}) {
  const template = emailTemplates.leadMagnet({
    firstName: lead.first_name || "",
    leadMagnetName: lead.lead_magnet || "Content Audit Template",
    downloadUrl: "https://streamtoday.studio/downloads/content-audit-template.pdf",
  });

  return sendEmail({
    to: lead.email,
    subject: template.subject,
    html: template.html,
  });
}

export async function sendNurtureEmail(
  lead: { first_name: string | null; email: string },
  sequenceStep: number
) {
  let template;

  switch (sequenceStep) {
    case 1:
      template = emailTemplates.nurtureFollowUp({ firstName: lead.first_name || "" });
      break;
    case 2:
      template = emailTemplates.nurtureCaseStudy();
      break;
    case 3:
      template = emailTemplates.nurtureFinal();
      break;
    default:
      return { success: false, error: "Invalid sequence step" };
  }

  return sendEmail({
    to: lead.email,
    subject: template.subject,
    html: template.html,
  });
}
