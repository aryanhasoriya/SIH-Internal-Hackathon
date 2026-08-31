import { useState, useEffect, useRef } from "react";
import { Award, Zap, Trophy, ShieldCheck } from "lucide-react";
import { EVENT_INFO } from "../constants/eventData";

export const Top50 = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = EVENT_INFO.shortlistCount;
          const duration = 1600;
          const stepTime = Math.abs(Math.floor(duration / end));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="top50"
      ref={sectionRef}
      className="py-16 md:py-28 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big Typographic Counter */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-bold text-orange-400 tracking-wider uppercase mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>THE SELECTION TARGET</span>
            </div>

            <div className="font-mono font-black text-7xl sm:text-9xl md:text-[140px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 leading-none tracking-tighter mb-2">
              {count}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              TOP TEAMS <br />
              <span className="text-slate-400 font-medium text-2xl sm:text-3xl">
                SHORTLISTED FOR SIH 2026
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              {EVENT_INFO.shortlistText}
            </p>

            <div className="mt-6 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs sm:text-sm font-semibold text-orange-300 uppercase tracking-wide">
                "Only the strongest-performing teams will move forward to the Smart India Hackathon 2026 selection."
              </p>
            </div>
          </div>

          {/* Right Column: High-Impact Highlight Cards */}
          <div className="lg:col-span-6 space-y-4 text-left">
            
            <div className="p-6 bg-slate-900/90 border border-slate-800 hover:border-orange-500/60 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 border border-orange-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Central Institutional Nomination
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    The top 50 teams will receive official college nomination for submission to the Smart India Hackathon 2026 national portal.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Rigorous Performance Criteria
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Selection is strictly based on performance during the presentation and live working prototype demonstration evaluated by external judges.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Guidance & SIH SPOC Support
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Shortlisted teams will receive dedicated mentoring and support from the College SIH Cell led by SPOC Ashwini Yerlekar.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
