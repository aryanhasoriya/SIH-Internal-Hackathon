import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";
import { EVENT_INFO } from "../constants/eventData";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-[#FCFCFD]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Hackathon Poster Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Card / Framing */}
              <div className="relative bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-200/60 flex flex-col items-center overflow-hidden group hover:border-slate-300 hover:shadow-2xl transition-all duration-300">
                
                {/* Decorative background glow */}
                <div className="absolute -top-16 -left-16 w-36 h-36 bg-orange-100/60 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-green-100/60 rounded-full blur-2xl pointer-events-none" />
                
                {/* Top Badge Bar */}
                <div className="w-full flex items-center justify-between px-5 pt-4 pb-3 border-b border-slate-100 bg-slate-50/70 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-700">
                      OFFICIAL EVENT POSTER
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                    01 SEPT 2026
                  </span>
                </div>

                {/* Primary Official Poster Image */}
                <div className="relative w-full p-2.5 bg-slate-50/50 flex items-center justify-center">
                  <img
                    src="/assets/hackathon-poster.png"
                    alt="College Level Internal Hackathon 2026 Official Poster"
                    className="w-full h-auto object-contain rounded-xl shadow-xs group-hover:scale-[1.015] transition-transform duration-300"
                  />
                </div>

                {/* Bottom Spec Quick Bar */}
                <div className="w-full px-4 py-3 bg-white border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs relative z-10">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Venue</span>
                    <span className="font-bold text-slate-900 text-xs">MBA Seminar Hall</span>
                  </div>
                  <div className="p-2 bg-orange-50/70 rounded-lg border border-orange-100">
                    <span className="block text-[10px] text-orange-600 uppercase font-semibold">Timing</span>
                    <span className="font-bold text-orange-950 text-xs">11:00 AM – 5:30 PM</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Announcement */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200/80 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                COLLEGE SIH • INTERNAL SELECTION ROUND
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] mb-4">
              COLLEGE LEVEL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-[#C2410C] to-slate-900">
                INTERNAL HACKATHON
              </span> <br />
              <span className="text-slate-900 font-extrabold">2026</span>
            </h1>

            {/* Prominent Supporting Statement */}
            <div className="p-3.5 sm:p-4 my-4 bg-orange-50/70 border-l-4 border-[#EA580C] rounded-r-lg">
              <p className="font-bold text-slate-900 text-sm sm:text-base tracking-tight uppercase">
                "YOUR PERFORMANCE HERE DECIDES YOUR JOURNEY TO SMART INDIA HACKATHON 2026."
              </p>
            </div>

            {/* Event Date Chip */}
            <div className="flex items-center gap-3 my-4">
              <div className="px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-sm tracking-widest rounded-md">
                {EVENT_INFO.dateDisplay}
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                CENTRAL LEVEL SELECTION DAY
              </span>
            </div>

            {/* Description Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Present your idea. Demonstrate your working prototype. Impress the external judges. 
              Earn your place among the <strong className="text-slate-900 font-bold">Top 50 teams</strong> to advance towards SIH 2026.
            </p>

            {/* CTAs and Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => scrollToSection("about")}
                className="btn-primary text-sm tracking-wider uppercase font-bold"
              >
                <span>EXPLORE HACKATHON</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("process")}
                className="btn-secondary text-sm font-bold uppercase tracking-wider"
              >
                <span>VIEW SELECTION PROCESS</span>
              </button>
            </div>

            {/* Key Assurance Indicators */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Best 50 Teams Shortlisted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>External Judges Panel</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Functional Prototype Req.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
