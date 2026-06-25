import { ArrowRight, Star, CheckCircle, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal-900">
      <div className="absolute inset-0">
        <img src={`${import.meta.env.BASE_URL}hero-clean.jpg`} alt="Pristine luxury living room" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 border border-gold-500/30 bg-charcoal-800/50 backdrop-blur-md rounded-sm px-5 py-2.5 w-fit mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
              ))}
            </div>
            <span className="text-ivory-200 text-sm font-sans tracking-wider uppercase border-l border-gold-500/30 pl-3">5.0 Star Rated in Houston</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-ivory-100 leading-tight mb-8">
            Uncompromising <br/>
            <span className="text-gold-400 italic font-light">Elegance</span> & Care.
          </h1>
          <p className="text-xl text-ivory-300 font-sans font-light leading-relaxed mb-12 max-w-2xl">
            Houston's premier luxury house cleaning service. Meticulous attention to detail for homes that demand nothing but absolute perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-charcoal-900 px-10 py-5 rounded-sm font-bold font-sans uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-3 border border-gold-500/50 hover:bg-gold-500/10 text-ivory-100 px-10 py-5 rounded-sm font-bold font-sans uppercase tracking-widest text-sm transition-all">
              Our Services
            </a>
          </div>
          <div className="flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold-500" />
              <span className="text-ivory-200 text-sm font-sans tracking-wide">Serving Galleria / Uptown</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-gold-500" />
              <span className="text-ivory-200 text-sm font-sans tracking-wide">Bonded & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-gold-500" />
              <span className="text-ivory-200 text-sm font-sans tracking-wide">Est. 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
