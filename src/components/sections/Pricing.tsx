import Link from "next/link";
import { Check } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";

const plans = [
  {
    name: "Cave Studio",
    price: "45",
    period: "/hour",
    description: "Intimate sessions. Ideally 2 people, fits up to 4.",
    features: [
      "Acoustically treated space",
      "Rode PodMic pro audio",
      "Broadcast video optional",
      "Remote guest integration",
      "LIVE EDITING while you record",
      "Raw files within 24 hours",
    ],
    cta: "Book Cave Studio",
    href: "https://streamtoday.as.me/",
    popular: false,
  },
  {
    name: "Content Retainer",
    price: "549",
    period: "/month",
    description: "The professional's choice. Consistent, high-quality output.",
    features: [
      "3 sessions per month",
      "Full post-production & editing",
      "6 social media clips (Reels/Shorts)",
      "Custom branded backgrounds",
      "Dedicated account manager",
      "48-hour turnaround guaranteed",
    ],
    cta: "Start Retainer",
    href: "https://streamtoday.as.me/",
    popular: true,
  },
  {
    name: "Founder's Circle",
    price: "999",
    period: "/month",
    description: "The High-Impact Content Engine. A producer, a researcher, and total feed dominance.",
    features: [
      "3 sessions per month (Studio One or Cave)",
      "Dedicated Producer & Researcher",
      "Post-management & scheduling",
      "Long-form to short-form waterfall",
      "Sub-60s Reels, Shorts & TikToks",
      "Community engagement & tagging",
      "Priority 'Red Phone' support",
    ],
    cta: "Join the Circle (3 Spots)",
    href: "https://streamtoday.as.me/",
    popular: false,
    highlight: true,
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
                  ? "border-black shadow-xl"
                  : plan.highlight
                  ? "border-red-600 bg-gray-50"
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
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 text-sm font-medium">
                    High-Impact Engine
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

              <TrackedLink
                href={plan.href}
                campaign={`pricing_${plan.name.toLowerCase().replace(/\s+/g, '_')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 font-semibold transition-colors ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </TrackedLink>
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
