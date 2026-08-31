import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_LIST } from "../constants/eventData";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Illustration */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-800 tracking-wider uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>OFFICIAL QUESTIONS & ANSWERS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
              HAVE A <br />
              <span className="text-[#EA580C]">QUESTION?</span>
            </h2>
            
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              We have put together clear answers derived strictly from the official announcement so you know exactly what to prepare for.
            </p>

            {/* Reference FAQ Illustration */}
            <div className="hidden lg:block bg-slate-50 border border-slate-100 rounded-2xl p-6 overflow-hidden">
              <img
                src="/assets/faq-illustration.png"
                alt="Hackathon FAQ Illustration"
                className="w-full h-auto max-h-64 object-contain mx-auto"
              />
            </div>
          </div>

          {/* Right Column: Animated Accordion */}
          <div className="lg:col-span-7 space-y-3 text-left">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-slate-50 border-slate-300 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-slate-900 hover:text-[#EA580C] focus:outline-none"
                  >
                    <span className="text-base sm:text-lg tracking-tight">
                      {idx + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180 text-[#EA580C]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/50 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
