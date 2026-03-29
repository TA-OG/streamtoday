const faqs = [
  {
    question: "Where are you located?",
    answer: "We're at 20 Fletcher Gate in Nottingham's Lace Market. It's a 5-minute walk from the train station and there's parking nearby at Fletcher Gate Car Park.",
  },
  {
    question: "What equipment do you have?",
    answer: "We run Panasonic broadcast cameras as standard (Sony FX6 available as additional hire POA). Rode PodMic microphones standard, with Sennheiser lav wireless mics available. Shure SM7B available as additional hire. Professional lighting and acoustically treated space in both studios.",
  },
  {
    question: "How many people can you accommodate?",
    answer: "Cave Studio is maximum of 4 people. Studio One is maximum of 8 people with a customisable backdrop.",
  },
  {
    question: "What's included in the session price?",
    answer: "Studio time, all equipment, an engineer to record and LIVE EDIT the whole recording, edited and raw files delivered within 24 hours. Editing and post-production are available as add-ons or included in our packages.",
  },
  {
    question: "Can I see the studio before booking?",
    answer: "Absolutely. Book a 15-minute tour and we'll show you around. No pressure, no hard sell—just come see if it's right for you.",
  },
  {
    question: "Do you offer remote recording?",
    answer: "Yes. We can integrate remote guests via Riverside, Zoom, Google Meet or your preferred platform with professional audio quality.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-white">
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
