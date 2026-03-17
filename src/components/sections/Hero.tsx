import { Star, Shield, Clock, CheckCircle, Phone, AlertCircle, Flame } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import Image from 'next/image';

export function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="/hero.png"
          alt="Professional plumber working on heating system"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Trust Badges Above Headline */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent">
                <Flame className="w-5 h-5 text-accent animate-pulse flex-shrink-0" />
                <span className="font-bold text-accent text-sm sm:text-base">Boiler Servicing from £69</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-accent fill-accent flex-shrink-0" />
                <span className="font-bold text-sm sm:text-base">5.0/5 Plumbers and heating engineers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-bold text-sm sm:text-base">Licensed plumbers/ gas engineers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-bold text-sm sm:text-base">24/7 Emergency Plumber</span>
              </div>
            </div>

            {/* Clear, Outcome-Focused Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight break-words">
              24/7 Emergency Plumbers in Keighley, Same Day Service <span className="text-primary">Guaranteed</span>
            </h1>

            {/* Subheadline That Reduces Friction */}
            <p className="text-sm sm:text-xl text-gray-200">
              Book a free quote in under a minute. Our local emergency plumbers in Keighley respond fast to burst pipes, leaks, boiler repairs and installation, and blocked drains across nearby areas.
            </p>

            {/* Risk Reversal - Prominent */}
            <div className="bg-primary/20 border-2 border-primary p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2"> Our Service Guarantee:</p>
                  <ul className="space-y-1 text-gray-200">
                    <li>✓ Fast same-day plumbing response</li>
                    <li>✓ Fixed right the first time</li>
                    <li>✓ Transparent local pricing</li>
                    <li>✓ Trusted Keighley plumbing experts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Primary CTA - Bright & Obvious */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#quote" className="bg-primary hover:bg-primary-hover px-8 py-5 rounded-xl font-bold text-xl transition inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Get Your Free Quote
                <span className="text-2xl">→</span>
              </a>
              <a href="tel:07598088229" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-5 rounded-xl font-bold text-xl transition inline-flex items-center justify-center gap-2 border-2 border-white">
                <Phone className="w-6 h-6" />
                07598 088229
              </a>
            </div>

            {/* Scarcity/Urgency & Accreditations */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-primary bg-white/10 backdrop-blur-sm px-4 py-4 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-semibold">Trusted Local plumbers and gas engineers</span>
              </div>
              <div className="flex items-center gap-4 border-t sm:border-t-0  border-white/20 pt-4 sm:pt-0 sm:pl-6">
                <Image src="/certificate/wras.jpeg" alt="WRAS Approved" width={80} height={40} className="h-8 w-auto rounded shadow-sm bg-white " />
                <Image src="/certificate/gasafe.jpeg" alt="Gas Safe" width={40} height={40} className="h-10 w-auto rounded shadow-sm bg-white" />
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full flex items-center justify-center lg:justify-end">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
