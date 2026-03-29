'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

export default function BookPage() {
  useEffect(() => {
    // Load Acuity embed script
    const script = document.createElement('script')
    script.src = 'https://embed.acuityscheduling.com/js/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Book Your Session
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional podcast and video content from the heart of Nottingham&apos;s Lace Market.
              Select a session type below and lock in your slot.
            </p>
          </div>

          {/* Acuity Scheduling Embed */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://streamtoday.as.me/schedule.php?embedType=full&calendarID=&owner=streamtoday"
              title="Schedule Appointment"
              width="100%"
              height="800"
              frameBorder="0"
              className="block"
            />
          </div>

          {/* Below embed info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400 text-sm">20 Fletcher Gate<br />Lace Market<br />Nottingham NG1 2FZ</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-white font-semibold mb-2">Questions?</h3>
              <p className="text-gray-400 text-sm">
                Email us at<br />
                <a href="mailto:hello@streamtoday.co.uk" className="text-red-400 hover:text-red-300">
                  hello@streamtoday.co.uk
                </a>
              </p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Same-Day Files</h3>
              <p className="text-gray-400 text-sm">All recordings delivered within 24 hours of your session</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
