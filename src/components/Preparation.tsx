import { Target, Presentation, Cpu, MessageSquareCheck } from "lucide-react";
import { PREPARATION_CARDS } from "../constants/eventData";

export const Preparation = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case "KNOW YOUR PROBLEM":
        return <Target className="w-6 h-6 text-[#EA580C]" />;
      case "PERFECT YOUR PITCH":
        return <Presentation className="w-6 h-6 text-[#F97316]" />;
      case "BUILD YOUR PROTOTYPE":
        return <Cpu className="w-6 h-6 text-[#16A34A]" />;
      default:
        return <MessageSquareCheck className="w-6 h-6 text-slate-900" />;
    }
  };

  return (
    <section id="preparation" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-full text-xs font-bold text-red-700 tracking-wider uppercase mb-3">
            <span>ACTIONABLE GUIDANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            THIS IS NOT JUST <br className="hidden sm:inline" />
            <span className="text-[#EA580C]">ANOTHER PRESENTATION.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            "This is an important selection round. Take your preparation seriously."
          </p>
        </div>

        {/* 4 Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {PREPARATION_CARDS.map((card) => (
            <div
              key={card.number}
              className="p-6 bg-slate-50/70 border border-slate-200 rounded-2xl hover:bg-white hover:border-orange-300 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-black px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-800 shadow-2xs group-hover:border-orange-300">
                    {card.number}
                  </span>
                  <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-2xs group-hover:shadow-md transition-shadow">
                    {getIcon(card.title)}
                  </div>
                </div>

                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  {card.tag}
                </span>
                
                <h3 className="text-lg font-black text-slate-950 mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SPOC Note Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-orange-50 via-amber-50/60 to-emerald-50/60 border border-orange-200/80 rounded-2xl text-center max-w-3xl mx-auto shadow-sm hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300">
          <p className="text-base sm:text-lg font-bold text-slate-900">
            "Give your best and make your team among the Top 50!"
          </p>
          <span className="mt-2 block text-xs font-semibold text-slate-600 uppercase tracking-wider">
            — Ashwini Yerlekar, College SIH SPOC
          </span>
        </div>

      </div>
    </section>
  );
};
