'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import PriceList from './components/PriceList'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Products />
      <PriceList />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}