'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle } from 'lucide-react'

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-brand-50 border-b border-brand-100">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            From initial concept through ongoing care, GrandScapes delivers comprehensive landscaping solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="container-max space-y-16">
          {serviceDetails.map((service, idx) => (
            <div key={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <div className="mb-8">
                  <h3 className="font-bold text-xl mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="btn-primary">
                  Learn More
                </Link>
              </div>
              
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div key={idx}>
                <div className="bg-brand-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your free consultation and let's discuss how we can transform your landscape.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-brand-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const serviceDetails = [
  {
    id: 1,
    title: 'Landscape Design',
    description: 'Every great landscape starts with thoughtful design. Our team works with you to understand your vision, lifestyle, and budget to create a custom design that maximizes beauty, functionality, and property value.',
    image: 'https://images.unsplash.com/photo-1518756131959-cf0ee1d31e38?w=600&h=500&fit=crop',
    features: [
      'Site assessment and consultation',
      'Custom design concept & renderings',
      'Plant selection for climate & maintenance',
      'Hardscape planning and layout',
      '3D visualization',
      'Budget-conscious planning'
    ]
  },
  {
    id: 2,
    title: 'Installation',
    description: 'Our installation team brings designs to life with precision, attention to detail, and quality craftsmanship. From planting native species to constructing hardscape elements, we handle every aspect of installation.',
    image: 'https://images.unsplash.com/photo-1584552903697-c6403a8f2cd2?w=600&h=500&fit=crop',
    features: [
      'Soil preparation and grading',
      'Professional planting',
      'Hardscape construction',
      'Irrigation system installation',
      'Outdoor lighting design & installation',
      'Project completion & cleanup'
    ]
  },
  {
    id: 3,
    title: 'Maintenance & Care',
    description: 'A beautiful landscape requires ongoing care. Our maintenance programs keep your property looking pristine year-round with seasonal services, regular mowing, pruning, and disease management.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0bb3e81?w=600&h=500&fit=crop',
    features: [
      'Weekly lawn maintenance',
      'Seasonal plantings',
      'Pruning and trimming',
      'Mulching and edging',
      'Weed and pest management',
      'Seasonal cleanup'
    ]
  },
  {
    id: 4,
    title: 'Hardscape & Outdoor Living',
    description: 'Extend your living space outdoors with custom hardscape elements. From patios and walkways to pergolas and water features, we create stunning outdoor environments for entertaining and relaxing.',
    image: 'https://images.unsplash.com/photo-1585570149921-17188c8ce183?w=600&h=500&fit=crop',
    features: [
      'Patio & deck design & construction',
      'Walkways and stepping stones',
      'Retaining walls',
      'Water features & fountains',
      'Pergolas and shade structures',
      'Lighting & fire features'
    ]
  }
]

const process = [
  {
    title: 'Consultation',
    description: 'Initial meeting to discuss your vision, goals, and budget.'
  },
  {
    title: 'Design',
    description: 'Custom design tailored to your needs with detailed renderings.'
  },
  {
    title: 'Installation',
    description: 'Professional execution of design with quality craftsmanship.'
  },
  {
    title: 'Maintenance',
    description: 'Ongoing care to keep your landscape beautiful year-round.'
  }
]
