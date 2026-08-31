import { ShieldCheck, Target, Award, ArrowUpRight, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Editorial & Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Heading & Information */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/80 rounded-full text-xs font-bold text-[#EA580C] tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE SELECTION ROUND</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              THIS IS YOUR <br className="hidden sm:inline" />
              <span className="text-[#EA580C]">SELECTION ROUND.</span>
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              The College Level Internal Hackathon is the central internal selection round for{" "}
              <strong className="text-slate-900 font-bold">Smart India Hackathon 2026</strong>. 
              Teams will present their problem statement, idea and PPT, followed by a demonstration of their working or functional prototype.
            </p>

            {/* TOP 50 Callout Card */}
            <div className="mt-8 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none text-[160px] font-black leading-none text-slate-900">
                50
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-widest text-[#EA580C] uppercase block mb-1">
                  SELECTION GOAL
                </span>
                <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tighter mb-1">
                  TOP 50 TEAMS
                </div>
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mt-2">
                  The best <strong className="text-slate-950 font-bold">50 performing teams</strong> will be shortlisted based on their performance in this Internal Hackathon for participation in{" "}
                  <strong className="text-[#EA580C] font-bold">Smart India Hackathon (SIH) 2026</strong>.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <span>Centralized College Nomination</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EA580C]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom SIH Hackathon 2026 Isometric 3D Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-orange-50/50 via-slate-50 to-emerald-50/30 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center">
              
              {/* Badge */}
              <div className="w-full flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-600">
                  SIH 2026 CREATIVE IDENTITY
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#EA580C] text-white rounded">
                  BUILD & DEMO
                </span>
              </div>

              {/* The Edited Illustration */}
              <div className="w-full max-w-[340px] my-2 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="./assets/sih-hackathon-blocks.png"
                  alt="SIH Hackathon 2026 3D Blocks Illustration"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 w-full text-center">
                <p className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                  From Problem Statement to Working Code
                </p>
                <span className="text-[10px] text-slate-400 font-medium">
                  Internal Hackathon • 01 September 2026
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 hover:shadow-md transition-all text-left">
            <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#EA580C] mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Problem & Solution Pitch
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Teams must clearly present their problem statement, value proposition, and PPT approach with clarity and depth.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 hover:shadow-md transition-all text-left">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Working Prototype Mandatory
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Demonstrating a functional / working prototype is essential. Theoretical ideas without implementation cannot be shortlisted.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 hover:shadow-md transition-all text-left">
            <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              External Judge Evaluation
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              External industry and academic judges will objectively evaluate performance to shortlist the top 50 teams.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

