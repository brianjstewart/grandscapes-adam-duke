'use client'

import Link from 'next/link'
import { Award, Leaf, Hammer, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=700&fit=crop"
            alt="Beautiful landscaped garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative container-max h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Landscape Design, Installation & Maintenance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transform your outdoor space into a stunning sanctuary. Mount Pleasant's preferred landscaper since 2007.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get Your Free Consultation
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 md:py-16 bg-brand-50 border-b border-brand-100">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Mt. Pleasant Magazine</h3>
                <p className="text-gray-600">Landscaper of the Year 2017-2025</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">50+ Years Combined</h3>
                <p className="text-gray-600">Licensed, bonded, and insured professionals</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Leaf className="w-8 h-8 text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">16+ Years of Excellence</h3>
                <p className="text-gray-600">Serving the Greater Charleston area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Landscaping Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial design through ongoing maintenance, we deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link key={service.id} href="/services">
                <div className="h-full border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-brand-300 transition-all cursor-pointer bg-white">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Real projects from real clients. Before and after transformations.
            </p>
            <Link href="/portfolio" className="btn-primary">
              View Full Portfolio →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioPreview.map((project) => (
              <Link key={project.id} href="/portfolio">
                <div className="group overflow-hidden rounded-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-brand-600 font-semibold mb-2">{project.service}</p>
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Landscape?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover what's possible for your outdoor space.
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

const services = [
  {
    id: 1,
    name: 'Design',
    description: 'Custom landscape design tailored to your vision and lifestyle.',
    icon: Leaf,
  },
  {
    id: 2,
    name: 'Installation',
    description: 'Expert installation of hardscape, planting, and irrigation.',
    icon: Hammer,
  },
  {
    id: 3,
    name: 'Maintenance',
    description: 'Ongoing lawn care and landscape maintenance programs.',
    icon: Users,
  },
  {
    id: 4,
    name: 'Hardscape',
    description: 'Patios, walkways, and stone work that lasts.',
    icon: Award,
  },
]

const portfolioPreview = [
  {
    id: 1,
    title: 'Modern Patio Installation',
    service: 'Hardscape',
    description: 'Complete backyard transformation with custom patio and lighting.',
    image: 'https://images.unsplash.com/photo-1572620644677-e57f3e4d3f48?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Garden Bed Design',
    service: 'Design',
    description: 'Seasonal plantings with native species for year-round color.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Landscape Renovation',
    service: 'Installation',
    description: 'Full property renovation from concept to completion.',
    image: 'https://images.unsplash.com/photo-1599599810994-40dbd3e6b4f4?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Water Feature Design',
    service: 'Design',
    description: 'Custom pond and water features for visual interest.',
    image: 'https://images.unsplash.com/photo-1518066331714-7c46b76318c7?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Maintenance Program',
    service: 'Maintenance',
    description: 'Seasonal landscaping and lawn care management.',
    image: 'https://images.unsplash.com/photo-1500595046891-b5cdc3a549f0?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Hardscape Integration',
    service: 'Hardscape',
    description: 'Integrated design combining plants and stonework.',
    image: 'https://images.unsplash.com/photo-1558183983-28b9b4b10f38?w=600&h=400&fit=crop',
  },
]
