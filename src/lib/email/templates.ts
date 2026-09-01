interface BookingConfirmationEmailProps {
  firstName: string;
  bookingDate: string;
  bookingTime: string;
  plan: string;
  depositAmount: number;
  totalAmount: number;
  studioAddress: string;
}

interface LeadMagnetEmailProps {
  firstName: string;
  leadMagnetName: string;
  downloadUrl: string;
}

interface ReminderEmailProps {
  firstName: string;
  bookingDate: string;
  bookingTime: string;
  studioAddress: string;
}

const planNames: Record<string, string> = {
  single: "Single Session",
  package: "Content Package",
  retainer: "Retainer",
  custom: "Custom Booking",
};

export const emailTemplates = {
  bookingConfirmation: (props: BookingConfirmationEmailProps) => ({
    subject: `Your StreamToday booking is confirmed - ${props.bookingDate}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px; background-color: #000000; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">StreamToday</h1>
              <p style="margin: 10px 0 0 0; color: #999999; font-size: 14px;">Professional Podcast & Content Studio</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 24px; color: #000000;">Your booking is confirmed!</h2>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                Hi ${props.firstName},
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                Thanks for booking with StreamToday. We're looking forward to helping you create something great.
              </p>
              
              <!-- Booking Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; margin: 30px 0;">
                <tr>
                  <td style="padding: 30px;">
                    <h3 style="margin: 0 0 20px 0; font-size: 18px; color: #000000;">Booking Details</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 10px 0; color: #666666; width: 120px;">Date:</td>
                        <td style="padding: 10px 0; font-weight: bold; color: #000000;">${props.bookingDate}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #666666;">Time:</td>
                        <td style="padding: 10px 0; font-weight: bold; color: #000000;">${props.bookingTime}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #666666;">Plan:</td>
                        <td style="padding: 10px 0; font-weight: bold; color: #000000;">${planNames[props.plan] || props.plan}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #666666;">Location:</td>
                        <td style="padding: 10px 0; font-weight: bold; color: #000000;">${props.studioAddress}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Payment Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td style="padding: 20px 0; border-top: 1px solid #eeeeee; border-bottom: 1px solid #eeeeee;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color: #666666;">Total:</td>
                        <td style="text-align: right; font-weight: bold; font-size: 18px;">£${props.totalAmount}</td>
                      </tr>
                      <tr>
                        <td style="padding-top: 10px; color: #22c55e;">Deposit paid:</td>
                        <td style="padding-top: 10px; text-align: right; font-weight: bold; color: #22c55e;">£${props.depositAmount}</td>
                      </tr>
                      <tr>
                        <td style="padding-top: 10px; color: #666666;">Balance due:</td>
                        <td style="padding-top: 10px; text-align: right; font-weight: bold;">£${props.totalAmount - props.depositAmount}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 20px 0; font-size: 14px; color: #666666;">
                The remaining balance is due on the day of your session.
              </p>
              
              <!-- What to Expect -->
              <h3 style="margin: 30px 0 20px 0; font-size: 18px; color: #000000;">What to expect</h3>
              <ul style="margin: 0 0 20px 0; padding-left: 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                <li style="margin-bottom: 10px;">Arrive 10 minutes early to get settled</li>
                <li style="margin-bottom: 10px;">We'll send a reminder 24 hours before your session</li>
                <li style="margin-bottom: 10px;">Our engineer will handle all technical setup</li>
                <li>Raw files delivered within 24 hours</li>
              </ul>
              
              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 40px 0;">
                <tr>
                  <td align="center">
                    <a href="https://streamtoday.co.uk/contact" style="display: inline-block; padding: 16px 32px; background-color: #000000; color: #ffffff; text-decoration: none; font-weight: bold;">Contact Us</a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0; font-size: 14px; color: #666666;">
                Questions? Reply to this email or call us on 0115 824 1234.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f5f5f5; text-align: center;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #666666;">
                StreamToday Studios<br>
                20 Fletcher Gate, Nottingham NG1 2FZ
              </p>
              <p style="margin: 0; font-size: 12px; color: #999999;">
                <a href="https://streamtoday.co.uk" style="color: #666666; text-decoration: underline;">streamtoday.co.uk</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  }),

  bookingReminder: (props: ReminderEmailProps) => ({
    subject: `Reminder: Your StreamToday session is tomorrow`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Session Reminder</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
          <tr>
            <td style="padding: 40px; background-color: #000000; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">StreamToday</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 24px;">Your session is tomorrow</h2>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                Hi ${props.firstName},
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                Just a quick reminder that your booking is tomorrow.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; margin: 30px 0;">
                <tr>
                  <td style="padding: 30px;">
                    <p style="margin: 0 0 10px 0; font-size: 18px; font-weight: bold;">${props.bookingDate} at ${props.bookingTime}</p>
                    <p style="margin: 0; font-size: 14px; color: #666666;">${props.studioAddress}</p>
                  </td>
                </tr>
              </table>
              <p style="margin: 0; font-size: 14px; color: #666666;">
                Please arrive 10 minutes early. If you need to cancel or reschedule, call us on 0115 824 1234.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  }),

  leadMagnet: (props: LeadMagnetEmailProps) => ({
    subject: `Your ${props.leadMagnetName} is here`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your Download</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
          <tr>
            <td style="padding: 40px; background-color: #000000; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">StreamToday</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 24px;">Here is your ${props.leadMagnetName}</h2>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                Hi ${props.firstName || "there"},
              </p>
              <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6;">
                Thanks for downloading our ${props.leadMagnetName}. Click the button below to access your copy.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 40px 0;">
                <tr>
                  <td align="center">
                    <a href="${props.downloadUrl}" style="display: inline-block; padding: 16px 32px; background-color: #000000; color: #ffffff; text-decoration: none; font-weight: bold;">Download Now</a>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                Ready to create professional content? Book a session at StreamToday Studios.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://streamtoday.co.uk/book" style="display: inline-block; padding: 14px 28px; background-color: #ffffff; color: #000000; text-decoration: none; font-weight: bold; border: 2px solid #000000;">Book a Session</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px 40px; background-color: #f5f5f5; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #999999;">
                StreamToday Studios | 20 Fletcher Gate, Nottingham NG1 2FZ
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  }),

  nurtureFollowUp: (props: { firstName: string }) => ({
    subject: `Still thinking about your content strategy?`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Follow Up</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
          <tr>
            <td style="padding: 40px; background-color: #000000; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">StreamToday</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 24px;">Ready to stop planning and start creating?</h2>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                Hi ${props.firstName || "there"},
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                You downloaded our Content Audit Template a few days ago. Have you had a chance to work through it?
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                Here is what I have noticed: most people spend months thinking about content strategy and never actually hit record. The best content creators I know? They ship first, optimise later.
              </p>
              <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6;">
                If you are ready to start creating, we have got the studio, the gear, and the team to make it happen. No more excuses.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 40px 0;">
                <tr>
                  <td align="center">
                    <a href="https://streamtoday.co.uk/book" style="display: inline-block; padding: 16px 32px; background-color: #000000; color: #ffffff; text-decoration: none; font-weight: bold;">Book Your Session</a>
                  </td>
                </tr>
              </table>
              <p style="margin: 0; font-size: 14px; color: #666666;">
                Questions? Just reply to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  }),

  nurtureCaseStudy: () => ({
    subject: `How one Nottingham business 3x'd their LinkedIn engagement`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Case Study</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
          <tr>
            <td style="padding: 40px; background-color: #000000; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">StreamToday</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 24px;">Case study: 3x LinkedIn engagement in 60 days</h2>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                A local Nottingham consultancy came to us struggling with their content. They knew LinkedIn was important, but their phone-recorded videos were not cutting through.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                <strong>The approach:</strong> One monthly studio session, batch-shooting 4 weeks of content in 2 hours. Professional lighting, crisp audio, and confident delivery.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                <strong>The result:</strong> 3x engagement in 60 days. Two inbound leads worth £15k+. And their MD actually enjoys recording now.
              </p>
              <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6;">
                Quality matters. Your audience can tell the difference between amateur and professional. So can your bottom line.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 40px 0;">
                <tr>
                  <td align="center">
                    <a href="https://streamtoday.co.uk/book" style="display: inline-block; padding: 16px 32px; background-color: #000000; color: #ffffff; text-decoration: none; font-weight: bold;">Book Your Session</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  }),

  nurtureFinal: () => ({
    subject: `Last chance: Book before prices increase`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Final Call</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px;">
          <tr>
            <td style="padding: 40px; background-color: #000000; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">StreamToday</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 24px;">Last call</h2>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                I am wrapping up this series of emails. If you are not ready to book a studio session right now, no worries.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                But before I go: if you have been thinking about levelling up your content, what is actually stopping you?
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                The equipment? We have got £50k of it.<br>
                The expertise? Our engineers have 30+ years combined experience.<br>
                The location? Right in the heart of Nottingham.
              </p>
              <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6;">
                Sometimes the only thing between you and better content is booking the session. This is your invitation to do exactly that.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 40px 0;">
                <tr>
                  <td align="center">
                    <a href="https://streamtoday.co.uk/book" style="display: inline-block; padding: 16px 32px; background-color: #000000; color: #ffffff; text-decoration: none; font-weight: bold;">Book Now</a>
                  </td>
                </tr>
              </table>
              <p style="margin: 0; font-size: 14px; color: #666666;">
                I will be here when you are ready.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  }),
};
