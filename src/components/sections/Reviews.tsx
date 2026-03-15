'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Mal Gaskell",
    time: "3 weeks ago",
    initial: "M",
    color: "bg-pink-500",
    rating: 5,
    text: "Exceptional service! Was incredibly professional, friendly, and helpful from start to finish. Arrived promptly the very next day and went above and beyond to ensure all our issues were resolved. The workmanship was flawless. We are absolutely delighted with the result and highly recommend his services to anyone."
  },
  {
    name: "Kathryn Berry",
    time: "2 month ago",
    initial: "K",
    color: "bg-blue-500",
    rating: 5,
    text: "Great service, came out tonight, late Saturday night, within an hour or so of calling, kept us updated on arrival time. Diagnosed problem quickly, went away for a part and came back to fit it. Had our boiler working and heating going in no time, thank goodness as it's absolutely freezing! Good communication and went out of his way to help, will definitely use again."
  },
  {
    name: "Jack Nottidge",
    time: "1 Month ago",
    initial: "J",
    color: "bg-purple-500",
    rating: 5,
    text: "Brilliant service from start to finish. We had our gas fire capped and I can’t fault the job at all. Attiq was on time, did a perfect job and massively went above and beyond in helping me when he found an issue with our gas meter that the supplier had to come and fix. Thank you! 10/10"
  },
  {
    name: "Sophie M",
    time: "4 Month ago",
    initial: "S",
    color: "bg-purple-500",
    rating: 5,
    text: "  Called Gastech 24/7 early on Sunday morning with a plumbing problem. Arrived my house incredibly quickly. The plumber was professional, friendly and fixed the problem. Excellent, reliable service — I wouldn’t hesitate to call again."
  },
  {
    name: "Darren",
    time: "1 Month ago",
    initial: "D",
    color: "bg-purple-500",
    rating: 5,
    text: "Repaired my old Vokera boiler withing a couple of hours my enquiring. The engineer bought part and fixed the issue within the a couple of hours. Recommended by a friend, would 100% recommend to any with any issues etc."
  },
  {
    name: "Bruce Preston",
    time: "1 Month ago",
    initial: "B",
    color: "bg-purple-500",
    rating: 5,
    text: " I rang the night before regarding a lack of hot water and he promised to show up first thing in the morning, and he kept to his word arriving before 9.Then quickly assessed the issue, went out for the part required, and returned an hour later. He got the issue sorted straight away with no fuss and was just generally a nice bloke. Would recommend in future"
  }
];

export function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Reviews From Real Plumbing Customers
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 184+ Google reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {visibleReviews.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                  {testimonial.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-primary font-semibold">Verified Customer</div>
                  <div className="text-xs text-gray-500">{testimonial.time}</div>
                </div>
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed line-clamp-4">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold text-lg transition cursor-pointer"
            >
              Read less reviews
              <span className="text-xl">↑</span>
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold text-lg transition cursor-pointer"
            >
              Read 184+ reviews
              <span className="text-xl">↓</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
