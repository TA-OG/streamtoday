'use client'

import { useState } from 'react'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'
import { BookingCalendar } from '@/components/booking/BookingCalendar'
import { BookingForm } from '@/components/booking/BookingForm'
import { BookingPayment } from '@/components/booking/BookingPayment'
import { BookingConfirmation } from '@/components/booking/BookingConfirmation'
import { Mic, Video, Sparkles, Radio, ArrowRight, Check } from 'lucide-react'

type Step = 'plan' | 'calendar' | 'details' | 'confirm' | 'success'

const plans = [
  {
    id: 'cave-studio',
    name: 'Cave Studio',
    price: '45',
    period: '/hour',
    description: 'Intimate sessions. Ideally 2 people, fits up to 4.',
    icon: Mic,
    features: ['Acoustically treated space', 'Rode PodMic pro audio', 'Broadcast video optional', 'Remote guest integration', 'LIVE EDITING while you record'],
  },
  {
    id: 'studio-one',
    name: 'Studio One',
    price: '75',
    period: '/hour',
    description: 'Our flagship studio. Up to 8 guests, full multi-camera setup.',
    icon: Video,
    features: ['Up to 8 guests on camera', 'Multi-camera broadcast setup', 'Shure SM7B + Rode PodMic mix', '4K video recording', 'LIVE EDITING while you record'],
    popular: false,
  },
  {
    id: 'content-retainer',
    name: 'Content Retainer',
    price: '549',
    period: '/month',
    description: "The professional's choice. Consistent, high-quality output.",
    icon: Sparkles,
    features: ['3 sessions per month', 'Full post-production & editing', '6 social media clips', 'Custom branded backgrounds', '48-hour turnaround guaranteed'],
    popular: true,
  },
  {
    id: 'content-engine',
    name: 'The Content Engine',
    price: '999',
    period: '/month',
    description: 'A producer, a researcher, and total feed dominance.',
    icon: Radio,
    features: ['3 sessions per month', 'Dedicated Producer & Researcher', 'Long-form to short-form waterfall', 'Sub-60s Reels, Shorts & TikToks', "Priority 'Red Phone' support"],
    highlight: true,
  },
]

export default function BookPage() {
  const [step, setStep] = useState<Step>('plan')
  const [selectedPlan, setSelectedPlan] = useState<string>('')
  const [bookingData, setBookingData] = useState<{
    date?: Date
    time?: string
    plan?: string
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    company?: string
    notes?: string
  }>({})

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
    setBookingData((prev) => ({ ...prev, plan: planId }))
    setStep('calendar')
  }

  const handleCalendarSelect = (date: Date, time: string) => {
    setBookingData((prev) => ({ ...prev, date, time }))
    setStep('details')
  }

  const handleDetailsSubmit = (details: {
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
    notes: string
  }) => {
    setBookingData((prev) => ({ ...prev, ...details }))
    setStep('confirm')
  }

  const handleConfirm = () => {
    setStep('success')
  }

  const steps = [
    { id: 'plan', label: 'Plan' },
    { id: 'calendar', label: 'Date & Time' },
    { id: 'details', label: 'Details' },
    { id: 'confirm', label: 'Confirm' },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Book Your Session
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional podcast and video content from the heart of Nottingham&apos;s Lace Market.
            </p>
          </div>

          {/* Progress */}
          {step !== 'success' && (
            <div className="flex items-center justify-center gap-2 mb-12">
              {steps.map((s, i) => {
                const isActive = steps.findIndex((x) => x.id === step) >= i
                const isCurrent = s.id === step
                return (
                  <div key={s.id} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        isCurrent
                          ? 'bg-red-600 text-white'
                          : isActive
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-800 text-gray-500'
                      }`}
                    >
                      {isActive && !isCurrent ? <Check className="w-4 h-4" /> : i + 1}
                    </div>
                    <span
                      className={`text-sm hidden sm:block ${
                        isCurrent ? 'text-white font-medium' : isActive ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {s.label}
                    </span>
                    {i < steps.length - 1 && (
                      <div className={`w-8 h-px ${isActive ? 'bg-gray-600' : 'bg-gray-800'}`} />
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* Step Content */}
          <div className="bg-white rounded-sm overflow-hidden">
            {step === 'plan' && (
              <div className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-2">Select your plan</h2>
                <p className="text-gray-600 mb-8">Choose the studio or package that fits your needs.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`text-left p-6 border-2 transition-all hover:border-red-600 ${
                        plan.highlight
                          ? 'border-red-600 bg-red-50'
                          : plan.popular
                          ? 'border-black'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <plan.icon className="w-8 h-8 text-red-600" />
                        {plan.popular && (
                          <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                        {plan.highlight && (
                          <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
                            Premium
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-black">£{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-red-600 font-semibold">
                        Select <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 'calendar' && (
              <BookingCalendar
                selectedPlan={selectedPlan}
                onSelect={handleCalendarSelect}
              />
            )}

            {step === 'details' && (
              <BookingForm
                initialData={{
                  date: bookingData.date,
                  time: bookingData.time,
                  plan: bookingData.plan,
                }}
                onSubmit={handleDetailsSubmit}
              />
            )}

            {step === 'confirm' && (
              <BookingPayment
                bookingData={bookingData}
                onComplete={handleConfirm}
                onBack={() => setStep('details')}
              />
            )}

            {step === 'success' && (
              <BookingConfirmation
                bookingData={{
                  date: bookingData.date,
                  time: bookingData.time,
                  plan: bookingData.plan,
                  firstName: bookingData.firstName,
                  lastName: bookingData.lastName,
                  email: bookingData.email,
                }}
              />
            )}
          </div>

          {/* Info cards */}
          {step === 'plan' && (
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
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
