import { Shield, Sparkles, Clock, CheckCircle } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      title: "Bonded & Insured",
      description: "Full protection and peace of mind for your most valuable assets and high-end finishes.",
      icon: <Shield className="w-6 h-6 text-gold-500" />
    },
    {
      title: "Meticulous Detail",
      description: "We don't just clean; we restore. Every surface is treated with specialized care.",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />
    },
    {
      title: "Reliable Discretion",
      description: "Trusted by Houston's elite. We respect your privacy and operate with absolute professionalism.",
      icon: <Clock className="w-6 h-6 text-gold-500" />
    },
    {
      title: "Vetted Professionals",
      description: "Rigorous background checks and extensive training for every member of our luxury care team.",
      icon: <CheckCircle className="w-6 h-6 text-gold-500" />
    }
  ]

  return (
    <section id="why-us" className="py-32 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-600 font-sans tracking-[0.3em] uppercase text-sm font-bold block mb-4">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-8 leading-tight">
              The Standard of <br/>
              <span className="text-gold-500 italic font-light">Perfection</span>
            </h2>
            <p className="text-charcoal-700 font-sans text-lg font-light leading-relaxed mb-12">
              Choosing a cleaning service for a luxury property requires absolute trust. We go beyond standard cleaning protocols to ensure every detail of your home is immaculate.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4 border-l-2 border-gold-500/20 pl-6 hover:border-gold-500 transition-colors">
                  <div className="bg-ivory-200 w-12 h-12 rounded-sm flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-charcoal-900">{feature.title}</h3>
                  <p className="font-sans font-light text-charcoal-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-full min-h-[500px]">
            <div className="absolute inset-0 bg-charcoal-900 translate-x-4 translate-y-4"></div>
            <img 
              src={`${import.meta.env.BASE_URL}why-us-clean.jpg`} 
              alt="Detail cleaning" 
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
