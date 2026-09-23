const faqs = [
  {
    question: "How much does it cost to hire a podcast studio in Nottingham?",
    answer: "Cave Studio starts at £45/hour for up to 4 guests. Studio One is £75/hour for up to 8 guests with multi-camera setup. Both include an engineer, live-editing, and raw files delivered within 24 hours.",
  },
  {
    question: "Where are you located?",
    answer: "We're at 20 Fletcher Gate in Nottingham's Lace Market. It's a 5-minute walk from Nottingham train station and there's parking nearby at Fletcher Gate Car Park.",
  },
  {
    question: "How many people can you accommodate?",
    answer: "Cave Studio fits up to 4 people. Studio One accommodates up to 8 people with a customisable backdrop. Both studios include professional audio and optional 4K video recording.",
  },
  {
    question: "Do you offer video podcast recording?",
    answer: "Yes. Both studios offer 4K video recording with Panasonic broadcast cameras as standard. Studio One has a full multi-camera broadcast setup. Video is included in the hourly rate.",
  },
  {
    question: "What's included in the session price?",
    answer: "Studio time, all equipment, an engineer to record and LIVE EDIT the whole recording, edited and raw files delivered within 24 hours. Editing and post-production are available as add-ons or included in our packages.",
  },
  {
    question: "Do you offer remote recording?",
    answer: "Yes. We can integrate remote guests via Riverside, Zoom, Google Meet or your preferred platform with professional audio quality.",
  },
  {
    question: "How do I book a session?",
    answer: "Click 'Book Your Session' and choose your studio, date, and time. A deposit is required to secure your slot. For cancellations within 48 hours, the deposit is forfeited. Otherwise it's credited to your session.",
  },
  {
    question: "Can I see the studio before booking?",
    answer: "Absolutely. Book a 15-minute tour and we'll show you around. No pressure, no hard sell—just come see if it's right for you.",
  },
];

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">Questions? Answered.</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about booking and creating at StreamToday.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
