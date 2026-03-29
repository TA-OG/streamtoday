import { Mic, Video, Users, Radio, Coffee, Scissors } from "lucide-react";
import Image from "next/image";

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
  {
    icon: Coffee,
    title: "VIP Hospitality",
    description: "Full green room access, premium refreshments, and a private lounge. Built for high-profile guests and long sessions.",
    features: ["Private Lounge", "Drinks & Catering", "Secure/Private Entry"],
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

        {/* Green Room Highlight */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center bg-black text-white rounded-sm overflow-hidden">
            <div className="p-10 lg:p-20">
                 <h3 className="text-3xl font-black mb-6">The Green Room Experience</h3>
                 <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    We know that the best content happens when people feel at ease. Our studio features an 
                    intimate lounge with exposed brick arches and warm lighting — the perfect space for 
                    briefing guests or relaxing between takes. 
                 </p>
                 <div className="flex flex-wrap gap-4 mb-10 text-sm font-bold uppercase tracking-widest text-red-600">
                    <span>Drinks Station</span>
                    <span className="text-gray-700">/</span>
                    <span>Catering Available</span>
                    <span className="text-gray-700">/</span>
                    <span>Private & Secure</span>
                 </div>
                 <div className="aspect-video relative rounded-sm overflow-hidden">
                     <Image 
                        src="/images/hospitality.jpg" 
                        alt="StreamToday Hospitality" 
                        fill 
                        className="object-cover"
                     />
                 </div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2 h-full min-h-[400px]">
                 <div className="relative h-full">
                    <Image src="/images/green-room-1.jpg" alt="Green Room" fill className="object-cover" />
                 </div>
                 <div className="relative h-full">
                    <Image src="/images/green-room-2.jpg" alt="Lounge Area" fill className="object-cover" />
                 </div>
                 <div className="relative h-full">
                    <Image src="/images/green-room-3.jpg" alt="Studio Entrance" fill className="object-cover" />
                 </div>
                 <div className="relative h-full">
                    <Image src="/images/green-room-3.jpg" alt="Fireplace Detail" fill className="object-cover" style={{objectPosition: 'center right'}} />
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
