import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, MapPin, Award, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  { number: "500+", label: "Sessions Recorded" },
  { number: "200+", label: "Happy Clients" },
  { number: "50+", label: "Podcasts Launched" },
  { number: "1M+", label: "Views Generated" },
];

const values = [
  {
    title: "Quality First",
    description: "No compromises on equipment, acoustics, or delivery. Professional means professional.",
  },
  {
    title: "Creator Focused",
    description: "We handle the technical so you can focus on the content. Your vision, our execution.",
  },
  {
    title: "Nottingham Proud",
    description: "Based in the Lace Market, serving the East Midlands. Local talent, global standards.",
  },
];

const team = [
  {
    name: "Studio Director",
    role: "Technical Lead",
    bio: "15 years in broadcast production. Former MTV, Channel 4. Obsessed with audio quality.",
  },
  {
    name: "Production Manager",
    role: "Client Success",
    bio: "Making sure your session runs smoothly from booking to final delivery.",
  },
  {
    name: "Lead Editor",
    role: "Post-Production",
    bio: "Turning raw footage into polished content. Fast turnaround, no shortcuts.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="heading-xl mb-6">Built by creators, for creators.</h1>
          <p className="body-lg text-gray-400 max-w-2xl">
            StreamToday started with a simple idea: Nottingham deserves a world-class 
            content studio. So we built one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto section-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We were tired of booking studios that looked great in photos but fell apart 
              under real use. Bad acoustics. Cheap mics. Engineers who didn&apos;t understand 
              podcasting. Equipment that was always &quot;just about to be upgraded.&quot;
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              So we built the studio we wished existed. Professional-grade equipment from 
              day one. Acoustic treatment that actually works. Engineers who understand 
              content creation, not just button-pushing.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Located in Nottingham&apos;s historic Lace Market, StreamToday is a space 
              where serious creators can do serious work. No compromises. No excuses. 
              Just great content.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <h2 className="heading-lg text-center mb-16">What we believe</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                <MapPin size={16} />
                Nottingham Lace Market
              </div>
              <h2 className="heading-lg mb-6">20 Fletcher Gate</h2>
              <p className="body-lg text-gray-400 mb-8">
                Right in the heart of Nottingham&apos;s creative quarter. Tram at the door, 
                train station 5 minutes walk, parking nearby. Easy in, easy out, professional 
                results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="text-green-400" size={20} />
                  <span>Professional grade equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-green-400" size={20} />
                  <span>Space for up to 4 on camera</span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Map Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <h2 className="heading-lg text-center mb-16">The team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className="heading-lg mb-6">Come see for yourself.</h2>
          <p className="body-lg text-gray-400 mb-8">
            Book a tour. No hard sell, just come see if we&apos;re the right fit for your content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-primary bg-white text-black hover:bg-gray-200">
              Book a Session
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Book a Tour
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
