'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Building } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-r from-primary to-primary/80">
      {/* Background Image Placeholder - Replace with actual image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      
      <div className="container-custom relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quality Steel Solutions for Your Construction Needs
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Sellers of second grade, factory reject mabatis, tubes, TMT offcuts, nails, and all fabrication accessories.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <MapPin size={20} />
              <span>1231, Kondele, Kisumu, Kenya</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Building size={20} />
              <span>Open Now</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/254715871984"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2"
            >
              <Phone size={20} /> Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Request Quote
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-4">
        <div className="container-custom">
          <div className="flex justify-around text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">2.9K+</div>
              <div className="text-sm">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">828+</div>
              <div className="text-sm">Following</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}