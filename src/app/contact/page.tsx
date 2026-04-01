'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'design',
    timeline: 'flexible',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would go to backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'design',
        timeline: 'flexible',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-brand-50 border-b border-brand-100">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Ready to start your landscape project? Reach out to schedule your free consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <Phone className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+18435551234" className="text-brand-600 hover:text-brand-700 font-semibold">
                (843) 555-1234
              </a>
              <p className="text-gray-600 text-sm mt-2">Available Monday-Saturday, 8am-5pm</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <Mail className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:info@grandscapes.com" className="text-brand-600 hover:text-brand-700 font-semibold">
                info@grandscapes.com
              </a>
              <p className="text-gray-600 text-sm mt-2">We respond within 24 hours</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <MapPin className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-700 font-semibold">Mount Pleasant, SC</p>
              <p className="text-gray-600 text-sm mt-2">Serving Charleston & surrounding areas</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    placeholder="(843) 555-1234"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                  >
                    <option value="design">Landscape Design</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="hardscape">Hardscape</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                  >
                    <option value="immediate">Immediate (This Month)</option>
                    <option value="soon">Soon (1-3 Months)</option>
                    <option value="planning">Planning (3-6 Months)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    placeholder="Share details about your landscape vision..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                    Thank you! We'll be in touch within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choose GrandScapes?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-100">
                      <span className="text-brand-600 font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Free Consultation</h3>
                    <p className="text-gray-600">
                      Start with a free, no-obligation consultation to discuss your landscape vision.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-100">
                      <span className="text-brand-600 font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Design-First Approach</h3>
                    <p className="text-gray-600">
                      Every project starts with thoughtful design tailored to your needs and budget.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-100">
                      <span className="text-brand-600 font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Professional Team</h3>
                    <p className="text-gray-600">
                      Licensed, bonded, and insured professionals with 50+ years of combined experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-100">
                      <span className="text-brand-600 font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Award-Winning</h3>
                    <p className="text-gray-600">
                      Recognized as Mt. Pleasant Magazine's Landscaper of the Year for 8 consecutive years.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-100">
                      <span className="text-brand-600 font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Comprehensive maintenance programs to keep your landscape beautiful year-round.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-12 bg-brand-50 border border-brand-200 rounded-lg p-6">
                <div className="flex gap-3 mb-4">
                  <Clock className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <h3 className="font-bold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
