import Image from 'next/image';

const features = [
  {
    title: "4K Cinema Cameras",
    description: "Sony FX6 and Blackmagic Pocket 6K for broadcast-quality video.",
  },
  {
    title: "Pro Audio Chain",
    description: "Shure SM7B mics, SSL mixing, and acoustic-treated space.",
  },
  {
    title: "The Cave Studio",
    description: "An intimate, distinct space with green living walls and industrial brick.",
  },
  {
    title: "Lace Market Location",
    description: "20 Fletcher Gate, Nottingham. Tram, train, and parking nearby.",
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
              A space built for creators who take their content seriously.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Located in Nottingham&apos;s historic Lace Market, our studio combines 
              industrial character with professional-grade equipment. No compromises. 
              No distractions. Just create.
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

          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/cave-studio.png" 
                  alt="The Cave Studio Nottingham" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-sm uppercase tracking-widest">The Cave Studio</span>
                </div>
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-500">
                <Image 
                  src="/images/hero-dark.jpg" 
                  alt="Professional Recording Equipment" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-500">
                <Image 
                  src="/images/logo-wide.jpg" 
                  alt="Studio Environment" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-red-600 flex items-center justify-center p-8">
                   <Image 
                    src="/images/logo-sq-transparent.png" 
                    alt="StreamToday Logo" 
                    width={150}
                    height={150}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
