import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    tagline: "KITCHEN PLUMBING",
    title: "Sink & Tap Repairs",
    description: "Fix leaking taps, install modern faucets, and clear blocked kitchen drains quickly.",
    image: "/images/sink-repair.png",
    linktitle: "Book This Service",
    link: "#quote"
  },
  {
    tagline: "BATHROOM PLUMBING",
    title: "Toilet Installations",
    description: "Professional toilet installations and fast repairs for residential bathrooms",
    image: "/images/toilet-install.png",
    linktitle: "Schedule Installation",
    link: "#quote"
  },
  {
    tagline: "PIPE REPAIR",
    title: "Pipe Relining",
    description: "Modern no-dig pipe relining for damaged underground plumbing lines.",
    image: "/images/pipe-repair.jpg",
    linktitle: "Fix My Pipes",
    link: "#quote"
  },
  {
    tagline: "HOT WATER SYSTEMS",
    title: "Hot Water Repairs",
    description: "Installation and servicing for gas, electric, and instant hot water systems.",
    image: "/images/hot-water.png",
    linktitle: "Restore My Hot Water",
    link: "#quote"
  }
];

export function Gallery() {
  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16 space-y-4">

          <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900">Our Latest Plumbing Projects</h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
            See why <b>Keighley homeowners trust our plumbing services.</b> Quality work that keeps your home running smoothly.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Column: 2x2 Small Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1">
                  <p className="text-xs font-bold text-primary uppercase tracking-tighter">{item.tagline}</p>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  <a href={item.link} className="flex items-center gap-1 text-gray-900 font-bold text-sm hover:gap-2 transition-all pt-2 group-hover:text-primary">
                    {item.linktitle} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 1 Large Card */}
          <div className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex-1 relative min-h-[300px] overflow-hidden">
              <ImageWithFallback
                src="/images/fullhouse.jpg"
                alt="Full Kitchen & Bathroom Plumbing Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 lg:p-8 space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-bold text-primary uppercase tracking-widest">Premium Projects</p>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1]">
                  Complete Residential Plumbing & Gas heating repairs
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  A full residential plumbing upgrade including new pipework, efficient hot water systems, and modern fixtures designed for long-term reliability.
                </p>
              </div>
              <div className="flex flex-wrap justify-between items-center pt-4">
                <a href="#quote" className="bg-primary hover:bg-primary-hover text-white px-4 py-4 rounded-xl font-bold text-lg shadow-lg">
                  Book Your FREE Quote
                </a>
                <a href="tel:07598088229" className="flex items-center gap-2 text-gray-900 font-bold text-lg hover:gap-3 transition-all underline decoration-2 decoration-primary underline-offset-4">
                  Call Now for Fast Plumbing<ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
