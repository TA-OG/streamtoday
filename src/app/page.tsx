import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { Studio } from "@/components/sections/Studio";
import { Pricing } from "@/components/sections/Pricing";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <Services />
      <Studio />
      <Pricing />
      <LeadMagnet />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
