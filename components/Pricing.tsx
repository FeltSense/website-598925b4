'use client'

import { useState } from 'react'
import { Check, Shield, Clock } from 'lucide-react'

export default function Pricing() {
  const [isLoading, setIsLoading] = useState(false)

  const handlePreOrder = async () => {
    setIsLoading(true)
    try {
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID
      if (!priceId) {
        alert('Stripe not configured. Please contact support.')
        setIsLoading(false)
        return
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId })
      })

      const { url, error } = await response.json()
      
      if (error) {
        alert('Payment system error. Please try again.')
        console.error(error)
        setIsLoading(false)
        return
      }

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Unable to process. Please try again.')
      setIsLoading(false)
    }
  }

  const benefits = [
    'Priority appointment scheduling',
    'Exclusive member-only dental health resources',
    'Complimentary initial consultation',
    ' 10% discount on first year of services',
    'Direct line to our care team'
  ]

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Reserve Your Spot
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Join our founding members and experience premium dental care with exclusive benefits
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-sm">
                <Clock className="w-4 h-4" />
                Limited Early Access
              </span>
            </div>

            <div className="mt-6 mb-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl lg:text-6xl font-light text-gray-900">$29</span>
                <span className="text-lg text-gray-600 font-light">one-time</span>
              </div>
              <p className="text-center text-sm text-gray-500 mt-2 font-light">
                Founding member registration
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-light">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handlePreOrder}
              disabled={isLoading}
              className="block w-full py-4 px-6 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-full text-center transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {isLoading ? 'Processing...' : 'Pre-Order for $29'}
            </button>

            <div className="mt-6 space-y-2 text-center">
              <p className="text-sm text-gray-600 font-light">
                Join <span className="font-medium text-primary-600">250+</span> Houston families
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Secure payment powered by Stripe</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 font-light max-w-md mx-auto">
            Limited spots available. Reserve your place today and become part of our dental care family.
          </p>
        </div>
      </div>
    </section>
  )
}