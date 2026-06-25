import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      text: "I have been using Galleria Cleaning Services, owned by Erika, for the past two years and I can honestly say that she is the best cleaning service in Houston! Galleria Cleaning Services is a small woman-owned business and she truly takes care of her clients.",
      author: "Doug Stire",
      location: "Local Guide"
    },
    {
      text: "The services provided were outstanding, Erika was working to deep clean my house for 6 hours, she missed nothing. She was able to bring the bathrooms back to pristine condition. Well worth every penny!",
      author: "Zachary Privitera",
      location: "Houston, TX"
    },
    {
      text: "Erika and the team have done an AMAZING job helping me keep my apartment clean! Not only are they extremely thorough, but they are extremely thoughtful. The whole team was gentle and showed care to my pets and to myself.",
      author: "Wills Layton",
      location: "Houston, TX"
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-charcoal-900 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm font-bold block mb-4">Client Experiences</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ivory-100 mb-6">
            Words From Our <span className="text-gold-400 italic font-light">Clients</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold-500 fill-gold-500" />
            ))}
          </div>
          <p className="text-ivory-300 font-sans text-lg font-light">
            Consistent 5.0 Star Rating across Google Reviews
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-charcoal-800 border border-gold-500/20 p-10 relative group hover:border-gold-500/50 transition-colors">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold-500/10 group-hover:text-gold-500/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-ivory-200 font-sans font-light italic leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <div className="border-t border-white/10 pt-6">
                <span className="block font-serif font-bold text-ivory-100 text-lg">{testimonial.author}</span>
                <span className="block font-sans text-gold-400 text-sm tracking-wide">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
