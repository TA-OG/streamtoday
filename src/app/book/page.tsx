'use client'

import { useEffect, useRef } from 'react'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

export default function BookPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const existing = document.getElementById('cal-embed-script')
    if (existing) return

    const script = document.createElement('script')
    script.id = 'cal-embed-script'
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", {origin:"https://cal.com"});
      Cal("inline", {
        elementOrSelector: "#cal-embed-container",
        calLink: "stream-today-studios",
        layout: "month_view"
      });
    `
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Book Your Session
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional podcast and video content from the heart of Nottingham&apos;s Lace Market.
            </p>
          </div>

          {/* Deposit Policy Notice */}
          <div className="mb-8 p-6 bg-red-950/50 border border-red-800 rounded-xl">
            <h2 className="text-lg font-bold text-red-400 mb-3">
              Deposit Policy — Please Read Before Booking
            </h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>A <strong className="text-white">non-refundable deposit</strong> is required to secure your booking. The deposit amount is displayed at checkout.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>The deposit is <strong className="text-white">credited in full</strong> toward your session fee or monthly subscription.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong className="text-white">No-shows</strong> and <strong className="text-white">cancellations within 48 hours</strong> of the scheduled session time will result in the <strong className="text-white">forfeiture of the deposit</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Cancellations made <strong className="text-white">more than 48 hours</strong> in advance may reschedule or receive a credit. No cash refunds.</span>
              </li>
            </ul>
          </div>

          <div
            id="cal-embed-container"
            ref={containerRef}
            style={{ width: '100%', minHeight: '800px', overflow: 'auto' }}
            className="rounded-xl bg-white"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
