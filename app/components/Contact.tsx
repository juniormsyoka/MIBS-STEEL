'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Check, Building2, Truck, Shield } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        toast.success('Message sent! We\'ll reply within 30 minutes.')
        reset()
      } else {
        toast.error('Failed. Call us directly on WhatsApp.')
      }
    } catch (error) {
      toast.error('Error occurred. WhatsApp is faster!')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    { icon: Phone, title: "WhatsApp Priority", value: "0715 871984", href: "https://wa.me/254715871984", color: "from-green-500 to-green-600", desc: "Response within 15 minutes" },
    { icon: Mail, title: "Email Support", value: "Mutindaian@gmail.com", href: "mailto:Mutindaian@gmail.com", color: "from-blue-500 to-blue-600", desc: "For quotes & inquiries" },
    { icon: MapPin, title: "Visit Our Yard", value: "1231, Kondele, Kisumu", href: "#", color: "from-orange-500 to-orange-600", desc: "Monday-Saturday 8AM-6PM" },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with industrial texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className={`absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat`} />
      
      <div className="container-custom relative z-10">
        {/* Header - Bold & Industrial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
            <span className="text-green-400 text-sm">● 24/7 Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to{' '}
            <span className="bg-gradient-to-r from-[#d4a017] to-[#f59e0b] bg-clip-text text-transparent">
              Build?
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Get instant quotes, discuss your project, or place bulk orders
          </p>
        </motion.div>

        {/* Contact Cards - Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              target={method.title !== "Visit Our Yard" ? "_blank" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#d4a017]/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
              <p className="text-2xl font-semibold text-[#d4a017] mb-2">{method.value}</p>
              <p className="text-gray-400 text-sm">{method.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Main Contact Area - Split Layout Modern */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Why Choose Us + Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Shield className="text-[#d4a017]" /> 
                Why Choose MIBS?
              </h3>
              <div className="space-y-4">
                {[
                  "Factory-direct pricing - No middlemen",
                  "Same-day dispatch on bulk orders",
                  "Quality guarantee on all products",
                  "Free technical consultation",
                  "Flexible payment terms for contractors"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="text-green-500 w-5 h-5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d4a017]/10 to-transparent rounded-2xl p-8 border border-[#d4a017]/20">
              <div className="flex items-start gap-4">
                <Clock className="text-[#d4a017] w-8 h-8" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Emergency Orders?</h4>
                  <p className="text-gray-300 mb-3">Call us directly for urgent construction needs</p>
                  <a href="tel:+254715871984" className="text-2xl font-bold text-[#d4a017] hover:text-[#f59e0b] transition">
                    +254 715 871984
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Modern Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get a Quote</h3>
              
              <div className="space-y-5">
                <div className="group">
                  <label className="block text-gray-300 text-sm mb-2">Full Name *</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="John Kamau"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#d4a017] focus:outline-none transition-all"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Email *</label>
                    <input
                      {...register("email", { 
                        required: "Email required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                      })}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#d4a017] focus:outline-none"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Phone (WhatsApp)</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="0715 871984"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#d4a017] focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2">What do you need? *</label>
                  <textarea
                    {...register("message", { required: "Message required" })}
                    rows={4}
                    placeholder="Tell us about your project or list the products you need..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#d4a017] focus:outline-none resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#d4a017] to-[#f59e0b] text-gray-900 font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-[#d4a017]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : <><Send size={18} /> Send Quote Request</>}
                </button>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-gray-400">Prefer instant chat?</span>
                  </div>
                </div>
                
                <a
                  href="https://wa.me/254715871984"
                  target="_blank"
                  className="w-full bg-green-600/20 border border-green-500/50 text-green-400 font-semibold py-3 rounded-xl hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle size={18} className="group-hover:scale-110 transition" /> 
                  Chat on WhatsApp (Fastest)
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}