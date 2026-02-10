'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main-hero-1770693827466.png"
          alt="Modern dental care facility"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900 opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 lg:py-48">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Premium dental care with a{' '}
            <span className="font-semibold text-primary-400">personal touch</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-slate-200 font-light leading-relaxed mb-12 max-w-2xl transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Where your smile is our priority. Serving Houston families with excellence, 
            compassion, and state-of-the-art technology.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="tel:7136477500"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call Now: (713) 647-7500
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Indicator */}
          <div
            className={`mt-16 flex flex-wrap items-center gap-8 text-slate-300 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-primary-400" />
              <span className="text-sm font-light">Trusted by Houston families since 1995</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 animate-bounce">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}