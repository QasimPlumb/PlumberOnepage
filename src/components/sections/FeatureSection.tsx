import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export function FeatureSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional plumber at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Visual decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
                Top-Tier Plumbing Expertise for Every Property
              </h2>
              <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                Whether it’s a <b>burst pipe repair</b>,  blocked drain, or general plumbing issue, our experienced plumbers
                deliver reliable solutions for homes and businesses in <b>Keighley</b>. We don’t just fix plumbing problems — we make sure your system runs safely, efficiently, and reliably.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Advanced diagnostics for complex plumbing issues",
                "Work completed to the latest safety standards",
                "High-quality parts and professional installation"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl"
              >
                Book Same-Day Service →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
