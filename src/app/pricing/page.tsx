import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

const addons = [
  { name: "Extra hour", price: "£99" },
  { name: "Additional camera angle", price: "£75" },
  { name: "Live streaming setup", price: "£149" },
  { name: "Rush delivery (same day)", price: "£199" },
  { name: "B-roll capture (1 hour)", price: "£149" },
  { name: "Social clips package (10 clips)", price: "£249" },
];

const comparisonFeatures = [
  { name: "Studio time", single: "2 hours", package: "4 sessions", retainer: "3 sessions" },
  { name: "People on camera", single: "Up to 2", package: "Up to 3", retainer: "Up to 4" },
  { name: "4K video recording", single: true, package: true, retainer: true },
  { name: "Professional audio", single: true, package: true, retainer: true },
  { name: "Raw files", single: "24 hours", package: "24 hours", retainer: "Same day" },
  { name: "Editing included", single: false, package: true, retainer: true },
  { name: "Social clips", single: false, package: true, retainer: true },
  { name: "Priority booking", single: false, package: true, retainer: true },
  { name: "Account manager", single: false, package: false, retainer: true },
  { name: "Content strategy", single: false, package: false, retainer: true },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="heading-xl mb-6">Transparent pricing.</h1>
          <p className="body-lg text-gray-400 max-w-2xl">
            No hidden fees. No surprises. Just professional content creation 
            at straightforward prices.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Comparison Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto section-padding">
          <h2 className="heading-md text-center mb-12">Compare plans</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-4 px-6 font-bold">Feature</th>
                  <th className="text-center py-4 px-6 font-bold">Single</th>
                  <th className="text-center py-4 px-6 font-bold bg-gray-50">Package</th>
                  <th className="text-center py-4 px-6 font-bold">Retainer</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-4 px-6 font-medium">{feature.name}</td>
                    <td className="text-center py-4 px-6">
                      {typeof feature.single === "boolean" ? (
                        feature.single ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        feature.single
                      )}
                    </td>
                    <td className="text-center py-4 px-6 bg-gray-100">
                      {typeof feature.package === "boolean" ? (
                        feature.package ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        feature.package
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {typeof feature.retainer === "boolean" ? (
                        feature.retainer ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        feature.retainer
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto section-padding">
          <h2 className="heading-md text-center mb-4">Add-ons</h2>
          <p className="text-center text-gray-600 mb-12">
            Customise any session with these extras.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div key={addon.name} className="p-6 border border-gray-200">
                <h3 className="font-bold mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-black">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto section-padding">
          <h2 className="heading-md text-center mb-12">Pricing FAQ</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <HelpCircle size={18} />
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-600">
                Yes. You can upgrade at any time and we&apos;ll prorate the difference. 
                Downgrades take effect at the start of your next billing cycle.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <HelpCircle size={18} />
                What if I need to cancel a session?
              </h3>
              <p className="text-gray-600">
                Cancellations with 48 hours notice receive a full refund or credit. 
                Less than 48 hours incurs a 50% charge. No-shows are charged in full.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <HelpCircle size={18} />
                Do you offer custom packages?
              </h3>
              <p className="text-gray-600">
                Absolutely. If you have specific needs that don&apos;t fit our standard 
                plans, get in touch and we&apos;ll build something that works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className="heading-lg mb-6">Ready to book?</h2>
          <p className="body-lg text-gray-400 mb-8">
            Choose your plan and secure your session today.
          </p>
          <Link href="/book" className="btn-primary bg-white text-black hover:bg-gray-200">
            Book Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
