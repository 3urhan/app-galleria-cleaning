import { MapPin, Phone, Clock, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold-600 font-sans tracking-[0.3em] uppercase text-sm font-bold block mb-4">Inquiries</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-8 leading-tight">
              Request a <br/>
              <span className="text-gold-500 italic font-light">Consultation</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mb-8"></div>
            <p className="text-charcoal-700 font-sans text-lg font-light leading-relaxed mb-12">
              Every home is unique. We provide customized quotes based on a thorough walkthrough of your property to ensure we meet your specific needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ivory-100 border border-gold-500/20 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-charcoal-900 mb-1">Our Office</h4>
                  <p className="font-sans font-light text-charcoal-700">
                    777 Dunlavy St<br />
                    Houston, TX 77019<br />
                    (Montrose / Galleria area)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ivory-100 border border-gold-500/20 rounded-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-charcoal-900 mb-1">Direct Line</h4>
                  <p className="font-sans font-light text-charcoal-700">
                    (281) 781-4680
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ivory-100 border border-gold-500/20 rounded-sm flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-charcoal-900 mb-1">Operating Hours</h4>
                  <p className="font-sans font-light text-charcoal-700">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: By Request<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-ivory-100 p-10 border border-gold-500/10 shadow-sm relative">
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-500/30 m-2"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold-500/30 m-2"></div>
            
            <h3 className="font-serif font-bold text-2xl text-charcoal-900 mb-8">Send a Message</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-sans tracking-widest uppercase text-charcoal-700 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors font-sans" placeholder="Jane Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-sans tracking-widest uppercase text-charcoal-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors font-sans" placeholder="jane@example.com" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs font-sans tracking-widest uppercase text-charcoal-700 mb-2">Service of Interest</label>
                <select id="service" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors font-sans text-charcoal-700">
                  <option>Standard Luxury Clean</option>
                  <option>Deep Restoration Clean</option>
                  <option>Move-In / Move-Out</option>
                  <option>Other / Custom</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-sans tracking-widest uppercase text-charcoal-700 mb-2">Additional Details</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors font-sans resize-none" placeholder="Square footage, specific requests..."></textarea>
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-gold-500 text-ivory-100 hover:text-charcoal-900 py-4 font-bold font-sans uppercase tracking-widest text-sm transition-all group">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
