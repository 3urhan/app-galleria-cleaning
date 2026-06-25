export default function About() {
  return (
    <section id="about" className="py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-charcoal-800/30 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold-500/20 transform translate-x-4 translate-y-4"></div>
            <img 
              src={`${import.meta.env.BASE_URL}about-clean.jpg`} 
              alt="Professional cleaning staff" 
              className="relative w-full h-[600px] object-cover grayscale-[20%] sepia-[10%] shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-gold-500 p-8 text-charcoal-900 shadow-xl max-w-xs hidden md:block">
              <span className="font-serif font-bold text-5xl block mb-2">2015</span>
              <span className="font-sans font-bold tracking-widest uppercase text-xs">Established in Houston, TX</span>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm font-bold block mb-4">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory-100 mb-8 leading-tight">
              A Legacy of <span className="text-gold-400 italic font-light">Trust</span> & Excellence.
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mb-8"></div>
            
            <div className="space-y-6 text-ivory-300 font-sans font-light text-lg leading-relaxed mb-10">
              <p>
                Founded in 2015, The Galleria Cleaning Services was born from a simple belief: high-end homes require a higher caliber of care. We are proudly a women-owned business that has grown through word-of-mouth among Houston's most discerning residents.
              </p>
              <p>
                As an intentionally inclusive, LGBTQ+ friendly organization, we believe that respect and dignity are the foundation of our work—both in how we treat our staff and how we care for your most intimate spaces.
              </p>
              <p>
                Our team is rigorously vetted, comprehensively insured, and extensively trained in the handling of luxury finishes, delicate fabrics, and fine art.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <span className="block text-4xl font-serif font-bold text-gold-400 mb-2">100%</span>
                <span className="text-sm font-sans tracking-widest uppercase text-ivory-300">Satisfaction</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-gold-400 mb-2">5.0</span>
                <span className="text-sm font-sans tracking-widest uppercase text-ivory-300">Star Google Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
