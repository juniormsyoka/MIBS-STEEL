'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Download } from 'lucide-react'

const priceCategories = [
  {
    name: "TMT Bars (6 meters)",
    items: [
      { product: "D8", price: "KES 240" },
      { product: "D10", price: "KES 400" },
      { product: "D12", price: "KES 560" },
      { product: "D16", price: "KES 950" }
    ]
  },
  {
    name: "Aluzinc Mabati",
    items: [
      { product: "2m 32g", price: "KES 500" },
      { product: "3m 32g", price: "KES 760" },
      { product: "2.5m 32g", price: "KES 630" }
    ]
  },
  {
    name: "Maisha Aluzinc",
    items: [
      { product: "2.5m 30g", price: "KES 750" },
      { product: "Maisha Reject 2.5m 30g", price: "KES 600" },
      { product: "Maisha Reject (Bambuka) 3m 30g", price: "KES 650" },
      { product: "Maisha Aluzinc 3m 30g", price: "KES 900" }
    ]
  },
  {
    name: "Nyumba Brand",
    items: [
      { product: "Nyumba Almasi Second Grade 3m 30g", price: "KES 800" },
      { product: "Nyumba Second Grade 3m 32g", price: "KES 700" }
    ]
  },
  {
    name: "Dumuzas",
    items: [
      { product: "2m 30g", price: "KES 720" },
      { product: "2m 28g", price: "KES 800" }
    ]
  },
  {
    name: "Box Profile",
    items: [
      { product: "Coloured 30g 3m", price: "KES 1380" },
      { product: "Coloured 30g 2m", price: "KES 950" },
      { product: "None Colour 2.5m 30g", price: "KES 960" },
      { product: "Mate Finish 3m 30g", price: "KES 1430" }
    ]
  },
  {
    name: "Full Colour Options",
    items: [
      { product: "Maisha Aluzinc Full Colour 3m 30g", price: "KES 1180" },
      { product: "Maisha Aluzinc Full Colour 2.5m 30g", price: "KES 980" },
      { product: "Maisha Aluzinc Full Colour 2m 30g", price: "KES 780" }
    ]
  },
  {
    name: "Other Products",
    items: [
      { product: "Plane Sheet 30g 2m", price: "KES 800" },
      { product: "MS Plate 18g", price: "KES 2300" },
      { product: "Cutting/Grinding Disc", price: "KES 200" },
      { product: "Roofing Nail (per kg)", price: "KES 250" },
      { product: "Normal Nails (per kg)", price: "KES 180" }
    ]
  }
]

export default function PriceList() {
  const [openCategory, setOpenCategory] = useState<number | null>(0)

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Price List</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Competitive prices on all steel products. Contact us for wholesale and bulk discounts.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {priceCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-primary">{category.name}</span>
                {openCategory === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openCategory === idx && (
                <div className="p-4">
                  <table className="w-full">
                    <tbody>
                      {category.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="border-b border-gray-100 last:border-0">
                          <td className="py-2 text-gray-700">{item.product}</td>
                          <td className="py-2 text-right font-semibold text-secondary">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">* All nails available at wholesale prices from 50kg bag</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            <Download size={20} /> Request Full Price Catalog
          </a>
        </div>
      </div>
    </section>
  )
}