import { Sparkles, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 rounded-sm flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-ivory-100">The Galleria</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400">Cleaning Services</span>
              </div>
            </div>
            <p className="text-ivory-300/70 font-sans font-light leading-relaxed max-w-sm mb-8">
              Houston's premier luxury house cleaning service. Uncompromising elegance, meticulous care, and absolute discretion for your home.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-ivory-300 hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-ivory-300 hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-ivory-300 hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gold-500 font-sans tracking-[0.2em] uppercase text-xs font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-ivory-300/80 hover:text-gold-400 font-sans text-sm transition-colors">Our Services</a></li>
              <li><a href="#about" className="text-ivory-300/80 hover:text-gold-400 font-sans text-sm transition-colors">Our Story</a></li>
              <li><a href="#why-us" className="text-ivory-300/80 hover:text-gold-400 font-sans text-sm transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-ivory-300/80 hover:text-gold-400 font-sans text-sm transition-colors">Client Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold-500 font-sans tracking-[0.2em] uppercase text-xs font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-ivory-300/80 font-sans text-sm">
              <li>777 Dunlavy St</li>
              <li>Houston, TX 77019</li>
              <li>(281) 781-4680</li>
              <li><a href="mailto:contact@galleriacleaning.kimi.page" className="hover:text-gold-400 transition-colors">contact@galleriacleaning.kimi.page</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory-300/50 font-sans text-xs">
            &copy; {new Date().getFullYear()} The Galleria Cleaning Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-ivory-300/50 font-sans text-xs">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
