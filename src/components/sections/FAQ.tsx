import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer emergency 24/7 plumbing services?",
    answer: " Yes. Our plumbers are available <b> 24/7 for emergency plumbing issues</b> like burst pipes, water leaks, blocked drains, and hot water failures."
  },
  {
    question: "How much does a plumbing call-out cost?",
    answer: "Call-out costs depend on the type of plumbing issue and repair required. We always provide <b>clear upfront pricing with no hidden fees.</b>"
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Yes. Our team includes <b>fully licensed and insured plumbers</b> with years of experience in residential plumbing repairs and installations."
  },
  {
    question: "Do you provide a warranty on plumbing work?",
    answer: "Absolutely. All plumbing repairs and installations include a <b>workmanship guarantee and warranty on supplied parts.</b>"
  },
  {
    question: "Which areas do your plumbers service?",
    answer: " We provide plumbing services across <b>Keighley and nearby areas</b>, offering fast response for both emergency and scheduled plumbing work."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold  text-[#20242a] mb-4">Frequently Asked Plumbing Questions</h2>
          <p className="text-xl text-[#20242a]">Everything you need to know about our <b>professional plumbing services</b>.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-primary transition">
              <details className="group" open={index === 0}>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-gray-900 group-open:text-primary">{faq.question}</span>
                  <Plus className="w-6 h-6 text-gray-400 group-open:rotate-45 transition transition-transform" />
                </summary>
                <div
                  className="px-6 pb-6 text-[#20242a] leading-relaxed border-t border-gray-100 pt-4"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-200">
          <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
          <p className=" text-[#20242a] mb-6">Our friendly plumbing team is ready to help with any <b>plumbing repair or installation enquiry</b>.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="font-bold text-primary hover:text-primary-hover transition text-lg underline">Book your free quote </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="tel:1300205205" className="font-bold text-primary hover:text-primary-hover transition text-lg underline">Call us on 1300 205 205</a>
          </div>
        </div>
      </div>
    </section>
  );
}
