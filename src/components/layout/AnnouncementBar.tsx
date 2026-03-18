import { Flame } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 text-center text-sm font-bold flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
      <div className="flex items-center gap-2">
        <Flame className="w-4 h-4 animate-pulse" />
        <span>Limited Time Offer: Boiler Servicing from only £79!</span>
      </div>
      <a href="#quote" className="underline hover:text-white/80 transition shadow-sm">Book Now →</a>
    </div>
  );
}
