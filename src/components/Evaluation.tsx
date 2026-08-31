import { CheckCircle2, ArrowRight } from "lucide-react";
import { EVALUATION_FLOW } from "../constants/eventData";

export const Evaluation = () => {
  return (
    <section id="evaluation" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-800 tracking-wider uppercase mb-3">
            <span>JUDGING CRITERIA & FLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            EXTERNAL JUDGES. <br />
            <span className="text-[#EA580C]">REAL EVALUATION.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Evaluation will be conducted by <strong className="text-slate-900 font-bold">external judges</strong> to ensure an objective, rigorous, and transparent selection process.
          </p>
        </div>

        {/* Visual Evaluation Flow Pipeline */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {EVALUATION_FLOW.map((flow, index) => (
              <div
                key={flow.step}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#EA580C] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-800 rounded">
                      {flow.step}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1">
                    {flow.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {flow.desc}
                  </p>
                </div>

                {index < EVALUATION_FLOW.length - 1 && (
                  <div className="hidden lg:flex justify-end mt-4 text-slate-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* External Judge Assurance Note */}
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-xl text-center max-w-2xl mx-auto shadow-xs hover:shadow-lg hover:border-orange-300 hover:-translate-y-1 transition-all duration-300">
          <p className="text-sm font-semibold text-slate-700">
            "Only performance and technical demonstration determine the shortlist. Prepare your pitch and prototype with precision."
          </p>
        </div>

      </div>
    </section>
  );
};
