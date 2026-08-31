import { ArrowRight, Sparkles } from "lucide-react";
import { EVENT_INFO } from "../constants/eventData";

export const FinalCTA = () => {
  const scrollToTop = () => {
    const el = document.getElementById("preparation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual Background Lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 bg-slate-800/90 border border-slate-700 rounded-full text-[11px] sm:text-xs font-bold text-orange-400 uppercase tracking-widest mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR TIME TO BUILD</span>
        </div>

        {/* Big Heading */}
        <h2 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4">
          READY TO MAKE THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
            TOP 50?
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-sm min-[400px]:text-base sm:text-xl md:text-2xl text-slate-300 font-bold uppercase tracking-wider mb-4 sm:mb-6">
          YOUR IDEA. YOUR PROTOTYPE. YOUR OPPORTUNITY.
        </p>

        {/* Date Display */}
        <div className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 bg-slate-800 border border-slate-700 text-white font-mono font-black text-sm sm:text-lg md:text-xl tracking-widest rounded-lg mb-6 sm:mb-8 shadow-inner">
          {EVENT_INFO.dateDisplay}
        </div>

        {/* Main CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <button
            onClick={scrollToTop}
            className="btn-primary w-full sm:w-auto min-h-[50px] text-sm sm:text-base uppercase tracking-wider py-3.5 px-8 font-black"
          >
            <span>PREPARE FOR HACKATHON</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Logos & Official Notice Footer Box */}
        <div className="p-5 sm:p-8 bg-slate-800/80 border border-slate-700/80 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm hover:shadow-2xl hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="h-10 sm:h-12 bg-white p-1 sm:p-1.5 rounded-md hover:scale-105 transition-transform">
              <img
                src="/assets/college-logo.png"
                alt="College Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-6 w-px bg-slate-700" />
            <div className="h-10 sm:h-12 bg-white p-1 sm:p-1.5 rounded-md hover:scale-105 transition-transform">
              <img
                src="/assets/sih-logo.png"
                alt="SIH Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-300 italic mb-2 leading-relaxed">
            "This is an important selection round, so take the preparation seriously. Give your best and make your team among the Top 50! All the best!"
          </p>

          <div className="text-[11px] sm:text-xs font-bold text-orange-400 uppercase tracking-widest">
            College SIH, SPOC • {EVENT_INFO.spocName}
          </div>
        </div>

      </div>
    </section>
  );
};
