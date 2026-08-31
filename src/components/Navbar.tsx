import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../constants/eventData";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2.5 sm:py-4 lg:py-5 min-h-[64px] sm:min-h-[85px] lg:min-h-[95px]"
          : "bg-white border-b border-slate-100 py-3 sm:py-5 lg:py-6 min-h-[70px] sm:min-h-[92px] lg:min-h-[105px]"
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        
        {/* Left Side: SB Jain College Logo & Identification */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-2 sm:gap-3 lg:gap-3.5 group"
          >
            <div className="h-10 sm:h-14 lg:h-[68px] w-auto flex items-center justify-center p-1 sm:p-1.5 bg-white rounded-lg border border-slate-100 shadow-xs group-hover:border-slate-300 transition-colors">
              <img
                src="/assets/college-logo.png"
                alt="S.B. Jain Institute of Technology Logo"
                className="h-full w-auto max-h-8 sm:max-h-12 lg:max-h-16 object-contain"
              />
            </div>
            <div className="flex flex-col text-left justify-center">
              <span className="font-black text-xs sm:text-sm lg:text-base tracking-wider text-slate-900 uppercase leading-snug">
                S.B. JAIN INSTITUTE
              </span>
              <span className="hidden sm:inline text-[10px] lg:text-xs tracking-tight text-slate-500 font-medium">
                An Autonomous Institute • SIH Cell
              </span>
            </div>
          </a>
        </div>

        {/* Center Navigation Links (Desktop) - Breathable & Spaced */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 text-sm xl:text-[15px] font-bold tracking-wider transition-all rounded-md ${
                  isActive
                    ? "text-[#EA580C] bg-orange-50 font-black"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side: SIH Logo & Scaled CTA Button / Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 flex-shrink-0">
          {/* Official SIH Logo Container */}
          <div className="flex items-center h-10 sm:h-12 lg:h-14 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white rounded-lg border border-slate-200/80 shadow-xs">
            <img
              src="/assets/sih-logo.png"
              alt="Smart India Hackathon Logo"
              className="h-full w-auto max-h-8 sm:max-h-10 lg:max-h-12 object-contain"
            />
          </div>

          {/* Primary CTA (Desktop/Tablet) */}
          <a
            href="#preparation"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#preparation");
            }}
            className="hidden md:inline-flex items-center gap-2 h-10 sm:h-11 lg:h-12 px-4 sm:px-5 lg:px-6 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>PREPARE NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-700 hover:text-slate-900 lg:hidden rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[85px] bottom-0 bg-slate-900/40 backdrop-blur-xs z-50 flex flex-col justify-start">
          <div className="bg-white border-b border-slate-200 px-5 pt-3 pb-8 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-1.5 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`min-h-[48px] flex items-center px-4 py-3 text-base font-bold rounded-xl transition-all ${
                      isActive
                        ? "text-[#EA580C] bg-orange-50 font-black pl-5 border-l-4 border-[#EA580C]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              
              {/* Mobile Drawer CTA Button */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <a
                  href="#preparation"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#preparation");
                  }}
                  className="w-full min-h-[50px] flex items-center justify-center gap-2 px-5 py-3.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-base font-black uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform"
                >
                  <span>PREPARE NOW</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

