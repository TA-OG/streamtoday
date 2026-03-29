import Image from 'next/image';

const features = [
  {
    title: "Ex-BBC/Sky Broadcast Cameras",
    description: "Panasonic broadcast cameras as standard. Sony FX6 available as additional hire (POA).",
  },
  {
    title: "Pro Audio Chain",
    description: "Digital mixer with live processing for that big radio sound. Rode PodMic standard, Sennheiser lav wireless mics available. Shure SM7B available as additional hire.",
  },
  {
    title: "Two Studios",
    description: "Studio One: large studio with customisable backdrop for up to 8 people. Cave Studio: cosy studio for max 4 people, ideal for 2.",
  },
  {
    title: "LIVE EDITING",
    description: "Real-time editing while recordings take place. Your content is cut and polished as you create it.",
  },
];



export function Studio() {
  return (
    <section id="studio" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              The Space
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 leading-tight">
              Two studios. One mission. Professional content.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Located in Nottingham&apos;s historic Lace Market. Studio One for larger productions up to 8 people. 
              The Cave for intimate sessions up to 4. Both with LIVE EDITING while you record.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid - Studio Photos */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/studio-hero-1.jpg" 
                  alt="Studio One" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-sm uppercase tracking-widest">Studio One</span>
                </div>
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/studio-hero-2.jpg" 
                  alt="Studio Equipment" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/cave-studio.png" 
                  alt="The Cave Studio" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-sm uppercase tracking-widest">The Cave</span>
                </div>
              </div>
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/green-room-1.jpg" 
                  alt="Green Room" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
