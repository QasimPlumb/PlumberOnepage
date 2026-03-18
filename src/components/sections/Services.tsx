import { Siren, Waves, Droplets, ShieldCheck, Flame, Bath, Wrench, ThumbsUp, ClipboardCheck, Thermometer, Wind } from 'lucide-react';

const services = [
  {
    icon: <Siren className="w-10 h-10 text-primary" />,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumber for burst pipes, leaks, and urgent repairs."
  }, {
    icon: <Flame className="w-10 h-10 text-primary" />,
    title: "Boiler Servicing, Repairs & Installation",
    description: "Professional boiler servicing (starting from £79), fast repairs, and new installations."
  },
  {
    icon: <Waves className="w-10 h-10 text-primary" />,
    title: "Blocked Drain Repair",
    description: "Blocked drains, sinks, and toilets cleared quickly and safely."
  },
  {
    icon: <Droplets className="w-10 h-10 text-primary" />,
    title: "Burst Pipe Repair",
    description: "Fix leaking pipes, water pressure issues, and damaged plumbing."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Hot Water System Repairs",
    description: "Fast repairs and servicing for electric, gas, and instant hot water systems."
  },

  {
    icon: <Bath className="w-10 h-10 text-primary" />,
    title: "Kitchen & Bathroom Plumbing",
    description: "Tap repairs, sink installs, and bathroom plumbing upgrades."
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
    title: "Gas Safety Inspections & CP12",
    description: "Official gas safety inspections and CP12 certification to keep your tenants safe and property compliant."
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Emergency Drain Unblocking",
    description: "Fast drain cleaning and blockage removal services."
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-primary" />,
    title: "General Plumbing Services",
    description: "Powerful everyday plumbing solutions for homes and businesses."
  },
  {
    icon: <Flame className="w-10 h-10 text-primary" />,
    title: "Heating Repairs",
    description: "Expert central heating system repairs, troubleshooting, and maintenance."
  },
  {
    icon: <Thermometer className="w-10 h-10 text-primary" />,
    title: "Radiator Repairs",
    description: "Fixing cold spots, leaking valves, and professional radiator installations."
  },
  {
    icon: <Wind className="w-10 h-10 text-primary" />,
    title: "Power Flushing",
    description: "Deep clean your heating system to improve efficiency and lower energy bills."
  }
];

export function Services() {
  return (
    <section id="services" className="py-8 md:py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Our Plumbing Services</h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto">
            From emergency plumbing repairs to full installations, <b>Keighley plumbers you can rely on</b>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Repetition After Services */}
        <div className="mt-12 text-center">
          <a href="#quote" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg">
            Get Your FREE Quote Today
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
