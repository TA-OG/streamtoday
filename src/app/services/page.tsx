import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Mic, Video, Sparkles, Users, Clapperboard, Radio, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Mic,
    title: "Podcast Recording",
    description: "Professional podcast recording for up to 4 guests. Multi-track audio, 4K video optional, and same-day file delivery.",
    price: "From £299",
    features: [
      "Acoustically treated space",
      "Shure SM7B microphones",
      "Multi-track recording",
      "Remote guest integration",
      "Same-day raw files",
    ],
  },
  {
    icon: Video,
    title: "Video Production",
    description: "YouTube-ready productions with cinema-grade cameras, professional lighting, and full post-production.",
    price: "From £399",
    features: [
      "Sony FX6 / Blackmagic 6K",
      "Professional lighting grid",
      "Multi-camera setups",
      "Color grading included",
      "2-day turnaround",
    ],
  },
  {
    icon: Clapperboard,
    title: "Social Media Content",
    description: "Batch-shoot a month of content in one session. Optimised for TikTok, Instagram Reels, and YouTube Shorts.",
    price: "From £349",
    features: [
      "Vertical + horizontal formats",
      "Trending audio licensing",
      "Caption-ready deliverables",
      "Thumbnail creation",
      "Content calendar template",
    ],
  },
  {
    icon: Users,
    title: "Corporate Content",
    description: "Executive interviews, thought leadership, and internal communications. Professional without the corporate stiffness.",
    price: "From £499",
    features: [
      "Branded backdrops",
      "Teleprompter available",
      "B-roll capture",
      "Lower thirds & graphics",
      "Brand guidelines compliance",
    ],
  },
  {
    icon: Radio,
    title: "Live Streaming",
    description: "Multi-platform live streaming with professional production values. Go live to your audience wherever they are.",
    price: "From £599",
    features: [
      "Multi-platform simulcast",
      "Live graphics & overlays",
      "Real-time chat integration",
      "Stream recording",
      "Technical support",
    ],
  },
  {
    icon: Sparkles,
    title: "Post-Production",
    description: "Full editing suite for projects shot with us or elsewhere. Colour, sound design, and delivery in all formats.",
    price: "From £199",
    features: [
      "Professional editing",
      "Colour correction & grading",
      "Sound design & mixing",
      "Motion graphics",
      "All formats delivered",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="heading-xl mb-6">Everything we do.</h1>
          <p className="body-lg text-gray-400 max-w-2xl">
            From podcast recording to full video production. One studio, every format, 
            professional results every time.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <service.icon className="w-12 h-12 mb-6 text-black" strokeWidth={1.5} />
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="body-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-bold">{service.price}</span>
                    <Link
                      href="/book"
                      className="inline-flex items-center font-semibold hover:underline"
                    >
                      Book Now
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
                <div className={`aspect-video bg-gray-100 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">{service.title} Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className="heading-lg mb-6">Not sure what you need?</h2>
          <p className="body-lg mb-8">
            Book a free 15-minute consultation. We&apos;ll help you figure out the right 
            approach for your content goals.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
