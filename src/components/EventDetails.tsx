import { Calendar, Layers, FileText, Cpu, Users, UserCheck, MapPin, Clock, Phone } from "lucide-react";
import { EVENT_INFO } from "../constants/eventData";

export const EventDetails = () => {
  const details = [
    {
      icon: <Calendar className="w-5 h-5 text-[#EA580C]" />,
      label: "DATE",
      value: EVENT_INFO.dateFormatted,
      subValue: "01 SEPTEMBER 2026",
      highlight: true,
    },
    {
      icon: <Clock className="w-5 h-5 text-[#EA580C]" />,
      label: "TIMING",
      value: EVENT_INFO.time,
      subValue: "FULL DAY HACKATHON SCHEDULE",
      highlight: true,
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#EA580C]" />,
      label: "VENUE",
      value: EVENT_INFO.venue,
      subValue: "CENTRAL COLLEGE CAMPUS",
      highlight: true,
    },
    {
      icon: <Layers className="w-5 h-5 text-slate-700" />,
      label: "LEVEL",
      value: "COLLEGE LEVEL",
      subValue: "INTERNAL HACKATHON",
    },
    {
      icon: <FileText className="w-5 h-5 text-slate-700" />,
      label: "PRESENTATION",
      value: "IDEA / PROBLEM STATEMENT",
      subValue: "+ PPT PITCH",
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-600" />,
      label: "PROTOTYPE",
      value: "WORKING / FUNCTIONAL",
      subValue: "LIVE DEMONSTRATION REQUIRED",
      highlightGreen: true,
    },
    {
      icon: <Users className="w-5 h-5 text-slate-700" />,
      label: "EVALUATION",
      value: "EXTERNAL JUDGES",
      subValue: "INDEPENDENT INDUSTRY EVALUATION",
    },
    {
      icon: <Phone className="w-5 h-5 text-slate-700" />,
      label: "FOR QUERIES CONTACT",
      value: EVENT_INFO.contact,
      subValue: "STUDENT & COORDINATOR HELPLINE",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-slate-700" />,
      label: "ORGANIZER & SPOC",
      value: "COLLEGE SIH CELL",
      subValue: `SPOC: ${EVENT_INFO.spocName}`,
    },
  ];

  return (
    <section id="details" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-800 tracking-wider uppercase mb-3">
            <span>OFFICIAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            EVENT DETAILS
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Verified facts and parameters from the official announcement.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {details.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                item.highlight
                  ? "bg-white border-[#EA580C] shadow-md ring-1 ring-orange-500/20 hover:border-[#EA580C] hover:ring-2"
                  : item.highlightGreen
                  ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20 hover:border-emerald-600 hover:ring-2"
                  : "bg-white border-slate-200 hover:border-orange-300 shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  {item.label}
                </span>
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 group-hover:bg-orange-50 transition-colors">
                  {item.icon}
                </div>
              </div>

              <div className="text-lg sm:text-xl font-black text-slate-950 mb-1">
                {item.value}
              </div>

              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                {item.subValue}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
