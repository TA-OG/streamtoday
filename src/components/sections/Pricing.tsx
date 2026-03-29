import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Single Session",
    price: "299",
    description: "Perfect for one-off podcasts or content shoots.",
    features: [
      "2 hours studio time",
      "Up to 2 people on camera",
      "Broadcast video + pro audio",
      "Professional lighting",
      "Remote callers (Zoom/Google Meet/Riverside etc)",
      "Raw files within 24 hours",
      "Basic colour correction",
    ],
    cta: "Book Single Session",
    href: "https://streamtoday.as.me/?appointmentType=42416301",
    popular: false,
  },
  {
    name: "Content Package",
    price: "749",
    period: "/month",
    description: "Regular content without the commitment.",
    features: [
      "4 sessions per month",
      "Up to 3 people on camera",
      "Broadcast video + pro audio",
      "Professional lighting",
      "Remote callers integrated",
      "Edited deliverables",
      "Social media clips included",
      "Priority booking",
    ],
    cta: "Start Content Package",
    href: "https://streamtoday.as.me/?appointmentType=42416302",
    popular: true,
  },
  {
    name: "Retainer",
    price: "549",
    period: "/month",
    description: "The smart MRR play for serious creators.",
    features: [
      "3 sessions per month",
      "Full post-production",
      "Content strategy session",
      "Dedicated account manager",
      "48-hour turnaround",
      "Archive & asset management",
    ],
    cta: "Get Retainer",
    href: "https://streamtoday.as.me/?appointmentType=42416303",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">Simple pricing. No surprises.</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your content goals. All plans include full access 
            to our professional studio, equipment, and LIVE EDITING.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 border-2 ${
                plan.popular
                  ? "border-black"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">£{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-600">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 font-semibold transition-colors ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need something custom?{" "}
            <Link href="/contact" className="font-semibold underline hover:no-underline">
              Let&apos;s talk
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
