import { Phone, Mail, MapPin,  MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MIBS STEEL Suppliers LTD.</h3>
            <p className="text-white/80">
              Quality steel products for all your construction needs in Kisumu and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-secondary transition">Home</a></li>
              <li><a href="#products" className="text-white/80 hover:text-secondary transition">Products</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-secondary transition">Pricing</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-secondary transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <MapPin size={16} /> 1231, Kondele, Kisumu
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={16} /> 0715 871984
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={16} /> Mutindaian@gmail.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} MIBS STEEL Suppliers LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}