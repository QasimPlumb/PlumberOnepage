import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';

const logo = '/footer-logo.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image src={logo} alt="Gastech Plumbing & Heating" width={250} height={40} className="w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              <b> Keighley’s trusted plumbing experts</b></p>
            <p>Fast, reliable help for <b>emergency plumbing, blocked drains, burst pipes, and hot water repairs</b> across Keighley and nearby areas.

            </p>
            <br />
            <div className="space-y-2 text-sm text-gray-400">
              <p>Fully licensed & insured plumbers</p>
              <p>Same-day plumbing service available</p>
              <p>24/7 emergency plumbing support
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Our Plumbing Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Emergency Plumbing</li>
              <li>Blocked Drain Repair</li>
              <li> Burst Pipe Repair
              </li>
              <li> Hot Water System Repairs
              </li>
              <li> Bathroom & Kitchen Plumbing
              </li>
              <li>General Plumbing Services</li>

            </ul>
          </div>



          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Our Local Plumbers</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:1300205205" className="hover:text-primary transition font-bold">1300 205 205</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Keighley & Surrounding West Yorkshire Areas</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 Emergency Plumbing Service</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Need a fast plumber in Keighley?</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Our expert Keighley plumbers are available 24/7 for all your plumbing emergencies.
            </p>
            <a
              href="#quote"
              className="inline-block w-full text-center bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl transition shadow-lg"
            >
              Get Your Free Quote
            </a>
          </div>



        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gastech Plumbing & Heating. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
