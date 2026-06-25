import { useState, useEffect } from 'react'
import { Phone, Menu, X, Sparkles } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 rounded-sm flex items-center justify-center transition-colors group-hover:bg-gold-500/20">
              <Sparkles className="w-6 h-6 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-2xl tracking-wide transition-colors ${scrolled ? 'text-ivory-200' : 'text-ivory-100'}`}>The Galleria</span>
              <span className={`text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-gold-500' : 'text-gold-400'}`}>Cleaning Services</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={`text-sm font-sans tracking-wider uppercase hover:text-gold-400 transition-colors ${scrolled ? 'text-ivory-200' : 'text-ivory-100'}`}>{link.label}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:281-781-4680" className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-charcoal-900 px-6 py-3 rounded-sm text-sm font-bold font-sans uppercase tracking-widest transition-all hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]">
              <Phone className="w-4 h-4" />
              Book Now
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="text-ivory-100 w-6 h-6" /> : <Menu className="text-ivory-100 w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-900 border-t border-gold-500/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block text-ivory-200 hover:text-gold-400 font-sans tracking-widest uppercase text-sm" onClick={() => setMobileOpen(false)}>{link.label}</a>
            ))}
            <div className="pt-4">
              <a href="tel:281-781-4680" className="flex items-center justify-center gap-2 bg-gold-500 text-charcoal-900 px-5 py-4 rounded-sm font-bold font-sans uppercase tracking-widest">
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
