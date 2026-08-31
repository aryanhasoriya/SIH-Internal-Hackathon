import { ShieldAlert, AlertTriangle, Code2, CheckCircle2 } from "lucide-react";

export const AIIntegrity = () => {
  return (
    <section id="integrity" className="py-16 md:py-24 bg-[#FEF2F2] border-y border-[#FECACA] relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Integrity Eyebrow */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FEE2E2] border border-[#FCA5A5] rounded-full text-xs font-bold text-[#991B1B] tracking-wider uppercase mb-4 shadow-2xs">
              <ShieldAlert className="w-4 h-4 text-[#DC2626]" />
              <span>IMPORTANT • HACKATHON INTEGRITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#7F1D1D] tracking-tight leading-[1.1] mb-4">
              ORIGINAL WORK. <br />
              <span className="text-[#DC2626]">ORIGINAL IDEAS.</span>
            </h2>

            <div className="w-20 h-1.5 bg-[#DC2626] rounded-full mb-6" />

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Integrity is paramount. The Internal Hackathon is designed to evaluate genuine problem-solving, engineering capability, and innovative thinking.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2 p-3 bg-white/80 border border-[#FECACA] rounded-xl shadow-2xs hover:shadow-md hover:border-red-300 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] flex-shrink-0" />
                <span>Zero AI Generation Permitted</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/80 border border-[#FECACA] rounded-xl shadow-2xs hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Team Authored Code</span>
              </div>
            </div>
          </div>

          {/* Right Column: White Information Card */}
          <div className="lg:col-span-6 text-left">
            <div className="bg-white border border-[#FECACA] rounded-2xl p-6 sm:p-10 shadow-xl shadow-red-900/5 hover:shadow-2xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
              
              {/* Corner badge */}
              <div className="flex items-center justify-between border-b border-red-100 pb-4 mb-6">
                <span className="text-xs font-mono font-black text-[#DC2626] tracking-widest uppercase">
                  COMPLIANCE NOTICE
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA] rounded-md">
                  STRICT ENFORCEMENT
                </span>
              </div>

              {/* Bold Visual Message */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-black text-[#991B1B] tracking-tight mb-1">
                  NO AI. NO PLAGIARISM.
                </h3>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-black text-[#DC2626] tracking-widest uppercase bg-red-50 px-2 py-0.5 rounded">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>BUILD YOUR OWN.</span>
                </div>
              </div>

              {/* Official Body Notice */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed my-4 font-normal">
                Use of AI will not be permitted during the hackathon. All submissions and prototypes must represent the team's own work. Plagiarism checks will be conducted, and any form of copied or plagiarized work may lead to disqualification.
              </p>

              {/* Action takeaway */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#991B1B]">
                <span>MANDATORY HACKATHON RULE</span>
                <span className="text-slate-500 font-medium">Verified by External Judges</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
