import { Button } from '@/components/ui/button';

export function QuoteForm() {
  return (
    <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl" >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Get Your FREE Quote</h3>
        <p className="text-gray-600">Takes 60 seconds. No obligation.</p>
        <p className="text-sm text-primary font-semibold mt-2">⚡ We typically respond within 15 minutes in Keighley</p>
      </div>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Full Name *"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number *"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Suburb *"
            className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            required
          />
          <input
            type="text"
            placeholder="Postcode"
            className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
        <select
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          required
        >
          <option value="">What do you need? *</option>
          <option>Emergency Plumbing</option>
          <option>Burst Pipe Repair</option>
          <option>Water Leak Repair</option>
          <option>Blocked Drain Repair</option>
          <option>Blocked Toilet Repair</option>
          <option>Boiler Repair</option>
          <option>Drain Unblocking</option>
          <option>Same Day Plumber</option>
          <option>General Plumbing Issue</option>
          <option>Other</option>
        </select>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg h-auto py-4"
        >
          Get My FREE Quote →
        </Button>
        <p className="text-xs text-gray-500 text-center">Trust Micro-Copy (conversion booster)
          No spam. Your details stay private.
        </p>
      </form>
    </div>
  );
}
