'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Award, Users, Leaf } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-brand-50 border-b border-brand-100">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About GrandScapes</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Over 16 years of creating beautiful, functional outdoor spaces in the Greater Charleston area.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Adam Duke's Vision</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                When Adam Duke founded GrandScapes in 2007, he had one goal: to bring design-first thinking to landscape architecture in the Lowcountry. What started as a passion for beautiful outdoor spaces has grown into Mount Pleasant's most trusted landscape design and installation company.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Adam believes that every property has untapped potential. Whether you're starting from scratch or renovating an existing landscape, our design-first approach ensures your space is not just beautiful, but perfectly suited to your lifestyle.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, with over 50 years of combined team experience, we continue that mission: creating landscapes that stand out, last longer, and deliver real value.
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Adam Duke - Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-l-4 border-brand-600 pl-6">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">16+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="border-l-4 border-brand-600 pl-6">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">500+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="border-l-4 border-brand-600 pl-6">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">50+</h3>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <Award className="w-12 h-12 text-brand-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Design Excellence</h3>
              <p className="text-gray-600">
                Every project starts with thoughtful design. We combine aesthetics, functionality, and your vision to create landscapes that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <Users className="w-12 h-12 text-brand-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Client First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen, communicate clearly, and deliver results that match your vision and lifestyle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <Leaf className="w-12 h-12 text-brand-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Every detail matters. Our licensed, bonded, and insured team takes pride in executing projects with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Recognition & Credentials</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8">
              <Award className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Mt. Pleasant Magazine Award</h3>
              <p className="text-gray-600">
                Honored as "Landscaper of the Year" for 8 consecutive years (2017-2025), recognizing our commitment to excellence and community service.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-8">
              <Award className="w-10 h-10 text-brand-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Licensed, Bonded & Insured</h3>
              <p className="text-gray-600">
                All team members are fully licensed professionals. We're bonded and insured for your peace of mind and protection.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-brand-50 border border-brand-200 rounded-lg p-8 text-center">
            <p className="text-lg text-gray-700">
              <strong>Preferred Landscaper:</strong> Mount Pleasant's most trusted landscape design and installation company. Serving residential and commercial properties across the Greater Charleston area.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Meet The Team</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="GrandScapes Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our team is made up of passionate landscape professionals with deep roots in the Lowcountry. With over 50 years of combined experience, we bring expertise, dedication, and a genuine love for what we do.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                From designers to installers to maintenance crews, every member of the GrandScapes team is committed to creating and maintaining the most beautiful landscapes in the Greater Charleston area.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you need expert design consultation, precision installation, or ongoing landscape maintenance, you can count on our team to deliver results that exceed your expectations.
              </p>
              
              <Link href="/contact" className="btn-primary">
                Connect With Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your landscape vision and how we can help bring it to life.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-brand-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
