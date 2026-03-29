import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="heading-xl">Terms of Service</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto section-padding prose prose-lg">
          <h2>1. Booking and Payment</h2>
          <p>
            All bookings require a deposit to secure your slot. The remaining balance 
            is due on the day of your session. We accept card payments and bank transfers.
          </p>

          <h2>2. Cancellation Policy</h2>
          <ul>
            <li>Cancellations 48+ hours before session: Full refund or credit</li>
            <li>Cancellations within 48 hours: 50% charge</li>
            <li>No-shows: Full session fee charged</li>
          </ul>

          <h2>3. Rescheduling</h2>
          <p>
            Sessions can be rescheduled up to 24 hours before the booking time, 
            subject to availability. Rescheduling within 24 hours may incur a fee.
          </p>

          <h2>4. Studio Rules</h2>
          <ul>
            <li>Arrive 10 minutes before your scheduled time</li>
            <li>No smoking in the studio</li>
            <li>Food and drink in designated areas only</li>
            <li>Respect our equipment and staff</li>
            <li>Maximum capacity must not be exceeded</li>
          </ul>

          <h2>5. Content and Copyright</h2>
          <p>
            You retain all rights to your content. We may use footage/photos for 
            promotional purposes only with your explicit permission.
          </p>

          <h2>6. Liability</h2>
          <p>
            We are not liable for any loss of data. Please ensure you have backups 
            of all important files. Our maximum liability is limited to the cost 
            of your booking.
          </p>

          <h2>7. Equipment</h2>
          <p>
            Our engineers handle all technical equipment. Please do not adjust 
            settings without permission. Damage caused by misuse may be charged.
          </p>

          <h2>8. Confidentiality</h2>
          <p>
            We respect the confidentiality of your content. All staff sign 
            confidentiality agreements. Client content is never shared without consent.
          </p>

          <h2>9. Force Majeure</h2>
          <p>
            We are not liable for failures due to circumstances beyond our control, 
            including equipment failure, power outages, or acts of nature. Alternative 
            arrangements will be made where possible.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms are governed by English law. Any disputes will be subject 
            to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: March 2025
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
