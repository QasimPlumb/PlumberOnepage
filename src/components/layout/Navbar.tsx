import { Phone } from 'lucide-react';
import Image from 'next/image';

const logo = '/logo.png';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <Image src={logo} alt="Gastech Plumbing & Heating" width={180} height={80} className="h-16 w-auto" priority />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition font-medium">Services</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition font-medium">Reviews</a>
            <a href="#process" className="text-gray-700 hover:text-primary transition font-medium">How It Works</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition font-medium">FAQ</a>
          </div>
          <a href="tel:1300205205" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 text-lg">
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">1300 205 205</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
