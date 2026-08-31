import { useState, useEffect, useCallback } from "react";
import { Clock, Calendar, Sparkles } from "lucide-react";
import { HACKATHON_TARGET_ISO } from "../constants/eventData";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const Countdown = () => {
  // Target timestamp: 1 September 2026 10:30:00 AM IST (Asia/Kolkata)
  const targetTimestamp = new Date(HACKATHON_TARGET_ISO).getTime();

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = Date.now();
    const difference = targetTimestamp - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isExpired: false,
    };
  }, [targetTimestamp]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    // Immediate calculation on mount
    setTimeLeft(calculateTimeLeft());

    // Interval tick every second using real-time Date.now() to prevent drift
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Immediate sync when tab becomes visible or receives focus
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setTimeLeft(calculateTimeLeft());
      }
    };

    const handleFocus = () => {
      setTimeLeft(calculateTimeLeft());
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, [calculateTimeLeft]);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="py-8 sm:py-10 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Eyebrow */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/80 border border-slate-700/80 rounded-full text-[11px] sm:text-xs font-bold text-orange-400 tracking-wider uppercase mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{timeLeft.isExpired ? "HACKATHON DAY IS HERE!" : "COUNTDOWN TO HACKATHON DAY"}</span>
          </div>
          <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-100 flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-orange-500" />
            <span>01 SEPTEMBER 2026</span>
          </h2>
        </div>

        {timeLeft.isExpired ? (
          <div className="text-center p-6 sm:p-8 bg-slate-800/80 border border-orange-500/30 rounded-2xl max-w-xl mx-auto shadow-2xl">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400 mx-auto mb-3 animate-bounce" />
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
              HACKATHON DAY IS HERE!
            </h3>
            <p className="text-base sm:text-lg text-orange-400 font-bold tracking-widest uppercase">
              The College Level Internal Hackathon 2026 has begun.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="p-3 sm:p-5 md:p-6 bg-slate-800/90 border border-slate-700/70 rounded-xl text-center shadow-lg hover:-translate-y-1.5 hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 cursor-default"
              >
                <div className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight mb-1">
                  {String(Math.max(0, unit.value)).padStart(2, "0")}
                </div>
                <div className="text-[9px] min-[380px]:text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-4 sm:mt-6">
          <p className="text-xs text-slate-400 font-medium">
            {timeLeft.isExpired
              ? "The College Level Internal Hackathon 2026 has begun."
              : "Central internal selection round for Smart India Hackathon 2026"}
          </p>
        </div>

      </div>
    </section>
  );
};

