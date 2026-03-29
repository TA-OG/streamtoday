import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="heading-xl mb-6">Let&apos;s talk.</h1>
          <p className="body-lg text-gray-400 max-w-2xl">
            Questions about booking? Want a tour? Need a custom quote? 
            We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="heading-md mb-8">Get in touch</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit us</h3>
                    <p className="text-gray-600">
                      20 Fletcher Gate<br />
                      Nottingham, NG1 2FZ<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+441158241234" className="hover:text-black transition-colors">
                        0115 824 1234
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:hello@streamtoday.studio" className="hover:text-black transition-colors">
                        hello@streamtoday.studio
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Studio hours</h3>
                    <p className="text-gray-600">
                      Monday – Friday: 8am – 8pm<br />
                      Saturday: 9am – 6pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-2">Send a message</h3>
              <p className="text-gray-600 mb-8">
                We&apos;ll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="07123 456789"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">20 Fletcher Gate, Nottingham NG1 2FZ</p>
            <p className="text-sm text-gray-500 mt-2">Interactive map integration here</p>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />

      <Footer />
    </main>
  );
}
