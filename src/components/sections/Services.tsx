import { Mic, Video, Users, Radio, Scissors } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Podcast Recording",
    description: "Professional audio capture with Rode PodMic and acoustic treatment. Multi-track recording for up to 4 guests in The Cave, 8 in Studio One.",
    features: ["Broadcast video optional", "Remote guest integration", "Same-day raw files"],
  },
  {
    icon: Video,
    title: "Video Content",
    description: "YouTube-ready productions, social clips, and branded content. Shot on Panasonic broadcast cameras with professional lighting.",
    features: ["Multi-camera setups", "Professional lighting", "Color grading included"],
  },
  {
    icon: Scissors,
    title: "LIVE EDITING",
    description: "Our unique USP. Real-time editing while you record. Your content is cut, polished and ready as you finish the session.",
    features: ["Real-time cuts", "Instant feedback", "Leave with edited content"],
  },
  {
    icon: Users,
    title: "Corporate Content",
    description: "Executive interviews, thought leadership, and internal comms. Professional without being boring.",
    features: ["Branded backdrops", "Teleprompter available", "B-roll capture"],
  },
  {
    icon: Radio,
    title: "Live Streaming",
    description: "Multi-platform live streaming with professional production values. Go live to YouTube, LinkedIn, or your own platform.",
    features: ["Multi-platform simulcast", "Live graphics", "Chat integration"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-black mb-8 leading-tight">
            Everything you need to create.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From podcast recording to full video production. Two studios, every format, professional results every time. 
            Plus our unique LIVE EDITING while you record.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-10 bg-gray-50 hover:bg-black transition-all duration-500 rounded-sm"
            >
              <service.icon className="w-12 h-12 mb-8 text-red-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-8 group-hover:text-gray-400 transition-colors leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
