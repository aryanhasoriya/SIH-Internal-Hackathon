import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import { PROCESS_STEPS } from "../constants/eventData";

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50 relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-800 tracking-wider uppercase mb-3">
            <span>THE CHALLENGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            WHAT YOU NEED TO DO
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A 4-step pathway from problem statement to securing your spot among the Top 50.
          </p>
        </div>

        {/* Step Tabs / Indicator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {PROCESS_STEPS.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeStep === idx
                  ? "bg-white border-[#EA580C] shadow-md ring-2 ring-orange-500/20"
                  : "bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-black ${activeStep === idx ? "text-[#EA580C]" : "text-slate-400"}`}>
                  STEP {item.step}
                </span>
                {activeStep > idx && (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                )}
              </div>
              <div className="font-bold text-sm sm:text-base text-slate-900">
                {item.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Feature Display */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-orange-50 rounded text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-3">
              <span>STEP {PROCESS_STEPS[activeStep].step} OF 04</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2">
              {PROCESS_STEPS[activeStep].title} — {PROCESS_STEPS[activeStep].subtitle}
            </h3>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed my-4">
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
              {activeStep < PROCESS_STEPS.length - 1 ? (
                <button
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="btn-primary text-xs uppercase tracking-wider py-2.5 px-4"
                >
                  <span>NEXT: STEP 0{activeStep + 2}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href="#evaluation"
                  className="btn-primary text-xs uppercase tracking-wider py-2.5 px-4"
                >
                  <span>VIEW EVALUATION FLOW</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Reference Illustration */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md h-64 sm:h-80 bg-slate-50 rounded-xl border border-slate-100 p-4 flex items-center justify-center overflow-hidden">
              <img
                src={PROCESS_STEPS[activeStep].image}
                alt={PROCESS_STEPS[activeStep].title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>

        {/* 4 Cards Grid View for complete overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`p-5 bg-white rounded-xl border cursor-pointer transition-all ${
                activeStep === idx ? "border-[#EA580C] shadow-md" : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="w-full h-36 bg-slate-50 rounded-lg mb-4 flex items-center justify-center p-2 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="text-xs font-mono font-bold text-[#EA580C] mb-1">
                STEP {item.step}
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
