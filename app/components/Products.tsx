'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Package, Ruler, HardHat, Wrench, Truck, Shield, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const productCategories = [
  {
    icon: <Ruler size={40} />,
    title: "TMT Bars",
    image: "/images/tmt-bars.jpg",
    imageAlt: "TMT steel bars 6 meters D8 D10 D12 D16",
    items: ["D8 (6m) - KES 240", "D10 (6m) - KES 400", "D12 (6m) - KES 560", "D16 (6m) - KES 950"],
    color: "from-blue-500 to-blue-600",
    badge: "Best Seller",
    price: "From KES 240"
  },
  {
    icon: <Package size={40} />,
    title: "Mabati (Roofing Sheets)",
    image: "/images/mabati-roofing.jpg",
    imageAlt: "Aluzinc and Maisha roofing sheets",
    items: ["Aluzinc 2m 32g - KES 500", "Aluzinc 3m 32g - KES 760", "Maisha Aluzinc 2.5m 30g - KES 750", "Box Profile Coloured 3m 30g - KES 1380"],
    color: "from-orange-500 to-orange-600",
    badge: "Hot Deal",
    price: "From KES 500"
  },
  {
    icon: <Wrench size={40} />,
    title: "Tube Rejects",
    image: "/images/tube-rejects.jpg",
    imageAlt: "Square tubes and RHS pipes",
    items: ["Square Tube ¾", "Square Tube 1\"", "RHS", "Square Tube 1½×1½"],
    color: "from-gray-600 to-gray-700",
    badge: "Limited Stock",
    price: "Call for Price"
  },
  {
    icon: <HardHat size={40} />,
    title: "Weldmesh",
    image: "/images/weldmesh.jpg",
    imageAlt: "Welded mesh rolls and sheets",
    items: ["Light (Reject) - KES 290", "Medium (Reject) - KES 400", "Heavy (Reject) - KES 550", "Heavy - KES 850"],
    color: "from-green-500 to-green-600",
    badge: "Wholesale",
    price: "From KES 290"
  },
  {
    icon: <Shield size={40} />,
    title: "Nails",
    image: "/images/nails.jpg",
    imageAlt: "Roofing and normal nails",
    items: ["Roofing Nail - KES 250/kg", "Normal Nails - KES 180/kg", "Wholesale (50kg bag)"],
    color: "from-red-500 to-red-600",
    badge: "Bulk Discount",
    price: "From KES 180/kg"
  },
  {
    icon: <Truck size={40} />,
    title: "Accessories",
    image: "/images/accessories.jpg",
    imageAlt: "Cutting discs, grinding discs and accessories",
    items: ["Cutting Discs @ KES 200", "Grinding Discs @ KES 200", "Barbed Wire", "Chainlink"],
    color: "from-purple-500 to-purple-600",
    badge: "New Arrivals",
    price: "From KES 200"
  }
]

// Individual Product Card Component with 3D Tilt
function ProductCard({ category, index }: { category: typeof productCategories[0], index: number }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXValue = ((y - centerY) / centerY) * 8
    const rotateYValue = ((x - centerX) / centerX) * 8
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {category.badge}
        </span>
      </div>
      
      {/* Price Tag */}
      <div className="absolute bottom-4 right-4 z-10 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
        {category.price}
      </div>
      
      {/* Image Container with Zoom */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 rotate-1' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Shimmer effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full ${isHovered ? 'animate-shimmer' : ''}`} />
      </div>
      
      {/* Header */}
      <div className={`bg-gradient-to-r ${category.color} p-4 text-white relative overflow-hidden`}>
        <div className="flex items-center gap-3 relative z-10">
          <div className="transition-transform duration-300 group-hover:scale-110">
            {category.icon}
          </div>
          <h3 className="text-xl font-bold">{category.title}</h3>
        </div>
        {/* Animated background line */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 transition-all duration-500 group-hover:w-full w-0" />
      </div>
      
      {/* Product List */}
      <div className="p-6">
        <ul className="space-y-2">
          {category.items.slice(0, 4).map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-gray-700 dark:text-gray-300 flex items-center gap-2 text-sm"
            >
              <ChevronRight size={14} className="text-secondary flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        
        {/* Quick Action Button */}
        <motion.a
          href="https://wa.me/254715871984"
          target="_blank"
          className="mt-4 w-full bg-gray-100 dark:bg-gray-700 text-primary dark:text-white py-2 rounded-lg text-sm font-semibold text-center block hover:bg-secondary hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Quick Quote →
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Small badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4"
          >
            Premium Quality Products
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Our <span className="gradient-text">Products</span>
          </h2>
          
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Discover the ultimate roofing and construction solutions in Kondele with our comprehensive range of steel products
          </p>
        </motion.div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <ProductCard key={index} category={category} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              Plus decorative gates, door items, hoop iron, and plane sheets in gauge 28, 30 & 32
            </p>
            <motion.a
              href="https://wa.me/254715871984"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Truck size={20} /> Get Wholesale Prices & Bulk Discounts
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}