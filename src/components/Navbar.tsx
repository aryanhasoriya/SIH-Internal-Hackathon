import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../constants/eventData";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/95 border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: SB Jain College Logo & Identification */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="h-11 sm:h-12 w-auto flex items-center justify-center p-1 bg-white rounded-md border border-slate-100 shadow-sm group-hover:border-slate-300 transition-colors">
              <img
                src="/assets/college-logo.png"
                alt="S.B. Jain Institute of Technology Logo"
                className="h-full w-auto max-h-10 object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-bold text-xs tracking-wider text-slate-900 uppercase">
                S.B. Jain Institute
              </span>
              <span className="text-[10px] tracking-tight text-slate-500 font-medium">
                An Autonomous Institute • SIH Cell
              </span>
            </div>
          </a>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wide transition-all rounded-md ${
                  isActive
                    ? "text-[#EA580C] bg-orange-50/80 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side: SIH Logo & CTA Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Official SIH Logo */}
          <div className="flex items-center h-10 sm:h-11 px-2 py-0.5 bg-slate-50 rounded-md border border-slate-200/60">
            <img
              src="/assets/sih-logo.png"
              alt="Smart India Hackathon Logo"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Primary CTA (scrolls to preparation section) */}
          <a
            href="#preparation"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#preparation");
            }}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>PREPARE NOW</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:text-slate-900 lg:hidden rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 pt-2">
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
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-[#EA580C] bg-orange-50 font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="#preparation"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#preparation");
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#EA580C] text-white text-sm font-bold uppercase tracking-wider rounded-md shadow-md"
              >
                <span>PREPARE NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
