import { AlertCircle, CheckCircle } from 'lucide-react';

const pains = [
  {
    problem: " They never show up on time",
    solution: " We arrive on time or your call-out fee is reduced"
  },
  {
    problem: " Hidden fees and price surprises",
    solution: " Clear fixed pricing quoted upfront"
  },
  {
    problem: "Takes days to get a quote back",
    solution: "Fast response within 15 minutes"
  }
];

export function PainPoints() {
  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 lg:px-8">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#0D253F]">
            Tired of Unreliable Plumbers?
          </h2>
          <p className="text-sm md:text-xl text-gray-500 max-w-3xl mx-auto">
            You're not alone. Here's what <span className="font-semibold text-gray-700">Homeowners/customers</span> say they hate about hiring plumbers:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-6 text-red-500 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-tight pt-1">
                  {item.problem}
                </span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-[#0D253F] font-bold leading-tight pt-1">
                  {item.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
