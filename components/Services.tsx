'use client';

import Image from 'next/image';
import { CheckCircle, Calendar, Shield, Sparkles, Clock, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Preventive Care',
      description: 'Regular checkups, cleanings, and preventive treatments to keep your smile healthy and bright.',
      features: ['Comprehensive Exams', 'Professional Cleanings', 'Fluoride Treatments', 'Oral Cancer Screenings'],
      icon: Shield,
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic treatments designed to boost your confidence.',
      features: ['Teeth Whitening', 'Veneers & Bonding', 'Smile Makeovers', 'Invisalign®'],
      icon: Sparkles,
    },
    {
      title: 'Restorative Dentistry',
      description: 'Restore function and beauty to damaged teeth with our comprehensive restorative solutions.',
      features: ['Dental Implants', 'Crowns & Bridges', 'Root Canal Therapy', 'Dentures'],
      icon: Heart,
    },
  ];

  const features = [
    {
      title: 'Same-Day Appointments',
      description: 'Dental emergencies don\'t wait. We offer same-day appointments for urgent needs.',
      icon: Clock,
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment ensures precise, comfortable, and efficient treatments.',
      icon: Sparkles,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Evening and weekend appointments available to fit your busy lifestyle.',
      icon: Calendar,
    },
  ];

  return (
    <section id="services" className="relative bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
            Comprehensive Dental Care
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From routine checkups to complete smile transformations, we provide the full spectrum of dental services with comfort and care at the heart of everything we do.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-primary-500 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mb-6 text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Image Section with Features */}
        <div className="mt-32 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/services-overview-feature-1770693836524.png"
              alt="Modern dental treatment room with advanced technology"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Why Choose Teeth Are Us?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We combine cutting-edge technology with personalized care to deliver exceptional results in a comfortable, welcoming environment. Your smile deserves nothing less.
            </p>
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                      <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Image Section */}
        <div className="mt-32 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Patient-Centered Experience
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We understand that visiting the dentist can be stressful. That's why we've created a calming environment where you feel heard, respected, and cared for. Every treatment plan is customized to your unique needs and goals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-500" />
                <div>
                  <span className="font-semibold text-gray-900">Comfort-First Approach</span>
                  <p className="text-gray-600 mt-1">Sedation options and gentle techniques for anxiety-free visits</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-500" />
                <div>
                  <span className="font-semibold text-gray-900">Transparent Pricing</span>
                  <p className="text-gray-600 mt-1">Clear cost estimates and flexible payment plans for every budget</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-primary-500" />
                <div>
                  <span className="font-semibold text-gray-900">Family-Friendly Care</span>
                  <p className="text-gray-600 mt-1">Comprehensive services for patients of all ages, from children to seniors</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-md order-1 lg:order-2">
            <Image
              src="/images/services-overview-feature-1770693836800.png"
              alt="Friendly dental team providing personalized patient care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-10">
            Schedule your appointment today and discover why Houston families trust us with their smiles.
          </p>
          <button className="inline-flex items-center rounded-lg bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-600 hover:shadow-md">
            Book Your Visit
            <Calendar className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}