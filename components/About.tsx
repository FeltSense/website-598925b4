'use client';

import Image from 'next/image';
import { Award, Heart, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '15,000+', label: 'Happy Patients' },
    { icon: Clock, value: '25+', label: 'Years of Excellence' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Heart, value: '98%', label: 'Patient Satisfaction' },
  ];

  const values = [
    {
      title: 'Patient-Centered Care',
      description: 'Your comfort and wellbeing are at the heart of everything we do. We listen, understand, and tailor every treatment to your unique needs.',
    },
    {
      title: 'Excellence in Dentistry',
      description: 'Our team stays at the forefront of dental innovation, combining decades of expertise with the latest technology to deliver exceptional results.',
    },
    {
      title: 'Trusted by Families',
      description: 'From your child\'s first tooth to grandparent\'s implants, we\'re honored to care for Houston families across every stage of life.',
    },
  ];

  return (
    <section id="about" className="bg-white">
      {/* Hero Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Where Your Smile{' '}
              <span className="font-semibold text-primary-500">Becomes Our Mission</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                For over 25 years, Teeth Are Us has been more than just a dental practice—we've been a
                cornerstone of the Houston community, treating generations of families with the care and
                attention they deserve.
              </p>
              <p>
                Founded by Dr. Sarah Martinez in 1998, our practice was built on a simple belief: exceptional
                dental care doesn't have to feel clinical or impersonal. Every patient who walks through our
                doors is welcomed like family, treated with compassion, and given the personalized attention
                that creates truly beautiful, healthy smiles.
              </p>
              <p>
                Today, our state-of-the-art facility combines cutting-edge technology with the warm, personal
                touch that has always defined us. From routine cleanings to complex restorations, we're here
                to make your dental experience comfortable, effective, and even enjoyable.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/cta-appointment-background-1770693844186.png"
                alt="Teeth Are Us dental practice - modern, welcoming environment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent-500 text-white p-8 rounded-xl shadow-lg max-w-xs">
              <p className="text-3xl font-semibold mb-2">25+ Years</p>
              <p className="text-accent-100 font-light">
                of serving Houston families with excellence and compassion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-4xl font-semibold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600 font-light">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Our <span className="font-semibold text-primary-500">Core Values</span>
          </h3>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            The principles that guide every interaction, every treatment, and every smile we create
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md hover:border-primary-300 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Experience the Teeth Are Us Difference
          </h3>
          <p className="text-xl text-primary-100 font-light mb-8">
            Join the thousands of Houston families who trust us with their smiles. Schedule your visit today
            and discover dental care that's truly personal.
          </p>
          <button className="bg-accent-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-600 hover:scale-105 transition-all duration-300 shadow-md">
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}