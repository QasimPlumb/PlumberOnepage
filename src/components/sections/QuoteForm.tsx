'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Loader2, Search } from 'lucide-react';

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Postcode Lookup State
  const [postcode, setPostcode] = useState('');
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');

  const handlePostcodeLookup = async () => {
    if (!postcode) {
      setError('Please enter a postcode first');
      return;
    }

    setIsLoadingAddress(true);
    setError(null);

    try {
      // Using postcodes.io (Free & No API Key required)
      const response = await fetch(`https://api.postcodes.io/postcodes/${postcode.replace(/\s+/g, '')}`);

      if (!response.ok) {
        throw new Error('Invalid postcode');
      }

      const { result } = await response.json();

      // Auto-fill address field with Town and Parish
      const city = result.admin_district || '';
      const area = result.parish || result.admin_ward || '';
      const fullLocation = [area, city].filter(Boolean).join(', ');

      setSelectedAddress(` ${fullLocation}`);
      // Set focus to the textarea so they can type house number
      setTimeout(() => {
        const textarea = document.querySelector('textarea[name="manual_address"]') as HTMLTextAreaElement;
        if (textarea) {
          textarea.focus();
          textarea.setSelectionRange(0, 0);
        }
      }, 100);

    } catch (err) {
      console.error('Lookup failed:', err);
      setError('Postcode not found. Please enter address manually.');
    } finally {
      setIsLoadingAddress(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: selectedAddress || formData.get('manual_address'),
      postcode: postcode,
      service: formData.get('service'),
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError(result.error?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send enquiry. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white text-gray-900 p-5 sm:p-8 rounded-2xl shadow-2xl text-center animate-in fade-in zoom-in duration-300 w-full mx-auto">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Quote Request Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you! We've received your request and one of our plumbers will call you back within 15 minutes.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          className="bg-primary hover:bg-primary-hover text-white px-8"
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 p-4 sm:p-8 rounded-2xl shadow-2xl w-full mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Get Your FREE Quote</h3>
        <p className="text-gray-600">Takes 60 seconds. No obligation.</p>
        <p className="text-sm text-primary font-semibold mt-2">⚡ We typically respond within 60/90 minutes</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Full Name *"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          required
          disabled={isSubmitting}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Mobile Number *"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          required
          disabled={isSubmitting}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          disabled={isSubmitting}
        />

        <div className="flex gap-2">
          <input
            name="postcode"
            type="text"
            placeholder="Postcode *"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition uppercase"
            required
            disabled={isSubmitting}
          />
          <button
            type="button"
            onClick={handlePostcodeLookup}
            disabled={isLoadingAddress || isSubmitting || !postcode}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg border-2 border-gray-300 font-bold transition disabled:opacity-50"
          >
            {isLoadingAddress ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          </button>
        </div>

        <textarea
          name="manual_address"
          placeholder="House Number & Street *"
          value={selectedAddress}
          onChange={(e) => setSelectedAddress(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition min-h-[80px]"
          required
          disabled={isSubmitting}
        />

        <select
          name="service"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          required
          disabled={isSubmitting}
        >
          <option value="">What do you need? *</option>
          <option>Boiler Repair</option>
          <option>Emergency Plumbing</option>
          <option>Burst Pipe Repair</option>
          <option>Water Leak Repair</option>
          <option>Blocked Drain Repair</option>
          <option>Blocked Toilet Repair</option>
          <option>Same Day Plumber</option>
          <option>Drain Unblocking</option>
          <option>General Plumbing Issue</option>
          <option>Other</option>
        </select>

        {error && (
          <p className="text-red-500 text-sm font-medium text-center">{error}</p>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg h-auto py-4 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            'Get My FREE Quote →'
          )}
        </Button>
        <p className="text-xs text-gray-500 text-center">
          No spam. Your details stay private.
        </p>
      </form>
    </div>
  );
}

