const faqs = [
  {
    question: "Where are you located?",
    answer: "We're at 20 Fletcher Gate in Nottingham's Lace Market. It's a 5-minute walk from the train station and there's parking nearby at Fletcher Gate Car Park.",
  },
  {
    question: "What equipment do you have?",
    answer: "We run Sony FX6 and Blackmagic Pocket 6K cameras, Shure SM7B microphones, professional lighting, and an acoustically treated space. Everything you need for broadcast-quality content.",
  },
  {
    question: "How many people can you accommodate?",
    answer: "Our main studio comfortably fits up to 4 people on camera. For larger productions, we can configure the space differently—just ask.",
  },
  {
    question: "What's included in the session price?",
    answer: "Studio time, all equipment, an engineer to help with setup, and raw files delivered within 24 hours. Editing and post-production are available as add-ons or included in our packages.",
  },
  {
    question: "Can I see the studio before booking?",
    answer: "Absolutely. Book a 15-minute tour and we'll show you around. No pressure, no hard sell—just come see if it's right for you.",
  },
  {
    question: "Do you offer remote recording?",
    answer: "Yes. We can integrate remote guests via Riverside, Zoom, or your preferred platform with professional audio quality.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Questions? Answered.</h2>
          <p className="body-lg">
            Everything you need to know about booking and creating at StreamToday.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
              <p className="body-md">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
