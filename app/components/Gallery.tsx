'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, Grid3X3, LayoutGrid, ZoomIn, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const galleryImages = [
  { src: '/images/showroom.jpg', alt: 'MIBS Steel Showroom', category: 'Showroom', size: 'large' },
  { src: '/images/roofing-installation.jpg', alt: 'Roofing Installation', category: 'Installation', size: 'medium' },
  { src: '/images/customer-project.jpg', alt: 'Customer Project - New Home', category: 'Projects', size: 'medium' },
  { src: '/images/customer-project2.jpg', alt: 'Commercial Building Project', category: 'Projects', size: 'large' },
  { src: '/images/wholesale-bags.jpg', alt: 'Wholesale Nails 50kg Bags', category: 'Products', size: 'small' },
  { src: '/images/tmt-bars-closeup.jpg', alt: 'TMT Bars Close-up', category: 'Products', size: 'medium' },
]

const categories = ['All', 'Showroom', 'Products', 'Installation', 'Projects']

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  // Auto-play slideshow
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
    if (!isAutoPlaying && selectedImage !== null) {
      const interval = setInterval(() => {
        setSelectedImage(prev => (prev !== null ? (prev + 1) % filteredImages.length : 0))
      }, 3000)
      return () => clearInterval(interval)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Header with flair */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1 mb-4">
            <span className="text-primary text-sm">📸 Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Project <span className="text-secondary">Gallery</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See the quality of our steel products in real projects across Kisumu
          </p>
        </motion.div>

        {/* Category Filter & View Toggle */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition ${
                viewMode === 'grid' 
                  ? 'bg-secondary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg transition ${
                viewMode === 'masonry' 
                  ? 'bg-secondary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>

        {/* Gallery Grid - Masonry or Regular */}
        <motion.div 
          layout
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min'
          }`}
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  viewMode === 'masonry' && image.size === 'large' ? 'md:row-span-2' : ''
                } ${viewMode === 'masonry' && image.size === 'small' ? 'md:row-span-1' : ''}`}
                style={{ minHeight: viewMode === 'masonry' && image.size === 'large' ? '500px' : '280px' }}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-secondary font-semibold">{image.category}</p>
                      <p className="text-sm font-medium">{image.alt}</p>
                    </div>
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No images in this category yet.</p>
          </div>
        )}

        {/* Modern Lightbox Modal with Navigation */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-white hover:text-secondary transition z-10 bg-black/50 rounded-full p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X size={28} />
              </button>
              
              {/* Auto-play Toggle */}
              <button 
                className="absolute top-4 left-4 text-white hover:text-secondary transition z-10 bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAutoPlay()
                }}
              >
                {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              
              {/* Navigation Arrows */}
              <button 
                className="absolute left-4 text-white hover:text-secondary transition bg-black/50 rounded-full p-2 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft size={32} />
              </button>
              
              <button 
                className="absolute right-4 text-white hover:text-secondary transition bg-black/50 rounded-full p-2 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight size={32} />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                {selectedImage + 1} / {filteredImages.length}
              </div>
              
              {/* Image */}
              <div 
                className="relative w-full max-w-6xl h-[85vh] mx-4 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-semibold">{filteredImages[selectedImage].alt}</p>
                  <p className="text-gray-300 text-sm">{filteredImages[selectedImage].category}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}