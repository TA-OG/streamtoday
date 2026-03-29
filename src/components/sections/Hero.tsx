import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/studio-hero-1.jpg"
          alt="StreamToday Nottingham Studio"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      <div className="container relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Live in Nottingham Lace Market
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            YOUR BRAND,<br />
            <span className="text-red-600">BROADCAST</span> READY.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-medium">
            Professional podcast and video content from the heart of Nottingham. 
            We provide the gear, the space, and the polish. You just show up and create.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/book" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm"
            >
              Book Your Session
            </Link>
            <Link 
              href="#services" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest backdrop-blur-sm transition-all text-center rounded-sm border border-white/10"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
             <div className="flex flex-col">
                <span className="text-2xl font-black">4K</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Cinema Quality</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-black">PRO</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Audio Chain</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-black">LACE</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Market Location</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-black">24H</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">File Delivery</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute left-8 bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block" />
    </section>
  );
}
