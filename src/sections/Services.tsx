import { Sparkles, Home, Box } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Standard Luxury Clean",
      description: "Our signature service for maintaining the pristine condition of your home. Includes meticulous dusting, vacuuming, mopping, and surface sanitation using premium products.",
      icon: <Sparkles className="w-8 h-8 text-gold-500" />,
      price: "From $250",
      features: ["Customized scheduling", "Eco-friendly premium products", "Dedicated account manager"]
    },
    {
      title: "Deep Restoration Clean",
      description: "A comprehensive top-to-bottom detail. We focus on overlooked areas, baseboards, interior windows, and intensive kitchen/bathroom restoration.",
      icon: <Home className="w-8 h-8 text-gold-500" />,
      price: "From $450",
      features: ["Appliance interiors", "Cabinet detailing", "Grout restoration"]
    },
    {
      title: "Move-In / Move-Out",
      description: "Ensure your new estate is immaculate before arrival, or leave your previous residence in flawless condition for the next occupants.",
      icon: <Box className="w-8 h-8 text-gold-500" />,
      price: "From $600",
      features: ["Complete empty-home detail", "Inside all cabinets/drawers", "Fixture polishing"]
    }
  ]

  return (
    <section id="services" className="py-32 bg-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 font-sans tracking-[0.3em] uppercase text-sm font-bold block mb-4">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">Impeccable Standards</h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-charcoal-700 font-sans text-lg font-light leading-relaxed">
            Tailored cleaning solutions designed for high-end properties. We treat your home with the utmost respect and discretion.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-ivory-100 border border-gold-500/10 p-10 hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-2 group">
              <div className="mb-8 p-4 bg-ivory-200 inline-block rounded-sm group-hover:bg-charcoal-900 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-4">{service.title}</h3>
              <p className="text-charcoal-700 font-sans font-light leading-relaxed mb-8 h-24">
                {service.description}
              </p>
              <div className="mb-8">
                <span className="text-charcoal-900 font-sans font-bold text-lg">{service.price}</span>
              </div>
              <ul className="space-y-3 border-t border-gray-200 pt-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-sans text-charcoal-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
