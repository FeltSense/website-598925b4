'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Dr. Martinez and her team transformed my smile and my confidence. After years of avoiding the dentist, their gentle approach and modern technology made every visit comfortable. I actually look forward to my appointments now!",
      name: "Sarah Johnson",
      role: "Patient since 2019",
      image: "/images/testimonial-testimonials-patients-0-1770693819829.jpg",
      rating: 5
    },
    {
      quote: "As a parent, finding a dentist my kids trust was crucial. The entire staff goes above and beyond to make dental care fun and stress-free. My children no longer dread checkups – they're excited to visit!",
      name: "Michael Chen",
      role: "Family Patient",
      image: "/images/testimonial-testimonials-patients-0-1770693820386.jpg",
      rating: 5
    },
    {
      quote: "The combination of cutting-edge technology and personal attention is unmatched. From my first consultation to the final result, every detail was handled with precision and care. Truly exceptional dental care.",
      name: "Emily Rodriguez",
      role: "Patient since 2021",
      image: "/images/testimonial-testimonials-patients-0-1770693821282.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Real experiences from the families we're honored to serve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 font-light leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 font-light mb-6">
            Join hundreds of satisfied patients who trust us with their smiles
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            Schedule Your Visit
          </a>
        </div>
      </div>
    </section>
  )
}