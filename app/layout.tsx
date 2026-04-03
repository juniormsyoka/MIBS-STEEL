import type { Metadata } from 'next'
import { Inter, Orbitron, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'MIBS STEEL Suppliers LTD. | Premium Steel Solutions Kenya',
  description: 'Leading supplier of premium TMT bars, roofing sheets, and construction materials in Kisumu. Factory rejects, second grade materials at unbeatable prices.',
  keywords: 'steel suppliers Kenya, TMT bars Kisumu, roofing sheets, construction materials, MIBS STEEL',
  authors: [{ name: 'MIBS STEEL Suppliers LTD.' }],
  openGraph: {
    title: 'MIBS STEEL Suppliers LTD.',
    description: 'Premium Steel & Construction Solutions',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        theme
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}