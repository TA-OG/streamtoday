"use client";

import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-lg mb-6">
              Free Content Audit Template
            </h2>
            <p className="body-lg text-gray-400 mb-8">
              Stop guessing what content to create. Our proven audit framework 
              helps you identify gaps, prioritise opportunities, and build a 
              content calendar that actually drives results.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "30-point content health check",
                "Competitor analysis framework",
                "90-day content roadmap template",
                "Platform-specific optimisation guide",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white text-black p-8 lg:p-12">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Get the free template</h3>
                <p className="text-gray-600 mb-8">
                  Enter your email and we&apos;ll send it straight to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="lead-email" className="block text-sm font-medium mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="lead-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Me The Template
                        <ArrowRight className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Check your inbox!</h3>
                <p className="text-gray-600">
                  We&apos;ve sent the Content Audit Template to {email}. 
                  If you don&apos;t see it, check your spam folder.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
