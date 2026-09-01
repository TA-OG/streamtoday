"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Download, FileText, ClipboardList, Calendar, ArrowRight, Check } from "lucide-react";

const resources = [
  {
    title: "12-Episode Podcast Topic Chart",
    description: "Plan your first 12 episodes with this branded topic chart. Map out guests, sponsors, and competitor comparisons.",
    icon: Calendar,
    formats: [
      { label: "PDF (Branded)", href: "/downloads/12-episode-topic-chart.pdf" },
      { label: "Word (Editable)", href: "/downloads/12-episode-topic-chart.docx" }
    ]
  },
  {
    title: "Podcast Episode Bible Template",
    description: "The complete production template used by StreamToday. Plan episodes, track segments, manage repurposing strategy.",
    icon: FileText,
    formats: [
      { label: "PDF (Branded)", href: "/downloads/podcast-episode-bible.pdf" },
      { label: "Word (Editable)", href: "/downloads/podcast-episode-bible.docx" }
    ]
  },
  {
    title: "Pre-Show Checklist",
    description: "Never miss a step. Technical setup, guest prep, promotion checklist, and studio notes.",
    icon: ClipboardList,
    formats: [
      { label: "Word (Editable)", href: "/downloads/pre-show-checklist.docx" }
    ]
  }
];

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <Navigation />
      <div className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Free Downloads
          </span>
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            Podcast Creator Resources
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Professional templates and checklists from StreamToday Studios. 
            Download, customise, and start creating.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <div className="max-w-xl mx-auto mb-16">
              <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
                <h3 className="text-2xl font-bold mb-2">Unlock your downloads</h3>
                <p className="text-gray-600 mb-8">
                  Enter your email and get instant access to all resources.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="resource-email" className="block text-sm font-medium mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="resource-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Get Free Access
                        <ArrowRight className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-xl mx-auto mb-16 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">You&apos;re in!</h3>
              <p className="text-gray-600">
                Your downloads are unlocked. If you don&apos;t see a confirmation email, check your spam folder.
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-10">
            {resources.map((resource) => (
              <div key={resource.title} className={`bg-gray-50 p-10 rounded-sm ${!submitted ? "opacity-50 pointer-events-none" : ""}`}>
                <resource.icon className="w-12 h-12 text-red-600 mb-6" />
                <h2 className="text-2xl font-bold mb-4">{resource.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">{resource.description}</p>
                <div className="space-y-3">
                  {resource.formats.map((format) => (
                    <a
                      key={format.label}
                      href={format.href}
                      download
                      className="flex items-center gap-3 text-red-600 font-semibold hover:text-red-700 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      {format.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-600 mb-6">
              Want to record your podcast professionally?
            </p>
            <Link
              href="/book"
              className="inline-block px-8 py-4 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-colors"
            >
              Book Studio Time
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
