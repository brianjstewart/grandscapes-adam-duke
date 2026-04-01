'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-brand-50 border-b border-brand-100">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our collection of completed projects showcasing our design expertise and craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap gap-3">
            {['all', 'design', 'installation', 'hardscape', 'maintenance'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors capitalize ${
                  filter === category
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div key={project.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-white">
                {/* Before/After */}
                <div className="relative h-80 bg-gray-200 overflow-hidden">
                  <div className="flex h-full">
                    {/* Before */}
                    <div className="relative w-1/2">
                      <img
                        src={project.imageBefore}
                        alt={`${project.title} - Before`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded text-xs font-semibold">
                        BEFORE
                      </div>
                    </div>
                    
                    {/* After */}
                    <div className="relative w-1/2">
                      <img
                        src={project.imageAfter}
                        alt={`${project.title} - After`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-brand-600 text-white px-3 py-1 rounded text-xs font-semibold">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
                      {project.category}
                    </p>
                    <p className="text-sm text-gray-500">{project.year}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm border-t border-gray-200 pt-4">
                    <div>
                      <p className="text-gray-500">Location</p>
                      <p className="font-semibold text-gray-900">{project.location}</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-gray-500">Scope</p>
                      <p className="font-semibold text-gray-900">{project.scope}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-50 border-t border-brand-100">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">See Your Landscape Potential</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every space has potential. Let's discuss how we can transform your property.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const projects = [
  {
    id: 1,
    title: 'Modern Patio Oasis',
    category: 'hardscape',
    year: '2024',
    description: 'Complete backyard transformation with stamped concrete patio, integrated seating, and ambient lighting.',
    imageBefore: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop&blend=https://images.unsplash.com/photo-1585570149921-17188c8ce183?w=300&h=300&fit=crop&blend-mode=overlay',
    location: 'Mount Pleasant',
    scope: '2,500 sq ft'
  },
  {
    id: 2,
    title: 'Native Plant Garden',
    category: 'design',
    year: '2024',
    description: 'Seasonal perennial beds with native species for pollinator habitat and minimal maintenance.',
    imageBefore: 'https://images.unsplash.com/photo-1500382017468-7049fbb0d2b6?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop',
    location: 'Charleston',
    scope: '1,800 sq ft'
  },
  {
    id: 3,
    title: 'Residential Landscape Renovation',
    category: 'installation',
    year: '2023',
    description: 'Full property redesign with new lawn, shrub beds, irrigation, and landscape lighting.',
    imageBefore: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd7b7b0?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1585570149921-17188c8ce183?w=300&h=300&fit=crop',
    location: 'Mount Pleasant',
    scope: '0.75 acres'
  },
  {
    id: 4,
    title: 'Water Feature Installation',
    category: 'hardscape',
    year: '2023',
    description: 'Custom pond with waterfall, surrounding plantings, and landscape integration.',
    imageBefore: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1518756131959-cf0ee1d31e38?w=300&h=300&fit=crop',
    location: 'Isle of Palms',
    scope: '3,000 sq ft'
  },
  {
    id: 5,
    title: 'Commercial Property Maintenance',
    category: 'maintenance',
    year: '2023',
    description: 'Ongoing seasonal care program with landscape management for office complex.',
    imageBefore: 'https://images.unsplash.com/photo-1582383537101-61a02779e73b?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1584552903697-c6403a8f2cd2?w=300&h=300&fit=crop',
    location: 'Downtown Charleston',
    scope: '5+ acres'
  },
  {
    id: 6,
    title: 'Front Entry Curb Appeal',
    category: 'design',
    year: '2023',
    description: 'Dramatic entry transformation with custom plantings, hardscape, and color coordination.',
    imageBefore: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1605276374104-dee2a0bb3e81?w=300&h=300&fit=crop',
    location: 'Mount Pleasant',
    scope: '800 sq ft'
  },
  {
    id: 7,
    title: 'Hardscape Walkway System',
    category: 'hardscape',
    year: '2022',
    description: 'Permeable paver walkway with integrated lighting and surrounding planting beds.',
    imageBefore: 'https://images.unsplash.com/photo-1499182915898-c01e0e2dc8ce?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1585570149921-17188c8ce183?w=300&h=300&fit=crop',
    location: 'Sullivan\'s Island',
    scope: '1,500 sq ft'
  },
  {
    id: 8,
    title: 'Seasonal Planting Program',
    category: 'maintenance',
    year: '2022',
    description: 'Year-round color rotation with spring bulbs, summer annuals, and fall mums.',
    imageBefore: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop',
    location: 'Charleston',
    scope: '2,000 sq ft'
  },
  {
    id: 9,
    title: 'Shade Garden Design',
    category: 'design',
    year: '2022',
    description: 'Strategic plant selection for shaded area with hostas, ferns, and shade perennials.',
    imageBefore: 'https://images.unsplash.com/photo-1500595046891-b5cdc3a549f0?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop',
    location: 'Mount Pleasant',
    scope: '1,200 sq ft'
  },
  {
    id: 10,
    title: 'Deck & Patio Extension',
    category: 'installation',
    year: '2022',
    description: 'Connection of existing deck with new patio area for expanded outdoor living.',
    imageBefore: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1585570149921-17188c8ce183?w=300&h=300&fit=crop',
    location: 'Summerville',
    scope: '2,000 sq ft'
  },
  {
    id: 11,
    title: 'Xeriscape Conversion',
    category: 'design',
    year: '2021',
    description: 'Low-water landscape design with native plants for drought tolerance.',
    imageBefore: 'https://images.unsplash.com/photo-1500382017468-7049fbb0d2b6?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1518756131959-cf0ee1d31e38?w=300&h=300&fit=crop',
    location: 'Mount Pleasant',
    scope: '3,500 sq ft'
  },
  {
    id: 12,
    title: 'Property Maintenance Upgrade',
    category: 'maintenance',
    year: '2021',
    description: 'Transition to comprehensive maintenance program with improved grounds appearance.',
    imageBefore: 'https://images.unsplash.com/photo-1582383537101-61a02779e73b?w=300&h=300&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1605276374104-dee2a0bb3e81?w=300&h=300&fit=crop',
    location: 'Downtown Charleston',
    scope: '3+ acres'
  }
]
