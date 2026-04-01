'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <span className="font-bold text-xl">GrandScapes</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mount Pleasant's preferred landscaper since 2007. Landscape design, installation, and maintenance for residential and commercial properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#design" className="text-gray-400 hover:text-white transition-colors">Landscape Design</Link></li>
              <li><Link href="/services#installation" className="text-gray-400 hover:text-white transition-colors">Installation</Link></li>
              <li><Link href="/services#maintenance" className="text-gray-400 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link href="/services#hardscape" className="text-gray-400 hover:text-white transition-colors">Hardscape</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Mount Pleasant, SC 29464</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <a href="tel:+18435551234" className="text-gray-400 hover:text-white transition-colors">(843) 555-1234</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <a href="mailto:info@grandscapes.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">info@grandscapes.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GrandScapes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
