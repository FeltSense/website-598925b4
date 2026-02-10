'use client'

import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-primary-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 opacity-90" />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Ready for Your Best Smile?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Schedule your appointment today and experience the difference of premium dental care 
            with a personal touch. New patients welcome.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {/* Primary CTA - Call Now */}
            <Link 
              href="tel:7136477500"
              className="group inline-flex items-center gap-3 bg-white text-primary-500 px-10 py-5 rounded-lg font-medium text-lg hover:bg-white/95 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span>Call Now: (713) 647-7500</span>
            </Link>
            
            {/* Secondary CTA - Book Online */}
            <Link 
              href="#pricing"
              className="group inline-flex items-center gap-3 bg-white/10 text-white px-10 py-5 rounded-lg font-medium text-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Book Online</span>
            </Link>
          </div>
          
          {/* Trust indicator */}
          <p className="text-white/70 text-sm font-light pt-6">
            Same-day appointments available • Flexible payment plans • Most insurance accepted
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
    </section>
  )
}