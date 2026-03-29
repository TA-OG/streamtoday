import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="heading-xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto section-padding prose prose-lg">
          <h2>1. Introduction</h2>
          <p>
            StreamToday Studios (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect the following information:</p>
          <ul>
            <li>Name and contact details (email, phone)</li>
            <li>Company information</li>
            <li>Booking details and preferences</li>
            <li>Payment information (processed securely via Stripe)</li>
            <li>Communication history</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process bookings and payments</li>
            <li>Send booking confirmations and reminders</li>
            <li>Communicate about your sessions</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our services</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data. 
            All data is stored securely using Supabase with Row Level Security enabled.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
          </ul>

          <h2>6. Contact Us</h2>
          <p>
            For privacy-related questions, contact us at:
            <br />
            Email: hello@streamtoday.studio
            <br />
            Address: 20 Fletcher Gate, Nottingham NG1 2FZ
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
