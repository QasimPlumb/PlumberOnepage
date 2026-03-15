import { Siren, Waves, Droplets, ShieldCheck, Flame, Bath, Wrench, ThumbsUp } from 'lucide-react';

const services = [
  {
    icon: <Siren className="w-10 h-10 text-primary" />,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumber for burst pipes, leaks, and urgent repairs."
  },
  {
    icon: <Waves className="w-10 h-10 text-primary" />,
    title: "Drain & Blockage Repair",
    description: "Blocked drains, sinks, and toilets cleared quickly and safely."
  },
  {
    icon: <Droplets className="w-10 h-10 text-primary" />,
    title: "Pipe & Leak Repair",
    description: "Fix leaking pipes, water pressure issues, and damaged plumbing."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Plumbing Inspections",
    description: "Complete plumbing checks and safety inspections for your property."
  },
  {
    icon: <Flame className="w-10 h-10 text-primary" />,
    title: "Boiler & Hot Water",
    description: "Boiler repairs, hot water system fixes, and heating support."
  },
  {
    icon: <Bath className="w-10 h-10 text-primary" />,
    title: "Kitchen & Bathroom Plumbing",
    description: "Tap repairs, sink installs, and bathroom plumbing upgrades."
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Emergency Drain Unblocking",
    description: "Fast drain cleaning and blockage removal services."
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-primary" />,
    title: "General Plumbing",
    description: "Powerful everyday plumbing solutions for homes and businesses."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Plumbing Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
