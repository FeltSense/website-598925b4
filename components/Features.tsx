'use client'

import { Star, Shield, Clock, Heart, Users, Award, DollarSign, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
  const features = [
    {
      icon: Star,
      title: '5-Star Rated Practice',
      description: 'Exceptional patient satisfaction with hundreds of five-star reviews from Houston families who trust us with their smiles.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Dental Care',
      description: 'Complete services from preventive care and cleanings to advanced cosmetic and restorative dentistry—all under one roof.'
    },
    {
      icon: Sparkles,
      title: 'State-of-the-Art Technology',
      description: 'Modern equipment and techniques for comfortable, pain-free procedures that get you back to your day faster.',
      image: '/images/services-overview-feature-1770693826845.png'
    },
    {
      icon: Heart,
      title: 'Experienced, Caring Team',
      description: 'Our dental professionals combine years of expertise with genuine compassion to make every visit comfortable and stress-free.'
    },
    {
      icon: Clock,
      title: 'Convenient & Flexible',
      description: 'Prime Houston location with flexible scheduling including early morning, evening, and weekend appointments to fit your life.'
    },
    {
      icon: Award,
      title: 'Emergency Services',
      description: 'Dental emergencies don't wait. We offer same-day emergency care when you need it most.',
      image: '/images/services-overview-feature-1770693826848.png'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Free consultations and clear, upfront pricing. No surprises—just honest dental care you can afford.'
    },
    {
      icon: Users,
      title: 'Family-Friendly',
      description: 'Welcoming patients of all ages, from toddlers to grandparents. Your whole family's dental home in Houston.'
    }
  ]

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            Why Choose Teeth Are Us
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Experience dental care that puts your comfort and confidence first. Here's what makes us different.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-lg p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-md"
            >
              {feature.image && (
                <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
          <p className="text-xl text-gray-900 font-light mb-6">
            Ready to experience the difference? Your healthier, brighter smile starts here.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors duration-200"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}