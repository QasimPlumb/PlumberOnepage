import React from 'react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Book Your Free Quote",
      description: "Fill out the quick form or give us a call. Our team responds fast and schedules a convenient time to assess your plumbing issue."
    },
    {
      number: 2,
      title: "We Inspect & Quote",
      description: "Our licensed plumber visits your property, diagnoses the problem, and provides a clear fixed-price quote with no hidden surprises."
    },
    {
      number: 3,
      title: "Work Done Fast",
      description: "Approve the quote and we’ll schedule the repair promptly. Most plumbing jobs are completed quickly with quality workmanship guaranteed."
    }
  ];

  return (
    <section id="process" className="py-8 md:py-24 bg-gray-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-5xl font-extrabold text-secondary mb-4">
          How We Work — <span className="text-secondary">Simple As 1-2-3</span>
        </h2>
        <p className="text-sm md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Getting reliable plumbing help in Keighley is quick and straightforward.
        </p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 border border-gray-100 flex flex-col items-center"
            >
              <div className="flex justify-center mb-10">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-4xl font-extrabold shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-6 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
